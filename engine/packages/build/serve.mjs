import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.md':'text/plain; charset=utf-8','.txt':'text/plain; charset=utf-8','.xml':'application/xml; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml'};
export function startStaticServer({root,port}){
 const directory=path.resolve(root);
 const server=http.createServer(async(req,res)=>{
  if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405,{Allow:'GET, HEAD'});res.end();return;}
  try{
   const url=new URL(req.url,'http://local'),name=decodeURIComponent(url.pathname),file=path.resolve(directory,'.'+name);
   if(file!==directory&&!file.startsWith(directory+path.sep)){res.writeHead(403);res.end();return;}
   const stat=await fs.stat(file);if(stat.isDirectory()&&!name.endsWith('/')){res.writeHead(308,{Location:name+'/'+url.search});res.end();return;}
   const target=stat.isDirectory()?path.join(file,'index.html'):file,body=await fs.readFile(target);
   res.writeHead(200,{'Content-Type':mime[path.extname(target)]||'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:body);
  }catch{res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});try{res.end(req.method==='HEAD'?undefined:await fs.readFile(path.join(directory,'404.html')));}catch{res.end('Not found');}}
 });
 server.listen(port,'127.0.0.1');return server;
}
