# Our Universe Atlas 后续 AI 接手说明

更新日期：2026-11-09，Asia/Shanghai。适用基线：内容与六站 **1.1.0**、共用引擎 **1.1.0**。

当前状态（1.1.0）：1354 条全部 reviewed（空间 527、时间 303、温度 243、元素 135、质量 146），内容快照 `sha256:33b7c49c3fb1a51df1725328cd89f8e8068fe52ee597e9e847eb2b097b72fc09`；全站 sitemap 1375 个 URL（门户 16 + 空间 528 + 时间 304 + 温度 244 + 元素 136 + 质量 147）。学习层 dictionary 80 / methods 16 / objects 50 / collections 24 / ladders 8 / misconceptions 38 / qa 123。本文第 3 节保留 0.4.0 时期数字作为历史基线，涉及当前数量时以本段和 `dist/release.json`、`artifacts/release-manifest.json` 为准。

这是已有可运行项目的接手说明。请先核对实际文件、配置和报告，再沿用其中的状态。用户本次要求是编写交接，文档本身不代表又实施了一轮内容或网站改造。

## 1 接手先看这里

新版工作目录：`C:\Users\chenhua\Desktop\chidu\redesign`。

上一级 `C:\Users\chenhua\Desktop\chidu` 中的 `index.html`、`css`、`js`、`data`、`pages` 是保留的旧站。后续工作优先在 `redesign` 中进行，不要误改旧站或把旧 JSON 重新覆盖到新 Markdown。

建议先阅读：

1. [项目 README](../README.md)：运行方式、六站入口、八仓边界。
2. [内容 0.4.0 交付](CONTENT_0.4.0.md)：最近一轮52篇深化及验收。
3. [全站建设计划](FULL_SITE_PLAN.md)：产品范围、M0–M6与仓库职责；早期阶段记录是历史基线。
4. [当前部署与验收说明](LOCAL_DELIVERY.md)：1.1.0 六主机部署范围、步骤与回滚；v0.3.0 部分是历史记录。
5. [内容写作规范](../content/EDITORIAL_GUIDE.md)及[贡献规范](../content/CONTRIBUTING.md)。

先检查是否存在新增的 `AGENTS.md`、Git改动或用户后来发出的指令。本次检查未发现已有交接文档或 `AGENTS.md`；不要把这一结果当成永久状态。

## 2 用户意图和持续有效的约束

- 用户希望一个自建的、未来可接受贡献的 Markdown 开放知识内容源，派生出网站。
- 架构倾向已明确为：**内容仓 + 共用引擎仓 + 各站仓**。各站拥有自己的交互与场景，按需使用公共能力，分别锁定版本、构建和发布。
- 用户明确回复过：**“先本地，正文逐条重写”**。继续采用本地工作方式；没有建立远程仓、选择正式域名、公开发布或替用户选择许可证的后续授权。
- 仓名去掉 `chidu`。当前八个目录/导出仓名为 `content`、`engine`、`home`、`space`、`time`、`temperature`、`elements`、`mass`。外层现有工作目录仍叫 `chidu`，无需为满足仓名要求擅自迁移工作区。
- 工作名为 **Our Universe Atlas**，`brandStatus: working`。用户此前讨论过 Scale、Magnitude、Atlas、Our Universe Scale Atlas 等名称；不要把现工作名说成已最终确认的品牌。
- 用户反复要求更精致、更有空间沉浸感；空间应支持拖动和缩放、动态地球等直观体验。时间和温度的背景也必须随具体内容变化，而不只是给同一背景换色。
- 温度站（`temperature`，旧称 energy）实际聚焦**温度 K / °C**。焦耳 J 的能量集合尚未建设，不能混为同一尺度。
- 用户偏好直接推进已授权工作、交付可查看结果；不要对普通可回退编辑反复索要确认。遇到真正缺失的信息，再按当时有效的工具和权限规则处理。

## 3 当前产品状态

