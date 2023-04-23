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

| 参数名       | 类型      | 释义           | 默认值   |
|-----------|---------|--------------|-------|
| data      | Message | Message 对象   | None  |
| at        | Bool    | 是否 @ 用户      | True  |
| reference | Bool    | 是否回复用户（引用消息） | False |

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
