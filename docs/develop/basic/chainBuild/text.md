# 文字

发送一段文字消息

## Chain().text()

| 参数名          | 类型   | 释义           | 默认值  |
|--------------|------|--------------|------|
| text         | str  | 内容文本         |      |
| auto_convert | bool | 是否超出字数后转换为图片 | True |

```python
Chain(data).text('hello, world')
```

设置 `auto_convert=True` 可开启自动转换，当文字超过一定长度时（默认配置为 100），会自动将本段落转换为图片发送。

## 插入表情

在文本内使用 `[face:ID]` 模板也可以插入 QQ 表情。

```python
Chain(data).text('hello, world[face:175]')
```
