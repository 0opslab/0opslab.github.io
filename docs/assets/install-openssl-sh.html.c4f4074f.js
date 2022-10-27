import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u5B89\u88C5\u5347\u7EA7openssl</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token function">wget</span> https://codeload.github.com/openssl/openssl/tar.gz/OpenSSL_1_1_1h

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> gcc <span class="token function">make</span>  perl

<span class="token function">tar</span> zxvf OpenSSL_1_1_1h.tar.gz

<span class="token builtin class-name">cd</span> openssl-OpenSSL_1_1_1h
./config <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/openssl
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>


<span class="token function">mv</span> /usr/bin/openssl /usr/bin/openssl.old
<span class="token function">mv</span> /usr/lib64/openssl /usr/lib64/openssl.old
<span class="token function">mv</span> /usr/lib64/libssl.so /usr/lib64/libssl.so.old
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/openssl/bin/openssl /usr/bin/openssl
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/openssl/include/openssl /usr/include/openssl
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/openssl/lib/libssl.so /usr/lib64/libssl.so
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/usr/local/openssl/lib&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/ld.so.conf
ldconfig <span class="token parameter variable">-v</span>
openssl version

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[i];function o(p,t){return n(),a("div",null,c)}const d=s(l,[["render",o],["__file","install-openssl-sh.html.vue"]]);export{d as default};
