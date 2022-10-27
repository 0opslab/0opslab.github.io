import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const t={},l=e(`<h3 id="\u5E38\u7528\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u64CD\u4F5C" aria-hidden="true">#</a> \u5E38\u7528\u64CD\u4F5C</h3><p>\u81EA\u589E\u8868</p><p>create table oldBoy (id INTEGER PRIMARY KEY AUTO_INCREMENT, name CHAR(30) NOT NULL, age integer , sex CHAR(15) ); # \u521B\u5EFA\u81EA\u589E\u8868 insert into oldBoy(name,age,sex) values(%s,%s,%s) # \u81EA\u589E\u63D2\u5165\u6570\u636E</p><p>\u767B\u5F55mysql\u7684\u547D\u4EE4</p><h1 id="\u683C\u5F0F-mysql-h-\u4E3B\u673A\u5730\u5740-u-\u7528\u6237\u540D-p-\u7528\u6237\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F-mysql-h-\u4E3B\u673A\u5730\u5740-u-\u7528\u6237\u540D-p-\u7528\u6237\u5BC6\u7801" aria-hidden="true">#</a> \u683C\u5F0F\uFF1A mysql -h \u4E3B\u673A\u5730\u5740 -u \u7528\u6237\u540D -p \u7528\u6237\u5BC6\u7801</h1><p>mysql -h110.110.110.110 -P3306 -uroot -p mysql -uroot -p -S /data1/mysql5/data/mysql.sock -A --default-character-set=GBK</p><p>shell\u6267\u884Cmysql\u547D\u4EE4</p><p>mysql -u$username -p$passwd -h$dbhost -P$dbport -A -e &quot;<br> use $dbname; delete from data where date=(&#39;$date1&#39;); &quot; # \u6267\u884C\u591A\u6761mysql\u547D\u4EE4 mysql -uroot -p -S mysql.sock -e &quot;use db;alter table gift add column accountid int(11) NOT NULL;flush privileges;&quot; # \u4E0D\u767B\u9646mysql\u63D2\u5165\u5B57\u6BB5</p><p>\u5907\u4EFD\u6570\u636E\u5E93</p><p>mysqldump -h host -u root -p --default-character-set=utf8 dbname &gt;dbname_backup.sql # \u4E0D\u5305\u62EC\u5E93\u540D\uFF0C\u8FD8\u539F\u9700\u5148\u521B\u5EFA\u5E93\uFF0C\u5728use mysqldump -h host -u root -p --database --default-character-set=utf8 dbname &gt;dbname_backup.sql # \u5305\u62EC\u5E93\u540D\uFF0C\u8FD8\u539F\u4E0D\u9700\u8981\u521B\u5EFA\u5E93 /bin/mysqlhotcopy -u root -p # mysqlhotcopy\u53EA\u80FD\u5907\u4EFDMyISAM\u5F15\u64CE mysqldump -u root -p -S mysql.sock --default-character-set=utf8 dbname table1 table2 &gt; /data/db.sql # \u5907\u4EFD\u8868 mysqldump -uroot -p123 -d database &gt; database.sql # \u5907\u4EFD\u6570\u636E\u5E93\u7ED3\u6784</p><p>innobackupex --user=root --password=&quot;&quot; --defaults-file=/data/mysql5/data/my_3306.cnf --socket=/data/mysql5/data/mysql.sock --slave-info --stream=tar --tmpdir=/data/dbbackup/temp /data/dbbackup/ 2&gt;/data/dbbackup/dbbackup.log | gzip 1&gt;/data/dbbackup/db50.tar.gz # xtrabackup\u5907\u4EFD\u9700\u5355\u72EC\u5B89\u88C5\u8F6F\u4EF6 \u4F18\u70B9: \u901F\u5EA6\u5FEB,\u538B\u529B\u5C0F,\u53EF\u76F4\u63A5\u6062\u590D\u4E3B\u4ECE\u590D\u5236</p><p>\u8FD8\u539F\u6570\u636E\u5E93</p><p>mysql -h host -u root -p dbname &lt; dbname_backup.sql<br> source \u8DEF\u5F84.sql # \u767B\u9646mysql\u540E\u8FD8\u539Fsql\u6587\u4EF6</p><p>\u8D4B\u6743\u9650</p><h1 id="\u6307\u5B9Aip-ip-\u672C\u673A-localhost-\u6240\u6709ip\u5730\u5740-\u901A\u5E38\u6307\u5B9A\u591A\u6761" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9Aip-ip-\u672C\u673A-localhost-\u6240\u6709ip\u5730\u5740-\u901A\u5E38\u6307\u5B9A\u591A\u6761" aria-hidden="true">#</a> \u6307\u5B9AIP: $IP \u672C\u673A: localhost \u6240\u6709IP\u5730\u5740: % # \u901A\u5E38\u6307\u5B9A\u591A\u6761</h1><p>grant all on zabbix.* to user@&quot;$IP&quot;; # \u5BF9\u73B0\u6709\u8D26\u53F7\u8D4B\u4E88\u6743\u9650 grant select on database.* to user@&quot;%&quot; Identified by &quot;passwd&quot;; # \u8D4B\u4E88\u67E5\u8BE2\u6743\u9650(\u6CA1\u6709\u7528\u6237\uFF0C\u76F4\u63A5\u521B\u5EFA) grant all privileges on database.* to user@&quot;$IP&quot; identified by &#39;passwd&#39;; # \u8D4B\u4E88\u6307\u5B9AIP\u6307\u5B9A\u7528\u6237\u6240\u6709\u6743\u9650(\u4E0D\u5141\u8BB8\u5BF9\u5F53\u524D\u5E93\u7ED9\u5176\u4ED6\u7528\u6237\u8D4B\u6743\u9650) grant all privileges on database.* to user@&quot;localhost&quot; identified by &#39;passwd&#39; with grant option; # \u8D4B\u4E88\u672C\u673A\u6307\u5B9A\u7528\u6237\u6240\u6709\u6743\u9650(\u5141\u8BB8\u5BF9\u5F53\u524D\u5E93\u7ED9\u5176\u4ED6\u7528\u6237\u8D4B\u6743\u9650) grant select, insert, update, delete on database.* to user@&#39;ip&#39;identified by &quot;passwd&quot;; # \u5F00\u653E\u7BA1\u7406\u64CD\u4F5C\u6307\u4EE4 revoke all on <em>.</em> from user@localhost; # \u56DE\u6536\u6743\u9650</p><p>\u66F4\u6539\u5BC6\u7801</p><p>update user set password=password(&#39;passwd&#39;) where user=&#39;root&#39; mysqladmin -u root password &#39;xuesong&#39;</p><p>mysql\u5FD8\u8BB0\u5BC6\u7801\u540E\u91CD\u7F6E</p><p>cd /data/mysql5 /data/mysql5/bin/mysqld_safe --user=mysql --skip-grant-tables --skip-networking &amp; update user set password=password(&#39;123123&#39;) where user=&#39;root&#39;;</p><p>mysql\u4E3B\u4ECE\u590D\u5236\u5931\u8D25\u6062\u590D</p><p>slave stop; reset slave; change master to master_host=&#39;10.10.10.110&#39;,master_port=3306,master_user=&#39;repl&#39;,master_password=&#39;repl&#39;,master_log_file=&#39;master-bin.000010&#39;,master_log_pos=107,master_connect_retry=60; slave start;</p><p>\u68C0\u6D4Bmysql\u4E3B\u4ECE\u590D\u5236\u5EF6\u8FDF{</p><p>1\u3001\u5728\u4ECE\u5E93\u5B9A\u65F6\u6267\u884C\u66F4\u65B0\u4E3B\u5E93\u4E2D\u7684\u4E00\u4E2Atimeout\u6570\u503C 2\u3001\u540C\u65F6\u53D6\u51FA\u4ECE\u5E93\u4E2D\u7684timeout\u503C\u5BF9\u6BD4\u5224\u65AD\u4ECE\u5E93\u4E0E\u4E3B\u5E93\u7684\u5EF6\u8FDF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./mysql/bin/mysqld_safe <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql <span class="token operator">&amp;</span>   <span class="token comment"># \u542F\u52A8mysql\u670D\u52A1</span>
./mysql/bin/mysqladmin <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-S</span> ./mysql/data/mysql.sock <span class="token function">shutdown</span>    <span class="token comment"># \u505C\u6B62mysql\u670D\u52A1</span>
mysqlcheck <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-S</span> mysql.sock <span class="token parameter variable">--optimize</span> <span class="token parameter variable">--databases</span> account       <span class="token comment"># \u68C0\u67E5\u3001\u4FEE\u590D\u3001\u4F18\u5316MyISAM\u8868</span>
mysqlbinlog slave-relay-bin.000001              <span class="token comment"># \u67E5\u770B\u4E8C\u8FDB\u5236\u65E5\u5FD7(\u62A5\u9519\u52A0\u7EDD\u5BF9\u8DEF\u5F84)</span>
mysqladmin <span class="token parameter variable">-h</span> myhost <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> create dbname   <span class="token comment"># \u521B\u5EFA\u6570\u636E\u5E93</span>

flush privileges<span class="token punctuation">;</span>             <span class="token comment"># \u5237\u65B0</span>
show databases<span class="token punctuation">;</span>               <span class="token comment"># \u663E\u793A\u6240\u6709\u6570\u636E\u5E93</span>
use dbname<span class="token punctuation">;</span>	                  <span class="token comment"># \u6253\u5F00\u6570\u636E\u5E93</span>
show tables<span class="token punctuation">;</span>                  <span class="token comment"># \u663E\u793A\u9009\u4E2D\u6570\u636E\u5E93\u4E2D\u6240\u6709\u7684\u8868</span>
desc tables<span class="token punctuation">;</span>                  <span class="token comment"># \u67E5\u770B\u8868\u7ED3\u6784</span>
drop database name<span class="token punctuation">;</span>           <span class="token comment"># \u5220\u9664\u6570\u636E\u5E93</span>
drop table name<span class="token punctuation">;</span>              <span class="token comment"># \u5220\u9664\u8868</span>
create database name<span class="token punctuation">;</span>         <span class="token comment"># \u521B\u5EFA\u6570\u636E\u5E93</span>
<span class="token keyword">select</span> \u5217\u540D\u79F0 from \u8868\u540D\u79F0<span class="token punctuation">;</span>    <span class="token comment"># \u67E5\u8BE2</span>
show grants <span class="token keyword">for</span> repl<span class="token punctuation">;</span>         <span class="token comment"># \u67E5\u770B\u7528\u6237\u6743\u9650</span>
show processlist<span class="token punctuation">;</span>             <span class="token comment"># \u67E5\u770Bmysql\u8FDB\u7A0B</span>
<span class="token keyword">select</span> user<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment"># \u67E5\u770B\u6240\u6709\u7528\u6237</span>
show slave status<span class="token punctuation">\\</span>G<span class="token punctuation">;</span>          <span class="token comment"># \u67E5\u770B\u4E3B\u4ECE\u72B6\u6001</span>
show variables<span class="token punctuation">;</span>               <span class="token comment"># \u67E5\u770B\u6240\u6709\u53C2\u6570\u53D8\u91CF</span>
show table status             <span class="token comment"># \u67E5\u770B\u8868\u7684\u5F15\u64CE\u72B6\u6001</span>
drop table <span class="token keyword">if</span> exists user                       <span class="token comment"># \u8868\u5B58\u5728\u5C31\u5220\u9664</span>
create table <span class="token keyword">if</span> not exists user                 <span class="token comment"># \u8868\u4E0D\u5B58\u5728\u5C31\u521B\u5EFA</span>
<span class="token keyword">select</span> host,user,password from user<span class="token punctuation">;</span>            <span class="token comment"># \u67E5\u8BE2\u7528\u6237\u6743\u9650 \u5148use mysql</span>
create table ka<span class="token punctuation">(</span>ka_id varchar<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>,qianshu int<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment"># \u521B\u5EFA\u8868</span>
SHOW VARIABLES LIKE <span class="token string">&#39;character_set_%&#39;</span><span class="token punctuation">;</span>          <span class="token comment"># \u67E5\u770B\u7CFB\u7EDF\u7684\u5B57\u7B26\u96C6\u548C\u6392\u5E8F\u65B9\u5F0F\u7684\u8BBE\u5B9A</span>
show variables like <span class="token string">&#39;%timeout%&#39;</span><span class="token punctuation">;</span>                <span class="token comment"># \u67E5\u770B\u8D85\u65F6(wait_timeout)</span>
delete from user where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>                 <span class="token comment"># \u5220\u9664\u7A7A\u7528\u6237</span>
delete from user where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&#39;sss&#39;</span> and <span class="token assign-left variable">host</span><span class="token operator">=</span><span class="token string">&#39;localhost&#39;</span> <span class="token punctuation">;</span>    <span class="token comment"># \u5220\u9664\u7528\u6237</span>
ALTER TABLE mytable ENGINE <span class="token operator">=</span> MyISAM <span class="token punctuation">;</span>                       <span class="token comment"># \u6539\u53D8\u73B0\u6709\u7684\u8868\u4F7F\u7528\u7684\u5B58\u50A8\u5F15\u64CE</span>
SHOW TABLE STATUS from  \u5E93\u540D  where <span class="token assign-left variable">Name</span><span class="token operator">=</span><span class="token string">&#39;\u8868\u540D&#39;</span><span class="token punctuation">;</span>            <span class="token comment"># \u67E5\u8BE2\u8868\u5F15\u64CE</span>
CREATE TABLE innodb <span class="token punctuation">(</span>id int, title char<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">))</span> ENGINE <span class="token operator">=</span> INNODB                     <span class="token comment"># \u521B\u5EFA\u8868\u6307\u5B9A\u5B58\u50A8\u5F15\u64CE\u7684\u7C7B\u578B(MyISAM\u6216INNODB)</span>
grant replication slave on *.* to <span class="token string">&#39;\u7528\u6237&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;\u5BC6\u7801&#39;</span><span class="token punctuation">;</span>               <span class="token comment"># \u521B\u5EFA\u4E3B\u4ECE\u590D\u5236\u7528\u6237</span>
ALTER TABLE player ADD INDEX weekcredit_faction_index <span class="token punctuation">(</span>weekcredit, faction<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment"># \u6DFB\u52A0\u7D22\u5F15</span>
alter table name <span class="token function">add</span> <span class="token function">column</span> accountid<span class="token punctuation">(</span>\u5217\u540D<span class="token punctuation">)</span>  int<span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> NOT NULL<span class="token punctuation">(</span>\u5B57\u6BB5\u4E0D\u4E3A\u7A7A<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment"># \u63D2\u5165\u5B57\u6BB5</span>
update <span class="token function">host</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">monitor_state</span><span class="token operator">=</span><span class="token string">&#39;Y&#39;</span>,hostname<span class="token operator">=</span><span class="token string">&#39;xuesong&#39;</span> where <span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token string">&#39;192.168.1.1&#39;</span><span class="token punctuation">;</span>     <span class="token comment"># \u66F4\u65B0\u6570\u636E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u636E\u5E93\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u64CD\u4F5C" aria-hidden="true">#</a> \u6570\u636E\u5E93\u64CD\u4F5C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">## \u521B\u5EFA\u6570\u636E\u5E76\u6307\u5B9A\u6570\u636E\u5E93</span>
create database <span class="token variable"><span class="token variable">\`</span>datas<span class="token variable">\`</span></span> character <span class="token builtin class-name">set</span> utf8mb4 collate utf8mb4_general_ci<span class="token punctuation">;</span>

<span class="token comment">#\u4E00\u822C\u73AF\u5883\u4E0D\u9700\u8981\u6E90\u7801\u5305\u7F16\u8BD1\u5B89\u88C5\u76F4\u63A5apt-get\u5373\u53EF</span>
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> mysql-server mysql-client
<span class="token comment"># \u505C\u6B62mysql\u670D\u52A1</span>
$ <span class="token function">sudo</span> <span class="token function">service</span> mysql stop
<span class="token comment"># \u5982\u679C\u63D0\u793A</span>
stop: Unknown job: mysql
<span class="token comment"># \u6267\u884C\u4E0B\u9762\u547D\u4EE4\u51E0\u4E2A</span>
<span class="token function">sudo</span> initctl reload-configuration
<span class="token comment"># \u505C\u6B62\u670D\u52A1\u540E\u7F16\u8F91\u4E0B\u9762\u7684\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/mysql/my.cnf
<span class="token comment"># \u542F\u52A8mysql\u670D\u52A1</span>
$ <span class="token function">sudo</span> <span class="token function">service</span> mysql start
<span class="token comment"># \u67E5\u770B\u6570\u636E\u5E93\u4FE1\u606F</span>
mysql<span class="token operator">&gt;</span><span class="token punctuation">\\</span>s
<span class="token comment"># \u67E5\u770B\u5F15\u64CE</span>
mysql<span class="token operator">&gt;</span> show engines<span class="token punctuation">;</span>
<span class="token comment"># \u67E5\u770B\u63D2\u4EF6</span>
mysql<span class="token operator">&gt;</span> show plugins<span class="token punctuation">;</span>
<span class="token comment"># \u67E5\u770B\u6570\u636E\u5E93\u6267\u884C\u8FDB\u7A0B</span>
mysql<span class="token operator">&gt;</span> show processlist <span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql\u7528\u6237\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#mysql\u7528\u6237\u7BA1\u7406" aria-hidden="true">#</a> mysql\u7528\u6237\u7BA1\u7406</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u7528\u6237:</span>
<span class="token comment"># \u6307\u5B9Aip\uFF1A192.118.1.1\u7684mjj\u7528\u6237\u767B\u5F55</span>
create user <span class="token string">&#39;alex&#39;</span>@<span class="token string">&#39;192.118.1.1&#39;</span> identified by <span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># \u6307\u5B9Aip\uFF1A192.118.1.\u5F00\u5934\u7684mjj\u7528\u6237\u767B\u5F55</span>
create user <span class="token string">&#39;alex&#39;</span>@<span class="token string">&#39;192.118.1.%&#39;</span> identified by <span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># \u6307\u5B9A\u4EFB\u4F55ip\u7684mjj\u7528\u6237\u767B\u5F55</span>
create user <span class="token string">&#39;alex&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># \u5220\u9664\u7528\u6237</span>
drop user <span class="token string">&#39;\u7528\u6237\u540D&#39;</span>@<span class="token string">&#39;IP\u5730\u5740&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># \u4FEE\u6539\u7528\u6237</span>
<span class="token function">rename</span> user <span class="token string">&#39;\u7528\u6237\u540D&#39;</span>@<span class="token string">&#39;IP\u5730\u5740&#39;</span> to <span class="token string">&#39;\u65B0\u7528\u6237\u540D&#39;</span>@<span class="token string">&#39;IP\u5730\u5740&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># \u4FEE\u6539\u5BC6\u7801</span>
<span class="token builtin class-name">set</span> password <span class="token keyword">for</span> <span class="token string">&#39;\u7528\u6237\u540D&#39;</span>@<span class="token string">&#39;IP\u5730\u5740&#39;</span><span class="token operator">=</span>Password<span class="token punctuation">(</span><span class="token string">&#39;\u65B0\u5BC6\u7801&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">#\u67E5\u770B\u6743\u9650</span>
show grants <span class="token keyword">for</span> <span class="token string">&#39;\u7528\u6237&#39;</span>@<span class="token string">&#39;IP\u5730\u5740&#39;</span>
<span class="token comment">#\u6388\u6743 mjj\u7528\u6237\u4EC5\u5BF9db1.t1\u6587\u4EF6\u6709\u67E5\u8BE2\u3001\u63D2\u5165\u548C\u66F4\u65B0\u7684\u64CD\u4F5C</span>
grant <span class="token keyword">select</span> ,insert,update on db1.t1 to <span class="token string">&quot;alex&quot;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># \u8868\u793A\u6709\u6240\u6709\u7684\u6743\u9650\uFF0C\u9664\u4E86grant\u8FD9\u4E2A\u547D\u4EE4\uFF0C\u8FD9\u4E2A\u547D\u4EE4\u662Froot\u624D\u6709\u7684\u3002mjj\u7528\u6237\u5BF9db1\u4E0B\u7684t1\u6587\u4EF6\u6709\u4EFB\u610F\u64CD\u4F5C</span>
grant all privileges  on db1.t1 to <span class="token string">&quot;alex&quot;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
<span class="token comment">#mjj\u7528\u6237\u5BF9db1\u6570\u636E\u5E93\u4E2D\u7684\u6587\u4EF6\u6267\u884C\u4EFB\u4F55\u64CD\u4F5C</span>
grant all privileges  on db1.* to <span class="token string">&quot;alex&quot;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
<span class="token comment">#mjj\u7528\u6237\u5BF9\u6240\u6709\u6570\u636E\u5E93\u4E2D\u6587\u4EF6\u6709\u4EFB\u4F55\u64CD\u4F5C</span>
grant all privileges  on *.*  to <span class="token string">&quot;alex&quot;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
<span class="token comment">#\u53D6\u6D88\u6743\u9650</span>
<span class="token comment"># \u53D6\u6D88mjj\u7528\u6237\u5BF9db1\u7684t1\u6587\u4EF6\u7684\u4EFB\u610F\u64CD\u4F5C</span>
revoke all on db1.t1 from <span class="token string">&#39;alex&#39;</span>@<span class="token string">&quot;%&quot;</span><span class="token punctuation">;</span>  
<span class="token comment"># \u53D6\u6D88\u6765\u81EA\u8FDC\u7A0B\u670D\u52A1\u5668\u7684mjj\u7528\u6237\u5BF9\u6570\u636E\u5E93db1\u7684\u6240\u6709\u8868\u7684\u6240\u6709\u6743\u9650</span>
revoke all on db1.* from <span class="token string">&#39;alex&#39;</span>@<span class="token string">&quot;%&quot;</span><span class="token punctuation">;</span>  
<span class="token comment"># \u53D6\u6D88\u6765\u81EA\u8FDC\u7A0B\u670D\u52A1\u5668\u7684mjj\u7528\u6237\u6240\u6709\u6570\u636E\u5E93\u7684\u6240\u6709\u7684\u8868\u7684\u6743\u9650</span>
revoke all privileges on *.* from <span class="token string">&#39;alex&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
<span class="token comment">#\u521B\u5EFA\u7528\u6237</span>
CREATE <span class="token environment constant">USER</span> <span class="token string">&quot;allen&quot;</span> IDENTIFIED BY <span class="token string">&quot;1234&quot;</span><span class="token punctuation">;</span>
<span class="token comment">#\u5220\u9664\u7528\u6237</span>
DROP <span class="token environment constant">USER</span> \u7528\u6237\u540D<span class="token punctuation">;</span>
<span class="token comment">#\u4FEE\u6539\u7528\u6237\u5BC6\u7801</span>
UPDATE <span class="token environment constant">USER</span> SET <span class="token assign-left variable">PASSWORD</span><span class="token operator">=</span>PASSWORD<span class="token punctuation">(</span><span class="token string">&#39;000000&#39;</span><span class="token punctuation">)</span> WHERE <span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span><span class="token string">&#39;ucenter&#39;</span><span class="token punctuation">;</span>
<span class="token comment">#\u6388\u4E8E\u7528\u6237\u6743\u9650</span>
GRANT ALL ON workcms.* TO ucenter@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&quot;111111&quot;</span><span class="token punctuation">;</span> 

<span class="token comment"># \u7528\u6237\u6743\u9650</span>
<span class="token comment"># mysql\u4E2D\u53EF\u4EE5\u7ED9\u4F60\u4E00\u4E2A\u7528\u6237\u6388\u4E88\u5982select,insert,update,delete\u7B49\u5176\u4E2D\u7684\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u6743\u9650,</span>
<span class="token comment">#\u4E3B\u8981\u4F7F\u7528grant\u547D\u4EE4,\u7528\u6CD5\u683C\u5F0F\u4E3A\uFF1A  </span>
grant \u6743\u9650 on \u6570\u636E\u5E93\u5BF9\u8C61 to \u7528\u6237  
<span class="token comment"># \u4E00\u3001grant \u666E\u901A\u6570\u636E\u7528\u6237\uFF0C\u67E5\u8BE2\u3001\u63D2\u5165\u3001\u66F4\u65B0\u3001\u5220\u9664 \u6570\u636E\u5E93\u4E2D\u6240\u6709\u8868\u6570\u636E\u7684\u6743\u5229\u3002  </span>
grant <span class="token keyword">select</span> on testdb.* to common_user@\u2019%\u2019  
grant insert on testdb.* to common_user@\u2019%\u2019  
grant update on testdb.* to common_user@\u2019%\u2019  
grant delete on testdb.* to common_user@\u2019%\u2019  
<span class="token comment">#\u6216\u8005\uFF0C\u7528\u4E00\u6761 mysql \u547D\u4EE4\u6765\u66FF\u4EE3\uFF1A  </span>
grant select, insert, update, delete on testdb.* to common_user@\u2019%\u2019

<span class="token comment">#grant \u6570\u636E\u5E93\u5F00\u53D1\u4EBA\u5458\uFF0C\u521B\u5EFA\u8868\u3001\u7D22\u5F15\u3001\u89C6\u56FE\u3001\u5B58\u50A8\u8FC7\u7A0B\u3001\u51FD\u6570\u3002\u3002\u3002\u7B49\u6743\u9650\u3002  </span>
grant \u521B\u5EFA\u3001\u4FEE\u6539\u3001\u5220\u9664 mysql \u6570\u636E\u8868\u7ED3\u6784\u6743\u9650\u3002  
grant create on testdb.* to developer@\u2019192.168.0.%\u2019<span class="token punctuation">;</span>  
grant alter on testdb.* to developer@\u2019192.168.0.%\u2019<span class="token punctuation">;</span>  
grant drop on testdb.* to developer@\u2019192.168.0.%\u2019<span class="token punctuation">;</span>  
grant \u64CD\u4F5C mysql \u5916\u952E\u6743\u9650\u3002  
grant references on testdb.* to developer@\u2019192.168.0.%\u2019<span class="token punctuation">;</span>  
grant \u64CD\u4F5C mysql \u4E34\u65F6\u8868\u6743\u9650\u3002  
grant create temporary tables on testdb.* to developer@\u2019192.168.0.%\u2019<span class="token punctuation">;</span> 
grant \u64CD\u4F5C mysql \u7D22\u5F15\u6743\u9650\u3002  
grant index on testdb.* to developer@\u2019192.168.0.%\u2019<span class="token punctuation">;</span>  
grant \u64CD\u4F5C mysql \u89C6\u56FE\u3001\u67E5\u770B\u89C6\u56FE\u6E90\u4EE3\u7801 \u6743\u9650\u3002  
grant create view on testdb.* to developer@\u2019192.168.0.%\u2019<span class="token punctuation">;</span>  
grant show view on testdb.* to developer@\u2019192.168.0.%\u2019<span class="token punctuation">;</span>  
grant \u64CD\u4F5C mysql \u5B58\u50A8\u8FC7\u7A0B\u3001\u51FD\u6570 \u6743\u9650\u3002  
grant create routine on testdb.* to developer@\u2019192.168.0.%\u2019<span class="token punctuation">;</span> - now, can show procedure status  
grant alter routine on testdb.* to developer@\u2019192.168.0.%\u2019<span class="token punctuation">;</span> - now, you can drop a procedure  
grant execute on testdb.* to developer@\u2019192.168.0.%\u2019<span class="token punctuation">;</span>

<span class="token comment">#grant \u666E\u901A dba \u7BA1\u7406\u67D0\u4E2A mysql \u6570\u636E\u5E93\u7684\u6743\u9650\u3002  </span>
grant all privileges on testdb to dba@\u2019localhost\u2019  
\u5176\u4E2D\uFF0C\u5173\u952E\u5B57 \u201Cprivileges\u201D \u53EF\u4EE5\u7701\u7565\u3002

<span class="token comment">#grant \u9AD8\u7EA7 dba \u7BA1\u7406 mysql \u4E2D\u6240\u6709\u6570\u636E\u5E93\u7684\u6743\u9650\u3002  </span>
grant all on *.* to dba@\u2019localhost\u2019

<span class="token comment">#mysql grant \u6743\u9650\uFF0C\u5206\u522B\u53EF\u4EE5\u4F5C\u7528\u5728\u591A\u4E2A\u5C42\u6B21\u4E0A\u3002grant \u4F5C\u7528\u5728\u6574\u4E2A mysql \u670D\u52A1\u5668\u4E0A\uFF1A  </span>
grant <span class="token keyword">select</span> on *.* to dba@localhost<span class="token punctuation">;</span> - dba \u53EF\u4EE5\u67E5\u8BE2 mysql \u4E2D\u6240\u6709\u6570\u636E\u5E93\u4E2D\u7684\u8868\u3002  
grant all on *.* to dba@localhost<span class="token punctuation">;</span> - dba \u53EF\u4EE5\u7BA1\u7406 mysql \u4E2D\u7684\u6240\u6709\u6570\u636E\u5E93  
<span class="token comment">#grant \u4F5C\u7528\u5728\u5355\u4E2A\u6570\u636E\u5E93\u4E0A\uFF1A  </span>
grant <span class="token keyword">select</span> on testdb.* to dba@localhost<span class="token punctuation">;</span> - dba \u53EF\u4EE5\u67E5\u8BE2 testdb \u4E2D\u7684\u8868\u3002  
<span class="token comment">#grant \u4F5C\u7528\u5728\u5355\u4E2A\u6570\u636E\u8868\u4E0A\uFF1A  </span>
grant select, insert, update, delete on testdb.orders to dba@localhost<span class="token punctuation">;</span> 
<span class="token comment">#grant \u4F5C\u7528\u5728\u8868\u4E2D\u7684\u5217\u4E0A\uFF1A  </span>
grant select<span class="token punctuation">(</span>id, se, rank<span class="token punctuation">)</span> on testdb.apache_log to dba@localhost<span class="token punctuation">;</span>  
<span class="token comment">#grant \u4F5C\u7528\u5728\u5B58\u50A8\u8FC7\u7A0B\u3001\u51FD\u6570\u4E0A\uFF1A  </span>
grant execute on procedure testdb.pr_add to \u2019dba\u2019@\u2019localhost\u2019  
grant execute on <span class="token keyword">function</span> testdb.fn_add to \u2019dba\u2019@\u2019localhost\u2019

<span class="token comment">#\u67E5\u770B mysql \u7528\u6237\u6743\u9650 \u67E5\u770B\u5F53\u524D\u7528\u6237\uFF08\u81EA\u5DF1\uFF09\u6743\u9650\uFF1A  </span>
show grants<span class="token punctuation">;</span>  
<span class="token comment">#\u67E5\u770B\u5176\u4ED6 mysql \u7528\u6237\u6743\u9650\uFF1A  </span>
show grants <span class="token keyword">for</span> dba@localhost<span class="token punctuation">;</span>

<span class="token comment">#\u64A4\u9500\u5DF2\u7ECF\u8D4B\u4E88\u7ED9 mysql \u7528\u6237\u6743\u9650\u7684\u6743\u9650\u3002  </span>
revoke \u8DDF grant \u7684\u8BED\u6CD5\u5DEE\u4E0D\u591A\uFF0C\u53EA\u9700\u8981\u628A\u5173\u952E\u5B57 \u201Cto\u201D \u6362\u6210 \u201Cfrom\u201D \u5373\u53EF\uFF1A 
grant all on *.* to dba@localhost<span class="token punctuation">;</span>  
revoke all on *.* from dba@localhost<span class="token punctuation">;</span>

<span class="token comment">#mysql grant\u3001revoke \u7528\u6237\u6743\u9650\u6CE8\u610F\u4E8B\u9879  </span>
<span class="token comment">#grant, revoke \u7528\u6237\u6743\u9650\u540E\uFF0C\u8BE5\u7528\u6237\u53EA\u6709\u91CD\u65B0\u8FDE\u63A5 mysql \u6570\u636E\u5E93\uFF0C\u6743\u9650\u624D\u80FD\u751F\u6548\u3002 </span>
<span class="token comment">#\u5982\u679C\u60F3\u8BA9\u6388\u6743\u7684\u7528\u6237\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u6743\u9650 grant \u7ED9\u5176\u4ED6\u7528\u6237\uFF0C\u9700\u8981\u9009\u9879 \u201Cgrant option\u201C  </span>
<span class="token comment">#grant select on testdb.* to dba@localhost with grant option;  </span>
<span class="token comment">#\u8FD9\u4E2A\u7279\u6027\u4E00\u822C\u7528\u4E0D\u5230\u3002\u5B9E\u9645\u4E2D\uFF0C\u6570\u636E\u5E93\u6743\u9650\u6700\u597D\u7531 dba \u6765\u7EDF\u4E00\u7BA1\u7406\u3002</span>
<span class="token comment">#\u6CE8\u610F\uFF1A\u4FEE\u6539\u5B8C\u6743\u9650\u4EE5\u540E \u4E00\u5B9A\u8981\u5237\u65B0\u670D\u52A1\uFF0C\u6216\u8005\u91CD\u542F\u670D\u52A1\uFF0C\u5237\u65B0\u670D\u52A1\u7528\uFF1Aflush privileges\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u67E5\u770Bmysql\u72B6\u6001\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770Bmysql\u72B6\u6001\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u67E5\u770BMySQL\u72B6\u6001\u53CA\u914D\u7F6E</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>show status \u67E5\u770B\u5F53\u524D\u8FDE\u63A5\u7684\u670D\u52A1\u5668\u72B6\u6001
show global status \u67E5\u770BMySQL\u670D\u52A1\u5668\u542F\u52A8\u4EE5\u6765\u7684\u72B6\u6001
show global variables \u67E5\u770BMySQL\u670D\u52A1\u5668\u914D\u7F6E\u7684\u53D8\u91CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u589E\u5220\u6539\u7684\u7EDF\u8BA1\u67E5\u770B-insert-delete-update-select\u67E5\u8BE2\u603B\u6570" tabindex="-1"><a class="header-anchor" href="#\u589E\u5220\u6539\u7684\u7EDF\u8BA1\u67E5\u770B-insert-delete-update-select\u67E5\u8BE2\u603B\u6570" aria-hidden="true">#</a> \u589E\u5220\u6539\u7684\u7EDF\u8BA1\u67E5\u770B insert delete update select\u67E5\u8BE2\u603B\u6570</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>show global status like <span class="token string">&quot;com_insert%&quot;</span>

show global status like <span class="token string">&quot;com_delete%&quot;</span>

show global status like <span class="token string">&quot;com_update%&quot;</span>

show global status like <span class="token string">&quot;com_select%&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="innodb\u5F71\u54CD\u884C\u6570" tabindex="-1"><a class="header-anchor" href="#innodb\u5F71\u54CD\u884C\u6570" aria-hidden="true">#</a> Innodb\u5F71\u54CD\u884C\u6570</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>show global status like <span class="token string">&quot;innodb_rows%&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="mysql\u8FDE\u63A5\u603B\u6B21\u6570" tabindex="-1"><a class="header-anchor" href="#mysql\u8FDE\u63A5\u603B\u6B21\u6570" aria-hidden="true">#</a> MySQL\u8FDE\u63A5\u603B\u6B21\u6570</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>show global status like <span class="token string">&quot;connection%&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="\u67E5\u770Bmysql\u6162\u67E5\u8BE2\u6B21\u6570" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770Bmysql\u6162\u67E5\u8BE2\u6B21\u6570" aria-hidden="true">#</a> \u67E5\u770BMySQL\u6162\u67E5\u8BE2\u6B21\u6570</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>show global status like <span class="token string">&quot;%slow%&quot;</span><span class="token punctuation">;</span>
show global variables like <span class="token string">&quot;%slow%&quot;</span><span class="token punctuation">;</span>
log_slow_queries <span class="token operator">=</span> on slow_query_log <span class="token operator">=</span> on \u8868\u660E\u6162\u67E5\u8BE2\u65E5\u5FD7\u5DF2\u7ECF\u5F00\u542F
slow_query_log_file \u6162\u67E5\u8BE2\u65E5\u5FD7\u6587\u4EF6\u7684\u8DEF\u5F84
show global variables like <span class="token string">&quot;%long_query%&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u5F53\u524D\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u5F53\u524D\u8FDE\u63A5" aria-hidden="true">#</a> \u5F53\u524D\u8FDE\u63A5</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>show processlist<span class="token punctuation">;</span>\u53EA\u5217\u51FA\u524D100\u6761\uFF0C\u5982\u679C\u60F3\u5168\u5217\u51FA\u8BF7\u4F7F\u7528show full processlist<span class="token punctuation">;</span> 
mysql<span class="token operator">&gt;</span> show processlist<span class="token punctuation">;</span> 
\u547D\u4EE4\uFF1A show status<span class="token punctuation">;</span> 
\u547D\u4EE4\uFF1Ashow status like <span class="token string">&#39;%\u4E0B\u9762\u53D8\u91CF%&#39;</span><span class="token punctuation">;</span> 
Aborted_clients \u7531\u4E8E\u5BA2\u6237\u6CA1\u6709\u6B63\u786E\u5173\u95ED\u8FDE\u63A5\u5DF2\u7ECF\u6B7B\u6389\uFF0C\u5DF2\u7ECF\u653E\u5F03\u7684\u8FDE\u63A5\u6570\u91CF\u3002 
Aborted_connects \u5C1D\u8BD5\u5DF2\u7ECF\u5931\u8D25\u7684MySQL\u670D\u52A1\u5668\u7684\u8FDE\u63A5\u7684\u6B21\u6570\u3002 
Connections \u8BD5\u56FE\u8FDE\u63A5MySQL\u670D\u52A1\u5668\u7684\u6B21\u6570\u3002 
Created_tmp_tables \u5F53\u6267\u884C\u8BED\u53E5\u65F6\uFF0C\u5DF2\u7ECF\u88AB\u521B\u9020\u4E86\u7684\u9690\u542B\u4E34\u65F6\u8868\u7684\u6570\u91CF\u3002 
Delayed_insert_threads \u6B63\u5728\u4F7F\u7528\u7684\u5EF6\u8FDF\u63D2\u5165\u5904\u7406\u5668\u7EBF\u7A0B\u7684\u6570\u91CF\u3002 
Delayed_writes \u7528INSERT DELAYED\u5199\u5165\u7684\u884C\u6570\u3002 
Delayed_errors \u7528INSERT DELAYED\u5199\u5165\u7684\u53D1\u751F\u67D0\u4E9B\u9519\u8BEF<span class="token punctuation">(</span>\u53EF\u80FD\u91CD\u590D\u952E\u503C<span class="token punctuation">)</span>\u7684\u884C\u6570\u3002 
Flush_commands \u6267\u884CFLUSH\u547D\u4EE4\u7684\u6B21\u6570\u3002 
Handler_delete \u8BF7\u6C42\u4ECE\u4E00\u5F20\u8868\u4E2D\u5220\u9664\u884C\u7684\u6B21\u6570\u3002 
Handler_read_first \u8BF7\u6C42\u8BFB\u5165\u8868\u4E2D\u7B2C\u4E00\u884C\u7684\u6B21\u6570\u3002 
Handler_read_key \u8BF7\u6C42\u6570\u5B57\u57FA\u4E8E\u952E\u8BFB\u884C\u3002 
Handler_read_next \u8BF7\u6C42\u8BFB\u5165\u57FA\u4E8E\u4E00\u4E2A\u952E\u7684\u4E00\u884C\u7684\u6B21\u6570\u3002 
Handler_read_rnd \u8BF7\u6C42\u8BFB\u5165\u57FA\u4E8E\u4E00\u4E2A\u56FA\u5B9A\u4F4D\u7F6E\u7684\u4E00\u884C\u7684\u6B21\u6570\u3002 
Handler_update \u8BF7\u6C42\u66F4\u65B0\u8868\u4E2D\u4E00\u884C\u7684\u6B21\u6570\u3002 
Handler_write \u8BF7\u6C42\u5411\u8868\u4E2D\u63D2\u5165\u4E00\u884C\u7684\u6B21\u6570\u3002 
Key_blocks_used \u7528\u4E8E\u5173\u952E\u5B57\u7F13\u5B58\u7684\u5757\u7684\u6570\u91CF\u3002 
Key_read_requests \u8BF7\u6C42\u4ECE\u7F13\u5B58\u8BFB\u5165\u4E00\u4E2A\u952E\u503C\u7684\u6B21\u6570\u3002 
Key_reads \u4ECE\u78C1\u76D8\u7269\u7406\u8BFB\u5165\u4E00\u4E2A\u952E\u503C\u7684\u6B21\u6570\u3002 
Key_write_requests \u8BF7\u6C42\u5C06\u4E00\u4E2A\u5173\u952E\u5B57\u5757\u5199\u5165\u7F13\u5B58\u6B21\u6570\u3002 
Key_writes \u5C06\u4E00\u4E2A\u952E\u503C\u5757\u7269\u7406\u5199\u5165\u78C1\u76D8\u7684\u6B21\u6570\u3002 
Max_used_connections \u540C\u65F6\u4F7F\u7528\u7684\u8FDE\u63A5\u7684\u6700\u5927\u6570\u76EE\u3002 
Not_flushed_key_blocks \u5728\u952E\u7F13\u5B58\u4E2D\u5DF2\u7ECF\u6539\u53D8\u4F46\u662F\u8FD8\u6CA1\u88AB\u6E05\u7A7A\u5230\u78C1\u76D8\u4E0A\u7684\u952E\u5757\u3002 
Not_flushed_delayed_rows \u5728INSERT DELAY\u961F\u5217\u4E2D\u7B49\u5F85\u5199\u5165\u7684\u884C\u7684\u6570\u91CF\u3002 
Open_tables \u6253\u5F00\u8868\u7684\u6570\u91CF\u3002 
Open_files \u6253\u5F00\u6587\u4EF6\u7684\u6570\u91CF\u3002 
Open_streams \u6253\u5F00\u6D41\u7684\u6570\u91CF<span class="token punctuation">(</span>\u4E3B\u8981\u7528\u4E8E\u65E5\u5FD7\u8BB0\u8F7D\uFF09 
Opened_tables \u5DF2\u7ECF\u6253\u5F00\u7684\u8868\u7684\u6570\u91CF\u3002 
Questions \u53D1\u5F80\u670D\u52A1\u5668\u7684\u67E5\u8BE2\u7684\u6570\u91CF\u3002 
Slow_queries \u8981\u82B1\u8D85\u8FC7long_query_time\u65F6\u95F4\u7684\u67E5\u8BE2\u6570\u91CF\u3002 
Threads_connected \u5F53\u524D\u6253\u5F00\u7684\u8FDE\u63A5\u7684\u6570\u91CF\u3002 
Threads_running \u4E0D\u5728\u7761\u7720\u7684\u7EBF\u7A0B\u6570\u91CF\u3002 
Uptime \u670D\u52A1\u5668\u5DE5\u4F5C\u4E86\u591A\u5C11\u79D2\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5907\u4EFD\u4E0E\u6062\u590D" tabindex="-1"><a class="header-anchor" href="#\u5907\u4EFD\u4E0E\u6062\u590D" aria-hidden="true">#</a> \u5907\u4EFD\u4E0E\u6062\u590D</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u600E\u6837\u5217\u51FA mysqldump \u4E2D\u7684\u6240\u6709\u9009\u9879\uFF1F \u4E2D\u5E38\u7528\u7684\u9009\u9879\u662F\uFF1F</span>
mysqldump \u2013help
mysqldump 
All-databases
Databases
Routines
Single-transaction \uFF08\u5B83\u4E0D\u4F1A\u9501\u4F4F\u8868\uFF09 \u2013 \u4E00\u76F4\u5728 innodb databases \u4E2D\u4F7F\u7528
Master-data \u2013 \u590D\u5236 \uFF08\u73B0\u5728\u5FFD\u7565\u4E86\uFF09
No-data \u2013 \u5B83\u5C06 dump \u4E00\u4E2A\u6CA1\u6709\u6570\u636E\u7684\u7A7A\u767D\u6570\u636E\u5E93
<span class="token comment">#\u2013singletransaction \u9009\u9879\u907F\u514D\u4E86 innodb databases \u5907\u4EFD\u671F\u95F4\u7684\u4EFB\u4F55\u9501\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u8FD9\u4E2A\u9009\u9879\uFF0C\u5728\u5907\u4EFD\u671F\u95F4\uFF0C\u6CA1\u6709\u9501</span>

mysqldump <span class="token parameter variable">-u</span> <span class="token punctuation">[</span>uname<span class="token punctuation">]</span> -p<span class="token punctuation">[</span>pass<span class="token punctuation">]</span> \u2013databases <span class="token punctuation">[</span>dbname<span class="token punctuation">]</span><span class="token punctuation">[</span>dbname2<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token punctuation">[</span>backupfile.sql<span class="token punctuation">]</span>

<span class="token comment">##mysqldump\u547D\u4EE4</span>
mysqldump <span class="token parameter variable">-u</span> <span class="token punctuation">[</span>uname<span class="token punctuation">]</span> -p<span class="token punctuation">[</span>pass<span class="token punctuation">]</span> \u2013databases <span class="token punctuation">[</span>dbname<span class="token punctuation">]</span><span class="token punctuation">[</span>dbname2<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token punctuation">[</span>backupfile.sql<span class="token punctuation">]</span>

<span class="token comment">#\u4F7F\u7528 mysqldump \u600E\u6837\u5907\u4EFD\u6240\u6709\u6570\u636E\u5E93</span>
mysqldump <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> \u2013all-databases <span class="token operator">&gt;</span> backupfile.sql

<span class="token comment"># mysqldump \u600E\u6837\u5907\u4EFD\u6307\u5B9A\u7684\u6570\u636E\u5E93</span>
mysqldump <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> \u2013databases school hospital <span class="token operator">&gt;</span> backupfile.sql

<span class="token comment">#  mysqldump \u600E\u6837\u5907\u4EFD\u6307\u5B9A\u7684\u8868</span>
mysqldump \u2013user<span class="token operator">=</span>root \u2013password<span class="token operator">=</span>mypassword <span class="token parameter variable">-h</span> localhost databasename table_name_to_dump table_name_to_dump_2 <span class="token operator">&gt;</span> dump_only_two_tables_file.sql

<span class="token comment"># \u4EC5\u83B7\u53D6 DDL</span>
mysqldump <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> \u2013all-databases \u2013no-data <span class="token operator">&gt;</span> backupfile.sql

<span class="token comment"># \u600E\u6837\u5907\u4EFD\u4F4D\u4E8E\u5176\u4ED6\u670D\u52A1\u5668\u7684\u8FDC\u7A0B\u6570\u636E\u5E93</span>
mysqldump <span class="token parameter variable">-h</span> <span class="token number">172.16</span>.25.126 <span class="token parameter variable">-u</span> root <span class="token parameter variable">-ppass</span> dbname <span class="token operator">&gt;</span> dbname.sql

<span class="token comment"># mysqldump \u5168\u5907\u6062\u590D</span>
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> db_name <span class="token operator">&lt;</span> \u5168\u5907.sql

<span class="token comment"># mysql \u547D\u4EE4\u884C\u4E0B</span>
<span class="token builtin class-name">source</span> \u5168\u5907.sql

<span class="token comment">#\u4F7F\u7528 mysqldump \u600E\u6837\u5907\u4EFD\u6240\u6709\u6570\u636E\u5E93\uFF1F</span>
mysqldump <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> \u2013all-databases <span class="token operator">&gt;</span> backupfile.sql

<span class="token comment">#\u4F7F\u7528 mysqldump \u600E\u6837\u5907\u4EFD\u6307\u5B9A\u7684\u6570\u636E\u5E93\uFF1F</span>
mysqldump <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> \u2013databases school hospital <span class="token operator">&gt;</span> backupfile.sql


<span class="token comment">#\u4F7F\u7528 mysqldump \u600E\u6837\u5907\u4EFD\u6307\u5B9A\u7684\u8868\uFF1F</span>
mysqldump \u2013user<span class="token operator">=</span>root \u2013password<span class="token operator">=</span>mypassword <span class="token parameter variable">-h</span> localhost databasename table_name_to_dump
table_name_to_dump_2 <span class="token operator">&gt;</span> dump_only_two_tables_file.sql

<span class="token comment">#\u6211\u4E0D\u60F3\u8981\u6570\u636E\uFF0C\u600E\u6837\u4EC5\u83B7\u53D6 DDL\uFF1F</span>
mysqldump <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> \u2013all-databases \u2013no-data <span class="token operator">&gt;</span> backupfile.sql


<span class="token comment">#\u4E00\u6B21 mysqldump \u5907\u4EFD\u82B1\u8D39\u591A\u957F\u65F6\u95F4\uFF1F</span>
<span class="token comment">#\u8FD9\u4F9D\u8D56\u4E8E\u6570\u636E\u5E93\u5927\u5C0F\uFF0C100 GB \u5927\u5C0F\u7684\u6570\u636E\u5E93\u53EF\u80FD\u82B1\u8D39\u4E24\u5C0F\u65F6\u6216\u66F4\u957F\u65F6\u95F4</span>

<span class="token comment"># \u6837\u5907\u4EFD\u4F4D\u4E8E\u5176\u4ED6\u670D\u52A1\u5668\u7684\u8FDC\u7A0B\u6570\u636E\u5E93\uFF1F</span>
mysqldump <span class="token parameter variable">-h</span> <span class="token number">172.16</span>.25.126 <span class="token parameter variable">-u</span> root <span class="token parameter variable">-ppass</span> dbname <span class="token operator">&gt;</span> dbname.sql


<span class="token comment">#\u2013routines \u9009\u9879\u7684\u542B\u4E49\u662F\u4EC0\u4E48\uFF1F</span>
<span class="token comment">#\u901A\u8FC7\u4F7F\u7528 -routines \u4EA7\u751F\u7684\u8F93\u51FA\u5305\u542B CREATE PROCEDURE \u548C CREATE FUNCTION</span>
<span class="token comment">#\u8BED\u53E5\u7528\u4E8E\u91CD\u65B0\u521B\u5EFA routines\u3002\u5982\u679C\u4F60\u6709 procedures \u6216 functions \u4F60\u9700\u8981\u4F7F\u7528\u8FD9\u4E2A\u9009\u9879</span>
<span class="token comment">#\u4F7F\u7528 mysqldump \u5907\u4EFD\u7684\u5E38\u7528\u547D\u4EE4\u662F\u4EC0\u4E48\uFF1F</span>
<span class="token function">nohup</span> mysqldump \u2013socket<span class="token operator">=</span>mysql.sock \u2013user<span class="token operator">=</span>user1 \u2013password<span class="token operator">=</span>pass \u2013single-transaction
\u2013flush-logs \u2013master-data<span class="token operator">=</span><span class="token number">2</span> \u2013all-databases \u2013extended-insert \u2013quick \u2013routines <span class="token operator">&gt;</span> market_dump.sql <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> market_dump.err <span class="token operator">&amp;</span>

<span class="token comment">#\u4F7F\u7528 mysqldump \u600E\u6837\u538B\u7F29\u4E00\u4E2A\u5907\u4EFD\uFF1F\u6CE8\u610F: \u538B\u7F29\u4F1A\u964D\u4F4E\u5907\u4EFD\u7684\u901F\u5EA6</span>
Mysqldump <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> backup.sql.gz

<span class="token comment">#\u600E\u6837\u901A\u8FC7\u4F7F\u7528 mysqldump \u6765\u6062\u590D\u5907\u4EFD\uFF1F- \u4F7F\u7528\u6765\u6E90\u6570\u636E\u7684\u65B9\u6CD5</span>
Mysql \u2013u root \u2013p <span class="token operator">&lt;</span> backup.sql

<span class="token comment">#\u5728\u6062\u590D\u671F\u95F4\u6211\u60F3\u8BB0\u5F55\u9519\u8BEF\u5230\u65E5\u5FD7\u4E2D\uFF0C\u6211\u4E5F\u60F3\u770B\u770B\u6062\u590D\u7684\u6267\u884C\u65F6\u95F4\uFF1F</span>
Time Mysql \u2013u root \u2013p <span class="token operator">&lt;</span> backup.sql <span class="token operator">&gt;</span> backup.out <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>

<span class="token comment">#\u600E\u6837\u4ECE\u4E00\u4E2A\u591A\u6570\u636E\u5E93\u5907\u4EFD\u4E2D\u63D0\u53D6\u4E00\u4E2A\u6570\u636E\u5E93\u5907\u4EFD\uFF08\u5047\u8BBE\u6570\u636E\u5E93\u540D\u5B57\u662F test\uFF09\uFF1F</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/^-- Current Database: \`test\`/,/^-- Current Database: \`/p&#39;</span> fulldump.sql <span class="token operator">&gt;</span> test.sql
<span class="token comment"># \u5BFC\u51FA\u6570\u636E\u5E93\u4E3Adbname\u7684\u8868\u7ED3\u6784</span>
mysqldump <span class="token parameter variable">-uuser</span> <span class="token parameter variable">-pdbpasswd</span> <span class="token parameter variable">-d</span> dbname <span class="token operator">&gt;</span>db.sql<span class="token punctuation">;</span> 

<span class="token comment"># \u5BFC\u51FA\u6570\u636E\u5E93\u4E3Adbname\u67D0\u5F20\u8868\u7ED3\u6784</span>
mysqldump <span class="token parameter variable">-uuser</span> <span class="token parameter variable">-pdbpasswd</span> <span class="token parameter variable">-d</span> dbname table_name<span class="token operator">&gt;</span>db.sql<span class="token punctuation">;</span>

<span class="token comment"># \u5BFC\u51FA\u6570\u636E\u5E93\u4E3Adbname\u6240\u6709\u8868\u7ED3\u6784\u53CA\u8868\u6570\u636E</span>
mysqldump <span class="token parameter variable">-uuser</span> <span class="token parameter variable">-pdbpasswd</span>  dbname <span class="token operator">&gt;</span>db.sql<span class="token punctuation">;</span>

<span class="token comment"># \u5BFC\u51FA\u6570\u636E\u5E93\u4E3Adbname\u67D0\u5F20\u8868\u7ED3\u6784\u53CA\u8868\u6570\u636E</span>
mysqldump <span class="token parameter variable">-uuser</span> <span class="token parameter variable">-pdbpasswd</span> dbname table_name<span class="token operator">&gt;</span>db.sql<span class="token punctuation">;</span>

<span class="token comment"># \u6279\u91CF\u5BFC\u51FAdbname\u6570\u636E\u5E93\u4E2D\u591A\u5F20\u8868\u7ED3\u6784\u53CA\u8868\u6570\u636E</span>
mysqldump <span class="token parameter variable">-uuser</span> <span class="token parameter variable">-pdbpasswd</span> dbname table_name1 table_name2 table_name<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span>db.sql<span class="token punctuation">;</span>

<span class="token comment"># \u6279\u91CF\u5BFC\u51FAdbname\u6570\u636E\u5E93\u4E2D\u591A\u5F20\u8868\u7ED3\u6784</span>
mysqldump <span class="token parameter variable">-uuser</span> <span class="token parameter variable">-pdbpasswd</span> <span class="token parameter variable">-d</span> dbname table_name1 table_name2 table_name<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span>db.sql<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5176\u4ED6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u64CD\u4F5C" aria-hidden="true">#</a> \u5176\u4ED6\u64CD\u4F5C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728\u8BE5\u6587\u4EF6\u7684[mysqld]\u4E0B\u9762\u65B0\u589E\u5982\u4E0B\u914D\u7F6E
\`\`\`bash
# \u65B0\u589E
character_set_server=utf8  
init_connect=&#39;SET NAMES utf8&#39;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5E38\u7528sql" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528sql" aria-hidden="true">#</a> \u5E38\u7528sql</h4><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># \u968F\u673A</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> address <span class="token keyword">WHERE</span> id <span class="token operator">&gt;=</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> floor<span class="token punctuation">(</span>RAND<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">FROM</span> address<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> id <span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">10</span>

<span class="token comment"># \u968F\u673A</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span><span class="token punctuation">,</span>RAND<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> r <span class="token keyword">FROM</span> address <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> r <span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">10</span>


<span class="token comment"># insert into select from\u7684\u4F7F\u7528</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> db1_name<span class="token punctuation">(</span>field1<span class="token punctuation">,</span>field2<span class="token punctuation">)</span> <span class="token keyword">SELECT</span> field1<span class="token punctuation">,</span>field2 <span class="token keyword">FROM</span> db2_name

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> a<span class="token punctuation">(</span>field1<span class="token punctuation">,</span>field2<span class="token punctuation">)</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> f1<span class="token punctuation">,</span>f2 <span class="token keyword">FROM</span> b <span class="token keyword">JOIN</span> c<span class="token punctuation">)</span> <span class="token keyword">AS</span> tb

<span class="token comment"># create table as select </span>

<span class="token comment"># \u590D\u5236\u8868\u548C\u8868\u6570\u636E</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> app_enword_user_old <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> app_enword_user<span class="token punctuation">;</span>

<span class="token comment">#\u590D\u5236\u5168\u90E8\u6570\u636E</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">into</span> new_table <span class="token keyword">from</span> old_table<span class="token punctuation">;</span>



<span class="token comment"># To backup all databases \u5907\u4EFD\u6240\u6709\u6570\u636E\u5E93</span>
mysqldump <span class="token comment">--all-databases --all-routines -u root -p &gt; ~/fulldump.sql</span>

<span class="token comment"># To restore all databases \u8981\u8FD8\u539F\u6240\u6709\u6570\u636E\u5E93</span>
mysql <span class="token operator">-</span>u root <span class="token operator">-</span>p  <span class="token operator">&lt;</span> <span class="token operator">~</span><span class="token operator">/</span>fulldump<span class="token punctuation">.</span><span class="token keyword">sql</span>

<span class="token comment"># To create a database in utf8 charset \u5728utf8 charset\u4E2D\u521B\u5EFA\u6570\u636E\u5E93</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> owa <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci<span class="token punctuation">;</span>

<span class="token comment"># To add a user and give rights on the given database</span>
<span class="token comment">#\u6DFB\u52A0\u7528\u6237\u5E76\u6388\u4E88\u7ED9\u5B9A\u6570\u636E\u5E93\u6743\u9650</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">PRIVILEGES</span> <span class="token keyword">ON</span> <span class="token keyword">database</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;user&#39;</span><span class="token variable">@&#39;localhost&#39;</span>IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;password&#39;</span> <span class="token keyword">WITH</span> <span class="token keyword">GRANT</span> <span class="token keyword">OPTION</span><span class="token punctuation">;</span>

<span class="token comment">#To list the privileges granted to the account that you are using to connect to the server. Any of the 3 statements will work. </span>
<span class="token comment">#\u5217\u51FA\u6388\u4E88\u7528\u4E8E\u8FDE\u63A5\u670D\u52A1\u5668\u7684\u5E10\u6237\u7684\u6743\u9650\u3002 3\u4E2A\u9648\u8FF0\u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A\u90FD\u53EF\u4EE5\u3002</span>
<span class="token keyword">SHOW</span> GRANTS <span class="token keyword">FOR</span> <span class="token keyword">CURRENT_USER</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SHOW</span> GRANTS<span class="token punctuation">;</span>
<span class="token keyword">SHOW</span> GRANTS <span class="token keyword">FOR</span> <span class="token keyword">CURRENT_USER</span><span class="token punctuation">;</span>

<span class="token comment"># Basic SELECT Statement</span>
<span class="token comment">#\u57FA\u672CSELECT\u8BED\u53E5</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> tbl_name<span class="token punctuation">;</span>

<span class="token comment"># Basic INSERT Statement</span>
<span class="token comment">#\u57FA\u672CINSERT\u8BED\u53E5</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tbl_name <span class="token punctuation">(</span>col1<span class="token punctuation">,</span>col2<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span>col1<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># Basic UPDATE Statement</span>
<span class="token comment">#\u57FA\u672C\u66F4\u65B0\u58F0\u660E</span>
<span class="token keyword">UPDATE</span> tbl_name <span class="token keyword">SET</span> col1 <span class="token operator">=</span> <span class="token string">&quot;example&quot;</span><span class="token punctuation">;</span>

<span class="token comment"># Basic DELETE Statement</span>
<span class="token comment">#\u57FA\u672CDELETE\u8BED\u53E5</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> tbl_name <span class="token keyword">WHERE</span> <span class="token keyword">user</span> <span class="token operator">=</span> <span class="token string">&#39;jcole&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># To check stored procedure</span>
<span class="token comment">#\u68C0\u67E5\u5B58\u50A8\u8FC7\u7A0B</span>
<span class="token keyword">SHOW</span> <span class="token keyword">PROCEDURE</span> <span class="token keyword">STATUS</span><span class="token punctuation">;</span>

<span class="token comment"># To check stored function</span>
<span class="token comment">#\u68C0\u67E5\u5B58\u50A8\u7684\u529F\u80FD</span>
<span class="token keyword">SHOW</span> <span class="token keyword">FUNCTION</span> <span class="token keyword">STATUS</span><span class="token punctuation">;</span>

<span class="token comment"># \u4FEE\u6539\u81EA\u589E\u957F\u8D77\u59CB\u503C</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> sys_upload_file <span class="token keyword">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">142877</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql\u5BFC\u5165\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#mysql\u5BFC\u5165\u6587\u4EF6" aria-hidden="true">#</a> mysql\u5BFC\u5165\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8BB0\u5F55MySQL\u5BFC\u5165txt\u6587\u4EF6\u547D\u4EE4\uFF1Aload data infile [\u6587\u4EF6\u8DEF\u5F84/\u6587\u4EF6\u540D.txt] into table [\u8868\u540D](col1,col2,col3...);</span>
load data infile <span class="token string">&#39;/home/data/test.txt&#39;</span> into table temp<span class="token punctuation">(</span>col1,col2,col3<span class="token punctuation">)</span><span class="token punctuation">;</span>\u9ED8\u8BA4\u5206\u9694\u7B26\u662F\u7A7A\u683C<span class="token punctuation">;</span>

load data infile <span class="token string">&quot;/data/load.txt&quot;</span> replace into table <span class="token builtin class-name">test</span> fields terminated by <span class="token string">&#39;,&#39;</span> lines terminated by <span class="token string">&#39;/n&#39;</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql\u4E3B\u4ECE\u590D\u5236\u5931\u8D25\u6062\u590D" tabindex="-1"><a class="header-anchor" href="#mysql\u4E3B\u4ECE\u590D\u5236\u5931\u8D25\u6062\u590D" aria-hidden="true">#</a> mysql\u4E3B\u4ECE\u590D\u5236\u5931\u8D25\u6062\u590D</h2><p>slave stop; reset slave; change master to master_host=&#39;10.10.10.110&#39;,master_port=3306,master_user=&#39;repl&#39;,master_password=&#39;repl&#39;,master_log_file=&#39;master-bin.000010&#39;,master_log_pos=107,master_connect_retry=60; slave start;</p><h2 id="\u68C0\u6D4Bmysql\u4E3B\u4ECE\u590D\u5236\u5EF6\u8FDF" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4Bmysql\u4E3B\u4ECE\u590D\u5236\u5EF6\u8FDF" aria-hidden="true">#</a> \u68C0\u6D4Bmysql\u4E3B\u4ECE\u590D\u5236\u5EF6\u8FDF</h2><p>1\u3001\u5728\u4ECE\u5E93\u5B9A\u65F6\u6267\u884C\u66F4\u65B0\u4E3B\u5E93\u4E2D\u7684\u4E00\u4E2Atimeout\u6570\u503C 2\u3001\u540C\u65F6\u53D6\u51FA\u4ECE\u5E93\u4E2D\u7684timeout\u503C\u5BF9\u6BD4\u5224\u65AD\u4ECE\u5E93\u4E0E\u4E3B\u5E93\u7684\u5EF6\u8FDF</p>`,53),p=[l];function i(o,c){return n(),a("div",null,p)}const d=s(t,[["render",i],["__file","mysql.html.vue"]]);export{d as default};
