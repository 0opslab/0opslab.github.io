import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const t={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u914D\u7F6E\u81EA\u52A8\u83B7\u53D6ip\u5730\u5740</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token assign-left variable">ROUTE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>route -n<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;^0.0.0.0&quot;</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>

<span class="token assign-left variable">BROADCAST</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>/sbin/ifconfig eth0<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-i</span> bcast<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span><span class="token operator">|</span><span class="token function">awk</span> -F<span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>

<span class="token assign-left variable">HWADDR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>/sbin/ifconfig eth0<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-i</span> HWaddr<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $5}&#39;</span><span class="token variable">)</span></span>

<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>/sbin/ifconfig eth0<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;inet addr&quot;</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token operator">|</span><span class="token function">awk</span> -F<span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>

<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>/sbin/ifconfig eth0<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;inet addr&quot;</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $4}&#39;</span><span class="token operator">|</span><span class="token function">awk</span> -F<span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>

<span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/sysconfig/network-scripts/ifcfg-eth<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span><span class="token operator">&lt;</span><span class="token string">EOF
DEVICE=eth0
BOOTPROTO=static
BROADCAST=<span class="token variable">$BROADCAST</span>
HWADDR=<span class="token variable">$HWADDR</span>
IPADDR=<span class="token variable">$IPADDR</span>
NETMASK=<span class="token variable">$NETMASK</span>
GATEWAY=<span class="token variable">$ROUTE</span>
ONBOOT=yes
EOF</span>

<span class="token comment">#IPADDR1=$(echo $IPADDR|awk -F&quot;.&quot; &#39;{print $4}&#39;)</span>
<span class="token comment">#cat &gt;/etc/sysconfig/network-scripts/ifcfg-eth1&lt;&lt;EOF</span>
<span class="token comment">#DEVICE=eth1</span>
<span class="token comment">#BOOTPROTO=static</span>
<span class="token comment">#BROADCAST=10.0.0.255</span>
<span class="token comment">#HWADDR=$(/sbin/ifconfig eth1|grep -i HWaddr|awk &#39;{print $5}&#39;)</span>
<span class="token comment">#IPADDR=10.0.0.$IPADDR1</span>
<span class="token comment">#NETMASK=255.255.255.0</span>
<span class="token comment">#ONBOOT=yes</span>
<span class="token comment">#EOF</span>

<span class="token assign-left variable"><span class="token environment constant">HOSTNAME</span></span><span class="token operator">=</span>ops_ljohn_<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $IPADDR<span class="token operator">|</span><span class="token function">awk</span> -F<span class="token string">&quot;.&quot;</span> <span class="token string">&#39;{print $4}&#39;</span><span class="token variable">)</span></span>

<span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/sysconfig/network<span class="token operator">&lt;&lt;</span><span class="token string">EOF
NETWORKING=yes
NETWORKING_IPV6=no
HOSTNAME=<span class="token environment constant">$HOSTNAME</span>
GATEWAY=<span class="token variable">$ROUTE</span>
EOF</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;127.0.0.1  <span class="token environment constant">$HOSTNAME</span>&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts

<span class="token assign-left variable">hostname</span><span class="token operator">=</span><span class="token environment constant">$HOSTNAME</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;nameserver  8.8.8.8&quot;</span>  <span class="token operator">&gt;</span> /etc/resolv.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;nameserver  8.8.4.4&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/resolv.conf


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[i];function p(o,c){return n(),a("div",null,l)}const v=s(t,[["render",p],["__file","linux-autoip-sh.html.vue"]]);export{v as default};
