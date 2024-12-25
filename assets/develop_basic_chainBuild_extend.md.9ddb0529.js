import{_ as a,o as n,c as l,S as p}from"./chunks/framework.65893c8f.js";const i=JSON.parse('{"title":"原生模板","description":"","frontmatter":{},"headers":[],"relativePath":"develop/basic/chainBuild/extend.md","filePath":"develop/basic/chainBuild/extend.md","lastUpdated":1735119419000}'),o={name:"develop/basic/chainBuild/extend.md"};function e(t,s,c,r,F,y){return n(),l("div",null,s[0]||(s[0]=[p(`<h1 id="原生模板" tabindex="-1">原生模板 <a class="header-anchor" href="#原生模板" aria-label="Permalink to &quot;原生模板&quot;">​</a></h1><p>使用原生消息模板扩展 Chain 对象</p><div class="warning custom-block"><p class="custom-block-title">温馨提示<br></p><p>消息扩展暂仅支持 <code>mirai-api-http</code> 和 <code>cq-http</code>。</p></div><p>除了以上内置的消息类型外，<code>mirai-api-http</code> 和 <code>cq-http</code> 还提供了多种消息类型用于发送丰富的消息内容。</p><ul><li><a href="https://docs.mirai.mamoe.net/mirai-api-http/api/MessageType.html#%E6%B6%88%E6%81%AF%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">mirai-api-http 消息类型</a></li><li><a href="https://docs.go-cqhttp.org/cqcode/#%E6%B6%88%E6%81%AF%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">go-cqhttp 消息类型</a></li></ul><h2 id="chain-extend" tabindex="-1">Chain().extend() <a class="header-anchor" href="#chain-extend" aria-label="Permalink to &quot;Chain().extend()&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>Any</td><td>原始消息类型格式数据</td><td></td></tr></tbody></table><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>使用 <a href="https://docs.mirai.mamoe.net/mirai-api-http/api/MessageType.html#dice" target="_blank" rel="noreferrer">mirai-api-http 消息类型 Dice</a> 发送一个点数 6 的骰子魔法表情</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">extend</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Dice</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span></code></pre></div><p>使用 <a href="https://docs.go-cqhttp.org/cqcode/#%E9%93%BE%E6%8E%A5%E5%88%86%E4%BA%AB" target="_blank" rel="noreferrer">go-cqhttp 消息类型 链接分享</a> 发送一个百度首页链接分享</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">extend</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">share</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#82AAFF;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://www.baidu.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">百度</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="发送-cq-码" tabindex="-1">发送 CQ 码 <a class="header-anchor" href="#发送-cq-码" aria-label="Permalink to &quot;发送 CQ 码&quot;">​</a></h2><p>发送 CQ 码目前仅支持 <code>cq-http</code> 适配器。可通过适配器的 API 对象发送或扩展消息发送。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> amiyabot </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> CQCode</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> CQHttpBotInstance</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> CQHttpBotInstance </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> bot</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">instance</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># 通过 API 发送</span></span>
<span class="line"><span style="color:#BABED8;">    instance</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send_cq_code</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">user_id</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">                              data</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">channel_id</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">                              </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;hello, </span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">nickname</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;"> [CQ:face,id=123]&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># 通过扩展消息发送</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">extend</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">        CQCode</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;hello, </span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">nickname</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;"> [CQ:face,id=123]&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">)</span></span></code></pre></div>`,15)]))}const d=a(o,[["render",e]]);export{i as __pageData,d as default};