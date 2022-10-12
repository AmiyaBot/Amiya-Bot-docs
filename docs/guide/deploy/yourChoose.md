# 选择你的运营方

QQ 机器人目前分为两种，一种是由腾讯官方运营的 [频道机器人](https://bot.q.qq.com/wiki)，另一种则是由第三方技术提供支持的**QQ 群机器人**。

## 频道机器人

如果你选择了频道机器人，并且注册了“**公域机器人**”，很遗憾地告诉你，你不能继续部署兔兔了。因为兔兔有官方版本，你不能发布一个功能与官方版本相当接近的机器人。你可以加入
[官方频道](https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=1W4sJux&appChannel=share&businessType=9&from=181074&biz=ka&shareSource=5)
并找到机器人“AmiyaBot”，点开资料卡添加到自己的频道里。

当然，你可以基于 AmiyaBot 框架开发自己的机器人并发布。请参阅 [开发指南](https://www.amiyabot.com/develop/basic/)。

如果是“**私域机器人**”，你仍然可以继续部署。

## QQ 群机器人

如果你选择了 QQ 群机器人，你可能需要克服一些困难才能顺利部署。你必须部署第三方技术提供的服务才能继续部署兔兔。

第三方技术目前支持：

- [mirai-api-http](https://docs.mirai.mamoe.net/mirai-api-http/)
- [go-cqhttp](https://docs.go-cqhttp.org/)

选择其中一个进行部署。

### 使用 mirai-api-http

我们的团队成员 [Initial-heart](https://github.com/Initial-heart-1) 为你提供了一篇部署 mirai-api-http 的博客，这篇博文详尽的描述了部署 mirai-api-http
的前期准备、部署、配置等整套部署 mirai-api-http 所需的流程。

https://www.initbili.top/2022/8d92a2feb3e2/#2-%E9%83%A8%E7%BD%B2-mirai

### 使用 go-cqhttp

> 编写中，敬请期待...

## 结语

::: danger 非常重要<br>
请耐心根据教程部署完。部署完第三方服务，你就完成 80% 的工作了！务必部署成功再往下继续，否则后续的操作将毫无意义。
:::

如果一切就绪，那么接着来看开始部署部分。
