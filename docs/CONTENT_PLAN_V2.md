# 全站内容扩容与深化总计划 · v2.0

日期：2026-11-06，Asia/Shanghai。
基线：内容 0.4.0 / 引擎 0.3.0；仅本地建设，不推远程、不发公开版本、不改无关文件。
本文件取代 `CONTENT_EXPANSION_PLAN.md`（v1）作为执行依据；v1 保留作历史记录。

## 0. 结论摘要

v2 不以“数字看起来够了”为目标，而以下列四条同时成立为验收：

1. **深度**：除 4 个兼容别名入口外，281 个概念条目全部达到统一写作门槛（正文 450–800 汉字、4–5 节、2 条来源且全部被正文引用、4 处以上引用、3–6 条 related、条件与不确定性齐全）。
2. **广度**：三维度合计 646 个条目文件，覆盖物理上可定义的核心数量级；不允许为了填格子编造不存在的量值。
3. **结构**：每个维度不超过 10 个一级分类；时间具备绝对时点/时长/未来三种读法；空间区分尺寸/距离/波长口径；温度采用温区 + 场景双标签；90% 以上条目有标签与概念组。
4. **学习层**：词典、方法、对象页、合集、阶梯、误解页、路线、问答八类内容可被搜索与交叉链接；每条正文都能从知识库、对象页或合集到达。

## 1. 审计 v2：真实现状

统计方法：逐文件解析 frontmatter 与正文；汉字数只统计 CJK 汉字，不含标点、数字、拉丁字母与空白；引用数统计正文中的 `[n]` 标记；来源数统计 `sources[]` 条目。审计脚本为 `scripts/audit-content.mjs`，逐次运行结果写入 `dist/audit-v2.json`。

### 1.1 总量

| 项目 | 数值 |
|---|---:|
| Markdown 条目文件 | 285 |
| 唯一 ID | 285 |
| 唯一概念（扣除兼容别名） | 281 |
| 兼容别名入口 | 4 |
| 重复 ID | 0 |
| 通过 v2 深度门槛的条目 | 32 / 281（11.4%） |
| 未通过深度门槛 | 249 |
| `reviewed` / `needs-review` | 257 / 28 |
| 量值 undetermined | 30 |

1.0.2 起 4 条历史兼容入口（`space.local_group`、`space.red_blood_cell`、`space.typical_bacterium`、`space.typical_virus`）已彻底删除，不再保留跳转或别名。其余 4 个下划线 ID（`space.sun_diameter`、`space.moon_diameter`、`space.milky_way_disk`、`temperature.oxygen-boiling`）是独立概念条目，必须一并达到深度门槛。

**审计修正（相对早期草稿）**：上一稿把 8 个下划线入口全部算作别名，并把门槛写成 277 概念 / 234 条待深化。重新逐文件核对后，真实为 285 文件、281 概念、4 别名、32 条达标、249 条待深化。另修正两处门槛实现错误：`conditions` 允许字符串或结构化对象；引用门槛按“正文引用总次数 ≥4，且每条来源至少被引用一次”判定，而不是要求 4 个不同引用编号（2 条来源不可能产生 4 个不同编号）。

### 1.2 分维度深度

| 维度 | 条目 | 汉字均值 | 中位数 | 最小 | 最大 | <450 字 | 来源均值 | 仅 ≤1 来源 | 引用均值 | 引用 <4 | related 均值 | related <3 | 未定值 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 空间 | 101 | 300.96 | 187 | 117 | 600 | 68 | 1.53 | 58 | 2.62 | 69 | 2.72 | 52 | 13 |
| 时间 | 91 | 254.10 | 180 | 143 | 609 | 73 | 1.59 | 59 | 1.40 | 73 | 2.47 | 45 | 11 |
| 温度 | 93 | 204.76 | 149 | 114 | 598 | 80 | 1.30 | 73 | 2.09 | 79 | 1.53 | 80 | 6 |
| 合计 | 285 | 255.55 | — | 114 | 609 | 221 | 1.48 | 190 | 2.06 | 221 | 2.21 | 177 | 30 |

注：温度条目“引用 <4”与“来源仅 ≤1”高度重合，说明多数条目仍是一条资料配一段简述。

### 1.3 正文与结构分布

| 汉字区间 | 条目 |
|---|---:|
| <200 | 212 |
| 200–449 | 9 |
| 450–599 | 60 |
| 600–799 | 4 |
| 800+ | 0 |

小节分布：3 节 219 条、5 节 63 条、2 节 2 条、4 节 1 条。也就是说，绝大多数条目仍是“三段式卡片”，只有上一轮深化过的 63 条采用五节结构。

### 1.4 来源与引用

| 项目 | 数值 |
|---|---:|
| 来源总数 | 421 |
| 唯一来源 URL | 316 |
| 0 来源条目 | 0 |
| 1 来源条目 | 190 |
| 2 条以上来源条目 | 95 |
| 正文引用总数 | 586 |
| 引用少于 4 处的条目 | 221 |
| 引用号超出 sources 数量的条目 | 0 |
| 有来源但存在未被引用来源的条目 | 147 条（合计 173 条来源未在正文引用） |

### 1.5 分类、标签与概念组

| 维度 | 一级分类数 | 现状 |
|---|---:|---|
| 空间 | 18 | 粒度可用，但量子/亚原子/原子核/原子四类边界重叠 |
| 时间 | 69 | 91 条 69 类，几乎一条一类，无法筛选 |
| 温度 | 13 | 温区与场景混用 |

`tags[]`：0 条使用；`conceptGroup`：0 条使用；`uncertainty`：39 条使用。分类清理和标签补全是 v2 的独立批次，不与正文写作混在一起。

### 1.6 数量级分布（按 10 的幂）

- **空间**：10⁻³⁵ 1 条；10⁻¹⁸、10⁻¹⁵、10⁻¹⁰、10⁻⁹、10⁻⁶、10⁻⁵、10⁻³ 各有少量条目；10⁻³⁴–10⁻¹⁹ 之间没有任何条目（该区间没有已知“物体尺寸”，属物理上允许的空档，但需要在学习层解释原因）；10⁰–10⁵ 仅 12 条；10¹⁰–10¹⁵ 仅 6 条；10¹⁸ 以上稀疏。
- **时间**：10⁻⁴⁵–10⁻³² 有早期宇宙条目；10⁻⁶–10² 有粒子过程；**10³–10¹¹ s 完全没有条目（约 17 分钟到 3,000 年）**；10¹⁷ s 挤了 49 条。
- **温度**：10⁻¹⁰–10⁻⁴ K 与 10⁴–10¹¹ K 条目稀疏；10²–10³ K 共 47 条；10¹⁰ K 以上只有个别极端条目。

### 1.7 图景与学习层

- 图景：257 条有 `visual`，28 条没有；复用 60 类模板与 36 个场景。
- 学习层：探索路线 3 条（6/6/4 步）；问答仅 22 组固定比较；没有尺度词典、测量方法页、对象页、主题合集、尺度阶梯、常见误解页、系统问答库；文章没有尺度定位图。
- 知识库只有三维度筛选，没有标签、温区、年代、口径等二级筛选。

### 1.8 构建与校验

基线 `npm run check` 通过：285 篇静态文章、7135 个本地链接、确定性快照、单位边界与源码语法均通过。构建不是问题，内容是问题。

## 2. 验收口径（可量化）

### 2.1 单条深度门槛（所有非别名条目）

| 项目 | 最低 | 目标 | 说明 |
|---|---:|---:|---|
| 正文汉字 | 450 | 550–700 | 只计 CJK 汉字；不含标题、标点、数字 |
| 二级小节 | 4 | 5 | 必须有一节讲口径/不确定性，一节讲常见误解 |
| 来源 | 2 | 2–4 | 必须互不重复、正文确实引用；每一条来源至少引用一次 |
| `[n]` 引用 | 4 次 | 6–8 次 | 按引用总次数计，不是不同编号数；编号不得超出 sources 长度 |
| related | 3 | 4–6 | 必须指向真实存在的条目，禁止同义堆叠 |
| conditions | 必填 | 具体 | 说明对象、样本、测量口径与适用范围 |
| uncertainty | 近似/未定条目必填 | 具体 | 说明误差、范围或为何无法定量 |
| visual | 必填 | 有差异化 | caption 与 note 不能为空，须声明示意边界 |
| review | method + date + notes | 逐条说明 | 新增条目先 needs-review，核对后转 reviewed |

### 2.2 广度门槛

| 项目 | 门槛 |
|---|---|
| 条目文件总量 | 646（空间 260 / 时间 199 / 温度 187） |
| 唯一概念 | ≥642（4 个别名不计入） |
| 空间覆盖 | 10⁻³⁵、10⁻¹⁵–10⁻¹⁴、10⁻¹⁰–10⁻⁹、10⁻⁷–10⁻⁶、10⁻⁵–10⁻³、10⁻²–10⁴、10⁵–10⁷、10⁸–10¹¹、10¹²–10¹⁵、10¹⁶–10²⁰、10²¹–10²⁶ 每段至少 1 条；10⁻³⁴–10⁻¹⁹ 的不存在区间在学习层解释 |
| 时间覆盖 | 10⁻⁴⁵–10⁻³²、10⁻⁶–10²、10³–10¹¹（新增时长条目必须填满）、10¹²–10¹⁷、10¹⁸ 以上未来段，每段至少 1 条 |
| 温度覆盖 | 10⁻¹⁰–10⁻¹ K、10⁰–10³ K、10⁴–10⁹ K、10¹⁰ K 以上，每段至少 1 条 |
| 一级分类 | 空间 8、时间 8 + 时长模式、温度 7 温区；每维度 ≤10 |
| 每类条目 | 一级分类至少 8 条；时长模式至少 20 条 |
| 标签 | ≥90% 条目有 2 个以上标签；三维度标签词表受控 |
| 概念组 | 跨维度同名对象（太阳、地球、月球、水、铁等）建立 conceptGroup |
| 数量级空档 | 只允许“物理上没有对应对象”的空档，并在文档与学习层写明理由 |

### 2.3 结构与学习层门槛

| 项目 | 目标 |
|---|---|
| 时间读法 | `absolute` / `duration` / `future` 三种，未来条目必须标注模型推断 |
| 空间口径 | `size` / `distance` / `wavelength` 三种标签 |
| 温度读法 | 7 温区 + 8 场景标签 |
| 尺度词典 | 60–80 条 |
| 测量方法页 | 12 条 |
| 对象页 | 20 个跨维度对象 |
| 主题合集 | 20 个 |
| 尺度阶梯 | 8 条 |
| 常见误解页 | 30 条 |
| 探索路线 | 15 条（每条 5–8 步） |
| 系统问答 | 120 条（概念辨析、数量级、口径、误解纠正） |
| 文章尺度定位图 | 所有可定位条目显示“本条在轴上的位置” |
| 数据页 | 1 个可排序的数量级总表 |

### 2.4 诚实边界

- 无法建立统一口径的概念保持 `quantity.value: null` + `status: undetermined`，并在正文说明为什么。
- 不为凑数编造数值、来源、访问日期或 DOI。来源必须实际打开核对；打不开的链接换成可打开的权威页面。
- 新增条目从 `needs-review` 开始；未核对来源前不得转 `reviewed`。
- 字数增长不等于质量达标；未通过来源与引用检查的条目不计入完成数。
- 未来时间、理论假说、非热平衡温度必须标注“模型/理论/非热平衡”，不得写成观测事实。

## 3. 广度清单（+361）

下表按维度与主题分组；完整 ID/标题/分类/口径表见附录 A。所有 361 个 ID 已用脚本与现有 285 个 ID 比对：0 冲突、0 重复。

| 维度 | 批次 | 主题 | 数量 |
|---|---|---|---:|
| 空间 | S1 | 微观与粒子 | 16 |
| 空间 | S2 | 微生物与细胞 | 18 |
| 空间 | S3 | 生物与日常尺度 | 20 |
| 空间 | S4 | 日常与人造物 | 20 |
| 空间 | S5 | 地球与地理 | 22 |
| 空间 | S6 | 太阳系与行星 | 20 |
| 空间 | S7 | 恒星与致密天体 | 16 |
| 空间 | S8 | 星系与宇宙 | 17 |
| 空间 | S9 | 波长与电磁谱 | 10 |
| 时间 | T1 | 时长尺度（一） | 20 |
| 时间 | T2 | 时长尺度（二） | 20 |
| 时间 | T3 | 地球史与生命起源 | 17 |
| 时间 | T4 | 地质年代 | 14 |
| 时间 | T5 | 人类与文明 | 23 |
| 时间 | T6 | 未来宇宙 | 8 |
| 时间 | T7 | 早期宇宙补全 | 6 |
| 温度 | E1 | 生命与日常 | 26 |
| 温度 | E2 | 材料与工业 | 26 |
| 温度 | E3 | 行星与大气 | 20 |
| 温度 | E4 | 恒星与星际 | 14 |
| 温度 | E5 | 低温与量子 | 8 |
| 合计 | | | **361** |

