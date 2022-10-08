# 准备开发环境

插件并不强制要求在 demo 的项目下开发，如果插件**不需要使用 demo 的内置模块**，那么你可以在自己任意的目录内开发而不需要克隆 demo 项目以及插件仓库的代码。

以下说明默认在 demo 项目内。

## 克隆仓库

克隆 AmiyaBot-demo

```bash
git clone https://github.com/AmiyaBot/Amiya-Bot.git
```

在 demo 项目内克隆插件开发仓库

```bash
cd Amiya-Bot
git clone https://github.com/AmiyaBot/Amiya-Bot-plugins.git pluginsDev
```

此时的目录结构应为

```
Amiya-Bot
├── pluginsDev
│   │
│   ...
...
```

此时建议安装 AmiyaBot-demo 的依赖，如果**不需要使用 demo 的内置模块**或是你在自己的目录内开发插件。那么只需要安装 amiyabot 即可。

```bash
pip install amiyabot
```
