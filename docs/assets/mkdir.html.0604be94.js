import{_ as a,o as n,c as s,e}from"./app.a667bd71.js";const i={},o=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-p</span> \u786E\u4FDD\u76EE\u5F55\u540D\u79F0\u5B58\u5728\uFF0C\u4E0D\u5B58\u5728\u7684\u5C31\u5EFA\u4E00\u4E2A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Create a directory and all its parents</span>
<span class="token comment">#\u521B\u5EFA\u4E00\u4E2A\u76EE\u5F55\u53CA\u5176\u6240\u6709\u7236\u76EE\u5F55</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> foo/bar/baz

<span class="token comment"># Create foo/bar and foo/baz directories</span>
<span class="token comment">#\u521B\u5EFAfoo / bar\u548Cfoo / baz\u76EE\u5F55</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> foo/<span class="token punctuation">{</span>bar,baz<span class="token punctuation">}</span>

<span class="token comment"># Create the foo/bar, foo/baz, foo/baz/zip and foo/baz/zap directories</span>
<span class="token comment">#\u521B\u5EFAfoo / bar\uFF0Cfoo / baz\uFF0Cfoo / baz / zip\u548Cfoo / baz / zap\u76EE\u5F55</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> foo/<span class="token punctuation">{</span>bar,baz/<span class="token punctuation">{</span>zip,zap<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[o];function c(r,l){return n(),s("div",null,t)}const p=a(i,[["render",c],["__file","mkdir.html.vue"]]);export{p as default};
