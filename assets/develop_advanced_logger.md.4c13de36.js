import{_ as a,o as n,c as l,S as o}from"./chunks/framework.65893c8f.js";const i=JSON.parse('{"title":"日志模块","description":"","frontmatter":{},"headers":[],"relativePath":"develop/advanced/logger.md","filePath":"develop/advanced/logger.md","lastUpdated":1744281297000}'),p={name:"develop/advanced/logger.md"};function t(e,s,c,r,y,F){return n(),l("div",null,s[0]||(s[0]=[o(`<h1 id="日志模块" tabindex="-1">日志模块 <a class="header-anchor" href="#日志模块" aria-label="Permalink to &quot;日志模块&quot;">​</a></h1><p>AmiyaBot 使用 logging 模块构建日志体系。</p><h2 id="输出日志" tabindex="-1">输出日志 <a class="header-anchor" href="#输出日志" aria-label="Permalink to &quot;输出日志&quot;">​</a></h2><p>AmiyaBot 的日志同样拥有与 logging 相同的等级输出。输出的日志会储存在 <code>log</code> 文件夹下。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> amiyabot </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">debug</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">warning</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">critical</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>日志的固有格式如下所示，分别为<code>时间</code>、<code>日志模块名</code>、<code>日志等级</code>和<code>日志内容</code>。DEBUG 模式下会显示日志的输出文件名和位置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">normal:</span></span>
<span class="line"><span style="color:#babed8;">2022-11-02 18:22:40,425 [     Bot][    INFO] initialize completed.</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">debug mode:</span></span>
<span class="line"><span style="color:#babed8;">2022-11-02 18:22:40,425 [     Bot][    INFO][test.py:5] initialize completed.</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示<br></p><p>使用启动参数 <code>--debug</code> 开启 DEBUG 模式。</p></div><h2 id="输出异常日志" tabindex="-1">输出异常日志 <a class="header-anchor" href="#输出异常日志" aria-label="Permalink to &quot;输出异常日志&quot;">​</a></h2><p><code>log.error()</code> 方法不仅可以传入字符串，也支持传入 Exception 的子类。传入 Exception 子类时，将会输出完整的异常追踪（Traceback）。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">    a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#BABED8;">    a </span><span style="color:#89DDFF;">+=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">except</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Exception</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#BABED8;"> e</span><span style="color:#89DDFF;">:</span></span>
<span class="line highlighted"><span style="color:#BABED8;">    log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">e</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">desc</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">calc error:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>将输出如下日志</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">2022-11-02 18:44:22,155 [     Bot][   ERROR] calc error: Traceback (most recent call last):</span></span>
<span class="line"><span style="color:#babed8;">  File &quot;F:\\Project\\Amiya-Bot-core\\logTest.py&quot;, line 5, in &lt;module&gt;</span></span>
<span class="line"><span style="color:#babed8;">    a += &#39;1&#39;</span></span>
<span class="line"><span style="color:#babed8;">TypeError: unsupported operand type(s) for +=: &#39;int&#39; and &#39;str&#39;</span></span></code></pre></div><p>如果你并不需要处理异常，仅仅希望异常不会终止你的程序，log 模块提供了上下文管理的方式，来捕获并输出在上下文中产出的异常。</p><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>desc</td><td>str</td><td>异常标题</td><td></td></tr><tr><td>ignore</td><td>List[Type[Exception]]</td><td>仅捕获但不输出的异常列表</td><td>None</td></tr><tr><td>handler</td><td>Callable</td><td>捕获异常后执行的方法</td><td>None</td></tr></tbody></table><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">err_handler</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">err</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Exception</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 异步方式</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">async</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#BABED8;"> log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">calc error:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">ignore</span><span style="color:#89DDFF;">=[</span><span style="color:#FFCB6B;">TypeError</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> ...</span><span style="color:#89DDFF;">],</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">handler</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">err_handler</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#BABED8;">    a </span><span style="color:#89DDFF;">+=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 同步方式</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#BABED8;"> log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sync_catch</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#BABED8;">    a </span><span style="color:#89DDFF;">+=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="创建日志模块" tabindex="-1">创建日志模块 <a class="header-anchor" href="#创建日志模块" aria-label="Permalink to &quot;创建日志模块&quot;">​</a></h2><p>你可以创建一个独立的日志模块以标记输出。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> amiyabot</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">log </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> LoggerManager</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">logger </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">LoggerManager</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MyLogger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">logger</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">this is a log.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2022-11-02 18:32:05,053 [MyLogger][    INFO] this is a log.</span></span></code></pre></div><p><strong>LoggerManager</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>str</td><td>logger 模块名称</td><td></td></tr><tr><td>level</td><td>int</td><td>日志等级</td><td>logging.INFO</td></tr><tr><td>formatter</td><td>str</td><td>日志格式</td><td><code>%(asctime)s [%(name)8s][%(levelname)8s]%(message)s</code></td></tr><tr><td>save_path</td><td>str</td><td>日志文件保存目录</td><td>log</td></tr><tr><td>save_filename</td><td>str</td><td>日志文件名</td><td>running</td></tr></tbody></table><h2 id="自定义全局日志模块" tabindex="-1">自定义全局日志模块 <a class="header-anchor" href="#自定义全局日志模块" aria-label="Permalink to &quot;自定义全局日志模块&quot;">​</a></h2><p>如果你不喜欢默认的日志输出，你也可以全局修改日志模块。但必须注意的事，你自定义的模块，必须包含常规的几个等级输出方法。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> amiyabot</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">log </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> UserLogger</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Mylogger</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">text</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">error</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">text</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">debug</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">text</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">warning</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">text</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">critical</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">text</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> ...</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">UserLogger</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">logger</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Mylogger</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 将默认日志处理替换为自定义的类</span></span></code></pre></div>`,24)]))}const d=a(p,[["render",t]]);export{i as __pageData,d as default};
