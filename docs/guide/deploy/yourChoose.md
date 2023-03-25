# 选择你的运营方

QQ 机器人目前分为两种，一种是由腾讯官方运营的 [频道机器人](https://bot.q.qq.com/wiki)，另一种则是由第三方技术提供支持的QQ群机器人。

## 频道机器人

如果你选择了频道机器人，并且注册了“**公域机器人**”，很遗憾地告诉你，你不能继续部署兔兔了。因为兔兔有官方版本，你不能发布一个功能与官方版本相当接近的机器人。你可以加入
[官方频道](https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=1W4sJux&appChannel=share&businessType=9&from=181074&biz=ka&shareSource=5)
并找到机器人“AmiyaBot”，点开资料卡添加到自己的频道里。

当然，你可以基于 AmiyaBot 框架开发自己的机器人并发布。请参阅 [开发指南](https://www.amiyabot.com/develop/basic/)。

如果是“**私域机器人**”，你仍然可以继续部署。

## QQ 群机器人

如果你选择了 QQ 群机器人，你可能需要克服一些困难才能顺利部署。你必须部署第三方技术提供的服务才能继续部署兔兔。

第三方技术目前支持：

- [go-cqhttp](https://docs.go-cqhttp.org/)
- [mirai-api-http](https://docs.mirai.mamoe.net/mirai-api-http/)

选择其中一个进行部署即可。

### 使用 go-cqhttp

推荐你直接在 [go-cqhttp 官网](https://docs.go-cqhttp.org/) 按照说明进行部署。如果你能力有限，可以点击下面的链接，下载已经配置好的一键包。

https://cos.amiyabot.com/tools/go-cqhttp.zip

该一键包为 go-cqhttp 的 [v1.0.0-rc3](https://github.com/Mrs4s/go-cqhttp/releases/tag/v1.0.0-rc3)
版本，省去了首次启动后生成配置文件和启动批处理脚本的步骤，并修改了配置文件。
注意：因不可抗力因素，确保你配置正确的前提下，如果出现登录不上的问题，请前往官网下载安装最新版，并覆盖上本一键包的config文件

::: danger 注意<br>
仅适合 64 位的 Windows 系统。并且使用过程中遇到的一切非预期问题，本项目都概不负责。
:::

- 解压 go-cqhttp.zip
- 双击运行 go-cqhttp.bat
- 等待启动完成后，扫码登录你的机器人QQ帐号

登录成功后请记住以下配置信息，在配置实例的时候需要使用到。

```
TOKEN：AmiyaBot
适配器类型：CQ-Http
Host地址：127.0.0.1
HTTP端口：8080
WS端口：8060
```

### 使用 mirai-api-http

mirai-api-http 有一定的部署难度，需要你拥有一定的计算机科学基础。但对比其他第三方服务，mirai 在很多方面都占有优势。

我们的团队成员 [Initial-heart](https://github.com/Initial-heart-1) 为你提供了一篇部署 mirai-api-http 的博客，这篇博文详尽的描述了部署
mirai-api-http
的前期准备、部署、配置等整套部署 mirai-api-http 所需的流程。

https://www.initbili.top/2022/8d92a2feb3e2/#2-%E9%83%A8%E7%BD%B2-mirai

## 结语

::: danger 非常重要<br>
请耐心根据教程部署完。部署完第三方服务，你就完成 80% 的工作了！务必部署成功再往下继续，否则后续的操作将毫无意义。
:::

如果一切就绪，那么接着来看开始部署部分。
