# 日志模块

AmiyaBot 使用 logging 模块构建日志体系。

## 输出日志

AmiyaBot 的日志同样拥有与 logging 相同的等级输出。输出的日志会储存在 `log` 文件夹下。

```python
from amiyabot import log

log.info(...)
log.error(...)
log.debug(...)
log.warning(...)
log.critical(...)
```

日志的固有格式如下所示，分别为`时间`、`日志模块名`、`日志等级`和`日志内容`。DEBUG 模式下会显示日志的输出文件名和位置。

```
normal:
2022-11-02 18:22:40,425 [     Bot][    INFO] initialize completed.

debug mode:
2022-11-02 18:22:40,425 [     Bot][    INFO][test.py:5] initialize completed.
```

::: tip 提示<br>
使用启动参数 `--debug` 开启 DEBUG 模式。
:::

## 输出异常日志

`log.error()` 方法不仅可以传入字符串，也支持传入 Exception 的子类。传入 Exception 子类时，将会输出完整的异常追踪（Traceback）。

```python {5}
try:
    a = 0
    a += '1'
except Exception as e:
    log.error(e, desc='calc error:')
```

将输出如下日志

```
2022-11-02 18:44:22,155 [     Bot][   ERROR] calc error: Traceback (most recent call last):
  File "F:\Project\Amiya-Bot-core\logTest.py", line 5, in <module>
    a += '1'
TypeError: unsupported operand type(s) for +=: 'int' and 'str'
```

如果你并不需要处理异常，仅仅希望异常不会终止你的程序，log 模块提供了上下文管理的方式，来捕获并输出在上下文中产出的异常。

| 参数名     | 类型       | 释义           | 默认值  |
|---------|----------|--------------|------|
| desc    | String   | 异常标题         |      |
| ignore  | List[]   | 仅捕获但不输出的异常列表 | None |
| handler | Callable | 捕获异常后执行的方法   | None |

```python
async def err_handler(err: Exception):
    print(err)

# 异步方式
async with log.catch('calc error:', ignore=[TypeError, ...], handler=err_handler):
    a = 0
    a += '1'

# 同步方式
with log.sync_catch(...):
    a = 0
    a += '1'
```

## 创建日志模块

你可以创建一个独立的日志模块以标记输出。

```python
from amiyabot.log import LoggerManager

logger = LoggerManager('MyLogger')
logger.info('this is a log.')

# 2022-11-02 18:32:05,053 [MyLogger][    INFO] this is a log.
```

**LoggerManager**

| 参数名           | 类型     | 释义          | 默认值                                                  |
|---------------|--------|-------------|------------------------------------------------------|
| name          | String | logger 模块名称 |                                                      |
| level         | Int    | 日志等级        | logging.INFO                                         |
| formatter     | String | 日志格式        | `%(asctime)s [%(name)8s][%(levelname)8s]%(message)s` |
| save_path     | String | 日志文件保存目录    | log                                                  |
| save_filename | String | 日志文件名       | running                                              |

## 自定义全局日志模块

如果你不喜欢默认的日志输出，你也可以全局修改日志模块。但必须注意的事，你自定义的模块，必须包含常规的几个等级输出方法。

```python
from amiyabot.log import UserLogger


class Mylogger:
    def info(self, text: str): ...

    def error(self, text: str): ...

    def debug(self, text: str): ...

    def warning(self, text: str): ...

    def critical(self, text: str): ...


UserLogger.logger = Mylogger() # 将默认日志处理替换为自定义的类
```
