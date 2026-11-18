# 元素轴 · 阶段一任务清单

依赖顺序：T2 → T3/T4 可并行 → T5 → T6 → T7 → T8 → T9。
每个任务完成后立即运行该任务的验证命令；失败先修当前任务，不进入下一个。

## T2 引擎与 schema 支持

- [x] `content/schema.json`：ID 前缀、`dimension` 枚举、`unit` 枚举、可选 `element` 对象。
- [x] `engine/packages/content/index.js`：`validateEntry` 加 elements 映射、Z 整数 1–118、hub/符号一致性。
- [x] `engine/packages/content/validate.js`：`UNITS` 加 `Z`、`DIMENSIONS` 加 `element`、ID 正则。
- [x] `engine/packages/content/compile.mjs`：编译循环与 `bySite` 加 `elements`。
- [x] `engine/packages/content/routes.js`：`dimensions` 加 `elements:'元素'`。
- [x] `engine/packages/content/presentation.js`：`measureLabel` 加 element 分支。
- [x] 验证：`node -e "import('./engine/packages/content/index.js').then(m=>console.log(m.validateEntry({id:'elements.fe',title:'铁',summary:'x',dimension:'element',quantity:{value:26,unit:'Z',measure:'原子序数',approximate:false},related:[],reviewStatus:'draft',sources:[{title:'x',url:'https://example.org',publisher:'x',accessed:'2026-11-08'}]})))"` 返回空数组；非法 Z=0 返回错误。

## T3 118 条元素数据集

- [x] 新建 `elements/src/elements-data.mjs`：118 条 `z/symbol/nameZh/nameEn/period/group/block/predicted/closedShell/periodStart/periodEnd`。
- [x] `fillConfiguration(z)`：Aufbau 顺序 + 异常表（24、29、41、42、44、45、46、47、57、58、64、78、79、89、90、91、92、93、96、103）；`[Ne]`/`[Ar]`/`[Kr]`/`[Xe]`/`[Rn]` 简写。
- [x] 导出 `elements`、`closedShells`（2/10/18/36/54/86/118）、`periods`。
- [x] 验证：`node --input-type=module -e "import('./elements/src/elements-data.mjs').then(m=>{const z=m.elements.map(e=>e.z);console.log(z.length, new Set(z).size, z[0], z.at(-1), m.elements.filter(e=>e.closedShell).map(e=>e.z).join(','))})"` → `118 118 1 118 2,10,18,36,54,86,118`。

## T4 13 条内容条目

- [x] 7 个 hub：`content/entries/elements/shell-{2,10,18,36,54,86,118}.md`，按 spec 第 3.1 节写满 5 小节、450–800 字、≥2 来源、≥4 引用、related 3–6、conditions、visual。
- [x] 6 个解释页：`content/entries/elements/explain-{configuration,energy-levels,shielding,lanthanide-contraction,nuclear-stability,periodic-law}.md`，按 spec 第 3.2 节。
- [x] 每页写前用 WebFetch 验证 2–3 条来源 URL；写后逐条核对引用编号与来源顺序。
- [x] 所有 `related` 目标必须已存在（hub/解释页之间或现有 `time.*`）。
- [x] 验证：`node scripts/check-content.mjs --gate` 只应因要素条目字数/引用报错；修到 0 个问题。

## T5 元素站骨架

- [x] `elements/package.json`、`elements/site.config.json`、`elements/scripts/{build,check,serve}.mjs`。
- [x] `elements/src/index.html`：静态首屏（118 元素、7 次闭壳）、阶梯/周期表/详情容器、导航、noscript。
- [x] `elements/src/app.js`：读 `elements.json` + `entries.json`；阶梯、18×7 周期表、Z−1 面板、prev/next、hub 链接、`?z=` 深链、键盘、reduced-motion。
- [x] `elements/src/elements.css`：桌面/移动端布局。
- [x] build 脚本在 `buildSite` 后写 `dist/elements.json`。
- [x] 验证：`node elements/scripts/build.mjs` 成功；dist 内 `elements.json` 118 条，index.html 引用 app.js。

## T6 门户与管线接入

- [x] `config/project.json`、`home/site.config.json`、`space/time/energy/site.config.json`、`config/local-origins.json` 加 elements。
- [x] `scripts/build.mjs`、`check.mjs`、`check-content.mjs`、`check-learning.mjs`、`check-models.mjs`、`check-release.mjs`、`release-local.mjs`、`serve-sites.mjs`、`build-notices.mjs`、`audit-content.mjs` 按 spec 4.3 加 elements/排除规则。
- [x] `home/render.mjs` 五入口导航、知识库筛选、数据表、首页第 04 卡片、about 文案。
- [x] `home/src/library.js` 维度白名单。
- [x] `package.json` 加 `build:elements`。
- [x] 验证：`npm run snapshot` 输出 1,083 条且 `bySite.elements=13`；`npm run build` 生成 `/elements/`。

## T7 元素分享图

- [x] 生成 `engine/packages/ui/og/elements.png`（1200×630，深色底 + 18×7 网格 + 闭壳列高亮，项目自有）。
- [x] 验证 PNG 尺寸与文件可读；不复制其他站图片。

## T8 六条校验与发布

- [x] `npm run check`
- [x] `node scripts/check-content.mjs --gate`
- [x] `npm run check:migration`
- [x] `npm run check:models`
- [x] `npm run check:learning`
- [x] `npm run release:local`，随后 `npm run check:release`
- [x] 记录每条命令的真实输出；失败项列出命令、错误与是否已修复。

## T9 浏览器与无障碍抽查

- [x] 启动 `npm start`（或 4188 端口的预览），浏览器打开 `/elements/`。
- [x] 检查 H→Og 连续链、Fe 的 Z−1/Z+1、`?z=26`、闭壳 hub 链接、键盘 ←/→、移动端宽度。
- [x] 检查无 JS 首屏文案与 7 个 hub 链接。
- [x] axe：若 `axe-core` 可安装则注入运行；否则做语义/键盘人工审计并明确报告未执行 axe。
- [x] 汇总阶段一简报：条目数、站点数、校验输出、已知缺口（118 条正文未写、解释页为 draft）。

## 完成定义

T8 全部命令通过且 T9 无严重问题 → 阶段一完成，按用户要求发简报；否则保持未完成并报告阻塞项。
