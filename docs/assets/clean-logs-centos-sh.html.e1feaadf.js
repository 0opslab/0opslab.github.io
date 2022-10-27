import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},o=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u5220\u9664centos\u7684\u90A3\u4E9B\u7CFB\u7EDF\u65E5\u5FD7</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/audit/audit.*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/secure-*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/messages-*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/spooler-*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/yum.log-*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/maillog-*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/cron-*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/btmp-*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/dracut.log-*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/dmesg.old

<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /root/.bash_history
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/anaconda.syslog
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/anaconda.xlog
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/dmesg
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/lastlog
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/syslog
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/wtmp
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/btmp
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/maillog
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/messages
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/maillog
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/secure
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /var/log/cron
<span class="token function">history</span> <span class="token parameter variable">-c</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[o];function r(c,i){return s(),a("div",null,t)}const v=n(l,[["render",r],["__file","clean-logs-centos-sh.html.vue"]]);export{v as default};
