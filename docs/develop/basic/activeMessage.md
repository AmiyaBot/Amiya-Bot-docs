# 发送主动消息

::: danger 主动消息限制<br>
主动消息需要频道设置允许机器人推送，发送消息也存在数量限制。<br>
详见官方文档 [接入流程-语料配置-消息类型](https://bot.q.qq.com/wiki/#_9-%E5%8F%91%E5%B8%83%E8%AE%BE%E7%BD%AE)
:::

### AmiyaBot.send_message

send_message 是发送主动消息的方法，它的第一个参数 chain 需要传入一个 Chain 对象。可以通过实例化一个无 Message 的 Chain 得到。

```python
message = Chain().text('hello')
```

| 参数名                 | 类型     | 释义       | 默认值 |
|---------------------|--------|----------|-----|
| chain               | Chain  | Chain 对象 |     |
| user_id             | String | 用户ID     |     |
| channel_id          | String | 子频道ID    |     |
| direct_src_guild_id | String | 来源频道ID   |     |

#### 发送一条主动子频道消息

```python
bot = AmiyaBot(...)
message = Chain().text('hello')

await bot.send_message(message, channel_id='******')
```

#### 发送一条主动私信 <span class="err-tag">Beta</span>

传入参数 `user_id`（用户ID）和 `direct_src_guild_id`（来源频道ID），send_message 将会发送主动私信消息。

```python
bot = AmiyaBot(...)
message = Chain().text('hello')

await bot.send_message(message,
                       user_id='*******',
                       direct_src_guild_id='*******')
```

### 在多账号实例里使用 send_message

```python
bot = MultipleAccounts(
    [
        AmiyaBot(appid='111111', ...),
        AmiyaBot(appid='222222', ...),
    ]
)

await bot['222222'].send_message(...)
```

### 在事件响应里使用 send_message

::: tip 提示<br>
事件响应的方法通常可以返回触发了该事件的实例。
:::

#### 事件监听

```python
@bot.on_event('MESSAGE_DELETE')
async def _(event: Event, instance: BotAdapterProtocol):
    await instance.send_message(...)
```

#### 异常监听

```python
@bot.on_exception(KeyError)
async def _(err: Exception, instance: BotAdapterProtocol):
    await instance.send_message(...)
```
