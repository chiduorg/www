# 温度科普深化第六批

日期：2026-11-04。本轮限 11 篇 Markdown，目标是把简短的维护说明深化为面向读者的文章。每篇均为五节，先讲现象、认识方法、条件和误解，再连接其他尺度；五篇空值条目的证据边界集中在末节。

本轮只调整正文、部分摘要、真实 related 和 sources。已将编辑前元数据与当前文件逐字段比较：quantity、displayValue、visual、reviewStatus、conditions、review 中的全部旧值证据及其他未授权字段均未改变。原六篇 reviewed、五篇 needs-review 的状态维持；五个 null 坐标没有恢复或升级。

## 逐篇内容与来源对应

汉字数仅计正文汉字，不计五个小节标题、拉丁字母、数字和标点。

| ID | 汉字数 / 节数 | 科普深化 | 实际读取的主要依据 | 保留边界 |
| --- | --- | --- | --- | --- |
| temperature.absolute-zero | 480 / 5 | 绝对温标与摄氏零点；量子零点运动；温度计校准；温度与统计能量；绝对温标上的比较 | [NIST Kelvin Introduction](https://www.nist.gov/si-redefinition/kelvin-introduction)正文；[Present Realization](https://www.nist.gov/si-redefinition/kelvin/kelvin-present-realization)的定义与三相点校准；[Boltzmann Constant](https://www.nist.gov/si-redefinition/kelvin/kelvin-boltzmann-constant)的统计分布与测量方法说明 | 0 K 仍为定义坐标；未添加达到 0 K 的实验纪录，也未把动画停住等同于量子运动消失。 |
| temperature.human-body-temperature | 479 / 5 | 区分群体参考与个体读数；测温部位；大样本研究的筛选方法；单位换算和差值比较 | [MedlinePlus Temperature Measurement](https://medlineplus.gov/ency/article/003400.htm)的测量方式和变化因素；[Ley 等 JAMA 原始调查](https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2809098)的 Methods、Population、LIMIT Filtering、结果及局限；NIST 温标说明 | 37°C 作为既定日常参考不变；36.64°C 明确属于特定成人门诊研究，不替代全人群常数或个人判断，不提供诊断阈值。 |
| temperature.boiling-water | 490 / 5 | 蒸气压与周围压力；高海拔和加压；成核与过热；日常约数和精密温标的关系 | [IAPWS 水与蒸汽 FAQ](https://iapws.org/faqs/faq1)实际读取温标、压力和成核过热三个问答；NIST 温标说明 | 原约 373.15 K 锚点不改；正文说明 ITS-90 上约 99.974°C 的精密口径，不把两种精度的数字当作水性质改变。 |
| temperature.liquid-nitrogen | 490 / 5 | 液氮物态和正常沸点；如何读相变表及文献；白雾成因；同单位仍需同口径 | [NIST 氮相变表](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7727379&Mask=4)的数值、引用、不确定度与符号说明；[CSB 原始调查报告所附氮资料](https://www.csb.gov/assets/1/20/final_union_carbide_report.pdf?13768=)中水分凝结成雾说明；NIST 温标说明 | 77.34 K 与压力条件不改；白雾资料仅用于解释物理现象，没有把事故报告的操作或医疗建议写入正文。 |
| temperature.sun-surface | 517 / 5 | 光球不是固体表面；有效温度与总辐射；名义常数与实际太阳参数；黑子、日冕和局部温度；半径与光度 | [IAU B3 决议全文](https://arxiv.org/pdf/1510.07674)的建议、太阳常数表、说明 5 和脚注 5；[NASA Sun Facts](https://science.nasa.gov/sun/facts/)的 Structure、Surface 和 Key Sun Features | 5,772 K 继续作名义有效温度参考；没有把精确约定的换算因子说成瞬时太阳温度的精确观测。 |
| temperature.sun-core | 506 / 5 | 内部核供能；日震频率和推断；中微子散射研究；能量输运；观测时长与空间结构 | NASA Sun Facts 的核心及辐射/对流结构；[NSF NSO 日震学机构说明](https://nso.edu/research/helioseismology/)的振动模式、Doppler 方法和观测要求；[Borexino 官方研究与开放数据说明](https://borex.lngs.infn.it/papers/articles/solar_nu/comprehensive-measurement-of-pp-chain-solar-neutrinos/)的实验方法、拟合和太阳模型比较 | 约 1,500 万 K 不改；不声称日震独立、直接测出温度，也不把一次中微子事例叫作一次温度读数。 |
| temperature.gut | 543 / 5 | 强与电弱作用的统一；温度与能标；质子衰变搜寻；大探测器和长时间记录；区分理论证据层级 | [CERN Unified Forces](https://home.web.cern.ch/science/physics/unified-forces/)正文；[Hyper-Kamiokande 研究说明](https://www-sk.icrr.u-tokyo.ac.jp/en/hk/about/research/)的 GUT、质子衰变和水切伦科夫重建部分；NIST Boltzmann Constant；[CMS 历史教学时间线](https://cmsexperiment.web.cern.ch/physics/story-of-the-universe)用于追溯原示意数值 | 不采纳机构教学页面中过强的“将发现”等预测表述；不把引力统一、质子衰变发现或固定 GUT 温度当作已证实事实。旧值缺具体模型，仍 null。 |
| temperature.hypernova | 490 / 5 | 以 SN1998bw 认识名称；多波段和光谱；动能、辐射和物质温度；早晚期及几何结构 | [ESO 1998 年研究机构报告](https://www.hq.eso.org/public/news/eso9847/)；[Iwamoto 等模型全文](https://arxiv.org/pdf/astro-ph/9806382)的模型参数、光变/光谱/速度比较；[Nakamura 等后续全文](https://arxiv.org/pdf/astro-ph/0007010)的球对称流体与辐射输运、早晚期拟合差异 | 对非球对称结构使用“讨论可能作用”，不将其说成该历史模型已唯一确定的事实；旧 10¹² K 不恢复。 |
| temperature.neutron-star-core | 508 / 5 | 表面与核心；碳大气和冷却曲线；配对及中微子冷却；临界参数和实际温度；红移口径 | [Page 等四页原文](https://arxiv.org/pdf/1011.6142)的 Minimal Cooling 假设、配对密度曲线和图 1；[Shternin 等六页原文](https://arxiv.org/pdf/1012.0045)的碳大气拟合、包层与核心假设、温度定义和图 1 | 两组约 5×10⁸ K、(7–9)×10⁸ K 只作为 2011 年具体超流模型参数，不把它们合并成核心均温；null 不变，不替历史结果宣称最新唯一解释。 |
| temperature.paper-autoignition | 532 / 5 | 热分解与气相燃烧；有引火源的实验；热电偶读数的阶段变化；热流、几何、浮力和延迟 | [NASA-TM-107311 32 页全文](https://ntrs.nasa.gov/api/citations/19960048690/downloads/19960048690.pdf)重点读取 Summary、分解机理、Experimental Apparatus、Experimental Procedure、热电偶解释与姿态实验 | 区分引燃与自燃，不把受控无灰滤纸的结果泛化到全部纸张。没有复制报告的操作步骤；旧 506 K 仍 null。 |
| temperature.type-ia-supernova | 534 / 5 | 白矮星与模型类别；爆燃/爆轰；三维模拟和示踪粒子；图例与一维平均；时空口径 | [Seitenzahl 等十六页全文](https://arxiv.org/pdf/1211.3015)的引言、§2.1 初始条件、§2.3 转变模型、§3 示踪核合成、§3.3 一维平均警告及图 2–4 | 把延迟爆轰写成所选情景，不写成所有 Ia 事件的唯一路径；模型粒子不是观测亮点。旧 5×10⁹ K 缺区域与时刻，仍 null。 |

## 来源读取与取舍

本轮使用网页/PDF 的正文、方法、图注和表格核对，不以搜索结果摘要代替读取。原始研究明确采用论文的模型和时期。Borexino 使用的是实验合作组实际可读的研究与开放数据完整网页，不声称已经读到访问受限的 Nature 出版商全文。

无法取得正文的材料没有作为新增事实依据：Jefferson Lab 液氮词条返回 403，第三定律论文的 Nature 入口受访问跳转影响，旧 NASA 太阳参数 PDF 超时。因此液氮白雾采用可读的 CSB 附录，太阳核心的推断方法采用可读的 NSO 和 Borexino 机构页面；没有加入依赖上述受限全文才能确认的实验或理论细节。IAU 决议采用作者/机构提交的完整 arXiv 版本，替换旧链接以便读者直接复核。

## 只读验证结果

- 11 篇的非授权元数据与编辑前逐字段相等，特别是 quantity、visual、reviewStatus 与原值证据。
- 每篇五节，去除小节标题后正文为 479–543 个汉字，符合本批一般 450–800 汉字要求。
- 全 energy 93 篇通过现有 `validateEntry`，related 均指向实际存在 ID；本批所有 `[n]` 索引均有对应 sources。
- 未恢复五个 null，没有修改模型映射、源码、版本配置或构建产物；未运行整站 build。

本轮是科普深度和证据可读性的改进，不表示五个暂缺坐标的问题已经完成量值匹配，也不确认旧内容授权。内容许可仍按项目统一状态处理。
