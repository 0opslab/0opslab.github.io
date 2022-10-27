import{_ as a,o as s,c as e,e as n}from"./app.a667bd71.js";const l={},i=n(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-P</span> \u6307\u5B9A\u7236\u8FDB\u7A0B\u53F7\u53D1\u9001\u4FE1\u53F7
<span class="token parameter variable">-g</span> \u6307\u5B9A\u8FDB\u7A0B\u7EC4
<span class="token parameter variable">-t</span> \u6307\u5B9A\u5F00\u542F\u8FDB\u7A0B\u7684\u7EC8\u7AEF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To kill a process using it&#39;s full process name</span>
<span class="token comment">#\u4F7F\u7528\u5B83\u7684\u5B8C\u6574\u8FDB\u7A0B\u540D\u79F0\u6765\u7EC8\u6B62\u8FDB\u7A0B</span>
<span class="token function">pkill</span> <span class="token operator">&lt;</span>processname<span class="token operator">&gt;</span>

<span class="token comment"># To kill a process by it&#39;s partial name</span>
<span class="token comment">#\u901A\u8FC7\u5B83\u7684\u90E8\u5206\u540D\u79F0\u6765\u6740\u6B7B\u8FDB\u7A0B</span>
<span class="token function">pkill</span> <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[i];function c(t,o){return s(),e("div",null,r)}const p=a(l,[["render",c],["__file","pkill.html.vue"]]);export{p as default};
