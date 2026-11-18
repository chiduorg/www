# 核心条目内容深化 · 第六批

日期：2026-11-04。对应内容版本0.4.0。本文记录主代理负责的6篇；空间、时间和温度其余46篇分别记录在同批三个维度报告中。

## 目标与保护范围

本批把只有简短量值说明的正文补成可独立阅读的科普，重点是概念、证据、可复算的比较、常见误解与关联知识。没有改动数值、单位、审核状态、时间坐标、场景参数或旧量值记录。水的冰点补充了与空气接触的条件，以匹配所引实验。

| 条目 | 新增解释 | 来源支持范围 |
|---|---|---|
| space.moon | 体积等效直径；把地球缩为20cm后的月球大小与间距；同步自转、背面与月相；模型边界 | NASA Moon Fact Sheet的半径、地球半径和轨道半长轴支撑数值及缩尺计算；NASA Moon Facts支撑自转与光照解释 |
| space.sun | 等离子体与光球；半径定义；长度、体积和质量倍数区别；核心与大气分层 | NASA Sun Fact Sheet支撑参考半径和地球比例；NASA Sun Facts支撑核聚变、光球及外层大气的概念 |
| time.earth-formation | 聚集形成过程；铀—铅测年的基本逻辑；圆整年龄和较细测年估计的区别；时间轴换算与持续时间 | NASA Earth Facts支撑约45亿年和岩质行星结构；NIST测年文章支撑同位素、矿物及陨石证据和其较细概览估计 |
| time.cambrian | 演化过程与纪界；生态相互作用；身体与活动痕迹的证据；不同化石群的范围 | ICS 2024/12明确边界年龄和不确定度；Smithsonian解释化石与生态变化。后者沿用较早圆整年代，本文不以它覆盖固定版本的纪界数值 |
| temperature.water-freezing | 冰水平衡；空气与气压条件；定义上的温标换算与样品相变的区别；冰点/三相点区别 | NIST 2013原论文分析冰—水—空气平衡和压力/溶解气体影响；NIST SI指南的摄氏温标章节支撑换算及温差关系 |
| temperature.room-temperature | 20°C是选定示例；绝对读数与温差；摄氏数字的倍数误区；温度和能量的单位区别 | NIST温度科普给出另一室温近似示例及温标背景；SI指南明确摄氏换算、温差、K和J的量纲区别 |

正文引用编号逐段对应sources。缩尺与温标例子注明为计算或人为参照，不能当作新增测量。太阳与月球条目中可见边界和动画不等同于实时观测；地球形成与寒武纪条目都把参考点和过程分开。

## 实际读取的资料

- [NASA Moon Fact Sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html)
- [NASA Moon Facts](https://science.nasa.gov/moon/facts/)
- [NASA Sun Fact Sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html)
- [NASA Sun Facts](https://science.nasa.gov/sun/facts/)
- [NASA Earth Facts](https://science.nasa.gov/earth/facts/)
- [NIST：How Do You Know the Age of Fossils and Other Old Things?](https://www.nist.gov/how-do-you-measure-it/how-do-you-know-age-fossils-and-other-old-things)
- [ICS 2024/12年代表](https://stratigraphy.org/ICSchart/ChronostratChart2024-12.pdf)
- [Smithsonian：Early Life on Earth – Animal Origins](https://naturalhistory.si.edu/education/teaching-resources/life-science/early-life-earth-animal-origins)
- [NIST：冰点压力研究说明](https://www.nist.gov/publications/thermodynamic-analysis-and-experimental-study-effect-atmospheric-pressure-ice-point)及[原论文](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=910516)
- [NIST：Kelvin Introduction](https://www.nist.gov/si-redefinition/kelvin-introduction)
- [NIST SI指南第4章，摄氏温标与温差](https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-4-two-classes-si-units-and-si-prefixes)

USGS年龄页面返回403，水密度页面返回脚本/机器人验证提示，均未用作本批正文证据。没有以搜索摘要代替成功读取的正文。相关机构资料可能包含未更新的其他段落；本批只采用表中列出的支持范围，不宣称其每一条信息都完成了核对。

## 验证方式

已逐篇解析frontmatter，并在写入前验证新增related全部存在。最终由根任务在全部作者落盘后比对0.3.0基线，检查protected字段、引用编号、来源和全站构建；统一验收结果见 CONTENT_0.4.0.md 与 artifacts/content-enrichment-verification.json。

本批为资料核对与独立重写，不是外部同行评审，也不选择新的公开许可证。
