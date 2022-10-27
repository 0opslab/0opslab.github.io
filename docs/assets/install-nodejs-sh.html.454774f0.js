import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u5B89\u88C5nodesjs</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc+ gcc-c++

<span class="token comment">##\u8BBF\u95EEhttps://github.com/creationix/nvm\u67E5\u770B</span>
<span class="token function">curl</span> -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
<span class="token comment">##Haraka\u6307\u5B9A\u7248\u672C</span>
nvm <span class="token function">install</span> v0.10.33
<span class="token comment">##\u6307\u5B9A\u7248\u672Cv4.4.4</span>
nvm <span class="token function">install</span> v4.4.4
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> pm2
pm2 list


<span class="token comment">##\u4FEE\u6539\u73AF\u5883\u53D8\u91CF\u65B9\u6CD5</span>
<span class="token comment">##vi /etc/profile</span>
<span class="token comment">##export PATH=/root/.nvm/versions/node/v4.4.5/bin:/usr/local/jdk/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/opt/dell/srvadmin/bin:/opt/dell/srvadmin/sbin:/root/bin</span>
<span class="token comment">##export PATH=$PATH:/root/.nvm/versions/node/v4.4.4/bin</span>


<span class="token comment">##\u4FEE\u6539npm\u6E90\u5730\u5740</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry http://registry.npm.taobao.org
<span class="token comment">##\u6216\u8005</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;registry=http://registry.npm.taobao.org&quot;</span>  <span class="token operator">&gt;</span> /root/.npmrc

<span class="token comment">##\u67E5\u770Bnpm\u6E90\u5730\u5740</span>
<span class="token function">npm</span> config get registry



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function t(o,r){return s(),a("div",null,c)}const d=n(i,[["render",t],["__file","install-nodejs-sh.html.vue"]]);export{d as default};
