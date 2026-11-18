# 温度正文逐条重写 · 第二批

日期：2026-11-04。按文件名字典序选取尚未标为 rewritten 的前 20 条。已完成全文与简介改写 20 条，其中来源比对通过 14 条，6 条保留 needs-review。没有修改第一批已完成的 9 条或其他维度源码。

每条均保留 review.originalQuantity、科学来源、适用条件、中文测量口径，以及 rights.rewritten。reviewed 表示资料比对与编辑复核，不代表外部同行评审。正文许可证仍待项目统一确认。

## 本批清单与结果

| 文件 | 条目 | 当前数值 | 状态 | 修订与保留缺口 |
|---|---|---|---|---|
| a-type-star.md | A型星表面 | 约 9,500 K（温区示例） | reviewed | 保留区间内示例9500K，去掉织女星未来北极星时间及质量范围等本次未核实内容。 |
| aluminum-melting.md | 铝熔点 | 933.473 K（660.323 °C，ITS-90） | reviewed | 将933K粗略值明确为ITS-90固定点；删除工业提炼历史及未核实节能比例。 |
| ammonia_boiling.md | 氨的沸点 | 约 239.8 K（−33.35 °C） | reviewed | 删除化肥全球占比、制冷普及率和氢载体倍率等未核实扩展。 |
| antarctic_min_temp.md | 南极冬季最低温 | 183.95 K（−89.2 °C） | reviewed | 修正184K取整；删除旧文2018年卫星−93°C混合气温纪录的描述。 |
| betelgeuse-surface.md | 参宿四表面 | 约 3,600 K（2020 年光谱研究） | reviewed | 从来源不明3500K改为可定位观测3600±25K；移除爆发时间与半径强断言。 |
| black-hole-accretion-disk.md | 黑洞吸积盘内区 | 约 10⁷ K（量级参考） | needs-review | 撤回旧文天鹅座X-1与M87具体温度及硬X射线和效率泛化；保留待核模型锚点。 |
| boomerang-nebula.md | 回力棒星云 | 低于约 0.5 K（外流研究） | reviewed | 旧1K更新为后续研究的低于0.5K，明确上界锚点与区域口径。 |
| bread_baking.md | 面包烘烤（烤箱设定） | 约 491.5 K（425 °F，约218.3 °C） | reviewed | 旧493K无配方锚点改为有来源425°F烤箱设定；不混同面包内部温度。 |
| bunsen-burner-flame.md | 本生灯火焰 | 约 1,773 K（1,500 °C） | reviewed | 旧1800K粗值对齐教学来源1500°C；明确区域而非均温。 |
| carbon-fusion.md | 碳核聚变 | 约 7 × 10⁸ K（模型温区示例） | needs-review | 替换无条件5e8K门槛；本条保留模型场景待核。 |
| carbon-sublimation.md | 碳升华点 | 约 4,098 K（表列参考） | needs-review | 旧3915K改为来源表列4098K，但表列条件不足，未强标复核通过。 |
| cmb.md | 宇宙微波背景辐射 | 约 2.725 K | reviewed | 保留2.725K；明确辐射光谱口径与所引概览的不确定度。 |
| co2-critical-point.md | CO₂临界点 | 约 304.18 K（31.03 °C） | reviewed | 旧304K更新为可定位研究304.18±0.04K；补临界压力约束。 |
| coldest-brown-dwarf.md | 超冷褐矮星 WISE 0855 | 约 250 K（WISE 0855参考） | reviewed | 将泛化“最冷褐矮星300K”改为具体WISE0855约250K，撤回永久纪录与确证水冰云断言。 |
| cooking_oil_smoke.md | 食用油烟点 | 约 463 K（油样与方法待核） | needs-review | 整篇重写；保留463K但清楚标待核，删除无来源健康结论与统一油温。 |
| copper-melting-point.md | 铜的熔点 | 1,357.77 K（1,084.62 °C，ITS-90） | reviewed | 旧1358K对齐ITS-90铜固定点；删除爱迪生推动铜精炼等未经核实归因。 |
| dilution-refrigerator.md | 稀释制冷 | 约 10 mK（0.01 K） | reviewed | 保留具体NIST装置10mK，撤回全体量子比特运行温度泛化。 |
| dry-ice-sublimation.md | 干冰升华点 | 约 194.7 K（−78.5 °C） | reviewed | 将195K粗值改为NIST方程常压计算值；记录推算方法并限制条件。 |
| earths-core.md | 地核边界温度（纯铁参考） | 约 6,230 ± 500 K（纯铁参考） | needs-review | 改为有来源纯铁边界参考6230±500K，避免假装直接测到整个内核温度。 |
| electroweak.md | 电弱对称性平滑过渡 | 约 1.85 × 10¹⁵ K（159.5 GeV，理论计算） | needs-review | 把简单电弱相变改为标准模型平滑过渡，明确159.5GeV理论与kBT换算；不是实测。 |

