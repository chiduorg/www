---
id: space.hemoglobin
title: 血红蛋白分子直径
titleEn: Hemoglobin Molecule Diameter
dimension: length
category: 生命与人体
summary: 血红蛋白是红细胞内的四聚体蛋白，分子整体约 6.4 纳米 × 5.5 纳米 × 5.0 纳米；最长径约 6.4 纳米，不是各方向相同的直径。
quantity:
  value: 6.4e-9
  unit: m
  measure: 血红蛋白分子最长径，约 64 Å，对应整体外形的最长方向
  approximate: true
displayValue: 约 6.4 nm（血红蛋白分子最长径）
related:
  - time.nuclear-timescale
  - space.red-blood-cell
  - space.protein
  - space.alveolus
  - space.antibody
  - space.collagen
reviewStatus: reviewed
sources:
  - title: Human Haemoglobins — Structure of Haemoglobin
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1012805/pdf/jmedgene00330-0052.pdf'
    publisher: PubMed Central (PMC)
    accessed: '2026-11-07'
  - title: hemoglobin — biochemistry
    url: 'https://www.britannica.com/science/hemoglobin'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-07'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: 对象为人体血红蛋白四聚体；量取分子整体外形的最长径，不含水合层与糖基化修饰；不同实验方法给出的水合直径可能略大。
uncertainty: 6.4 纳米是 64 Å 的换算值，属于分子最长方向；三个方向约为 6.4、5.5、5.0 纳米，动态光散射测得的水合直径可达约 6.5 纳米，不能用一个直径概括全部形状。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 打开 PMC《Human Haemoglobins》PDF，核对分子整体约 64 Å × 55 Å × 50 Å 的椭球描述。
    - 打开 Britannica 血红蛋白条目，核对四个血红素基团、四条多肽链与四个铁原子的结构。
    - 6.4 纳米为最长径换算值，保留 needs-review。
    - '2026-11-07 来源可访问性核对：https://pmc.ncbi.nlm.nih.gov/articles/PMC1012805/pdf/jmedgene00330-0052.pdf 返回可用响应；https://www.britannica.com/science/hemoglobin（403） 受站点反爬/限流限制，保留引用但未逐字复核。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: molecule
  scene: space.object
  caption: 血红蛋白分子最长径约 6.4 纳米示意
  note: 示意，非按比例，非观测重建。
  color: '#95b0b1'
  variant: hemoglobin
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 生命与人体
  - 尺寸
  - 纳米
---
## 它是什么

血红蛋白是红细胞内负责运输氧的蛋白质，由两条 α 链和两条 β 链组成，每条链连接一个含铁的血红素辅基[2]。四个亚基协同结合与释放氧气，使血液在肺与组织之间完成气体运输。本条比较的是血红蛋白分子的最长径，也就是整个四聚体在外形上的最大跨度，不是单个亚基的直径或血红素环的尺寸。

## 怎样知道

一篇关于人类血红蛋白的综述把分子整体形状描述为约 64 Å × 55 Å × 50 Å 的椭球[1]。换算后，最长方向约 6.4 纳米，另外两个方向约 5.5 纳米和 5.0 纳米。Britannica 的 hemoglobin 条目说明每个血红蛋白分子由四个血红素基团围绕珠蛋白组成，呈四面体结构，并含四个铁原子[2]。结构组成与外形尺寸可以互相印证。

## 数值与口径

本条取 6.4 纳米（6.4×10⁻⁹ 米）作为血红蛋白分子的最长径，即 64 Å[1]。它不是所有方向都相同的“直径”：分子在三个方向上的尺度分别约为 6.4、5.5 和 5.0 纳米，说“直径”时必须说明量的是哪一轴。不同实验方法（X 射线衍射、电子显微镜、动态光散射）给出的水合直径还可能略大。

## 常见误解

常见误解是把血红蛋白分子当成一个完美球体，用一个直径概括全部尺寸[1]。另一个误解是把血红蛋白与红细胞混为一谈：红细胞直径约 7.5 微米，而血红蛋白分子只有几纳米，前者比后者大约一千倍。血红蛋白也不是游离在血浆中，而是包裹在红细胞内[2]。

## 与其他尺度的关系

6.4 纳米约为红细胞直径 7.5 微米的 1/1170，也约为 IgG 抗体跨度 10 纳米的 0.64 倍。它比 DNA 双螺旋直径约 2 纳米大，却比单个核糖体约 20 纳米小。血红蛋白处在纳米级分子尺度，是从原子、分子通向细胞的重要中间台阶；把它与红细胞放在同一张尺度图上，能直观看到蛋白质与细胞之间的数量级差距。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

按 BIPM 定义的真空光速 299,792,458 m/s 计算，光穿过这一长度约需 2.1e-8 纳秒，在时间轴上量级接近「强相互作用时间」。[3]
