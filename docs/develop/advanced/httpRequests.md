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

## 返回值

`http_requests` 的请求均返回**字符串**的请求结果（如果请求失败会返回空字符串），但有些不一样。这个 “字符串” 可以使用一些额外的属性。

### json

调用这个属性会尝试返回 json 格式化的 `responseText` 内容。

```python
res = await http_requests.post('/interface', {...})
if res:
    data = res.json['data']
```

### response

调用这个属性可以返回请求结果（`aiohttp.ClientResponse` 的实例），可以获取请求的状态码和其他信息。

```python
res = await http_requests.post('/interface', {...})

status = res.response.status
```

### error

如果请求失败，可以调用这个属性获取异常（`Exception` 的实例）。

```python
res = await http_requests.post('/interface', {...})

error = res.error
```

## GET 请求

```python
res: str = await http_requests.get()
```

| 参数名       | 类型  | 释义                                                                                   | 默认值 |
|-----------|-----|--------------------------------------------------------------------------------------|-----|
| interface | str | 请求地址                                                                                 |     |
| **kwargs  |     | [request 参数](https://github.com/aio-libs/aiohttp/blob/master/aiohttp/client.py#L316) |     |

## POST 请求

post 方法默认在请求头内添加 `'Content-Type': 'application/json'`，请求体**仅接受字典或列表类型数据**。

```python
res: str = await http_requests.post()
```

| 参数名       | 类型         | 释义                                                                                   | 默认值 |
|-----------|------------|--------------------------------------------------------------------------------------|-----|
| interface | str        | 请求地址                                                                                 |     |
| payload   | dict, list | 请求体                                                                                  |     |
| headers   | dict       | 追加的请求头                                                                               |     |
| **kwargs  |            | [request 参数](https://github.com/aio-libs/aiohttp/blob/master/aiohttp/client.py#L316) |     |

## FORM 表单请求

post_form 方法类似 post 方法。唯一不同的是请求体仅接受**字典类型**，发送请求时会被构建为 form data 表单数据。

```python
res: str = await http_requests.post_form()
```

| 参数名       | 类型   | 释义                                                                                   | 默认值 |
|-----------|------|--------------------------------------------------------------------------------------|-----|
| interface | str  | 请求地址                                                                                 |     |
| payload   | dict | 请求体                                                                                  |     |
| headers   | dict | 追加的请求头                                                                               |     |
| **kwargs  |      | [request 参数](https://github.com/aio-libs/aiohttp/blob/master/aiohttp/client.py#L316) |     |

## 文件上传

文件上传 post_upload 方法以 form 表单的方式提交文件。

```python
res: str = await http_requests.post_upload()
```

| 参数名        | 类型    | 释义                                                                                   | 默认值  |
|------------|-------|--------------------------------------------------------------------------------------|------|
| interface  | str   | 请求地址                                                                                 |      |
| file       | bytes | 文件 bytes                                                                             |      |
| file_field | str   | 表单数据中存放文件的字段名                                                                        | file |
| payload    | dict  | 请求体                                                                                  |      |
| headers    | dict  | 追加的请求头                                                                               |      |
| **kwargs   |       | [request 参数](https://github.com/aio-libs/aiohttp/blob/master/aiohttp/client.py#L316) |      |

## 自定义请求

如果需要发送更多类型的请求，如 `PUT`、`PATCH`、`DELETE` 等，或需要自定义更多的请求场景，可使用 request 方法。

```python
res: str = await http_requests.request()
```

| 参数名          | 类型   | 释义                                                                                   | 默认值  |
|--------------|------|--------------------------------------------------------------------------------------|------|
| url          | str  | 请求地址                                                                                 |      |
| method       | dict | 请求方法                                                                                 | post |
| request_name | dict | 请求过程的 LOG 标识                                                                         |      |
| **kwargs     |      | [request 参数](https://github.com/aio-libs/aiohttp/blob/master/aiohttp/client.py#L316) |      |

## 下载文件

download_async 是提供的异步下载文件的方法。默认返回 bytes 类型的数据。

```python
file: bytes = await download_async()
```

| 参数名       | 类型   | 释义                                                                                   | 默认值   |
|-----------|------|--------------------------------------------------------------------------------------|-------|
| url       | str  | 请求地址                                                                                 |       |
| headers   | dict | 追加的请求头                                                                               |       |
| stringify | bool | 是否返回字符串结果                                                                            | False |
| **kwargs  |      | [request 参数](https://github.com/aio-libs/aiohttp/blob/master/aiohttp/client.py#L316) |       |

### 同步下载

如某些场景需要使用同步下载，可使用同模块中的 download_async 方法。

```python
from amiyabot.network.download import download_sync

file: bytes = download_sync()
```

| 参数名       | 类型   | 释义                                                                          | 默认值   |
|-----------|------|-----------------------------------------------------------------------------|-------|
| url       | str  | 请求地址                                                                        |       |
| headers   | dict | 追加的请求头                                                                      |       |
| stringify | bool | 是否返回字符串结果                                                                   | False |
| progress  | bool | 是否显示进度条                                                                     | False |
| **kwargs  |      | [request 参数](https://github.com/psf/requests/blob/main/requests/api.py#L14) |       |
