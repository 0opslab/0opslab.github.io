import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const c={},i=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Get info about block device</span>
<span class="token comment">#\u83B7\u53D6\u6709\u5173\u5757\u8BBE\u5907\u7684\u4FE1\u606F</span>
udisksctl info <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>block_device<span class="token operator">&gt;</span>

<span class="token comment"># Mounting device </span>
<span class="token comment">#\u5B89\u88C5\u88C5\u7F6E</span>
udisksctl <span class="token function">mount</span> --block-device <span class="token operator">&lt;</span>block_device<span class="token operator">&gt;</span>

<span class="token comment"># Unmounting device </span>
<span class="token comment">#\u5378\u8F7D\u8BBE\u5907</span>
udisksctl unmount --block-device <span class="token operator">&lt;</span>block_device<span class="token operator">&gt;</span>

<span class="token comment"># Get help </span>
<span class="token comment">#\u5F97\u5230\u5E2E\u52A9</span>
udisksctl <span class="token builtin class-name">help</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[i];function t(o,d){return s(),e("div",null,l)}const r=n(c,[["render",t],["__file","udisksctl.html.vue"]]);export{r as default};
