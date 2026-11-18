# 全站内容扩容与深化总计划 · v1.0

日期：2026-11-06，Asia/Shanghai。
基线：内容 0.4.0 / 引擎 0.3.0；285 条条目，其中 257 条可定位；仅本地建设。
本计划只处理内容与配套图景，不涉及远程仓、正式域名、公开许可证与公开发布。

## 0. 结论摘要

当前的问题不是简单的“条目数量少”，而是四个问题叠加：

1. **深度不足**：285 条中有 **233 条正文低于 450 汉字**，平均只有 205–257 汉字；真正达到 0.4.0 深化标准的只有 52 篇。它们更像“带量值的卡片”，还不是可独立阅读的知识文章。
2. **数量分布不均**：空间在 10⁻³⁰–10⁻¹⁹ m 几乎空白；时间 91 条里有 49 条挤在 10¹⁷ s（近现在），10³–10¹¹ s 没有条目；温度在 10⁴–10¹¹ K 和 10⁻¹⁰–10⁻¹ K 两端稀疏。
3. **结构不成立**：时间 91 条使用了 **69 个分类**，几乎一条一类，无法形成可浏览的筛选；只有“绝对时点”，没有“时长”和“未来”两种时间读法。
4. **学习与发现层很薄**：只有 3 条路线、22 组比较题；没有尺度词典、测量方法页、对象页、主题合集、尺度阶梯、常见误解页，文章里也没有尺度定位图。

建议把目标定为 **646 条左右**（现有 285 + 新增 361），同时把 233 条短条目全部补到 0.4.0 标准，再建设 6 类学习/发现内容层（词典、方法页、对象页、合集、阶梯、误解页）。按这个口径，“内容少”才会真正变成“内容够用”。

## 1. 现状审计

### 1.1 数量与质量

| 维度 | 条目 | 唯一概念 | 可定位 | 量值未定 | 正文均值 | <450 字 | 来源总数 | 平均来源 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 空间 | 101 | 94 | 88 | 13 | 257 | 80 | 145 | 1.44 |
| 时间 | 91 | 91 | 81 | 10 | 254 | 73 | 145 | 1.59 |
| 温度 | 93 | 92 | 88 | 5 | 205 | 80 | 121 | 1.30 |
| 合计 | 285 | 277 | 257 | 28 | 239 | 233 | 411 | 1.44 |

注：空间有 7 组兼容别名（local_group / local-group、milky_way_disk / milky-way、moon_diameter / moon、red_blood_cell / red-blood-cell、sun_diameter / sun、typical_bacterium / bacteria、typical_virus / virus），温度有 1 组别名（oxygen-boiling / liquid-oxygen）。因此“285 条”实际对应约 **277 个概念**。

### 1.2 来源密度

| 来源数 | 空间 | 时间 | 温度 |
|---|---:|---:|---:|
| 1 条 | 68 | 59 | 73 |
| 2 条 | 23 | 22 | 13 |
| 3 条 | 9 | 1 | 6 |
| 4 条及以上 | 1 | 9 | 1 |

约 **200 条只有 1 个来源**。深度不足与来源不足是同一件事：多数短条目只够支撑一个数值和一段简介。

### 1.3 分布缺口

按 10 的幂统计可定位条目：

- **空间**：10⁻³⁵ 仅 1 条，10⁻³⁴–10⁻¹⁹ 基本空白；10⁰–10⁵ 只有 12 条；10¹⁰–10¹⁵ 仅 6 条；10¹⁸–10²⁰ 与 10²⁶ 以上稀疏。
- **时间**：10⁻⁴⁵–10⁻³² 有早期宇宙条目；10⁻⁶–10² 有粒子过程；**10³–10¹¹ s（约 17 分钟到 3,000 年）完全没有条目**；10¹⁷ s 挤了 49 条。
- **温度**：10⁻¹⁰–10⁻⁴ K 与 10⁴–10¹¹ K 条目稀疏；10²–10³ K 有 47 条，10¹⁰ K 以上只有个别极端条目。

### 1.4 分类与信息架构

