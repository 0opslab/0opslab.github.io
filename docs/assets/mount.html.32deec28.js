import{_ as n,o as a,c as s,e}from"./app.a667bd71.js";const i={},l=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-V\uFF1A\u663E\u793A\u7A0B\u5E8F\u7248\u672C
-h\uFF1A\u663E\u793A\u8F85\u52A9\u8BAF\u606F
-v\uFF1A\u663E\u793A\u8F83\u8BAF\u606F\uFF0C\u901A\u5E38\u548C <span class="token parameter variable">-f</span> \u7528\u6765\u9664\u9519\u3002
-a\uFF1A\u5C06 /etc/fstab \u4E2D\u5B9A\u4E49\u7684\u6240\u6709\u6863\u6848\u7CFB\u7EDF\u6302\u4E0A\u3002
-F\uFF1A\u8FD9\u4E2A\u547D\u4EE4\u901A\u5E38\u548C <span class="token parameter variable">-a</span> \u4E00\u8D77\u4F7F\u7528\uFF0C\u5B83\u4F1A\u4E3A\u6BCF\u4E00\u4E2A <span class="token function">mount</span> \u7684\u52A8\u4F5C\u4EA7\u751F\u4E00\u4E2A\u884C\u7A0B\u8D1F\u8D23\u6267\u884C\u3002\u5728\u7CFB\u7EDF\u9700\u8981\u6302\u4E0A\u5927\u91CF NFS \u6863\u6848\u7CFB\u7EDF\u65F6\u53EF\u4EE5\u52A0\u5FEB\u6302\u4E0A\u7684\u52A8\u4F5C\u3002
-f\uFF1A\u901A\u5E38\u7528\u5728\u9664\u9519\u7684\u7528\u9014\u3002\u5B83\u4F1A\u4F7F <span class="token function">mount</span> \u5E76\u4E0D\u6267\u884C\u5B9E\u9645\u6302\u4E0A\u7684\u52A8\u4F5C\uFF0C\u800C\u662F\u6A21\u62DF\u6574\u4E2A\u6302\u4E0A\u7684\u8FC7\u7A0B\u3002\u901A\u5E38\u4F1A\u548C <span class="token parameter variable">-v</span> \u4E00\u8D77\u4F7F\u7528\u3002
-n\uFF1A\u4E00\u822C\u800C\u8A00\uFF0Cmount \u5728\u6302\u4E0A\u540E\u4F1A\u5728 /etc/mtab \u4E2D\u5199\u5165\u4E00\u7B14\u8D44\u6599\u3002\u4F46\u5728\u7CFB\u7EDF\u4E2D\u6CA1\u6709\u53EF\u5199\u5165\u6863\u6848\u7CFB\u7EDF\u5B58\u5728\u7684\u60C5\u51B5\u4E0B\u53EF\u4EE5\u7528\u8FD9\u4E2A\u9009\u9879\u53D6\u6D88\u8FD9\u4E2A\u52A8\u4F5C\u3002
-s-r\uFF1A\u7B49\u4E8E <span class="token parameter variable">-o</span> ro
-w\uFF1A\u7B49\u4E8E <span class="token parameter variable">-o</span> rw
-L\uFF1A\u5C06\u542B\u6709\u7279\u5B9A\u6807\u7B7E\u7684\u786C\u76D8\u5206\u5272\u6302\u4E0A\u3002
-U\uFF1A\u5C06\u6863\u6848\u5206\u5272\u5E8F\u53F7\u4E3A \u7684\u6863\u6848\u7CFB\u7EDF\u6302\u4E0B\u3002-L \u548C <span class="token parameter variable">-U</span> \u5FC5\u987B\u5728/proc/partition \u8FD9\u79CD\u6863\u6848\u5B58\u5728\u65F6\u624D\u6709\u610F\u4E49\u3002
-t\uFF1A\u6307\u5B9A\u6863\u6848\u7CFB\u7EDF\u7684\u578B\u6001\uFF0C\u901A\u5E38\u4E0D\u5FC5\u6307\u5B9A\u3002mount \u4F1A\u81EA\u52A8\u9009\u62E9\u6B63\u786E\u7684\u578B\u6001\u3002
<span class="token parameter variable">-o</span> async\uFF1A\u6253\u5F00\u975E\u540C\u6B65\u6A21\u5F0F\uFF0C\u6240\u6709\u7684\u6863\u6848\u8BFB\u5199\u52A8\u4F5C\u90FD\u4F1A\u7528\u975E\u540C\u6B65\u6A21\u5F0F\u6267\u884C\u3002
<span class="token parameter variable">-o</span> sync\uFF1A\u5728\u540C\u6B65\u6A21\u5F0F\u4E0B\u6267\u884C\u3002
<span class="token parameter variable">-o</span> atime\u3001-o noatime\uFF1A\u5F53 atime \u6253\u5F00\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u5728\u6BCF\u6B21\u8BFB\u53D6\u6863\u6848\u65F6\u66F4\u65B0\u6863\u6848\u7684\u300E\u4E0A\u4E00\u6B21\u8C03\u7528\u65F6\u95F4\u300F\u3002
  \u5F53\u6211\u4EEC\u4F7F\u7528 flash \u6863\u6848\u7CFB\u7EDF\u65F6\u53EF\u80FD\u4F1A\u9009\u9879\u628A\u8FD9\u4E2A\u9009\u9879\u5173\u95ED\u4EE5\u51CF\u5C11\u5199\u5165\u7684\u6B21\u6570\u3002
