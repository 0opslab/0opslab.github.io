import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const i={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:Centos7\u4E0BOpenssh-8.2p1\u79BB\u7EBFrpm\u5B89\u88C5\u5305\u4E0B\u8F7D</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token assign-left variable">NowTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>/bin/date +%Y%m%d%H%M%S<span class="token variable">)</span></span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">whoami</span><span class="token variable">)</span></span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;root&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;please run this script as root !&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span>  /usr/bin/cp  <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;/usr/bin/cp file exists&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;/opt/backup/openssh_bak&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/backup/openssh_bak/
  /usr/bin/cp /etc/pam.d/sshd /opt/backup/openssh_bak/sshd.bak
  /usr/bin/cp /etc/pam.d/system-auth /opt/backup/openssh_bak/system-auth.bak
  /usr/bin/cp /etc/ssh/sshd_config /opt/backup/openssh_bak/
  /usr/bin/cp /etc/ssh/ssh_config /opt/backup/openssh_bak/
  /usr/bin/cp /etc/ssh/ssh*key /opt/backup/openssh_bak/
<span class="token keyword">else</span>
  <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;/opt/backup/openssh_<span class="token variable">$NowTime</span>/&quot;</span>
  /usr/bin/cp /etc/pam.d/sshd <span class="token string">&quot;/opt/backup/openssh_<span class="token variable">$NowTime</span>/sshd.bak&quot;</span>
  /usr/bin/cp /etc/pam.d/system-auth <span class="token string">&quot;/opt/backup/openssh_<span class="token variable">$NowTime</span>/system-auth.bak&quot;</span>
  /usr/bin/cp /etc/ssh/sshd_config <span class="token string">&quot;/opt/backup/openssh_<span class="token variable">$NowTime</span>/&quot;</span>
  /usr/bin/cp /etc/ssh/ssh_config <span class="token string">&quot;/opt/backup/openssh_<span class="token variable">$NowTime</span>/&quot;</span>
  /usr/bin/cp /etc/ssh/ssh*key <span class="token string">&quot;/opt/backup/openssh_<span class="token variable">$NowTime</span>/&quot;</span>
<span class="token keyword">fi</span>

yum localinstall openssh-*.rpm <span class="token parameter variable">-y</span>
<span class="token function">chmod</span> <span class="token number">600</span> /etc/ssh/ssh_host_*_key
/usr/bin/cp /opt/backup/openssh_bak/sshd.bak /etc/pam.d/sshd
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;
Port 22
AddressFamily inet
ListenAddress 0.0.0.0
Protocol 2
SyslogFacility AUTHPRIV
PermitRootLogin yes
MaxAuthTries 6
PubkeyAuthentication yes
AuthorizedKeysFile      .ssh/authorized_keys
PasswordAuthentication yes
PermitEmptyPasswords no
UsePAM yes
UseDNS no
X11Forwarding yes
Subsystem       sftp    /usr/libexec/openssh/sftp-server
&#39;</span> <span class="token operator">&gt;</span> /etc/ssh/sshd_config

systemctl <span class="token builtin class-name">enable</span> sshd
systemctl restart sshd

<span class="token function">ssh</span> <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[t];function l(c,o){return n(),a("div",null,p)}const d=s(i,[["render",l],["__file","update-ssh-el7-sh.html.vue"]]);export{d as default};
