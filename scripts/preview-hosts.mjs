import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import zlib from 'node:zlib';

const dist = path.resolve(import.meta.dirname, '../dist');
const port = Number(process.env.PREVIEW_PORT || 8080);
const hosts = new Map([
  ['chidu.org', {dir: dist, kind: 'portal'}],
  ['space.chidu.org', {dir: path.join(dist, 'space'), kind: 'axis'}],
  ['time.chidu.org', {dir: path.join(dist, 'time'), kind: 'axis'}],
  ['temperature.chidu.org', {dir: path.join(dist, 'temperature'), kind: 'axis'}],
  ['elements.chidu.org', {dir: path.join(dist, 'elements'), kind: 'axis'}],
  ['mass.chidu.org', {dir: path.join(dist, 'mass'), kind: 'axis'}],
  ['static.chidu.org', {dir: path.join(dist, 'static'), kind: 'static'}]
]);
const oldPath = /^\/(space|time|energy|temperature|elements|mass)(\/|$)/;
const mime = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8', '.md': 'text/markdown; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.mp4': 'video/mp4'
};
const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
};
const gzipTypes = /\b(text\/|javascript|json|xml|svg)/;

function cacheControl(kind, ext) {
  if (kind === 'static') return 'public, max-age=31536000, immutable';
  if (ext === '.html') return 'no-cache';
  if (ext === '.json') return 'no-cache';
  if (['.css', '.js', '.mjs'].includes(ext)) return 'public, max-age=300, must-revalidate';
  if (['.png', '.jpg', '.jpeg', '.webp', '.svg', '.woff', '.woff2', '.ico'].includes(ext)) return 'public, max-age=2592000, immutable';
  if (['.xml', '.txt'].includes(ext)) return 'public, max-age=3600';
  return null;
}

async function fileAt(candidate) {
  const stat = await fs.stat(candidate).catch(() => null);
  return stat && stat.isFile() ? candidate : null;
}

async function resolve(site, pathname) {
  if (site.kind === 'portal' && oldPath.test(pathname)) return null;
  let decoded;
  try { decoded = decodeURIComponent(pathname); } catch { return null; }
  const target = path.resolve(site.dir, `.${decoded}`);
  if (target !== site.dir && !target.startsWith(site.dir + path.sep)) return null;
  if (site.kind === 'static') return fileAt(target);
  const direct = await fileAt(target);
  if (direct) return direct;
  const index = await fileAt(path.join(target, 'index.html'));
  if (index) return index;
  return null;
}

const server = http.createServer(async (req, res) => {
  const host = String(req.headers.host || '').split(':')[0].toLowerCase();
  const site = hosts.get(host) || (host === '127.0.0.1' || host === 'localhost' ? hosts.get('chidu.org') : null);
  if (!site) {
    res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(`Unknown host: ${host}\nUse one of: ${[...hosts.keys()].join(', ')}`);
    return;
  }
  const url = new URL(req.url, 'http://preview.local');
  const file = await resolve(site, url.pathname);
  if (!file) {
    const notFound = await fileAt(path.join(site.dir, '404.html'));
    const headers = {...securityHeaders, 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache'};
    if (site.kind === 'static') headers['Access-Control-Allow-Origin'] = '*';
    res.writeHead(404, headers);
    res.end(req.method === 'HEAD' ? undefined : notFound ? await fs.readFile(notFound) : 'Not found');
    console.log(404, host, url.pathname);
    return;
  }
  const ext = path.extname(file).toLowerCase();
  const type = mime[ext] || 'application/octet-stream';
  const headers = {...securityHeaders, 'Content-Type': type};
  const cache = cacheControl(site.kind, ext);
  if (cache) headers['Cache-Control'] = cache;
  if (site.kind === 'static') {
    headers['Access-Control-Allow-Origin'] = '*';
    headers['Cross-Origin-Resource-Policy'] = 'cross-origin';
  }
  let body = await fs.readFile(file);
  // 预览走 HTTP + 非标准端口时，把生产绝对域名就地改写为 http://<host>:<port>，
  // 让跨轴 related、canonical、静态资源在浏览器里可直接打开；磁盘产物不改。
  if (/\.(html|js|mjs|css|json|xml|txt|md|svg)$/.test(file)) {
    let text = body.toString('utf8');
    for (const name of hosts.keys()) text = text.replaceAll(`https://${name}`, `http://${name}:${port}`);
    body = Buffer.from(text);
  }
  if (body.length >= 1024 && gzipTypes.test(type) && /gzip/.test(String(req.headers['accept-encoding'] || ''))) {
    body = zlib.gzipSync(body);
    headers['Content-Encoding'] = 'gzip';
    headers['Vary'] = 'Accept-Encoding';
  }
  headers['Content-Length'] = body.length;
  res.writeHead(200, headers);
  res.end(req.method === 'HEAD' ? undefined : body);
  console.log(200, host, url.pathname);
});

server.listen(port, '127.0.0.1', () => {
  console.log(`六主机本地预览：http://chidu.org:${port}/`);
  for (const name of hosts.keys()) console.log(`  http://${name}:${port}/`);
  console.log(`未配置 hosts 时可用：curl -H "Host: space.chidu.org" http://127.0.0.1:${port}/`);
});
