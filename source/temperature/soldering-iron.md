---
id: temperature.soldering-iron
title: 电烙铁
titleEn: Soldering iron tip temperature
dimension: temperature
category: 中温
summary: >-
  电子焊接常用电烙铁的尖端温度约 350 ℃（623 K），可调范围通常为 200–450 ℃。
  这是烙铁头的工作温度，不是加热丝温度、焊点温度或电路板整体温度。
quantity:
  value: 623
  unit: K
  measure: 电烙铁尖端常用工作温度
  approximate: true
  measureLabel: 电烙铁尖端常用工作温度
displayValue: 约 623 K（350 °C；可调 200–450 °C）
related:
  - temperature.solder-melting
  - temperature.tin-melting
  - temperature.lead-melting-point
  - temperature.3d-printer-nozzle
reviewStatus: reviewed
sources:
  - title: 'Compact soldering station CD-BQE: instruction manual'
    url: >-
      https://telonic.co.uk/jg/wp-content/uploads/2021/08/JBC-CD-BQE-Soldering-Iron-Manual.pdf
    publisher: JBC Soldering Tools
    accessed: '2026-11-06'
  - title: 'Welding: overview of types and hazards'
    url: 'https://www.ccohs.ca/oshanswers/safety_haz/welding/overview.html'
    publisher: Canadian Centre for Occupational Health and Safety
    accessed: '2026-11-06'
conditions: >-
  恒温电烙铁的烙铁头尖端、空载或轻热负载、室内空气环境；控制器设定值与实测尖端温度可能不同。
  焊点大小、烙铁头形状、氧化程度和环境散热都会改变实际焊接时的温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 核对 JBC CD-BQE 说明书：温度范围 90–450 ℃，默认上限 400 ℃、默认下限 200 ℃，并提醒超过 400 ℃ 易损伤 PCB。
    - 核对 CCOHS 焊接概览：软钎焊使用熔点低于 450 ℃ 的填充金属，为温度上限提供工艺旁证。
    - 正文取 350 ℃ 的常用工作点，并在正文区分设定温度、空载尖端温度和焊接瞬间温度。
uncertainty: >-
  可调范围约 200–450 ℃（473–723 K），常用工作点 300–400 ℃（573–673 K）。
  设定值与实际尖端温度可差数开尔文到十余开尔文；大焊盘和粗线径会造成明显瞬时降温。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: burner
  profile: tool
  caption: 电烙铁尖端温度示意
  note: 画面为烙铁头与焊点的示意表达，金属光泽、热色和烟雾均经艺术处理， 不能据颜色判断精确温度；非按比例，非观测重建；各对象分别调整显示大小。
  scene: temperature.object
zone: 中温
tags:
  - 中温
  - 温度
  - 日常
---
## 它是什么

电烙铁的“温度”通常指烙铁头尖端的工作温度。常用恒温烙铁在 350 ℃（623 K）附近焊接电子元件；可调范围多为 200–450 ℃，对应约 473–723 K。[1] 它不是烙铁芯加热丝的温度，也不是焊点或电路板的整体温度。烙铁头的热容量和形状会改变热量传递速度，尖头与刀头适合不同焊点。

## 怎样测到

烙铁头温度用接触式热电偶或专用烙铁温度计测量，控制器显示的是设定值，实际尖端温度会因热负载、氧化和校准而偏离。[1] JBC 的说明书给出该机型温度范围 90–450 ℃，默认上限 400 ℃、默认下限 200 ℃，并提醒超过 400 ℃ 容易损伤 PCB。[1] 加拿大 CCOHS 把使用熔点低于 450 ℃ 填充金属的连接工艺定义为软钎焊，可作为温度上限的旁证。[2]

## 数值与口径

350 ℃ 换算为 623 K。[1] 这个值适合有铅焊锡和多数无铅焊锡的常规作业，但大焊盘、粗线径或多层板需要更高设定或更大功率；反之，细间距器件宜取 300 ℃ 左右。设定温度、空载尖端温度和焊接瞬间的温度是三个不同读数。[1][2]

## 常见误解

第一，把显示温度当成焊点温度；焊料熔化和润湿只需要约 456 K（183 ℃）量级，烙铁必须更高才能补热。第二，认为温度越高越好；过高会氧化烙铁头并损伤元件。第三，把 ℃ 与 K 直接混用；350 ℃ 是 623 K，不是 350 K。[1]

## 与其他温区的关系

623 K 高于锡铅共晶焊料的约 456 K 和锡的 505 K，低于铝的 933 K。它处在电子软钎焊的温区，远低于焊接电弧的 3,500 K，也低于烤箱烘焙的常见上限；因此电烙铁能熔化焊料，却不会像电弧那样熔化母材。[2]
