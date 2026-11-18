# 尺度 MAGNITUDE · AI 交接文档

更新日期：2026-11-18（Asia/Shanghai）  
适用基线：内容 / 引擎 1.3.0  
工作区：`C:\Users\yuyan\Desktop\chidu\redesign`

本文写给接手的 AI 或开发者。先核对实际文件与命令输出，再沿用本文状态；文档不代表已经重新验收。

## 0 三十秒速览

- 1354 条 Markdown，全部 `reviewed`；五轴：空间 527、时间 303、温度 243、元素 135、质量 146。
- 内容快照 `sha256:e8b2ae3c0da6af79fba50ebfa4b2fcb96b6ea6264af70c77580260ec64d42142`。
- 六站：门户 `chidu.org` + 五轴 `space/time/temperature/elements/mass`；共享资产 `static.chidu.org`。
- 构建产物 4,449 文件、1,424 HTML、125.19 MB、sitemap 1,375 URL（含法律页与高精度模型）。
- 八仓：`content`、`engine`、`home`、`space`、`time`、`temperature`、`elements`、`mass`。
- 本地预览：`node work/preview-multi-port.mjs`，门户 8080、五轴 8081–8085、static 8086；也可用 `npm run preview` 按 Host 分派。
- 未上传、未配 DNS/证书；发布包 `chidu-1.3.0.tar.gz` 已生成，14,835,190 字节（14.15 MiB），SHA-256 `d3782cf24ba18e4516f03ed8adcf3a1fc721062d21d75aff2f4a003d4f241dee`；1.2.2 旧包保留作历史基线。
- **1.3.0 精品化 V2**：桌面顶栏 56px / 移动 52px；元素与质量首屏 `100dvh` 全屏 3D 舞台、透明顶栏；全站统一 `.site-footer`；`brand.js` + `theme.css` 提供 `ZH / EN` 与明暗切换；五站舞台均支持浅色 3D；全站英文 19 条审计路由 0 个 CJK 节点，英文字典 28,442 键 0 个中文残留；空间细胞/人体接入 CC0 GLB，原子改为量子概率云，第一代恒星与稀释制冷机重做。新增 `/legal/` 法律入口与四份文档（服务条款、隐私政策、免责声明、版权声明），六站页脚统一显示“法律与隐私”、版权与许可与 chidu.org 域名。**本轮收口**：顶部统一 7 项（空间 / 时间 / 温度 / 元素 / 质量 / 知识库 / 导航），删除“学习”和“共同构建”顶部入口，`导航` 同窗口外链 `https://netcn.org/` 且不直接显示域名；移动端改为 8 项 App 式底栏（尺度首页 + 五轴 + 知识库 + 导航）；学习层改为首页 `LEARNING LAYER` 内容区；全站深色底压深到 `#070b12` 一档，顶部导航字号 11.5px。

接手第一件事：

```powershell
Set-Location 'C:\Users\yuyan\Desktop\chidu\redesign'
npm.cmd run build
npm.cmd run check
```

## 1 工作区与目录

上一级 `C:\Users\yuyan\Desktop\chidu` 里的 `index.html`、`css`、`js`、`data`、`pages` 是保留的旧站。**不要改旧站，也不要把旧 JSON 覆盖回新 Markdown。**

| 目录 | 作用 |
|---|---|
| `content/entries/{space,time,temperature,elements,mass}/` | 唯一知识源，一条目一 Markdown |
| `content/learning/` | dictionary / methods / objects / collections / ladders / misconceptions / qa |
| `content/assets/` | 图片与许可说明 |
| `content/schema.json` | 内容字段契约 |
| `engine/packages/` | 校验、编译、数量计算、渲染、UI、构建与服务 |
| `home/` | 门户静态页、检索、学习层、总表 |
| `space/ time/ temperature/ elements/ mass/` | 各站交互、场景与配置 |
| `config/project.json` | 品牌、版本、六站 origin |
| `scripts/` | build、check、release、预览与验收脚本 |
| `deploy/nginx.conf` | 六主机生产配置（http 上下文片段，放到 conf.d 由主配置加载） |
| `dist/` | 整合产物，不手改 |
| `artifacts/` | 八仓导出、固定包、验收报告，可重新生成 |
| `work/` | 临时脚本、审计证据、截图，不进入发布包 |
| `docs/` | 交付、总结、交接与历史文档 |
| `qa/renderer.html` | 内部渲染验收，不进入发布产物 |

## 2 运行与检查

环境：Windows PowerShell，Node.js 22（本机实测 v22.23.2）。root 与八个 package 的 `engines.node` 已统一为 `>=22`。无需 Python。

