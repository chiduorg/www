# 质量轴（mass.）建设计划

版本：2026-11-08 · 计划稿（第一步交付，未开工）· 基线：内容 v1.0.5 / 引擎 v0.3.1 / 1,070 条（空间 527、时间 300、温度 243）

本计划只定义质量轴怎么做、做多少、怎么验收，不改动仓库。执行前需确认第 9 节的分批与第 10 节的域名依赖。

## 1. 轴的定义与判据

质量轴回答一个单值问题：**这个对象本身有多少质量（kg）**。一条质量轴条目只承载一个对象、一个质量读数。

### 1.1 允许的质量口径

| 类型 | 定义 | 适用对象 | 必须写进 `quantity.measure` 的内容 |
| --- | --- | --- | --- |
| 粒子静质量 | 不变量质量（invariant mass） | 电子、质子、夸克、玻色子 | 采用的 PDG 版本、直接测量/拟合、误差 |
| 束缚系统质量 | 原子、分子、细胞、物体整体质量 | 原子、分子、生物、日常物体 | 是否含结合能亏损、测量方法（称重/质谱/估算） |
| 天体总质量 | 动力学质量或引力透镜/轨道拟合质量 | 行星、恒星、星系、黑洞 | 总质量/重子质量/恒星质量、模型前提、误差 |
| 上下限 | 只给出上限或下限 | 中微子、光子等 | `bound: upper/lower`，不得当作点值 |

### 1.2 排除项

- 重量、重力、惯性力、密度、压强、体积、质量数（核子数）都不等于质量。
- 光子静质量按 0 处理；若写入条目，只能写成实验上限（`bound: upper`），不能把 `E/c²` 当作光子“质量”。
- “太阳质量”“地球质量”只作为换算来源，条目的主单位必须是 kg；显示层可附 `M☉`、`M⊕`。
- 类别质量（“一颗典型恒星”“一个星系”）不得作为单条对象；条目必须是可命名的个体。
- 质量与尺寸不能互推。正文必须明确“质量不是体积/直径的函数”。

### 1.3 数据判据

每条质量条目必须同时满足：

1. `id` 以 `mass.` 开头，`dimension: mass`，`quantity.unit: kg`。
2. `quantity.value > 0`；上限/下限用 `bound`，不得用 `null` 逃避。
3. `quantity.measure` 说明口径、方法、条件；天体必须说明总质量/重子质量/恒星质量。
4. 至少 2 条来源；模型依赖值必须标注模型。
5. 正文 450–800 汉字、5 个 `##` 小节、`related` 3–6 个真实 ID。
6. 与同对象的空间条目互链（如 `mass.earth` ↔ `space.earth`），但不复制长度数值。

## 2. 动态范围与量级覆盖

质量轴从 10⁻⁴⁰ kg（中微子质量本征态量级以下）到 10⁵³ kg（可观测宇宙重子/总质量），共 **94 个十进位**。10⁻⁴⁰–10⁻³⁹ kg 无同口径实测对象，如实留空；光子为静质量 0 的特例，只写实验上限，不参与阶梯排序。普朗克质量 2.18×10⁻⁸ kg 是自然锚点，放在 10⁻⁸ 档。

### 2.1 现有数据可迁移性（实测）

| 指标 | 数值 | 方法/证据 |
| --- | --- | --- |
| 现有结构化质量条目 | 0 / 1,070 | `quantity.dimension` 只有 length/cosmic-time/temperature |
| 正文出现“质量”一词的条目 | 165 条（空间 75、时间 37、温度 53） | 全量 Markdown 关键词计数 |
| 正文含质量类数值的条目 | 92 条（空间 86、时间 1、温度 5），共 156 个数值 | 单位/科学计数扫描，已剔除密度 `g/cm³`、`kg/m³` 上下文 |
| 可判为对象自身质量的值 | 约 102 个（空间 87、时间 3、温度 12） | 逐条人工判读，剔除比较对象/寿命/密度误读 |
| 空间条目可直接补出同对象质量 | 60 条确定性哈希分层抽样中 41 条可补 | 68.3%，Wilson 95% CI 55.7–78.7% → 294–415 条 |
| 按类别加权估计 | 约 73% ≈ 385 条 | 按空间分类占比加权；计划取 340–410 条的工作面 |
| 现有十进位覆盖 | 正文直接数值覆盖 15 个十进位；同对象可换算后约 23 个 | 直接值集中在 10⁻⁴–10⁵、10²⁵–10³¹；10⁻³⁶–10⁻⁵、10⁶–10²⁴、10³²–10⁵³ 大量空档 |

