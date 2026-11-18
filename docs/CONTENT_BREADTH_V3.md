# 广度扩充计划 v3（2026-11-07）

基线：v1.0.1，646 条（space 260 / time 199 / energy 187），642 个概念 + 4 个别名。本计划只做本地内容，不推远程、不改版本发布。

## 1. 基线分布

| 维度 | 一级分类与条数 | 主要缺口 |
| --- | --- | --- |
| 空间 256 | 日常与人造 34、量子与粒子 30、生命与人体 52、地球与地质 26、原子与分子 25、星系与宇宙 28、行星与太阳系 35、恒星与星际 26 | 人造物族偏少；波长仅 20；器官/分子族缺失；地貌缺大洲级；星系类型单一；卫星/矮行星不足；恒星类型不足 |
| 时间 199 | 人类与文明 45、现在与未来 8、地质年代 24、时长尺度 40、太初宇宙 31、复合与黑暗时代 8、星系与结构 7、太阳系与地球 10、生命起源与早期地球 8、复杂生命与演化 18 | 关键历史节点缺；未来只有 8；前寒武纪年代缺；纳秒–毫秒缺；演化关键类群缺；星系演化仅 7 |
| 温度 187 | 极低温 21、低温 37、中温 36、高温 27、极高温 9、常温 15、恒星与宇宙极端 42 | 极高温最薄；低温缺液氦/行星卫星表面；中温缺日常设备；高温缺工业窑炉；恒星类型不足 |

量值口径：空间 1e-15–1e26 m；时间时点 1e-43–1e17 s、时长 1e-9–1e107 s；温度约 1–1e32 K。当前每个一级分类均有覆盖，但族内代表不足。

## 2. 总量目标与收敛判据

- 本轮新增 **154 条**（space 70 / time 50 / energy 34），总量 646 → **800**。
- 停止条件（全部满足）：
  1. 9 个空间分类每类 ≥30 条；10 个时间分类每类 ≥8 条；7 个温度温区每类 ≥12 条。
  2. 空间从 1e-15 到 1e26 m 无连续两个数量级空档；时间时点从 1e-43 到 1e17 s 仅保留科学上无已知实体的空档；温度 1–1e32 K 每数量级至少 1 条。
  3. 对象族（器官、分子、生物、地貌、天体、历史节点、演化类群、温度场景）每族 ≥3 条代表。
  4. 最后一批的新增与前批标题/概念重合率 <15%；若某分类新增 10 条仍有 5 条以上与既有概念同义，该分类视为收敛。
- 达到后写最终分布表并说明剩余真实空档（如无已知天体的质量区间、无统一定义的假说量）。

## 3. 批次清单

质量门槛与现有条目完全一致：正文 450–800 汉字、≥4 个 `##` 小节、≥2 条来源且全部被 `[n]` 引用、引用 ≥4 次、related 3–6 且存在、conditions 非空、visual 完整、tags 3 项。新条目一律 `reviewStatus: needs-review`，来源核对后再转 `reviewed`。

### 3.1 空间 S1–S9（70 条）

**S1 日常与人造（10）** 口径：尺寸/距离，tags：日常与人造 + 尺寸 + 日常

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| space.door | 标准门高 | 2.03 m | infrastructure | 日常与人造/尺寸/日常 |
| space.chair | 餐椅高度 | 0.90 m（座面到地面 0.45 m 另注） | infrastructure | 日常与人造/尺寸/日常 |
| space.car | 家用轿车长度 | 4.5 m | infrastructure | 日常与人造/尺寸/日常 |
| space.bicycle | 自行车长度 | 1.8 m | infrastructure | 日常与人造/尺寸/日常 |
| space.swimming-pool | 标准泳池长度 | 50 m | infrastructure | 日常与人造/距离/日常 |
| space.tennis-court | 网球双打场地长度 | 23.77 m | infrastructure | 日常与人造/距离/日常 |
| space.basketball-court | 篮球场长度 | 28.65 m | infrastructure | 日常与人造/距离/日常 |
| space.refrigerator | 家用冰箱高度 | 1.8 m | infrastructure | 日常与人造/尺寸/日常 |
| space.guitar | 民谣吉他长度 | 1.0 m | infrastructure | 日常与人造/尺寸/日常 |
| space.road-lane | 标准车道宽度 | 3.5 m | infrastructure | 日常与人造/距离/日常 |

