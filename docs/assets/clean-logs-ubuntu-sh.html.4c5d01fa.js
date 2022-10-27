import{_ as n,o as a,c as s,e}from"./app.a667bd71.js";const l={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u5220\u9664ubuntu\u7684\u90A3\u4E9B\u7CFB\u7EDF\u65E5\u5FD7</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/alternatives.log.*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/auth.log.*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/dmesg.*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/dpkg.log.*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/kern.log.*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/syslog.*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/ufw.log.*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/wtmp.*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/upstart/*.gz
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/upstart/*.log
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /root/.bash_history
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/dmesg
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/lastlog
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/syslog
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/wtmp
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/mail.log
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/faillog
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/udev
<span class="token function">history</span> <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),r=[t];function o(i,c){return a(),s("div",null,r)}const v=n(l,[["render",o],["__file","clean-logs-ubuntu-sh.html.vue"]]);export{v as default};