结论：**对象可迁移性足够，数值不可直接迁移**。质量轴不是把 527 条空间条目改一个字段，而是新建约 146 条以质量为唯一读数的条目；空间条目只提供对象身份、图景和交叉链接。

### 2.2 覆盖带与代表对象

| 带 | 十进位 | 目标代表对象 | 现有可复用证据 | 计划条数 |
| --- | --- | --- | --- | --- |
| B1 | −40…−31 | 三代中微子质量本征态、电子、正电子（光子为零质量特例，不入档） | 空间有中微子/电子相关条目，但正文以长度或能量表述 | 6 |
| B2 | −30…−27 | 夸克、μ/τ、质子、中子、氢原子、氦核 | 夸克、质子、中子条目已有 MeV/c² 质量 | 11 |
| B3 | −26…−21 | 顶夸克/W/Z/希格斯、水分子、蛋白质、DNA 碱基对、核糖体 | 水分子、DNA 条目存在，正文无质量值 | 8 |
| B4 | −20…−16 | 葡萄糖、血红蛋白、抗体、病毒、噬菌体、朊病毒 | 病毒条目存在，正文无质量值 | 6 |
| B5 | −15…−9 | 细菌、红细胞、人体细胞、神经元、精子、卵细胞、酵母 | 细胞、神经元条目存在，正文无质量值 | 7 |
| B6 | −8…−3 | 普朗克质量、沙粒、雨滴、蚊子、茶叶、回形针、硬币、高尔夫球 | 沙粒、硬币、高尔夫球条目存在，部分正文有质量 | 8 |
| B7 | −2…2 | 心脏、肝脏、大脑、新生儿、成人、狗、猫、羊、钢琴、摩托车 | 成人/动物/钢琴条目有质量或可直接补 | 10 |
| B8 | 3…7 | 汽车、SUV、卡车、公交车、车厢、大象、河马、霸王龙、蓝鲸、房屋、风机、空间站 | ISS 正文 419,725 kg；多种动物有质量值 | 12 |
| B9 | 8…12 | 邮轮、航母、货轮、埃菲尔铁塔、大金字塔、大桥、体育场屋顶、大教堂、潜艇、客机 | 邮轮正文约 2.51×10⁸ kg | 10 |
| B10 | 13…18 | 67P、哈雷、贝努、爱神星、灶神星、糸川、灵神星、双卫一、谷神星 | 贝努 7.3×10⁷ kg、67P、灵神星条目存在 | 9 |
| B11 | 19…24 | 月球、水星、火星、金星、地球、冥王星、土卫六、木卫三、木卫四、木卫二 | 月球/地球/行星条目存在，质量需补来源 | 10 |
| B12 | 25…28 | 系外行星、超级地球、迷你海王星、热木星、天王星、海王星、土星、木星 | 木星正文“约地球 318 倍”；系外行星条目存在 | 8 |
| B13 | 29…33 | 褐矮星、红矮星、太阳、天狼星 A、比邻星、参宿四、白矮星、中子星、恒星级黑洞、超新星遗迹、Ia 遗迹、大质量恒星 | 褐矮星、白矮星、中子星正文有太阳质量表述 | 12 |
| B14 | 34…40 | 天鹅座 X-1、人马座 A*、M87*、中等质量黑洞、类星体、超大质量黑洞、GW150914、GW190521、ω 星团 | M87* 正文“约 65 亿太阳质量”；Sgr A* 有质量约束 | 9 |
| B15 | 41…47 | 银河系、仙女座、本星系群、室女座星系团、后发座星系团、拉尼亚凯亚、星系纤维、暗物质晕、星系群、巨椭圆星系、矮星系、麦哲伦云 | 银河系、仙女座、本星系群、拉尼亚凯亚条目存在 | 12 |
| B16 | 48…53 | 宇宙网、可观测宇宙、哈勃体积、宇宙重子质量、暗物质质量、赫拉克勒斯—北冕座长城、斯隆长城、宇宙临界质量 | 可观测宇宙条目存在，正文以长度为主 | 8 |

