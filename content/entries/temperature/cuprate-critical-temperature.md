---
id: temperature.cuprate-critical-temperature
title: 铜氧化物超导转变温度
titleEn: Cuprate critical temperature
dimension: temperature
category: 低温
summary: >-
  铜氧化物 HgBa₂Ca₂Cu₃O₈₊δ 在环境压力、最优空穴掺杂下的超导临界温度约为 138 K（−135.15 °C）。
  这是材料从正常态进入超导态的转变温度，不是工作温度；同一家族不同样品的 Tc 可从约 90 K 延伸到 150 K 以上。
quantity:
  value: 138
  unit: K
  measure: Hg1223最优掺杂超导临界温度参考
  approximate: true
  measureLabel: Hg1223最优掺杂超导临界温度参考
displayValue: 约 138 K（−135.15 °C）
related:
  - temperature.ybco-superconducting-transition
  - temperature.niobium-superconducting-transition
  - temperature.liquid-nitrogen
  - temperature.liquid-oxygen
  - temperature.absolute-zero
reviewStatus: reviewed
sources:
  - title: >-
      Dome structure in pressure dependence of superconducting transition temperature for HgBa₂Ca₂Cu₃O₈
    url: 'https://arxiv.org/abs/2312.16402'
    publisher: 'arXiv (Physical Review Research 6, 023163)'
    accessed: '2026-11-07'
  - title: >-
      Ambient-pressure 151-K superconductivity in HgBa₂Ca₂Cu₃O₈₊δ via pressure quench
    url: 'https://www.pnas.org/doi/10.1073/pnas.2536178123'
    publisher: 'Proceedings of the National Academy of Sciences'
    accessed: '2026-11-07'
conditions: >-
  环境压力、最优空穴掺杂的 HgBa₂Ca₂Cu₃O₈₊δ（Hg1223）样品的超导临界温度参考；氧含量、压力、应变、
  磁场与测量判据都会改变 Tc，不适用于所有铜氧化物，也不代表器件可在此温度附近无冷却运行。
uncertainty: >-
  138 K 是 Hg1223 最优掺杂的实验参考值；PNAS 论文给出原始样品约 133 K、压淬样品 139–151 K，
  说明不同样品状态与转变判据会带来数开尔文到十余开尔文的差异。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 'arXiv 2312.16402 摘要给出 Hg1223 在环境压力、最优空穴掺杂下的实验 Tc 约 138 K。'
    - 'PNAS 2026 论文给出原始 Hg1223 约 133 K、压淬样品 139–151 K，用于说明 138 K 的测量与圆整范围。'
    - '2026-11-07 来源可访问性核对：https://arxiv.org/abs/2312.16402 返回可用响应；https://www.pnas.org/doi/10.1073/pnas.2536178123（403） 受站点反爬/限流限制，保留引用但未逐字复核。'
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: cryo-instrument
  profile: cuprate
  caption: 铜氧化物超导样品测量
  note: >-
    样品、冷台与测量线路均为示意，非按比例；悬浮、光晕与磁力线只说明超导场景，不是特定装置的观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: deep-cold
  color: '#a8bed7'
  symbol: Hg1223
  scene: temperature.object
zone: 低温
tags:
  - 低温
  - 温度
  - 超导
---
## 它是什么

铜氧化物超导体是一类以 CuO₂ 面为导电骨架的陶瓷材料，HgBa₂Ca₂Cu₃O₈₊δ（Hg1223）在环境压力、最优空穴掺杂下的超导临界温度约为 138 K。它比钇钡铜氧（YBCO）的约 92 K 更高，但仍是需要冷却的低温超导，而不是室温超导。[1][2] CuO₂ 面之间的电荷库层负责掺杂与载流子供给，换掉库层元素就会改变 Tc。

## 怎样测到

Tc 由电阻—温度曲线、磁化或比热测量确定：降温时电阻骤降并出现抗磁信号，取转变的中点或起始点会给出略有不同的数值。arXiv 论文把 Hg1223 的最优掺杂实验值写作约 138 K；PNAS 论文则给出原始样品约 133 K，压淬后 139–151 K 的测量结果，说明 138 K 是同一材料不同样品与判据下的圆整参考。[1][2] 转变曲线常有几开尔文的宽度，起始点、中点与零电阻温度并不相同，报告数值时应注明判据。

## 数值与口径

138 K 换算为 −135.15 °C。铜氧化物家族内部差异很大：YBCO 约 92 K，Hg1223 在环境压力下约 133–138 K，加压到约 30 GPa 时可升至 164 K。[1][2] 因此不能把“铜氧化物 138 K”当成所有铜氧化物的统一值；氧含量、掺杂、压力、应变和测量判据都要说明。Hg1223 的三层 CuO₂ 面使其在环境压力下已接近铜氧化物的常压上限。

## 常见误解

第一，把 138 K 当成室温超导；它比 293 K 的室温低约 155 K。第二，把 Tc 当成工作温度；超导磁体还要满足临界电流、临界磁场与机械、热稳定性。第三，把所有铜氧化物都归到 138 K；YBCO 与 Bi 系、Tl 系、Hg 系的 Tc 并不相同。第四，把 138 K 与 133 K 的差异当成矛盾，它们常来自样品状态与判据。[1][2] 此外，Tc 高并不等于临界电流密度高，带材的晶界与织构同样关键。

## 与其他温区的关系

138 K 高于液氮的 77.4 K、液氧的 90.2 K 和 YBCO 的约 92 K，也高于液氦的 4.22 K 与铌的 9.2 K，但仍低于水的冰点 273.15 K 和室温。[1][2] 它说明铜氧化物把超导温区推进到液氮以上，却没有改变“临界温度不等于无需冷却”的基本事实。与 YBCO 相比，Hg1223 含汞，合成与安全处理更复杂，研究价值多于大规模应用。
