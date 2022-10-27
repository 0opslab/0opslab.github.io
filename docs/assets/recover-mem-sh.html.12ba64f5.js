import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const p={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash </span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u5F53\u5185\u5B58\u544A\u8B66\u7684\u65F6\u5019\u91CA\u653E\u4E00\u4E9B\u5185\u5B58</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token comment">#\u7CFB\u7EDF\u5206\u914D\u7684\u533A\u603B\u91CF  </span>
<span class="token assign-left variable">mem_total</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">free</span> <span class="token parameter variable">-m</span> <span class="token operator">|</span><span class="token function">grep</span> Mem <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print  $2}&#39;</span><span class="token variable">\`</span></span> 
  
<span class="token comment">#\u5F53\u524D\u5269\u4F59\u7684free\u5927\u5C0F  </span>
<span class="token assign-left variable">mem_free</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">free</span> <span class="token parameter variable">-m</span> <span class="token operator">|</span><span class="token function">grep</span> Mem <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print  $4}&#39;</span><span class="token variable">\`</span></span> 
  
<span class="token comment">#\u5F53\u524D\u5DF2\u4F7F\u7528\u7684used\u5927\u5C0F  </span>
<span class="token assign-left variable">mem_used</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">free</span> <span class="token parameter variable">-m</span> <span class="token operator">|</span><span class="token function">grep</span> Mem <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print  $3}&#39;</span><span class="token variable">\`</span></span> 
  
  
<span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span>$mem_used <span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">then</span> 
  
<span class="token comment">#\u5982\u679C\u5DF2\u88AB\u4F7F\u7528\uFF0C\u5219\u8BA1\u7B97\u5F53\u524D\u5269\u4F59free\u6240\u5360\u603B\u91CF\u7684\u767E\u5206\u6BD4\uFF0C\u7528\u5C0F\u6570\u6765\u8868\u793A\uFF0C\u8981\u5728\u5C0F\u6570\u70B9\u524D\u9762\u8865\u4E00\u4E2A\u6574\u6570\u4F4D0  </span>
   <span class="token assign-left variable">mem_per</span><span class="token operator">=</span><span class="token number">0</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span><span class="token string">&quot;scale=2;<span class="token variable">$mem_free</span>/<span class="token variable">$mem_total</span>&quot;</span> <span class="token operator">|</span> <span class="token function">bc</span><span class="token variable">\`</span></span> 
 <span class="token assign-left variable">DATA</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;today&quot;</span>+<span class="token string">&quot;%Y-%m-%d-%H-%M&quot;</span><span class="token variable">)</span></span> free percent is : <span class="token variable">$mem_per</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$DATA</span> <span class="token operator">&gt;&gt;</span>/var/log/mem_detect.log
<span class="token comment">#\u8BBE\u7F6E\u7684\u544A\u8B66\u503C\u4E3A20%(\u5373\u4F7F\u7528\u8D85\u8FC780%\u7684\u65F6\u5019\u544A\u8B66)\u3002  </span>
   <span class="token assign-left variable">mem_warn</span><span class="token operator">=</span><span class="token number">0.20</span> 
  
<span class="token comment">#\u5F53\u524D\u5269\u4F59\u767E\u5206\u6BD4\u4E0E\u544A\u8B66\u503C\u8FDB\u884C\u6BD4\u8F83\uFF08\u5F53\u5927\u4E8E\u544A\u8B66\u503C(\u5373\u5269\u4F5920%\u4EE5\u4E0A)\u65F6\u4F1A\u8FD4\u56DE1\uFF0C\u5C0F\u4E8E(\u5373\u5269\u4F59\u4E0D\u8DB320%)\u65F6\u4F1A\u8FD4\u56DE0 \uFF09  </span>
   <span class="token assign-left variable">mem_now</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $mem_per <span class="token punctuation">\\</span><span class="token operator">&gt;</span> $mem_warn<span class="token variable">\`</span></span> 
  
<span class="token comment">#\u5982\u679C\u5F53\u524D\u4F7F\u7528\u8D85\u8FC780%\uFF08\u5373\u5269\u4F59\u5C0F\u4E8E20%\uFF0C\u4E0A\u9762\u7684\u8FD4\u56DE\u503C\u7B49\u4E8E0\uFF09\uFF0C\u91CA\u653E\u5185\u5B58</span>
  <span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span>$mem_now <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">then</span> 
      <span class="token function">sync</span> 
      <span class="token function">sync</span> 
      <span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">&gt;</span> /proc/sys/vm/drop_caches 
      <span class="token comment"># To free dentries and inodes: </span>
      <span class="token builtin class-name">echo</span> <span class="token number">2</span> <span class="token operator">&gt;</span> /proc/sys/vm/drop_caches 
      <span class="token comment"># To free pagecache, dentries andinodes: </span>
      <span class="token builtin class-name">echo</span> <span class="token number">3</span> <span class="token operator">&gt;</span> /proc/sys/vm/drop_caches
  <span class="token keyword">fi</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function o(c,i){return n(),a("div",null,t)}const m=s(p,[["render",o],["__file","recover-mem-sh.html.vue"]]);export{m as default};
