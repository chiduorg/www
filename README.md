# 尺度 MAGNITUDE · 全站（内容 1.3.0）

后续AI接手请先阅读 [AI交接文档](docs/AI_HANDOFF.md)；项目现状与进度见 [项目总结](docs/PROJECT_SUMMARY.md)。

正式发布采用二级域名：门户 https://chidu.org，五轴分别为 https://space.chidu.org、https://time.chidu.org、https://temperature.chidu.org、https://elements.chidu.org、https://mass.chidu.org；共享资产在 https://static.chidu.org。源码以 MIT 许可提供，原创正文与文档以 CC BY 4.0 提供；第三方来源保留各自许可。本目录为新版工程，旧站保留在上一级但不在发布范围。

当前内容版本 1.3.0：1354 条，全部 reviewed（空间 527、时间 303、温度 243、元素 135、质量 146）。元素与质量首屏已接入 3D 舞台；范围、科学边界与验收见 [项目总结](docs/PROJECT_SUMMARY.md) 与 [本地交付与验收](docs/LOCAL_DELIVERY.md)。

## 运行与检查

需要 Node.js 22 或更高。Windows 在本目录依次运行：

```powershell
npm.cmd ci
npm.cmd run build
npm.cmd run preview
```

六主机预览为 http://chidu.org:8080/（单端口按 Host 分派，需按 [部署说明](docs/LOCAL_DELIVERY.md) 配置 hosts 或 Chrome 解析规则）。`npm.cmd start` 是仅门户的简单静态服务（默认 4188），不按子域分派。

```powershell
npm.cmd run check
npm.cmd run check:migration
npm.cmd run check:models
```

check 检查静态文章、链接、搜索、确定性快照、单位边界和语法。migration 验证旧 ID 和量值修订证据。models 通过实际 Three.js 构造函数检查全部可比较条目的几何、参考长度和动画；它是 CPU 检查，不替代浏览器视觉验收。

## 已建设的页面

| 入口 | 内容 |
|---|---|
| / | 门户、轻量地球动态、五轴入口与搜索；不加载 Three.js |
| /library/ | 1354 条知识，全站检索、维度筛选和空结果 |
| space.chidu.org/entry/space/{slug}/ 等五轴 | 各轴独立静态正文、口径、来源和跨域关联；无 JS 可阅读 |
| space.chidu.org | 527 个可比较条目、对数缩放、旋转、大小比较、精选模型 |
| time.chidu.org | 303 个可定位事件、数量级历史、宇宙一年、参考年代间隔 |
| temperature.chidu.org | 243 个可定位温度条目、K / °C、范围/上下界、对象图景 |
| elements.chidu.org | 135 个元素条目、周期表、闭壳层 hub、6 篇解释页与原子剧场 3D 舞台 |
| mass.chidu.org | 146 个质量条目、B1–B16 质量阶梯、口径说明与质量深渊 3D 舞台 |
| /journeys/ | 三条跨尺度探索路线及其详情 |
| /quiz/ | 22 组来源可追溯的题目；每轮最多 8 题；本地成绩 |
| /about/、/contribute/ | 项目说明、内容与模型修订步骤、当前本地贡献方式 |
| /architecture.html、/assets.html | 八仓详细职责表、图像作者与许可 |
| /qa/renderer.html | 内部渲染验收工具，只保留在源码 qa/ 目录，不进入发布产物 |

分享链接统一使用子域：空间为 https://space.chidu.org/?object=space.earth，时间、温度、元素和质量分别为 https://time.chidu.org/?entry=time.solar-system、https://temperature.chidu.org/?entry=temperature.sun-surface、https://elements.chidu.org/?z=26、https://mass.chidu.org/?entry=mass.sun；view=reading 直接进入二维阅读。旧路径 `/space/`、`/time/`、`/energy/` 不保留跳转或重定向。

## 八仓职责与联系

| 目录 / 导出仓名 | 负责什么 | 依赖与输出 |
|---|---|---|
| content | 一条目一 Markdown；正文、量值/范围、条件、来源、审核、关联与资产许可 | 用 engine 校验；输出内容包和 SHA-256 快照，供各站固定采用 |
| engine | 内容契约、编译、数量计算、可选视口、通用 UI、静态构建与检查 | 输出按能力引用的 ESM 包；无需中央在线服务 |
| home | 门户、全站检索、路线、挑战和贡献引导 | 固定 content + engine；连接各站，首屏不带 3D 引擎 |
| space | 空间模型、沉浸环境、参考长度与大小比较 | 固定 content + engine；不依赖 time/temperature 源码 |
| time | 历史图景、时间压缩、年代间隔与事件选择 | 固定 content + engine；模型、背景与交互归本站 |
| temperature | 温度条目、物态图景、K / °C 与特定条件 | 固定 content + engine；温度与焦耳能量分开，当前只做温度 |
| elements | 元素条目、周期表、闭壳层 hub 与解释页 | 固定 content + engine；不导入空间/时间场景 |
| mass | 质量条目、B1–B16 阶梯与口径（总/重子/恒星） | 固定 content + engine；不导入其他轴模型 |

