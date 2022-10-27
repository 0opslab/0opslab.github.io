import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:python37\u5B89\u88C5\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span>  gcc zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel

yum <span class="token function">install</span> <span class="token parameter variable">-y</span>  libffi-devel

<span class="token builtin class-name">cd</span> /opt/
<span class="token comment">##wget https://www.python.org/ftp/python/3.7.0/Python-3.7.0.tar.xz</span>
<span class="token function">wget</span> https://www.python.org/ftp/python/3.7.4/Python-3.7.4.tar.xz
<span class="token function">tar</span> <span class="token parameter variable">-xvJf</span>  Python-3.7.0.tar.xz

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/python3
<span class="token builtin class-name">cd</span> Python-3.7.4
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/python3
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python3/bin/python3 /usr/local/bin/python3
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python3/bin/pip3 /usr/local/bin/pip3

python3 <span class="token parameter variable">-V</span>
pip3 <span class="token parameter variable">-V</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[i];function p(c,o){return s(),a("div",null,t)}const d=n(l,[["render",p],["__file","install-py37-sh.html.vue"]]);export{d as default};
