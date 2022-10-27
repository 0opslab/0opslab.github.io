import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const t={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u914D\u7F6E\u65E0\u79D8\u94A5\u8FDC\u7A0Bssh</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">2048</span> <span class="token parameter variable">-N</span> <span class="token string">&quot;&quot;</span> <span class="token parameter variable">-f</span> <span class="token environment constant">$HOME</span>/.ssh/id_rsa

<span class="token function">cat</span> <span class="token environment constant">$HOME</span>/.ssh/id_rsa.pub <span class="token operator">&gt;</span><span class="token environment constant">$HOME</span>/.ssh/authorized_keys
<span class="token function">chmod</span> <span class="token number">600</span> <span class="token environment constant">$HOME</span>/.ssh/authorized_keys

<span class="token comment">## install.config</span>
<span class="token comment">#10.3.151.61 nginx,appt,rabbitmq,kafka,zk,es,bkdata,consul,fta</span>
<span class="token comment">#10.3.151.62 mongodb,appo,kafka,zk,es,mysql,beanstalk,consul</span>
<span class="token comment">#10.3.151.63 paas,cmdb,job,gse,license,kafka,zk,es,redis,consul</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">ip</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span> install.config<span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;ssh -o StrictHostKeyChecking=no&#39;</span> <span class="token environment constant">$HOME</span>/.ssh/authorized_keys root@<span class="token variable">$ip</span><span class="token builtin class-name">:</span><span class="token environment constant">$HOME</span>/.ssh/
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[i];function o(c,p){return n(),a("div",null,l)}const d=s(t,[["render",o],["__file","configure-ssh-without-pass-sh.html.vue"]]);export{d as default};
