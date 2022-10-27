import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>::\`\`<span class="token variable"><span class="token variable">\`</span>ops
::title:Windows\u62F7\u8D1D\u6279\u5904\u7406\u811A\u672C
::descr:
::<span class="token variable">\`</span></span>\`\`

@echo off

<span class="token builtin class-name">set</span> <span class="token assign-left variable">command</span><span class="token operator">=</span>c:<span class="token punctuation">\\</span>progra~1<span class="token punctuation">\\</span>winrar<span class="token punctuation">\\</span>winrar.exe a <span class="token parameter variable">-ep1</span> <span class="token parameter variable">-ag</span> /r /k /s /ibck 

<span class="token builtin class-name">set</span> <span class="token assign-left variable">CURDATE</span><span class="token operator">=</span>%date:~0,4%%date:~5,2%%date:~8,2%
<span class="token builtin class-name">set</span> <span class="token assign-left variable">destination21</span><span class="token operator">=</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token number">172.16</span>.1.21<span class="token punctuation">\\</span>webbak
<span class="token builtin class-name">set</span> <span class="token assign-left variable">destination21_admin</span><span class="token operator">=</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token number">172.16</span>.1.21<span class="token punctuation">\\</span>web_admin
<span class="token builtin class-name">set</span> <span class="token assign-left variable">source_dest</span><span class="token operator">=</span>D:<span class="token punctuation">\\</span>home<span class="token punctuation">\\</span>clweb<span class="token punctuation">\\</span>aresoft<span class="token punctuation">\\</span>clweb_admin
<span class="token builtin class-name">set</span> <span class="token assign-left variable">local_bakdest</span><span class="token operator">=</span>D:<span class="token punctuation">\\</span>web_admin_bak

forfiles /p <span class="token string">&quot;D:\\web_admin_bak&quot;</span> /s /m *.* /d <span class="token parameter variable">-10</span> /c <span class="token string">&quot;cmd /c del @path&quot;</span>

<span class="token builtin class-name">cd</span> D:<span class="token punctuation">\\</span>web_admin_bak
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Copy data to 172.16.2.12&quot;</span> <span class="token operator">&gt;&gt;</span> bak_clexpdp_data.log
<span class="token builtin class-name">echo</span> %date:~0,10% %time:~0,2%:%time:~3,2%:%time:~6,2%  <span class="token operator">&gt;&gt;</span> bak_clexpdp_data.log



rem xcopy d:<span class="token punctuation">\\</span>dmpdir<span class="token punctuation">\\</span>expdp_web_%CURDATE%_*.* %destination21%  /D





%command% %local_bakdest%<span class="token punctuation">\\</span>clweb_admin.rar %source_dest%

rem xcopy %local_bakdest%<span class="token punctuation">\\</span>clweb_admin%CURDATE%*  %destination21_admin%  /D /E /S

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Finished copy data !!&quot;</span> <span class="token operator">&gt;&gt;</span> bak_clexpdp_data.log
<span class="token builtin class-name">echo</span> %date:~0,10% %time:~0,2%:%time:~3,2%:%time:~6,2%  <span class="token operator">&gt;&gt;</span> bak_clexpdp_data.log





</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function c(p,o){return s(),a("div",null,t)}const r=n(i,[["render",c],["__file","windows-copyfiles-bat.html.vue"]]);export{r as default};
