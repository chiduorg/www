# 温度正文逐条重写 · 第三批

日期：2026-11-04。按文件名字典序选取未标记rewritten的前20条。全文与简介逐条重写20条，其中15条来源比对通过，5条保留needs-review。仅修改本批20条和本报告，未修改前29条或源码。

reviewed表示资料比对与编辑复核，不是外部同行评议；所有条目保留原quantity与rights.rewritten，许可证待统一确认。

| 文件 | 现参考 | 状态 | 修订 |
|---|---|---|---|
| ethanol_boiling.md | 约 351.5 K（78.35 °C） | reviewed | 保留有来源均值，删除未核实共沸比例、蒸馏过程泛化与用途扩展。 |
| f-type-star.md | 约 7,000 K（温区示例） | reviewed | 明确温区与轴锚点；删除固定寿命及宜居带泛化。 |
| fusion-reactor-plasma.md | 约 1.5 × 10⁸ K（设计参考） | reviewed | 把必须达到的通用阈值改成具体ITER设计量级；去掉能源终极方案承诺。 |
| glass_melting.md | 约 1,673 K（配方与工况待核） | needs-review | 撤回统一熔点和过冷液体误导；旧工艺参考仍待核。 |
| gold-melting-point.md | 1,337.33 K（1,064.18 °C，ITS-90） | reviewed | 整数1337K更新为有口径的ITS-90值；去掉无依据鉴定纯度暗示。 |
| gut.md | 约 10²⁷ K（假说示意） | needs-review | 全面撤回已统一/已解释物质不对称的强断言；明确假说而非实测。 |
| helium-3-superfluid.md | 约 2.5 mK（压力口径待核） | needs-review | 保留毫开尔文参考但压力未定，不强行reviewed；去掉固定相变点说法。 |
| hypernova.md | 10¹² K（旧温标待核） | needs-review | 旧1e12K保留为待核坐标；没有用爆发总能量替代温度证据。 |
| iron-melting.md | 约 1,811 K（1,538 °C） | reviewed | 保留有来源近似；撤去文明史与工艺流程扩展，区分钢铁与高压铁。 |
| kilonova_temp.md | 10⁹ K（区域与阶段待核） | needs-review | 重写为分区域、分时段的口径说明；1e9K缺模型证据，仍待核。 |
| lava-temperature.md | 约 1,423–1,443 K（1,150–1,170 °C） | reviewed | 旧1400K泛值改为特定USGS温区，range明确，中点仅定位。 |
| lead-melting-point.md | 约 600.612 K（327.462 °C） | reviewed | 旧600K更新为可定位表值；撤去未查证医学及历史扩展。 |
| lightning.md | 可达约 2.8 × 10⁴ K（50,000 °F量级） | reviewed | 旧30000K改为具体气象来源量级，区分电荷运动与空气受热；上界仅指可达参考。 |
| liquid-hydrogen.md | 约 20.3 K（−252.85 °C） | reviewed | 用NIST20.3K近似，删除最高能量密度泛化和未核火箭对应。 |
| liquid-oxygen.md | 约 90.2 K（−182.95 °C） | reviewed | 整数90K更新为所引90.2±0.2K，删除猎鹰重型等错误推进剂泛化。 |
| magnesium-melting.md | 约 923 K（650 °C） | reviewed | 保留有来源近似值，明确熔化/燃烧区别。 |
| mars-surface.md | 约 208 K（−65 °C，概览参考） | reviewed | 旧210K改用明确NASA概览−65°C，避免混合不同平均口径与局部极值。 |
| mercury-boiling.md | 约 629.81 K（356.66 °C） | reviewed | 旧630K与正文629.88K不一致，统一采用明确NIST629.81±0.01K。 |
| methane-boiling.md | 约 111.7 K（−161.45 °C） | reviewed | 保留来源支持的111.7K；去掉600倍和28倍等未核口径倍率。 |
| millisecond_pulsar.md | 约 10⁶ K（J0030+0451热区） | reviewed | 保留1e6K但绑定J0030+0451局部热区，删除所有毫秒星统一值与最快纪录扩展。 |

