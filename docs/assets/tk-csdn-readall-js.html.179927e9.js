import{_ as n,o as s,c as a,e as t}from"./app.a667bd71.js";const e={},c=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ==UserScript==</span>
<span class="token comment">//\`\`\`ops</span>
<span class="token comment">//title:\u6CB9\u7334\u811A\u672C:csdnReadAll</span>
<span class="token comment">//descr:\u5229\u7528\u6CB9\u7334\u811A\u672C\u81EA\u52A8\u70B9\u51FBcsdn\u7684\u5168\u90E8\u9605\u8BFB\u529F\u80FD</span>
<span class="token comment">//\`\`\`</span>
<span class="token comment">// @title{\u6CB9\u7334\u811A\u672C:csdnReadAll}</span>
<span class="token comment">// @namespace    http://tampermonkey.net/</span>
<span class="token comment">// @version      0.1</span>
<span class="token comment">// @description  try to take over the world!</span>
<span class="token comment">// @author       monsoon</span>
<span class="token comment">// @match        https://blog.csdn.net/*</span>
<span class="token comment">// @grant        none</span>
<span class="token comment">// ==/UserScript==</span>

<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">//\u5C31\u662F\u8FD9\u91CC,\u793A\u4F8B(csdn\u5220\u9664&quot;\u67E5\u770B\u66F4\u591A&quot;\u6309\u94AE,\u5E76\u663E\u793A\u5168\u90E8\u9875\u9762\u5185\u5BB9):</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;article_content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> del <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;hide-article-box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    del<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>del<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[c];function o(l,i){return s(),a("div",null,p)}const d=n(e,[["render",o],["__file","tk-csdn-readall-js.html.vue"]]);export{d as default};