| 维度 | 现有分类数 | 问题 |
|---|---:|---|
| 空间 | 18 | 粒度尚可，但“量子尺度/亚原子粒子/原子核/原子尺度”边界重叠 |
| 时间 | 69 | 91 条 69 类，筛选不可用；分类名是事件而非时代 |
| 温度 | 13 | 物理场景与温区混用，“常温/中温/高温”与“恒星温度/极端天体”不是同一维度 |

### 1.5 学习与发现层

- 探索路线 3 条（6、6、4 步）。
- 问答 22 组固定比较，每题只有“谁更大/更早/更热”。
- 无尺度词典、无测量方法页、无对象页（同一对象的跨维度入口）、无主题合集、无尺度阶梯、无常见误解页。
- 文章只有正文与来源，没有“本条在整条尺度轴上的位置”图。
- 知识库只按空间/时间/温度筛选，没有标签、主题、年代、温区等二级筛选。

### 1.6 图景配套

- 257 个可定位条目：33 个精选具名场景 + 224 个模板配置，复用各站合计 60 类模板。
- 新增约 361 条后，若沿用模板复用，需要新增约 **15–20 类模板**，并为每条新条目配置 `visual`；否则会出现大量“参考图景”与同质化画面。

## 2. 目标口径

### 2.1 总量目标

| 维度 | 现有 | 深化 | 新增 | 目标总量 | 目标唯一概念 |
|---|---:|---:|---:|---:|---:|
| 空间 | 101 | 80 | 159 | 260 | 253 |
| 时间 | 91 | 73 | 108 | 199 | 199 |
| 温度 | 93 | 80 | 94 | 187 | 186 |
| 合计 | 285 | 233 | 361 | **646** | **638** |

说明：新增条目里不设兼容别名；别名只保留旧入口，不重复计数。所有新增条目必须有自己的稳定 ID、量值或明确的 `undetermined` 说明、来源、关联和图景配置。

### 2.2 “补全”的验收定义

不是把宇宙中每个物体都列一遍，而是同时满足：

1. **质量门槛**：每条正文 450–800 汉字，4–5 个有实质内容的小节；至少 2 条来源；至少 4 处 `[n]` 引用；`measure`、条件、不确定性齐全。
2. **覆盖门槛**：三个主轴在核心区间内每个数量级至少 1 条；每个一级分类至少 12 条；日常、生命、地球、行星、恒星、星系、宇宙、微观八个层次都不缺。
3. **结构门槛**：每个维度不超过 10 个一级分类；时间具备“绝对时点 / 时长 / 未来”三种读法；空间具备“尺寸 / 距离 / 波长”口径标签；温度具备“温区 + 场景”双标签。
4. **学习门槛**：每 10 条至少 1 条可进入某条路线或合集；每个一级分类至少 1 组问答；所有条目可从知识库、搜索、对象页、合集四条路径到达。
5. **诚实门槛**：无法建立统一口径的概念继续 `undetermined`，不为凑数填值；27 条（可能新增几条）未定量值保留是正常状态。

## 3. 内容模型升级

### 3.1 新增字段

| 字段 | 用途 | 示例 |
|---|---|---|
| `conceptGroup` | 同一对象跨维度聚合 | `concept.sun`、`concept.earth` |
| `tags[]` | 二级筛选与合集 | `生命`、`材料`、`工业`、`行星`、`恒星`、`量子`、`理论`、`波长`、`距离` |
| `chronology.mode` | 时间读法 | `absolute` / `duration` / `future` |
| `quantity.range` | 范围值/上下界 | 已有部分条目使用 |
| `quantity.bound` | 上界/下界标识 | 已有部分条目使用 |
| `uncertainty` | 不确定度或口径限制 | 已有部分条目使用 |
| `related` 约束 | 3–6 条真实关联 | 禁止按标题相似度堆链接 |

### 3.2 受控分类法

**空间（8 类）**

1. 量子与粒子
2. 原子与分子
3. 生命与人体
4. 日常与人造
5. 地球与地质
6. 行星与太阳系
7. 恒星与致密天体
8. 星际与宇宙

**时间（8 类 + 时长模式）**

1. 太初宇宙（普朗克时代到核合成）
2. 复合与黑暗时代
3. 第一缕光与星系
4. 太阳系与地球
5. 生命起源与早期地球
6. 复杂生命与演化
7. 人类与文明
8. 现在与未来
9. 时长尺度（独立模式，不混入绝对时点轴）

