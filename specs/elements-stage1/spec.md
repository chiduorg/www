# 元素轴 · 阶段一（骨架）实施规格

版本：2026-11-08 · 状态：待批准 · 基线：内容 v1.0.5 / 引擎 v0.3.1 / 1,070 条（空间 527、时间 300、温度 243）

本规格只覆盖用户已定的执行顺序中的**第一步：元素轴阶段一**。质量轴、五轴域名统一、`energy.*` → `temperature.*` 重命名**不在本规格范围**。

## 1. 目标与验收

阶段一结束后必须能：

1. 在 `/elements/` 页面上从 H（Z=1）连续走到 Og（Z=118），每一步可看到“相对 Z−1 多了什么、变了什么”。
2. 从 7 个闭壳节点（2、10、18、36、54、86、118）进入 7 个 hub 解释页；另有 6 个方法/成因解释页。
3. 全站构建、六条校验、发布验收全部通过，门户导航与知识库出现“元素”第五入口。
4. 不写 118 条元素正文；118 个节点由站点数据集驱动，正文留到阶段二至四。

阶段一**不做**：118 条元素正文、8 个来源页、3 个方法页、质量轴、`energy` 域名重命名、五轴二级域名切换、元素挑战题。

## 2. 架构决策（锁定）

| 决策 | 内容 | 理由 |
| --- | --- | --- |
| 内容轴 | 新增 `content/entries/elements/`，阶段一共 13 条：7 个闭壳 hub + 6 个解释页 | 复用现有 Markdown → 快照 → 门户文章页链路，不另造内容系统 |
| 118 节点 | 由 `elements/src/elements-data.mjs` 提供，构建期输出 `dist/elements.json` | 骨架期不产生 118 个正文文件；数据集可被 SPA 与后续阶段复用 |
| hub 形态 | 每个闭壳 hub 是一条 `elements.shell-<Z>` 内容条目，`quantity.value = Z`、`unit = Z` | 门户可生成可读文章页，SPA 可链接到它；不与阶段二的 `elements.<symbol>` 冲突 |
| 解释页形态 | `elements.explain-*`，`quantity.value = null`、`status = undetermined` | 解释页不对应单一 Z；现有契约允许未定量值 |
| 站点形态 | 新增 `elements/` 站，SPA 探索器（壳层阶梯 + 周期表 + Z−1 对比面板），无 WebGL | 骨架优先可跑通、可键盘操作、可无 JS 读到关键文案 |
| 文章位置 | 阶段一仍由门户生成 `/entry/elements/<slug>/`；阶段三再迁到 `elements.chidu.org/entry/...` | 当前架构一致，避免提前做域名迁移 |
| 审核状态 | 13 条全部 `draft` | 骨架期不声称完成来源核对；阶段二起逐条转 reviewed |

## 3. 内容规格（13 条）

### 3.1 七个闭壳 hub

| ID | Z | 周期 | 闭壳元素 | 起点–终点 |
| --- | --- | --- | --- | --- |
| `elements.shell-2` | 2 | 1 | He · 1s² | 1–2 |
| `elements.shell-10` | 10 | 2 | Ne · [He]2s²2p⁶ | 3–10 |
| `elements.shell-18` | 18 | 3 | Ar · [Ne]3s²3p⁶ | 11–18 |
| `elements.shell-36` | 36 | 4 | Kr · [Ar]3d¹⁰4s²4p⁶ | 19–36 |
| `elements.shell-54` | 54 | 5 | Xe · [Kr]4d¹⁰5s²5p⁶ | 37–54 |
| `elements.shell-86` | 86 | 6 | Rn · [Xe]4f¹⁴5d¹⁰6s²6p⁶ | 55–86 |
| `elements.shell-118` | 118 | 7 | Og · [Rn]5f¹⁴6d¹⁰7s²7p⁶（预测） | 87–118 |

