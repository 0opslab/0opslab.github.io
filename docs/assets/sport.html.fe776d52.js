import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Sync to newest SlackBuild.org tree</span>
<span class="token comment">#\u540C\u6B65\u5230\u6700\u65B0\u7684SlackBuild.org\u6811</span>
sport r

<span class="token comment"># Search (fuzzy) SlackBuild tree for packages foo and BaR</span>
<span class="token comment">#\u641C\u7D22\uFF08\u6A21\u7CCA\uFF09SlackBuild\u6811\uFF0C\u7528\u4E8E\u5305foo\u548CBaR</span>
sport s foo bar

<span class="token comment"># Operate from alternate build tree</span>
<span class="token comment">#\u4ECE\u5907\u7528\u6784\u5EFA\u6811\u64CD\u4F5C</span>
<span class="token assign-left variable">SBOPATH</span><span class="token operator">=</span>/path/to/tree sport s foo

<span class="token comment"># View info and README of BaR (not fuzzy)</span>
<span class="token comment">#\u67E5\u770BBaR\u7684\u4FE1\u606F\u548C\u81EA\u8FF0\u6587\u4EF6\uFF08\u4E0D\u6A21\u7CCA\uFF09</span>
sport c foo BaR

<span class="token comment"># Build a package</span>
<span class="token comment">#\u5EFA\u7ACB\u4E00\u4E2A\u5305</span>
sport i --build-only foo

<span class="token comment"># Build and install package foo and BaR</span>
<span class="token comment">#\u6784\u5EFA\u5E76\u5B89\u88C5\u5305foo\u548CBaR</span>
sport i foo BaR

<span class="token comment"># Build and install package from current directory</span>
<span class="token comment">#\u4ECE\u5F53\u524D\u76EE\u5F55\u6784\u5EFA\u548C\u5B89\u88C5\u5305</span>
sport i <span class="token builtin class-name">.</span>

<span class="token comment"># Upgrade instead of install</span>
<span class="token comment">#\u5347\u7EA7\u800C\u4E0D\u662F\u5B89\u88C5</span>
<span class="token assign-left variable">INSTALLER</span><span class="token operator">=</span>upgradepkg sport i foo

<span class="token comment"># Build dependency list for baz</span>
<span class="token comment">#\u4E3Abaz\u6784\u5EFA\u4F9D\u8D56\u5217\u8868</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;foo BaR&quot;</span> <span class="token operator">&gt;&gt;</span> /tmp/baz.list

<span class="token comment"># Install list of packages from file</span>
<span class="token comment">#\u4ECE\u6587\u4EF6\u5B89\u88C5\u5305\u5217\u8868</span>
sport i <span class="token variable"><span class="token variable">$(</span><span class="token operator">&lt;</span> /tmp/baz.list<span class="token variable">)</span></span>

<span class="token comment"># Check if package is installed</span>
<span class="token comment">#\u68C0\u67E5\u662F\u5426\u5DF2\u5B89\u88C5\u5305</span>
sport k foo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function o(t,d){return s(),a("div",null,c)}const p=n(i,[["render",o],["__file","sport.html.vue"]]);export{p as default};
