import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const p={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># \u67E5\u5185\u5B58\u5360\u7528\u60C5\u51B5</span>
<span class="token function">ps</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> <span class="token string">&#39;pid,comm,args,pcpu,rsz,vsz,stime,user,uid&#39;</span>
<span class="token comment"># \u5176\u4E2Drsz\u662F\u662F\u5B9E\u9645\u5185\u5B58</span>
<span class="token function">ps</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> <span class="token string">&#39;pid,comm,args,pcpu,rsz,vsz,stime,user,uid&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">java</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nrk5</span>
<span class="token comment"># \u5176\u4E2Drsz\u4E3A\u5B9E\u9645\u5185\u5B58\uFF0C\u4E0A\u4F8B\u5B9E\u73B0\u6309\u5185\u5B58\u6392\u5E8F\uFF0C\u7531\u5927\u5230\u5C0F</span>

<span class="token comment"># \u67E5\u5185\u5B58\u5360\u7528\u60C5\u51B5</span>
<span class="token function">ps</span> <span class="token parameter variable">-aux</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-k4nr</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">10</span>

<span class="token comment"># \u4F7F\u7528\u6307\u4EE4\u67E5\u770B\u5360\u7528\u7684\u7269\u7406\u5185\u5B58\uFF0C</span>
<span class="token function">ps</span> aux<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{sum+=$6} END {print sum/1024}&#39;</span>

<span class="token comment"># \u4F7F\u7528\u6307\u4EE4\uFF0C\u6838\u5B9E\u8FDB\u7A0B\u7684\u6700\u5927\u4F7F\u7528\u5185\u5B58\u91CF</span>
<span class="token function">ps</span> <span class="token parameter variable">-eo</span> pid,rss,pmem,pcpu,vsz,args <span class="token parameter variable">--sort</span><span class="token operator">=</span>rss

<span class="token comment"># \u67E5\u5185\u5B58\u547D\u4EE4</span>
<span class="token function">ps</span> p <span class="token number">916</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-o</span> pcpu,pmem,pid,tid,time,tname,cmd

<span class="token comment"># \u6392\u67E5\u9AD8CPU\u5360\u7528\u4ECB\u7ECD\u7684PS\u547D\u4EE4</span>
<span class="token function">ps</span> <span class="token parameter variable">-mp</span> <span class="token number">9004</span> <span class="token parameter variable">-o</span> THREAD,tid,time,rss,size,%mem

<span class="token comment"># \u5206\u6790\u5177\u4F53\u7684\u5BF9\u8C61\u6570\u76EE\u548C\u5360\u7528\u5185\u5B58\u5927\u5C0F</span>
jmap <span class="token parameter variable">-histo:live</span> <span class="token punctuation">[</span>pid<span class="token punctuation">]</span>

<span class="token comment"># \u5229\u7528MAT\u5DE5\u5177\u5206\u6790\u662F\u5426\u5B58\u5728\u5185\u5B58\u6CC4\u6F0F\u7B49\u7B49\u3002</span>
jmap -dump:live,format<span class="token operator">=</span>b,file<span class="token operator">=</span>xxx.xxx <span class="token punctuation">[</span>pid<span class="token punctuation">]</span>

<span class="token comment"># \u53EF\u4EE5\u6839\u636E\u8FDB\u7A0B\u67E5\u770B\u8FDB\u7A0B\u76F8\u5173\u4FE1\u606F\u5360\u7528\u7684\u5185\u5B58\u60C5\u51B5\uFF1A</span>
pmap <span class="token parameter variable">-d</span> <span class="token number">14596</span>

<span class="token comment"># \u5E38\u7528</span>
<span class="token function">free</span> <span class="token parameter variable">-m</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[i];function t(c,r){return n(),a("div",null,l)}const m=s(p,[["render",t],["__file","mem.html.vue"]]);export{m as default};
