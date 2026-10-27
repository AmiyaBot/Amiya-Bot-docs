# QQ 群机器人 <span class="beta-tag">Beta</span>

在 [QQ 开放平台](https://bot.q.qq.com/wiki/#_2-%E4%BC%81%E4%B8%9A%E4%B8%BB%E4%BD%93%E5%85%A5%E9%A9%BB) 完成主体入驻，即可创建可在
QQ 群聊里使用的 QQ 群机器人。

## 在公网下使用

QQ
群聊适配器默认在本地启动资源服务让腾讯服务器能够访问媒体资源，需要在公网下使用。如果无法在公网下部署，请参考[自定义资源服务](#自定义资源服务)。

```python
from amiyabot.adapters.tencent.qqGroup import qq_group

client_secret = '******' # 密钥

bot = AmiyaBot(appid='******', token='', adapter=qq_group(client_secret))
```

::: tip 无需旧 Token <br>
QQ 群/全域适配器的 HTTP 接口与 **WebSocket 鉴权**均使用 `AppSecret` 换取的
[AccessToken](https://bot.q.qq.com/wiki/develop/api-v2/dev-prepare/api-use.html)，
`token` 参数可传空串。官方已废弃旧 Token 鉴权（`Bot appid.token` 格式，WebSocket 使用会返回 `4004`）。
:::

`qq_group` 参数

| 参数名                           | 类型  | 释义          | 默认值                          |
|-------------------------------|-----|-------------|------------------------------|
| client_secret                 | str | 机器人密钥       |                              |
| default_chain_builder         |     | 默认消息构建器     | None                         |
| default_chain_builder_options |     | 默认消息构建器参数   | QQGroupChainBuilderOptions() |
| shard_index                   | int | 分片下标，从 0 开始 | 0                            |
| shards                        | int | 分片总数        | 1                            |
| subscribe_group_member_event  | bool | 订阅群成员事件（入群申请等，需平台审批权限） | False                        |

- 在机器人启动时，资源服务也会一同启动。
- 默认的资源服务是端口单例的，实例化多个 QQ 群聊适配器 AmiyaBot 或使用 [多账号](/develop/basic/multipleAccounts.html)
  时，同一个端口的资源服务会相互共享。

## 接收全量群消息

在 [QQ 开放平台](https://q.qq.com/) 管理端为机器人开启「接收所有消息」后，群内**每条**消息（不限于 @
机器人）都会推送，事件名为 `GROUP_MESSAGE_CREATE`。

适配器默认支持该事件，无需额外配置：

```python
from amiyabot.adapters.tencent.qqGroup import qq_group

bot = AmiyaBot(appid='******', token='******', adapter=qq_group(client_secret='******'))
```

未 @ 机器人的消息，其 `Message.is_at` 为 `False`；已 @ 机器人的消息为 `True`。

适配器会自动从 `text` 中剔除 @ 标记（`<@openid>`），@ 的其他成员进入 `at_target`；
`@全体成员` 置 `is_at_all=True`（不影响 `is_at`）。

```python
@bot.on_message(keywords='天气')
async def _(data: Message):
    if not data.is_at:
        return  # 忽略未 @ 机器人的消息
```

::: tip 前缀触发词 <br>
被 @ 的消息会跳过[前缀触发词](/develop/basic/#使用前缀触发词唤醒机器人)检查；未 @ 的消息需正常匹配前缀触发词。
若希望未 @ 的消息直接命中关键字，可设置 `check_prefix=False`。
:::

全量消息的事件体与 `GROUP_AT_MESSAGE_CREATE` 一致，可用的 `Message` 字段：

| 事件字段 | `Message` |
|---|---|
| `content` | `text` 等文本字段（`<emoji:N>` → `face`） |
| `attachments` | `image/*` → `image`，`voice` → `voice`，`video/*` → `video`，其余 → `files` |
| `author.username` | `nickname` |
| `author.member_role` | 为 `admin` / `owner` 时 `is_admin=True` |
| `mentions` | `at_target` |
| `message_scene.ext` 的 `ref_msg_idx` | `reference_message_id` |

## 订阅群成员事件

传入 `subscribe_group_member_event=True` 可接收入群申请等群成员事件。

::: danger 需要平台审批权限 <br>
若机器人无该 intent 权限却订阅，WebSocket 会返回 `4014` 并断开连接。请确认已有权限后再开启。
:::

```python
bot = AmiyaBot(
    appid='******',
    token='******',
    adapter=qq_group(client_secret='******', subscribe_group_member_event=True),
)
```

```python
@bot.on_event('GROUP_JOIN_REQUEST')
async def _(event: Event, instance: BotAdapterProtocol):
    ...
```

## 事件分片

考虑到开发者事件接收时可以实现负载均衡，QQ
提供了分片逻辑，事件通知会落在不同的分片上，可参考官方文档 [分片连接LoadBalance](https://bot.q.qq.com/wiki/develop/api-v2/dev-prepare/interface-framework/event-emit.html#%E5%88%86%E7%89%87%E8%BF%9E%E6%8E%A5loadbalance)
了解分片机制。

```python
bot1 = AmiyaBot(
    appid='...',
    token='...',
    adapter=qq_group(client_secret='...', shard_index=0, shards=2),
)
bot2 = AmiyaBot(
    appid='...',
    token='...',
    adapter=qq_group(client_secret='...', shard_index=1, shards=2),
)
```

::: danger 注意<br>
每个分片的启动应当**按顺序缓慢进行**，切勿同时启动，以免 gateway 返回的信息一致造成连接失败。

```python
# 仅作示意，实际上每个分片应当是独立的服务。
def start():
    asyncio.create_task(bot1.start())
    time.sleep(2)
    asyncio.create_task(bot2.start())
```

:::

### 修改资源服务配置

引入 `QQGroupChainBuilderOptions` 修改默认的资源服务与媒体下载配置。

| 参数名                    | 类型   | 释义                                                     | 默认值        |
|------------------------|------|--------------------------------------------------------|------------|
| host                   | str  | 资源服务监听地址                                               | 0.0.0.0    |
| port                   | int  | 资源服务监听端口                                               | 8086       |
| resource_path          | str  | 临时文件存放目录                                               | ./resource |
| server_config          | ServerConfig | 服务配置，可传入 `fastapi_options` / `uvicorn_options` 等字典 | ServerConfig() |
| download_media         | bool | 是否由框架下载图片后再上传（见[发送内网图片](#发送内网图片)）          | False      |
| media_download_timeout | float | 下载超时（秒）                                             | 10.0       |
| media_max_bytes        | int  | 框架下载的单个文件上限（字节），超出直接跳过                         | 20971520（20MB） |
| media_trust_env        | bool | 下载时是否读取 `HTTP_PROXY` / `NO_PROXY` 环境变量               | False      |

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

## 发送内网图片

默认情况下 `Chain().image(url=...)` 只是把地址交给 **QQ 平台**去下载转存，
只有公网可达的图片才能发出去；内网地址（私有 IP、只有内网 DNS 能解析）会返回
`850026 下载原始文件失败`，用户端什么都收不到。

开启 `download_media=True` 后改由**框架自己下载**图片字节再上传，内网图床、MCP 服务返回的图片都能发送：

```python
from amiyabot.adapters.tencent.qqGroup import qq_group
from amiyabot.adapters.tencent.qqGroup.builder import QQGroupChainBuilderOptions

bot = AmiyaBot(
    appid='******',
    token='******',
    adapter=qq_group(
        client_secret='******',
        default_chain_builder_options=QQGroupChainBuilderOptions(download_media=True),
    ),
)
```

也可以只对某一条消息开启，或在全局开启后用 `download=False` 关闭：

```python
Chain(data).image(url='http://192.168.1.10/chart.png', download=True)
```

上传策略：

- 图片字节 ≤ 5MB 时直接以二进制上传（`file_data`）；
- 5MB ～ `media_max_bytes` 时自动走分片上传（`upload_prepare` → 分片 PUT → `upload_part_finish`）；
- 下载到的内容不是图片（如 HTML 错误页）或超过 `media_max_bytes` 时跳过该图片并记录 warning；
- 下载失败（超时 / 非 200 / 连接异常）会退回原来的平台侧下载再试一次，不影响同一条 Chain 里的文本消息；
- 同一条 Chain 内重复的 URL 只上传一次。

::: tip 下载不读取系统代理 <br>
`media_trust_env` 默认为 `False`，即下载内网图片时**不读取** `HTTP_PROXY` / `NO_PROXY`。
全局代理会把内网请求劫持成 502，需要走代理时再显式开启。
:::

## 自定义资源服务

非公网部署下的资源服务难题解决途径非常多，这里列举两个比较常见的解决办法。

### 使用内网穿透

使用一些内网穿透工具代理本地地址 http://127.0.0.1:8086（视配置而定）后，通常会得到一个新的地址。继承 `QQGroupChainBuilder`
并覆盖 **domain** 方法，即可使用内网穿透让腾讯服务器访问资源。

示例：

> **http://<span style="color: red">3913rc56vl17.vicp.fun:40229</span>/resource**

红色高亮部分即为内网穿透地址，`/resource` 为固定的路由值。

```python
from amiyabot.adapters.tencent.qqGroup import qq_group, QQGroupChainBuilder, QQGroupChainBuilderOptions

class PenetrationChainBuilder(QQGroupChainBuilder):
    @property
    def domain(self):
        return 'http://3913rc56vl17.vicp.fun:40229/resource'


bot = AmiyaBot(
    ...,
    adapter=qq_group(
        ...,
        default_chain_builder=PenetrationChainBuilder(
            QQGroupChainBuilderOptions(),
        ),
    ),
)
```

### 继承 ChainBuilder 并实现相关方法使用第三方托管服务。

多数情况下我们推荐使用第三方托管服务来搭建资源服务，如 [腾讯云COS](https://www.baidu.com/s?wd=%E8%85%BE%E8%AE%AF%E4%BA%91COS)
或 [阿里云OSS](https://www.baidu.com/s?wd=%E9%98%BF%E9%87%8C%E4%BA%91OSS) 等。通过自定义默认的 `ChainBuilder`
，来实现上传文件到托管服务以及返回生成的 url。

可参考 [进阶指南 - 介入媒体消息的构建过程](/develop/advanced/chainBuilder.md)

```python
from typing import Union
from graiax import silkcoder
from amiyabot import ChainBuilder

class ThirdPartyChainBuilder(ChainBuilder):
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


bot = AmiyaBot(
    ...,
    adapter=qq_group(
        ...,
        default_chain_builder=ThirdPartyChainBuilder(),
    ),
)
```
