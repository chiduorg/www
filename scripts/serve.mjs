import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '../dist');
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.md':'text/plain; charset=utf-8'};
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const name = decodeURIComponent(url.pathname.endsWith('/') ? url.pathname + 'index.html' : url.pathname);
    const file = path.resolve(root, '.' + name);
    if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
    const body = await fs.readFile(file);
    res.writeHead(200, {'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store'});
    res.end(body);
  } catch { res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});try{res.end(await fs.readFile(path.join(root,'404.html')));}catch{res.end('Not found');} }
});
let port = Number(process.env.MAGNITUDE_PREVIEW_PORT || 4188);
server.on('error', error => { if (error.code === 'EADDRINUSE' && port < 4200) {port++;server.listen(port,'127.0.0.1');} else {console.error(error);process.exitCode=1;} });
server.on('listening', () => console.log(`Local: http://127.0.0.1:${port}`));
server.listen(port, '127.0.0.1');
