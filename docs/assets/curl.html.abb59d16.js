import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<h3 id="\u5E38\u7528\u9009\u9879\u5982\u4E0B\u6240\u793A" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u9009\u9879\u5982\u4E0B\u6240\u793A" aria-hidden="true">#</a> \u5E38\u7528\u9009\u9879\u5982\u4E0B\u6240\u793A:</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u3000\u3000-A/--user-agent <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>: \u8BBE\u7F6E\u7528\u6237\u4EE3\u7406\u53D1\u9001\u7ED9\u670D\u52A1\u5668
\u3000\u3000-e/--referer <span class="token operator">&lt;</span>URL<span class="token operator">&gt;</span>: \u6765\u6E90\u7F51\u5740
\u3000\u3000<span class="token parameter variable">--cacert</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>: CA\u8BC1\u4E66 <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>
\u3000\u3000-k/--insecure: \u5141\u8BB8\u5FFD\u7565\u8BC1\u4E66\u8FDB\u884C SSL \u8FDE\u63A5
\u3000\u3000--compressed: \u8981\u6C42\u8FD4\u56DE\u662F\u538B\u7F29\u7684\u683C\u5F0F
\u3000\u3000-H/--header <span class="token operator">&lt;</span>line<span class="token operator">&gt;</span>: \u81EA\u5B9A\u4E49\u9996\u90E8\u4FE1\u606F\u4F20\u9012\u7ED9\u670D\u52A1\u5668
\u3000\u3000-i: \u663E\u793A\u9875\u9762\u5185\u5BB9\uFF0C\u5305\u62EC\u62A5\u6587\u9996\u90E8\u4FE1\u606F
\u3000\u3000-I/--head:\u53EA\u663E\u793A\u54CD\u5E94\u62A5\u6587\u9996\u90E8\u4FE1\u606F
\u3000\u3000-D/--dump-header <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>: \u3000\u5C06url\u7684header\u4FE1\u606F\u5B58\u653E\u5728\u6307\u5B9A\u6587\u4EF6\u4E2D
\u3000\u3000--basic: \u4F7F\u7528HTTP\u57FA\u672C\u8BA4\u8BC1
\u3000\u3000-u/--user <span class="token operator">&lt;</span>user<span class="token punctuation">[</span>:password<span class="token punctuation">]</span><span class="token operator">&gt;</span>: \u8BBE\u7F6E\u670D\u52A1\u5668\u7684\u7528\u6237\u548C\u5BC6\u7801
\u3000\u3000-L: \u5982\u679C\u67093xx\u54CD\u5E94\u7801\uFF0C\u91CD\u65B0\u53D1\u8BF7\u6C42\u5230\u65B0\u4F4D\u7F6E
\u3000\u3000-O: \u4F7F\u7528URL\u4E2D\u9ED8\u8BA4\u7684\u6587\u4EF6\u540D\u4FDD\u5B58\u6587\u4EF6\u5230\u672C\u5730
\u3000\u3000<span class="token parameter variable">-o</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>: \u5C06\u7F51\u7EDC\u6587\u4EF6\u4FDD\u5B58\u4E3A\u6307\u5B9A\u7684\u6587\u4EF6\u4E2D
\u3000\u3000--limit-rate <span class="token operator">&lt;</span>rate<span class="token operator">&gt;</span>: \u8BBE\u7F6E\u4F20\u8F93\u901F\u5EA6
\u3000\u3000-0/--http1.0: \u6570\u5B570\uFF0C\u4F7F\u7528HTTP <span class="token number">1.0</span>
\u3000\u3000-v/--verbose: \u66F4\u8BE6\u7EC6
\u3000\u3000-C: \u9009\u9879\u53EF\u5BF9\u6587\u4EF6\u4F7F\u7528\u65AD\u70B9\u7EED\u4F20\u529F\u80FD
\u3000\u3000-c/--cookie-jar <span class="token operator">&lt;</span>file name<span class="token operator">&gt;</span>: \u5C06url\u4E2Dcookie\u5B58\u653E\u5728\u6307\u5B9A\u6587\u4EF6\u4E2D
\u3000\u3000-x/--proxy <span class="token operator">&lt;</span>proxyhost<span class="token punctuation">[</span>:port<span class="token punctuation">]</span><span class="token operator">&gt;</span>: \u6307\u5B9A\u4EE3\u7406\u670D\u52A1\u5668\u5730\u5740
\u3000\u3000-X/--request <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>: \u5411\u670D\u52A1\u5668\u53D1\u9001\u6307\u5B9A\u8BF7\u6C42\u65B9\u6CD5
\u3000\u3000-U/--proxy-user <span class="token operator">&lt;</span>user:password<span class="token operator">&gt;</span>: \u4EE3\u7406\u670D\u52A1\u5668\u7528\u6237\u548C\u5BC6\u7801
\u3000\u3000-T: \u9009\u9879\u53EF\u5C06\u6307\u5B9A\u7684\u672C\u5730\u6587\u4EF6\u4E0A\u4F20\u5230FTP\u670D\u52A1\u5668\u4E0A
\u3000\u3000--data/-d: \u65B9\u5F0F\u6307\u5B9A\u4F7F\u7528POST\u65B9\u5F0F\u4F20\u9012\u6570\u636E
\u3000\u3000<span class="token parameter variable">-b</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>data: \u4ECE\u670D\u52A1\u5668\u54CD\u5E94set-cookie\u5F97\u5230\u503C\uFF0C\u8FD4\u56DE\u7ED9\u670D\u52A1\u5668
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Download a single file</span>
<span class="token comment">#\u4E0B\u8F7D\u5355\u4E2A\u6587\u4EF6</span>
<span class="token function">curl</span> http://path.to.the/file

