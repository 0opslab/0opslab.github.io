import{_ as e,o as n,c as s,e as a}from"./app.a667bd71.js";const i={},l=a(`<p>\u5728ext3/ext4\u6587\u4EF6\u7CFB\u7EDF\u4E0Bextundelete\u7B97\u662F\u6700\u7ED9\u7ED9\u529B\u7684\u5DE5\u5177,\u5728\u5B9E\u9645\u73AF\u5883\u4E2D\u5C06extundelete\u5B89\u88C5\u5355\u72EC\u7684\u786C\u76D8\u4E0A \u5728\u6267\u884Cextundelete\u6267\u884C\u5B8C\u6BD5\u540E\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u751F\u4EA7\u4E00\u4E2ARECOVERED_FILES\u76EE\u5F55\uFF0C\u91CC\u9762\u5373\u662F\u6062\u590D\u51FA\u6765\u7684\u6587\u4EF6\uFF0C \u8FD8\u5305\u62EC\u6587\u4EF6\u5939\u3002 \u4EFB\u4F55\u7684\u6587\u4EF6\u6062\u590D\u5DE5\u5177\uFF0C\u5728\u4F7F\u7528\u524D\uFF0C\u5747\u8981\u5C06\u8981\u6062\u590D\u7684\u5206\u533A\u5378\u8F7D\u6216\u6302\u8F7D\u4E3A\u53EA\u8BFB\uFF0C\u9632\u6B62\u6570\u636E\u88AB\u8986 \u76D6\u4F7F\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#umount /dev/partition</span>
<span class="token comment">#mount -o remount,ro /dev/partition </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yum install e2fsprogs* e2fslibs* -y </span>
<span class="token comment"># wget http://nchc.dl.sourceforge.net/project/extundelete/extundelete/0.2.4/extundelete-0.2.4.tar.bz2 </span>
<span class="token comment"># tar -axf extundelete-0.2.4.tar.bz2 -C /usr/local/src </span>
<span class="token comment"># cd /usr/local/src/extundelete-0.2.4 </span>
<span class="token comment"># ./configure --prefix=/usr/local/extundelete </span>
<span class="token comment"># make </span>
<span class="token comment"># make install </span>
<span class="token comment"># ln -s /usr/local/extundelete/bin/* /usr/local/bin/ </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u4F7F\u7528\u53CA\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53CA\u547D\u4EE4" aria-hidden="true">#</a> \u4F7F\u7528\u53CA\u547D\u4EE4</h1><h2 id="umount\u6216\u8005read-only-\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#umount\u6216\u8005read-only-\u5206\u533A" aria-hidden="true">#</a> umount\u6216\u8005read\xA0only\xA0\u5206\u533A</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">umount</span> /dev/partition
$ <span class="token function">mount</span> <span class="token parameter variable">-o</span> remount,ro /dev/partition 
// \u5207\u6362\u5230\u5B58\u50A8\u6062\u590D\u6587\u4EF6\u7684\u76EE\u5F55 
$ <span class="token builtin class-name">cd</span> <span class="token variable">$dir</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Usage: extundelete <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">]</span> device-file 
Options: 
<span class="token parameter variable">--superblock</span> \u6253\u5370\u6307\u5B9A\u5206\u533A\u7684\u8D85\u7EA7\u5757\u4FE1\u606F\u3002\u5982\u4E0D\u52A0\u4EFB\u4F55\u7684\u53C2\u6570\uFF0C 
\u6B64\u9009\u9879\u662F\u9ED8\u8BA4\u7684.
extundelete <span class="token parameter variable">--superblock</span> /dev/sda3 <span class="token operator">&lt;</span>---<span class="token operator">&gt;</span> extundelete /dev/sda1 

--journal\u663E\u793A\u5757\u7684\u65E5\u5FD7\u4FE1\u606F\uFF0C\u540C--superblock\u3002 
extundelete <span class="token parameter variable">--journal</span> /dev/sda1 

<span class="token parameter variable">--after</span> dtime\u53EA\u6062\u590D\u6307\u5B9A\u65F6\u95F4\u3010dtime\u3011\uFF08\u65F6\u95F4\u6233\uFF09\u4E4B\u540E\uFF0C\u88AB\u5220\u9664\u7684\u6570\u636E 

\u5047\u5982\u5220\u9664\u7684\u65F6\u95F4\u5927\u6982\u662F2011-7-26 <span class="token number">14</span>\uFF1A30 
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;Jul 26 14:30&quot;</span> +%s 
\u5F97\u51FA\u79D2\u6570 <span class="token number">1234567890</span> 
\u6062\u590D\u6B64\u65F6\u95F4\u540E\u5220\u9664\u7684\u6240\u6709\u6587\u4EF6 
extundelete /dev/sdb1 <span class="token parameter variable">--after</span> <span class="token number">1234567890</span> --restore-all 

<span class="token parameter variable">--before</span> dtime \u53EA\u6062\u590D\u6307\u5B9A\u65F6\u95F4\u3010dtime\u3011\uFF08\u65F6\u95F4\u6233\uFF09\u4E4B\u524D\uFF0C\u88AB\u5220\u9664\u7684\u6570\u636E 

Actions: 
<span class="token parameter variable">--inode</span> ino\u663E\u793A\u67D0\u5206\u533Ainode\u4E3Ax\u7684\u4FE1\u606F\uFF0C\u4E00\u822C\u662F\u67E5\u770B\u8BE5\u5206\u533A\u4E0B\u6240\u6709\u7684\u6587\u4EF6. 
extundelete <span class="token parameter variable">--inode</span> <span class="token number">2</span> /dev/sda1 

<span class="token parameter variable">--block</span> blk\u663E\u793A\u67D0\u5206\u533Ablock\u4E3Ax\u7684\u4FE1\u606F. 

--restore-inode ino<span class="token punctuation">[</span>,ino,<span class="token punctuation">..</span>.<span class="token punctuation">]</span> \u6062\u590D\u4E00\u4E2A\u6216\u591A\u4E2A\u6307\u5B9Ainode\u53F7\u7684\u6587\u4EF6\uFF0C\u8BE5\u6062\u590D\u7684\u6587\u4EF6\uFF0C 
\u4FDD\u5B58\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u7684RECOVERED_FILES\u91CC\uFF0C\u6587\u4EF6\u540D\u4E3A\u3010file.<span class="token variable">$inode</span>\u3011 
extundelete /dev/sda1 --restore-inode <span class="token number">13,14</span> 

--restore-file <span class="token string">&#39;filename&#39;</span>\u6062\u590D\u6307\u5B9A\u7684\u6587\u4EF6\uFF08\u88AB\u5220\u9664\u7684\uFF09\uFF0C\u6587\u4EF6\u4F4D\u4E8E\u5F53\u524D\u76EE\u5F55\u4E0B 
\u7684RECOVERED_FILES/<span class="token variable">$filename</span>\uFF0C\u6587\u4EF6\u540D\u8FD8\u662F\u539F\u6765\u7684 
extundelete /dev/sda1 --restore-file initramfs-2.6.32-358.el6.x86_64.img 

--restore-files <span class="token string">&#39;read_filename&#39;</span>\u6062\u590D\u6307\u5B9A\u7684\u6587\u4EF6\uFF08\u771F\u5B9E\u5B58\u5728\u7684\uFF09\u4E2D\u7684\u5185\u5BB9\uFF0C 
\u6587\u4EF6\u4F4D\u4E8E\u5F53\u524D\u76EE\u5F55\u4E0B\u7684RECOVERED_FILES/<span class="token variable">$filename</span>\uFF0C\u6587\u4EF6\u540D\u8FD8\u662F\u539F\u6765\u7684 
<span class="token function">vi</span> test_restore.txt<span class="token punctuation">(</span>\u7ED3\u5C3E\u4E0D\u53EF\u6709\u591A\u4F59\u7684\u7A7A\u683C<span class="token punctuation">)</span> 
 System.map-2.6.32-358.el6.x86_64 
 config-2.6.32-358.el6.x86_64 
 symvers-2.6.32-358.el6.x86_64.gz 
 vmlinuz-2.6.32-358.el6.x86_64 
 initramfs-2.6.32-358.el6.x86_64.img 
 extundelete /dev/sda1--restore-files test_restore.txt 


--restore-directory <span class="token string">&#39;dir-name&#39;</span>\u6062\u590D\u6307\u5B9A\u7684\u76EE\u5F55\uFF0C\u6587\u4EF6\u4F4D\u4E8E\u5F53\u524D\u76EE\u5F55\u4E0B\u7684 
RECOVERED_FILES/<span class="token variable">$dir</span>-name\uFF0C\u6587\u4EF6\u540D\u8FD8\u662F\u539F\u6765\u7684 
  extundelete /dev/sda1--restore-files grub 

--restore-all  \u6062\u590D\u67D0\u5206\u533A\u91CC\u6240\u6709\u88AB\u5220\u9664\u7684\u6570\u636E\uFF0C\u6587\u4EF6\u540D\u8FD8\u662F\u539F\u6765\u7684 
   extundelete /dev/sda1 --restore-all 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),d=[l];function t(r,c){return n(),s("div",null,d)}const o=e(i,[["render",t],["__file","restorefile.html.vue"]]);export{o as default};
