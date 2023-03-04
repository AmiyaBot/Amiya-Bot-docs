# 改变 Playwright 启动

改变默认的 Playwright 启动行为。

```python
from playwright.async_api import Playwright, Browser
from amiyabot import BrowserLaunchConfig


class MyBrowserLauncher(BrowserLaunchConfig):
    def __init__(self):
        super().__init__()

    # 继承并改写 launch_browser 方法
    async def launch_browser(self, playwright: Playwright) -> Browser:
        ...

        # 返回通过任意方式创建的 Browser 对象
        # return await playwright.webkit.launch()
        # return await playwright.firefox.launch()
        return await playwright.chromium.launch()


bot = AmiyaBot()
asyncio.run(
    bot.start(launch_browser=MyBrowserLauncher())
)
```
