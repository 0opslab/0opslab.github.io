import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u5BF9\u4E0A\u9762\u7684Options\u505A\u4E0B\u89E3\u91CA\u5427\uFF1A
-n\u5373requests\uFF0C\u7528\u4E8E\u6307\u5B9A\u538B\u529B\u6D4B\u8BD5\u603B\u5171\u7684\u6267\u884C\u6B21\u6570\u3002
-c\u5373concurrency\uFF0C\u7528\u4E8E\u6307\u5B9A\u538B\u529B\u6D4B\u8BD5\u7684\u5E76\u53D1\u6570\u3002
-t\u5373timelimit\uFF0C\u7B49\u5F85\u54CD\u5E94\u7684\u6700\u5927\u65F6\u95F4<span class="token punctuation">(</span>\u5355\u4F4D\uFF1A\u79D2<span class="token punctuation">)</span>\u3002
-b\u5373windowsize\uFF0CTCP\u53D1\u9001/\u63A5\u6536\u7684\u7F13\u51B2\u5927\u5C0F<span class="token punctuation">(</span>\u5355\u4F4D\uFF1A\u5B57\u8282<span class="token punctuation">)</span>\u3002
-p\u5373postfile\uFF0C\u53D1\u9001POST\u8BF7\u6C42\u65F6\u9700\u8981\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u6B64\u5916\u8FD8\u5FC5\u987B\u8BBE\u7F6E-T\u53C2\u6570\u3002
-u\u5373putfile\uFF0C\u53D1\u9001PUT\u8BF7\u6C42\u65F6\u9700\u8981\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u6B64\u5916\u8FD8\u5FC5\u987B\u8BBE\u7F6E-T\u53C2\u6570\u3002
-T\u5373content-type\uFF0C\u7528\u4E8E\u8BBE\u7F6EContent-Type\u8BF7\u6C42\u5934\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1Aapplication/x-www-form-urlencoded\uFF0C\u9ED8\u8BA4\u503C\u4E3Atext/plain\u3002
-v\u5373verbosity\uFF0C\u6307\u5B9A\u6253\u5370\u5E2E\u52A9\u4FE1\u606F\u7684\u5197\u4F59\u7EA7\u522B\u3002
-w\u4EE5HTML\u8868\u683C\u5F62\u5F0F\u6253\u5370\u7ED3\u679C\u3002
-i\u4F7F\u7528HEAD\u8BF7\u6C42\u4EE3\u66FFGET\u8BF7\u6C42\u3002
-x\u63D2\u5165\u5B57\u7B26\u4E32\u4F5C\u4E3Atable\u6807\u7B7E\u7684\u5C5E\u6027\u3002
-y\u63D2\u5165\u5B57\u7B26\u4E32\u4F5C\u4E3Atr\u6807\u7B7E\u7684\u5C5E\u6027\u3002
-z\u63D2\u5165\u5B57\u7B26\u4E32\u4F5C\u4E3Atd\u6807\u7B7E\u7684\u5C5E\u6027\u3002
-C\u6DFB\u52A0cookie\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A<span class="token string">&quot;Apache=1234&quot;</span><span class="token punctuation">(</span>\u53EF\u4EE5\u91CD\u590D\u8BE5\u53C2\u6570\u9009\u9879\u4EE5\u6DFB\u52A0\u591A\u4E2A<span class="token punctuation">)</span>\u3002
-H\u6DFB\u52A0\u4EFB\u610F\u7684\u8BF7\u6C42\u5934\uFF0C\u4F8B\u5982\uFF1A<span class="token string">&quot;Accept-Encoding: gzip&quot;</span>\uFF0C\u8BF7\u6C42\u5934\u5C06\u4F1A\u6DFB\u52A0\u5728\u73B0\u6709\u7684\u591A\u4E2A\u8BF7\u6C42\u5934\u4E4B\u540E<span class="token punctuation">(</span>\u53EF\u4EE5\u91CD\u590D\u8BE5\u53C2\u6570\u9009\u9879\u4EE5\u6DFB\u52A0\u591A\u4E2A<span class="token punctuation">)</span>\u3002
-A\u6DFB\u52A0\u4E00\u4E2A\u57FA\u672C\u7684\u7F51\u7EDC\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u7528\u6237\u540D\u548C\u5BC6\u7801\u4E4B\u95F4\u7528\u82F1\u6587\u5192\u53F7\u9694\u5F00\u3002
-P\u6DFB\u52A0\u4E00\u4E2A\u57FA\u672C\u7684\u4EE3\u7406\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u7528\u6237\u540D\u548C\u5BC6\u7801\u4E4B\u95F4\u7528\u82F1\u6587\u5192\u53F7\u9694\u5F00\u3002
-X\u6307\u5B9A\u4F7F\u7528\u7684\u4EE3\u7406\u670D\u52A1\u5668\u548C\u7AEF\u53E3\u53F7\uFF0C\u4F8B\u5982:<span class="token string">&quot;126.10.10.3:88&quot;</span>\u3002
-V\u6253\u5370\u7248\u672C\u53F7\u5E76\u9000\u51FA\u3002
-k\u4F7F\u7528HTTP\u7684KeepAlive\u7279\u6027\u3002
-d\u4E0D\u663E\u793A\u767E\u5206\u6BD4\u3002
-S\u4E0D\u663E\u793A\u9884\u4F30\u548C\u8B66\u544A\u4FE1\u606F\u3002
-g\u8F93\u51FA\u7ED3\u679C\u4FE1\u606F\u5230gnuplot\u683C\u5F0F\u7684\u6587\u4EF6\u4E2D\u3002
-e\u8F93\u51FA\u7ED3\u679C\u4FE1\u606F\u5230CSV\u683C\u5F0F\u7684\u6587\u4EF6\u4E2D\u3002
-r\u6307\u5B9A\u63A5\u6536\u5230\u9519\u8BEF\u4FE1\u606F\u65F6\u4E0D\u9000\u51FA\u7A0B\u5E8F\u3002
-h\u663E\u793A\u7528\u6CD5\u4FE1\u606F\uFF0C\u5176\u5B9E\u5C31\u662Fab -help\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u5B9E\u4F8B</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ab <span class="token parameter variable">-c</span> <span class="token number">10</span> <span class="token parameter variable">-n</span> <span class="token number">100</span> http://a.ilanni.com/index.php
<span class="token comment"># -c    10\u8868\u793A\u5E76\u53D1\u7528\u6237\u6570\u4E3A10</span>
<span class="token comment"># -n    100\u8868\u793A\u8BF7\u6C42\u603B\u6570\u4E3A100</span>
<span class="token comment"># http://a.ilanni.com/index.php\u8868\u793A\u8BF7\u6C42\u7684\u76EE\u6807URL</span>
<span class="token comment"># \u8FD9\u884C\u8868\u793A\u540C\u65F6\u5904\u7406100\u4E2A\u8BF7\u6C42\u5E76\u8FD0\u884C10\u6B21index.php\u6587\u4EF6\u3002</span>