| 部分 | 已有结果 | 准确的边界 |
|---|---|---|
| 知识内容 | 1354 篇均已独立重写并记录来源，全部 reviewed | 重写不等于已授予开放许可证 |
| 来源/量值状态 | 1304 条有确定量值，50 条保留未定并写明原因 | reviewed 是限定范围的资料核对，不是外部同行评审 |
| 可探索内容 | 空间 527、时间 303、温度 243、元素 135、质量 146 | 未定量值保留文章，不绘入数轴 |
| 模型 | 各站精选场景 + 逐条配置模板 | 复用模板不等于逐条手工模型；模板名跨站可能重复 |
| 门户 | 首页、检索/筛选、规模总表、学习层、来源与贡献说明 | 正文构建进 HTML，不依赖 JS 获取正文；首页不加载 Three.js |
| 空间 | 旋转、连续对数缩放、参照物、A/B 比较、状态链接、图文模式 | 采用每条规定的参考长度，不把半径/距离/波长都叫直径 |
| 时间 | 对数历史、宇宙一年、两年代参考坐标的间隔、播放和事件图景 | 年代差不是事件持续时间；相同数值仍按不同 ID 精确选中 |
| 温度 | K/°C、范围/上下界、按温度浏览、对应对象图景 | 切换条目不是给同一对象持续升温；配色和速度不是物理测量 |
| 元素 | 118 个元素位、18 族周期表、闭壳层 hub、解释/方法/来源页 | 相对 Z−1 六项差值是叙述结构，不是六条独立观测量 |
| 质量 | 146 条、B1–B16 阶梯、总/重子/恒星/含暗物质口径 | 上下限与近似值按 quantity.bound/approximate 标注 |
| 学习 | 字典、方法、对象、合集、阶梯、误解与问答；22 组比较题 | 无账号；题目采用有可比较数值的已核对条目 |
| 八仓工程 | 八份独立源码包、固定依赖/快照、各仓 CI 模板 | 不是已建立的八个远程 Git 仓；远程 CI 未执行 |

0.4.0重点补充了机制、观测/实验依据、比较例子、常见误解和逐段引用。52篇引用140条文章来源记录，对应103个不同URL；不要称为新增140篇论文。本轮保护性审计确认数值、模型、时间坐标、审核状态和旧值证据保持一致；水的冰点补充了与空气接触的条件。

具体记录：[空间19篇](research/SPACE_ENRICHMENT_06.md)、[时间16篇](research/TIME_ENRICHMENT_06.md)、[温度11篇](research/TEMPERATURE_ENRICHMENT_06.md)、[另6篇核心文章](research/CORE_ENRICHMENT_06.md)。完整条目列表在 `artifacts/content-enrichment-verification.json` 的 `entries` 中。

## 4 源码、生成产物和八仓关系

| 位置 | 职责 | 后续应该在哪里修改 |
|---|---|---|
| `content/entries/{space,time,temperature,elements,mass}/*.md` | 唯一知识源，1354 条稳定 ID | 改正文、来源、量值、条件、关联在这里进行 |
| `content/assets/` | 本地纹理和资产说明 | 保留作者与许可，参阅CREDITS |
| `content/schema.json` | 内容字段结构 | 修改契约需连同校验器及消费端评估 |
| `engine/packages/content/` | 校验、编译、快照、路由、口径呈现 | 公共内容规则与链接逻辑 |
| `engine/packages/quantities/` | 单位、数量级、比例计算 | 通用数量逻辑 |
| `engine/packages/renderer/` | Three.js视口、资源池、生命周期、图景容器 | 通用渲染能力，不放站点知识 |
| `engine/packages/ui/` | 公共样式、品牌、站点控件、详情、回退 | 共用UI的实际来源 |
| `engine/packages/build/` | 独立静态构建、资源检查、服务 | 构建和站点接口 |
| `home/render.mjs`、`home/markdown.mjs`、`home/src/` | 门户静态页、Markdown渲染、检索和问答 | 门户专属逻辑 |
| `space/src/` | 空间app、环境、精选/模板模型 | 空间专属体验 |
| `time/src/`、`temperature/src/`、`elements/src/`、`mass/src/` | 各自 demo、scene、backdrop、subjects、模板、周期表与质量阶梯 | 各站专属体验 |
| `config/project.json` | 工作名、内容/引擎版本、整合路径 | 根工作区配置 |
| 各站 `site.config.json`、`package.json` | 分站配置、锁定采用的包版本 | 独立构建配置 |
| `dist/`、各站/内容的 `dist/` | 可重建输出 | 不作为源码修改入口 |
| `artifacts/repos/`、`artifacts/package-input/` | 导出的独立源码、冻结打包输入 | 会被release脚本重新生成，不在此做主线开发 |
| `artifacts/packages/`、ZIP归档 | 固定包与交付快照 | 保留已验收版本以便回退 |
| `qa/renderer.html` | 整合预览中的内部渲染验收 | 不是读者主导航，不随分站作为正式产品入口 |

