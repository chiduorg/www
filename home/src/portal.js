// 兼容空间原型曾使用的根路径分享链接。
import {siteUrl} from '/engine/content/routes.js';
const params=new URLSearchParams(location.search);
if(params.has('object')||params.has('scale'))location.replace(siteUrl('space',location.search+location.hash));
