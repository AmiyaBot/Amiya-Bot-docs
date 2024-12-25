# 通过代码部署

请根据操作系统按顺序执行以下命令。

::: warning 注意<br>
推荐使用 Python 3.8 ~ 3.9 运行本项目代码，并参照可执行文件的系统支持选择部署的操作系统。
:::

1. [克隆仓库](https://github.com/AmiyaBot/Amiya-Bot)

```bash
git clone --depth 1 https://github.com/AmiyaBot/Amiya-Bot.git
cd Amiya-Bot
```

2. 使用 [virtualenv](https://virtualenv.pypa.io/en/latest/) 创建虚拟环境（非必须，或根据个人习惯选择虚拟环境）

```bash
# Windows
python -m venv venv
call venv/Scripts/activate.bat
```

```bash
# Linux or MacOS
python -m venv venv
source venv/bin/activate
```

3. 安装依赖

```bash
pip install -r requirements.txt
```

4. 安装浏览器内核

默认为 Chromium

```bash
# Windows or MacOS
playwright install chromium
# Linux
playwright install --with-deps chromium
```

部分系统由于版本过低（如 Windows Server 2012），可能不支持 chromium 内核。推荐修改为火狐（firefox）内核启动。

```bash
# Windows or MacOS
playwright install firefox
# Linux
playwright install --with-deps firefox
```

::: details 使用火狐内核需要修改入口程序 `amiya.py`，点击查看代码

```python {3,6-11,20}
import ...

from amiyabot import BrowserLaunchConfig  # 导入浏览器启动配置类


# 创建新启动类
class Launcher(BrowserLaunchConfig):
    def __init__(self):
        super().__init__()

        self.browser_type = 'firefox'  # 设定浏览器属性


def run_amiya(*tasks: Coroutine):
    ...


if __name__ == '__main__':
    run_amiya(
        bot.start(launch_browser=Launcher()),  # 更改为使用新启动类启动浏览器
        app.serve(),
        load_plugins()
    )
```

:::

5. 运行代码

```bash
python amiya.py
```

日志显示同可执行文件部署，成功后可以进入下一节。