合计 **146 条**。16 个覆盖带每带至少 6 条；推荐目标为 94/94 个十进位至少 1 条，最低验收 74/94 且不得出现连续 3 个空档（10⁻⁴⁰–10⁻³⁹ 的 2 个空档按“无同口径实测对象”豁免）。

## 3. 条目清单（146 条，按覆盖带分组）

| 批次 | 带 | 计划 ID | 条数 |
| --- | --- | --- | --- |
| M1 | B1 | `mass.neutrino-electron`、`mass.neutrino-muon`、`mass.neutrino-tau`、`mass.electron`、`mass.positron`、`mass.photon` | 6 |
| M1 | B2 | `mass.up-quark`、`mass.down-quark`、`mass.strange-quark`、`mass.charm-quark`、`mass.bottom-quark`、`mass.muon`、`mass.tau`、`mass.proton`、`mass.neutron`、`mass.hydrogen-atom`、`mass.helium-nucleus` | 11 |
| M2 | B3 | `mass.top-quark`、`mass.w-boson`、`mass.z-boson`、`mass.higgs-boson`、`mass.water-molecule`、`mass.protein`、`mass.dna-base-pair`、`mass.ribosome` | 8 |
| M2 | B4 | `mass.glucose`、`mass.hemoglobin`、`mass.antibody`、`mass.virus`、`mass.bacteriophage`、`mass.prion` | 6 |
| M2 | B5 | `mass.bacterium`、`mass.red-blood-cell`、`mass.human-cell`、`mass.neuron`、`mass.sperm-cell`、`mass.egg-cell`、`mass.yeast-cell` | 7 |
| M3 | B6 | `mass.planck-mass`、`mass.sand-grain`、`mass.rain-drop`、`mass.mosquito`、`mass.tea-leaf`、`mass.paper-clip`、`mass.coin`、`mass.golf-ball` | 8 |
| M3 | B7 | `mass.human-heart`、`mass.human-liver`、`mass.human-brain`、`mass.newborn`、`mass.adult-human`、`mass.dog`、`mass.cat`、`mass.sheep`、`mass.piano`、`mass.motorcycle` | 10 |
| M3 | B8 | `mass.car`、`mass.suv`、`mass.truck`、`mass.bus`、`mass.train-car`、`mass.elephant`、`mass.hippopotamus`、`mass.tyrannosaurus`、`mass.blue-whale`、`mass.house`、`mass.wind-turbine`、`mass.iss` | 12 |
| M4 | B9 | `mass.cruise-ship`、`mass.aircraft-carrier`、`mass.cargo-ship`、`mass.eiffel-tower`、`mass.great-pyramid`、`mass.large-bridge`、`mass.stadium-roof`、`mass.cathedral`、`mass.submarine`、`mass.airliner` | 10 |
| M4 | B10 | `mass.comet-67p`、`mass.comet-halley`、`mass.asteroid-bennu`、`mass.asteroid-eros`、`mass.asteroid-vesta`、`mass.asteroid-itokawa`、`mass.asteroid-psyche`、`mass.didymos`、`mass.ceres` | 9 |
| M4 | B11 | `mass.moon`、`mass.mercury`、`mass.mars`、`mass.venus`、`mass.earth`、`mass.pluto`、`mass.titan`、`mass.ganymede`、`mass.callisto`、`mass.europa` | 10 |
| M5 | B12 | `mass.exoplanet`、`mass.super-earth`、`mass.mini-neptune`、`mass.hot-jupiter`、`mass.uranus`、`mass.neptune`、`mass.saturn`、`mass.jupiter` | 8 |
| M5 | B13 | `mass.brown-dwarf`、`mass.red-dwarf`、`mass.sun`、`mass.sirius-a`、`mass.proxima-centauri`、`mass.betelgeuse`、`mass.white-dwarf`、`mass.neutron-star`、`mass.stellar-black-hole`、`mass.supernova-remnant`、`mass.type-ia-remnant`、`mass.massive-star` | 12 |
| M5 | B14 | `mass.cygnus-x1`、`mass.sgr-a-star`、`mass.m87-black-hole`、`mass.intermediate-black-hole`、`mass.quasar`、`mass.ultramassive-black-hole`、`mass.gw150914-merger`、`mass.gw190521-merger`、`mass.omega-centauri` | 9 |
| M6 | B15 | `mass.milky-way`、`mass.andromeda`、`mass.local-group`、`mass.virgo-cluster`、`mass.coma-cluster`、`mass.laniakea`、`mass.galaxy-filament`、`mass.dark-matter-halo`、`mass.galaxy-group`、`mass.giant-elliptical`、`mass.dwarf-galaxy`、`mass.magellanic-cloud` | 12 |
| M6 | B16 | `mass.cosmic-web`、`mass.observable-universe`、`mass.hubble-volume`、`mass.baryonic-mass-universe`、`mass.dark-matter-mass`、`mass.hercules-corona-borealis-great-wall`、`mass.sloan-great-wall`、`mass.universe-critical-mass` | 8 |

