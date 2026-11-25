---
id: temperature.antarctic_min_temp
title: 南极冬季最低温
titleEn: Vostok near-surface air temperature record
dimension: temperature
category: 极低温
summary: >-
  1983 年 7 月 21 日，南极东方站记录了 −89.2 °C 的近地面气温，折合 183.95 K。这里采用 WMO
  的气象观测纪录，说明百叶箱、站点与日期的口径，不把卫星冰面温度混为同一项排名。
quantity:
  value: 183.95
  unit: K
  measure: 东方站近地面气温纪录
  approximate: true
  measureLabel: 东方站近地面气温纪录
displayValue: 183.95 K（−89.2 °C）
related:
  - space.earth
  - temperature.dry-ice-sublimation
  - temperature.mars-surface
  - temperature.thermosphere
  - temperature.pluto-surface
  - space.moon
reviewStatus: reviewed
sources:
  - title: 'Global lowest temperature: Vostok, 21 July 1983'
    url: 'https://wmo.int/asu-map?map=Temp_020'
    publisher: World Meteorological Organization
    accessed: '2026-11-06'
  - title: Vostok Station
    url: 'https://www.britannica.com/place/Vostok-Station'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: antarctic_min_temp
  icon: ❄️
  relatedLabels: 火星表面温度、干冰升华点、地球热层、冥王星表面温度、极地科学、气候系统、遥感温度测量
conditions: >-
  1983-07-21 南极东方站（77°32′S、106°40′E、海拔约 3420
  米）标准百叶箱内的近地面空气温度，属单站单日最低值；不是冰盖表面辐射温度，也不是月均或年均温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - >-
      WMO 档案与 Britannica 条目均列出 1983-07-21 东方站 −89.2 °C，WMO
      另注明仪器为标准百叶箱最高最低温度表并经过正式复核。
    - 正文按五节结构重写；保留原量值 183.95 K，补充测量对象、站点条件与空气温度/表面温度的区别。
  originalQuantity:
    value: 184
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  记录按 0.1 °C 报出，换算为 183.95 K 不增加精度；不确定度主要来自温度表校准、百叶箱通风与单站代表性，而非温标换算。−89.2 °C
  是最低气温读数，不等同于冰面辐射温度。
visual:
  template: planet-environment
  profile: antarctic
  caption: 南极测站与极地环境
  note: >-
    温度对应东方站百叶箱内的空气记录，不对应整个冰盖的表面温度；测站、冰面与大气为示意，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: frost
  color: '#c8ecf1'
  symbol: Vostok
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
  - 日常
---
## 它是什么

南极东方站位于东南极冰盖内陆，海拔约 3420 米。1983 年 7 月 21 日，该站百叶箱内的最低温度表记录到 −89.2 °C，即 183.95 K。[1][2] 这是近地面空气温度，不是冰盖表面的辐射温度，也不是整个南极洲同时达到的温度。

## 怎样测到或为何是有效温度

WMO 档案说明，读数来自标准百叶箱中的最高最低温度表，测点为 77°32′S、106°40′E，记录经过正式复核。[1] 百叶箱让温度表与阳光和地面辐射保持距离，测得的是离地一定高度处的空气温度。极端低温出现在无日照、晴空、静风且长时间缺乏垂直混合的冬季条件下。[1] 温度表按摄氏度记录，档案同时给出华氏值，两种单位描述的是同一读数。[1][2]

## 数值与口径

−89.2 °C 加 273.15 等于 183.95 K；换算只是更换温标，没有增加原始记录的小数位。[1][2] 183.95 K 与干冰常压升华点 194.7 K 相差约 10.8 K，可作为极地空气与低温冷浴的量级对照。[1] 该纪录是单站、单日的最低气温，读数按 0.1 °C 报出，站点代表性误差和温度表校准误差并未因此消失。它也不能与卫星反演的冰面温度直接排成同一榜单。

## 常见误解

常见误解之一，是把“地球最低气温”当成南极任何地点、任何季节的常态；内陆冬季可以很低，沿海和夏季完全不同。[2] 之二，是把卫星测得的更低冰面温度当作同一纪录的替代；两者对象不同，空气温度与表面辐射温度不能混用。之三，是把 183.95 K 读成“热量只有多少”，开尔文是温度单位，不是能量单位。

## 与其他温区的关系

在温度轴上，183.95 K 低于干冰在 1 atm 下的升华温度约 194.7 K，也低于火星表面平均约 210 K；但它远高于液氮的 77.4 K、液氦的 4.2 K 以及宇宙微波背景的 2.725 K。与这些条目比较时，要先分清空气温度、表面温度和辐射温度。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]


## 深读一：量值口径

本条的核心量值是 183.95 K，量的是东方站近地面气温纪录。数值来自本条既有审阅链，不是按标题重新估算；标为近似值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：1983-07-21 南极东方站（77°32′S、106°40′E、海拔约 3420 米）标准百叶箱内的近地面空气温度，属单站单日最低值；不是冰盖表面辐射温度，也不是月均或年均温度。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照地球（1.274e+07）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
