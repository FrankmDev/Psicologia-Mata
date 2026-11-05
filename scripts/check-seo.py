"""Check the static build without a browser or third-party dependencies."""

from collections import Counter
from html.parser import HTMLParser
import json
from pathlib import Path
import sys
from urllib.parse import unquote, urljoin, urlsplit
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parents[1] / "dist"
ORIGIN = "https://matacalapsicologia.es"
NS = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}


class Page(HTMLParser):
    def __init__(self, file):
        super().__init__(convert_charrefs=True)
        self.ids = []
        self.refs = []
        self.links = []
        self.meta = {}
        self.canonicals = []
        self.schemas = []
        self.scripts = []
        self.images = []
        self.assets = []
        self.iframes = []
        self.controls = []
        self.labels = []
        self.language = None
        self.main_count = 0
        self.headings = []
        self.post_navigation_links = []
        self.title = ""
        self._in_title = False
        self._in_label = False
        self._script = None
        self._in_post_navigation = False
        self.feed(file.read_text(encoding="utf-8"))

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if tag == "html":
            self.language = attrs.get("lang")
        if tag == "main":
            self.main_count += 1
        if tag == "iframe":
            self.iframes.append(attrs)
        if tag == "label":
            self.labels.append(attrs.get("for"))
            self._in_label = True
        if tag in ("input", "select", "textarea") and attrs.get("type") != "hidden":
            self.controls.append(attrs)
            if self._in_label and attrs.get("id"):
                self.labels.append(attrs["id"])
        if tag in ("img", "script") and attrs.get("src"):
            self.assets.append(attrs["src"])
        if tag == "link" and attrs.get("rel") in ("stylesheet", "preload", "icon", "apple-touch-icon", "manifest"):
            self.assets.append(attrs.get("href", ""))
        if attrs.get("id"):
            self.ids.append(attrs["id"])
        for name in ("aria-labelledby", "aria-describedby", "aria-controls"):
            self.refs.extend((name, value) for value in attrs.get(name, "").split())
        if tag == "a" and attrs.get("href"):
            self.links.append(attrs["href"])
            if self._in_post_navigation:
                self.post_navigation_links.append(attrs["href"])
        if tag == "nav" and attrs.get("aria-label") == "Navegación entre artículos":
            self._in_post_navigation = True
        if tag == "meta":
            self.meta[attrs.get("name", attrs.get("property", ""))] = attrs.get("content", "")
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs.get("href"))
        if tag == "img":
            self.images.append(attrs)
        if tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
            self.headings.append((tag, attrs.get("id")))
        if tag == "title":
            self._in_title = True
        if tag == "script":
            self._script = {**attrs, "text": ""}

    def handle_data(self, data):
        if self._script is not None:
            self._script["text"] += data
        if self._in_title:
            self.title += data

    def handle_endtag(self, tag):
        if tag == "label":
            self._in_label = False
        if tag == "nav":
            self._in_post_navigation = False
        if tag == "title":
            self._in_title = False
        if tag == "script" and self._script is not None:
            if self._script.get("type") == "application/ld+json":
                self.schemas.append(json.loads(self._script["text"]))
            else:
                self.scripts.append(self._script)
            self._script = None


