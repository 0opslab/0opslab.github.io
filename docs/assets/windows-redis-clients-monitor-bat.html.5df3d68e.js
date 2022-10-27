import{_ as n,o as s,c as e,e as i}from"./app.a667bd71.js";const a={},l=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>::\`\`<span class="token variable"><span class="token variable">\`</span>ops
::title:windows\u6BCF\u4E00\u79D2\u6267\u884C\u4E00\u6B21redis\u547D\u4EE4
::descr:
::<span class="token variable">\`</span></span>\`\`

@echo off

:start
choice /t <span class="token number">1</span> /d y /n <span class="token operator">&gt;</span>nul
redis-cli info <span class="token operator">|</span> findstr connected_clients:
choice /t <span class="token number">1</span> /d y /n <span class="token operator">&gt;</span>nul
goto start
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function d(t,r){return s(),e("div",null,c)}const v=n(a,[["render",d],["__file","windows-redis-clients-monitor-bat.html.vue"]]);export{v as default};
