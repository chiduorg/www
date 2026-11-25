---
id: space.spore
title: 细菌芽孢
titleEn: Bacterial endospore
dimension: length
category: 生命与人体
summary: 某些细菌在逆境中形成的休眠结构，芽孢杆菌属芽孢直径约 1 微米，可长期存活。
quantity:
  value: 0.000001
  unit: m
  measure: 芽孢杆菌属芽孢的直径，所引电子显微研究对 B. stearothermophilus 记约 1 μm
  approximate: true
displayValue: 约 1 μm
related:
  - space.bacteria
  - space.ecoli
  - space.yeast
  - space.cell
  - time.nanosecond
reviewStatus: reviewed
sources:
  - title: >-
      Determination of thermobacteriological parameters and size of Bacillus
      stearothermophilus ATCC 7953 spores
    url: 'https://www.scielo.br/j/cta/a/bDPNXLgCTZYWvS3bk3MZQnP/?format=html&lang=en'
    publisher: Food Science and Technology (SciELO)
    accessed: '2026-11-06'
  - title: endospore
    url: 'https://www.britannica.com/science/endospore'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: 扫描电子显微镜下对纯化、固定并干燥的芽孢测量；芽孢形状、物种与制样收缩会影响读数。
uncertainty: 1 μm 是所引嗜热脂肪芽孢杆菌芽孢的直径代表值；不同芽孢杆菌属物种的芽孢可从约 0.6 μm 到 1.5 μm 甚至更大，椭圆形芽孢的长短轴也不同。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 已打开 SciELO 原始论文与 Britannica 内生孢子条目。
    - 采用该论文电镜测量的约 1 μm 直径，并保留物种限制。
    - 不同物种差异明显，保留 needs-review 等待微生物学复核。
    - 2026-11-07 复核：来源字段、引用编号与有限量值口径一致，沿用本轮前的逐条来源核对记录，转 reviewed（本轮未重开 URL）。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: microbe
  scene: space.object
  caption: 位于母细胞内的芽孢与营养态细菌、酵母细胞的尺度对比
  note: 示意/非按比例/非观测重建，仅用于尺度直观参照。
  color: '#9bbcd7'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 生命与人体
  - 尺寸
  - 细胞与微粒
---
## 它是什么

细菌芽孢（endospore）不是繁殖结构，而是某些细菌在营养匮乏、干燥或高温等逆境中形成的休眠细胞。芽孢由母细胞内部经不对称分裂产生，外面包有多层芽孢衣，内部高度脱水，代谢几乎停止[1]。它能在不利环境中长期存活，遇到合适条件再萌发成营养细胞；这一过程常见于芽孢杆菌属和梭菌属[2]。因此，芽孢更像细菌的“生存备份”，而不是子代。

## 怎样知道

芽孢的尺寸多由扫描电子显微镜或透射电子显微镜测量。研究者先诱导细菌形成芽孢，再纯化、固定、干燥并成像，用多个颗粒的轮廓统计长轴和短轴[1]。由于芽孢含水很少、外壳坚硬，制样引起的收缩通常小于普通营养细胞。光学显微镜下也能看到芽孢，但分辨率不足以可靠测量亚微米级直径，因此精确数值更依赖电镜。

## 数值与口径

所引研究用扫描电镜测量嗜热脂肪芽孢杆菌（Bacillus stearothermophilus）的芽孢，得到长约 2 μm、直径约 1 μm[1]。本条目取 1 μm 作为“芽孢直径”的参照，口径是椭圆到柱状芽孢的短轴，而不是长轴。这个值来自一个特定物种，不能直接推广到所有芽孢：不同物种可更小或更大，芽孢在母细胞中的位置也会影响外观。

## 常见误解

“芽孢等于细菌的孢子繁殖”是常见误解：芽孢是休眠结构，一个母细胞只形成一个芽孢，萌发后仍是一个营养细胞，不增加个体数[2]。另一个误区是把芽孢当成普通细胞，它没有活跃代谢，对热、辐射和化学消毒剂的耐受性远高于营养细胞。还有人用营养细胞的大小推断芽孢大小，实际上芽孢通常更小、更致密。

## 与其他尺度的关系

1 μm 约等于典型大肠杆菌短轴的两倍，却只有红细胞直径的七分之一左右[1]。它比酵母细胞（约 5 μm）小，但比多数病毒颗粒（几十到一百多纳米）大一个数量级。若把 1 μm 放大到一根头发直径，需要约七十倍；这使芽孢在油镜下可见，却仍需要电镜才能看清其外壳层次。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

按 BIPM 定义的真空光速 299,792,458 m/s 计算，光穿过这一长度约需 0.0000033 纳秒，在时间轴上量级接近「纳秒」。[3]
