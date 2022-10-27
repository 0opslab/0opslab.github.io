import{_ as a,o as n,c as s,e}from"./app.a667bd71.js";const i={},l=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-A</span> <span class="token operator">&lt;</span>\u9635\u5217\u8BBE\u5907\u540D<span class="token operator">&gt;</span>\uFF0Cassemble\uFF1A\u52A0\u5165\u4E00\u4E2A\u4EE5\u524D\u5B9A\u4E49\u7684\u9635\u5217
<span class="token parameter variable">-C</span> <span class="token operator">&lt;</span>\u9635\u5217\u8BBE\u5907\u540D<span class="token operator">&gt;</span>\uFF0Ccreate\uFF1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u9635\u5217
<span class="token parameter variable">-D</span> <span class="token operator">&lt;</span>\u9635\u5217\u8BBE\u5907\u540D<span class="token operator">&gt;</span>\uFF0Cdetail\uFF1A\u663E\u793Amd device \u7684\u8BE6\u7EC6\u4FE1\u606F
<span class="token parameter variable">-a</span> <span class="token function">yes</span> \uFF1A\u81EA\u52A8\u521B\u5EFAmd\u9635\u5217\u6587\u4EF6
<span class="token parameter variable">-l</span> \uFF0Clevel<span class="token operator">=</span>\uFF1A\u8BBE\u5B9A raid level
<span class="token parameter variable">-s</span> \uFF0Cscan\uFF1B\u626B\u63CF\u914D\u7F6E\u6587\u4EF6\u6216/proc/mdstat \u4EE5\u641C\u5BFB\u4E22\u5931\u7684\u4FE1\u606F
<span class="token parameter variable">-n</span> \uFF0Craid-devices<span class="token operator">=</span>\uFF1A\u6307\u4E0B\u9635\u5217\u4E2D\u53EF\u7528device\u6570\u76EE\uFF0C\u8FD9\u4E2A\u6570\u76EE\u53EA\u80FD\u7531 \u2013grow\u4FEE\u6539\uFF1B
<span class="token parameter variable">-x</span> \uFF0Cspare-devices<span class="token operator">=</span> \uFF1A\u6307\u5B9A\u521D\u59CB\u9635\u5217\u7684\u5BCC\u4F59device\u6570\u76EE\u3002\u70ED\u5907\u76D8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># For the sake of briefness, we use Bash  &quot;group compound&quot; stanza:</span>
<span class="token comment">#\u4E3A\u7B80\u6D01\u8D77\u89C1\uFF0C\u6211\u4EEC\u4F7F\u7528Bash\u201Cgroup compound\u201D\u8282\uFF1A</span>
<span class="token comment">#   /dev/sd{a,b,...}1 =&gt; /dev/sda1 /dev/sdb1 ...</span>
<span class="token comment">#/dev/sd{a,b,...}1 =&gt; / dev / sda1 / dev / sdb1 ...</span>
<span class="token comment"># Along the following variables:</span>
<span class="token comment">#\u6CBF\u7740\u4EE5\u4E0B\u53D8\u91CF\uFF1A</span>
<span class="token comment">#   \${M} array identifier (/dev/md\${M})</span>
<span class="token comment">#$ {M}\u6570\u7EC4\u6807\u8BC6\u7B26\uFF08/ dev / md $ {M}\uFF09</span>
<span class="token comment">#   \${D} device identifier (/dev/sd\${D})</span>
<span class="token comment">#$ {D}\u8BBE\u5907\u6807\u8BC6\u7B26\uFF08/ dev / sd $ {D}\uFF09</span>
<span class="token comment">#   \${P} partition identifier (/dev/sd\${D}\${P})</span>
<span class="token comment">#$ {P}\u5206\u533A\u6807\u8BC6\u7B26\uFF08/ dev / sd $ {D} $ {P}\uFF09</span>

<span class="token comment"># Create (initialize) a new array</span>
<span class="token comment">#\u521B\u5EFA\uFF08\u521D\u59CB\u5316\uFF09\u4E00\u4E2A\u65B0\u6570\u7EC4</span>
<span class="token function">mdadm</span> <span class="token parameter variable">--create</span> /dev/md<span class="token variable">\${M}</span> <span class="token parameter variable">--level</span><span class="token operator">=</span>raid5 --raid-devices<span class="token operator">=</span><span class="token number">4</span> /dev/sd<span class="token punctuation">{</span>a,b,c,d,e<span class="token punctuation">}</span><span class="token variable">\${P}</span> --spare-devices<span class="token operator">=</span>/dev/sdf1