## 4. 深度清单（249 条）

完整清单与每条的当前指标见 `dist/depth-queue.json`（249 条）与 `dist/batches.json`（19 批）。分批如下，每批 3–17 条，按主题聚簇以便共用来源与写作口径。

| 批次 | 维度 | 主题 | 条数 |
|---|---|---|---:|
| D-S1 | 空间 | 量子场、亚原子粒子 | 13 |
| D-S2 | 空间 | 原子核、原子、电子尺度 | 8 |
| D-S3 | 空间 | 分子、微生物、人体与日常 | 16 |
| D-S4 | 空间 | 人造物、地质、行星 | 16 |
| D-S5 | 空间 | 太阳系、恒星与星际 | 15 |
| D-S6 | 空间 | 星系与宇宙大尺度 | 10 |
| D-T1 | 时间 | 太初宇宙（一） | 14 |
| D-T2 | 时间 | 太初宇宙（二）与复合 | 14 |
| D-T3 | 时间 | 第一缕光、星系与暗能量 | 12 |
| D-T4 | 时间 | 地球形成与生命起源 | 12 |
| D-T5 | 时间 | 复杂生命、灭绝事件 | 16 |
| D-T6 | 时间 | 人类、文明与现代 | 15 |
| D-T7 | 时间 | 晚近事件补全 | 3 |
| D-E1 | 温度 | 极低温与低温（一） | 12 |
| D-E2 | 温度 | 低温（二） | 9 |
| D-E3 | 温度 | 常温与中温 | 17 |
| D-E4 | 温度 | 高温与工业 | 13 |
| D-E5 | 温度 | 恒星表面与内部 | 17 |
| D-E6 | 温度 | 极端天体、宇宙背景与高能 | 17 |
| 合计 | | | **249** |

### 4.1 统一写作模板

1. **它是什么**：对象/事件/条件的定义，给出熟悉参照。
2. **怎样知道**：观测、实验、测量或模型；区分实测与推断。
3. **数值与口径**：单位、参照对象、范围、边界；近似值说明误差来源。
4. **容易误会什么**：至少纠正一个与本条真正相关的误解。
5. **与其他尺度的关系**：3–6 条有解释价值的关联，收束到更大/更小的尺度。

深化时保持 `quantity`、`visual`、`visual.scene` 不变；除非发现量值错误，另立科学修订并记录。`related` 可以增加，但必须真实存在。

## 5. 执行顺序与批次验收

### 5.1 阶段

| 阶段 | 内容 | 版本节点 |
|---|---|---|
| P0 | 审计基线、验收脚本、计划定稿 | 0.4.0（现状） |
| P1 | 249 条深度补齐（19 批） | 0.5.0 |
| P2 | 361 条广度新增（20 批） | 0.6.0 |
| P3 | 分类/标签/概念组/chronology 结构升级 | 0.7.0-rc1 |
| P4 | 学习层基础设施与八类内容 | 0.7.0 |
| P5 | 图景配置覆盖与新模板 | 0.7.0-rc2 |
| P6 | 全站终检、数据页、本地交付 | 1.0.0 |

### 5.2 每批完成后的自审

1. `node scripts/audit-content.mjs`：本批条目全部达到单条门槛。
2. `node scripts/check-content.mjs`：ID 唯一、related 存在、来源与引用编号一致、来源 URL 为 https。
3. `npm run build`：快照重建成功，文章数与链接数符合预期。
4. `npm run check`：确定性快照、断链、单位边界、源码语法全部通过。
5. 抽查 2–3 条新文章，确认正文不是模板拼接、来源确实支撑断言。
6. 记录本批数字；不通过就修到通过再进下一批。

### 5.3 版本节点验收

- **0.5.0**：281 个概念条目 100% 通过深度门槛；4 个别名不计。
- **0.6.0**：646 个条目文件；三维度数量级覆盖达标；无重复 ID；全部新条目至少 needs-review 且有来源。
- **0.7.0**：分类 ≤10/维度；tags 覆盖 ≥90%；conceptGroup 覆盖跨维度对象；学习层八类内容可访问。
- **1.0.0**：构建与校验通过；无断链；所有 reviewed 条目来源可读；最终统计写入交付文档。

## 6. 学习层规格

学习层使用独立内容模型，存放在 `content/learning/`，由门户站生成页面；不与三维度条目混在同一数量轴。

| 类型 | 数量 | 字段 | 生成页面 |
|---|---:|---|---|
| 词典 | 60–80 | term、定义、单位/量、常见混淆、相关条目 | `/dictionary/` |
| 方法页 | 12 | 方法、能回答什么、误差来源、代表条目 | `/methods/` |
| 对象页 | 20 | 对象、三维度入口、跨尺度关系、来源 | `/objects/` |
| 合集 | 20 | 主题、条目序列、导读 | `/collections/` |
| 阶梯 | 8 | 尺度序列、每级代表条目、跨越说明 | `/ladders/` |
| 误解页 | 30 | 误解、纠正、证据、相关条目 | `/misconceptions/` |
| 路线 | 15 | 5–8 步、每步导读 | `/journeys/`（扩展现有 3 条） |
| 问答 | 120 | 问题、答案、依据、相关条目 | `/qa/` |

学习层条目也必须有来源或明确引用到已有条目的来源；不接受无依据的批量生成。

## 7. 图景与结构配套

- 为 28 条无图景条目补配置；为新增 361 条全部配置 `visual`。
- **新增 15 类图景模板（已闭环）**：space `device`/`vehicle`/`tissue-section`/`crystal-lattice`/`hydrology`/`orbital-system`；time `geologic-section`/`chronometer`/`lineage-tree`/`future-arc`/`impact-record`；energy `phase-diagram`/`thermometer`/`heat-map`/`combustion`。唯一模板 60 → 75，共分派 65 条。
- **原清单项的处理判断**：原计划列出的“粒子反应、波长谱、恒星演化、星系分类”已分别由既有 `particle-reaction`、`wave`、`stellar-cycle`、`galaxy`/`cluster` 覆盖，若再新增只会产生同构几何；“时间阶梯”由既有时间模板与学习层 `.scale-position` 承担，“学习层尺度条”本身不是 3D 图景。替代方案是保留既有模板、用 `variant` 做差异化，而不是为凑数新增空壳模板。
- 补齐 space 166 条缺失 `color`/`referenceAxis` 的图景配置；修正 `mariana-trench` 轴不一致与 `proton` 特写 / `nucleus` 语义冲突。
- 所有图景注明“示意、非按比例、非观测重建”；减少动态偏好可用。
- 文章页增加尺度定位条：在所属维度轴上标出本条位置与相邻 3 条。
- 知识库增加标签、温区、年代、口径筛选；数据页提供可排序总表。

## 8. 风险与对策

| 风险 | 对策 |
|---|---|
| 361 条新增导致来源质量滑坡 | 每批必须实际打开来源；打不开则不写该条 |
| 数量级空档被强行填满 | 只允许有物理对象的区间；空档在学习层解释 |
| 时间未来条目被写成事实 | `chronology.mode=future` + “模型推断”措辞 + 不计入已观测 |
| 温度非热平衡条目被误读 | 在 uncertainty 中写明“非热平衡/激发态/有效温度” |
| 别名被重复计数 | 4 个别名单独标记，不计入 642 概念，不强制深化；其余下划线 ID 是独立概念，必须达标 |
| 分类迁移破坏链接 | 分类只改展示字段，不改 ID；迁移脚本先备份并跑 check |
| 快照不一致 | 每批 build 后 check；快照变更视为正常内容变更 |
| 批量生成同质化 | 每批抽查 2–3 条；禁止整段模板复用；要求具体数字、条件和误解 |
| 上下文/工作量过大 | 按批次推进，每批独立验收；失败批次重做而不是跳过 |

## 9. 完成定义

当且仅当以下全部成立，v2 视为完成：

1. 646 个条目文件、≥642 个唯一概念、4 个别名入口保留。
2. 281 个概念条目全部通过单条深度门槛。
3. 三维度数量级覆盖表全部达标，或空档有书面理由。
4. 分类、标签、概念组、三种时间读法、三种空间口径、温度双标签落地。
5. 学习层八类内容达到数量目标并可访问、可搜索、可交叉链接。
6. `npm run build`、`npm run check`、`node scripts/check-content.mjs` 全部通过。
7. 最终报告给出真实条目数、达标率、覆盖率、构建结果与遗留问题。


### 4.2 分批条目清单

- **D-S1（13 条）**：space.planck、space.proton、space.carbon-nucleus、space.iron-nucleus、space.uranium-nucleus、space.helium-atom、space.electron-compton、space.positronium、space.higgs-boson、space.pion、space.top-quark、space.w-z-boson、space.water-molecule
- **D-S2（21 条）**：space.red-blood-cell、space.human、space.hand、space.coin、space.pencil、space.ping-pong-ball、space.hair、space.rice-grain、space.sand-grain、space.dust-mite、space.mosquito、space.ant、space.ant_length、space.blue-whale、space.football-field、space.burj-khalifa、space.golden-gate-bridge、space.great-pyramid、space.hubble_aperture、space.everest、space.island
- **D-S3（20 条）**：space.au、space.mercury-orbit、space.solar-system、space.kuiper-belt、space.oort-cloud、space.heliopause、space.earth-moon-distance、space.ganymede、space.jupiter、space.saturn、space.olympus-mons、space.light-second、space.betelgeuse、space.neutron-star、space.crab-nebula、space.orion-nebula、space.pillars-of-creation、space.proxima-centauri、space.omega-centauri、space.light-year
- **D-S4（8 条）**：space.andromeda-distance、space.galactic-center、space.milky-way、space.triangulum-galaxy、space.laniakea、space.local-group、space.sloan-great-wall、space.virgo-supercluster
- **D-T1（14 条）**：time.planck-era、time.grand-unification-epoch、time.inflation、time.reheating、time.big-bang、time.baryogenesis、time.baryon-asymmetry-establishment、time.electroweak-epoch、time.electroweak-symmetry-breaking、time.quark-era、time.hadron-era、time.quark-hadron-phase-transition、time.strange-quark-matter、time.lepton-epoch
- **D-T2（14 条）**：time.neutrino-decoupling、time.neutrino-background-formation、time.muon-antimuon-annihilation、time.electron-positron-annihilation、time.proton-antiproton-annihilation、time.graviton-decoupling、time.baryon-acoustic-oscillations、time.dark-matter-freeze-out、time.matter-radiation-equality、time.photon-epoch、time.recombination、time.nucleosynthesis、time.deuterium-bottleneck、time.lithium-7-synthesis
- **D-T3（20 条）**：time.cosmic-dawn、time.dark-ages、time.first-molecules、time.first-dark-matter-halos、time.first-stars、time.first-black-holes、time.first-quasars、time.first-galaxy-clusters、time.galaxy-formation、time.milky-way-formation、time.peak-star-formation、time.heavy-element-enrichment、time.reionization-epoch、time.dark-energy-domination、time.earth-formation、time.giant-impact、time.formation-of-oceans、time.late-heavy-bombardment、time.solar-system、time.last_magnetic_reversal
- **D-T4（14 条）**：time.first-life、time.luca、time.oxygenic-photosynthesis、time.great-oxidation-event、time.eukaryotes-emergence、time.multicellular-life、time.ediacaran-biota、time.cambrian、time.ordovician-radiation、time.first-fish、time.land-plants、time.first_seed_plants、time.first-tetrapods、time.carboniferous-period
- **D-T5（14 条）**：time.first-flowering-plants、time.first_birds、time.dinosaurs、time.jurassic-period、time.k-pg-extinction、time.permian-triassic-extinction、time.late-devonian-extinction、time.snowball-earth、time.ozone_layer_formation、time.last-glacial-maximum、time.mammal-radiation、time.first-mammals、time.first_primates、time.petm
- **D-T6（15 条）**：time.first-humans、time.hominins-emerge、time.rise-homo-sapiens、time.agricultural-revolution、time.bronze-age、time.invention-of-writing、time.scientific-revolution、time.industrial-revolution、time.internet-birth、time.digital-age、time.human_genome、time.crispr、time.james_webb、time.gravitational_waves、time.present
- **D-E1（20 条）**：temperature.antarctic_min_temp、temperature.boomerang-nebula、temperature.bose-einstein、temperature.dilution-refrigerator、temperature.helium-3-superfluid、temperature.nuclear-demagnetization-cooling、temperature.rhodium-iron-thermometer、temperature.squid-working-temperature、temperature.superfluid、temperature.ammonia_boiling、temperature.dry-ice-sublimation、temperature.liquid-hydrogen、temperature.liquid-oxygen、temperature.mars-surface、temperature.methane-boiling、temperature.neon-boiling-point、temperature.neon-triple-point、temperature.niobium-superconducting-transition、temperature.pluto-surface、temperature.ybco-superconducting-transition
- **D-E2（17 条）**：temperature.co2-critical-point、temperature.ethanol_boiling、temperature.sodium-melting、temperature.water-triple-point、temperature.aluminum-melting、temperature.bread_baking、temperature.cooking_oil_smoke、temperature.copper-melting-point、temperature.gold-melting-point、temperature.lead-melting-point、temperature.magnesium-melting、temperature.mercury-boiling、temperature.nickel-melting、temperature.paper-autoignition、temperature.silver-melting、temperature.thermosphere、temperature.venus-surface
- **D-E3（13 条）**：temperature.bunsen-burner-flame、temperature.carbon-sublimation、temperature.earths-core、temperature.glass_melting、temperature.iron-melting、temperature.lava-temperature、temperature.lightning、temperature.oxyacetylene-flame、temperature.rocket_plume、temperature.silicon-melting、temperature.steelmaking_temp、temperature.tungsten-filament、temperature.tungsten-melting
- **D-E4（17 条）**：temperature.a-type-star、temperature.betelgeuse-surface、temperature.coldest-brown-dwarf、temperature.f-type-star、temperature.o-type-star-surface、temperature.red-dwarf-surface、temperature.rigel-surface、temperature.sirius-surface、temperature.solar-chromosphere、temperature.solar-corona、temperature.solar-transition-region、temperature.sunspot、temperature.vega-surface、temperature.carbon-fusion、temperature.oxygen-fusion、temperature.red-giant-core、temperature.silicon-burning
- **D-E5（14 条）**：temperature.black-hole-accretion-disk、temperature.millisecond_pulsar、temperature.neutron-star-surface、temperature.supernova、temperature.type-ia-supernova、temperature.white-dwarf-surface、temperature.cmb、temperature.neutrino-background-temp、temperature.electroweak、temperature.fusion-reactor-plasma、temperature.quark-gluon、temperature.kilonova_temp、temperature.nova-outburst、temperature.planck-temperature