每页 front matter 必填：`id`、`title`、`titleEn`、`dimension: element`、`category: 闭壳节点`、`summary`、`quantity {value:Z, unit:Z, measure, approximate:false}`、`displayValue: 'Z = … · 闭壳'`、`element {symbol, nameEn, period, group:18, block:'p', configuration, valence, hub:true, closedShell:Z, periodStart, periodEnd, predicted}`、`related` 3–6 个、`reviewStatus: draft`、`sources` ≥2 个 https、`tags`、`conceptGroup`、`conditions`、`visual {scene:'elements.shell-ladder', caption, note}`。

正文固定 5 个 `##` 小节，450–800 汉字，引用编号 ≥4 且与 `sources` 一一对应：

1. `## 这一层在哪里结束`：壳层容量、实际填充、为什么是惰性气体。
2. `## 下一层为什么从这里开始`：下一个碱金属、有效核电荷与新壳层。
3. `## 相对 Z−1：多了一个质子改变了什么`：与 Z−1 对比电离能、半径、电负性、价电子、N/Z；Z=1 侧写“氢没有 Z−1”，Z=118 侧写“预测值”。
4. `## 这些元素从哪里来`：大爆炸/恒星/s/r/衰变/人工，并明确挂到真实时间节点。
5. `## 怎么用这个节点继续走`：链接到 Z±1、相邻 hub、解释页与时间条目。

必须挂接的时间 ID（存在即可，不新增）：`time.big-bang`、`time.nucleosynthesis`、`time.first-stars`、`time.pop-iii-supernovae`、`time.heavy-element-enrichment`、`time.solar-system`、`time.u238-half-life`。阶段一**不新增** `time.agb-phase`、`time.neutron-star-merger`、`time.nuclear-age`；它们留到阶段四的来源页。

### 3.2 六个解释页

| ID | 回答的问题 |
| --- | --- |
| `elements.explain-configuration` | 电子为什么按 1s→2s→2p→3s→3p→4s→3d… 填入；Cr/Cu/Gd/Pt 为什么异常 |
| `elements.explain-energy-levels` | 能级、亚层、n+l 规则与 4s/3d 交错的成因 |
| `elements.explain-shielding` | 屏蔽与有效核电荷如何造成同周期/同族趋势 |
| `elements.explain-lanthanide-contraction` | 4f 填充、镧系收缩、6s 相对论效应（Hg/Au/Pt） |
| `elements.explain-nuclear-stability` | N/Z、稳定线、幻数、α/β/γ/自发裂变 |
| `elements.explain-periodic-law` | 从门捷列夫到量子力学：位置—构型—性质 |

每页 front matter：`dimension: element`、`quantity {value:null, unit:Z, measure:'概念解释，不对应单一原子序数', status:'undetermined', approximate:false}`、`displayValue:'解释页 · 不参与 Z 排序'`、`related` 3–6（hub、其他解释页、时间节点）、`reviewStatus: draft`、`sources` ≥2、`conditions`、`visual {scene:'elements.explain', caption, note}`。

正文 5 个 `##` 小节，450–800 汉字，引用 ≥4；必须有一个小节回答“这条解释如何改变你读某个元素页的方式”，不允许写成百科词条。

### 3.3 来源

每页 2–3 条，只用可公开访问的 https 页面；执行时逐条 WebFetch 确认可访问后再写入。优先来源：

- NIST Atomic Spectra Database / Ionization Energies：`https://physics.nist.gov/asd`
- IUPAC Periodic Table：`https://iupac.org/what-we-do/periodic-table-of-elements/`
- OpenStax Chemistry 2e 相关章节（电子结构、周期趋势、核化学）
- NASA Science（大爆炸、恒星、元素来源）
- NNDC NuDat：`https://www.nndc.bnl.gov/nudat3/`

## 4. 代码与配置改动（逐文件）

### 4.1 内容契约与引擎

