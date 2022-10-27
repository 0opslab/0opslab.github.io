import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:install as service on systemctl</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token assign-left variable">SvcName</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $0<span class="token variable">\`</span></span>
<span class="token assign-left variable">LockFile</span><span class="token operator">=</span>/var/lock/subsys/<span class="token variable">$SvcName</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-lt</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable">$SvcName</span> {start|restart|stop|status}&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token number">5</span>
<span class="token keyword">fi</span>

<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
start<span class="token punctuation">)</span>
  <span class="token function">touch</span> <span class="token variable">$LockFile</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Starting <span class="token variable">$SvcName</span> finished.&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
stop<span class="token punctuation">)</span>
  <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$LockFile</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Stopping <span class="token variable">$SvcName</span> finished.&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
restart<span class="token punctuation">)</span>
  <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$LockFile</span>
  <span class="token function">touch</span> <span class="token variable">$LockFile</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Restarting <span class="token variable">$SvcName</span> finished.&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
status<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token variable">$LockFile</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$SvcName</span> is running...&quot;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$SvcName</span> is stopped...&quot;</span>
  <span class="token keyword">fi</span>
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
*<span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable">$SvcName</span> {start|restart|stop|status}&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token number">6</span>
<span class="token keyword">esac</span>
  




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function c(p,o){return n(),a("div",null,t)}const u=s(i,[["render",c],["__file","service-sh.html.vue"]]);export{u as default};
