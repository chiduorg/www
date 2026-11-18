---
id: temperature.asphalt-summer
title: 夏季沥青路面温度
titleEn: Summer asphalt pavement surface temperature
dimension: temperature
category: 中温
summary: >-
  夏季晴天，深色沥青路面吸收太阳辐射后，表面温度可明显高于气温；本条取 330 K（约 57 °C）作为中温区的代表值。
  它描述的是路面表层，不是气温，也不是沥青的施工拌和温度。
quantity:
  value: 330
  unit: K
  measure: 夏季沥青路面表面温度（代表值）
  approximate: true
  measureLabel: 夏季沥青路面表面温度（代表值）
displayValue: '330 K（约 56.9 °C，代表值）'
related:
  - temperature.desert-ground
  - temperature.sand-beach-summer
  - temperature.room-temperature
  - temperature.oven
  - temperature.human-body-temperature
reviewStatus: reviewed
sources:
  - title: 'Using Cool Pavements to Reduce Heat Islands'
    url: 'https://www.epa.gov/heatislands/using-cool-pavements-reduce-heat-islands'
    publisher: U.S. Environmental Protection Agency
    accessed: '2026-11-07'
  - title: >-
      Cool Pavement Pilot Program: Joint Study between the City of Phoenix and
      Arizona State University
    url: >-
      https://globalfutures.asu.edu/sustainabilitysolutions/wp-content/uploads/sites/37/2025/03/COPE-Report_FULLFINAL.pdf
    publisher: Arizona State University Urban Climate Research Center
    accessed: '2026-11-07'
conditions:
  medium: 沥青路面表层
  measurementSite: 路面表面，非百叶箱气温
  duration: 夏季晴天正午前后
  basis: 现场红外测温或路面传感器
uncertainty: >-
  330 K 是圆整代表值；沥青颜色、老化程度、路面厚度、太阳辐照、风速和阴影都会改变读数。
  路面温度不是气温，也不能与沥青拌和或摊铺的工艺温度混为一谈。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - EPA 页面汇总亚利桑那试点，常规沥青正午表面温度可达约 152 °F（67 °C），并说明冷路面可比其低 10–16 °F。
    - 正文取 330 K（约 57 °C）作为夏季晴天的中温代表值，不把最高值当作所有路面读数。
    - 凤凰城试点报告用于支持常规沥青与处理后路面的对比观测，不用于给出全国统一温度。
    - '2026-11-07 来源可访问性核对：全部来源页返回可用响应（https://www.epa.gov/heatislands/using-cool-pavements-reduce-heat-islands；https://globalfutures.asu.edu/sustainabilitysolutions/wp-content/uploads/sites/37/2025/03/COPE-Report_FULLFINAL.pdf），数值口径与正文一致。'
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: heat-map
  scene: temperature.object
  profile: asphalt
  backdrop: urban
  caption: 沥青路面热分布示意
  note: >-
    画面为夏季沥青路面温度分布的示意，非按比例、非观测重建；颜色分层、探针与光晕均为解释性示意，
    不代表具体路段、真实测温点或精确温度梯度。
  color: '#c97a5f'
zone: 中温
tags:
  - 中温
  - 温度
  - 日常
---
## 测的是路面，不是空气

夏季沥青路面温度指路面表层的温度。深色沥青会吸收大部分太阳辐射，热量集中在很薄的表层，所以晴天正午的路面可比百叶箱气温高很多。EPA 汇总的试点资料显示，常规沥青在夏季正午的表面温度可接近 67 °C，明显高于同地气温。[1] 本条取 330 K（约 57 °C）作为中温区的圆整代表值。这个读数描述的是路面，而不是人站立高度处的空气。

## 读数怎样得到

路面温度可用接触式探头、手持红外测温仪或埋在路表的传感器测量，不同方法给出点值或小面积平均值。凤凰城的冷路面试点对常规沥青与处理后路面做了对比观测，发现常规沥青表面更热，处理后路面可低若干摄氏度。[1][2] 测量时应记录路面材质、颜色、测点位置和太阳辐照；红外测温还需设置合适的发射率。阴影、轮胎痕迹和含水状态都会让同一路段的读数不同。[2]

## 数值与口径

330 K 等于 56.85 °C，约 57 °C。夏季晴天沥青路面常见数十摄氏度的表面温升，60 °C 以上也不罕见；这一温区足以造成皮肤烫伤，也会把热量传给近地面空气。[1] 但它是表面温度，不是沥青拌和厂的加热温度，也不是沥青软化点。施工时的拌和与摊铺温度通常高得多，属于工艺设定，不能拿来解释夏季路面。[2]

## 常见误解

第一，把路面温度当成气温；气象站气温有百叶箱、离地高度和通风标准，路面温度没有。第二，把手摸到的“烫”当成精确读数；皮肤接触薄层热表面，感受与探头读数不同，烫伤风险还取决于接触时间和面积。第三，认为所有沥青路面都一样热；颜色、老化、遮阴和含水量都会改变结果。第四，把表面温度与材料施工温度混为一谈。[1][2]

## 与其他温度的关系

57 °C 高于 room-temperature 的 20 °C 示例，也高于 human-body-temperature 的约 37 °C；它低于 boiling-water 的 100 °C，但已接近 oven 低温设定的一端。与 desert-ground 的约 70 °C 相比，沥青路面受材质和城市环境共同影响，数值可以相近，也可能更低。把这些条目并列时，先确认每条测的是空气、液体、表面还是材料内部。
