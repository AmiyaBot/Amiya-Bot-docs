# 事件总线

AmiyaBot 提供了简易的全局事件总线的方法

```python
from amiyabot import event_bus
```

## 发布事件

**publish**

| 参数名        | 类型  | 释义   | 默认值  |
|------------|-----|------|------|
| event_name | str | 事件名  |      |
| data       | Any | 事件数据 | None |

```python
event_bus.publish('myEvent', data=...)
```

## 订阅事件

**subscribe**

| 参数名        | 类型       | 释义       | 默认值  |
|------------|----------|----------|------|
| event_name | str      | 事件名      |      |
| method     | Callable | 响应方法（可选） | None |

::: tip 提示<br>
响应方法同时支持**异步**和**同步**函数
:::

通过装饰器订阅事件

```python
@event_bus.subscribe('myEvent')
async def event_handler(data):
    ...
```

也可以通过传入响应函数订阅事件

```python
async def event_handler(data):
    ...

event_bus.subscribe('myEvent', event_handler)
```

## 取消订阅

取消订阅需要传入**订阅时的响应方法对象**（且需要保证其内存地址是一致的）

**unsubscribe**

| 参数名        | 类型       | 释义   | 默认值  |
|------------|----------|------|------|
| event_name | str      | 事件名  |      |
| method     | Callable | 响应方法 | None |

```python
event_bus.unsubscribe('myEvent', event_handler)
```
