# 五轴二级域名统一（v1.1.0）实施规格

状态：待批准  
范围：`redesign/` 全仓；目标是门户与五条轴各自独立域名，旧路径不保留 301。

## 1. 结论先行（已确定的决策）

| 项 | 决策 |
|---|---|
| 门户 | `chidu.org` |
| 空间 | `space.chidu.org` |
| 时间 | `time.chidu.org` |
| 温度 | `temperature.chidu.org`（原 `energy` 站正名） |
| 元素 | `elements.chidu.org` |
| 质量 | `mass.chidu.org` |
| 共享资源 | `static.chidu.org`（three.js、OG 图、媒体图片、favicon 收拢一份） |
| 站点路径 | 所有站 `path: "/"`；不再有 `/space/`、`/time/`、`/energy/`、`/elements/`、`/mass/` |
| 条目页 | 每轴在自己子域生成 `/entry/<axis>/<slug>/`；门户不再承载条目页 |
| 旧链接 | `/space/`、`/time/`、`/energy/` 一律不做 301 |
| ID | `energy.*` 全量改为 `temperature.*`；站点目录 `energy/` 改为 `temperature/` |
| 版本 | 全仓 1.1.0（minor），快照重建 |

## 2. 域名与产物映射

| 主机 | 构建目录 | 产物根 | 主要 URL |
|---|---|---|---|
| `chidu.org` | `home/dist` | 整合 `dist/` 根 | `/`、`/library/`、`/journeys/`、`/learning/`、`/about/`、`/quiz/`、`/data/`、`/sitemap.xml`（index） |
| `space.chidu.org` | `space/dist` | 整合 `dist/space/` | `/`、`/entry/space/<slug>/`、`/entries.json`、`/sitemap.xml`、`/robots.txt` |
| `time.chidu.org` | `time/dist` | `dist/time/` | `/`、`/entry/time/<slug>/`、`/entries.json`… |
| `temperature.chidu.org` | `temperature/dist` | `dist/temperature/` | `/`、`/entry/temperature/<slug>/`、`/entries.json`… |
| `elements.chidu.org` | `elements/dist` | `dist/elements/` | `/`、`/entry/elements/<slug>/`、`/entries.json`… |
| `mass.chidu.org` | `mass/dist` | `dist/mass/` | `/`、`/entry/mass/<slug>/`、`/entries.json`… |
| `static.chidu.org` | 由整合构建生成 | `dist/static/` | `/vendor/*`、`/og/*`、`/media/*`、`/favicon.svg` |

门户 `sitemap.xml` 为 sitemap index，引用：
`https://chidu.org/sitemap-pages.xml` + 五个子域的 `https://<axis>.chidu.org/sitemap.xml`。

## 3. 配置模型

`config/project.json`（生产）与各站 `site.config.json`（本地独立构建）统一为：

```json
{
  "publicOrigin": "https://chidu.org",
  "staticOrigin": "https://static.chidu.org",
  "sites": {
    "home":        {"label":"总览","path":"/","origin":"https://chidu.org","publicOrigin":"https://chidu.org"},
    "space":       {"label":"空间","path":"/","origin":"https://space.chidu.org","publicOrigin":"https://space.chidu.org","dimension":"length"},
    "time":        {"label":"时间","path":"/","origin":"https://time.chidu.org","publicOrigin":"https://time.chidu.org","dimension":"cosmic-time"},
    "temperature": {"label":"温度","path":"/","origin":"https://temperature.chidu.org","publicOrigin":"https://temperature.chidu.org","dimension":"temperature"},
    "elements":    {"label":"元素","path":"/","origin":"https://elements.chidu.org","publicOrigin":"https://elements.chidu.org","dimension":"element"},
    "mass":        {"label":"质量","path":"/","origin":"https://mass.chidu.org","publicOrigin":"https://mass.chidu.org","dimension":"mass"}
  }
}
```

- `origin`：跨站链接（导航、related、explore）的基址；本地独立构建时写 `http://127.0.0.1:<port>`。
- `publicOrigin`：canonical、`og:url`、sitemap、robots、JSON-LD 的基址；本地也保持生产子域。
- 站点 `publicOrigin` 为空（release-local 的本地交付包）时，沿用现有行为：不生成 canonical/sitemap，robots 为 `Disallow: /`。
- `config/local-origins.json` 键改为 `temperature`，端口沿用 `4193`；新增 `static: 4196`（仅供预览脚本，不改 manifest 的八仓列表）。

## 4. 代码改动清单

### 4.1 内容与站点正名

1. `git mv content/entries/energy content/entries/temperature`；`git mv energy temperature`。
2. 全仓活动面（`content/`、`home/`、`scripts/`、`engine/`、六站源码、`config/`、`docs/LOCAL_DELIVERY.md`、根 `README.md`）执行 ID 级替换：
   - 正则 `energy\.([a-z0-9][a-z0-9_-]*)` → `temperature.$1`；
   - 站点键/目录字面量 `'energy'` / `"energy"` / `/energy/` → 对应 `temperature` 形态（逐文件确认，不进入 `artifacts/`、`work/`、`dist/`、`node_modules/`）。
