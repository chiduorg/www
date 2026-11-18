# 空间内容来源复核：第五批与101条收尾审计

审核日期：2026-11-04。方法：source-check。

## 范围与结果

本批实际剩余25条，按文件名字典序确认后处理。25条的摘要和全部正文均依据所列资料重新撰写，未沿用旧正文；20条完成指定口径的来源核对，5条保留needs-review并将比较长度设为null/undetermined。本批有16条有限数值修订、4条保留原数值但重写口径与正文，另5条撤除旧占位坐标。

本批ID：`space.pollen`、`space.positronium`、`space.protein`、`space.proxima-centauri`、`space.quantum-fluctuation`、`space.quantum-foam-bubble`、`space.quark`、`space.red-blood-cell`、`space.red_blood_cell`、`space.ribosome`、`space.rice-grain`、`space.sloan-great-wall`、`space.strong-force`、`space.sun_diameter`、`space.superstring`、`space.synaptic-cleft`、`space.top-quark`、`space.triangulum-galaxy`、`space.trna`、`space.typical_bacterium`、`space.typical_virus`、`space.uranium-nucleus`、`space.virgo-supercluster`、`space.w-z-boson`、`space.water-molecule`。

量值来源只采用实际读取到的机构正文、原论文正文/摘要、数据库数表或原始机构PDF，不以搜索结果摘要充当数字证据。“reviewed”仅表示所述来源和指定口径已经核对，并非独立专家审稿或内容授权确认。

所有条目均保存review.originalQuantity，保留旧值的修订证据；rights.status统一为rewritten，许可证继续由项目统一确认。没有确认旧文授权，没有复制来源整段正文，没有改动程序源码或模型绑定ID。

## 逐条结果及直接主源

表中旧值单位均为米；展示值中的限定条件属于量值本身。详细conditions、review.notes及其余辅助主源见各Markdown条目。

