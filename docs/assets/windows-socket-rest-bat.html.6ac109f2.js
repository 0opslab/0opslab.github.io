import{_ as s,o as e,c as n,e as a}from"./app.a667bd71.js";const i={},t=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\uFEFF::\`\`<span class="token variable"><span class="token variable">\`</span>ops
::title:windows networt reset
::descr:\u5F53\u7528\u5C3D\u5F88\u591A\u529E\u6CD5\u540Ewindows\u672C\u7684\u7F51\u7EDC\u8FD8\u662F\u6709\u95EE\u9898\u65F6\uFF0C\u4E0D\u59A8\u8BD5\u8BD5\u8FD9\u4E2A\u51E0\u4E2A\u547D\u4EE4
::<span class="token variable">\`</span></span>\`\`
@echo off 
netsh winsock reset
netsh interface <span class="token builtin class-name">set</span> interface <span class="token string">&quot;wlan0&quot;</span> disabled
netsh interface <span class="token builtin class-name">set</span> interface <span class="token string">&quot;wlan0&quot;</span> enabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[t];function c(o,d){return e(),n("div",null,l)}const v=s(i,[["render",c],["__file","windows-socket-rest-bat.html.vue"]]);export{v as default};
