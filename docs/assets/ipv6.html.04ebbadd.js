import{_ as n,o as s,c as e,e as i}from"./app.a667bd71.js";const a={},l=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>


<span class="token comment"># /etc/sysctl.conf</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;NETWORKING_IPV6=no&quot;</span><span class="token operator">&gt;&gt;</span>/etc/sysconfig/network

<span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">&gt;</span> /proc/sys/net/ipv6/conf/all/disable_ipv6
<span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">&gt;</span> /proc/sys/net/ipv6/conf/default/disable_ipv6

<span class="token comment"># /etc/sysctl.conf</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/sysctl.conf<span class="token operator">&lt;&lt;</span><span class="token string">EOF
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv4.tcp_syn_retries = 1
net.ipv4.tcp_synack_retries = 1
net.ipv4.tcp_keepalive_time = 600
net.ipv4.tcp_keepalive_probes = 3
net.ipv4.tcp_keepalive_intvl =15
net.ipv4.tcp_retries2 = 5
net.ipv4.tcp_fin_timeout = 5
net.ipv4.tcp_max_tw_buckets = 60000
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_max_orphans = 32768
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_max_syn_backlog = 16384
net.ipv4.tcp_wmem = 51200 131072 204800
net.ipv4.tcp_rmem = 51200 131072 204800
net.ipv4.ip_local_port_range = 1024 65000
net.core.somaxconn = 16384
net.core.netdev_max_backlog = 16384
vm.overcommit_memory = 1
net.nf_conntrack_max = 6553500
net.netfilter.nf_conntrack_max = 6553500
net.netfilter.nf_conntrack_tcp_timeout_established = 180
EOF</span>

<span class="token function">sysctl</span> <span class="token parameter variable">-p</span>

<span class="token comment">##SSH</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/ssh/sshd_config<span class="token operator">&lt;&lt;</span><span class="token string">EOF
Port 22
AddressFamily inet
ListenAddress 0.0.0.0
Protocol 2
SyslogFacility AUTHPRIV
PermitRootLogin yes
MaxAuthTries 6
RSAAuthentication yes
PubkeyAuthentication yes
AuthorizedKeysFile	.ssh/authorized_keys
PasswordAuthentication yes
PermitEmptyPasswords no
UsePAM yes
UseDNS no
X11Forwarding yes
Subsystem       sftp    /usr/libexec/openssh/sftp-server
EOF</span>

<span class="token function">service</span> sshd restart

<span class="token comment">#sed -i &#39;s/IPV6INIT=yes/IPV6INIT=no/g&#39; /etc/sysconfig/network-scripts/ifcfg-eth0</span>
<span class="token comment">#sed -i &#39;s/IPV6INIT=yes/IPV6INIT=no/g&#39; /etc/sysconfig/network-scripts/ifcfg-eth1</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span>  /etc/sysconfig/network-scripts/ifcfg-eth<span class="token variable">$i</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
        <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/IPV6INIT=yes/IPV6INIT=no/g&#39;</span> /etc/sysconfig/network-scripts/ifcfg-eth<span class="token variable">$i</span>
                <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">fi</span>
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function c(v,d){return s(),e("div",null,t)}const p=n(a,[["render",c],["__file","ipv6.html.vue"]]);export{p as default};
