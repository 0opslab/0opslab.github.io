import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const t={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>::\`\`<span class="token variable"><span class="token variable">\`</span>ops
::title:windows\u4E0B\u5229\u7528RoboCopy\u5907\u4EFD\u6587\u4EF6\u5230\u8FDC\u7A0B\u76EE\u5F55
::descr:
::<span class="token variable">\`</span></span>\`\`
@title MySQL
@echo off
@@echo off
<span class="token builtin class-name">set</span> <span class="token assign-left variable">d</span><span class="token operator">=</span>%date:~0,4%%date:~5,2%%date:~8,2%
<span class="token builtin class-name">cd</span> C:<span class="token punctuation">\\</span>Windows<span class="token punctuation">\\</span>SysWOW64
::\u628A\u672C\u5730D:<span class="token punctuation">\\</span>test\u6587\u4EF6\u590D\u5236\u5907\u4EFD\u5230<span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token number">192.168</span>.10.111<span class="token punctuation">\\</span>test\u76EE\u5F55
RoboCopy.exe /E D:<span class="token punctuation">\\</span>test <span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token number">192.168</span>.10.111<span class="token punctuation">\\</span>test
<span class="token builtin class-name">echo</span> %d% <span class="token builtin class-name">test</span> copy finish <span class="token operator">&gt;&gt;</span>  D:<span class="token punctuation">\\</span>copy_log.txt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[i];function o(l,p){return n(),a("div",null,c)}const u=s(t,[["render",o],["__file","windows-robocopy-remote-backup-bat.html.vue"]]);export{u as default};
