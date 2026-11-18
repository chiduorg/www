# 温度对象程序资产

> 2026-11-08 注：`energy/src/visual-map.json` 已删除，图景配置以 `content/entries/temperature/*.md` 的 `visual` 字段为准；本文其余内容为 2026-11-04 的设计记录。

日期：2026-11-04。资产只负责对象展示，接入由站点完成。

`energy/src/object-templates.js` 导出 `createThermalObject(entry, invalidate, config = entry.visual)`，返回 `{group, update(delta, time)}`。使用 Three.js 和共享 renderer 的材质、标签、杆件、光晕工具。`visual-map.json` 是以完整内容 ID 为键的对象，可将配置合并到 `entry.visual`；注册 scene 应由调用方设置。

覆盖 79 个有明确轴值的条目。现有 9 个专属对象由站点优先使用；5 个 `quantity.value: null` 的条目没有模型配置，保持只阅读。工厂拒绝空值和未知模板，不将未知量值变成占位零温度。

| 模板 | 对象结构与用途 |
| --- | --- |
| metal-furnace | 金属/碳/玻璃试样、支撑炉体、热元件、热电偶和前护屏；逐元素配置样品色 |
| cryo-instrument | 分级铜冷板、支撑杆、螺旋布线和外屏蔽；退磁与电阻温度计有独立末端结构 |
| phase-vessel | 样品池、阀门、压力表和低温流体；三相点有晶体，临界点连续填充，室温另用窗框温度计 |
| superconducting-sample | 基板、走线、样品和磁体；SQUID 使用带弱连接示意的超导环 |
| kitchen | 烤箱内面包与架体，或平底锅油层和烟点场景 |
| burner | 本生灯或双管焊炬，独立内外焰层 |
| rocket-chamber | 燃烧室、局部开口喷管、供给管路、冷却肋和室内燃烧示意 |
| planet-environment | 行星地形、大气、极地测站、地核分层、热层轨道；熔岩与闪电另有专门分支 |
| stellar-atmosphere | 光球颗粒和边缘光；色球、过渡区、日冕、黑子、褐矮星、织女星各有结构差异 |
| compact-star | 中子星磁弧和热点、脉冲星波束，或白矮星表面 |
| accretion-disk | 暗中心、多层吸积环、盘粒子与双极喷流 |
| stellar-event | 核心、非同向抛射壳与喷流，千新星另有双致密源示意 |
| nebula | 双极外流、分层环和尘埃包层，服务回力棒星云条目 |
| radiation-field | 天球经纬网、背景涨落示意或中微子抽象轨迹 |
| reaction-field | 托卡马克装置、恒星核燃烧壳层或早期宇宙理论场格 |
| filament-lamp | 玻壳、螺旋灯座、引线和钨带灯丝 |

标签从 `entry.title` 和 `entry.displayValue` 生成，不写死温度。长显示值的括号部分由页面读数承担。模型对象按最长边归一化到约 7.5 世界单位，入口标题和读数标签独立放置。模型之间的尺寸不能直接比较天体或仪器真实大小。

每个 ID 的配置均有 `template / profile / caption / note / backdrop / color / symbol`。所有 backdrop 均为既有的 8 个 thermalScenes 键。`note` 区分对象口径，并明确颜色、粒子、光晕、转速、流动均为解释性效果；理论或尚待复核的量值不会因有模型而变成观测事实。图示不提供实验装置或燃烧操作方案。

验证：模块语法检查通过；在 Node 中以仅供标签纹理创建的 canvas stub 构建全部 79 个对象，执行两次动画更新，检查所有顶点有限、对象包围盒最长边不超过 8.2、映射覆盖完整、backdrop 合法。单对象最多 48 个 Mesh、49,896 个三角形；粒子采用 Points，避免逐粒子网格。此检查验证几何与接口，不替代接入后浏览器的构图、透明叠加和真实帧率检查。

本批另按授权仅补充首批 9 条的中文 `quantity.measureLabel` 和少量经 ID 检查的关联，以及 A 型星、碳聚变的现有正文支持范围；没有改动科学正文、共享 renderer 或站点接线。
