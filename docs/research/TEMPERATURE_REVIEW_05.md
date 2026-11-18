# 温度正文逐条重写 · 第五批与全量审计

日期：2026-11-04。最后24条全文和简介已逐条重写，仅修改这24条及本报告。22条通过资料比对，2条仍需选择模型或工况，采用未定量值只阅读。reviewed表示编辑和来源核对，不等于外部同行评议。

| 文件 | 当前参考 | 状态 | 修订 |
|---|---|---|---|
| rocket_plume.md | 约 3,600 K（6,000 °F量级） | reviewed | 旧3300K下游喷焰泛值改为RS25燃烧室6000°F量级，区分位置。 |
| room-temperature.md | 293.15 K（20 °C，示例） | reviewed | 293K与20°C对齐，明确人为示例，删除最佳生命温度断言。 |
| silicon-burning.md | 约 3 × 10⁹ K（模型量级） | reviewed | 保留3GK但改为准平衡模型量级，删除简单线性捕获链和必然立即坍缩。 |
| silicon-melting.md | 约 1,687 K（1,414 °C） | reviewed | 保留表值，明确硅与二氧化硅不同，去掉自然界绝对断言。 |
| silver-melting.md | 1,234.93 K（961.78 °C，ITS-90） | reviewed | 1235K取整更新为ITS90固定点，删无条件多项最高排行。 |
| sirius-surface.md | 约 9,845 ± 64 K | reviewed | 旧9940K泛值改9845±64K可定位研究，明确A/B身份。 |
| sodium-melting.md | 约 370.944 K（97.794 °C） | reviewed | 旧371K对齐表值，明确纯元素和盐不同，移除未经核实的系统性能扩展。 |
| solar-chromosphere.md | 约 4,000–8,000 K（轴示例6,000 K） | reviewed | 旧10000K无依据平均值撤回；同NASA分层示意范围化。 |
| solar-corona.md | 约 2 × 10⁶ K（日冕参考） | reviewed | 保留2e6K近似但明确区域/可达量级，去掉唯一机制及无条件平均。 |
| solar-transition-region.md | 约 8,000–500,000 K（轴取上端） | reviewed | 旧50万K单一对象改范围，统一与色球同一NASA层界示意。 |
| squid-working-temperature.md | 4.2 K（器件研究条件） | reviewed | 4.2K绑定具体器件论文，删除缺少带宽的5e−18T纪录及应用混写。 |
| steelmaking_temp.md | 需指定工况（暂无轴值） | needs-review | 撤回统一炼钢1973K及产量等未核断言，置null为编辑证据缺口而非科学未知。 |
| sunspot.md | 约 4,000 K（区域参考） | reviewed | 保留有来源4000K量级，避免4000°C混用与统一温度/必然空间天气断言。 |
| superfluid.md | 约 2.17 K（氦-4参考） | reviewed | 保留2.17K并补同位素/低压条件，去掉无条件零黏度等简化。 |
| supernova.md | 约 10¹¹ K（坍缩核心量级） | reviewed | 保留核心1e11K量级，限制对象与类型，撤回重元素全部来自超新星。 |
| thermosphere.md | 约 500–2,000 K（轴示例1,000 K） | reviewed | 保留区间内1000K示例，补range，改正热层和电离层完全等同。 |
| tungsten-filament.md | 2,800 K（实验参考） | reviewed | 2800K绑定原始钨带校准研究，区分材料实温/相关色温，删固定效率百分比。 |
| tungsten-melting.md | 约 3,687 K（3,414 °C，所引表值） | reviewed | 明确采用RSC当前3687K表值，与旧3695K差异记录而非伪装测量变化。 |
| type-ia-supernova.md | 暂无统一轴值（需模型与区域） | needs-review | 撤回通用5e9K峰值与单一吸积通道/光度完全一致；量值未定仅阅读。 |
| vega-surface.md | 约 7,900–10,150 K（模型；轴取极区） | reviewed | 旧9600K全表面泛值改为可定位自转模型范围7900–10150K。 |
| venus-surface.md | 约 737 K（464 °C） | reviewed | 保留约737K但明确NASA均温概览与464°C换算，去掉探测器全部两小时等泛化。 |
| water-triple-point.md | 273.16 K（ITS-90；实温需不确定度） | reviewed | 明确ITS-90赋值与2019后热力学温度有不确定度，不再称现行单位定义点。 |
| white-dwarf-surface.md | 约 25,000 K（Sirius B参考） | reviewed | 泛指年轻白矮星改为SiriusB具体25000K参考，与A星分开。 |
| ybco-superconducting-transition.md | 约 92 K（材料条件相关） | reviewed | 保留有来源优化掺杂92K，撤回所有样品/低成本的无条件结论。 |

