import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const t={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:mongo\u5907\u4EFD\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token comment">#=====================================================================</span>
<span class="token comment"># Set the following variables as per your requirement</span>
<span class="token comment">#=====================================================================</span>
<span class="token comment"># Database Name to backup</span>
<span class="token assign-left variable">MONGO_DATABASE</span><span class="token operator">=</span><span class="token string">&quot;test&quot;</span>
<span class="token comment"># Database host name</span>
<span class="token assign-left variable">MONGO_HOST</span><span class="token operator">=</span><span class="token string">&quot;127.0.0.1&quot;</span>
<span class="token comment"># Database port</span>
<span class="token assign-left variable">MONGO_PORT</span><span class="token operator">=</span><span class="token string">&quot;27017&quot;</span>
<span class="token comment"># Backup directory</span>
<span class="token assign-left variable">BACKUPS_DIRS</span><span class="token operator">=</span><span class="token string">&quot;/data/backups&quot;</span>
<span class="token assign-left variable">BACKUPS_DIR</span><span class="token operator">=</span><span class="token string">&quot;/data/backups/<span class="token variable">$MONGO_DATABASE</span>&quot;</span>
<span class="token comment"># Database user name</span>
<span class="token assign-left variable">DBUSERNAME</span><span class="token operator">=</span><span class="token string">&quot;11&quot;</span>
<span class="token comment"># Database password</span>
<span class="token assign-left variable">DBPASSWORD</span><span class="token operator">=</span><span class="token string">&quot;xxx@123&quot;</span>
<span class="token comment"># Authentication database name</span>
<span class="token assign-left variable">DBAUTHDB</span><span class="token operator">=</span><span class="token string">&quot;admin&quot;</span>
<span class="token comment"># Days to keep the backup</span>
<span class="token assign-left variable">DAYSTORETAINBACKUP</span><span class="token operator">=</span><span class="token string">&quot;14&quot;</span>
<span class="token comment">#=====================================================================</span>

<span class="token assign-left variable">TIMESTAMP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%F-%H-%M<span class="token variable">\`</span></span>
<span class="token assign-left variable">BACKUP_NAME</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$MONGO_DATABASE</span>-<span class="token variable">$TIMESTAMP</span>&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Performing backup of <span class="token variable">$MONGO_DATABASE</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;--------------------------------------------&quot;</span>
<span class="token comment"># Create backup directory</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$BACKUPS_DIR</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Can&#39;t create backup directory in <span class="token variable">$BACKUPS_DIR</span>. Go and fix it!&quot;</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token file-descriptor important">&amp;2</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">fi</span><span class="token punctuation">;</span>
<span class="token comment"># Create dump</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$BACKUPS_DIRS</span>
/opt/mongodb/bin/mongodump <span class="token parameter variable">-d</span> <span class="token variable">$MONGO_DATABASE</span> <span class="token parameter variable">--username</span> <span class="token variable">$DBUSERNAME</span> <span class="token parameter variable">--password</span> <span class="token variable">$DBPASSWORD</span> <span class="token parameter variable">--authenticationDatabase</span> <span class="token variable">$DBAUTHDB</span>
<span class="token comment"># Rename dump directory to backup name</span>
<span class="token function">mv</span> dump <span class="token variable">$BACKUP_NAME</span>
<span class="token comment"># Compress backup</span>
<span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> <span class="token variable">$BACKUPS_DIR</span>/<span class="token variable">$BACKUP_NAME</span>.tgz <span class="token variable">$BACKUP_NAME</span>
<span class="token comment"># Delete uncompressed backup</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$BACKUP_NAME</span>
<span class="token comment"># Delete backups older than retention period</span>
<span class="token function">find</span> <span class="token variable">$BACKUPS_DIR</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-mtime</span> +<span class="token variable">$DAYSTORETAINBACKUP</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> +
<span class="token builtin class-name">echo</span> <span class="token string">&quot;--------------------------------------------&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Database backup complete!&quot;</span>

<span class="token comment"># crontab</span>
00 00 * * * /usr/local/sbin/mongobackup.sh

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[l];function i(o,c){return n(),a("div",null,p)}const m=s(t,[["render",i],["__file","mongobackup-sh.html.vue"]]);export{m as default};
