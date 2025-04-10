import{_ as s,o as e,c as p,S as n}from"./chunks/framework.65893c8f.js";const h=JSON.parse('{"title":"打包插件","description":"","frontmatter":{},"headers":[],"relativePath":"develop/plugin/build.md","filePath":"develop/plugin/build.md","lastUpdated":1744281297000}'),l={name:"develop/plugin/build.md"};function t(o,a,i,c,d,r){return e(),p("div",null,a[0]||(a[0]=[n(`<h1 id="打包插件" tabindex="-1">打包插件 <a class="header-anchor" href="#打包插件" aria-label="Permalink to &quot;打包插件&quot;">​</a></h1><p>插件推荐发布为 zip 压缩包</p><h2 id="直接打包" tabindex="-1">直接打包 <a class="header-anchor" href="#直接打包" aria-label="Permalink to &quot;直接打包&quot;">​</a></h2><p>将整个插件文件夹压缩为 zip 包即可。如果你的插件使用了第三方库，你可能需要将第三方库手动放进插件包内。</p><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>如在插件内使用了库 <code>pypyodbc</code>，在本地 python 环境内找到 <strong>pypyodbc.py</strong>（有时候会是 package 文件夹），并拷贝进 zip 包内。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># main.py</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> pypyodbc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">...</span></span></code></pre></div><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#babed8;">myPlugin.zip</span></span>
<span class="line"><span style="color:#babed8;">├── __init__.py</span></span>
<span class="line"><span style="color:#babed8;">├── main.py</span></span>
<span class="line highlighted"><span style="color:#babed8;">└── pypyodbc.py</span></span></code></pre></div><p>当 <code>main.py</code> 内的导入语句 <code>import pypyodbc</code> 被执行时，优先使用插件内的 pypyodbc 包。</p><div class="warning custom-block"><p class="custom-block-title">注意<br></p><p>若无法通过上述手段将第三方包添加进插件包，你的插件将可能不支持 <a href="/guide/deploy/getStarted/index.html#通过可执行文件部署">可执行文件部署</a> 。你可以在你的插件文档内注明，并让代码部署的用户使用 <code>pip install xxx</code> 安装第三方依赖。</p></div><h2 id="使用脚本打包" tabindex="-1">使用脚本打包 <a class="header-anchor" href="#使用脚本打包" aria-label="Permalink to &quot;使用脚本打包&quot;">​</a></h2><p>如果你是在 demo 下开发的插件，运行脚本 run_build.py 即可自动打包。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">python</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run_build.py</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--type</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">plugins</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意<br></p><p>脚本打包尚处于试验阶段，你仍然需要手动添加第三方包进插件</p></div>`,14)]))}const b=s(l,[["render",t]]);export{h as __pageData,b as default};
