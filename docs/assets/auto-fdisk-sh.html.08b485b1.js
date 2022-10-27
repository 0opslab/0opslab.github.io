import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},p=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:LINUX\u81EA\u52A8\u5206\u533A\u5904\u7406\u5355\u5757\u78C1\u76D8\u6709\u672A\u5206\u533A\u7A7A\u95F4</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">tmp1</span><span class="token operator">=</span>/tmp/tmp1.log
<span class="token assign-left variable">tmp2</span><span class="token operator">=</span>/tmp/tmp2.log
<span class="token operator">&gt;</span><span class="token variable">$tmp1</span>
<span class="token operator">&gt;</span><span class="token variable">$tmp2</span>
<span class="token assign-left variable">fstab_file</span><span class="token operator">=</span>/etc/fstab

<span class="token comment">#check lock file ,one time only let the script run one time </span>
<span class="token assign-left variable">LOCKfile</span><span class="token operator">=</span>/tmp/.<span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> $0<span class="token variable">)</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$LOCKfile</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[1;40;31mThe script is already exist,please next time to run this script.<span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
  <span class="token builtin class-name">exit</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[40;32mStep 1.No lock file,begin to create lock file and continue.<span class="token entity" title="\\033">\\033</span>[40;37m&quot;</span>
  <span class="token function">touch</span> <span class="token variable">$LOCKfile</span>
<span class="token keyword">fi</span>

<span class="token comment">#check user</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span> <span class="token operator">!=</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[1;40;31mError: You must be root to run this script, please use root to install this script.<span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$LOCKfile</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token comment">#check disk partition</span>
<span class="token function-name function">check_disk</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token operator">&gt;</span><span class="token variable">$LOCKfile</span>
  <span class="token assign-left variable">device_list</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">fdisk</span> -l<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;dev&quot;</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;sd&quot;</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token punctuation">[</span>\uFF1A<span class="token punctuation">]</span> <span class="token string">&#39;{print $1}&#39;</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span><span class="token function">awk</span> -F: <span class="token string">&#39;{print $1}&#39;</span> <span class="token operator">|</span><span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">1</span><span class="token variable">)</span></span>
  <span class="token function">fdisk</span> -l<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;sda&quot;</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;dev&quot;</span> <span class="token operator">|</span><span class="token function">grep</span> Linux <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;sd&quot;</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span> <span class="token operator">&gt;</span><span class="token variable">$tmp1</span>
<span class="token punctuation">}</span>

<span class="token comment">#check os</span>
<span class="token function-name function">check_os</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token assign-left variable">os_release</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&quot;CentOS&quot;</span> /etc/issue <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null<span class="token variable">)</span></span>
  <span class="token assign-left variable">os_release_2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&quot;CentOS&quot;</span> /etc/redhat-release <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null<span class="token variable">)</span></span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$os_release</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$os_release_2</span>&quot;</span> <span class="token punctuation">]</span>
  <span class="token keyword">then</span>
      <span class="token assign-left variable">os_release</span><span class="token operator">=</span>CentOS
      modify_env
  <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment">#install ext4</span>
<span class="token function-name function">modify_env</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">#yum install e4fsprogs parted -y</span>
  <span class="token comment">#modprobe ext4</span>
  <span class="token builtin class-name">echo</span> ext4
<span class="token punctuation">}</span>

<span class="token comment">#fdisk ,formating and create the file system</span>
<span class="token function-name function">fdisk_fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token function">fdisk</span> <span class="token parameter variable">-S</span> <span class="token number">56</span> <span class="token variable">$1</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
n
e


n


p


wq

EOF</span>

<span class="token function">sleep</span> <span class="token number">5</span>
<span class="token comment">#mkfs.ext4 \${1}1</span>
<span class="token punctuation">}</span>

<span class="token comment">#config /etc/fstab and mount device</span>
<span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

fdisk_fun <span class="token variable">$device_list</span>

<span class="token function">fdisk</span> -l<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;sda&quot;</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;dev&quot;</span> <span class="token operator">|</span><span class="token function">grep</span> Linux <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;sd&quot;</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span> <span class="token operator">&gt;</span><span class="token variable">$tmp2</span>
<span class="token comment">#partprobe</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> <span class="token parameter variable">-F</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-f</span> $tmp1 $tmp2 <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span><span class="token variable">\`</span></span>
<span class="token keyword">do</span>
  
partx <span class="token parameter variable">-a</span> <span class="token variable">$device_list</span>
partx <span class="token parameter variable">-a</span> <span class="token variable">$i</span> <span class="token variable">$device_list</span>
<span class="token function">mkfs</span> <span class="token parameter variable">-t</span> ext4 <span class="token variable">$i</span>
<span class="token keyword">if</span>  <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> /data <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span> 
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data
<span class="token function">mount</span>  <span class="token variable">$i</span>  /data
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$i</span>  /data                                                  ext4    defaults        1 2&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">$fstab_file</span>
<span class="token keyword">else</span>
   <span class="token keyword">if</span>  <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> /data1 <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span> 
   <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data1
   <span class="token function">mount</span>  <span class="token variable">$i</span>  /data1
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$i</span>  /data1                                                  ext4    defaults        1 2&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">$fstab_file</span>
   <span class="token keyword">fi</span> 
<span class="token keyword">fi</span> 

<span class="token keyword">done</span>

<span class="token punctuation">}</span>

<span class="token comment">#=========start script===========</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[40;32mStep 2.Begin to check free disk.<span class="token entity" title="\\033">\\033</span>[40;37m&quot;</span>
check_os
check_disk
main
<span class="token function">df</span> <span class="token parameter variable">-h</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[p];function l(o,c){return s(),a("div",null,i)}const d=n(t,[["render",l],["__file","auto-fdisk-sh.html.vue"]]);export{d as default};
