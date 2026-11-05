import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

test('two corrected references retain the identifiers matched to their titles in Europe PMC', () => {
  // Bibliographic identity checked 2026-11-05, not a clinical endorsement or live network test.
  const mindfulness = readFileSync(new URL('../dist/blog/atencion-plena-mindfulness-psicologia/index.html', import.meta.url), 'utf8');
  const olderAdults = readFileSync(new URL('../dist/blog/ansiedad-personas-mayores/index.html', import.meta.url), 'utf8');
  assert.match(mindfulness, /https:\/\/pubmed\.ncbi\.nlm\.nih\.gov\/36350591\//);
  assert.doesNotMatch(mindfulness, /pubmed\.ncbi\.nlm\.nih\.gov\/36102337\//);
  assert.match(olderAdults, /https:\/\/pubmed\.ncbi\.nlm\.nih\.gov\/22283717\//);
  assert.doesNotMatch(olderAdults, /pubmed\.ncbi\.nlm\.nih\.gov\/21709684\//);
});
