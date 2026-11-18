# 空间模型模板与72条逐ID配置

> 2026-11-08 注：`space/src/visual-map.json` 已删除，图景配置以 `content/entries/space/*.md` 的 `visual` 字段为准；本文其余内容为 2026-11-04 的设计记录。

日期：2026-11-04。范围：只新增space/src/object-templates.js、space/src/visual-map.json与本说明。未修改app.js、models.js、引擎、科学正文。

## 交付与接口

101条空间知识中有88条有限正比较长度，原16条精选保留现有入口；本资产包覆盖其余72条，使用24类可辨识的程序模型。13条null/undetermined不配置、不创建模型，也不以占位球冒充尺寸。所有几何和材质为本项目程序生成，不使用外部图片、DOM或Canvas，无新增纹理授权依赖。

导出createSpatialObject(entry, config = entry.visual)，返回THREE.Group。调用方把visual-map.json对应稳定ID的配置作为第二参数。SPATIAL_TEMPLATES导出24类模板名称。

- group.userData.reference：start/end为本地坐标，length严格2；axis为x、y或diagonal；kind说明具体比较定义。这个标线而不是装饰光晕的包围盒表示内容quantity.value。
- userData.referenceAxis、caption、note：用于界面说明；note需要随场景显示，以区分示意外形、放大的端点及理论参照。
- userData.framePadding：自动取景时加在log10(quantity.value)后的建议补偿。一般约.26–.38，长轨道约.66–.69，rms核分布为.82。它是取景建议，不改变参考长度的线性比例。
- userData.update(delta, time)：以累计展示秒数调用；动态图景包括信号经过、步幅示意、星点亮度微调、慢转恒星表面和突触颗粒。静态模型保留同一安全调用接口。暂停/减少动态由站点拥有者统一控制。
- userData.quantity记录原量值、测量口径和normalizedLength=2；parameters记录配置快照。生成器校验sourceMeasure与当前条目measure一致、配置参考轴与模型相符，防止内容修改后沿用旧口径模型。

建议接线：优先查visual-map[entry.id]并调用createSpatialObject；其余16精选走原模型入口；null条目只阅读。不要捕获配置错误后默默退回无口径占位球。现阶段未修改任何接线。

## 24类模板

| 模板 | 覆盖数 | 主要表现 |
|---|---:|---|
| distance | 9 | 端点距离、一个日心半径、椭圆半长轴、外缘模型 |
| arthropod | 4 | 蚂蚁、蚊子、尘螨；体长与附肢分离 |
| microbe | 5 | 细菌概览、双凹红细胞、流感尺度病毒示意 |
| sphere | 6 | 有来源口径的天体平均直径、乒乓球标称直径 |
| whale | 1 | 流线身体、尾叶、鳍和腹褶 |
| architecture | 3 | 层叠金属塔、吊桥缆索与桥塔、复原石质金字塔 |
| nucleus | 3 | 均方根电荷半径标线与无硬壳分布云 |
| membrane | 2 | 双层膜厚度、两膜之间的突触间隙 |
| organelle | 4 | 线粒体嵴、叶绿体基粒、核糖体亚基、水合花粉纹饰 |
| coin | 1 | 金属圆盘、边缘滚花、抽象浮雕 |
| nebula | 3 | 蟹状丝线、猎户座发射区、竖向创生之柱 |
| wave | 7 | 普通/约化康普顿特征长度及光行进单位 |
| terrain | 3 | 海拔基准剖面、火山基底跨度、抽象岛屿纵长 |
| field | 1 | 草坪条带、边线与球门，长边标线 |
| molecule | 4 | C60笼、血红蛋白团块、L形tRNA、中性水核间几何 |
| filament | 1 | 发丝横截面宽度与截取的丝轴段 |
| hand | 1 | 掌部、五指、关节和简化指甲 |
| atom | 2 | 非成键原子长度、电子偶素相对坐标参照 |
| mirror | 1 | 主镜口径及简化次镜支撑 |
| cluster | 6 | 球状星团、星系群、超星系团、长城丝带 |
| galaxy | 2 | 旋臂点场和近似恒星盘宽度 |
| motor | 1 | 微管导轨与驱动蛋白一步位移 |
| pencil | 1 | 六角笔杆、木质削尖和石墨尖 |
| grain | 1 | 米粒长轴与表面凹纹 |