| 文件 | 函数/位置 | 改动 |
| --- | --- | --- |
| `content/schema.json` | `id.pattern`、`dimension.enum`、`quantity.unit.enum` | 加 `elements`、`element`、`Z`；新增可选 `element` 对象（symbol/nameEn/period/group/block/configuration/valence/hub/closedShell/periodStart/periodEnd/predicted） |
| `engine/packages/content/index.js` | `validateEntry` | ID 正则加 `elements`；`expected` 加 `elements:['element','Z']`；`value` 为 null 或 1–118 整数；`hub!==true` 时 ID 后缀必须等于小写符号；hub 的 `closedShell` 必须等于 `value` |
| `engine/packages/content/validate.js` | `UNITS`、`DIMENSIONS`、ID 正则 | 加 `Z`、`element`、`elements` |
| `engine/packages/content/compile.mjs` | 目录循环、`bySite` | 加 `elements`；排序沿用数值升序、null 末尾 |
| `engine/packages/content/routes.js` | `dimensions` | 加 `elements:'元素'` |
| `engine/packages/content/presentation.js` | `measureLabel` | 加 `element:'原子序数（Z）'` |
| `engine/packages/build/index.mjs` | 站点白名单、`rewriteNavigation`、`ogSite` 正则、`prepareHTML` | 全部加 `elements`；`articleData.image` 使用 `/og/elements.png` |
| `engine/packages/ui/og/elements.png` | 新资产 | 生成 1200×630 项目自有分享图（深色底 + 18×7 元素网格 + 闭壳列高亮），不复制其他站图片 |

### 4.2 元素站

| 文件 | 内容 |
| --- | --- |
| `elements/package.json` | 名称 `@universe-atlas/elements`，版本 1.0.5，锁定 engine 0.3.1 / content 1.0.5，scripts build/start/check |
| `elements/site.config.json` | `site:'elements'`，本地 origin `http://127.0.0.1:4194`，sites 含五入口 |
| `elements/scripts/build.mjs` | 调 `buildSite`；构建后导入 `elements-data.mjs` 并写 `dist/elements.json` |
| `elements/scripts/check.mjs` | 调 `checkSite` |
| `elements/scripts/serve.mjs` | 静态服务 4194 |
| `elements/src/elements-data.mjs` | 118 条记录（z/symbol/nameZh/nameEn/period/group/block/predicted/closedShell/periodStart/periodEnd），`fillConfiguration(z)` 用 Aufbau 顺序 + 异常表（24、29、41、42、44、45、46、47、57、58、64、78、79、89、90、91、92、93、96、103）生成构型；Z≥104 标 `predicted:true` |
| `elements/src/index.html` | 静态首屏：标题、118/7 文案、壳层阶梯容器、周期表容器、详情面板、noscript 说明、导航 |
| `elements/src/app.js` | 读取 `./elements.json` 与 `./entries.json`；渲染壳层阶梯、周期表、Z−1/Z 对比、prev/next、hub/解释页链接；`?z=` 深链；键盘 ←/→/↑/↓ 与 Enter；`prefers-reduced-motion` 关闭动画 |
| `elements/src/elements.css` | 阶梯、18 族周期表、对比面板、移动端纵向布局；不覆盖全局色板 |

SPA 硬性交互：

- 点击任意元素显示：Z、符号、中文/英文名、周期/族/区块、构型、价层、稳定/预测标记。
- “相对 Z−1”面板必须显示四项差异来源：新增电子进入的亚层、第一电离能、原子半径、电负性；阶段一数值若未入库，显示 `待阶段二补入` 而不是编造数字。
- 任意元素页两次点击内可达 Z−1 与 Z+1。
- 闭壳元素显示“这一层结束”链接到对应 `elements.shell-*` 文章页；碱金属显示“新层开始”。

### 4.3 门户与管线

