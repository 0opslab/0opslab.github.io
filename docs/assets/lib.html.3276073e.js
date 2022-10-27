import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Display available libraries</span>
<span class="token comment">#\u663E\u793A\u53EF\u7528\u7684\u5E93</span>
ldconfig <span class="token parameter variable">-p</span>

<span class="token comment"># Update library resources</span>
<span class="token comment">#\u66F4\u65B0\u5E93\u8D44\u6E90</span>
ldconfig

<span class="token comment"># Display libraries and file location</span>
<span class="token comment">#\u663E\u793A\u5E93\u548C\u6587\u4EF6\u4F4D\u7F6E</span>
ldd

<span class="token comment"># Libraries available to apps in real-time</span>
<span class="token comment">#\u5E94\u7528\u7A0B\u5E8F\u5B9E\u65F6\u53EF\u7528\u7684\u5E93</span>
<span class="token string">&quot;Dynamic Libraries&quot;</span> <span class="token punctuation">(</span>.so.<span class="token punctuation">)</span>

<span class="token comment"># Libraries only available to apps when installed (imported)</span>
<span class="token comment">#\u5E93\u4EC5\u5728\u5B89\u88C5\uFF08\u5BFC\u5165\uFF09\u65F6\u53EF\u7528\u4E8E\u5E94\u7528\u7A0B\u5E8F</span>
<span class="token string">&quot;Static Libraries&quot;</span> <span class="token punctuation">(</span>.a.<span class="token punctuation">)</span>

<span class="token comment"># Standard (usual) library file location</span>
<span class="token comment">#\u6807\u51C6\uFF08\u901A\u5E38\uFF09\u5E93\u6587\u4EF6\u4F4D\u7F6E</span>
/lib

<span class="token comment"># Sofware-accessible source for library info </span>
<span class="token comment">#\u8F6F\u4EF6\u53EF\u8BBF\u95EE\u7684\u5E93\u4FE1\u606F\u6E90</span>
/etc/ld.so.cache 	<span class="token comment"># (binary)</span>

<span class="token comment"># Human-readable source for library info</span>
<span class="token comment">#\u4EBA\u7C7B\u53EF\u8BFB\u7684\u56FE\u4E66\u9986\u4FE1\u606F\u6765\u6E90</span>
/etc/ld.so.conf 	<span class="token comment"># (points to /etc/ld.so.conf.d)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function t(o,d){return s(),a("div",null,c)}const m=n(i,[["render",t],["__file","lib.html.vue"]]);export{m as default};
