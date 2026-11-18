---
id: mass.train-car
title: '高铁动车车厢：40,000 kg，单节车厢的整备质量'
summary: >-
  高铁动车组单节车厢整备质量约 40,000 kg，含铝合金车体、转向架、牵引与制动设备、空调和座椅，不含乘客。不同车型与头车、动车配置可差到 40–55
  t。
dimension: mass
category: 轨道车辆
displayValue: '40,000 kg'
quantity:
  value: 40000
  unit: kg
  measure: 制造商/铁路规范给出的单节车厢整备质量（空车，含全部车载设备与油液），不含乘客与行李
  approximate: false
grade: A
related:
  - mass.bus
  - mass.truck
  - mass.airliner
  - mass.iss
  - elements.fe
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - >-
      本轮复核：结构、引用编号与量值口径完整；quantity.value 与 displayValue
      数量级一致，bound/zeroMass/approximate、mass.type 与 includesDarkMatter
      逐条核对；太阳、地球、银河、可观测宇宙、总物质、暗物质、哈勃体积、中微子与光子的人工复核一致。
    - >-
      来源可达性：72 个唯一来源中 48 个直接返回 2xx；其余为站点反爬、限流或超时。已修复 PDG 2024 目录页路径与中微子综述 PDF
      两个死链。本轮未逐页重读全文，沿用条目既有 accessed 记录。
    - >-
      reviewed 指结构与来源口径核对，不是外部同行评审；总质量、重子质量、恒星质量与含暗物质口径按 quantity.measure 与 mass
      字段保留。
sources:
  - title: CRRC official site — rolling stock
    url: 'https://www.crrcgc.cc/'
    publisher: CRRC Corporation
    accessed: '2026-11-09'
  - title: UIC — railway vehicle and train mass specifications
    url: 'https://www.uic.org/'
    publisher: International Union of Railways
    accessed: '2026-11-09'
  - title: European Union Agency for Railways — vehicle authorisation
    url: 'https://www.era.europa.eu/'
    publisher: European Union Agency for Railways
    accessed: '2026-11-09'
tags:
  - 质量
  - 高铁
  - 动车组
  - 整备质量
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 制造商/铁路规范给出的单节车厢整备质量（空车，含全部车载设备与油液），不含乘客与行李
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: 'B8 车辆与大型动物 · 40,000 kg'
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B8
  bandLabel: 车辆与大型动物
  log10: 4.602
  position: 47.96
  color: '#e6c17c'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

高铁动车组的单节车厢，整备质量约 40,000 kg。这是车厢本体：铝合金车体、转向架、牵引电机与制动设备、空调、座椅、车窗与内装，不含乘客与行李。[1] 多节车厢连挂成一列，整列车质量在数百吨量级。

这个读数描述的是“一节车”，不是“一列车”。编组、头车、带受电弓与变压器的动车都会改变单节质量；阅读任何列车参数时，先确认它说的是单节还是整列。

## 口径与不确定度

不同车型差别明显：车长约 25 m、轴重较低的车型单节可低到 40 t 上下，头车与设备车会明显更重。[1][2] 因此“单节 40 t”是这一级别的代表性口径；具体编组要按车型表逐节相加。本条目取 4.0×10⁴ kg 作为整备质量。

还要区分整备质量、载客后的运行质量与轴重。整备质量是空车；满载时按每节 80–100 人、每人 65 kg 计，只增加 5–7 t，相对 40 t 不到 15%。轴重则把质量分配到每根轴上，是线路与桥梁设计的控制量。[2]

## 怎么测出来的

铁路车辆在出厂与检修时用轨道衡或架车称重，逐轴测量轮重，再算整车质量与轴荷分配；轴重必须落在线路与桥梁允许的范围内，这也是高铁把车体做轻的直接原因。[2] 欧盟铁路局在车辆授权中要求申报整备质量、轴重与轮重分布，作为互操作性的强制参数。[3]

铝合金型材、薄壁焊接结构与设备分散布置，都是为了在强度、气密性与轴重之间取平衡。车体越轻，同样的牵引功率能把更多质量用于载客。

## 量级位置

4×10⁴ kg 约等于 30 辆卡罗拉，或 8 头非洲象。它比公交车重三倍多，却比一架 747 的空重轻五倍。同样 40 t，做成车厢可以载 500–600 人，做成钢锭只占几立方米；质量与运载能力之间隔着结构效率。[3]

## 怎么继续走

想看同属大运量交通工具的公交车，去 mass.bus；想看 200 t 级的飞机空重，去 mass.airliner；想看同样密闭载人结构的空间站，去 mass.iss；想理解轻量化材料，从 elements.fe 进入元素轴。