```powershell
npm.cmd ci
npm.cmd run build
npm.cmd run check
npm.cmd run check:content -- --gate
npm.cmd run check:migration
npm.cmd run check:models
npm.cmd run check:learning
npm.cmd run check:subdomains
npm.cmd run check:axe
npm.cmd run preview
```

完整命令表：

| 命令 | 输出 | 何时用 |
|---|---|---|
| `npm run build` | 六站构建、快照、dist | 改内容或源码后 |
| `npm run check` | 文章、本地链接、全量跨域绝对链接、搜索、单位边界、快照、源码语法 | 主要更改后 |
| `npm run check:content -- --gate` | ID、related、来源、引用、字数、小节门槛 | 内容变更 |
| `npm run check:migration` | 281 个保留旧 ID、旧量值证据 | 内容变更 |
| `npm run check:models` | 970 个模型 CPU 检查，384 条不建模型 | 模型或量值变化 |
| `npm run check:learning` | 学习层条目、ID、引用存在性 | 改 `content/learning/*.json` |
| `npm run check:subdomains` | 60 URL、canonical、og:url、旧路径、跨域 related | 构建后、发布前 |
| `npm run check:axe` | 六站 21 路由移动端 axe | 前端改动 |
| `npm run check:axe:elements` | 元素站 138 路由移动端 axe（需 `npm start` 提供 4188） | 元素站改动 |
| `npm run release:local` | 冻结内容/引擎、导出八仓 | 更新独立交付 |
| `npm run check:release` | 八仓独立 npm ci、build、链接、隔离、篡改拒绝 | 导出后必须跑 |
| `npm run preview` | 8080 六主机预览 | 本地看效果 |
| `npm run preview:sites` | 各导出站独立端口 | 验收导出产物 |

长命令要等退出码，不要把“启动成功”当成“通过”。

## 3 内容模型

### 3.1 一条内容的字段

关键 frontmatter：

```yaml
id: space.earth            # 稳定 ID，前缀必须与目录一致
title: 地球
summary: ...
dimension: length          # 对应 quantity.unit
quantity:
  value: 12742000
  unit: m
  measure: 体积等效平均直径（2 × 6371 km）
  approximate: true
  # bound: upper | lower  # 上下限；零质量用 zeroMass
reviewStatus: reviewed     # draft | needs-review | reviewed | published
sources: [...]             # title / url / publisher / accessed
related: [...]             # 3–6 个真实 ID
review:
  method: source-check
  date: '2026-11-09'
  notes: [...]
conditions: ...            # 质量轴：reference / scope / precision / massType / includesDarkMatter / uncertainty
visual: {...}              # 质量轴逐条配置 16 带位置、log10、颜色；光子走 zeroMass
```

- 稳定 ID 决定文章与场景身份；不要因为改标题或同值就合并、删除 ID。
- `related` 只能指向真实 ID，建议 3–6 条，跨轴链接用绝对子域。
- 未定量值写 `value: null` + `status: undetermined`；时间条目还要 `chronology.plot: false`。
- `reviewed` 必须有 `sources` 与 `review.method/date`。
- `reviewed` 的定义是“结构与来源口径核对”，不是外部同行评审。

### 3.2 审核状态

流程：`draft → needs-review → reviewed → published`。需要更新时回到 `needs-review` 并保留变化记录。

本轮已完成：

- 元素 135、质量 146、时间剩余 3 条全部转 `reviewed`。
- 元素条目的 review notes 写明“未逐页重读全文、来源站反爬”的限制。
- 质量轴 9 条工程条目移除了与对象无关的第三来源。

### 3.3 未定量值

50 条：空间 11、时间 14、温度 8、元素 17。它们保留文章与原因，不进入数轴。不要为了“补齐”强行填数；需要改时先说明模型、样本、时期或测量端点。

## 4 站点架构与构建链

```
Markdown
  → engine 内容编译 / 校验 / 确定性快照
  → 每站固定内容包 + 固定引擎包
  → 各站静态 dist
  → scripts/build.mjs 组合成 dist/
```

`dist/` 布局：

```
dist/index.html                 门户
dist/{space,time,temperature,elements,mass}/   各轴根
dist/static/                    vendor / og / media / favicon
```

- 门户 `sitemap.xml` 是 index，含 `sitemap-pages.xml` + 五个子域 sitemap。
- 子域页面由 `rewriteNavigation` 与 `seoAssets` 生成绝对 canonical、og:url、sitemap、robots。
- 共享资源只在 `dist/static` 存一份，五轴通过 `staticOrigin` 引用。
- 门户不承载 `/entry/`；所有条目在所属子域静态生成。
- 旧路径 `/space/`、`/time/`、`/energy/` 在门户直接 404，不做 301。

