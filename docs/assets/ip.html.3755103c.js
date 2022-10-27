import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<h3 id="\u5E38\u7528\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u53C2\u6570" aria-hidden="true">#</a> \u5E38\u7528\u53C2\u6570</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-V\uFF1A\u663E\u793A\u6307\u4EE4\u7248\u672C\u4FE1\u606F\uFF1B
-s\uFF1A\u8F93\u51FA\u66F4\u8BE6\u7EC6\u7684\u4FE1\u606F\uFF1B
-f\uFF1A\u5F3A\u5236\u4F7F\u7528\u6307\u5B9A\u7684\u534F\u8BAE\u65CF\uFF1B
-4\uFF1A\u6307\u5B9A\u4F7F\u7528\u7684\u7F51\u7EDC\u5C42\u534F\u8BAE\u662FIPv4\u534F\u8BAE\uFF1B
-6\uFF1A\u6307\u5B9A\u4F7F\u7528\u7684\u7F51\u7EDC\u5C42\u534F\u8BAE\u662FIPv6\u534F\u8BAE\uFF1B
-0\uFF1A\u8F93\u51FA\u4FE1\u606F\u6BCF\u6761\u8BB0\u5F55\u8F93\u51FA\u4E00\u884C\uFF0C\u5373\u4F7F\u5185\u5BB9\u8F83\u591A\u4E5F\u4E0D\u6362\u884C\u663E\u793A\uFF1B
-r\uFF1A\u663E\u793A\u4E3B\u673A\u65F6\uFF0C\u4E0D\u4F7F\u7528IP\u5730\u5740\uFF0C\u800C\u4F7F\u7528\u4E3B\u673A\u7684\u57DF\u540D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Display all interfaces with addresses</span>
<span class="token comment">#\u663E\u793A\u6240\u6709\u5E26\u5730\u5740\u7684\u63A5\u53E3</span>
<span class="token function">ip</span> addr

<span class="token comment"># Take down / up the wireless adapter</span>
<span class="token comment">#\u53D6\u4E0B/\u5347\u8D77\u65E0\u7EBF\u9002\u914D\u5668</span>
<span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> dev wlan0 <span class="token punctuation">{</span>up<span class="token operator">|</span>down<span class="token punctuation">}</span>

<span class="token comment"># Set a static IP and netmask</span>
<span class="token comment">#\u8BBE\u7F6E\u9759\u6001IP\u548C\u7F51\u7EDC\u63A9\u7801</span>
<span class="token function">ip</span> addr <span class="token function">add</span> <span class="token number">192.168</span>.1.100/32 dev eth0

<span class="token comment"># Remove a IP from an interface</span>
<span class="token comment">#\u4ECE\u63A5\u53E3\u4E2D\u5220\u9664IP</span>
<span class="token function">ip</span> addr del <span class="token number">192.168</span>.1.100/32 dev eth0

<span class="token comment"># Remove all IPs from an interface</span>
<span class="token comment">#\u4ECE\u754C\u9762\u4E2D\u5220\u9664\u6240\u6709IP</span>
<span class="token function">ip</span> address flush dev eth0

<span class="token comment"># Display all routes</span>
<span class="token comment">#\u663E\u793A\u6240\u6709\u8DEF\u7EBF</span>
<span class="token function">ip</span> route

<span class="token comment"># Display all routes for IPv6</span>
<span class="token comment">#\u663E\u793AIPv6\u7684\u6240\u6709\u8DEF\u7531</span>
<span class="token function">ip</span> <span class="token parameter variable">-6</span> route

<span class="token comment"># Add default route via gateway IP</span>
<span class="token comment">#\u901A\u8FC7\u7F51\u5173IP\u6DFB\u52A0\u9ED8\u8BA4\u8DEF\u7531</span>
<span class="token function">ip</span> route <span class="token function">add</span> default via <span class="token number">192.168</span>.1.1

<span class="token comment"># Add route via interface</span>
<span class="token comment">#\u901A\u8FC7\u754C\u9762\u6DFB\u52A0\u8DEF\u7531</span>
<span class="token function">ip</span> route <span class="token function">add</span> <span class="token number">192.168</span>.0.0/24 dev eth0

<span class="token comment"># Change your mac address </span>
<span class="token comment">#\u66F4\u6539\u60A8\u7684Mac\u5730\u5740</span>
<span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> dev eth0 address aa:bb:cc:dd:ee:ff

<span class="token comment"># View neighbors (using ARP and NDP) </span>
<span class="token comment">#\u67E5\u770B\u90BB\u5C45\uFF08\u4F7F\u7528ARP\u548CNDP\uFF09</span>
<span class="token function">ip</span> neighbor show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[l];function d(t,o){return s(),a("div",null,c)}const v=n(i,[["render",d],["__file","ip.html.vue"]]);export{v as default};
