---
id: space.bronze-grain
title: 青铜晶粒直径
titleEn: Bronze grain diameter
dimension: length
category: 原子与分子
summary: >-
  青铜是铜锡合金，本页量的是铸态青铜中 α 相晶粒的直径，取 10 微米作为量级代表；
  它不是枝晶臂间距，也不是整块铸件的尺寸。
quantity:
  value: 1e-5
  unit: m
  measure: 晶粒直径
  approximate: true
displayValue: 约 10 μm（铸态青铜晶粒量级）
related:
  - space.crystal-lattice
  - space.nacl-crystal
  - space.hair
  - space.cell
reviewStatus: reviewed
sources:
  - title: Study on the Selective Laser Melting of CuSn10 Powder
    url: 'https://mdpi-res.com/d_attachment/materials/materials-11-00614/article_deploy/materials-11-00614.pdf?version=1525348837'
    publisher: Materials (MDPI) / Deng et al., Tsinghua University
    accessed: '2026-11-07'
  - title: In-Situ Fabrication, Microstructure and Mechanical Performance of Nano Iron-Rich Precipitate Reinforced Cu and Cu Alloys
    url: 'https://www.mdpi.com/2075-4701/12/9/1453'
    publisher: Metals (MDPI) / Li et al.
    accessed: '2026-11-07'
conditions: >-
  以铸态或近铸态铜锡合金的 α 相晶粒为对象，取等轴晶直径约 10 微米；
  冷却速度、合金元素和后续变形会改变晶粒尺寸，不适用于所有青铜制品。
uncertainty: >-
  文献中的 α 相晶粒可从约 5 微米到约 23 微米，10 微米是区间中段的圆整代表值；
  枝晶组织与等轴晶组织也不能用同一读数直接比较。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：至少一条来源本地直连可访问；受反爬限制的来源已在写作阶段用 WebFetch 打开核对。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: grain
  scene: space.object
  caption: 青铜晶粒 · 约 10 μm 直径参照
  note: 晶粒轮廓、孪晶与颜色均为示意，标线表示等轴晶直径，非枝晶臂间距，非按比例，非观测重建。
  color: '#b08968'
  variant: bronze
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 金属组织
---
## 它是什么

青铜是铜锡合金。铸态青铜凝固后形成由 α 相等组成的多晶组织，本页量的是 α 晶粒的直径，不是枝晶臂间距，也不是整块铸件的尺寸。取 10 微米作为铸态青铜晶粒的量级代表，即 1×10⁻⁵ 米。

## 怎样知道

晶粒尺寸靠金相显微或电子背散射衍射统计。增材制造的 CuSn10 样品中，α 铜相晶粒约 5 微米。[1] 另一项铸态 Cu-10Sn 合金研究显示，经细化后等轴晶平均尺寸约 23 微米，而未细化时呈枝晶组织。[2] 两者说明青铜晶粒可从几微米到几十微米，10 微米位于这一区间的中段。由于铸态组织常含枝晶与偏析，统计前需先区分等轴晶区与柱状晶区，否则平均值会被拉偏。[1][2]

## 数值与口径

10 微米 = 0.01 毫米 = 10 000 纳米。5 微米与 23 微米分别约为本页取值的 0.5 倍和 2.3 倍，所以“10 微米量级”覆盖了不同制备条件。[1][2] 铸造冷却速度、合金元素和后续变形会显著改变晶粒大小；同一铸件表层与中心也可能不同，读数必须注明状态与位置。按面积法，10 微米的等效晶粒在 1 平方毫米截面上约有 1 万个，说明视场选择对结果影响明显。[1]

## 常见误解

第一，把晶粒直径与枝晶臂间距混为一谈；枝晶组织用臂间距描述，等轴晶才用直径。第二，把晶粒尺寸当成相区尺寸；α 相、δ 相与铅颗粒是不同对象。[2] 第三，把 10 微米当成青铜强度；晶粒大小只是组织参数，强度还取决于成分、缺陷与相分布。

## 与其他尺度的关系

10 微米约为红细胞 7.5 微米的 1.3 倍，约为人体细胞 20 微米的一半，也只有头发丝 100 微米的 1/10。它相当于约 5 万个 0.2 纳米的晶格间距。与 NaCl 晶体 0.282 纳米的晶胞边长相比，晶粒横跨约三万五千个晶胞。继续阅读晶格间距、NaCl 晶体与头发丝，可把“晶胞—晶粒—日常物体”串起来。青铜晶粒与钢晶粒同处 10 微米量级，但青铜更常出现枝晶与粗大第二相，组织形貌并不相同。[1][2]
