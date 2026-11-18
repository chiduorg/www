#!/usr/bin/env node
// 元素站无障碍审计：Playwright + axe-core，移动端 390×844。
// 覆盖周期表、元素详情、7 个闭壳 hub、6 个解释页、40 条 A 级条目。
// 用法：node scripts/axe-elements.mjs [--base http://127.0.0.1:4188]
// 证据输出：work/shots/axe-mobile-elements-<版本>.json
import fs from 'node:fs';
import path from 'node:path';
import {chromium} from 'playwright-core';

const root = path.resolve(import.meta.dirname, '..');
const argIndex = process.argv.indexOf('--base');
const base = (argIndex >= 0 ? process.argv[argIndex + 1] : process.env.AXE_BASE || 'http://127.0.0.1:4188').replace(/\/$/, '');
const version = JSON.parse(fs.readFileSync(path.join(root, 'content', 'package.json'), 'utf8')).version;
const axeSource = fs.readFileSync(path.join(root, 'node_modules', 'axe-core', 'axe.min.js'), 'utf8');

function chromiumPath() {
  if (process.env.AXE_CHROMIUM) return process.env.AXE_CHROMIUM;
  const cache = path.join(process.env.LOCALAPPDATA || '', 'ms-playwright');
  let dirs = [];
  try {
    dirs = fs.readdirSync(cache).filter((name) => /^chromium-\d+$/.test(name)).sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]));
  } catch {}
  for (const dir of dirs) {
    for (const sub of ['chrome-win64/chrome.exe', 'chrome-win/chrome.exe']) {
      const file = path.join(cache, dir, sub);
      if (fs.existsSync(file)) return file;
    }
  }
  const system = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    path.join(process.env.LOCALAPPDATA || '', 'Google\\Chrome\\Application\\chrome.exe'),
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
  ];
  for (const file of system) if (fs.existsSync(file)) return file;
  return undefined;
}

const explains = ['explain-configuration', 'explain-energy-levels', 'explain-lanthanide-contraction', 'explain-nuclear-stability', 'explain-periodic-law', 'explain-shielding'];
const entrySlugs = fs.readdirSync(path.join(root, 'content', 'entries', 'elements'))
  .filter((name) => name.endsWith('.md') && !name.startsWith('explain-'))
  .map((name) => name.slice(0, -3))
  .sort();

const routes = [
  {name: 'periodic-table', path: '/elements/'},
  {name: 'detail-fe', path: '/elements/?z=26'},
  {name: 'detail-og', path: '/elements/?z=118'},
  ...explains.map((slug) => ({name: 'explain-' + slug.replace('explain-', ''), path: `/entry/elements/${slug}/`})),
  ...entrySlugs.map((slug) => ({name: 'entry-' + slug, path: `/entry/elements/${slug}/`}))
];

const browser = await chromium.launch({executablePath: chromiumPath(), headless: true});
const context = await browser.newContext({
  viewport: {width: 390, height: 844},
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
  reducedMotion: 'reduce'
});
const results = [];
for (const route of routes) {
  const page = await context.newPage();
  try {
    await page.goto(base + route.path, {waitUntil: 'networkidle', timeout: 30000});
    if (route.path.startsWith('/elements/') && !route.path.startsWith('/elements/?entry')) {
      await page.waitForSelector('.el-cell', {timeout: 10000});
    }
    await page.addScriptTag({content: axeSource});
    const result = await page.evaluate(async () => {
      const run = await window.axe.run(document, {runOnly: {type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']}});
      return run.violations.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        help: violation.help,
        nodes: violation.nodes.map((node) => ({target: node.target, summary: node.failureSummary}))
      }));
    });
    results.push({name: route.name, path: route.path, violations: result});
    console.log(`${route.name.padEnd(36)} ${route.path.padEnd(42)} ${result.length ? result.length + ' 项' : '0 违规'}`);
  } catch (error) {
    results.push({name: route.name, path: route.path, error: error.message});
    console.error(`${route.name}: ${error.message}`);
  } finally {
    await page.close();
  }
}
await browser.close();

const violations = results.reduce((sum, item) => sum + (item.violations?.length || 0), 0);
const errors = results.filter((item) => item.error).length;
const output = {
  version,
  generatedAt: new Date().toISOString(),
  base,
  viewport: '390×844 @2x mobile',
  engine: 'axe-core ' + JSON.parse(fs.readFileSync(path.join(root, 'node_modules', 'axe-core', 'package.json'), 'utf8')).version,
  standard: 'WCAG 2.0/2.1 A+AA tags',
  routes: results.length,
  violations,
  errors,
  results
};
const file = path.join(root, 'work', 'shots', `axe-mobile-elements-${version}.json`);
fs.mkdirSync(path.dirname(file), {recursive: true});
fs.writeFileSync(file, JSON.stringify(output, null, 2));
console.log(`\n${results.length} 路由：${violations} 项违规，${errors} 个加载错误。证据：${path.relative(root, file)}`);
if (violations || errors) process.exitCode = 1;
