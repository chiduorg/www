import {scientific} from '/engine/quantities/index.js';
const body=document.getElementById('data-body');
const count=document.getElementById('data-count');
let rows=[];
// 条目页在五个子域各自生成，门户不承载 /entry/；链接必须带上该轴的公开域名。
const config=JSON.parse(document.getElementById('atlas-config')?.textContent||'{}');
const entryHref=id=>{
 const [site,slug]=id.split('.');
 const origin=(config.sites?.[site]?.publicOrigin||`https://${site}.chidu.org`).replace(/\/$/,'');
 return `${origin}/entry/${site}/${slug}/`;
};
// 数值列：0 与未定值单列展示；超出常规阅读范围时用 3 位有效数字的科学计数法，避免 20 位整数字符串。
function fmt(value){
 if(value===null||value===undefined)return '未定';
 const number=Number(value);
 if(!Number.isFinite(number))return '未定';
 if(number===0)return '0';
 const abs=Math.abs(number);
 if(abs>=1e6||abs<1e-3)return scientific(number,3);
 return number.toLocaleString('zh-CN',{maximumFractionDigits:0});
}
function render(){
 const dimension=document.getElementById('data-dimension').value;
 const shown=rows.filter(row=>dimension==='all'||row.id.startsWith(dimension+'.'));
 body.innerHTML=shown.map(row=>`<tr><td><a href="${entryHref(row.id)}">${row.title}</a></td><td>${row.category}</td><td class="num">${fmt(row.value)}</td><td>${row.unit}</td><td>${row.measureLabel||row.measure}</td><td>${row.displayValue}</td><td>${(row.tags||[]).join(' · ')}</td></tr>`).join('');
 count.textContent=`${shown.length} 条`;
}
try{
 const response=await fetch(new URL('./catalog.json',import.meta.url));if(!response.ok)throw new Error('索引加载失败');
 rows=await response.json();
 // 与页面文案一致：默认按数值从大到小；未定值没有可比数量级，固定排在末尾。
 const byValue=(a,b)=>(b.value??-Infinity)-(a.value??-Infinity);
 rows.sort(byValue);
 render();
 document.getElementById('data-dimension').onchange=render;
 document.querySelectorAll('[data-sort]').forEach(button=>button.onclick=()=>{
   const key=button.dataset.sort;
   rows.sort((a,b)=>key==='value'?byValue(a,b):String(a[key]).localeCompare(String(b[key]),'zh-CN'));
   render();
 });
 document.documentElement.dataset.ready='true';
}catch(error){count.textContent='数据加载失败，请直接浏览知识库。';console.error(error);}
