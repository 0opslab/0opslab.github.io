import{_ as s,o as a,c as n,e}from"./app.a667bd71.js";const l={},p=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:mysql backup scripts</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token comment">#</span>
<span class="token comment">#</span>
<span class="token comment"># mysql root\u8D26\u53F7</span>
<span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span>
<span class="token assign-left variable">pwd</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span>
<span class="token comment"># mysql \u5E93\u540D\u79F0\uFF0C\u6CE8\u610F\u8981\u4EE5\u7A7A\u683C\u9694\u5F00</span>
<span class="token assign-left variable">databases</span><span class="token operator">=</span><span class="token string">&quot;vsftpd  test &quot;</span> 
<span class="token comment">#databases=&quot;test&quot;</span>
<span class="token comment"># mysql \u5907\u4EFD\u76EE\u5F55 </span>
<span class="token assign-left variable">backupdir</span><span class="token operator">=</span><span class="token string">&quot;/home/mysqldatabak&quot;</span>
<span class="token comment"># mysql \u5907\u4EFD\u4FDD\u7559\u65F6\u95F4</span>
<span class="token assign-left variable">day</span><span class="token operator">=</span><span class="token number">15</span>

<span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token variable">$backupdir</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$backupdir</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$backupdir</span>

<span class="token assign-left variable">backupname</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d<span class="token variable">)</span></span>
<span class="token keyword">for</span> <span class="token for-or-select variable">db</span> <span class="token keyword">in</span> <span class="token variable">$databases</span><span class="token punctuation">;</span>
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
<span class="token keyword">for</span> <span class="token for-or-select variable">db</span> <span class="token keyword">in</span> <span class="token variable">$databases</span><span class="token punctuation">;</span>
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

<span class="token comment"># \u5220\u9664\u6240\u6709sql\u6587\u4EF6\uFF0C\u5220\u966415\u5929\u524D\u7684\u5907\u4EFD</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> *.sql
<span class="token assign-left variable">delname</span><span class="token operator">=</span>mysql_<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$day</span> day ago&quot;</span> +%Y-%m-%d<span class="token variable">)</span></span>.tar.gz
<span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$delname</span>



<span class="token comment">## \u53E6\u5B8C\u4E00\u6B3E\u811A\u672C</span>


<span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span>
<span class="token assign-left variable">passwd</span><span class="token operator">=</span><span class="token string">&#39;&#39;</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span>test
<span class="token assign-left variable">nowtime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%m-%d<span class="token string">&quot;-&quot;</span>%H:%M<span class="token variable">\`</span></span>
<span class="token assign-left variable">host</span><span class="token operator">=</span>localhost
<span class="token assign-left variable">log</span><span class="token operator">=</span>/var/log/mysqlbackup.log
<span class="token assign-left variable">backup_dir</span><span class="token operator">=</span>/data/backup/
<span class="token assign-left variable">dump_command</span><span class="token operator">=</span>/usr/local/mysql/bin/mysqldump
<span class="token assign-left variable">backup_file</span><span class="token operator">=</span>/data/backup/<span class="token variable">$database</span>-<span class="token variable">\${nowtime}</span>.sql

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$backup_dir</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token function">mkdir</span> <span class="token variable">$backup_dir</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$log</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token function">touch</span> <span class="token variable">$log</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Start to backup at <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y%m%d%H%M<span class="token variable">)</span></span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$log</span>
<span class="token variable">$dump_command</span> -u<span class="token variable">$user</span> -p<span class="token variable">$passwd</span> <span class="token parameter variable">-h</span> <span class="token variable">$host</span> <span class="token parameter variable">--opt</span> --lock-all-tables --flush-logs --master-data<span class="token operator">=</span><span class="token number">2</span> <span class="token parameter variable">--databases</span> <span class="token variable">$database</span><span class="token operator">|</span><span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backup_file</span>.gz
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Backup is finish! at <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y%m%d%H%M<span class="token variable">)</span></span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$log</span>    
    <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Backup is Fail! at <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y%m%d%H%M<span class="token variable">)</span></span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$log</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[p];function o(i,c){return a(),n("div",null,t)}const k=s(l,[["render",o],["__file","mysql-backup-sh.html.vue"]]);export{k as default};
