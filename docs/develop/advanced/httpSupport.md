# HTTP服务器支持

AmiyaBot 内置了基于 [FastApi](https://fastapi.tiangolo.com/) 的HTTP服务。与 AmiyaBot 的宗旨相同，你仍然可以用简便的方式创建HTTP服务。

## 创建服务

```python
from amiyabot import HttpServer

server = HttpServer(host='0.0.0.0', port=8088)


@server.controller
class Bot:
    @server.route(method='get')
    async def get_name(self):
        return 'AmiyaBot'

    @server.route(method='post')
    async def say_hello(self):
        return server.response(message='hello')


asyncio.run(server.serve())
```

运行代码，访问 http://0.0.0.0:8088/docs 页面，即可看到生成了如下两个接口。

```
/bot/getName
/bot/sayHello
```

## 自定义路由

接口的路由将默认使用**控制器类名**以及**方法名**组成，如果需要自定义路由，在方法装饰器 route 传入 router_path 参数即可。

```python
@server.route(method='get', router_path='/custom/getBotName')
async def get_name(self):
    ...
```

## 密匙校验

在创建 HttpServer 时传入 auth_key 参数，则在调用接口时，需要在请求头（Header）里添加 `authKey` 字段并匹配参数的值，才允许访问。

```python
server = HttpServer(..., auth_key='my_auth_key')
```

## FastApi 扩展

AmiyaBot 仅对 FastApi 的路由注册做了简易的封装。如需要扩展其用法，可获取 app 实例后参考[官方文档](https://fastapi.tiangolo.com/)进一步使用。

```python
server = HttpServer()
app: FastAPI = server.app
```
