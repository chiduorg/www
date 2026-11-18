import path from 'node:path';
import {checkSite} from '@universe-atlas/engine/check';
await checkSite(path.resolve(import.meta.dirname,'..'));
