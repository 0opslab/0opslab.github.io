import{_ as a,o as s,c as n,e}from"./app.a667bd71.js";const r={},l=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-u</span>  \u6307\u5B9AURL
<span class="token parameter variable">-p</span>  \u6307\u5B9A\u53C2\u6570
<span class="token parameter variable">-v</span>  \u6307\u5B9A\u663E\u793A\u7EA7\u522B
<span class="token parameter variable">--dbs</span>  \u76EE\u6807\u670D\u52A1\u5668\u4E2D\u7684\u6570\u636E\u5E93
--current-db  \u5F53\u524D\u6570\u636E\u5E93
<span class="token parameter variable">--tables</span>  \u76EE\u6807\u6570\u636E\u5E93\u6709\u4EC0\u4E48\u8868
<span class="token parameter variable">--columns</span>  \u76EE\u6807\u8868\u4E2D\u6709\u4EC0\u4E48\u5217
<span class="token parameter variable">--dump</span>  \u83B7\u53D6\u6570\u636E
<span class="token parameter variable">--batch</span>  \u8DF3\u8FC7\u95EE\u8BE2\uFF08yes\uFF09\u4E4B\u95F4\u6267\u884C\uFF0C\u6279\u5904\u7406\uFF0C\u5728\u68C0\u6D4B\u8FC7\u7A0B\u4E2D\u4F1A\u95EE\u7528\u6237\u4E00\u4E9B\u95EE\u9898\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u53C2\u6570\u7EDF\u7EDF\u4F7F\u7528\u9ED8\u8BA4\u503C
<span class="token parameter variable">--dbms</span>  \u6307\u5B9A\u6570\u636E\u5E93\u7C7B\u578B
--current-user  \u67E5\u770B\u5F53\u524D\u7528\u6237
<span class="token parameter variable">--users</span>  \u67E5\u770B\u6240\u6709\u7528\u6237
<span class="token parameter variable">--passwords</span>  \u6570\u636E\u5E93\u5BC6\u7801
<span class="token parameter variable">--hostname</span>  \u7CFB\u7EDF\u540D\u79F0
<span class="token parameter variable">--banner</span>  \u6570\u636E\u5E93\u4FE1\u606F
<span class="token parameter variable">--roles</span>  \u6570\u636E\u5E93\u7528\u6237\u89D2\u8272
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Test URL and POST data and return database banner (if possible)</span>
<span class="token comment">#\u6D4B\u8BD5URL\u548CPOST\u6570\u636E\u5E76\u8FD4\u56DE\u6570\u636E\u5E93\u6A2A\u5E45\uFF08\u5982\u679C\u53EF\u80FD\uFF09</span>
./sqlmap.py <span class="token parameter variable">--url</span><span class="token operator">=</span><span class="token string">&quot;&lt;url&gt;&quot;</span> <span class="token parameter variable">--data</span><span class="token operator">=</span><span class="token string">&quot;&lt;post-data&gt;&quot;</span> <span class="token parameter variable">--banner</span>

<span class="token comment"># Parse request data and test | request data can be obtained with burp</span>
<span class="token comment">#\u89E3\u6790\u8BF7\u6C42\u6570\u636E\u548C\u6D4B\u8BD5|\u8BF7\u6C42\u6570\u636E\u53EF\u4EE5\u901A\u8FC7\u6253\u55DD\u83B7\u5F97</span>
./sqlmap.py <span class="token parameter variable">-r</span> <span class="token operator">&lt;</span>request-file<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>options<span class="token operator">&gt;</span>

<span class="token comment"># Fingerprint | much more information than banner</span>
<span class="token comment">#\u6307\u7EB9|\u6BD4\u6A2A\u5E45\u66F4\u591A\u7684\u4FE1\u606F</span>
./sqlmap.py <span class="token parameter variable">-r</span> <span class="token operator">&lt;</span>request-file<span class="token operator">&gt;</span> <span class="token parameter variable">--fingerprint</span>

<span class="token comment"># Get database username, name, and hostname</span>
<span class="token comment">#\u83B7\u53D6\u6570\u636E\u5E93\u7528\u6237\u540D\uFF0C\u540D\u79F0\u548C\u4E3B\u673A\u540D</span>
./sqlmap.py <span class="token parameter variable">-r</span> <span class="token operator">&lt;</span>request-file<span class="token operator">&gt;</span> --current-user --current-db <span class="token parameter variable">--hostname</span>

<span class="token comment"># Check if user is a database admin</span>
<span class="token comment">#\u68C0\u67E5\u7528\u6237\u662F\u5426\u662F\u6570\u636E\u5E93\u7BA1\u7406\u5458</span>
./sqlmap.py <span class="token parameter variable">-r</span> <span class="token operator">&lt;</span>request-file<span class="token operator">&gt;</span> --is-dba

