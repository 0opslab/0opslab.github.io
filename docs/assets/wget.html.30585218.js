import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u542F\u52A8\u53C2\u6570\uFF1A
-V, \u2013version \u663E\u793Awget\u7684\u7248\u672C\u540E\u9000\u51FA
-h, \u2013help \u6253\u5370\u8BED\u6CD5\u5E2E\u52A9
-b, \u2013background \u542F\u52A8\u540E\u8F6C\u5165\u540E\u53F0\u6267\u884C
-e, \u2013execute<span class="token operator">=</span>COMMAND \u6267\u884C<span class="token variable"><span class="token variable">\`</span>.wgetrc\u2019\u683C\u5F0F\u7684\u547D\u4EE4\uFF0Cwgetrc\u683C\u5F0F\u53C2\u89C1/etc/wgetrc\u6216~/.wgetrc

<span class="token comment">#\u8BB0\u5F55\u548C\u8F93\u5165\u6587\u4EF6\u53C2\u6570\uFF1A</span>
-o, \u2013output-file<span class="token operator">=</span>FILE \u628A\u8BB0\u5F55\u5199\u5230FILE\u6587\u4EF6\u4E2D
-a, \u2013append-output<span class="token operator">=</span>FILE \u628A\u8BB0\u5F55\u8FFD\u52A0\u5230FILE\u6587\u4EF6\u4E2D
-d, \u2013debug \u6253\u5370\u8C03\u8BD5\u8F93\u51FA
-q, \u2013quiet \u5B89\u9759\u6A21\u5F0F<span class="token punctuation">(</span>\u6CA1\u6709\u8F93\u51FA<span class="token punctuation">)</span>
-v, \u2013verbose \u5197\u957F\u6A21\u5F0F<span class="token punctuation">(</span>\u8FD9\u662F\u7F3A\u7701\u8BBE\u7F6E<span class="token punctuation">)</span>
-nv, \u2013non-verbose \u5173\u6389\u5197\u957F\u6A21\u5F0F\uFF0C\u4F46\u4E0D\u662F\u5B89\u9759\u6A21\u5F0F
-i, \u2013input-file<span class="token operator">=</span>FILE \u4E0B\u8F7D\u5728FILE\u6587\u4EF6\u4E2D\u51FA\u73B0\u7684URLs
-F, \u2013force-html \u628A\u8F93\u5165\u6587\u4EF6\u5F53\u4F5CHTML\u683C\u5F0F\u6587\u4EF6\u5BF9\u5F85
-B, \u2013base<span class="token operator">=</span>URL \u5C06URL\u4F5C\u4E3A\u5728-F -i\u53C2\u6570\u6307\u5B9A\u7684\u6587\u4EF6\u4E2D\u51FA\u73B0\u7684\u76F8\u5BF9\u94FE\u63A5\u7684\u524D\u7F00
\u2013sslcertfile<span class="token operator">=</span>FILE \u53EF\u9009\u5BA2\u6237\u7AEF\u8BC1\u4E66
\u2013sslcertkey<span class="token operator">=</span>KEYFILE \u53EF\u9009\u5BA2\u6237\u7AEF\u8BC1\u4E66\u7684KEYFILE
\u2013egd-file<span class="token operator">=</span>FILE \u6307\u5B9AEGD socket\u7684\u6587\u4EF6\u540D

<span class="token comment">#\u4E0B\u8F7D\u53C2\u6570\uFF1A</span>
\u2013bind-address<span class="token operator">=</span>ADDRESS \u6307\u5B9A\u672C\u5730\u4F7F\u7528\u5730\u5740<span class="token punctuation">(</span>\u4E3B\u673A\u540D\u6216IP\uFF0C\u5F53\u672C\u5730\u6709\u591A\u4E2AIP\u6216\u540D\u5B57\u65F6\u4F7F\u7528<span class="token punctuation">)</span>
-t, \u2013tries<span class="token operator">=</span>NUMBER \u8BBE\u5B9A\u6700\u5927\u5C1D\u8BD5\u94FE\u63A5\u6B21\u6570<span class="token punctuation">(</span><span class="token number">0</span> \u8868\u793A\u65E0\u9650\u5236<span class="token punctuation">)</span>.
<span class="token parameter variable">-O</span> \u2013output-document<span class="token operator">=</span>FILE \u628A\u6587\u6863\u5199\u5230FILE\u6587\u4EF6\u4E2D
-nc, \u2013no-clobber \u4E0D\u8981\u8986\u76D6\u5B58\u5728\u7684\u6587\u4EF6\u6216\u4F7F\u7528.<span class="token comment">#\u524D\u7F00</span>
-c, \u2013continue \u63A5\u7740\u4E0B\u8F7D\u6CA1\u4E0B\u8F7D\u5B8C\u7684\u6587\u4EF6
\u2013progress<span class="token operator">=</span>TYPE \u8BBE\u5B9A\u8FDB\u7A0B\u6761\u6807\u8BB0
-N, \u2013timestamping \u4E0D\u8981\u91CD\u65B0\u4E0B\u8F7D\u6587\u4EF6\u9664\u975E\u6BD4\u672C\u5730\u6587\u4EF6\u65B0
-S, \u2013server-response \u6253\u5370\u670D\u52A1\u5668\u7684\u56DE\u5E94
\u2013spider \u4E0D\u4E0B\u8F7D\u4EFB\u4F55\u4E1C\u897F
-T, \u2013timeout<span class="token operator">=</span><span class="token environment constant">SECONDS</span> \u8BBE\u5B9A\u54CD\u5E94\u8D85\u65F6\u7684\u79D2\u6570
-w, \u2013wait<span class="token operator">=</span><span class="token environment constant">SECONDS</span> \u4E24\u6B21\u5C1D\u8BD5\u4E4B\u95F4\u95F4\u9694<span class="token environment constant">SECONDS</span>\u79D2
\u2013waitretry<span class="token operator">=</span><span class="token environment constant">SECONDS</span> \u5728\u91CD\u65B0\u94FE\u63A5\u4E4B\u95F4\u7B49\u5F851\u2026<span class="token environment constant">SECONDS</span>\u79D2
\u2013random-wait \u5728\u4E0B\u8F7D\u4E4B\u95F4\u7B49\u5F850\u20262*WAIT\u79D2
-Y, \u2013proxy<span class="token operator">=</span>on/off \u6253\u5F00\u6216\u5173\u95ED\u4EE3\u7406
-Q, \u2013quota<span class="token operator">=</span>NUMBER \u8BBE\u7F6E\u4E0B\u8F7D\u7684\u5BB9\u91CF\u9650\u5236
\u2013limit-rate<span class="token operator">=</span>RATE \u9650\u5B9A\u4E0B\u8F7D\u8F93\u7387

<span class="token comment">#\u76EE\u5F55\u53C2\u6570\uFF1A</span>
<span class="token parameter variable">-nd</span> \u2013no-directories \u4E0D\u521B\u5EFA\u76EE\u5F55
-x, \u2013force-directories \u5F3A\u5236\u521B\u5EFA\u76EE\u5F55
-nH, \u2013no-host-directories \u4E0D\u521B\u5EFA\u4E3B\u673A\u76EE\u5F55
-P, \u2013directory-prefix<span class="token operator">=</span>PREFIX \u5C06\u6587\u4EF6\u4FDD\u5B58\u5230\u76EE\u5F55 PREFIX/\u2026
\u2013cut-dirs<span class="token operator">=</span>NUMBER \u5FFD\u7565 NUMBER\u5C42\u8FDC\u7A0B\u76EE\u5F55

<span class="token comment"># HTTP \u9009\u9879\u53C2\u6570\uFF1A</span>
\u2013http-user<span class="token operator">=</span><span class="token environment constant">USER</span> \u8BBE\u5B9AHTTP\u7528\u6237\u540D\u4E3A <span class="token environment constant">USER</span><span class="token builtin class-name">.</span>
\u2013http-passwd<span class="token operator">=</span>PASS \u8BBE\u5B9Ahttp\u5BC6\u7801\u4E3A PASS
-C, \u2013cache<span class="token operator">=</span>on/off \u5141\u8BB8/\u4E0D\u5141\u8BB8\u670D\u52A1\u5668\u7AEF\u7684\u6570\u636E\u7F13\u5B58 <span class="token punctuation">(</span>\u4E00\u822C\u60C5\u51B5\u4E0B\u5141\u8BB8<span class="token punctuation">)</span>
-E, \u2013html-extension \u5C06\u6240\u6709text/html\u6587\u6863\u4EE5.html\u6269\u5C55\u540D\u4FDD\u5B58
\u2013ignore-length \u5FFD\u7565 <span class="token variable">\`</span></span>Content-Length\u2019\u5934\u57DF
\u2013header<span class="token operator">=</span>STRING \u5728headers\u4E2D\u63D2\u5165\u5B57\u7B26\u4E32 STRING
\u2013proxy-user<span class="token operator">=</span><span class="token environment constant">USER</span> \u8BBE\u5B9A\u4EE3\u7406\u7684\u7528\u6237\u540D\u4E3A <span class="token environment constant">USER</span>
\u2013proxy-passwd<span class="token operator">=</span>PASS \u8BBE\u5B9A\u4EE3\u7406\u7684\u5BC6\u7801\u4E3A PASS
\u2013referer<span class="token operator">=</span>URL \u5728HTTP\u8BF7\u6C42\u4E2D\u5305\u542B <span class="token variable"><span class="token variable">\`</span>Referer: URL\u2019\u5934
-s, \u2013save-headers \u4FDD\u5B58HTTP\u5934\u5230\u6587\u4EF6
-U, \u2013user-agent<span class="token operator">=</span>AGENT \u8BBE\u5B9A\u4EE3\u7406\u7684\u540D\u79F0\u4E3A AGENT\u800C\u4E0D\u662F Wget/VERSION
\u2013no-http-keep-alive \u5173\u95ED HTTP\u6D3B\u52A8\u94FE\u63A5 <span class="token punctuation">(</span>\u6C38\u8FDC\u94FE\u63A5<span class="token punctuation">)</span>
\u2013cookies<span class="token operator">=</span>off \u4E0D\u4F7F\u7528 cookies
\u2013load-cookies<span class="token operator">=</span>FILE \u5728\u5F00\u59CB\u4F1A\u8BDD\u524D\u4ECE\u6587\u4EF6 FILE\u4E2D\u52A0\u8F7Dcookie
\u2013save-cookies<span class="token operator">=</span>FILE \u5728\u4F1A\u8BDD\u7ED3\u675F\u540E\u5C06 cookies\u4FDD\u5B58\u5230 FILE\u6587\u4EF6\u4E2D

<span class="token comment">#FTP \u9009\u9879\u53C2\u6570\uFF1A</span>
-nr, \u2013dont-remove-listing \u4E0D\u79FB\u8D70 <span class="token variable">\`</span></span>.listing\u2019\u6587\u4EF6
-g, \u2013glob<span class="token operator">=</span>on/off \u6253\u5F00\u6216\u5173\u95ED\u6587\u4EF6\u540D\u7684 globbing\u673A\u5236
\u2013passive-ftp \u4F7F\u7528\u88AB\u52A8\u4F20\u8F93\u6A21\u5F0F <span class="token punctuation">(</span>\u7F3A\u7701\u503C<span class="token punctuation">)</span>.
\u2013active-ftp \u4F7F\u7528\u4E3B\u52A8\u4F20\u8F93\u6A21\u5F0F
\u2013retr-symlinks \u5728\u9012\u5F52\u7684\u65F6\u5019\uFF0C\u5C06\u94FE\u63A5\u6307\u5411\u6587\u4EF6<span class="token punctuation">(</span>\u800C\u4E0D\u662F\u76EE\u5F55<span class="token punctuation">)</span>

<span class="token comment">#\u9012\u5F52\u4E0B\u8F7D\u53C2\u6570\uFF1A</span>
-r, \u2013recursive \u9012\u5F52\u4E0B\u8F7D\uFF0D\uFF0D\u614E\u7528<span class="token operator">!</span>
-l, \u2013level<span class="token operator">=</span>NUMBER \u6700\u5927\u9012\u5F52\u6DF1\u5EA6 <span class="token punctuation">(</span>inf \u6216 <span class="token number">0</span> \u4EE3\u8868\u65E0\u7A77<span class="token punctuation">)</span>
\u2013delete-after \u5728\u73B0\u5728\u5B8C\u6BD5\u540E\u5C40\u90E8\u5220\u9664\u6587\u4EF6
-k, \u2013convert-links \u8F6C\u6362\u975E\u76F8\u5BF9\u94FE\u63A5\u4E3A\u76F8\u5BF9\u94FE\u63A5
-K, \u2013backup-converted \u5728\u8F6C\u6362\u6587\u4EF6X\u4E4B\u524D\uFF0C\u5C06\u4E4B\u5907\u4EFD\u4E3A X.orig
-m, \u2013mirror \u7B49\u4EF7\u4E8E <span class="token parameter variable">-r</span> <span class="token parameter variable">-N</span> <span class="token parameter variable">-l</span> inf <span class="token parameter variable">-nr</span>
-p, \u2013page-requisites \u4E0B\u8F7D\u663E\u793AHTML\u6587\u4EF6\u7684\u6240\u6709\u56FE\u7247

<span class="token comment">#\u9012\u5F52\u4E0B\u8F7D\u4E2D\u7684\u5305\u542B\u548C\u4E0D\u5305\u542B(accept/reject)\uFF1A</span>
-A, \u2013accept<span class="token operator">=</span>LIST \u5206\u53F7\u5206\u9694\u7684\u88AB\u63A5\u53D7\u6269\u5C55\u540D\u7684\u5217\u8868
-R, \u2013reject<span class="token operator">=</span>LIST \u5206\u53F7\u5206\u9694\u7684\u4E0D\u88AB\u63A5\u53D7\u7684\u6269\u5C55\u540D\u7684\u5217\u8868
-D, \u2013domains<span class="token operator">=</span>LIST \u5206\u53F7\u5206\u9694\u7684\u88AB\u63A5\u53D7\u57DF\u7684\u5217\u8868
\u2013exclude-domains<span class="token operator">=</span>LIST \u5206\u53F7\u5206\u9694\u7684\u4E0D\u88AB\u63A5\u53D7\u7684\u57DF\u7684\u5217\u8868
\u2013follow-ftp \u8DDF\u8E2AHTML\u6587\u6863\u4E2D\u7684FTP\u94FE\u63A5
\u2013follow-tags<span class="token operator">=</span>LIST \u5206\u53F7\u5206\u9694\u7684\u88AB\u8DDF\u8E2A\u7684HTML\u6807\u7B7E\u7684\u5217\u8868
-G, \u2013ignore-tags<span class="token operator">=</span>LIST \u5206\u53F7\u5206\u9694\u7684\u88AB\u5FFD\u7565\u7684HTML\u6807\u7B7E\u7684\u5217\u8868
-H, \u2013span-hosts \u5F53\u9012\u5F52\u65F6\u8F6C\u5230\u5916\u90E8\u4E3B\u673A
-L, \u2013relative \u4EC5\u4EC5\u8DDF\u8E2A\u76F8\u5BF9\u94FE\u63A5
-I, \u2013include-directories<span class="token operator">=</span>LIST \u5141\u8BB8\u76EE\u5F55\u7684\u5217\u8868
-X, \u2013exclude-directories<span class="token operator">=</span>LIST \u4E0D\u88AB\u5305\u542B\u76EE\u5F55\u7684\u5217\u8868
-np, \u2013no-parent \u4E0D\u8981\u8FFD\u6EAF\u5230\u7236\u76EE\u5F55
<span class="token function">wget</span> <span class="token parameter variable">-S</span> \u2013spider url \u4E0D\u4E0B\u8F7D\u53EA\u663E\u793A\u8FC7\u7A0B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To download a single file</span>
<span class="token comment">#\u4E0B\u8F7D\u5355\u4E2A\u6587\u4EF6</span>
<span class="token function">wget</span> http://path.to.the/file

<span class="token comment"># To download a file and change its name</span>
<span class="token comment">#\u4E0B\u8F7D\u6587\u4EF6\u5E76\u66F4\u6539\u5176\u540D\u79F0</span>
<span class="token function">wget</span> http://path.to.the/file <span class="token parameter variable">-O</span> newname

<span class="token comment"># To download a file into a directory</span>
<span class="token comment">#\u5C06\u6587\u4EF6\u4E0B\u8F7D\u5230\u76EE\u5F55\u4E2D</span>
<span class="token function">wget</span> <span class="token parameter variable">-P</span> path/to/directory http://path.to.the/file

<span class="token comment"># To continue an aborted downloaded</span>
<span class="token comment">#\u8981\u7EE7\u7EED\u4E2D\u6B62\u4E0B\u8F7D</span>
<span class="token function">wget</span> <span class="token parameter variable">-c</span> http://path.to.the/file

<span class="token comment"># To download multiples files with multiple URLs</span>
<span class="token comment">#\u4E0B\u8F7D\u5305\u542B\u591A\u4E2AURL\u7684\u591A\u4E2A\u6587\u4EF6</span>
<span class="token function">wget</span> URL1 URL2

<span class="token comment"># To parse a file that contains a list of URLs to fetch each one</span>
<span class="token comment">#\u89E3\u6790\u5305\u542BURL\u5217\u8868\u7684\u6587\u4EF6\u4EE5\u83B7\u53D6\u6BCF\u4E2AURL</span>
<span class="token function">wget</span> <span class="token parameter variable">-i</span> url_list.txt

<span class="token comment"># To mirror a whole page locally</span>
<span class="token comment">#\u5728\u672C\u5730\u955C\u50CF\u6574\u4E2A\u9875\u9762</span>
<span class="token function">wget</span> <span class="token parameter variable">-pk</span> http://path.to.the/page.html

<span class="token comment"># To mirror a whole site locally</span>
<span class="token comment">#\u5728\u672C\u5730\u955C\u50CF\u6574\u4E2A\u7AD9\u70B9</span>
<span class="token function">wget</span> <span class="token parameter variable">-mk</span> http://site.tl/

<span class="token comment"># To download files according to a pattern</span>
<span class="token comment">#\u6839\u636E\u6A21\u5F0F\u4E0B\u8F7D\u6587\u4EF6</span>
<span class="token function">wget</span> http://www.myserver.com/files-<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">15</span><span class="token punctuation">}</span>.tar.bz2

<span class="token comment"># To download all the files in a directory with a specific extension if directory indexing is enabled</span>
<span class="token comment">#\u5982\u679C\u542F\u7528\u4E86\u76EE\u5F55\u7D22\u5F15\uFF0C\u5219\u4E0B\u8F7D\u5177\u6709\u7279\u5B9A\u6269\u5C55\u540D\u7684\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u6587\u4EF6</span>
<span class="token function">wget</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-l1</span> <span class="token parameter variable">-A.extension</span> http://myserver.com/directory

<span class="token comment"># Allows you to download just the headers of responses (-S --spider) and display them on Stdout (-O -).</span>
<span class="token comment">#\u5141\u8BB8\u60A8\u53EA\u4E0B\u8F7D\u54CD\u5E94\u7684\u6807\u9898\uFF08-S --spider\uFF09\u5E76\u5728Stdout\uFF08-O  - \uFF09\u4E0A\u663E\u793A\u5B83\u4EEC\u3002</span>
<span class="token function">wget</span> <span class="token parameter variable">-S</span> <span class="token parameter variable">--spider</span> <span class="token parameter variable">-O</span> - http://google.com

<span class="token comment"># Change the User-Agent to &#39;User-Agent: toto&#39;</span>
<span class="token comment">#\u5C06User-Agent\u66F4\u6539\u4E3A\u201CUser-Agent\uFF1Atoto\u201D</span>
<span class="token function">wget</span> <span class="token parameter variable">-U</span> <span class="token string">&#39;toto&#39;</span> http://google.com

<span class="token function">wget</span> <span class="token parameter variable">-t</span> <span class="token number">0</span> <span class="token parameter variable">-T</span> <span class="token number">120</span> <span class="token parameter variable">-np</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-r</span> http://xxx.xxx.com/xxx
<span class="token function">wget</span> <span class="token parameter variable">-t</span> <span class="token number">0</span> <span class="token parameter variable">-T</span> <span class="token number">120</span> <span class="token parameter variable">-np</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-r</span> ftp://xxx:xxx@xxx.com/xxx
<span class="token comment">#\u5176\u4E2D\u201Cnp\u201D\u8868\u793A\u4E0D\u8DDF\u968F\u94FE\u63A5\uFF0C\u53EA\u4E0B\u8F7D\u6307\u5B9A\u76EE\u5F55\u53CA\u5B50\u76EE\u5F55\u91CC\u7684\u6587\u4EF6\uFF1B-c \u8868\u793A\u542F\u52A8\u65AD\u70B9\u7EED\u4F20\uFF0C\u5176\u5B9E\u4E0B\u76EE\u5F55\u53CA\u5B50\u76EE\u5F55\u6709-r\u5C31\u53EF\u4EE5\uFF0C</span>
<span class="token comment">#\u7B80\u7565\u5C31\u7528\u6620\u50CF\u7528\u7684-m\u53C2\u6570\uFF0C\u5373\uFF1A</span>
<span class="token function">wget</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-np</span> http://xxx.xxx.com/xxx
<span class="token function">wget</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-np</span> ftp://xxx:xxx@xxx.com/xxx

<span class="token comment">#\u4E0B\u8F7D\u4E0B\u8F7D192.168.1.168\u9996\u9875\u5E76\u4E14\u663E\u793A\u4E0B\u8F7D\u4FE1\u606FLinux </span>
<span class="token function">wget</span> <span class="token parameter variable">-d</span> http://192.168.1.168
<span class="token comment">#\u4E0B\u8F7D192.168.1.168\u9996\u9875\u5E76\u4E14\u4E0D\u663E\u793A\u4EFB\u4F55\u4FE1\u606F</span>
<span class="token function">wget</span> <span class="token parameter variable">-q</span> http://192.168.1.168
<span class="token comment">#\u4E0B\u8F7Dfilelist.txt\u4E2D\u6240\u5305\u542B\u7684\u94FE\u63A5\u7684\u6240\u6709\u6587\u4EF6</span>
<span class="token function">wget</span> <span class="token parameter variable">-i</span> filelist.txt
<span class="token comment">#\u4E0B\u8F7D\u5230\u6307\u5B9A\u76EE\u5F55,\u628A\u6587\u4EF6file\u4E0B\u8F7D\u5230/tmp\u76EE\u5F55\u4E0B\u3002</span>
<span class="token function">wget</span> -P/tmp ftp://user:passwd@url/file

<span class="token function">wget</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-np</span> <span class="token parameter variable">-nd</span> http://example.com/packages/
<span class="token comment">#\u8FD9\u6761\u547D\u4EE4\u53EF\u4EE5\u4E0B\u8F7D http://example.com \u7F51\u7AD9\u4E0A packages \u76EE\u5F55\u4E2D\u7684\u6240\u6709\u6587\u4EF6\u3002\u5176\u4E2D\uFF0C-np \u7684\u4F5C\u7528\u662F\u4E0D\u904D\u5386\u7236\u76EE\u5F55\uFF0C-nd \u8868\u793A\u4E0D\u5728\u672C\u673A\u91CD\u65B0\u521B\u5EFA\u76EE\u5F55\u7ED3\u6784\u3002</span>
<span class="token function">wget</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-np</span> <span class="token parameter variable">-nd</span> <span class="token parameter variable">--accept</span><span class="token operator">=</span>iso http://example.com/centos-5/i386/
<span class="token comment">#\u4E0E\u4E0A\u4E00\u6761\u547D\u4EE4\u76F8\u4F3C\uFF0C\u4F46\u591A\u52A0\u4E86\u4E00\u4E2A --accept=iso \u9009\u9879\uFF0C\u8FD9\u6307\u793ALinux wget\u4EC5\u4E0B\u8F7D i386 \u76EE\u5F55\u4E2D\u6240\u6709\u6269\u5C55\u540D\u4E3A iso \u7684\u6587\u4EF6\u3002\u4F60\u4E5F\u53EF\u4EE5\u6307\u5B9A\u591A\u4E2A\u6269\u5C55\u540D\uFF0C\u53EA\u9700\u7528\u9017\u53F7\u5206\u9694\u5373\u53EF\u3002</span>
<span class="token function">wget</span> <span class="token parameter variable">-i</span> filename.txt
<span class="token comment">#\u6B64\u547D\u4EE4\u5E38\u7528\u4E8E\u6279\u91CF\u4E0B\u8F7D\u7684\u60C5\u5F62\uFF0C\u628A\u6240\u6709\u9700\u8981\u4E0B\u8F7D\u6587\u4EF6\u7684\u5730\u5740\u653E\u5230 filename.txt \u4E2D\uFF0C\u7136\u540E Linux wget\u5C31\u4F1A\u81EA\u52A8\u4E3A\u4F60\u4E0B\u8F7D\u6240\u6709\u6587\u4EF6\u4E86\u3002</span>
<span class="token function">wget</span> <span class="token parameter variable">-c</span> http://example.com/really-big-file.iso
<span class="token comment">#\u8FD9\u91CC\u6240\u6307\u5B9A\u7684 -c \u9009\u9879\u7684\u4F5C\u7528\u4E3A\u65AD\u70B9\u7EED\u4F20\u3002</span>
<span class="token function">wget</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-k</span> <span class="token punctuation">(</span>-H<span class="token punctuation">)</span> http://www.example.com/
<span class="token comment">#\u8BE5\u547D\u4EE4\u53EF\u7528\u6765\u955C\u50CF\u4E00\u4E2A\u7F51\u7AD9\uFF0CLinux wget\u5C06\u5BF9\u94FE\u63A5\u8FDB\u884C\u8F6C\u6362\u3002\u5982\u679C\u7F51\u7AD9\u4E2D\u7684\u56FE\u50CF\u662F\u653E\u5728\u53E6\u5916\u7684\u7AD9\u70B9\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4F7F\u7528 -H \u9009\u9879\u3002</span>

<span class="token comment">#\u4E0B\u8F7D\u67D0\u7AD9\u70B9\u76EE\u5F55\u548C\u5B50\u76EE\u5F55\u6587\u4EF6</span>
<span class="token function">wget</span> <span class="token parameter variable">-t</span> <span class="token number">0</span> <span class="token parameter variable">-T</span> <span class="token number">120</span> <span class="token parameter variable">-np</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-r</span> --restrict-file-names<span class="token operator">=</span>ascii  http://xxx.com/shell

<span class="token comment">#\u8F6C\u6362\u6587\u4EF6\u540D\u4E71\u7801</span>
python  rename.py <span class="token parameter variable">-i</span> utf-8 <span class="token parameter variable">-o</span> gbk <span class="token parameter variable">-p</span> /root/111 <span class="token parameter variable">-u</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[l];function p(c,o){return s(),a("div",null,t)}const d=n(i,[["render",p],["__file","wget.html.vue"]]);export{d as default};
