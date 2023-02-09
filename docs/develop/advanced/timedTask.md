# 定时任务

AmiyaBot 提供了全局定时任务管理器。你可以通过单独导入或使用 AmiyaBot 实例的装饰器注册定时任务。

```python
from amiyabot import AmiyaBot, tasks_control
from amiyabot.factory import BotHandlerFactory

bot = AmiyaBot(...)  # 或 MultipleAccounts / PluginInstance 对象


@bot.timed_task(each=60)
async def _(instance: BotHandlerFactory):
    ...


@tasks_control.timed_task(each=120)
async def _():
    ...
```

使用直接导入的 tasks_control（`TasksControl` 的实例）和使用 AmiyaBot 实例的装饰器是一样的，定时任务最终都会注册进单例的
TasksControl 实例里。唯一不同的是使用 AmiyaBot
实例注册的方法，能够接受一个 `BotHandlerFactory` 对象的参数。BotHandlerFactory 是 AmiyaBot 的超类，能够通过其 `instance`
属性访问到适配器实例。此设计的目的是为了能够给单独的 AmiyaBot 实例注册专属的定时任务。

TasksControl 实例是单例的，即使你手动实例化，返回的实例仍然会是同一个。

::: tip 提示<br>
如果你在开发插件，并且你不希望在插件的卸载方法里手动取消定时任务，请务必通过 `PluginInstance.timed_task` 定义任务。

通过 `PluginInstance.timed_task` 定义的任务可以在插件被卸载时自动取消。

```python {3,5}
from amiyabot import PluginInstance

bot = PluginInstance(...)

@bot.timed_task(each=60)
async def _(instance: BotHandlerFactory):
    ...
```

插件开发详情请查看 [文档](/develop/plugin)。
:::

## timed_task 装饰器

| 参数名     | 类型       | 释义                                                        | 默认值           |
|---------|----------|-----------------------------------------------------------|---------------|
| each    | Int      | 循环执行间隔时间，单位（秒）                                            |               |
| custom  | Callable | 自定义循环规则                                                   |               |
| tag     | String   | 标签<span style="color: red">（仅在 TasksControl 实例里可用）</span> | \_\_default__ |
| sub_tag | String   | 子标签                                                       | \_\_sub__     |

::: warning 提示<br>
TasksControl 是非严格定时的，因为执行协程会产生等待和切换的耗时。所以此装饰器定义的循环时间为"约等于"。
:::

示例：定义一个**每分钟执行一次**的方法

```python
@tasks_control.timed_task(each=60)
async def _():
    print('A minute has passed.')
```

## 自定义执行的时机

通过参数 custom 可自定义定时任务执行的时机。custom 接受一个异步函数，该函数会被**每秒执行一次**，当函数返回 `True`
时，定时任务将会执行。

传入 custom 参数后，each 参数将失效。<br>
方法接受一个整数参数，为 TasksControl 自运行以来的总秒数，上限为 31536000，到达上限后归零。

::: warning 注意<br>
此方法目的是为了校验，应尽量避免在其中执行业务逻辑。
:::

```python
async def my_check(t: int):
    if ...:
        return True


@tasks_control.timed_task(custom=my_check)
async def _():
    ...
```

## 取消定时任务

为需要取消的定时任务传入 tag 参数。可以是重复的，重复的 tag 会被整合为一组。

### tasks_control.remove_tag()

按标签名取消定时任务

| 参数名     | 类型     | 释义        | 默认值 |
|---------|--------|-----------|-----|
| tag     | String | 需要取消的标签名  |     |
| sub_tag | String | 需要取消的子标签名 |     |

示例：定义一个**每分钟执行但只执行两次**的方法

```python {7}
count = 0

@tasks_control.timed_task(each=60, tag='twice')
async def _():
    count += 1
    if count >= 2:
        tasks_control.remove_tag('twice')
```

如果设置了子标签（sub_tag），允许只取消子标签的任务。子标签是为 `BotHandlerFactory` 设计的，因为 `BotHandlerFactory`
注册定时任务时，无法手动指定标签名（tag），其标签名固定为**工厂名称**。如果需要取消在 `BotHandlerFactory` 下的定时任务，需通过子标签名解决。

```python {1,6}
bot = AmiyaBot(...)

@bot.timed_task(each=60, sub_tag='once')
async def _():
    ...
    bot.remove_timed_task('once')
```
