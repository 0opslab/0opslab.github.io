import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u5229\u7528wget\u68C0\u67E5\u670D\u52A1\u7684\u72B6\u6001</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/init.d/functions <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> /etc/init.d/functions

<span class="token assign-left variable">array</span><span class="token operator">=</span><span class="token punctuation">(</span>
http://baidu.com
http://qq.com
http://taobao.com
<span class="token punctuation">)</span>

<span class="token function-name function">curl_ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">wget</span> <span class="token parameter variable">-T</span> <span class="token number">5</span> <span class="token parameter variable">-t</span> <span class="token number">2</span> <span class="token parameter variable">--spider</span> <span class="token variable">$1</span> <span class="token operator">&amp;&gt;</span>/dev/null
  <span class="token builtin class-name">return</span> <span class="token variable">$?</span>
<span class="token punctuation">}</span>

<span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token for-or-select variable">n</span> <span class="token keyword">in</span> <span class="token variable">\${array<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
   <span class="token keyword">do</span> 
      curl_ip <span class="token variable">$n</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
         action <span class="token string">&quot;curl <span class="token variable">$n</span>&quot;</span> /bin/true
      <span class="token keyword">else</span>
         action <span class="token string">&quot;curl <span class="token variable">$n</span>&quot;</span> /bin/false
      <span class="token keyword">fi</span>
   <span class="token keyword">done</span>
<span class="token punctuation">}</span> 
main

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[t];function c(p,o){return s(),a("div",null,l)}const u=n(i,[["render",c],["__file","chk-wget-sh.html.vue"]]);export{u as default};
