export const entryKey=entry=>entry?.legacy?.id||String(entry?.id||'').slice(String(entry?.id||'').indexOf('.')+1);
export const isReviewed=entry=>['reviewed','published'].includes(entry.reviewStatus);
export function reviewLabel(entry){return {draft:'草稿','needs-review':'待来源核对',reviewed:'来源已核对',published:'来源已核对'}[entry.reviewStatus]||'待来源核对';}
export function measureLabel(entry){
 if(entry.quantity.measureLabel)return entry.quantity.measureLabel;
 const raw=entry.quantity.measure;if(!/^[a-z][a-z0-9-]*$/.test(raw))return raw;
 if(raw.includes('needs-review'))return '参考尺寸 · 口径待核对';
 return {length:'参考长度（详见条件）','cosmic-time':'自大爆炸起的参考时间',temperature:'参考温度（详见条件）',element:'原子序数（Z）',mass:'参考质量（详见口径与上下限）'}[entry.dimension]||'参考数值';
}
export function conditionLinesEn(entry){
 const conditions=entry.conditions;if(!conditions)return [];
 if(typeof conditions==='string')return [/[\u3400-\u9fff]/.test(conditions)?'See the source note for the stated basis.':conditions];
 if(Array.isArray(conditions))return conditions.map(value=>/[\u3400-\u9fff]/.test(String(value))?'See the source note for the stated basis.':String(value));
 const labels={pressure:'Pressure',sample:'Reference sample',precision:'Precision note',reference:'Reference basis',scope:'Scope',secondsPerYear:'Seconds per year used',presentSeconds:'Present-second reference in the library',model:'Model assumption',sourceTemperatureMeV:'Source temperature scale (MeV)',sourceHubbleTimeSeconds:'Source Hubble time (s)',lookbackYears:'Lookback time (years)',calendarReferenceYear:'Calendar reference year',calendarYear:'Calendar year',calendarBceYear:'BCE year reference',calendarPrecision:'Calendar precision',calendarConversion:'Calendar conversion',massType:'Mass basis (total/baryonic/stellar/dynamical)',includesDarkMatter:'Includes dark matter',measurementMethod:'Measurement method',uncertainty:'Uncertainty'};
 return Object.entries(conditions).flatMap(([key,value])=>{
  if(['secondsPerYear','presentSeconds','calendarReferenceYear','calendarConversion'].includes(key))return [];
  if(key==='timeBasis')return ['Time coordinate: elapsed time since the hot Big Bang.'];
  if(key==='conversion')return [String(value).includes('present')?'Lookback time is converted to an approximate elapsed-time coordinate since the Big Bang; it is not a second-level measurement.':'Conversion note: '+value];
  if(value===null||value===undefined)return [];
  const label=labels[key]||key;
  if(typeof value==='number')return [`${label}: ${Number(value).toLocaleString('en-US',{maximumSignificantDigits:8})}`];
  if(typeof value==='object')return [`${label}: ${JSON.stringify(value)}`];
  return [`${label}: ${/[\u3400-\u9fff]/.test(String(value))?'see source note':String(value)}`];
 });
}
export function conditionLines(entry){ const conditions=entry.conditions;if(!conditions)return [];
 if(typeof conditions==='string')return [conditions];if(Array.isArray(conditions))return conditions.map(String);
 const labels={pressure:'压力',sample:'参考样本',precision:'精度说明',reference:'参考口径',scope:'适用范围',secondsPerYear:'换算采用的每年秒数',presentSeconds:'库中现在的秒数参考',model:'模型前提',sourceTemperatureMeV:'来源温标（MeV）',sourceHubbleTimeSeconds:'来源哈勃时间（秒）',lookbackYears:'距今约（年）',calendarReferenceYear:'历年参考年',calendarYear:'公元年份参考',calendarBceYear:'公元前年份参考',calendarPrecision:'历年精度',calendarConversion:'历年换算',massType:'质量口径（总质量/重子/恒星/动力学）',includesDarkMatter:'是否含暗物质',measurementMethod:'测量方法',uncertainty:'不确定度'};
 return Object.entries(conditions).flatMap(([key,value])=>{
  if(['secondsPerYear','presentSeconds','calendarReferenceYear','calendarConversion'].includes(key))return [];
  if(key==='timeBasis')return ['时间坐标以热大爆炸后的经过时间表示。'];
  if(key==='conversion')return [String(value).includes('present')?'回望年代换算为自大爆炸起的近似坐标；不具有秒级测量精度。':'换算说明：'+value];
  if(value===null||value===undefined)return [];
  return [(labels[key]?labels[key]+'：':'')+(typeof value==='object'?JSON.stringify(value):typeof value==='number'?value.toLocaleString('zh-CN',{maximumSignificantDigits:8}):String(value))];
 });
}
export function canPlotTime(entry,present){return entry.quantity.value!==null&&entry.chronology?.plot!==false&&entry.quantity.value<=present&&entry.quantity.value>=0;}
