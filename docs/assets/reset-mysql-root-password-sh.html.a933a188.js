import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const t={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:Linux MYSQL  \u5BC6\u7801\u91CD\u7F6E\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token comment"># Check if user is root</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span> <span class="token operator">!=</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&quot;Error: You must be root to run this script!<span class="token entity" title="\\n">\\n</span>&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">mysql_root_password</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$RANDOM</span>***<span class="token environment constant">$RANDOM</span>&quot;</span>
/etc/init.d/mysqld stop
/usr/local/mysql-5.1.66/bin/mysqld_safe --skip-grant-tables <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
<span class="token function">sleep</span> <span class="token number">10</span>
/usr/local/mysql-5.1.66/bin/mysql <span class="token parameter variable">-u</span> root mysql <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
update user set password = Password(&#39;<span class="token variable">$mysql_root_password</span>&#39;) where User = &#39;root&#39;;
EOF</span>

<span class="token assign-left variable">reset_status</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $?<span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$reset_status</span> <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token function">killall</span> mysqld
<span class="token function">sleep</span> <span class="token number">10</span>
/etc/init.d/mysqld start
<span class="token builtin class-name">echo</span> <span class="token variable">$mysql_root_password</span> <span class="token operator">&gt;</span> /tmp/mysql.txt
<span class="token keyword">else</span>
<span class="token builtin class-name">printf</span> <span class="token string">&quot;failed!<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token keyword">fi</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[l];function o(p,c){return n(),a("div",null,i)}const d=s(t,[["render",o],["__file","reset-mysql-root-password-sh.html.vue"]]);export{d as default};