3. `content/entries/*/*.md` 的 `related` 中所有 `energy.*` 一并变为 `temperature.*`。
4. `content/learning/*.json` 中的条目 ID 同步。
5. `content/package.json`、`engine/package.json`、`home|space|time|temperature|elements|mass/package.json`、根 `package.json` 中版本与 `atlas.engine`/`atlas.content`/依赖版本全部 1.1.0。
6. `engine/packages/content/validate.js` 的 ID 正则加入 `temperature` 并移除 `energy`。
7. `engine/packages/content/compile.mjs` 的类型数组改为五轴新键。

### 4.2 标题/导航与条目页

1. 新增 `engine/packages/build/article.mjs`，导出 `renderArticlePages({entries,all,config,site}) → Map<relativePath,html>`：
   - 路径：`entry/<site>/<slug>/index.html`；
   - 内容与现门户条目页等价：面包屑、标题、摘要、正文、来源、条件、不确定性、侧栏、所在轴对数位置、related 卡片；
   - 所有站内/跨站链接用 `siteUrl(site, relative, config)`，related 用 `articleUrl(entry, config)`；
   - 页面骨架含六站统一导航（门户 + 五轴），LOGO 指门户；
   - 不写 canonical / og:url，交给构建期 `seoAssets` 统一注入。
2. `home/render.mjs` 删除条目页循环（第 52–63 行的 article 生成），保留门户、知识库、路线、学习页；`articleUrl` 卡片自动指向子域。
3. `engine/packages/build/index.mjs`：
   - `site !== 'home'` 时调用 `renderArticlePages`；
   - 站点白名单、场景注册校验、three.js 站点列表全部改用 `temperature`；
   - `applyFirstScreen` 分支由 `energy` 改为 `temperature`（首屏条目仍为 `sun-surface`）。
4. 六站 `src/index.html` 的头部导航补齐五轴 + 知识库；`rewriteNavigation` 负责改成绝对子域链接。
5. `engine/packages/content/routes.js`：
   - `dimensions.temperature = '温度'`；
   - `articleUrl(entry, config)` 改为 `siteUrl(siteOf(entry), 'entry/<site>/<slug>/', config)`；
   - `siteUrl` 保持 `origin` 语义，新增 `canonicalBase(config, site)` 读取 `sites[site].publicOrigin || 顶层 publicOrigin`。

### 4.3 canonical / OG / sitemap / robots

`engine/packages/build/index.mjs`：

1. `pageUrl` 由 `canonicalBase(effective, site) + relative` 生成，禁止拼 `siteBasePath`。
2. `og:image` 在 `staticOrigin` 存在时用 `${staticOrigin}/og/${ogSite}.png?v=...`。
3. JSON-LD 的 `url`/`publisher`/`isPartOf` 使用当前站 `publicOrigin`（文章页用所属轴）。
4. 非门户站：`sitemap.xml` 为 urlset，仅含本站 HTML；`robots.txt` 指向本站 sitemap。
5. 门户：
   - `sitemap-pages.xml` 为门户页面 urlset；
   - `sitemap.xml` 为 sitemapindex，包含 `sitemap-pages.xml` 与五个子域 sitemap；
   - `robots.txt` 指向 `https://chidu.org/sitemap.xml`。
6. 删除门户条目页后，`/entry/...` 不再出现在门户 sitemap。

### 4.4 跨域 related

- 条目页 related 卡片由 `articleUrl` 生成绝对子域 URL。
- 统一导航由 `siteUrl` 生成绝对子域 URL。
- 构建后断言：任何 `href` 不得出现 `https://chidu.org/(space|time|temperature|elements|mass)/`。
- 抽样 20 条 `related` 跨轴链接，映射到本地六站端口后必须 200。

### 4.5 共享资源 static.chidu.org

实测体积（当前）：

| 资源 | 单份 | 每域各一份（门户 + 5 轴） | 收拢一份 |
|---|---:|---:|---:|
| three.js（core + module） | 0.73 MB | 2.19 MB（3 个 3D 站） | 0.73 MB |
| OG 图 6 张 | 0.54 MB | 3.24 MB | 0.54 MB |
| 媒体图片 | 1.35 MB | 8.10 MB | 1.35 MB |
| favicon / 图标 | 约 2 KB | 约 12 KB | 约 2 KB |
| 合计 | 约 2.62 MB | 约 13.5 MB | 约 2.62 MB |

决策：收拢到 `static.chidu.org`，五个子域与门户均引用绝对地址，节省约 10.9 MB 重复资产，并让 OG/贴图只缓存一份。当前无 Web 字体；若后续加入，同样放 `static` 并用 `Access-Control-Allow-Origin`。

