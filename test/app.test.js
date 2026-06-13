const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const { normalizeProgressState } = require('../script.js');

test('index.html does not contain duplicate id attributes', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);

  assert.deepStrictEqual(duplicates, []);
});

test('normalizeProgressState fills missing saved-state fields with defaults', () => {
  const progress = normalizeProgressState({ completedTests: { phonetics: 80 } });

  assert.deepStrictEqual(progress, {
    favorites: [],
    completedTests: { phonetics: 80 },
    totalTestsCount: 0,
    scoresSum: 0,
  });
});
