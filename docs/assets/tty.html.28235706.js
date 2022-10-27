import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const t={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash </span>
<span class="token assign-left variable">active</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$active</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
   <span class="token builtin class-name">printf</span> <span class="token string">&quot;Enter your new pwd:<span class="token entity" title="\\n">\\n</span>&quot;</span>
   stty <span class="token parameter variable">-echo</span>
   <span class="token builtin class-name">read</span> pass <span class="token operator">&lt;</span> /dev/tty 
   <span class="token builtin class-name">printf</span> <span class="token string">&quot;Enter again:<span class="token entity" title="\\n">\\n</span>&quot;</span>
   <span class="token builtin class-name">read</span> pass2 <span class="token operator">&lt;</span> /dev/tty 
   stty <span class="token builtin class-name">echo</span>
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$pass</span> <span class="token operator">==</span> <span class="token variable">$pass2</span> <span class="token punctuation">]</span>
   <span class="token keyword">then</span>
        <span class="token assign-left variable">active</span><span class="token operator">=</span><span class="token number">1</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u8F93\u51FA\u6210\u529F\uFF01&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165&quot;</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[l];function p(c,o){return n(),a("div",null,i)}const d=s(t,[["render",p],["__file","tty.html.vue"]]);export{d as default};