**温度（7 个温区 + 场景标签）**

1. 极低温（<1 K）
2. 低温（1–273 K）
3. 常温（273–373 K）
4. 中温（373–1273 K）
5. 高温（1273–10⁴ K）
6. 极高温（10⁴–10⁸ K）
7. 恒星与宇宙极端（>10⁸ K）

场景标签：生命、材料、工业、行星、恒星、量子、背景辐射、天体事件。

### 3.3 质量门槛

| 项目 | 最低 | 目标 |
|---|---:|---:|
| 正文汉字 | 450 | 550–700 |
| 小节 | 4 | 5 |
| 来源 | 2 | 2.5 平均 |
| `[n]` 引用 | 4 | 6–8 |
| related | 3 | 4–6 |
| 图景 | 有配置 | 精选或差异化模板 |
| 条件/口径 | 必填 | 含不确定性 |

新增条目一律从 `needs-review` 开始；完成来源核对后才进入 `reviewed`。不得批量生成无来源正文，也不得把“字数增长”当作质量证明。

## 4. 空间扩容清单（+159）

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

## 5. 时间扩容清单（+108）

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

## 6. 温度扩容清单（+94）

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

## 7. 233 条深度补齐计划

### 7.1 分批

| 批次 | 维度 | 主题 | 条数 | 代表内容 |
|---|---|---|---:|---|
| D-S1 | 空间 | 微生物与细胞 | 16 | 细菌、细胞、细胞膜、线粒体、核糖体、红细胞、突触间隙 |
| D-S2 | 空间 | 原子、粒子与量子 | 15 | 普朗克长度、质子、原子核、电子康普顿波长、希格斯、顶夸克 |
| D-S3 | 空间 | 人类、日常与肉眼可见 | 17 | 硬币、手、铅笔、头发、米粒、沙粒、蚂蚁、蚊子、蓝鲸 |
| D-S4 | 空间 | 行星、恒星与行星系统 | 16 | 木星、土星、月球、木卫三、太阳直径、参宿四、中子星 |
| D-S5 | 空间 | 星系、星际与宇宙 | 16 | 银河系、仙女座距离、猎户座星云、拉尼亚凯亚、斯隆长城 |
| D-T1 | 时间 | 太初宇宙 | 12 | 普朗克时代、暴胀、大统一、夸克时代、强子时代、核合成 |
| D-T2 | 时间 | 复合、黑暗与第一缕光 | 15 | 光子时代、中微子退耦、黑暗时代、第一代恒星、早期星系 |
| D-T3 | 时间 | 太阳系、地球与生命起源 | 13 | 地球形成、大碰撞、海洋、最早生命、LUCA、大氧化 |
| D-T4 | 时间 | 复杂生命与演化 | 18 | 寒武纪、奥陶纪、鱼类、四足动物、恐龙、哺乳动物、PETM |
| D-T5 | 时间 | 人类、文明与现代 | 15 | 人属、智人、农业、文字、科学革命、工业、互联网 |
| D-E1 | 温度 | 极低温与低温 | 21 | 绝对零度、玻色-爱因斯坦凝聚、液氮、液氧、超流 |
| D-E2 | 温度 | 常温与中温 | 16 | 室温、体温、冰点、沸点、金属熔点、三相点 |
| D-E3 | 温度 | 高温与恒星内部 | 17 | 熔岩、闪电、铁熔点、钨、碳燃烧、硅燃烧 |
| D-E4 | 温度 | 恒星、天体与宇宙背景 | 26 | A/F/O 型星、太阳色球/日冕、超新星、中子星、CMB |
| 合计 | | | **233** | |

### 7.2 每篇深化模板

1. **它是什么**：从熟悉现象或参照进入，说明对象、事件、过程或温度条件。
2. **怎样知道**：观测、实验、测量或模型推断；区分实测与理论。
3. **比较口径**：单位、参照、范围、边界、条件、不确定性。
4. **容易误会什么**：至少纠正一个与本条真正相关的误解。
5. **可以继续看哪里**：3–6 条真实 related，连接有解释价值的概念。

每篇至少补到 2 条来源；如果原有来源不足以支撑新增解释，必须新增来源，不能用同一来源反复支撑不同断言。深化只改正文、摘要、来源、关联和 review 记录；不改 quantity、visual 和审核状态，除非另做科学修订。