## 比较量的几何语义

实体尺寸由清晰的主轴标线辨认，注释说明边界与样本；非实体长度采用专门的标线定义：

1. 碳、铁、铀核：中心到端点长度为2，表示一个rms半径，不是直径。程序点云先去均值，再将样本点的rms距离归一化到2；这是一种示意统计分布，并未声称重建真实电荷密度或核子位置。分布外包范围可远大于2，已预留.82取景补偿。
2. 普通康普顿波长：标线跨一个2π相位周期。约化康普顿长度：同样长的标线只跨1弧度相位，不把ħ/(mc)误画成完整λ。波形振幅、亮点、频率和播放速度都是示意。光秒/光年场景只表示长度单位，不实时模拟光速。
3. 分子马达：两落点的位移为2，马达轮廓与微管粗细放大。此值不是马达本身直径。
4. 比邻星、仙女座、银河中心、地月：端点中心间标线为2，端点天体夸张显示。地月采用半长轴作为距离参照，不表现固定瞬时距离。AU是定义长度，不伪称日地距离不变。
5. 柯伊伯带、日球层顶、奥尔特云：太阳到选定外点一侧为2，整个轮廓通常宽4。日球层顶只是特定穿越参照，云壳不证明球形或太阳引力终止。
6. 水星轨道：椭圆几何中心到长轴端点为2，整个长轴长4；太阳放在焦点，不能将半长轴冒充瞬时日距。偏心率0.2056直接核对NASA事实表。
7. 水分子：两个氢核中心相距2，O—H/H—H比例用NIST平衡核间几何0.9578/1.5144；原子球半径与键粗细夸张，不是分子动力学直径。
8. 珠峰：y=-1是抽象海拔基准，峰顶y=1；山脚并不被当成零海拔。奥林匹斯山采用水平基底跨度，纵向夸张。台湾只给纵长示意，不伪造可测绘海岸线。
9. 膜厚度：最外脂质头部表面在y=±1。突触间隙：两侧脂质头部朝向间隙的内表面在y=±1，膜厚/颗粒尺寸另作示意。
10. tRNA：对角最大跨度标线从(-.8,-.6)到(.8,.6)，距离严格2；外形是L形结构示意，不是原子坐标。

## 参数来源与示意界限

