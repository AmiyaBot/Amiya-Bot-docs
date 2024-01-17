# Ark 消息

发送 QQ 频道 ARK
模板消息，详情请查看[发送 ark 消息](https://bot.q.qq.com/wiki/develop/api/openapi/message/post_ark_messages.html)。

## Chain().ark()

| 参数名         | 类型         | 释义              | 默认值 |
|-------------|------------|-----------------|-----|
| template_id | str        | 模版 ID           |     |
| kv          | List[dict] | 模版 key-value 数据 |     |

```python
kv_data = [
    {'key': '#PROMPT#', 'value': '通知提醒'},
    {'key': '#METATITLE#', 'value': '标题'},
    {'key': '#METASUBTITLE#', 'value': '子标题'},
    {'key': '#METACOVER#', 'value': 'https://vfiles.gtimg.cn/vupload/20211029/bf0ed01635493790634.jpg'},
    {'key': '#METAURL#', 'value': 'https://qq.com'},
]

Chain(data, at=False).ark(37, kv_data)
```

![](https://mpqq.gtimg.cn/bot-wiki/online/assets/img/37.2955062b.png)
