# 时间内容第四批重写与核对

日期：2026-11-04。选择规则：在本轮开始时按文件名字典序，选取尚无 `rights.status: rewritten` 的最前20个时间条目。修改范围仅为下列20条及本报告，没有改源码、已有51个已重写条目或未选中的其余20条。写入前后对其他71个时间文件的SHA-256比较一致；本轮完成后仍有20条时间正文待重写。

本批20条均全文重新撰写，均保存 `review.original` 中的旧标题、quantity和显示值。20条表述经所列可读机构正文、原始论文或机构PDF核对，状态为reviewed；其中理论或模型参考明确带条件。没有把理论参考当成直接观测，也没有把本轮未读取的候选摘要作为已核实主源。资料核对不等于外部同行评审。

## 逐条内容、时间口径与来源

| ID（time.前缀） | 本轮采用的参考及边界 | 实际读取的主源正文 | 结果 |
|---|---|---|---|
| human_genome | 2003年HGP完成；区别于无空缺参考序列及人群多样性 | [NHGRI：The human genome sequence is now complete](https://www.genome.gov/about-nhgri/Director/genomics-landscape/april-7-2022-the-human-genome-sequence-is-now-complete)，正文明确2003约92%覆盖、重复区空缺及2022后续组装 | reviewed |
| industrial-revolution | 英国1760—1830年转变；1760年为时期导航点，非全球同日开始 | [Science Museum Group：Climate and the collection](https://blog.sciencemuseumgroup.org.uk/climate-and-the-collection/)，馆藏解释正文的1760—1830年、煤炭、机械与交通 | reviewed |
| inflation | 10⁻³²秒，所引暴胀概述的结束量级；不再给无条件统一起点 | [ESA：The cosmic microwave background and inflation](https://www.esa.int/Science_Exploration/Space_Science/Planck/The_cosmic_microwave_background_and_inflation)，正文的10⁻³²秒结束背景、起伏拉伸及CMB检验思路；保留模型性质 | reviewed / model-reference |
| internet-birth | 1969年10月29日ARPANET早期连接；与跨网络协议、1983转变及Web区分 | [DARPA：ARPANET](https://www.darpa.mil/news/features/arpanet)，参与机构正文的UCLA—SRI通信及后续TCP/IP演化 | reviewed |
| invention-of-writing | 两河流域约前3400—3200年；轴上取前3300年中点，不代表全球文字首次出现 | [芝加哥大学ISAC博物馆策展：Visible Language (Part I)](https://artsandculture.google.com/story/rwWhZTdobl0nLA)，实际读到Mesopotamia 3400—3200 BC及管理、印章、计数物背景；内容发布者是博物馆，Google是托管平台 | reviewed |
| james_webb | 2021年12月25日发射；不混入2022年抵达L2和后续调试节点 | [NASA：James Webb Space Telescope](https://science.nasa.gov/mission/webb/)，任务正文及Launch、Arrival at L2字段 | reviewed |
| jurassic-period | 201.4±0.2至143.1±0.6 Ma；起始边界只作轴坐标 | [ICS International Chronostratigraphic Chart 2024/12](https://stratigraphy.org/ICSchart/ChronostratChart2024-12.pdf)，读取单页年代表，明确使用版本，不称最新；数值可修订且不单独定义地层单位 | reviewed |
| k-pg-extinction | 约66 Ma的边界时代；非鸟恐龙灭绝与鸟类延续分开 | [NHM：How an asteroid ended the age of the dinosaurs](https://www.nhm.ac.uk/discover/how-an-asteroid-caused-extinction-of-dinosaurs.html)，馆内恐龙研究者正文的66.0 Ma、撞击与地质证据 | reviewed |
| land-plants | 约470 Ma及更早的陆生植物隐孢子记录；不是高大森林首现 | [PRI：Origin of Land Plants](https://www.digitalatlasofancientlife.org/learn/embryophytes/land-plant-origins/)，机构教材正文的over 470 Ma、陆相孢子与现生苔藓相似性，以及化石/谱系推算区别 | reviewed |
| last-glacial-maximum | 多数冰盖约26.5 ka至19—20 ka维持最大位置；20 ka只作导航 | [Clark等，Science 2009原始摘要，由USGS发布：The last glacial maximum](https://www.usgs.gov/publications/last-glacial-maximum)，实际读取5704个测年样本综合及地区退冰不同步 | reviewed |
| last_magnetic_reversal | 约780 ka的松山—布容完整倒转；换算为距今，修复旧量纲口径错置 | [GFZ：GGFMB模型发布](https://ri.gfz.de/en/infrastructure/244)，实际读取约780 ka、900—700 ka重建窗口及38组沉积古地磁记录；不是地理两极互换 | reviewed |
| late-devonian-extinction | 约372 Ma为重要灭绝阶段；明确不止一次事件，不锁定单一已证实成因 | [NPS：Mass Extinctions Through Geologic Time](https://www.nps.gov/subjects/fossils/mass-extinctions-through-geologic-time.htm)，Late-Devonian正文的多事件、372 Ma、海洋影响及成因边界 | reviewed |
| late-heavy-bombardment | 约3.9 Ga为经典撞击高峰假说背景，不是已确认起止年代 | [NASA：Impact History of Earth-Moon System](https://science.nasa.gov/lunar-science/focus-areas/impact-history/)正文的部分模型约3.9 Ga；[NASA：What is the Late Heavy Bombardment?](https://science.nasa.gov/moon/lunar-craters/what-is-the-late-heavy-bombardment/)正文的渐变、分段、无高峰等解释与样品代表性问题 | reviewed / model-reference |
| lepton-epoch | 改为最初秒级轻子热史，1秒为标准热史约MeV背景参照，非统一时期边界 | [PDG 2025：Neutrinos in Cosmology](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-neutrinos-in-cosmology.pdf)§26.1的约2 MeV逐渐退耦；[PDG 2025：Big Bang Nucleosynthesis](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-nucleosynthesis.pdf)§24.2的约1 MeV对应约1秒 | reviewed / model-reference |
| lithium-7-synthesis | 最初数分钟，约180秒作轻核合成背景参照，不是单个锂核的诞生时刻 | [PDG 2025：Big Bang Nucleosynthesis](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-nucleosynthesis.pdf)§24.3的约180秒丰度背景、质量数7生产通道及§24.5锂问题；不写未经本轮核实的电子俘获时间 | reviewed / model-reference |
| luca | 约4.2 Ga，明确为2024年分子钟研究的估计，不是直接化石测年或生命首次起源 | [University of Bristol：Insight into one of life’s earliest ancestors revealed in new study](https://www.bristol.ac.uk/news/2024/july/luca.html)，研究团队正文的基因比较、演化模型、化石校准与4.2 Ga结果 | reviewed / model-reference |
| mammal-radiation | 改为Corral Bluffs约66—65 Ma的地区性复苏记录；非全球所有哺乳动物同步辐射 | [Denver Museum of Nature & Science：Rise of the Mammals](https://www.dmns.org/science/research/rise-of-the-mammals/)，研究团队实际正文的灭绝后首100万年及动植物化石序列 | reviewed |
| matter-radiation-equality | ΛCDM拟合约51.7±0.8 kyr；采用原表(1.633±0.024)×10¹²秒，不混同复合或暗能量占优 | [Hergt、Scott：Some Times in Standard Cosmology，arXiv:2411.07703v1](https://arxiv.org/html/2411.07703v1)，读取方法、表1条件、表2后验均值/标准差及§3.1定义；不是仅取论文摘要 | reviewed / model-reference |
| milky-way-formation | 约0.8 Gyr宇宙时代，限定为所引研究推断的银河厚盘早期形成 | [ESA/Gaia：Gaia finds parts of the Milky Way much older than expected](https://www.esa.int/Science_Exploration/Space_Science/Gaia/Gaia_finds_parts_of_the_Milky_Way_much_older_than_expected)，研究参与机构正文的Gaia+LAMOST资料、亚巨星年龄模型及厚盘0.8 Gyr | reviewed / model-reference |
| multicellular-life | 约1.63 Ga青山藻化石，限定简单多细胞真核生物，不当全部复杂生命唯一起源 | [中科院南古所研究团队：Fossils from North China…](https://english.nigpas.cas.cn/new/pns/No14/202501/t20250127_899458.html)，正文的Science Advances 2024材料及1.63 Ga；不把发布时最早纪录改写为永久排名 | reviewed |

## 时间换算与模型边界

本批距今年代以本库 `time.present.quantity.value = 435400000000000000 s` 为T₀，使用儒略年 `31557600 s`，按 `T₀ − lookbackYears × 31557600` 换算为轴上坐标。各条 `conditions` 明示基准、公式、距今年数和精度限制。没有修改time.present，也没有把近似宇宙年龄当无误差的实测常数。

历史事件按参考年2026与事件年份相减，保持年级近似导航；正文中已知的月日不被冒充为轴上秒精度。文字例子的前3300年换算采用 `2026 + 3300 − 1 = 5325年`，明确无公元0年。纪年和冰期年代的参考系统差异小于所用圆整精度；不据此制造额外有效数字。

侏罗纪、英国工业化、末次盛冰期、早期文字及哺乳动物复苏均保留范围，同时另述导航参考点。晚泥盆纪明确为多轮危机。早期陆生植物和青山藻以具体化石证据时代替代笼统“起源”时点。

暴胀、晚期重轰炸、最初秒级轻子热史、原初锂、LUCA、物质—辐射相等和银河厚盘共7条使用model-reference，带中文口径、条件与不确定性；推断年代与具体观测材料分开。LUCA不是生命第一起点，银河厚盘不是全银河同时建成，晚期重轰炸高峰也不是早期撞击普遍频繁的同义词。

物质—辐射相等采用原论文表2均值与标准差。网页行内公式的渲染可能丢失误差小数点，因此以表2明确的±0.8 kyr和±0.024×10¹²秒为准，没有误抄成±8 kyr。只采用相关物理结果，不用该文的宇宙年龄替换本库基准。

## 原值修正与未核定范围

最严重旧值问题是last_magnetic_reversal：旧 `quantity.value = 24600000000000 s` 表达的是约78万年的时长，却被标成大爆炸后的时刻。现改为 `T₀ − 780000 × 31557600`，旧quantity完整保留于 `review.original`。若只保留旧值，地球上的地磁事件会被错误排进极早宇宙。

其他关键变更包括：暴胀由无条件起点改为来源支持的结束量级；原初锂由无出处15分钟改为有模型条件的数分钟背景；银河系笼统20—30亿年改为具名研究中的厚盘参考；多细胞生命改为具名化石材料；HGP说明2003年完成计划仍有序列空缺。所有旧数值和显示值均只在审查记录中保留其原貌，不静默覆盖证据。

本轮选定范围内，没有必须以“本条尚未核定”为理由撤去全部参考点的条目。已充分支持的是经过限定的当前表述，而非旧稿所有“第一”“唯一”“全球”等断言。理论、分类、模型校准与地区适用性限制留在各条正文和uncertainty中；未来资料更新可修订。候选PubMed页面出现无正文或验证码、LoC和部分DOI链接出现403，这些没有作为最终引文；改用上表已读取的机构材料。

## 验证与后续

20条具备完整来源对象、中文measureLabel、review.method/date/original、rights.rewritten和重新撰写的三节正文。执行frontmatter解析、现有validateEntry、数值范围、日历/距今换算、模型标记与related实际ID检查；定向检查全部通过。这里只说明本批内容验证，没有运行或声称完成全站构建。

本轮后剩余20条时间正文待重写。许可证继续待项目统一确认；rights.rewritten只说明正文重写记录，不等于已确认第三方正文、图片或数据的授权。未创建远程仓。
