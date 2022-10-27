import{_ as e,o as s,c as n,e as a}from"./app.a667bd71.js";const i={},l=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>::\`\`<span class="token variable"><span class="token variable">\`</span>ops
::title:\u5220\u9664windows\u8FDC\u7A0B\u684C\u9762mstsc\u8BB0\u5F55
::descr:
::<span class="token variable">\`</span></span>\`\`

@echo off

reg delete <span class="token string">&quot;HKEY_CURRENT_USER\\Software\\Microsoft\\Terminal Server Client\\Default&quot;</span> /va /f
reg delete <span class="token string">&quot;HKEY_CURRENT_USER\\Software\\Microsoft\\Terminal Server Client\\Servers&quot;</span> /f
reg <span class="token function">add</span> <span class="token string">&quot;HKEY_CURRENT_USER\\Software\\Microsoft\\Terminal Server Client\\Servers&quot;</span>
<span class="token builtin class-name">cd</span> %userprofile%<span class="token punctuation">\\</span>documents<span class="token punctuation">\\</span>
attrib Default.rdp <span class="token parameter variable">-s</span> <span class="token parameter variable">-h</span>
del Default.rdp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function r(c,o){return s(),n("div",null,t)}const v=e(i,[["render",r],["__file","windows-del-mstsc-record-bat.html.vue"]]);export{v as default};
