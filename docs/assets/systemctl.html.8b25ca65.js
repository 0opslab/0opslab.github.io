import{_ as s,o as n,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># List all loaded/active units</span>
<span class="token comment">#\u5217\u51FA\u6240\u6709\u5DF2\u52A0\u8F7D/\u6D3B\u52A8\u5355\u4F4D</span>
systemctl list-units

<span class="token comment"># Check the status of a service</span>
<span class="token comment">#\u68C0\u67E5\u670D\u52A1\u7684\u72B6\u6001</span>
systemctl status foo.service

<span class="token comment"># Start a service</span>
<span class="token comment">#\u5F00\u59CB\u670D\u52A1</span>
systemctl start foo.service

<span class="token comment"># Restart a service</span>
<span class="token comment">#\u91CD\u542F\u670D\u52A1</span>
systemctl restart foo.service

<span class="token comment"># Stop a service</span>
<span class="token comment">#\u505C\u6B62\u670D\u52A1</span>
systemctl stop foo.service

<span class="token comment"># Reload a service&#39;s configuration</span>
<span class="token comment">#\u91CD\u65B0\u52A0\u8F7D\u670D\u52A1\u7684\u914D\u7F6E</span>
systemctl reload foo.service

<span class="token comment"># Enable a service to startup on boot</span>
<span class="token comment">#\u542F\u7528\u670D\u52A1\u4EE5\u5728\u542F\u52A8\u65F6\u542F\u52A8</span>
systemctl <span class="token builtin class-name">enable</span> foo.service

<span class="token comment"># Disable a service to startup on boot</span>
<span class="token comment">#\u7981\u7528\u670D\u52A1\u4EE5\u5728\u542F\u52A8\u65F6\u542F\u52A8</span>
systemctl disable foo.service

<span class="token comment"># List the dependencies of a service</span>
<span class="token comment">#\u5217\u51FA\u670D\u52A1\u7684\u4F9D\u8D56\u9879</span>
<span class="token comment"># when no service name is specified, lists the dependencies of default.target</span>
<span class="token comment">#\u5982\u679C\u672A\u6307\u5B9A\u670D\u52A1\u540D\u79F0\uFF0C\u5219\u5217\u51FAdefault.target\u7684\u4F9D\u8D56\u9879</span>
systemctl list-dependencies foo.service 

<span class="token comment"># List currently loaded targets</span>
<span class="token comment">#\u5217\u51FA\u5F53\u524D\u52A0\u8F7D\u7684\u76EE\u6807</span>
systemctl list-units <span class="token parameter variable">--type</span><span class="token operator">=</span>target

<span class="token comment"># Change current target</span>
<span class="token comment">#\u6539\u53D8\u76EE\u524D\u7684\u76EE\u6807</span>
systemctl isolate foo.target

<span class="token comment"># Change default target</span>
<span class="token comment">#\u66F4\u6539\u9ED8\u8BA4\u76EE\u6807</span>
systemctl <span class="token builtin class-name">enable</span> foo.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function c(d,m){return n(),e("div",null,t)}const o=s(i,[["render",c],["__file","systemctl.html.vue"]]);export{o as default};
