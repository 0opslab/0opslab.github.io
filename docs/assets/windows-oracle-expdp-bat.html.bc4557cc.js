import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const t={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>::\`\`<span class="token variable"><span class="token variable">\`</span>ops
::title:Windows Oracle\u6570\u636E\u5E93\u81EA\u52A8\u5907\u4EFD\u6279\u5904\u7406\u811A\u672C
::descr:
::<span class="token variable">\`</span></span>\`\`

@echo off

<span class="token builtin class-name">set</span> <span class="token assign-left variable">ORACLE_HOME</span><span class="token operator">=</span>D:<span class="token punctuation">\\</span>oracle<span class="token punctuation">\\</span>product<span class="token punctuation">\\</span><span class="token number">10.2</span>.0<span class="token punctuation">\\</span>db_1
rem <span class="token builtin class-name">set</span> <span class="token assign-left variable">NLS_LANG</span><span class="token operator">=</span>AMERICAN_AMERICA.ZHS16GBK
rem <span class="token builtin class-name">set</span> <span class="token assign-left variable">NLS_DATE_FORMAT</span><span class="token operator">=</span><span class="token string">&#39;YYYY-MM-DD HH24:MI:SS&#39;</span>

<span class="token builtin class-name">set</span> <span class="token assign-left variable">CURDATE</span><span class="token operator">=</span>%date:~0,4%%date:~5,2%%date:~8,2%
<span class="token builtin class-name">set</span> <span class="token assign-left variable">CURTIME</span><span class="token operator">=</span>%time:~0,2%

<span class="token keyword">if</span> <span class="token string">&quot;%CURTIME%&quot;</span><span class="token operator">==</span><span class="token string">&quot; 0&quot;</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">CURTIME</span><span class="token operator">=</span>00
<span class="token keyword">if</span> <span class="token string">&quot;%CURTIME%&quot;</span><span class="token operator">==</span><span class="token string">&quot; 1&quot;</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">CURTIME</span><span class="token operator">=</span>01
<span class="token keyword">if</span> <span class="token string">&quot;%CURTIME%&quot;</span><span class="token operator">==</span><span class="token string">&quot; 2&quot;</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">CURTIME</span><span class="token operator">=</span>02
<span class="token keyword">if</span> <span class="token string">&quot;%CURTIME%&quot;</span><span class="token operator">==</span><span class="token string">&quot; 3&quot;</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">CURTIME</span><span class="token operator">=</span>03
<span class="token keyword">if</span> <span class="token string">&quot;%CURTIME%&quot;</span><span class="token operator">==</span><span class="token string">&quot; 4&quot;</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">CURTIME</span><span class="token operator">=</span>04
<span class="token keyword">if</span> <span class="token string">&quot;%CURTIME%&quot;</span><span class="token operator">==</span><span class="token string">&quot; 5&quot;</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">CURTIME</span><span class="token operator">=</span>05
<span class="token keyword">if</span> <span class="token string">&quot;%CURTIME%&quot;</span><span class="token operator">==</span><span class="token string">&quot; 6&quot;</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">CURTIME</span><span class="token operator">=</span>06
<span class="token keyword">if</span> <span class="token string">&quot;%CURTIME%&quot;</span><span class="token operator">==</span><span class="token string">&quot; 7&quot;</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">CURTIME</span><span class="token operator">=</span>07
<span class="token keyword">if</span> <span class="token string">&quot;%CURTIME%&quot;</span><span class="token operator">==</span><span class="token string">&quot; 8&quot;</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">CURTIME</span><span class="token operator">=</span>08
<span class="token keyword">if</span> <span class="token string">&quot;%CURTIME%&quot;</span><span class="token operator">==</span><span class="token string">&quot; 9&quot;</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">CURTIME</span><span class="token operator">=</span>09

<span class="token builtin class-name">set</span> <span class="token assign-left variable">CURTIME</span><span class="token operator">=</span>%CURTIME%%time:~3,2%%time:~6,2%

<span class="token builtin class-name">set</span> <span class="token assign-left variable">FILENAME</span><span class="token operator">=</span>expdp_finchina_sms_%CURDATE%_%CURTIME%.dmp
<span class="token builtin class-name">set</span> <span class="token assign-left variable">EXPLOG</span><span class="token operator">=</span>expdp_finchina_sms_%CURDATE%_%CURTIME%.log


<span class="token builtin class-name">cd</span> e:<span class="token punctuation">\\</span>dmpdir2

<span class="token builtin class-name">echo</span> <span class="token string">&quot;==========================================================&quot;</span> <span class="token operator">&gt;&gt;</span> bak_clexpdp_data.log
<span class="token builtin class-name">echo</span> %date:~0,10% %time:~0,2%:%time:~3,2%:%time:~6,2% <span class="token operator">&gt;&gt;</span> bak_clexpdp_data.log

forfiles /p <span class="token string">&quot;e:\\dmpdir2&quot;</span> /s /m *.* /d <span class="token parameter variable">-1</span> /c <span class="token string">&quot;cmd /c del @path&quot;</span>



<span class="token builtin class-name">echo</span> <span class="token string">&quot;Finished delete backup one week ago!&quot;</span> <span class="token operator">&gt;&gt;</span> bak_clexpdp_data.log

<span class="token builtin class-name">echo</span> %date:~0,10% %time:~0,2%:%time:~3,2%:%time:~6,2% <span class="token operator">&gt;&gt;</span> bak_clexpdp_data.log
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Start export finchina database finchina clsms user&quot;</span> <span class="token operator">&gt;&gt;</span> bak_clexpdp_data.log

%ORACLE_HOME%<span class="token punctuation">\\</span>BIN<span class="token punctuation">\\</span>expdp <span class="token string">&#39;&quot;/ as sysdba&quot;&#39;</span> <span class="token assign-left variable">schemas</span><span class="token operator">=</span>finchina,clsms <span class="token assign-left variable">directory</span><span class="token operator">=</span>mydir2 <span class="token assign-left variable">dumpfile</span><span class="token operator">=</span>%FILENAME% <span class="token assign-left variable">logfile</span><span class="token operator">=</span>%EXPLOG% 


<span class="token builtin class-name">echo</span> <span class="token string">&quot;Finished export finchina database finchina clsms user&quot;</span> <span class="token operator">&gt;&gt;</span> bak_clexpdp_data.log
<span class="token builtin class-name">echo</span> %date:~0,10% %time:~0,2%:%time:~3,2%:%time:~6,2% <span class="token operator">&gt;&gt;</span> bak_clexpdp_data.log


winrar a <span class="token parameter variable">-df</span> e:<span class="token punctuation">\\</span>dmpdir2<span class="token punctuation">\\</span>expdp_finchina_sms_%CURDATE%_%CURTIME%.dmp.rar e:<span class="token punctuation">\\</span>dmpdir2<span class="token punctuation">\\</span>expdp_*_%CURDATE%_*.*

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Copy data to 172.16.2.12&quot;</span> <span class="token operator">&gt;&gt;</span> bak_clexpdp_data.log

<span class="token builtin class-name">set</span> <span class="token assign-left variable">destination</span><span class="token operator">=</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token number">172.16</span>.2.12<span class="token punctuation">\\</span>bak<span class="token punctuation">\\</span>finchina


<span class="token comment">#xcopy d:\\dmpdir\\expdp_web_%CURDATE%_*.* %destination21%  /D</span>
xcopy e:<span class="token punctuation">\\</span>dmpdir2<span class="token punctuation">\\</span>expdp_finchina_sms_%CURDATE%_*.* %destination%  /D

forfiles /p <span class="token string">&quot;z:<span class="token entity" title="\\f">\\f</span>inchina&quot;</span> /s /m *.* /d <span class="token parameter variable">-7</span> /c <span class="token string">&quot;cmd /c del @path&quot;</span>


<span class="token builtin class-name">echo</span> <span class="token string">&quot;Finished copy data !!&quot;</span> <span class="token operator">&gt;&gt;</span> bak_clexpdp_data.log
<span class="token builtin class-name">echo</span> %date:~0,10% %time:~0,2%:%time:~3,2%:%time:~6,2%  <span class="token operator">&gt;&gt;</span> bak_clexpdp_data.log





</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[l];function p(o,c){return n(),a("div",null,i)}const d=s(t,[["render",p],["__file","windows-oracle-expdp-bat.html.vue"]]);export{d as default};