## 8. 学习与发现层

### 8.1 尺度词典（60–80 条）

**单位与刻度**：米、千米、天文单位、光年、秒差距、纳米、微米、埃、秒、年、开尔文、摄氏度、焦耳、千克、数量级、对数刻度。

**测量与推算**：视差、标准烛光、红移、哈勃定律、宇宙微波背景、放射性定年、半衰期、树轮、冰芯、原子钟、黑体辐射、有效温度、三相点、临界点、绝对零度、热电偶、辐射温度计、光谱线、多普勒效应。

**结构与概念**：原子、原子核、分子、细胞、行星、恒星、星系、星系团、超星系团、宇宙网、黑洞、事件视界、中子星、白矮星、暗物质、暗能量、大爆炸、暴胀、复合、再电离。

**方法与数学**：有效数字、误差、不确定度、置信区间、量级估算、费米问题、比例、幂律、分形、参照系、尺度不变性、分辨率、衍射极限、瑞利判据。

**物理量**：质量、能量、温度、热量、熵、光速、引力、强相互作用、弱相互作用、电磁力、量子涨落、普朗克单位。

### 8.2 测量方法页（9）

长度测量、时间测量、温度测量、天文距离、宇宙年龄、地质年代、显微镜分辨率、望远镜分辨率、误差与有效数字。

每页说明“我们怎样知道一个尺度”，而不是只给定义；至少 3 条来源，配一个可读的例子。

### 8.3 对象页（20）

太阳、地球、月球、水、人、DNA、病毒、细胞、珠穆朗玛峰、火星、木星、土星、中子星、黑洞、银河系、仙女座星系、可观测宇宙、原子、质子、光。

每页聚合跨维度条目（空间尺寸、时间历史、温度条件），并给出“同一对象的三种尺度”对照。需要 `conceptGroup` 字段支撑。

### 8.4 主题合集（20）

1. 人体里的尺度
2. 从病毒到细胞
3. 日常物体的尺度
4. 地球极值
5. 太阳系漫游
6. 恒星的一生
7. 致密天体
8. 星系的尺度
9. 宇宙大尺度结构
10. 冷的世界
11. 热的极端
12. 材料的熔点
13. 地球的温度带
14. 生命的时间尺度
15. 地球史十二幕
16. 人类文明路标
17. 宇宙的未来
18. 光的波长
19. 微观粒子地图
20. 尺度错觉与常见误解

### 8.5 尺度阶梯（8）

长度 1 m → 10²⁷ m；长度 10⁻³⁵ m → 1 m；时间 10⁻⁴⁴ s → 10¹⁷ s；时长 1 s → 10¹⁸ s；温度 0 K → 10³² K；日常温度 0–100 °C；太阳系距离阶梯；人类历史年表。

阶梯不是新条目，而是有序导航页；每格显示条目、量值、口径和下一条的倍数。

### 8.6 常见误解页（30）

至少覆盖：

- 温度不是热量；K 与 °C 不是两套“热度”。
- 绝对零度不可达到；普朗克长度不是“最小长度”。
- 光年是距离不是时间；宇宙年龄不是 138 亿光年。
- 太阳系大小不是海王星轨道；地月距离不是月球直径。
- 可观测宇宙不等于整个宇宙；哈勃半径不是宇宙边缘。
- 黑洞不是“洞”；暗物质不是黑洞；暗能量不是普通能量。
- 大爆炸不是空间中的爆炸；暴胀不是普通超光速膨胀。
- 宇宙微波背景不是恒星的光。
- 半衰期不是“活到一半就死”；碳-14 不能测恐龙。
- 地质年代边界不是同一天；物种灭绝不是一瞬间。
- 寒武纪大爆发不是“一天内出现所有动物”。
- 恐龙与人类不同时；月球不自己发光；太阳不是黄色。
- 恒星颜色与温度有关，但颜色不是温度计。
- 量子泡沫、超弦、大统一、多重宇宙都不是已观测事实。

### 8.7 探索路线（3 → 15）

保留现有 3 条，新增 12 条：

从病毒到人体；从沙粒到山脉；从地球到月球；太阳系一日游；恒星的一生；从银河系到宇宙网；冷到绝对零度；热到普朗克温度；地球的极端温度；生命的时间线；人类文明十二站；宇宙的未来。

