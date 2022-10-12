# 添加插件文档

你应该添加一个文档并详细描述插件的使用方法

## 添加一个 markdown 文档

```text {6}
Amiya-Bot
├── pluginsDev
│   ├── myPlugin
│   │   ├── __init__.py
│   │   ├── main.py
│   │   └── README.md
│   ...
...
```

demo 允许直接使用 markdown 文件路径作为文档，只需要把路径传入到 PluginInstance 对象的 `document` 参数。

```python
import os

from amiyabot import PluginInstance

plugin_dir = os.path.dirname(__file__)

bot = PluginInstance(
    document=f'{plugin_dir}/README.md'
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
