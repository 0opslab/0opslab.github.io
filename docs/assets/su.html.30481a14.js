import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-f</span> \u6216 \u2013fast \u4E0D\u5FC5\u8BFB\u542F\u52A8\u6863\uFF08\u5982 csh.cshrc \u7B49\uFF09\uFF0C\u4EC5\u7528\u4E8E csh \u6216 tcsh
<span class="token parameter variable">-m</span> <span class="token parameter variable">-p</span> \u6216 \u2013preserve-environment \u6267\u884C <span class="token function">su</span> \u65F6\u4E0D\u6539\u53D8\u73AF\u5883\u53D8\u6570
<span class="token parameter variable">-c</span> <span class="token builtin class-name">command</span> \u6216 \u2013command<span class="token operator">=</span>command \u53D8\u66F4\u4E3A\u5E10\u53F7\u4E3A <span class="token environment constant">USER</span> \u7684\u4F7F\u7528\u8005\u5E76\u6267\u884C\u6307\u4EE4\uFF08command\uFF09\u540E\u518D\u53D8\u56DE\u539F\u6765\u4F7F\u7528\u8005
<span class="token parameter variable">-s</span> shell \u6216 \u2013shell<span class="token operator">=</span>shell \u6307\u5B9A\u8981\u6267\u884C\u7684 shell \uFF08bash csh tcsh \u7B49\uFF09\uFF0C\u9884\u8BBE\u503C\u4E3A /etc/passwd \u5185\u7684\u8BE5\u4F7F\u7528\u8005\uFF08<span class="token environment constant">USER</span>\uFF09 shell
\u2013help \u663E\u793A\u8BF4\u660E\u6587\u4EF6
\u2013version \u663E\u793A\u7248\u672C\u8D44\u8BAF
\u2013 <span class="token parameter variable">-l</span> \u6216 \u2013login \u8FD9\u4E2A\u53C2\u6570\u52A0\u4E86\u4E4B\u540E\uFF0C\u5C31\u597D\u50CF\u662F\u91CD\u65B0 login \u4E3A\u8BE5\u4F7F\u7528\u8005\u4E00\u6837\uFF0C\u5927\u90E8\u4EFD\u73AF\u5883\u53D8\u6570\uFF08<span class="token environment constant">HOME</span> <span class="token environment constant">SHELL</span> <span class="token environment constant">USER</span>\u7B49\u7B49\uFF09
  \u90FD\u662F\u4EE5\u8BE5\u4F7F\u7528\u8005\uFF08<span class="token environment constant">USER</span>\uFF09\u4E3A\u4E3B\uFF0C\u5E76\u4E14\u5DE5\u4F5C\u76EE\u5F55\u4E5F\u4F1A\u6539\u53D8\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A <span class="token environment constant">USER</span> \uFF0C\u5185\u5B9A\u662F root
<span class="token environment constant">USER</span> \u6B32\u53D8\u66F4\u7684\u4F7F\u7528\u8005\u5E10\u53F7
ARG \u4F20\u5165\u65B0\u7684 shell \u53C2\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Switch to another user account</span>
<span class="token comment">#\u5207\u6362\u5230\u53E6\u4E00\u4E2A\u7528\u6237\u5E10\u6237</span>
<span class="token function">su</span> USERNAME

<span class="token comment">#\u5207\u6362\u5230\u53E6\u5916\u4E00\u4E2A\u8D26\u53F7\u5E76\u66F4\u65B0\u73AF\u5883\u53D8\u91CF\uFF08\u63A8\u8350\uFF09</span>
<span class="token function">su</span> - username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[l];function t(r,o){return s(),a("div",null,c)}const p=n(i,[["render",t],["__file","su.html.vue"]]);export{p as default};
