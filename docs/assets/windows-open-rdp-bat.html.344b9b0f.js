import{_ as s,o as n,c as e,e as a}from"./app.a667bd71.js";const t={},l=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>::\`\`<span class="token variable"><span class="token variable">\`</span>ops
::title:\u7528\u547D\u4EE4\u5F00\u542F\u8FDC\u7A0B\u684C\u9762
::descr:
::<span class="token variable">\`</span></span>\`\`
reg <span class="token function">add</span> <span class="token string">&quot;hklm\\system<span class="token entity" title="\\c">\\c</span>urrentcontrolset<span class="token entity" title="\\c">\\c</span>ontrol<span class="token entity" title="\\t">\\t</span>erminal server&quot;</span> /f /v fDenyTSConnections /t REG_DWORD /d <span class="token number">0</span>
netsh firewall <span class="token builtin class-name">set</span> <span class="token function">service</span> remoteadmin <span class="token builtin class-name">enable</span>
netsh firewall <span class="token builtin class-name">set</span> <span class="token function">service</span> remotedesktop <span class="token builtin class-name">enable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[l];function c(o,r){return n(),e("div",null,i)}const d=s(t,[["render",c],["__file","windows-open-rdp-bat.html.vue"]]);export{d as default};
