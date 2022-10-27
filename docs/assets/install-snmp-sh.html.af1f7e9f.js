import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const p={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:the shell is install net-snmp</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token assign-left variable">path</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">pwd</span><span class="token variable">\`</span></span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-lt</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u6267\u884C\u683C\u5F0F:<span class="token variable">$0</span> \u672C\u673A\u4E1A\u52A1IP&quot;</span>
        <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>

<span class="token comment">#del old soft</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/net-snmp/d&#39;</span> /etc/profile
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/net-snmp/d&#39;</span> /etc/rc.local
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /var/log/snmpd.log
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/net-snmp
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/local/net-snmp

<span class="token function">rpm</span> <span class="token parameter variable">-e</span> net-snmp-libs-5.3.2.2-7.el5 <span class="token parameter variable">--allmatches</span> <span class="token parameter variable">--nodeps</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5B89\u88C5\u68C0\u7D22\u4E2DZzz..&quot;</span>
<span class="token function">sleep</span> <span class="token number">1</span>
<span class="token comment">#install rpm snmp</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> lm_sensors-2.10.7-4.el5.x86_64.rpm net-snmp-libs-5.3.2.2-14.el5_7.1.x86_64.rpm  net-snmp-5.3.2.2-14.el5_7.1.x86_64.rpm net-snmp-utils-5.3.2.2-14.el5_7.1.x86_64.rpm
<span class="token keyword">do</span>
	<span class="token assign-left variable">word</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $i<span class="token operator">|</span><span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;el5&quot;</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-c</span> $word<span class="token variable">\`</span></span> <span class="token parameter variable">-lt</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
		<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> <span class="token variable">\${path}</span>/source/<span class="token variable">$i</span>
	<span class="token keyword">else</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$i</span>\u5DF2\u5B89\u88C5\uFF01&quot;</span>
	<span class="token keyword">fi</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">cd</span> <span class="token variable">$path</span>
<span class="token function">cp</span> <span class="token parameter variable">-f</span> ./source/snmpd.conf /etc/snmp/snmpd.conf

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Snmp\u5B89\u88C5\u5B8C\u6BD5&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u542F\u52A8snmp\u670D\u52A1Zzz.&quot;</span>\u3001
<span class="token function">sleep</span> <span class="token number">2</span>
<span class="token function">service</span> snmpd start
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-c</span> snmpd<span class="token variable">\`</span></span> <span class="token parameter variable">-lt</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;snmp\u542F\u52A8\u6210\u529F&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u8BBE\u7F6E\u5F00\u59CB\u81EA\u542F\u52A8&quot;</span>
<span class="token function">chkconfig</span> <span class="token parameter variable">--add</span> snmpd
<span class="token function">chkconfig</span> <span class="token parameter variable">--level</span> <span class="token number">345</span> snmpd on

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">chkconfig</span> snmpd <span class="token parameter variable">--list</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;\u542F\u7528|on&quot;</span> <span class="token parameter variable">-c</span><span class="token variable">\`</span></span> <span class="token parameter variable">-lt</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u8BBE\u7F6E\u81EA\u542F\u52A8\u6210\u529F\uFF01&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span><span class="token function">grep</span> snmp <span class="token parameter variable">-c</span><span class="token variable">\`</span></span> <span class="token parameter variable">-eq</span> <span class="token number">3</span>  <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u68C0\u67E5\u5B89\u88C5\u5305\u5B8C\u6574\u6027\u901A\u8FC7!&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">netstat</span> <span class="token parameter variable">-ln</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-c</span> <span class="token number">161</span><span class="token variable">\`</span></span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span> 
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span>snmpget <span class="token parameter variable">-v</span> <span class="token number">1</span> <span class="token parameter variable">-c</span> public $1 sysUpTime.0 <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-c</span> Error<span class="token variable">\`</span></span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;Snmp\u5B89\u88C5\u6210\u529F\uFF0C\u5E76\u6D4B\u8BD5\u901A\u8FC7\uFF01&quot;</span>
	<span class="token keyword">fi</span>
<span class="token keyword">fi</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function i(c,o){return n(),a("div",null,t)}const k=s(p,[["render",i],["__file","install-snmp-sh.html.vue"]]);export{k as default};
