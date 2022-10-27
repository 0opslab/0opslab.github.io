import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>::\`\`<span class="token variable"><span class="token variable">\`</span>ops
::title:windows\u5173\u95ED\u5E38\u7528\u7AEF\u53E3
::descr:
::<span class="token variable">\`</span></span>\`\`
@echo off 
color 1f 
title \u5173\u95ED\u5E38\u89C1\u7684\u5371\u9669\u7AEF\u53E3
<span class="token builtin class-name">echo</span> \u6B63\u5728\u5F00\u542FWindows\u9632\u706B\u5899
echo.
netsh advfirewall <span class="token builtin class-name">set</span> currentprofile state on <span class="token operator">&gt;</span> nul
netsh advfirewall <span class="token builtin class-name">set</span> publicprofile state on <span class="token operator">&gt;</span> nul
echo. 
<span class="token builtin class-name">echo</span> \u9632\u706B\u5899\u5DF2\u7ECF\u6210\u529F\u542F\u52A8\u3002
echo. 
echo. 
pause 
cls 
<span class="token builtin class-name">echo</span> \u6B63\u5728\u5173\u95ED\u5E38\u89C1\u7684\u5371\u9669\u7AEF\u53E3\uFF0C\u8BF7\u7A0D\u5019\u2026 
echo. 
<span class="token builtin class-name">echo</span> \u6B63\u5728\u5173\u95ED135,139,445\u7AEF\u53E3\u2026 
netsh advfirewall firewall <span class="token function">add</span> rule <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;135_139_445&quot;</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span>TCP <span class="token assign-left variable">dir</span><span class="token operator">=</span>in <span class="token assign-left variable">localport</span><span class="token operator">=</span><span class="token number">135,139</span>,445 <span class="token assign-left variable">action</span><span class="token operator">=</span>block
<span class="token builtin class-name">echo</span> \u6B63\u5728\u5173\u95ED137,138\u7AEF\u53E3\u2026 
netsh advfirewall firewall <span class="token function">add</span> rule <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;137_138&quot;</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span>UDP <span class="token assign-left variable">dir</span><span class="token operator">=</span>in <span class="token assign-left variable">localport</span><span class="token operator">=</span><span class="token number">137,138</span> <span class="token assign-left variable">action</span><span class="token operator">=</span>block
<span class="token builtin class-name">echo</span> \u5E38\u89C1\u7684\u5371\u9669\u7AEF\u53E3\u5DF2\u7ECF\u5173\u95ED\u3002 
echo. 
echo. 
echo. 
echo. 
echo. 
<span class="token builtin class-name">echo</span> \u6309\u4EFB\u610F\u952E\u9000\u51FA\u3002 
pause<span class="token operator">&gt;</span>nul
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[i];function c(t,r){return n(),a("div",null,o)}const d=s(l,[["render",c],["__file","windows-close135-bat.html.vue"]]);export{d as default};