## 附录 A：广度清单（361 条）

以下清单承接 v1 并已复核：361 个 ID 与现有 285 个 ID 无一冲突、无重复；数量分布为空间 159、时间 108、温度 94。

### 4. 空间扩容清单（+159）

### S1 微观与粒子（16）

| ID | 标题 | 分类 | 目标口径（值待核定） |
|---|---|---|---|
| space.neutron | 中子 | 量子与粒子 | 核子参考半径 |
| space.deuteron | 氘核 | 量子与粒子 | 核半径 |
| space.alpha-particle | α粒子 | 量子与粒子 | 核半径 |
| space.muon | μ子 | 量子与粒子 | 约化康普顿波长 |
| space.tau | τ子 | 量子与粒子 | 约化康普顿波长 |
| space.atomic-nucleus | 原子核（通用） | 量子与粒子 | 核直径参考 |
| space.electron-classical-radius | 电子经典半径 | 量子与粒子 | 经典半径（注明非实体半径） |
| space.benzene | 苯分子 | 原子与分子 | 分子环直径 |
| space.glucose | 葡萄糖分子 | 原子与分子 | 分子长度 |
| space.amino-acid | 氨基酸 | 原子与分子 | 分子长度 |
| space.nucleotide | 核苷酸 | 原子与分子 | 分子长度 |
| space.hydrogen-molecule | 氢分子 | 原子与分子 | 分子直径 |
| space.carbon-nanotube | 碳纳米管 | 原子与分子 | 管径 |
| space.graphene | 石墨烯 | 原子与分子 | 单层厚度 |
| space.quantum-dot | 量子点 | 原子与分子 | 颗粒直径 |
| space.crystal-lattice | 晶格间距 | 原子与分子 | 原子间距 |

### S2 微生物与细胞（18）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| space.ecoli | 大肠杆菌 | 生命与人体 | 杆长 |
| space.yeast | 酵母菌 | 生命与人体 | 细胞直径 |
| space.amoeba | 变形虫 | 生命与人体 | 细胞直径 |
| space.paramecium | 草履虫 | 生命与人体 | 体长 |
| space.phage | 噬菌体 | 生命与人体 | 颗粒直径 |
| space.sars-cov-2 | 新冠病毒 | 生命与人体 | 颗粒直径 |
| space.hiv | HIV 病毒 | 生命与人体 | 颗粒直径 |
| space.spore | 细菌孢子 | 生命与人体 | 直径 |
| space.white-blood-cell | 白细胞 | 生命与人体 | 直径 |
| space.platelet | 血小板 | 生命与人体 | 直径 |
| space.sperm | 精子 | 生命与人体 | 全长 |
| space.ovum | 卵细胞 | 生命与人体 | 直径 |
| space.neuron | 神经元 | 生命与人体 | 胞体直径 |
| space.chromosome | 染色体 | 生命与人体 | 长度 |
| space.muscle-fiber | 肌纤维 | 生命与人体 | 直径 |
| space.capillary | 毛细血管 | 生命与人体 | 管径 |
| space.alveolus | 肺泡 | 生命与人体 | 直径 |
| space.taste-bud | 味蕾 | 生命与人体 | 直径 |

### S3 生物与日常尺度（20）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| space.egg | 鸡蛋 | 生命与人体 | 长轴 |
| space.seed | 种子（菜豆参照） | 生命与人体 | 长度 |
| space.leaf | 树叶 | 生命与人体 | 长度 |
| space.flower | 花（向日葵头状花序） | 生命与人体 | 直径 |
| space.redwood | 红杉 | 生命与人体 | 树高 |
| space.bamboo | 竹子 | 生命与人体 | 高度 |
| space.spider | 蜘蛛 | 生命与人体 | 体长 |
| space.honeybee | 蜜蜂 | 生命与人体 | 体长 |
| space.fruit-fly | 果蝇 | 生命与人体 | 体长 |
| space.butterfly | 蝴蝶 | 生命与人体 | 翼展 |
| space.frog | 青蛙 | 生命与人体 | 体长 |
| space.mouse | 小鼠 | 生命与人体 | 体长 |
| space.cat | 猫 | 生命与人体 | 体长 |
| space.dog | 狗 | 生命与人体 | 体长 |
| space.elephant | 大象 | 生命与人体 | 肩高 |
| space.giraffe | 长颈鹿 | 生命与人体 | 肩高 |
| space.basketball | 篮球 | 日常与人造 | 直径 |
| space.soccer-ball | 足球 | 日常与人造 | 直径 |
| space.tennis-ball | 网球 | 日常与人造 | 直径 |
| space.book | 书 | 日常与人造 | 开本高度 |

### S4 日常与人造物（20）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| space.a4-paper | A4 纸 | 日常与人造 | 长边 |
| space.credit-card | 银行卡 | 日常与人造 | 长边 |
| space.smartphone | 智能手机 | 日常与人造 | 机身长度 |
| space.laptop | 笔记本电脑 | 日常与人造 | 屏幕对角线 |
| space.coffee-cup | 咖啡杯 | 日常与人造 | 杯口直径 |
| space.shoe | 鞋 | 日常与人造 | 鞋长 |
| space.finger | 手指 | 日常与人造 | 长度 |
| space.eyelash | 睫毛 | 日常与人造 | 长度 |
| space.sheet-of-paper | 纸张厚度 | 日常与人造 | 厚度 |
| space.eiffel-tower | 埃菲尔铁塔 | 日常与人造 | 高度 |
| space.statue-of-liberty | 自由女神像 | 日常与人造 | 高度 |
| space.shanghai-tower | 上海中心大厦 | 日常与人造 | 高度 |
| space.taipei-101 | 台北 101 | 日常与人造 | 高度 |
| space.lhc | 大型强子对撞机 | 日常与人造 | 环周长 |
| space.aircraft-carrier | 航空母舰 | 日常与人造 | 舰长 |
| space.boeing-747 | 波音 747 | 日常与人造 | 翼展 |
| space.cruise-ship | 大型邮轮 | 日常与人造 | 船长 |
| space.iss | 国际空间站 | 日常与人造 | 桁架长度 |
| space.geostationary-orbit | 地球同步轨道 | 日常与人造 | 轨道高度 |
| space.jwst-mirror | 韦布主镜 | 日常与人造 | 主镜口径 |

### S5 地球与地理（22）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| space.mariana-trench | 马里亚纳海沟 | 地球与地质 | 最大深度 |
| space.grand-canyon | 科罗拉多大峡谷 | 地球与地质 | 长度 |
| space.sahara | 撒哈拉沙漠 | 地球与地质 | 东西跨度 |
| space.antarctica | 南极洲 | 地球与地质 | 东西跨度 |
| space.amazon-river | 亚马逊河 | 地球与地质 | 长度 |
| space.nile | 尼罗河 | 地球与地质 | 长度 |
| space.himalaya | 喜马拉雅山脉 | 地球与地质 | 东西长度 |
| space.atmosphere | 地球大气层 | 地球与地质 | 到卡门线的有效厚度 |
| space.earth-core | 地球内核 | 地球与地质 | 半径 |
| space.crust | 地壳 | 地球与地质 | 平均厚度 |
| space.tectonic-plate | 构造板块 | 地球与地质 | 典型宽度 |
| space.glacier | 冰川 | 地球与地质 | 长度 |
| space.cloud | 云 | 地球与地质 | 云团水平尺度 |
| space.hurricane | 飓风 | 地球与地质 | 直径 |
| space.raindrop | 雨滴 | 地球与地质 | 直径 |
| space.snowflake | 雪花 | 地球与地质 | 直径 |
| space.hailstone | 冰雹 | 地球与地质 | 直径 |
| space.volcano | 火山 | 地球与地质 | 锥体高度 |
| space.tsunami-wavelength | 海啸波长 | 地球与地质 | 波长 |
| space.great-barrier-reef | 大堡礁 | 地球与地质 | 长度 |
| space.mid-ocean-ridge | 大洋中脊 | 地球与地质 | 宽度 |
| space.lake-baikal | 贝加尔湖 | 地球与地质 | 长度 |

### S6 太阳系与行星（20）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| space.mercury | 水星 | 行星与太阳系 | 直径 |
| space.venus | 金星 | 行星与太阳系 | 直径 |
| space.mars | 火星 | 行星与太阳系 | 直径 |
| space.uranus | 天王星 | 行星与太阳系 | 直径 |
| space.neptune | 海王星 | 行星与太阳系 | 直径 |
| space.pluto | 冥王星 | 行星与太阳系 | 直径 |
| space.ceres | 谷神星 | 行星与太阳系 | 直径 |
| space.europa | 木卫二 | 行星与太阳系 | 直径 |
| space.titan | 土卫六 | 行星与太阳系 | 直径 |
| space.io | 木卫一 | 行星与太阳系 | 直径 |
| space.enceladus | 土卫二 | 行星与太阳系 | 直径 |
| space.bennu | 贝努小行星 | 行星与太阳系 | 平均直径 |
| space.halley | 哈雷彗星彗核 | 行星与太阳系 | 彗核长度 |
| space.asteroid-belt | 小行星带 | 行星与太阳系 | 径向宽度 |
| space.gps-orbit | GPS 卫星轨道 | 行星与太阳系 | 轨道高度 |
| space.voyager-1 | 旅行者 1 号距离 | 行星与太阳系 | 日心距离 |
| space.phobos | 火卫一 | 行星与太阳系 | 平均直径 |
| space.jupiter-red-spot | 木星大红斑 | 行星与太阳系 | 东西长度 |
| space.saturn-ring | 土星环 | 行星与太阳系 | 外径 |
| space.vesta | 灶神星 | 行星与太阳系 | 平均直径 |