## 每条来源与适用条件

### temperature.rocket_plume

NASA资料中的RS-25燃烧室约6000°F，换算约3589K；不是喷嘴出口或下游整片喷焰的统一温度。

- [Aerospace Castings: RS-25 combustion chamber](https://ntrs.nasa.gov/api/citations/20170012457/downloads/20170012457.pdf) · NASA Technical Reports Server (2017) · 访问2026-11-04

### temperature.room-temperature

为日常尺度比较选取20°C作室温示例；室温不是全球一致的定义点或最佳生命温度。

- [Kelvin: Introduction](https://www.nist.gov/si-redefinition/kelvin-introduction) · NIST · 访问2026-11-04

### temperature.silicon-burning

Hix与Thielemann研究中约3GK以上的准平衡描述；不等于所有恒星单一硅点火温度。

- [Silicon Burning II: Quasi-Equilibrium and Explosive Burning](https://arxiv.org/abs/astro-ph/9808203) · Hix and Thielemann, original research (1998) · 访问2026-11-04

### temperature.silicon-melting

RSC纯元素硅表列近似；晶体生产设备工况、掺杂或合金不可直接等同。

- [Silicon: element data](https://periodic-table.rsc.org/element/14/silicon) · Royal Society of Chemistry · 访问2026-11-04

### temperature.silver-melting

ITS-90高纯银凝固固定点赋值；实物实现有不确定度，银合金另列。

- [Thermometry calibration: ITS-90 fixed points](https://cnrc.canada.ca/en/certifications-evaluations-standards/instrument-calibration-services/thermometry-humidity-calibration-services) · National Research Council Canada · 访问2026-11-04

### temperature.sirius-surface

Davis等2010年SUSI/VLTI角直径和总辐射通量研究；指A星有效温度，不是白矮星伴星B。

- [The Angular Diameter and Fundamental Parameters of Sirius A](https://arxiv.org/abs/1010.3790) · Davis et al., Publications of the Astronomical Society of Australia (2010) · 访问2026-11-04

### temperature.sodium-melting

RSC纯元素钠表列值；钠盐、合金和实际设备条件不同。

- [Sodium: element data](https://periodic-table.rsc.org/element/11/sodium) · Royal Society of Chemistry · 访问2026-11-04

### temperature.solar-chromosphere

采用NASA2012分层示意的约4000–8000K，不声称是所有位置或其他模型的严格边界；6000K为区间中点。

- [Layers of the Sun](https://www.nasa.gov/image-article/layers-of-sun/) · NASA (2012 layer schematic) · 访问2026-11-04

### temperature.solar-corona

NASA太阳概览所述可达约200万°C量级；K与°C在该取整精度近似同量级，不是全部日冕均温或绝对峰值。

- [Sun: Facts](https://science.nasa.gov/sun/facts/) · NASA Science · 访问2026-11-04

### temperature.solar-transition-region

NASA2012分层示意的8000–500000K；轴存所引上端，不是全区均温或所有太阳大气模型严格边界。

- [Layers of the Sun](https://www.nasa.gov/image-article/layers-of-sun/) · NASA (2012 layer schematic) · 访问2026-11-04

### temperature.squid-working-temperature

2020器件研究在4.2K测得SQUID性能；不是所有低温/高温SQUID共同工作温度，噪声指标须带单位带宽。

- [Towards ultra-sensitive SQUIDs based on sub-micrometer-sized Josephson Junctions](https://arxiv.org/abs/2004.10064) · Original SQUID device research (2020, revised 2023) · 访问2026-11-04

### temperature.steelmaking_temp

本条未选定钢种、炉次、工序和采样位置，旧1700°C不再当作所有炼钢的统一温度；只阅读。

- [Steel Production](https://www.steel.org/steel-technology/steel-production/) · American Iron and Steel Institute · 访问2026-11-04

### temperature.sunspot

NASA收录的2024黑子学术介绍采用约4000K与周围光球对比；不代表所有黑子或半影统一温度。

- [Sunspots, an Introduction](https://ntrs.nasa.gov/api/citations/20240004801/downloads/IAU388_gakkou_240331_for_submission_240417a.pdf) · NASA NTRS / IAU 388 scientific introduction (2024) · 访问2026-11-04

### temperature.superfluid

NIST低温介绍的液氦约2.17K超流转变参考；具体压力与同位素不能省略。

- [About Cryogenics](https://www.nist.gov/mml/acmd/cryogenic-technologies-project/about-cryogenics) · NIST · 访问2026-11-04

### temperature.supernova

NASA恒星演化概览所述坍缩核心可达千亿度量级；不是超新星可见光光球均温，也不是所有类型同一值。

- [Stars in an Exoplanet World](https://science.nasa.gov/exoplanets/stars/) · NASA Science · 访问2026-11-04

### temperature.thermosphere

NASA技术资料给出的热层气体动理学温区约500–2000K；1000K为区间内示例，不是所有高度的均温。

- [NASA-HDBK-4007: kinetic temperature of upper-atmospheric gas](https://standards.nasa.gov/sites/default/files/standards/NASA/Baseline-w/CHANGE-3/3/Historical/2020-10-16_nasa-hdbk-4007_w-change_1_inactive_for_new_designdocx_.pdf) · NASA technical handbook, historical physical description · 访问2026-11-04

### temperature.tungsten-filament

原始研究中带蓝宝石窗口的钨带灯在2800K工作；不是所有白炽灯实际温度或相关色温的统一值。

- [Use of a tungsten filament lamp as a calibration standard in the vacuum ultraviolet](https://pubmed.ncbi.nlm.nih.gov/20094612/) · Original optical calibration study (1970) · 访问2026-11-04

### temperature.tungsten-melting

采用当前所引RSC元素表的3687K近似；不同资料取值差异不表示温度随时间发生实测变化。

- [Tungsten: element data](https://periodic-table.rsc.org/element/74/tungsten) · Royal Society of Chemistry · 访问2026-11-04

### temperature.type-ia-supernova

旧5e9K未绑定起燃、燃烧前沿、核反应区或光球定义；需要指定模型与时间后选数值，只阅读。

- [Three-dimensional delayed-detonation models with nucleosynthesis for Type Ia supernovae](https://arxiv.org/abs/1211.3015) · Seitenzahl et al., original hydrodynamic simulations (2013) · 访问2026-11-04

### temperature.vega-surface

Aufdenberg等2006自转重力昏暗模型，赤道约7900K、极区高约2250K；轴取模型极区10150K，非全星单一实温。

- [First Results from the CHARA Array VII: Interferometric Measurements of Vega](https://arxiv.org/abs/astro-ph/0603327) · Aufdenberg et al., original interferometric research (2006) · 访问2026-11-04

### temperature.venus-surface

采用NASA Solar System Temperatures所列金星平均464°C；不是任意地点时段的精确测量。

- [Solar System Temperatures: mean temperatures](https://science.nasa.gov/resource/solar-system-temperatures/) · NASA Science · 访问2026-11-04

### temperature.water-triple-point

ITS-90赋值273.16K；2019年后开尔文由固定玻尔兹曼常数定义，真实水三相点热力学温度不再作为无误差定义常数。

- [Kelvin: Present Realization](https://www.nist.gov/si-redefinition/kelvin/kelvin-present-realization) · NIST · 访问2026-11-04
- [SI Brochure Appendix 2: kelvin](https://www.bipm.org/documents/20126/41489682/SI-App2-kelvin.pdf/) · BIPM · 访问2026-11-04

### temperature.white-dwarf-surface

NASA/Chandra所述Sirius B约25000K；不是所有年轻白矮星共同值，也不同于A星温度。

- [X-Rays From Sirius B](https://science.nasa.gov/image-article/apod-2000-october-06-x-rays-from-sirius-b/) · NASA / Chandra / SAO (2000) · 访问2026-11-04

### temperature.ybco-superconducting-transition

所引研究中的优化掺杂YBa2Cu3O7参考Tc约92K；氧含量、掺杂、应变与样品条件不可省略。

- [Disentangling bond lengths and orbital symmetries in controlling Tc in YBa2Cu3O7](https://arxiv.org/abs/2012.04897) · Original electronic-structure research (2020) · 访问2026-11-04


## 全energy93条审计结果

- 条目数：93；rights.rewritten：93；资料核对通过：77；仍待核对：16。
- 所有条目有非空重写正文、简介、来源、条件与原始quantity证据；通过当前validateEntry。
- 与原始JSON逐项比对，未发现旧整段description被完整沿用到新正文或新简介（旧完整description长度至少50字符作为检测条件）。这项检查不声称能机械证明每个科学断言正确；逐条编辑证据见五批来源报告。
- 本次人工重写逐项把温度对象、时间/区域、参考/模型和条件写入正文。摘要与displayValue对照审读，未发现仍沿用旧数值导致的实质矛盾；近似值和温标换算保留取整口径。
- canonicalId目标存在，无自指和循环；当前明确重复为oxygen-boiling→liquid-oxygen。
- 所有quantity.range端点有效，轴点位于所声明范围内；中点、端点或表中示例的选择依据已写入各条conditions。
- 所有null量值有status:undetermined，且不标reviewed；表示本条尚未选定可核实的对象/模型/测试条件，不宣称科学界不知道该现象。
- 本批2条未定为炼钢与Ia；前批3条未定为中子星核心、新星与纸张着火。
- 旧正文中的人物归因、全部/唯一/最佳等无来源扩展已在重写中删除。legacy字段及review.originalQuantity仅供迁移追溯，不是新正文结论。
- 当前审计不包含器件/场景物理模拟、全部外部链接即时可达性或内容公开许可证确认。

### 仍待核对的条目

- temperature.black-hole-accretion-disk：只作高温吸积盘内区的示例量级；尚未绑定具体黑洞、吸积态、半径和测温模型。
- temperature.carbon-fusion：参考研究所述约0.6–0.8GK的碳燃烧温区；密度、反应率与恒星演化状态不同，无单一通用点火温度。
- temperature.carbon-sublimation：RSC元素表的升华参考值；具体同素异形体、压力与测量方法仍需补充，非所有碳材料通用。
- temperature.cooking_oil_smoke：尚未将旧参考463K关联到特定油样、精炼程度、含杂质和测试方法；不能用于判断食用安全。
- temperature.earths-core：Anzellini等2013年高压铁熔化实验向内核边界外推；不是地核温度计直接读数，也不是合金成分已确定的地核实温。
- temperature.electroweak：D’Onofrio与Rummukainen标准模型有效理论格点计算，159.5±1.5GeV；用kBT换算，不是实验测得的宇宙温度。
- temperature.glass_melting：旧场景约1400°C工艺参考，尚未关联具体配方、黏度指标和炉况；不是统一熔点。
- temperature.gut：早期宇宙示意中的假说温标；依赖具体大统一模型，没有实测统一相变温度。
- temperature.helium-3-superfluid：保留旧2.5mK温区参考；超流转变依赖压力与相态，尚未绑定具体相界和压力。
- temperature.hypernova：旧温度坐标缺少对象、爆发区域、阶段和温度定义；不能作为极超新星统一实测温度。
- temperature.kilonova_temp：旧并合瞬间温标未对应指定模拟区域和时刻；不是千新星可见光光球温度。
- temperature.neutron-star-core：核心温度依赖年龄、组成、冷却和加热过程；旧1e9K没有绑定特定对象与模型，不进入数值轴。
- temperature.nova-outburst：旧1e8K未区分燃烧层、光球或抛射物，也未绑定模型；暂只阅读。
- temperature.paper-autoignition：纸样、热流、外部引火源和通风条件未指定；不把文学标题451°F当材料常数，不入数轴。
- temperature.steelmaking_temp：本条未选定钢种、炉次、工序和采样位置，旧1700°C不再当作所有炼钢的统一温度；只阅读。
- temperature.type-ia-supernova：旧5e9K未绑定起燃、燃烧前沿、核反应区或光球定义；需要指定模型与时间后选数值，只阅读。

### 机器审计错误

无。
