---
id: space.perovskite-cell
title: 钙钛矿电池吸收层厚度
titleEn: Perovskite solar cell absorber thickness
dimension: length
category: 原子与分子
summary: >-
  钙钛矿电池用一层钙钛矿薄膜吸收光；本页量的是吸收层膜厚，取 1 微米，
  不是整块电池或组件尺寸，也不是钙钛矿晶粒直径。
quantity:
  value: 1e-6
  unit: m
  measure: 吸收层厚度
  approximate: true
displayValue: 约 1 μm（钙钛矿吸收层厚度）
related:
  - space.quantum-dot
  - space.graphene
  - space.crystal-lattice
  - space.hair
reviewStatus: reviewed
sources:
  - title: Amphoteric coplanar conjugated molecules enabling efficient and stable perovskite/silicon tandem solar cells
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12368124/'
    publisher: Nature Communications / PMC, Yang et al.
    accessed: '2026-11-07'
  - title: Carrier lifetimes of >1 μs in Sn-Pb perovskites enable efficient all-perovskite tandem solar cells
    url: 'https://www.science.org/doi/full/10.1126/science.aav7911'
    publisher: Science / AAAS, Tong et al.
    accessed: '2026-11-07'
conditions: >-
  以薄膜钙钛矿太阳能电池的吸收层为对象，取约 1 微米的膜厚；
  不同带隙、不同器件结构（单结或叠层）的最优厚度并不相同，组件尺寸另计。
uncertainty: >-
  文献中吸收层厚度可从数百纳米到 1 微米以上，1 微米是叠层器件常用的圆整值；
  膜厚还受织构衬底、涂布工艺与结晶质量影响。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：至少一条来源本地直连可访问；受反爬限制的来源已在写作阶段用 WebFetch 打开核对。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: device
  scene: space.object
  caption: 钙钛矿电池 · 约 1 μm 吸收层厚度参照
  note: 层状器件、界面与厚度标线均为示意，非按比例，非观测重建。
  color: '#c9a66b'
  variant: perovskite
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 纳米
---
## 它是什么

钙钛矿太阳能电池用一层钙钛矿薄膜吸收光。本页量的是吸收层的厚度，取 1 微米，即 1×10⁻⁶ 米；它不是整块电池或组件的尺寸，也不是钙钛矿晶粒的直径。

## 怎样知道

吸收层厚度由截面显微或膜厚测量确定。在钙钛矿/硅叠层电池中，为覆盖硅片表面的金字塔织构，宽带隙钙钛矿膜通常需要做到 1 微米厚。[1] 另一项全钙钛矿叠层研究把低带隙 Sn–Pb 钙钛矿吸收层增厚到 1 微米，同时保持开路电压和填充因子。[2] 两处都把 1 微米当作器件级膜厚，而不是材料块体尺寸。截面扫描电镜可直接读出吸收层上下界面的距离，但样品制备可能改变软质钙钛矿的厚度，需与光学测量互相校验。[1]

## 数值与口径

1 微米 = 0.001 毫米 = 1 000 纳米。它描述薄膜的法向厚度，横向可以覆盖整个电池片。[1] 吸收层过薄会吸光不足，过厚则会增加载流子复合与串联电阻，因此厚度是器件设计参数，不是固定材料常数。[2] 同一种钙钛矿在不同器件结构中可取数百纳米到 1 微米以上。1 微米膜厚在 1 平方厘米面积上只有约 0.1 立方毫米的材料，因此薄膜均匀性对器件良率很关键。[1][2]

## 常见误解

第一，把 1 微米当成电池组件厚度；玻璃、封装和电极都远厚于吸收层。第二，把膜厚当成晶粒尺寸；钙钛矿晶粒可跨越多个晶界，尺寸与膜厚并不等同。第三，把 1 微米当成所有钙钛矿电池的固定值；不同带隙与结构的最优厚度不同。[1][2]

## 与其他尺度的关系

1 微米约为二硫化钼单层 0.65 纳米的 1500 倍，约为量子点 5 纳米的 200 倍，却只有人体细胞 20 微米的 1/20、头发丝 100 微米的 1/100。它约为碳纤维直径 7 微米的 1/7。把本页与石墨烯、量子点和细胞并读，能看到“纳米薄膜”与“微米器件”之间的过渡。与硅电池数百微米的硅片厚度相比，1 微米吸收层薄了约两个数量级。