### S7 恒星与致密天体（16）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| space.black-hole-event-horizon | 恒星级黑洞事件视界 | 恒星与致密天体 | 史瓦西半径 |
| space.sagittarius-a-star | 人马座 A* | 恒星与致密天体 | 事件视界直径 |
| space.m87-black-hole | M87* | 恒星与致密天体 | 事件视界直径 |
| space.white-dwarf | 白矮星 | 恒星与致密天体 | 直径 |
| space.red-giant | 红巨星 | 恒星与致密天体 | 直径 |
| space.red-dwarf | 红矮星 | 恒星与致密天体 | 直径 |
| space.brown-dwarf | 褐矮星 | 恒星与致密天体 | 直径 |
| space.quasar | 类星体 | 恒星与致密天体 | 宿主星系/吸积结构参考尺度 |
| space.planetary-nebula | 行星状星云 | 恒星与致密天体 | 直径 |
| space.supernova-remnant | 超新星遗迹 | 恒星与致密天体 | 直径 |
| space.solar-flare-size | 太阳耀斑 | 恒星与致密天体 | 活动区尺度 |
| space.open-cluster | 疏散星团 | 恒星与致密天体 | 直径 |
| space.protoplanetary-disk | 原行星盘 | 恒星与致密天体 | 半径 |
| space.exoplanet | 系外行星 | 恒星与致密天体 | 直径 |
| space.stellar-wind-bubble | 星风泡 | 恒星与致密天体 | 直径 |
| space.sunspot-group | 太阳黑子群 | 恒星与致密天体 | 群尺度 |

### S8 星系与宇宙（17）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| space.andromeda-galaxy | 仙女座星系直径 | 星际与宇宙 | 直径 |
| space.large-magellanic-cloud | 大麦哲伦云 | 星际与宇宙 | 直径 |
| space.small-magellanic-cloud | 小麦哲伦云 | 星际与宇宙 | 直径 |
| space.whirlpool-galaxy | 涡状星系 | 星际与宇宙 | 直径 |
| space.sombrero-galaxy | 草帽星系 | 星际与宇宙 | 直径 |
| space.milky-way-halo | 银河系晕 | 星际与宇宙 | 直径 |
| space.galaxy-cluster | 星系团（通用） | 星际与宇宙 | 直径 |
| space.coma-cluster | 后发座星系团 | 星际与宇宙 | 直径 |
| space.virgo-cluster | 室女座星系团 | 星际与宇宙 | 直径 |
| space.boots-void | 牧夫座空洞 | 星际与宇宙 | 直径 |
| space.great-attractor | 巨引源 | 星际与宇宙 | 参考距离 |
| space.cosmic-web | 宇宙网 | 星际与宇宙 | 典型纤维长度 |
| space.hubble-radius | 哈勃半径 | 星际与宇宙 | 共动距离 |
| space.cmb-surface | 最后散射面 | 星际与宇宙 | 共动距离 |
| space.local-void | 本空洞 | 星际与宇宙 | 直径 |
| space.shapley-supercluster | 沙普利超星系团 | 星际与宇宙 | 直径 |
| space.dark-matter-halo | 暗物质晕 | 星际与宇宙 | 典型直径 |

### S9 波长与电磁谱（10）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| space.radio-wave | 射电波 | 量子与粒子 | 波长 |
| space.microwave | 微波 | 量子与粒子 | 波长 |
| space.infrared | 红外线 | 量子与粒子 | 波长 |
| space.visible-light | 可见光 | 量子与粒子 | 波长范围 |
| space.red-light | 红光 | 量子与粒子 | 波长 |
| space.blue-light | 蓝光 | 量子与粒子 | 波长 |
| space.ultraviolet | 紫外线 | 量子与粒子 | 波长 |
| space.x-ray | X 射线 | 量子与粒子 | 波长 |
| space.gamma-ray | 伽马射线 | 量子与粒子 | 波长 |
| space.hydrogen-21cm | 氢 21 厘米线 | 量子与粒子 | 波长 |

### 5. 时间扩容清单（+108）

### T1 时长尺度（一）（20）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| time.second | 一秒 | 时长尺度 | 1 s |
| time.minute | 一分钟 | 时长尺度 | 60 s |
| time.hour | 一小时 | 时长尺度 | 3,600 s |
| time.day | 一天 | 时长尺度 | 86,400 s |
| time.week | 一周 | 时长尺度 | 7 天 |
| time.month | 一个月 | 时长尺度 | 平均月长 |
| time.year | 一年 | 时长尺度 | 回归年 |
| time.decade | 十年 | 时长尺度 | 10 年 |
| time.century | 一个世纪 | 时长尺度 | 100 年 |
| time.millennium | 一千年 | 时长尺度 | 1,000 年 |
| time.human-lifespan | 人类寿命 | 时长尺度 | 全球平均预期寿命 |
| time.pregnancy | 人类妊娠期 | 时长尺度 | 平均孕期 |
| time.heartbeat | 心跳周期 | 时长尺度 | 静息心率对应周期 |
| time.blink | 眨眼 | 时长尺度 | 单次眨眼时长 |
| time.breath | 呼吸周期 | 时长尺度 | 静息呼吸周期 |
| time.circadian-rhythm | 昼夜节律 | 时长尺度 | 约 24 小时 |
| time.cell-division | 细胞分裂周期 | 时长尺度 | 典型哺乳动物细胞 |
| time.protein-folding | 蛋白质折叠 | 时长尺度 | 典型折叠时间 |
| time.atomic-transition | 原子跃迁 | 时长尺度 | 典型自发辐射寿命 |
| time.nuclear-timescale | 强相互作用时间 | 时长尺度 | 核过程特征时间 |

### T2 时长尺度（二）（20）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| time.c14-half-life | 碳-14 半衰期 | 时长尺度 | 半衰期 |
| time.u238-half-life | 铀-238 半衰期 | 时长尺度 | 半衰期 |
| time.galactic-year | 银河年 | 时长尺度 | 太阳绕银心周期 |
| time.precession-cycle | 岁差周期 | 时长尺度 | 地轴进动周期 |
| time.milankovitch-cycle | 米兰科维奇周期 | 时长尺度 | 轨道气候周期 |
| time.solar-cycle | 太阳活动周期 | 时长尺度 | 约 11 年 |
| time.pulsar-period | 脉冲星周期 | 时长尺度 | 典型自转周期 |
| time.species-lifetime | 物种寿命 | 时长尺度 | 典型物种存续时间 |
| time.civilization-duration | 文明持续时间 | 时长尺度 | 定义相关的参考区间 |
| time.generation | 代际间隔 | 时长尺度 | 平均世代长度 |
| time.industrial-era-duration | 工业时代时长 | 时长尺度 | 约 250 年 |
| time.internet-era-duration | 互联网时代时长 | 时长尺度 | 约 30 年 |
| time.mountain-building | 造山过程 | 时长尺度 | 典型造山期 |
| time.erosion-cycle | 侵蚀周期 | 时长尺度 | 典型地貌演化时间 |
| time.supernova-duration | 超新星过程 | 时长尺度 | 爆发到余晖的参考时长 |
| time.black-hole-evaporation | 黑洞蒸发时间 | 时长尺度 | 理论寿命（按质量） |
| time.proton-decay-limit | 质子衰变下限 | 时长尺度 | 实验下限 |
| time.heat-death-time | 热死亡时间 | 时长尺度 | 理论量级 |
| time.solar-red-giant-time | 太阳红巨星时间 | 时长尺度 | 未来约 50 亿年 |
| time.continental-drift-cycle | 大陆漂移周期 | 时长尺度 | 超大陆旋回 |

### T3 地球史与生命起源（17）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| time.hadean | 冥古宙 | 太阳系与地球 | 时点/年代边界 |
| time.archean | 太古宙 | 太阳系与地球 | 时点/年代边界 |
| time.proterozoic | 元古宙 | 生命起源与早期地球 | 时点/年代边界 |
| time.phanerozoic | 显生宙 | 复杂生命与演化 | 时点/年代边界 |
| time.paleozoic | 古生代 | 复杂生命与演化 | 时点/年代边界 |
| time.mesozoic | 中生代 | 复杂生命与演化 | 时点/年代边界 |
| time.cenozoic | 新生代 | 复杂生命与演化 | 时点/年代边界 |
| time.first-continents | 最早大陆 | 太阳系与地球 | 最早大陆地壳证据 |
| time.plate-tectonics-onset | 板块构造启动 | 太阳系与地球 | 最早板块构造证据 |
| time.origin-of-sexual-reproduction | 有性生殖起源 | 生命起源与早期地球 | 最早有性生殖证据 |
| time.endosymbiosis | 内共生 | 生命起源与早期地球 | 线粒体/叶绿体内共生 |
| time.origin-of-animals | 动物起源 | 复杂生命与演化 | 最早动物谱系证据 |
| time.first-corals | 最早珊瑚 | 复杂生命与演化 | 最早珊瑚化石 |
| time.first-insects | 最早昆虫 | 复杂生命与演化 | 最早昆虫化石 |
| time.first-reptiles | 最早爬行动物 | 复杂生命与演化 | 最早爬行动物化石 |
| time.first-dinosaurs | 最早恐龙 | 复杂生命与演化 | 最早恐龙化石 |
| time.first-grasslands | 最早草原 | 复杂生命与演化 | 最早草原生态系统 |

### T4 地质年代（14）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| time.triassic-period | 三叠纪 | 复杂生命与演化 | 纪的起点 |
| time.permian-period | 二叠纪 | 复杂生命与演化 | 纪的起点 |
| time.devonian-period | 泥盆纪 | 复杂生命与演化 | 纪的起点 |
| time.silurian-period | 志留纪 | 复杂生命与演化 | 纪的起点 |
| time.cretaceous-period | 白垩纪 | 复杂生命与演化 | 纪的起点 |
| time.paleogene-period | 古近纪 | 复杂生命与演化 | 纪的起点 |
| time.neogene-period | 新近纪 | 复杂生命与演化 | 纪的起点 |
| time.paleocene-epoch | 古新世 | 复杂生命与演化 | 世的起点 |
| time.eocene-epoch | 始新世 | 复杂生命与演化 | 世的起点 |
| time.oligocene-epoch | 渐新世 | 复杂生命与演化 | 世的起点 |
| time.miocene-epoch | 中新世 | 复杂生命与演化 | 世的起点 |
| time.pliocene-epoch | 上新世 | 复杂生命与演化 | 世的起点 |
| time.pleistocene-epoch | 更新世 | 人类与文明 | 世的起点 |
| time.holocene-epoch | 全新世 | 人类与文明 | 世的起点 |

`time.anthropocene-proposal` 单列在 T5，说明它是提案而非正式批准的年代单位。

### T5 人类与文明（23）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| time.iron-age | 铁器时代 | 人类与文明 | 地区性起点 |
| time.classical-antiquity | 古典时代 | 人类与文明 | 地区性参考起点 |
| time.middle-ages | 中世纪 | 人类与文明 | 地区性参考起点 |
| time.renaissance | 文艺复兴 | 人类与文明 | 参考起点 |
| time.age-of-discovery | 大航海时代 | 人类与文明 | 参考起点 |
| time.printing-press | 活字印刷 | 人类与文明 | 欧洲活字印刷 |
| time.enlightenment | 启蒙运动 | 人类与文明 | 参考起点 |
| time.steam-engine | 蒸汽机 | 人类与文明 | 实用蒸汽机 |
| time.electricity-grid | 电网 | 人类与文明 | 早期公共供电 |
| time.first-flight | 首次动力飞行 | 人类与文明 | 1903 年 |
| time.space-age | 太空时代 | 人类与文明 | 第一颗人造卫星 |
| time.apollo-11 | 阿波罗 11 号登月 | 人类与文明 | 1969 年 |
| time.origin-of-language | 语言起源 | 人类与文明 | 证据区间，量值未定 |
| time.origin-of-cities | 城市起源 | 人类与文明 | 最早城市证据 |
| time.origin-of-money | 货币起源 | 人类与文明 | 最早货币证据 |
| time.origin-of-computing | 计算机起源 | 人类与文明 | 可编程计算机 |
| time.green-revolution | 绿色革命 | 人类与文明 | 参考起点 |
| time.antibiotics | 抗生素 | 人类与文明 | 青霉素临床应用 |
| time.vaccination | 疫苗 | 人类与文明 | 早期疫苗 |
| time.covid-pandemic | COVID-19 大流行 | 人类与文明 | 2020 年 |
| time.smartphone-era | 智能手机时代 | 人类与文明 | 2007 年 |
| time.ai-era | 人工智能时代 | 人类与文明 | 参考起点，说明分期争议 |
| time.anthropocene-proposal | 人类世提案 | 人类与文明 | 提案边界，未正式批准 |

