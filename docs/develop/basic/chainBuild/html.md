# HTML 生成的图片

发送一张使用 html 页面生成的图片，在同等工作量下，它通常比使用 PIL 合成的图片更加生动，技术难度也比 PIL 要低得多。

::: danger 操作系统支持<br>

HTML制图需要使用 playwright 模块，所以仅支持以下操作系统：

- Windows 10、Windows Subsystem for Linux (WSL) 或 Windows Server 2012 及以上系统
- MacOS 11 (Big Sur) 及以上系统
- Linux 系统官方支持 Debian 11、Ubuntu 18.04 以及 Ubuntu 20.04

:::

## 安装 Chromium

命令行执行以下命令安装 Chromium 内核：

```bash
# Windows or MacOS
playwright install chromium
# Linux
playwright install --with-deps chromium
```

## 启动时打开 Chromium

在 bot（包括[多账号实例](/develop/basic/multipleAccounts.html#创建一个多账号实例)）启动的 start
方法内设置参数 `launch_browser=True`

```python
bot.start(launch_browser=True)
```

进阶使用：[改变默认的 Playwright 启动行为](/develop/advanced/playwright)

## Chain().html()

| 参数名         | 类型   | 释义                       | 默认值  |
|-------------|------|--------------------------|------|
| path        | str  | 模板文件路径或网站URL             |      |
| data        | Any  | 传入模板文件的数据（数据可被 json 序列化） |      |
| width       | int  | 浏览器视窗宽度                  | 1280 |
| height      | int  | 浏览器视窗高度                  | 720  |
| is_template | bool | 是否为模板文件                  | True |
| render_time | int  | 渲染时间（毫秒）                 | 200  |

```python
Chain(data).html('template.html', {...})
```

## **创建html模板文件**

创建文件 hello.html 并定义全局的 init 方法。

```html
<!-- hello.html -->
<div id="content"></div>

<script>
    // 必须定义全局的 init 方法，接收一个 data 参数
    window.init = (data) => {
        document.querySelector('#content').innerText = data.username
    }
</script>
```

将需要渲染的数据传入模板：

```python
@bot.on_message(keywords='hello')
async def _(data: Message):
    return Chain(data).html('hello.html', {'username': data.nickname})
```

示例在触发会话并开始发送消息时，Chain 对象将会调用 Chromium 无头浏览器，渲染 `hello.html` 并在页面内执行 JavaScript
语句 `init({'username': 'vivien8261'})`。<br>
渲染结束后，无头浏览器截图生成图片，然后执行常规的图片发送方法。

<img src="../../../assets/examples/hello7.png" alt="image">

_发挥你的想象，写出更美观的页面！_

::: details 兔兔-v6 效果<br>
<img src="../../../assets/examples/awesome1.png" alt="image">
:::

## **通过网站URL制图**

支持直接使用网站URL生成图片。

::: danger 注意 <br>
在页面加载完毕后，默认预留200ms的渲染时间。如果页面有部分元素是异步渲染的，将有可能不显示在图片内。可通过参数 `render_time`
设置需要的时间。
:::

设置参数 `is_template=False`

```python
@bot.on_message(keywords='hello')
async def _(data: Message):
    return Chain(data).html('https://www.baidu.com/',
                            is_template=False,
                            render_time=1000)
```

触发会话时，渲染 `https://www.baidu.com/` 页面，并在等待 `1000ms` 后截图发送图片。
