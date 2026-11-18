---
id: elements.method-ionization
title: 电离能怎么量：从光谱系限到光电子能谱
titleEn: How Ionization Energy Is Measured
dimension: element
category: 方法层
summary: 第一电离能是气态中性原子失去一个电子所需的最小能量。它可以从光谱系限推出，也可以用光电子能谱或电子碰撞测量；逐级电离能则逐次升高。
quantity:
  value: null
  unit: Z
  measure: 测量方法，不对应单一原子序数
  status: undetermined
  approximate: false
displayValue: 方法页 · 不参与 Z 排序
related:
  - elements.explain-configuration
  - elements.explain-shielding
  - elements.he
  - elements.fr
  - elements.method-radius
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与主题口径完整；本条为解释/方法/来源页，不参与 Z 排序，不对应单一原子序数。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: ionization energy
    url: 'https://www.britannica.com/science/ionization-energy'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-09'
  - title: Atomic Spectra Database (Standard Reference Database 78)
    url: 'https://physics.nist.gov/asd'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
conditions: 方法页；元素页的电离能一律为气态孤立原子口径，单位为 eV。
visual:
  scene: elements.explain
  caption: 光谱系限与光电子能谱 · 两种测法
  note: 能级与谱线为示意，不表示具体元素的实测光谱。
tags:
  - 方法层
  - 电离能
  - 光谱
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 它是什么

第一电离能是把一个电子从中性气态原子的基态移到无穷远所需的最小能量。[1] 它衡量原子抓住最外层电子的强弱，因此同周期总体上升、同族总体下降，但构型异常会打破平滑趋势。逐级电离能是移走第二个、第三个电子所需的能量，通常逐次升高，因为剩余电子被更紧地束缚。

## 怎样知道

最经典的方法是从原子光谱的系限推出：把一系列收敛的谱线外推到极限，就得到电离能。[2] 光电子能谱用已知能量的光子打掉电子，测量出射电子的动能，反推结合能。电子碰撞与激光多步激发也能给出高精度值。NIST 原子光谱数据库汇编了各元素的能级与电离能，并注明不确定度。

## 怎样比较

比较电离能时必须统一单位与状态：eV 与 kJ/mol 可以换算，但溶液中的氧化电位不能当作气相电离能。[1] 温度与聚集状态也会影响测量，元素页统一采用 298 K、1 bar 下的气态孤立原子口径。超重元素的电离能多数没有实验值，理论计算给出的数字必须标注为预测。

## 常见误解

电离能不是电负性，虽然两者趋势相关；电负性描述成键时吸引电子的能力，尺度也不同。[2] 另一个误解是把第一电离能当成“最容易失去的电子数”，实际上它只回答移走一个电子要多少能量。氦的第一电离能在所有元素中最高，但它的化学惰性还来自闭壳结构，不能只用电离能解释。

## 与其他阶段的关系

元素页的“第一电离能差值”是判断新增电子进入哪个亚层、屏蔽是否变化的重要线索。[1] 它和原子半径、电负性一起，构成“相对 Z−1”的三组数值证据。方法页的作用是说明这些数字从哪来、能比到什么程度：没有口径说明的电离能，只是一串看起来精确的数。