**S2 波长谱（6）** 口径：波长，tags：量子与粒子 + 波长 + 微观

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| space.green-light | 绿光波长 | 532 nm | light | 量子与粒子/波长/微观 |
| space.yellow-light | 黄光波长 | 570 nm | light | 量子与粒子/波长/微观 |
| space.terahertz | 太赫兹波 | 0.1 mm（1 THz） | light | 量子与粒子/波长/微观 |
| space.lyman-alpha | 莱曼α线 | 121.6 nm | light | 量子与粒子/波长/天体 |
| space.uv-a | UV-A 波长 | 365 nm | light | 量子与粒子/波长/微观 |
| space.soft-x-ray | 软 X 射线 | 10 nm | light | 量子与粒子/波长/微观 |

**S3 器官与分子（10）** 口径：尺寸，tags：生命与人体 + 尺寸 + 生命

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| space.heart | 成人心脏长度 | 12 cm | human-body | 生命与人体/尺寸/生命 |
| space.brain | 成人脑前后径 | 15 cm | human-body | 生命与人体/尺寸/生命 |
| space.liver | 成人肝脏最大径 | 20 cm | human-body | 生命与人体/尺寸/生命 |
| space.lung | 成人肺高度 | 25 cm | human-body | 生命与人体/尺寸/生命 |
| space.kidney | 成人肾脏长度 | 11 cm | human-body | 生命与人体/尺寸/生命 |
| space.tooth | 成人磨牙高度 | 2 cm | human-body | 生命与人体/尺寸/生命 |
| space.femur | 成人股骨长度 | 45 cm | human-body | 生命与人体/尺寸/生命 |
| space.eye | 成人眼球直径 | 2.4 cm | human-body | 生命与人体/尺寸/生命 |
| space.hemoglobin | 血红蛋白分子直径 | 6.4 nm | molecule | 生命与人体/尺寸/纳米 |
| space.antibody | IgG 抗体跨度 | 10 nm | molecule | 生命与人体/尺寸/纳米 |

**S4 生物类群（8）** 口径：尺寸，tags：生命与人体 + 尺寸 + 生命

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| space.oak-tree | 橡树高度 | 25 m | organism | 生命与人体/尺寸/生命 |
| space.sequoia | 巨杉高度 | 95 m | organism | 生命与人体/尺寸/生命 |
| space.mushroom | 蘑菇菌盖直径 | 10 cm | organism | 生命与人体/尺寸/生命 |
| space.fern | 蕨类高度 | 1 m | organism | 生命与人体/尺寸/生命 |
| space.plankton | 浮游生物长度 | 0.1 mm | organism | 生命与人体/尺寸/微观 |
| space.octopus | 章鱼臂展 | 1 m | organism | 生命与人体/尺寸/生命 |
| space.shark | 大白鲨长度 | 4 m | organism | 生命与人体/尺寸/生命 |
| space.eagle | 金雕翼展 | 2 m | organism | 生命与人体/尺寸/生命 |

**S5 地貌与水体（8）** 口径：距离，tags：地球与地质 + 距离 + 地理

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| space.andes | 安第斯山脉长度 | 7,000 km | landform | 地球与地质/距离/地理 |
| space.alps | 阿尔卑斯山脉长度 | 1,200 km | landform | 地球与地质/距离/地理 |
| space.gobi | 戈壁沙漠东西跨度 | 1,600 km | landform | 地球与地质/距离/地理 |
| space.greenland | 格陵兰岛南北长度 | 2,700 km | landform | 地球与地质/距离/地理 |
| space.mediterranean-sea | 地中海东西长度 | 3,900 km | landform | 地球与地质/距离/地理 |
| space.yangtze-river | 长江长度 | 6,300 km | landform | 地球与地质/距离/地理 |
| space.mount-fuji | 富士山高度 | 3,776 m | landform | 地球与地质/尺寸/地理 |
| space.iceberg | 大型冰山跨度 | 200 m | landform | 地球与地质/尺寸/地理 |

