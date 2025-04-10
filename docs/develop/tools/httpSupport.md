# Amiya HTTP 服务

![PyPI](https://img.shields.io/pypi/v/amiyahttp)

对 [FastAPI](https://fastapi.tiangolo.com/) 进行二次封装的简易 HTTP Web 服务 SDK

::: tip 温馨提示<br>
**2.0.5 版本起，amiyabot 不再内置 HTTP 服务组件。**

如果你正在使用 [amiyabot-2.0.4](https://pypi.org/project/amiyabot/2.0.4/)
及以前的版本，并希望使用原来内置的 HTTP 服务，请阅读 [旧版文档](/develop/old/httpSupport)。
:::

## 安装

```bash
pip install amiyahttp
```

## 简单实现

POST 请求参数定义详见 FastAPI 文档。

```python
import asyncio
from pydantic import BaseModel
from amiyahttp import HttpServer


# 定义 POST 请求参数
class UserModel(BaseModel):
    username: str
    nickname: str


server = HttpServer(host='0.0.0.0', port=8088)


@server.controller
class Bot:
    @server.route(method='get')
    async def get_name(self):
        return 'AmiyaBot'

    @server.route(method='post')
    async def say_hello(self, params: UserModel):
        return server.response(message=f'hello, {params.nickname}')


asyncio.run(server.serve())
```

### 自定义路由

接口的路由将默认使用**控制器类名**以及**方法名**组成，如果需要自定义路由，在方法装饰器 route 传入 router_path 参数即可。

```python
@server.route(method='get', router_path='/custom/getBotName')
async def get_name(self):
    ...
```

## 加载插件

HttpServer 类允许使用 use_plugin 方法加载插件

```python
from amiyahttp.serverBase import ServerPlugin, ServerConfig

class MyPlugin(ServerPlugin):
    def install(self, app: FastAPI, config: ServerConfig): ...

plugin = MyPlugin()

server = HttpServer(host='0.0.0.0', port=8088)
server.use_plugin(plugin)
```

## 基于请求头鉴权

导入 AuthKey 插件并实例化后加载进服务。调用接口时，需要在请求头里添加 `Authorization` 字段和值，才允许访问。

为了避免一些静态资源或无需鉴权的接口被拦截，可在 `allow_path` 参数里传入对应 url。

```python
import asyncio
from amiyahttp import HttpServer
from amiyahttp.auth.authKey import AuthKey

auth_key = AuthKey(
    auth_key='my_auth_key',
    headers_key='Authorization',
    allow_path=[
        '/static',
        '/assets',
    ],
)

server = HttpServer(host='0.0.0.0', port=8088)
server.use_plugin(auth_key)
```

## OAuth2 鉴权

导入 OAuth2 插件继承到一个新的类，并实现 `get_user_password` 方法，即可实现 OAuth2 鉴权。

在接口的方法参数里添加 `username: str = oauth2.authorized_user()`，表示该接口需要进行鉴权调用。

```python {23}
from amiyahttp import HttpServer
from amiyahttp.auth.oauth2 import OAuth2

class OAuth2Plugin(OAuth2):
    # 返回用户加密之后的密码
    async def get_user_password(self, username: str) -> str:
        return '<PASSWORD>'


oauth2 = OAuth2Plugin()

server = HttpServer(host='0.0.0.0', port=8088)
server.use_plugin(oauth2)


@server.controller
class Bot:
    @server.route(method='get')
    async def get_name(self):
        return 'AmiyaBot'

    @server.route(method='post')
    async def create_user(self, params: UserModel, username: str = oauth2.authorized_user()):
        # 创建密码
        pwd = oauth2.create_password('123456')
```

## FastAPI 和 Uvicorn 扩展配置

通过使用 `ServerConfig` 类自定义 FastAPI 和 Uvicorn 的启动参数。只需在 `fastapi_options` 或 `uvicorn_options`
字典中定义相应的实例化参数即可（这些参数相当于传递给 FastAPI 或 Uvicorn 的 **kwargs）。

```python
from amiyahttp import HttpServer, ServerConfig

server = HttpServer(
    host='0.0.0.0',
    port=8088,
    config=ServerConfig(
        fastapi_options={...},
        uvicorn_options={...},
    ),
)
```

### 获取 FastApi 实例

如需要扩展 FastApi 的用法，可获取实例后参考[官方文档](https://fastapi.tiangolo.com/)进一步使用。

```python
server = HttpServer()
app: FastAPI = server.app
```