最小可行集 73 条：在 16 个带中各取 4–5 条锚点（电子、质子、水分子、病毒、细胞、蚊子、成人、汽车、空间站、67P、地球、木星、太阳、中子星、M87*、银河系、可观测宇宙等），再加 9 条补位。最小集只保证“每带不断档”，不保证 90/90 十进位。

## 4. 口径与风险处置

| 风险 | 典型表现 | 处置 |
| --- | --- | --- |
| 静质量 vs 相对论质量 | 把高速运动增加的能量当作质量 | 全轴使用不变量质量；动能、质能只作为说明，不进 `quantity.value` |
| 束缚系统质量亏损 | 原子质量写成质子+中子+电子之和 | 使用实测原子/分子质量；说明结合能亏损，不自行相加 |
| 天体总质量口径混用 | 银河系“总质量”与“恒星质量”差一个量级 | 增加 `massType: total/baryonic/stellar/dynamical`；正文分别给出 |
| 单位混用 | 吨、亿吨、M☉、M⊕ 直接进数值 | 主单位 kg；换算常数集中到 `quantities`；显示层才用 M☉ |
| 上下限 | 中微子、光子质量写成 0 或点值 | `bound` 必填；正文写实验上限与实验名称 |
| 类别 vs 个体 | “一颗典型恒星”“一个星系” | 只允许可命名个体；类别比较放在学习层 |
| 质量=体积/密度 | 由直径和密度反推质量当作实测 | 允许估算，但 `measure` 标明“由密度与体积估算”，不得标为实测 |
| 黑洞质量 | 把黑洞质量当作物质质量或与视界体积相关 | 说明质量是时空参数；与 `space.*` 视界条目互链，不换算体积 |
| 暗物质 | 星系总质量含暗物质但未标注 | 总质量必须标注是否含暗物质；恒星质量单列 |
| 模型依赖 | 系外行星、超大质量黑洞只有模型值 | `approximate: true` + 模型名 + 误差；不写成精确值 |

### 4.1 数据等级（`grade`）

质量条目在 frontmatter 顶层增加 `grade: A|B|C`，只用于质量轴统计，不复用元素轴的 `element.level`（后者会改变字数门槛）。

| 等级 | 判据 | 典型对象 |
| --- | --- | --- |
| A | 直接测量值或权威机构推荐值，相对不确定度通常在 1% 以内 | CODATA 粒子质量、IAU/NASA 行星质量、制造商规格书整备质量 |
| B | 由模型、轨道、密度或样本均值推导，含明确不确定度 | 星系总质量、系外行星质量、细胞湿重均值 |
| C | 只有上限/下限，或只能给出量级 | 中微子质量本征态、光子静质量上限、大尺度结构质量 |

## 5. 图景与可视化方案

质量没有天然“大小”视觉，不能复用空间轴的等比例缩放。质量站采用“质量阶梯 + 天平比较”：

