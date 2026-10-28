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

| 属性         | 类型   | 释义               |
|------------|------|------------------|
| appid      | str  | 发生该事件的 Bot AppId |
| event_name | str  | 事件名              |
| data       | dict | 事件的内容字典          |
| event_id   | str  | 事件信封 id（WebSocket payload 最外层 `id`），QQ 群/全域事件下可作为被动消息锚点 |

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

## QQ 群 / 全域事件

群聊与全域适配器下，**消息类事件**产出 `Message` 对象，其余事件产出 `Event` 对象。

| 事件名 | intent | 说明 |
|---|---|---|
| `C2C_MESSAGE_CREATE` | `GROUP_AND_C2C_EVENT (1<<25)` | 用户单聊发消息给机器人 → `Message` |
| `GROUP_AT_MESSAGE_CREATE` | `GROUP_AND_C2C_EVENT (1<<25)` | 用户在群里 @ 机器人 → `Message` |
| `GROUP_MESSAGE_CREATE` | `GROUP_AND_C2C_EVENT (1<<25)` | 群内所有消息（需开启「接收所有消息」）→ `Message` |
| `GROUP_ADD_ROBOT` | `GROUP_AND_C2C_EVENT (1<<25)` | 机器人被添加到群聊 → `Event` |
| `GROUP_DEL_ROBOT` | `GROUP_AND_C2C_EVENT (1<<25)` | 机器人被移出群聊 → `Event` |
| `GROUP_MSG_REJECT` / `GROUP_MSG_RECEIVE` | `GROUP_AND_C2C_EVENT (1<<25)` | 群管理员关闭/开启通知 → `Event` |
| `INTERACTION_CREATE` | `INTERACTION (1<<26)` | 互动事件（按钮回调等）→ `Event` |
| `GROUP_JOIN_REQUEST` | `GROUP_MEMBER_EVENT (1<<24)` | 用户申请加群 → `Event`，需 `subscribe_group_member_event=True` |

```python
@bot.on_event('INTERACTION_CREATE')
async def _(event: Event, instance: BotAdapterProtocol):
    # 按钮回调需回应，否则客户端会保持 loading
    await event.ack_interaction()
```

### 以事件为锚点回复消息

被动消息有两个锚点，官方二选一：`msg_id`（来自 `GROUP_AT_MESSAGE_CREATE` 等消息事件）与
`event_id`（事件最外层的 `id`）。按钮回调 `INTERACTION_CREATE` 等事件**没有原消息 ID**，只能用
`event_id` 回复，此时请使用 `Event.reply()`，适配器会自动完成场景字段映射与 `msg_seq` 递增。

```python
from amiyabot.builtin.messageChain.keyboard import InlineKeyboard

@bot.on_event('INTERACTION_CREATE')
async def _(event: Event, instance: BotAdapterProtocol):
    # 1) 先回应互动，否则用户端一直 loading
    await event.ack_interaction()

    # 2) 回一条事件锚定的消息（可以带 markdown / 键盘）
    keyboard = InlineKeyboard()
    keyboard.add_row().add_button(
        button='btn_again',
        render_label='再来一次',
        action_type=1,
        action_data='again',
    )

    await event.reply(
        Chain(at=False).markdown_content('野地秘行是能天使的第一套皮肤。', keyboard=keyboard)
    )
```

事件字段会自动映射到 `Message` 对象，供 Chain 构建使用：

| 事件字段 | Message 字段 | 说明 |
|---|---|---|
| 事件信封 `id`（`payload.id`） | `event_id` | 被动消息锚点；为空时回落到事件体内的 `id` |
| `group_openid` | `channel_openid` | 群聊发送目标 |
| `group_id` | `channel_id` | 缺失时回落到 `group_openid` |
| `group_member_openid` | `user_openid` | 群聊中的操作者 |
| `user_openid` | `user_openid` + `is_direct=True` | 单聊场景 |

底层等价写法（自行构造 `Message` 时使用）：

```python
await instance.send_event_message(Chain(at=False).markdown_content('...'), event_id=event.event_id)
```

::: warning 边界条件 <br>
- 同一事件 **5 分钟内最多回复 5 条**，第 6 条会抛出 `QQGroupMessageError`。
- 事件超过 5 分钟后再回复，平台返回 `40034026`，适配器同样抛出带 `code` 的 `QQGroupMessageError`。
- 频道（guild）事件没有 `event_id` 语义，调用 `Event.reply()` 会抛出 `NotImplementedError`。
- 普通消息仍使用 `msg_id` 锚点，`Message.send()` 行为不变。
- 异常类可从 `amiyabot.adapters.tencent.qqGroup` 导入，`code` 为平台错误码。
:::

群聊事件名可查看官方文档 [事件订阅 Intents](https://bot.q.qq.com/wiki/develop/api-v2/dev-prepare/event-emit/payload.html#事件订阅-intents)

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