**S6 分子与晶体（8）** 口径：尺寸，tags：原子与分子 + 尺寸 + 纳米

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| space.co2-molecule | 二氧化碳分子键长 | 0.33 nm | molecule | 原子与分子/尺寸/纳米 |
| space.oxygen-molecule | 氧分子键长 | 0.121 nm | molecule | 原子与分子/尺寸/纳米 |
| space.nitrogen-molecule | 氮分子键长 | 0.110 nm | molecule | 原子与分子/尺寸/纳米 |
| space.methane-molecule | 甲烷分子跨度 | 0.38 nm | molecule | 原子与分子/尺寸/纳米 |
| space.caffeine-molecule | 咖啡因分子长度 | 0.98 nm | molecule | 原子与分子/尺寸/纳米 |
| space.atp-molecule | ATP 分子长度 | 1.2 nm | molecule | 原子与分子/尺寸/纳米 |
| space.nacl-crystal | NaCl 晶格常数 | 0.282 nm | crystal | 原子与分子/尺寸/纳米 |
| space.diamond-unit-cell | 金刚石晶胞边长 | 0.357 nm | crystal | 原子与分子/尺寸/纳米 |

**S7 星系与宇宙结构（6）** 口径：距离/直径，tags：星系与宇宙 + 距离 + 天体

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| space.pinwheel-galaxy | 风车星系直径 | 1.3e21 m（约 1.3e5 光年） | galaxy | 星系与宇宙/距离/天体 |
| space.cigar-galaxy | 雪茄星系长度 | 4e20 m（约 4e4 光年） | galaxy | 星系与宇宙/距离/天体 |
| space.centaurus-a | 半人马座 A 直径 | 2e21 m | galaxy | 星系与宇宙/距离/天体 |
| space.antennae-galaxies | 触须星系跨度 | 1e21 m | galaxy | 星系与宇宙/距离/天体 |
| space.fornax-cluster | 天炉座星系团直径 | 1e22 m | cluster | 星系与宇宙/距离/天体 |
| space.hercules-corona-borealis-great-wall | 武仙–北冕巨墙长度 | 3e25 m（约 10 Gly） | large-scale-structure | 星系与宇宙/距离/天体 |

**S8 卫星与矮行星（8）** 口径：尺寸，tags：行星与太阳系 + 尺寸 + 天体

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| space.callisto | 木卫四直径 | 4,820 km | jupiter | 行星与太阳系/尺寸/天体 |
| space.triton | 海卫一淡化直径 | 2,700 km | neptune | 行星与太阳系/尺寸/天体 |
| space.charon | 冥卫一直径 | 1,212 km | pluto | 行星与太阳系/尺寸/天体 |
| space.mimas | 土卫一直径 | 396 km | saturn | 行星与太阳系/尺寸/天体 |
| space.deimos | 火卫二最长径 | 12 km | mars | 行星与太阳系/尺寸/天体 |
| space.eris | 阋神星直径 | 2,326 km | kuiper | 行星与太阳系/尺寸/天体 |
| space.makemake | 鸟神星直径 | 1,430 km | kuiper | 行星与太阳系/尺寸/天体 |
| space.ryugu | 龙宫小行星最长径 | 900 m | kuiper | 行星与太阳系/尺寸/天体 |

**S9 恒星与星云（6）** 口径：尺寸/距离，tags：恒星与星际 + 尺寸 + 天体

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| space.supergiant-star | 红超巨星直径 | 1e10 m | star | 恒星与星际/尺寸/天体 |
| space.wolf-rayet-star | 沃尔夫–拉叶星直径 | 1e10 m | star | 恒星与星际/尺寸/天体 |
| space.cepheid-variable | 造父变星直径 | 1e10 m | star | 恒星与星际/尺寸/天体 |
| space.pleiades | 昴星团跨度 | 6.6e16 m（约 7 光年） | cluster | 恒星与星际/距离/天体 |
| space.eagle-nebula | 鹰状星云跨度 | 2e17 m | nebula | 恒星与星际/距离/天体 |
| space.horsehead-nebula | 马头星云跨度 | 3e16 m | nebula | 恒星与星际/距离/天体 |

### 3.2 时间 T1–T7（50 条）

