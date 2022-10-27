import{_ as e,o as a,c as s,e as n}from"./app.a667bd71.js";const r={},l=n(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

firewall-cmd <span class="token parameter variable">--permanent</span> --remove-port<span class="token operator">=</span><span class="token number">8088</span>/tcp
firewall-cmd <span class="token parameter variable">--permanent</span> --remove-port<span class="token operator">=</span><span class="token number">10086</span>/tcp
firewall-cmd <span class="token parameter variable">--permanent</span> --remove-port<span class="token operator">=</span><span class="token number">11111</span>/tcp
firewall-cmd <span class="token parameter variable">--permanent</span> --remove-port<span class="token operator">=</span><span class="token number">3306</span>/tcp
firewall-cmd <span class="token parameter variable">--reload</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function o(p,c){return a(),s("div",null,t)}const m=e(r,[["render",o],["__file","secAutoClosePort-sh.html.vue"]]);export{m as default};
