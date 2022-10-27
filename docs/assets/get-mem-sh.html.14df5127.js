import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const p={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u83B7\u53D6\u7CFB\u7EDF\u5185\u5B58\u4FE1\u606F\u6982\u8981</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token comment"># \u83B7\u53D6\u7269\u7406\u5185\u5B58\u603B\u91CF</span>
<span class="token assign-left variable">mem_total</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">free</span> <span class="token operator">|</span> <span class="token function">grep</span> Mem <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u7269\u7406\u5185\u5B58\u603B\u91CF\uFF1A&quot;</span><span class="token variable">$mem_total</span>
 
<span class="token comment"># \u83B7\u53D6\u64CD\u4F5C\u7CFB\u7EDF\u5DF2\u4F7F\u7528\u5185\u5B58\u603B\u91CF</span>
<span class="token assign-left variable">mem_sys_used</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">free</span> <span class="token operator">|</span> <span class="token function">grep</span> Mem <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5DF2\u4F7F\u7528\u5185\u5B58\u603B\u91CF(\u64CD\u4F5C\u7CFB\u7EDF)\uFF1A&quot;</span><span class="token variable">$mem_sys_used</span>
 
<span class="token comment"># \u83B7\u53D6\u64CD\u4F5C\u7CFB\u7EDF\u672A\u4F7F\u7528\u5185\u5B58\u603B\u91CF</span>
<span class="token assign-left variable">mem_sys_free</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">free</span> <span class="token operator">|</span> <span class="token function">grep</span> Mem <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $4}&#39;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5269\u4F59\u5185\u5B58\u603B\u91CF(\u64CD\u4F5C\u7CFB\u7EDF)\uFF1A&quot;</span><span class="token variable">$mem_sys_free</span>
 
<span class="token comment"># \u83B7\u53D6\u5E94\u7528\u7A0B\u5E8F\u5DF2\u4F7F\u7528\u7684\u5185\u5B58\u603B\u91CF</span>
<span class="token assign-left variable">mem_user_used</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">free</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> 3p <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5DF2\u4F7F\u7528\u5185\u5B58\u603B\u91CF(\u5E94\u7528\u7A0B\u5E8F)\uFF1A&quot;</span><span class="token variable">$mem_user_used</span>
 
<span class="token comment"># \u83B7\u53D6\u5E94\u7528\u7A0B\u5E8F\u672A\u4F7F\u7528\u5185\u5B58\u603B\u91CF</span>
<span class="token assign-left variable">mem_user_free</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">free</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> 3p <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $4}&#39;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5269\u4F59\u5185\u5B58\u603B\u91CF(\u5E94\u7528\u7A0B\u5E8F)\uFF1A&quot;</span><span class="token variable">$mem_user_free</span>
 
 
<span class="token comment"># \u83B7\u53D6\u4EA4\u6362\u5206\u533A\u603B\u5927\u5C0F</span>
<span class="token assign-left variable">mem_swap_total</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">free</span> <span class="token operator">|</span> <span class="token function">grep</span> Swap <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u4EA4\u6362\u5206\u533A\u603B\u5927\u5C0F\uFF1A&quot;</span><span class="token variable">$mem_swap_total</span>
 
<span class="token comment"># \u83B7\u53D6\u5DF2\u4F7F\u7528\u4EA4\u6362\u5206\u533A\u5927\u5C0F</span>
<span class="token assign-left variable">mem_swap_used</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">free</span> <span class="token operator">|</span> <span class="token function">grep</span> Swap <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5DF2\u4F7F\u7528\u4EA4\u6362\u5206\u533A\u5927\u5C0F\uFF1A&quot;</span><span class="token variable">$mem_swap_used</span>
 
<span class="token comment"># \u83B7\u53D6\u5269\u4F59\u4EA4\u6362\u5206\u533A\u5927\u5C0F</span>
<span class="token assign-left variable">mem_swap_free</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">free</span> <span class="token operator">|</span> <span class="token function">grep</span> Swap <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $4}&#39;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5269\u4F59\u4EA4\u6362\u5206\u533A\u5927\u5C0F\uFF1A&quot;</span><span class="token variable">$mem_swap_free</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function o(i,c){return n(),a("div",null,t)}const k=s(p,[["render",o],["__file","get-mem-sh.html.vue"]]);export{k as default};