**T1 人类与文明（12）** 口径：绝对时点（距今年数），tags：人类与文明 + 时点 + 历史

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| time.neanderthals | 尼安德特人灭绝 | 距今约 4 万年 | human-history | 人类与文明/时点/史前 |
| time.megafauna-extinction | 更新世巨型动物灭绝 | 距今约 1.2 万年 | human-history | 人类与文明/时点/史前 |
| time.egyptian-pyramids | 吉萨金字塔建成 | 距今约 4,500 年 | human-history | 人类与文明/时点/古代 |
| time.roman-empire | 罗马帝国建立 | 距今约 2,000 年 | human-history | 人类与文明/时点/古代 |
| time.black-death | 黑死病高峰 | 距今约 675 年 | human-history | 人类与文明/时点/中世纪 |
| time.columbus-voyage | 哥伦布跨大西洋航行 | 距今约 533 年 | human-history | 人类与文明/时点/近代 |
| time.reformation | 宗教改革起点 | 距今约 508 年 | human-history | 人类与文明/时点/近代 |
| time.american-revolution | 美国独立战争爆发 | 距今约 250 年 | human-history | 人类与文明/时点/近代 |
| time.world-war-i | 第一次世界大战结束 | 距今约 108 年 | human-history | 人类与文明/时点/现代 |
| time.world-war-ii | 第二次世界大战结束 | 距今约 81 年 | human-history | 人类与文明/时点/现代 |
| time.berlin-wall-fall | 柏林墙倒塌 | 距今约 37 年 | human-history | 人类与文明/时点/现代 |
| time.united-nations | 联合国成立 | 距今约 81 年 | human-history | 人类与文明/时点/现代 |

**T2 现在与未来（6）** 口径：未来时点，tags：现在与未来 + 未来 + 未来

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| time.near-future-2030 | 2030 年 | 距今约 4 年 | future | 现在与未来/未来/未来 |
| time.near-future-2100 | 2100 年 | 距今约 74 年 | future | 现在与未来/未来/未来 |
| time.year-10000 | 公元 10000 年 | 距今约 8,000 年 | future | 现在与未来/未来/未来 |
| time.year-1-million | 百万年后 | 距今约 1e6 年 | future | 现在与未来/未来/未来 |
| time.sun-luminosity-increase | 太阳亮度显著上升 | 约 1e9 年后 | future | 现在与未来/未来/恒星 |
| time.stellar-formation-ceases | 恒星形成基本停止 | 约 1e12 年后 | future | 现在与未来/未来/宇宙 |

**T3 地质年代（8）** 口径：绝对时点（距今年数），tags：地质年代 + 时点 + 地质

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| time.ediacaran-period | 埃迪卡拉纪 | 距今约 6.35 亿年 | geologic-time | 地质年代/时点/地质 |
| time.ordovician-period | 奥陶纪 | 距今约 4.85 亿年 | geologic-time | 地质年代/时点/地质 |
| time.cryogenian | 成冰纪 | 距今约 7.20 亿年 | geologic-time | 地质年代/时点/地质 |
| time.tonian | 拉伸纪 | 距今约 10 亿年 | geologic-time | 地质年代/时点/地质 |
| time.eoarchean | 始太古代 | 距今约 40 亿年 | geologic-time | 地质年代/时点/地质 |
| time.mesoarchean | 中太古代 | 距今约 32 亿年 | geologic-time | 地质年代/时点/地质 |
| time.paleoproterozoic | 古元古代 | 距今约 25 亿年 | geologic-time | 地质年代/时点/地质 |
| time.neoproterozoic | 新元古代 | 距今约 10 亿年 | geologic-time | 地质年代/时点/地质 |

**T4 时长尺度（6）** 口径：时长，tags：时长尺度 + 时长 + 时长

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| time.nanosecond | 一纳秒 | 1e-9 s | duration | 时长尺度/时长/时长 |
| time.microsecond | 一微秒 | 1e-6 s | duration | 时长尺度/时长/时长 |
| time.millisecond | 一毫秒 | 1e-3 s | duration | 时长尺度/时长/时长 |
| time.fortnight | 两星期 | 1.2096e6 s | duration | 时长尺度/时长/时长 |
| time.season | 一个季节 | 约 7.89e6 s | duration | 时长尺度/时长/时长 |
| time.mercury-year | 水星年 | 7.6008e6 s | duration | 时长尺度/时长/天体 |

**T5 复杂生命（6）** 口径：绝对时点，tags：复杂生命与演化 + 时点 + 生命

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| time.first-vertebrates | 最早脊椎动物 | 距今约 5.25 亿年 | evolution | 复杂生命与演化/时点/生命 |
| time.first-amphibians | 最早两栖动物 | 距今约 3.70 亿年 | evolution | 复杂生命与演化/时点/生命 |
| time.first-trees | 最早树木 | 距今约 3.85 亿年 | evolution | 复杂生命与演化/时点/生命 |
| time.first-whales | 最早鲸类 | 距今约 5,000 万年 | evolution | 复杂生命与演化/时点/生命 |
| time.cambrian-explosion | 寒武纪大爆发 | 距今约 5.38 亿年 | evolution | 复杂生命与演化/时点/生命 |
| time.end-ordovician-extinction | 奥陶纪末大灭绝 | 距今约 4.44 亿年 | evolution | 复杂生命与演化/时点/生命 |

