# 时间条目的三维参照模型

> 2026-11-08 注：`time/src/visual-map.json` 已删除，图景配置以 `content/entries/time/*.md` 的 `visual` 字段为准；本文其余内容为 2026-11-04 的设计记录。

日期：2026-11-04。本次有界资产任务仅新增：

- `time/src/object-templates.js`：20个程序化模型模板及统一创建接口。
- `time/src/visual-map.json`：73个时间ID的场景参数。
- 本文档。

不修改scene.js、subjects.js、demo.js、共享引擎或Markdown正文。原8个专属模型继续保留；10个quantity为null的条目既不生成模型映射，也不生成时间坐标。

## 接入接口

```js
import {createChronicleObject} from './object-templates.js';

// 注册 time.object 时使用。entry.visual 由内容 visual 与本地映射合并。
const builder = (invalidate, entry) => createChronicleObject(entry, invalidate);
// 返回 {group: THREE.Group, update(delta, time)}
```

调用方负责给这些条目设置 `visual.scene: 'time.object'` 并合并映射。函数第三参可显式传config，默认使用entry.visual。Gallery须以scene与entry.id的组合区分缓存，防止不同文章复用同一个图景。这里不修改Gallery。

每个映射含template、profile、caption、note、backdrop、color。backdrop仅使用既有epochs键：primordial、plasma、afterglow、first-light、galaxies、solar-disk、ocean-world、living-cosmos。没有为未定条目杜撰新年代或隐藏的数值。

标题和时间读数来自entry.title、entry.displayValue；长标签按画布宽度缩小字体。模型本体归一化到约7.5世界单位，文字独立保持可读尺度。不同条目不按这个归一化尺寸互作空间大小或时间长度比较。

## 模板和辨识结构

| template | 映射数 | 结构与动态 |
|---|---:|---|
| quantum-field | 3 | 起伏网格、场联系编织环、扩张环或理论尺度立方架；低幅起伏 |
| particle-reaction | 7 | 弯曲反应通道、复合三珠、μ子丰度群或HeH+双球结构；标记沿线轻移 |
| nuclear-network | 3 | 分开的核素组、反应弧和氘瓶颈屏障；独立缓转 |
| radiation-front | 6 | 波面、声学同心环、脱耦路径；波环轻呼吸或标记移动 |
| cosmic-web | 3 | 三维节点、细丝、暗物质晕和间距参照；稀疏密度标记轻摆 |
| galaxy-assembly | 2 | 七成员原星系团，或具有厚度参照的银河盘；各组成缓转 |
| accretion-engine | 2 | 黑暗中心、多层吸积环与光谱刻线，或双向流束；盘上标记缓行 |
| stellar-cycle | 3 | 气体丝带与恒星形成区，或产物扩散壳层；低幅旋转 |
| planet-foundry | 2 | 岩体、聚集尘埃盘，或侧向撞击体与碎片路径；岩体与尘埃缓转 |
| ocean-section | 2 | 水体地形剖面与锆石证据，或暖期沉积岩芯和读数标尺；水纹/读数轻动 |
| atmosphere-section | 2 | 氧分子和大气层弧，或地磁场线与方向指针；分子/指针轻动 |
| ice-landscape | 2 | 阶梯冰川、山脊、融水纹或古冰期背景；细小雪粒缓移 |
| catastrophe-section | 4 | 多层地层配火山熔流、撞击坑、多撞击路径或海洋环境；地层扫描标记轻动 |
| fossil-study | 12 | 展示岩板与放大镜；鱼形结构、翼部、下颌、头骨、牙列、足端、恐龙轮廓、叶状印痕或底栖壳体；镜圈轻摆 |
| microbial-study | 4 | 真核结构、无核膜祖先概念、丝状多细胞或类囊体截面；轻缓转动 |
| forest-canopy | 5 | 低矮孢子植被、种子、花或林相层次；低幅整体轻摆 |
| settlement-workshop | 3 | 耕作田垄/储存房舍、青铜器/试件，或泥板刻写工具；展示架低幅转动 |
| scientific-instrument | 2 | 支架光学仪器与记录板，或锅炉、连杆、飞轮；光学架轻摆/飞轮转动 |
| information-network | 4 | 主机连线与移动数据包，或双螺旋/读取板、识别引导构型；数据包与螺旋轻动 |
| space-observatory | 2 | 18块六边形镜片与五层遮阳板，或L形激光干涉仪；结构缓摆/波纹轻动 |

