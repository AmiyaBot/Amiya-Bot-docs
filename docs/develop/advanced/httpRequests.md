# 发送 HTTP 请求

AmiyaBot 内置了异步的 HTTP 请求工具，基于 [aiohttp](https://github.com/aio-libs/aiohttp)。

::: danger 不推荐使用 requests 库<br>
requests 是著名的 python http 请求工具库。但其请求方法均为**同步**的。AmiyaBot 为异步程序，使用同步请求将会阻塞主线程运行。

如果是**无法干预的**同步请求行为，可以使用内置的线程池方法更变为异步。详见 [处理阻塞操作](/develop/advanced/blockingIO)。
:::

直接引入 `http_requests` 实例和 `download_async` 方法即可使用。

```python
from amiyabot.network.httpRequests import http_requests
from amiyabot.network.download import download_async

await http_requests.get()
await http_requests.post()
await http_requests.post_form()
await http_requests.post_upload()
await http_requests.request()
await download_async()
```

`http_requests` 的请求均返回**字符串**的请求结果。`download_async` 方法则默认返回 **bytes** 结果。

## GET

```python
await http_requests.get()
```

| 参数名       | 类型     | 释义                                                                                   | 默认值 |
|-----------|--------|--------------------------------------------------------------------------------------|-----|
| interface | String | 请求地址                                                                                 |     |
| **kwargs  |        | [request 参数](https://github.com/aio-libs/aiohttp/blob/master/aiohttp/client.py#L316) |     |

## POST

post 方法默认在请求头内添加 `'Content-Type': 'application/json'`，且请求体**仅接受字典或列表类型数据**。如需使用另外的请求方式请使用 request 方法自定义。

```python
await http_requests.post()
```

| 参数名       | 类型                 | 释义                                                                                   | 默认值 |
|-----------|--------------------|--------------------------------------------------------------------------------------|-----|
| interface | String             | 请求地址                                                                                 |     |
| payload   | Union\[Dict, List] | 请求体                                                                                  |     |
| headers   | Dict               | 追加的请求头                                                                               |     |
| **kwargs  |                    | [request 参数](https://github.com/aio-libs/aiohttp/blob/master/aiohttp/client.py#L316) |     |