1. **质量阶梯**：纵向对数尺，90 个十进位压缩为 16 个带；每带显示 3–8 个锚点，点击进入条目。首屏直接显示“10⁻³⁶ kg → 10⁵³ kg”的跨度，而不是 3D 星球。
2. **天平比较**：任选两个对象，显示质量比（如“太阳 / 地球 ≈ 333,000”）；同时显示“如果按体积画，比例会误导”的提示。
3. **同质量不同体积**：并排展示“1 kg 铁、1 kg 水、1 kg 空气”的体积差，明确质量与密度、体积是三个量。
4. **粒子到宇宙**：滚动式尺度带，粒子、原子、细胞、人体、行星、恒星、星系、宇宙网逐段出现；每段只用一个代表对象，避免卡片墙。
5. **口径面板**：每个图景旁固定显示“这是静质量/总质量/上限”“是否含暗物质”“测量方法”，与正文同源。
6. **降级**：默认 2D/CSS/SVG，不依赖 WebGL；`prefers-reduced-motion` 下关闭动画；移动端纵向阶梯，不做横向拖拽陷阱。
7. **OG**：`mass` 站单独 1200×630 分享图；首屏文本构建期写入，JS 不到也能读。

## 6. 数据模型改动

质量轴完全沿用“一条目一 quantity”的模型，只做加法：

```yaml
id: mass.earth
dimension: mass
quantity:
  value: 5.972e24
  unit: kg
  measure: 地球总质量（含大气与海洋），由卫星轨道与引力场模型拟合
  approximate: false
mass:
  type: total
  includesDarkMatter: false
  method: satellite-orbits
  uncertainty: {value: 1.0e-3, unit: relative}
```

### 6.1 Schema 与引擎

| 文件 | 改动 | 工作量 |
| --- | --- | --- |
| `content/schema.json` | `id` 前缀加 `mass`；`dimension` 加 `mass`；`unit` 加 `kg`；新增可选 `mass` 对象 | S |
| `engine/packages/content/index.js` | `expected` 映射加 `mass:['mass','kg']`；校验 `value>0`、`bound`、`mass.type` | S |
| `engine/packages/content/compile.mjs` | 站点循环加 `mass`；`bySite` 加 `mass`；排序仍按数值 | S |
| `engine/packages/content/routes.js` | `dimensions` 加 `mass:'质量'` | S |
| `engine/packages/content/presentation.js` | `measureLabel` 加 mass 分支 | S |
| `engine/packages/quantities/index.js` | kg 格式化、SI 前缀、科学计数、质量比 | M |
| `engine/packages/build/index.mjs` | 站点白名单加 `mass`；导航重写加 `mass`；OG 站点；`entries.json` 过滤 | M |
| `home/render.mjs` | 五轴导航、知识库筛选、数量级总表、挑战模式、质量轴对数定位 | M |
| `home/src/library.js`、`data.js`、`quiz.js`、`portal.js` | 新维度筛选/排序/挑战 | M |
| `scripts/build.mjs`、`check.mjs`、`check-content.mjs`、`check-models.mjs`、`check-release.mjs`、`check-learning.mjs`、`build-notices.mjs`、`audit-content.mjs` | 站点/维度列表、模型检查、发布检查、学习层目录 | M |
| `config/project.json`、各站 `site.config.json` | 新增 `mass` 站点与 origin/path | S |
| 新站 `mass/` | `package.json`、`site.config.json`、`scripts/{build,check,serve}.mjs`、`src/index.html`、`src/app.js`、`src/ladder.js`、`src/styles.css` | M |
| `deploy/nginx.conf`、`docs/LOCAL_DELIVERY.md`、`README.md`、`docs/AI_HANDOFF.md` | 子域/版本/部署说明 | S |

合计约 **22–26 个代码/配置文件 + 146 个内容文件**，工程量为 **M**。

### 6.2 站点形态

- `mass` 站是单页探索器：读取 `entries.json`（构建期已剥离正文），渲染质量阶梯/天平；不做 146 个静态卡片页。
- 146 个条目正文页仍由门户 `home/render.mjs` 统一生成，URL `/entry/mass/{slug}/`；第二步先在整合预览 `/mass/`，第三步切到 `mass.chidu.org`。
- `mass` 站不复制 `/media`、`/og`、`content.json`；与现有 space/time/energy 一致，由整合构建统一去重。

## 7. 学习层配套

新增目标（在现有 50/16/24/38/123/80/8 基础上累加）：

