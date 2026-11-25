---
id: temperature.lunar-permanent-shadow
title: 月球永久阴影区温度
titleEn: Lunar permanently shadowed region temperature
dimension: temperature
category: 极低温
summary: >-
  月球永久阴影区的坑底温度量级约 40 K（−233 °C）。这是极区永久阴影坑底的冷阱温度参照，不是整个月球的表面温度。
quantity:
  value: 40
  unit: K
  measure: lunar-permanent-shadow-floor-temperature
  measureLabel: 月球永久阴影坑底温度量级
  approximate: true
displayValue: 约 40 K（−233.15 °C）
related:
  - temperature.moon-night
  - temperature.moon-day
  - temperature.space-background
  - temperature.absolute-zero
  - space.moon
reviewStatus: reviewed
sources:
  - title: The Lunar Reconnaissance Orbiter Diviner Lunar Radiometer Experiment
    url: 'https://luna1.diviner.ucla.edu/~dap/pubs/043.pdf'
    publisher: Space Science Reviews
    accessed: '2026-11-07'
  - title: 'RESOLVE: an International Mission to Search for Volatiles at the Lunar Poles'
    url: 'https://ntrs.nasa.gov/api/citations/20130014492/downloads/20130014492.pdf'
    publisher: NASA NTRS
    accessed: '2026-11-07'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: 月球极区永久阴影坑底，近地表、无直接阳光照射的冷阱环境。
uncertainty: 坑底最低可到约 25 K；40 K 是量级参照，纬度、坑口大小和遮挡程度都会改变读数。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：本地直连受站点反爬/限流限制，写作阶段已用 WebFetch 逐条打开核对数值。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: planet-environment
  scene: temperature.object
  caption: 月球极区阴影坑 · 约 40 K 温度示意
  note: 坑底阴影、冰霜与颜色为示意，非按比例，非观测重建。
  color: '#9aa7b4'
  variant: moon
  backdrop: frost
zone: 极低温
tags:
  - 极低温
  - 温度
  - 行星
---

## 它是什么

月球极区有一些坑底永远照不到阳光，被称为永久阴影区（PSR）。这些区域像冷阱一样捕获水冰和其他挥发物，坑底温度可以低到几十开尔文。[1][2]

## 怎样得到这个读数

LRO 上的 Diviner 红外辐射计对月球表面进行热成像。Paige 等人的仪器论文指出，较大永久阴影坑最冷部分的日最高表面温度约为 40–90 K，具体取决于纬度和坑形。[1] NASA 的 RESOLVE 任务资料也把永久阴影坑的温度记为低于 40 K。[2] Diviner 在月球轨道上扫描地表红外辐射，空间分辨率约数公里；坑底被遮挡，直接视场有限，通常结合地形模型与多次过境数据拼接，单次过境很难覆盖整个坑底。

## 数值与口径

40 K 换算为 −233.15 °C。这里的 40 K 是“坑底温度量级”的下限参照：实际坑底可以更冷，Diviner 观测到的最低值约 25 K；40 K 也不是整个月球的平均温度。[1][2] 日照面白天可接近 390 K，与阴影区形成极大反差。冷阱温度还受坑壁多次散射的红外辐射影响；越深、越靠极区的坑底越冷，40 K 只是较大坑底的日最高温度下限。[1][2]

## 常见误解

第一，把 40 K 当成月球全球温度；月球昼侧可达约 390 K、夜侧约 100 K。第二，把永久阴影区当成永远绝对零度；它仍高于 0 K，只是缺乏阳光。第三，把 40 K 当成所有坑底都一样；纬度、坑口大小和遮挡程度都会改变读数。[1][2] 第四，把永久阴影与永久黑暗等同；阴影指没有阳光直射，坑壁仍可能接收散射光与地球反照。

## 与其他尺度的关系

40 K 约为液氮沸点 77.34 K 的 0.52 倍，高于海卫一的 38 K，低于冥王星的约 44 K，也远高于液氦的 4.22 K 与绝对零度。[1][2] 这说明同一颗天体上也能出现从极冷阴影到高温昼侧的跨度；画面只作示意。40 K 约为宇宙微波背景 2.725 K 的 15 倍，约为液氦 4.22 K 的 9.5 倍，与海卫一 38 K 接近；它仍比绝对零度高约 40 K。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
