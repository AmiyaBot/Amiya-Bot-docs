# 添加插件文档

你应该添加一个文档并详细描述插件的使用方法

## 添加一个 markdown 文档

```text {6,7}
Amiya-Bot
├── pluginsDev
│   ├── myPlugin
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── README.md
│   │   └── HOWTOUSE.md
│   ...
...
```

demo 允许直接使用 markdown 文件路径作为文档，只需要把路径传入到 **PluginInstance** 对象的 `document` 参数。

## 添加使用指引文档

若使用了 [AmiyaBotPluginInstance](/develop/plugin/amiyaBotPluginInstance.html)
对象创建插件，可使用参数 `instruction`，其作用是当 bot 的用户在使用 “查看功能指引”
类的指令时，向其展示 `instruction` 的内容。`document` 更偏向于提供给 bot
的部署者查看的文档。在没有配置 `instruction` 时，“查看功能指引” 将返回 `document` 的内容。

```python
import os

from amiyabot import PluginInstance, AmiyaBotPluginInstance

plugin_dir = os.path.dirname(__file__)

bot = PluginInstance(
    document=f'{plugin_dir}/README.md'
)
# 或
bot = AmiyaBotPluginInstance(
    document=f'{plugin_dir}/README.md',
    instruction=f'{plugin_dir}/HOWTOUSE.md'
)
```

## 直接在参数内编写

::: warning 提示<br>
我们不推荐这种做法，除非你的插件文档只有少量文本。
:::

```python
bot = PluginInstance(
    document='''
        ...
    '''
)
```
