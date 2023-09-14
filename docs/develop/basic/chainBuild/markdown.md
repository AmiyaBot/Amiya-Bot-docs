# Markdown 生成的图片

添加一张由 markdown 文本渲染的图片，直接传入 md 格式的文本，使用 html
模式渲染。建议先阅读[发送 html 生成的图片](/develop/basic/chainBuild/html.md) 了解如何启动 Chromium。

::: danger 注意<br>
这并非 QQ
机器人官方提供的[发送markdown消息](https://bot.q.qq.com/wiki/develop/api/openapi/message/post_markdown_messages.html)
:::

## Chain().markdown()

| 参数名         | 类型   | 释义          | 默认值   |
|-------------|------|-------------|-------|
| content     | str  | markdown 文本 |       |
| render_time | int  | 渲染时间（毫秒）    | 200   |
| is_dark     | bool | 是否使用暗黑样式    | False |

```python
Chain(data).markdown(text)
```

::: warning 提示 <br>
文本量大时，渲染将会耗费较长时间，默认预留200ms的渲染时间。可通过参数 `render_time` 设置需要的时间。
:::
