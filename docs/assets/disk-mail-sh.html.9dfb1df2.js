import{_ as s,o as a,c as n,e}from"./app.a667bd71.js";const l={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:sending the current disk statistics in e-mail message</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token comment"># </span>


<span class="token assign-left variable">date</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%m/%d/%Y<span class="token variable">\`</span></span>
<span class="token assign-left variable">MAIL</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">which</span> mail<span class="token variable">\`</span></span>
<span class="token assign-left variable">TEMP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>mktemp tmp.XXXXXX<span class="token variable">\`</span></span>

<span class="token function">df</span> <span class="token parameter variable">-h</span> <span class="token operator">&gt;</span> <span class="token variable">$TEMP</span>
<span class="token function">cat</span> <span class="token variable">$TEMP</span> <span class="token operator">|</span> <span class="token variable">$MAIL</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;Disk stats for <span class="token variable">$date</span>&quot;</span> <span class="token variable">$1</span> liujian@erichfund.com
<span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$TEMP</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[i];function c(p,o){return a(),n("div",null,t)}const d=s(l,[["render",c],["__file","disk-mail-sh.html.vue"]]);export{d as default};