每条 8–10 个条目，跨空间/时间/温度；路线必须有起点、终点和一句“走完之后理解了什么”。

### 8.8 问答（22 → 90）

- 空间 30 组、时间 30 组、温度 30 组。
- 三种难度：直觉题、口径题、估算题。
- 新增题型：单位换算、口径判断（哪一项采用直径/距离/波长）、数量级估算、同一对象跨维度。
- 每题附解释、来源和文章/图景链接；不使用未审核条目。

### 8.9 文章内尺度定位图

每条文章自动生成一张 SVG 尺度条：

- 本条在当前对数轴上的位置；
- 前后各至少 2 个参照条目；
- 显示“本条口径”和“相邻倍数”；
- 时间条目区分“绝对时点/时长”；
- 温度条目显示温区。

这是引擎能力，不需要每条手画图；但每条的 `measure` 必须准确，否则图会误导。

### 8.10 数据页

新增 `/data/`：可排序表格（ID、标题、维度、量值、单位、口径、审核状态、来源数、版本），支持 CSV/JSON 下载。数据页使用当前快照生成，不手写。

## 9. 视觉与工程配套

### 9.1 图景覆盖

| 站点 | 现有模板类 | 建议新增 | 主要新对象 |
|---|---:|---:|---|
| 空间 | 24（模板配置）+ 16 精选 | 10–12 | 动物、植物、人造物、地质特征、行星、卫星、黑洞、类星体、波长、天气 |
| 时间 | 20（模板配置）+ 8 精选 | 5–6 | 时代景观、文明器物、未来场景、时长尺度、地质剖面 |
| 温度 | 16（模板配置）+ 9 精选 | 6–8 | 生命体温、厨房、工业过程、行星大气、星际介质、量子低温 |

新增 12 个精选具名场景：黑洞、星系碰撞、未来地球、太阳红巨星、马里亚纳海沟、人体细胞、木星大红斑、土星环、深海热液、宇宙网、绝对零度实验、普朗克温度。

所有新增条目必须有 `visual.scene / caption / note`；模板复用必须在 note 中说明“示意、非实测、尺寸独立归一化”。不能把 361 条都标成“参考图景”而不做差异化。

### 9.2 引擎与站点改动

| 改动 | 所在 | 验收 |
|---|---|---|
| `conceptGroup`、`tags`、`chronology.mode` 字段 | schema / content compiler | 旧条目兼容；构建通过 |
| 受控分类迁移 | content + 各站筛选 | 时间分类 ≤10；旧链接不断 |
| 时间“时长/未来”模式 | time site | 轴标签明确；绝对时点不混入时长 |
| 空间“尺寸/距离/波长”标签 | space site | 比较时显示口径 |
| 温度“温区 + 场景”双筛选 | energy site | 筛选可用；空结果有说明 |
| 词典/方法/对象/合集/阶梯/误解路由 | home | 所有页面静态可读；链接通过 |
| 文章内尺度定位条 | engine ui | 每条有图；口径错误可见 |
| 数据页与 CSV/JSON | home | 快照一致；可下载 |
| 质量审计脚本 | scripts | 报告字数/来源/引用/短条目 |

### 9.3 版本与交付

建议分三次内容版本，避免每批都重新打包六仓：

| 版本 | 范围 | 引擎 | 预期 |
|---|---|---|---|
| 0.5.0 | 分类法 + 233 篇深化 | 0.4.0 | 现有条目全部达标 |
| 0.6.0 | +361 条 + 图景模板 + 新筛选 | 0.5.0 | 总量 646；三轴覆盖 |
| 0.7.0 | 词典/方法/对象/合集/阶梯/误解/路线/问答 | 0.6.0 | 学习层完整 |
| 1.0.0 | 全量验收 + 本地归档 | 0.6.x | 可交付本地版本 |

每次版本仍按现有流程：`build → check → check:migration → check:models`，再做代表性浏览器检查；0.6.0 起增加全量模型 CPU 检查和 20 个代表场景的 GPU 视觉检查。

## 10. 生产流程与验收

### 10.1 单批流程（20–30 条）