<span class="token comment"># Download a file and specify a new filename</span>
<span class="token comment">#\u4E0B\u8F7D\u6587\u4EF6\u5E76\u6307\u5B9A\u65B0\u6587\u4EF6\u540D</span>
<span class="token function">curl</span> http://example.com/file.zip <span class="token parameter variable">-o</span> new_file.zip

<span class="token comment"># Download multiple files</span>
<span class="token comment">#\u4E0B\u8F7D\u591A\u4E2A\u6587\u4EF6</span>
<span class="token function">curl</span> <span class="token parameter variable">-O</span> URLOfFirstFile <span class="token parameter variable">-O</span> URLOfSecondFile

<span class="token comment"># Download all sequentially numbered files (1-24)</span>
<span class="token comment">#\u4E0B\u8F7D\u6240\u6709\u6309\u987A\u5E8F\u7F16\u53F7\u7684\u6587\u4EF6\uFF081-24\uFF09</span>
<span class="token function">curl</span> http://example.com/pic<span class="token punctuation">[</span><span class="token number">1</span>-24<span class="token punctuation">]</span>.jpg

<span class="token comment"># Download a file and pass HTTP Authentication</span>
<span class="token comment">#\u4E0B\u8F7D\u6587\u4EF6\u5E76\u4F20\u9012HTTP\u8EAB\u4EFD\u9A8C\u8BC1</span>
<span class="token function">curl</span> <span class="token parameter variable">-u</span> username:password URL 

<span class="token comment"># Download a file with a Proxy</span>
<span class="token comment">#\u4F7F\u7528\u4EE3\u7406\u4E0B\u8F7D\u6587\u4EF6</span>
<span class="token function">curl</span> <span class="token parameter variable">-x</span> proxysever.server.com:PORT http://addressiwantto.access

<span class="token comment"># Download a file from FTP</span>
<span class="token comment">#\u4ECEFTP\u4E0B\u8F7D\u6587\u4EF6</span>
<span class="token function">curl</span> <span class="token parameter variable">-u</span> username:password <span class="token parameter variable">-O</span> ftp://example.com/pub/file.zip

<span class="token comment"># Get an FTP directory listing</span>
<span class="token comment">#\u83B7\u53D6FTP\u76EE\u5F55\u5217\u8868</span>
<span class="token function">curl</span> ftp://username:password@example.com

<span class="token comment"># Resume a previously failed download</span>
<span class="token comment">#\u6062\u590D\u4EE5\u524D\u5931\u8D25\u7684\u4E0B\u8F7D</span>
<span class="token function">curl</span> <span class="token parameter variable">-C</span> - <span class="token parameter variable">-o</span> partial_file.zip http://example.com/file.zip

<span class="token comment"># Fetch only the HTTP headers from a response</span>
<span class="token comment">#\u4EC5\u4ECE\u54CD\u5E94\u4E2D\u83B7\u53D6HTTP\u6807\u5934</span>
<span class="token function">curl</span> <span class="token parameter variable">-I</span> http://example.com

<span class="token comment"># Fetch your external IP and network info as JSON</span>
<span class="token comment">#\u5C06\u60A8\u7684\u5916\u90E8IP\u548C\u7F51\u7EDC\u4FE1\u606F\u4F5C\u4E3AJSON\u83B7\u53D6</span>
<span class="token function">curl</span> http://ifconfig.me/all.json

<span class="token comment"># Limit the rate of a download</span>
<span class="token comment">#\u9650\u5236\u4E0B\u8F7D\u901F\u5EA6</span>
<span class="token function">curl</span> --limit-rate 1000B <span class="token parameter variable">-O</span> http://path.to.the/file

<span class="token comment"># Get your global IP</span>
<span class="token comment">#\u83B7\u53D6\u60A8\u7684\u5168\u7403IP</span>
<span class="token function">curl</span> httpbin.org/ip 

<span class="token comment"># Get only the HTTP status code</span>
<span class="token comment">#\u4EC5\u83B7\u53D6HTTP\u72B6\u6001\u4EE3\u7801</span>
<span class="token function">curl</span> <span class="token parameter variable">-o</span> /dev/null <span class="token parameter variable">-w</span> <span class="token string">&#39;%{http_code}\\n&#39;</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-I</span> URL





