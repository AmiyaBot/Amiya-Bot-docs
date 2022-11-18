<script setup>
import download from '../../components/download.vue'
</script>

# 开始部署

::: danger 操作系统支持<br>

- Windows 10 以上系统
- MacOS 10.14 Mojave 以上系统
- Linux 系统官方支持 Ubuntu 18.04 以及 Ubuntu 20.04（不完全测试）

:::

## 安装 Git

兔兔的资源更新依赖本地的 Git
服务。[点击下载](https://objects.githubusercontent.com/github-production-release-asset-2e65be/23216272/2c9b0433-013d-483f-8c1c-256e88ec86f3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20220922%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220922T110228Z&X-Amz-Expires=300&X-Amz-Signature=366b23a99d9d870adc84fcfa3b7bbbebdff6484446b49a76922930f32a603102&X-Amz-SignedHeaders=host&actor_id=34387011&key_id=0&repo_id=23216272&response-content-disposition=attachment%3B%20filename%3DGit-2.37.3-64-bit.exe&response-content-type=application%2Foctet-stream)
并安装。或自行到[官网](http://gitforwindows.org/)下载合适自己系统的版本。

## 部署

根据你的设备系统或习惯，你可以选择 <span style="color: red">可执行文件部署</span> 或 <span style="color: red">
代码部署</span> 两种方式<span style="color: red">其一</span>。

Windows 系统推荐使用**可执行文件部署**，可执行文件部署是一键部署的模式，部署难度低。

## 通过可执行文件部署

::: danger 注意<br>
仅支持 Windows 10 以上系统
:::

点击下载可执行文件：
<download version="master" text="正式版" />
<download version="dev" text="测试版" />

解压并运行 AmiyaBot-*.exe，如下图成功运行后可以进入[下一节](/guide/deploy/console/)。

![img.png](../../assets/deploy/running.png)

## 通过代码部署

::: warning 注意<br>
推荐使用 Python 3.7 ~ 3.8 运行本项目代码
:::

1. [克隆仓库](https://github.com/AmiyaBot/Amiya-Bot)
2. 安装依赖

```bash
pip install -r requirements.txt
```

3. 安装 Chromium

**Windows or MacOS**

```bash
playwright install chromium
```

**Ubuntu（Linux）**

```bash
playwright install --with-deps chromium
```

4. 运行代码

```bash
python amiya.py
```

日志显示同可执行文件部署，成功后可以进入下一节。
