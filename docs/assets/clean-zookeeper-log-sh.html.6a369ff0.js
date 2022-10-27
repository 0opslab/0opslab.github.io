import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const o={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u5220\u9664zookeeper\u7684\u65E5\u5FD7</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token comment">#\u4E8B\u52A1\u65E5\u5FD7</span>
<span class="token assign-left variable">dataLogDir</span><span class="token operator">=</span>/export/zk/log/version-2
<span class="token comment">#\u4FDD\u755930\u4E2A\u6587\u4EF6</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">30</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$count</span>+1<span class="token punctuation">]</span>
<span class="token function">ls</span> <span class="token parameter variable">-t</span> <span class="token variable">$dataLogDir</span>/log.* <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> +<span class="token variable">$count</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function c(p,i){return n(),a("div",null,t)}const d=s(o,[["render",c],["__file","clean-zookeeper-log-sh.html.vue"]]);export{d as default};