### T6 未来宇宙（8）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| time.earth-uninhabitable | 地球不再宜居 | 现在与未来 | 未来时点（模型区间） |
| time.sun-red-giant-phase | 太阳红巨星阶段 | 现在与未来 | 未来时点 |
| time.andromeda-collision | 银河-仙女座碰撞 | 现在与未来 | 未来时点 |
| time.future-supercontinent | 未来超大陆 | 现在与未来 | 未来时点 |
| time.last-stars | 最后一代恒星 | 现在与未来 | 未来时点 |
| time.black-hole-era | 黑洞时代 | 现在与未来 | 未来时点 |
| time.proton-decay-era | 质子衰变时代 | 现在与未来 | 理论时点 |
| time.heat-death | 热死亡 | 现在与未来 | 理论时点 |

未来条目必须标明“模型推断/理论情景”，并说明依赖的宇宙学参数；不得写成已观测事实。

### T7 早期宇宙补全（6）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| time.thermal-equilibrium | 热平衡建立 | 太初宇宙 | 早期热平衡时点 |
| time.first-molecular-clouds | 最早分子云 | 复合与黑暗时代 | 最早分子云时点 |
| time.primordial-black-holes | 原初黑洞（假说） | 太初宇宙 | 假说时点/质量区间 |
| time.cosmic-strings | 宇宙弦（假说） | 太初宇宙 | 理论尺度，量值未定 |
| time.magnetic-monopoles | 磁单极子问题 | 太初宇宙 | 理论时点，量值未定 |
| time.first-gravitational-structures | 最早引力结构 | 复合与黑暗时代 | 最早结构形成时点 |

### 6. 温度扩容清单（+94）

### E1 生命与日常（26）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| temperature.fever | 发热体温 | 常温 | 腋下/口温参考 |
| temperature.hypothermia | 低体温阈值 | 常温 | 核心温度阈值 |
| temperature.sauna | 桑拿房空气 | 中温 | 空气温度 |
| temperature.hot-spring | 温泉 | 中温 | 泉水温度 |
| temperature.hydrothermal-vent | 深海热液 | 中温 | 喷口流体温度 |
| temperature.death-valley | 死亡谷气温 | 中温 | 气象站气温 |
| temperature.desert-ground | 沙漠地表 | 中温 | 地表温度 |
| temperature.sea-surface | 海面平均温度 | 常温 | 全球海表平均 |
| temperature.deep-ocean | 深海温度 | 低温 | 深层海水 |
| temperature.permafrost | 多年冻土 | 低温 | 冻土温度 |
| temperature.fridge | 冰箱冷藏室 | 低温 | 设定温度 |
| temperature.freezer | 冷冻室 | 低温 | 设定温度 |
| temperature.oven | 烤箱设定 | 中温 | 空气设定温度 |
| temperature.pizza-oven | 披萨炉 | 中温 | 炉膛空气 |
| temperature.coffee-brewing | 咖啡冲泡 | 中温 | 水温 |
| temperature.caramelization | 糖焦化 | 中温 | 反应温度区间 |
| temperature.chocolate-melting | 巧克力熔化 | 常温 | 熔点区间 |
| temperature.gallium-melting | 镓熔点 | 常温 | 熔点 |
| temperature.mercury-melting | 汞熔点 | 低温 | 熔点 |
| temperature.butter-melting | 黄油熔化 | 常温 | 熔点区间 |
| temperature.food-safe | 食物安全中心温度 | 中温 | 安全阈值 |
| temperature.plant-frost | 植物冻害 | 低温 | 受害阈值 |
| temperature.lake-freezing | 湖水结冰 | 低温 | 表层冰点 |
| temperature.sea-ice | 海冰表面 | 低温 | 表面温度 |
| temperature.egg-cooking | 蛋白凝固 | 中温 | 凝固区间 |
| temperature.dishwashing | 洗碗热水 | 中温 | 水温 |

### E2 材料与工业（26）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| temperature.zinc-melting | 锌熔点 | 中温 | 熔点 |
| temperature.titanium-melting | 钛熔点 | 高温 | 熔点 |
| temperature.platinum-melting | 铂熔点 | 高温 | 熔点 |
| temperature.tin-melting | 锡熔点 | 中温 | 熔点 |
| temperature.chromium-melting | 铬熔点 | 高温 | 熔点 |
| temperature.cobalt-melting | 钴熔点 | 高温 | 熔点 |
| temperature.bronze-melting | 青铜熔化 | 中温 | 合金范围 |
| temperature.brass-melting | 黄铜熔化 | 中温 | 合金范围 |
| temperature.quartz-melting | 石英熔化 | 高温 | 熔点 |
| temperature.basalt-melting | 玄武岩熔化 | 高温 | 岩石熔化范围 |
| temperature.glass-transition | 玻璃转变 | 中温 | 转变温度范围 |
| temperature.rubber-vulcanization | 橡胶硫化 | 中温 | 工艺温度 |
| temperature.solder-melting | 焊锡熔化 | 中温 | 合金熔点 |
| temperature.salt-melting | 食盐熔化 | 高温 | 熔点 |
| temperature.sugar-melting | 蔗糖熔化 | 中温 | 熔点/分解 |
| temperature.cement-kiln | 水泥窑 | 高温 | 窑内温度 |
| temperature.blast-furnace | 高炉 | 高温 | 炉内温度 |
| temperature.jet-turbine | 涡轮叶片 | 高温 | 燃气温度 |
| temperature.soldering-iron | 电烙铁 | 中温 | 尖端温度 |
| temperature.3d-printer-nozzle | 3D 打印喷嘴 | 中温 | 喷嘴温度 |
| temperature.weld-arc | 焊接电弧 | 极高温 | 电弧温度 |
| temperature.plasma-cutter | 等离子切割 | 极高温 | 等离子温度 |
| temperature.incinerator | 垃圾焚烧炉 | 高温 | 炉膛温度 |
| temperature.cremation | 火化炉 | 高温 | 炉膛温度 |
| temperature.forest-fire | 森林大火 | 高温 | 火焰温度 |
| temperature.arc-lamp | 弧光灯 | 极高温 | 电弧温度 |

### E3 行星与大气（20）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| temperature.moon-day | 月球昼侧 | 中温 | 昼侧表面 |
| temperature.moon-night | 月球夜侧 | 低温 | 夜侧表面 |
| temperature.mercury-day | 水星昼侧 | 高温 | 昼侧表面 |
| temperature.mars-night | 火星夜侧 | 低温 | 夜侧表面 |
| temperature.jupiter-cloud | 木星云顶 | 低温 | 云顶温度 |
| temperature.saturn-cloud | 土星云顶 | 低温 | 云顶温度 |
| temperature.uranus-cloud | 天王星云顶 | 低温 | 云顶温度 |
| temperature.neptune-cloud | 海王星云顶 | 低温 | 云顶温度 |
| temperature.europa-surface | 木卫二表面 | 低温 | 表面温度 |
| temperature.titan-surface | 土卫六表面 | 低温 | 表面温度 |
| temperature.comet-surface | 彗星表面 | 低温 | 表面温度 |
| temperature.asteroid-surface | 小行星表面 | 低温 | 表面温度 |
| temperature.troposphere | 对流层 | 低温 | 典型温度 |
| temperature.stratosphere | 平流层 | 低温 | 典型温度 |
| temperature.mesosphere | 中间层 | 低温 | 典型温度 |
| temperature.aurora | 极光 | 极高温 | 激发态气体温度，注明非热平衡 |
| temperature.ice-sheet | 冰盖表面 | 低温 | 表面温度 |
| temperature.glacier-ice | 冰川冰温 | 低温 | 冰体温度 |
| temperature.ocean-thermocline | 温跃层 | 低温 | 温度梯度参考 |
| temperature.lake-surface | 湖面温度 | 常温 | 季节性参考 |

### E4 恒星与星际（14）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| temperature.interstellar-medium | 星际介质 | 极低温 | 典型温度范围 |
| temperature.molecular-cloud | 分子云 | 极低温 | 典型温度 |
| temperature.hii-region | 电离氢区 | 极高温 | 电子温度 |
| temperature.planetary-nebula | 行星状星云 | 极高温 | 气体温度 |
| temperature.supernova-remnant | 超新星遗迹 | 极高温 | 激波气体温度 |
| temperature.k-type-star | K 型星表面 | 恒星与宇宙极端 | 有效温度 |
| temperature.b-type-star | B 型星表面 | 恒星与宇宙极端 | 有效温度 |
| temperature.brown-dwarf | 褐矮星 | 恒星与宇宙极端 | 有效温度范围 |
| temperature.solar-flare | 太阳耀斑 | 极高温 | 耀斑等离子体 |
| temperature.magnetar-surface | 磁星表面 | 恒星与宇宙极端 | 表面温度 |
| temperature.gamma-ray-burst | 伽马射线暴 | 恒星与宇宙极端 | 火球/激波温度 |
| temperature.solar-wind | 太阳风 | 极高温 | 粒子温度，注明非热平衡 |
| temperature.21cm-spin-temperature | 氢 21 厘米自旋温度 | 极低温 | 自旋温度 |
| temperature.quark-star | 夸克星（理论） | 恒星与宇宙极端 | 理论温度，量值未定 |

### E5 低温与量子（8）

| ID | 标题 | 分类 | 目标口径 |
|---|---|---|---|
| temperature.laser-cooling | 激光冷却 | 极低温 | 实验达到温度 |
| temperature.evaporative-cooling | 蒸发冷却 | 极低温 | 实验达到温度 |
| temperature.adiabatic-demagnetization | 绝热去磁 | 极低温 | 实验达到温度 |
| temperature.hawking-temperature | 霍金温度 | 极低温 | 按黑洞质量计算 |
| temperature.quantum-degeneracy | 量子简并温度 | 极低温 | 参考温区 |
| temperature.superconducting-gap | 超导能隙温度 | 极低温 | 参考温区 |
| temperature.space-background | 空间背景温度 | 极低温 | 宇宙微波背景 |
| temperature.vacuum-temperature | 真空温度 | 极低温 | 概念条目，量值未定 |




## 附录 B：早期 234 条深度清单（已废止，仅存档）

本附录是审计修正前的 234 条清单，指标按旧门槛计算，**不再作为执行依据**。当前 249 条完整队列见 `dist/depth-queue.json`，批次与每批 ID 见 `dist/batches.json`，批次表见 §4。

