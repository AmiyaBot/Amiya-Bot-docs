# 事件监听

监听频道发生的事件。<br>
一般来说消息（`MESSAGE_CREATE`、`AT_MESSAGE_CREATE`以及`DIRECT_MESSAGE_CREATE`）也属于事件，但是在构建阶段，这些消息事件会被归类并产出
Message 对象。剩下的事件类型，则会产出
Event 对象。可以使用 on_event 装饰器去获取事件。

## 注册事件响应

```python
from amiyabot import Event, BotAdapterProtocol

...

@bot.on_event('GUILD_CREATE')
async def _(event: Event, instance: BotAdapterProtocol):
    ...

@bot.on_event(['CHANNEL_CREATE', 'CHANNEL_UPDATE'])
async def _(event: Event, instance: BotAdapterProtocol):
    ...
```

- `on_event` 接受一个**事件名或事件名列表**作为参数。事件名可参阅对应适配器服务的官方文档。
- 响应函数是一个协程，接受 Event 对象和 bot 实例两个参数。

### Event 对象

| 属性         | 类型     | 释义               |
|------------|--------|------------------|
| appid      | String | 发生该事件的 Bot AppId |
| event_name | String | 事件名              |
| data       | Dict   | 事件的内容字典          |

## 频道事件

频道事件 `Event.data` 的值为 websocket 消息体里的 `d` 字段内容。

如下为 [频道事件 - GUILD_CREATE](https://bot.q.qq.com/wiki/develop/api/gateway/guild.html#guild-create) 官方文档示例的
websocket 消息体。

```json
{
    "op": 0,
    "s": 6,
    "t": "GUILD_CREATE",
    "d": {
        "description": "频道介绍",
        "icon": "",
        "id": "200000000",
        "joined_at": "2021-10-21T11:20:18+08:00",
        "max_members": 300,
        "member_count": 17,
        "name": "频道名称",
        "op_user_id": "100000000",
        "owner_id": "100000000"
    }
}
```

在 on_event 里接收到时

```python
@bot.on_event('GUILD_CREATE')
async def _(event: Event, instance: BotAdapterProtocol):

    print(event.data['name'])        // 频道名称
    print(event.data['description']) // 频道介绍
```

频道的事件名和内容可以查看官方文档 [事件订阅](https://bot.q.qq.com/wiki/develop/api/gateway/intents.html)

## 第三方服务事件

- [mirai-api-http 事件类型一览](https://docs.mirai.mamoe.net/mirai-api-http/api/EventType.html)
- [go-cqhttp 事件](https://docs.go-cqhttp.org/event/)
