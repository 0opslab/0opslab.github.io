import{_ as n,o as e,c as s,e as a}from"./app.a667bd71.js";const i={},d=a(`<h3 id="\u5E38\u7528\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u53C2\u6570" aria-hidden="true">#</a> \u5E38\u7528\u53C2\u6570</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">0</span>\uFF1A\u6307\u5B9Adhcp\u5BA2\u6237\u7AEF\u76D1\u542C\u7684\u7AEF\u53E3\u53F7\uFF1B
-d\uFF1A\u603B\u662F\u4EE5\u524D\u53F0\u65B9\u5F0F\u8FD0\u884C\u7A0B\u5E8F\uFF1B
-q\uFF1A\u5B89\u9759\u6A21\u5F0F\uFF0C\u4E0D\u6253\u5370\u4EFB\u4F55\u9519\u8BEF\u7684\u63D0\u793A\u4FE1\u606F\uFF1B
-r\uFF1A\u91CA\u653Eip\u5730\u5740\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To release the current IP address:</span>
<span class="token comment">#\u8981\u91CA\u653E\u5F53\u524D\u7684IP\u5730\u5740\uFF1A</span>
<span class="token function">sudo</span> dhclient <span class="token parameter variable">-r</span>

<span class="token comment"># To obtain a new IP address:</span>
<span class="token comment">#\u8981\u83B7\u53D6\u65B0\u7684IP\u5730\u5740\uFF1A</span>
<span class="token function">sudo</span> dhclient

<span class="token comment"># Running the above in sequence is a common way of refreshing an IP.</span>
<span class="token comment">#\u6309\u987A\u5E8F\u8FD0\u884C\u4E0A\u8FF0\u5185\u5BB9\u662F\u5237\u65B0IP\u7684\u5E38\u7528\u65B9\u6CD5\u3002</span>

<span class="token comment"># To obtain a new IP address for a specific interface:</span>
<span class="token comment">#\u8981\u83B7\u53D6\u7279\u5B9A\u63A5\u53E3\u7684\u65B0IP\u5730\u5740\uFF0C\u8BF7\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</span>
<span class="token function">sudo</span> dhclient eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[d];function l(r,t){return e(),s("div",null,c)}const m=n(i,[["render",l],["__file","dhclient.html.vue"]]);export{m as default};
