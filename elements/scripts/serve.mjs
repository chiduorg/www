import path from 'node:path';
import fs from 'node:fs/promises';
import {startStaticServer} from '@universe-atlas/engine/serve';
const root=path.resolve(import.meta.dirname,'..');
const config=JSON.parse(await fs.readFile(path.join(root,'site.config.json'),'utf8'));
const port=Number(process.env.PORT||new URL(config.sites[config.site].origin).port);
const server=startStaticServer({root:path.join(root,'dist'),port});
server.on('listening',()=>console.log('Local: http://127.0.0.1:'+port+'/'));
server.on('error',error=>{console.error(error);process.exitCode=1;});
