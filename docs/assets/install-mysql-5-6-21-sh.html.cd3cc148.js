import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:linux\u4E0Bmysql\u5B89\u88C5\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token assign-left variable">ifubuntu</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /proc/version <span class="token operator">|</span> <span class="token function">grep</span> ubuntu<span class="token variable">)</span></span>
<span class="token assign-left variable">if14</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /etc/issue <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">14</span><span class="token variable">)</span></span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">\`</span></span> <span class="token operator">==</span> <span class="token string">&quot;x86_64&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token assign-left variable">machine</span><span class="token operator">=</span>x86_64
<span class="token keyword">else</span>
<span class="token assign-left variable">machine</span><span class="token operator">=</span>i686
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$machine</span> <span class="token operator">==</span> <span class="token string">&quot;x86_64&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> mysql-5.6.21-linux-glibc2.5-x86_64
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> mysql-5.6.21-linux-glibc2.5-x86_64.tar.gz <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	 <span class="token function">wget</span> http://zy-res.oss-cn-hangzhou.aliyuncs.com/mysql/mysql-5.6.21-linux-glibc2.5-x86_64.tar.gz
  <span class="token keyword">fi</span>
  <span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> mysql-5.6.21-linux-glibc2.5-x86_64.tar.gz
  <span class="token function">mv</span> mysql-5.6.21-linux-glibc2.5-x86_64/* /alidata/server/mysql
<span class="token keyword">else</span>
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> mysql-5.6.21-linux-glibc2.5-i686
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> mysql-5.6.21-linux-glibc2.5-i686.tar.gz <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token function">wget</span> http://zy-res.oss-cn-hangzhou.aliyuncs.com/mysql/mysql-5.6.21-linux-glibc2.5-i686.tar.gz
  <span class="token keyword">fi</span>
  <span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> mysql-5.6.21-linux-glibc2.5-i686.tar.gz
  <span class="token function">mv</span> mysql-5.6.21-linux-glibc2.5-i686/* /alidata/server/mysql
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$ifubuntu</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$if14</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token function">mv</span> /etc/mysql/my.cnf /etc/mysql/my.cnf.bak
<span class="token keyword">fi</span>

<span class="token function">groupadd</span> mysql
<span class="token function">useradd</span> <span class="token parameter variable">-g</span> mysql <span class="token parameter variable">-s</span> /sbin/nologin mysql
/alidata/server/mysql/scripts/mysql_install_db <span class="token parameter variable">--datadir</span><span class="token operator">=</span>/alidata/server/mysql/data/ <span class="token parameter variable">--basedir</span><span class="token operator">=</span>/alidata/server/mysql <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql
<span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql:mysql /alidata/server/mysql/
<span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql:mysql /alidata/server/mysql/data/
<span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql:mysql /alidata/log/mysql
<span class="token punctuation">\\</span>cp <span class="token parameter variable">-f</span> /alidata/server/mysql/support-files/mysql.server /etc/init.d/mysqld
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s#^basedir=$#basedir=/alidata/server/mysql#&#39;</span> /etc/init.d/mysqld
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s#^datadir=$#datadir=/alidata/server/mysql/data#&#39;</span> /etc/init.d/mysqld
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/my.cnf <span class="token operator">&lt;&lt;</span><span class="token string">END
[client]
port            = 3306
socket          = /tmp/mysql.sock
[mysqld]
port            = 3306
socket          = /tmp/mysql.sock
skip-external-locking
log-error=/alidata/log/mysql/error.log
key_buffer_size = 16M
max_allowed_packet = 1M
table_open_cache = 64
sort_buffer_size = 512K
net_buffer_length = 8K
read_buffer_size = 256K
read_rnd_buffer_size = 512K
myisam_sort_buffer_size = 8M

log-bin=mysql-bin
binlog_format=mixed
server-id       = 1

sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES

[mysqldump]
quick
max_allowed_packet = 16M

[mysql]
no-auto-rehash

[myisamchk]
key_buffer_size = 20M
sort_buffer_size = 20M
read_buffer = 2M
write_buffer = 2M

[mysqlhotcopy]
interactive-timeout
END</span>

<span class="token function">chmod</span> <span class="token number">755</span> /etc/init.d/mysqld
/etc/init.d/mysqld start

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function p(c,r){return n(),a("div",null,t)}const d=s(i,[["render",p],["__file","install-mysql-5-6-21-sh.html.vue"]]);export{d as default};
