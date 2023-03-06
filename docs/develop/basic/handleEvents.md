# 事件监听

监听频道发生的事件。<br>
一般来说消息（`MESSAGE_CREATE`、`AT_MESSAGE_CREATE`以及`DIRECT_MESSAGE_CREATE`）也属于事件，但是在构建阶段，这些消息事件会被归类并产出
Message 对象。剩下的事件类型，则会产出
Event 对象。可以使用 on_event 装饰器去获取事件。

## 注册事件响应

```python
from amiyabot import Event, BotAdapterProtocol

...

@bot.on_event()
async def _(event: Event, instance: BotAdapterProtocol):
    ...

@bot.on_event('GUILD_CREATE')
async def _(event: Event, instance: BotAdapterProtocol):
    ...

@bot.on_event(['CHANNEL_CREATE', 'CHANNEL_UPDATE'])
async def _(event: Event, instance: BotAdapterProtocol):
    ...
```

- `on_event` 接受一个**事件名或事件名列表**作为参数（无参数则监听全事件）。事件名可参阅对应适配器服务的官方文档。
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

## mirai-api-http 事件

- [mirai-api-http 事件类型一览](https://docs.mirai.mamoe.net/mirai-api-http/api/EventType.html)

mirai-api-http 戳一戳事件推送的消息。

```json
{
    "type": "NudgeEvent",
    "fromId": 123456,
    "subject": {
        "id": 123456,
        "kind": "Group"
    },
    "action": "戳了戳",
    "suffix": "的脸",
    "target": 123456
}
```

监听 type 的值 `NudgeEvent` 即可。

```python
@bot.on_event('NudgeEvent')
async def _(event: Event, instance: BotAdapterProtocol):
    ...
```

## go-cqhttp 事件

- [go-cqhttp 事件](https://docs.go-cqhttp.org/event/)

针对 go-cqhttp 事件的 [数据结构](https://docs.go-cqhttp.org/reference/data_struct.html#post-type)，AmiyaBot
对其进行了分类，可以使用以下事件名精确获取。

如：戳一戳事件中 go-cqhttp 对其进行了三级分类。

```json
{
    "post_type": "notice",
    "notice_type": "notify",
    "sub_type": "poke"
}
```

监听 `notice` 事件时，无法获得准确的事件。因为在 `notice_type` 的分类里，还包含了好友添加、消息撤回等一系列子事件。<br>
当然，如果你需要监听这个大类的事件时，仍然可以监听这个事件名。

```python
# 监听 post_type 为 notice 的事件
@bot.on_event('notice')
async def _(event: Event, instance: BotAdapterProtocol):
    ...

# 监听 post_type 为 notice 且 notice_type 为 notify 的事件
@bot.on_event('notice.notify')
async def _(event: Event, instance: BotAdapterProtocol):
    ...
```

通过事件名 `notice.notify.poke`，即可监听到准确的戳一戳事件。

```python
@bot.on_event('notice.notify.poke')
async def _(event: Event, instance: BotAdapterProtocol):
    ...
```

其他类别的事件同理，通过事件数据中的 `post_type.xxxxx_type.sub_type` 定义事件监听名即可。