def main():
    pages = {}
    for file in ROOT.rglob("*.html"):
        relative = file.relative_to(ROOT).as_posix()
        path = "/" + relative.removesuffix("index.html") if relative.endswith("index.html") else "/" + relative
        pages[path] = Page(file)
    if not pages:
        sys.exit("No static pages found. Run npm run build first.")

    sitemap = {}
    for file in ROOT.glob("sitemap-[0-9]*.xml"):
        for entry in ET.parse(file).findall("s:url", NS):
            sitemap[entry.findtext("s:loc", namespaces=NS)] = entry.findtext("s:lastmod", namespaces=NS)

    errors = []

    def check(condition, path, message):
        if not condition:
            errors.append(f"{path}: {message}")

    titles = {}
    drafts = set()
    article_count = 0
    for path, page in pages.items():
        check(bool(page.title.strip()), path, "missing title")
        check(bool(page.meta.get("description")), path, "missing description")
        check(page.language == "es", path, "missing Spanish document language")
        check(page.main_count == 1, path, "expected one main landmark")
        check("width=device-width" in page.meta.get("viewport", ""), path, "missing responsive viewport")
        check(len([tag for tag, _ in page.headings if tag == "h1"]) == 1, path, "expected one h1")
        canonical_path = "/404/" if path == "/404.html" else path
        check(page.canonicals == [ORIGIN + canonical_path], path, "canonical does not match route")
        check(page.meta.get("og:url") == ORIGIN + canonical_path, path, "Open Graph URL mismatch")
        for value, count in Counter(page.ids).items():
            check(count == 1, path, f"duplicate id: {value}")
        for name, value in page.refs:
            check(value in page.ids, path, f"{name} points to missing id: {value}")
        for asset in page.assets:
            url = urlsplit(urljoin(ORIGIN + path, asset))
            if url.netloc == urlsplit(ORIGIN).netloc:
                check((ROOT / unquote(url.path).lstrip("/")).is_file(), path, f"missing local asset: {asset}")
        for image in page.images:
            check("alt" in image, path, "image without alt")
            check(all(str(image.get(key, "")).isdigit() and int(image[key]) > 0 for key in ("width", "height")), path, "image without intrinsic dimensions")
        for control in page.controls:
            check(control.get("id") in page.labels or control.get("aria-label") or control.get("aria-labelledby"), path, "control without an accessible label")
        previous_level = 0
        for tag, _ in page.headings:
            level = int(tag[1])
            check(level <= previous_level + 1, path, f"heading skips a level: {tag} after h{previous_level}")
            previous_level = level
        for href in page.links:
            url = urlsplit(urljoin(ORIGIN + path, href))
            if url.netloc != urlsplit(ORIGIN).netloc or url.scheme not in ("http", "https"):
                continue
            target = pages.get(url.path)
            if target is None:
                check((ROOT / unquote(url.path).lstrip("/")).is_file(), path, f"missing internal link: {href}")
            elif url.fragment:
                check(unquote(url.fragment) in target.ids, path, f"missing anchor: {href}")
        for image_url in (page.meta.get("og:image"), page.meta.get("twitter:image")):
            if image_url:
                url = urlsplit(image_url)
                check(url.scheme == "https" and bool(url.netloc), path, "social image must be absolute HTTPS")
                if url.netloc == urlsplit(ORIGIN).netloc:
                    check((ROOT / unquote(url.path).lstrip("/")).is_file(), path, "missing social image asset")

        noindex = "noindex" in page.meta.get("robots", "")
        if path.startswith("/servicios/") and path != "/servicios/":
            check(noindex, path, "service landing must remain noindex pending clinical review")
        if noindex:
            check(ORIGIN + path not in sitemap, path, "noindex URL appears in sitemap")
        else:
            check(ORIGIN + path in sitemap, path, "indexable URL absent from sitemap")
            check(page.title not in titles, path, f"duplicate title with {titles.get(page.title)}")
            titles[page.title] = path

        is_article = path.startswith("/blog/") and path.count("/") == 3
        if is_article:
            article_count += 1
            hero = [image for image in page.images if image.get("aria-hidden") == "true"]
            check(bool(hero) and hero[0].get("loading") == "eager", path, "article hero must not be lazy")
            check(bool(hero) and hero[0].get("fetchpriority") == "high", path, "article hero must have high fetch priority")
            if noindex:
                drafts.add(path)
                check(not page.meta.get("author") and not page.meta.get("article:author"), path, "draft claims professional authorship")
                check(not any(schema.get("@type") == "BlogPosting" for schema in page.schemas), path, "draft must not claim published BlogPosting")
                check(not page.meta.get("article:published_time"), path, "draft has publication date")
                check(not page.post_navigation_links, path, "draft has invented previous/next article")
            else:
                article = next((schema for schema in page.schemas if schema.get("@type") == "BlogPosting"), {})
                modified = article.get("dateModified", "")[:10]
                check(bool(article.get("author", {}).get("name")), path, "missing article author")
                check(bool(modified) and (sitemap.get(ORIGIN + path) or "")[:10] == modified, path, "sitemap lastmod differs from article dateModified")
                check(page.meta.get("article:modified_time") == article.get("dateModified"), path, "Open Graph/schema modification dates differ")
        for schema in page.schemas:
            check(schema.get("@context") == "https://schema.org", path, "unexpected schema context")
            if schema.get("@type") in ("Person", "ProfessionalService"):
                check("inLanguage" not in schema, path, "inLanguage is not a property of this schema type")
            if schema.get("@type") == "OfferCatalog":
                check(all("position" not in item for item in schema.get("itemListElement", [])), path, "position belongs to ListItem, not Offer")
            if schema.get("@type") == "BreadcrumbList":
                urls = [item["item"] for item in schema["itemListElement"]]
                check(len(urls) == len(set(urls)), path, "duplicate breadcrumb destination")
        if path.startswith("/blog/categoria/"):
            check(("h1", "category-heading") in page.headings, path, "category landmark must label its h1")

    for url in sitemap:
        check(urlsplit(url).path in pages, url, "sitemap URL has no generated page")
    for path, page in pages.items():
        if path != "/blog/" and not path.startswith("/blog/categoria/"):
            continue
        # Las categorías con un solo artículo son noindex y no van al sitemap.
        if "noindex" in page.meta.get("robots", ""):
            continue
        listing = next((schema for schema in page.schemas if schema.get("@type") == "ItemList"), {})
        dates = []
        for item in listing.get("itemListElement", []):
            target = pages[urlsplit(item["url"]).path]
            article = next((schema for schema in target.schemas if schema.get("@type") == "BlogPosting"), {})
            dates.append(article.get("dateModified", "")[:10])
        check(bool(dates) and (sitemap.get(ORIGIN + path) or "")[:10] == max(dates), path, "listing lastmod ignores latest article update")
    for path, page in pages.items():
        if "noindex" not in page.meta.get("robots", ""):
            check(not drafts.intersection(page.links), path, "public page links to a draft article")

    contact = pages["/contacto/"]
    contact_html = (ROOT / "contacto/index.html").read_text(encoding="utf-8")
    check('data-disabled="true"' in contact_html and "<fieldset disabled" in contact_html, "/contacto/", "contact form must remain disabled")
    check(all(any(link.startswith(prefix) for link in contact.links) for prefix in ("tel:", "mailto:", "https://wa.me/")), "/contacto/", "missing operational contact channel")
    check(not any("new FormData" in script["text"] for script in contact.scripts), "/contacto/", "disabled form still ships submission JavaScript")
    check(not contact.iframes, "/contacto/", "map must not connect to Google before the user's decision")
    inline_bytes = sum(len(script["text"].encode()) for script in contact.scripts if not script.get("src"))
    print(f"Checked {len(pages)} pages, {len(sitemap)} sitemap URLs and {article_count} article heroes; contact inline JS: {inline_bytes} bytes.")
    if errors:
        print("\n".join(errors))
        sys.exit(f"Failed: {len(errors)} checks.")
    print("SEO, internal links, accessible references and draft/contact safeguards passed.")


if __name__ == "__main__":
    main()
