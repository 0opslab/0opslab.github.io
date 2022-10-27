import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:centos6\u4E0B\u5B89\u88C5cacti</span>
<span class="token comment">#descr:cacti\u642D\u5EFA</span>
<span class="token comment">#\`\`\`</span>


<span class="token comment">#\u5B89\u88C5LAMP\u73AF\u5883</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> gcc <span class="token function">make</span> <span class="token function">vim</span> <span class="token function">unzip</span> <span class="token function">wget</span> <span class="token function">install</span> httpd mysql mysql-devel mysql-server php php-devel php-mysql php-comman php-pdo php-gd lm_sensor net-snmp php-snmp net-snmp-utils

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> gcc perl-devel libxml2-devel libpng-devel pkg-config glib pixman pango pango-devel freetype freetype-devel fontconfig cairo cairo-devel libart_lgpl libart_lgpl-devel

<span class="token comment">### chkconfig mysqld on</span>
<span class="token comment">### chkconfig httpd on</span>
<span class="token comment">### chkconfig snmpd on</span>
<span class="token comment">### service mysqld start</span>
<span class="token comment">### service httpd start</span>
<span class="token comment">### service snmpd start</span>
<span class="token comment">### mysqladmin -u root password &#39;123456&#39;</span>
<span class="token comment">### mysql -uroot -p</span>
<span class="token keyword">if</span> <span class="token boolean">false</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token comment">###\u6CE8\u91CAstart###</span>
Enter password: 
Welcome to the MySQL monitor. Commands end with <span class="token punctuation">;</span> or <span class="token punctuation">\\</span>g.
Your MySQL connection <span class="token function">id</span> is <span class="token number">3</span>
Server version: <span class="token number">5.1</span>.69 Source distribution
Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2000</span>, <span class="token number">2013</span>, Oracle and/or its affiliates. All rights reserved.
Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.
Type <span class="token string">&#39;help;&#39;</span> or <span class="token string">&#39;\\h&#39;</span> <span class="token keyword">for</span> help. Type <span class="token string">&#39;\\c&#39;</span> to <span class="token function">clear</span> the current input statement.
mysql<span class="token operator">&gt;</span> create database cacti<span class="token punctuation">;</span>
Query OK, <span class="token number">1</span> row affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
mysql<span class="token operator">&gt;</span> grant all on cacti.* to cactiuser@localhost identified by <span class="token string">&#39;654321&#39;</span><span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
mysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
<span class="token comment">###\u6CE8\u91CAend###</span>
<span class="token keyword">fi</span>

<span class="token function">tar</span> zxvf rrdtool-1.4.5.tar.gz
<span class="token builtin class-name">cd</span> rrdtool-1.4.5
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/rrdtool

<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/rrdtool/bin/* /usr/local/bin/


<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>

<span class="token function">tar</span> zxvf net-snmp-5.3.4.tar.gz
<span class="token builtin class-name">cd</span> net-snmp-5.3.4
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/net-snmp

<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token function">cp</span> EXAMPLE.conf /usr/local/net-snmp/share/snmp/
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/net-snmp/bin/* /usr/local/bin/
/usr/local/net-snmp/sbin/snmpd <span class="token parameter variable">-c</span> /usr/local/net-snmp/share/snmp/snmpd.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/usr/local/net-snmp/sbin/snmpd -c /usr/local/net-snmp/share/snmp/snmpd.conf&quot;</span> <span class="token operator">&gt;&gt;</span>/etc/rc.local
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>

<span class="token function">tar</span> zxvf cacti-0.8.7g.tar.gz
<span class="token builtin class-name">cd</span> cacti-0.8.7g
mysql <span class="token parameter variable">-ucacti</span> <span class="token parameter variable">-pcactiWWW123</span> cacti <span class="token operator">&lt;</span> cacti.sql
<span class="token builtin class-name">cd</span> include
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;/cactiuser/ {29s/cactiuser/cacti/g}&quot;</span> config.php
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;/cactiuser/ {30s/cactiuser/cactiWWW123/g}&quot;</span> config.php
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
<span class="token function">mv</span> cacti-0.8.7g /data/www/wwwroot/cacti
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/php-5.2.17/bin/php  /usr/bin/php
/usr/bin/php /data/www/wwwroot/cacti/poller.php
<span class="token builtin class-name">echo</span> <span class="token string">&quot;*/5 * * * * env LANG=C /usr/bin/php /data/www/wwwroot/cacti/poller.php&quot;</span> <span class="token operator">&gt;&gt;</span>/etc/crontab


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function t(p,o){return s(),a("div",null,c)}const d=n(i,[["render",t],["__file","cacti-install-sh.html.vue"]]);export{d as default};