1. **选题**：按批次清单确定 ID、口径、目标分类；检查是否与现有概念重复。
2. **研究**：阅读至少 2 条可定位来源；记录支持范围、数值、条件、不确定性。
3. **写正文**：按五节模板写 450–800 汉字；事实段落加 `[n]`。
4. **配量值**：写入 `quantity`、`measure`、`displayValue`、条件；无法统一口径则 `undetermined`。
5. **配图景**：选择模板/精选，直接在 Markdown 的 `visual` 字段写 caption 与 note。
6. **配关联**：3–6 条 related；必要时加 `conceptGroup`、`tags`。
7. **自检**：标题层级、引用编号、来源可达、无脚本注入、无横向溢出风险。
8. **批次报告**：在 `docs/research/` 记录范围、来源、争议、未定项。
9. **构建与检查**：`npm run build`、`npm run check`；模型变化时 `check:models`。
10. **抽检**：每批至少 3 篇渲染后阅读；每 5 批做一次手机视口检查。

### 10.2 批次验收指标

| 指标 | 门槛 |
|---|---|
| 正文汉字 | 100% ≥450 |
| 来源 | 100% ≥2；批次平均 ≥2.5 |
| `[n]` 引用 | 100% ≥4 |
| related | 100% ≥3 |
| visual | 100% 有配置 |
| 量值 | 有值或明确 undetermined + 说明 |
| 链接 | 0 断链 |
| 构建 | build/check 通过 |
| 模型 | 新增/修改模型 CPU 检查通过 |

### 10.3 检查脚本增强

新增 `scripts/content-audit.mjs`，输出 `artifacts/content-audit.json`：

- 每篇汉字数、来源数、引用数、related 数；
- 短条目清单（<450 字）；
- 单来源清单；
- 未定量值清单；
- 分类计数与超限警告；
- 新增条目与快照差异。

该报告是质量看板，不替代人工阅读；不能因为脚本通过就宣称文章合格。

## 11. 执行顺序与决策门

### P0 · 结构基础

- 确定受控分类法、`conceptGroup`、`tags`、`chronology.mode`。
- 建立 content-audit 脚本与批次模板。
- 迁移现有分类，保留旧链接与别名。
- 出口：schema/编译通过；现有 285 条无断链；audit 报告可生成。

### P1 · 深度补齐（233 篇）

- 按 D-S1…D-E4 共 14 批推进。
- 每批 15–21 篇；完成来源补充与正文深化。
- 出口：0 条 <450 字；100% ≥2 来源；100% ≥4 引用；抽检 30 篇。
- 版本：0.5.0。

### P2 · 广度扩展（+361 条）

- 按 S1–S9、T1–T7、E1–E5 共 21 批推进；每批 15–24 条。
- 同步完成图景模板、Markdown `visual` 字段、分类与标签。
- 出口：646 条；三轴核心区间每个数量级至少 1 条；100% 图景；check:models 全量通过。
- 版本：0.6.0。

### P3 · 学习与发现层

- 词典 60–80、方法页 9、对象页 20、合集 20、阶梯 8、误解页 30、路线 15、问答 90、数据页。
- 出口：所有页面静态可读；0 断链；手机视口关键路径通过。
- 版本：0.7.0。

### P4 · 视觉精修

- 12 个精选场景；30–40 个模板差异化；20 个代表场景 GPU 检查。
- 出口：无同质化“参考图景”集中出现；模型说明与实际画面一致。

### P5 · 新维度决策门（可选）

建议在 646 条三维内容稳定后再决定是否加入第四维。候选：

| 维度 | 内容量 | 价值 | 成本 |
|---|---:|---|---|
| 质量（kg） | 80–100 | 从微中子质量到可观测宇宙质量，叙事完整 | 新站点、新轴、新模板 |
| 能量（J） | 80–100 | 补上“温度 ≠ 能量”的缺口，原计划已预留 | 新站点、单位转换、场景 |
| 速度（m/s） | 60–80 | 从蜗牛到光速，直觉强 | 新轴、运动场景 |
| 频率（Hz） | 60–80 | 与波长互补 | 与空间波长重叠 |

推荐先做“质量”，再做“能量 J”；速度/频率暂不承诺。若不做新维度，则把预算投入现有三轴的样本密度与视觉质量。

### P6 · 本地发布准备

