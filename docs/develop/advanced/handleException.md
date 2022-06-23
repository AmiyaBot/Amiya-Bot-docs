# 异常处理

AmiyaBot 内置了全局的用户层面异常捕获让程序不会轻易崩溃。如果你希望获取这些异常，可以通过**注册异常处理器**来获得它们。

```python
from amiyabot import BotInstance


@bot.on_exception()
async def _(err: Exception, instance: BotInstance):
    pass


# 指定异常类型
@bot.on_exception(KeyError)
async def _(err: Exception, instance: BotInstance):
    pass


# 指定多种异常类型
@bot.on_exception([OSError, IndexError])
async def _(err: Exception, instance: BotInstance):
    pass
```

在执行功能函数或在功能筛选过程产生异常时，会执行这些注册的异常处理函数。

## 参数 BotInstance

BotInstance 是内置的官方 SDK
的实例。在发生异常的这个生命周期里，不能保证像前面的处理函数一样拥有完整的消息实例。如果你需要在发生异常时让机器人发送消息，你无法使用 [Message](/develop/messageObject)
和 [Chain](/develop/chainObject) 对象，只能使用 BotInstance 的消息构建器。

::: tip 延伸<br>
在 Message 对象内，bot 属性就是 BotInstance 的实例。你也可以在消息内使用它的方法。
:::

#### BotInstance.send_message

BotInstance.send_message 是一个上下文管理器，作用是在没有 Message 对象时，仍能构建出消息发送。注意，因为没有 Message 对象提供消息ID，通过此方法构建的消息属于主动消息。<br>
主动消息限制详见官方文档 [接入流程-语料配置-消息类型](https://bot.q.qq.com/wiki/#_9-%E5%8F%91%E5%B8%83%E8%AE%BE%E7%BD%AE) 。

| 参数名        | 类型     | 释义    | 默认值  |
|------------|--------|-------|------|
| channel_id | String | 子频道ID |      |
| user_id    | String | 用户ID  | None |

示例：在发生异常时往一个子频道推送消息

```python {6}
@bot.on_exception()
async def _test(err: Exception, instance: BotInstance):

    # send_message 返回一个 Chain 对象，你可以像往常一样使用它
    async with instance.send_message(channel_id='*******') as chain:
        chain.text(f'发生了一个错误: {err}')
```