<span class="token comment"># Manually assemble (activate) an existing array</span>
<span class="token comment">#\u624B\u52A8\u7EC4\u88C5\uFF08\u6FC0\u6D3B\uFF09\u73B0\u6709\u9635\u5217</span>
<span class="token function">mdadm</span> <span class="token parameter variable">--assemble</span> /dev/md<span class="token variable">\${M}</span> /dev/sd<span class="token punctuation">{</span>a,b,c,d,e<span class="token punctuation">}</span><span class="token variable">\${P}</span>

<span class="token comment"># Automatically assemble (activate) all existing arrays</span>
<span class="token comment">#\u81EA\u52A8\u7EC4\u88C5\uFF08\u6FC0\u6D3B\uFF09\u6240\u6709\u73B0\u6709\u9635\u5217</span>
<span class="token function">mdadm</span> <span class="token parameter variable">--assemble</span> <span class="token parameter variable">--scan</span>

<span class="token comment"># Stop an assembled (active) array</span>
<span class="token comment">#\u505C\u6B62\u7EC4\u88C5\uFF08\u6D3B\u52A8\uFF09\u9635\u5217</span>
<span class="token function">mdadm</span> <span class="token parameter variable">--stop</span> /dev/md<span class="token variable">\${M}</span>

<span class="token comment"># See array configuration</span>
<span class="token comment">#\u8BF7\u53C2\u9605\u9635\u5217\u914D\u7F6E</span>
<span class="token function">mdadm</span> <span class="token parameter variable">--query</span> /dev/md<span class="token variable">\${M}</span>

<span class="token comment"># See array component configuration (dump superblock content)</span>
<span class="token comment">#\u8BF7\u53C2\u9605\u9635\u5217\u7EC4\u4EF6\u914D\u7F6E\uFF08\u8F6C\u50A8\u8D85\u7EA7\u5757\u5185\u5BB9\uFF09</span>
<span class="token function">mdadm</span> <span class="token parameter variable">--query</span> <span class="token parameter variable">--examine</span> /dev/sd<span class="token variable">\${D}</span><span class="token variable">\${P}</span>

<span class="token comment"># See detailed array confiration/status</span>
<span class="token comment">#\u67E5\u770B\u8BE6\u7EC6\u7684\u9635\u5217\u914D\u7F6E/\u72B6\u6001</span>
<span class="token function">mdadm</span> <span class="token parameter variable">--detail</span> /dev/md<span class="token variable">\${M}</span>

<span class="token comment"># Save existing arrays configuration</span>
<span class="token comment">#\u4FDD\u5B58\u73B0\u6709\u9635\u5217\u914D\u7F6E</span>
<span class="token comment"># (MAY be required by initrd for successfull boot)</span>
<span class="token comment">#\uFF08initrd\u53EF\u80FD\u9700\u8981\u6210\u529F\u542F\u52A8\uFF09</span>
<span class="token function">mdadm</span> <span class="token parameter variable">--detail</span> <span class="token parameter variable">--scan</span> <span class="token operator">&gt;</span> /etc/mdadm/mdadm.conf

<span class="token comment"># Erase array component superblock</span>
<span class="token comment">#\u64E6\u9664\u6570\u7EC4\u7EC4\u4EF6\u8D85\u7EA7\u5757</span>
<span class="token comment"># (MUST do before reusing a partition for other purposes)</span>
<span class="token comment">#\uFF08\u5FC5\u987B\u5728\u91CD\u7528\u5206\u533A\u7528\u4E8E\u5176\u4ED6\u76EE\u7684\u4E4B\u524D\uFF09</span>
<span class="token function">mdadm</span> --zero-superblock /dev/sd<span class="token variable">\${D}</span><span class="token variable">\${P}</span>

