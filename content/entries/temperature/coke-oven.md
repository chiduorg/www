---
id: temperature.coke-oven
title: 焦炉炉膛温度
titleEn: Coke oven chamber temperature
dimension: temperature
category: 高温
summary: >-
  焦炉炭化室把煤隔绝空气干馏成焦炭，焦饼温度常取约 1,300 K（1,027 °C）。这是煤料—焦饼的温度口径，
  不是燃烧室火道的炉气温度，也不是焦炭推出冷却后的温度。
quantity:
  value: 1300
  unit: K
  measure: 焦炉炭化室煤料—焦饼温度
  approximate: true
  measureLabel: 焦炉炭化室煤料—焦饼温度
displayValue: '约 1,300 K（1,027 °C）'
related:
  - temperature.blast-furnace
  - temperature.steelmaking_temp
  - temperature.cement-kiln
  - temperature.incinerator
reviewStatus: reviewed
sources:
  - title: 'Coke Ovens & Coal Chemical Plant'
    url: 'https://www.vizagsteel.com/code/Infrastr/ccp.asp'
    publisher: Visakhapatnam Steel Plant (RINL)
    accessed: '2026-11-07'
  - title: 'Glossary: coke'
    url: 'https://www.eia.gov/tools/glossary/index.php?id=coke'
    publisher: U.S. Energy Information Administration
    accessed: '2026-11-07'
conditions: >-
  炼焦煤在焦炉炭化室内隔绝空气加热，取炭化室中煤料—焦饼的温度口径；煤种、装煤量、炉宽、
  火道温度和结焦周期都会改变实际读数。本条不指燃烧室火道炉气、炉顶荒煤气或推焦后的焦炭温度。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '核对维沙卡帕特南钢铁厂焦炉资料：煤在焦炉中干馏的温度为 1,000–1,050 °C，结焦周期 16–19 小时。'
    - '核对美国能源信息署术语表：焦炉煤气在超过 1,000 °C 条件下产生，焦炭由煤在耐热砖室中烘焙得到。'
    - '正文取 1,027 °C 的圆整值 1,300 K，并区分焦饼温度、火道炉气温度和荒煤气温度。'
uncertainty: >-
  炭化室焦饼温度常见约 1,000–1,100 °C（约 1,273–1,373 K）；1,300 K 是代表性参考，不是每座焦炉的统一设定。
  燃烧室火道温度通常更高，可达约 1,200–1,350 °C，不能与焦饼温度混用。
    - '2026-11-07 来源可访问性核对：https://www.eia.gov/tools/glossary/index.php?id=coke 返回可用响应；https://www.vizagsteel.com/code/Infrastr/ccp.asp（TypeError: fetch failed） 受站点反爬/限流限制，保留引用但未逐字复核。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: metal-furnace
  profile: coke-oven
  backdrop: heat-flow
  caption: 焦炉炭化室示意
  note: 画面为焦炉炭化室、炉墙和推焦过程的示意表达，炉体结构、火焰亮度和焦炭颜色均经艺术处理；示意，非按比例，非观测重建；各对象分别调整显示大小。
  color: '#e07a4f'
  symbol: Coke oven
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 工业
---
## 它是什么

焦炉把煤在隔绝空气的条件下干馏成焦炭。本条取炭化室内焦饼（或煤料）约 1,300 K（1,027 °C）作为代表性温度，它对应煤料基本完成结焦的阶段。[1] 它不是燃烧室火道的炉气温度，也不是焦炭推出后冷却的温度。焦炉由炭化室、燃烧室和蓄热室组成，热量从两侧火道经炉墙传入炭化室。[1][2]

## 怎样测到

炭化室内的煤料无法直接连续测温，工业上多用炉墙温度、火道温度和推焦后焦饼表面温度间接判断结焦程度。维沙卡帕特南钢铁厂的资料把煤在焦炉中干馏的温度写作 1,000–1,050 °C，并给出 16–19 小时的结焦周期。[1] 美国能源信息署则把焦炉定义为隔绝空气加热煤的耐热砖室，并说明焦炉煤气在超过 1,000 °C 的条件下产生。[2]

## 数值与口径

1,027 °C 换算为约 1,300 K。这里的 1,300 K 指炭化室中煤料—焦饼的温度口径；同一座焦炉的燃烧室火道炉气通常更高，可达 1,200–1,350 °C，而炉顶空间和集气管中的荒煤气又会低一些。焦饼中心温度、炉墙温度和火道温度不能互相替代，测点位置与结焦阶段都会改变读数。[1][2]

## 常见误解

第一，把“焦炉炉膛温度”当成一个均匀值；炭化室从装煤到推焦经历升温、结焦和保温，温度随时间变化。第二，把火道炉气温度当成焦饼温度；炉气向炉墙和煤料传热，存在明显温差。第三，把焦炉温度当成高炉铁水温度；焦炉只负责制焦，焦炭随后才进入高炉。第四，忽略结焦周期，短时高温读数不能代表整炉焦炭的成熟度。[1][2]

## 与其他温区的关系

1,300 K 高于垃圾焚烧炉常取的 1,273 K，低于水泥窑烧成带的 1,723 K，也低于炼钢出钢的约 1,893 K。它比玻璃熔窑工作温度低约 500 K，说明焦炉属于“加热固体煤料”的高温工艺，而不是把物料加热到熔融流动的工艺。[1]
