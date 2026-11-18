# 温度正文逐条重写 · 第四批

日期：2026-11-04。按未重写文件名字典序选取20条，全文与简介全部重写；17条资料比对通过，3条保留待审核，其中未能确定统一数值的条目以quantity.value:null/status:undetermined仅供阅读。没有修改先前49条或源码。

| 文件 | 当前参考 | 状态 | 修订 |
|---|---|---|---|
| neon-boiling-point.md | 约 27.1 K（−246.05 °C） | reviewed | 27K细化为表列值取整27.1K，删除制冷用途泛化。 |
| neon-triple-point.md | 24.5561 K（ITS-90） | reviewed | 旧24.56K对齐ITS-90赋值；删除氖主要来自宇宙射线等未经核实断言。 |
| neutrino-background-temp.md | 约 1.95 K（理论参数） | reviewed | 保留1.95K但明确理论分布参数和非直接测温，移除混合粒子总数。 |
| neutron-star-core.md | 温度未定（需对象与冷却模型） | needs-review | 旧1e9K无模型锚点，置null仅阅读；撤去核心物态被温度直接决定的暗示。 |
| neutron-star-surface.md | 约 2 × 10⁶ K（Cas A参考） | reviewed | 泛指年轻中子星1e6K改为CasA约2e6K具体研究参考。 |
| nickel-melting.md | 约 1,728 K（1,455 °C） | reviewed | 保留来源支持1728K，撤去丰度排行与最高熔点泛化。 |
| niobium-superconducting-transition.md | 约 9.2 K | reviewed | 保留9.2K参考，撤去元素最高纪录及无条件无损电流泛化。 |
| nova-outburst.md | 温度未定（需指定区域与阶段） | needs-review | 旧1e8K置null；避免燃烧层与光球混用，纠正全部超新星毁星泛化。 |
| nuclear-demagnetization-cooling.md | 约 421 ± 35 μK | reviewed | 旧1μK无实验对应改为421±35μK具体电子实验，记录3σ口径。 |
| o-type-star-surface.md | 约 40,000 K（教学示例） | reviewed | 保留4万K教学参考但撤去严格下界与统一结局。 |
| oxyacetylene-flame.md | 约 3,473 K（3,200 °C） | reviewed | 3500K粗值与明确3200°C来源对齐；删除工业最高火焰纪录泛化。 |
| oxygen-boiling.md | 约 90.2 K（−182.95 °C） | reviewed | 确认与液氧温度重复，添加canonicalId；删除其他气体在同温度均为液态的错误。 |
| oxygen-fusion.md | 约 2 × 10⁹ K（恒星模型参考） | reviewed | 保留来源支持2e9K模型量级，撤去固定时长和绝对点火门槛。 |
| paper-autoignition.md | 无统一温度（需试验条件） | needs-review | 撤回通用451°F自燃点；置null仅阅读，保留旧值证据。 |
| pluto-surface.md | 约 33–55 K（轴示例44 K） | reviewed | 旧44K均温改为33–55K范围中点示例，不宣称绝对温限。 |
| quark-gluon.md | 约 1.82 × 10¹² K（156.5 MeV，模型参考） | reviewed | 旧2e12K泛阈值细化为156.5±1.5MeV格点手征过渡参考，区分火球初温。 |
| red-dwarf-surface.md | 约 2,400–3,900 K（轴示例3,000 K） | reviewed | 撤回全类2500K与固定占比寿命；保留特征表示例范围。 |
| red-giant-core.md | 约 10⁸ K（氦燃烧参考） | reviewed | 将原1e9K误导改成NASA氦燃烧1e8K量级，并改标题避免混同统一氦闪。 |
| rhodium-iron-thermometer.md | 参考函数约 0.65–24.5561 K（轴取0.65 K） | reviewed | 0.0001K无依据能力撤回，改成0.65–24.5561K参考函数；明确精度结果另有温区。 |
| rigel-surface.md | 约 11,000 K（概览参考） | reviewed | 来源不明12100K改为可定位NASA概览11000K；删除固定光度及爆发结局。 |

## 来源与适用条件

### temperature.neon-boiling-point

