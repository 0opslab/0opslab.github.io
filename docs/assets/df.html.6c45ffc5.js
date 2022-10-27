import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<h3 id="\u5E38\u7528\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u53C2\u6570" aria-hidden="true">#</a> \u5E38\u7528\u53C2\u6570</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u6587\u4EF6-a, <span class="token parameter variable">--all</span> \u5305\u542B\u6240\u6709\u7684\u5177\u6709 <span class="token number">0</span> Blocks \u7684\u6587\u4EF6\u7CFB\u7EDF
\u6587\u4EF6--block-size<span class="token operator">=</span><span class="token punctuation">{</span>SIZE<span class="token punctuation">}</span> \u4F7F\u7528 <span class="token punctuation">{</span>SIZE<span class="token punctuation">}</span> \u5927\u5C0F\u7684 Blocks
\u6587\u4EF6-h, --human-readable \u4F7F\u7528\u4EBA\u7C7B\u53EF\u8BFB\u7684\u683C\u5F0F<span class="token punctuation">(</span>\u9884\u8BBE\u503C\u662F\u4E0D\u52A0\u8FD9\u4E2A\u9009\u9879\u7684<span class="token punctuation">..</span>.<span class="token punctuation">)</span>
\u6587\u4EF6-H, <span class="token parameter variable">--si</span> \u5F88\u50CF -h, \u4F46\u662F\u7528 <span class="token number">1000</span> \u4E3A\u5355\u4F4D\u800C\u4E0D\u662F\u7528 <span class="token number">1024</span>
\u6587\u4EF6-i, <span class="token parameter variable">--inodes</span> \u5217\u51FA inode \u8D44\u8BAF\uFF0C\u4E0D\u5217\u51FA\u5DF2\u4F7F\u7528 block
\u6587\u4EF6-k, <span class="token parameter variable">--kilobytes</span> \u5C31\u50CF\u662F --block-size<span class="token operator">=</span><span class="token number">1024</span>
\u6587\u4EF6-l, <span class="token parameter variable">--local</span> \u9650\u5236\u5217\u51FA\u7684\u6587\u4EF6\u7ED3\u6784
\u6587\u4EF6-m, <span class="token parameter variable">--megabytes</span> \u5C31\u50CF --block-size<span class="token operator">=</span><span class="token number">1048576</span>
\u6587\u4EF6--no-sync \u53D6\u5F97\u8D44\u8BAF\u524D\u4E0D <span class="token function">sync</span> <span class="token punctuation">(</span>\u9884\u8BBE\u503C<span class="token punctuation">)</span>
\u6587\u4EF6-P, <span class="token parameter variable">--portability</span> \u4F7F\u7528 POSIX \u8F93\u51FA\u683C\u5F0F
\u6587\u4EF6--sync \u5728\u53D6\u5F97\u8D44\u8BAF\u524D <span class="token function">sync</span>
\u6587\u4EF6-t, <span class="token parameter variable">--type</span><span class="token operator">=</span>TYPE \u9650\u5236\u5217\u51FA\u6587\u4EF6\u7CFB\u7EDF\u7684 TYPE
\u6587\u4EF6-T, --print-type \u663E\u793A\u6587\u4EF6\u7CFB\u7EDF\u7684\u5F62\u5F0F
\u6587\u4EF6-x, --exclude-type<span class="token operator">=</span>TYPE \u9650\u5236\u5217\u51FA\u6587\u4EF6\u7CFB\u7EDF\u4E0D\u8981\u663E\u793A TYPE
\u6587\u4EF6-v <span class="token punctuation">(</span>\u5FFD\u7565<span class="token punctuation">)</span>
\u6587\u4EF6--help \u663E\u793A\u8FD9\u4E2A\u5E2E\u624B\u5E76\u4E14\u79BB\u5F00
\u6587\u4EF6--version \u8F93\u51FA\u7248\u672C\u8D44\u8BAF\u5E76\u4E14\u79BB\u5F00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Printout disk free space in a human readable format</span>
<span class="token comment">#\u4EE5\u4EBA\u7C7B\u53EF\u8BFB\u683C\u5F0F\u6253\u5370\u51FA\u78C1\u76D8\u53EF\u7528\u7A7A\u95F4</span>
<span class="token function">df</span> <span class="token parameter variable">-h</span>

<span class="token comment">#-i\u9009\u9879\u7684df\u547D\u4EE4\u7684\u8F93\u51FA\u663E\u793Ainode\u4FE1\u606F\u800C\u975E\u5757\u4F7F\u7528\u91CF</span>
<span class="token function">df</span> <span class="token parameter variable">-i</span> 

<span class="token comment">#\u663E\u793A\u6240\u6709\u7684\u4FE1\u606F</span>
<span class="token function">df</span> <span class="token parameter variable">--total</span> 

<span class="token comment"># \u6700\u5E38\u7528\u7684\u4E00\u79CD\u65B9\u5F0F</span>
<span class="token function">df</span> <span class="token parameter variable">-hT</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[l];function t(p,r){return s(),a("div",null,c)}const d=n(i,[["render",t],["__file","df.html.vue"]]);export{d as default};