<span class="token comment"># Get database users and password hashes</span>
<span class="token comment">#\u83B7\u53D6\u6570\u636E\u5E93\u7528\u6237\u548C\u5BC6\u7801\u54C8\u5E0C\u503C</span>
./sqlmap.py <span class="token parameter variable">-r</span> <span class="token operator">&lt;</span>request-file<span class="token operator">&gt;</span> <span class="token parameter variable">--users</span> <span class="token parameter variable">--passwords</span>

<span class="token comment"># Enumerate databases</span>
<span class="token comment">#\u679A\u4E3E\u6570\u636E\u5E93</span>
./sqlmap.py <span class="token parameter variable">-r</span> <span class="token operator">&lt;</span>request-file<span class="token operator">&gt;</span> <span class="token parameter variable">--dbs</span>

<span class="token comment"># List tables for one database</span>
<span class="token comment">#\u5217\u51FA\u4E00\u4E2A\u6570\u636E\u5E93\u7684\u8868</span>
./sqlmap.py <span class="token parameter variable">-r</span> <span class="token operator">&lt;</span>request-file<span class="token operator">&gt;</span> <span class="token parameter variable">-D</span> <span class="token operator">&lt;</span>db-name<span class="token operator">&gt;</span> <span class="token parameter variable">--tables</span>

<span class="token comment"># Other database commands</span>
<span class="token comment">#\u5176\u4ED6\u6570\u636E\u5E93\u547D\u4EE4</span>
./sqlmap.py <span class="token parameter variable">-r</span> <span class="token operator">&lt;</span>request-file<span class="token operator">&gt;</span> <span class="token parameter variable">-D</span> <span class="token operator">&lt;</span>db-name<span class="token operator">&gt;</span> <span class="token parameter variable">--columns</span>
                                           <span class="token parameter variable">--schema</span>
                                           <span class="token parameter variable">--count</span>
<span class="token comment"># Enumeration flags</span>
<span class="token comment">#\u679A\u4E3E\u6807\u5FD7</span>
./sqlmap.py <span class="token parameter variable">-r</span> <span class="token operator">&lt;</span>request-file<span class="token operator">&gt;</span> <span class="token parameter variable">-D</span> <span class="token operator">&lt;</span>db-name<span class="token operator">&gt;</span>
                              <span class="token parameter variable">-T</span> <span class="token operator">&lt;</span>tbl-name<span class="token operator">&gt;</span>
                              <span class="token parameter variable">-C</span> <span class="token operator">&lt;</span>col-name<span class="token operator">&gt;</span>
                              <span class="token parameter variable">-U</span> <span class="token operator">&lt;</span>user-name<span class="token operator">&gt;</span>

<span class="token comment"># Extract data</span>
<span class="token comment">#\u63D0\u53D6\u6570\u636E</span>
./sqlmap.py <span class="token parameter variable">-r</span> <span class="token operator">&lt;</span>request-file<span class="token operator">&gt;</span> <span class="token parameter variable">-D</span> <span class="token operator">&lt;</span>db-name<span class="token operator">&gt;</span> <span class="token parameter variable">-T</span> <span class="token operator">&lt;</span>tbl-name<span class="token operator">&gt;</span> <span class="token parameter variable">-C</span> <span class="token operator">&lt;</span>col-name<span class="token operator">&gt;</span> <span class="token parameter variable">--dump</span>

<span class="token comment"># Execute SQL Query</span>
<span class="token comment">#\u6267\u884CSQL\u67E5\u8BE2</span>
./sqlmap.py <span class="token parameter variable">-r</span> <span class="token operator">&lt;</span>request-file<span class="token operator">&gt;</span> --sql-query<span class="token operator">=</span><span class="token string">&quot;&lt;sql-query&gt;&quot;</span>

<span class="token comment"># Append/Prepend SQL Queries</span>
<span class="token comment">#\u9644\u52A0/\u524D\u7F6ESQL\u67E5\u8BE2</span>
./sqlmap.py <span class="token parameter variable">-r</span> <span class="token operator">&lt;</span>request-file<span class="token operator">&gt;</span> <span class="token parameter variable">--prefix</span><span class="token operator">=</span><span class="token string">&quot;&lt;sql-query&gt;&quot;</span> <span class="token parameter variable">--suffix</span><span class="token operator">=</span><span class="token string">&quot;&lt;sql-query&gt;&quot;</span>

<span class="token comment"># Get backdoor access to sql server | can give shell access</span>
<span class="token comment">#\u83B7\u53D6\u540E\u95E8\u8BBF\u95EEsql server |\u53EF\u4EE5\u63D0\u4F9Bshell\u8BBF\u95EE\u6743\u9650</span>
./sqlmap.py <span class="token parameter variable">-r</span> <span class="token operator">&lt;</span>request-file<span class="token operator">&gt;</span> --os-shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[l];function p(i,o){return s(),n("div",null,t)}const m=a(r,[["render",p],["__file","sqlmap.html.vue"]]);export{m as default};