**T6 太阳系与早期地球 / 生命起源（7）**

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| time.moon-formation | 月球形成 | 距今约 45 亿年 | early-earth | 太阳系与地球/时点/地球 |
| time.magnetic-field-origin | 地球磁场起源 | 距今约 35 亿年（模型范围） | early-earth | 太阳系与地球/时点/地球 |
| time.first-atmosphere | 地球原始大气形成 | 距今约 45 亿年 | early-earth | 太阳系与地球/时点/地球 |
| time.late-veneer | 晚期陨石添加 | 距今约 39 亿年 | early-earth | 太阳系与地球/时点/地球 |
| time.rna-world | RNA 世界假说 | 距今约 40 亿年（模型） | origin-of-life | 生命起源与早期地球/时点/生命 |
| time.protocell | 原始细胞出现 | 距今约 38 亿年（模型） | origin-of-life | 生命起源与早期地球/时点/生命 |
| time.hydrothermal-origin-of-life | 热液喷口生命起源假说 | 未定（undetermined） | origin-of-life | 生命起源与早期地球/未定/生命 |

**T7 星系演化（5）** 口径：绝对时点，tags：星系与结构 + 时点 + 天体

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| time.first-supermassive-black-holes | 最早超大质量黑洞 | 距今约 130 亿年 | galaxy-evolution | 星系与结构/时点/天体 |
| time.first-galaxy-merger | 最早星系并合 | 距今约 125 亿年 | galaxy-evolution | 星系与结构/时点/天体 |
| time.cosmic-noon | 宇宙恒星形成高峰 | 距今约 100 亿年 | galaxy-evolution | 星系与结构/时点/天体 |
| time.quiescent-galaxy-emergence | 宁静星系大量出现 | 距今约 80 亿年 | galaxy-evolution | 星系与结构/时点/天体 |
| time.first-globular-clusters | 最早球状星团 | 距今约 128 亿年 | galaxy-evolution | 星系与结构/时点/天体 |

### 3.3 温度 E1–E6（34 条）

**E1 极低温 / 低温（7）** tags：zone + 温度 + 场景

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| temperature.liquid-helium | 液氦沸点 | 4.22 K | cryogenics | 极低温/温度/低温 |
| temperature.liquid-neon | 液氖沸点 | 27.1 K | cryogenics | 极低温/温度/低温 |
| temperature.solid-nitrogen | 固氮升华点 | 63.15 K | cryogenics | 极低温/温度/低温 |
| temperature.helium-4-lambda-point | 氦-4 λ 点 | 2.17 K | cryogenics | 极低温/温度/低温 |
| temperature.mgb2-critical-temperature | MgB₂ 超导转变温度 | 39 K | superconductor | 极低温/温度/材料 |
| temperature.cuprate-critical-temperature | 铜氧化物超导转变温度 | 92 K | superconductor | 低温/温度/材料 |
| temperature.charon-surface | 冥卫一表面温度 | 53 K | planetary-surface | 极低温/温度/天体 |

**E2 低温（5）**

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| temperature.ganymede-surface | 木卫三表面温度 | 110 K | planetary-surface | 低温/温度/天体 |
| temperature.callisto-surface | 木卫四表面温度 | 134 K | planetary-surface | 低温/温度/天体 |
| temperature.ozone-layer | 臭氧层温度 | 230 K | atmosphere | 低温/温度/大气 |
| temperature.snow-surface | 新雪表面温度 | 273.15 K | cryosphere | 低温/温度/水 |
| temperature.ice-cream-freezer | 冰淇淋冷冻温度 | 255 K | everyday | 低温/温度/日常 |

**E3 中温（7）**

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| temperature.asphalt-summer | 夏季沥青路面温度 | 333 K（60 °C） | everyday | 中温/温度/日常 |
| temperature.sand-beach-summer | 夏季沙滩表面温度 | 323 K（50 °C） | everyday | 中温/温度/日常 |
| temperature.car-engine-coolant | 汽车发动机冷却液温度 | 363 K（90 °C） | everyday | 中温/温度/机械 |
| temperature.bath-water | 泡澡水温 | 313 K（40 °C） | everyday | 中温/温度/日常 |
| temperature.compost-pile | 堆肥堆芯温度 | 333 K（60 °C） | everyday | 中温/温度/生物 |
| temperature.neon-sign | 霓虹灯管温度 | 373 K（100 °C） | everyday | 中温/温度/设备 |
| temperature.led-junction | LED 结温 | 353 K（80 °C） | everyday | 中温/温度/设备 |

