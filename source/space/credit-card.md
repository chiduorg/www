---
id: space.credit-card
title: 银行卡
titleEn: Bank Card
dimension: length
category: 日常与人造
summary: 银行卡通常采用 ISO/IEC 7810 的 ID-1 格式，长边为 85.60 毫米；短边 53.98 毫米与厚度 0.76 毫米是另外两个尺寸。
quantity:
  value: 0.0856
  unit: m
  measure: 长边（85.60 毫米）
  approximate: true
displayValue: 85.60 mm（长边）
related:
  - space.a4-paper
  - space.smartphone
  - space.coin
  - space.finger
reviewStatus: reviewed
sources:
  - title: 'ISO/IEC 7810:2019 — Identification cards — Physical characteristics'
    url: 'https://www.iso.org/standard/70483.html'
    publisher: >-
      International Organization for Standardization / International
      Electrotechnical Commission
    accessed: '2026-11-06'
  - title: 'ГОСТ Р ИСО/МЭК 7810—2015（等同采用 ISO/IEC 7810:2003，含 ID-1 尺寸）'
    url: 'https://files.stroyinf.ru/Data2/1/4293759/4293759502.pdf'
    publisher: Federal Agency on Technical Regulating and Metrology (Russia)
    accessed: '2026-11-06'
conditions: >-
  对象为 ISO/IEC 7810 的 ID-1
  格式卡片，例如银行卡、身份证与交通卡；测量口径为卡片长边（标准中的“宽”），不是短边、厚度或凸字后的局部厚度。
uncertainty: >-
  标称长边 85.60 毫米、短边 53.98 毫米、厚度 0.76
  毫米；标准以英制原始设计为基准并圆整公制值，实际卡片受材料与附加特征影响，厚度会局部增加。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      用 WebFetch 打开 ISO/IEC 7810:2019 标准页与等同采用的 GOST 标准 PDF，核对 ID-1 的
      85.60×53.98×0.76 毫米。
    - 明确标准中的“宽”是卡片长边，“高”是短边；0.76 毫米只适用于裸卡，不含芯片、天线与凸字。
    - 2026-11-07 复核：来源字段、引用编号与有限量值口径一致，沿用本轮前的逐条来源核对记录，转 reviewed（本轮未重开 URL）。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: device
  scene: space.object
  caption: ID-1 银行卡 85.60 毫米长边与 53.98 毫米短边的比例示意
  note: 示意图，非按比例，非观测重建。
  color: '#a9bfcd'
  variant: card
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 日常与人造
  - 尺寸
  - 日常
---
## 它是什么

银行卡通常采用 ISO/IEC 7810 的 ID-1 格式，外形是一张带圆角的长方形塑料卡。这里比较长边，即 85.60 毫米；短边 53.98 毫米、厚度 0.76 毫米是另外两个尺寸。[1] 该格式也用于身份证、交通卡和部分会员卡。

## 怎样知道

尺寸来自标准对 ID-1 的定义：宽 85.60 毫米、高 53.98 毫米、厚 0.76 毫米。[2] ISO/IEC 7810:2019 说明该文件规定四种尺寸卡片的物理特性，包括材料、结构和尺寸，并用于国际互换。[1] 标准文本以英制原始设计为基准，公制数值经过圆整，所以换算回来可能略有尾差。[1]

## 数值与口径

长边 85.60 毫米，短边 53.98 毫米，长宽比约 1.586:1。[2] 这里的“宽”是卡片长边，“高”是短边，和日常说的“卡宽”可能相反。厚度 0.76 毫米只适用于裸卡；凸字、芯片、天线或保护膜会让局部厚度增加，不能把 0.76 毫米当成整卡最大厚度。标准规定的是标称尺寸与公差；实际卡片因印刷、覆膜或磨损，测量值可能有几十微米的偏差，比较时应以标准值而非单张实测值为准。

## 常见误解

不要把银行卡长边与 A4 纸短边混淆：85.60 毫米不到 210 毫米的一半。也不要把 ID-1 与更大的 ID-2、ID-3 格式混用；后者分别为 105×74 毫米和 125×88 毫米，常见于护照资料页等。[2] 另一误解是认为所有银行卡尺寸完全一致；ID-1 规定标称尺寸，但材料与附加特征由其他标准约束。

## 与其他尺度的关系

85.60 毫米约为成人食指长度 70 毫米的 1.2 倍，也约等于三枚 25 毫米硬币并排的宽度。它与 A4 纸长边 297 毫米相比约为 0.29 倍。[2] 在钱包、卡包和读卡器的设计中，这个长边决定了插卡口的净宽。[1]
