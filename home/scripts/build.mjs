import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {buildSite} from '@universe-atlas/engine/build';
import {renderPages} from '../render.mjs';
const siteRoot=path.resolve(import.meta.dirname,'..');
const contentRoot=path.dirname(fileURLToPath(import.meta.resolve('@universe-atlas/content/package.json')));
await buildSite({siteRoot,contentRoot,renderPages});
