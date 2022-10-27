import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:keepalived \u5B89\u88C5\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token comment">###</span>
<span class="token comment"># Filename: install_keepalived.sh</span>
<span class="token comment"># Author: roguo.wei - roguo.wei@gmail.com</span>
<span class="token comment"># Description: </span>
<span class="token comment"># Last Modified: 2016-11-09 00:57</span>
<span class="token comment"># Version: 1.0</span>
<span class="token comment">###</span>

<span class="token assign-left variable">KEEPALIVED_USER</span><span class="token operator">=</span><span class="token string">&quot;keepalived&quot;</span>
<span class="token assign-left variable">KEEPALIVED_VERSION</span><span class="token operator">=</span><span class="token string">&quot;1.2.24&quot;</span>
<span class="token assign-left variable">KEEPALIVED_INSTALL_DIR</span><span class="token operator">=</span><span class="token string">&quot;/usr/local&quot;</span>

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> kernel-devel openssl openssl-devel <span class="token operator">&amp;&gt;</span> /dev/null
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/src/kernels/<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-r</span><span class="token variable">\`</span></span>/ /usr/src/linux

<span class="token comment"># check keepalived user</span>
<span class="token function">id</span> <span class="token parameter variable">-u</span> <span class="token variable">\${KEEPALIVED_USER=}</span> <span class="token operator">&amp;&gt;</span> /dev/null
<span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">useradd</span> <span class="token parameter variable">-M</span> <span class="token parameter variable">-s</span> /bin/bash <span class="token variable">\${KEEPALIVED_USER}</span>

<span class="token comment"># check tar file</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> keepalived-<span class="token variable">\${KEEPALIVED_VERSION}</span>.tar.gz <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;keepalived tar file not exists.&quot;</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;download from offical website...&quot;</span>
 <span class="token function">wget</span> http://www.keepalived.org/software/keepalived-1.2.24.tar.gz
<span class="token keyword">else</span>
 <span class="token function">tar</span> xf keepalived-<span class="token variable">\${KEEPALIVED_VERSION}</span>.tar.gz
<span class="token keyword">fi</span>

<span class="token comment"># comline keepalived</span>
<span class="token function">pushd</span> keepalived-<span class="token variable">\${KEEPALIVED_VERSION}</span>
./configure <span class="token parameter variable">--sysconf</span><span class="token operator">=</span>/etc <span class="token operator">&amp;&gt;</span> /dev/null
<span class="token function">make</span> <span class="token operator">&amp;&gt;</span> /dev/null
<span class="token function">make</span> <span class="token function">install</span> <span class="token operator">&amp;&gt;</span> /dev/null
<span class="token function">popd</span>
/bin/cp /usr/local/sbin/keepalived /usr/bin/

<span class="token comment"># config log</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^KEEPALIVED_OPTIONS=.*@KEEPALIVED_OPTIONS=&quot;-D -d -S 0&quot;@&#39;</span> /etc/sysconfig/keepalived
<span class="token comment">#cat &gt;&gt; &quot;local0.* /var/log/keepalived/keepalived.log&quot; /etc/rsyslog.conf</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/rsyslog.d/keepalived.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
local0.* /var/log/keepalived.log
&amp;~
EOF</span>
/etc/init.d/rsyslog restart <span class="token operator">&amp;&gt;</span> /dev/null

<span class="token comment"># man config</span>

<span class="token comment"># </span>
/etc/init.d/keepalived start
<span class="token function">chmod</span> +x /etc/init.d/keepalived
<span class="token function">chkconfig</span> keepalived on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[i];function p(c,o){return s(),a("div",null,t)}const d=n(l,[["render",p],["__file","install-keepalive-sh.html.vue"]]);export{d as default};