## 逐条来源与适用条件

### temperature.ethanol_boiling

纯乙醇，正常沸点口径；NIST资料均值351.5±0.2K，不直接适用于乙醇水溶液。

- [Ethanol: phase-change data](https://webbook.nist.gov/cgi/cbook.cgi?ID=C64175&Mask=4) · NIST Chemistry WebBook · 访问2026-11-04

### temperature.f-type-star

NASA分类表约6000–7500K；轴取7000K作区间内示例，非某颗指定恒星实测。

- [Hubble glossary: stellar spectral classes](https://asd.gsfc.nasa.gov/archive/hubble/overview/glossary.html) · NASA GSFC · 访问2026-11-04

### temperature.fusion-reactor-plasma

ITER公布的约1.5亿°C等离子体设计量级；K与°C在该精度下近似同数量级，不表示已建成电站性能。

- [ITER Facts and Figures: plasma temperature design](https://www.iter.org/facts-figures) · ITER Organization · 访问2026-11-04

### temperature.glass_melting

旧场景约1400°C工艺参考，尚未关联具体配方、黏度指标和炉况；不是统一熔点。

- [At what temperature does glass begin to flow?](https://info.cmog.org/node/576) · Corning Museum of Glass · 访问2026-11-04

### temperature.gold-melting-point

ITS-90高纯金凝固固定点赋值，实际实现仍有不确定度；不等同于所有金合金。

- [Kelvin: ITS-90 fixed points](https://www.nist.gov/si-redefinition/kelvin/kelvin-its-90) · NIST · 访问2026-11-04

### temperature.gut

早期宇宙示意中的假说温标；依赖具体大统一模型，没有实测统一相变温度。

- [Unified forces](https://home.web.cern.ch/science/physics/unified-forces/) · CERN · 访问2026-11-04
- [Story of the Universe](https://cmsexperiment.web.cern.ch/physics/story-of-the-universe) · CMS Experiment at CERN · 访问2026-11-04

### temperature.helium-3-superfluid

保留旧2.5mK温区参考；超流转变依赖压力与相态，尚未绑定具体相界和压力。

- [Cornell physicists Robert Richardson and David Lee win 1996 Nobel Prize in Physics](https://news.cornell.edu/stories/1996/10-5) · Cornell University, research institution · 访问2026-11-04

### temperature.hypernova

旧温度坐标缺少对象、爆发区域、阶段和温度定义；不能作为极超新星统一实测温度。

- [A Strange Supernova with a Gamma-Ray Burst](https://www.hq.eso.org/public/news/eso9847/) · European Southern Observatory · 访问2026-11-04

### temperature.iron-melting

纯元素铁常压熔点表列近似；钢与生铁成分不同，不直接套用。

- [Iron: element data](https://periodic-table.rsc.org/element/26/iron) · Royal Society of Chemistry · 访问2026-11-04

### temperature.kilonova_temp

旧并合瞬间温标未对应指定模拟区域和时刻；不是千新星可见光光球温度。

- [GW170817: Observation of Gravitational Waves from a Binary Neutron Star Inspiral](https://arxiv.org/abs/1710.05832) · LIGO Scientific and Virgo Collaborations, original research (2017) · 访问2026-11-04
- [Optical and UV Spectra of a Blue Kilonova From Fast Polar Ejecta](https://arxiv.org/abs/1710.05456) · Nicholl et al., original research (2017) · 访问2026-11-04

### temperature.lava-temperature

USGS记述基拉韦厄1980–1990年代喷出熔岩约1150–1170°C；轴点1433.15K为该区间中点，不代表所有熔岩。

- [Volcano Watch: Crystals tell us about Kilaueas ongoing eruption](https://www.usgs.gov/observatories/hvo/news/volcano-watch-crystals-tell-us-a-lot-about-kilaueas-ongoing-eruption) · U.S. Geological Survey · 访问2026-11-04

### temperature.lead-melting-point

RSC纯元素铅熔点表值；实际样品纯度与压力条件不同，合金另列。

- [Lead: element data](https://periodic-table.rsc.org/element/82/lead) · Royal Society of Chemistry · 访问2026-11-04

### temperature.lightning

美国国家气象局科普所述闪电可把空气加热至约50000°F；不是每次闪电固定峰值，轴存该量级锚点。

- [How Hot Is Lightning?](https://www.weather.gov/safety/lightning-temperature) · NOAA National Weather Service · 访问2026-11-04

### temperature.liquid-hydrogen

NIST低温液体表的正常沸点近似；精细比较还需说明氢的自旋异构体组成与压力。

- [About Cryogenics: normal boiling points](https://www.nist.gov/mml/acmd/cryogenic-technologies-project/about-cryogenics) · NIST · 访问2026-11-04

### temperature.liquid-oxygen

纯氧正常沸点，NIST所列90.2±0.2K；压力变化会改变相变条件。

- [Oxygen: phase-change data](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7782447&Mask=4) · NIST Chemistry WebBook · 访问2026-11-04

### temperature.magnesium-melting

纯元素镁表列近似；镁合金或燃烧过程不是同一相变对象。

- [Magnesium: element data](https://periodic-table.rsc.org/element/12/magnesium) · Royal Society of Chemistry · 访问2026-11-04

### temperature.mars-surface

采用NASA Solar System Temperatures概览的−65°C；时空平均与具体地点时段测温不同，非每处固定。

- [Solar System Temperatures](https://science.nasa.gov/resource/solar-system-temperatures/) · NASA Science · 访问2026-11-04

### temperature.mercury-boiling

NIST所列Marsh1987正常沸点629.81±0.01K；不同资料值略有差异，非任意样品无误差。

- [Mercury: phase-change data](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7439976&Mask=4) · NIST Chemistry WebBook · 访问2026-11-04

### temperature.methane-boiling

NIST低温液体正常沸点表；纯甲烷参考，不同成分天然气或不同压力另列。

- [About Cryogenics: normal boiling points](https://www.nist.gov/mml/acmd/cryogenic-technologies-project/about-cryogenics) · NIST · 访问2026-11-04

### temperature.millisecond_pulsar

NASA NICER对J0030+0451热X射线的表面热区推断；不是所有毫秒脉冲星或整颗星表面的统一温度。

- [NICER Nuggets: 2 January 2020, J0030+0451 surface regions](https://heasarc.gsfc.nasa.gov/docs/nicer/science_nuggets/20200102.html) · NASA NICER / HEASARC · 访问2026-11-04

## 未完成的科学核查

- 玻璃：约1400°C旧工艺点缺具体配方、黏度和炉况，不能当统一熔点。
- 大统一：假说示意温标，缺具体模型与可验证预测，不是实测。
- 氦-3：2.5mK未完成压力、相界逐项对应，保留毫开尔文参考。
- 极超新星：1e12K未绑定具体区域、时刻和模型；爆发能量不等于温度证据。
- 千新星：1e9K旧坐标未绑定并合模型；不得与后续光球拟合温度混用。

本批15条来源比对通过、5条保留待审核；计数由实际条目状态生成。

## 展示注意

- F型星range为6000–7500K，7000K仅作区间内锚点。
- 熔岩range为1423.15–1443.15K，轴值1433.15K为中点，非新增测量。
- 闪电“可达约50000°F”属于量级参考，不是严格上界，因此采用quantity.kind: attainable-reference，不设置bound，避免错误显示≤。
- 聚变堆是ITER设计量级，不宣称已建成发电或所有反应唯一门槛。
- 毫秒脉冲星绑定J0030+0451热区，不能代表整颗星和整个类别。
