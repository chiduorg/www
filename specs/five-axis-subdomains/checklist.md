# 五轴二级域名统一 · 验收清单

- [x] 五轴首页 200（space / time / temperature / elements / mass）
- [x] 五轴条目页 200（每轴抽 2 条）
- [x] 五轴 `entries.json` 200
- [x] 五轴 `sitemap.xml` 200，且为本站 urlset、无旧路径
- [x] 五轴 `robots.txt` 200，且指向本站 sitemap
- [x] 门户 `/`、`/library/`、`/learning/`、`sitemap.xml`（index）、`sitemap-pages.xml`、`robots.txt` 200
- [x] `static.chidu.org` 的 three.js、OG、媒体图、favicon 200
- [x] canonical 覆盖全部可索引页面；6 个 404 页按设计不输出 canonical（1388/1394，可索引页 100%）
- [x] `og:url` 覆盖 1389 页，主机与所属子域一致
- [x] 构建产物 0 处 `https://chidu.org/<axis>/` 旧形态
- [x] 跨域 related 抽样 20 条全部 200
- [x] 六站 axe 各 3 条路由，共 18 路由 0 违规
- [x] 六项校验全过（check / content / migration / models / learning / release）
- [x] 两次构建的 content.json、五轴 entries.json、六份 sitemap SHA-256 完全一致
- [x] 版本面 1.1.0：9 个 package.json、6 个 site.config.json、project.json、快照、release-manifest、八仓导出
- [x] nginx 单文件覆盖门户 + 五轴 + static，含 server_name、通配证书、缓存、安全头与旧路径 404
- [x] 旧路径 `/space/`、`/time/`、`/energy/` 不做 301
