# 发送主动消息

::: danger 主动消息限制<br>
主动消息需要频道设置允许机器人推送，发送消息也存在数量限制。<br>
详见官方文档 [接入流程-语料配置-消息类型](https://bot.q.qq.com/wiki/#_9-%E5%8F%91%E5%B8%83%E8%AE%BE%E7%BD%AE)
:::

## BotInstance 对象

BotInstance 是 AmiyaBot 的核心类，主要由它来调用官方 API。它实例化于 AmiyaBot 的 instance 属性里，也可以在一些回调函数中使用它。

```python
bot = AmiyaBot(...)
bot.instance // BotInstance
```

需要使用 BotInstance 进行注解时，从 `amiyabot` 导入即可。

```python
from amiyabot import BotInstance
```

### BotInstance.send_message

BotInstance.send_message 是一个上下文管理器，**因为没有 [Message](/develop/basic/messageObject) 对象提供消息ID，所以通过此方法构建的消息属于主动消息。**<br>

| 参数名                 | 类型     | 释义     | 默认值 |
|---------------------|--------|--------|-----|
| channel_id          | String | 子频道ID  |     |
| user_id             | String | 用户ID   |     |
| direct_src_guild_id | String | 来源频道ID |     |

#### 发送一条主动频道消息

```python
bot = AmiyaBot(...)

# send_message 返回一个 Chain 对象，你可以像往常一样使用它
async with bot.instance.send_message(channel_id='*******') as chain:
    chain.text(...)
```

#### 发送一条主动私信 <span class="err-tag">Beta</span>

传入参数 `user_id`（用户ID）和 `direct_src_guild_id`（来源频道ID），send_message 将会发送主动私信消息。

```python
async with bot.instance.send_message(user_id='*******',
                                     direct_src_guild_id='*******') as chain:
    chain.text(...)
```

### 在回调里使用 BotInstance

上述示例是通过 AmiyaBot 内的 instance 属性调用 BotInstance 的。在多账号下，一些场景会令你难以区分需要使用哪个账号发送主动消息，所以你可能需要在一些回调函数里使用它。

#### 事件监听

```python {2}
@bot.on_event('MESSAGE_DELETE')
async def _(event: Event, instance: BotInstance):
    ...
```

#### 异常监听

```python {2}
@bot.on_exception(KeyError)
async def _(err: Exception, instance: BotInstance):
    ...
```
