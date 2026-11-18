# 空间精选条目来源核对

日期：2026-11-04。范围：空间站现有 16 个精选条目。

16 篇正文和简介均已重新撰写，移除旧站未经逐句核实的历史、科学家、统计数量和延伸断言。`reviewStatus: reviewed` 表示已对本轮限定后的量值、口径与正文进行所列来源核对；不是独立专家审稿认证。每条保留 `review.originalQuantity`，记录 `review.method: source-check`。正文权利状态记为 rewritten，许可证仍待项目统一确认。

## 量值与口径

| ID | 本轮比较值 | 与旧值的关系及限制 | 来源 |
|---|---|---|---|
| space.planck | 1.616255 × 10⁻³⁵ m | 从1.6 × 10⁻³⁵更新；是由常数组合定义的理论长度，不是已观测的空间最小颗粒 | [NIST CODATA 2022 完整表](https://physics.nist.gov/cuu/Constants/Table/allascii.txt) |
| space.proton | 1 fm | 保留数量级参照；明确它不是核子硬球直径。NIST所列质子rms电荷半径约0.841 fm是另一口径 | [NIST CODATA 2022](https://physics.nist.gov/cuu/Constants/Table/allascii.txt) |
| space.atom | 1.058354421088 × 10⁻¹⁰ m | 从1 × 10⁻¹⁰更新为2倍a₀；明确是比较长度，不是原子硬边界直径 | [NIST CODATA 2022](https://physics.nist.gov/cuu/Constants/Table/allascii.txt) |
| space.dna | 2 nm | 保留近似横向宽度，不混用整条链长 | [NIH/NIGMS](https://nigms.nih.gov/biobeat/2023/12/science-snippet-zooming-in-on-nanoparticles) |
| space.virus | 100 nm | 保留但限定为甲型流感病毒80–120 nm范围内的展示参考，不称全部病毒典型值 | [University of Utah](https://viruses.gslc.utah.edu/viruses-are-diverse) |
| space.cell | 20 μm | 第二批替换来源；采用真核细胞10–100 μm概览内的自选参照，不宣称所有人体细胞有统一直径 | [OpenStax Biology 2e §4.2](https://openstax.org/books/biology-2e/pages/4-2-prokaryotic-cells) |
| space.sand-grain | 0.5 mm | 第二批替换来源；采用NPS约0.065–2 mm概览内的自选参照，删除全球沙粒总数等旧断言 | [NPS White Sands — Sand](https://www.nps.gov/whsa/learn/sand.htm) |
| space.human | 1.7 m | 原值1 m改为与比较器一致的自选参照高度；不是任何人群平均，也不是宇宙尺度中点 | [CDC/NCHS §3.4.3 测量口径](https://wwwn.cdc.gov/nchs/data/nhanes/public/2021/manuals/2021-Anthropometry-Procedures-Manual-508.pdf) |
| space.earth | 12,742 km | 保留，明确由体积等效平均半径6371 km加倍；不混用赤道直径 | [NASA Earth Fact Sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html) |
| space.moon | 3,474.8 km | 从3,474 km更新；体积等效平均半径1737.4 km加倍 | [NASA Moon Fact Sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html) |
| space.jupiter | 139,822 km | 从139,820 km更新，采用所引NASA事实表的体积等效平均直径，不是1巴赤道直径 | [NASA Jupiter Fact Sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/jupiterfact.html) |
| space.saturn | 116,464 km | 原120,000 km口径不明，改为体积等效平均半径58232 km加倍；明确不含环 | [NASA Saturn Fact Sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/saturnfact.html) |
| space.sun | 1,391,400 km | 从1,392,700 km更新；采用所引事实表695700 km平均半径加倍，不含外延日冕 | [NASA Sun Fact Sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html) |
| space.solar-system | 9 × 10¹² m | 保留但明确为海王星平均轨道距离两倍表示的行星轨道区域参照，不是整个太阳系边界 | [NASA Neptune Facts](https://science.nasa.gov/neptune/neptune-facts/)、[NASA Oort Cloud](https://science.nasa.gov/solar-system/oort-cloud/) |
| space.milky-way | 约9.46 × 10²⁰ m | 将约10万光年正确换算为米；源数据为概览近似，长小数不代表测量精度，口径是恒星盘 | [NASA 银河尺度说明](https://science.nasa.gov/universe/exoplanets/our-milky-way-galaxy-how-big-is-space/) |
| space.observable-universe | 约8.8 × 10²⁶ m | 保留模型估算量级，按当前距离定义；移除“已知宇宙边界”等可能误解为物理边缘的说法 | [Gott et al. 2005, §II](https://arxiv.org/html/astro-ph/0310571v2) |

量值发生变更的8条：planck、atom、human、moon、jupiter、saturn、sun、milky-way。其余8条在保留数值时重新限定了口径。

## 来源核对范围与后续注意

- NIST完整表实际读取了2022 CODATA版本的Planck length、Bohr radius、proton rms charge radius三行。公式派生值与原始常数区别记录在正文。
- NASA事实表逐个读取了体积等效平均半径。木星数据明确归因于该事实表版本，不宣称排除了所有更晚的论文修订。
- 可观测宇宙使用所引2005论文的WMAP模型示例，约14300 Mpc粒子视界半径给出约930亿光年直径量级；不是针对最新宇宙学参数的再拟合。
- 第二批已修复细胞来源可读性：改用可直接读取的OpenStax出版社正文，采用真核细胞10–100 μm概览范围内的20 μm示意参照，不再用验证码页面的搜索摘要支持数值。
- 第二批已修复砂粒来源可读性：改用可直接读取的美国国家公园管理局正文，其科普范围为约0.065–2 mm，0.5 mm仍是本站自选比较值。旧表中Utah / 0.0625的引用已由第二批明确取代，详见SPACE_REVIEW_02.md。
- 16条均增加少量已存在的关联ID，包括太阳系形成、恒星温度、人体温度、早期生命等。关联表示探索路径，不能替代事实来源。
- 模型的结构、形变、非等比部分与参考长度仍需在视觉验收中逐项确认；本轮修改不等于完成模型科学审核。
- 其余85条空间记录仍待逐条重写和来源核对。旧文本许可、统一内容许可证及独立专家审读未完成。
