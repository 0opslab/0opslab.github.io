import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:linux\u5B89\u88C5git\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token function">wget</span> https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.12.2.tar.gz
<span class="token comment">##cd git-2.22.1/</span>
<span class="token builtin class-name">cd</span> git-2.22.1/ <span class="token operator">||</span> <span class="token builtin class-name">exit</span>
<span class="token function">make</span> <span class="token assign-left variable">prefix</span><span class="token operator">=</span>/usr/local all
yum <span class="token function">install</span> curl-devel expat-devel gettext-devel  openssl-devel zlib-devel
<span class="token function">make</span> <span class="token assign-left variable">prefix</span><span class="token operator">=</span>/usr/local all
<span class="token function">make</span> <span class="token assign-left variable">prefix</span><span class="token operator">=</span>/usr/local <span class="token function">install</span>
<span class="token function">git</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[i];function c(o,p){return n(),a("div",null,t)}const d=s(l,[["render",c],["__file","git-install-2-22-1-sh.html.vue"]]);export{d as default};
