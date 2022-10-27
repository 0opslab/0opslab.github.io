import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const o={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

<span class="token comment">#\u6CE8\u91CA\uFF1Aof=/home/swap,\u653E\u7F6Eswap\u7684\u7A7A\u95F4; count\u7684\u5927\u5C0F\u5C31\u662F\u589E\u52A0\u7684swap\u7A7A\u95F4\u7684\u5927\u5C0F\uFF0C1024\u5C31\u662F\u5757\u5927\u5C0F\uFF0C\u8FD9\u91CC\u662F1K\uFF0C\u6240\u4EE5\u603B\u5171\u7A7A\u95F4\u5C31\u662Fbs*count=1000M</span>
<span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>/root/swap <span class="token assign-left variable">bs</span><span class="token operator">=</span><span class="token number">1024</span> <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1000000</span>

<span class="token comment">#\u6CE8\u91CA\uFF1A\u628A\u521A\u624D\u7A7A\u95F4\u683C\u5F0F\u5316\u6210swap\u5404\u5F0F</span>
<span class="token function">mkswap</span> /root/swap

<span class="token comment">#\u6CE8\u91CA\uFF1A\u4F7F\u521A\u624D\u521B\u5EFA\u7684swap\u7A7A\u95F4</span>
<span class="token function">swapon</span> /root/swap

<span class="token comment">#\u5173\u95EDswap</span>
<span class="token comment">#swapoff</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[i];function c(t,p){return n(),a("div",null,l)}const d=s(o,[["render",c],["__file","swap.html.vue"]]);export{d as default};
