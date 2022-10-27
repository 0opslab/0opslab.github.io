import{_ as n,o as s,c as e,e as i}from"./app.a667bd71.js";const c={},a=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:centos7\u7B80\u5355\u7684\u914D\u7F6Esnmpd</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/snmp/snmpd.conf<span class="token operator">&lt;&lt;</span><span class="token string">EOF
com2sec notConfigUser  127.0.0.1 public
com2sec notConfigUser  192.168.10.12 public
group   notConfigGroup v1           notConfigUser
group   notConfigGroup v2c           notConfigUser
view    systemview    included   .1.3.6.1.2.1.1
view    systemview    included   .1.3.6.1.2.1.25.1.1
access  notConfigGroup &quot;&quot;      any       noauth    exact  all  none none
view all    included  .1                               80
syslocation Unknown (edit /etc/snmp/snmpd.conf)
syscontact Root &lt;root@localhost&gt; (configure /etc/snmp/snmp.local.conf)
dontLogTCPWrappersConnects yes
smuxpeer .1.3.6.1.4.1.674.10892.1
EOF</span>

/sbin/service snmpd restart


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[a];function o(d,t){return s(),e("div",null,l)}const v=n(c,[["render",o],["__file","snmpd-conf-centos7-sh.html.vue"]]);export{v as default};
