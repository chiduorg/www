# 时间内容第五批重写与全目录审计

日期：2026-11-04。本批选择了实际剩余的全部20个未重写时间条目，ID见下表。仅修改这些条目和本报告；写入前后对其余71个时间文件逐一比较SHA-256，全部一致。没有修改源码。

本批20篇正文全部重新撰写。17条当前表述与来源核对后标记reviewed；3条参考时间尚未核定，保留needs-review、`quantity.value: null`、`quantity.status: undetermined`及`chronology.plot: false`。本批完成后，time目录91条均有rights.rewritten；“已重写”不等于全部科学问题都已确定，也不等于内容许可证已经确定。

## 逐条主源与采用口径

以下来源均实际打开了正文、作者原始摘要、机构原始记录或PDF相应章节，没有把搜索摘要或第三方自动摘要当成最终证据。

| ID（time.前缀） | 当前口径与核实范围 | 可读主源 | 结果 |
|---|---|---|---|
| muon-antimuon-annihilation | 改写为μ子丰度下降：产生与衰变竞争；不是旧10⁻³秒全部成对湮灭 | [Rafelski、Yang原始论文，arXiv:2103.07812v2](https://arxiv.org/pdf/2103.07812)结论给4.135 MeV及H⁻¹=0.084秒；结合[PDG Big-Bang Cosmology 2025](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-cosmology.pdf)式22.18辐射主导H=1/(2t)，推得约0.042秒，圆整为0.04秒导航 | reviewed / model-reference |
| neutrino-background-formation | 约1秒热史背景；纠正旧1年，间接证据与直接捕获分开 | [UCSD参与研究团队：Scientists Confirm Events that Occurred One Second after the Big Bang](https://physicalsciences.ucsd.edu/media-events/articles/2019/scientists-confirm-events-that-occurred-one-second-after-the-big-bang.html)正文的秒级背景与星系分布证据；[PDG Neutrinos in Cosmology 2025](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-neutrinos-in-cosmology.pdf)§26.1说明背景尚未直接探测及渐进退耦 | reviewed / model-reference |
| neutrino-decoupling | 约秒级参照，不再把旧2秒当所有味态的精确共同截止 | 同上[PDG中微子章](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-neutrinos-in-cosmology.pdf)的约2 MeV渐进退耦、振荡和非瞬时修正；[UCSD团队正文](https://physicalsciences.ucsd.edu/media-events/articles/2019/scientists-confirm-events-that-occurred-one-second-after-the-big-bang.html)支持约1秒圆整时代，不假装从2 MeV直接精密换算 | reviewed / model-reference |
| nucleosynthesis | 最初数分钟，180秒为阶段参考；区分原子核、中性原子和后续重元素 | [PDG Big Bang Nucleosynthesis 2025](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-nucleosynthesis.pdf)§24.3明确约180秒基本固定的原初轻核丰度，且观测在后来的天体环境进行 | reviewed / model-reference |
| ordovician-radiation | 中奥陶世约470 Ma圆整参照；不设全球唯一开始年 | [del Rey等2022原始论文全文：Stable ocean redox during the main phase of the Great Ordovician Biodiversification Event](https://pmc.ncbi.nlm.nih.gov/articles/PMC9510202/)，正文、方法与结论说明主要大坪期—早达瑞威尔期、不同起止观点及55层碳酸盐铀同位素；[ICS 2024/12](https://stratigraphy.org/ICSchart/ChronostratChart2024-12.pdf)提供阶段背景，不把期界当生物事件发生日 | reviewed |
| oxygenic-photosynthesis | 改为产氧光合作用古老细胞证据：约1.75 Ga类囊体最低年代，不声称此时才起源 | [研究第一作者Catherine Demoulin 2024博士论文：Biosignatures of fossil and modern cyanobacteria，ULiège ORBi原始摘要](https://orbi.uliege.be/handle/2268/319687)，实际读取N. majensis类囊体、最低1.75 Ga校准及蓝细菌—大氧化关系；正文不把化石证据时代替代代谢起源 | reviewed |
| ozone_layer_formation | 臭氧生成与破坏有据；未核定“形成”或紫外屏蔽阈值对应年代 | [NASA Earth Observatory：Ozone](https://science.nasa.gov/earth/earth-observatory/ozone/)正文的O₂紫外光解、O₃生成及动态平衡；此来源不提供本条所需古代形成阈值和日期，故旧值不沿用 | needs-review / null |
| peak-star-formation | 宇宙正午约2—3 Gyr，自大爆炸起；轴上取2.5 Gyr区间中点 | [NASA：Studying Galaxy Growth Spurts in the Early Universe with NASA’s Roman](https://www.nasa.gov/universe/studying-galaxy-growth-spurts-in-the-early-universe-with-nasas-roman/)正文明确2—3十亿年after the Big Bang；不把它误记成大爆炸后100亿年或每个星系同步最高速率 | reviewed |
| permian-triassic-extinction | 约251.9 Ma二叠纪末危机，火山与环境过程分开 | [NPS：Mass Extinctions Through Geologic Time](https://www.nps.gov/subjects/fossils/mass-extinctions-through-geologic-time.htm)End-Permian正文的251.9 Ma、西伯利亚洪流玄武岩及气候/海洋影响 | reviewed |
| photon-epoch | 改为早期光子与辐射主导阶段；以约51.7 kyr相等时代作阶段末端参照 | [Hergt、Scott原始论文：Some Times in Standard Cosmology，v1](https://arxiv.org/html/2411.07703v1)表2、§3.1的含中微子辐射定义及(1.633±0.024)×10¹²秒；[PDG宇宙学章](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-cosmology.pdf)的辐射/物质膨胀与密度演化。取消“10秒至38万年始终辐射主导”的混淆 | reviewed / model-reference |
| planck-era | 5.391247×10⁻⁴⁴秒是普朗克常数组合尺度，不是历史事件实测，也不是已证实最小时间格 | [NIST 2022 CODATA完整常数表](https://physics.nist.gov/cuu/Constants/Table/allascii.txt)的Planck time及标准不确定度；[CWRU ASTR328 Class 17实际课件](https://astroweb.case.edu/ssm/328f22/Class17.pdf)明确Planck scale为speculative且需量子引力。常数精度不能冒充宇宙早期边界精度 | reviewed / model-reference |
| proton-antiproton-annihilation | 保留10⁻⁴秒，只作为所引课程的粗略热史导航；不作为统一精确冻结时刻 | [CWRU 2022课件](https://astroweb.case.edu/ssm/328f22/Class17.pdf)第2—3页明确该量级；另读[Arizona研究作者2023论文：A Short Survey of Matter-Antimatter Evolution in the Primordial Universe](https://arxiv.org/pdf/2305.09055)§3.1及图11的反重子丰度阈值、约38.2 MeV与重子/熵比条件。论文未据此提供本条精密秒数，不人为补造 | reviewed / model-reference；教学量级 |
| quark-era | 微秒时代及更早的QGP，10⁻⁶秒只作时代参照；撤下无出处10⁻¹²秒统一起点 | [CERN：Heavy ions and quark-gluon plasma](https://home.cern/science/physics/heavy-ions-and-quark-gluon-plasma/)实际正文的最初数微秒、高温QGP及重离子实验条件；不说加速器复现整个宇宙 | reviewed / model-reference |
| quark-hadron-phase-transition | 低化学势下的平滑QCD交叉；25微秒为所引热史模型的QGP阶段参考 | [Bazavov等原始摘要：Chiral crossover in QCD at zero and non-zero chemical potentials](https://arxiv.org/abs/1812.08235)明确Tc(0)=156.5±1.5 MeV和格点条件；[Arizona 2023作者热史论文](https://arxiv.org/pdf/2305.09055)§2.1及结论给约25微秒的QGP背景。温度误差不等于秒数误差，不断言必为剧烈一阶相变 | reviewed / model-reference |
| reheating | 机制与条件有据；本条未选定势能、耦合、衰变和热化条件来核定统一秒数 | [PDG Inflation 2025](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-inflation.pdf)§23.2.2的场能转粒子与热化、§23.6的条件性约束；不把旧10⁻³²—10⁻¹²秒当各模型共同范围 | needs-review / null |
| reionization-epoch | 约0.2—1 Gyr概括区间；约630±60 Myr为所引半电离等效模型参考 | [ESA：Cosmic eras](https://www.esa.int/Science_Exploration/Space_Science/Cosmic_eras)正文的长时段与中性云；[Hergt、Scott论文](https://arxiv.org/html/2411.07703v1)§3.4的定义及表2的630±60 Myr、(1.98±0.20)×10¹⁶秒。以表2为准，未把正文行内渲染差异当相同误差 | reviewed / model-reference |
| rise-homo-sapiens | 约300 ka的杰贝尔伊尔胡德早期智人化石；非全球“崛起”或所有现代行为起点 | [Smithsonian Human Origins：Our species arose at least 300,000 years ago](https://humanorigins.si.edu/research/whats-hot-human-origins/our-species-arose-least-300000-years-ago)正文的约30万年、特征组合及非洲多地区演化解释 | reviewed |
| scientific-revolution | 1687年《自然哲学的数学原理》作为具名文献路标；不是全球科学统一诞生年 | [Royal Society：History of the Royal Society](https://royalsociety.org/about-us/who-we-are/history/)机构档案正文核实1660集会、1665期刊和1687著作；用具体路标替代不附口径“约400年前” | reviewed |
| snowball-earth | 斯图尔特冰期约717—660 Ma；不是单一瞬时事件 | [University of Sydney / EarthByte研究团队正文](https://www.sydney.edu.au/news-opinion/news/2024/02/08/geoscientists-discover-what-turned-snowball-earth-sturtian-ice-age-earthbyte.html)明确正文717—660 Ma、57 Myr与火山/风化模型。图片注释写717—664 Ma，故不从该页伪造精确一致的结束误差，使用有声明的概括区间 | reviewed |
| strange-quark-matter | 稳定性及宇宙遗迹生成假说，没有核定形成时刻 | [Di Clemente等原始研究：Strange quark matter as dark matter: 40 years later, a reappraisal，v2](https://arxiv.org/html/2404.12094v2)，读取引言、状态方程及生成讨论，明确BW假说、低化学势crossover和具体模型限制；不借用QCD时代秒数当已确认形成日期 | needs-review / null |

大学课程中的10⁻⁴秒仅支撑明确标识的教学量级，其粗略程度与格点计算、现代热史模型的条件必须分开。没有因为课程托管在大学域名下，就把整个课件中的所有旧时代数字当作本库统一时间表；仅引用本文限定范围。

## 时间基准、范围与推算

全目录仍使用本库 `time.present.quantity.value = 435400000000000000 s` 作为宇宙轴参考T₀。本批距今与历年数据按儒略年31557600秒换算：`value = T₀ − lookbackYears × 31557600`。科学革命文献节点按2026−1687=339年作年级近似导航；各条conditions明示基准与公式，内部位数不是年代精度。

本轮保留时期范围，而把导航锚点另述：宇宙正午2—3 Gyr选2.5 Gyr中点；斯图尔特冰期717—660 Ma选前端；奥陶纪辐射约470 Ma只是中奥陶世背景；再电离0.2—1 Gyr区间与630 Myr半电离模型点不互相替代。

μ子0.04秒是本轮明确计算的推算值：作者给H⁻¹=0.084秒，PDG辐射主导近似给H=1/(2t)，故t≈0.042秒，再圆整。没有把膨胀时标、粒子寿命和宇宙年龄混写。对应温度、公式和近似条件写入条目conditions。

普朗克时间为常数组合尺度；低化学势格点伪临界温度是物态计算；星系及地质记录是观测/样品时代；μ子和再电离时间是附条件模型结果。这些数字均不被包装为同一种“现场计时”。QGP相关条目采用不同粗略背景或具体模型的锚点，因此可讨论同一物理阶段而不提供一致的精密通用边界。

## 本批待核定事项

| ID | 缺口的性质 | 后续需要的证据或定义 |
|---|---|---|
| ozone_layer_formation | 本轮材料核实了生成机制，未核定本条所需的古代时间参考 | 先定义“开始存在臭氧”或某一紫外屏蔽阈值，再选择相应大气演化研究；不能把大氧化日期直接当臭氧层完成日 |
| reheating | 没有为本条选定具体模型参数，不存在可直接从当前正文抽出的统一参考秒数 | 指定暴胀场势能、耦合、衰变与热化条件，引用该模型的条件性年代/温度结果；不能说所有模型都毫无预测 |
| strange-quark-matter | 假设物态的稳定性、产生与存活机制需检验，没有已核定形成坐标 | 需要明确状态方程、生成路径及观测约束，不能以QCD相变时代自动证明其形成 |

这三条均明确显示参考时间未核定，不沿用旧数值上轴。前两条尤其不能由“本轮资料/定义不足”推成“科学界完全不知道或从未研究”。所有旧quantity与显示值继续保留在review.original。

## 全time 91条结构与时间审计

| 审计项 | 结果 |
|---|---|
| Markdown文件与稳定ID | 91个文件，91个独立ID，全部保留 |
| 全文重写记录 | 91条rights.status均为rewritten，无剩余旧正文条目 |
| 审核状态 | 81条reviewed；10条needs-review；后者均无当前轴上数值 |
| 来源结构 | 91条均有完整title、HTTP(S) URL、publisher、accessed对象；经现有validateEntry检查 |
| 审核元数据 | 91条均有source-check方法和2026-11-04日期 |
| 旧量证据 | 91条均保留review.original.quantity或前批兼容的review.originalQuantity，包含原value |
| 中文口径 | 91条均有quantity.measureLabel |
| 数值边界 | 81个当前有限数值全部在0至T₀范围内；其余10个为null |
| 空值约束 | 10条均有quantity.status=undetermined和chronology.plot=false |
| 距今换算 | 具有conditions.lookbackYears的条目逐一按T₀和31557600复算一致；其他前批派生条目有明确基准和原文距今年代说明 |
| 关联 | 所有related均指向内容仓中真实存在的ID，无从旧标签猜造的ID |
| 前71条 | 写入期间哈希不变；本次结构和基准检查未发现需改其数值的实质错误，未擅改 |

上述审计包括结构、基准、范围与证据留存，不把它夸称为重新打开全部91条每个科学来源后的独立第二轮同行审查。前批来源复核详见TIME_REVIEW、TIME_REVIEW_02、TIME_REVIEW_03和TIME_REVIEW_04。

全目录10条未上轴条目为：baryogenesis、baryon-asymmetry-establishment、dark-matter-freeze-out、electron-positron-annihilation、electroweak-epoch、electroweak-symmetry-breaking、graviton-decoupling、ozone_layer_formation、reheating、strange-quark-matter。它们包含不同性质的机制假说或参考点缺口，不应仅凭相同needs-review状态推断成同一个科学结论。

## 同值坐标保留独立ID

没有因坐标相同而去重、合并或删除条目。相同参考时期可以对应不同概念、观测或历史过程，related与文章语义分别保留。

| 轴上参考秒数 | 独立ID（time.前缀） |
|---|---|
| 11991888000000 | baryon-acoustic-oscillations；dark-ages；recombination |
| 6311520000000000 | cosmic-dawn；first-stars |
| 293390800000000000 | earth-formation；giant-impact |
| 423881476000000000 | first-tetrapods；first_seed_plants |
| 433632774400000000 | first_primates；petm |
| 0.000001 | hadron-era；quark-era |
| 433317198400000000 | k-pg-extinction；mammal-radiation |
| 420567928000000000 | land-plants；ordovician-radiation |
| 1 | lepton-epoch；neutrino-background-formation；neutrino-decoupling |
| 180 | lithium-7-synthesis；nucleosynthesis |
| 1633000000000 | matter-radiation-equality；photon-epoch |

## 验证边界与权利状态

本批20篇均为三节全新正文，并含sources、review原值记录、rights和真实related。全91条通过frontmatter解析及现有validateEntry，没有越界值、丢失ID、缺来源结构或空值入轴问题。本轮未改源码，未运行或声称完成全站构建。

部分候选机构新闻和Nature页面返回500、403、超时或Cookie障碍，已改用实际可读的作者机构论文库、论文PDF及机构正文；没有把失败链接的搜索摘要当作成功阅读全文。许可证仍待项目统一确认，rights.rewritten只记录正文已重写，不确认第三方图片、原网页或其他材料的授权。未创建远程仓。