- 版本 1.0.0；全量 build/check/migration/models/浏览器检查。
- `release:local → check:release → 归档恢复`。
- 仍不创建远程仓、不绑定域名、不选公开许可证，除非用户另有明确指令。

## 12. 风险与边界

| 风险 | 处理 |
|---|---|
| 361 条新内容来源工作量过大 | 每批 15–24 条；来源不足的条目不进入 reviewed；宁可少而实 |
| 为凑数量写薄文章 | 质量门槛硬性执行；content-audit 报告公开 |
| 新条目没有统一量值 | 保留 `undetermined`；正文解释为什么没有统一口径 |
| 模板复用导致画面同质化 | 每类至少 2 个 profile；精选场景单独建模；note 说明差异 |
| 分类迁移破坏旧链接 | 保留 canonical/alias；迁移前后跑全量链接检查 |
| 时间“时长/未来”语义混淆 | UI 明确标注；时长不进入绝对时点轴；未来标“模型推断” |
| 视觉与科学口径不一致 | 每条 note 写清示意、夸张、归一化；模型检查 + 人工抽检 |
| 公开许可未确认 | 继续 `rights.status: rewritten`；不宣称已开放许可 |
| 内容量增大影响性能 | 搜索索引分片/懒加载；页面仍静态；构建报告监控体积 |

## 13. 附录：233 篇待深化清单（按分类）

### 空间（80）

- 大型生物（1）：blue-whale
- 地质尺度（2）：everest、island
- 分子尺度（5）：fullerene、molecular-motor、protein、trna、water-molecule
- 恒星尺度（3）：betelgeuse、neutron-star、sun_diameter
- 昆虫尺度（4）：ant、ant_length、dust-mite、mosquito
- 量子尺度（1）：planck
- 人类尺度（4）：coin、hand、pencil、ping-pong-ball
- 人造建筑（5）：burj-khalifa、football-field、golden-gate-bridge、great-pyramid、hubble_aperture
- 肉眼可见（3）：hair、rice-grain、sand-grain
- 微观生命（12）：bacteria、cell、cell_membrane、chloroplast、mitochondria、pollen、red_blood_cell、red-blood-cell、ribosome、synaptic-cleft、typical_bacterium、typical_virus
- 星际尺度（6）：crab-nebula、light-year、omega-centauri、orion-nebula、pillars-of-creation、proxima-centauri
- 星系尺度（5）：andromeda-distance、galactic-center、milky_way_disk、milky-way、triangulum-galaxy
- 行星尺度（7）：earth-moon-distance、ganymede、jupiter、light-second、moon_diameter、olympus-mons、saturn
- 行星系统（6）：au、heliopause、kuiper-belt、mercury-orbit、oort-cloud、solar-system
- 亚原子粒子（4）：higgs-boson、pion、top-quark、w-z-boson
- 宇宙尺度（5）：laniakea、local_group、local-group、sloan-great-wall、virgo-supercluster
- 原子尺度（3）：electron-compton、helium-atom、positronium
- 原子核（4）：carbon-nucleus、iron-nucleus、proton、uranium-nucleus

### 时间（73）

