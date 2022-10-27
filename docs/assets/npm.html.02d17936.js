import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const c={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Every command shown here can be used with the \`-g\` switch for global scope</span>
<span class="token comment">#\u6B64\u5904\u663E\u793A\u7684\u6BCF\u4E2A\u547D\u4EE4\u90FD\u53EF\u4EE5\u4E0E\`-g\`\u5F00\u5173\u4E00\u8D77\u7528\u4E8E\u5168\u5C40\u8303\u56F4</span>

<span class="token comment"># Install a package in the current directory</span>
<span class="token comment">#\u5728\u5F53\u524D\u76EE\u5F55\u4E2D\u5B89\u88C5\u5305</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>

<span class="token comment"># Install a package, and save it in the \`dependencies\` section of \`package.json\`</span>
<span class="token comment">#\u5B89\u88C5\u4E00\u4E2A\u5305\uFF0C\u5E76\u5C06\u5176\u4FDD\u5B58\u5728\`package.json\`\u7684\`dependencies\`\u90E8\u5206</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>

<span class="token comment"># Install a package, and save it in the \`devDependencies\` section of \`package.json\`</span>
<span class="token comment">#\u5B89\u88C5\u4E00\u4E2A\u5305\uFF0C\u5E76\u5C06\u5176\u4FDD\u5B58\u5728\`package.json\`\u7684\`devDependencies\`\u90E8\u5206</span>
<span class="token function">npm</span> <span class="token function">install</span> --save-dev <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>

<span class="token comment"># Show outdated packages in the current directory</span>
<span class="token comment">#\u5728\u5F53\u524D\u76EE\u5F55\u4E2D\u663E\u793A\u8FC7\u65F6\u7684\u5305</span>
<span class="token function">npm</span> outdated

<span class="token comment"># Update outdated packages</span>
<span class="token comment">#\u66F4\u65B0\u8FC7\u65F6\u7684\u8F6F\u4EF6\u5305</span>
<span class="token function">npm</span> update

<span class="token comment"># Update \`npm\` (will override the one shipped with Node.js)</span>
<span class="token comment">#\u66F4\u65B0\`npm\`\uFF08\u5C06\u8986\u76D6Node.js\u9644\u5E26\u7684\u90A3\u4E2A\uFF09</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">npm</span>

<span class="token comment"># Uninstall a package</span>
<span class="token comment">#\u5378\u8F7D\u8F6F\u4EF6\u5305</span>
<span class="token function">npm</span> uninstall <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[i];function t(p,o){return s(),a("div",null,l)}const m=n(c,[["render",t],["__file","npm.html.vue"]]);export{m as default};
