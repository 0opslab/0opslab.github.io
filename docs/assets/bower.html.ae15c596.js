import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},o=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Install a package locally</span>
<span class="token comment">#\u5728\u672C\u5730\u5B89\u88C5\u5305</span>
bower <span class="token function">install</span> <span class="token operator">&lt;</span>package-name<span class="token operator">&gt;</span>

<span class="token comment"># Install a package locally directly from github</span>
<span class="token comment">#\u76F4\u63A5\u4ECEgithub\u672C\u5730\u5B89\u88C5\u5305</span>
bower <span class="token function">install</span> <span class="token operator">&lt;</span>user<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>repo<span class="token operator">&gt;</span>

<span class="token comment"># Install a specific package locally</span>
<span class="token comment">#\u5728\u672C\u5730\u5B89\u88C5\u7279\u5B9A\u5305</span>
bower <span class="token function">install</span> <span class="token operator">&lt;</span>package-name<span class="token operator">&gt;</span><span class="token comment">#&lt;version&gt;</span>

<span class="token comment"># Install a package locally and save installed package into bower.json</span>
<span class="token comment">#\u5728\u672C\u5730\u5B89\u88C5\u8F6F\u4EF6\u5305\u5E76\u5C06\u5DF2\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305\u4FDD\u5B58\u5230bower.json\u4E2D</span>
bower <span class="token function">install</span> <span class="token operator">&lt;</span>package-name<span class="token operator">&gt;</span> <span class="token parameter variable">--save</span>

<span class="token comment"># Retrieve info of a particular package</span>
<span class="token comment">#\u68C0\u7D22\u7279\u5B9A\u5305\u7684\u4FE1\u606F</span>
bower info <span class="token operator">&lt;</span>package-name<span class="token operator">&gt;</span>

<span class="token comment"># List local packages</span>
<span class="token comment">#\u5217\u51FA\u672C\u5730\u5305</span>
bower list

<span class="token comment"># Search for a package by name</span>
<span class="token comment">#\u6309\u540D\u79F0\u641C\u7D22\u5305</span>
bower search <span class="token operator">&lt;</span>package-name<span class="token operator">&gt;</span>

<span class="token comment"># Update a package to their newest version</span>
<span class="token comment">#\u5C06\u8F6F\u4EF6\u5305\u66F4\u65B0\u5230\u6700\u65B0\u7248\u672C</span>
bower update <span class="token operator">&lt;</span>package-name<span class="token operator">&gt;</span>

<span class="token comment"># Remove a local package</span>
<span class="token comment">#\u5220\u9664\u672C\u5730\u5305</span>
bower uninstall <span class="token operator">&lt;</span>package-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[o];function t(i,p){return s(),a("div",null,c)}const m=n(l,[["render",t],["__file","bower.html.vue"]]);export{m as default};
