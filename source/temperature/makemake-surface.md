---
id: temperature.makemake-surface
title: 鸟神星表面温度
titleEn: Makemake surface temperature
dimension: temperature
category: 极低温
summary: >-
  鸟神星（Makemake）的表面温度量级约 30 K（−243 °C）。这是远日天体表面平衡温度的代表值，不是全球同时均温；后续热模型给出的约 37 K 也说明其表面存在温差。
quantity:
  value: 30
  unit: K
  measure: makemake-surface-temperature
  measureLabel: 鸟神星表面温度量级
  approximate: true
displayValue: 约 30 K（−243.15 °C）
related:
  - temperature.eris-surface
  - temperature.pluto-surface
  - temperature.triton-surface
  - temperature.methane-boiling
  - space.moon
reviewStatus: reviewed
sources:
  - title: No global Pluto-like atmosphere on dwarf planet Makemake from a stellar occultation
    url: 'https://elt.eso.org/public/archives/releases/sciencepapers/eso1246/eso1246a.pdf'
    publisher: ESO / Nature
    accessed: '2026-11-07'
  - title: Rotationally resolved spectroscopy of dwarf planet (136472) Makemake
    url: 'https://www.aanda.org/articles/aa/full_html/2015/05/aa25575-14/aa25575-14.html'
    publisher: Astronomy & Astrophysics
    accessed: '2026-11-07'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: 远日矮行星表面的辐射平衡温度代表值，取高反照率、弱日照条件下的量级。
uncertainty: 掩星大气模型采用约 30 K；后续光谱与热模型给出约 37 K，不同地形与反照率会造成数开尔文差异。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：至少一条来源本地直连可访问；受反爬限制的来源已在写作阶段用 WebFetch 打开核对。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: planet-environment
  scene: temperature.object
  caption: 鸟神星表面 · 约 30 K 温度示意
  note: 星球表面、甲烷霜层与颜色为示意，非按比例，非观测重建。
  color: '#c9b8a8'
  variant: makemake
  backdrop: deep-space
zone: 极低温
tags:
  - 极低温
  - 温度
  - 行星
---

## 它是什么

鸟神星是柯伊伯带中的矮行星，表面以甲烷冰为主，并可能有乙烷和氮冰。它离太阳约 45.8 AU，阳光很弱，表面温度只有几十开尔文。[1][2]

## 怎样得到这个读数

掩星与热辐射模型是主要手段。Ortiz 等人在解释鸟神星掩星资料的甲烷大气模型时，采用约 30 K 的表面温度作为基准。[1] Lorenzi 等人则根据光谱与热模型给出约 37 K 的表面温度估计。[2] 两者给出的温度都在 30–37 K 范围内，而非单一固定值。热红外观测只能给出盘平均通量，表面反照率分布与自转会影响反演；掩星则提供直径与形状，二者结合才能把亮温换算成温度，单一波段很难独立给出可靠结果。

## 数值与口径

30 K 换算为 −243.15 °C。30 K 是“平衡温度量级”的代表值，适用于反照率较高、日照较弱的远日天体；它不等于某个经度或纬度的实测值。[1][2] 不同地形、反照率与轨道相位会造成数开尔文的差异。30 K 与 37 K 的差别不只来自测量误差，也来自模型假设：掩星大气模型取整盘平均，而光谱热模型会区分不同反照率区域，二者并非同一口径。

## 常见误解

第一，把 30 K 当成鸟神星的最低温度；表面暗区可以更暖或更冷。第二，把 30 K 与液氮的 77.34 K 或甲烷沸点 111.7 K 混为一谈；那些是地球实验室的相变温度。第三，把表面温度当成内部温度；内部可能因放射性加热而更暖。[1][2] 第四，把 30 K 与 30 °C 混淆；30 K 约等于 −243 °C，远低于水的冰点。

## 与其他尺度的关系

30 K 约为海卫一 38 K 的 0.79 倍，低于冥王星的约 44 K，高于绝对零度，也明显高于液氦的 4.22 K。[1][2] 它约为甲烷沸点 111.7 K 的 0.27 倍；与 37 K 的模型值相比，30 K 约低 7 K。30 K 约为宇宙微波背景 2.725 K 的 11 倍，约为液氦 4.22 K 的 7.1 倍；与液氮 77.34 K 相比只有约 0.39 倍。它的轨道半长径约 45.8 AU，阳光强度约为地球的 1/2100。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
