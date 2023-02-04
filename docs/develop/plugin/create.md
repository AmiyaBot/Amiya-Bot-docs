# 创建插件

在 pluginsDev 目录内，创建一个 Python package 形式的模块。为了防止加载插件时的**全局环境变量污染**。你的业务逻辑必须在另一个入口文件内进行。

创建入口文件 `main.py`

```text {3,4,5}
Amiya-Bot
├── pluginsDev
│   ├── myPlugin
│   │   ├── __init__.py
│   │   └── main.py
│   ...
...
```

## 编写插件程序

在 `main.py` 内编写插件的注册程序

```python
from amiyabot import PluginInstance

bot = PluginInstance(
    name='我的插件',
    version='1.0',
    plugin_id='my-plugin',
    description='我的第一个插件'
)
```

`PluginInstance` 对象继承了工厂类 `BotHandlerFactory`，这意味着你完全可以按照 [开发指南](/develop/basic/messageHandler)
去编写你的插件功能。

```python
@bot.on_message(keywords='hello')
async def _(data: Message):
    return Chain(data).text(f'hello, {data.nickname}')

@bot.on_event('GUILD_CREATE')
async def _(event: Event, instance: BotAdapterProtocol):
    ...
```

这些消息响应器都会在插件被加载时注册到主体程序中。

## 插件内静态资源的使用

如果你的插件包含静态资源，在读取它们时，应该以插件的绝对目录读取。

```text {6}
Amiya-Bot
├── pluginsDev
│   ├── myPlugin
│   │   ├── __init__.py
│   │   ├── main.py
│   │   └── file.txt
│   ...
...
```

```python
# main.py
import os

plugin_dir = os.path.dirname(__file__)
file = open(f'{plugin_dir}/file.txt')
```

## 导出插件的实例

在 `__init__.py` 内导出插件的入口，命名为 <span style="color: red">bot</span>。这个命名是固定的，即使 main 内部的
PluginInstance 实例变量名不为 bot，在导出时都必须使用 `as bot` 重命名。

```python
from .main import bot
```

::: danger 注意<br>
请不要在 `__init__.py`
内编写多余的代码，我们希望这个文件有且只有上面的一行。插件在加载时，会临时添加插件目录为系统路径，这会使主模块的一些全局一等对象污染主体程序，导致不可预测的后果。
:::
