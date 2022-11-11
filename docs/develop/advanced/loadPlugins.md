# 加载插件

本篇将会讲解 AmiyaBot 插件的工作原理已经日常使用的实现。

## 前言

插件设计的目的是因为 [主项目](https://github.com/AmiyaBot/Amiya-Bot)
通常会以可执行文件的形式发布，将一些功能模块分散为插件的形式，更有助于用户灵活的管理自己的机器人功能，以及对单独的功能进行热更新。

AmiyaBot 的插件加载得益于 Python 作为脚本语言的一个优点：**动态执行代码**，配合标准库的 `importlib` 和
`zipimport`，就能够很好的完成外部代码的导入与执行，理解这一原理，需要你熟悉 Python
的导入机制。而“动态执行代码”，如果你不是第一次接触脚本语言，想必你对其应有了一定的了解。

## 开发插件

开发插件可以参考主项目的 [插件开发](/develop/plugin/create) 形式，但本篇并不是作为主项目的引导文档。在主项目里，插件是一个
zip 压缩包，在加载时解压并导入，完成代码的动态执行。

但在本框架的设计里，插件还能有另外几种导入方式。

## 导入插件实例

插件实例可以直接在你的程序里定义，这是正常的做法，事实上这对你的功能管理（如动态增加或软删除功能时）有很大帮助。

```python
from amiyabot import AmiyaBot, PluginInstance

plugin = PluginInstance(
    name='我的插件',
    version='1.0',
    plugin_id='my-plugin',
    description='我的第一个插件'
)

@plugin.on_message(keywords='hello')
async def _(data: Message):
    return Chain(data).text(f'hello, {data.nickname}')


bot = AmiyaBot(...)  # or MultipleAccounts
bot.install_plugin(plugin)
```

此时，该 AmiyaBot 实例便拥有了这个插件定义的所有消息响应、事件或定时任务等功能。

## 导入 Python 文件

这是写有插件注册代码的一个 Python 文件 `myPlugin.py`

```python
from amiyabot import PluginInstance

# bot 变量名是必须的，详见插件开发文档。
bot = PluginInstance(
    name='我的插件',
    version='1.0',
    plugin_id='my-plugin',
    description='我的第一个插件'
)

@bot.on_message(keywords='hello')
async def _(data: Message):
    return Chain(data).text(f'hello, {data.nickname}')
```

以 Python 文件导入这个插件

```python
bot.install_plugin('myPlugin.py') # 相当于执行了代码：import myPlugin
```

单文件插件是最简单的开发方式，这是在不考虑文件大小、静态资源或变量污染的前提下。

## 导入 Python Package 目录

如果一个插件的逻辑非常复杂，它可能会是以 Package 目录的形式存在。此时插件的目录应如下所示。

```text
myPlugin
├── __init__.py
├── a.py
├── b.py
│   ...
...
```

以目录导入这个插件

```python
bot.install_plugin('myPlugin') # 相当于执行了代码：import myPlugin
```

## 导入 zip 压缩包

如果一些插件甚至带有静态资源，虽然 Package 目录同样能实现，但为了方便传播，它可能会是一个 zip 压缩文件。

```text
myPlugin.zip
├── assetsFolder
├── config.yaml
├── __init__.py
├── a.py
├── b.py
│   ...
...
```

以 zip 导入这个插件

```python
bot.install_plugin('myPlugin.zip')
```

这里将会发生另一种情况，在 zip 导入时，并不是像上述两种方式一样相当于执行<br>`import myPlugin`
语句。而是通过标准库 `zipimport`，读取了此压缩包，并执行 `__init__.py`。

这有点抽象，你可以理解为使用了 python 命令执行了 `__init__.py`

```bash
python __init__.py
```

那么当 `__init__.py ` 在相对导入其目录下的模块时，由于它属于顶级模块，插件将会
<span style="color: red">加载失败</span>
并抛出如下异常。

```python
from .main import bot
```

```text
plugin install error: Traceback (most recent call last):
  File "F:\Project\Amiya-Bot-core\amiyabot\log\manager.py", line 116, in sync_catch
    yield
  File "F:\Project\Amiya-Bot-core\amiyabot\handler\__init__.py", line 287, in install_plugin
    module = zipimport.zipimporter(plugin).load_module('__init__')
  File "<frozen zipimport>", line 259, in load_module
  File "plugins\myPlugin.zip\__init__.py", line 1, in <module>
    from .main import bot
ImportError: attempted relative import with no known parent package
```

**install_plugin** 里提供了参数解决这一问题。先看看这个方法的参数列表。

| 参数名                 | 类型     | 释义                     | 默认值   |
|---------------------|--------|------------------------|-------|
| plugin              | Union  | 插件                     |       |
| extract_plugin      | Bool   | 是否解压插件                 | False |
| extract_plugin_dest | String | 插件解压后的目录名（默认为 zip 文件名） |       |

解决上述问题，我们只需要添加参数 `extract_plugin=True`，将 zip 导入转换为 Package 目录导入。

```python
bot.install_plugin('myPlugin.zip', extract_plugin=True)
```

::: danger 注意<br>
每次执行加载时都会解压一次全部文件，但如果路径已存在，将不会覆盖原文件。如果插件有一些原文件修改的更新，应注意这一特性。
:::

## 卸载插件

插件实例都有一个唯一 ID（属性 plugin_id），通过这个 ID 可以卸载指定的插件。

**uninstall_plugin**

| 参数名       | 类型     | 释义         | 默认值   |
|-----------|--------|------------|-------|
| plugin_id | String | 插件 ID      |       |
| remove    | Bool   | 是否删除插件的原文件 | False |

```python
bot.uninstall_plugin('my-plugin')
```
