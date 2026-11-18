#!/usr/bin/env node
// 五轴二级域名验收：本地按子域端口提供整合产物，逐项断言 200、canonical、sitemap、robots 与跨域 related。
// 用法：node scripts/check-subdomains.mjs
// 证据：work/subdomain-verification.json
import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {startStaticServer} from '@universe-atlas/engine/serve';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const axes = ['space', 'time', 'temperature', 'elements', 'mass'];
const ports = {home: 11667, space: 4191, time: 4192, temperature: 4193, elements: 4194, mass: 4195, static: 4196};
const hosts = {home: 'chidu.org', space: 'space.chidu.org', time: 'time.chidu.org', temperature: 'temperature.chidu.org', elements: 'elements.chidu.org', mass: 'mass.chidu.org', static: 'static.chidu.org'};
const dirs = {home: dist, space: path.join(dist, 'space'), time: path.join(dist, 'time'), temperature: path.join(dist, 'temperature'), elements: path.join(dist, 'elements'), mass: path.join(dist, 'mass'), static: path.join(dist, 'static')};
const config = JSON.parse(await fs.readFile(path.join(root, 'config/project.json'), 'utf8'));
const entries = JSON.parse(await fs.readFile(path.join(dist, 'content.json'), 'utf8'));
const servers = [];
const results = [];
const failures = [];

async function serve(name) {
  const server = startStaticServer({root: dirs[name], port: ports[name]});
  await new Promise((resolve, reject) => { server.once('listening', resolve); server.once('error', reject); });
  servers.push(server);
}

function localize(url) {
  const parsed = new URL(url);
  const name = Object.entries(hosts).find(([, host]) => host === parsed.host)?.[0];
  if (!name) throw new Error('未知子域主机：' + url);
  return `http://127.0.0.1:${ports[name]}${parsed.pathname}${parsed.search}`;
}

async function get(url) {
  const response = await fetch(localize(url));
  return {status: response.status, text: await response.text()};
}

async function expect200(label, url) {
  try {
    const {status} = await get(url);
    const ok = status === 200;
    results.push({label, url, status, ok});
    if (!ok) failures.push(`${label} ${status} ${url}`);
  } catch (error) {
    results.push({label, url, status: 0, ok: false, error: error.message});
    failures.push(`${label} ${error.message} ${url}`);
  }
}

for (const name of ['home', ...axes, 'static']) await serve(name);

// 五轴：首页、条目页、entries.json、sitemap、robots 全部 200。
for (const axis of axes) {
  const axisEntries = JSON.parse(await fs.readFile(path.join(dirs[axis], 'entries.json'), 'utf8'));
  const sample = axisEntries.filter((entry) => entry.id.startsWith(axis + '.')).slice(0, 2);
  await expect200(`${axis}-home`, `https://${hosts[axis]}/`);
  await expect200(`${axis}-entries`, `https://${hosts[axis]}/entries.json`);
  await expect200(`${axis}-sitemap`, `https://${hosts[axis]}/sitemap.xml`);
  await expect200(`${axis}-robots`, `https://${hosts[axis]}/robots.txt`);
  for (const entry of sample) await expect200(`${axis}-entry-${entry.id}`, `https://${hosts[axis]}/entry/${axis}/${entry.id.split('.')[1]}/`);
}
await expect200('portal-home', 'https://chidu.org/');
await expect200('portal-library', 'https://chidu.org/library/');
await expect200('portal-learning', 'https://chidu.org/learning/');
await expect200('portal-sitemap-index', 'https://chidu.org/sitemap.xml');
await expect200('portal-sitemap-pages', 'https://chidu.org/sitemap-pages.xml');
await expect200('portal-robots', 'https://chidu.org/robots.txt');
await expect200('static-three', 'https://static.chidu.org/vendor/three.module.js');
await expect200('static-og', 'https://static.chidu.org/og/space.png');
await expect200('static-media', 'https://static.chidu.org/media/hero-earth.jpg');
await expect200('static-favicon', 'https://static.chidu.org/favicon.svg');

