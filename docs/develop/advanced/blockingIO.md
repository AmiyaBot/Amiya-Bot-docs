# 处理 IO 阻塞的操作

AmiyaBot 为异步程序，一般情况下应该遵循异步编程来进行开发。但在使用一些标准或第三方库时，不能保证其方法是异步的，使用 IO
阻塞的方法容易造成线程阻塞，影响业务逻辑。

## run_in_thread_pool

AmiyaBot `util` 库里提供的利用线程池将同步方法转变为异步方法执行的函数。

| 参数名        | 类型       | 释义       | 默认值 |
|------------|----------|----------|-----|
| block_func | Callable | IO 阻塞的方法 |     |
| *args      |          | 原方法参数    |     |
| **kwargs   |          | 原方法字典参数  |     |

```python
from amiyabot.util import run_in_thread_pool

# IO 阻塞的方法
block_io_method(arg1, arg2, arg3='xxx')

# 转变为异步执行
await run_in_thread_pool(block_io_method, arg1, arg2, arg3='xxx')
```