| 批次 | ID | 标题 | 汉字 | 来源 | 引用 | related | 小节 | 条件 |
|---|---|---|---:|---:|---:|---:|---:|---|
| D-S1 | space.planck | 普朗克长度 | 117 | 1 | 0 | 2 | 3 | 有 |
| D-S1 | space.proton | 质子与中子 | 133 | 1 | 0 | 1 | 3 | 有 |
| D-S1 | space.carbon-nucleus | 碳-12原子核 | 176 | 1 | 0 | 2 | 3 | 有 |
| D-S1 | space.iron-nucleus | 铁-56原子核 | 183 | 1 | 0 | 2 | 3 | 有 |
| D-S1 | space.uranium-nucleus | 铀-238原子核 | 186 | 1 | 0 | 3 | 3 | 有 |
| D-S1 | space.helium-atom | 氦原子 | 196 | 1 | 0 | 2 | 3 | 有 |
| D-S1 | space.electron-compton | 电子康普顿波长 | 158 | 1 | 0 | 2 | 3 | 有 |
| D-S1 | space.positronium | 电子偶素 | 191 | 2 | 0 | 3 | 3 | 有 |
| D-S1 | space.higgs-boson | 希格斯玻色子康普顿波长 | 175 | 2 | 0 | 1 | 3 | 有 |
| D-S1 | space.pion | π介子（派介子） | 166 | 2 | 0 | 2 | 3 | 有 |
| D-S1 | space.top-quark | 顶夸克约化康普顿波长 | 164 | 2 | 0 | 3 | 3 | 有 |
| D-S1 | space.w-z-boson | W/Z玻色子（W约化康普顿波长参照） | 183 | 3 | 0 | 3 | 3 | 有 |
| D-S1 | space.water-molecule | 水分子 | 174 | 1 | 0 | 3 | 3 | 有 |
| D-S2 | space.red-blood-cell | 红细胞 | 164 | 1 | 0 | 3 | 3 | 有 |
| D-S2 | space.human | 人类 | 578 | 1 | 3 | 4 | 5 | 有 |
| D-S2 | space.hand | 手（全手长度参照） | 191 | 1 | 0 | 2 | 3 | 有 |
| D-S2 | space.coin | 硬币 | 169 | 1 | 0 | 1 | 3 | 有 |
| D-S2 | space.pencil | 铅笔 | 191 | 1 | 0 | 2 | 3 | 有 |
| D-S2 | space.ping-pong-ball | 乒乓球 | 185 | 1 | 0 | 2 | 3 | 有 |
| D-S2 | space.hair | 头发丝 | 173 | 1 | 0 | 2 | 3 | 有 |
| D-S2 | space.rice-grain | 大米粒 | 205 | 1 | 0 | 3 | 3 | 有 |
| D-S2 | space.sand-grain | 沙粒 | 182 | 1 | 0 | 1 | 3 | 有 |
| D-S2 | space.dust-mite | 尘螨 | 185 | 1 | 0 | 2 | 3 | 有 |
| D-S2 | space.mosquito | 蚊子 | 182 | 1 | 0 | 2 | 3 | 有 |
| D-S2 | space.ant | 蚂蚁 | 175 | 1 | 0 | 2 | 3 | 有 |
| D-S2 | space.ant_length | 蚂蚁体长 | 180 | 1 | 0 | 2 | 3 | 有 |
| D-S2 | space.blue-whale | 蓝鲸 | 190 | 1 | 0 | 1 | 3 | 有 |
| D-S2 | space.football-field | 足球场 | 197 | 1 | 0 | 1 | 3 | 有 |
| D-S2 | space.burj-khalifa | 哈利法塔 | 188 | 1 | 0 | 2 | 3 | 有 |
| D-S2 | space.golden-gate-bridge | 金门大桥 | 174 | 1 | 0 | 2 | 3 | 有 |
| D-S2 | space.great-pyramid | 胡夫金字塔 | 182 | 1 | 0 | 1 | 3 | 有 |
| D-S2 | space.hubble_aperture | 哈勃望远镜口径 | 174 | 1 | 0 | 2 | 3 | 有 |
| D-S2 | space.everest | 珠穆朗玛峰 | 208 | 2 | 0 | 1 | 3 | 有 |
| D-S2 | space.island | 大型岛屿（台湾本岛参照） | 182 | 1 | 0 | 2 | 3 | 有 |
| D-S3 | space.au | 天文单位 | 173 | 1 | 0 | 2 | 3 | 有 |
| D-S3 | space.mercury-orbit | 水星轨道 | 174 | 1 | 0 | 2 | 3 | 有 |
| D-S3 | space.solar-system | 太阳系 | 169 | 2 | 0 | 3 | 3 | 有 |
| D-S3 | space.kuiper-belt | 柯伊伯带 | 185 | 1 | 0 | 2 | 3 | 有 |
| D-S3 | space.oort-cloud | 奥尔特云 | 197 | 1 | 0 | 2 | 3 | 有 |
| D-S3 | space.heliopause | 日球层顶 | 188 | 1 | 0 | 2 | 3 | 有 |
| D-S3 | space.earth-moon-distance | 地球到月球距离 | 193 | 1 | 0 | 2 | 3 | 有 |
| D-S3 | space.ganymede | 木卫三 | 174 | 1 | 0 | 2 | 3 | 有 |
| D-S3 | space.jupiter | 木星 | 149 | 1 | 0 | 2 | 3 | 有 |
| D-S3 | space.saturn | 土星 | 137 | 1 | 0 | 2 | 3 | 有 |
| D-S3 | space.olympus-mons | 奥林匹斯山 | 183 | 1 | 0 | 2 | 3 | 有 |
| D-S3 | space.light-second | 光行进一秒 | 182 | 1 | 0 | 2 | 3 | 有 |
| D-S3 | space.betelgeuse | 参宿四直径 | 180 | 1 | 0 | 1 | 3 | 有 |
| D-S3 | space.neutron-star | 中子星 | 188 | 1 | 0 | 2 | 3 | 有 |
| D-S3 | space.crab-nebula | 蟹状星云 | 180 | 1 | 0 | 1 | 3 | 有 |
| D-S3 | space.orion-nebula | 猎户座大星云 | 188 | 1 | 0 | 2 | 3 | 有 |
| D-S3 | space.pillars-of-creation | 创生之柱 | 190 | 1 | 0 | 2 | 3 | 有 |
| D-S3 | space.proxima-centauri | 比邻星距离 | 173 | 2 | 0 | 3 | 3 | 有 |
| D-S3 | space.omega-centauri | 半人马座ω星团 | 180 | 1 | 0 | 1 | 3 | 有 |
| D-S3 | space.light-year | 光年 | 177 | 1 | 0 | 2 | 3 | 有 |
| D-S4 | space.andromeda-distance | 仙女座星系距离 | 166 | 1 | 0 | 1 | 3 | 有 |
| D-S4 | space.galactic-center | 银河系中心 | 186 | 1 | 0 | 2 | 3 | 有 |
| D-S4 | space.milky-way | 银河系 | 159 | 1 | 0 | 2 | 3 | 有 |
| D-S4 | space.triangulum-galaxy | 三角座星系 | 172 | 2 | 0 | 3 | 3 | 有 |
| D-S4 | space.laniakea | 拉尼亚凯亚超星系团 | 202 | 1 | 0 | 2 | 3 | 有 |
| D-S4 | space.local-group | 本星系群 | 187 | 1 | 0 | 3 | 3 | 有 |
| D-S4 | space.sloan-great-wall | 斯隆长城 | 162 | 2 | 0 | 3 | 3 | 有 |
| D-S4 | space.virgo-supercluster | 室女座超星系团 | 203 | 2 | 0 | 3 | 3 | 有 |
| D-T1 | time.planck-era | 普朗克时间尺度与早期理论边界 | 186 | 2 | 0 | 4 | 3 | 无 |
| D-T1 | time.grand-unification-epoch | 大统一假说的高能时代 | 164 | 1 | 0 | 2 | 3 | 无 |
| D-T1 | time.inflation | 宇宙暴胀的理论图景 | 176 | 1 | 0 | 3 | 3 | 无 |
| D-T1 | time.reheating | 暴胀之后的再加热模型 | 597 | 2 | 7 | 4 | 5 | 无 |
| D-T1 | time.big-bang | 宇宙大爆炸 | 576 | 5 | 9 | 3 | 5 | 无 |
| D-T1 | time.baryogenesis | 重子生成：物质为何留存 | 576 | 4 | 7 | 3 | 5 | 无 |
| D-T1 | time.baryon-asymmetry-establishment | 重子不对称性的起源问题 | 574 | 5 | 8 | 3 | 5 | 无 |
| D-T1 | time.electroweak-epoch | 电弱时代的理论图景 | 595 | 5 | 9 | 3 | 5 | 无 |
| D-T1 | time.electroweak-symmetry-breaking | 电弱对称性破缺 | 609 | 4 | 6 | 4 | 5 | 无 |
| D-T1 | time.quark-era | 早期宇宙的夸克—胶子等离子体 | 196 | 1 | 0 | 4 | 3 | 无 |
| D-T1 | time.hadron-era | 夸克结合为强子的时代 | 149 | 1 | 0 | 2 | 3 | 无 |
| D-T1 | time.quark-hadron-phase-transition | 夸克物质向强子物质的转变 | 180 | 2 | 0 | 3 | 3 | 无 |
| D-T1 | time.strange-quark-matter | 奇异夸克物质的宇宙学假说 | 609 | 2 | 6 | 3 | 5 | 无 |
| D-T1 | time.lepton-epoch | 最初秒级的轻子热史 | 174 | 2 | 0 | 3 | 3 | 无 |
| D-T2 | time.neutrino-decoupling | 中微子逐渐脱耦 | 188 | 2 | 0 | 2 | 3 | 无 |
| D-T2 | time.neutrino-background-formation | 宇宙中微子背景的早期形成 | 184 | 2 | 0 | 2 | 3 | 无 |
| D-T2 | time.muon-antimuon-annihilation | 早期宇宙中μ子丰度的下降 | 181 | 2 | 0 | 2 | 3 | 无 |
| D-T2 | time.electron-positron-annihilation | 早期宇宙中的电子—正电子湮灭 | 592 | 3 | 6 | 3 | 5 | 无 |
| D-T2 | time.proton-antiproton-annihilation | 早期质子与反质子的丰度演化 | 192 | 2 | 0 | 3 | 3 | 无 |
| D-T2 | time.graviton-decoupling | 引力子退耦的理论设想 | 582 | 4 | 8 | 3 | 5 | 无 |
| D-T2 | time.baryon-acoustic-oscillations | 重子声学振荡 | 167 | 1 | 0 | 1 | 3 | 无 |
| D-T2 | time.dark-matter-freeze-out | 暗物质热冻结假说 | 576 | 2 | 7 | 3 | 5 | 无 |
| D-T2 | time.matter-radiation-equality | 物质与辐射密度相等 | 172 | 1 | 0 | 2 | 3 | 无 |
| D-T2 | time.photon-epoch | 早期光子与辐射主导阶段 | 188 | 2 | 0 | 3 | 3 | 无 |
| D-T2 | time.recombination | 复合时期与宇宙微波背景 | 589 | 2 | 7 | 3 | 5 | 无 |
| D-T2 | time.nucleosynthesis | 最初数分钟的原初核合成 | 193 | 1 | 0 | 3 | 3 | 无 |
| D-T2 | time.deuterium-bottleneck | 原初核合成中的氘瓶颈 | 155 | 1 | 0 | 1 | 3 | 无 |
| D-T2 | time.lithium-7-synthesis | 原初核合成中的锂-7问题 | 195 | 1 | 0 | 2 | 3 | 无 |
| D-T3 | time.cosmic-dawn | 宇宙黎明 | 561 | 4 | 6 | 3 | 5 | 无 |
| D-T3 | time.dark-ages | 宇宙黑暗时代 | 571 | 4 | 8 | 3 | 5 | 无 |
| D-T3 | time.first-molecules | 早期分子：氦合氢离子 | 157 | 1 | 0 | 2 | 3 | 无 |
| D-T3 | time.first-dark-matter-halos | 早期暗物质晕的模型图景 | 179 | 1 | 0 | 2 | 3 | 无 |
| D-T3 | time.first-stars | 第一代恒星的时代 | 146 | 1 | 0 | 2 | 3 | 无 |
| D-T3 | time.first-black-holes | 早期黑洞的观测线索 | 160 | 1 | 0 | 2 | 3 | 无 |
| D-T3 | time.first-quasars | 早期类星体的观测记录 | 150 | 1 | 0 | 2 | 3 | 无 |
| D-T3 | time.first-galaxy-clusters | 早期原星系团的观测 | 151 | 1 | 0 | 2 | 3 | 无 |
| D-T3 | time.galaxy-formation | 早期星系的时代 | 162 | 2 | 0 | 2 | 3 | 无 |
| D-T3 | time.milky-way-formation | 银河系厚盘的早期形成 | 181 | 1 | 0 | 3 | 3 | 无 |
| D-T3 | time.peak-star-formation | 恒星形成的宇宙正午 | 180 | 1 | 0 | 3 | 3 | 无 |
| D-T3 | time.heavy-element-enrichment | 早期宇宙的重元素富集 | 179 | 1 | 0 | 3 | 3 | 无 |
| D-T3 | time.reionization-epoch | 宇宙再电离的漫长阶段 | 192 | 2 | 0 | 3 | 3 | 无 |
| D-T3 | time.dark-energy-domination | 暗能量与加速膨胀 | 153 | 1 | 0 | 1 | 3 | 无 |
| D-T3 | time.earth-formation | 地球形成 | 572 | 2 | 5 | 4 | 5 | 无 |
| D-T3 | time.giant-impact | 月球形成的大碰撞假说 | 152 | 1 | 0 | 2 | 3 | 无 |
| D-T3 | time.formation-of-oceans | 早期海洋的地质线索 | 156 | 1 | 0 | 3 | 3 | 无 |
| D-T3 | time.late-heavy-bombardment | 晚期重轰炸假说 | 184 | 2 | 0 | 3 | 3 | 无 |
| D-T3 | time.solar-system | 太阳系形成 | 604 | 2 | 8 | 4 | 5 | 无 |
| D-T3 | time.last_magnetic_reversal | 最近一次完整地磁极性倒转 | 180 | 1 | 0 | 2 | 3 | 无 |
| D-T4 | time.first-life | 早期生命的地质记录 | 172 | 1 | 0 | 2 | 3 | 无 |
| D-T4 | time.luca | LUCA：现生细胞生命的共同祖先 | 201 | 1 | 0 | 3 | 3 | 无 |
| D-T4 | time.oxygenic-photosynthesis | 产氧光合作用的古老细胞证据 | 200 | 1 | 0 | 3 | 3 | 无 |
| D-T4 | time.great-oxidation-event | 大氧化事件 | 166 | 1 | 0 | 3 | 3 | 无 |
| D-T4 | time.eukaryotes-emergence | 早期真核生命的分子线索 | 164 | 1 | 0 | 1 | 3 | 无 |
| D-T4 | time.multicellular-life | 早期多细胞真核生物的化石 | 194 | 1 | 0 | 3 | 3 | 无 |
| D-T4 | time.ediacaran-biota | 埃迪卡拉生物群的早期记录 | 169 | 1 | 0 | 1 | 3 | 无 |
| D-T4 | time.cambrian | 寒武纪生命大演化 | 589 | 2 | 6 | 4 | 5 | 无 |
| D-T4 | time.ordovician-radiation | 奥陶纪海洋生物的大辐射 | 202 | 2 | 0 | 3 | 3 | 无 |
| D-T4 | time.first-fish | 寒武纪的早期鱼形脊椎动物 | 143 | 1 | 0 | 2 | 3 | 无 |
| D-T4 | time.land-plants | 陆生植物的早期孢子记录 | 183 | 1 | 0 | 3 | 3 | 无 |
| D-T4 | time.first_seed_plants | 晚泥盆世的早期种子植物 | 175 | 2 | 0 | 2 | 3 | 无 |
| D-T4 | time.first-tetrapods | 四足动物早期演化的线索 | 160 | 1 | 0 | 2 | 3 | 无 |
| D-T4 | time.carboniferous-period | 石炭纪 | 148 | 1 | 0 | 1 | 3 | 无 |
| D-T5 | time.first-flowering-plants | 早白垩世的开花植物记录 | 150 | 1 | 0 | 2 | 3 | 无 |
| D-T5 | time.first_birds | 始祖鸟与早期鸟类演化 | 155 | 1 | 0 | 2 | 3 | 无 |
| D-T5 | time.dinosaurs | 早期恐龙的时代 | 148 | 1 | 0 | 1 | 3 | 无 |
| D-T5 | time.jurassic-period | 侏罗纪 | 170 | 1 | 0 | 3 | 3 | 无 |
| D-T5 | time.k-pg-extinction | 白垩纪—古近纪灭绝 | 177 | 1 | 0 | 3 | 3 | 无 |
| D-T5 | time.permian-triassic-extinction | 二叠纪末的大灭绝 | 201 | 1 | 0 | 3 | 3 | 无 |
| D-T5 | time.late-devonian-extinction | 晚泥盆纪的多次灭绝 | 180 | 1 | 0 | 3 | 3 | 无 |
| D-T5 | time.snowball-earth | 雪球地球与斯图尔特冰期 | 196 | 1 | 0 | 3 | 3 | 无 |
| D-T5 | time.ozone_layer_formation | 臭氧层的形成条件与演化 | 580 | 2 | 6 | 3 | 5 | 无 |
| D-T5 | time.last-glacial-maximum | 末次盛冰期 | 173 | 1 | 0 | 3 | 3 | 无 |
| D-T5 | time.mammal-radiation | 大灭绝之后的哺乳动物复苏 | 186 | 1 | 0 | 3 | 3 | 无 |
| D-T5 | time.first-mammals | 早期哺乳型动物的牙齿证据 | 156 | 1 | 0 | 2 | 3 | 无 |
| D-T5 | time.first_primates | 早期灵长类的化石证据 | 161 | 1 | 0 | 2 | 3 | 无 |
| D-T5 | time.petm | 古新世—始新世极热事件 | 158 | 2 | 0 | 2 | 3 | 无 |
| D-T6 | time.first-humans | 早期人属的化石证据 | 157 | 1 | 0 | 2 | 3 | 无 |
| D-T6 | time.hominins-emerge | 早期人类谱系的化石线索 | 154 | 1 | 0 | 2 | 3 | 无 |
| D-T6 | time.rise-homo-sapiens | 早期智人的化石线索 | 182 | 1 | 0 | 3 | 3 | 无 |
| D-T6 | time.agricultural-revolution | 农业起源的长期转变 | 187 | 1 | 0 | 1 | 3 | 无 |
| D-T6 | time.bronze-age | 青铜时代：地区性的历史分期 | 149 | 1 | 0 | 1 | 3 | 无 |
| D-T6 | time.invention-of-writing | 两河流域的早期文字 | 179 | 1 | 0 | 2 | 3 | 无 |
| D-T6 | time.scientific-revolution | 近代科学的文献与共同体路标 | 189 | 1 | 0 | 2 | 3 | 无 |
| D-T6 | time.industrial-revolution | 英国工业化的早期转变 | 176 | 1 | 0 | 2 | 3 | 无 |
| D-T6 | time.internet-birth | ARPANET的早期连接 | 164 | 1 | 0 | 2 | 3 | 无 |
| D-T6 | time.digital-age | 数字时代的一座路标：万维网 | 162 | 1 | 0 | 1 | 3 | 无 |
| D-T6 | time.human_genome | 人类基因组计划完成 | 201 | 1 | 0 | 2 | 3 | 无 |
| D-T6 | time.crispr | 可编程CRISPR-Cas9工具的建立 | 157 | 1 | 0 | 1 | 3 | 无 |
| D-T6 | time.james_webb | 韦布空间望远镜发射 | 174 | 1 | 0 | 2 | 3 | 无 |
| D-T6 | time.gravitational_waves | 引力波首次直接探测 | 159 | 1 | 0 | 2 | 3 | 无 |
| D-T6 | time.present | 此时此刻 | 591 | 4 | 8 | 4 | 5 | 无 |
| D-E1 | temperature.antarctic_min_temp | 南极冬季最低温 | 133 | 1 | 1 | 1 | 3 | 有 |
| D-E1 | temperature.boomerang-nebula | 回力棒星云 | 166 | 2 | 3 | 1 | 3 | 有 |
| D-E1 | temperature.bose-einstein | 玻色-爱因斯坦凝聚 | 164 | 3 | 3 | 2 | 3 | 有 |
| D-E1 | temperature.dilution-refrigerator | 稀释制冷 | 153 | 1 | 1 | 1 | 3 | 有 |
| D-E1 | temperature.helium-3-superfluid | 氦-3 超流 A 点（PLTS-2000） | 170 | 2 | 2 | 1 | 3 | 有 |
| D-E1 | temperature.nuclear-demagnetization-cooling | 核退磁制冷（纳米电子实验） | 150 | 1 | 1 | 1 | 3 | 有 |
| D-E1 | temperature.rhodium-iron-thermometer | 铑铁温度计（参考函数温区） | 155 | 1 | 1 | 1 | 3 | 有 |
| D-E1 | temperature.squid-working-temperature | SQUID超导量子干涉仪 | 152 | 1 | 1 | 1 | 3 | 有 |
| D-E1 | temperature.superfluid | 液氦超流相变 | 125 | 1 | 1 | 1 | 3 | 有 |
| D-E1 | temperature.ammonia_boiling | 氨的沸点 | 142 | 1 | 1 | 1 | 3 | 有 |
| D-E1 | temperature.dry-ice-sublimation | 干冰升华点 | 131 | 1 | 1 | 1 | 3 | 有 |
| D-E1 | temperature.liquid-hydrogen | 液氢温度 | 142 | 1 | 1 | 1 | 3 | 有 |
| D-E1 | temperature.liquid-oxygen | 液氧温度 | 130 | 1 | 1 | 1 | 3 | 有 |
| D-E1 | temperature.mars-surface | 火星表面平均温度 | 156 | 1 | 1 | 1 | 3 | 有 |
| D-E1 | temperature.methane-boiling | 甲烷沸点 | 137 | 1 | 1 | 2 | 3 | 有 |
| D-E1 | temperature.neon-boiling-point | 氖的沸点 | 141 | 1 | 1 | 2 | 3 | 有 |
| D-E1 | temperature.neon-triple-point | 氖三相点 | 148 | 1 | 1 | 1 | 3 | 有 |
| D-E1 | temperature.niobium-superconducting-transition | 铌超导转变 | 151 | 1 | 1 | 1 | 3 | 有 |
| D-E1 | temperature.pluto-surface | 冥王星表面温度 | 153 | 1 | 1 | 1 | 3 | 有 |
| D-E1 | temperature.ybco-superconducting-transition | 钇钡铜氧超导转变 | 152 | 1 | 1 | 2 | 3 | 有 |
| D-E2 | temperature.co2-critical-point | CO₂临界点 | 145 | 1 | 1 | 1 | 3 | 有 |
| D-E2 | temperature.ethanol_boiling | 乙醇沸点 | 133 | 1 | 1 | 1 | 3 | 有 |
| D-E2 | temperature.sodium-melting | 钠的熔点 | 114 | 1 | 1 | 1 | 3 | 有 |
| D-E2 | temperature.water-triple-point | 水三相点 | 141 | 2 | 3 | 1 | 3 | 有 |
| D-E2 | temperature.aluminum-melting | 铝熔点 | 125 | 1 | 1 | 1 | 2 | 有 |
| D-E2 | temperature.bread_baking | 面包烘烤（烤箱设定） | 147 | 1 | 1 | 1 | 3 | 有 |
| D-E2 | temperature.cooking_oil_smoke | 新鲜棕榈液油烟点（研究样品） | 190 | 2 | 3 | 1 | 3 | 有 |
| D-E2 | temperature.copper-melting-point | 铜的熔点 | 145 | 1 | 1 | 1 | 3 | 有 |
| D-E2 | temperature.gold-melting-point | 金的熔点 | 139 | 1 | 1 | 1 | 3 | 有 |
| D-E2 | temperature.lead-melting-point | 铅熔点 | 136 | 1 | 1 | 1 | 3 | 有 |
| D-E2 | temperature.magnesium-melting | 镁的熔点 | 129 | 1 | 1 | 1 | 3 | 有 |
| D-E2 | temperature.mercury-boiling | 汞的沸点 | 129 | 1 | 1 | 1 | 3 | 有 |
| D-E2 | temperature.nickel-melting | 镍熔点 | 126 | 1 | 1 | 1 | 3 | 有 |
| D-E2 | temperature.paper-autoignition | 纸张着火（需指定试验） | 585 | 1 | 5 | 3 | 5 | 有 |
| D-E2 | temperature.silver-melting | 银熔点 | 132 | 1 | 1 | 2 | 3 | 有 |
| D-E2 | temperature.thermosphere | 地球热层气体温度 | 164 | 1 | 1 | 1 | 3 | 有 |
| D-E2 | temperature.venus-surface | 金星表面温度 | 122 | 1 | 1 | 2 | 3 | 有 |
| D-E3 | temperature.bunsen-burner-flame | 本生灯火焰 | 144 | 1 | 1 | 1 | 3 | 有 |
| D-E3 | temperature.carbon-sublimation | 石墨升华（常压研究参考） | 189 | 1 | 2 | 1 | 3 | 有 |
| D-E3 | temperature.earths-core | 内核边界压力下的纯铁熔化 | 180 | 1 | 2 | 1 | 3 | 有 |
| D-E3 | temperature.glass_melting | Corning 7740 玻璃工作点 | 171 | 1 | 2 | 1 | 3 | 有 |
| D-E3 | temperature.iron-melting | 铁熔点 | 129 | 1 | 1 | 2 | 3 | 有 |
| D-E3 | temperature.lava-temperature | 熔岩温度 | 121 | 1 | 1 | 1 | 3 | 有 |
| D-E3 | temperature.lightning | 闪电 | 147 | 1 | 1 | 1 | 3 | 有 |
| D-E3 | temperature.oxyacetylene-flame | 氧乙炔火焰 | 128 | 1 | 1 | 1 | 3 | 有 |
| D-E3 | temperature.rocket_plume | RS-25燃烧室热气（参考） | 153 | 1 | 1 | 2 | 3 | 有 |
| D-E3 | temperature.silicon-melting | 硅的熔点 | 140 | 1 | 1 | 1 | 3 | 有 |
| D-E3 | temperature.steelmaking_temp | 电弧炉出钢目标（DDS 现场研究） | 189 | 1 | 3 | 1 | 3 | 有 |
| D-E3 | temperature.tungsten-filament | 钨带灯丝（校准实验） | 152 | 1 | 1 | 1 | 3 | 有 |
| D-E3 | temperature.tungsten-melting | 钨熔点 | 138 | 1 | 1 | 1 | 3 | 有 |
| D-E4 | temperature.a-type-star | A型星表面 | 114 | 1 | 1 | 1 | 2 | 有 |
| D-E4 | temperature.betelgeuse-surface | 参宿四表面 | 149 | 1 | 1 | 1 | 3 | 有 |
| D-E4 | temperature.coldest-brown-dwarf | 超冷褐矮星 WISE 0855 | 144 | 1 | 1 | 1 | 3 | 有 |
| D-E4 | temperature.f-type-star | F型星表面 | 127 | 1 | 1 | 2 | 3 | 有 |
| D-E4 | temperature.o-type-star-surface | O型星表面 | 129 | 1 | 1 | 2 | 3 | 有 |
| D-E4 | temperature.red-dwarf-surface | 红矮星表面 | 153 | 1 | 1 | 2 | 3 | 有 |
| D-E4 | temperature.rigel-surface | 参宿七表面 | 148 | 1 | 1 | 2 | 3 | 有 |
| D-E4 | temperature.sirius-surface | 天狼星A有效温度 | 133 | 1 | 1 | 2 | 3 | 有 |
| D-E4 | temperature.solar-chromosphere | 太阳色球层 | 144 | 1 | 1 | 2 | 3 | 有 |
| D-E4 | temperature.solar-corona | 日冕 | 147 | 1 | 1 | 2 | 3 | 有 |
| D-E4 | temperature.solar-transition-region | 太阳过渡区 | 138 | 1 | 1 | 2 | 3 | 有 |
| D-E4 | temperature.sunspot | 太阳黑子 | 145 | 1 | 1 | 1 | 3 | 有 |
| D-E4 | temperature.vega-surface | 织女星表面（自转模型） | 150 | 1 | 1 | 2 | 3 | 有 |
| D-E4 | temperature.carbon-fusion | 恒星碳燃烧的起始温标 | 189 | 1 | 3 | 1 | 3 | 有 |
| D-E4 | temperature.oxygen-fusion | 氧核聚变 | 152 | 1 | 1 | 1 | 3 | 有 |
| D-E4 | temperature.red-giant-core | 红巨星核心氦燃烧（量级参考） | 166 | 1 | 1 | 2 | 3 | 有 |
| D-E4 | temperature.silicon-burning | 硅燃烧阶段 | 142 | 1 | 1 | 1 | 3 | 有 |
| D-E5 | temperature.black-hole-accretion-disk | 黑洞吸积盘热气体（模拟参考） | 189 | 2 | 4 | 1 | 3 | 有 |
| D-E5 | temperature.millisecond_pulsar | 毫秒脉冲星 J0030+0451 热区 | 143 | 1 | 1 | 1 | 3 | 有 |
| D-E5 | temperature.neutron-star-surface | 仙后座A中子星表面 | 147 | 1 | 1 | 2 | 3 | 有 |
| D-E5 | temperature.supernova | 核心坍缩超新星温标 | 147 | 1 | 1 | 2 | 3 | 有 |
| D-E5 | temperature.type-ia-supernova | Ia 型超新星（温度需指定模型） | 584 | 1 | 5 | 3 | 5 | 有 |
| D-E5 | temperature.white-dwarf-surface | 白矮星天狼星B表面 | 158 | 1 | 1 | 1 | 3 | 有 |
| D-E5 | temperature.cmb | 宇宙微波背景辐射 | 158 | 1 | 1 | 1 | 3 | 有 |
| D-E5 | temperature.neutrino-background-temp | 宇宙中微子背景温度 | 148 | 1 | 1 | 2 | 3 | 有 |
| D-E5 | temperature.electroweak | 电弱平滑过渡（格点计算） | 175 | 2 | 3 | 1 | 3 | 有 |
| D-E5 | temperature.fusion-reactor-plasma | 聚变堆等离子体 | 152 | 1 | 1 | 1 | 3 | 有 |
| D-E5 | temperature.quark-gluon | 夸克胶子等离子体与QCD过渡 | 148 | 2 | 2 | 1 | 3 | 有 |
| D-E5 | temperature.kilonova_temp | AT 2017gfo 蓝千新星（并合后 1.5 天） | 183 | 1 | 2 | 1 | 3 | 有 |
| D-E5 | temperature.nova-outburst | LMC 2009a 新星的超软 X 射线阶段 | 174 | 1 | 2 | 2 | 3 | 有 |
| D-E5 | temperature.planck-temperature | 普朗克温度 | 156 | 2 | 2 | 1 | 3 | 有 |