共用引擎通过构建时固定包进入各站，各站自主升级和回退。只共享已经复用的能力；模型与叙事由站点持有。门户故障不会阻止已构建探索站运行。

## 独立八仓交付

```powershell
npm.cmd run release:local
npm.cmd run check:release
npm.cmd run preview:sites
```

release:local 冻结内容和引擎源文件，打包到 artifacts/packages，导出八份源码到 artifacts/repos/{engine,content,home,space,time,temperature,elements,mass}。每个导出站可单独 npm ci、npm run build、npm run check、npm start；不借用兄弟目录或父目录的依赖。

各站 vendor 包、版本、快照、SHA-256 和 package-lock 固定。check:release 分别安装并构建八仓，检查跨站链接、依赖隔离，并验证篡改内容被拒绝。preview:sites 同时运行六站；端口冲突时采用可用端口并重新生成链接，实际地址保存在 config/local-origins.json 和 artifacts/release-manifest.json。

当前为本地源码包，没有创建远程 Git 仓或推送；各仓 CI 模板已生成，尚未远程执行。正式分域由 config/project.json 的 sites[].origin 与 publicOrigin 配置，部署见 deploy/nginx.conf 与 docs/LOCAL_DELIVERY.md。

## 内容与图景边界

1354 条全部完成正文重写并逐条记录资料来源；1304 条有确定量值，50 条没有可靠统一量值的概念保留文章、标明待核对，不在数量轴伪造坐标。来源核对不是外部同行评审。

空间、时间、温度与元素条目均配置图景；质量轴使用统一的 B1–B16 质量阶梯，不逐条配置 3D 图景。运动、配色、古环境和天体细节均为解释性示意。

原创正文、条目元数据与文档以 CC BY 4.0 提供，代码以 MIT 提供；Three.js MIT 与行星纹理 CC BY 4.0 随产物保留。门户 `publicOrigin` 为 `https://chidu.org`，五轴各用自己的子域；构建会生成绝对 canonical、OG/Twitter 标签、`sitemap.xml` 与允许收录的 `robots.txt`。第三方事实来源与使用方式见 [docs/THIRD_PARTY_NOTICES.md](docs/THIRD_PARTY_NOTICES.md)。

## 许可

- 代码：MIT，见仓库根目录与本目录的 [LICENSE](LICENSE)。
- 原创内容与文档：CC BY 4.0，见 [LICENSE-CONTENT](LICENSE-CONTENT) 与 [/license/](https://chidu.org/license/)。
- 推荐署名：Our Universe Atlas 贡献者，条目 URL，CC BY 4.0；如有修改请注明。
- 第三方事实、论文、标准、品牌页面与图片：保留各自许可；见 [第三方来源说明](docs/THIRD_PARTY_NOTICES.md) 与 [图像来源](content/assets/CREDITS.md)。只引用事实并自行撰写，不复制受版权保护的原文。

## 文档

- [详细建设计划](docs/FULL_SITE_PLAN.md)：范围、阶段、依赖、验收、八仓职责。
- [第三方来源说明](docs/THIRD_PARTY_NOTICES.md)：来源、URL、授权状态与使用方式。
- [内容许可状态](content/LICENSE_STATUS.md)：旧站文本、当前正文与引用来源三类状态。
- [内容扩容总计划](docs/CONTENT_EXPANSION_PLAN.md)：285→646 条的扩容清单、233 篇深化批次与学习层建设。
- [内容计划 v2](docs/CONTENT_PLAN_V2.md)：重新审计后的 646 条目标、234 条深度队列、361 条广度清单与八类学习层验收口径。
- [内容0.4.0](docs/CONTENT_0.4.0.md)：本轮52篇深化、来源与数轴保护。
- [写作与来源规范](content/EDITORIAL_GUIDE.md)：继续补充正文与接受贡献的准则。
- [本地交付与验收](docs/LOCAL_DELIVERY.md)：最终状态、实测与适用边界。
- [第一批历史记录](docs/SPRINT_01.md)：开工时基线，不代表当前状态。
- docs/research：三维度逐批来源复核和修订记录。
- docs/visuals：各站模型契约与 CPU 模型检查说明。
