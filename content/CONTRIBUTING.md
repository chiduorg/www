# 如何修订一个条目

深化正文前请阅读 [写作与来源规范](EDITORIAL_GUIDE.md)。先解释对象、证据和比较口径，再说明误解与知识联系；维护记录不代替科普正文。

1. 找到 entries 下的稳定 ID，不因改标题或数值更换 ID。
2. 查阅可定位的研究论文、机构资料或正式标准。记录标题、完整 URL、发布者和访问日期。
3. 全文核对或重写。summary、quantity、displayValue 和正文必须一致；说明范围、近似、适用条件、理论与实测的区别。
4. 改数值时，在 review.originalQuantity 中保留旧值，并在 review.notes 中说明改动及依据。审核状态为 needs-review 时不宣称事实已核对。
5. related 只填写仓内实际存在的 ID；visual 只能引用站点已注册的场景，不能放可执行代码。
6. 对从旧站重写完成的正文记录 rights.status: rewritten。不要自动给未经确认的旧文添加开放许可。
7. 执行 npm run build；修复校验问题后，提交具体差异、来源依据和预览结果。

最低字段示例：

```yaml
id: space.example
title: 示例对象
titleEn: Example
dimension: length
category: 日常尺度
summary: 简明描述参考对象与比较口径。
quantity:
  value: 1
  unit: m
  measure: 参考长度
  approximate: true
displayValue: 约 1 m
conditions: 明确参考样本与适用条件。
related: []
reviewStatus: needs-review
sources:
  - title: 可核实资料标题
    url: https://example.org/reference
    publisher: 资料发布者
    accessed: '2026-11-04'
rights:
  status: rewritten
```

示例不是可发布的科学条目；新条目需要真实来源和独立正文。
