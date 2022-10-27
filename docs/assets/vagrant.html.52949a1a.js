import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Initate Vagrant</span>
<span class="token comment">#\u542F\u52A8\u6D41\u6D6A\u6C49</span>
<span class="token function">mkdir</span> vag-vm<span class="token punctuation">;</span> <span class="token builtin class-name">cd</span> vag-vm
vagrant init

<span class="token comment"># Add a box to vagrant repo</span>
<span class="token comment">#\u4E3A\u6D41\u6D6A\u8005\u56DE\u8D2D\u6DFB\u52A0\u4E00\u4E2A\u76D2\u5B50</span>
vagrant box <span class="token function">add</span> hashicorp/precise32

<span class="token comment"># Add a box  Vagrant file</span>
<span class="token comment">#\u6DFB\u52A0\u4E00\u4E2AVagrant\u6587\u200B\u200B\u4EF6\u6846</span>
config.vm.box <span class="token operator">=</span> <span class="token string">&quot;hashicorp/precise32&quot;</span>

<span class="token comment"># Add vm to public network as host</span>
<span class="token comment">#\u5C06vm\u6DFB\u52A0\u5230\u516C\u5171\u7F51\u7EDC\u4F5C\u4E3A\u4E3B\u673A</span>
config.vm.network <span class="token string">&quot;public_network&quot;</span>

<span class="token comment"># Add provision script to vagrant file</span>
<span class="token comment">#\u5C06\u914D\u7F6E\u811A\u672C\u6DFB\u52A0\u5230vagrant\u6587\u200B\u200B\u4EF6</span>
config.vm.provision :shell, path: <span class="token string">&quot;provision.sh&quot;</span>

<span class="token comment"># Start vm </span>
<span class="token comment">#\u542F\u52A8vm</span>
vagrant up

<span class="token comment"># Connect to started instance</span>
<span class="token comment">#\u8FDE\u63A5\u5230\u5DF2\u542F\u52A8\u7684\u5B9E\u4F8B</span>
vagrant <span class="token function">ssh</span>

<span class="token comment"># Shutdown vm</span>
<span class="token comment">#\u5173\u673Avm</span>
vagrant <span class="token function">halt</span>

<span class="token comment"># Hibernate vm</span>
<span class="token comment">#Hibernate vm</span>
vagrant <span class="token function">suspend</span>

<span class="token comment"># Set vm to initial state by cleaning all data</span>
<span class="token comment">#\u901A\u8FC7\u6E05\u9664\u6240\u6709\u6570\u636E\u5C06vm\u8BBE\u7F6E\u4E3A\u521D\u59CB\u72B6\u6001</span>
vagrant destroy

<span class="token comment"># Restart vm with new provision script</span>
<span class="token comment">#\u4F7F\u7528\u65B0\u914D\u7F6E\u811A\u672C\u91CD\u65B0\u542F\u52A8vm</span>
vagran reload <span class="token parameter variable">--provision</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function c(v,d){return s(),a("div",null,t)}const m=n(i,[["render",c],["__file","vagrant.html.vue"]]);export{m as default};
