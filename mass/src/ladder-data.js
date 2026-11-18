// 质量轴覆盖带：把 10^-40–10^53 kg 的 94 个十进位压成 16 个带。
// anchors 只用于阶梯骨架的“计划锚点”标签；是否为可读条目由 entries.json 决定。
export const bands = [
  {id:'B1',from:-40,to:-31,label:'中微子与轻子',labelEn: 'Neutrinos & leptons',note:'三代中微子质量本征态、电子与正电子。10⁻⁴⁰–10⁻³⁹ kg 无同口径实测对象，如实留空；光子是零质量特例，不参与阶梯排序。',anchors:[
    {id:'mass.neutrino-1',title:'ν₁ 质量本征态'},
    {id:'mass.neutrino-2',title:'ν₂ 质量本征态'},
    {id:'mass.neutrino-3',title:'ν₃ 质量本征态'},
    {id:'mass.electron',title:'电子'},
    {id:'mass.positron',title:'正电子'}
  ]},
  {id:'B2',from:-30,to:-27,label:'夸克、轻子与核子',labelEn: 'Quarks, leptons & nucleons',note:'从组分质量到质子、中子与最轻的原子核。',anchors:[
    {id:'mass.up-quark',title:'上夸克'},
    {id:'mass.down-quark',title:'下夸克'},
    {id:'mass.strange-quark',title:'奇异夸克'},
    {id:'mass.charm-quark',title:'粲夸克'},
    {id:'mass.bottom-quark',title:'底夸克'},
    {id:'mass.muon',title:'μ 子'},
    {id:'mass.tau',title:'τ 子'},
    {id:'mass.proton',title:'质子'},
    {id:'mass.neutron',title:'中子'},
    {id:'mass.hydrogen-atom',title:'氢原子'},
    {id:'mass.helium-nucleus',title:'氦核'}
  ]},
  {id:'B3',from:-26,to:-21,label:'分子与生物大分子',labelEn: 'Molecules & biomolecules',note:'顶夸克、W/Z/希格斯，以及水、蛋白质与核酸片段。',anchors:[
    {id:'mass.top-quark',title:'顶夸克'},
    {id:'mass.w-boson',title:'W 玻色子'},
    {id:'mass.z-boson',title:'Z 玻色子'},
    {id:'mass.higgs-boson',title:'希格斯玻色子'},
    {id:'mass.water-molecule',title:'水分子'},
    {id:'mass.insulin',title:'胰岛素'},
    {id:'mass.hemoglobin',title:'血红蛋白'},
    {id:'mass.ribosome',title:'70S 核糖体'}
  ]},
  {id:'B4',from:-20,to:-16,label:'病毒与细胞器',labelEn: 'Viruses & organelles',note:'囊泡、噬菌体、病毒与线粒体，质量由几何与密度估算。',anchors:[
    {id:'mass.synaptic-vesicle',title:'突触囊泡'},
    {id:'mass.bacteriophage-t4',title:'T4 噬菌体'},
    {id:'mass.exosome',title:'外泌体'},
    {id:'mass.influenza-virion',title:'流感病毒'},
    {id:'mass.lysosome',title:'溶酶体'},
    {id:'mass.mitochondrion',title:'线粒体'}
  ]},
  {id:'B5',from:-15,to:-9,label:'细胞',labelEn: 'Cells',note:'细菌、红细胞、人体细胞、神经元与生殖细胞。',anchors:[
    {id:'mass.bacterium',title:'大肠杆菌'},
    {id:'mass.sperm-cell',title:'精子'},
    {id:'mass.red-blood-cell',title:'红细胞'},
    {id:'mass.human-cell',title:'人体细胞'},
    {id:'mass.neuron',title:'神经元'},
    {id:'mass.cardiac-muscle-cell',title:'心肌细胞'},
    {id:'mass.egg-cell',title:'卵细胞'}
  ]},
  {id:'B6',from:-8,to:-3,label:'日常微粒',labelEn: 'Everyday particles',note:'普朗克质量、沙粒、雨滴、昆虫与桌面物件。',anchors:[
    {id:'mass.planck-mass',title:'普朗克质量'},
    {id:'mass.sand-grain',title:'沙粒'},
    {id:'mass.mosquito',title:'蚊子'},
    {id:'mass.rain-drop',title:'雨滴'},
    {id:'mass.tea-leaf',title:'茶叶'},
    {id:'mass.paper-clip',title:'回形针'},
    {id:'mass.tablet',title:'药片'},
    {id:'mass.coin',title:'硬币'}
  ]},
  {id:'B7',from:-2,to:2,label:'人体与家具',labelEn: 'Bodies & furniture',note:'器官、新生儿与成人，以及宠物、乐器和摩托车。',anchors:[
    {id:'mass.golf-ball',title:'高尔夫球'},
    {id:'mass.human-heart',title:'心脏'},
    {id:'mass.human-liver',title:'肝脏'},
    {id:'mass.human-brain',title:'大脑'},
    {id:'mass.cat',title:'猫'},
    {id:'mass.newborn',title:'新生儿'},
    {id:'mass.dog',title:'狗'},
    {id:'mass.adult-human',title:'成人'},
    {id:'mass.motorcycle',title:'摩托车'},
    {id:'mass.piano',title:'钢琴'}
  ]},
  {id:'B8',from:3,to:7,label:'车辆与大型动物',labelEn: 'Vehicles & large animals',note:'汽车、卡车、公交车，以及大象、蓝鲸与空间站。',anchors:[
    {id:'mass.car',title:'汽车'},
    {id:'mass.suv',title:'SUV'},
    {id:'mass.truck',title:'卡车'},
    {id:'mass.elephant',title:'大象'},
    {id:'mass.tyrannosaurus',title:'霸王龙'},
    {id:'mass.bus',title:'公交车'},
    {id:'mass.train-car',title:'车厢'},
    {id:'mass.blue-whale',title:'蓝鲸'},
    {id:'mass.airliner',title:'客机'},
    {id:'mass.iss',title:'国际空间站'},
    {id:'mass.wind-turbine',title:'风机'},
    {id:'mass.eiffel-tower',title:'埃菲尔铁塔'}
  ]},
  {id:'B9',from:8,to:12,label:'巨型工程',labelEn: 'Mega-engineering',note:'船舶、铁塔、大桥与水坝；一律用满载排水量或结构总质量口径。',anchors:[
    {id:'mass.cruise-ship',title:'邮轮'},
    {id:'mass.aircraft-carrier',title:'航母'},
    {id:'mass.cargo-ship',title:'货轮'},
    {id:'mass.empire-state-building',title:'帝国大厦'},
    {id:'mass.golden-gate-bridge',title:'金门大桥'},
    {id:'mass.burj-khalifa',title:'哈利法塔'},
    {id:'mass.hoover-dam',title:'胡佛大坝'},
    {id:'mass.three-gorges-dam',title:'三峡大坝'},
    {id:'mass.millau-viaduct',title:'米约高架桥'},
    {id:'mass.grand-coulee-dam',title:'大古力坝'}
  ]},
  {id:'B10',from:13,to:18,label:'小天体',labelEn: 'Small bodies',note:'彗星、小行星与不规则卫星；质量由轨道、飞越或雷达反演。',anchors:[
    {id:'mass.asteroid-itokawa',title:'糸川'},
    {id:'mass.asteroid-bennu',title:'贝努'},
    {id:'mass.asteroid-yu55',title:'2005 YU55'},
    {id:'mass.asteroid-didymos',title:'双卫一'},
    {id:'mass.comet-67p',title:'67P 彗星'},
    {id:'mass.asteroid-toutatis',title:'图塔蒂斯'},
    {id:'mass.comet-halley',title:'哈雷彗星'},
    {id:'mass.asteroid-eros',title:'爱神星'},
    {id:'mass.phoebe',title:'土卫九'}
  ]},
  {id:'B11',from:19,to:24,label:'小行星与类地行星',labelEn: 'Asteroids & planets',note:'灵神星、灶神星、谷神星、月球、类地行星与大型冰卫星。',anchors:[
    {id:'mass.psyche',title:'灵神星'},
    {id:'mass.vesta',title:'灶神星'},
    {id:'mass.ceres',title:'谷神星'},
    {id:'mass.europa',title:'木卫二'},
    {id:'mass.pluto',title:'冥王星'},
    {id:'mass.moon',title:'月球'},
    {id:'mass.mercury',title:'水星'},
    {id:'mass.titan',title:'土卫六'},
    {id:'mass.ganymede',title:'木卫三'},
    {id:'mass.earth',title:'地球'}
  ]},
  {id:'B12',from:25,to:28,label:'巨行星与系外行星',labelEn: 'Giant & exoplanets',note:'超级地球、热木星、行星质量伴星，以及天王星、海王星、土星、木星。',anchors:[
    {id:'mass.gj1214b',title:'GJ 1214 b'},
    {id:'mass.uranus',title:'天王星'},
    {id:'mass.neptune',title:'海王星'},
    {id:'mass.saturn',title:'土星'},
    {id:'mass.51peg-b',title:'51 Pegasi b'},
    {id:'mass.hd209458b',title:'HD 209458 b'},
    {id:'mass.jupiter',title:'木星'},
    {id:'mass.2m1207b',title:'2M1207 b'}
  ]},
  {id:'B13',from:29,to:33,label:'恒星与致密遗迹',labelEn: 'Stars & compact remnants',note:'褐矮星、主序星、白矮星、中子星、恒星级黑洞与引力波并合产物。',anchors:[
    {id:'mass.teide-1',title:'Teide 1'},
    {id:'mass.barnard-star',title:'巴纳德星'},
    {id:'mass.proxima-centauri',title:'比邻星'},
    {id:'mass.sun',title:'太阳'},
    {id:'mass.sirius-a',title:'天狼星 A'},
    {id:'mass.sirius-b',title:'天狼星 B'},
    {id:'mass.psr-j0348-0432',title:'PSR J0348+0432'},
    {id:'mass.betelgeuse',title:'参宿四'},
    {id:'mass.cygnus-x1',title:'天鹅座 X-1'},
    {id:'mass.eta-carinae',title:'船底座 η'},
    {id:'mass.gw150914-merger',title:'GW150914 并合'},
    {id:'mass.gw190521-merger',title:'GW190521 并合'},
    {id:'mass.gcirs-13e',title:'GCIRS 13E'}
  ]},
  {id:'B14',from:34,to:40,label:'黑洞与类星体',labelEn: 'Black holes & quasars',note:'中等质量黑洞、银心黑洞、类星体、M87* 与超大质量黑洞。',anchors:[
    {id:'mass.omega-centauri-bh',title:'ω 星团中心黑洞'},
    {id:'mass.hlx-1',title:'HLX-1'},
    {id:'mass.ngc4395-black-hole',title:'NGC 4395 中心黑洞'},
    {id:'mass.sgr-a-star',title:'人马座 A*'},
    {id:'mass.ngc4151-black-hole',title:'NGC 4151 中心黑洞'},
    {id:'mass.mrk231-black-hole',title:'Mrk 231 中心黑洞'},
    {id:'mass.3c273',title:'3C 273'},
    {id:'mass.m87-black-hole',title:'M87*'},
    {id:'mass.ton-618',title:'Ton 618'}
  ]},
  {id:'B15',from:41,to:47,label:'星系与星系团',labelEn: 'Galaxies & clusters',note:'麦哲伦云、银河系、仙女座、本星系群、星系团与超星系团；总质量一律含暗物质。',anchors:[
    {id:'mass.large-magellanic-cloud',title:'大麦哲伦云'},
    {id:'mass.milky-way',title:'银河系'},
    {id:'mass.andromeda',title:'仙女座星系'},
    {id:'mass.m87-galaxy',title:'M87 星系'},
    {id:'mass.local-group',title:'本星系群'},
    {id:'mass.centaurus-a-group',title:'半人马座 A 星系群'},
    {id:'mass.fornax-cluster',title:'天炉座星系团'},
    {id:'mass.virgo-cluster',title:'室女座星系团'},
    {id:'mass.coma-cluster',title:'后发座星系团'},
    {id:'mass.bullet-cluster',title:'子弹星系团'},
    {id:'mass.cfa2-great-wall',title:'CfA2 长城'},
    {id:'mass.laniakea',title:'拉尼亚凯亚'}
  ]},
  {id:'B16',from:48,to:53,label:'宇宙尺度',labelEn: 'Cosmic scale',note:'三道大尺度长城，以及哈勃体积与可观测宇宙的普通物质、暗物质、总物质三种口径。',anchors:[
    {id:'mass.boss-great-wall',title:'BOSS 长城'},
    {id:'mass.sloan-great-wall',title:'斯隆长城'},
    {id:'mass.hercules-corona-borealis-great-wall',title:'赫拉克勒斯—北冕座长城'},
    {id:'mass.hubble-volume',title:'哈勃体积内的临界质量'},
    {id:'mass.observable-universe',title:'可观测宇宙的普通物质'},
    {id:'mass.total-matter-universe',title:'可观测宇宙的总物质'},
    {id:'mass.dark-matter-mass',title:'可观测宇宙的暗物质'}
  ]}
];

export const decadeCount = bands.reduce((sum,band)=>sum+(band.to-band.from+1),0);
