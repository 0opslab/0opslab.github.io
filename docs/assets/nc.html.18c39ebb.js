import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const o={},t=e(`<h1 id="title-nc" tabindex="-1"><a class="header-anchor" href="#title-nc" aria-hidden="true">#</a> title{nc - }</h1><h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-g<span class="token operator">&lt;</span>\u7F51\u5173<span class="token operator">&gt;</span> \u8BBE\u7F6E\u8DEF\u7531\u5668\u8DC3\u7A0B\u901A\u4FE1\u7F51\u5173\uFF0C\u6700\u591A\u53EF\u8BBE\u7F6E8\u4E2A\u3002
-G<span class="token operator">&lt;</span>\u6307\u5411\u5668\u6570\u76EE<span class="token operator">&gt;</span> \u8BBE\u7F6E\u6765\u6E90\u8DEF\u7531\u6307\u5411\u5668\uFF0C\u5176\u6570\u503C\u4E3A4\u7684\u500D\u6570\u3002
<span class="token parameter variable">-h</span> \u5728\u7EBF\u5E2E\u52A9\u3002
-i<span class="token operator">&lt;</span>\u5EF6\u8FDF\u79D2\u6570<span class="token operator">&gt;</span> \u8BBE\u7F6E\u65F6\u95F4\u95F4\u9694\uFF0C\u4EE5\u4FBF\u4F20\u9001\u4FE1\u606F\u53CA\u626B\u63CF\u901A\u4FE1\u7AEF\u53E3\u3002
<span class="token parameter variable">-l</span> \u4F7F\u7528\u76D1\u542C\u6A21\u5F0F\uFF0C\u7BA1\u63A7\u4F20\u5165\u7684\u8D44\u6599\u3002
<span class="token parameter variable">-n</span> \u76F4\u63A5\u4F7F\u7528IP\u5730\u5740\uFF0C\u800C\u4E0D\u901A\u8FC7\u57DF\u540D\u670D\u52A1\u5668\u3002
-o<span class="token operator">&lt;</span>\u8F93\u51FA\u6587\u4EF6<span class="token operator">&gt;</span> \u6307\u5B9A\u6587\u4EF6\u540D\u79F0\uFF0C\u628A\u5F80\u6765\u4F20\u8F93\u7684\u6570\u636E\u4EE516\u8FDB\u5236\u5B57\u7801\u503E\u5012\u6210\u8BE5\u6587\u4EF6\u4FDD\u5B58\u3002
-p<span class="token operator">&lt;</span>\u901A\u4FE1\u7AEF\u53E3<span class="token operator">&gt;</span> \u8BBE\u7F6E\u672C\u5730\u4E3B\u673A\u4F7F\u7528\u7684\u901A\u4FE1\u7AEF\u53E3\u3002
<span class="token parameter variable">-r</span> \u4E71\u6570\u6307\u5B9A\u672C\u5730\u4E0E\u8FDC\u7AEF\u4E3B\u673A\u7684\u901A\u4FE1\u7AEF\u53E3\u3002
-s<span class="token operator">&lt;</span>\u6765\u6E90\u4F4D\u5740<span class="token operator">&gt;</span> \u8BBE\u7F6E\u672C\u5730\u4E3B\u673A\u9001\u51FA\u6570\u636E\u5305\u7684IP\u5730\u5740\u3002
<span class="token parameter variable">-u</span> \u4F7F\u7528UDP\u4F20\u8F93\u534F\u8BAE\u3002
<span class="token parameter variable">-v</span> \u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\u3002
-w<span class="token operator">&lt;</span>\u8D85\u65F6\u79D2\u6570<span class="token operator">&gt;</span> \u8BBE\u7F6E\u7B49\u5F85\u8FDE\u7EBF\u7684\u65F6\u95F4\u3002
<span class="token parameter variable">-z</span> \u4F7F\u75280\u8F93\u5165/\u8F93\u51FA\u6A21\u5F0F\uFF0C\u53EA\u5728\u626B\u63CF\u901A\u4FE1\u7AEF\u53E3\u65F6\u4F7F\u7528\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To open a TCP connection to port 42 of host.example.com, using port 31337 as the source port</span>
<span class="token comment"># with a timeout of 5 seconds:</span>
<span class="token comment"># \u8981\u6253\u5F00\u5230host.example.com\u7AEF\u53E342\u7684TCP\u8FDE\u63A5\uFF0C\u8BF7\u4F7F\u7528\u7AEF\u53E331337\u4F5C\u4E3A\u6E90\u7AEF\u53E3\uFF0C\u8D85\u65F6\u4E3A5\u79D2\uFF1A</span>
<span class="token function">nc</span> <span class="token parameter variable">-p</span> <span class="token number">31337</span> <span class="token parameter variable">-w</span> <span class="token number">5</span> host.example.com <span class="token number">42</span>

<span class="token comment"># To open a UDP connection to port 53 of host.example.com:</span>
<span class="token comment">#\u8981\u6253\u5F00\u5230host.example.com\u7684\u7AEF\u53E353\u7684UDP\u8FDE\u63A5\uFF1A</span>
<span class="token function">nc</span> <span class="token parameter variable">-u</span> host.example.com <span class="token number">53</span>

<span class="token comment"># To open a TCP connection to port 42 of host.example.com using 10.1.2.3 as the IP for the local end of the connection:</span>
<span class="token comment">#\u8981\u4F7F\u752810.1.2.3\u4F5C\u4E3A\u8FDE\u63A5\u672C\u5730\u7AEF\u7684IP\uFF0C\u6253\u5F00\u4E0Ehost.example.com\u7684\u7AEF\u53E342\u7684TCP\u8FDE\u63A5\uFF1A</span>
<span class="token function">nc</span> <span class="token parameter variable">-s</span> <span class="token number">10.1</span>.2.3 host.example.com <span class="token number">42</span>

<span class="token comment"># To create and listen on a UNIX-domain stream socket:</span>
<span class="token comment">#\u8981\u5728UNIX\u57DF\u6D41\u5957\u63A5\u5B57\u4E0A\u521B\u5EFA\u548C\u4FA6\u542C\uFF1A</span>
<span class="token function">nc</span> <span class="token parameter variable">-lU</span> /var/tmp/dsocket

<span class="token comment"># To connect to port 42 of host.example.com via an HTTP proxy at 10.2.3.4, port 8080.</span>
<span class="token comment"># This example could also be used by ssh(1); see the ProxyCommand directive in ssh_config(5) for more information.</span>
<span class="token comment"># \u901A\u8FC710.2.3.4\u7AEF\u53E38080\u7684HTTP\u4EE3\u7406\u8FDE\u63A5\u5230host.example.com\u7684\u7AEF\u53E342.\u6B64\u793A\u4F8B\u4E5F\u53EF\u4EE5\u7531ssh</span>
<span class="token comment"># \uFF081\uFF09\u4F7F\u7528;\u6709\u5173\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605ssh_config\uFF085\uFF09\u4E2D\u7684ProxyCommand\u6307\u4EE4\u3002</span>
<span class="token function">nc</span> -x10.2.3.4:8080 <span class="token parameter variable">-Xconnect</span> host.example.com <span class="token number">42</span>

<span class="token comment"># The same example again, this time enabling proxy authentication with username &quot;ruser&quot; if the proxy requires it:</span>
<span class="token comment">#\u518D\u6B21\u4F7F\u7528\u76F8\u540C\u7684\u793A\u4F8B\uFF0C\u5982\u679C\u4EE3\u7406\u9700\u8981\uFF0C\u5219\u4F7F\u7528\u7528\u6237\u540D\u201Cruser\u201D\u542F\u7528\u4EE3\u7406\u8EAB\u4EFD\u9A8C\u8BC1\uFF1A</span>
<span class="token function">nc</span> -x10.2.3.4:8080 <span class="token parameter variable">-Xconnect</span> <span class="token parameter variable">-Pruser</span> host.example.com <span class="token number">42</span>

<span class="token comment"># To choose the source IP for the testing using the -s option</span>
<span class="token comment">#\u4F7F\u7528-s\u9009\u9879\u4E3A\u6D4B\u8BD5\u9009\u62E9\u6E90IP</span>
<span class="token function">nc</span> <span class="token parameter variable">-zv</span> <span class="token parameter variable">-s</span> source_IP target_IP Port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[t];function l(c,r){return s(),a("div",null,i)}const m=n(o,[["render",l],["__file","nc.html.vue"]]);export{m as default};
