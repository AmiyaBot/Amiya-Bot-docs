# 定时任务

AmiyaBot 提供了全局定时任务管理器，基于 [apscheduler](https://github.com/agronholm/apscheduler)。

::: warning ⚠️注意⚠️不兼容的更新<br>
在版本 1.6.9 开始，不再支持全局定义定时任务，以及移除了 custom 参数，使用更泛用的 apscheduler trigger 控制任务执行时机。

此方法已不再支持，全局变量 tasks_control 已删除。

```python
from amiyabot import AmiyaBot, tasks_control

@tasks_control.timed_task(each=120)
async def _():
    ...
```

bot.timed_task 装饰器的 custom 参数已删除。

| 参数名        | 类型           | 释义             | 默认值         |
|------------|--------------|----------------|-------------|
| each       | int          | 循环执行间隔时间，单位（秒） |             |
| ~~custom~~ | ~~Callable~~ | ~~自定义循环规则~~    |             |
| sub_tag    | str          | 子标签            | default_tag |

:::

## 简单使用

```python
from amiyabot import AmiyaBot
from amiyabot.factory import BotHandlerFactory

bot = AmiyaBot(...)  # 或 MultipleAccounts / PluginInstance 对象

# 每 60 秒执行一次任务
@bot.timed_task(each=60)
async def _(instance: BotHandlerFactory):
    ...
```

## 插件开发

如果你正在开发插件，并且你不希望在插件的卸载方法里手动取消定时任务，请务必通过 `PluginInstance.timed_task` 定义任务。

通过 `PluginInstance.timed_task` 定义的任务可以在插件被卸载时自动取消。

```python
from amiyabot import PluginInstance
from amiyabot.factory import BotHandlerFactory

bot = PluginInstance(...)

@bot.timed_task(each=60)
async def _(instance: BotHandlerFactory):
    ...
```

插件开发详情请查看 [插件开发文档](/develop/plugin/)。

## timed_task 装饰器

| 参数名            | 类型   | 释义                                                                                                            | 默认值         |
|----------------|------|---------------------------------------------------------------------------------------------------------------|-------------|
| each           | int  | 循环执行间隔时间，单位（秒），如果使用其他触发方式，请使用 kwargs 形式的 scheduler.add_job 参数                                                 | None        |
| sub_tag        | str  | 子标签                                                                                                           | default_tag |
| run_when_added | bool | 添加时立即执行一次任务                                                                                                   | default_tag |
| **kwargs       |      | [scheduler.add_job](https://github.com/agronholm/apscheduler/blob/3.x/apscheduler/schedulers/base.py#L384) 参数 |             |

::: danger 注意<br>
使用 kwargs 自定义定时任务时，不可使用参数 `func` 以及 `id`。
:::

### 自定义执行时机

使用 `scheduler.add_job` 参数定义任务，可以使任务的实现时机更加灵活。

```python
from amiyabot import PluginInstance
from amiyabot.factory import BotHandlerFactory
from apscheduler.triggers.cron import CronTrigger

bot = PluginInstance(...)

# 每个小时中的 5 分 30 秒时执行
@bot.timed_task(trigger='cron', minute=5, second=30)
async def _(instance: BotHandlerFactory):
    ...

# 每分钟的第 20 秒和 40 秒时执行
@bot.timed_task(trigger=CronTrigger('20,40'))
async def _(instance: BotHandlerFactory):
    ...
```

## 取消定时任务

为需要取消的定时任务传入 sub_tag 参数，可以重复，重复的 sub_tag 会被整合为一组。

### bot.remove_timed_task()

按标签名取消定时任务

| 参数名     | 类型  | 释义             | 默认值 |
|---------|-----|----------------|-----|
| sub_tag | str | 需要取消的定时任务的子标签名 |     |

示例：执行一次后取消任务

```python
from amiyabot import PluginInstance
from amiyabot.factory import BotHandlerFactory

bot = PluginInstance(...)

@bot.timed_task(each=60, sub_tag='test')
async def _(instance: BotHandlerFactory):
    ...
    bot.remove_timed_task('test')
```