| 类型 | 新增 | 示例 |
| --- | --- | --- |
| objects | 10 | “从电子到可观测宇宙：质量的 90 个十进位”“同质量不同体积”“恒星质量决定结局” |
| methods | 4 | 天平/质谱、轨道动力学、引力透镜、模型拟合 |
| collections | 5 | 微观质量、日常质量、行星质量、恒星残骸、宇宙质量 |
| misconceptions | 6 | 质量=重量、质量=体积、重=大、光子有静质量、黑洞质量=体积、星系质量=恒星质量 |
| qa | 15 | “为什么中微子质量只有上限”“为什么太阳质量是锚点” |
| dictionary | 25 | 静质量、结合能、动力学质量、重子质量、钱德拉塞卡极限等 |
| ladders | 4 | 粒子→原子→细胞→人体；人体→行星→恒星→星系；恒星→白矮星→中子星→黑洞；星系→星系团→宇宙网 |

每个新 object 至少跨 2 条轴（mass + space 或 mass + time）；现有 50 个 object 中至少 20 个补入 mass 引用。`check-learning.mjs` 的 targets 与目录列表同步扩展。

## 8. 校验与验收标准

每一批完成后必须全过：

1. `npm run build`：1,070 + 新增条目；sitemap 覆盖新页面。
2. `npm run check`：链接、搜索、路由、站点隔离。
3. `npm run check:content -- --gate`：schema、来源、正文长度、related。
4. `npm run check:migration`：旧 ID 不误删。
5. `npm run check:models`：新站不要求 3D 模型时明确跳过；不得把 mass 条目误判为 space。
6. `npm run release:local` + `npm run check:release`：新增站点进发布包，站点隔离仍成立。
7. `node scripts/check-learning.mjs`：学习层引用 0 悬空。

质量轴专项验收：

| 项 | 标准 |
| --- | --- |
| 条目数 | 推荐 146；最小 73 |
| 覆盖带 | 16/16 带非空；推荐 90/90 十进位；最低 70/90 且无连续 3 空档 |
| 单位 | 100% `kg`；无 `吨` 直接进 value |
| 口径 | 100% 有 `measure`；天体 100% 有 `mass.type`；上限条目 100% 有 `bound` |
| 来源 | 每条 ≥2；模型值标注模型；无“搜索摘要”来源 |
| 正文 | 450–800 汉字；5 个 `##`；related 3–6 |
| 交叉链接 | 至少 80% 条目与同对象空间条目互链；`related` 可走通 |
| 视觉 | 首屏是质量阶梯，不是 146 卡片墙；移动端无横向溢出；reduce-motion 可用 |
| SEO | canonical/OG/sitemap 指向 mass 轴；404 noindex；JSON-LD Article |
| 无障碍 | axe 0 violations；键盘可完成“选两个对象比较” |

## 9. 分批执行顺序与工时估算

| 批次 | 内容 | 条目 | 预计工时 |
| --- | --- | --- | --- |
| M0 | schema/引擎/站点骨架/质量阶梯空壳/校验接入 | 0 | 60–80 h |
| M1 | B1+B2 粒子与核子锚点 | 17 | 35–45 h |
| M2 | B3+B4+B5 分子与生命 | 21 | 45–55 h |
| M3 | B6+B7+B8 日常、人体、载具 | 30 | 60–75 h |
| M4 | B9+B10+B11 建筑、小天体、行星 | 29 | 65–80 h |
| M5 | B12+B13+B14 巨行星、恒星、黑洞 | 29 | 65–80 h |
| M6 | B15+B16 星系与宇宙 | 20 | 45–60 h |
| M7 | 学习层、图景细化、无障碍、SEO、发布 | 0 | 25–35 h |

合计 **425–545 h**（内容 315–395 h，工程 60–80 h，学习与验收 50–70 h）。最小 73 条约 **260–340 h**。每批结束跑六条校验 + 学习层校验，失败不进入下一批。

## 10. 与第三步域名迁移的依赖

- 本计划按最终形态设计：站点 key `mass`，ID 前缀 `mass.`，对外 `mass.chidu.org`，canonical/OG/sitemap 使用 mass 子域。
- 第二步先在整合预览 `/mass/` 落地；第三步统一切子域，不做 `/mass/` 旧路径 301。
- 质量轴与温度正名共享迁移窗口：`energy.*` 是否改 `temperature.*`、条目正文页最终 host 在门户还是轴子域，需在第三步迁移计划中一次决定。质量轴不依赖该决定，但 ID 前缀和 canonical 必须与最终决定一致。
- 版本建议：质量轴 MVP 升 `1.1.0`；元素轴完成后 `1.2.0`；五轴统一迁移完成 `2.0.0`。
