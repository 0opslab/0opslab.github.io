import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const t={},p=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:centos\u4E0B\u7B80\u5355\u7684\u5B89\u88C5vpn</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token keyword">function</span> <span class="token function-name function">installVPN</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;begin to install VPN services&quot;</span><span class="token punctuation">;</span>
	<span class="token comment">#check wether vps suppot ppp and tun</span>
	
	<span class="token comment">#\u5224\u65ADcentos\u7248\u672C</span>
	<span class="token keyword">if</span> <span class="token function">grep</span> <span class="token parameter variable">-Eqi</span> <span class="token string">&quot;release 5.&quot;</span> /etc/redhat-release<span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token assign-left variable">ver1</span><span class="token operator">=</span><span class="token string">&#39;5&#39;</span>
	<span class="token keyword">elif</span> <span class="token function">grep</span> <span class="token parameter variable">-Eqi</span> <span class="token string">&quot;release 6.&quot;</span> /etc/redhat-release<span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token assign-left variable">ver1</span><span class="token operator">=</span><span class="token string">&#39;6&#39;</span>
	<span class="token keyword">elif</span> <span class="token function">grep</span> <span class="token parameter variable">-Eqi</span> <span class="token string">&quot;release 7.&quot;</span> /etc/redhat-release<span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token assign-left variable">ver1</span><span class="token operator">=</span><span class="token string">&#39;7&#39;</span>
	<span class="token keyword">fi</span>
	
	yum <span class="token function">install</span> <span class="token function">curl</span> <span class="token parameter variable">-y</span>
	yum <span class="token function">install</span> epel-release <span class="token parameter variable">-y</span>

	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$ver1</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;7&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token comment">#centos7\u8981\u5B89\u88C5iptables\u628A\u9ED8\u8BA4\u9632\u706B\u5899\u5173\u4E86\u3002</span>
		systemctl stop firewalld.service
		systemctl disable firewalld.service
		yum <span class="token function">install</span> iptables-services <span class="token parameter variable">-y</span>
		<span class="token comment">#centos7\u9700\u8981\u52A0\u8FD9\u4E2A\u6743\u9650\uFF0C\u5426\u5219\u4E0D\u4F1A\u5F00\u673A\u81EA\u52A8\u6267\u884C</span>
		<span class="token function">chmod</span> +x /etc/rc.d/rc.local
	<span class="token keyword">fi</span>
	
	<span class="token comment">#\u5148\u5220\u9664\u5DF2\u7ECF\u5B89\u88C5\u7684pptpd\u548Cppp</span>
	<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/pptpd.conf
	<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/ppp
	
	

	yum <span class="token function">install</span> <span class="token parameter variable">-y</span> ppp pptpd

	<span class="token comment">#\u5199\u914D\u7F6E\u6587\u4EF6</span>
	<span class="token function">mknod</span> /dev/ppp c <span class="token number">108</span> <span class="token number">0</span> 
	<span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">&gt;</span> /proc/sys/net/ipv4/ip_forward 
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;mknod /dev/ppp c 108 0&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/rc.local
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;echo 1 &gt; /proc/sys/net/ipv4/ip_forward&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/rc.local
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;localip 172.16.36.1&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/pptpd.conf
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;remoteip 172.16.36.2-254&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/pptpd.conf
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;ms-dns 8.8.8.8&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/ppp/options.pptpd
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;ms-dns 8.8.4.4&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/ppp/options.pptpd

	<span class="token assign-left variable">pass</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>openssl rand <span class="token number">6</span> <span class="token parameter variable">-base64</span><span class="token variable">\`</span></span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span>
	<span class="token keyword">then</span> <span class="token assign-left variable">pass</span><span class="token operator">=</span><span class="token variable">$1</span>
	<span class="token keyword">fi</span>

	<span class="token builtin class-name">echo</span> <span class="token string">&quot;vpn pptpd <span class="token variable">\${pass}</span> *&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/ppp/chap-secrets

	iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> POSTROUTING <span class="token parameter variable">-s</span> <span class="token number">172.16</span>.36.0/24 <span class="token parameter variable">-j</span> SNAT --to-source <span class="token variable"><span class="token variable">\`</span><span class="token function">curl</span> ip.cn <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39; &#39;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;\uFF1A&#39;</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
	iptables <span class="token parameter variable">-A</span> FORWARD <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--syn</span> <span class="token parameter variable">-s</span> <span class="token number">172.16</span>.36.0/24 <span class="token parameter variable">-j</span> TCPMSS --set-mss <span class="token number">1356</span>
	iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> gre <span class="token parameter variable">-j</span> ACCEPT
	iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">1723</span> <span class="token parameter variable">-j</span> ACCEPT
	<span class="token function">service</span> iptables save

	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;ver1&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;7&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		systemctl <span class="token builtin class-name">enable</span> iptables.service
		systemctl <span class="token builtin class-name">enable</span> pptpd.service
		systemctl restart iptables.service
		systemctl restart pptpd.service
	<span class="token keyword">else</span>
		<span class="token function">chkconfig</span> iptables on
		<span class="token function">chkconfig</span> pptpd on
		<span class="token function">service</span> iptables start
		<span class="token function">service</span> pptpd start		
	<span class="token keyword">fi</span>



	<span class="token builtin class-name">echo</span> <span class="token string">&quot;================================================&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u611F\u8C22\u4F7F\u7528www.ljohn.cn\u63D0\u4F9B\u7684pptpd vpn\u4E00\u952E\u5B89\u88C5\u5305&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;VPN\u7684\u521D\u59CB\u7528\u6237\u540D\u662F\uFF1A<span class="token entity" title="\\033">\\033</span>[41;37m vpn  <span class="token entity" title="\\033">\\033</span>[0m, \u521D\u59CB\u5BC6\u7801\u662F\uFF1A <span class="token entity" title="\\033">\\033</span>[41;37m <span class="token variable">\${pass}</span>  <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5 vi /etc/ppp/chap-secrets\u4FEE\u6539\u7528\u6237\u540D\u548C\u5BC6\u7801&quot;</span>	
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;================================================&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">addVPNuser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;input user name:&quot;</span>
	<span class="token builtin class-name">read</span> username
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;input password:&quot;</span>
	<span class="token builtin class-name">read</span> userpassword
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${username}</span> pptpd <span class="token variable">\${userpassword}</span> *&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/ppp/chap-secrets
	<span class="token function">service</span> iptables restart
	<span class="token function">service</span> pptpd start
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;which do you want to?input the number.&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;1. install VPN service&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;2. add VPN user&quot;</span>
<span class="token builtin class-name">read</span> num

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$num</span>&quot;</span> <span class="token keyword">in</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token punctuation">(</span>installVPN<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token punctuation">(</span>addVPNuser<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
*<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;nothing,exit&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[p];function i(c,o){return n(),a("div",null,l)}const u=s(t,[["render",i],["__file","vpn-centos-pptpd-sh.html.vue"]]);export{u as default};
