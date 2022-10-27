import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To schedule a one time task</span>
<span class="token comment">#\u5B89\u6392\u4E00\u6B21\u6027\u4EFB\u52A1</span>
at <span class="token punctuation">{</span>time<span class="token punctuation">}</span>
<span class="token punctuation">{</span>command <span class="token number">0</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>command <span class="token number">1</span><span class="token punctuation">}</span>
Ctrl-d

<span class="token comment"># {time} can be either</span>
<span class="token comment">#{time}\u4E5F\u53EF\u4EE5</span>
now <span class="token operator">|</span> midnight <span class="token operator">|</span> noon <span class="token operator">|</span> teatime <span class="token punctuation">(</span>4pm<span class="token punctuation">)</span>
HH:MM
now + N <span class="token punctuation">{</span>minutes <span class="token operator">|</span> hours <span class="token operator">|</span> days <span class="token operator">|</span> weeks<span class="token punctuation">}</span>
MM/DD/YY

<span class="token comment"># To list pending jobs</span>
<span class="token comment">#\u5217\u51FA\u5F85\u5904\u7406\u7684\u5DE5\u4F5C</span>
atq

<span class="token comment"># To remove a job (use id from atq)</span>
<span class="token comment">#\u5220\u9664\u4F5C\u4E1A\uFF08\u4F7F\u7528\u6765\u81EAatq\u7684id\uFF09</span>
atrm <span class="token punctuation">{</span>id<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[i];function o(l,p){return s(),a("div",null,c)}const m=n(t,[["render",o],["__file","at.html.vue"]]);export{m as default};
