import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<h3 id="linux\u4E0B\u5347\u7EA7python3\u5230\u67D0\u4E00\u4E2A\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#linux\u4E0B\u5347\u7EA7python3\u5230\u67D0\u4E00\u4E2A\u7248\u672C" aria-hidden="true">#</a> linux\u4E0B\u5347\u7EA7python3\u5230\u67D0\u4E00\u4E2A\u7248\u672C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5220\u9664\u539F\u5148\u7684Python3\u548Cpip3</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/bin/pip3
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/bin/python3

<span class="token function">wget</span> https://www.python.org/ftp/python/3.8.10/Python-3.8.10.tgz  

<span class="token function">tar</span> zxvf Python-3.8.10.tgz
<span class="token comment"># \u5B89\u88C5\u5FC5\u987B\u7684\u5305</span>
dnf <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc zlib* libffi-devel
<span class="token builtin class-name">cd</span> Python-3.8.10/
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/python3 --enable-optimizations
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>


<span class="token comment">#\u5EFA\u7ACB\u8FDE\u63A5</span>

<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python3/bin/python3 /usr/bin/python3

<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python3/bin/pip3 /usr/bin/pip3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function c(p,o){return s(),a("div",null,t)}const d=n(i,[["render",c],["__file","py-fqa.html.vue"]]);export{d as default};