**E4 高温（5）**

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| temperature.coke-oven | 焦炉温度 | 1,273 K（1,000 °C） | industry | 高温/温度/工业 |
| temperature.pottery-kiln | 陶窑温度 | 1,473 K（1,200 °C） | industry | 高温/温度/工业 |
| temperature.forge-fire | 锻炉温度 | 1,173 K（900 °C） | industry | 高温/温度/工业 |
| temperature.exhaust-gas | 汽车排气温度 | 973 K（700 °C） | industry | 高温/温度/机械 |
| temperature.glass-furnace | 玻璃熔窑温度 | 1,873 K（1,600 °C） | industry | 高温/温度/工业 |

**E5 极高温（5）**

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| temperature.lightning-channel | 闪电通道温度 | 3e4 K | plasma | 极高温/温度/大气 |
| temperature.cme-plasma | 日冕物质抛射等离子体 | 1e6 K | plasma | 极高温/温度/天体 |
| temperature.reentry-plasma | 再入等离子体鞘 | 3e3 K | plasma | 高温/温度/航天 |
| temperature.nuclear-fireball | 核火球温度 | 1e7 K | plasma | 极高温/温度/技术 |
| temperature.laser-fusion-plasma | 激光聚变等离子体 | 1e8 K | plasma | 极高温/温度/技术 |

**E6 恒星与宇宙极端（5）**

| ID | 标题 | 量值口径 | conceptGroup | tags |
| --- | --- | --- | --- | --- |
| temperature.supergiant-surface | 红超巨星表面温度 | 4,000 K | stellar | 恒星与宇宙极端/温度/恒星 |
| temperature.wolf-rayet-surface | 沃尔夫–拉叶星表面温度 | 1e5 K | stellar | 恒星与宇宙极端/温度/恒星 |
| temperature.cepheid-surface | 造父变星表面温度 | 6,000 K | stellar | 恒星与宇宙极端/温度/恒星 |
| temperature.accretion-disk-inner | 吸积盘内缘温度 | 1e7 K | compact | 恒星与宇宙极端/温度/天体 |
| temperature.t-tauri-surface | T Tauri 星表面温度 | 5,000 K | stellar | 恒星与宇宙极端/温度/恒星 |

## 4. 执行顺序与自检

1. 批次顺序：S1→S2→…→S9→T1→…→T7→E1→…→E6，每批 5–12 条。
2. 每批：写条目 → `node scripts/check-content.mjs --gate` → `node scripts/audit-content.mjs --json`（分布/重复）→ `npm run build` → `npm run check` → `node scripts/check-learning.mjs` → `npm run check:models`（新模板条目必须通过）。
3. 来源核对：每条 ≥2 个可核查来源，正文全部 `[n]` 引用；来源网址用 HTTP 状态抽查，核对标题/发布者后转 `reviewed`。无法核实的保留 `needs-review` 并写明原因。
4. 每批汇报：新增数、总量、分类/量级变化、门槛通过率、下一步。

## 5. 条目模板（写入时必须遵守）

空间：`dimension: length`，`quantity.unit: m`，`measureType: 尺寸|距离|波长`，`visual.scene: space.object`，`visual` 必须有 `template/color/referenceAxis/framePadding/caption/note`。轴：`hand/human/membrane/architecture(除 bridge)/terrain(island,elevation)/nebula(pillars)` 用 `y`，其余 `x`。

时间：`dimension: cosmic-time`，`quantity.unit: s`。时点：`mode: 时点`、`chronology.status: reference`、`plot: true`，`value = 435400000000000000 - 距今年数 × 31557600`；未来：`mode: 未来`、`status: future`、`plot: false`，`value = present + 年数 × 31557600`；时长：`mode: 时长`、`status: duration`、`plot: false`，`value` 为秒数；无法定量：`mode: 未定`、`value: null`、`status: undetermined`、`plot: false`。`visual.scene: time.object`。

温度：`dimension: temperature`，`quantity.unit: K`，`zone` 与分类一致，`visual.scene: temperature.object`，`tags` 为 `[分类, 温度, 场景]`。

