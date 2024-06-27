# QQ 群机器人 <span class="beta-tag">Beta</span>

在 [QQ 开放平台](https://bot.q.qq.com/wiki/#_2-%E4%BC%81%E4%B8%9A%E4%B8%BB%E4%BD%93%E5%85%A5%E9%A9%BB) 完成企业主体入驻，即可创建可在
QQ 群聊里使用的 QQ 群机器人。

## 在公网下使用

QQ
群聊适配器需要在本地启动资源服务让腾讯端能够访问媒体资源，默认在公网下使用。如果无法在公网下部署，请参考[自定义资源服务](#自定义资源服务)。

```python
from amiyabot.adapters.tencent.qqGroup import qq_group

client_secret = '******' # 密钥

bot = AmiyaBot(appid='******', token='******', adapter=qq_group(client_secret))
```

- 在机器人启动时，资源服务也会一同启动。
- 默认的资源服务是端口单例的，实例化多个 QQ 群聊适配器 AmiyaBot 或使用 [多账号](/develop/basic/multipleAccounts.html)
  时，同一个端口的资源服务会相互共享。

### 修改资源服务配置

引入 `QQGroupChainBuilderOptions` 修改默认的资源服务配置。

| 参数名                 | 类型   | 释义                                                        | 默认值        |
|---------------------|------|-----------------------------------------------------------|------------|
| host                | str  | 资源服务监听地址                                                  | 0.0.0.0    |
| port                | int  | 资源服务监听端口                                                  | 8086       |
| resource_path       | str  | 临时文件存放目录                                                  | ./resource |
| http_server_options | dict | [HttpServer **kwargs](/develop/advanced/httpSupport.html) |            |

```python
from amiyabot.adapters.tencent.qqGroup import qq_group
from amiyabot.adapters.tencent.qqGroup.builder import QQGroupChainBuilderOptions

bot = AmiyaBot(
    appid='******',
    token='******',
    adapter=qq_group(
        client_secret='******',
        default_chain_builder_options=QQGroupChainBuilderOptions(
            '0.0.0.0',
            8086,
            './resource',
        ),
    ),
)
```

## 自定义资源服务

多数情况下我们推荐使用第三方托管服务来搭建资源服务，如 [腾讯云COS](https://www.baidu.com/s?wd=%E8%85%BE%E8%AE%AF%E4%BA%91COS)
或 [阿里云OSS](https://www.baidu.com/s?wd=%E9%98%BF%E9%87%8C%E4%BA%91OSS) 等。

通过自定义默认的 `ChainBuilder`，来实现上传文件到托管服务以及返回生成的 url。

### 继承 ChainBuilder 并实现相关方法。

可参考 [进阶指南 - 介入媒体消息的构建过程](/develop/advanced/chainBuilder.md)

```python
from typing import Union
from graiax import silkcoder
from amiyabot import ChainBuilder

class MyBuilder(ChainBuilder):
    @classmethod
    async def get_image(cls, image: Union[str, bytes]) -> Union[str, bytes]:
        # 上传图片到第三方托管服务
        ...
        return url # 返回访问资源的 URL

    @classmethod
    async def get_voice(cls, voice_file: str) -> str:
        # 上传语音文件到第三方托管服务，语音文件必须是 silk 格式
        voice: bytes = await silkcoder.async_encode(voice_file, ios_adaptive=True)
        ...
        return url # 返回访问资源的 URL

    @classmethod
    async def get_video(cls, video_file: str) -> str:
        # 上传视频文件到第三方托管服务
        ...
        return url # 返回访问资源的 URL


bot = AmiyaBot(..., adapter=qq_group(default_chain_builder=MyBuilder()))
```
