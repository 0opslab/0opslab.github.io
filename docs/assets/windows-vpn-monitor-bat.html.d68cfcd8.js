import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>::\`\`<span class="token variable"><span class="token variable">\`</span>ops
::title:\u901A\u8FC7ping\u547D\u4EE4\u7ED3\u679C\u7684\u76D1\u542C\u5B8C\u6210vpn\u7684\u91CD\u8FDE
::descr:
::<span class="token variable">\`</span></span>\`\`
@ECHO OFF
<span class="token builtin class-name">set</span> <span class="token assign-left variable">TODAY</span><span class="token operator">=</span>%date:~0,10%_%time:~0,2%%time:~3,2%%time:~6,2%
<span class="token builtin class-name">set</span> <span class="token assign-left variable">LOG</span><span class="token operator">=</span>d:<span class="token punctuation">\\</span>ping.log
<span class="token builtin class-name">echo</span> <span class="token string">&quot;VPN status monitor is started on  %TODAY%&quot;</span>
rem \u5EF6\u8FDF30\u79D2
rem :a
rem <span class="token function">ping</span> <span class="token parameter variable">-n</span> <span class="token number">30</span> <span class="token number">127</span>.<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>nul
rem rem \u91C7\u6837\u56DB\u6B21ping\u9519\u8BEF\u8FD4\u56DE\u503C\u4E0D\u7B49\u4E8E0\u8DF3\u8F6C\u81F3a\uFF08\u5EF6\u8FDF\uFF09\uFF0C\u5426\u5219\u91CD\u542Fvpn
rem <span class="token function">ping</span> <span class="token parameter variable">-n</span> <span class="token number">4</span> <span class="token number">10.4</span>.129.4<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>nul
rem IF %errorlevel% NEQ <span class="token number">0</span> <span class="token punctuation">(</span>START start_vpn.bat<span class="token operator">&amp;</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;vpn is restart on %date:~0,10%_%time:~0,2%%time:~3,2%%time:~6,2%&quot;</span> <span class="token operator">&gt;&gt;</span> %LOG%<span class="token operator">&amp;</span>GOTO a<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">(</span>GOTO a<span class="token punctuation">)</span>
rem PAUSE

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[i];function p(o,r){return s(),a("div",null,l)}const d=n(t,[["render",p],["__file","windows-vpn-monitor-bat.html.vue"]]);export{d as default};