<span class="token assign-left variable">CURL_FORMAT</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> $0<span class="token variable">)</span></span>/curl-format.txt&quot;</span> 
<span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token variable">$1</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">curl</span> <span class="token parameter variable">-w</span> <span class="token string">&quot;@<span class="token variable">$CURL_FORMAT</span>&quot;</span> <span class="token parameter variable">-o</span> /dev/null <span class="token parameter variable">-s</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage <span class="token variable">$basename</span> <span class="token variable">$0</span> &lt;url&gt;&quot;</span>


<span class="token comment">##\u4F7F\u7528\u4E0D\u540C\u7684ssl\u7248\u672C\u8BBF\u95EE</span>
tlsv1
<span class="token function">curl</span> <span class="token parameter variable">-1</span> http://www.myh0st.cn  

<span class="token function">curl</span> <span class="token parameter variable">--tlsv1</span> http://www.myh0st.cn

sslv2
<span class="token function">curl</span> <span class="token parameter variable">-2</span> http://www.myh0st.cn  

<span class="token function">curl</span> <span class="token parameter variable">--sslv2</span> http://www.myh0st.cn

sslv3
<span class="token function">curl</span> <span class="token parameter variable">-3</span> http://www.myh0st.cn  

<span class="token function">curl</span> <span class="token parameter variable">--sslv3</span> http://www.myh0st.cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="curl-\u547D\u4EE4\u5206\u6790\u8BF7\u6C42\u7684\u8017\u65F6\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#curl-\u547D\u4EE4\u5206\u6790\u8BF7\u6C42\u7684\u8017\u65F6\u60C5\u51B5" aria-hidden="true">#</a> curl \u547D\u4EE4\u5206\u6790\u8BF7\u6C42\u7684\u8017\u65F6\u60C5\u51B5</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># curl-format.txt \u5B9A\u4E49\u5185\u7F6E\u53D8\u91CF\uFF0C\u53D8\u91CF\u8BF4\u660E\u5982\u4E0B\uFF1A</span>
<span class="token comment">#</span>
<span class="token comment">#   time_namelookup\uFF1ADNS \u57DF\u540D\u89E3\u6790\u7684\u65F6\u5019\uFF0C\u5C31\u662F\u628A https://zhihu.com \u8F6C\u6362\u6210 ip \u5730\u5740\u7684\u8FC7\u7A0B</span>
<span class="token comment">#   time_connect\uFF1ATCP \u8FDE\u63A5\u5EFA\u7ACB\u7684\u65F6\u95F4\uFF0C\u5C31\u662F\u4E09\u6B21\u63E1\u624B\u7684\u65F6\u95F4</span>
<span class="token comment">#   time_appconnect\uFF1ASSL/SSH \u7B49\u4E0A\u5C42\u534F\u8BAE\u5EFA\u7ACB\u8FDE\u63A5\u7684\u65F6\u95F4\uFF0C\u6BD4\u5982 connect/handshake \u7684\u65F6\u95F4</span>
<span class="token comment">#   time_redirect\uFF1A\u4ECE\u5F00\u59CB\u5230\u6700\u540E\u4E00\u4E2A\u8BF7\u6C42\u4E8B\u52A1\u7684\u65F6\u95F4</span>
<span class="token comment">#   time_pretransfer\uFF1A\u4ECE\u8BF7\u6C42\u5F00\u59CB\u5230\u54CD\u5E94\u5F00\u59CB\u4F20\u8F93\u7684\u65F6\u95F4</span>
<span class="token comment">#   time_starttransfer\uFF1A\u4ECE\u8BF7\u6C42\u5F00\u59CB\u5230\u7B2C\u4E00\u4E2A\u5B57\u8282\u5C06\u8981\u4F20\u8F93\u7684\u65F6\u95F4</span>
<span class="token comment">#   size_download:  \u4E0B\u8F7D\u5B57\u8282</span>
<span class="token comment">#   time_total\uFF1A\u8FD9\u6B21\u8BF7\u6C42\u82B1\u8D39\u7684\u5168\u90E8\u65F6\u95F4</span>

<span class="token comment"># curl-format\u6587\u4EF6\u5185\u5BB9</span>
<span class="token comment">#    time_namelookup:  %{time_namelookup}\\n</span>
<span class="token comment">#       time_connect:  %{time_connect}\\n</span>
<span class="token comment">#    time_appconnect:  %{time_appconnect}\\n</span>
<span class="token comment">#      time_redirect:  %{time_redirect}\\n</span>
<span class="token comment">#   time_pretransfer:  %{time_pretransfer}\\n</span>
<span class="token comment"># time_starttransfer:  %{time_starttransfer}\\n</span>
<span class="token comment">#      size_download:  %{size_download} KB\\n</span>
<span class="token comment">#                    ----------\\n</span>
<span class="token comment">#         time_total:  %{time_total}\\n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[i];function c(p,r){return s(),a("div",null,t)}const d=n(l,[["render",c],["__file","curl.html.vue"]]);export{d as default};
