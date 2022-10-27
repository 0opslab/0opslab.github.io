import{_ as n,o as s,c as a,e as p}from"./app.a667bd71.js";const t={},e=p(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> os<span class="token punctuation">.</span>path
<span class="token keyword">import</span> re

<span class="token comment"># \`\`\`ops</span>
<span class="token comment"># title:\u6279\u91CF\u6587\u4EF6\u6587\u4EF6\u91CD\u547D\u4EE4</span>
<span class="token comment"># descr:</span>
<span class="token comment"># \`\`\`</span>


<span class="token keyword">def</span> <span class="token function">getPhoneNumber</span><span class="token punctuation">(</span>account<span class="token punctuation">)</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">&#39;1\\d{10}&#39;</span><span class="token punctuation">,</span> account<span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        account


path <span class="token operator">=</span> <span class="token string">&#39;C:\\\\Users\\\\Administrator\\\\Desktop\\\\\u4E8C\u7EF4\u7801-\u624B\u673A\u53F7&#39;</span>

<span class="token keyword">for</span> root<span class="token punctuation">,</span> dirs<span class="token punctuation">,</span> files <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> <span class="token builtin">file</span> <span class="token keyword">in</span> files<span class="token punctuation">:</span>
        ff <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token builtin">file</span><span class="token punctuation">)</span>
        suffix <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>splitext<span class="token punctuation">(</span>ff<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> suffix <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token string">&#39;.jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.png&#39;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
            ffname <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>basename<span class="token punctuation">(</span>ff<span class="token punctuation">)</span>
            bpath <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>ff<span class="token punctuation">)</span>
            newffName <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>bpath<span class="token punctuation">,</span> getPhoneNumber<span class="token punctuation">(</span>ffname<span class="token punctuation">)</span><span class="token operator">+</span>suffix<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>ff<span class="token punctuation">,</span> <span class="token string">&quot;===&gt;&quot;</span><span class="token punctuation">,</span> newffName<span class="token operator">+</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">try</span><span class="token punctuation">:</span>
                os<span class="token punctuation">.</span>rename<span class="token punctuation">(</span>ff<span class="token punctuation">,</span> newffName<span class="token punctuation">)</span>
            <span class="token keyword">except</span> Exception <span class="token keyword">as</span> es<span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span>es<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","py-batchRename-py.html.vue"]]);export{k as default};
