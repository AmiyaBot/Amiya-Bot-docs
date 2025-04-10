# API

API 是实现适配器部分基础逻辑的基础，你也可以调用 API 来进一步完成你的业务逻辑。

`api` 属性位于 `AmiyaBot` 的 `instance` 属性下。

```python {3}
bot = AmiyaBot(...)

await bot.instance.api.get_me()
```

::: danger 请注意<br>
不用的适配器下，api 的方法不尽相同，在创作多平台机器人时，请注意可能产生的影响。
:::

## 引入 API 类以注解变量

我们强烈建议在使用不同的适配器时，引入相应的 API 类注解 api 属性。它们通常在适配器模块的 `api` 模块下。

```python
from amiyabot.adapters.tencent.qqGuild.api import QQGuildAPI
# from amiyabot.adapters.cqhttp.api import CQHttpAPI
# from amiyabot.adapters.kook.api import KOOKAPI


api: QQGuildAPI = bot.instance.api
await api.get_me()
```

## 共同的方法

api 实际上是调用了不同平台提供的接口。在不同平台下，调用接口的鉴权规则也不一样。所有适配器的 api
都存在以下三个方法，参数也是一样的。方法内部实现了不同平台的鉴权规则，你只需要直接调用接口即可。

### get

| 参数名      | 类型                | 释义                                                                                   | 默认值 |
|----------|-------------------|--------------------------------------------------------------------------------------|-----|
| url      | str               | 接口 url                                                                               |     |
| params   | Union[dict, None] | get 参数                                                                               |     |
| **kwargs |                   | [request 参数](https://github.com/aio-libs/aiohttp/blob/master/aiohttp/client.py#L316) |     |

### post

| 参数名          | 类型                | 释义                                                                                   | 默认值 |
|--------------|-------------------|--------------------------------------------------------------------------------------|-----|
| url          | str               | 接口 url                                                                               |     |
| payload      | Union[dict, None] | post 参数                                                                              |     |
| is_form_data | bool              | 是否使用 form 表单提交（仅 QQ 频道拥有此参数）                                                         |     |
| **kwargs     |                   | [request 参数](https://github.com/aio-libs/aiohttp/blob/master/aiohttp/client.py#L316) |     |

### request

可以使用除 get、post 以外的一些 method 调用接口。

| 参数名      | 类型                | 释义                                                                                   | 默认值 |
|----------|-------------------|--------------------------------------------------------------------------------------|-----|
| url      | str               | 接口 url                                                                               |     |
| method   | str               | 请求 method                                                                            |     |
| payload  | Union[dict, None] | 请求参数                                                                                 |     |
| **kwargs |                   | [request 参数](https://github.com/aio-libs/aiohttp/blob/master/aiohttp/client.py#L316) |     |

```python
res = await bot.instance.api.post('/interface', {...})
```

::: tip 为什么没有 headers 参数<br>
方法内部实现了不同平台的鉴权规则，控制了 headers
的内容，你不需要手动控制。如果你希望自己实现请求，请使用 👉 [进阶指南 - HTTP 请求](/develop/tools/httpRequests)
:::

## api 的返回

参考 [进阶指南 - HTTP 请求 - 返回值](/develop/tools/httpRequests.html#返回值)
