# Embed 消息

发送 QQ
频道卡片消息，详情请查看[官方API文档](https://bot.q.qq.com/wiki/develop/api/openapi/message/template/embed_message.html)

## Chain().embed()

| 参数名       | 类型        | 释义         | 默认值 |
|-----------|-----------|------------|-----|
| title     | str       | 标题         |     |
| prompt    | str       | 消息弹窗内容     |     |
| thumbnail | str       | 缩略图 url    |     |
| fields    | List[str] | embed 字段数据 |     |

```python
Chain(data, at=False).embed(
    '标题',
    '消息通知',
    'xxxxxx',
    ['当前等级：黄金', '之前等级：白银', '😁继续努力'],
)
```

![](https://mpqq.gtimg.cn/bot-wiki/online/assets/img/embed.18d8bc6d.jpg)
