import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},l=e(`<h3 id="title-hbase\u5E38\u7528shell\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#title-hbase\u5E38\u7528shell\u547D\u4EE4" aria-hidden="true">#</a> title{Hbase\u5E38\u7528shell\u547D\u4EE4}</h3><p>\u8FDB\u5165hbase shell console\u5982\u679C\u6709kerberos\u8BA4\u8BC1\uFF0C\u9700\u8981\u4E8B\u5148\u4F7F\u7528\u76F8\u5E94\u7684keytab\u8FDB\u884C\u4E00\u4E0B\u8BA4\u8BC1\uFF08\u4F7F\u7528kinit\u547D\u4EE4\uFF09\uFF0C\u8BA4\u8BC1\u6210\u529F\u4E4B\u540E\u518D\u4F7F\u7528hbase shell\u8FDB\u5165\u53EF\u4EE5\u4F7F\u7528whoami\u547D\u4EE4\u53EF\u67E5\u770B\u5F53\u524D\u7528\u6237.</p><h3 id="shell-\u901A\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#shell-\u901A\u7528\u547D\u4EE4" aria-hidden="true">#</a> Shell \u901A\u7528\u547D\u4EE4</h3><ul><li>status: \u63D0\u4F9BHBase\u7684\u72B6\u6001\uFF0C\u4F8B\u5982\uFF0C\u670D\u52A1\u5668\u7684\u6570\u91CF\u3002</li><li>version: \u63D0\u4F9B\u6B63\u5728\u4F7F\u7528HBase\u7248\u672C\u3002</li><li>table_help: \u8868\u5F15\u7528\u547D\u4EE4\u63D0\u4F9B\u5E2E\u52A9\u3002</li><li>whoami: \u63D0\u4F9B\u6709\u5173\u7528\u6237\u7684\u4FE1\u606F\u3002</li></ul><h3 id="shell-\u6570\u636E\u5B9A\u4E49\u8BED\u8A00" tabindex="-1"><a class="header-anchor" href="#shell-\u6570\u636E\u5B9A\u4E49\u8BED\u8A00" aria-hidden="true">#</a> Shell \u6570\u636E\u5B9A\u4E49\u8BED\u8A00</h3><p>\u4E0B\u9762\u5217\u4E3E\u4E86HBase Shell\u652F\u6301\u7684\u53EF\u4EE5\u5728\u8868\u4E2D\u64CD\u4F5C\u7684\u547D\u4EE4\u3002</p><ul><li>create: \u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u8868\u3002</li><li>list: \u7528\u4E8E\u5217\u51FAHBase\u7684\u6240\u6709\u8868\u3002</li><li>disable: \u7528\u4E8E\u7981\u7528\u8868\u3002</li><li>is_disabled: \u7528\u4E8E\u9A8C\u8BC1\u8868\u662F\u5426\u88AB\u7981\u7528\u3002</li><li>enable: \u7528\u4E8E\u542F\u7528\u4E00\u4E2A\u8868\u3002</li><li>is_enabled: \u7528\u4E8E\u9A8C\u8BC1\u8868\u662F\u5426\u5DF2\u542F\u7528\u3002</li><li>describe: \u7528\u4E8E\u63D0\u4F9B\u4E86\u4E00\u4E2A\u8868\u7684\u63CF\u8FF0\u3002</li><li>alter: \u7528\u4E8E\u6539\u53D8\u4E00\u4E2A\u8868\u3002</li><li>exists: \u7528\u4E8E\u9A8C\u8BC1\u8868\u662F\u5426\u5B58\u5728\u3002</li><li>drop: \u7528\u4E8E\u4ECEHBase\u4E2D\u5220\u9664\u8868\u3002</li><li>drop_all: \u7528\u4E8E\u4E22\u5F03\u5728\u547D\u4EE4\u4E2D\u7ED9\u51FA\u5339\u914D\u201Cregex\u201D\u7684\u8868\u3002</li><li>Java Admin API: \u5728\u6B64\u4E4B\u524D\u6240\u6709\u7684\u4E0A\u8FF0\u547D\u4EE4\uFF0CJava\u63D0\u4F9B\u4E86\u4E00\u4E2A\u901A\u8FC7API\u7F16\u7A0B\u6765\u7BA1\u7406\u5B9E\u73B0DDL\u529F\u80FD\u3002\u5728\u8FD9\u4E2Aorg.apache.hadoop.hbase.client\u5305\u4E2D\u6709HBaseAdmin\u548CHTableDescriptor \u8FD9\u4E24\u4E2A\u91CD\u8981\u7684\u7C7B\u63D0\u4F9BDDL\u529F\u80FD\u3002</li></ul><h3 id="shell-\u6570\u636E\u64CD\u4F5C\u8BED\u8A00" tabindex="-1"><a class="header-anchor" href="#shell-\u6570\u636E\u64CD\u4F5C\u8BED\u8A00" aria-hidden="true">#</a> Shell \u6570\u636E\u64CD\u4F5C\u8BED\u8A00</h3><ul><li>put: \u7528\u4E8E\u628A\u6307\u5B9A\u5217\u5728\u6307\u5B9A\u7684\u884C\u4E2D\u5355\u5143\u683C\u7684\u503C\u5728\u4E00\u4E2A\u7279\u5B9A\u7684\u8868\u3002</li><li>get: \u7528\u4E8E\u53D6\u884C\u6216\u5355\u5143\u683C\u7684\u5185\u5BB9\u3002</li><li>delete:\u7528\u4E8E\u5220\u9664\u8868\u4E2D\u7684\u5355\u5143\u683C\u503C\u3002</li><li>deleteall: \u7528\u4E8E\u5220\u9664\u7ED9\u5B9A\u884C\u7684\u6240\u6709\u5355\u5143\u683C\u3002</li><li>scan: \u7528\u4E8E\u626B\u63CF\u5E76\u8FD4\u56DE\u8868\u6570\u636E\u3002</li><li>count: \u7528\u4E8E\u8BA1\u6570\u5E76\u8FD4\u56DE\u8868\u4E2D\u7684\u884C\u7684\u6570\u76EE\u3002</li><li>truncate: \u7528\u4E8E\u7981\u7528\u3001\u5220\u9664\u548C\u91CD\u65B0\u521B\u5EFA\u4E00\u4E2A\u6307\u5B9A\u7684\u8868\u3002</li><li>Java client API: \u5728\u6B64\u4E4B\u524D\u6240\u6709\u4E0A\u8FF0\u547D\u4EE4\uFF0CJava\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5BA2\u6237\u7AEFAPI\u6765\u5B9E\u73B0DML\u529F\u80FD\uFF0CCRUD\uFF08\u521B\u5EFA\u68C0\u7D22\u66F4\u65B0\u5220\u9664\uFF09\u64CD\u4F5C\u66F4\u591A\u7684\u662F\u901A\u8FC7\u7F16\u7A0B\uFF0C\u5728org.apache.hadoop.hbase.client\u5305\u4E0B\u3002 \u5728\u6B64\u5305HTable \u7684 Put\u548CGet\u662F\u91CD\u8981\u7684\u7C7B\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$HBASE_HOME</span>/bin/hbase shell

hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token function">whoami</span>


<span class="token comment"># \u8868\u7684\u7BA1\u7406</span>
<span class="token comment"># 1\uFF09\u67E5\u770B\u6709\u54EA\u4E9B\u8868</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> list

<span class="token comment"># 2\uFF09\u521B\u5EFA\u8868</span>
<span class="token comment"># \u8BED\u6CD5\uFF1Acreate &lt;table&gt;, {NAME =&gt; &lt;family&gt;, VERSIONS =&gt; &lt;VERSIONS&gt;}</span>
<span class="token comment"># \u4F8B\u5982\uFF1A\u521B\u5EFA\u8868t1\uFF0C\u6709\u4E24\u4E2Afamily name\uFF1Af1\uFF0Cf2\uFF0C\u4E14\u7248\u672C\u6570\u5747\u4E3A2</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> create <span class="token string">&#39;t1&#39;</span>,<span class="token punctuation">{</span>NAME <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;f1&#39;</span>, VERSIONS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span>NAME <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;f2&#39;</span>, VERSIONS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">}</span>

<span class="token comment"># 3\uFF09\u5220\u9664\u8868</span>
<span class="token comment"># \u5206\u4E24\u6B65\uFF1A\u9996\u5148disable\uFF0C\u7136\u540Edrop</span>
<span class="token comment"># \u4F8B\u5982\uFF1A\u5220\u9664\u8868t1</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> disable <span class="token string">&#39;t1&#39;</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> drop <span class="token string">&#39;t1&#39;</span>

<span class="token comment"># 4\uFF09\u67E5\u770B\u8868\u7684\u7ED3\u6784</span>
<span class="token comment"># \u8BED\u6CD5\uFF1Adescribe &lt;table&gt;</span>
<span class="token comment"># \u4F8B\u5982\uFF1A\u67E5\u770B\u8868t1\u7684\u7ED3\u6784</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> describe <span class="token string">&#39;t1&#39;</span>

<span class="token comment"># 5\uFF09\u4FEE\u6539\u8868\u7ED3\u6784</span>
<span class="token comment"># \u4FEE\u6539\u8868\u7ED3\u6784\u5FC5\u987B\u5148disable</span>
<span class="token comment"># \u8BED\u6CD5\uFF1Aalter &#39;t1&#39;, {NAME =&gt; &#39;f1&#39;}, {NAME =&gt; &#39;f2&#39;, METHOD =&gt; &#39;delete&#39;}</span>
<span class="token comment"># \u4F8B\u5982\uFF1A\u4FEE\u6539\u8868test1\u7684cf\u7684TTL\u4E3A180\u5929</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> disable <span class="token string">&#39;test1&#39;</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> alter <span class="token string">&#39;test1&#39;</span>,<span class="token punctuation">{</span>NAME<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token string">&#39;body&#39;</span>,TTL<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token string">&#39;15552000&#39;</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span>NAME<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token string">&#39;meta&#39;</span>, <span class="token assign-left variable">TTL</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token string">&#39;15552000&#39;</span><span class="token punctuation">}</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token builtin class-name">enable</span> <span class="token string">&#39;test1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u6743\u9650\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650\u7BA1\u7406" aria-hidden="true">#</a> \u6743\u9650\u7BA1\u7406</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1\uFF09\u5206\u914D\u6743\u9650</span>
<span class="token comment"># \u8BED\u6CD5 : grant &lt;user&gt; &lt;permissions&gt; &lt;table&gt; &lt;column family&gt; &lt;column qualifier&gt; \u53C2\u6570\u540E\u9762\u7528\u9017\u53F7\u5206\u9694</span>
<span class="token comment"># \u6743\u9650\u7528\u4E94\u4E2A\u5B57\u6BCD\u8868\u793A\uFF1A &quot;RWXCA&quot;.</span>
<span class="token comment"># READ(&#39;R&#39;), WRITE(&#39;W&#39;), EXEC(&#39;X&#39;), CREATE(&#39;C&#39;), ADMIN(&#39;A&#39;)</span>
<span class="token comment"># \u4F8B\u5982\uFF0C\u7ED9\u7528\u6237\u2018test&#39;\u5206\u914D\u5BF9\u8868t1\u6709\u8BFB\u5199\u7684\u6743\u9650\uFF0C</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> grant <span class="token string">&#39;test&#39;</span>,<span class="token string">&#39;RW&#39;</span>,<span class="token string">&#39;t1&#39;</span>

<span class="token comment"># 2\uFF09\u67E5\u770B\u6743\u9650</span>
<span class="token comment"># \u8BED\u6CD5\uFF1Auser_permission &lt;table&gt;</span>
<span class="token comment"># \u4F8B\u5982\uFF0C\u67E5\u770B\u8868t1\u7684\u6743\u9650\u5217\u8868</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> user_permission <span class="token string">&#39;t1&#39;</span>

<span class="token comment"># 3\uFF09\u6536\u56DE\u6743\u9650</span>
<span class="token comment"># \u4E0E\u5206\u914D\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BED\u6CD5\uFF1Arevoke &lt;user&gt; &lt;table&gt; &lt;column family&gt; &lt;column qualifier&gt;</span>
<span class="token comment"># \u4F8B\u5982\uFF0C\u6536\u56DEtest\u7528\u6237\u5728\u8868t1\u4E0A\u7684\u6743\u9650</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> revoke <span class="token string">&#39;test&#39;</span>,<span class="token string">&#39;t1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u8868\u6570\u636E\u7684\u589E\u5220\u6539\u67E5" tabindex="-1"><a class="header-anchor" href="#\u8868\u6570\u636E\u7684\u589E\u5220\u6539\u67E5" aria-hidden="true">#</a> \u8868\u6570\u636E\u7684\u589E\u5220\u6539\u67E5</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1\uFF09\u6DFB\u52A0\u6570\u636E</span>
<span class="token comment"># \u8BED\u6CD5\uFF1Aput &lt;table&gt;,&lt;rowkey&gt;,&lt;family:column&gt;,&lt;value&gt;,&lt;timestamp&gt;</span>
<span class="token comment"># \u4F8B\u5982\uFF1A\u7ED9\u8868t1\u7684\u6DFB\u52A0\u4E00\u884C\u8BB0\u5F55\uFF1Arowkey\u662Frowkey001\uFF0Cfamily name\uFF1Af1\uFF0Ccolumn name\uFF1Acol1\uFF0Cvalue\uFF1Avalue01\uFF0Ctimestamp\uFF1A\u7CFB\u7EDF\u9ED8\u8BA4</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> put <span class="token string">&#39;t1&#39;</span>,<span class="token string">&#39;rowkey001&#39;</span>,<span class="token string">&#39;f1:col1&#39;</span>,<span class="token string">&#39;value01&#39;</span>

<span class="token comment"># 2\uFF09\u67E5\u8BE2\u6570\u636E</span>
<span class="token comment"># a\uFF09\u67E5\u8BE2\u67D0\u884C\u8BB0\u5F55</span>
<span class="token comment"># \u8BED\u6CD5\uFF1Aget &lt;table&gt;,&lt;rowkey&gt;,[&lt;family:column&gt;,....]</span>
<span class="token comment"># \u4F8B\u5982\uFF1A\u67E5\u8BE2\u8868t1\uFF0Crowkey001\u4E2D\u7684f1\u4E0B\u7684col1\u7684\u503C</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> get <span class="token string">&#39;t1&#39;</span>,<span class="token string">&#39;rowkey001&#39;</span>, <span class="token string">&#39;f1:col1&#39;</span>
<span class="token comment"># \u6216\u8005\uFF1A</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> get <span class="token string">&#39;t1&#39;</span>,<span class="token string">&#39;rowkey001&#39;</span>, <span class="token punctuation">{</span>COLUMN<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token string">&#39;f1:col1&#39;</span><span class="token punctuation">}</span>
<span class="token comment"># \u67E5\u8BE2\u8868t1\uFF0Crowke002\u4E2D\u7684f1\u4E0B\u7684\u6240\u6709\u5217\u503C</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> get <span class="token string">&#39;t1&#39;</span>,<span class="token string">&#39;rowkey001&#39;</span>

<span class="token comment">#b\uFF09\u626B\u63CF\u8868</span>
<span class="token comment"># \u8BED\u6CD5\uFF1Ascan &lt;table&gt;, {COLUMNS =&gt; [ &lt;family:column&gt;,.... ], LIMIT =&gt; num}</span>
<span class="token comment"># \u53E6\u5916\uFF0C\u8FD8\u53EF\u4EE5\u6DFB\u52A0STARTROW\u3001TIMERANGE\u548CFITLER\u7B49\u9AD8\u7EA7\u529F\u80FD</span>
<span class="token comment"># \u4F8B\u5982\uFF1A\u626B\u63CF\u8868t1\u7684\u524D5\u6761\u6570\u636E</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> scan <span class="token string">&#39;t1&#39;</span>,<span class="token punctuation">{</span>LIMIT<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">5</span><span class="token punctuation">}</span>

<span class="token comment">#c\uFF09\u67E5\u8BE2\u8868\u4E2D\u7684\u6570\u636E\u884C\u6570</span>
<span class="token comment"># \u8BED\u6CD5\uFF1Acount &lt;table&gt;, {INTERVAL =&gt; intervalNum, CACHE =&gt; cacheNum}</span>
<span class="token comment"># INTERVAL\u8BBE\u7F6E\u591A\u5C11\u884C\u663E\u793A\u4E00\u6B21\u53CA\u5BF9\u5E94\u7684rowkey\uFF0C\u9ED8\u8BA41000\uFF1BCACHE\u6BCF\u6B21\u53BB\u53D6\u7684\u7F13\u5B58\u533A\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u662F10\uFF0C\u8C03\u6574\u8BE5\u53C2\u6570\u53EF\u63D0\u9AD8\u67E5\u8BE2\u901F\u5EA6</span>
<span class="token comment"># \u4F8B\u5982\uFF0C\u67E5\u8BE2\u8868t1\u4E2D\u7684\u884C\u6570\uFF0C\u6BCF100\u6761\u663E\u793A\u4E00\u6B21\uFF0C\u7F13\u5B58\u533A\u4E3A500</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> count <span class="token string">&#39;t1&#39;</span>, <span class="token punctuation">{</span>INTERVAL <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">100</span>, CACHE <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">500</span><span class="token punctuation">}</span>

<span class="token comment">#3\uFF09\u5220\u9664\u6570\u636E</span>
<span class="token comment">#a )\u5220\u9664\u884C\u4E2D\u7684\u67D0\u4E2A\u5217\u503C</span>
<span class="token comment"># \u8BED\u6CD5\uFF1Adelete &lt;table&gt;, &lt;rowkey&gt;,  &lt;family:column&gt; , &lt;timestamp&gt;,\u5FC5\u987B\u6307\u5B9A\u5217\u540D</span>
<span class="token comment"># \u4F8B\u5982\uFF1A\u5220\u9664\u8868t1\uFF0Crowkey001\u4E2D\u7684f1:col1\u7684\u6570\u636E</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> delete <span class="token string">&#39;t1&#39;</span>,<span class="token string">&#39;rowkey001&#39;</span>,<span class="token string">&#39;f1:col1&#39;</span>

<span class="token comment">#\u6CE8\uFF1A\u5C06\u5220\u9664\u6539\u884Cf1:col1\u5217\u6240\u6709\u7248\u672C\u7684\u6570\u636E</span>
<span class="token comment">#b )\u5220\u9664\u884C</span>
<span class="token comment"># \u8BED\u6CD5\uFF1Adeleteall &lt;table&gt;, &lt;rowkey&gt;,  &lt;family:column&gt; , &lt;timestamp&gt;\uFF0C\u53EF\u4EE5\u4E0D\u6307\u5B9A\u5217\u540D\uFF0C\u5220\u9664\u6574\u884C\u6570\u636E</span>
<span class="token comment"># \u4F8B\u5982\uFF1A\u5220\u9664\u8868t1\uFF0Crowk001\u7684\u6570\u636E</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> deleteall <span class="token string">&#39;t1&#39;</span>,<span class="token string">&#39;rowkey001&#39;</span>

<span class="token comment">#c\uFF09\u5220\u9664\u8868\u4E2D\u7684\u6240\u6709\u6570\u636E</span>
<span class="token comment"># \u8BED\u6CD5\uFF1A truncate &lt;table&gt;</span>
<span class="token comment"># \u5176\u5177\u4F53\u8FC7\u7A0B\u662F\uFF1Adisable table -&gt; drop table -&gt; create table</span>
<span class="token comment"># \u4F8B\u5982\uFF1A\u5220\u9664\u8868t1\u7684\u6240\u6709\u6570\u636E</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> truncate <span class="token string">&#39;t1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="region\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#region\u7BA1\u7406" aria-hidden="true">#</a> Region\u7BA1\u7406</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1\uFF09\u79FB\u52A8region</span>
<span class="token comment"># \u8BED\u6CD5\uFF1Amove &#39;encodeRegionName&#39;, &#39;ServerName&#39;</span>
<span class="token comment"># encodeRegionName\u6307\u7684regioName\u540E\u9762\u7684\u7F16\u7801\uFF0CServerName\u6307\u7684\u662Fmaster-status\u7684Region Servers\u5217\u8868</span>
<span class="token comment"># \u793A\u4F8B</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span>move <span class="token string">&#39;4343995a58be8e5bbc739af1e91cd72d&#39;</span>, <span class="token string">&#39;db-41.xxx.xxx.org,60020,1390274516739&#39;</span>

<span class="token comment">#2\uFF09\u5F00\u542F/\u5173\u95EDregion</span>
<span class="token comment"># \u8BED\u6CD5\uFF1Abalance_switch true|false</span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> balance_switch

<span class="token comment">#3\uFF09\u624B\u52A8split</span>
<span class="token comment"># \u8BED\u6CD5\uFF1Asplit &#39;regionName&#39;, &#39;splitKey&#39;</span>

<span class="token comment">#4\uFF09\u624B\u52A8\u89E6\u53D1major compaction</span>
<span class="token comment">#\u8BED\u6CD5\uFF1A</span>
<span class="token comment">#Compact all regions in a table:</span>
<span class="token comment">#hbase&gt; major_compact &#39;t1&#39;</span>
<span class="token comment">#Compact an entire region:</span>
<span class="token comment">#hbase&gt; major_compact &#39;r1&#39;</span>
<span class="token comment">#Compact a single column family within a region:</span>
<span class="token comment">#hbase&gt; major_compact &#39;r1&#39;, &#39;c1&#39;</span>
<span class="token comment">#Compact a single column family within a table:</span>
<span class="token comment">#hbase&gt; major_compact &#39;t1&#39;, &#39;c1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u914D\u7F6E\u7BA1\u7406\u53CA\u8282\u70B9\u91CD\u542F" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u7BA1\u7406\u53CA\u8282\u70B9\u91CD\u542F" aria-hidden="true">#</a> \u914D\u7F6E\u7BA1\u7406\u53CA\u8282\u70B9\u91CD\u542F</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1\uFF09\u4FEE\u6539hdfs\u914D\u7F6E</span>
hdfs\u914D\u7F6E\u4F4D\u7F6E\uFF1A/etc/hadoop/conf
<span class="token comment"># \u540C\u6B65hdfs\u914D\u7F6E</span>
<span class="token function">cat</span> /home/hadoop/slaves<span class="token operator">|</span><span class="token function">xargs</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> <span class="token function">scp</span> /etc/hadoop/conf/hdfs-site.xml hadoop@<span class="token punctuation">{</span><span class="token punctuation">}</span>:/etc/hadoop/conf/hdfs-site.xml
<span class="token comment">#\u5173\u95ED\uFF1A</span>
<span class="token function">cat</span> /home/hadoop/slaves<span class="token operator">|</span><span class="token function">xargs</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> <span class="token function">ssh</span> hadoop@<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token string">&quot;sudo /home/hadoop/cdh4/hadoop-2.0.0-cdh4.2.1/sbin/hadoop-daemon.sh --config /etc/hadoop/conf stop datanode&quot;</span>
<span class="token comment">#\u542F\u52A8\uFF1A</span>
<span class="token function">cat</span> /home/hadoop/slaves<span class="token operator">|</span><span class="token function">xargs</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> <span class="token function">ssh</span> hadoop@<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token string">&quot;sudo /home/hadoop/cdh4/hadoop-2.0.0-cdh4.2.1/sbin/hadoop-daemon.sh --config /etc/hadoop/conf start datanode&quot;</span>

<span class="token comment">#2\uFF09\u4FEE\u6539hbase\u914D\u7F6E</span>
<span class="token comment">#hbase\u914D\u7F6E\u4F4D\u7F6E\uFF1A</span>
<span class="token comment"># \u540C\u6B65hbase\u914D\u7F6E</span>
<span class="token function">cat</span> /home/hadoop/hbase/conf/regionservers<span class="token operator">|</span><span class="token function">xargs</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> <span class="token function">scp</span> /home/hadoop/hbase/conf/hbase-site.xml hadoop@<span class="token punctuation">{</span><span class="token punctuation">}</span>:/home/hadoop/hbase/conf/hbase-site.xml
 
<span class="token comment"># graceful\u91CD\u542F</span>
<span class="token builtin class-name">cd</span> ~/hbase
bin/graceful_stop.sh <span class="token parameter variable">--restart</span> <span class="token parameter variable">--reload</span> <span class="token parameter variable">--debug</span> inspurXXX.xxx.xxx.org

balance_switch <span class="token boolean">true</span> \u5F00\u542F\u8D1F\u8F7D\u5747\u8861
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),i=[l];function p(o,c){return s(),a("div",null,i)}const m=n(t,[["render",p],["__file","hbase-shell.html.vue"]]);export{m as default};
