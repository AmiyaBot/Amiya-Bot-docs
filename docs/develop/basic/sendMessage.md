# 发送消息

在消息响应器内返回 Chain 对象，或使用 Message 对象的 send 方法，均可发送消息。

```python {4}
@bot.on_message(keywords='hello')
async def _(data: Message):
    await data.send(Chain(data).text('hello'))

    return Chain(data).text(data.nickname)
```

<img style="width: 220px" src="../../assets/examples/hello3.png" alt="image">

## Chain 对象

| 参数名           | 类型           | 释义           | 默认值            |
|---------------|--------------|--------------|----------------|
| data          | Message      | Message 对象   | None           |
| at            | bool         | 是否 @ 用户      | True           |
| reference     | bool         | 是否回复用户（引用消息） | False          |
| chain_builder | ChainBuilder | Chain 辅助构建实例 | ChainBuilder() |

`Chain` 对象是构建你的消息体的工具类。任何需要发送消息的时候，消息都必须由 Chain 类创建。<br>
Chain 对象提供丰富的消息构建方式，可以让你发送多彩的文字图片，甚至是html模板。<br>

这是最简单的一条文本消息：

```python
Chain(data).text('hello, world')
```

## 构建消息的方法

### 普通消息

Chain 对象支持链式语法，用于构建复杂的消息结构。以下方法均返回 Chain 对象自身。

- [发送 At](/develop/basic/chainBuild/at.md)
- [发送表情](/develop/basic/chainBuild/face.md)
- [发送文字](/develop/basic/chainBuild/text.md)
- [发送图片](/develop/basic/chainBuild/image.md)
- [发送文字生成的图片](/develop/basic/chainBuild/textImage.md)
- [发送 html 生成的图片](/develop/basic/chainBuild/html.md)
- [发送 markdown 生成的图片](/develop/basic/chainBuild/markdown.md)
- [发送语音](/develop/basic/chainBuild/voice.md)
- [发送原生模板 & CQ码](/develop/basic/chainBuild/extend.md)

只需要按顺序以链式使用上述方法，即可拼接出内容丰富的消息。Chain 在最终构建消息的时候，会优化图片与文字的组成，减少消息的请求数量。

```python
Chain(data).text(...).image(...).text(...).html(...)
```

::: warning 关于语音<br>
voice 方法并不参与构建消息体，因为 QQ 无法在发送的文字消息中间镶嵌语音，语音将会单独发送。
:::

### 合并转发消息

合并转发消息需要使用独立的工具类创建

- [发送合并转发消息](/develop/basic/chainBuild/forward.md)

## 空 Chain

实例化 Chain 对象时，不传入 Message 对象构建的。本文称之为 **“空 Chain”**。空 Chain 一般用于预构建消息。

```python
Chain().text(...).image(...)
```

## 使用辅助类扩展构建

Chain 在构建时，可使用辅助类介入图片或浏览器的构建过程。

### 创建辅助类

```python
from typing import Union
from amiyabot import Chain, ChainBuilder
from playwright.async_api import Page


# 继承 ChainBuilder
class MyBuilder(ChainBuilder):
    @classmethod
    async def get_image(cls, image: Union[str, bytes]):
        ...
        return image

    @classmethod
    async def on_page_rendered(cls, page: Page):
        ...


# 在构造参数里使用辅助类
chain = Chain(..., chain_builder=MyBuilder())

# 为属性赋值使用辅助类
chain.builder = MyBuilder()
```

### get_image 函数

该函数会在 chain 构建图片消息时调用，每张图片会调用一次。传入一个参数 `image` ，类型为 `str`（path 或 url） 或
`bytes`（图片字节数据）。该函数必须拥有返回值，同样是以上两种类型，chain 会根据返回的类型做进一步处理。

### on_page_rendered 函数

该函数会在 chain 构建浏览器渲染的图片并打开了页面时调用，提供了浏览器的 `Page` 对象，可在此对 `Page` 进行操作（如对页面进行
JS 注入等）。

::: tip 提示
构建浏览器渲染的图片同样也会调用一次 `get_image` 函数。
:::
