import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const p={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u5229\u7528ftp\u8FDC\u7A0B\u5907\u4EFD\u6587\u4EF6</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token assign-left variable">Dir</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;/etc/httpd&#39;</span> <span class="token string">&#39;/etc/pam.d&#39;</span> <span class="token string">&#39;/etc/vsftpd&#39;</span><span class="token punctuation">)</span>
<span class="token assign-left variable">Source</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>dialog <span class="token parameter variable">--stdout</span> <span class="token parameter variable">--title</span> <span class="token string">&quot;Backup&quot;</span> <span class="token parameter variable">--checklist</span> <span class="token string">&quot;Choose the dir you want to backup: &quot;</span> <span class="token number">10</span> <span class="token number">50</span> <span class="token number">3</span> <span class="token number">0</span> /etc/httpd <span class="token number">0</span> <span class="token number">1</span> /etc/pam.d <span class="token number">1</span> <span class="token number">2</span> /etc/vsftpd <span class="token number">0</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$Source</span>
<span class="token assign-left variable">Source</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $Source <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;&quot;&#39;</span><span class="token variable">\`</span></span>

<span class="token keyword">for</span> <span class="token for-or-select variable">I</span> <span class="token keyword">in</span> <span class="token variable">$Source</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">\${Dir<span class="token punctuation">[</span>$I<span class="token punctuation">]</span>}</span>
<span class="token keyword">done</span>



<span class="token assign-left variable">backupdir</span><span class="token operator">=</span><span class="token string">&quot;/wwwroot/backup/backup1/&quot;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token variable">$backupdir</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token function">mkdir</span> <span class="token variable">$backupdir</span>
<span class="token keyword">fi</span>

<span class="token comment"># mkdir today backup</span>

<span class="token assign-left variable">today</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y-%m-%d_%H_%M_%S<span class="token variable">\`</span></span>
<span class="token assign-left variable">fpath</span><span class="token operator">=</span><span class="token variable">$backupdir</span><span class="token variable">$today</span> 
<span class="token builtin class-name">echo</span> <span class="token variable">$fpath</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token variable">$fpath</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token function">mkdir</span> <span class="token variable">$fpath</span>
<span class="token keyword">fi</span>

<span class="token comment"># delete old file </span>

<span class="token function">find</span> <span class="token variable">$backupdir</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-mtime</span> +1 <span class="token parameter variable">-print</span> <span class="token parameter variable">-exec</span> /bin/rm <span class="token parameter variable">-f</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>

<span class="token assign-left variable">FL</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /wwwroot/backup/file_list_ftp<span class="token variable">\`</span></span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$FL</span> <span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token function">cp</span> <span class="token parameter variable">-Rp</span> <span class="token variable">$i</span> <span class="token variable">$fpath</span>
<span class="token keyword">done</span>

<span class="token comment"># backup my self </span>
<span class="token function">cp</span> <span class="token parameter variable">-Rp</span> <span class="token variable">$0</span> <span class="token variable">$fpath</span>
<span class="token function">cp</span> <span class="token parameter variable">-Rp</span> /wwwroot/backup/file_list_ftp <span class="token variable">$fpath</span>

<span class="token builtin class-name">cd</span> <span class="token variable">$backupdir</span>
<span class="token function">tar</span> czf <span class="token variable">$today</span>.tar.gz <span class="token variable">$today</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$today</span>
<span class="token builtin class-name">cd</span> -

<span class="token comment"># ftp ...</span>

<span class="token function">ftp</span> -n<span class="token operator">&lt;&lt;</span><span class="token operator">!</span>
<span class="token function">open</span> <span class="token number">192.168</span>.1.12
user backup_q ftp111222
binary
lcd <span class="token variable">$backupdir</span>
prompt off
mdelete *
mput *
bye
<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[l];function t(c,o){return n(),a("div",null,i)}const d=s(p,[["render",t],["__file","backup-sh.html.vue"]]);export{d as default};