<span class="token comment"># Manually mark a component as failed</span>
<span class="token comment">#\u624B\u52A8\u5C06\u7EC4\u4EF6\u6807\u8BB0\u4E3A\u5931\u8D25</span>
<span class="token comment"># (SHOULD when a device shows wear-and-tear signs, e.g. through SMART)</span>
<span class="token comment">#\uFF08\u5F53\u8BBE\u5907\u663E\u793A\u78E8\u635F\u8FF9\u8C61\u65F6\uFF0C\u4F8B\u5982\u901A\u8FC7SMART\uFF09</span>
<span class="token function">mdadm</span> <span class="token parameter variable">--manage</span> /dev/md<span class="token variable">\${M}</span> <span class="token parameter variable">--fail</span> /dev/sd<span class="token variable">\${D}</span><span class="token variable">\${P}</span>

<span class="token comment"># Remove a failed component</span>
<span class="token comment">#\u5220\u9664\u53D1\u751F\u6545\u969C\u7684\u7EC4\u4EF6</span>
<span class="token comment"># (SHOULD before preemptively replacing a device, after failing it)</span>
<span class="token comment">#\uFF08\u5E94\u8BE5\u5728\u62A2\u5148\u66F4\u6362\u8BBE\u5907\u4E4B\u524D\uFF0C\u5728\u5931\u8D25\u4E4B\u540E\uFF09</span>
<span class="token function">mdadm</span> <span class="token parameter variable">--manage</span> /dev/md<span class="token variable">\${M}</span> <span class="token parameter variable">--remove</span> /dev/sd<span class="token variable">\${D}</span><span class="token variable">\${P}</span>

<span class="token comment"># Prepare (format) a new device to replace a failed one</span>
<span class="token comment">#\u51C6\u5907\uFF08\u683C\u5F0F\u5316\uFF09\u65B0\u8BBE\u5907\u4EE5\u66FF\u6362\u53D1\u751F\u6545\u969C\u7684\u8BBE\u5907</span>
sfdisk <span class="token parameter variable">-d</span> /dev/sd<span class="token variable">\${D<span class="token operator">,</span>sane}</span> <span class="token operator">|</span> sfdisk /dev/sd<span class="token variable">\${D<span class="token operator">,</span>new}</span>

<span class="token comment"># Add new component to an existing array</span>
<span class="token comment">#\u5C06\u65B0\u7EC4\u4EF6\u6DFB\u52A0\u5230\u73B0\u6709\u9635\u5217</span>
<span class="token comment"># (this will trigger the rebuild)</span>
<span class="token comment">#\uFF08\u8FD9\u5C06\u89E6\u53D1\u91CD\u5EFA\uFF09</span>
<span class="token function">mdadm</span> <span class="token parameter variable">--manage</span> /dev/md<span class="token variable">\${M}</span> <span class="token parameter variable">--add</span> /dev/sd<span class="token variable">\${D<span class="token operator">,</span>new}</span><span class="token variable">\${P}</span>

<span class="token comment"># See assembled (active) arrays status</span>
<span class="token comment">#\u8BF7\u53C2\u9605\u7EC4\u88C5\uFF08\u6D3B\u52A8\uFF09\u9635\u5217\u72B6\u6001</span>
<span class="token function">cat</span> /proc/mdstat

<span class="token comment"># Rename a device</span>
<span class="token comment">#\u91CD\u547D\u540D\u8BBE\u5907</span>
<span class="token comment"># (SHOULD after hostname change; eg. name=&quot;$(hostname -s)&quot;)</span>
<span class="token comment">#\uFF08\u4E3B\u673A\u540D\u66F4\u6539\u540E\u5E94\u8BE5\u51FA\u73B0;\u4F8B\u5982\uFF1Aname =\u201C$\uFF08hostname -s\uFF09\u201D\uFF09</span>
<span class="token function">mdadm</span> <span class="token parameter variable">--assemble</span> /dev/md<span class="token variable">\${M}</span> /dev/sd<span class="token punctuation">{</span>a,b,c,d,e<span class="token punctuation">}</span><span class="token variable">\${P}</span> <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${name}</span>:<span class="token variable">\${M}</span>&quot;</span> <span class="token parameter variable">--update</span><span class="token operator">=</span>name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[l];function t(p,d){return n(),s("div",null,c)}const o=a(i,[["render",t],["__file","mdadm.html.vue"]]);export{o as default};
