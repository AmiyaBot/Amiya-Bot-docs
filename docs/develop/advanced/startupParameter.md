# 启动参数

使用启动参数修改一些内置变量

| 参数                    | 是否需要值 | 默认值  | 释义                     |
|-----------------------|-------|------|------------------------|
| --browser-width       | 是     | 1280 | 浏览器视窗默认宽度（px）          |
| --browser-height      | 是     | 720  | 浏览器视窗默认高度（px）          |
| --browser-render-time | 是     | 200  | 浏览器默认渲染时间（ms）          |
| --text-max-length     | 是     | 100  | Chain 对象转换文字图片的文字长度最大值 |

```bash
python amiya.py --text-max-length 200 --browser-render-time 1000
```

```bash
AmiyaBot-v6.x.x-master.exe --text-max-length 200 --browser-render-time 1000
```
