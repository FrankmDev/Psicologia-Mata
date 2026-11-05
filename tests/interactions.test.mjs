import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

// Unit tests with minimal DOM doubles, not browser automation or visual validation.
function componentScript(file) {
  const source = readFileSync(new URL(`../src/components/${file}.astro`, import.meta.url), 'utf8');
  const script = /<script>([\s\S]*?)<\/script>/.exec(source)?.[1];
  assert.ok(script);
  return ts.transpileModule(script, { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;
}

function headerFixture() {
  let document;
  function element() {
    const classes = new Set();
    const attributes = new Map();
    const listeners = new Map();
    return {
      inert: false, style: {},
      classList: { add: (...values) => values.forEach((value) => classes.add(value)),
        remove: (...values) => values.forEach((value) => classes.delete(value)), contains: (value) => classes.has(value) },
      setAttribute(key, value) { attributes.set(key, value); if (key === 'inert') this.inert = true; },
      removeAttribute(key) { attributes.delete(key); if (key === 'inert') this.inert = false; },
      getAttribute: (key) => attributes.get(key),
      addEventListener: (key, handler) => listeners.set(key, handler),
      removeEventListener: (key) => listeners.delete(key),
      emit: (key, event = {}) => listeners.get(key)?.(event),
      focus() { document.activeElement = this; },
    };
  }
  const ids = Object.fromEntries(['header', 'header-bg', 'menu-toggle', 'mobile-menu', 'menu-close', 'menu-line-1', 'menu-line-2'].map((id) => [id, element()]));
  const links = [element(), element()];
  const footer = element();
  const background = [element(), element(), element(), element()];
  background[1].inert = true; // Preserve an unrelated pre-existing inert state.
  const logo = element();
  const menu = ids['mobile-menu'];
  menu.inert = true;
  menu.querySelector = () => links[0];
  menu.querySelectorAll = () => [ids['menu-close'], ...links];
  ids.header.contains = (target) => [ids['menu-toggle'], ids['menu-close'], ...links, logo].includes(target);
  ids.header.querySelector = () => logo;
  const docListeners = new Map();
  document = {
    body: { style: {} }, activeElement: null,
    getElementById: (id) => ids[id], querySelector: () => footer,
    querySelectorAll: (selector) => selector === '.mobile-link' ? links : background,
    addEventListener: (key, handler) => docListeners.set(key, handler),
    removeEventListener: (key) => docListeners.delete(key),
  };
  const winListeners = new Map();
  const window = { scrollY: 0, desktop: false, matchMedia: () => ({ matches: window.desktop }),
    addEventListener: (key, handler) => winListeners.set(key, handler), removeEventListener: (key) => winListeners.delete(key) };
  const frames = [];
  runInNewContext(componentScript('Header'), { document, window, requestAnimationFrame: (callback) => frames.push(callback) });
  const flush = () => { while (frames.length) frames.shift()(); };
  const key = (key, shiftKey = false) => { let prevented = false;
    docListeners.get('keydown')({ key, shiftKey, preventDefault() { prevented = true; } }); return prevented; };
  return { ids, document, window, links, background, logo, menu, flush, key, winListeners };
}

test('mobile menu isolates the background, traps focus and restores focus on Escape', () => {
  const f = headerFixture();
  f.ids['menu-toggle'].emit('click'); f.flush();
  assert.equal(f.ids['menu-toggle'].getAttribute('aria-expanded'), 'true');
  assert.equal(f.menu.inert, false);
  assert.ok(f.background.every((element) => element.inert));
  assert.equal(f.document.activeElement, f.links[0]);
  f.links.at(-1).focus();
  assert.equal(f.key('Tab'), true);
  assert.equal(f.document.activeElement, f.ids['menu-close']);
  assert.equal(f.key('Tab', true), true);
  assert.equal(f.document.activeElement, f.links.at(-1));
  assert.equal(f.key('Escape'), true);
  assert.equal(f.document.activeElement, f.ids['menu-toggle']);
  assert.equal(f.document.body.style.overflow, '');
  assert.equal(f.menu.inert, true);
  assert.deepEqual(f.background.map((element) => element.inert), [false, true, false, false]);
});

test('closing before an animation frame cannot focus a hidden menu', () => {
  const f = headerFixture();
  f.ids['menu-toggle'].emit('click');
  f.ids['menu-close'].emit('click'); f.flush();
  assert.equal(f.document.activeElement, f.ids['menu-toggle']);
  assert.equal(f.menu.getAttribute('aria-hidden'), 'true');
});

test('changing to desktop closes the menu and focuses a visible header link', () => {
  const f = headerFixture();
  f.ids['menu-toggle'].emit('click'); f.flush();
  f.window.desktop = true; f.winListeners.get('resize')();
  assert.equal(f.menu.inert, true);
  assert.equal(f.document.activeElement, f.logo);
  f.window.scrollY = 200; f.winListeners.get('scroll')();
  assert.equal(f.ids.header.classList.contains('-translate-y-full'), false);
});

function revealFixture(reducedMotion = false) {
  const elements = Array.from({ length: 2 }, () => {
    const classes = new Set();
    return { dataset: { revealDelay: '700' }, style: { setProperty(key, value) { this[key] = value; } },
      classList: { contains: (value) => classes.has(value), add: (value) => classes.add(value) } };
  });
  let callback;
  const observed = new Set();
  class IntersectionObserver {
    constructor(handler) { callback = handler; }
    observe(element) { observed.add(element); }
    unobserve(element) { observed.delete(element); }
    disconnect() { observed.clear(); }
  }
  runInNewContext(componentScript('RevealAnimation'), {
    document: { readyState: 'complete', querySelectorAll: () => elements, addEventListener() {} },
    window: { matchMedia: () => ({ matches: reducedMotion }), IntersectionObserver },
    IntersectionObserver, requestAnimationFrame: (handler) => handler(),
  });
  return { elements, observed, callback };
}

test('separate observer batches are both handled and reveal delay is bounded', () => {
  const f = revealFixture();
  for (const target of f.elements) f.callback([{ target, isIntersecting: true }]);
  assert.ok(f.elements.every((element) => element.classList.contains('is-visible')));
  assert.ok(f.elements.every((element) => element.style['--reveal-delay'] === '200ms'));
  assert.equal(f.observed.size, 0);
});

test('reduced motion does not register reveal observations', () => {
  const f = revealFixture(true);
  assert.equal(f.callback, undefined);
  assert.equal(f.observed.size, 0);
});
