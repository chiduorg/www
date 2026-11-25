---
id: space.aluminum-alloy
title: 铝合金晶粒直径
titleEn: Aluminium alloy grain diameter
dimension: length
category: 原子与分子
summary: >-
  变形铝合金经过轧制、挤压和再结晶形成多晶组织；本页量的是再结晶晶粒直径，
  取 10 微米作为细晶典型值，不是铝的晶胞或析出相颗粒。
quantity:
  value: 1e-5
  unit: m
  measure: 晶粒直径
  approximate: true
displayValue: 约 10 μm（变形铝合金晶粒量级）
related:
  - space.crystal-lattice
  - space.diamond-unit-cell
  - space.hair
  - space.a4-paper
  - time.nanosecond
reviewStatus: reviewed
sources:
  - title: E112 Standard Test Methods for Determining Average Grain Size
    url: 'https://www.astm.org/e0112-10.html'
    publisher: ASTM International
    accessed: '2026-11-07'
  - title: Effect of Trace Sc Addition on Microstructure and Mechanical Properties of Al-Zn-Mg-Cu-Zr Alloy
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11820551/'
    publisher: Materials (MDPI) / PMC, Huang et al.
    accessed: '2026-11-07'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  以变形铝合金的再结晶等轴晶为对象，取平均晶粒直径约 10 微米；
  未再结晶、粗晶区或铸造组织不在此口径内。
uncertainty: >-
  文献中该合金的平均晶粒尺寸为 10–20 微米，10 微米是区间下沿附近的圆整值；
  不同合金牌号与加工历史可使晶粒从几微米变到几十微米。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：两条来源本地直连可访问；写作阶段已逐条用 WebFetch 打开核对数值。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: grain
  scene: space.object
  caption: 铝合金晶粒 · 约 10 μm 直径参照
  note: 等轴晶轮廓、晶界与颜色均为示意，标线表示晶粒直径，非按比例，非观测重建。
  color: '#a8b5bd'
  variant: aluminum
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 金属组织
---
## 它是什么

变形铝合金经过轧制、挤压和再结晶，形成由许多晶粒组成的多晶组织。本页量的是再结晶晶粒的直径，不是铝的晶胞，也不是析出相颗粒。取 10 微米作为变形铝合金晶粒的量级值，即 1×10⁻⁵ 米。

## 怎样知道

晶粒尺寸通常用金相截线法或电子背散射衍射统计，ASTM E112 给出了平均晶粒尺寸的测量与表达规则。[1] 一项 Al-Zn-Mg-Cu-Zr-Sc 合金研究测得，含 0.04% Sc 的 7050 合金平均晶粒尺寸为 10–20 微米。[2] 这说明 10 微米正好落在该合金细晶区的下沿附近。电子背散射衍射还能给出再结晶分数，只有把再结晶晶粒单独统计，10 微米才有可比性。[2]

## 数值与口径

10 微米 = 0.01 毫米 = 10 000 纳米，也约等于 ASTM 晶粒号 G10 的 11 微米。[1] 铝合金晶粒随加工历史变化很大：充分再结晶的薄板可到 10 微米量级，未再结晶或粗晶区可达几十微米。[2] 因此该值标为近似值，只代表“变形铝合金的细晶典型”，不能套到所有铝制品。若晶粒为等轴状，10 微米的等效晶粒面积约 100 平方微米，1 平方毫米截面约含 1 万个晶粒。[1]

## 常见误解

第一，把晶粒与晶胞混淆；铝的晶胞边长约 0.4 纳米，晶粒包含数万个晶胞。第二，把晶粒尺寸与析出相尺寸混淆；Al₃(Sc,Zr) 等析出颗粒远小于晶粒。[2] 第三，认为“10 微米”是铝合金的强度或纯度指标；它只是组织尺度。晶粒尺寸也不能直接换算成硬度。

## 与其他尺度的关系

10 微米约为头发丝 100 微米的 1/10，约为人体细胞 20 微米的一半，与红细胞 7.5 微米同量级。它约相当于 2.5 万个 0.4 纳米的铝晶胞边长。与 A4 纸 297 毫米相比小约三万倍。把本页与晶格间距、金刚石晶胞和 A4 纸并读，可区分原子尺度、晶粒尺度和日常尺度。与钢、钛合金的 10 微米晶粒并置，可看出不同金属在相同尺度下组织形貌仍有差别。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

按 BIPM 定义的真空光速 299,792,458 m/s 计算，光穿过这一长度约需 0.000033 纳秒，在时间轴上量级接近「纳秒」。[3]
