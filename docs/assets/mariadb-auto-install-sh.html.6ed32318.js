import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const l={},p=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:mariadb\u5B89\u88C5\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token assign-left variable">INSTALL_DIR</span><span class="token operator">=</span><span class="token string">&quot;/opt/app&quot;</span>
<span class="token assign-left variable">DATA_DIR</span><span class="token operator">=</span><span class="token string">&quot;/opt/data&quot;</span>
<span class="token assign-left variable">MARIADB_GROUP</span><span class="token operator">=</span><span class="token string">&quot;mysql&quot;</span>
<span class="token assign-left variable">MARIADB_USER</span><span class="token operator">=</span><span class="token string">&quot;mysql&quot;</span>
<span class="token assign-left variable">MARIADB_VERSION</span><span class="token operator">=</span><span class="token string">&quot;10.2.14&quot;</span>
<span class="token assign-left variable">ROOT_PASSWD</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span>
<span class="token comment">#mariadb-10.2.14-linux-x86_64.tar.gz</span>
<span class="token assign-left variable">TAR_NAME</span><span class="token operator">=</span><span class="token string">&quot;mariadb-<span class="token variable">\${MARIADB_VERSION}</span>-linux-x86_64.tar.gz&quot;</span>
<span class="token assign-left variable">UNTAR_NAME</span><span class="token operator">=</span><span class="token string">&quot;mariadb-<span class="token variable">\${MARIADB_VERSION}</span>-linux-x86_64&quot;</span>

<span class="token comment"># check mariadb user</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;check MariaDB user... &quot;</span>
<span class="token function">id</span> <span class="token parameter variable">-u</span> <span class="token variable">\${MARIADB_USER}</span> <span class="token operator">&amp;&gt;</span> /dev/null
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
 <span class="token function">groupadd</span> <span class="token variable">\${MARIADB_GROUP}</span>
 <span class="token function">useradd</span> <span class="token parameter variable">-g</span> <span class="token variable">\${MARIADB_GROUP}</span> <span class="token variable">\${MARIADB_USER}</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;ok&quot;</span>

<span class="token comment"># check install dir</span>
<span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">\${INSTALL_DIR}</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">\${INSTALL_DIR}</span>
<span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">\${DATA_DIR}</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">\${DATA_DIR}</span>

<span class="token comment"># check mariadb file</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> <span class="token variable">\${TAR_NAME}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
 <span class="token function">wget</span> http://mirrors.tuna.tsinghua.edu.cn/mariadb//mariadb-<span class="token variable">\${MARIADB_VERSION}</span>/bintar-linux-x86_64/mariadb-<span class="token variable">\${MARIADB_VERSION}</span>-linux-x86_64.tar.gz
<span class="token keyword">fi</span>

<span class="token comment"># untar file</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;untar file ...&quot;</span>
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> <span class="token variable">\${TAR_NAME}</span> <span class="token parameter variable">-C</span> <span class="token variable">\${INSTALL_DIR}</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token variable">\${INSTALL_DIR}</span>/<span class="token variable">\${UNTAR_NAME}</span> <span class="token variable">\${INSTALL_DIR}</span>/mysql
<span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token variable">\${INSTALL_DIR}</span>/<span class="token variable">\${UNTAR_NAME}</span> /usr/local/mysql
<span class="token builtin class-name">echo</span> <span class="token string">&quot;ok&quot;</span>

<span class="token comment"># init db and config</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;init db...&quot;</span>
<span class="token variable">\${INSTALL_DIR}</span>/mysql/scripts/mysql_install_db <span class="token parameter variable">--user</span><span class="token operator">=</span><span class="token variable">\${MARIADB_USER}</span> <span class="token parameter variable">--basedir</span><span class="token operator">=</span><span class="token variable">\${INSTALL_DIR}</span>/mysql <span class="token parameter variable">--datadir</span><span class="token operator">=</span><span class="token variable">\${DATA_DIR}</span>
<span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token function">cp</span> <span class="token variable">\${INSTALL_DIR}</span>/mysql/support-files/mysql.server /etc/init.d/mysqld
<span class="token builtin class-name">echo</span> <span class="token string">&quot;ok&quot;</span>

<span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/my.cnf <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mv</span> /etc/my.cnf<span class="token punctuation">{</span>,.ori<span class="token punctuation">}</span>
<span class="token punctuation">\\</span>cp <span class="token parameter variable">-rf</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> \`dirname $0\` <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/my.cnf /etc/my.cnf

<span class="token comment"># set server id</span>
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>/sbin/ifconfig eth0<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;inet addr&quot;</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token operator">|</span><span class="token function">awk</span> -F<span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">SERVER_ID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $IPADDR<span class="token operator">|</span><span class="token function">awk</span> -F<span class="token string">&quot;.&quot;</span> <span class="token string">&#39;{print $4}&#39;</span><span class="token variable">)</span></span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s#server-id = .*#server-id = <span class="token variable">\${SERVER_ID}</span>#g&quot;</span> /etc/my.cnf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s#datadir = .*#datadir = <span class="token variable">\${DATA_DIR}</span>#g&quot;</span> /etc/my.cnf

<span class="token comment"># set purview</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> root <span class="token variable">\${INSTALL_DIR}</span>/<span class="token variable">\${UNTAR_NAME}</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token variable">\${MARIADB_USER}</span> <span class="token variable">\${DATA_DIR}</span>
<span class="token function">chmod</span> +x /etc/init.d/mysqld

<span class="token comment"># start mariadb</span>
<span class="token variable">\${INSTALL_DIR}</span>/mysql/bin/mysqld_safe <span class="token parameter variable">--user</span><span class="token operator">=</span><span class="token variable">\${MARIADB_USER}</span> <span class="token operator">&amp;</span> <span class="token operator">&amp;&gt;</span> /dev/null
<span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;mariadb started ok&quot;</span>

<span class="token comment"># set root passwd</span>
<span class="token function">sleep</span> <span class="token number">10</span>
<span class="token variable">\${INSTALL_DIR}</span>/mysql/bin/mysqladmin <span class="token parameter variable">-uroot</span> password <span class="token string">&quot;<span class="token variable">\${ROOT_PASSWD}</span>&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;change password for root failed!&quot;</span>
 <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">else</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;change password for root to :<span class="token variable">\${ROOT_PASSWD}</span>&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># </span>
<span class="token function">chkconfig</span> mysqld on
<span class="token function">ln</span> <span class="token parameter variable">-sv</span> <span class="token variable">\${INSTALL_DIR}</span>/mysql/include /usr/include/mysql
<span class="token builtin class-name">echo</span> <span class="token string">&#39;/\${INSTALL_DIR}/mysql/lib&#39;</span> <span class="token operator">&gt;</span> /etc/ld.so.conf.d/mysql.conf
ldconfig

<span class="token comment"># set path</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;set path... &quot;</span>
<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/profile <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
# mariadb path
PATH=\\<span class="token environment constant">$PATH</span>:<span class="token variable">\${INSTALL_DIR}</span>/mysql/bin
export PATH
EOF</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;ok&quot;</span>
<span class="token builtin class-name">.</span> /etc/profile

<span class="token builtin class-name">echo</span> <span class="token string">&quot;mariadb installed successfully!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[p];function i(o,c){return n(),a("div",null,t)}const v=s(l,[["render",i],["__file","mariadb-auto-install-sh.html.vue"]]);export{v as default};
