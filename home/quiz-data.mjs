const pairs={
 space:[['earth','moon'],['sun','jupiter'],['jupiter','saturn'],['human','cell'],['cell','virus'],['dna','atom'],['sand-grain','virus'],['milky-way','solar-system']],
 time:[['first-stars','solar-system'],['galaxy-formation','cambrian'],['earth-formation','first-life'],['cambrian','dinosaurs'],['agricultural-revolution','industrial-revolution'],['scientific-revolution','digital-age']],
 temperature:[['liquid-nitrogen','water-freezing'],['human-body-temperature','boiling-water'],['sun-surface','sun-core'],['absolute-zero','liquid-nitrogen'],['liquid-hydrogen','liquid-oxygen'],['water-freezing','boiling-water'],['liquid-nitrogen','sun-surface'],['bose-einstein','water-freezing']]
};
export function createQuizData(entries,snapshot){
 const byId=new Map(entries.map(e=>[e.id,e])),questions=[];
 for(const [dimension,list]of Object.entries(pairs))for(const [first,second]of list){
  const a=byId.get(`${dimension}.${first}`),b=byId.get(`${dimension}.${second}`);
  if(!a||!b)throw new Error(`挑战缺少条目 ${dimension}.${first}/${second}`);
  if([a,b].some(e=>!['reviewed','published'].includes(e.reviewStatus)||e.quantity.value===null||e.chronology?.plot===false)||a.quantity.value===b.quantity.value)continue;
  const compact=e=>({id:e.id,title:e.title,displayValue:e.displayValue,quantity:e.quantity,dimension:e.dimension});
  questions.push({id:`${a.id}:${b.id}`,dimension,prompt:{space:'哪一项采用的参考长度更大？',time:'哪一项采用的参考时代更早？',temperature:'哪一项采用的参考温度更高？'}[dimension],a:compact(a),b:compact(b),correctId:(dimension==='time'?a.quantity.value<b.quantity.value:a.quantity.value>b.quantity.value)?a.id:b.id});
 }
 return {version:1,snapshotId:snapshot.id,contentVersion:snapshot.version,questions};
}
