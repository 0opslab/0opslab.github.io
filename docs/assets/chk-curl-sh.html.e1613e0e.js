import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u7528\u811A\u672C\u68C0\u67E5url\u7684\u72B6\u6001</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/init.d/functions <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> /etc/init.d/functions

<span class="token comment">#chek url status</span>
<span class="token assign-left variable">array</span><span class="token operator">=</span><span class="token punctuation">(</span>
http://baidu.com
http://qq.com
http://taobao.com
http://192.168.1.233:9015/webfof_login/login
<span class="token punctuation">)</span>

<span class="token function-name function">curl_ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token assign-left variable">CURL</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-o</span> /dev/null <span class="token parameter variable">-s</span> --connect-timeout <span class="token number">5</span> <span class="token parameter variable">-w</span> <span class="token string">&#39;%{http_code}&#39;</span> $1<span class="token operator">|</span><span class="token function">egrep</span> <span class="token string">&quot;200|302&quot;</span><span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">)</span></span>
  <span class="token builtin class-name">return</span> <span class="token variable">$CURL</span>
<span class="token punctuation">}</span>

<span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token for-or-select variable">n</span> <span class="token keyword">in</span> <span class="token variable">\${array<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
   <span class="token keyword">do</span> 
      curl_ip <span class="token variable">$n</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
         action <span class="token string">&quot;curl <span class="token variable">$n</span>&quot;</span> /bin/true
      <span class="token keyword">else</span>
         action <span class="token string">&quot;curl <span class="token variable">$n</span>&quot;</span> /bin/false
         <span class="token function">sleep</span> <span class="token number">30</span> <span class="token comment">#try again after sleep 30 </span>
          <span class="token comment">#CURL=$(curl $n|egrep &quot;200|302&quot;|wc -l)</span>
           curl_ip <span class="token variable">$n</span>
           <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$CURL</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
              action <span class="token string">&quot;Retry curl <span class="token variable">$n</span> again&quot;</span> /bin/true
           <span class="token keyword">else</span>
              action <span class="token string">&quot;Retry curl <span class="token variable">$n</span> again&quot;</span> /bin/false
          <span class="token keyword">fi</span> 
      <span class="token keyword">fi</span>
   <span class="token keyword">done</span>
<span class="token punctuation">}</span> 
main

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[i];function p(c,o){return s(),a("div",null,t)}const u=n(l,[["render",p],["__file","chk-curl-sh.html.vue"]]);export{u as default};
