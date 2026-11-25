---
id: space.pion
title: π介子（派介子）
titleEn: Pion (Pi Meson)
dimension: length
category: 量子与粒子
summary: π介子是最轻的介子，由夸克与反夸克组成。它的质量可精确测量，按康普顿波长换算约1.4飞米；这个特征长度与原子的核尺度有关，但不是π介子的硬球半径。
quantity:
  value: 1.4138169306541309e-15
  unit: m
  measure: 以带电π介子质量换算的约化康普顿波长ħ/(mc)
  approximate: true
displayValue: 约 1.414 fm（带电π介子约化康普顿波长）
related:
  - space.proton
  - space.electron-compton
  - space.strong-force
  - space.quark
  - time.nuclear-timescale
reviewStatus: reviewed
sources:
  - title: PDG 2025 — π± Listings
    url: 'https://pdg.lbl.gov/2025/listings/rpp2025-list-pi-plus-minus.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: meson
    url: 'https://www.britannica.com/science/meson'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 2022 CODATA — Reduced Planck constant in eV s
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?hbarev'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: pion
  icon: ⭕
  relatedLabels: 强相互作用、质子、夸克、量子色动力学、原子核、汤川势
conditions: 本条长度由带电π介子质量按约化康普顿波长换算，适用于与核尺度比较；不代表强子半径、衰变长度或相互作用截面。
uncertainty: 质量不确定度约0.00018 MeV，换算长度误差远小于1%；但康普顿波长是理论口径，不是测得的几何半径，因此不给出“半径误差”。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；用WebFetch核对PDGπ介子列表、Britannica介子页与NIST常数页。
    - 质量取139.57039 MeV，长度明确为约化康普顿波长而非粒子半径。
  originalQuantity:
    value: 2e-15
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: wave
  variant: reduced
  color: '#c9b294'
  referenceAxis: x
  caption: π介子约化康普顿波长ħ/(mc)
  note: 标线相隔一个弧度的相位长度，非完整波长；不代表硬球直径，振幅和动画速度为示意；图为示意，非按比例，非观测重建。
  framePadding: 0.27
  sourceMeasure: 以带电π介子质量换算的约化康普顿波长ħ/(mc)
  scene: space.object
measureType: 波长
tags:
  - 量子与粒子
  - 波长
  - 原子核
---
## π介子是什么

π介子是最轻的介子，由夸克与反夸克组成，参与强相互作用。带电π介子质量为 139.57039 MeV/c²，平均寿命约 2.603×10⁻⁸ 秒，主要衰变为缪子与中微子；它的质量是束缚态的整体性质，而不是组成夸克质量的简单相加。[1][2]

## 数值与口径

本页采用 PDG 2025 的带电π介子质量 139.57039±0.00018 MeV/c²，按约化康普顿波长 ħ/(mc) 换算：ħc≈197.3269804 MeV·fm，除以质量得约 1.414 飞米。[1][3] 这是定义明确的特征长度；若用普通康普顿波长 h/(mc)，结果大 2π 倍，约 8.88 飞米。[1][3] 两种写法描述同一质量，但数值差一个 2π，跨条目比较时不能混用。

## 为什么这个长度与强作用有关

1935 年汤川秀树用介子交换解释核力，1947 年鲍威尔团队在宇宙射线的核乳胶中识别出π介子径迹，介子假说由此得到确认。[2] 今天我们知道核力来自夸克与胶子，但π介子仍是描述低能核力的重要有效自由度；其康普顿波长约 1.4 飞米，与原子核的尺度同量级。[2][3] 这解释的是相互作用范围，不是“π介子有 1.4 飞米直径”。π介子不稳定，寿命远短于典型核过程，因此它作为交换粒子只能以虚粒子方式出现在核力描述中。

## 常见误解

误解之一是把 1.414 飞米当成π介子的硬球半径。质子半径是用不同方法定义的另一个量，不能与康普顿波长直接互换。[1][2] 误解之二是把“介子”当成基本粒子；它是夸克—反夸克束缚态。[2]

## 与其他尺度的关系

它与质子尺度同量级（约 1 飞米），却比原子（约 10⁻¹⁰ 米）小五个数量级；与电子康普顿波长（约 2.426×10⁻¹² 米）相比则小约 1700 倍。[1][3] 沿尺度轴，π介子把亚原子粒子与原子核尺度连接起来；1.4 飞米与核子间距同量级，这也是介子交换能给出合理核力范围的直观原因。

按 BIPM 定义的真空光速 299,792,458 m/s 计算，光穿过这一长度约需 4.7e-15 纳秒，在时间轴上量级接近「强相互作用时间」。[4]
