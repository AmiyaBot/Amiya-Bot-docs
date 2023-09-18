# 打包插件

插件推荐发布为 zip 压缩包

## 直接打包

将整个插件文件夹压缩为 zip 包即可。如果你的插件使用了第三方库，你可能需要将第三方库手动放进插件包内。

### 示例

如在插件内使用了库 `pypyodbc`，在本地 python 环境内找到 **pypyodbc.py**（有时候会是 package 文件夹），并拷贝进 zip 包内。

```python
# main.py
import pypyodbc

...
```

```text {4}
myPlugin.zip
├── __init__.py
├── main.py
└── pypyodbc.py
```

当 `main.py` 内的导入语句 `import pypyodbc` 被执行时，优先使用插件内的 pypyodbc 包。

::: warning 注意<br>
若无法通过上述手段将第三方包添加进插件包，你的插件将可能不支持
[可执行文件部署](/guide/deploy/getStarted.html#通过可执行文件部署)
。你可以在你的插件文档内注明，并让代码部署的用户使用 `pip install xxx` 安装第三方依赖。
:::

## 使用脚本打包

如果你是在 demo 下开发的插件，运行脚本 run_build.py 即可自动打包。

```bash
python run_build.py --type plugins
```

::: warning 注意<br>
脚本打包尚处于试验阶段，你仍然需要手动添加第三方包进插件
:::
