# 五轴二级域名统一 · 任务清单

按顺序执行；每项完成后更新状态。依赖：T1/T2 必须先于 T3–T8。

## T1 内容与站点正名（energy → temperature）
- [x] `git mv content/entries/energy content/entries/temperature`
- [x] `git mv energy temperature`
- [x] 活动面 ID 替换 `energy.<slug>` → `temperature.<slug>`（content、learning、home、scripts、engine、六站源码、config、交付文档）
- [x] `content/entries/*` 的 `related` 全部同步
- [x] `content/learning/*.json` 全部同步
- 验收：`rg "energy\."` 在活动面为 0；条目总数仍 1354。

## T2 版本与依赖面升到 1.1.0
- [x] 根、engine、content、home、space、time、temperature、elements、mass 的 `package.json`
- [x] 所有 `atlas.engine` / `atlas.content` / dependencies / devDependencies 指向 1.1.0
- [x] `config/project.json` 的 contentVersion/engineVersion
- 验收：`rg '"version": "1\.0\.5"|"0\.3\.1"'` 在活动面为 0。

## T3 配置模型：子域 origin
- [x] `config/project.json`：五轴 `path "/"` + `origin` + `publicOrigin`，新增 `staticOrigin`
- [x] 六站 `site.config.json`：sites 映射与 `publicOrigin`
- [x] `config/local-origins.json`：`temperature` + `static`
- 验收：配置 JSON 可解析；六站 site 键与内容前缀一致。

## T4 路由与构建：条目页下沉到各子域
- [x] `engine/packages/content/routes.js`：`articleUrl` 指向所属轴；`dimensions.temperature`；canonical 基址函数
- [x] 新增 `engine/packages/build/article.mjs`（条目页渲染 + 六站导航 + related 绝对链接）
- [x] `engine/packages/build/index.mjs`：非门户调用条目页渲染；`temperature` 站点列表；canonical/OG/sitemap/robots 按子域
- [x] `home/render.mjs`：删除门户条目页循环；保留门户页面
- 验收：`space/dist/entry/space/<slug>/index.html` 存在；门户 `dist/entry/` 不存在。

## T5 canonical / OG / sitemap / robots
- [x] 子域 canonical 与 og:url 全部由 `sites[site].publicOrigin` 生成
- [x] 五轴各自 `sitemap.xml`（urlset）+ `robots.txt`
- [x] 门户 `sitemap-pages.xml` + `sitemap.xml`（sitemapindex）
- 验收：`rg "chidu\.org/(space|time|temperature|elements|mass)/"` 在 dist 为 0；门户 sitemap 为 index。

## T6 共享资源 static.chidu.org
- [x] 构建期把 `/media/`、`/vendor/`、`/og/`、`/favicon.svg` 改写为 `staticOrigin`
- [x] 整合构建生成 `dist/static/{vendor,og,media,favicon.svg}` 并删除各站重复副本
- [x] `staticOrigin: null` 时保留本地副本（独立交付可用）
- 验收：dist 无重复 vendor/media/og；静态 URL 可 200；体积对比写入报告。

## T7 门户与五轴导航
- [x] 门户五轴总览保留，卡片/导航指向子域
- [x] 五轴头部统一为「门户 + 五轴 + 知识库」，任意站可到另外四站
- [x] 404 页跨站回门户可用
- 验收：每站导航含其余四轴绝对链接。

## T8 nginx 单文件
- [x] 六主机 map + 一个 HTTPS server + HTTP 跳转
- [x] 通配证书路径与 apex SAN 注释
- [x] 缓存与安全头沿用
- [x] `static.chidu.org` server + CORS
- 验收：`nginx -t`（本机无 nginx，已做括号、server 块、证书路径静态审查）。

## T9 校验脚本与 axe 扩站
- [x] 更新 check / check-content / check-migration / check-models / check-learning / check-release / release-local / serve-sites / build
- [x] 新增 `scripts/check-subdomains.mjs`（200、20 条跨域 related、canonical 覆盖、旧路径 0）
- [x] 新增 `scripts/axe-sites.mjs`（每站 3 路由、0 违规）
- [x] 根 `package.json` 脚本接入
- 验收：脚本可独立运行并产出证据 JSON。

## T10 全量验收与报告
- [x] snapshot → build → 六项校验
- [x] 子域验收：五轴 × 首页/条目页/entries.json/sitemap/robots = 200
- [x] 跨域 related 抽样 20 条 200
- [x] axe 每站 ≥3 路由 0 违规
- [x] 两次构建 SHA-256 一致
- [x] 报告：域名映射、资源策略与体积、canonical 覆盖数、跨域连通、版本一致性、go / no-go