## 10. 执行结果（2026-11-06，v1.0.0）

本节记录实际执行结果，不沿用 §1 的基线数字。所有数字来自 `scripts/audit-content.mjs`、`scripts/check-content.mjs`、`scripts/check-learning.mjs` 与 `npm run build/check`。

### 10.1 总量与深度

| 项目 | 结果 |
|---|---:|
| 条目文件 | 646 |
| 唯一 ID | 646 |
| 唯一概念（扣除 4 个别名） | 642 |
| 重复 ID | 0 |
| 通过单条深度门槛 | 642 / 642（100%） |
| 正文汉字均值 / 中位数 | 约 554 / 约 540 |
| 汉字区间 <450 | 4（全部为兼容别名，门槛豁免） |
| 450–599 / 600–799 / 800+ | 500 / 142 / 0 |
| 5 节结构 | 631 条；其余为 4 节或 6 节 |
| 来源总数 / 唯一 URL | 1,554 / 1,145 |
| 正文 `[n]` 引用总数 | 6,682 |
| related 均值 | 空间 4.38 / 时间 4.31 / 温度 4.54 |
| reviewed / needs-review | 580 / 66 |
| 量值 undetermined | 35 |
| conditions 覆盖 | 646 / 646 |

### 10.2 广度与结构

| 项目 | 结果 |
|---|---:|
| 空间 / 时间 / 温度 | 260 / 199 / 187 |
| 空间一级分类 | 8 |
| 时间一级分类 | 10（含时长尺度、地质年代、现在与未来） |
| 温度一级分类 | 7 温区 |
| 标签覆盖 | 646 / 646（100%），47 个受控标签 |
| conceptGroup 覆盖 | 40 条，覆盖太阳、地球、月球、水、行星等跨维度对象 |
| 时间读法 | 时点 / 时长 / 未来 / 未定 |
| 空间口径 | 尺寸 / 距离 / 波长 |
| 温度字段 | zone + scene |
| 图景覆盖 | 646 / 646；使用 60 类模板与 60 个场景 |