构建链：**Markdown → engine内容编译/校验 → 确定性快照 → 每站固定内容包 + 固定引擎包 → 各站静态dist**。运行时不依赖中央引擎服务，也不要求内容仓在线。

根 `scripts/build.mjs` 先分别构建门户与五轴六站，再拼成一个整合产物。`release:local` 冻结源文件，生成带 vendor 包和 package-lock 的八份独立源码；两种产物的路由配置不同，不要混用。

## 5 已知入口和运行命令

环境：Windows PowerShell，Node.js 24；已测Node 24.19.0。发布归档用系统 `tar`，日常构建不依赖 Python。

```powershell
Set-Location 'C:\Users\chenhua\Desktop\chidu\redesign'
npm.cmd ci
npm.cmd run build
npm.cmd start
```

依赖已安装且输入未变时，不必重复安装。修改源码或Markdown后重新build；修改服务器实现后才需要重启相应服务器。

| 入口 | 地址 |
|---|---|
| 六主机预览（Host 头分派） | http://chidu.org:8080/ 、space / time / temperature / elements / mass / static 各自 `http://<host>:8080/` |
| 旧整合预览 | http://127.0.0.1:4188/ |
| 独立站点 | 门户 11667，五轴与 static 4191–4196；实际端口以 `config/local-origins.json`、`artifacts/release-manifest.json` 为准 |

六主机预览需要 hosts 或 `--host-resolver-rules`，说明见 [LOCAL_DELIVERY.md](LOCAL_DELIVERY.md) 的“本地六主机预览”。

这些是当时地址，不是服务器仍在运行的保证。先HTTP检查，再决定启动；不要重复启动服务或结束占用端口的未知进程。当前独立入口以 `config/local-origins.json`、`artifacts/release-manifest.json` 为准。`preview:sites` 在端口冲突时分配空闲端口并重建六站链接。

常用页面：`/library/`、`/journeys/`、`/quiz/`、`/learning/`、`/objects/`、`/collections/`、`/data/`、`/about/`、`/contribute/`、`/architecture.html`、`/assets.html`；五轴条目在各自子域的 `/entry/{space,time,temperature,elements,mass}/{slug}/`。

状态参数：空间 `?object=space.moon`；时间 `?entry=time.solar-system`；温度 `?entry=temperature.sun-core`；元素 `?z=26` 或 `?entry=elements.shell-N`；质量 `?entry=mass.sun`；`view=reading` 直接进入图文模式。旧根路径 `/?object=...` 不再保留跳转；使用 engine 路由函数，避免硬编码分站域名。

## 6 检查和独立交付

| 命令 | 检查或输出 | 适用时机 |
|---|---|---|
| `npm.cmd run build` | 六站构建、内容快照、静态文章 | 内容或源码修改后 |
| `npm.cmd run check` | 文章、本地链接、全量跨域绝对链接、搜索、单位边界、快照、源码语法 | 主要更改后 |
| `npm.cmd run check:content` | ID、related、来源、引用编号与图景结构；`--gate` 启用深度门槛 | 内容变更时 |
| `npm.cmd run check:migration` | 旧 281 个保留 ID 及旧量值修订证据 | 内容变更时 |
| `npm.cmd run check:models` | 970 个有限量值条目的真实模型入口、参考长度、几何和动画 CPU 检查（384 条不建模型） | 模型或依赖数据变化；不替代 GPU 检查 |
| `npm.cmd run check:learning` | 学习层条目数、ID 唯一、引用条目存在且有来源 | 修改 `content/learning/*.json` 后 |
| `npm.cmd run check:subdomains` | 六主机 60 个 URL、canonical、og:url、旧路径与跨域 related 抽样 | 构建后、发布前 |
| `npm.cmd run check:axe` | 六站 18 条路由的移动端 axe 审计 | 前端改动后 |
| `npm.cmd run release:local` | 冻结/打包内容和引擎、重新生成八仓源码 | 更新独立交付时；先结束所有源文件编辑 |
| `npm.cmd run check:release` | 八仓各自 npm ci、build/check、依赖隔离、快照、链接、篡改拒绝 | 导出后必须验证 |
| `npm.cmd run preview` | 单端口 8080 按 Host 分派六主机 | 本地看效果；需 hosts 或 Chrome 解析规则 |
| `npm.cmd run preview:sites` | 启动各导出站点 | 独立产物已构建、且没有可复用服务时 |

