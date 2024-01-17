# 介入 Chain 构建媒体消息时的操作

Chain 对象在构建消息时，可使用辅助类介入媒体消息或浏览器的构建过程。

## 创建辅助类

继承 `ChainBuilder` 类并覆写其方法创建一个自定义的辅助类。在实例化 Chain 时，传入辅助类实例即可介入 Chain 的操作。

```python
from typing import Union
from amiyabot import Chain, ChainBuilder
from playwright.async_api import Page

class MyBuilder(ChainBuilder):
    @classmethod
    async def get_image(cls, image: Union[str, bytes]) -> Union[str, bytes]:
        ...
        return image

    @classmethod
    async def get_voice(cls, voice_file: str) -> str:
        ...
        return voice_file

    @classmethod
    async def get_video(cls, video_file: str) -> str:
        ...
        return video_file

    @classmethod
    async def on_page_rendered(cls, page: Page):
        ...


# 在构造参数里使用辅助类
chain = Chain(..., chain_builder=MyBuilder())

# 为属性赋值使用辅助类
chain.builder = MyBuilder()
```

## get_image

该函数会在 chain 构建图片消息时调用，每张图片调用一次。传入一个参数 `image` ，类型为 `str`（文件路径或 url） 或
`bytes`（图片字节数据）。<br>
如果函数有返回值（必须是以上两种类型），chain 会使用返回值构建图片消息。

## get_voice

该函数会在 chain 构建语音消息时调用，每个语音文件调用一次。传入文件路径 `voice_file`。<br>
如果函数有返回值，chain 会使用返回值构建语音消息。

## get_video

该函数会在 chain 构建视频消息时调用，每个视频文件调用一次。传入文件路径 `video_file`。<br>
如果函数有返回值，chain 会使用返回值构建视频消息。

## on_page_rendered

该函数会在 chain 构建浏览器渲染的图片并打开了页面时调用，提供了浏览器的 `Page` 对象，可在此对 `Page` 进行操作（如对页面进行
JS 注入等）。

::: tip 提示
构建浏览器渲染的图片同样也会调用一次 `get_image` 函数。
:::

**使用示例**

```python
class BaiduSearch(ChainBuilder):
    @classmethod
    async def on_page_rendered(cls, page: Page):
        """
        可以在截图前先对页面进行操作，比如 ”百度一下“
        """
        await page.locator('#kw').fill('AmiyaBot')
        await page.locator('#su').click()
        await asyncio.sleep(2)


@bot.on_message(keywords='hello')
async def _(data: Message):
    chain = Chain(data, chain_builder=BaiduSearch())

    return chain.html(
        'https://www.baidu.com/',
        is_template=False,
        render_time=1000,
    )
```
