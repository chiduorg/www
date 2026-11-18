---
id: temperature.k-type-star
title: K 型星表面
titleEn: K-type star effective temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  K 型星是光谱分类中介于 G 型与 M 型之间的恒星，表面有效温度约 3,900–5,200 K。 本条取约 4,000 K
  作为偏冷端的锚点；它是光球有效温度，不是色温度或某局部的实测值。
quantity:
  value: 4000
  unit: K
  measure: K 型星光球有效温度
  approximate: true
  measureLabel: 有效温度
  range:
    min: 3900
    max: 5200
    unit: K
displayValue: '约 4,000 K（约 3,727 °C）'
related:
  - temperature.sun-surface
  - temperature.f-type-star
  - temperature.b-type-star
  - temperature.red-dwarf-surface
  - temperature.brown-dwarf
reviewStatus: reviewed
sources:
  - title: 'The Spectral Sequence'
    url: 'https://openstax.org/books/astronomy-2e/pages/17-3-the-spectral-sequence'
    publisher: 'OpenStax Astronomy 2e（CC BY 4.0）'
    accessed: '2026-11-07'
  - title: >-
      A Modern Mean Dwarf Stellar Color and Effective Temperature Sequence,
      version 2022.04.16
    url: 'https://www.pas.rochester.edu/~emamajek/EEM_dwarf_UBVIJHK_colors_Teff.txt'
    publisher: 'University of Rochester, E. Mamajek'
    accessed: '2026-11-06'
conditions: >-
  对象为主序 K 型星（约 K0–K9）；温度指光球有效温度，由光谱分类、角直径、视差和测热辐射流 结合大气模型拟合得到。4,000 K
  是偏冷端锚点，不代表所有 K 型星都处于这一温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '核对 NMSU 分类页：K 型温区约 3,900–5,200 K，金属线强、氢线弱。'
    - '核对 Mamajek 表：K0V 约 5,270 K、K5V 约 4,440 K、K7V 约 4,100 K。'
    - '取 4,000 K 作为偏冷端锚点，range 保留 3,900–5,200 K，说明类别内部连续变化。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 'K 型星的有效温度随亚型、质量、年龄和金属丰度变化，K0 与 K9 可差约一千多开尔文； 4,000 K 只表示类别冷端附近的量级，不能替代逐星拟合。'
visual:
  template: stellar-atmosphere
  scene: temperature.object
  caption: K 型星光球与橙色外观示意
  note: 以有效温度和光谱类别示意恒星表面，不对应某颗 K 型星；画面非按比例， 颜色、颗粒感和光晕均为解释性示意。
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 橙色的主序星

K 型星是光谱分类序列中介于 G 型太阳与 M 型红矮星之间的一类恒星，光谱以较强的金属线和较弱的氢线为特征。[1] 它们质量通常低于太阳，表面呈橙色，主序阶段可以持续很久。把它们统称为“橙色星”只是外观描述，真正的分类依据是谱线。

## 有效温度怎样得到

恒星光谱先与标准光谱比较，确定光谱型和亚型；再结合视差、干涉角直径与测热辐射流，用大气模型拟合有效温度。[1] 有效温度把恒星总辐射折算成同半径黑体的温度，不是光球每一点的温度，也不是肉眼看到的颜色温度。

## 约 4,000 K 在温区中的位置

教学分类把 K 型放在约 3,900–5,200 K。[1] 现代主序星抽样给出 K0V 约 5,270 K、K5V 约 4,440 K、K7V 约 4,100 K。[2] 因此 4,000 K 接近 K7–K9 的冷端；本条用它作为尺度锚点，而把整个类别写成约 3,900–5,200 K。

## 颜色与温度不是一一对应

星的颜色受有效温度、表面重力、金属丰度和星际消光共同影响。[2] 一颗 K 型星看起来偏橙，不等于它的每一处表面都处于同一温度；恒星自转、对流和星斑都会造成局域差异。把颜色直接换算成温度，只能得到近似值；分类边界也会随观测波段和资料取法变化。

## 与太阳和邻近类型比较

太阳是 G2 型，有效温度约 5,772 K；K 型星比太阳冷，却比 M 型红矮星更暖，后者通常在约 3,900 K 以下。[1][2] 再往冷端走就进入褐矮星的温区。K 型星正好处在普通恒星与亚恒星天体之间的过渡地带，因此常被用来检验恒星分类和大气模型。