不要把检查命令启动成功当作已通过。长进程需等待最终退出和结果；不要因一次工具超时再启动一套相同构建。

当前版本事实来源：

- `artifacts/release-manifest.json`：1.1.0 八仓、包哈希与站点入口；由 `release:local` 重新生成，当前 `contentSnapshot` 已与 `dist/release.json` 同步。
- 当前内容快照：`sha256:33b7c49c3fb1a51df1725328cd89f8e8068fe52ee597e9e847eb2b097b72fc09`。后续编辑会生成新快照，不要照抄旧哈希。
- `artifacts/verification.json`：八仓通过、50,908 处跨站/资源链接、36 个运行模块。
- `artifacts/model-verification.json`：1354 条中 970 个模型 CPU 通过，384 条未定量值或未来时长未构造。
- `artifacts/content-enrichment-verification.json`、`artifacts/browser-verification.json`、`artifacts/http-verification.json`：0.4.0 时期的历史验收记录，保留作基线，不代表 1.1.0 重新执行。

1.1.0 的发布证据：`check`、`check:content --gate`、`check:migration`、`check:models`、`check:learning`、`check:subdomains`、`check:release`、`check:axe` 的结果，六主机预览实测，以及本目录的 `chidu-1.1.0.tar.gz`（13.71 MB，SHA-256 `7e40c712572d339f738bf4ac11468b69214d96b3e560334a03bc9ed6d24ccce8`）。发布包只含 `dist/`，不含源码与 `artifacts/`。

## 7 修改内容时的关键规则

1. 稳定ID决定文章和场景身份；不要因改标题或同值就合并/删除ID。`related`只能指向真实ID。
2. 内容版本 1.0.2 起不再保留兼容入口；每个条目使用独立稳定 ID，不设 `canonicalId`、跳转或 301。
3. 正文深化一般只改正文、摘要、来源、关联和必要的核对记录。修改quantity、chronology、visual等属于另一次科学/图景变更，应有明确依据及相应验证。
4. 旧量值证据可能在 `review.originalQuantity`，也可能在 `review.original.quantity`。都要保留；`check:migration`使用这些证据追溯旧站。
5. 数值为null时，保留 `quantity.status: undetermined`；未定时间还保留 `chronology.plot: false`。不要为了入轴任填一个数字。
6. 实际读取论文/机构/标准/数据库的可支持内容；给事实段落加`[n]`，对应本条sources数组顺序。打不开的链接或搜索摘要不算读完来源。
7. 正文解释对象、证据、口径、误解和知识联系。需要区分观测与模型、最早已知证据与真正起源、地质边界与过程、长度与实体外壳、温度与能量。
8. `reviewed`、`rights.rewritten`和公开许可证是三件不同的事。参考论文、图片和代码的授权也分别处理。

50 条未定量值（空间 11、时间 14、温度 8、元素 17）有两类情况：一类概念本来没有统一尺寸/时间/温度，另一类需要选定模型、样本、时期或测量端点。目标是准确解释，而不是把 50 这个数字强行降为 0。具体缺口在对应文章末节与研究报告中。

## 8 修改代码和模型时的容易踩坑处

- **公共UI的有效来源是 `engine/packages/ui`。** 构建器复制base/refined/brand等到各站；`space/src`仍有旧样式/brand/assets副本，部分被构建过滤。只改旧副本可能看不到效果，清理前也要确认引用。
- 图景配置的唯一来源是 `content/entries/<site>/*.md` 的 `visual` 字段；三站 `src/visual-map.json` 与 `scripts/sync-visuals.mjs`、`scripts/seed-visuals.mjs` 已于 2026-11-08 删除（旧 JSON 与正文重复且已漂移）。`space/src/featured-map.json` 只保留 `id → scene` 场景注册。
- 空间：`app.js`控制状态/取景/比较，`models.js`分派，`featured-overrides.js`含DNA、核子、普朗克长度、太阳系精修，`object-templates.js`实现模板。
- 时间和温度：`demo.js`控制条目与尺，`scene.js`组装，`backdrop.js`提供背景，`subjects.js`注册精选，`object-templates.js`实现通用模型。
- 空间自定义模型使用明确参考轴/端点，常以两世界单位规范化。DNA是横宽，核子不是硬球外壳，太阳系采用规定轨道直径，人体参考高度已规范；改变口径时同时检查内容声明、模型轴和比较计算。
- 时间/温度模型分别归一化显示，大小不能跨模型作空间比例尺。空间不同条目也可能比较半径、波长、距离或步幅；必须展示各自口径。
- 共享renderer含30FPS调度、隐藏暂停、慢帧降像素密度、LRU/资源释放、请求取消及WebGL回退。改动需关注离页、上下文丢失、暂停和手动更新，而非只看首屏。
- 图文模式是可用降级路径；移动端从详情进入独立文章的链接已补齐，别删掉这条路径。
- 不在 `dist`、`artifacts/repos` 或 `node_modules` 修主线问题；导出过程会覆盖它们。

