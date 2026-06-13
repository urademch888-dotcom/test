const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const { normalizeProgressState, createDefaultProgressState } = require('../script.js');

// --- HTML Structure Tests ---

test('index.html does not contain duplicate id attributes', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  assert.deepStrictEqual(duplicates, []);
});

test('index.html has viewport meta tag for iPad', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert.ok(html.includes('viewport'), 'Missing viewport meta tag');
  assert.ok(html.includes('width=device-width'), 'Viewport should set width=device-width');
});

test('index.html links to style.css and script.js', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert.ok(html.includes('style.css'), 'Missing style.css link');
  assert.ok(html.includes('script.js'), 'Missing script.js script');
});

test('index.html has all required screen sections', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  const screens = ['screen-home', 'screen-topics', 'screen-conspect', 'screen-quiz', 'screen-results'];
  screens.forEach(id => {
    assert.ok(html.includes(`id="${id}"`), `Missing screen: ${id}`);
  });
});

test('index.html has correct lang attribute', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert.ok(html.includes('lang="uk"'), 'HTML lang should be "uk"');
});

test('index.html has theme toggle button', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert.ok(html.includes('id="theme-toggle"'), 'Missing theme toggle button');
});

test('index.html has favorites modal', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert.ok(html.includes('id="modal-favorites"'), 'Missing favorites modal');
});

// --- createDefaultProgressState Tests ---

test('createDefaultProgressState returns correct defaults', () => {
  const state = createDefaultProgressState();
  assert.deepStrictEqual(state, {
    favorites: [],
    completedTests: {},
    totalTestsCount: 0,
    scoresSum: 0,
  });
});

test('createDefaultProgressState returns fresh object each call', () => {
  const a = createDefaultProgressState();
  const b = createDefaultProgressState();
  assert.notStrictEqual(a, b);
  a.favorites.push('test');
  assert.deepStrictEqual(b.favorites, []);
});

// --- normalizeProgressState Tests ---

test('normalizeProgressState fills missing saved-state fields with defaults', () => {
  const progress = normalizeProgressState({ completedTests: { phonetics: 80 } });
  assert.deepStrictEqual(progress, {
    favorites: [],
    completedTests: { phonetics: 80 },
    totalTestsCount: 0,
    scoresSum: 0,
  });
});

test('normalizeProgressState with empty object returns defaults', () => {
  const progress = normalizeProgressState({});
  assert.deepStrictEqual(progress, createDefaultProgressState());
});

test('normalizeProgressState with no argument returns defaults', () => {
  const progress = normalizeProgressState();
  assert.deepStrictEqual(progress, createDefaultProgressState());
});

test('normalizeProgressState preserves valid favorites', () => {
  const progress = normalizeProgressState({ favorites: ['phonetics', 'orthoepy'] });
  assert.deepStrictEqual(progress.favorites, ['phonetics', 'orthoepy']);
});

test('normalizeProgressState resets non-array favorites', () => {
  const progress = normalizeProgressState({ favorites: 'not-an-array' });
  assert.deepStrictEqual(progress.favorites, []);
});

test('normalizeProgressState resets non-object completedTests', () => {
  const progress = normalizeProgressState({ completedTests: 'invalid' });
  assert.deepStrictEqual(progress.completedTests, {});
});

test('normalizeProgressState preserves valid completedTests', () => {
  const progress = normalizeProgressState({
    completedTests: { phonetics: 80, orthoepy: 95 },
  });
  assert.deepStrictEqual(progress.completedTests, { phonetics: 80, orthoepy: 95 });
});

test('normalizeProgressState preserves valid numeric fields', () => {
  const progress = normalizeProgressState({ totalTestsCount: 5, scoresSum: 420 });
  assert.strictEqual(progress.totalTestsCount, 5);
  assert.strictEqual(progress.scoresSum, 420);
});

test('normalizeProgressState resets NaN totalTestsCount', () => {
  const progress = normalizeProgressState({ totalTestsCount: NaN });
  assert.strictEqual(progress.totalTestsCount, 0);
});

test('normalizeProgressState resets Infinity scoresSum', () => {
  const progress = normalizeProgressState({ scoresSum: Infinity });
  assert.strictEqual(progress.scoresSum, 0);
});

test('normalizeProgressState resets negative totalTestsCount', () => {
  const progress = normalizeProgressState({ totalTestsCount: -5 });
  assert.strictEqual(progress.totalTestsCount, 0);
});

test('normalizeProgressState does not mutate input', () => {
  const input = { favorites: ['a'], completedTests: { x: 1 }, totalTestsCount: 2, scoresSum: 50 };
  const frozenInput = JSON.parse(JSON.stringify(input));
  normalizeProgressState(input);
  assert.deepStrictEqual(input, frozenInput);
});

// --- CSS File Tests ---

test('style.css exists and is non-empty', () => {
  const cssPath = path.join(__dirname, '..', 'style.css');
  assert.ok(fs.existsSync(cssPath), 'style.css should exist');
  const content = fs.readFileSync(cssPath, 'utf8');
  assert.ok(content.length > 100, 'style.css should not be empty');
});

test('style.css contains iPad media query', () => {
  const css = fs.readFileSync(path.join(__dirname, '..', 'style.css'), 'utf8');
  assert.ok(css.includes('@media'), 'style.css should contain media queries for responsive design');
});

test('style.css defines glass/blur styles', () => {
  const css = fs.readFileSync(path.join(__dirname, '..', 'style.css'), 'utf8');
  assert.ok(css.includes('backdrop-filter'), 'style.css should use backdrop-filter for glass effect');
});

// --- Database Structure Tests ---

test('script.js exports expected functions', () => {
  const script = require('../script.js');
  assert.strictEqual(typeof script.createDefaultProgressState, 'function');
  assert.strictEqual(typeof script.normalizeProgressState, 'function');
});

// --- package.json Tests ---

test('package.json has correct test script', () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
  assert.ok(pkg.scripts.test, 'package.json should define test script');
  assert.ok(pkg.devDependencies.jsdom, 'jsdom should be a dev dependency');
});
