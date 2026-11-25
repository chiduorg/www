---
id: temperature.wet-bulb-temperature
title: 湿球温度 35 ℃：热应激的物理上限
titleEn: Wet-bulb temperature at 35 °C
dimension: temperature
category: 高温
summary: 湿球温度 35 ℃ 是湿热环境中接近人体散热上限的理论阈值；它不等于气温 35 ℃，也不代表所有人都会在同一时刻中暑。
quantity:
  value: 308
  unit: K
  measure: 35 ℃湿球温度
  approximate: true
  measureLabel: 308 K（35 ℃湿球温度）
displayValue: 308 K（35 ℃湿球温度）
related:
  - temperature.human-body-temperature
  - temperature.heatstroke-core
  - temperature.sea-surface
  - temperature.marine-heatwave
  - space.cloud
  - mass.water-molecule
reviewStatus: reviewed
sources:
  - title: 'Climate Change 2021: The Physical Science Basis, Chapter 11'
    url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-11/'
    publisher: IPCC AR6 WG1
    accessed: '2026-11-23'
  - title: "Too Hot to Handle: How Climate Change May Make Some Places Too Hot to Live"
    url: 'https://science.nasa.gov/earth/climate-change/too-hot-to-handle-how-climate-change-may-make-some-places-too-hot-to-live/'
    publisher: "NASA Science"
    accessed: '2026-11-23'
  - title: "Temperature measurement"
    url: "https://www.medlineplus.gov/ency/article/003400.htm"
    publisher: "U.S. National Library of Medicine / MedlinePlus"
    accessed: '2026-11-24'
  - title: "Kelvin: Introduction"
    url: "https://www.nist.gov/si-redefinition/kelvin-introduction"
    publisher: "NIST"
    accessed: '2026-11-24'
conditions:
  medium: 空气
  measurementSite: 遮阳、通风、湿球温度计球部
  humidity: 接近饱和或高湿
  basis: 湿球温度，不是干球气温
review:
  method: source-check
  date: '2026-11-23'
  notes:
    - '2026-11-24 L2 深化：补干球/湿球/热指数区分、生理边界与跨轴入口；量值与审核状态保持不变。'
    - reviewed 指编辑性来源核对，不是外部同行评审；临床与工程参数必须以具体指南和设备说明书为准。
rights:
  status: rewritten
  note: 依据所列资料新撰，正文以 CC BY 4.0 提供；第三方来源仅用于事实核对。
uncertainty: 35 ℃湿球温度是理论极限附近的风险标志，不是精确死亡阈值；年龄、健康、补水、风速与暴露时长都会改变风险。
visual:
  template: heat-map
  profile: humid-heat
  caption: 湿润环境中的蒸发散热与湿球温度示意
  note: 画面为解释性示意，非按比例、非观测重建；颜色、粒子、光晕与流动均为讲解服务，不代表真实测量。
  color: '#c46b4e'
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 环境
---
## 它是什么

湿球温度不是普通气温。它描述空气在湿润球体表面通过蒸发达到的平衡温度，同时受气温、湿度、风速和辐射影响。当空气接近饱和时，汗水难以蒸发，湿球温度就会接近气温；35 ℃湿球温度因此被用作“人体散热接近极限”的警示标志。[1][2] 它不是“湿度百分比”，也不是“今天有多热”的体感评分。

## 怎样测

气象站用包着湿纱布的温度计测量湿球温度：纱布上的水蒸发会带走热量，温度计读数下降，直到蒸发与周围空气的传热达到平衡。现代观测也会由气温、湿度、气压和风速计算湿球温度。[1][2] 测量时要遮阳、保持通风，并记录球部高度和周围环境；在太阳直射或风很小的条件下，读数不能直接当成标准湿球温度。

## 35 ℃为什么是危险标志

人体靠出汗蒸发散热。空气越湿，汗液越难蒸发，核心温度就越难维持。湿球温度 35 ℃意味着环境已经接近“蒸发散热失效”的理论边界；这不是说一到 35 ℃所有人都会立刻死亡，而是说即使健康成年人，长时间暴露也会迅速积累热应激。[1][2] 婴幼儿、老年人、户外劳动者和慢性病患者的安全余量更小。

## 干球、湿球与热指数

干球温度就是普通温度计读数；湿球温度把湿度对蒸发的影响算进去；热指数则是面向公众的“体感温度”经验指标，三者不是同一个物理量。[1][2] 在干燥空气里，气温 35 ℃时湿球温度可能只有 20 多摄氏度；在高湿空气里，气温 35 ℃可能接近湿球 35 ℃。只看最高气温，会漏掉湿度这一半的信息。

## 误差与条件

35 ℃湿球温度是理论极限附近的风险标志，不是精确死亡阈值。[1][2] 风速、辐射、补水、衣着、活动强度和暴露时长都会改变风险；同样的湿球温度，在阴影里和太阳下不是一回事。连续多日高湿高温比单日峰值更危险，夜间最低温不下降会让身体没有恢复窗口。测量误差和模型差异也存在，所以它适合做预警，不适合做个人诊断。把湿球温度写进预报时，必须同时说明测量/计算方式、持续时间与适用人群，否则一个数字会被读成并不存在的“精确安全线”。

## 五轴对照

在温度轴，它高于正常核心温度，低于热射病核心温度阈值；与 temperature.heatstroke-core 对照，能看出“环境约束”和“体温本身”不是同一个量。在空间轴，云、水汽和城市热岛改变辐射与蒸发，可去 space.cloud；在质量轴，水分子是蒸发与潜热的微观基础，可去 mass.water-molecule；在海洋轴，海表温度与海洋热浪提供大尺度背景，可去 temperature.sea-surface 与 temperature.marine-heatwave。

## 怎么继续走

想看正常体温的口径，去 temperature.human-body-temperature；想看热射病的核心温度，去 temperature.heatstroke-core；想看海表与海洋热浪，去 temperature.sea-surface。把“气温”换成“湿球温度”，热风险才会从天气数字变成生理问题。

## 延伸核对

补充的来源 [3]（U.S. National Library of Medicine / MedlinePlus）、[4]（NIST） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
