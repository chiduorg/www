// 构建期契约校验：不引入运行时依赖，失败时一次性列出全部问题。
const isText=value=>typeof value==='string'&&value.trim().length>0;
const isNum=value=>typeof value==='number'&&Number.isFinite(value);
const isRange=(value,min,max)=>isNum(value)&&value>=min&&value<=max;
const isHex=value=>typeof value==='string'&&/^#[0-9a-f]{6}$/i.test(value);
const UNITS=new Set(['m','s','K','Z','kg']);
const DIMENSIONS=new Set(['length','cosmic-time','temperature','element','mass']);
const MASS_TYPES=new Set(['total','baryonic','stellar','dynamical']);
const REVIEW_STATES=new Set(['draft','reviewed','published']);
const AXES=new Set(['x','y','z','diagonal']);
const MODES=new Set(['时点','时长','未来','未定']);
const fail=(list,path,message)=>{if(list.length<80)list.push(`${path}: ${message}`);};
const checkURL=(list,path,url)=>{try{const parsed=new URL(url);if(!/^https?:$/.test(parsed.protocol))fail(list,path,`只允许 http(s) 链接: ${url}`);}catch{fail(list,path,`无效 URL: ${url}`);}};

export function validateEntries(entries,{allIds=new Set(entries.map(x=>x.id)),allowEmpty=false}={}){
  const errors=[],seen=new Set();
  if(!Array.isArray(entries))throw new Error('内容契约校验失败: entries 必须是数组');
  if(!entries.length){if(allowEmpty)return true;throw new Error('内容契约校验失败: entries 必须是非空数组');}
  entries.forEach((entry,index)=>{
    const path=entry?.id||`entries[${index}]`;
    if(!isText(entry?.id)||!/^(space|time|temperature|elements|mass)\.[a-z0-9][a-z0-9_-]*$/.test(entry.id))fail(errors,path,'id 必须形如 space.slug（小写字母、数字、- 或 _）');
    if(seen.has(entry?.id))fail(errors,path,'id 重复');seen.add(entry?.id);
    for(const key of ['title','summary','category','displayValue','sourcePath'])if(!isText(entry?.[key]))fail(errors,`${path}.${key}`,'必须是非空字符串');
    if('titleEn' in entry&&typeof entry.titleEn!=='string')fail(errors,`${path}.titleEn`,'必须是字符串');
    if(!DIMENSIONS.has(entry?.dimension))fail(errors,`${path}.dimension`,`未知维度 ${entry?.dimension}`);
    if(!REVIEW_STATES.has(entry?.reviewStatus))fail(errors,`${path}.reviewStatus`,`未知状态 ${entry?.reviewStatus}`);
    const quantity=entry?.quantity;
    if(!quantity||typeof quantity!=='object')fail(errors,`${path}.quantity`,'缺失 quantity');
    else{
      if(quantity.value!==null&&!isNum(quantity.value))fail(errors,`${path}.quantity.value`,'必须是有限数或 null');
      if(entry?.dimension==='mass'&&entry?.zeroMass!==true&&(quantity.value===null||!isNum(quantity.value)||quantity.value<=0))fail(errors,`${path}.quantity.value`,'质量条目必须是有限正数；上限/下限用 bound');
      if(entry?.zeroMass===true&&quantity.value!==0)fail(errors,`${path}.quantity.value`,'零质量条目的 value 必须为 0');
      if(entry?.zeroMass!==undefined&&typeof entry.zeroMass!=='boolean')fail(errors,`${path}.zeroMass`,'必须是布尔值');
      if('bound' in quantity&&!['upper','lower'].includes(quantity.bound))fail(errors,`${path}.quantity.bound`,'只能是 upper 或 lower');
      if(!UNITS.has(quantity.unit))fail(errors,`${path}.quantity.unit`,`单位必须是 m/s/K/Z/kg，实际 ${quantity.unit}`);
      if(!isText(quantity.measure))fail(errors,`${path}.quantity.measure`,'必须是非空字符串');
      if(typeof quantity.approximate!=='boolean')fail(errors,`${path}.quantity.approximate`,'必须是布尔值');
      if('measureLabel' in quantity&&!isText(quantity.measureLabel))fail(errors,`${path}.quantity.measureLabel`,'必须是非空字符串');
      if('status' in quantity&&!isText(quantity.status))fail(errors,`${path}.quantity.status`,'必须是非空字符串');
      if('range' in quantity){
        const range=quantity.range;
        if(!range||!isNum(range.min)||!isNum(range.max))fail(errors,`${path}.quantity.range`,'min/max 必须是有限数');
        else{
          if(range.min>range.max)fail(errors,`${path}.quantity.range`,'min 不能大于 max');
          if(!UNITS.has(range.unit))fail(errors,`${path}.quantity.range.unit`,`单位必须是 m/s/K/Z，实际 ${range.unit}`);
          if(range.unit!==quantity.unit)fail(errors,`${path}.quantity.range.unit`,`与 quantity.unit(${quantity.unit}) 不一致`);
          if(quantity.value!==null&&isNum(quantity.value)&&(quantity.value<range.min||quantity.value>range.max))fail(errors,`${path}.quantity.value`,`值 ${quantity.value} 不在区间 ${range.min}–${range.max}`);
        }
      }
    }
    if('mass' in entry){
      const mass=entry.mass;
      if(!mass||typeof mass!=='object'||Array.isArray(mass))fail(errors,`${path}.mass`,'必须是对象');
      else{
        if(!MASS_TYPES.has(mass.type))fail(errors,`${path}.mass.type`,'必须是 total/baryonic/stellar/dynamical');
        if(typeof mass.includesDarkMatter!=='boolean')fail(errors,`${path}.mass.includesDarkMatter`,'必须明确为布尔值');
        if('method' in mass&&!isText(mass.method))fail(errors,`${path}.mass.method`,'必须是非空字符串');
      }
    }
    if(!Array.isArray(entry?.sources)||!entry.sources.length)fail(errors,`${path}.sources`,'至少需要一条来源');
    else entry.sources.forEach((source,i)=>{
      if(!isText(source?.title))fail(errors,`${path}.sources[${i}].title`,'必须是非空字符串');
      if(!isText(source?.url))fail(errors,`${path}.sources[${i}].url`,'必须是非空字符串');else checkURL(errors,`${path}.sources[${i}].url`,source.url);
      if('accessed' in source&&!/^\d{4}-\d{2}-\d{2}$/.test(String(source.accessed)))fail(errors,`${path}.sources[${i}].accessed`,'日期必须是 YYYY-MM-DD');
    });
    if(!Array.isArray(entry?.tags)||!entry.tags.every(isText))fail(errors,`${path}.tags`,'必须是字符串数组');
    if('mode' in entry&&!MODES.has(entry.mode))fail(errors,`${path}.mode`,`未知模式 ${entry.mode}`);
    if('related' in entry){
      if(!Array.isArray(entry.related))fail(errors,`${path}.related`,'必须是数组');
      else entry.related.forEach((id,i)=>{if(!isText(id))fail(errors,`${path}.related[${i}]`,'必须是条目 ID');else if(!allIds.has(id))fail(errors,`${path}.related[${i}]`,`引用了不存在的条目 ${id}`);});
    }
    if('review' in entry){
      const review=entry.review;
      if(!review||typeof review!=='object')fail(errors,`${path}.review`,'必须是对象');
      else{
        if('date' in review&&!/^\d{4}-\d{2}-\d{2}$/.test(String(review.date)))fail(errors,`${path}.review.date`,'日期必须是 YYYY-MM-DD');
        if('notes' in review&&(!Array.isArray(review.notes)||!review.notes.every(isText)))fail(errors,`${path}.review.notes`,'必须是字符串数组');
      }
    }
    if('visual' in entry){
      const visual=entry.visual;
      if(!visual||typeof visual!=='object')fail(errors,`${path}.visual`,'必须是对象');
      else{
        for(const key of ['template','scene','caption','note'])if(key in visual&&!isText(visual[key]))fail(errors,`${path}.visual.${key}`,'必须是非空字符串');
        if('color' in visual&&!isHex(visual.color))fail(errors,`${path}.visual.color`,`必须是 #rrggbb，实际 ${visual.color}`);
        if('referenceAxis' in visual&&!AXES.has(visual.referenceAxis))fail(errors,`${path}.visual.referenceAxis`,`必须是 x/y/z，实际 ${visual.referenceAxis}`);
        if('variant' in visual&&!isText(visual.variant))fail(errors,`${path}.visual.variant`,'必须是非空字符串');
      }
    }
  });
  if(errors.length)throw new Error(`内容契约校验失败（${errors.length} 项）:\n - ${errors.join('\n - ')}`);
  return true;
}

