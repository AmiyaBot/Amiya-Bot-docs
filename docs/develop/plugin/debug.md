# 调试插件

调试插件的方法有很多种，一般来说，你可以直接打包插件然后放到主项目中加载并使用来观察效果，显然这不够效率。AmiyaBot
提供了 [测试实例](/develop/basic/testInstance)，在主项目中，有现成的示例脚本。

## 在测试脚本中调试

在 兔兔-v6 根目录下的 **run_test.py** 内，修改如下位置的代码。

```python
# 显式导入插件开发目录，可以在编辑器 DEBUG 调试。
from pluginsDev.src.user import bot as plugin


async def install_plugin():
    # 导入插件
    bot.install_plugin(plugin)
    # 直接导入插件 zip 包
    # bot.install_plugin('plugins/amiyabot-arknights-operator-1.5.zip', extract_plugin=True)
```

运行 `python run_test.py`，访问测试网址并使用。详见 [测试实例](/develop/basic/testInstance)
