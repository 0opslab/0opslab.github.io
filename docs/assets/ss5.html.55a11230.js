import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const p={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc gcc-c++ automake <span class="token function">make</span> pam-devel openldap-devel cyrus-sasl-devel  openssl-devel
<span class="token function">wget</span> http://jaist.dl.sourceforge.net/project/ss5/ss5/3.8.9-8/ss5-3.8.9-8.tar.gz
<span class="token function">tar</span> zxvf ss5-3.8.9-8.tar.gz
<span class="token builtin class-name">cd</span> ss5-3.8.9-8
./configure <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/opt/ss5/ss5.passwd<span class="token operator">&lt;&lt;</span><span class="token string">EOF
test 123123
aaa  123123
bbb  123123
EOF</span>


<span class="token comment">##\u65E0\u5206\u7EC4\u65E0\u9650\u5236\u914D\u7F6E</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/opt/ss5/ss5.conf<span class="token operator">&lt;&lt;</span><span class="token string">EOF
auth      0.0.0.0/0       -         u
permit u        0.0.0.0/0       -       0.0.0.0/0       -       -       -       -       -
EOF</span>


<span class="token comment">##\u521B\u5EFA\u5206\u7EC4</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;test&quot;</span><span class="token operator">&gt;</span>/etc/opt/ss5/ulimit
<span class="token builtin class-name">echo</span> <span class="token string">&quot;aaa&quot;</span> <span class="token operator">&gt;&gt;</span>/etc/opt/ss5/ulimit
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bbb&quot;</span> <span class="token operator">&gt;</span>/etc/opt/ss5/limit

<span class="token comment">##\u6709\u5206\u7EC4 \uFF0C\u6709\u9650\u5236\u914D\u7F6E</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/opt/ss5/ss5.conf<span class="token operator">&lt;&lt;</span><span class="token string">EOF
auth      0.0.0.0/0       -         u
permit u       0.0.0.0/0       -       0.0.0.0/0       -        -       ulimit       -       -
permit u       0.0.0.0/0       -       0.0.0.0/0       80       -       limit        -       -

permit u       0.0.0.0/0       -       0.0.0.0/0       -         -      ulimit       -       -
permit u       0.0.0.0/0       -       0.0.0.0/0       443       -      limit        -       -
EOF</span>


<span class="token builtin class-name">echo</span> <span class="token string">&quot;SS5_OPTS=<span class="token entity" title="\\&quot;">\\&quot;</span> -u root -b 0.0.0.0:10888<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span> <span class="token operator">&gt;&gt;</span>/etc/sysconfig/ss5
<span class="token comment">##\u4F7F\u7528\u9ED8\u8BA4\u7AEF\u53E3</span>
<span class="token comment">##echo &quot;SS5_OPTS=\\&quot; -u root\\&quot;&quot; &gt;&gt;/etc/sysconfig/ss5</span>
<span class="token comment">##/etc/rc.d/init.d/ss5 \u6587\u4EF6\u4FEE\u6539\u81EA\u5B9A\u4E49\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u4E3A1080</span>
<span class="token comment">##daemon /usr/sbin/ss5 -t $SS5_OPTS -b 0.0.0.0:10888</span>

<span class="token function">chmod</span> <span class="token number">700</span> /etc/rc.d/init.d/ss5
<span class="token function">chmod</span> +x  /etc/rc.d/init.d/ss5

<span class="token comment">##\u542F\u52A8ss5</span>
<span class="token function">service</span> ss5 start

<span class="token comment">##\u505C\u6B62ss5</span>
<span class="token comment">#service ss5 stop</span>

<span class="token comment">##\u52A0\u5165\u5F00\u673A\u81EA\u52A8\u542F\u52A8 centos6</span>
<span class="token comment">#chkconfig --add ss5</span>
<span class="token comment">#chkconfig --level 345 ss5 on</span>

<span class="token comment">##\u67E5\u770B\u65E5\u5FD7\u542F\u52A8\u662F\u5426\u6210\u529F</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/ss5/ss5.log



yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc gcc-c++ automake <span class="token function">make</span> pam-devel openldap-devel cyrus-sasl-devel openssl-devel
<span class="token function">wget</span> http://jaist.dl.sourceforge.net/project/ss5/ss5/3.8.9-8/ss5-3.8.9-8.tar.gz
<span class="token function">tar</span> zxvf ss5-3.8.9-8.tar.gz
<span class="token builtin class-name">cd</span> ss5-3.8.9
./configure <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment">##\u65E0\u5206\u7EC4\u65E0\u9650\u5236\u914D\u7F6E</span>
<span class="token comment">#cat &gt;/etc/opt/ss5/ss5.conf&lt;&lt;EOF</span>
<span class="token comment">#set SS5_PAM_AUTH</span>
<span class="token comment">#auth      0.0.0.0/0       -         u</span>
<span class="token comment">#permit u        0.0.0.0/0       -       0.0.0.0/0       -       -       -       -       -</span>
<span class="token comment">#EOF</span>

<span class="token comment">#useradd test -s /sbin/nologin</span>
<span class="token comment">#useradd aaa -s /sbin/nologin</span>
<span class="token comment">#useradd bbb -s /sbin/nologin</span>

/usr/sbin/useradd username1  <span class="token parameter variable">-s</span> /sbin/nologin
<span class="token builtin class-name">echo</span> eUqO5VLWj9m3FXy6 <span class="token operator">|</span> <span class="token function">passwd</span>  <span class="token parameter variable">--stdin</span> username1

/usr/sbin/useradd username2  <span class="token parameter variable">-s</span> /sbin/nologin
<span class="token builtin class-name">echo</span> ltQQEmH72NDQ51Er <span class="token operator">|</span> <span class="token function">passwd</span>  <span class="token parameter variable">--stdin</span> username2

/usr/sbin/useradd username3  <span class="token parameter variable">-s</span> /sbin/nologin
<span class="token builtin class-name">echo</span> MauDmldzvnsX5iUo <span class="token operator">|</span> <span class="token function">passwd</span>  <span class="token parameter variable">--stdin</span> username3

<span class="token comment">##\u521B\u5EFA\u5206\u7EC4</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;username1&quot;</span><span class="token operator">&gt;</span>/etc/opt/ss5/ulimit
<span class="token builtin class-name">echo</span> <span class="token string">&quot;username2&quot;</span> <span class="token operator">&gt;&gt;</span>/etc/opt/ss5/ulimit
<span class="token builtin class-name">echo</span> <span class="token string">&quot;username3&quot;</span> <span class="token operator">&gt;</span>/etc/opt/ss5/limit

<span class="token comment">##\u6709\u5206\u7EC4 \uFF0C\u6709\u9650\u5236\u914D\u7F6E</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/opt/ss5/ss5.conf<span class="token operator">&lt;&lt;</span><span class="token string">EOF
set SS5_PAM_AUTH
auth      0.0.0.0/0       -         u
permit u       0.0.0.0/0       -       0.0.0.0/0       -        -       ulimit       -       -
permit u       0.0.0.0/0       -       0.0.0.0/0       80       -       limit        -       -

permit u       0.0.0.0/0       -       0.0.0.0/0       -         -      ulimit       -       -
permit u       0.0.0.0/0       -       0.0.0.0/0       443       -      limit        -       -
EOF</span>


<span class="token builtin class-name">echo</span> <span class="token string">&quot;SS5_OPTS=<span class="token entity" title="\\&quot;">\\&quot;</span> -u root -b 0.0.0.0:11888<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span> <span class="token operator">&gt;&gt;</span>/etc/sysconfig/ss5
<span class="token comment">##\u4F7F\u7528\u9ED8\u8BA4\u7AEF\u53E3</span>
<span class="token comment">##echo &quot;SS5_OPTS=\\&quot; -u root\\&quot;&quot; &gt;&gt;/etc/sysconfig/ss5</span>
<span class="token comment">##/etc/rc.d/init.d/ss5 \u6587\u4EF6\u4FEE\u6539\u81EA\u5B9A\u4E49\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u4E3A1080</span>
<span class="token comment">##daemon /usr/sbin/ss5 -t $SS5_OPTS -b 0.0.0.0:11888</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;auth        required     /usr/lib64/security/pam_unix.so&quot;</span><span class="token operator">&gt;&gt;</span>/etc/pam.d/ss5

<span class="token function">chmod</span> <span class="token number">700</span> /etc/rc.d/init.d/ss5
<span class="token function">chmod</span> +x  /etc/rc.d/init.d/ss5

<span class="token comment">##\u542F\u52A8ss5</span>
<span class="token function">service</span> ss5 start

<span class="token comment">##\u505C\u6B62ss5</span>
<span class="token comment">#service ss5 stop</span>

<span class="token comment">##\u52A0\u5165\u5F00\u673A\u81EA\u52A8\u542F\u52A8 centos6</span>
<span class="token comment">#chkconfig --add ss5</span>
<span class="token comment">#chkconfig --level 345 ss5 on</span>

<span class="token comment">##\u67E5\u770B\u65E5\u5FD7\u542F\u52A8\u662F\u5426\u6210\u529F</span>
<span class="token comment">#tail -f /var/log/ss5/ss5.log</span>

<span class="token function">wget</span> http://jaist.dl.sourceforge.net/project/ss5/ss5/3.8.9-8/ss5-3.8.9-8.tar.gz
<span class="token function">tar</span> zxvf ss5-3.8.9-8.tar.gz
<span class="token builtin class-name">cd</span> ss5-3.8.9-8
./configure <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment">##\u914D\u7F6ESS5\uFF1A</span>
    <span class="token comment"># vi /etc/opt/ss5/ss5.conf</span>
    <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
    <span class="token comment">#\u5B9E\u73B0\u7528\u6237\u8BA4\u8BC1\u5E76\u9650\u5236\u5E26\u5BBD\uFF1A</span>
    <span class="token builtin class-name">set</span> SS5_DNSORDER
    <span class="token builtin class-name">set</span> SS5_PAM_AUTH
    auth <span class="token number">0.0</span>.0.0/0 - u
    permit - <span class="token number">0.0</span>.0.0/0 - <span class="token number">0.0</span>.0.0/0 - - - <span class="token number">10240</span> -
    <span class="token comment">#\u5982\u679C\u8981\u5B9E\u73B0\u4E0D\u540C\u7528\u6237\u8BA4\u8BC1\u5E76\u5206\u522B\u9650\u5236\u5E26\u5BBD\uFF0C\u5728/etc/opt/ss5\u76EE\u5F55\u521B\u5EFAuser\u548Cfile\u4E24\u4E2A\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u4E2D\u542B\u6709\u8981\u8BA4\u8BC1\u7684\u7528\u6237\u540D\uFF1A</span>
    permit - <span class="token number">0.0</span>.0.0/0 - <span class="token number">0.0</span>.0.0/0 - - user <span class="token number">10240</span> -
    permit - <span class="token number">0.0</span>.0.0/0 - <span class="token number">0.0</span>.0.0/0 - - <span class="token function">file</span> <span class="token number">102400</span> -
    <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token comment">##\u914D\u7F6EPAM\u8BA4\u8BC1\uFF1A</span>
    <span class="token comment"># vi /etc/pam.d/ss5</span>
    <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
    auth optional /usr/lib/security/pam_mysql.so <span class="token assign-left variable">user</span><span class="token operator">=</span>ss5 <span class="token punctuation">\\</span>
    <span class="token assign-left variable">passwd</span><span class="token operator">=</span><span class="token number">121212</span> <span class="token assign-left variable">host</span><span class="token operator">=</span>localhost <span class="token assign-left variable">db</span><span class="token operator">=</span>ss5 <span class="token assign-left variable">table</span><span class="token operator">=</span>user <span class="token punctuation">\\</span>
    <span class="token assign-left variable">usercolumn</span><span class="token operator">=</span>username <span class="token assign-left variable">passwdcolumn</span><span class="token operator">=</span>passwd <span class="token assign-left variable">crypt</span><span class="token operator">=</span><span class="token number">2</span>
    account required /usr/lib/security/pam_mysql.so <span class="token assign-left variable">user</span><span class="token operator">=</span>ss5 <span class="token punctuation">\\</span>
    <span class="token assign-left variable">passwd</span><span class="token operator">=</span><span class="token number">121212</span> <span class="token assign-left variable">host</span><span class="token operator">=</span>localhost <span class="token assign-left variable">db</span><span class="token operator">=</span>ss5 <span class="token assign-left variable">table</span><span class="token operator">=</span>user <span class="token punctuation">\\</span>
    <span class="token assign-left variable">usercolumn</span><span class="token operator">=</span>username <span class="token assign-left variable">passwdcolumn</span><span class="token operator">=</span>passwd <span class="token assign-left variable">crypt</span><span class="token operator">=</span><span class="token number">2</span>
    <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token comment">##\u5B89\u88C5PAM_MYSQL\uFF1A</span>
    <span class="token comment"># tar -zxvf pam_mysql-0.7RC1.tar.gz</span>
    <span class="token comment"># cd pam_mysql-0.7RC1</span>
    <span class="token comment"># ./configure --with-openssl --with-mysql=/usr/local/mysql</span>
    <span class="token comment"># make</span>
    <span class="token comment"># make install</span>
    <span class="token comment"># echo &quot;/usr/lib/security&quot; &gt;&gt; /etc/ld.so.conf</span>
    <span class="token comment"># ldconfig</span>
<span class="token comment">##\u521B\u5EFA\u6570\u636E\u5E93:</span>
    <span class="token comment"># mysqladmin -u root -pmysqldbserver create ss5</span>
    <span class="token comment"># mysql -u root -pmysqldbserver</span>
    mysql<span class="token operator">&gt;</span> use ss5<span class="token punctuation">;</span>
    mysql<span class="token operator">&gt;</span> GRANT ALL PRIVILEGES ON ss5.* TO
    <span class="token punctuation">[</span>email<span class="token operator">=</span><span class="token string">&#39;ss5&#39;</span>@<span class="token string">&#39;localhost&#39;</span><span class="token punctuation">]</span><span class="token string">&#39;ss5&#39;</span>@<span class="token string">&#39;localhost&#39;</span><span class="token punctuation">[</span>/email<span class="token punctuation">]</span>
     IDENTIFIED BY <span class="token string">&#39;121212&#39;</span><span class="token punctuation">;</span>
    mysql<span class="token operator">&gt;</span> CREATE TABLE user <span class="token punctuation">(</span>ID int not null auto_increment,USERNAME varchar<span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>, PASSWD varchar<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span>, primary key<span class="token punctuation">(</span>ID<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">##\u6DFB\u52A0\u6D4B\u8BD5\u7528\u6237\uFF1A</span>
    mysql<span class="token operator">&gt;</span> insert into user <span class="token punctuation">(</span>username,passwd<span class="token punctuation">)</span> values <span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span>,password<span class="token punctuation">(</span><span class="token string">&#39;1234&#39;</span><span class="token punctuation">))</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[t];function l(c,i){return n(),a("div",null,o)}const m=s(p,[["render",l],["__file","ss5.html.vue"]]);export{m as default};