<span class="token comment"># Benchmarking 47.93.96.25 (be patient).....done</span>
<span class="token comment"># Server Software:        Apache/2.4.29  ##apache\u7248\u672C </span>
<span class="token comment"># Server Hostname:        ip\u5730\u5740   ##\u8BF7\u6C42\u7684\u673A\u5B50 </span>
<span class="token comment"># Server Port:            80  ##\u8BF7\u6C42\u7AEF\u53E3</span>
<span class="token comment"># Document Path:          index.php</span>
<span class="token comment"># Document Length:        18483 bytes  ##\u9875\u9762\u957F\u5EA6</span>
<span class="token comment"># Concurrency Level:      10  ##\u5E76\u53D1\u6570</span>
<span class="token comment"># Time taken for tests:   25.343 seconds  ##\u5171\u4F7F\u7528\u4E86\u591A\u5C11\u65F6\u95F4</span>
<span class="token comment"># Complete requests:      100  ##\u8BF7\u6C42\u6570</span>
<span class="token comment"># Failed requests:        11  ##\u5931\u8D25\u8BF7\u6C42</span>
<span class="token comment">#    (Connect: 0, Receive: 0, Length: 11, Exceptions: 0)</span>
<span class="token comment"># Total transferred:      1873511 bytes  ##\u603B\u5171\u4F20\u8F93\u5B57\u8282\u6570\uFF0C\u5305\u542Bhttp\u7684\u5934\u4FE1\u606F\u7B49</span>
<span class="token comment"># HTML transferred:       1848311 bytes  ##html\u5B57\u8282\u6570\uFF0C\u5B9E\u9645\u7684\u9875\u9762\u4F20\u9012\u5B57\u8282\u6570</span>
<span class="token comment"># Requests per second:    3.95 [#/sec] (mean)  ##\u6BCF\u79D2\u591A\u5C11\u8BF7\u6C42\uFF0C\u8FD9\u4E2A\u662F\u975E\u5E38\u91CD\u8981\u7684\u53C2\u6570\u6570\u503C\uFF0C\u670D\u52A1\u5668\u7684\u541E\u5410\u91CF</span>
<span class="token comment"># Time per request:       2534.265 [ms] (mean)  ##\u7528\u6237\u5E73\u5747\u8BF7\u6C42\u7B49\u5F85\u65F6\u95F4</span>
<span class="token comment"># Time per request:       253.426 [ms] (mean, across all concurrent requests)  ##\u670D\u52A1\u5668\u5E73\u5747\u5904\u7406\u65F6\u95F4\uFF0C</span>
<span class="token comment"># Transfer rate:          72.19 [Kbytes/sec] received  ##\u6BCF\u79D2\u83B7\u53D6\u7684\u6570\u636E\u957F\u5EA6</span>

