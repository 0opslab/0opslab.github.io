import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const t={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>::\`\`<span class="token variable"><span class="token variable">\`</span>ops
::title:windows\u4E0Bmysql\u5BC6\u7801\u91CD\u7F6E\u811A\u672C
::descr:
::<span class="token variable">\`</span></span>\`\`
@title MySQL
@echo off
@color 0a
<span class="token builtin class-name">set</span> <span class="token assign-left variable">passwd</span><span class="token operator">=</span>%<span class="token environment constant">RANDOM</span>%@%<span class="token environment constant">RANDOM</span>%
<span class="token builtin class-name">echo</span> %passwd%<span class="token operator">&gt;</span>C:<span class="token punctuation">\\</span>mysqlpass.txt
<span class="token builtin class-name">echo</span> use MySQL<span class="token punctuation">;</span><span class="token operator">&gt;</span>C:<span class="token punctuation">\\</span>mysql.txt
<span class="token builtin class-name">echo</span> update user <span class="token builtin class-name">set</span> <span class="token assign-left variable">password</span><span class="token operator">=</span>password<span class="token punctuation">(</span><span class="token string">&#39;%passwd%&#39;</span><span class="token punctuation">)</span> where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span><span class="token operator">&gt;&gt;</span>C:<span class="token punctuation">\\</span>mysql.txt
<span class="token builtin class-name">echo</span> flush privileges<span class="token punctuation">;</span> <span class="token operator">&gt;&gt;</span>C:<span class="token punctuation">\\</span>mysql.txt
net stop MySQL <span class="token operator">&gt;</span>nul
<span class="token builtin class-name">cd</span> /d &quot;C:<span class="token punctuation">\\</span>webserver<span class="token punctuation">\\</span>MYSQL<span class="token punctuation">\\</span>bin<span class="token punctuation">\\</span>&quot;
start mysqld.exe --skip-grant-tables
mysql.exe <span class="token operator">&lt;</span>C:<span class="token punctuation">\\</span>mysql.txt
del C:<span class="token punctuation">\\</span>mysql.txt /f
taskkill /f /im mysqld.exe <span class="token operator">&gt;</span>nul
net start MySQL <span class="token operator">&gt;</span>nul
del %0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[l];function o(p,c){return n(),a("div",null,i)}const u=s(t,[["render",o],["__file","windows-reset-mysql-root-password-bat.html.vue"]]);export{u as default};
