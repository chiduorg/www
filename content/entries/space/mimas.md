---
id: space.mimas
title: 土卫一
titleEn: Mimas
dimension: length
category: 行星与太阳系
summary: 土卫一是土星内侧的主要卫星之一，平均直径约396公里。它因巨大的赫舍尔撞击坑而形似“死星”，三轴尺寸略有差异。
quantity:
  value: 396000
  unit: m
  measure: 两倍JPL所列平均半径198.20 km（约396.4 km，取整为396 km）
  approximate: true
displayValue: '约 396 km（平均直径）'
related:
  - space.saturn
  - space.enceladus
  - space.titan
  - space.earth
reviewStatus: reviewed
sources:
  - title: Planetary Satellite Physical Parameters
    url: 'https://ssd.jpl.nasa.gov/sats/phys_par/'
    publisher: NASA / JPL Solar System Dynamics
    accessed: '2026-11-07'
  - title: Saturnian Satellite Fact Sheet
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/saturniansatfact.html'
    publisher: NASA NSSDCA
    accessed: '2026-11-07'
conditions: 对象为土星卫星土卫一的固体表面；采用JPL所列平均半径198.20公里加倍；不含稀薄外逸层，也不把赫舍尔坑的坑径当作卫星直径。
uncertainty: JPL列平均半径198.20±0.40公里，直径约396.4±0.8公里；NSSDCA列三轴半径208、197、191公里，三轴平均约198.7公里，最长轴直径约416公里。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 打开JPL卫星物理参数表与NASA NSSDCA土星卫星事实表，核对平均半径、三轴尺寸与反照率。
    - 明确396公里是平均直径，不把最长轴416公里或赫舍尔坑的139公里当作整体直径。
    - '2026-11-07 来源可访问性核对：https://nssdc.gsfc.nasa.gov/planetary/factsheet/saturniansatfact.html 返回可用响应；https://ssd.jpl.nasa.gov/sats/phys_par/（TypeError: fetch failed） 受站点反爬/限流限制，保留引用但未逐字复核。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: sphere
  scene: space.object
  caption: 土卫一平均直径
  note: 球体、撞击坑与光照为示意，非按比例，非观测重建；不复现真实赫舍尔坑位置与当日相位。
  color: '#c7ced2'
  variant: moon
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 行星与太阳系
  - 尺寸
  - 天体
---
## 它是什么

土卫一是土星内侧的主要卫星之一，1789年由赫歇尔发现。它最醒目的特征是直径约139公里的赫舍尔撞击坑，使整颗卫星看起来像科幻电影里的“死星”。[1] 土卫一由水冰和少量岩石组成，表面反照率高，撞击坑密布，但整体地形起伏不大。它的轨道半长轴约18.6万公里，密度约1.15克每立方厘米，远低于纯水冰。[1]

## 怎样知道

JPL卫星物理参数表列土卫一平均半径198.20公里，不确定度0.40公里，加倍得396.4公里。[1] NASA NSSDCA土星卫星事实表给出三轴半径208、197、191公里，三轴平均约198.7公里，与JPL值在1公里内一致。[2] 这些数据来自卡西尼号的影像、掩星和轨道跟踪；平均半径对应同体积球体。卡西尼号在多次飞掠中获得了全球影像覆盖，轨道周期约0.94天。

## 数值与口径

本条取396公里，对应3.96×10⁵米。它不是最长轴直径416公里，也不是最短轴382公里，而是平均直径。[1][2] 土卫一因潮汐作用略呈椭球，三轴差异约25公里；讨论赫舍尔坑的大小时，应使用约139公里的坑径，而不是卫星直径。

## 常见误解

常见误解是土卫一因为像“死星”而有人造结构；那只是巨大撞击坑造成的视觉巧合。[1] 另一个误解是它比谷神星大；土卫一约396公里，谷神星约940公里，谷神星更大。[2] 还有人以为土卫一没有地质活动；卡西尼号观测到其表面有年轻的断裂与温度异常，内部状态仍有讨论。

## 与其他尺度的关系

396公里约为月球直径3474.8公里的11.4%，约为土卫二504公里的0.79倍，约为谷神星940公里的0.42倍，约为地球12742公里的3.1%。[1][2] 与土星平均直径116464公里相比，它只占约0.34%，在土星卫星系统中属于中等偏小的成员。
