# 当前发布部署说明（内容 1.3.0 · 六主机）

本节是本次发布的唯一部署依据；下文 v0.3.0 部分仅作历史交付记录保留。

当前 `dist/` 为 1.3.0 最新本地精品版：桌面 56px / 移动 52px 紧凑顶栏、统一页脚、元素/质量全屏 3D 舞台、`ZH / EN` 语言切换与明暗主题切换；五站舞台支持浅色 3D；空间细胞/人体为 CC0 高精度 GLB。全站英文 19 条审计路由 0 CJK；新增 `/legal/` 法律入口与四份法律文档；六站页脚统一显示“法律与隐私”、版权与许可与 chidu.org 域名；顶部统一 7 项（空间 / 时间 / 温度 / 元素 / 质量 / 知识库 / 导航），`导航` 同窗口指向 `https://netcn.org/` 且不直接显示域名；≤700px 改为固定 8 项 App 式底栏（尺度首页 + 五轴 + 知识库 + 导航）；学习层改为首页 `LEARNING LAYER` 内容区；全站深色底压深到 `#070b12` 一档，21 条含法律页路由 axe 0 违规。

## 本地六主机预览（HTTP，无需证书）

`npm run build` 之后执行 `npm run preview`，单端口 `8080` 按 `Host` 头分派六个站点，行为对齐 `deploy/nginx.conf`（404、缓存头、CORS、gzip）。响应中的 `https://<host>` 会就地改写为 `http://<host>:8080`，`dist/` 产物本身不变。

先把域名指到本机。Windows 以管理员编辑 `C:\Windows\System32\drivers\etc\hosts`：

```
127.0.0.1 chidu.org
127.0.0.1 space.chidu.org
127.0.0.1 time.chidu.org
127.0.0.1 temperature.chidu.org
127.0.0.1 elements.chidu.org
127.0.0.1 mass.chidu.org
127.0.0.1 static.chidu.org
```

不想改 hosts 时，可只给 Chrome 加解析规则（按本机 Chrome 实际安装路径调整）：

```powershell
& "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --host-resolver-rules="MAP chidu.org 127.0.0.1, MAP *.chidu.org 127.0.0.1"
```

如果既不想改 hosts、也不想动浏览器参数，可用仓库内的多端口预览：

```powershell
node work\preview-multi-port.mjs
```

门户在 `http://127.0.0.1:8080/`，空间 / 时间 / 温度 / 元素 / 质量分别在 `8081`–`8085`，共享静态资源在 `8086`；跨站链接已按端口改写，浏览器直接打开即可，不需要域名解析。

访问地址：

- `http://chidu.org:8080/`
- `http://space.chidu.org:8080/`
- `http://time.chidu.org:8080/`
- `http://temperature.chidu.org:8080/`
- `http://elements.chidu.org:8080/`
- `http://mass.chidu.org:8080/`
- `http://static.chidu.org:8080/`（仅共享资源，无首页；直接访问 `/vendor/three.module.js`、`/og/space.png` 等）

端口可用 `PREVIEW_PORT=8090 npm run preview` 覆盖。

## 域名与产物

| 主机 | 产物目录 | 说明 |
|---|---|---|
| `chidu.org` | `dist/` | 门户、知识库、路线、学习、挑战、关于 |
| `space.chidu.org` | `dist/space/` | 空间站首页、条目页、`entries.json`、sitemap、robots |
| `time.chidu.org` | `dist/time/` | 时间站 |
| `temperature.chidu.org` | `dist/temperature/` | 温度站（原 energy，ID 前缀已改为 `temperature.*`） |
| `elements.chidu.org` | `dist/elements/` | 元素站 |
| `mass.chidu.org` | `dist/mass/` | 质量站 |
| `static.chidu.org` | `dist/static/` | three.js、OG 图、媒体图片、favicon 共用一份 |

发布包 `chidu-1.3.0.tar.gz` 解压后即上述布局：

```
index.html  about/  library/  learning/  ...
space/      index.html  entry/  entries.json  sitemap.xml  robots.txt
time/       index.html  entry/  entries.json  sitemap.xml  robots.txt
temperature/index.html  entry/  entries.json  sitemap.xml  robots.txt
elements/   index.html  entry/  entries.json  sitemap.xml  robots.txt
mass/       index.html  entry/  entries.json  sitemap.xml  robots.txt
static/     vendor/  og/  media/  favicon.svg
project.json  sitemap.xml  sitemap-pages.xml  robots.txt
```

