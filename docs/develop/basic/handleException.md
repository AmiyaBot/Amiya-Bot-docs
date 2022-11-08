# 异常监听

AmiyaBot 内置了全局的用户层面异常捕获让程序不会轻易崩溃。如果你希望获取这些异常，可以通过**注册异常处理器**来获得它们。在执行消息响应或在消息响应筛选过程产生异常时，会执行这些注册的异常处理函数。

```python
from amiyabot import BotAdapterProtocol

@bot.on_exception()
async def _(err: Exception, instance: BotAdapterProtocol):
    ...
```

## 指定异常类型

```python
@bot.on_exception(KeyError)
async def _(err: Exception, instance: BotAdapterProtocol):
    ...
```

## 指定多种异常类型

```python
@bot.on_exception([OSError, IndexError])
async def _(err: Exception, instance: BotAdapterProtocol):
    ...
```