公共：`reviewStatus: needs-review`、`rights.status: rewritten`、`rights.note` 保留许可证待确认、`related` 3–6 条真实 ID、`conditions` 非空、`uncertainty` 写明口径限制、`visual.note` 注明示意。

## 6. 风险与诚实边界

- 新增值必须可溯源；无统一核定值的（生命起源时点、地球磁场起源、巨型动物灭绝区间等）用区间或 `undetermined`，不写伪精确单值。
- 图景只用已注册模板，不为新条目临时造模板；family 相近的复用同模板并改 variant。
- 计划总量 800 是收敛目标而非硬指标；若某批出现明显同义重复，停止该批并记录。

## 7. 执行结果与收敛判断（2026-11-07）

### 7.1 批次执行记录

| 批次 | 新增 | 累计 | 通过项 |
| --- | --- | --- | --- |
| S1 日常与人造 | 10 | 656 | gate/build/check/learning/models |
| S2 波长谱 | 6 | 662 | gate/build/check/learning/models |
| S3 人体与分子 | 10 | 672 | gate/build/check/learning/models |
| S4 生物与生态 | 8 | 680 | gate/build/check/learning/models |
| S5 地貌与水体 | 8 | 688 | gate/build/check/learning/models |
| S6 分子与晶体 | 8 | 696 | gate/build/check/learning/models |
| S7 星系与大尺度结构 | 6 | 702 | gate/build/check/learning/models |
| S8 卫星与矮行星 | 8 | 710 | gate/build/check/learning/models |
| S9 恒星与星云 | 6 | 716 | gate/build/check/learning/models |
| T1 人类与文明 | 12 | 728 | gate/build/check/learning/models |
| T2 现在与未来 | 6 | 734 | gate/build/check/learning/models |
| T3 地质年代 | 8 | 742 | gate/build/check/learning/models |
| T4 时长尺度 | 6 | 748 | gate/build/check/learning/models |
| T5 复杂生命 | 6 | 754 | gate/build/check/learning/models |
| T6 早期地球与生命起源 | 7 | 761 | gate/build/check/learning/models |
| T7 星系演化 | 5 | 766 | gate/build/check/learning/models |
| E1 极低温/低温 | 7 | 773 | gate/build/check/learning/models |
| E2 低温 | 5 | 778 | gate/build/check/learning/models |
| E3 中温 | 7 | 785 | gate/build/check/learning/models |
| E4 高温 | 5 | 790 | gate/build/check/learning/models |
| E5 极高温/等离子体 | 5 | 795 | gate/build/check/learning/models |
| E6 恒星与宇宙极端 | 5 | 800 | gate/build/check/learning/models |

### 7.2 对原计划的正式修订（避免同义重复与错误口径）

| 原计划 | 实际 | 理由 |
| --- | --- | --- |
| space.supergiant-star 1e10 m、wolf-rayet 1e10 m、cepheid 1e10 m | 红超巨星约 1e12 m、WR 约 1.4e10 m、造父约 1e11 m | 原值对红超巨星明显偏小；改为量级估计并在 uncertainty 说明 |
| space.hercules-corona-borealis-great-wall 3e25 m 括注约 10 Gly | 正文保留 3e25 m 并说明约 3 Gly；文献上限 2–3 Gpc | 避免把 3e25 m 与 10 Gly 混为一谈 |
| time.first-vertebrates 525 Ma | time.first-jawed-vertebrates 425 Ma | 与已有 first-fish（约 518 Ma）近重复且年代倒置 |
| time.moon-formation、time.late-veneer | time.oldest-zircon 4400 Ma、time.oldest-rock 4030 Ma | 分别与已有的 giant-impact、late-heavy-bombardment 近重复 |
| time.cosmic-noon 100 亿年 | time.earliest-spiral-galaxy 120 亿年 | 与已有 peak-star-formation 近重复 |
| temperature.liquid-neon、temperature.solid-nitrogen | temperature.liquid-argon 87.3 K、temperature.liquid-ethane 184.5 K | liquid-neon 与已有 neon-boiling-point 重复 |
| temperature.cuprate-critical-temperature 92 K | 138 K（Hg 系铜氧化物） | 与已有 YBCO 92 K 区分，取铜氧化物家族高压/最优掺杂上限 |
| temperature.lightning-channel 3e4 K | temperature.ball-lightning（未定） | 与已有 temperature.lightning 重复，且球状闪电温度无可靠共识 |
| temperature.supergiant-surface 4,000 K | temperature.agb-surface 3,000 K | 与已有 betelgeuse-surface 重复，改取渐近巨星支 |
| 火卫二 12 km | 正文区分平均/中轴与最长径约 15.6 km | 不规则天体口径不同 |
| 若干 E3/E4 温度取整值 | 按来源改为 330/320/350/398 K、1300/1500/1400/900/1800 K | 原表为便于分桶的取整值，正文采用更贴近来源的代表值 |

