import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<h3 id="\u5E38\u7528\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u9009\u9879" aria-hidden="true">#</a> \u5E38\u7528\u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-n<span class="token operator">&lt;</span>\u6570\u5B57<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u663E\u793A\u5934\u90E8\u5185\u5BB9\u7684\u884C\u6570\uFF1B
-c<span class="token operator">&lt;</span>\u5B57\u7B26\u6570<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u663E\u793A\u5934\u90E8\u5185\u5BB9\u7684\u5B57\u7B26\u6570\uFF1B
-v\uFF1A\u603B\u662F\u663E\u793A\u6587\u4EF6\u540D\u7684\u5934\u4FE1\u606F\uFF1B
-q\uFF1A\u4E0D\u663E\u793A\u6587\u4EF6\u540D\u7684\u5934\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To show the first 10 lines of file</span>
<span class="token comment">#\u663E\u793A\u524D10\u884C\u6587\u4EF6</span>
<span class="token function">head</span> <span class="token function">file</span>

<span class="token comment"># To show the first N lines of file</span>
<span class="token comment">#\u663E\u793A\u524DN\u884C\u6587\u4EF6</span>
<span class="token function">head</span> <span class="token parameter variable">-n</span> N <span class="token function">file</span>

<span class="token comment"># To show the first N bytes of file</span>
<span class="token comment">#\u663E\u793A\u6587\u4EF6\u7684\u524DN\u4E2A\u5B57\u8282</span>
<span class="token function">head</span> <span class="token parameter variable">-c</span> N <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[l];function t(o,d){return s(),e("div",null,c)}const p=n(i,[["render",t],["__file","head.html.vue"]]);export{p as default};
