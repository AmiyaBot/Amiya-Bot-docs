# 启动参数

使用启动参数修改一些内置变量

| 参数                       | 是否需要值 | 默认值  | 释义                      |
|--------------------------|-------|------|-------------------------|
| --debug                  | 否     |      | 以 DEBUG 模式启动程序          |
| --browser-width          | 是     | 1280 | 浏览器视窗默认宽度（px）           |
| --browser-height         | 是     | 720  | 浏览器视窗默认高度（px）           |
| --browser-render-time    | 是     | 200  | 浏览器默认渲染时间（ms）           |
| --text-max-length        | 是     | 100  | Chain 对象转换文字图片的文字长度最大值  |
| --browser-page-not-close | 否     |      | 取消自动关闭 playwright 的网页窗口 |

## 在 兔兔-v6 下使用

代码部署

```bash
python amiya.py --text-max-length 200 --browser-render-time 1000
```

可执行文件部署

```bash
AmiyaBot-v6.x.x-master.exe --debug --browser-page-not-close
```