只发布 `dist` 一个目录。源码、`artifacts/`、`work/`、`node_modules/` 与验收产物均不进入部署包；部署机只需 Nginx 与静态文件，不需要 Node。

当前包：`chidu-1.3.0.tar.gz`，14,835,190 字节（14.15 MiB），SHA-256 `d3782cf24ba18e4516f03ed8adcf3a1fc721062d21d75aff2f4a003d4f241dee`；1.2.2 旧包及其校验文件保留作历史基线。

旧路径 `/space/`、`/time/`、`/energy/` 不做 301，直接 404；所有 canonical、`og:url`、sitemap 均按子域生成。门户 `sitemap.xml` 是 sitemap index，汇总 `sitemap-pages.xml` 与五个子域 sitemap。

## DNS 与证书前置

门户与五轴共六条 A/AAAA 记录，全部指向同一入口；`static` 建议用 CNAME 指向 `chidu.org`：

| 记录 | 类型 | 值 |
|---|---|---|
| `@` | A / AAAA | `<origin-ipv4>` / `<origin-ipv6>` |
| `space` | A / AAAA | 同上 |
| `time` | A / AAAA | 同上 |
| `temperature` | A / AAAA | 同上 |
| `elements` | A / AAAA | 同上 |
| `mass` | A / AAAA | 同上 |
| `static` | CNAME | `chidu.org.`（若需独立入口，再加第 7 条 A/AAAA） |

TTL 建议 300。证书必须同时覆盖 **`chidu.org` 与 `*.chidu.org` 双 SAN**：通配符证书不覆盖 apex，也不覆盖多级子域。证书路径按实际环境替换，部署前必须执行 `nginx -t`，通过后才 `systemctl reload nginx`。

## 打包与解包抽验

```bash
# 本地
tar -czf chidu-1.3.0.tar.gz -C redesign/dist .
sha256sum chidu-1.3.0.tar.gz > chidu-1.3.0.tar.gz.sha256

# 服务器
sha256sum -c chidu-1.2.2.tar.gz.sha256
mkdir -p /srv/chidu/releases/20261118-1
tar -xzf chidu-1.3.0.tar.gz -C /srv/chidu/releases/20261118-1
cd /srv/chidu/releases/20261118-1
find . -name '*.html' | wc -l                 # 预期 1424
find . -name 'sitemap*.xml' | wc -l           # 预期 7
grep -q '"contentVersion": "1.3.0"' project.json
grep -q '"engineVersion": "1.3.0"' project.json
for p in . space time temperature elements mass; do test -f "$p/index.html"; done
```

## 部署步骤

1. 本地执行 `npm run build`，再执行 `npm run release:local` 与 `npm run check:release`，以及 `npm run check`、`npm run check:subdomains`、`npm run check:axe`，全部通过后才允许打包。
2. 生成 `chidu-1.3.0.tar.gz` 与 `.sha256`，上传到服务器临时目录。
3. 校验 SHA-256 后解压到带时间戳的新目录（见上）。
4. 权限：`chown -R www-data:www-data /srv/chidu/releases/20261118-1`；目录 755、文件 644；发布目录只读。
5. 保留上一版目录不动，把软链原子切换：`ln -sfn /srv/chidu/releases/20261118-1 /srv/chidu/current.tmp && mv -Tf /srv/chidu/current.tmp /srv/chidu/current`。Nginx 默认 root 为 `/srv/chidu/current`，切换后无需 reload；需要逐域回滚时见下文。
6. Nginx 使用 [deploy/nginx.conf](../deploy/nginx.conf)：一个 http 上下文片段同时服务门户、五个子域与 `static.chidu.org`。把文件放到 `/etc/nginx/conf.d/chidu.conf`（或 sites-enabled 链接），由主配置 `http {}` 加载；不要整体替换 `/etc/nginx/nginx.conf`，否则会缺少 `events/http` 与 `mime.types`。`map $host $atlas_release` 让每台主机可独立指向某一版发布目录，默认全部跟随 `current`。配置已包含 `www.chidu.org → chidu.org` 的 301、`.md` 纯文本类型与缓存/安全头，部署前仍需按实际证书路径替换并执行 `nginx -t`。
7. `nginx -t` 通过后 `systemctl reload nginx`。
8. 执行下方冒烟脚本，全部 200 且 404/旧路径断言通过后才算发布完成。

## 冒烟脚本（六主机）

