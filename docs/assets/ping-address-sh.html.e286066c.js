import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u6839\u636E\u7F51\u7EDC\u914D\u7F6E\u5BF9\u7F51\u7EDC\u5730\u5740192.168.0\u8FDB\u884C\u4FEE\u6539\uFF0C\u68C0\u67E5\u662F\u5426\u662F\u6D3B\u52A8\u72B6\u6001</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token comment">#{start..end}shell\u6269\u5C55\u751F\u6210\u4E00\u7EC4\u5730\u5740</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">ip</span> <span class="token keyword">in</span> <span class="token number">192.168</span>.0.<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">255</span><span class="token punctuation">}</span>
<span class="token keyword">do</span> 
    <span class="token punctuation">(</span>
    <span class="token function">ping</span> <span class="token variable">$ip</span> <span class="token parameter variable">-c</span> <span class="token number">2</span> <span class="token operator">&amp;&gt;</span> /dev/null 
    <span class="token comment"># &gt; \u6807\u51C6\u8F93\u51FA\u91CD\u5B9A\u5411\uFF0C\u548C1&gt;\u4E00\u81F4</span>
    <span class="token comment"># 2&gt;&amp;1 \u5C06\u6807\u51C6\u9519\u8BEF\u8F93\u51FA\u3000\u91CD\u5B9A\u5411\u3000\u5230\u6807\u51C6\u8F93\u51FA</span>
    <span class="token comment"># &amp;&gt;file \u5C06\u6807\u51C6\u8F93\u51FA\u548C\u6807\u51C6\u9519\u8BEF\u8F93\u51FA\u90FD\u91CD\u5B9A\u5411\u5230\u6587\u4EF6filename\u4E2D</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token variable">$ip</span> is alive
    <span class="token keyword">fi</span>
    <span class="token punctuation">)</span><span class="token operator">&amp;</span>
<span class="token keyword">done</span>
<span class="token function">wait</span>
<span class="token comment">#\u5E76\u884Cping,\u52A0\u901F</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[l];function c(t,o){return s(),a("div",null,p)}const r=n(i,[["render",c],["__file","ping-address-sh.html.vue"]]);export{r as default};
