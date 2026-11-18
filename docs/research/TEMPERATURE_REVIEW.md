# 温度精选条目来源复核

复核日期：2026-11-04。范围：9 个配置专属 visual 的温度条目。正文与简介均已逐条重新撰写，未保留旧站的历史背景、人物生平、医学判断或未经本次来源支持的应用断言。

`reviewStatus: reviewed` 表示这次的资料比对和编辑复核，不表示外部同行评议、实验测量或授权确认。每条保留 `review.originalQuantity`，并附 `rights.status: rewritten`；内容许可证仍待项目统一确认。

## 逐条结果

| ID | 参考数值与口径 | 主要修订 | 状态 |
|---|---|---|---|
| temperature.absolute-zero | 0 K；精确温标零点 | 区分经典热运动与量子零点运动；装置未宣称达到 0 K | reviewed |
| temperature.bose-einstein | 约 170 nK；1995 稀薄铷气体实验参考 | 原 100 nK 占位改为具体实验起始值；不是所有物质固定的凝聚温度 | reviewed |
| temperature.liquid-nitrogen | 约 77.34 K；氮正常沸点 | 补压力口径；去掉 MRI 等泛化应用；摄氏换算约 −195.81 °C | reviewed |
| temperature.water-freezing | 约 273.15 K；标准大气压附近冰水平衡 | 不把整数 273 K 与 0 °C 混用；交代精密结果受压力与成分影响 | reviewed |
| temperature.human-body-temperature | 约 310.15 K；常用 37 °C 体温参考 | 删除精确恒定与最佳温度说法；区分个体、时段、测量部位；不作医学判断 | reviewed |
| temperature.boiling-water | 约 373.15 K；标准大气压附近水沸点 | 补压力条件；近似 100 °C 与 373.15 K 对齐 | reviewed |
| temperature.sun-surface | 5,772 K；太阳名义有效温度参考 | 取代来源不明的 5,778 K；区分有效温度、局部温度与名义常数 | reviewed |
| temperature.sun-core | 约 1.5 × 10⁷ K；太阳核心 | 与光球温度分开；删除未查证的反应链历史和观测细节 | reviewed |
| temperature.planck-temperature | 约 1.416784 × 10³² K；理论自然温标 | 使用 2022 CODATA；不宣称实验纪录、实测太初温度或已证明的最高温度 | reviewed |

## 可定位来源

- 绝对零度和 K / °C 换算：[NIST — Kelvin: Introduction](https://www.nist.gov/si-redefinition/kelvin-introduction)。
- 凝聚温度：[Cornell 与 Wieman 的研究回顾，NIST (2002)](https://www.nist.gov/publications/bose-einstein-condensation-dilute-gas-first-70-years-and-some-recent-experiments)；[Anderson 等 1995 原始实验，NIST 论文记录](https://www.nist.gov/publications/observation-bose-einstein-condensation-dilute-atomic-vapor-below-200-nanokelvins)；[NIST 对实验与铷原子装置的说明](https://www.nist.gov/news-events/news/2001/10/bose-einstein-condensate-new-form-matter)。
- 液氮：[NIST Chemistry WebBook — Nitrogen phase change data](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7727379&Mask=4)。
- 冰水：[Harvey、McLinden 与 Tew 的冰点压力分析与实验比较，NIST (2013)](https://www.nist.gov/publications/thermodynamic-analysis-and-experimental-study-effect-atmospheric-pressure-ice-point)。
- 水沸腾：[IAPWS — FAQs About Water and Steam，pressure and boiling](https://iapws.org/faqs/faq1)。
- 体温：[美国国家医学图书馆 MedlinePlus — Temperature measurement](https://www.medlineplus.gov/ency/article/003400.htm)。仅使用其常用参考值与测量差异，不移植诊断或处理建议。
- 太阳有效温度：[IAU 2015 Resolution B3，表与说明](https://www.iau.org/common/Uploaded%20files/IAUGA2015-Resolution-B3-recommended-nominal-conversion.pdf)。
- 太阳核心：[NASA — Sun: Facts，Structure](https://science.nasa.gov/sun/facts/)；[NASA — The Sun: a Few Numbers](https://ntrs.nasa.gov/api/citations/20140016714/downloads/20140016714.pdf)。
- 普朗克温度：[NIST — 2022 CODATA complete listing，Planck temperature 行](https://physics.nist.gov/cuu/Constants/Table/allascii.txt)；[NIST 2010 表仅用于定义公式，数值未沿用旧版](https://physics.nist.gov/cuu/pdf/all_2010.pdf)。

## 接入注意

1. 展示层应按真实 `reviewStatus` 更新，不应继续把这 9 条都标为待审核。
2. `conditions` 应在正文页和探索器显示。原文已在正文解释主要条件，结构化字段可供后续交互使用。
3. 旧 chapter 静态副标题如 77 K、273 K、310 K、373 K、5778 K 需要展示层对齐新数据；本任务未编辑源码。
4. 源码的迁移基线测试若强制要求旧数值相等，需要与“后续编辑已发生”的情况分离。不要把本次正确修订回滚为旧数值。
5. 专属场景的存在不证明物理模拟准确，本次保留并明确其示意边界；并未确认图片、旧站文字或新正文的公开许可证。
