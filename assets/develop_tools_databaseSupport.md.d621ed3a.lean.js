import{_ as a,o as n,c as l,S as t}from"./chunks/framework.65893c8f.js";const i=JSON.parse('{"title":"数据库支持","description":"","frontmatter":{},"headers":[],"relativePath":"develop/tools/databaseSupport.md","filePath":"develop/tools/databaseSupport.md","lastUpdated":1744281297000}'),e={name:"develop/tools/databaseSupport.md"};function o(p,s,c,r,y,d){return n(),l("div",null,s[0]||(s[0]=[t(`<h1 id="数据库支持" tabindex="-1">数据库支持 <a class="header-anchor" href="#数据库支持" aria-label="Permalink to &quot;数据库支持&quot;">​</a></h1><p>AmiyaBot 提供了 Sqlite 和 MySQL 数据库的 ORM 支持。基于 <a href="https://github.com/coleifer/peewee" target="_blank" rel="noreferrer">peewee</a> ，封装了部分表结构管理以及查询转换。日常使用的查询操作详见 <a href="http://docs.peewee-orm.com/" target="_blank" rel="noreferrer">peewee文档</a></p><div class="warning custom-block"><p class="custom-block-title">温馨提示<br></p><p>AmiyaBot 仅能提供有限的数据库支持，<strong>推荐你使用自己的更优的数据库解决方案</strong>。</p></div><h2 id="sqlite" tabindex="-1">Sqlite <a class="header-anchor" href="#sqlite" aria-label="Permalink to &quot;Sqlite&quot;">​</a></h2><p>对于轻量级机器人应用，Sqlite 足以应对大部分的日常操作，<code>connect_database</code> 方法默认创建 Sqlite 数据库。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> amiyabot</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">database </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 引入数据库模块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">db </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">connect_database</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">database_name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 创建或连接一个 Sqlite 数据库文件</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建数据库基础模型，继承 ModelClass 获得 AmiyaBot 的扩展查询方法</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">BotBaseModel</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">ModelClass</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Meta</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">        database </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> db</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建表模型，使用 table 装饰器进行表结构管理，将会自动创建或更新表结构</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">table</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">TableName</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">BotBaseModel</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    field1 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">CharField</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#BABED8;">    field2 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">IntegerField</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">null</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">TableName</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">select</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># ORM 操作详见 peewee 文档</span></span></code></pre></div><h2 id="mysql" tabindex="-1">MySQL <a class="header-anchor" href="#mysql" aria-label="Permalink to &quot;MySQL&quot;">​</a></h2><p><code>connect_database</code> 参数设置 <code>mysql=True</code> 以及 <code>config</code> 即可更改为 MySQL 数据库。</p><p><strong>可自动创建数据库。</strong></p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> amiyabot</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">database </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">db </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">connect_database</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">database_name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">is_mysql</span><span style="color:#89DDFF;">=True,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">config</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">MysqlConfig</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#BABED8;font-style:italic;">host</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#BABED8;font-style:italic;">port</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">3306</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#BABED8;font-style:italic;">user</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#BABED8;font-style:italic;">password</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">))</span></span></code></pre></div><h2 id="表结构管理" tabindex="-1">表结构管理 <a class="header-anchor" href="#表结构管理" aria-label="Permalink to &quot;表结构管理&quot;">​</a></h2><p>在 table 装饰的表模型内增加或删除字段，启动程序时会自动修改到数据库表结构中。<strong>暂不支持更新字段类型。</strong></p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">table</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">TableName</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">BotBaseModel</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    field1 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">CharField</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#BABED8;">    field2 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">IntegerField</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">null</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#BABED8;">    field3 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">TextField</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">null</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#BABED8;">    ...</span></span></code></pre></div><h2 id="扩展查询" tabindex="-1">扩展查询 <a class="header-anchor" href="#扩展查询" aria-label="Permalink to &quot;扩展查询&quot;">​</a></h2><p>内置了部分扩展查询，方便日常使用。</p><h3 id="batch-insert" tabindex="-1">batch_insert <a class="header-anchor" href="#batch-insert" aria-label="Permalink to &quot;batch_insert&quot;">​</a></h3><p>批量插入</p><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>rows</td><td>List[dict]</td><td>数据列表</td><td></td></tr><tr><td>chunk_size</td><td>int</td><td>分片插入大小</td><td>200</td></tr></tbody></table><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">data </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">...</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">...</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">...</span><span style="color:#89DDFF;">},</span><span style="color:#BABED8;"> ...</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">TableName</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">batch_insert</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h3 id="insert-or-update" tabindex="-1">insert_or_update <a class="header-anchor" href="#insert-or-update" aria-label="Permalink to &quot;insert_or_update&quot;">​</a></h3><p>插入或更新（适配Sqlite和MySQL）</p><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>insert</td><td>dict</td><td>如果是插入的数据</td><td></td></tr><tr><td>update</td><td>dict</td><td>如果是更新的数据</td><td>None</td></tr><tr><td>conflict_target</td><td>list</td><td>构成约束的列（仅Sqlite需要）</td><td>None</td></tr><tr><td>preserve</td><td>list</td><td>一个列的列表，其值应从原始插入中保留</td><td>None</td></tr></tbody></table><h2 id="查询转换工具" tabindex="-1">查询转换工具 <a class="header-anchor" href="#查询转换工具" aria-label="Permalink to &quot;查询转换工具&quot;">​</a></h2><h3 id="convert-model" tabindex="-1">convert_model <a class="header-anchor" href="#convert-model" aria-label="Permalink to &quot;convert_model&quot;">​</a></h3><p>将查询结果转换为字典</p><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>model</td><td></td><td>peewee 查询结果</td><td></td></tr><tr><td>select_model</td><td>Select</td><td>peewee 查询对象</td><td></td></tr></tbody></table><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">data </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">convert_model</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">TableName</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get_or_none</span><span style="color:#89DDFF;">())</span></span></code></pre></div><h3 id="query-to-list" tabindex="-1">query_to_list <a class="header-anchor" href="#query-to-list" aria-label="Permalink to &quot;query_to_list&quot;">​</a></h3><p>将查询结果转换为字典列表</p><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>query</td><td>list</td><td>peewee 查询结果</td><td></td></tr><tr><td>select_model</td><td>Select</td><td>peewee 查询对象</td><td></td></tr></tbody></table><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">data </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">query_to_list</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">TableName</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">select</span><span style="color:#89DDFF;">())</span></span></code></pre></div><h3 id="select-for-paginate" tabindex="-1">select_for_paginate <a class="header-anchor" href="#select-for-paginate" aria-label="Permalink to &quot;select_for_paginate&quot;">​</a></h3><p>分页查询工具</p><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>model</td><td>ModelSelect</td><td>peewee 查询对象</td><td></td></tr><tr><td>page</td><td>int</td><td>当前页</td><td></td></tr><tr><td>page_size</td><td>int</td><td>页行数</td><td></td></tr></tbody></table><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">data </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">select_for_paginate</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">TableName</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">select</span><span style="color:#89DDFF;">(),</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">data</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 查询结果</span></span>
<span class="line"><span style="color:#BABED8;">data</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">total</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 总条数</span></span></code></pre></div>`,35)]))}const D=a(e,[["render",o]]);export{i as __pageData,D as default};