```bash
#!/usr/bin/env bash
set -uo pipefail
fail=0
check() { code=$(curl -sS -o /dev/null -w '%{http_code}' "$1"); printf '%s %s\n' "$code" "$1"; [ "$code" = 200 ] || fail=1; }
expect() { code=$(curl -sS -o /dev/null -w '%{http_code}' "$1"); printf '%s %s (expect %s)\n' "$code" "$1" "$2"; [ "$code" = "$2" ] || fail=1; }

# 门户
for p in / /library/ /learning/ /sitemap.xml /sitemap-pages.xml /robots.txt; do check "https://chidu.org$p"; done

# 五轴：首页 / 条目 / entries.json / sitemap / robots
axes=(space time temperature elements mass)
samples=(space/a4-paper time/21cm-absorption temperature/21cm-spin-temperature elements/ac mass/2m1207b)
for i in "${!axes[@]}"; do
  a=${axes[$i]}; s=${samples[$i]}
  check "https://$a.chidu.org/"
  check "https://$a.chidu.org/entry/$s/"
  check "https://$a.chidu.org/entries.json"
  check "https://$a.chidu.org/sitemap.xml"
  check "https://$a.chidu.org/robots.txt"
done

# 共享资源
for p in /vendor/three.module.js /og/space.png /media/hero-earth.jpg /favicon.svg; do check "https://static.chidu.org$p"; done
curl -sSI https://static.chidu.org/vendor/three.module.js | grep -qi '^access-control-allow-origin: \*' || fail=1

# 跨域 related 抽样 20 条
mapfile -t related < <(curl -sS https://mass.chidu.org/entry/mass/2m1207b/ | grep -oE 'https://[a-z]+\.chidu\.org/entry/[^"]+' | sort -u | head -20)
[ "${#related[@]}" -eq 20 ] || { echo "related sample count ${#related[@]} != 20"; fail=1; }
for u in "${related[@]}"; do check "$u"; done

# 404 与旧路径
expect https://space.chidu.org/no-such-page/ 404
for p in space time energy; do expect "https://chidu.org/$p/" 404; done

# 安全头
curl -sSI https://chidu.org/ | grep -qi '^strict-transport-security:' || fail=1
curl -sSI https://chidu.org/ | grep -qi '^x-content-type-options: nosniff' || fail=1

exit $fail
```

## 回滚

1. 全局回滚：`ln -sfn /srv/chidu/releases/<上一版> /srv/chidu/current.tmp && mv -Tf /srv/chidu/current.tmp /srv/chidu/current`，无需 reload。
2. 逐域回滚：只改 `deploy/nginx.conf` 中 `map $host $atlas_release` 的一行，例如把 `space.chidu.org` 指到 `/srv/chidu/releases/<上一版>`，然后 `nginx -t && systemctl reload nginx`；其余主机仍走 `current`。
3. 若问题只出在缓存，先确认 HTML 与 JSON 已按 no-cache 返回；CSS/JS 最长残留 5 分钟（`max-age=300, must-revalidate`）。仍异常时再回滚。
4. 回滚后重跑冒烟脚本。保留最近两版目录，确认稳定后再删除更早版本。

## 缓存与体积（实测）

- 共享资源收拢到 `static.chidu.org`：three.js 0.73 MB、OG 图 6 张 0.38 MB、媒体图片 11 张 1.34 MB、favicon 约 0.4 KB，合计 2.46 MB。
- 若每域各放一份，门户 + 五轴合计约 12.6 MB（three.js 只随三个 3D 站计 2.19 MB，OG 2.29 MB，媒体 8.10 MB），收拢后节省约 10.1 MB 重复传输与缓存占用。
- 首屏不加载整站 `content.json`；各轴改用按站切分的 `entries.json`。文章页在所属子域静态生成，门户不再承载 `/entry/`。

# 本地全站交付 · v0.3.0（历史记录）

日期：2026-11-04。范围：用户要求“先本地，正文逐条重写”。工作名 Our Universe Atlas 可配置。没有创建远程仓、推送代码、发布网站或绑定域名。

## 交付清单

