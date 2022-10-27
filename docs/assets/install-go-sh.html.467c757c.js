import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:install go 1.9.2</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token function">wget</span> https://redirector.gvt1.com/edgedl/go/go1.9.2.linux-amd64.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
<span class="token function">tar</span> <span class="token parameter variable">-C</span> /usr/local <span class="token parameter variable">-xzf</span> go1.9.2.linux-amd64.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/profile.d/go.sh</span>
export GOROOT=/usr/local/go
export GOPATH=/root/go
export GOBIN=\\<span class="token variable">$GOPATH</span>/bin
export PATH=\\<span class="token environment constant">$PATH</span>:\\<span class="token variable">$GOROOT</span>/bin:\\<span class="token variable">$GOPATH</span>/bin
EOF</span>

<span class="token builtin class-name">source</span> /etc/profile <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$GOPATH</span> <span class="token operator">&amp;&amp;</span> go version

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[t];function o(c,p){return s(),a("div",null,i)}const d=n(l,[["render",o],["__file","install-go-sh.html.vue"]]);export{d as default};
