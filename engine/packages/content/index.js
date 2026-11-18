export function validateEntry(entry) {
  const errors = [];
  if (!/^(space|time|temperature|elements|mass)\.[a-z0-9_-]+$/.test(entry.id || '')) errors.push('id 必须包含维度前缀');
  if (!entry.title) errors.push('缺少 title');
  if (!entry.summary || typeof entry.summary !== 'string') errors.push('缺少 summary');
  const expected = {space:['length','m'],time:['cosmic-time','s'],temperature:['temperature','K'],elements:['element','Z'],mass:['mass','kg']}[entry.id?.split('.')[0]];
  if(expected && (entry.dimension!==expected[0] || entry.quantity?.unit!==expected[1])) errors.push('维度或单位与站点不一致');
  if(expected?.[1]==='kg'){
    const value=entry.quantity?.value;
    const zero=entry.zeroMass===true;
    if(zero){
      if(value!==0)errors.push('零质量条目的 quantity.value 必须为 0');
      if(entry.quantity?.bound!==undefined)errors.push('零质量特例不能使用 bound');
    }else if(!Number.isFinite(value)||value<=0)errors.push('质量条目 quantity.value 必须是有限正数；上限/下限用 bound 标注');
    if(entry.zeroMass!==undefined&&typeof entry.zeroMass!=='boolean')errors.push('zeroMass 必须是布尔值');
    if(zero&&entry.id?.split('.')[0]!=='mass')errors.push('zeroMass 只适用于质量轴条目');
    if(entry.quantity?.bound!==undefined&&!['upper','lower'].includes(entry.quantity.bound))errors.push('quantity.bound 只能是 upper 或 lower');
    const mass=entry.mass;
    if(mass!==undefined){
      if(!mass||typeof mass!=='object')errors.push('mass 必须是对象');
      else{
        if(!['total','baryonic','stellar','dynamical'].includes(mass.type))errors.push('mass.type 必须是 total/baryonic/stellar/dynamical');
        if(typeof mass.includesDarkMatter!=='boolean')errors.push('mass.includesDarkMatter 必须明确为布尔值');
      }
    }
  }
  if(expected?.[1]==='Z'){
    const value=entry.quantity?.value;
    if(value!==null&&(!Number.isInteger(value)||value<1||value>118)) errors.push('元素 quantity.value 必须是 1–118 的整数原子序数');
    const element=entry.element;
    if(element){
      if(element.symbol&&String(element.symbol).toLowerCase()!==String(entry.id||'').split('.')[1]&&element.hub!==true) errors.push('元素符号与 ID 不一致');
      if(element.hub===true&&element.closedShell!==value) errors.push('闭壳 hub 的 closedShell 必须等于 quantity.value');
      if(element.periodStart!==undefined&&element.periodEnd!==undefined&&element.periodStart>element.periodEnd) errors.push('周期起点不能大于终点');
    }
  }
  if (!entry.quantity?.measure || typeof entry.quantity.measure !== 'string') errors.push('缺少测量口径');
  if (!['draft','needs-review','reviewed','published'].includes(entry.reviewStatus)) errors.push('未知审核状态');
  const undetermined=entry.quantity?.value===null&&entry.quantity?.status==='undetermined'&&(!entry.id?.startsWith('time.')||entry.chronology?.plot===false);
  if (!Number.isFinite(entry.quantity?.value)&&!undetermined) errors.push('缺少有效 quantity.value；未定时间必须声明 status 与禁止入轴');
  if (!entry.quantity?.unit) errors.push('缺少单位');
  if (!Array.isArray(entry.related)) errors.push('related 必须是数组');
  if (!Array.isArray(entry.sources)) errors.push('sources 必须是数组');
  if (Array.isArray(entry.sources)) for(const source of entry.sources){if(!source||typeof source!=='object'||!source.title||!source.publisher||!/^https?:\/\//.test(source.url||'')||!/^\d{4}-\d{2}-\d{2}$/.test(source.accessed||''))errors.push('来源必须包含标题、HTTP URL、发布者和访问日期');}
  if (Array.isArray(entry.related)&&new Set(entry.related).size!==entry.related.length) errors.push('related 不能重复');
  if (['reviewed','published'].includes(entry.reviewStatus) && !entry.sources?.length) errors.push('审核通过条目必须有来源');
  if (['reviewed','published'].includes(entry.reviewStatus) && (!entry.review?.method||!entry.review?.date)) errors.push('审核通过条目必须有核对方法和日期');
  if (entry.quantity?.value < 0) errors.push('当前数据不允许负值');
  if(entry.visual?.scene){
    if(typeof entry.visual.scene!=='string'||!/^[a-z][a-z0-9]*\.[a-z0-9-]+$/.test(entry.visual.scene))errors.push('visual.scene 必须是命名空间场景 ID');
    if(typeof entry.visual.caption!=='string'||!entry.visual.caption.trim())errors.push('专属图景缺少 caption');
    if(typeof entry.visual.note!=='string'||!entry.visual.note.trim())errors.push('专属图景缺少示意说明');
  }
  return errors;
}
