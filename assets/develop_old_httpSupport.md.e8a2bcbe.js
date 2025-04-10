import{_ as a,o as n,c as t,S as l}from"./chunks/framework.65893c8f.js";const i=JSON.parse('{"title":"HTTP服务器支持","description":"","frontmatter":{},"headers":[],"relativePath":"develop/old/httpSupport.md","filePath":"develop/old/httpSupport.md","lastUpdated":1744281297000}'),o={name:"develop/old/httpSupport.md"};function p(e,s,r,c,y,F){return n(),t("div",null,s[0]||(s[0]=[l(`<h1 id="http服务器支持" tabindex="-1">HTTP服务器支持 <a class="header-anchor" href="#http服务器支持" aria-label="Permalink to &quot;HTTP服务器支持&quot;">​</a></h1><p>AmiyaBot 内置了基于 <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer">FastApi</a> 的HTTP服务构建工具。</p><h2 id="创建服务" tabindex="-1">创建服务 <a class="header-anchor" href="#创建服务" aria-label="Permalink to &quot;创建服务&quot;">​</a></h2><h3 id="httpserver-类" tabindex="-1">HttpServer 类 <a class="header-anchor" href="#httpserver-类" aria-label="Permalink to &quot;HttpServer 类&quot;">​</a></h3><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>host</td><td>str</td><td>服务监听地址</td><td></td></tr><tr><td>port</td><td>int</td><td>服务监听端口</td><td></td></tr><tr><td>title</td><td>str</td><td>swagger 页面标题</td><td>AmiyaBot</td></tr><tr><td>description</td><td>str</td><td>swagger 页面注释</td><td><a href="https://www.amiyabot.com" target="_blank" rel="noreferrer">https://www.amiyabot.com</a></td></tr><tr><td>auth_key</td><td>str</td><td>请求头密钥</td><td></td></tr><tr><td>fastapi_options</td><td>dict</td><td>FastAPI **kwargs</td><td></td></tr><tr><td>uvicorn_options</td><td>dict</td><td>uvicorn.Config **kwargs</td><td></td></tr></tbody></table><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> amiyabot </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> HttpServer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">server </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">HttpServer</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">host</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0.0.0.0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">port</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">8088</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">controller</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Bot</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">route</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">method</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">get</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">get_name</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">AmiyaBot</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">route</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">method</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">post</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">say_hello</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">message</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">asyncio</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">run</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">serve</span><span style="color:#89DDFF;">())</span></span></code></pre></div><p>运行代码，访问 <a href="http://127.0.0.1:8088/docs" target="_blank" rel="noreferrer">http://127.0.0.1:8088/docs</a> 即可看到生成了如下两个接口。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">/bot/getName</span></span>
<span class="line"><span style="color:#babed8;">/bot/sayHello</span></span></code></pre></div><h2 id="自定义路由" tabindex="-1">自定义路由 <a class="header-anchor" href="#自定义路由" aria-label="Permalink to &quot;自定义路由&quot;">​</a></h2><p>接口的路由将默认使用<strong>控制器类名</strong>以及<strong>方法名</strong>组成，如果需要自定义路由，在方法装饰器 route 传入 router_path 参数即可。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">route</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">method</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">get</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">router_path</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/custom/getBotName</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">get_name</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    ...</span></span></code></pre></div><h2 id="请求头密钥" tabindex="-1">请求头密钥 <a class="header-anchor" href="#请求头密钥" aria-label="Permalink to &quot;请求头密钥&quot;">​</a></h2><p>在创建 HttpServer 时传入 auth_key 参数，则在调用接口时，需要在请求头（Header）里添加 <code>authKey</code> 字段并匹配参数的值，才允许访问。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">server </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">HttpServer</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">auth_key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my_auth_key</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="fastapi-扩展" tabindex="-1">FastApi 扩展 <a class="header-anchor" href="#fastapi-扩展" aria-label="Permalink to &quot;FastApi 扩展&quot;">​</a></h2><p>AmiyaBot 仅对 FastApi 的路由注册做了简易的封装。如需要扩展其用法，可获取 app 实例后参考<a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer">官方文档</a>进一步使用。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">server </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">HttpServer</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#BABED8;">app</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> FastAPI </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> server</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">app</span></span></code></pre></div>`,17)]))}const d=a(o,[["render",p]]);export{i as __pageData,d as default};