## 5 关键文件地图

| 位置 | 看什么 |
|---|---|
| `config/project.json` | 品牌、版本、六站 origin/publicOrigin、staticOrigin |
| 各站 `site.config.json` / `package.json` | 站点配置与锁定的内容/引擎版本 |
| `engine/packages/content/` | 校验、编译、快照、路由、口径呈现；`mass-scale.js` 是 16 带质量轴常量 |
| `engine/packages/quantities/` | 单位、数量级、比例 |
| `engine/packages/renderer/` | Three.js 视口、资源池、生命周期 |
| `engine/packages/ui/` | 公共样式、品牌、控件、详情、回退；文章阅读版式在 `refined.css` 末尾 |
| `engine/packages/build/` | 静态构建、SEO、sitemap、服务；`article.mjs` 负责 `massFigure` 与文章结构 |
| `home/render.mjs`、`home/learning.mjs`、`home/src/` | 门户页面、学习层、检索、总表 |
| `space/src/` | 空间场景、精选模型、比较 |
| `time/src/`、`temperature/src/` | 各自 demo、scene、backdrop、subjects、模板 |
| `elements/src/` | 周期表、壳层阶梯、元素属性；`stage.js` 是概率云 3D 舞台，`index.html` 是舞台入口 |
| `mass/src/` | B1–B16 阶梯与口径；`stage.js` 是质量深渊 3D 舞台 |
| `scripts/preview-hosts.mjs` | 8080 六主机预览（Host 分派 + 响应改写） |
| `work/preview-multi-port.mjs` | 8080–8086 分站预览，适合单独看元素/质量 |
| `deploy/nginx.conf` | 生产六主机、缓存、CORS、安全头、旧路径 404 |

## 6 常见任务

### 改一条正文

1. 只改 `content/entries/<axis>/<slug>.md` 的正文、来源、related、review notes。
2. 不改稳定 ID、`quantity`、`chronology`、`visual`，除非是单独的科学/图景修订。
3. 运行 `npm run check:content -- --gate` 与 `npm run check`。
4. `npm run build`，再在 8080 预览看一条。

### 改量值

1. 保留旧值证据（`review.originalQuantity` 或 `review.original.quantity`）。
2. 同步检查 `measure`、`displayValue`、`approximate/bound`、`conditions/uncertainty`。
3. 跑 `check:migration`、`check:models`、`check`。
4. 量值变更可能影响模型与 related 条目，必要时同步更新。

### 新增条目

1. ID 与目录前缀一致，`related` 指向真实 ID。
2. 至少 2 条来源，正文引用全部来源且 ≥4 次。
3. 空间/时间/温度/元素正文 450–800 汉字、5 个 `##`；元素短文允许 450–1200（40 条长文保留 901–1116），质量 450–800、5 节。
4. 新条目从 `draft` 或 `needs-review` 开始，来源核对后再转 `reviewed`。
5. 跑 `check:content -- --gate`、`check:learning`（如果进入学习层）、`check`。

### 改前端或共享 UI

- 公共 UI 的有效来源是 `engine/packages/ui`；`space/src` 仍有旧副本，构建会过滤，只改旧副本可能看不到效果。
- 五站顶栏应保持 7 项：五个轴 + 知识库 + 导航；不要再把“知识库”放到 `nav` 外面或重复输出。
- 学习层不再占顶部/底部导航，首页靠后的 `LEARNING LAYER` 内容区是主要入口；`/learning/` 仍可作为延伸阅读。
- 改完跑 `check:axe` 与 8080 预览；移动端 390×844 至少看首页与一条条目。
- 不要删图文回退路径（`view=reading`）。

### 更新独立交付

1. 停止所有源文件编辑。
2. `npm run release:local`。
3. `npm run check:release`。
4. 更新 `artifacts/release-manifest.json` 相关文档与快照记录。

### 发布

按 [LOCAL_DELIVERY.md](LOCAL_DELIVERY.md)：DNS 六条 A/AAAA + static CNAME、双 SAN 证书、`nginx -t`、软链切换、六主机冒烟脚本。不要用 localhost 当正式 origin。

## 7 不能踩的坑

