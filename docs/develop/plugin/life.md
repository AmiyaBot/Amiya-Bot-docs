# 插件生命周期

你可以在插件被安装或卸载时执行一些操作，只需要继承 PluginInstance 并覆盖其方法。

```python
from amiyabot import PluginInstance


class MyPlugin(PluginInstance):
    def install(self):
        # 插件被安装时执行的操作
        ...

    def uninstall(self):
        # 插件被卸载时执行的操作
        ...


bot = MyPlugin(
    name='我的插件',
    version='1.0',
    plugin_id='my-plugin',
    description='我的第一个插件'
)
```
