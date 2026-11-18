---
id: time.nuclear-age
title: 人工核合成时代
titleEn: The Nuclear Age
dimension: cosmic-time
category: 人类与文明
summary: 1940 年代起，反应堆与加速器让人类能够制造自然界中不存在或仅痕量存在的元素。锝、钷的空缺被填补，镎、钚与 104 号以后的超重元素接连出现，元素轴的后半段从此由人工合成推进。
quantity:
  value: 435399997286046400
  unit: s
  measure: time-after-big-bang
  measureLabel: 以 1940 年镎与钚的合成为参考的人工核合成起点
  approximate: true
displayValue: 1940 年（人工核合成起点）
related:
  - elements.source-artificial
  - elements.np
  - elements.pu
  - elements.og
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮审核修正：人工核合成起点原秒数与 conditions 的 presentSeconds − 86×secondsPerYear 差约 94,978 年，已按公式重算为 435399997286046400 s；displayValue「1940 年」不变。"
    - "本轮复核：结构、引用编号与时间换算完整；quantity.value 与 conditions 的 timeBasis/换算公式逐条核对。"
    - "来源可达性：Britannica 对自动请求返回 403，有头浏览器抽验可读；NASA、IUPAC、LIGO 直接返回 2xx。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指结构与来源口径核对，不是外部同行评审；参考锚点、chronology 与 uncertainty 按正文保留。"
sources:
  - title: transuranium element
    url: 'https://www.britannica.com/science/transuranium-element'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-09'
  - title: Periodic Table of Elements
    url: 'https://iupac.org/what-we-do/periodic-table-of-elements/'
    publisher: International Union of Pure and Applied Chemistry
    accessed: '2026-11-09'
chronology:
  status: reference
  plot: true
conditions:
  timeBasis: time.present
  presentSeconds: 435400000000000000
  secondsPerYear: 31557600
  lookbackYears: 86
  conversion: presentSeconds - lookbackYears × secondsPerYear
  note: 以 1940 年作人工核合成的参考起点；宇宙时间按年作近似导航。
uncertainty: 人工核合成的起点取决于“首次合成”如何界定：1934 年的中子轰击实验、1940 年的镎与钚、1945 年的核试验都常被引用。本条取 1940 年，秒数只用于时间轴排序。
visual:
  template: nuclear-network
  scene: time.object
  caption: 反应堆与加速器合成超重元素 · 示意
  note: 靶核、束流与衰变链为示意，非按比例，非具体装置重建。
mode: 时点
tags:
  - 人类与文明
  - 人工核合成
  - 超重元素
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 它是什么

人工核合成指用反应堆的中子或加速器的重离子束，把一种原子核变成另一种。1940 年，麦克米伦与阿贝尔森用中子轰击铀得到镎，随后西博格团队得到钚，这是第一批被明确识别的超铀元素。[1] 此后锝、钷等天然空缺被填补，104 号以后的元素几乎全部靠重离子轰击合成。

## 怎样知道

合成证据不是“看见一个原子”，而是探测新核的衰变链：新核以特定半衰期放出 α 粒子，子核再放出 α 粒子，能量与时间序列构成指纹，逐级连到已知核素。[1] IUPAC 依据重复实验与命名规则确认新元素。[2] 对超重元素，一次实验可能只产生几个原子，统计与排除背景因此至关重要。

## 时间坐标与口径

本条取 1940 年作参考起点，距当前约 86 年，在宇宙时间上只是最后一瞬。[2] 人工核合成没有改变自然界元素的丰度，它改变的是人类能够制造和研究的核素范围。时间轴把它单列，是为了让“实验室来源”与“宇宙来源”在同一坐标下可比较，而不是把两者混为一谈。

## 常见误解

人工合成不等于宇宙中不存在：锝、钚在铀矿中有痕量天然产物，只是极难提取。超重元素也不等于“性质已全部实测”：109 号以后多数元素的电离能、半径、电负性仍无实验值，只有理论预测。[1] 此外，合成出一个原子与“发现一个元素”不是同一件事，后者需要独立重复与正式认定。

## 与其他阶段的关系

人工核合成与 s 过程、r 过程构成元素来源的第三种路径：前两者在恒星与并合中发生，后者在反应堆与加速器中进行。[1][2] 元素轴的 93–118 号条目主要挂在这个节点上；它们的“预测值/无稳定同位素”标注，正是人工来源与核稳定性共同造成的。往上游走，这个节点接在中子星并合与太阳系形成之后。