## 9 尚未完成或未充分验证的事项

| 事项 | 现状与后续处理 |
|---|---|
| 233 篇机制/证据深化 | 1354 条正文均已审核；0.4.0 式的机制/证据/误区级深化仍可按主题继续 |
| 50 条未定量值 | 空间 11、时间 14、温度 8、元素 17；保留文章与原因，不承诺全部转为可比较值 |
| 模型精细程度 | 已有精选与模板覆盖；用户对精致度要求高，可继续按场景精修，不能以覆盖数代替视觉质量 |
| GPU 覆盖 | 970 个模型 CPU 检查全过；代表场景做过浏览器验证，未逐个完成 GPU 截图验收 |
| 设备与无障碍 | 18 条路由 axe 0 违规；未做真实手机、弱网或完整屏幕阅读器审计 |
| 隐藏/减少动态 | 代码已有相应机制；尚未验证真实后台标签切换与操作系统减少动态偏好 |
| 性能 | 门户 Lighthouse 91/100/96/100，空间 66/100/100/100（软件 WebGL）；本机样本，不是手机或公网指标承诺 |
| 八仓导出同步 | `artifacts/repos` 与内容包需在正式发布前重跑 `release:local` 与 `check:release` |
| 公开协作与发布 | 未上传、未配 DNS/证书、未建远程仓；等待用户后续明确发布方向 |
| 品牌 | 「尺度 MAGNITUDE」为工作名，`brandStatus: working`，尚未最终确认 |

## 10 后续工作的建议顺序

先根据用户下一条指令确定范围。若继续完善内容，可从未做 0.4.0 级深化的条目中选一组有共同问题的文章，例如日常材料与相变、地球生命史、微观生命或天体结构，先读取现有正文与来源，再做有边界的实改。复用 0.4.0 的质量标准，但不要用字数增长冒充准确性。

若继续视觉精修，先打开真实页面选定代表场景，逐个解决模型、背景与交互问题；保留科学口径和图文回退。若用户明确转向发布，再处理远程仓、许可证、正式origin及目标部署环境，不能沿用localhost作为正式域名。

若多AI并行工作，应按文件或维度分配互不重叠的编辑范围。全部作者确认停止写入后，再统一编译、生成快照和封包；打包/归档时继续编辑源文件会使报告与交付不一致。是否允许使用子代理，以接手时的有效指令和工具规则为准，不依赖旧会话中的agent名称或句柄。

## 11 版本和验收的收尾原则

- 内容改动不自动要求升级引擎。本轮引擎0.3.0包的SHA-256与上轮完全一致，证明只采用新的内容包即可更新各站。
- 更新内容/引擎版本时，协调相应package版本、各站atlas锁定版本与依赖、project/site配置和package-lock。不要只改页面显示版本。
- 用build得到新快照后，再做适合改动的检查。出独立交付时，按release → check:release → HTTP/浏览器代表路径 → 归档恢复的顺序完成。
- 归档读取当前报告、源码和docs；源文件及报告应先稳定。保留上一已验收版本，交付新版本的实际入口和证据。
- 浏览器自动化应采用环境提供的受支持工具。旧tab、进程PID、执行session或AI会话句柄不保证仍可用；先检查实际状态。完成UI工作时按当时工具要求保存证据、恢复临时视口并完成收尾。
- 汇报真实范围：本轮改了什么、验证了什么、仍有什么限制。不要把本地构建、全量CPU模型检查或有来源的正文称作已经公开上线、全量GPU验收或专家审稿。
