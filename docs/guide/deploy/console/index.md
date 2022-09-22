# 连接控制台

兔兔在启动后会开启一个 HTTP 服务，默认端口为 8088。提供给[控制台](https://console.amiyabot.com)调用。你可以根据需要在启动前修改配置`config/server.yaml`。

```yaml
host: 127.0.0.1
port: 8088
authKey:
```

authKey 为连接控制台时的密匙，默认不需要。

## 连接

浏览器打开控制台 https://console.amiyabot.com，在主界面填入你的服务地址。<br>
默认为 http://127.0.0.1:8088

![](../../../assets/console/link.png)

点击“测试并连接”，成功进入后即可开始配置。