<span class="token comment"># Connection Times (ms)</span>
<span class="token comment">#               min  mean[+/-sd] median   max</span>
<span class="token comment"># Connect:        0    8   3.9     10      13</span>
<span class="token comment"># Processing:  1222 2453 322.6   2520    3436</span>
<span class="token comment"># Waiting:     1175 2385 320.4   2452    3372</span>
<span class="token comment"># Total:       1222 2461 322.5   2528    3444</span>

<span class="token comment"># Percentage of the requests served within a certain time (ms)</span>
<span class="token comment">#   50%   2528  ## 50%\u7684\u8BF7\u6C42\u572825ms\u5185\u8FD4\u56DE </span>
<span class="token comment">#   66%   2534  ## 60%\u7684\u8BF7\u6C42\u572826ms\u5185\u8FD4\u56DE </span>
<span class="token comment">#   75%   2538</span>
<span class="token comment">#   80%   2539</span>
<span class="token comment">#   90%   2545</span>
<span class="token comment">#   95%   2556</span>
<span class="token comment">#   98%   3395</span>
<span class="token comment">#   99%   3444</span>
<span class="token comment">#  100%   3444 (longest request)</span>


<span class="token comment"># send 100 requests with a concurency of 50 requests to an URL</span>
<span class="token comment">#\u5411URL\u53D1\u9001100\u4E2A\u8BF7\u6C42\u5E76\u53D150\u4E2A\u8BF7\u6C42</span>
ab <span class="token parameter variable">-n</span> <span class="token number">100</span> <span class="token parameter variable">-c</span> <span class="token number">50</span> http://www.example.com/

<span class="token comment"># send requests during 30 seconds with a concurency of 50 requests to an URL</span>
<span class="token comment">#\u572830\u79D2\u5185\u53D1\u9001\u8BF7\u6C42\uFF0C\u5E76\u53D1\u5411URL\u768450\u4E2A\u8BF7\u6C42</span>
ab <span class="token parameter variable">-t</span> <span class="token number">30</span> <span class="token parameter variable">-c</span> <span class="token number">50</span> URL http://www.example.com/

<span class="token comment"># \u643A\u5E26cookie</span>
ab <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;name=ball;age=99;sex=male&quot;</span> <span class="token string">&quot;http://wc.sogou.com/worldcup2018/test.php&quot;</span>

<span class="token comment"># \u6307\u5B9Acontent-type</span>
ab <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token parameter variable">-T</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span> <span class="token parameter variable">-p</span> post.data <span class="token string">&quot;http://wc.sogou.com/worldcup2018/test.php&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[l];function t(m,p){return s(),e("div",null,c)}const d=n(i,[["render",t],["__file","ab.html.vue"]]);export{d as default};