这里只复用已重写内容中的比较量。另直接核对NASA水星事实表的e=0.2056用于椭圆焦点示意：[Mercury Fact Sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/mercuryfact.html)。水分子核间几何参数来自[NIST中性H₂O实验页](https://cccbdb.nist.gov/exp2x.asp?casno=7732185&charge=0)。金门大桥1280/2737主跨/全长比例复用其[管理机构结构数据](https://www.goldengate.org/bridge/history-research/statistics-data/design-construction-stats/)。这些参数和来源已保存在对应配置parameters中。

其他细部，例如建筑层数、金字塔层缝、球场宽度/线位、触角长度、膜分子数量、云气分布、核糖体亚基团块、原子球半径和星点大小，均作为可辨认的设计细节，已通过note说明；它们不是本批额外发布的精密科学模型。没有引入远程纹理。

## 72条逐ID映射

| ID | 模板/变体 | 参考轴 | 取景补偿 | 场景标题 |
|---|---|---|---:|---|
| space.andromeda-distance | distance/galaxy | x | 0.35 | 两个星系示意中心之间的距离 |
| space.ant | arthropod/ant | x | 0.41 | 法老蚁工蚁身体长度 |
| space.ant_length | arthropod/ant | x | 0.41 | 木匠蚁小型工蚁体长 |
| space.au | distance/unit | x | 0.32 | 精确定义的一个天文单位 |
| space.bacteria | microbe/bacteria | x | 0.28 | 细菌量级中的1 μm示意参照 |
| space.betelgeuse | sphere/star | x | 0.31 | 指定研究假设下的参宿四直径 |
| space.blue-whale | whale/whale | x | 0.29 | 大型蓝鲸30 m体长参照 |
| space.burj-khalifa | architecture/tower | y | 0.28 | 包含建筑尖顶的建筑高度 |
| space.carbon-nucleus | nucleus/rms | x | 0.82 | 碳-12的一段rms电荷半径 |
| space.cell_membrane | membrane/bilayer | y | 0.32 | 膜两侧外表面之间的厚度 |
| space.chloroplast | organelle/chloroplast | x | 0.29 | 叶绿体较长方向5 μm参照 |
| space.coin | coin/coin | x | 0.29 | 2019年版1元硬币外缘直径 |
| space.crab-nebula | nebula/crab | x | 0.33 | NASA说明所用蟹状星云跨度 |
| space.dust-mite | arthropod/mite | x | 0.43 | 成年屋尘螨身体长度 |
| space.earth-moon-distance | distance/centers | x | 0.34 | 以轨道半长轴表示的地月距离参照 |
| space.electron-compton | wave/ordinary | x | 0.27 | 电子普通康普顿波长h/(mc) |
| space.everest | terrain/elevation | y | 0.42 | 全球高程基准至珠峰雪面的海拔 |
| space.football-field | field/football | x | 0.31 | 足球场边线方向105 m参照 |
| space.fullerene | molecule/fullerene | x | 0.3 | C60分子笼整体宽度参照 |
| space.galactic-center | distance/star | x | 0.35 | 地球到银河中心的近似距离 |
| space.ganymede | sphere/moon | x | 0.3 | 木卫三平均直径 |
| space.golden-gate-bridge | architecture/bridge | x | 0.32 | 金门大桥桥台到桥台总长 |
| space.great-pyramid | architecture/pyramid | y | 0.46 | 胡夫金字塔原始高度 |
| space.hair | filament/hair | x | 0.48 | 发丝横截面的宽度参照 |
| space.hand | hand/hand | y | 0.3 | 腕端至最长指尖的全手长度 |
| space.heliopause | distance/heliopause | x | 0.67 | 太阳到旅行者1号穿越位置的径向距离 |
| space.helium-atom | atom/helium | x | 0.31 | 两倍氦非成键半径的比较长度 |
| space.higgs-boson | wave/ordinary | x | 0.27 | 希格斯普通康普顿波长h/(mc) |
| space.hubble_aperture | mirror/mirror | x | 0.3 | 哈勃主镜光学口径 |
| space.iron-nucleus | nucleus/rms | x | 0.82 | 铁-56的一段rms电荷半径 |
| space.island | terrain/island | y | 0.3 | 台湾本岛南北纵长参照 |
| space.kuiper-belt | distance/belt | x | 0.66 | 太阳到柯伊伯带主区域外缘的距离 |
| space.laniakea | cluster/supercluster | x | 0.33 | 速度流域近似160 Mpc跨度 |
| space.light-second | wave/light | x | 0.27 | 光在真空1 s内走过的定义长度 |
| space.light-year | wave/light | x | 0.27 | 光在一个儒略年内走过的定义长度 |
| space.local-group | cluster/group | x | 0.33 | 本星系群概览跨度 |
| space.mercury-orbit | distance/orbit | x | 0.69 | 椭圆几何中心到长轴端点的半长轴 |
| space.milky_way_disk | galaxy/spiral | x | 0.32 | 银河恒星盘约10万光年宽度 |
| space.mitochondria | organelle/mitochondrion | x | 0.29 | 线粒体较长方向2 μm参照 |
| space.molecular-motor | motor/step | x | 0.37 | 驱动蛋白两落点间的一步位移 |
| space.moon_diameter | sphere/moon | x | 0.3 | 月球平均直径 |
| space.mosquito | arthropod/mosquito | x | 0.44 | 蚊子身体长度参照 |
| space.neutron-star | sphere/neutron | x | 0.31 | 中子星20 km概览直径 |
| space.olympus-mons | terrain/base | x | 0.36 | 奥林匹斯山基底横向跨度 |
| space.omega-centauri | cluster/globular | x | 0.33 | 半人马座ω星团概览直径 |
| space.oort-cloud | distance/cloud | x | 0.69 | 太阳到奥尔特云外缘估计参照 |
| space.orion-nebula | nebula/orion | x | 0.33 | 猎户座大星云发射区概览跨度 |
| space.pencil | pencil/pencil | x | 0.3 | 铅笔7英寸长度参照 |
| space.pillars-of-creation | nebula/pillars | y | 0.33 | 最高创生之柱约3光年跨度 |
| space.ping-pong-ball | sphere/ball | x | 0.3 | 乒乓球40 mm标称直径 |
| space.pion | wave/reduced | x | 0.27 | π介子约化康普顿波长ħ/(mc) |
| space.pollen | organelle/pollen | x | 0.3 | 水合梯牧草花粉38 μm直径参照 |
| space.positronium | atom/positronium | x | 0.34 | 电子—正电子相对坐标的玻尔长度 |
| space.protein | molecule/hemoglobin | x | 0.31 | 血红蛋白分子近似宽度 |
| space.proxima-centauri | distance/star | x | 0.35 | 太阳邻域到比邻星的距离 |
| space.red-blood-cell | microbe/rbc | x | 0.3 | 等渗悬液中人红细胞盘面直径 |
| space.ribosome | organelle/ribosome | x | 0.31 | 讲座所示核糖体较长方向20 nm参照 |
| space.rice-grain | grain/rice | x | 0.3 | 未烹煮去壳米粒5 mm长度参照 |
| space.sloan-great-wall | cluster/wall | x | 0.33 | 2005年论文所报斯隆长城长度 |
| space.sun_diameter | sphere/star | x | 0.31 | 太阳平均直径 |
| space.synaptic-cleft | membrane/synapse | y | 0.38 | 突触两膜内侧表面之间的间距 |
| space.top-quark | wave/reduced | x | 0.27 | 顶夸克约化康普顿波长ħ/(mc) |
| space.triangulum-galaxy | galaxy/spiral | x | 0.32 | M33约6万光年概览宽度 |
| space.trna | molecule/trna | diagonal | 0.31 | tRNA结构两端之间的最大尺度参照 |
| space.uranium-nucleus | nucleus/rms | x | 0.82 | 铀-238的一段rms电荷半径 |
| space.virgo-supercluster | cluster/supercluster | x | 0.33 | 本超星系团约1亿光年概览跨度 |
| space.w-z-boson | wave/reduced | x | 0.27 | 特指W玻色子的约化康普顿波长 |
| space.water-molecule | molecule/water | x | 0.33 | 水分子两个氢核之间的间距 |

完整每条note及sourceMeasure以visual-map.json为准。13个未定条目没有映射：chlorophyll、city、gluon-field、great-wall、gut-scale、inflation、neutrino、pacific-ocean、quantum-fluctuation、quantum-foam-bubble、quark、strong-force、superstring。

## 验证

通过纯Node/THREE全量构建检查：

- 精确覆盖72条有限正值，原16精选不重复收录；13条null无配置，且构造函数拒绝非有限、零、负量值。
- 72条全部有reference、caption、note、axis、framePadding、sourceMeasure；start/end欧氏长度2，轴定义一致。过期measure和错误axis配置被拒绝。
- 全部几何属性、实例变换矩阵、世界变换矩阵为有限数；在累计0、0.016、1、20和3600秒调用动画后，包围盒有限且非空。
- 核云样本rms距离=2（浮点容差10⁻⁶）；普通/约化波相位跨度分别2π/1；C60为60节点90连接；水分子H—H=2且O—H/H—H比例正确；水星a=2且焦点偏移=2e。
- 重复膜脂、花粉纹饰、病毒刺突、C60和核糖体表面使用InstancedMesh。单模型最多89个可绘制对象，几何属性顶点最多16090（共享实例几何只计一份，不等同于实际栅格工作量）。
- 不依赖document或window，模型构造可在Node中执行；仅import three。无全局随机序列，随机图景按ID稳定播种。

本任务未接入浏览器，也没有进行实际WebGL图像审美验收；主代理接入后应检查大小屏取景、透明层叠、减少动态模式、note显示及对比场景，程序检查不替代这些视觉检查。

## 原16精选待接入方修正的已知项

没有在本任务修改原模型。原DNA模型横向外宽约.75世界单位，而条目q是DNA横向宽度；需要把对应横宽归一化2，不能用片段长冒充宽。proton的1 fm是人为核子比较参考，旧硬球会混淆实体直径。planck应是理论长度参照，避免描绘已观测空间颗粒。原solar-system最外轨道直径约1.72世界单位，应对齐2并清楚说明行星尺寸有夸张。其余精选也应保留日冕/土星环不计主体直径、原子轨道为示意及宇宙观测范围非整体边缘等说明。后续替代资产由独立有界任务处理。
