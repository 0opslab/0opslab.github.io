import{_ as s,o as a,c as n,e}from"./app.a667bd71.js";const l={},p=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:mysqldump\u5907\u4EFD\u6570\u636E\u5E93\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span>
<span class="token assign-left variable">pwd</span><span class="token operator">=</span><span class="token string">&quot;1234&quot;</span>
<span class="token assign-left variable">dbs</span><span class="token operator">=</span><span class="token string">&quot;db1  db2&quot;</span> 
<span class="token assign-left variable">backuppath</span><span class="token operator">=</span><span class="token string">&quot;/home/mysqldatabak&quot;</span>
<span class="token assign-left variable">day</span><span class="token operator">=</span><span class="token number">15</span>
<span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token variable">$backpath</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$backuppath</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$backuppath</span>

<span class="token assign-left variable">backupname</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d<span class="token variable">)</span></span>
<span class="token keyword">for</span> <span class="token for-or-select variable">db</span> <span class="token keyword">in</span> <span class="token variable">$dbs</span><span class="token punctuation">;</span>
<span class="token keyword">do</span>
   mysqldump -u<span class="token variable">$id</span> -p<span class="token variable">$pwd</span> <span class="token parameter variable">-S</span> /var/lib/mysql/mysql.sock <span class="token variable">$db</span> <span class="token operator">&gt;</span><span class="token variable">$backupname_</span><span class="token variable">$db</span>.sql 
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span> 
   <span class="token keyword">then</span>
       <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d<span class="token variable">)</span></span><span class="token string">&quot; <span class="token variable">$db</span>  mysqldump sucess&quot;</span><span class="token operator">&gt;&gt;</span>mysql.log 
   <span class="token keyword">else</span>
      <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d<span class="token variable">)</span></span><span class="token string">&quot;  <span class="token variable">$db</span> mysql dump failed&quot;</span><span class="token operator">&gt;&gt;</span>mysql.log
      <span class="token builtin class-name">exit</span> <span class="token number">0</span>
   <span class="token keyword">fi</span>
<span class="token keyword">done</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">db</span> <span class="token keyword">in</span> <span class="token variable">$dbs</span><span class="token punctuation">;</span>
<span class="token keyword">do</span>
	<span class="token function">tar</span> <span class="token parameter variable">-czf</span> <span class="token variable">$db</span><span class="token builtin class-name">.</span><span class="token variable">$backupname</span>.tar.gz <span class="token variable">$db</span>.sql
<span class="token keyword">done</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d<span class="token variable">)</span></span><span class="token string">&quot; tar sucess&quot;</span><span class="token operator">&gt;&gt;</span>mysql.log
<span class="token keyword">else</span>
   <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d<span class="token variable">)</span></span><span class="token string">&quot; tar failed&quot;</span><span class="token operator">&gt;&gt;</span>mysql.log
   <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">fi</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> *.sql
<span class="token assign-left variable">delname</span><span class="token operator">=</span>mysql_<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$day</span> day ago&quot;</span> +%Y-%m-%d<span class="token variable">)</span></span>.tar.gz
<span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$delname</span>


<span class="token comment">### \u53E6\u5916\u4E00\u6B3E\u811A\u672C</span>

<span class="token assign-left variable">USERNAME</span><span class="token operator">=</span>root
<span class="token assign-left variable">PASSWORD</span><span class="token operator">=</span>m111111111111
<span class="token comment">#Date Format</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d<span class="token variable">\`</span></span>
<span class="token comment">#Back directory</span>
<span class="token assign-left variable">DAYS</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /backup/db-backup/<span class="token variable">\${DATE}</span>
<span class="token assign-left variable">BACKUP_DIR</span><span class="token operator">=</span>/backup/db-backup/<span class="token variable">\${DATE}</span>
<span class="token comment">#MySQL directory</span>
<span class="token assign-left variable">MYSQL_DIR</span><span class="token operator">=</span>/usr/bin
<span class="token comment">#Go to the backup directory</span>
<span class="token builtin class-name">cd</span> <span class="token variable">\${BACKUP_DIR}</span>
<span class="token comment">#The first instance of the backup</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> databasename
<span class="token keyword">do</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">\${databasename}</span>_<span class="token variable">\${DATE}</span>.sql <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> MySQL Database <span class="token variable">\${databasename}</span> <span class="token variable">\${DATE}</span> backup <span class="token function">file</span> already exists.
<span class="token keyword">else</span>
<span class="token variable">\${MYSQL_DIR}</span>/mysqldump -u<span class="token variable">\${USERNAME}</span> -p<span class="token variable">\${PASSWORD}</span> <span class="token variable">\${databasename}</span> --default-character-set<span class="token operator">=</span>utf8 <span class="token parameter variable">--opt</span> <span class="token parameter variable">-Q</span> <span class="token parameter variable">-R</span> --skip-lock-tables <span class="token operator">&gt;</span> <span class="token variable">\${databasename}</span>_<span class="token variable">\${DATE}</span>.sql
<span class="token keyword">fi</span>
<span class="token keyword">done</span> <span class="token operator">&lt;</span> /home/databasename.txt
<span class="token function">find</span> /backup/db-backup/ <span class="token parameter variable">-name</span> <span class="token string">&quot;20*&quot;</span> <span class="token parameter variable">-type</span> d <span class="token parameter variable">-mtime</span> +22<span class="token operator">|</span><span class="token function">tee</span> <span class="token parameter variable">-a</span> /home/del.txt<span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;&gt;</span>/home/err.txt

<span class="token comment">##\u5148\u505ASSH\u65E0\u5BC6\u7801\u8BA4\u8BC1\uFF0CSCP\u4F20\u5230\u53E6\u5916\u4E00\u53F0\u5907\u4EFD</span>
/usr/bin/scp <span class="token parameter variable">-r</span> /backup/db-backup/<span class="token variable">\${DATE}</span> root@10.10.1.112:/mybk/db-backup/bak/

<span class="token comment">##\u5220\u9664\u65E7\u5907\u4EFD\u6587\u4EF6</span>
<span class="token comment">#find /mybk/db-backup/ -name &quot;20*&quot; -type f -mtime +\${DAYS} -exec rm {} \\;</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[p];function i(o,c){return a(),n("div",null,t)}const k=s(l,[["render",i],["__file","mysqldump-sh.html.vue"]]);export{k as default};