<span class="token parameter variable">-o</span> auto\u3001-o noauto\uFF1A\u6253\u5F00/\u5173\u95ED\u81EA\u52A8\u6302\u4E0A\u6A21\u5F0F\u3002
<span class="token parameter variable">-o</span> defaults:\u4F7F\u7528\u9884\u8BBE\u7684\u9009\u9879 rw, suid, dev, exec, auto, nouser, and async.
<span class="token parameter variable">-o</span> dev\u3001-o nodev-o exec\u3001-o noexec\u5141\u8BB8\u6267\u884C\u6863\u88AB\u6267\u884C\u3002
<span class="token parameter variable">-o</span> suid\u3001-o nosuid\uFF1A
\u5141\u8BB8\u6267\u884C\u6863\u5728 root \u6743\u9650\u4E0B\u6267\u884C\u3002
<span class="token parameter variable">-o</span> user\u3001-o nouser\uFF1A\u4F7F\u7528\u8005\u53EF\u4EE5\u6267\u884C mount/umount \u7684\u52A8\u4F5C\u3002
<span class="token parameter variable">-o</span> remount\uFF1A\u5C06\u4E00\u4E2A\u5DF2\u7ECF\u6302\u4E0B\u7684\u6863\u6848\u7CFB\u7EDF\u91CD\u65B0\u7528\u4E0D\u540C\u7684\u65B9\u5F0F\u6302\u4E0A\u3002\u4F8B\u5982\u539F\u5148\u662F\u552F\u8BFB\u7684\u7CFB\u7EDF\uFF0C\u73B0\u5728\u7528\u53EF\u8BFB\u5199\u7684\u6A21\u5F0F\u91CD\u65B0\u6302\u4E0A\u3002
<span class="token parameter variable">-o</span> ro\uFF1A\u7528\u552F\u8BFB\u6A21\u5F0F\u6302\u4E0A\u3002
<span class="token parameter variable">-o</span> rw\uFF1A\u7528\u53EF\u8BFB\u5199\u6A21\u5F0F\u6302\u4E0A\u3002
<span class="token parameter variable">-o</span> <span class="token assign-left variable">loop</span><span class="token operator">=</span>\uFF1A\u4F7F\u7528 loop \u6A21\u5F0F\u7528\u6765\u5C06\u4E00\u4E2A\u6863\u6848\u5F53\u6210\u786C\u76D8\u5206\u5272\u6302\u4E0A\u7CFB\u7EDF\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To mount / partition as read-write in repair mode:</span>
<span class="token comment">#\u8981\u5728\u4FEE\u590D\u6A21\u5F0F\u4E0B\u4EE5\u8BFB\u5199\u65B9\u5F0F\u6302\u8F7D/\u5206\u533A\uFF1A</span>
<span class="token function">mount</span> <span class="token parameter variable">-o</span> remount,rw /

<span class="token comment"># Bind mount path to a second location</span>
<span class="token comment">#\u5C06\u88C5\u8F7D\u8DEF\u5F84\u7ED1\u5B9A\u5230\u7B2C\u4E8C\u4E2A\u4F4D\u7F6E</span>
<span class="token function">mount</span> <span class="token parameter variable">--bind</span> /origin/path /destination/path

<span class="token comment"># To mount Usb disk as user writable:</span>
<span class="token comment">#\u4EE5\u7528\u6237\u53EF\u5199\u65B9\u5F0F\u6302\u8F7DUsb\u78C1\u76D8\uFF1A</span>
<span class="token function">mount</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">uid</span><span class="token operator">=</span>username,gid<span class="token operator">=</span>usergroup /dev/sdx /mnt/xxx

<span class="token comment"># To mount a remote NFS directory</span>
<span class="token comment">#\u5B89\u88C5\u8FDC\u7A0BNFS\u76EE\u5F55</span>
<span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs example.com:/remote/example/dir /local/example/dir

<span class="token comment"># To mount an ISO</span>
<span class="token comment">#\u5B89\u88C5ISO</span>
<span class="token function">mount</span> <span class="token parameter variable">-o</span> loop disk1.iso /mnt/disk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[l];function o(t,c){return a(),s("div",null,r)}const p=n(i,[["render",o],["__file","mount.html.vue"]]);export{p as default};
