# 事件监听

监听频道发生的事件。<br>
一般来说消息（`MESSAGE_CREATE`、`AT_MESSAGE_CREATE`以及`DIRECT_MESSAGE_CREATE`）也属于事件，但是在构建阶段，这些消息事件会被归类并产出 Message 对象。剩下的事件类型，则会产出
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

- `on_event` 接受一个**事件名或事件名列表**作为参数，在 [事件列表](#事件列表) 查看目前可接受的事件名。
- 响应函数是一个协程，接受 Event 对象和 bot 实例两个参数。

### Event 对象

| 属性         | 类型     | 释义               |
|------------|--------|------------------|
| appid      | String | 发生该事件的 Bot AppId |
| event_name | String | 事件名              |
| data       | Dict   | 事件的内容字典          |

事件的内容**暂未封装**~~（下次一定）~~，请查阅官方文档或通过调试获得格式，返回的内容均为 websocket 消息体里的 `d` 字段。

如下为 [频道事件 - GUILD_CREATE](https://bot.q.qq.com/wiki/develop/api/gateway/guild.html#guild-create) 官方文档示例的 websocket 消息体。

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

## 事件列表

### 频道事件

| 事件名                 | 触发方式     | 事件名                        | 触发方式     |
|---------------------|----------|----------------------------|----------|
| GUILD_CREATE        | 机器人加入新频道 | GUILD_MEMBER_ADD           | 成员加入     |
| GUILD_UPDATE        | 频道资料发生变更 | GUILD_MEMBER_UPDATE        | 成员资料变更   |
| GUILD_DELETE        | 机器人退出频道  | GUILD_MEMBER_REMOVE        | 成员被移除    |

### 子频道事件

| 事件名                 | 触发方式     |
|---------------------|----------|
| CHANNEL_CREATE      | 创建子频道    |
| CHANNEL_UPDATE      | 更新子频道    |
| CHANNEL_DELETE      | 删除子频道    |

### 消息事件

| 事件名                   | 触发方式     | 事件名                     | 触发方式     |
|-----------------------|----------|-------------------------|----------|
| MESSAGE_DELETE        | 消息撤回（私域） |                         |          |
| PUBLIC_MESSAGE_DELETE | 消息撤回（公域） |                         |          |
| DIRECT_MESSAGE_DELETE | 消息撤回（私信） |                         |          |
| MESSAGE_REACTION_ADD  | 消息添加表情表态 | MESSAGE_REACTION_REMOVE | 消息删除表情表态 |
| MESSAGE_AUDIT_PASS    | 消息审核通过   | MESSAGE_AUDIT_REJECT    | 消息审核不通过  |
| INTERACTION_CREATE    | 互动事件创建   |                         |          |

### 论坛事件

| 事件名                        | 触发方式   | 事件名                | 触发方式 |
|----------------------------|--------|--------------------|------|
| FORUM_THREAD_CREATE        | 创建主题   |                    |      |
| FORUM_THREAD_UPDATE        | 更新主题   |                    |      |
| FORUM_THREAD_DELETE        | 删除主题   |                    |      |
| FORUM_POST_CREATE          | 创建帖子   | FORUM_REPLY_CREATE | 回复评论 |
| FORUM_POST_DELETE          | 删除帖子   | FORUM_REPLY_DELETE | 删除评论 |
| FORUM_PUBLISH_AUDIT_RESULT | 发表审核通过 |                    |      |

### 音频事件

| 事件名                 | 触发方式   | 事件名                        | 触发方式  |
|---------------------|--------|----------------------------|-------|
| AUDIO_START         | 音频开始播放 | AUDIO_ON_MIC               | 机器人上麦 |
| AUDIO_FINISH        | 音频播放结束 | AUDIO_OFF_MIC              | 机器人下麦 |
