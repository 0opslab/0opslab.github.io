import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const c={},i=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Save results to file</span>
<span class="token comment">#\u5C06\u7ED3\u679C\u4FDD\u5B58\u5230\u6587\u4EF6</span>
ncdu <span class="token parameter variable">-o</span> ncdu.file

<span class="token comment"># Read from file</span>
<span class="token comment">#\u4ECE\u6587\u4EF6\u4E2D\u8BFB\u53D6</span>
ncdu <span class="token parameter variable">-f</span> ncdu.file

<span class="token comment"># Save results to compressed file </span>
<span class="token comment">#\u5C06\u7ED3\u679C\u4FDD\u5B58\u5230\u538B\u7F29\u6587\u4EF6</span>
ncdu -o-<span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> ncdu.file.gz

<span class="token comment"># Read from compressed file</span>
<span class="token comment">#\u4ECE\u538B\u7F29\u6587\u4EF6\u4E2D\u8BFB\u53D6</span>
zcat ncdu.file.gz <span class="token operator">|</span> ncdu -f-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[i];function d(o,t){return s(),e("div",null,l)}const m=n(c,[["render",d],["__file","ncdu.html.vue"]]);export{m as default};
