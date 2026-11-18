#!/usr/bin/env node
// 六站无障碍审计：门户 + 五轴，每站 3 条路由，移动端 390×844。
// 用法：node scripts/axe-sites.mjs
// 证据：work/shots/axe-mobile-sites-<版本>.json
import fs from 'node:fs';
import path from 'node:path';
import {chromium} from 'playwright-core';
import {startStaticServer} from '@universe-atlas/engine/serve';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const axes = ['space', 'time', 'temperature', 'elements', 'mass'];
const ports = {home: 11667, space: 4191, time: 4192, temperature: 4193, elements: 4194, mass: 4195, static: 4196};
const dirs = {home: dist, space: path.join(dist, 'space'), time: path.join(dist, 'time'), temperature: path.join(dist, 'temperature'), elements: path.join(dist, 'elements'), mass: path.join(dist, 'mass'), static: path.join(dist, 'static')};
const version = JSON.parse(fs.readFileSync(path.join(root, 'content/package.json'), 'utf8')).version;
const axeSource = fs.readFileSync(path.join(root, 'node_modules/axe-core/axe.min.js'), 'utf8');

function chromiumPath() {
  if (process.env.AXE_CHROMIUM) return process.env.AXE_CHROMIUM;
  const cache = path.join(process.env.LOCALAPPDATA || '', 'ms-playwright');
  let dirs = [];
  try {
    dirs = fs.readdirSync(cache).filter((name) => /^chromium-\d+$/.test(name)).sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]));
  } catch {}
  for (const dir of dirs) for (const sub of ['chrome-win64/chrome.exe', 'chrome-win/chrome.exe']) {
    const file = path.join(cache, dir, sub);
    if (fs.existsSync(file)) return file;
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

const servers = [];
for (const name of ['home', ...axes]) {
  const server = startStaticServer({root: dirs[name], port: ports[name]});
  await new Promise((resolve, reject) => { server.once('listening', resolve); server.once('error', reject); });
  servers.push(server);
}

const routes = [
  {site: 'home', name: 'portal-home', path: '/'},
  {site: 'home', name: 'portal-library', path: '/library/'},
  {site: 'home', name: 'portal-learning', path: '/learning/'},
  {site: 'home', name: 'legal-home', path: '/legal/'},
  {site: 'home', name: 'legal-terms', path: '/legal/terms/'},
  {site: 'elements', name: 'legal-station', path: '/legal/disclaimer/'}
];
for (const axis of axes) {
  const entries = JSON.parse(fs.readFileSync(path.join(dirs[axis], 'entries.json'), 'utf8')).filter((entry) => entry.id.startsWith(axis + '.'));
  const picks = [entries[0], entries[Math.floor(entries.length / 2)]];
  routes.push({site: axis, name: axis + '-home', path: '/'});
  for (const entry of picks) routes.push({site: axis, name: `${axis}-${entry.id.split('.')[1]}`, path: `/entry/${axis}/${entry.id.split('.')[1]}/`});
}

const browser = await chromium.launch({executablePath: chromiumPath(), headless: true});
const context = await browser.newContext({viewport: {width: 390, height: 844}, deviceScaleFactor: 2, isMobile: true, hasTouch: true, reducedMotion: 'reduce'});
const results = [];
for (const route of routes) {
  const port = ports[route.site];
  const page = await context.newPage();
  try {
    await page.goto(`http://127.0.0.1:${port}${route.path}`, {waitUntil: 'networkidle', timeout: 60000});
    await page.addScriptTag({content: axeSource});
    const violations = await page.evaluate(async () => {
      const run = await window.axe.run(document, {runOnly: {type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']}});
      return run.violations.map((violation) => ({id: violation.id, impact: violation.impact, help: violation.help, nodes: violation.nodes.map((node) => ({target: node.target, summary: node.failureSummary}))}));
    });
    results.push({...route, violations});
    console.log(`${route.site.padEnd(12)} ${route.path.padEnd(46)} ${violations.length ? violations.length + ' 项' : '0 违规'}`);
  } catch (error) {
    results.push({...route, error: error.message});
    console.error(`${route.site} ${route.path}: ${error.message}`);
  } finally {
    await page.close();
  }
}
await browser.close();
for (const server of servers) server.close();

const violations = results.reduce((sum, item) => sum + (item.violations?.length || 0), 0);
const errors = results.filter((item) => item.error).length;
const output = {
  version, generatedAt: new Date().toISOString(), viewport: '390×844 @2x mobile',
  engine: 'axe-core ' + JSON.parse(fs.readFileSync(path.join(root, 'node_modules/axe-core/package.json'), 'utf8')).version,
  standard: 'WCAG 2.0/2.1 A+AA tags',
  sites: Object.fromEntries(['home', ...axes].map((site) => [site, results.filter((item) => item.site === site).length])),
  routes: results.length, violations, errors, results
};
const file = path.join(root, 'work', 'shots', `axe-mobile-sites-${version}.json`);
fs.mkdirSync(path.dirname(file), {recursive: true});
fs.writeFileSync(file, JSON.stringify(output, null, 2));
console.log(`\n${results.length} 路由：${violations} 项违规，${errors} 个加载错误。证据：${path.relative(root, file)}`);
if (violations || errors) process.exitCode = 1;
