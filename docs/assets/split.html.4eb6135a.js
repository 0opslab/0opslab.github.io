import{_ as s,o as n,c as e,e as a}from"./app.a667bd71.js";const l={},i=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To split a large text file into smaller files of 1000 lines each:</span>
<span class="token comment">#\u8981\u5C06\u5927\u6587\u672C\u6587\u4EF6\u62C6\u5206\u4E3A\u6BCF\u4E2A1000\u884C\u7684\u8F83\u5C0F\u6587\u4EF6\uFF1A</span>
<span class="token function">split</span> file.txt <span class="token parameter variable">-l</span> <span class="token number">1000</span>

<span class="token comment"># To split a large binary file into smaller files of 10M each:</span>
<span class="token comment">#\u8981\u5C06\u5927\u578B\u4E8C\u8FDB\u5236\u6587\u4EF6\u62C6\u5206\u4E3A\u6BCF\u4E2A10M\u7684\u8F83\u5C0F\u6587\u4EF6\uFF1A</span>
<span class="token function">split</span> file.txt <span class="token parameter variable">-b</span> 10M

<span class="token comment"># To consolidate split files into a single file:</span>
<span class="token comment">#\u8981\u5C06\u62C6\u5206\u6587\u4EF6\u5408\u5E76\u4E3A\u5355\u4E2A\u6587\u4EF6\uFF1A</span>
<span class="token function">cat</span> x* <span class="token operator">&gt;</span> file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[i];function c(o,r){return n(),e("div",null,t)}const d=s(l,[["render",c],["__file","split.html.vue"]]);export{d as default};
