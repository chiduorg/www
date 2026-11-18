# 静态 JSON 契约

本项目的“接口”就是发布到 `dist/` 的一组静态 JSON。它们没有版本前缀，靠内容版本（`content-snapshot.version`）与构建快照（`id`）区分，缓存策略由 `deploy/nginx.conf` 负责。任何字段增删都应视为契约变更，需要同步升内容或引擎版本，并更新本文。

## 1. `content.json`（站点根与门户根）

全量条目数组。字段来自 `content/entries/<dim>/<slug>.md` 的 front-matter 加上编译补全的 `body`。门户根为 1354 条；各轴目录不再发布完整 `content.json`，改用轻量 `entries.json`。

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | `<dimension>.<slug>`，全局唯一，不可变（旧链接已彻底废弃，无 alias） |
| `title` / `titleEn` / `summary` | string | 展示用中英文标题与摘要 |
| `category` / `zone` / `conceptGroup` / `tags` | string / string / string / string[] | 分类与检索维度 |
| `displayValue` | string | 面向读者的量值字符串，必须与 `quantity` 等价 |
| `quantity.value` | number \| null | 国际单位制数值（space 为米，time 为秒，temperature 为开尔文，elements 为原子序数 Z，mass 为千克）；`null` 表示未定 |
| `quantity.unit` / `measure` / `bound` | `m` \| `s` \| `K` / string / bool | 国际单位制单位、口径 slug、是否边界参考点 |
| `quantity.range` | object \| 缺省 | `{min, max, unit}`；`unit` 必须与 `quantity.unit` 相同，`min ≤ max` 且 `value` 落在区间内 |
| `quantity.approximate` / `status` | bool / string \| 缺省 | 是否近似；`status` 目前为 `undetermined` 等说明性标记 |
| `reviewStatus` | enum | `reviewed` / `published` / 其他；决定是否 `noindex` |
| `sources` | array | `title` / `url` / `publisher` / `accessed` |
| `body` | string | Markdown 正文（`entries.json` 中不含） |
| `visual` | object | `template` / `scene` / `caption` / `note` |

## 2. `entries.json`（各轴目录）

轻量列表：`content.json` 去掉 `body / review / rights / sourcePath / sources / related / uncertainty`，`legacy` 仅保留 `id`。由站点 `loadEntries()` 在首屏请求，按 `quantity.value` 升序使用。

## 3. `catalog.json`

- 门户根：**发布契约**。字段：`id / title / titleEn / summary / category / displayValue / reviewStatus / tags / measureType / mode / zone / conceptGroup / value / unit / measure / measureLabel / visual`。`measureLabel` 是 `measure` slug 的中文标签，供表格直接展示；`value` 可为 `null`。
- 内容仓 `content/dist/catalog.json`：**构建中间物，不对发布**，字段更少且无 `measureLabel`。不要把它当作 API。

## 4. `release.json` / `content-snapshot.json`

- `release.json`：`site / version / engineVersion / contentVersion / contentSnapshot / dataHash / entryCount / buildProfile`。用于核对部署产物与锁定版本。
- `content-snapshot.json`：`schemaVersion / version / id / dataHash / entryCount / bySite`。`dataHash` 是 `content.json` 的 SHA-256，构建时校验；`id` 是快照标识。

## 5. 图景配置（Markdown `visual` 字段）

图景配置的唯一来源是 `content/entries/<site>/*.md` 的 `visual` 字段：`template`（必须在 `src/object-templates.js` 的注册表中）、`scene`、`variant` / `color` / `referenceAxis` / `caption` / `note` / `framePadding` / `sourceMeasure`。构建只从编译后的 `content.json` 读取这些字段，不再合并任何站内 JSON。

- 2026-11-08 起删除各轴旧 `src/visual-map.json`：内容与 Markdown 重复，且 220 条 key 的 `note` 已落后于正文（正文是后续修订版），构建与运行时都不读取它。同时删除只会把旧 JSON 写回 Markdown 的 `scripts/sync-visuals.mjs` 与 `scripts/seed-visuals.mjs`。
- `space/src/featured-map.json` 仅保留 `id → scene` 的 16 个精选场景注册（引擎构建用它校验场景名），标题与说明文本只存在于 Markdown。

## 6. 构建期契约校验

`engine/packages/content/validate.js` 在每次 `buildSite()` 开始时校验：

- `content.json`：必填字段、ID 唯一、单位/维度/状态枚举、区间上下限与单位一致、来源 URL、`review.date` 格式、`related` 引用存在。
- `catalog.json`：记录数与 ID 集合必须与 `content.json` 完全一致，`measureLabel` 不得为空。

校验失败会直接中止构建并一次性列出全部问题（最多 80 条）；校验只读，不改变 `content-snapshot.json` 的 `dataHash`。新增字段若为可选，应先扩展校验再使用。

## 7. 缓存与错误约定

- 所有 `.json`：`Cache-Control: no-cache`（每次协商，可用 304）。
- CSS/JS：`public, max-age=300, must-revalidate`（文件名无指纹）。
- 图片/字体/OG：`public, max-age=2592000, immutable`。
- 错误不返回 JSON：静态站统一返回 `404.html`（HTML），状态码 404。客户端 `fetch` 失败时应回退到站根路径或降级为图文模式，不假设存在错误 JSON。

## 8. 稳定性与版本策略

- `id` 永久稳定；删除条目会同时从 `content.json`、`catalog.json`、sitemap 移除，并产生 404（不做重定向兼容）。
- 新增字段视为向后兼容（客户端忽略未知字段）；重命名或改语义需要升 `contentVersion`，并在本文记录。
- 不引入 `/v1/` 前缀：站点与 JSON 同版本发布，缓存靠 `no-cache` 协商而非路径版本。