纯氖常压沸点近似，来源表值27.104K取整；压力与样品条件需同时说明。

- [Neon: element data](https://periodic-table.rsc.org/element/10/neon/) · Royal Society of Chemistry · 访问2026-11-04

### temperature.neon-triple-point

ITS-90氖三相点固定点赋值；不是任意同位素组成样品无误差的热力学温度测量。

- [Thermometry and humidity calibration services: ITS-90 fixed points](https://cnrc.canada.ca/en/certifications-evaluations-standards/instrument-calibration-services/thermometry-humidity-calibration-services) · National Research Council Canada · 访问2026-11-04

### temperature.neutrino-background-temp

标准热史下Tν≈(4/11)^(1/3)Tγ的有效分布参数；不是已直接测得的背景温度或当前所有中微子的动能温度。

- [Cosmic neutrino background: temperature parameter](https://home.ba.infn.it/~marrone/interactive-relic-neutrinos.html) · Alessandro Marrone, INFN Bari · 访问2026-11-04

### temperature.neutron-star-core

核心温度依赖年龄、组成、冷却和加热过程；旧1e9K没有绑定特定对象与模型，不进入数值轴。

- [Rare and Cool: Cas A cooling and inferred superfluid core](https://svs.gsfc.nasa.gov/11272/) · NASA Scientific Visualization Studio · 访问2026-11-04

### temperature.neutron-star-surface

Chandra所述Cas A中子星的大气光谱温度约两百万度量级；不是所有年轻中子星共同温度。

- [The Remarkable Properties of Neutron Stars](https://chandra.harvard.edu/blog/node/432) · NASA Chandra X-ray Center · 访问2026-11-04

### temperature.nickel-melting

RSC纯元素镍的熔点表列近似，不能直接替代镍合金工况。

- [Nickel: element data](https://periodic-table.rsc.org/element/28/nickel) · Royal Society of Chemistry · 访问2026-11-04

### temperature.niobium-superconducting-transition

金属铌常用体相临界温度参考；材料纯度、外磁场、薄膜结构与测试条件会影响实际转变。

- [Evaluation of the Propensity of Niobium to Absorb Hydrogen During Fabrication of SRF Cavities](https://pmc.ncbi.nlm.nih.gov/articles/PMC4548874/) · NIST Journal of Research, original study · 访问2026-11-04

### temperature.nova-outburst

旧1e8K未区分燃烧层、光球或抛射物，也未绑定模型；暂只阅读。

- [What is Your Cosmic Connection to the Elements?](https://imagine.gsfc.nasa.gov/educators/elements/imagine/04.html) · NASA GSFC · 访问2026-11-04

### temperature.nuclear-demagnetization-cooling

Sarsby等2020年片上/片外核制冷纳米器件实验，电子温度421±35μK；原论文此误差为3σ区间，不是普适最低温。

- [500 microkelvin nanoelectronics](https://pmc.ncbi.nlm.nih.gov/articles/PMC7083907/) · Sarsby, Yurttagül and Geresdi, Nature Communications (2020) · 访问2026-11-04

### temperature.o-type-star-surface

NASA Space Math分类教学表的O型示例温度；不是整个光谱类别统一值，也不代表所有恒星最终命运。

- [Exploring Stars in the Milky Way: temperature classification examples](https://www.nasa.gov/wp-content/uploads/2013/05/752218main_exploring_stars.pdf) · NASA Space Math · 访问2026-11-04

### temperature.oxyacetylene-flame

TWI所述适当氧乙炔比例下的火焰近似温度；不是全火焰均温或所有气体燃烧最高温。

- [Oxy-fuel welding: oxyacetylene flame](https://www.twi-global.com/technical-knowledge/job-knowledge/oxy-fuel-welding-003) · TWI · 访问2026-11-04

### temperature.oxygen-boiling

纯氧正常沸点，与temperature.liquid-oxygen为同一物理口径；NIST表值90.2±0.2K。

- [Oxygen: phase change data](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7782447&Mask=4) · NIST Chemistry WebBook · 访问2026-11-04

### temperature.oxygen-fusion

作者恒星核合成说明中的氧燃烧量级；依赖密度、组成与反应网络，不是所有恒星统一临界点。

- [Origin of the Chemical Elements: stellar burning](https://ned.ipac.caltech.edu/level5/Sept16/Rauscher/Rauscher4.html) · Rauscher and Patkos, author chapter hosted by NASA/IPAC NED · 访问2026-11-04

### temperature.paper-autoignition

纸样、热流、外部引火源和通风条件未指定；不把文学标题451°F当材料常数，不入数轴。

- [Ignition of Cellulosic Paper at Low Radiant Fluxes](https://ntrs.nasa.gov/citations/19960048690) · K. Alan White, NASA Technical Memorandum 107311 (1996) · 访问2026-11-04

### temperature.pluto-surface

所引研究摘要的表面温区33–55K，44K为中点定位，不是单独测得的全球平均；局部与季节可超出摘要范围。

- [Pluto surface ice experiments: temperatures and phase conditions](https://www.hou.usra.edu/meetings/plutosystem2025/pdf/7016.pdf) · Pluto System conference, original research abstract (2025) · 访问2026-11-04

### temperature.quark-gluon

Bazavov等格点QCD结果在零化学势下Tc=156.5±1.5MeV；用kBT换算，不等同于每场重离子碰撞的实际最高温。

- [Chiral crossover in QCD at zero and non-zero chemical potentials](https://arxiv.org/abs/1812.08235) · Bazavov et al., Phys. Lett. B 795 (2019) · 访问2026-11-04
- [2022 CODATA constants: complete listing](https://physics.nist.gov/cuu/Constants/Table/allascii.txt) · NIST / CODATA · 访问2026-11-04

### temperature.red-dwarf-surface

采用所引特征表M0到M9附近示例温度，3000K为表中间类别示例，不是所有红矮星的统一值或整个类别严格界限。

- [The Character of M Dwarfs: Table 1](https://www.astro.gsu.edu/RECONS/published.annrev.pdf) · RECONS authors, Annual Review of Astronomy and Astrophysics · 访问2026-11-04

### temperature.red-giant-core

NASA元素起源说明的约1亿K核心氦燃烧量级；不当作所有红巨星均发生氦闪的唯一峰值。

- [What is Your Cosmic Connection to the Elements?](https://imagine.gsfc.nasa.gov/educators/elements/imagine/04.html) · NASA GSFC · 访问2026-11-04

### temperature.rhodium-iron-thermometer

NIST研究参考函数覆盖0.65–24.5561K；该方法对多数样本约1mK插值不确定度的结果对应4.2–24.5561K，不是0.1mK测温能力。

- [A Standardized Interpolation of Temperature using Rhodium-Iron Resistance Thermometers](https://www.nist.gov/publications/standardized-interpolation-temperature-using-rhodium-iron-resistance-thermometers-over) · Tew et al., NIST / International Journal of Thermophysics (2015) · 访问2026-11-04

### temperature.rigel-surface

采用NASA SVS宇宙温度概览的11000K；不同模型/观测可有不同有效温度估计，不等于每处同温。

- [A Guide to Cosmic Temperatures](https://svs.gsfc.nasa.gov/14374) · NASA Scientific Visualization Studio · 访问2026-11-04

## 待核与接入说明

- 中子星核心、新星与纸张着火：撤下旧统一温度，保留原值证据。未定状态不能进入轴或被Number(null)误作0K。
- 核退磁选择421±35μK电子温度实验；不确定度是原文3σ区间，不要默认为1σ，也不要混同核自旋温度。
- 氧沸点与液氧条目同口径，canonicalId指向temperature.liquid-oxygen供后续合并；稳定ID不删除。
- 氖三相点是ITS-90赋值，和热力学实温的装置实现区别保留。
- RhFe参考函数区间0.65–24.5561K与论文约1mK插值不确定度的4.2–24.5561K区间不同；0.65K不是器件绝对最低温。
- 红巨星旧1e9K改成氦燃烧教学量级1e8K，题名避免把所有氦燃烧混同氦闪。
- 红矮星与冥王星的range均是所引特征表/研究摘要的示例范围，不是永久极值界限。
- reviewed是资料比对与编辑复核，不是外部同行评议；rights.rewritten不代表许可证已经确认。
