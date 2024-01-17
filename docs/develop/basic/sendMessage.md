# 发送消息

在消息响应器内返回 Chain 对象，或使用 Message 对象的 send 方法，均可发送消息。

```python {3,5}
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

更多类型请查看左侧导航**消息构建元素**。

## 构建消息的方法

### 普通消息

Chain 对象支持链式语法，用于构建复杂的消息结构。<br>
只需要按顺序以链式使用上述方法，即可拼接出内容丰富的消息。Chain 在最终构建消息的时候，会优化图片与文字的组成，减少消息的请求数量。

```python
Chain(data).text(...).image(...).text(...).html(...)
```

### 合并转发消息

合并转发消息需要使用独立的工具类创建

- [发送合并转发消息](/develop/basic/chainBuild/forward.md)

## 空 Chain

实例化 Chain 对象时，不传入 Message 对象构建的。本文称之为 **“空 Chain”**。空 Chain 一般用于预构建消息。

```python
Chain().text(...).image(...)
```

## 使用辅助类扩展构建

Chain
对象在构建消息时，可使用辅助类介入媒体消息或浏览器的构建过程。请移步 [进阶指南 - 介入媒体消息](/develop/advanced/chainBuilder.md)
