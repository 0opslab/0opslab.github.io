import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},c=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To index recursively some paths for the very first run:</span>
<span class="token comment">#\u8981\u9012\u5F52\u7D22\u5F15\u7B2C\u4E00\u6B21\u8FD0\u884C\u7684\u67D0\u4E9B\u8DEF\u5F84\uFF1A</span>
scd <span class="token parameter variable">-ar</span> ~/Documents/

<span class="token comment"># To change to a directory path matching &quot;doc&quot;:</span>
<span class="token comment">#\u8981\u66F4\u6539\u4E3A\u4E0E\u201Cdoc\u201D\u5339\u914D\u7684\u76EE\u5F55\u8DEF\u5F84\uFF1A</span>
scd doc

<span class="token comment"># To change to a path matching all of &quot;a&quot;, &quot;b&quot; and &quot;c&quot;:</span>
<span class="token comment">#\u8981\u66F4\u6539\u4E3A\u5339\u914D\u6240\u6709\u201Ca\u201D\uFF0C\u201Cb\u201D\u548C\u201Cc\u201D\u7684\u8DEF\u5F84\uFF1A</span>
scd a b c

<span class="token comment"># To change to a directory path that ends with &quot;ts&quot;:</span>
<span class="token comment">#\u8981\u66F4\u6539\u4E3A\u4EE5\u201Cts\u201D\u7ED3\u5C3E\u7684\u76EE\u5F55\u8DEF\u5F84\uFF1A</span>
scd <span class="token string">&quot;ts$&quot;</span>

<span class="token comment"># To show selection menu and ranking of 20 most likely directories:</span>
<span class="token comment">#\u8981\u663E\u793A20\u4E2A\u6700\u53EF\u80FD\u76EE\u5F55\u7684\u9009\u62E9\u83DC\u5355\u548C\u6392\u540D\uFF1A</span>
scd <span class="token parameter variable">-v</span>

<span class="token comment"># To alias current directory as &quot;xray&quot;:</span>
<span class="token comment">#\u8981\u5C06\u5F53\u524D\u76EE\u5F55\u522B\u540D\u4E3A\u201Cxray\u201D\uFF1A</span>
scd <span class="token parameter variable">--alias</span><span class="token operator">=</span>xray

<span class="token comment"># To jump to a previously defined aliased directory:</span>
<span class="token comment">#\u8981\u8DF3\u8F6C\u5230\u5148\u524D\u5B9A\u4E49\u7684\u522B\u540D\u76EE\u5F55\uFF1A</span>
scd xray
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[c];function t(o,d){return s(),e("div",null,l)}const m=n(i,[["render",t],["__file","scd.html.vue"]]);export{m as default};
