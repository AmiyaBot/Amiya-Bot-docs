# 撤回消息

撤回一条消息。

## 在 Message 对象中撤回

使用 Message 对象的 `recall` 方法，撤回当前消息。

**Message.recall()**

```python {3}
@bot.on_message(keywords='hello')
async def _(data: Message):
    await data.recall()
```

你可以在任何能获取到 Message 对象的地方使用 `recall` 方法。比如在连续对话或异常监听里。

```python {6}
@bot.on_message(keywords='hello')
async def _(data: Message):
    # 等待事件返回的也是 Message 对象
    reply = await data.wait(Chain(data).text('...'))
    if reply:
        await reply.recall()
```

```python {6}
@bot.on_exception()
async def _(err: Exception,
            instance: BotAdapterProtocol,
            data: Union[Message, Event]):
    if type(data) is Message:
        await data.recall()
```

## 手动撤回

使用适配器实例的 `recall_message` 方法

**AmiyaBot.instance.recall_message()**

| 参数名        | 类型     | 释义                                 | 默认值  |
|------------|--------|------------------------------------|------|
| message_id | String | 消息ID（通常可以在 Message.message_id 获取到） |      |
| target_id  | String | 频道号（群号） 或好友ID                      | None |

```python
await bot.instance.recall_message(message_id='......', target_id='......')
```

## 撤回 Bot 发送的消息

如果是通过在消息响应器里面返回 `Chain` 对象或等待函数 `Message.wait()` 发送的消息，**是无法撤回的**。

| 发送消息的方法                | 是否可撤回  |
|------------------------|--------|
| Message.send()         | ✅ 可以撤回 |
| Message.wait()         | ❌ 无法撤回 |
| Message.wait_channel() | ❌ 无法撤回 |
| return Chain()         | ❌ 无法撤回 |

```python
@bot.on_message(keywords='hello')
async def _(data: Message):
    chain = Chain(data).text(f'hello, {data.nickname}')

    callback = await data.send(chain)  # ✅ 可以撤回
    if callback:
        await callback.recall() # 使用回调对象撤回

    wait = await data.wait(chain)  # ❌ 无法撤回，需要撤回可参照下文
    event = await data.wait_channel(chain)  # ❌ 无法撤回，需要撤回可参照下文

    return chain  # ❌ 无法撤回
```

**Message.send()** 方法返回一个 `MessageCallback`
对象或其组成的列表（语音或频道多图消息会产生分开发送的结果）。如果消息没有发送成功则返回 `None`。

调用 `MessageCallback.recall()` 即可撤回发送的消息。

```python {6}
@bot.on_message(keywords='hello')
async def _(data: Message):

    callback = await data.send(...)
    if callback:
        await callback.recall()
        # 或
        # for item in callback:
        #     await item.recall()
```

### 撤回等待的消息

**Message.wait()** 没有返回执行 `send` 时获得的 `MessageCallback`，因此你无法在使用该方法发送消息的情况下撤回，但你可以配合
`send` 达到这个效果。

```python {3,4}
@bot.on_message(keywords='hello')
async def _(data: Message):
    callback = await data.send(Chain(data).text('hello, what\'s your name?'))  # 使用 send 方法代替 wait 发送消息
    wait = await data.wait()  # 只等待，不发送消息

    if callback and not wait:
        await callback.recall()

    ...
```

### 撤回合并转发的消息

::: warning 温馨提示<br>
合并转发暂不支持撤回，请关注后续更新！
:::