### 10.3 学习层与页面

| 类型 | 实际 | 目标 |
|---|---:|---:|
| 词典 | 80 | 80 |
| 方法页 | 12 | 12 |
| 对象页 | 20 | 20 |
| 合集 | 20 | 20 |
| 阶梯 | 8 | 8 |
| 误解页 | 30 | 30 |
| 问答 | 120 | 120 |
| 探索路线 | 15 | 15 |

新增页面：`/learning/`、`/dictionary/`、`/methods/`、`/objects/`、`/collections/`、`/ladders/`、`/misconceptions/`、`/qa/`、`/data/`。文章页新增对数尺度定位条；知识库新增标签筛选；数据页提供可排序总表。

### 10.4 构建与校验

```
npm run build: 内容 v1.0.0，646 条；home/space/time/energy 各站构建成功
npm run check: 646 篇静态文章、21,342 个本地链接，全部通过
check-content --gate: 646 条通过，0 失败
check-learning: dictionary 80 / methods 12 / objects 20 / collections 20 / ladders 8 / misconceptions 30 / qa 120
```

### 10.5 与计划的偏差与遗留问题

1. **新增图景模板**：已于 2026-11-07 补完 15 类，见 §10.6；本条由未完成改为已闭环。
2. **needs-review**：2026-11-07 复核后 47 条转 `reviewed`，19 条保留并写明原因，见 §10.6。
3. **33 条 undetermined**（19 条仍为 needs-review）：包括强相互作用力程、宇宙弦、原初黑洞、夸克星、真空温度、语言起源等；正文均解释为何不能给出单一数值。
4. **4 条历史兼容入口已删除**：`space.local_group`、`space.red_blood_cell`、`space.typical_bacterium`、`space.typical_virus` 自 1.0.2 起不再保留，也不参与深度门槛统计。
5. **时间数量级分布口径**：已分列为“时点 / 时长 / 未来 / 未定”，见 §10.6；原混合分布不再用于覆盖结论。
6. **许可证未定**：所有条目 `rights.note` 仍写“内容许可证待项目统一确认”。
7. **来源抽查**：每批由子代理实际打开来源并写入 review.notes；终检只做结构与一致性校验，未逐条重新打开 1,145 个 URL。

### 10.6 收官补完（2026-11-07，v1.0.1）

### 10.6.1 图景模板

- 唯一模板：60 → **75**（space 24→30、time 20→25、energy 16→20）。
- 新增 15 类及分派：`device` 3、`vehicle` 3、`tissue-section` 3、`crystal-lattice` 3、`hydrology` 3、`orbital-system` 3；`geologic-section` 7、`chronometer` 10、`lineage-tree` 6、`future-arc` 5、`impact-record` 4；`phase-diagram` 4、`thermometer` 3、`heat-map` 5、`combustion` 3，共 65 条。
- 补齐 166 条 space 条目的 `color`/`referenceAxis`；未改正文、来源与标题。
- 修复 `space.mariana-trench` 轴不一致（variant `depth`→`elevation`）；`space.proton` 仍走特写模型，`check:models` 对该特写豁免 `nucleus` 语义断言。

### 10.6.2 复核状态

- `reviewed` 580 → **627**；`needs-review` 66 → **19**。
- 转 reviewed 的 47 条均为 space 且 quantity 有限，复核依据是既有逐条来源记录 + 本轮字段/引用/量值口径一致性检查（未重开 URL）。
- 保留 19 条：time 10 条早期宇宙节点（模型/假说，quantity 为 null）、energy 5 条（GUT、hypernova、中子星核心、Ia 型超新星为模型量；paper-autoignition 依赖试样条件）、space 4 条（city、great-wall、pacific-ocean、strong-force 的比较口径未定义，需产品决策）。

### 10.6.3 时间口径分列

| 口径 | 条数 | 说明 |
| --- | --- | --- |
| 时点 | 138 | 绝对时间点；bin 含 zero（big-bang）与负指数（普朗克期到秒级以下） |
| 时长 | 40 | 与绝对时间轴不可比；最长 bin 到 10⁷⁷–10¹⁰⁷ s |
| 未来 | 8 | 模型推断时点 |
| 未定 | 13 | quantity 为 null |

审计新增 `summary.timeModes`、`summary.timeDistribution`、`summary.timePointDistribution`、`summary.timeDurationDistribution`；原有混合 `distribution` 保留但不再用于覆盖结论。

### 10.6.4 构建与校验

```
build: 内容 v1.0.1 · sha256:2e02d2dbf805de5f32f0 · 646 条
check: 646 篇静态文章、21,342 个本地链接，通过
check-content --gate: 642/642 达标（100%），0 失败；4 条别名为豁免提醒
check-learning: 80 / 12 / 20 / 20 / 8 / 30 / 120，通过
check:models: 565/565 有限可绘条目通过，81 条跳过（33 条 null + 48 条时长/未来不可在时间轴定位），0 失败
```

### 10.6.5 闭环判定

- §7 的模板项已补齐并写入判断依据与替代方案，不再有“未完成”备注。
- 时间统计已分口径，覆盖结论不再混算。
- needs-review 已按“可核实→reviewed、理论/口径未定→保留并说明”处理完毕。
- 计划中所有本地可执行项均已闭环；唯一不代决项是内容许可证，属项目方产品决定，不影响本次工程闭环。
