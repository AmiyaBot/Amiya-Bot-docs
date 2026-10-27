# 图片

发送一张图片

## Chain().image()

| 参数名      | 类型                           | 释义                                        | 默认值 |
|----------|------------------------------|-------------------------------------------|-----|
| target   | str, bytes, List[str, bytes] | 图片文件路径、图片 bytes，或它们的列表；http(s) 地址等价于 url 参数 |     |
| url      | str                          | 网络图片的URL                                  |     |
| download | bool                         | 是否由框架下载图片后再上传（仅部分适配器支持，如 QQ 群）<br>`None` 跟随适配器配置 | None |

```python
Chain(data).image(target)
```

当传入的类型为字符串时，image 方法会认为值为本地图片的路径并尝试读取文件。也可以直接传入 bytes 类型。<br>
如果是网络图片，可以使用 url 参数传入。

```python
Chain(data).image(url=target)
```

`target` 中也可以直接放 http(s) 地址，效果等同于 `url` 参数（早期版本会静默丢弃该元素）。

## 由框架下载图片

部分适配器支持「由框架下载图片，再把字节上传到平台」，适用于**平台访问不到**的地址，
例如内网图床、MCP 服务返回的私有 IP 图片。以 QQ 群机器人为例：

```python
# 单条消息开启
Chain(data).image(url='http://192.168.1.10/chart.png', download=True)
```

```python
# 全局默认开启（QQ 群 / 全域适配器）
from amiyabot.adapters.tencent.qqGroup.builder import QQGroupChainBuilderOptions

options = QQGroupChainBuilderOptions(download_media=True)
adapter = qq_group(client_secret='******', default_chain_builder_options=options)
```

`download` 只对 `url`（以及 `target` 中的 http(s) 地址）生效，`None` 表示跟随适配器配置。
未支持该参数的适配器会忽略它并保持原有行为。
