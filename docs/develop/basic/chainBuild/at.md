# 发送At

发送 `@XXX`

## Chain().at()

::: tip 提示<br>
私信回复里 at 无效
:::

| 参数名   | 类型   | 释义                        | 默认值   |
|-------|------|---------------------------|-------|
| user  | int  | @ 的用户ID，默认为 Message 对象的用户 |       |
| enter | bool | 是否 @ 用户后换行                | False |

```python
Chain(data).at(12345678).text('hello, world')
```

Chain 对象在实例化的时候，默认会在消息体头部添加 `@XXX`。
