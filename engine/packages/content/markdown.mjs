import MarkdownIt from 'markdown-it';
const escapeText=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const markdown=new MarkdownIt({html:false,linkify:false,typographer:false});
markdown.renderer.rules.text=(tokens,index,options,env)=>escapeText(tokens[index].content).replace(/\[(\d+)\]/g,(text,number)=>Number(number)>0&&Number(number)<=env.sourceCount?`<a class="citation-link" href="#source-${number}" aria-label="参考来源 ${number}">[${number}]</a>`:text);
for(const rule of ['heading_open','heading_close'])markdown.renderer.rules[rule]=(tokens,index,options,env,self)=>{if(tokens[index].tag==='h1')tokens[index].tag='h2';return self.renderToken(tokens,index,options);};
export function renderMarkdown(body,sources=[]){return markdown.render(body,{sourceCount:sources.length});}