共73个映射、20个模板、64组template/profile配置组合。模板复用的是制作方法，结构与语义通过profile和具体条目说明约束；不宣称每个配置都代表一种真实标本或一次历史现场重建。

## 科学表达边界

所有配置note均明示：非精确重建；颜色、粒子、光线与速度不是实测；尺寸独立归一化。没有以模型的动画进度假装表达真实持续时间。

- 原“first”条目已经改为具体记录或证据的，模型同样限定在该记录意义。CEERS 1019、J0313−1806、原星系团、早期化石不被画成宇宙或谱系真正的唯一首现。
- 七个原星系团成员只呼应观测对象的成员数，位置与形态不作为真实天图。
- 重元素壳层是输运机制参照，不冒称直接观测第一颗超新星或还原JADES氧检测对象。
- LUCA细胞没有画真核细胞核；其形态不是已发现的祖先化石。早期真核内部结构仅解释概念，不从分子记录倒推出完整形态。
- 产氧光合作用采用类囊体参照，化石时代不等于代谢起源。丝状多细胞不被画成复杂动物器官。
- 普朗克网格不表示时间已证明离散；大统一、暴胀和QCD热史均保持理论/模型口径。
- 太阳系撞击、暖期、冰期、灭绝、工业化等持续过程，不因模型静态或时间轴一个点就被解释为同一天发生。
- 地磁场线与指针不是地理两极互换。引力波的L形装置表达地球上信号检测，日期不是远方天体并合日期。
- 泥板记号不是可释读古文，DNA不是实际碱基序列，CRISPR不是原子级蛋白模拟。

## 覆盖规则

当前91条时间文章中，81条有有限参考数值。以下8条使用原专属模型，不在本映射重复覆盖：big-bang、recombination、first-stars、galaxy-formation、solar-system、first-life、cambrian、present。其余73条全部有映射。

以下10条为null，完全排除：baryogenesis、baryon-asymmetry-establishment、dark-matter-freeze-out、electron-positron-annihilation、electroweak-epoch、electroweak-symmetry-breaking、graviton-decoupling、ozone_layer_formation、reheating、strange-quark-matter。创建接口会拒绝无有限参考数值或chronology.plot=false的条目，不为其生成替代坐标。

## 实际构建与数值检查

用当前安装的Three.js实例化了完整73条映射，而非只检查JSON名称。Node验证使用画布最小桩，以便生成标签纹理；没有假装完成真实WebGL渲染。

| 检查 | 结果 |
|---|---|
| 73条实际构建 | 全部成功，20个模板均被使用 |
| 映射精确覆盖 | 有限且可入轴的81条减原8条=73；无多余映射 |
| 背景键 | 全部属于现有8个epochs键 |
| 非有限数据 | 顶点位置、对象位置/缩放/四元数、包围盒均为有限值 |
| 动态变化 | 73条在update后均有可检测变换变化 |
| 长时运行样本 | t=0、1、30、1000、100000及非有限输入检查均通过 |
| 本体包围盒 | 初始归一化最长边约7.5；按精确顶点检查的动画最长边最大约7.651 |
| 总顶点 | 单次构建全73条合计485176；单条最高42262 |
| 单条mesh数 | 最高108；Gallery只显示当前模型，缓存策略由调用方管理 |
| null拒绝 | 10条全部被创建接口拒绝，映射也不存在 |

首轮检查暴露了验证脚本在非有限时间输入重置后才比较动画的错误，已把有效时间的动画比较独立进行；也为地层扫描标记补上低幅位移。包围盒采用精确顶点而非旋转后保守外接立方体计算，避免把未实际存在的几何范围算作越界。最终上述检查全部通过。

真实浏览器里的材质、光照、遮挡、文字清晰度和视觉完成度，交由主代理接入后验收。本任务未修改主场景接入，也未运行或宣称全站浏览器验收完成。
