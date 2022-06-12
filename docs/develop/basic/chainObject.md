# 发送消息：Chain 对象

`Chain` 对象是构建你的消息体的工具类。任何需要发送消息的时候，消息都必须由 Chain 类创建。<br>
Chain 对象提供丰富的消息构建方式，可以让你发送多彩的文字图片，甚至是html模板。<br>

这是最简单的一条文本消息：

```python
Chain(data).text('hello, world')
```

## 实例化参数

任何时候，Chain 对象都需要传入 `Message 对象` 以实例化。

| 参数名       | 类型      | 释义           | 默认值   |
|-----------|---------|--------------|-------|
| data      | Message | Message 对象   |       |
| at        | Bool    | 是否 @ 用户      | True  |
| reference | Bool    | 是否回复用户（引用消息） | False |

## 构建消息的方法

Chain 对象支持链式语法，用于构建复杂的消息结构。以下方法均返回 Chain 对象自身。

| 方法名        | 参数                                | 释义                  | 异步  |
|------------|-----------------------------------|---------------------|-----|
| at         | user,enter                        | 添加 @ 一个用户           | 否   |
| face       | face_id                           | 添加一个Emoji表情         | 否   |
| text       | text,auto_convert                 | 添加一段文字              | 否   |
| text_image | text,images,width,height,bgcolor  | 添加一张文字图片            | 否   |
| image      | target,url                        | 添加一张直接发送的图片         | 否   |
| voice      | url,title                         | 添加一条语音              | 否   |
| html       | path,data,is_template,render_time | 添加一张使用 html 页面生成的图片 | 否   |

### 消息链

Chain 对象支持链式语法，你只需要按顺序以链式使用上述方法，拼接出内容丰富的消息。

```python
Chain(data).text(...).image(...).text(...).html(...)
```

其中，voice 方法并不参与构建消息体，因为 QQ 无法在发送的文字消息中间镶嵌语音，语音将会单独发送。

### **Chain.at**

添加 @ 一个用户

| 参数名   | 类型   | 释义                        | 默认值   |
|-------|------|---------------------------|-------|
| user  | Int  | @ 的用户ID，默认为 Message 对象的用户 |       |
| enter | Bool | 是否 @ 用户后换行                | False |

```python
Chain(data).at(12345678).text('hello, world')
```

Chain 对象在实例化的时候，默认会在消息体头部添加 `@用户`。

### **Chain.face**

添加一个Emoji表情

| 参数名     | 类型  | 释义   | 默认值   |
|---------|-----|------|-------|
| face_id | int | 表情ID |       |

```python
Chain(data).face(175)
```

### **Chain.text**

添加一段文字

| 参数名          | 类型     | 释义           | 默认值   |
|--------------|--------|--------------|-------|
| text         | String | 内容文本         |       |
| auto_convert | Bool   | 是否超出字数后转换为图片 | True  |

```python
Chain(data).text('hello, world')
```

设置 `auto_convert=True` 可开启自动转换，当文字超过一定长度时（默认配置为 100），会自动将本段落转换为图片发送。

::: tip 插入表情<br>
在文本内使用 `[face:ID]` 模板也可以插入 QQ 表情。

```python
Chain(data).text('hello, world[face:175]')
```

:::

### **Chain.text_image**

添加一张文字图片

| 参数名     | 类型               | 释义    | 默认值     |
|---------|------------------|-------|---------|
| text    | String           | 内容文本  |         |
| images  | List\[ImageElem] | 插入图片  | None    |
| width   | Int              | 图片宽度  | None    |
| height  | Int              | 图片高度  | None    |
| bgcolor | String           | 图片背景色 | #F5F5F5 |

```python
Chain(data).text_image('hello, world')
```

此方法可以将文字转换为图片发送，使用**调色模板**可以进行文字调色，亦可插入图片渲染。

#### **调色模板**

在文本内使用
<span style="color: red">\[cl </span>
<span style="color: #001eff">文字内容</span>@<span style="color: #009331">#颜色代码</span>
<span style="color: red"> cle]</span>
格式的模板，将指定文字内容改变颜色。

```python
@bot.on_message(keywords='hello')
async def _(data: Message):
    return Chain(data).text(f'hello [cl {data.nickname}@#ff0000 cle]')
```

<img style="width: 220px" :src="$withBase('/examples/hello5.png')" alt="image">

::: danger text_image 无法插入表情<br>
如果 `Chain.text` 的文本内使用了**调色模板**，将会强制转换为图片。同时 `[face:ID]` 模板也会失效。
:::

#### **渲染图片**

在 images 参数内传入一个包含 ImageElem 对象的列表，可在文字图片内渲染图片。<br>

**ImageElem**

| 参数名  | 类型         | 释义            | 默认值 |
|------|------------|---------------|-----|
| path | String     | 图片路径          |     |
| size | Int        | 图片大小          |     |
| pos  | (Int, Int) | 图片渲染位置 (x, y) |     |

简单尝试一下，发送一张 `hello, world` 的文字图片，并在里面插入一张图片。<br>
需要注意的是，因为 `hello, world` 文字只有一行，所以需要指定一下**图片高度**。否则插入的图片可能会显示不全。<br>
你可以一次插入很多张图片，所以任何时候，都请把握好你的**文字图片宽高**与插入的图片的**大小、坐标**之间的影响。

```python
from amiyabot.builtin.lib.imageCreator import ImageElem


@bot.on_message(keywords='hello')
async def _(data: Message):
    image = ImageElem(path='.../face1.png', size=80, pos=(0, 20))

    return Chain(data).text_image('hello，world',
                                  images=[image],
                                  height=100)
```

你可以收到如下的回复

<img style="width: 220px" :src="$withBase('/examples/hello6.png')" alt="image">

### **Chain.image**

添加一张直接发送的图片

| 参数名    | 类型            | 释义              | 默认值 |
|--------|---------------|-----------------|-----|
| target | String, Bytes | 图片文件路径或图片 bytes |     |
| url    | String        | 网络图片的URL        |     |

```python
Chain(data).image(target)
```

### **Chain.voice**

添加一条语音（QQ机器人暂未支持发送语音）

### **Chain.html**

添加一张[使用 html 页面生成的图片](/develop/htmlConvert)，此部分篇幅较长，我们移步下一节。
