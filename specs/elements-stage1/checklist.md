# 元素轴阶段一 验收清单

- [x] 13 条内容已存在：7 个闭壳 hub（`elements.shell-2/10/18/36/54/86/118`）+ 6 个解释页（`elements.explain-*`），全部 `reviewStatus: draft`。
- [x] 7 个 hub 正文均包含「相对 Z−1：多了一个质子改变了什么」小节，未退化为字典条目。
- [x] 118 条元素数据集完整：Z=1–118 无缺号，闭壳为 2/10/18/36/54/86/118，H→Og 相邻链连续。
- [x] 元素站页面具备壳层阶梯、18 族周期表与详情面板；`?z=` 与 `?entry=elements.shell-N` 均可定位元素。
- [x] 「相对 Z−1」面板展示六项差值；阶段一未编造 IE/半径/电负性/同位素数字，明确标注待阶段二补入。
- [x] 7 个闭壳 hub 在页面与条目页之间有可点击往返链接；条目页 CTA 能回到元素站并选中正确 Z。
- [x] 键盘 ←/→（Z±1）、↑/↓（同族）、Home/End 已接入；`prefers-reduced-motion` 生效。
- [x] 无 JS 首屏包含标题、118/7/6/13 统计、七级阶梯、周期表与 7 个 hub 链接及 `<noscript>` 说明。
- [x] 门户五入口导航、知识库筛选、数据页维度、首页第 04 张「元素」卡片与 about 文案已接入。
- [x] 五站构建成功，sitemap 1,090 个可索引页面，`dist/elements/elements.json` 为 118 条。
- [x] 六条校验全部通过：check、check:content --gate、check:migration、check:models、check:learning、release:local + check:release。
- [x] `engine/packages/ui/og/elements.png` 为 1200×630、项目自有的深色 18×7 网格图，闭壳列金色高亮。
- [x] 浏览器抽查通过：周期表渲染、Fe 的 Z−1/Z+1、`?z=26`、闭壳链接、条目页回流、五站导航。
- [x] 语义审计通过：1 个 h1、`lang="zh-CN"`、skip-link、8 处 aria 属性；本轮未安装 axe-core，采用人工语义与键盘审计。
- [x] 阶段一明确保留缺口：118 条正文、A/B/C 级条目、来源页与方法页尚未编写。
