---
id: space.mof-pore
title: MOF 孔道直径
titleEn: MOF pore diameter
dimension: length
category: 原子与分子
summary: >-
  金属有机框架（MOF）是由金属节点和有机配体连成的多孔晶体；
  本页量的是孔道直径，取 2 纳米，不是晶体颗粒尺寸或骨架壁厚。
quantity:
  value: 2e-9
  unit: m
  measure: 孔道直径
  approximate: true
displayValue: 约 2 nm（代表性 MOF 孔道）
related:
  - space.crystal-lattice
  - space.graphene
  - space.carbon-nanotube
  - space.quantum-dot
reviewStatus: reviewed
sources:
  - title: 'Metal-organic frameworks: Structures and functional applications'
    url: 'https://mof.ustc.edu.cn/_upload/tpl/10/58/4184/template4184/fulltexts/136.pdf'
    publisher: USTC / Jiao et al.
    accessed: '2026-11-07'
  - title: 'Hierarchically porous metal–organic frameworks: synthetic strategies and applications'
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8290954/'
    publisher: National Science Review / PMC, Feng et al.
    accessed: '2026-11-07'
conditions: >-
  以代表性微孔 MOF 的孔道为对象，取孔径约 2 纳米；
  介孔 MOF、分级孔 MOF 或大孔骨架的孔径可明显更大，需另作说明。
uncertainty: >-
  MOF 孔径可从小于 1 纳米到近 10 纳米，2 纳米是微孔与介孔分界附近的圆整值；
  不同拓扑、配体长度和金属节点会给出不同孔径。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：两条来源本地直连可访问；写作阶段已逐条用 WebFetch 打开核对数值。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: crystal-lattice
  scene: space.object
  caption: MOF 孔道 · 约 2 nm 直径参照
  note: 金属节点、有机配体与孔道均为示意，标线表示孔道直径，非晶体颗粒尺寸，非按比例，非观测重建。
  color: '#8fae9b'
  variant: mof
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 纳米
---
## 它是什么

金属有机框架（MOF）是由金属节点和有机配体连成的多孔晶体。本页量的是孔道直径，取 2 纳米，即 2×10⁻⁹ 米；它不是 MOF 晶体的外形尺寸，也不是骨架壁厚，更不是单个金属节点的尺寸。

## 怎样知道

孔道尺寸由气体吸附、X 射线衍射和结构解析确定。综述指出，MOF 的孔尺寸通常可调，常见范围约 0–3 纳米，最大可到 9.8 纳米。[1] 另一篇综述说明，早期 MOF 多为微孔材料，孔径小于 2 纳米，例如 MOF-5 呈典型的 I 型氮气吸附等温线。[2] 2 纳米正好位于微孔与介孔的分界附近。氮气吸附通常在 77 K 测等温线，用 BET 或 DFT 模型反推孔径分布；晶体结构解析则给出孔道的几何形状。[1][2]

## 数值与口径

2 纳米 = 20 埃 = 2×10⁻⁹ 米。按 IUPAC 的孔径分类，小于 2 纳米为微孔，2–50 纳米为介孔；因此 2 纳米是分界值，而不是所有 MOF 的统一孔径。[1][2] 不同拓扑、配体长度和金属节点会给出不同孔径；同一个 MOF 还可能同时具有小孔与大孔。取 2 纳米只表示“代表性微孔—小介孔口径”。2 纳米孔道在 1 克 MOF 中可提供数千平方米比表面积，这是 MOF 高吸附容量的结构基础。[1]

## 常见误解

第一，把孔道直径当成晶体颗粒直径；MOF 晶体可从纳米级到微米级，远大于孔道。第二，把孔道直径当成骨架壁厚；壁厚是金属节点与配体网络的厚度，不是空腔尺寸。第三，以为所有 MOF 孔径都是 2 纳米；实际可从小于 1 纳米到近 10 纳米。[1]

## 与其他尺度的关系

2 纳米约为石墨烯单层 0.335 纳米的 6 倍，约为碳纳米管直径 1 纳米的两倍，却只有量子点 5 纳米的约 0.4 倍。它比红细胞 7.5 微米小约 3750 倍，比头发丝 100 微米小约五万倍。把本页与晶格间距、石墨烯和碳纳米管并读，可区分“晶格—孔道—颗粒”三种尺度。2 纳米孔径与碳纳米管 1 纳米、量子点 5 纳米同处“几纳米”区间，但 MOF 的孔是晶体内部的空腔，不是独立颗粒。