// canonical / og:url 全覆盖与旧路径零残留。
const htmlFiles = [];
async function walk(dir) {
  for (const item of await fs.readdir(dir, {withFileTypes: true})) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) await walk(file);
    else if (item.name.endsWith('.html')) htmlFiles.push(file);
  }
}
await walk(dist);
let canonicalCount = 0, ogUrlCount = 0, oldPathCount = 0, wrongHostCount = 0;
for (const file of htmlFiles) {
  const html = await fs.readFile(file, 'utf8');
  const relative = path.relative(dist, file).split(path.sep).join('/');
  const site = axes.includes(relative.split('/')[0]) ? relative.split('/')[0] : 'home';
  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  const ogUrl = (html.match(/<meta property="og:url" content="([^"]+)"/) || [])[1];
  if (canonical) {
    canonicalCount++;
    if (new URL(canonical).host !== hosts[site]) { wrongHostCount++; failures.push(`canonical 主机错误 ${relative} → ${canonical}`); }
  }
  if (ogUrl) {
    ogUrlCount++;
    if (new URL(ogUrl).host !== hosts[site]) { wrongHostCount++; failures.push(`og:url 主机错误 ${relative} → ${ogUrl}`); }
  }
  if (/https:\/\/chidu\.org\/(space|time|temperature|elements|mass)\//.test(html)) { oldPathCount++; failures.push(`旧路径残留 ${relative}`); }
}

// sitemap 结构：门户 index + 五轴 urlset，且主机正确。
const indexXml = (await get('https://chidu.org/sitemap.xml')).text;
assert.match(indexXml, /<sitemapindex/, '门户 sitemap 必须是 sitemapindex');
for (const axis of axes) assert.ok(indexXml.includes(`https://${hosts[axis]}/sitemap.xml`), `门户 sitemap 缺少 ${axis}`);
for (const axis of axes) {
  const xml = (await get(`https://${hosts[axis]}/sitemap.xml`)).text;
  assert.match(xml, /<urlset/, `${axis} sitemap 必须是 urlset`);
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.ok(locs.length > 0, `${axis} sitemap 为空`);
  assert.ok(locs.every((loc) => new URL(loc).host === hosts[axis]), `${axis} sitemap 含错误主机`);
  assert.ok(!locs.some((loc) => /^\/(space|time|temperature|elements|mass)\//.test(new URL(loc).pathname)), `${axis} sitemap 含旧路径`);
  const robots = (await get(`https://${hosts[axis]}/robots.txt`)).text;
  assert.ok(robots.includes(`https://${hosts[axis]}/sitemap.xml`), `${axis} robots 未指向本站 sitemap`);
}

// 跨域 related：从内容中抽取跨轴链接 20 条，逐条打开。
const byId = new Map(entries.map((entry) => [entry.id, entry]));
const cross = [];
for (const entry of entries) {
  const from = entry.id.split('.')[0];
  for (const relatedId of entry.related || []) {
    const target = byId.get(relatedId);
    if (!target) continue;
    const axis = target.id.split('.')[0];
    if (axis === from) continue;
    cross.push({from: entry.id, to: target.id, url: `https://${hosts[axis]}/entry/${axis}/${target.id.split('.')[1]}/`});
  }
}
cross.sort((a, b) => (a.from + a.to).localeCompare(b.from + b.to));
const sample = [];
const step = Math.max(1, Math.floor(cross.length / 20));
for (let index = 0; index < cross.length && sample.length < 20; index += step) sample.push(cross[index]);
for (const item of sample) await expect200(`related ${item.from} → ${item.to}`, item.url);

for (const server of servers) server.close();
const report = {
  version: config.contentVersion,
  generatedAt: new Date().toISOString(),
  axisStatus: results.filter((item) => !item.label.startsWith('portal-') && !item.label.startsWith('static-') && !item.label.startsWith('related')),
  canonical: {htmlPages: htmlFiles.length, canonicalCount, ogUrlCount, coverage: Number((canonicalCount / htmlFiles.length).toFixed(4)), wrongHostCount},
  oldPathCount,
  crossRelated: {available: cross.length, sampled: sample.length, items: sample},
  results,
  failures
};
await fs.mkdir(path.join(root, 'work'), {recursive: true});
await fs.writeFile(path.join(root, 'work/subdomain-verification.json'), JSON.stringify(report, null, 2));
console.log(`子域验收：${results.length} 个 URL 检查，失败 ${failures.length}；canonical ${canonicalCount}/${htmlFiles.length}，og:url ${ogUrlCount}，旧路径 ${oldPathCount}；跨域 related 抽样 ${sample.length} 条。`);
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
