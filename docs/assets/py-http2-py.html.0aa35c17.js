import{_ as n,o as s,c as a,e as t}from"./app.a667bd71.js";const e={},p=t(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># coding=utf-8</span>
<span class="token comment"># \`\`\`ops</span>
<span class="token comment"># title:\u57FA\u4E8Epython2\u5B9E\u73B0http\u7684\u547D\u4EE4\u6267\u884C</span>
<span class="token comment"># descr:</span>
<span class="token comment"># \`\`\`</span>
<span class="token keyword">from</span> SimpleHTTPServer <span class="token keyword">import</span> SimpleHTTPRequestHandler
<span class="token keyword">import</span> SocketServer
<span class="token keyword">import</span> os
<span class="token keyword">import</span> io
<span class="token keyword">import</span> shutil
<span class="token keyword">import</span> logging
<span class="token keyword">import</span> cgi
<span class="token keyword">import</span> sys


log_path <span class="token operator">=</span> <span class="token string">&#39;./run_server_http2.log&#39;</span>
logging<span class="token punctuation">.</span>basicConfig<span class="token punctuation">(</span>level<span class="token operator">=</span>logging<span class="token punctuation">.</span>INFO<span class="token punctuation">,</span>
                    <span class="token builtin">format</span><span class="token operator">=</span><span class="token string">&#39;%(asctime)s %(filename)s[line:%(lineno)d] %(levelname)s %(message)s&#39;</span><span class="token punctuation">,</span> datefmt<span class="token operator">=</span><span class="token string">&#39;%a, %d %b %Y %H:%M:%S&#39;</span><span class="token punctuation">,</span> filename<span class="token operator">=</span>log_path<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">MyHttpHandler</span><span class="token punctuation">(</span>SimpleHTTPRequestHandler<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">execCmd</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> cmd<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;execute command, and return the output  &#39;&#39;&#39;</span>
        r <span class="token operator">=</span> os<span class="token punctuation">.</span>popen<span class="token punctuation">(</span>cmd<span class="token punctuation">)</span>
        text <span class="token operator">=</span> r<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        r<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> text
        <span class="token triple-quoted-string string">&#39;&#39;&#39;\u5904\u7406\u8BF7\u6C42\u5E76\u8FD4\u56DE\u9875\u9762&#39;&#39;&#39;</span>

    <span class="token comment"># \u5904\u7406\u4E00\u4E2AGET\u8BF7\u6C42</span>
    <span class="token keyword">def</span> <span class="token function">do_GET</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        con <span class="token operator">=</span> self<span class="token punctuation">.</span>execCmd<span class="token punctuation">(</span><span class="token string">&#39;/home/local/script/deploy.sh&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>send_response<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>send_header<span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;text/html&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>send_header<span class="token punctuation">(</span><span class="token string">&quot;Content-Length&quot;</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>con<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>end_headers<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>wfile<span class="token punctuation">.</span>write<span class="token punctuation">(</span>con<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;UTF-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">start_server</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    server_host <span class="token operator">=</span> <span class="token string">&#39;0.0.0.0&#39;</span>
    server_port <span class="token operator">=</span> <span class="token number">8099</span>
    httpd <span class="token operator">=</span> SocketServer<span class="token punctuation">.</span>TCPServer<span class="token punctuation">(</span><span class="token punctuation">(</span>server_host<span class="token punctuation">,</span> server_port<span class="token punctuation">)</span><span class="token punctuation">,</span> MyHttpHandler<span class="token punctuation">)</span>
    logging<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string">&#39;\\nStart server success ... \\nserver_host:&#39;</span> <span class="token operator">+</span>
                 server_host<span class="token operator">+</span><span class="token string">&#39;   server_port:&#39;</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>server_port<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exe_server started on &#39;</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>server_host<span class="token punctuation">)</span> <span class="token operator">+</span>
          <span class="token string">&#39; server_port:&#39;</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>server_port<span class="token punctuation">)</span><span class="token punctuation">)</span>
    httpd<span class="token punctuation">.</span>serve_forever<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    start_server<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","py-http2-py.html.vue"]]);export{r as default};