export function validateCatalog(catalog,entries){
  const errors=[],seen=new Set(),expected=new Set(entries.map(x=>x.id));
  if(!Array.isArray(catalog))throw new Error('catalog 契约校验失败: 必须是数组');
  if(catalog.length!==entries.length)fail(errors,'catalog','记录数与 content 条目数不一致');
  catalog.forEach((item,index)=>{
    const path=item?.id||`catalog[${index}]`;
    if(!isText(item?.id))fail(errors,path,'缺少 id');else{
      if(seen.has(item.id))fail(errors,path,'id 重复');seen.add(item.id);
      if(!expected.has(item.id))fail(errors,path,'content 中不存在该条目');
    }
    for(const key of ['title','summary','category','displayValue','measure','measureLabel'])if(!isText(item?.[key]))fail(errors,`${path}.${key}`,'必须是非空字符串');
    if(item?.value!==null&&!isNum(item?.value))fail(errors,`${path}.value`,'必须是有限数或 null');
    if(!UNITS.has(item?.unit))fail(errors,`${path}.unit`,`单位必须是 m/s/K/Z，实际 ${item?.unit}`);
    if(!Array.isArray(item?.tags)||!item.tags.every(isText))fail(errors,`${path}.tags`,'必须是字符串数组');
    if('visual' in item&&typeof item.visual!=='string')fail(errors,`${path}.visual`,'必须是字符串');
  });
  for(const id of expected)if(!seen.has(id))fail(errors,'catalog',`缺少条目 ${id}`);
  if(errors.length)throw new Error(`catalog 契约校验失败（${errors.length} 项）:\n - ${errors.join('\n - ')}`);
  return true;
}

