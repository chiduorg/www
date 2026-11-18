# 时间内容复核 · 2026-11-04

范围：8个有专属图景的精选条目及3条旧数值越界记录，共11条。全部正文重新撰写，未沿用旧站段落。`rights.status: rewritten`；许可证待项目统一确认。

复核方式为资料核对，非外部同行评审。`reviewed` 仅表示本次重写的正文与数量口径已对照所列资料；不意味着已确定所有宇宙史、生物起源或地质年代问题。

## 时间口径

- 全库“现在”沿用 `time.present.quantity.value = 4.354 × 10¹⁷ s`，约138亿年；保留其近似性，不视为精确到秒的测量。
- 回望事件：`t = T₀ − lookbackYears × 31,557,600`，一年采用儒略年365.25天。
- 导航锚点可表示一段时期；不是所有条目都应当被解释为一次瞬时事件。
- 每条的 `review.original` 保留旧标题、旧quantity及旧显示值；旧正文可在原项目 `data/time.json` 找到，不把旧稿再带入新正文。

## 条目与核对结果

| 条目 | 现口径 | 主要来源与限制 |
|---|---|---|
| big-bang | t=0，坐标原点 | [NASA Hubble Big Bang](https://science.nasa.gov/mission/hubble/science/science-behind-the-discoveries/hubble-big-bang/)；移除“已证实无限密度奇点”的断言 |
| recombination | 大爆炸后约38万年 | [NASA Overview](https://science.nasa.gov/universe/overview/)；复合、透明化及微波背景的时期性解释 |
| first-stars | 大爆炸后约2—4亿年，取2亿年导航 | [NASA Goddard](https://science.nasa.gov/missions/webb/nasas-james-webb-space-telescope-could-potentially-detect-the-first-stars-and-black-holes/)；不是第一颗恒星精确生日 |
| galaxy-formation | 早期星系时代，取4亿年参考 | [NASA Webb研究发布](https://science.nasa.gov/blogs/webb/2022/12/09/nasas-webb-reaches-new-milestone-in-quest-for-distant-galaxies/)；有不到4亿年的星系观测证据，不声称最早纪录或统一形成时刻 |
| solar-system | 距今约46亿年，推算宇宙时间 | [NASA Space Place](https://spaceplace.nasa.gov/solar-system-formation/en/)；形成是过程 |
| first-life | 距今约35亿年的早期生命地质记录 | [2021年Nature Communications原始研究](https://www.nature.com/articles/s41467-021-21323-z)；证据不等于生命起源的确定日期，标题已相应修改 |
| cambrian | 寒武纪起始边界作时代参照，538.8±0.6 Ma | [ICS 2024/12](https://stratigraphy.org/ICSchart/ChronostratChart2024-12.pdf)；显式版本，未冒称最新地层表；边界不等于生命多样化全过程 |
| present | 约138亿年的年龄参考基准 | [NASA Hubble Big Bang](https://science.nasa.gov/mission/hubble/science/science-behind-the-discoveries/hubble-big-bang/)；保留库中T₀，避免无意义精度 |
| first_seed_plants | 晚泥盆世种子植物化石，3.65亿年前为导航锚点 | [Rothwell等，1989原始论文](https://www.journals.uchicago.edu/doi/10.1086/337763)核实晚泥盆世Elkinsia化石；[ICS 2024/12](https://stratigraphy.org/ICSchart/ChronostratChart2024-12.pdf)提供地质年代范围。365 Ma是时期内的参考点，不是论文给出的精确测年 |
| first_primates | 距今约5600万年的早期灵长类化石记录 | [Florida Museum研究团队报道](https://www.floridamuseum.ufl.edu/science/ancient-primates-had-grooming-claws/)；限定化石证据，不声称整个灵长类支系的绝对首现 |
| petm | 距今约5600万年的气候事件 | [Kirtland Turner 2018，Royal Society / PubMed](https://pubmed.ncbi.nlm.nih.gov/30177565/)和[ICS 2024/12](https://stratigraphy.org/ICSchart/ChronostratChart2024-12.pdf)；历史时点与起始持续时长分开，不引入温升或碳排放的未经本轮复核数值 |

## 三条越界修订

| ID | 旧值 s | 新值 s | 换算 |
|---|---:|---:|---|
| time.first_seed_plants | 1,140,000,000,000,000,000 | 423,881,476,000,000,000 | T₀ − 365,000,000 × 31,557,600 |
| time.first_primates | 1,740,000,000,000,000,000 | 433,632,774,400,000,000 | T₀ − 56,000,000 × 31,557,600 |
| time.petm | 1,770,000,000,000,000,000 | 433,632,774,400,000,000 | T₀ − 56,000,000 × 31,557,600 |

这三个计算结果仅是内部坐标，不表示地质年代具有同等多位有效数字的精确度。旧值均超过T₀，不能表示所述地球历史事件。

## 验证与后续

11条frontmatter经共享 `validateEntry` 校验通过；新增关联目标均确认存在。数值在0与T₀之间。全部 `review.original`、来源、中文口径标签、重写权利状态已保存。未编辑站点源码或其余80条时间内容。

站点文案应随条目调整：原“生命的起点”精选标签应改为早期生命证据；“星系形成”应以早期星系时代理解。相同时间值（灵长类化石与PETM）必须按ID选择，不以最近数值替代条目身份。

仍需：其余80条时间记录逐条复核；不同年龄基准的全库统一与误差传播；如采用新版地层表，记录版本变化；由项目确认正文许可证。不能因本批11条通过资料核对而宣称全库科学审核完成。