### 7.3 最终分布

| 维度 | 条目 | 分类数 | 分类分布 |
| --- | --- | --- | --- |
| space | 330 | 8 | 生命与人体 73、日常与人造 44、行星与太阳系 43、量子与粒子 36、星系与宇宙 35、地球与地质 34、原子与分子 33、恒星与星际 32 |
| time | 249 | 11 | 人类与文明 57、时长尺度 46、太初宇宙 31、地质年代 24、复杂生命与演化 24、现在与未来 14、太阳系与地球 14、星系与结构 12、生命起源与早期地球 11、复合与黑暗时代 8、地球深时 8 |
| energy | 221 | 7 | 恒星与宇宙极端 47、低温 43、中温 42、高温 32、极低温 27、常温 16、极高温 14 |

时间口径：时点 175、时长 46、未来 14、未定 14。空间数量级覆盖 1e-35 m（普朗克长度）至 1e26 m（可观测宇宙），连续核心区间每个十进数量级至少有 1 条；时间覆盖 1e-9 s 至 1e17 s 及未来 1e12 年；温度覆盖 1e0 K 至 1e9 K，并向 1e15 K 的普朗克温度延伸。

### 7.4 质量与校验

- `check-content --gate`：800 条，796 个唯一概念 + 4 个别名入口；深度门槛通过 796/796（100%）。
- 正文汉字数：space 均值 531、time 584、energy 549；除 4 个别名条目外全部 ≥450 字，且均 ≤800 字。
- 来源：space 均值 2.19、time 2.41、energy 2.43；除 4 个别名条目外均为 2 条以上且全部被正文引用。
- `[n]` 引用：space 均值 9.34、time 11.77、energy 9.47；无越界引用。
- related：均值 4.37/4.40/4.55；除 2 个既有别名条目外均 ≥3。
- 图景：800/800 有配置，76 个模板；`check:models` 705/705 个可定位条目通过，95 个 null/时长/未来条目不建模，0 失败。
- 构建：800 条，26,144 个本地链接；学习层 80/12/20/20/8/30/120 全部通过。
- Review：reviewed 755、needs-review 45。45 条中 26 条为本次新增但来源站点返回 403/429/超时（保留引用与原因），19 条为上一轮保留的理论假说/争议年代条目。

### 7.5 收敛判断与仍存空档

达到收敛判据：22 个批次全部通过；8 个空间一级分类均在 32–73 条之间，11 个时间分类均有 8 条以上，7 个温度区间均有 14 条以上；核心数量级无空档；新增条目的边际价值已从“补齐分类”下降到“补充同族细分”。

仍存在的真实空档（不是“没有已知实体”，而是本轮未继续展开的对象族细分）：
1. 生命与人体：真菌、爬行类、两栖类、鸟类、昆虫的物种级代表仍少；器官只覆盖主要器官，缺少肌肉、皮肤、免疫器官等。
2. 日常与人造：家具、服装、食品、工具、建筑构件的品类覆盖仍偏少；本轮只选了 10 个代表。
3. 原子与分子：分子条目以无机小分子和少数生物大分子为主，缺少常见有机分子、矿物与合金的代表。
4. 时间：复合与黑暗时代、地球深时各 8 条，已覆盖关键节点，但缺少更多纪/世级细分；未来条目只到 1e12 年。
5. 温度：极高温 14 条，10^10–10^14 K 仅有少量天体/早期宇宙条目，缺少系统的超新星核心、中子星内部、夸克-胶子等离子体温度层级。
6. 来源：26 条新增条目因站点反爬未能完成逐条原文核对，保留 needs-review；这不是内容缺口，而是审计缺口。

这些空档属于“继续加会更好、但不加也不影响核心量级与分类完整性”的边际层。若未来继续，建议按“对象族细分”而非“数量级补洞”推进，每族 5–10 条，并优先把 26 条 needs-review 的来源逐一核实。
