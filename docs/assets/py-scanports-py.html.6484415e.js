import{_ as n,o as s,c as a,e as t}from"./app.a667bd71.js";const e={},p=t(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># \`\`\`ops</span>
<span class="token comment"># title:\u5229\u7528python\u7B80\u5355\u7684\u5B9E\u73B0\u7AEF\u53E3\u626B\u63CF</span>
<span class="token comment"># descr:</span>
<span class="token comment"># \`\`\`</span>
<span class="token keyword">from</span> socket <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    target <span class="token operator">=</span> <span class="token builtin">raw_input</span><span class="token punctuation">(</span><span class="token string">&#39;Enter host to scan: &#39;</span><span class="token punctuation">)</span>
    targetIP <span class="token operator">=</span> gethostbyname<span class="token punctuation">(</span>target<span class="token punctuation">)</span>
    <span class="token keyword">print</span> <span class="token string">&#39;Starting scan on host &#39;</span><span class="token punctuation">,</span> targetIP

    <span class="token comment"># scan reserved ports</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">1025</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        s <span class="token operator">=</span> socket<span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">)</span>

        result <span class="token operator">=</span> s<span class="token punctuation">.</span>connect_ex<span class="token punctuation">(</span><span class="token punctuation">(</span>targetIP<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span> <span class="token string">&#39;Port %d: OPEN&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token punctuation">)</span>
        s<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","py-scanports-py.html.vue"]]);export{r as default};
