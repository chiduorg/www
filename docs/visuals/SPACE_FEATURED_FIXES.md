# 四个旧精选的比较口径修正资产

日期：2026-11-04。只新增`space/src/featured-overrides.js`与本说明；未修改models.js、app.js、引擎或科学正文。接线与场景说明同步由主代理处理。

## 接口

`createFeaturedOverride(entry)`仅处理`legacy.id`为`dna`、`proton`、`planck`、`solar-system`的四条，返回THREE.Group。其他ID返回null；已处理ID如没有有限正比较长度，则拒绝构造，避免无值占位模型。

返回组具有：

- `userData.reference`：start/end、axis、kind、length=2。参考线段表示条目定义的比较量，而不是装饰物的外包尺寸。
- `userData.referenceAxis`、`caption`、`note`：供界面同步显示；其中note说明示意部分和比例限制。
- `userData.framePadding`：自动取景的log10补偿建议。
- `userData.update(delta,time)`：轻动态，按累计展示秒数调用；减少动态、暂停和释放资源由站点统一处理。
- `userData.quantity`、`sourceMeasure`、`parameters`：记录所采用内容量值与模型参数，便于后续构建时检查语义。

该文件只import three，不依赖DOM、Canvas或远程图片。

## 各条如何修正

| 条目 | 比较线段的含义 | 模型处理 | 取景补偿 |
|---|---|---|---:|
| DNA | 约2 nm横向宽度 | 双螺旋横向包络归一化为2；只展示1.5圈短片段，不能把片段高度说成整链长度 | .74 |
| proton | 本图谱自选1 fm参考长度 | 渐层点云与内部流线，下方独立1 fm参考尺；没有硬球外壳，不把1 fm改成直径或rms电荷半径 | .47 |
| planck | 由ħ、G、c组合定义的理论长度 | 连续抽象波纹与标尺，没有离散空间颗粒或最小格点；波纹间距不被赋予物理量值 | .40 |
| solar-system | 海王星轨道区域参考直径 | 最外轨道半径1、直径2；轨道日距按NASA概览比例绘制，天体标记分别夸张 | .30 |

DNA用逐原子球以外的骨架管、节点与两色碱基连接来呈现结构层次；其横向两端始终以2世界单位参考包络解释。片段旋转是视觉展示。沟槽、链间相位、碱基形状及颜色为示意，并未声称恢复实际原子坐标或完整序列。

核子点云也没有与某项电荷密度测量绑定。点位和流线是原创抽象图形，不代表核子边缘、夸克位置或真实电荷分布；参考尺才表达正文选择的1 fm。此项没有额外添加粒子物理尺寸事实。

普朗克波纹是透明的连续程序曲面，顶点位移绝对值不超过约.09世界单位；它只增加视觉层次。普朗克长度是理论参考，不因此变成已观测的空间组成颗粒或波纹波长。

太阳系外轨道在倾斜平面内保持x方向直径2。当前绘制日距比使用NASA表中的水星57.9、金星108.2、地球149.6、火星228.0、木星778.5、土星1432.0、天王星2867.0、海王星4515.0，单位为百万公里；每个半径除以4515.0，使最外半径精确为1，再以内容中约90亿公里宽度作总参照。这里的表格近似日距与正文45亿公里近似日距存在舍入/口径差异；模型只借用相对概览比例，没有声称提高正文数值精度。所有轨道简化为共面圆，初相位与播放速度不是当前星历。太阳和行星标记的半径分别人为放大，不能称为与轨道距离相同的实体线性比例。

## 新采用的主源及核对方式

访问日期均为2026-11-04，实际读取正文或数表；未以搜索结果摘要作数值证据。

| 来源 | 支持的具体事实 | 应用范围 |
|---|---|---|
| [Max Planck Institute for Medical Research — Introduction to Fiber Diffraction, How this applies to DNA](https://www.mr.mpg.de/emeritus_groups/biophysics/fiber_diffraction?page=5) | 其理想B型DNA示意采用每圈约10对碱基、相邻间隔3.4 Å、螺距34 Å | 用3.4 nm螺距与既有2 nm横宽作大致结构比例；不声称所有DNA构象精确相同 |
| [NIH/NIGMS — Zooming In on Nanoparticles](https://nigms.nih.gov/biobeat/2023/12/science-snippet-zooming-in-on-nanoparticles) | DNA约2 nm宽 | 已有科学正文的比较口径；模型横宽归一化依据 |
| [NASA/NSSDCA — Planetary Fact Sheet, Metric](https://nssdc.gsfc.nasa.gov/planetary/factsheet/) | 八大行星概览日距，上述数表数组 | 相对轨道半径，不采用行星实体直径字段，也不纳入月球或冥王星 |
| [NASA Science — Neptune Facts](https://science.nasa.gov/neptune/neptune-facts/) | 科学正文已有的海王星平均日距约45亿公里 | q≈90亿公里为主要行星轨道区域宽度，未更改正文 |
| [NIST/CODATA 2022 constants](https://physics.nist.gov/cuu/Constants/Table/allascii.txt) | 已有科学正文的普朗克长度与质子电荷半径背景 | 不把常数长度画成硬球，不增加新的实测尺寸断言 |

查到的NIST散射教材PDF因网页解析体积限制未采用其搜索摘录；DNA比例改用上列直接可读的Max Planck研究所正文，未绕过访问验证。

## 程序验证结果

纯Node/THREE构造与检查全部通过：

- 四个模型参考线段的欧氏长度均为2；DNA的主体初始横向包围盒宽2，海王星轨道几何x范围精确[-1,1]。
- DNA采用螺距/横宽约1.7的大致比例；太阳系天体标记配置明确`markerRadiiToScale:false`。
- 所有顶点属性、世界矩阵为有限数。累计0、0.016、1、20、3600秒调用动画后，包围盒保持有限且非空。
- 其他ID返回null；null、0、负值、NaN和Infinity比较值被拒绝。

| 模型 | 可绘制对象 | 几何属性顶点总数 | 测试后包围盒约值 x/y/z |
|---|---:|---:|---|
| DNA | 69 | 14428 | 2 / 5.455 / 1.969 |
| proton | 12 | 2017 | 2.630 / 2.827 / 2.678 |
| planck | 9 | 3988 | 2.800 / 1.800 / .250（不含GPU曲面位移） |
| solar-system | 22 | 4626 | 2.008 / 1.486 / 1.628（含夸张天体标记，外轨道仍直径2） |

包围盒可以大于参考长度：DNA片段较长，核子云不是已定义外边界，行星标记也可能略越过最外轨道。比较时应以明确标线及其kind为准。测试没有启动GPU浏览器；接入后仍需由主代理检查画面取景、可读性、动态开关、透明叠层及note同步，不能把纯几何检查当成WebGL视觉验收。