1. **`reviewed` 不等于同行评审。** notes 里要写清来源可达性与未重读的限制。
2. **不要伪造未定量值。** 没有统一直径/年代/温度的概念保留 `null`，正文解释原因。
3. **来源必须被正文引用。** `[n]` 对应 `sources` 顺序；来源 URL 必须 https。
4. **质量轴口径优先。** 总质量、重子质量、恒星质量、含暗物质、上下限不能混用。
5. **元素轴相对 Z−1 是叙述结构。** 六项里没有实验值的项要明确写“不可得”，不要编造预测数字。
6. **旧路径不做跳转。** 门户 `/space/`、`/time/`、`/energy/` 直接 404。
7. **不要手改 `dist`、`artifacts/repos`、`node_modules`。** 它们会被构建或导出覆盖。
8. **公共 UI 在 `engine/packages/ui`。** 改站点私有副本不一定生效。
9. **图景口径写在条目里。** 空间不同条目可能比较半径、距离、波长或步幅；时间/温度模型不能跨模型当比例尺。
10. **预览是 Host 分派。** 8080 需要 hosts 或 Chrome `--host-resolver-rules`；4188 只在元素专项 axe 审计时临时 `npm start`，不要与 8080–8086 多端口预览混淆。
11. **没有 Git。** 当前工作区没有版本控制；改大范围前先备份到 `work/`。
12. **发布包只含 `dist/`。** 不要把源码、`artifacts/`、`work/` 打进 tar。

## 8 事实来源与证据

优先级从高到低：

1. `dist/release.json`：当前构建的版本、快照、dataHash、条目数。
2. `artifacts/release-manifest.json`：八仓、内容/引擎包哈希、站点入口；1.3.0 重建后更新。
3. `artifacts/verification.json`：八仓通过、44,096 个跨站/资源链接、39 个运行模块、依赖隔离与篡改拒绝。
4. `artifacts/model-verification.json`：970 个模型通过、384 条未构造。
5. `work/shots/axe-mobile-sites-1.3.0.json` 与 `work/shots/axe-mobile-elements-1.3.0.json`：axe 证据；六站 21 条路由、元素专项 138 条路由在 390×844 下均 0 违规、0 加载错误。
6. 元素概率云实拍：`v1.3-elements-z5-5.png`（B，s 球与 p 双叶）、`v1.3-elements-fe-6.png`（Fe，多亚层）、`v1.3-elements-u-8.png`（U，密度淡出后不过曝）；质量与文章页见 `v1.3-desktop-mass-stage.png`、`v1.3-desktop-mass-article.png`、`v1.3-mobile-mass-article.png`。
7. `docs/PROJECT_SUMMARY.md`：当前总结与进度。
8. `docs/archive/AI_HANDOFF_1.0.5.md`：旧版交接文档，历史基线。

发布包：旧 `chidu-1.3.0.tar.gz`（14,835,190 字节）为上一版基线；本轮改动后尚未重打，验收后统一出包；旧 `chidu-1.2.2.tar.gz` 保留作历史基线。

## 9 未完成事项

| 事项 | 现状 |
|---|---|
| 八仓与 1.3.0 包 | 八仓导出、独立验收与 1.3.0 包均已完成 |
| 上传发布 | 未执行；用户明确先做本地精品，DNS、证书、服务器均未配置 |
| 品牌定名 | 「尺度 MAGNITUDE」为工作名，`brandStatus: working` |
| 内容深化 | 1354 条已审核，但机制/证据/误区级深化仍可按主题继续 |
| GPU 验收 | 970 个模型 CPU 全过；已做桌面/移动 Playwright 截图，未逐场景真实 GPU/手机 |
| 50 条未定量值 | 有意保留；不承诺全部转为可比较值 |
| 版本管理 | 无 Git；建议初始化并保留 1.3.0 验收快照 |

## 10 历史基线

| 版本 | 内容 | 站点 |
|---|---|---|
| 0.3.0 | 285 条，四站 | 门户 + 空间 + 时间 + 温度 |
| 0.4.0 | 52 篇机制/证据深化 | 同上 |
| 1.0.5 | 1070 条全部 reviewed | 门户 + 空间 + 时间 + 温度 |
| 1.1.0 | 1354 条全部 reviewed | 门户 + 五轴 + static，八仓 |
| 1.1.1 | 1354 条；补齐 rights/英文标题，修复时间/温度详情对话框 | 同上 |
| 1.2.0 | 1354 条；元素「原子剧场」与质量「质量深渊」首屏接入，保留两站知识层 | 门户 + 五轴 + static，八仓 |
| 1.2.1 | 1354 条；元素核外电子改为辉光点并沿壳层绕核运行；修复切换元素后辉光纹理释放问题 | 同上 |
| 1.2.2 | 1354 条；元素核外电子改为 s/p/d/f 概率云与半透明瓣面，移除电子点轨道和两条占据弧；高 Z 内层降亮 | 同上 |

旧版交接文档保留在 [archive/AI_HANDOFF_1.0.5.md](archive/AI_HANDOFF_1.0.5.md)。早期范围记录见 [FULL_SITE_PLAN.md](FULL_SITE_PLAN.md)，仅作历史基线。