| 文件 | 改动 |
| --- | --- |
| `config/project.json`、`home/site.config.json`、`space/time/energy/site.config.json`、`config/local-origins.json` | 增加 `elements` 入口与 origin 4194 |
| `scripts/build.mjs` | 构建循环与清理列表加 `elements`；结尾文案改为五入口 |
| `scripts/check.mjs` | 语法检查目录加 `elements` |
| `scripts/check-content.mjs` | `DIM` 加 `elements:['element','Z']` |
| `scripts/check-learning.mjs` | 扫描目录加 `elements`（目标数量不变） |
| `scripts/check-models.mjs` | `eligible` 排除 `elements.`（无 3D 模型）；`bySite` 增加 elements 计数 |
| `scripts/check-release.mjs` | 站点循环加 `elements`；无模型断言扩展到 elements；origins 自动来自 site.config |
| `scripts/release-local.mjs` | 导出仓列表加 `elements`；origins 兜底加 4194 |
| `scripts/serve-sites.mjs` | 站点列表加 `elements` |
| `scripts/build-notices.mjs` | 轴循环加 `elements`（来源清单覆盖新条目） |
| `scripts/audit-content.mjs` | `DIM_DIRS` 加 `elements:'element'` |
| `home/render.mjs` | 导航加“元素”；知识库筛选与数量级总表加 elements；首页世界卡片加第 04 张；`scaleIndex` 保持三轴（元素不画对数条）；about 文案改为五入口 |
| `home/src/library.js` | 维度白名单加 `elements` |
| `home/src/data.js` | 无改动（选项来自 HTML） |
| `home/quiz-data.mjs`、`home/src/quiz.js` | 阶段一不改：Z 不做“谁更大”题 |
| `package.json` | 增加 `build:elements` |

## 5. 风险与处置

| 风险 | 处置 |
| --- | --- |
| 13 条正文被 `check:content --gate` 卡在字数/引用 | 写完后先跑 `node scripts/check-content.mjs --gate`，只修这 13 条，不动存量 |
| 来源 URL 失效 | 每条写前 WebFetch；失败则换同机构另一页，不保留死链 |
| hub 与阶段二元素页 Z 值重复 | ID 用 `shell-*`；`sameValueCandidates` 只报告不合并；阶段二元素页 `hub:false` |
| `check-models` 误把元素当 3D 条目 | 显式排除 `elements.`；模型报告新增 elements 零计数 |
| `release:local` 七仓安装耗时或网络阻断 | 先跑，失败则记录具体仓库与错误；不跳过、不伪造通过 |
| axe 未安装 | 若可安装 `axe-core` 则注入跑；否则做键盘/语义人工审计，并明确报告 axe 未执行 |
| 超重元素构型是预测值 | `predicted:true`，页面标注“预测”，不写成实测 |
| 136 个新条目破坏既有 1,070 条 | 只加 `elements` 目录与枚举，不改存量 Markdown；快照哈希变化属预期 |

## 6. 验收（必须全部有输出证据）

1. `npm run snapshot` → 内容 1,083 条，`bySite.elements = 13`。
2. `npm run build` → 输出五站；`/elements/` 可用；门户出现元素入口。
3. `npm run check` → 文章、链接、搜索、快照、语法全通过。
4. `node scripts/check-content.mjs --gate` → 1,083 条通过，13 条新条目全部满足 450–800 字、≥4 小节、≥2 来源、引用一致、related 3–6、conditions、visual。
5. `npm run check:migration` → 旧 ID 追溯不变。
6. `npm run check:models` → 空间/时间/温度模型全部通过，elements 0 条被误检。
7. `npm run check:learning` → 原有 50/16/24/38/123/80/8 目标不变且通过。
8. `npm run release:local` + `npm run check:release` → 七仓独立安装/构建/检查通过，跨站链接与篡改拒绝通过。
9. 浏览器抽查：`/elements/` 从 H 走到 Og；任选 Fe 检查 Z−1/Z+1、闭壳链接、键盘操作、`?z=26` 深链；无 JS 时首屏文案与 7 个 hub 链接可读。
10. axe（若可安装）或人工语义审计：无严重/关键问题；结果如实报告。

## 7. 回滚

新增站与新增条目均为加法；回滚 = 删除 `elements/`、`content/entries/elements/`、`specs/`，还原第 4 节列出的枚举文件。不触碰存量内容与 `energy` 路径。

## 8. 批准点

请确认本规格后再执行阶段一。批准后按 `tasks.md` 顺序实施，并在阶段一完成时按用户要求发简报（含上述 10 项验收的实际输出）。
