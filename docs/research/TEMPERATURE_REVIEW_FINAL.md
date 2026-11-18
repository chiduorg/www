# 温度条目第二轮审读

日期：2026-11-04。本轮仅修订原来仍为 `needs-review` 的 16 条及其对象映射，不修改其他已审核条目或模型源码。`reviewed` 表示项目内已逐项核对正文、数值、定义和适用条件，并不声称经过独立同行评审。

本轮 11 条收窄后通过，5 条继续待审核且全部 `quantity.value: null / status: undetermined`。全 energy 共 93 条：88 条 reviewed、5 条 needs-review；93 条正文均为重写。当前所有轴上温度都有已明确的来源口径，没有以“待核”保留的旧占位坐标。

## 逐条决定

| ID（energy.） | 决定与当前坐标 | 本轮具体依据与边界 |
| --- | --- | --- |
| black-hole-accretion-disk | reviewed；约 10⁷ K | 收窄为 2013 年非旋转黑洞吸积盘模拟说明中的盘气体量级；[NASA 研究团队说明](https://www.nasa.gov/universe/nasa-led-study-explains-decades-of-black-hole-observations/)、[Johns Hopkins 研究团队说明](https://hub.jhu.edu/2013/06/14/black-holes-x-ray-light/)。盘、日冕、黑洞本体分开，不宣称是指定黑洞的实测峰值。 |
| carbon-fusion | reviewed；起始温标约 0.6–0.8 GK，轴用 0.7 GK | [Monpribat 等原论文](https://eprints.whiterose.ac.uk/id/eprint/187718/1/aa41858_21.pdf)引言明确为通常高于约 0.6–0.8 GK 开始。范围表示起始温标量级，绝不是整个燃烧阶段的最高温度；正文列出论文的 12、25 太阳质量模型背景。 |
| carbon-sublimation | reviewed；3,895–4,020 K，轴用中点 3,957.5 K | 改为 [Abrahamson 1974 年原作者分析](https://www.sciencedirect.com/science/article/pii/0008622374900190)中的一大气压石墨结论；可读作者摘要足以支撑所写范围、物质与压力。注明历史研究分析，不把它当作所有碳同素异形体的统一现行常数。 |
| cooking_oil_smoke | reviewed；约 493 K（220°C） | 改为 [How、Nyam 与 Soo 2024 年原始研究](https://academic.oup.com/ijfst/article/59/9/6340/7911657)结果部分明确报告的新鲜棕榈液油平均烟点；只取处理前样品，不泛化到全部油种、使用状态或健康结论。 |
| earths-core | reviewed；6,230±500 K | [Anzellini 等原论文摘要](https://pubmed.ncbi.nlm.nih.gov/23620049/)给出最高 200 GPa 实验与向内核边界约 330 GPa 的纯铁外推。标题、摘要与正文统一为纯铁熔化推断；真实地核仍有组成问题，不妨碍这个明确研究结论被准确引用。 |
| electroweak | reviewed；约 (1.85±0.02)×10¹⁵ K | [D’Onofrio 与 Rummukainen 原论文](https://arxiv.org/abs/1508.07161)中，物理 Higgs 质量下的有效 SU(2)×U(1)+Higgs 格点模型，以 Higgs 凝聚易感率峰定义 159.5±1.5 GeV；按 [NIST 常数](https://physics.nist.gov/cuu/Constants/Table/allascii.txt)换算。理论模型和数值不确定度明确。 |
| glass_melting | reviewed；约 1,525 K（1252°C） | 改为 [Corning 厂家 7740 玻璃材料表](https://www.corning.com/media/worldwide/csm/documents/Soda_Borosilicate_7740.pdf)的工作点，黏度 10⁴ poise；不是玻璃统一熔点、配合料熔化炉温或现场设定值。 |
| gut | needs-review；null，只阅读 | [CERN](https://home.web.cern.ch/science/physics/unified-forces/)能支持理论背景；[CMS 历史教学时间线](https://cmsexperiment.web.cern.ch/physics/story-of-the-universe)中的 10²⁷ K 没有给出本条采用的具体定量模型，不能据此确立统一相变点。撤下旧轴值；区分理论未获验证与编辑尚未选定模型。 |
| helium-3-superfluid | reviewed；2.444 mK | 改为 [BIPM PLTS-2000 定义](https://www.bipm.org/documents/20126/41791796/PLTS-2000.pdf)中氦-3 熔化线上的超流 A 点，3.43407 MPa；[实现指南表 1](https://www.bipm.org/documents/20126/41773843/Guide-PLTS-2000.pdf/43f543da-0a62-2677-fc38-c8ab70d0539a)明确相对热力学温度标准不确定度 48 μK（k=1），不能与最佳实现约 0.7 μK 混用。 |
| hypernova | needs-review；null，只阅读 | 收窄事件背景为 SN 1998bw；[ESO 的观测机构报告](https://www.hq.eso.org/public/news/eso9847/)没有验证旧 10¹² K 的温度口径。没有用爆发总能量或伽马射线能量推导温度，撤下旧轴值。 |
| kilonova_temp | reviewed；约 5,500 K | [Nicholl 等原始光谱论文](https://arxiv.org/pdf/1710.05456)摘要、图 1 和黑体讨论：GW170817/AT2017gfo，并合后静止系 1.5 天。明确是近似黑体光谱拟合，作者指出黑体不能完整描述谱形；不冒称并合核心物质温度。 |
| neutron-star-core | needs-review；null，只阅读 | [Page 等](https://arxiv.org/abs/1011.6142)、[Shternin 等](https://arxiv.org/abs/1012.0045)分别提供仙后座 A 的特定超流临界温度约束；本条仍讨论核心实际温度，不能把临界参数偷换成当前核心均温，所以不恢复旧 10⁹ K。 |
| nova-outburst | reviewed；约 0.81–1.00 MK，轴用中点 0.905 MK | [Orio 等 2021 年原始研究](https://academic.oup.com/mnras/article/505/3/3113/6279690)的 LMC2009a 四组 XMM–Newton RGS 光谱，主导白矮星大气连续谱的峰值有效温度模型范围。不是燃烧层温度；中点不是额外观测结果。 |
| paper-autoignition | needs-review；null，只阅读 | [NASA-TM-107311 原始实验](https://ntrs.nasa.gov/citations/19960048690)明确比较热流、能量分布、引火源与自然对流；未选择能对应旧 506 K 的纸样与试验，不恢复通用自燃点。资料匹配缺口不等于没有着火温度实验。 |
| steelmaking_temp | reviewed；约 1,893 K（1620°C） | [Schmidt 的原始现场研究](https://link.springer.com/article/10.1007/s10606-024-09488-9)中 DDS 钢厂电弧炉通常的出钢目标。正文明确论文发表 2024 年、主要现场观察 1997–1998 年；这是现场工艺目标，不是单炉实测或今日行业统一标准。 |
| type-ia-supernova | needs-review；null，只阅读 | [Seitenzahl 等原始研究](https://arxiv.org/abs/1211.3015)比较十四组三维延迟爆轰模型。本条没有建立旧 5×10⁹ K 与区域、时刻的对应，不用反应网络阈值、初始温度或任意模型峰值代替原概念。 |

## 证据保存和展示同步

全部 16 条保留先前 `review.originalQuantity`；本轮增加 `review.secondRound.previousQuantity`，因此最早旧值和第一轮调整值均可追溯。范围、中点、理论结果、厂家参考和工艺目标分别在 `quantity`、摘要、显示值、条件与正文写明。全文再次重写为最终口径；英文标题也同步，不遗留“under review”等与新状态冲突的名称。

`visual-map.json` 删除 GUT 和 hypernova 两个已撤下轴值的对象，新增有依据的新星大气与 DDS 出钢参考两个配置；其他受范围或对象定义变化影响的 caption/note 已同步。仍覆盖 79 条，加原 9 专属，共 88 个可比较条目；5 条 null 不进入模型映射。对象源码未改。

## 检查与未解决问题

已检查全 93 条 `rights.status: rewritten`、摘要/显示值/条件/中文口径齐全、全部 related 引用存在；全部剩余 needs-review 均为 null，全部有限值的非专属条目均有映射。资料来源优先使用原论文、标准定义、厂家原始数据及研究机构发布；只写可读部分能够直接支持的事实，不把全文无法访问当成已阅读全文。

仍待后续选定具体模型或试验的 5 条为：GUT、hypernova、neutron-star-core、paper-autoignition、type-ia-supernova。它们不会因为保留条目或解释性正文而取得伪造坐标。保留未审核状态的原因分别列明，不声称这些现象在科学上均无温度数据。

正文许可仍待项目统一确认；重写与来源核对不构成对旧站内容开源授权的确认。浏览器构图和真实帧率仍由站点接入后的视觉检查覆盖。
