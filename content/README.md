# Universe Atlas content

本仓是空间、时间、温度、元素和质量五个探索站的唯一知识源。每个条目独占一个 Markdown 文件，事实、单位、口径、条件、来源和图景声明随条目版本保存。

历史：0.4.0 在原有 285 篇重写正文中深化 52 篇，包含全部 28 条量值未定的阅读条目和 24 篇核心文章；增加科普解释和来源，不改变原有量值与图景。继续编辑请阅读 [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md)。

安装项目提供的固定引擎包后执行 `npm ci`、`npm run build`。构建输出 dist/content.json、catalog.json、content-snapshot.json 和 build-report.json；站点只采用锁定版本和快照，不在运行时请求内容仓服务。

`dist/catalog.json` 是内容仓的构建中间物（供门户生成器读取的扁平索引），**不是对外 API**；站点实际发布的 `/catalog.json` 由 `engine/packages/build/index.mjs` 生成，字段更全（含 `measureLabel`）。两套同名文件不含版本前缀，字段契约见 `docs/STATIC_DATA.md`。

先阅读 CONTRIBUTING.md 与 LICENSE_STATUS.md。现有 1354 篇正文已逐条重写并记录来源；1304 条参考量值完成来源核对，50 条保留未定量值及说明。来源核对不等于外部同行评审。
