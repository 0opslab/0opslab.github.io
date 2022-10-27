import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Install a package</span>
<span class="token comment">#\u5B89\u88C5\u5305</span>
apk <span class="token function">add</span> <span class="token variable">$package</span>

<span class="token comment"># Remove a package</span>
<span class="token comment">#\u5220\u9664\u5305</span>
apk del <span class="token variable">$package</span>

<span class="token comment"># Update repos</span>
<span class="token comment">#\u66F4\u65B0\u56DE\u8D2D</span>
apk update

<span class="token comment"># Upgrade all packages</span>
<span class="token comment">#\u5347\u7EA7\u6240\u6709\u5305</span>
apk upgrade

<span class="token comment"># Find a package</span>
<span class="token comment">#\u627E\u4E00\u4E2A\u5305</span>
apk search <span class="token variable">$package</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function d(p,t){return s(),a("div",null,c)}const v=n(i,[["render",d],["__file","apk.html.vue"]]);export{v as default};
