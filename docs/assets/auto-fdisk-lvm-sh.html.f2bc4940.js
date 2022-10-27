import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:Linux\u7CFB\u7EDFLVM\u903B\u8F91\u5377\u521B\u5EFA\u8FC7\u7A0B\u4EE5\u53CA\u81EA\u52A8\u5316\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token assign-left variable">partition</span><span class="token operator">=</span>/data                <span class="token comment"># \u5B9A\u4E49\u6700\u7EC8\u6302\u8F7D\u7684\u540D\u79F0</span>
<span class="token assign-left variable">vgname</span><span class="token operator">=</span>vg                      <span class="token comment"># \u5B9A\u4E49\u903B\u8F91\u5377\u7EC4\u7684\u540D\u79F0</span>
<span class="token assign-left variable">lvname</span><span class="token operator">=</span>lvm                     <span class="token comment"># \u5B9A\u4E49\u903B\u8F91\u5377\u7684\u540D\u79F0</span>
<span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token string">&#39;b c d e f g h i k j l&#39;</span>   <span class="token comment"># \u6839\u636E\u5206\u533A\u7684\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539</span>
 
<span class="token assign-left variable">disk</span><span class="token operator">=</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$code</span>  
<span class="token keyword">do</span>
<span class="token function">fdisk</span> /dev/sd<span class="token variable">$i</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation">          <span class="token comment"># \u8FD9\u91CC\u81EA\u52A8\u5316\u5B8C\u6210\u4E86\u6240\u6709\u5206\u533Afdisk\u82E6\u903C\u7684\u4EA4\u4E92\u6B65\u9AA4</span></span>
n
p
1
1
 
t
8e
w
EOF</span>
<span class="token assign-left variable">disk</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$disk</span> /dev/sd<span class="token variable">\${i}</span>1&quot;</span> <span class="token comment"># \u5C06\u6240\u6709\u5206\u533A\u62FC\u8D77\u6765</span>
<span class="token keyword">done</span>
 
pvcreate <span class="token variable">$disk</span>
vgcreate <span class="token variable">$vgname</span> <span class="token variable">$disk</span>
lvcreate <span class="token parameter variable">-l</span> <span class="token number">100</span>%VG <span class="token parameter variable">-n</span> <span class="token variable">$lvmname</span> <span class="token variable">$vgname</span>
mkfs.ext4 /dev/<span class="token variable">$vgname</span>/<span class="token variable">$lvmname</span>
 
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$partition</span>
<span class="token builtin class-name">echo</span> &quot;/dev/<span class="token variable">$vgname</span>/<span class="token variable">$lvmname</span>  <span class="token variable">$partition</span>  ext4 noatime,acl,user_xattr  <span class="token number">1</span> <span class="token number">2</span>&#39; <span class="token operator">&gt;&gt;</span> /dev/fstab
<span class="token function">mount</span> <span class="token parameter variable">-a</span>
<span class="token function">df</span> <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[i];function p(c,o){return n(),a("div",null,t)}const v=s(l,[["render",p],["__file","auto-fdisk-lvm-sh.html.vue"]]);export{v as default};
