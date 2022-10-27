import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const l={},i=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:mydumper\u7B80\u5355\u7684\u5907\u4EFD\u6570\u636E\u5E93\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
yum <span class="token function">install</span> <span class="token function">make</span> cmake pcre-devel openssl-devel glib2-devel zlib-devel gcc gcc-c++ mysql-devel <span class="token parameter variable">-y</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> mariadb-server mariadb mariadb-devel

<span class="token comment">###ln -s /usr/local/mysql/lib/libmysqlclient.so /usr/lib64/</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/lib64/mysql/libmysqlclient.so /usr/lib64/
<span class="token function">wget</span> --no-check-certificate https://github.com/maxbube/mydumper/archive/v0.9.5.tar.gz
<span class="token function">tar</span> zxf v0.9.5.tar.gz
<span class="token builtin class-name">cd</span> mydumper-0.9.5
cmake <span class="token builtin class-name">.</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token function">ln</span> <span class="token parameter variable">-sv</span> /usr/local/bin/mydumper /usr/bin/mydumper
<span class="token function">ln</span> <span class="token parameter variable">-sv</span> /usr/local/bin/myloader /usr/bin/myloader

<span class="token comment">###centos6 install rpm</span>
<span class="token comment">###https://github.com/maxbube/mydumper/releases/download/v0.9.5/mydumper-0.9.5-2.el6.x86_64.rpm</span>
<span class="token comment">###centos7 install rpm</span>
<span class="token comment">###https://github.com/maxbube/mydumper/releases/download/v0.9.5/mydumper-0.9.5-2.el7.x86_64.rpm</span>
<span class="token comment">###Ubuntu / Debian</span>
<span class="token comment">###wget https://github.com/maxbube/mydumper/releases/download/v0.9.5/mydumper_0.9.5-2.xenial_amd64.deb</span>
<span class="token comment">###dpkg -i mydumper_0.9.5-1.xenial_amd64.deb</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[i];function m(t,d){return s(),e("div",null,c)}const r=n(l,[["render",m],["__file","mydumper-install-sh.html.vue"]]);export{r as default};
