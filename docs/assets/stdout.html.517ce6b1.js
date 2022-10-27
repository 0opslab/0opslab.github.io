import{_ as s,o as e,c as n,e as t}from"./app.a667bd71.js";const a={},o=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To redirect stderr to stdout:</span>
<span class="token comment">#\u8981\u5C06stderr\u91CD\u5B9A\u5411\u5230stdout\uFF1A</span>
some-command <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>

<span class="token comment"># To redirect stderr to a file</span>
<span class="token comment">#\u5C06stderr\u91CD\u5B9A\u5411\u5230\u6587\u4EF6</span>
some-command <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> errors.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),r=[o];function c(i,d){return e(),n("div",null,r)}const m=s(a,[["render",c],["__file","stdout.html.vue"]]);export{m as default};
