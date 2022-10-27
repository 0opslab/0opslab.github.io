import{_ as s,o as n,c as e,e as a}from"./app.a667bd71.js";const c={},o=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># List contents of RPM</span>
<span class="token comment">#\u5217\u51FARPM\u7684\u5185\u5BB9</span>
rpm2cpio foo.rpm <span class="token operator">|</span> cpio <span class="token parameter variable">-vt</span>

<span class="token comment"># Extract contents of RPM</span>
<span class="token comment">#\u63D0\u53D6RPM\u7684\u5185\u5BB9</span>
rpm2cpio foo.rpm <span class="token operator">|</span> cpio <span class="token parameter variable">-vid</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[o];function t(r,l){return n(),e("div",null,i)}const m=s(c,[["render",t],["__file","rpm2cpio.html.vue"]]);export{m as default};
