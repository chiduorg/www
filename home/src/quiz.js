import {articleUrl,exploreUrl} from '/engine/content/routes.js';
import {measureLabel} from '/engine/content/presentation.js';
import {formatRatio} from '/engine/quantities/index.js';
const $=id=>document.getElementById(id),labels={all:'综合',space:'空间',time:'时间',temperature:'温度'};
let data,mode='all',questions=[],index=0,score=0,answered=false,records={};
const storageKey='atlas-quiz-v1';
function best(){const record=records[mode];$('quiz-best').textContent=record?`这份内容版本下的本地最佳：${record.score} / ${record.total}`:'答题记录只保存在当前浏览器。';}
function updateMode(next){mode=next;for(const button of document.querySelectorAll('[data-quiz-mode]'))button.setAttribute('aria-pressed',String(button.dataset.quizMode===mode));best();}
function resetView(){for(const id of ['quiz-session','quiz-result'])$(id).hidden=true;$('quiz-welcome').hidden=false;best();}
function shuffled(items){const result=[...items];for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;}
function start(){const pool=data.questions.filter(q=>mode==='all'||q.dimension===mode);questions=shuffled(pool).slice(0,8);if(!questions.length){$('quiz-best').textContent='这个维度的题目还在核对中。';return;}index=0;score=0;$('quiz-welcome').hidden=true;$('quiz-result').hidden=true;$('quiz-session').hidden=false;showQuestion();}
function showQuestion(){
 answered=false;const q=questions[index];$('quiz-progress').textContent=`${labels[q.dimension]} / ${index+1} / ${questions.length}`;$('quiz-progressbar').max=questions.length;$('quiz-progressbar').value=index;$('quiz-question').textContent=q.prompt;$('quiz-feedback').hidden=true;$('quiz-next').hidden=true;
 const container=$('quiz-options');container.replaceChildren();
 for(const [position,entry]of shuffled([q.a,q.b]).entries()){const button=document.createElement('button');button.className='quiz-option';button.dataset.id=entry.id;const order=document.createElement('span');order.className='quiz-letter';order.textContent=position?'B':'A';const title=document.createElement('strong');title.textContent=entry.title;const measure=document.createElement('small');measure.textContent=measureLabel(entry);const value=document.createElement('span');value.className='quiz-hidden-value';value.textContent='选择后揭晓参考值';button.append(order,title,measure,value);button.onclick=()=>answer(entry.id);container.append(button);}
 $('quiz-question').focus();
}
function answer(selected){
 if(answered)return;answered=true;const q=questions[index],correct=selected===q.correctId;if(correct)score++;
 for(const button of $('quiz-options').children){button.disabled=true;const entry=button.dataset.id===q.a.id?q.a:q.b;button.querySelector('.quiz-hidden-value').textContent=entry.displayValue;button.classList.toggle('is-correct',entry.id===q.correctId);button.classList.toggle('is-selected',entry.id===selected);const state=document.createElement('span');state.className='quiz-option-state';state.textContent=entry.id===q.correctId?'正确答案':entry.id===selected?'你的选择':'';button.append(state);}
 $('quiz-feedback-title').textContent=correct?'判断正确。':'换一个尺度，再看一次。';const winner=q.correctId===q.a.id?q.a:q.b,other=winner===q.a?q.b:q.a;
 let explanation=`${q.a.title}：${q.a.displayValue}；${q.b.title}：${q.b.displayValue}。`;
 if(q.dimension==='space')explanation+=` 按这两个条目规定的参考长度比较，${winner.title}约为${other.title}的 ${formatRatio(winner.quantity.value,other.quantity.value)} 倍。`;
 if(q.dimension==='time')explanation+=' 时间轴采用自热大爆炸起的经过时间；参考坐标更小的一项更早。时代参考点不表示所有相关事件发生在同一瞬间。';
 if(q.dimension==='temperature')explanation+=' 这些是各条目所列条件下的参考温度。开尔文数值更大，温度更高；不同对象的温度不表示其总能量大小。';
 $('quiz-explanation').textContent=explanation;const links=$('quiz-reading');links.replaceChildren();for(const entry of [q.a,q.b]){const article=document.createElement('a');article.href=articleUrl(entry);article.textContent='阅读'+entry.title+' ↗';links.append(article);}const scene=document.createElement('a');scene.href=exploreUrl(winner);scene.textContent='进入对应图景 ↗';links.append(scene);
 $('quiz-feedback').hidden=false;$('quiz-next').hidden=false;$('quiz-next').textContent=index===questions.length-1?'查看结果 →':'下一题 →';$('quiz-progressbar').value=index+1;$('quiz-feedback-title').focus();
}
function finish(){
 $('quiz-session').hidden=true;$('quiz-result').hidden=false;$('quiz-score').textContent=`${score} / ${questions.length}`;$('quiz-result-note').textContent=score===questions.length?'这一段尺度旅程，你都找到了对应的参照。':'继续走进图景、阅读口径，下一次判断会更直观。';
 if(!records[mode]||score/questions.length>records[mode].score/records[mode].total)records[mode]={score,total:questions.length};
 try{localStorage.setItem(storageKey,JSON.stringify({snapshotId:data.snapshotId,records}));}catch{}$('quiz-result-title').focus();
}
try{
 const response=await fetch('/quiz-data.json');if(!response.ok)throw new Error('题目加载失败');data=await response.json();try{const saved=JSON.parse(localStorage.getItem(storageKey)||'null');if(saved?.snapshotId===data.snapshotId)records=saved.records||{};}catch{}
 $('quiz-content-version').textContent=`题目采用内容 v${data.contentVersion} · 仅使用已核对且有可比较数值的条目`;$('quiz-start').disabled=false;best();
 for(const button of document.querySelectorAll('[data-quiz-mode]'))button.onclick=()=>updateMode(button.dataset.quizMode);
 $('quiz-start').onclick=start;$('quiz-next').onclick=()=>{if(index===questions.length-1)finish();else{index++;showQuestion();}};$('quiz-restart').onclick=start;$('quiz-change-mode').onclick=resetView;
 $('quiz-clear').onclick=()=>{records={};try{localStorage.removeItem(storageKey);}catch{}best();};document.documentElement.dataset.ready='true';
}catch(error){$('quiz-best').textContent='挑战暂时未准备好，可以先从知识库继续探索。';console.error(error);}