## 来源与适用条件

### temperature.a-type-star

A 型星的近似温区约 7,500–10,000 K；9,500 K 为尺度锚点，不代表全部 A 型星或某颗星的实测。

- [Hubble Program glossary: spectral classifications](https://asd.gsfc.nasa.gov/archive/hubble/overview/glossary.html) · NASA GSFC · 访问 2026-11-04

### temperature.aluminum-melting

ITS-90 对高纯铝凝固点的温标赋值；实际样品与测量实现有不确定度，合金不同。

- [Kelvin: ITS-90](https://www.nist.gov/si-redefinition/kelvin/kelvin-its-90) · NIST · 访问 2026-11-04

### temperature.ammonia_boiling

无水氨、约一个标准大气压；不等同于氨水溶液的沸点。

- [Ammonia, anhydrous: physical and chemical properties](https://m.cameochemicals.noaa.gov/chris/AMA.pdf) · NOAA CAMEO / CHRIS · 访问 2026-11-04

### temperature.antarctic_min_temp

1983-07-21，南极东方站；WMO认可的气象观测气温纪录，不是卫星地表辐射温度。

- [Global lowest temperature: Vostok, 21 July 1983](https://wmo.int/asu-map?map=Temp_020) · World Meteorological Organization · 访问 2026-11-04

### temperature.betelgeuse-surface

Levesque 与 Massey 2020年观测分析的有效温度3600±25K；并非恒星所有时期和各局部相同。

- [Betelgeuse Just Is Not That Cool: Effective Temperature Alone Cannot Explain the Recent Dimming](https://arxiv.org/abs/2002.10463) · Levesque and Massey (2020), original research · 访问 2026-11-04

### temperature.black-hole-accretion-disk

只作高温吸积盘内区的示例量级；尚未绑定具体黑洞、吸积态、半径和测温模型。

- [Black Hole: accretion disk and X-ray emission](https://heasarc.gsfc.nasa.gov/docs/blackhole.html) · NASA HEASARC · 访问 2026-11-04

### temperature.boomerang-nebula

ALMA 2017研究说明的超冷外流低于约0.5K；数轴存0.5K作上界锚点，不是整片星云的精确均温。

- [ALMA Returns to Boomerang Nebula](https://www.almaobservatory.org/en/press-releases/alma-returns-to-boomerang-nebula/) · ALMA Observatory (2017) · 访问 2026-11-04
- [ALMA Reveals Ghostly Shape of Coldest Place in the Universe](https://www.almaobservatory.org/en/press-releases/alma-reveals-ghostly-shape-of-coldest-place-in-the-universe/) · ALMA Observatory (2013) · 访问 2026-11-04

### temperature.bread_baking

King Arthur 烘焙指南的硬皮面包高温设定参考；是烤箱设定，不是面包中心温度。

- [Yeast baking guide: oven temperatures](https://www.kingarthurbaking.com/learn/guides/yeast-baking) · King Arthur Baking, original baking guide · 访问 2026-11-04

### temperature.bunsen-burner-flame

实验教学资料中的调节良好火焰高温区示例；燃气、配气和位置会改变温度。

- [Chemistry 1009 laboratory manual: Bunsen burner](https://www.ulm.edu/chemistry/courses/manuals/chem1009/lab_manual.pdf) · University of Louisiana Monroe, Chemistry · 访问 2026-11-04

### temperature.carbon-fusion

参考研究所述约0.6–0.8GK的碳燃烧温区；密度、反应率与恒星演化状态不同，无单一通用点火温度。

- [A new 12C + 12C nuclear reaction rate: Impact on stellar evolution](https://doi.org/10.1051/0004-6361/202141858) · Astronomy & Astrophysics, original research (2022) · 访问 2026-11-04

### temperature.carbon-sublimation

RSC元素表的升华参考值；具体同素异形体、压力与测量方法仍需补充，非所有碳材料通用。

- [Carbon: element information and phase-change reference](https://periodic-table.rsc.org/element/6/carbon) · Royal Society of Chemistry · 访问 2026-11-04

### temperature.cmb

采用NASA COBE/FIRAS概览的近似黑体谱温度2.725±0.002K；不是宇宙所有物质的温度。

- [FIRAS overview: cosmic microwave background spectrum](https://lambda.gsfc.nasa.gov/product/cobe/firas_overview.html) · NASA LAMBDA / COBE · 访问 2026-11-04

### temperature.co2-critical-point

NIST所列研究临界温度304.18±0.04K；临界状态还必须配合临界压力，非只达到温度即可。

- [Carbon dioxide: phase change data and Antoine equation](https://webbook.nist.gov/cgi/cbook.cgi?ID=C124389&Mask=4) · NIST Chemistry WebBook · 访问 2026-11-04

### temperature.coldest-brown-dwarf

WISE 0855的研究估计量级；JPL早期报道区间约225–260K，不作为永久最冷排名或局部大气温度。

- [Spitzer and WISE find Suns close cold neighbor](https://www.jpl.nasa.gov/news/nasas-spitzer-wise-find-suns-close-cold-neighbor/) · NASA JPL (2014) · 访问 2026-11-04

### temperature.cooking_oil_smoke

尚未将旧参考463K关联到特定油样、精炼程度、含杂质和测试方法；不能用于判断食用安全。

- [Deciphering the Complexity of Smoke Point in Virgin Olive Oils to Develop Simple Predictive Models](https://pmc.ncbi.nlm.nih.gov/articles/PMC12692607/) · Original olive-oil smoke-point study, PMC archive · 访问 2026-11-04

### temperature.copper-melting-point

高纯铜ITS-90凝固固定点赋值；实际实现有不确定度，不能直接代表铜合金。

- [The Kelvin and Temperature Measurements: ITS-90 fixed points](https://pmc.ncbi.nlm.nih.gov/articles/PMC4865289/) · NIST Journal of Research · 访问 2026-11-04

### temperature.dilution-refrigerator

NIST 2010年10mK扫描探针显微镜设施示例；不是所有稀释制冷机或所有量子比特统一工作点。

- [A 10 mK Scanning Probe Microscopy Facility](https://www.nist.gov/publications/10-mk-scanning-probe-microscopy-facility) · NIST / Review of Scientific Instruments (2010) · 访问 2026-11-04

### temperature.dry-ice-sublimation

用NIST低温蒸气压方程在1.01325bar处计算并取整；只指常压附近固气平衡。

- [Carbon dioxide: phase change data and Antoine equation](https://webbook.nist.gov/cgi/cbook.cgi?ID=C124389&Mask=4) · NIST Chemistry WebBook · 访问 2026-11-04

### temperature.earths-core

Anzellini等2013年高压铁熔化实验向内核边界外推；不是地核温度计直接读数，也不是合金成分已确定的地核实温。

- [Melting of iron at Earths inner core boundary based on fast X-ray diffraction](https://pubmed.ncbi.nlm.nih.gov/23620049/) · Anzellini et al., Science (2013) · 访问 2026-11-04

### temperature.electroweak

D’Onofrio与Rummukainen标准模型有效理论格点计算，159.5±1.5GeV；用kBT换算，不是实验测得的宇宙温度。

- [The Standard Model cross-over on the lattice](https://arxiv.org/abs/1508.07161) · D’Onofrio and Rummukainen, Phys. Rev. D 93 (2016) · 访问 2026-11-04
- [2022 CODATA: complete fundamental constants listing](https://physics.nist.gov/cuu/Constants/Table/allascii.txt) · NIST / CODATA · 访问 2026-11-04

## 仍需处理的六条

- 黑洞吸积盘：已有数量级背景，但缺具体系统、半径、吸积态与能谱模型，保留为示例。
- 碳核聚变：0.7GK仅为文献温区内的模型参考，需补具体恒星密度、成分、反应率与演化条件。
- 碳升华：已换为可定位表值，仍缺同素异形体与压力下的实验相图，不能把其视作普适常数。
- 食用油烟点：463K旧锚点尚无油样与测试报告；全文明确待核对，不提供健康或安全判断。
- 地核：当前6230±500K是纯铁在内核边界的外推熔点，不是整个地核实测，真实地核组成与温度仍需补充。
- 电弱过渡：使用已发表格点计算159.5±1.5GeV；K值为kBT换算，理论条件尚不能等同于实测宇宙演化。

## 接入提示

- 回力棒星云的0.5K是上界锚点，displayValue与conditions中的“低于”不能丢失。
- 面包条目指烤箱设定，不是面包中心温度；两项读数不得混用。
- 南极条目采用空气温度纪录，与卫星地表辐射温度分别组织。
- 所有 related 均在实际内容ID集合存在后添加，未从旧相关标签猜造ID。
- 当前仅通过内容schema校验；总构建与浏览器回归由主代理执行。
