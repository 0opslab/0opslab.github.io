import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:python36\u5B89\u88C5\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
yum <span class="token function">install</span> epel-release <span class="token parameter variable">-y</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> https://centos7.iuscommunity.org/ius-release.rpm
yum <span class="token function">install</span> python36  python36u-pip  <span class="token parameter variable">-y</span>
python3.6  <span class="token parameter variable">-m</span>  pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> pip

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span>  /root/.pip/

<span class="token function">cat</span> <span class="token operator">&gt;</span>  /root/.pip/pip.conf   <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[global]
trusted-host=mirrors.aliyun.com
index-url=http://mirrors.aliyun.com/pypi/simple/
EOF</span>

python <span class="token parameter variable">-V</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function p(r,c){return s(),a("div",null,t)}const d=n(i,[["render",p],["__file","install-py36-sh.html.vue"]]);export{d as default};
