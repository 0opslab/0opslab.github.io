import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">--\u663E\u793A\u4E8C\u8FDB\u5236\u6587\u4EF6\u4EE5\u53CA\u6587\u4EF6\u5927\u5C0F\uFF08\u9700\u8981\u5F00\u542F\u4E8C\u8FDB\u5236\u65E5\u5FD7\u8BB0\u5F55\u529F\u80FD\uFF09</span>
<span class="token keyword">show</span> {<span class="token keyword">binary</span> <span class="token operator">|</span> master} logs



<span class="token comment">--\u663E\u793A\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u6267\u884C\u8FC7\u7A0B</span>
<span class="token keyword">show</span> binlog events <span class="token punctuation">[</span><span class="token operator">in</span> <span class="token string">&#39;log_name&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">from</span> pos<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">limit</span> <span class="token punctuation">[</span><span class="token keyword">offset</span><span class="token punctuation">,</span><span class="token punctuation">]</span> row_count<span class="token punctuation">]</span>



<span class="token comment">--\u663E\u793Amysql\u5F53\u524D\u652F\u6301\u54EA\u4E9B\u5B57\u7B26\u96C6\uFF0C\u53C2\u8003\uFF1Ashow character set \u548C show collation \u663E\u793A\u5B57\u7B26\u96C6</span>
<span class="token keyword">show</span> <span class="token keyword">character</span> <span class="token keyword">set</span> <span class="token punctuation">[</span>like_or_where<span class="token punctuation">]</span>



<span class="token comment">--\u663E\u793Amysql\u652F\u6301\u5B57\u7B26\u96C6\u7684\u6392\u5E8F\u89C4\u5219\uFF0C\u53C2\u8003\uFF1AMySQL\u7684show collation\u547D\u4EE4</span>
<span class="token keyword">show</span> collation <span class="token punctuation">[</span>like_or_where<span class="token punctuation">]</span>



<span class="token comment">--\u663E\u793A\u8868\u7684\u5217\u4FE1\u606F\uFF08\u7B49\u540C\u4E8Edesc\uFF0C\u9700\u8981\u5148\u521B\u5EFA\u8868\uFF09</span>
<span class="token keyword">show</span> <span class="token punctuation">[</span><span class="token keyword">full</span><span class="token punctuation">]</span> <span class="token keyword">columns</span> <span class="token keyword">from</span> tbl_name <span class="token punctuation">[</span><span class="token keyword">from</span> db_name<span class="token punctuation">]</span> <span class="token punctuation">[</span>like_or_where<span class="token punctuation">]</span>



<span class="token comment">--\u663E\u793A\u5DF2\u7ECF\u521B\u5EFA\u7684\u5E93\uFF0C\u521B\u5EFA\u65F6\u7684\u8BED\u53E5\uFF0C\u53C2\u8003\uFF1Ashow create \u663E\u793A\u521B\u5EFASQL\u8BED\u53E5</span>
<span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">database</span> db_name



<span class="token comment">--\u663E\u793A\u5DF2\u7ECF\u521B\u5EFA\u7684\u4E8B\u4EF6\uFF0C\u521B\u5EFA\u65F6\u7684\u8BED\u53E5\uFF0C\u53C2\u8003\uFF1Ashow create \u663E\u793A\u521B\u5EFASQL\u8BED\u53E5</span>
<span class="token keyword">show</span> <span class="token keyword">create</span> event event_name



<span class="token comment">--\u663E\u793A\u5DF2\u7ECF\u521B\u5EFA\u7684\u51FD\u6570\uFF0C\u521B\u5EFA\u65F6\u7684\u8BED\u53E5\uFF0C\u53C2\u8003\uFF1Ashow create \u663E\u793A\u521B\u5EFASQL\u8BED\u53E5</span>
<span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">function</span> func_name



<span class="token comment">--\u663E\u793A\u5DF2\u7ECF\u521B\u5EFA\u7684\u5B58\u50A8\u8FC7\u7A0B\uFF0C\u521B\u5EFA\u65F6\u7684\u8BED\u53E5\uFF0C\u53C2\u8003\uFF1Ashow create \u663E\u793A\u521B\u5EFASQL\u8BED\u53E5</span>
<span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">procedure</span> proc_name



<span class="token comment">--\u663E\u793A\u5DF2\u7ECF\u521B\u5EFA\u7684\u8868\uFF0C\u521B\u5EFA\u65F6\u7684\u8BED\u53E5\uFF0C\u53C2\u8003\uFF1Ashow create \u663E\u793A\u521B\u5EFASQL\u8BED\u53E5</span>
<span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">table</span> tbl_name



<span class="token comment">--\u663E\u793A\u5DF2\u7ECF\u521B\u5EFA\u7684\u89E6\u53D1\u5668\uFF0C\u521B\u5EFA\u65F6\u7684\u8BED\u53E5\uFF0C\u53C2\u8003\uFF1Ashow create \u663E\u793A\u521B\u5EFASQL\u8BED\u53E5</span>
<span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">trigger</span> trigger_name



<span class="token comment">--\u663E\u793A\u5DF2\u7ECF\u521B\u5EFA\u7684\u89C6\u56FE\uFF0C\u521B\u5EFA\u65F6\u7684\u8BED\u53E5\uFF0C\u53C2\u8003\uFF1Ashow create \u663E\u793A\u521B\u5EFASQL\u8BED\u53E5</span>
<span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">view</span> view_name



<span class="token comment">--\u663E\u793Amysql\u4E2D\u6240\u6709\u6570\u636E\u5E93\u7684\u540D\u79F0\uFF0C\u53C2\u8003\uFF1Ashow databases \u67E5\u770B\u6570\u636E\u5E93\u5217\u8868</span>
<span class="token keyword">show</span> <span class="token keyword">databases</span> <span class="token punctuation">[</span>like_or_where<span class="token punctuation">]</span>



<span class="token comment">--\u663E\u793A\u5B58\u50A8\u5F15\u64CE\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u53C2\u8003\uFF1Ashow engines \u548C show engine \u663E\u793A\u5B58\u50A8\u5F15\u64CE\u4FE1\u606F</span>
<span class="token keyword">show</span> <span class="token keyword">engine</span> engine_name {<span class="token keyword">status</span> <span class="token operator">|</span> mutex}



<span class="token comment">--\u663E\u793A\u6570\u636E\u5E93\u652F\u6301\u7684\u5B58\u50A8\u5F15\u64CE\u548C\u9ED8\u8BA4\u5B58\u50A8\u5F15\u64CE\uFF0C\u53C2\u8003\uFF1Ashow engines \u548C show engine \u663E\u793A\u5B58\u50A8\u5F15\u64CE\u4FE1\u606F</span>
<span class="token keyword">show</span> <span class="token punctuation">[</span>storage<span class="token punctuation">]</span> engines



<span class="token comment">--\u663E\u793A\u6700\u540E\u4E00\u4E2A\u6267\u884C\u8BED\u53E5\u6240\u4EA7\u751F\u7684\u9519\u8BEF\u4FE1\u606F\uFF0C\u53C2\u8003\uFF1Ashow errors \u548C show warnings \u663E\u793A\u6267\u884C\u8BED\u53E5\u6240\u4EA7\u751F\u7684\u9519\u8BEF\u3001\u8B66\u544A\u4FE1\u606F</span>
<span class="token keyword">show</span> <span class="token keyword">errors</span> <span class="token punctuation">[</span><span class="token keyword">limit</span> <span class="token punctuation">[</span><span class="token keyword">offset</span><span class="token punctuation">,</span><span class="token punctuation">]</span> row_count<span class="token punctuation">]</span>



<span class="token comment">--\u663E\u793A\u4E8B\u4EF6\u4FE1\u606F</span>
<span class="token keyword">show</span> events



<span class="token comment">--\u670D\u52A1\u5668\u5185\u90E8\u8C03\u8BD5\uFF0C\u663E\u793A\u4E00\u4E2A\u6307\u5B9A\u5B58\u50A8\u7684\u5185\u90E8\u5B9E\u73B0\u7684\u8868\u793A\u5F62\u5F0F\u8FC7\u7A0B</span>
<span class="token keyword">show</span> <span class="token keyword">function</span> code func_name


<span class="token comment">--\u663E\u793A\u5B58\u50A8\u51FD\u6570\u4FE1\u606F\uFF08\u9700\u8981\u5148\u521B\u5EFA\u5B58\u50A8\u51FD\u6570\uFF09</span>
<span class="token keyword">show</span> <span class="token keyword">function</span> <span class="token keyword">status</span> <span class="token punctuation">[</span>like_or_where<span class="token punctuation">]</span>



<span class="token comment">--\u663E\u793A\u6307\u5B9A\u7528\u6237\u62E5\u6709\u7684\u6743\u9650</span>
<span class="token keyword">show</span> grants <span class="token keyword">for</span> <span class="token keyword">user</span>



<span class="token comment">--\u663E\u793A\u8868\u7D22\u5F15\u4FE1\u606F\uFF08\u9700\u8981\u5148\u521B\u5EFA\u7D22\u5F15\uFF09</span>
<span class="token keyword">show</span> <span class="token keyword">index</span> <span class="token keyword">from</span> tbl_name <span class="token punctuation">[</span><span class="token keyword">from</span> db_name<span class="token punctuation">]</span>



<span class="token comment">--\u663E\u793Amaster\u5F53\u524D\u6B63\u5728\u4F7F\u7528\u7684\u4E8C\u8FDB\u5236\u4FE1\u606F</span>
<span class="token keyword">show</span> master <span class="token keyword">status</span>



<span class="token comment">--\u5217\u4E3E\u5728\u8868\u7F13\u5B58\u4E2D\u5F53\u524D\u88AB\u6253\u5F00\u7684\u975Etemporary\u8868</span>
<span class="token keyword">show</span> <span class="token keyword">open</span> <span class="token keyword">tables</span> <span class="token punctuation">[</span><span class="token keyword">from</span> db_name<span class="token punctuation">]</span> <span class="token punctuation">[</span>like_or_where<span class="token punctuation">]</span>



<span class="token comment">--\u663E\u793Amysql\u63D2\u4EF6\u4FE1\u606F</span>
<span class="token keyword">show</span> plugins



<span class="token comment">--\u670D\u52A1\u5668\u5185\u90E8\u8C03\u8BD5\uFF0C\u663E\u793A\u4E00\u4E2A\u6307\u5B9A\u5B58\u50A8\u7684\u5185\u90E8\u5B9E\u73B0\u7684\u8868\u793A\u5F62\u5F0F\u8FC7\u7A0B</span>
<span class="token keyword">show</span> <span class="token keyword">procedure</span> code proc_name



<span class="token comment">--\u663E\u793A\u5B58\u50A8\u8FC7\u7A0B\u4FE1\u606F\uFF08\u9700\u8981\u5148\u521B\u5EFA\u5B58\u50A8\u8FC7\u7A0B\uFF09</span>
<span class="token keyword">show</span> <span class="token keyword">procedure</span> <span class="token keyword">status</span> <span class="token punctuation">[</span>like_or_where<span class="token punctuation">]</span>



<span class="token comment">--\u663E\u793Amysql\u6240\u652F\u6301\u7684\u6240\u6709\u6743\u9650\uFF0C\u53CA\u6743\u9650\u53EF\u64CD\u4F5C\u7684\u5BF9\u8C61</span>
<span class="token keyword">show</span> <span class="token keyword">privileges</span>



<span class="token comment">--\u663E\u793A\u7CFB\u7EDF\u4E2D\u6B63\u5728\u8FD0\u884C\u7684\u6240\u6709\u8FDB\u7A0B\uFF0C\u666E\u901A\u7528\u6237\u53EA\u80FD\u67E5\u770B\u81EA\u5DF1\u7684\u8FDB\u884C\u4FE1\u606F</span>
<span class="token keyword">show</span> <span class="token punctuation">[</span><span class="token keyword">full</span><span class="token punctuation">]</span> processlist



<span class="token comment">--\u663E\u793A\u5F53\u524D\u4F1A\u8BDD\u6267\u884C\u8BED\u53E5\u8D44\u6E90\u4F7F\u7528\u60C5\u51B5</span>
<span class="token keyword">show</span> profile <span class="token punctuation">[</span><span class="token keyword">types</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">for</span> query n<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">offset</span> n<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">limit</span> n<span class="token punctuation">]</span>


 
<span class="token comment">--\u663E\u793A\u5F53\u524D\u4F1A\u8BDD\u6267\u884C\u8BED\u53E5\u8D44\u6E90\u4F7F\u7528\u60C5\u51B5</span>
<span class="token keyword">show</span> profiles



<span class="token comment">--\u663E\u793Arelaylog\u4E8B\u4EF6\u4FE1\u606F\uFF08\u9700\u8981\u5148\u505A\u4E3B\u4ECE\u590D\u5236\uFF09</span>
<span class="token keyword">show</span> relaylog events <span class="token punctuation">[</span><span class="token operator">in</span> <span class="token string">&#39;log_name&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">from</span> pos<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">limit</span> <span class="token punctuation">[</span><span class="token keyword">offset</span><span class="token punctuation">,</span><span class="token punctuation">]</span> row_count<span class="token punctuation">]</span>



<span class="token comment">--\u663E\u793Amaster\u4E3B\u673A\u4E0A\u5DF2\u6CE8\u518C\u7684\u590D\u5236\u4E3B\u673A\u5217\u8868\uFF08\u9700\u8981\u5148\u505A\u4E3B\u4ECE\u590D\u5236\uFF09</span>
<span class="token keyword">show</span> slave hosts



<span class="token comment">--\u663E\u793Aslave\u4E3B\u673A\u72B6\u6001\u4FE1\u606F\uFF08\u9700\u8981\u5148\u505A\u4E3B\u4ECE\u590D\u5236\uFF09</span>
<span class="token keyword">show</span> slave <span class="token keyword">status</span> <span class="token punctuation">[</span><span class="token keyword">for</span> channel channel<span class="token punctuation">]</span>



<span class="token comment">--\u663E\u793Amysql\u72B6\u6001\u4FE1\u606F</span>
<span class="token keyword">show</span> <span class="token punctuation">[</span><span class="token keyword">global</span> <span class="token operator">|</span> <span class="token keyword">session</span><span class="token punctuation">]</span> <span class="token keyword">status</span> <span class="token punctuation">[</span>like_or_where<span class="token punctuation">]</span>



<span class="token comment">--\u663E\u793A\u8868\u5C5E\u6027\u4FE1\u606F</span>
<span class="token keyword">show</span> <span class="token keyword">table</span> <span class="token keyword">status</span> <span class="token punctuation">[</span><span class="token keyword">from</span> db_name<span class="token punctuation">]</span> <span class="token punctuation">[</span>like_or_where<span class="token punctuation">]</span>



<span class="token comment">--\u663E\u793A\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u6240\u6709\u8868\u7684\u540D\u79F0</span>
<span class="token keyword">show</span> <span class="token punctuation">[</span><span class="token keyword">full</span><span class="token punctuation">]</span> <span class="token keyword">tables</span> <span class="token punctuation">[</span><span class="token keyword">from</span> db_name<span class="token punctuation">]</span> <span class="token punctuation">[</span>like_or_where<span class="token punctuation">]</span>



<span class="token comment">--\u663E\u793A\u89E6\u53D1\u5668\u4FE1\u606F\uFF08\u9700\u8981\u5148\u521B\u5EFA\u89E6\u53D1\u5668\uFF09</span>
<span class="token keyword">show</span> triggers <span class="token punctuation">[</span><span class="token keyword">from</span> db_name<span class="token punctuation">]</span> <span class="token punctuation">[</span>like_or_where<span class="token punctuation">]</span>



<span class="token comment">--\u663E\u793Amysql\u53D8\u91CF\u4FE1\u606F</span>
<span class="token keyword">show</span> <span class="token punctuation">[</span><span class="token keyword">global</span> <span class="token operator">|</span> <span class="token keyword">session</span><span class="token punctuation">]</span> variables <span class="token punctuation">[</span>like_or_where<span class="token punctuation">]</span>



<span class="token comment">--\u663E\u793A\u6700\u540E\u4E00\u4E2A\u6267\u884C\u8BED\u53E5\u6240\u4EA7\u751F\u7684\u8B66\u544A\u4FE1\u606F\uFF0C\u53C2\u8003\uFF1Ashow errors \u548C show warnings \u663E\u793A\u6267\u884C\u8BED\u53E5\u6240\u4EA7\u751F\u7684\u9519\u8BEF\u3001\u8B66\u544A\u4FE1\u606F</span>
<span class="token keyword">show</span> <span class="token keyword">warnings</span> <span class="token punctuation">[</span><span class="token keyword">limit</span> <span class="token punctuation">[</span><span class="token keyword">offset</span><span class="token punctuation">,</span><span class="token punctuation">]</span> row_count<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[l];function c(p,t){return s(),a("div",null,o)}const r=n(i,[["render",c],["__file","mysql-show.html.vue"]]);export{r as default};