export function validateVisualMap(map,entries,{station,allIds=new Set(entries.map(x=>x.id)),templates=null}={}){
  const errors=[];
  if(!map||typeof map!=='object'||Array.isArray(map))throw new Error('visual-map 契约校验失败: 必须是对象');
  const byId=new Map(entries.map(x=>[x.id,x]));
  for(const [id,config] of Object.entries(map)){
    if(!allIds.has(id)||!byId.has(id))fail(errors,id,`条目 ${id} 不在 ${station||''} 的内容中`);
    if(!config||typeof config!=='object'){fail(errors,id,'配置必须是对象');continue;}
    for(const key of ['template','caption','note'])if(!isText(config[key]))fail(errors,`${id}.${key}`,'必须是非空字符串');
    if('scene' in config&&!isText(config.scene))fail(errors,`${id}.scene`,'必须是非空字符串');
    if(!isHex(config.color))fail(errors,`${id}.color`,`必须是 #rrggbb，实际 ${config.color}`);
    if('referenceAxis' in config&&!AXES.has(config.referenceAxis))fail(errors,`${id}.referenceAxis`,'必须是 x/y/z');
    if('framePadding' in config&&!isRange(config.framePadding,0,2))fail(errors,`${id}.framePadding`,'必须是 0–2 的有限数');
    if('variant' in config&&!isText(config.variant))fail(errors,`${id}.variant`,'必须是非空字符串');
    if(config.sourceMeasure&&byId.get(id)?.quantity?.measure!==config.sourceMeasure)fail(errors,`${id}.sourceMeasure`,'与条目的 quantity.measure 不一致（可能已过期）');
    if(templates&&isText(config.template)&&!templates.has(config.template))fail(errors,`${id}.template`,`未注册的模板 ${config.template}`);
  }
  if(errors.length)throw new Error(`visual-map 契约校验失败（${errors.length} 项）:\n - ${errors.join('\n - ')}`);
  return true;
}
