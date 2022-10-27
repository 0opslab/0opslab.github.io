import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const l={},p=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:linux\u4E0B\u4E00\u6B3E\u6587\u4EF6\u5907\u4EFD\u7684\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token comment">#</span>
<span class="token comment">#</span>
<span class="token comment"># \u65F6\u95F4</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&#39;+%Y-%m-%d_%H_%M_%S&#39;</span><span class="token variable">)</span></span>
<span class="token comment"># \u5907\u4EFD\u76EE\u5F55 </span>
<span class="token assign-left variable">BACKUPDIR</span><span class="token operator">=</span><span class="token string">&quot;/home/backups&quot;</span>
<span class="token comment"># \u9700\u8981\u5907\u4EFD\u7684\u76EE\u5F55</span>
<span class="token assign-left variable">SORFILE</span><span class="token operator">=</span>/opt
<span class="token comment"># \u76EE\u6807\u6587\u4EF6\u540D</span>
<span class="token assign-left variable">DESFILE</span><span class="token operator">=</span>/home/backups/<span class="token variable">$SORFILE</span><span class="token builtin class-name">.</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&#39;+%Y-%m-%d_%H_%M_%S&#39;</span><span class="token variable">)</span></span>.zip

<span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token variable">$BACKUPDIR</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$BACKUPDIR</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$BACKUPDIR</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;start backup <span class="token variable">$SORFILE</span> ...&quot;</span>
<span class="token function">sleep</span> <span class="token number">3</span>
<span class="token comment">#echo &quot;$DESFILE&quot;</span>


<span class="token comment">#tar cvf $DESFILE $SORFILE</span>
<span class="token comment">#gzip -f .zip $DESFILE</span>
<span class="token function">zip</span> <span class="token parameter variable">-r</span> <span class="token variable">$DESFILE</span> <span class="token variable">$SORFILE</span> <span class="token operator">&amp;&gt;</span>/dev/null
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d<span class="token variable">)</span></span><span class="token string">&quot; zip sucess&quot;</span><span class="token operator">&gt;&gt;</span>backup.log
<span class="token keyword">else</span>
   <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d<span class="token variable">)</span></span><span class="token string">&quot; zip failed&quot;</span><span class="token operator">&gt;&gt;</span>backup.log
   <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">fi</span>

<span class="token comment"># \u5220\u96643\u5929\u524D\u7684\u5907\u4EFD</span>
<span class="token function">find</span> <span class="token variable">$BACKUPDIR</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-ctime</span> +3 <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[p];function i(c,o){return n(),a("div",null,t)}const v=s(l,[["render",i],["__file","path-backup-sh.html.vue"]]);export{v as default};
