import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const c={},t=e(`<p>DNSmasq\u662F\u4E00\u4E2A\u5C0F\u5DE7\u4E14\u65B9\u4FBF\u5730\u7528\u4E8E\u914D\u7F6EDNS\u548CDHCP\u7684\u5DE5\u5177\uFF0C\u9002\u7528\u4E8E\u5C0F\u578B\u7F51\u7EDC\uFF0C\u5B83\u63D0\u4F9B\u4E86DNS\u529F\u80FD\u548C\u53EF\u9009\u62E9\u7684DHCP\u529F\u80FD\u3002 \u5B83\u670D\u52A1\u90A3\u4E9B\u53EA\u5728\u672C\u5730\u9002\u7528\u7684\u57DF\u540D\uFF0C\u8FD9\u4E9B\u57DF\u540D\u662F\u4E0D\u4F1A\u5728\u5168\u7403\u7684DNS\u670D\u52A1\u5668\u4E2D\u51FA\u73B0\u7684\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>


yum <span class="token function">install</span> dnsmasq <span class="token parameter variable">-y</span>
<span class="token function">cp</span> /etc/resolv.conf /etc/resolv.dnsmasq.conf
<span class="token function">cp</span> /etc/hosts /etc/dnsmasq.hosts
<span class="token builtin class-name">echo</span> <span class="token string">&#39;nameserver 127.0.0.1&#39;</span> <span class="token operator">&gt;</span> /etc/resolv.conf
<span class="token builtin class-name">echo</span> <span class="token string">&#39;resolv-file=/etc/resolv.dnsmasq.conf&#39;</span> <span class="token operator">&gt;&gt;</span> /etc/dnsmasq.conf
<span class="token builtin class-name">echo</span> <span class="token string">&#39;addn-hosts=/etc/dnsmasq.hosts&#39;</span> <span class="token operator">&gt;&gt;</span> /etc/dnsmasq.conf

<span class="token function">service</span> dnsmasq restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[t];function l(o,r){return n(),a("div",null,i)}const p=s(c,[["render",l],["__file","dnsmasq.html.vue"]]);export{p as default};
