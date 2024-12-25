# 开始部署

::: danger 操作系统支持<br>

- Windows 10、Windows Subsystem for Linux (WSL) 或 Windows Server 2012 及以上系统
- MacOS 11 (Big Sur) 及以上系统
- Linux 系统官方支持 Debian 11、Ubuntu 18.04 及更新版本

:::

## 安装 Git

部分插件依赖本地的 Git 服务，必须安装 Git 以确保正常使用。请自行到 [GIT官网](http://gitforwindows.org/) 下载合适自己系统的版本。

## 部署

根据你的设备系统或习惯，你可以选择以下其中一种部署方式：

1. [可执行文件部署](/guide/deploy/getStarted/exe.md)<span style="color: red">（仅限 Windows）</span>
2. [Docker部署](/guide/deploy/getStarted/docker.md)
3. [代码部署](/guide/deploy/getStarted/code.md)

Windows 系统推荐使用**可执行文件部署**，可执行文件部署是一键部署的模式，部署难度低。<br>
Linux 系统推荐使用 **Docker 部署**，Docker 部署可以解决不同 Linux 发行版的系统依赖问题，支持一键升级，推荐云服务器使用该种方式部署。

::: danger 注意<br>
理论上，Windows 亦可使用 Docker 部署，但并不推荐您使用该方式。请注意，我们不会就特定于在 Windows 上使用 Docker
部署相关的任何问题提供支持。
:::