| 部分 | 当前交付 | 位置 / 入口 |
|---|---|---|
| 详细计划 | M0–M6 范围、依赖、任务和验收；六仓职责与接口 | FULL_SITE_PLAN.md |
| 内容 | 285 篇 Markdown 全部重写并记录来源；257 条参考量值完成来源核对 | content/entries、docs/research |
| 未定量值 | 13 空间 + 10 时间 + 5 温度保留阅读、修订证据和待核对说明，不进入数量轴 | 内容报告、各静态文章 |
| 门户 | 总览、全站搜索、维度筛选、285 篇静态文章、来源/条件/关联 | /、/library/、/entry/ |
| 空间站 | 88 个可比较条目、对数缩放、旋转、A/B 比较、参照物、分享链接和图文模式 | /space/ |
| 时间站 | 81 个可定位事件、数量级时间、宇宙一年、两参考年代间隔、播放与图文模式 | /time/ |
| 温度站 | 88 个可定位条目、K / °C、范围与上下界、按温度浏览、具体对象与图文模式 | /temperature/ |
| 学习与贡献 | 三条探索路线；22 组核对过的比较题；每轮最多 8 题；本地成绩；内容与模型贡献规范 | /journeys/、/quiz/、/contribute/ |
| 多仓交付 | 六份独立源码、固定内容/引擎包、package-lock、快照、各仓 CI 模板 | artifacts/repos |
| 版本追溯 | 内容快照、包 SHA-256、独立构建报告、模型报告 | artifacts/*.json |

来源核对表示本轮对列出的资料、数值及口径进行核对，不是外部同行评审。28 条未定量值不是漏填的占位数；有些概念本来就没有统一直径、年代或温度，其他条目仍需要指定模型、样本与条件。

## 六仓联系

| 仓名 | 唯一职责 | 输入 | 输出 / 消费方 | 升级影响 |
|---|---|---|---|---|
| content | Markdown 正文、事实、量值、条件、来源、关联和资产许可 | 编辑贡献与研究资料 | 固定内容包、目录与 SHA-256 快照 → 四站 | 各站主动升级，运行时不读取内容仓服务 |
| engine | 内容契约、数量计算、可选视口、资源生命周期、共用 UI 和静态构建 | 已复用的公共需求 | 五类按能力引用的 ESM 模块 → 内容编译与各站 | 各站分别锁定版本，不强制同步升级 |
| home | 门户、搜索、静态文章、路线、挑战和贡献说明 | content + engine | 门户静态产物；链接三个探索站 | 不包含所有站的模型，不是探索站运行前提 |
| space | 空间模型、背景、尺度交互与比较 | content + engine | 空间站 dist | 不导入时间、温度站源码 |
| time | 时间事件、图景、历史压缩与年代间隔 | content + engine | 时间站 dist | 不导入空间场景或环境代码 |
| energy | 温度图景、具体对象、单位转换与热现象 | content + engine | 温度站 dist | 不导入空间场景；当前没有焦耳能量集合 |

各站构建时采用固定包，部署后为独立静态站。共用引擎无需在线服务器。仓名均不带旧项目前缀；当前是本地源码交付目录，并非已创建的远程 Git 仓。

## 图景覆盖与精度

257 个可定位条目全部配置图景：33 个精选具名场景，224 个逐条配置模型复用各站合计 60 类模板。不是 257 个全部独立手工建模。

- 空间：16 个精选 + 72 个模板配置。DNA 以横宽比较；核子采用参考尺；康普顿波长、rms 半径、驱动蛋白步幅和星际距离使用各自口径。太阳系按海王星轨道直径比较，行星标记放大并注明。
- 时间：8 个精选 + 73 个模板配置。宇宙背景之外增加林地、冰期、地质层、聚落、科学工具和信息网络环境。两年代差值不冒充过程持续时间；宇宙一年是参考坐标的可视化换算。
- 温度：9 个精选 + 79 个模板配置。低温仪器、炉腔、物态容器、厨房、行星、恒星和星云分别表达；背景按对象语境调整。切换条目不等于把同一对象连续加热。颜色、光晕与运动速度没有编码真实温度色谱或实测动力学。

参考图景、视觉夸张、测量范围、理论值和未定量值都有对应说明。模型是解释性插画，不是精确古生态重建或物理仿真。

## 已执行的验收

| 检查 | 结果与证据 |
|---|---|
| 整合构建 | 四站分别构建后组合，全部采用 v0.3.0 引擎/内容与同一快照 |
| 内容与页面 | npm run check：285 篇静态文章、7,027 个本地链接、搜索/筛选、单位边界、确定性快照、Markdown 安全与语法通过 |
| 迁移追溯 | npm run check:migration：285 个旧 ID 保留；量值改动有旧值和修订说明；三条越界时间已修正 |
| 全量模型 | npm run check:models：257/257 实际构造函数通过，28 条未定量值不构造模型；检查参考长度、有限顶点/矩阵/边界、0/1/10/60 秒动画；报告 artifacts/model-verification.json |
| 独立六仓 | npm run check:release：各仓独立 npm ci、构建与检查，7,032 个跨站/资源链接、54 个运行模块；依赖从各自 node_modules 解析；内容篡改被拒绝，兄弟站产物未被改动 |
| HTTP | 四个独立站首页返回 200、HTML MIME 正确，未知路径返回 404；整合预览未知路径也返回 404 |
| 空间浏览器交互 | 地球纹理与自转；拖动旋转；缩放后视野宽度改变、物体随之变小；地月比较约 3.67；同条目 DNA 比较为 1，并适配长模型取景 |
| 时间浏览器交互 | 宇宙一年两端到达大爆炸与现在；12月31日23:59:59 的终点显示；太阳系到现在参考间隔约46亿年；同年代的灵长类与 PETM 按不同 ID 精确选中 |
| 温度浏览器交互 | 高纯铝参考 933.473 K ↔ 660.323 °C；回力棒外流上界 0.5 K ↔ −272.65 °C；正确保留上界标识；非精选条目不会错误选亮最近章节 |
| 手机视口 | 390×844 下门户、空间、时间/年代间隔、温度与问答主要路径检查；修正横向溢出，按 documentElement.clientWidth 比较 |
| 键盘与详情 | 时间尺 Home/End、原生选择器、详情打开与 Esc 关闭、焦点状态检查；静态文章由 HTML 构建，不依赖 JS 获取正文 |
| 问答 | 完整走完8题；答案与解释、文章及场景链接、结果、本地最佳成绩刷新保留和主动清除通过 |
| 暂停 | 暂停后渲染状态为 paused，跨操作读取帧数保持不变；手动选择仍可更新 |
| WebGL 生命周期 | 源码 qa/renderer.html（不进入 dist）触发真实上下文丢失并收到事件/释放视口；真实纹理加载宽度2048，关闭位图后宽度0；立即取消请求后 pending0、loaded0、cancelled1 |
| 图文模式 | 时间、温度及空间提供主动图文入口；图文模式不创建 WebGL 视口，保留条目/读数/文章，自动播放入口正确禁用 |

CPU 几何检查不证明 GPU 画质。浏览器视觉检查覆盖地球、DNA、太阳系、林地、炉腔等代表场景和关键流程，没有把全部257个模型称为逐个完成GPU截图验收。

## 性能与适用边界

本轮在 Windows 桌面的内嵌浏览器、localhost、默认1280×720和390×844视口测量。门户样本 LCP 为676ms（桌面）和484ms（390视口），CLS均为0.0000；门户仅加载 performance.js、portal.js，没有加载 Three.js。最终时间林地样本约29.6FPS、157次绘制调用、46,758三角形。数值是本机样本，不是移动硬件或弱网承诺。

代码已实现30FPS调度、页面隐藏停止连续帧、减少动态偏好默认关闭运动、慢帧降低像素密度、缓存上限和离页释放。IAB 未提供可验证的真实后台标签切换/动态偏好模拟，本轮对这两条做源码检查；实际后台暂停及操作系统减少动态偏好还需在目标浏览器验证。未运行真机、弱网、屏幕阅读器完整审计或远程 CI。

## 本地预览与复现

- 整合预览：http://127.0.0.1:4188/
- 独立门户：http://127.0.0.1:11667/
- 独立空间：http://127.0.0.1:4191/
- 独立时间：http://127.0.0.1:4192/
- 独立温度：http://127.0.0.1:4193/

以 config/local-origins.json 和 artifacts/release-manifest.json 为实际入口依据。被其他进程占用时 preview:sites 自动选择空闲端口、重建链接，不结束未知服务。

修改内容/源码后：npm run build → npm run check / check:migration / check:models。生成独立交付：npm run release:local → npm run check:release → npm run preview:sites。

发布归档：`tar -czf chidu-1.0.5.tar.gz -C dist .`，解压到空的发布目录即可核对全部静态文件；源码与 `artifacts/` 不进归档。旧 Python 归档脚本与 0.3.0/0.4.0 ZIP 已在 1.0.5 清理中移除。

## 公开发布前仍需处理

按用户要求，这些事项没有执行：正式品牌与域名配置、GitHub归属和远程建仓、公开内容/代码许可证选择、公开投稿通道、远程CI及正式部署。现有行星纹理CC BY 4.0和Three.js MIT记录随产物保留；正文 rights.rewritten 不等于已经授予公共许可证。

28条未定量值可持续完善，也可长期保留“没有统一量值”的准确表述，不需要为了覆盖率填入虚假数值。当前本地交付完成与正式公开上线是不同验收范围。