| 稳定ID | 旧值 m | 现展示值 | 现口径与样本条件 | 状态 | 已读取的主要原始来源 |
|---|---:|---|---|---|---|
| space.pollen | 3.e-5 | 38 μm（水合梯牧草花粉，36–40 μm范围中点） | 梯牧草水合花粉的光镜直径范围中点；指定物种Phleum pratense；PalDat水合花粉光镜记录；38 μm是36–40 μm范围的自选中点，不是总体平均值。 | reviewed | [PalDat / Diethart B. and Auer W.](https://www.paldat.org/pub/Phleum_pratense/304807) |
| space.positronium | 2.e-10 | 约 0.1058 nm（相对坐标的玻尔长度2a₀） | 基态非相对论模型的电子—正电子相对坐标玻尔长度2a₀；非相对论库仑束缚模型；使用约化质量mₑ/2；不是以质心为原点的硬球半径或实测直径。 | reviewed | [University College London / Alberto Alonso](https://discovery.ucl.ac.uk/10047139/1/Alberto_Alonso_Thesis.pdf)；[NIST / CODATA](https://physics.nist.gov/cuu/Constants/Table/allascii.txt) |
| space.protein | 1.e-8 | 约 5.5 nm（血红蛋白分子宽度参照） | NIH科普资料所述血红蛋白分子近似宽度；特指红细胞内运输氧气的血红蛋白；资料为近似宽度概览，不是所有蛋白质的统一直径。 | reviewed | [NIH / NIGMS](https://nigms.nih.gov/biobeat/2023/12/science-snippet-zooming-in-on-nanoparticles) |
| space.proxima-centauri | 4.e+16 | 约 4.26 光年（距离） | ESO科普资料中太阳邻域到比邻星的近似距离；采用ESO展示资料中的四舍五入距离；不是恒星直径或半径，也不是特定历元的高精度天体测量解。 | reviewed | [ESO Supernova](https://supernova.eso.org/exhibition/0404/?lang=en)；[NASA / JPL Solar System Dynamics](https://ssd.jpl.nasa.gov/astro_par.html) |
| space.quantum-fluctuation | 1.e-33 | 比较长度未定（量子涨落没有统一直径） | 未指定场、状态与相关函数的涨落长度；只阅读；未指定观测量、频带、空间相关定义及实验设置，不进入长度比较轴。 | needs-review | [ETH Zurich / Quantum Optoelectronics Group](https://qoe.ethz.ch/research/vac-field-fluc.html) |
| space.quantum-foam-bubble | 3.e-31 | 比较长度未定（时空泡沫属于模型假说） | 未指定量子引力模型的泡沫结构长度；只阅读；未直接观测到具有所列尺寸的泡沫气泡；不同模型不能共用一个实测直径。 | needs-review | [NASA / Chandra X-ray Center](https://chandra.harvard.edu/photo/2015/quantum/) |
| space.quark | 1.e-18 | 比较直径未定（不采用旧硬球尺寸） | 夸克实体直径尚未定义为本页可比较量；只阅读；未指定夸克种类、可测形状量或实验上限；不能将分辨率上限等同于测得的直径。 | needs-review | [CERN](https://home.cern/science/physics/standard-model) |
| space.red-blood-cell | 7.5e-6 | 约 7.5 μm（人红细胞盘面平均直径） | 人红细胞在等渗悬液中的平均盘面直径；人体红细胞；等渗溶液悬浮状态；盘面直径，不是中央或边缘厚度，个体细胞存在差异。 | reviewed | [University of São Paulo / Institute of Biomedical Sciences](https://histologycolor.icb.usp.br/en/blood-red-blood-cells/) |
| space.red_blood_cell | 7.e-6 | 约 7.5 μm（人红细胞盘面平均直径） | 人红细胞在等渗悬液中的平均盘面直径；与space.red-blood-cell使用相同对象和等渗悬液盘面平均直径；保留此旧ID供已有链接使用。 | reviewed | [University of São Paulo / Institute of Biomedical Sciences](https://histologycolor.icb.usp.br/en/blood-red-blood-cells/) |
| space.ribosome | 2.5e-8 | 约 20 nm（讲座所示10 × 20 nm外形参照） | Scripps研究讲座所示核糖体较长外形尺度；Scripps研究讲座中的约100 × 200 Å示意外形，采用较长方向；未指定所有物种与功能状态的统一直径。 | reviewed | [Scripps Research / James R. Williamson](https://frontrow.scripps.edu/wp-content/uploads/2022/11/Williamson-front-row-lecture-slides-01182023.pdf)；[RCSB Protein Data Bank / David Goodsell](https://pdb101.rcsb.org/motm/121) |
| space.rice-grain | 5.e-3 | 5 mm（自选米粒长度参照） | 用于比较的5 mm未烹煮去壳米粒长度参照；自选未烹煮去壳完整米粒长度5 mm；不是品种均值。参照Codex长度分类选项2中短粒米长度小于6.2 mm的定义。 | reviewed | [FAO / WHO Codex Alimentarius](https://www.fao.org/input/download/standards/61/CXS_198e.pdf) |
| space.sloan-great-wall | 4.2e+24 | 约 13.7 亿光年（2005年论文长度口径） | Gott等2005年论文所报斯隆长城的长度；采用A Map of the Universe原论文的SDSS大尺度结构长度；与红移、宇宙学距离模型和结构识别有关，不是刚性球体直径。 | reviewed | [J. Richard Gott III et al. / Princeton University and collaborating institutions](https://arxiv.org/html/astro-ph/0310571v2)；[NASA / JPL Solar System Dynamics](https://ssd.jpl.nasa.gov/astro_par.html) |
| space.strong-force | 1.e-16 | 比较长度未定（需区分夸克作用与剩余核力） | 未限定过程与作用定义的强相互作用长度；只阅读；没有单一硬截止半径；需指定过程、模型和“范围”的定义，不能用一个旧数值概括。 | needs-review | [CERN](https://home.cern/science/physics/standard-model) |
| space.sun_diameter | 1.39e+9 | 约 139.14 万 km（体积等效平均直径） | 太阳体积等效平均半径695700 km的两倍；与space.sun相同的NASA体积等效平均直径；不含延伸日冕，不是地球上看到的角直径。 | reviewed | [NASA / NSSDCA](https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html) |
| space.superstring | 1.e-30 | 比较长度未定（无统一实测弦长） | 未指定弦理论模型和参数的弦长度；只阅读；理论对象；未给定模型、弦张力或相关参数，不能使用固定实体尺寸。 | needs-review | [CERN / CMS Experiment](https://cms.cern/index.php/node/1281) |
| space.synaptic-cleft | 2.e-8 | 30 nm（20–40 nm范围中点参照） | 化学突触间隙20–40 nm概述范围内的自选中点；UTHealth组织结构教材中的化学突触膜间隙概述；30 nm为自选范围中点，不是全部突触的平均值。 | reviewed | [UTHealth Houston / McGovern Medical School](https://nba.uth.tmc.edu/neuroscience/m/s1/chapter08.html) |
| space.top-quark | 1.e-19 | 约 1.144 × 10⁻¹⁸ m（约化康普顿波长） | 以PDG顶夸克直接测量质量换算的约化康普顿波长ħ/(mc)；采用PDG 2025直接测量质量172.56 GeV/c²和ħc约197.3269804 MeV·fm；是特征长度，不是实测粒子半径。 | reviewed | [Particle Data Group](https://pdg.lbl.gov/2025/tables/rpp2025-sum-quarks.pdf)；[NIST / CODATA](https://physics.nist.gov/cuu/Constants/Table/allascii.txt) |
| space.triangulum-galaxy | 5.7e+20 | 约 6 万光年（M33概览宽度） | ESA/Hubble概览中的M33约6万光年横向尺度；ESA/Hubble 2019科普图像说明的近似横向尺度；非暗物质晕外缘，非到地球的距离。 | reviewed | [ESA / Hubble](https://esahubble.org/news/heic1901/)；[NASA / JPL Solar System Dynamics](https://ssd.jpl.nasa.gov/astro_par.html) |
| space.trna | 1.5e-8 | 约 8 nm（tRNAᴾʰᵉ结构最大尺度参照） | 论文援引tRNAᴾʰᵉ晶体结构的近似最大外形尺度；Nucleic Acids Research纳米孔研究援引的苯丙氨酸tRNA晶体结构约8 nm最大尺度；不是所有tRNA的统一长度。 | reviewed | [Nucleic Acids Research authors / EMBL-EBI Europe PMC](https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12834567/fullTextXML)；[RCSB Protein Data Bank / David Goodsell](https://pdb101.rcsb.org/motm/15) |
| space.typical_bacterium | 1.e-6 | 1 μm（细菌量级参照） | 原核细胞量级中的1 μm示意参照；与space.bacteria相同的1 μm概览参照；没有指定菌种、菌株或培养条件，不是所有细菌的直径。 | reviewed | [OpenStax / Rice University](https://openstax.org/books/biology-2e/pages/4-2-prokaryotic-cells) |
| space.typical_virus | 1.e-7 | 100 nm（甲型流感病毒范围内参照） | 甲型流感病毒80–120 nm范围内的100 nm示意参照；与space.virus相同；选取University of Utah给出的甲型流感病毒80–120 nm范围内的100 nm，不代表全部病毒。 | reviewed | [University of Utah / Genetic Science Learning Center](https://viruses.gslc.utah.edu/viruses-are-diverse) |
| space.uranium-nucleus | 1.5e-14 | 约 5.8571 fm（²³⁸U电荷rms半径） | 铀-238核电荷分布的均方根半径；核素²³⁸U；采用IAEA评估表rms电荷半径5.8571±0.0033 fm；不是原子直径、核硬球半径或核直径。 | reviewed | [IAEA Nuclear Data Services / I. Angeli and K. Marinova](https://www-nds.iaea.org/radii/) |
| space.virgo-supercluster | 1.e+23 | 约 1 亿光年（NASA概览跨度） | NASA概览中本超星系团约1亿光年的直径参照；历史地理式本超星系团/室女座超星系团概念，采用NASA科普资料约1亿光年口径；非室女座星系团直径，非拉尼亚凯亚流域边界。 | reviewed | [NASA / GSFC / HEASARC](https://imagine.gsfc.nasa.gov/features/cosmic/local_supercluster_info.html)；[NASA / JPL Solar System Dynamics](https://ssd.jpl.nasa.gov/astro_par.html) |
| space.w-z-boson | 1.e-18 | 约 2.455 × 10⁻¹⁸ m（W玻色子约化康普顿波长） | 以PDG W玻色子质量换算的约化康普顿波长ħ/(mc)；采用PDG 2025 W质量80.3692 GeV/c²和ħc约197.3269804 MeV·fm；特指W参照，Z需按自身质量另算；不是物理直径。 | reviewed | [Particle Data Group](https://pdg.lbl.gov/2025/listings/rpp2025-list-w-boson.pdf)；[NIST / CODATA](https://physics.nist.gov/cuu/Constants/Table/allascii.txt)；[CERN](https://home.cern/science/physics/standard-model) |
| space.water-molecule | 2.8e-10 | 约 0.15144 nm（H—H核间距） | 中性气相水分子平衡几何中的H—H核间距；NIST CCCBDB中性H₂O实验平衡几何；两个氢核之间的距离1.5144 Å；不是液态水的动力学直径或范德华外形直径。 | reviewed | [NIST / Computational Chemistry Comparison and Benchmark Database](https://cccbdb.nist.gov/exp2x.asp?casno=7732185&charge=0) |

## 重要修订说明

- 花粉从没有指定物种的30 μm，改为梯牧草水合花粉36–40 μm范围中点38 μm。它是自选中点，不是样本总体均值；PalDat记录还区分水合、干燥与显微制样状态。
- 电子偶素采用电子—正电子相对坐标的玻尔长度2a₀≈0.1058 nm。此量不是以质心为原点的粒子轨道半径，也不称为硬球直径；不再将142 ns寿命无条件套给所有自旋和激发态。
- 蛋白质泛称改为血红蛋白近似宽度5.5 nm。核糖体采用Scripps讲座图示约100 × 200 Å中的较长方向20 nm，明确为讲座外形参照，未宣称覆盖全部物种。
- 红细胞限定为等渗悬液中的人红细胞平均盘面直径7.5 μm；两个历史入口对齐。tRNA采用纳米孔原始研究援引的tRNAᴾʰᵉ晶体结构约8 nm最大尺度，而非旧15 nm或孔径本身。
- 米粒保留5 mm，但明确为自行选取的未烹煮去壳米粒长度，引用Codex分类选项2作范围依据，不伪称品种平均或统一尺寸。突触间隙由20 nm改为教材20–40 nm范围中点30 nm，不是全部突触的平均值。
- 比邻星4.26光年是距离；M33约6万光年是2019 ESA/Hubble概览宽度。两者均明确与恒星/星系自身的其他尺寸及距离分开。
- 斯隆长城依Gott等2005原论文的1.37 billion light years long改为约1.296 × 10²⁵ m；撤除将当年“最大”描述直接当成今日定论的表述。室女座超星系团采用NASA概览约1亿光年，而非把旧1 × 10²³ m与1.1亿光年混写；与室女座星系团和拉尼亚凯亚流域边界分开。
- 顶夸克采用PDG 2025直接质量172.56 GeV/c²，W采用80.3692 GeV/c²评估值，分别由ħc/E得到约1.144 × 10⁻¹⁸ m与2.455 × 10⁻¹⁸ m。两者是约化康普顿波长；普通波长会大2π倍，均不是实体直径。W/Z条目的单一数值只指W，不冒充二者相同精确尺寸。
- 铀核明确指定²³⁸U，采用IAEA所列rms电荷半径5.8571±0.0033 fm，与碳-12、铁-56的rms半径口径一致；未继续保留旧文“稳定核素”“主要裂变燃料”等未经本条来源支持的泛化。
- 水分子改为NIST中性气相H₂O平衡几何的H—H核间距1.5144 Å；并列O—H约0.9578 Å和HOH约104.48°以明确几何。核间距、动力学直径及范德华包络不可混用。

## 访问与证据记录

- UCL论文PDF为13,114,923字节，网页解析器因体积限制不能完整载入；使用同一公开机构URL直接读取PDF，核对PDF第9页§1.2的相对质量和两倍玻尔尺度段落。没有使用搜索摘要作为量值依据。
- Scripps讲座PDF为13,353,491字节，网页解析器未成功展开；通过原公开机构URL读取PDF第6页，确认100 by 200 Å及大小亚基示意。
- tRNA论文的出版商跳转未读取成功，PMC页面要求浏览器验证；未尝试绕过验证。使用EMBL-EBI Europe PMC公开全文XML正常HTTP 200读取完整原论文，在纳米孔选型段落直接核对“maximum dimension of 8 nm”与tRNAᴾʰᵉ晶体结构的对应。RCSB PDB正文用于核对L形折叠和功能。
- INFN电子偶素讲座链接返回机器人验证，未将其搜索摘要当作证据；改用上列UCL原始研究论文。
- 其余本批表列来源均读到相应正文、数表或PDF。相关搜索仅用于找主源，未以搜索结果摘录代替原始事实核对。

## 未定比较量与明确缺口

本批以下5条虽完成全文重写，但未强标reviewed：

| ID | 撤除的旧长度 | 尚缺什么 | 目前资料能支持什么 |
|---|---:|---|---|
| space.quantum-fluctuation | 10⁻³³ m | 场、量子态、观测量、频带与相关长度定义 | ETH研究组的特定太赫兹真空电场相关测量，不能给全部量子涨落一个直径 |
| space.quantum-foam-bubble | 3 × 10⁻³¹ m | 明确量子引力模型与参数；可核实气泡尺寸 | NASA/Chandra给出特定泡沫模型的观测约束，未直接观测气泡 |
| space.quark | 10⁻¹⁸ m | 粒子种类、实验限值及置信度或可测形状量定义 | CERN支持夸克分类与相互作用背景，未支持该实体直径 |
| space.strong-force | 10⁻¹⁶ m | 具体过程、核力/色相互作用区分、势模型及力程判据 | CERN支持强作用概念，未给一个统一硬截止距离 |
| space.superstring | 10⁻³⁰ m | 模型、弦张力等参数与可验证长度依据 | CMS支持弦理论及不同额外维度模型的背景，未测得统一弦长 |

## 101条收尾审计

审计范围为content/entries/space下全部101条。此处的全量审计是结合前四批来源核对记录，对全部现有正文与元数据再次检查，不声称本轮重新获取了101条的每一个网页。

| 检查 | 结果 |
|---|---|
| rights.status | 101/101为rewritten；不是licensed，也未确认旧文授权 |
| review与来源记录 | 101/101具有source-check、2026-11-04、来源对象与conditions；所有review.originalQuantity数值与旧data/space.json逐ID一致 |
| 来源核对状态 | 88 reviewed；13 needs-review，均null/undetermined只阅读 |
| 量纲 | 101/101为length与m；无截面面积直接当作米的入轴条目 |
| 口径 | 逐条阅读摘要、quantity.measure、conditions及全部正文，区分直径、半径、高度、跨度、距离、厚度、步幅、波长及定义单位 |
| 旧正文残留 | 101条无原描述全文复用；无旧历史背景/科学家等模板段落；保留旧值仅作明确标注的修订说明与originalQuantity证据 |
| 稳定ID和关联 | 101个空间ID唯一；所有related目标在space/time/energy内容目录中真实存在，无重复related |
| 重复概念 | 7个canonicalId目标存在，无自指与循环，来源与目标数值相同，已人工核对相同口径；未依据“相同数字”自动合并 |
| 程序验证 | 全部101条通过现有validateEntry，只读审计无编译写入；未新增测试或改程序源码 |

全站仍需只阅读的13条：`space.chlorophyll`、`space.city`、`space.gluon-field`、`space.great-wall`、`space.gut-scale`、`space.inflation`、`space.neutrino`、`space.pacific-ocean`、`space.quantum-fluctuation`、`space.quantum-foam-bubble`、`space.quark`、`space.strong-force`、`space.superstring`。其余八条缺口沿用对应前批报告，不因全文重写而变成已核实尺寸。

长度均用米并不代表物理定义相同：例如铀核rms半径、星际距离、驱动蛋白步幅和行星平均直径相除，只是所选长度之比，不能统一画成每个对象的实际外壳直径。显示measure和conditions是比较解释的一部分。模型、纹理和动画的科学标注与资产品质仍由后续图景工作另行验收。

## canonicalId兼容关系

| 兼容旧ID | 主条目 | 共同口径 | 本轮修改范围 |
|---|---|---|---|
| space.moon_diameter | space.moon | 平均直径3474.8 km | 经主代理明确授权，仅给既有条目添加canonicalId |
| space.milky_way_disk | space.milky-way | 恒星盘约10万光年概览宽度 | 同上，未改正文或量值 |
| space.local_group | space.local-group | 本星系群约1000万光年跨度 | 同上，未改正文或量值 |
| space.red_blood_cell | space.red-blood-cell | 人红细胞等渗悬液平均盘面直径7.5 μm | 本批重写条目元数据 |
| space.sun_diameter | space.sun | 太阳平均直径1391400 km | 本批重写条目元数据 |
| space.typical_bacterium | space.bacteria | 原核细胞量级中的1 μm自选示意 | 本批重写条目元数据 |
| space.typical_virus | space.virus | 甲型流感80–120 nm中的100 nm自选示意 | 本批重写条目元数据 |

蚂蚁与ant_length分别已指定法老蚁和木匠蚁；相同数字的光年/天体距离、5 mm米粒/蚊子，以及2a₀原子参照/电子偶素相对坐标也不是同一概念，不合并。本轮没有发现需要擅自修改前76条正文或量值的新增实质问题。
