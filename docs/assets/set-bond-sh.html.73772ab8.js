import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u7ED1\u5B9A\u53CC\u7F51\u5361\u7684\u4E00\u4E2A\u5C0F\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token comment"># examples:</span>
<span class="token comment"># sh -x set_bond.sh bond0 eth0 eht1 10.0.54.28</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token operator">!=</span> <span class="token number">4</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;USAGE: <span class="token variable">$0</span> bondname   eth1  eth2  IP &quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot; e.g.: <span class="token variable">$0</span> bond1 em3  em4  10.0.1.1&quot;</span>
<span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
 
 
<span class="token assign-left variable">bondname</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">card1</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">card2</span><span class="token operator">=</span><span class="token variable">$3</span>
<span class="token assign-left variable">IP</span><span class="token operator">=</span><span class="token variable">$4</span>
 
<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $IP <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;.&#39;</span> <span class="token string">&#39;{ print $1 &quot;.&quot; $2 &quot;.&quot; $3 &quot;.&quot; }&#39;</span><span class="token variable">\`</span></span><span class="token string">&#39;1&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token function">ip</span> address is <span class="token variable">$IP</span>
<span class="token builtin class-name">echo</span> netmask is <span class="token number">255.255</span>.255.0
<span class="token builtin class-name">echo</span> gateway is <span class="token variable">$GATEWAY</span>
<span class="token builtin class-name">echo</span> bondname is <span class="token variable">$bondname</span>
 
<span class="token builtin class-name">echo</span>   <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[42;33m  do you want to go on (Y|N)(NO and exit default): <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token builtin class-name">read</span> ANS
    <span class="token keyword">case</span> <span class="token variable">$ANS</span> <span class="token keyword">in</span>
    y<span class="token operator">|</span>Y<span class="token operator">|</span><span class="token function">yes</span><span class="token operator">|</span>Yes<span class="token operator">|</span>YES<span class="token punctuation">)</span>
       <span class="token punctuation">;</span><span class="token punctuation">;</span>
    n<span class="token operator">|</span>no<span class="token operator">|</span>No<span class="token operator">|</span>NO<span class="token operator">|</span>N<span class="token punctuation">)</span>
     <span class="token builtin class-name">exit</span> <span class="token number">1</span>
       <span class="token punctuation">;</span><span class="token punctuation">;</span>
     *<span class="token punctuation">)</span>
     <span class="token builtin class-name">echo</span> <span class="token string">&quot;exit becasuse you cancel it &quot;</span>
     <span class="token builtin class-name">exit</span> <span class="token number">1</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
     
<span class="token comment">#bond0 config</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;DEVICE=<span class="token variable">$bondname</span>&quot;</span> <span class="token operator">&gt;</span> /etc/sysconfig/network-scripts/ifcfg-<span class="token variable">$bondname</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;BOOTPROTO=none&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/sysconfig/network-scripts/ifcfg-<span class="token variable">$bondname</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;ONBOOT=yes&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/sysconfig/network-scripts/ifcfg-<span class="token variable">$bondname</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;IPADDR=<span class="token variable">$IP</span>&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/sysconfig/network-scripts/ifcfg-<span class="token variable">$bondname</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;NETMASK=255.255.255.0&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/sysconfig/network-scripts/ifcfg-<span class="token variable">$bondname</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;GATEWAY=<span class="token variable">$GATEWAY</span>&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/sysconfig/network-scripts/ifcfg-<span class="token variable">$bondname</span>
 
 
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/sysconfig/network-scripts/ifcfg-<span class="token variable">$card1</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
BOOTPROTO=none
DEVICE=<span class="token variable">$card1</span>
ONBOOT=yes
MASTER=<span class="token variable">$bondname</span>
SLAVE=yes
EOF</span>
 
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/sysconfig/network-scripts/ifcfg-<span class="token variable">$card2</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
BOOTPROTO=none
DEVICE=<span class="token variable">$card2</span>
ONBOOT=yes
MASTER=<span class="token variable">$bondname</span>
SLAVE=yes
EOF</span>
     
     
     
<span class="token comment">#modprobe config</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;alias <span class="token variable">$bondname</span> bonding&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/modprobe.d/bonding.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;options <span class="token variable">$bondname</span> miimon=100 mode=4&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/modprobe.d/bonding.conf
modprobe bonding

<span class="token comment"># restart network interface</span>
<span class="token comment"># /etc/init.d/network  restart</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function o(c,p){return n(),a("div",null,t)}const d=s(i,[["render",o],["__file","set-bond-sh.html.vue"]]);export{d as default};
