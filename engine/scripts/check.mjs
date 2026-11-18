import path from 'node:path';
import assert from 'node:assert/strict';
import {checkJavaScript} from '../packages/build/check.mjs';
import {validateEntry} from '../packages/content/index.js';
import {formatLength,logSize,formatRatio} from '../packages/quantities/index.js';
const files=await checkJavaScript(path.resolve(import.meta.dirname,'../packages'));
assert.equal(formatLength(1000),'1 km');assert.equal(formatLength(12742000,7),'12,742 km');assert.equal(formatLength(0),'—');assert.equal(logSize(1e-9),-9);assert.throws(()=>logSize(0));assert.equal(formatRatio(10,2),'5');assert.equal(formatRatio(1,1e9),'1 / (1 × 10⁹)');assert.equal(formatRatio(0,2),'—');
assert.ok(validateEntry({id:'time.example',quantity:{value:null}}).length);
console.log(`引擎检查通过：${files} 个模块语法与数量边界。`);