落地：
- 构建期把 `/media/`、`/vendor/`、`/og/`、`/favicon.svg` 的引用改写为 `${staticOrigin}/...`（HTML、JS、CSS 文本资源统一处理）。
- 整合构建生成 `dist/static/{vendor,og,media,favicon.svg}`，再删除各站内部重复副本。
- 独立交付包在 `staticOrigin: null` 时仍保留本地副本，保证单仓可离线运行。

### 4.6 nginx（单文件）

`deploy/nginx.conf`：

- `map $host $atlas_root`：`chidu.org → /srv/chidu/current`，`space.chidu.org → /srv/chidu/current/space`，其余同理，`temperature.chidu.org → /srv/chidu/current/temperature`。
- 一个 HTTPS server：`server_name chidu.org space.chidu.org time.chidu.org temperature.chidu.org elements.chidu.org mass.chidu.org;`，`root /srv/chidu/current/$atlas_root`。
- 证书按通配证书写：`/etc/letsencrypt/live/chidu.org-0001/fullchain.pem`，注释注明必须同时覆盖 `chidu.org` 与 `*.chidu.org`（通配符不覆盖 apex）。
- 安全头沿用：HSTS、nosniff、X-Frame-Options、Referrer-Policy、Permissions-Policy；缓存沿用：HTML/JSON `no-cache`，CSS/JS 300s + revalidate，图片/字体/OG 30 天 immutable，sitemap/robots 1h。
- 一个 HTTP server 对上述六个主机 301 到 HTTPS。
- 一个 `static.chidu.org` server：root `/srv/chidu/current/static`，长缓存、`Access-Control-Allow-Origin: *`、`Cross-Origin-Resource-Policy: cross-origin`。
- 所有 `location` 显式重复安全头（nginx add_header 覆盖语义），不依赖 snippet 文件。

### 4.7 版本与交付面

- 所有 `package.json`、`config/project.json`、六站 `site.config.json`、`content/dist/*` 快照、`artifacts/release-manifest.json`、`docs/LOCAL_DELIVERY.md`、`README.md` 统一 1.1.0。
- `npm run snapshot` 重建快照；`npm run release:local` 重新导出八仓。
- `docs/LOCAL_DELIVERY.md` 重写为子域部署：域名映射、dist 目录布局、static 主机、证书要求、冒烟清单。

### 4.8 校验脚本

- `scripts/check.mjs`：断链检查按站点目录遍历；文章断言改为 `dist/<axis>/entry/<axis>/<slug>/index.html`；新增 canonical 主机断言与旧路径残留断言。
- `scripts/check-content.mjs`、`check-migration.mjs`、`check-models.mjs`、`check-learning.mjs`、`check-release.mjs`、`release-local.mjs`、`serve-sites.mjs`、`scripts/build.mjs`：`energy → temperature`，站点列表七项（home + 五轴）。
- 新增 `scripts/check-subdomains.mjs`：
  - 从 `dist/` 起六站静态服务（home 11667、space 4191、time 4192、temperature 4193、elements 4194、mass 4195、static 4196）；
  - 断言五轴首页、条目页、`entries.json`、`sitemap.xml`、`robots.txt` 均 200；
  - 抽样 20 条跨域 related 链接 200；
  - 统计 canonical 覆盖数与旧形态残留；
  - 输出 `work/subdomain-verification.json`。
- 新增 `scripts/axe-sites.mjs`：每站 3 条路由（首页 + 2 条目页，门户用 `/`、`/library/`、`/learning/`），移动端 390×844，axe WCAG 2.0/2.1 A+AA，0 违规；输出 `work/shots/axe-mobile-sites-<ver>.json`。
- 根 `package.json` 增加 `check:subdomains`、`check:axe`（改为六站）。

## 5. 验收步骤（全部必须实测）

1. `npm run snapshot` → `npm run build`，构建成功。
2. 六项校验：`npm run check`、`check:content`、`check:migration`、`check:models`、`check:learning`、`release:local` + `check:release`。
3. `npm run check:subdomains`：5 轴 × 5 类资源 200；20 条跨域 related 200；canonical 全覆盖；0 处旧路径。
4. `npm run check:axe`：每站 ≥3 路由、0 违规。
5. 构建确定性：连续两次构建，比较 `dist/content.json`、`dist/*/entries.json`、`dist/*/sitemap.xml`、`dist/sitemap.xml` 的 SHA-256 一致。
6. `nginx -t`（有环境时）；无环境则以配置静态审查 + 语法检查记录。
7. 输出最终报告：域名映射表、资源策略与体积、canonical 覆盖数、跨域链接连通、版本面一致性、go / no-go。

## 6. 明确不做

- 不做任何旧路径 301。
- 不改三轴 3D 模型、内容事实与质量轴数值。
- 不为共享资源新增运行时依赖或 CDN；`static.chidu.org` 由同一 nginx 静态托管。
- 不创建远程仓库、不推送、不真实签发证书。