- 奥陶纪多样化（1）：ordovician-radiation
- 暴胀时代（1）：inflation
- 哺乳动物黎明（1）：first-mammals
- 哺乳动物时代（3）：first_primates、mammal-radiation、petm
- 大尺度结构（1）：first-galaxy-clusters
- 大灭绝（2）：k-pg-extinction、permian-triassic-extinction
- 大气演化（2）：great-oxidation-event、oxygenic-photosynthesis
- 大统一时代（1）：grand-unification-epoch
- 登陆先驱（1）：first-tetrapods
- 多细胞时代（1）：multicellular-life
- 分子宇宙（1）：first-molecules
- 复杂细胞起源（1）：eukaryotes-emergence
- 更新世冰期（1）：last-glacial-maximum
- 工业时代（1）：industrial-revolution
- 光子时代（2）：neutrino-background-formation、photon-epoch
- 核合成（1）：deuterium-bottleneck
- 核合成时代（1）：nucleosynthesis
- 恒星时代巅峰（1）：peak-star-formation
- 化学演化（1）：heavy-element-enrichment
- 脊椎动物起源（1）：first-fish
- 加速膨胀（1）：dark-energy-domination
- 结构形成种子（1）：baryon-acoustic-oscillations
- 巨虫时代（1）：carboniferous-period
- 恐龙黄金时代（3）：first_birds、first-flowering-plants、jurassic-period
- 夸克时代（1）：quark-era
- 理性时代（1）：scientific-revolution
- 历史开端（1）：invention-of-writing
- 陆地生态系统（2）：first_seed_plants、land-plants
- 泥盆纪灭绝（1）：late-devonian-extinction
- 普朗克时代（1）：planck-era
- 前寒武纪生命（1）：ediacaran-biota
- 强子时代（1）：hadron-era
- 强子湮灭（1）：proton-antiproton-annihilation
- 轻子时代（1）：lepton-epoch
- 轻子湮灭（1）：muon-antimuon-annihilation
- 全球冰封（1）：snowball-earth
- 人类时代（2）：first-humans、last_magnetic_reversal
- 人属起源（1）：hominins-emerge
- 生命起源（1）：first-life
- 生命树根（1）：luca
- 水世界（1）：formation-of-oceans
- 文明起源（1）：agricultural-revolution
- 文明早期（1）：bronze-age
- 物质主导开始（2）：first-dark-matter-halos、matter-radiation-equality
- 现代人类起源（1）：rise-homo-sapiens
- 相变时代（1）：quark-hadron-phase-transition
- 信息时代（6）：crispr、digital-age、gravitational_waves、human_genome、internet-birth、james_webb
- 星系时代（2）：first-quasars、galaxy-formation
- 星系形成（1）：milky-way-formation
- 行星形成（1）：giant-impact
- 宇宙黎明（2）：first-black-holes、first-stars
- 原初核合成末期（1）：lithium-7-synthesis
- 再电离时代（1）：reionization-epoch
- 早期太阳系（1）：late-heavy-bombardment
- 中生代（1）：dinosaurs
- 中微子退耦（1）：neutrino-decoupling

### 温度（80）

- 常温（4）：co2-critical-point、ethanol_boiling、sodium-melting、water-triple-point
- 低温（12）：ammonia_boiling、dry-ice-sublimation、liquid-hydrogen、liquid-oxygen、mars-surface、methane-boiling、neon-boiling-point、neon-triple-point、niobium-superconducting-transition、oxygen-boiling、pluto-surface、ybco-superconducting-transition
- 高温（13）：bunsen-burner-flame、carbon-sublimation、earths-core、glass_melting、iron-melting、lava-temperature、lightning、oxyacetylene-flame、rocket_plume、silicon-melting、steelmaking_temp、tungsten-filament、tungsten-melting
- 恒星内部（4）：carbon-fusion、oxygen-fusion、red-giant-core、silicon-burning
- 恒星温度（13）：a-type-star、betelgeuse-surface、coldest-brown-dwarf、f-type-star、o-type-star-surface、red-dwarf-surface、rigel-surface、sirius-surface、solar-chromosphere、solar-corona、solar-transition-region、sunspot、vega-surface
- 基本力相变（1）：electroweak
- 极低温（9）：antarctic_min_temp、boomerang-nebula、bose-einstein、dilution-refrigerator、helium-3-superfluid、nuclear-demagnetization-cooling、rhodium-iron-thermometer、squid-working-temperature、superfluid
- 极端高能（2）：fusion-reactor-plasma、quark-gluon
- 极端天体（5）：black-hole-accretion-disk、millisecond_pulsar、neutron-star-surface、supernova、white-dwarf-surface
- 天体辐射（2）：kilonova_temp、nova-outburst
- 宇宙背景（2）：cmb、neutrino-background-temp
- 中温（12）：aluminum-melting、bread_baking、cooking_oil_smoke、copper-melting-point、gold-melting-point、lead-melting-point、magnesium-melting、mercury-boiling、nickel-melting、silver-melting、thermosphere、venus-surface
- 终极温度（1）：planck-temperature

## 14. 一句话总结

先把 233 条“有数无文”的条目补成真正的知识文章，再把三个维度扩到约 646 条并补齐每个数量级的代表样本，最后用词典、方法页、对象页、合集、阶梯、误解页、路线和问答把“可读的知识库”变成“可探索的尺度世界”。顺序不能反过来，否则只会得到更多薄卡片。
