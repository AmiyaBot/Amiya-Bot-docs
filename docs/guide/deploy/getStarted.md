<script setup>
import download from '../../components/download.vue'
</script>

# 开始部署

::: danger 操作系统支持<br>

- Windows 10、Windows Subsystem for Linux (WSL) 或 Windows Server 2012 及以上系统
- MacOS 11 (Big Sur) 及以上系统
- Linux 系统官方支持 Debian 11、Ubuntu 18.04 以及 Ubuntu 20.04

:::

## 安装 Git

部分插件依赖本地的 Git
服务，必须安装 Git
以确保正常使用。[点击下载](https://objects.githubusercontent.com/github-production-release-asset-2e65be/23216272/2c9b0433-013d-483f-8c1c-256e88ec86f3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20220922%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220922T110228Z&X-Amz-Expires=300&X-Amz-Signature=366b23a99d9d870adc84fcfa3b7bbbebdff6484446b49a76922930f32a603102&X-Amz-SignedHeaders=host&actor_id=34387011&key_id=0&repo_id=23216272&response-content-disposition=attachment%3B%20filename%3DGit-2.37.3-64-bit.exe&response-content-type=application%2Foctet-stream)
并安装。或自行到[官网](http://gitforwindows.org/)下载合适自己系统的版本。

## 部署

根据你的设备系统或习惯，你可以选择 <span style="color: red">可执行文件部署</span> 或 <span style="color: red">
代码部署</span> 两种方式<span style="color: red">其一</span>。

Windows 系统推荐使用**可执行文件部署**，可执行文件部署是一键部署的模式，部署难度低。

## 通过可执行文件部署

| 操作系统    | 下载                           | 备注                                       |
|---------|------------------------------|------------------------------------------|
| Windows | <download version="win32" /> | 仅支持 Windows 10、Windows Server 2016 及以上系统 |
| Linux   | <del>AmiyaBot-v6.4.6-linux.zip</del> | 不再继续提供支持，请使用代码部署         |

### Windows

下载并解压，运行 `AmiyaBot-v6.x.x-win32.exe`，如下图成功运行后可以进入[下一节](/guide/deploy/console/)。

![img.png](../../assets/deploy/running.png)

### Linux

不再继续提供支持，**请使用代码部署**。

<details>
<summary>原内容</summary>

不支持 Centos，目前在 Ubuntu 20.04 测试可用。

下载并解压，进入 `package/dist` 目录，运行 `AmiyaBot-v6.x.x-linux`。

```bash
cd package/dist/
chmod 777 ./AmiyaBot-v6.x.x-linux
./AmiyaBot-v6.x.x-linux
```
</details>

## 通过代码部署

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
