import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. SRC DEST
<span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. SRC <span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>host:DEST
<span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>HOST:SRC DEST
<span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>HOST::SRC DEST
<span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. SRC <span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>HOST::DEST
<span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. rsync://<span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>HOST<span class="token punctuation">[</span>:PORT<span class="token punctuation">]</span>/SRC <span class="token punctuation">[</span>DEST<span class="token punctuation">]</span>

-v, <span class="token parameter variable">--verbose</span> \u8BE6\u7EC6\u6A21\u5F0F\u8F93\u51FA\u3002
-q, <span class="token parameter variable">--quiet</span> \u7CBE\u7B80\u8F93\u51FA\u6A21\u5F0F\u3002
-c, <span class="token parameter variable">--checksum</span> \u6253\u5F00\u6821\u9A8C\u5F00\u5173\uFF0C\u5F3A\u5236\u5BF9\u6587\u4EF6\u4F20\u8F93\u8FDB\u884C\u6821\u9A8C\u3002
-a, <span class="token parameter variable">--archive</span> \u5F52\u6863\u6A21\u5F0F\uFF0C\u8868\u793A\u4EE5\u9012\u5F52\u65B9\u5F0F\u4F20\u8F93\u6587\u4EF6\uFF0C\u5E76\u4FDD\u6301\u6240\u6709\u6587\u4EF6\u5C5E\u6027\uFF0C\u7B49\u4E8E-rlptgoD\u3002
-r, <span class="token parameter variable">--recursive</span> \u5BF9\u5B50\u76EE\u5F55\u4EE5\u9012\u5F52\u6A21\u5F0F\u5904\u7406\u3002
-R, <span class="token parameter variable">--relative</span> \u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u4FE1\u606F\u3002
-b, <span class="token parameter variable">--backup</span> \u521B\u5EFA\u5907\u4EFD\uFF0C\u4E5F\u5C31\u662F\u5BF9\u4E8E\u76EE\u7684\u5DF2\u7ECF\u5B58\u5728\u6709\u540C\u6837\u7684\u6587\u4EF6\u540D\u65F6\uFF0C\u5C06\u8001\u7684\u6587\u4EF6\u91CD\u65B0\u547D\u540D\u4E3A~filename\u3002\u53EF\u4EE5\u4F7F\u7528--suffix\u9009\u9879\u6765\u6307\u5B9A\u4E0D\u540C\u7684\u5907\u4EFD\u6587\u4EF6\u524D\u7F00\u3002
--backup-dir \u5C06\u5907\u4EFD\u6587\u4EF6<span class="token punctuation">(</span>\u5982~filename<span class="token punctuation">)</span>\u5B58\u653E\u5728\u5728\u76EE\u5F55\u4E0B\u3002
<span class="token parameter variable">-suffix</span><span class="token operator">=</span>SUFFIX \u5B9A\u4E49\u5907\u4EFD\u6587\u4EF6\u524D\u7F00\u3002
-u, <span class="token parameter variable">--update</span> \u4EC5\u4EC5\u8FDB\u884C\u66F4\u65B0\uFF0C\u4E5F\u5C31\u662F\u8DF3\u8FC7\u6240\u6709\u5DF2\u7ECF\u5B58\u5728\u4E8EDST\uFF0C\u5E76\u4E14\u6587\u4EF6\u65F6\u95F4\u665A\u4E8E\u8981\u5907\u4EFD\u7684\u6587\u4EF6\uFF0C\u4E0D\u8986\u76D6\u66F4\u65B0\u7684\u6587\u4EF6\u3002
-l, <span class="token parameter variable">--links</span> \u4FDD\u7559\u8F6F\u94FE\u7ED3\u3002
-L, --copy-links \u60F3\u5BF9\u5F85\u5E38\u89C4\u6587\u4EF6\u4E00\u6837\u5904\u7406\u8F6F\u94FE\u7ED3\u3002
--copy-unsafe-links \u4EC5\u4EC5\u62F7\u8D1D\u6307\u5411SRC\u8DEF\u5F84\u76EE\u5F55\u6811\u4EE5\u5916\u7684\u94FE\u7ED3\u3002
--safe-links \u5FFD\u7565\u6307\u5411SRC\u8DEF\u5F84\u76EE\u5F55\u6811\u4EE5\u5916\u7684\u94FE\u7ED3\u3002
-H, --hard-links \u4FDD\u7559\u786C\u94FE\u7ED3\u3002
-p, <span class="token parameter variable">--perms</span> \u4FDD\u6301\u6587\u4EF6\u6743\u9650\u3002
-o, <span class="token parameter variable">--owner</span> \u4FDD\u6301\u6587\u4EF6\u5C5E\u4E3B\u4FE1\u606F\u3002
-g, <span class="token parameter variable">--group</span> \u4FDD\u6301\u6587\u4EF6\u5C5E\u7EC4\u4FE1\u606F\u3002
-D, <span class="token parameter variable">--devices</span> \u4FDD\u6301\u8BBE\u5907\u6587\u4EF6\u4FE1\u606F\u3002
-t, <span class="token parameter variable">--times</span> \u4FDD\u6301\u6587\u4EF6\u65F6\u95F4\u4FE1\u606F\u3002
-S, <span class="token parameter variable">--sparse</span> \u5BF9\u7A00\u758F\u6587\u4EF6\u8FDB\u884C\u7279\u6B8A\u5904\u7406\u4EE5\u8282\u7701DST\u7684\u7A7A\u95F4\u3002
-n, --dry-run\u73B0\u5B9E\u54EA\u4E9B\u6587\u4EF6\u5C06\u88AB\u4F20\u8F93\u3002
-w, --whole-file \u62F7\u8D1D\u6587\u4EF6\uFF0C\u4E0D\u8FDB\u884C\u589E\u91CF\u68C0\u6D4B\u3002
-x, --one-file-system \u4E0D\u8981\u8DE8\u8D8A\u6587\u4EF6\u7CFB\u7EDF\u8FB9\u754C\u3002
-B, --block-size<span class="token operator">=</span>SIZE \u68C0\u9A8C\u7B97\u6CD5\u4F7F\u7528\u7684\u5757\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u662F700\u5B57\u8282\u3002
-e, <span class="token parameter variable">--rsh</span><span class="token operator">=</span>command \u6307\u5B9A\u4F7F\u7528rsh\u3001ssh\u65B9\u5F0F\u8FDB\u884C\u6570\u636E\u540C\u6B65\u3002
--rsync-path<span class="token operator">=</span><span class="token environment constant">PATH</span> \u6307\u5B9A\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u7684rsync\u547D\u4EE4\u6240\u5728\u8DEF\u5F84\u4FE1\u606F\u3002
-C, --cvs-exclude \u4F7F\u7528\u548CCVS\u4E00\u6837\u7684\u65B9\u6CD5\u81EA\u52A8\u5FFD\u7565\u6587\u4EF6\uFF0C\u7528\u6765\u6392\u9664\u90A3\u4E9B\u4E0D\u5E0C\u671B\u4F20\u8F93\u7684\u6587\u4EF6\u3002
<span class="token parameter variable">--existing</span> \u4EC5\u4EC5\u66F4\u65B0\u90A3\u4E9B\u5DF2\u7ECF\u5B58\u5728\u4E8EDST\u7684\u6587\u4EF6\uFF0C\u800C\u4E0D\u5907\u4EFD\u90A3\u4E9B\u65B0\u521B\u5EFA\u7684\u6587\u4EF6\u3002
<span class="token parameter variable">--delete</span> \u5220\u9664\u90A3\u4E9BDST\u4E2DSRC\u6CA1\u6709\u7684\u6587\u4EF6\u3002
--delete-excluded \u540C\u6837\u5220\u9664\u63A5\u6536\u7AEF\u90A3\u4E9B\u88AB\u8BE5\u9009\u9879\u6307\u5B9A\u6392\u9664\u7684\u6587\u4EF6\u3002
--delete-after \u4F20\u8F93\u7ED3\u675F\u4EE5\u540E\u518D\u5220\u9664\u3002
--ignore-errors \u53CA\u65F6\u51FA\u73B0IO\u9519\u8BEF\u4E5F\u8FDB\u884C\u5220\u9664\u3002
--max-delete<span class="token operator">=</span>NUM \u6700\u591A\u5220\u9664NUM\u4E2A\u6587\u4EF6\u3002
<span class="token parameter variable">--partial</span> \u4FDD\u7559\u90A3\u4E9B\u56E0\u6545\u6CA1\u6709\u5B8C\u5168\u4F20\u8F93\u7684\u6587\u4EF6\uFF0C\u4EE5\u662F\u52A0\u5FEB\u968F\u540E\u7684\u518D\u6B21\u4F20\u8F93\u3002
<span class="token parameter variable">--force</span> \u5F3A\u5236\u5220\u9664\u76EE\u5F55\uFF0C\u5373\u4F7F\u4E0D\u4E3A\u7A7A\u3002
--numeric-ids \u4E0D\u5C06\u6570\u5B57\u7684\u7528\u6237\u548C\u7EC4id\u5339\u914D\u4E3A\u7528\u6237\u540D\u548C\u7EC4\u540D\u3002
<span class="token parameter variable">--timeout</span><span class="token operator">=</span>time ip\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002
-I, --ignore-times \u4E0D\u8DF3\u8FC7\u90A3\u4E9B\u6709\u540C\u6837\u7684\u65F6\u95F4\u548C\u957F\u5EA6\u7684\u6587\u4EF6\u3002
--size-only \u5F53\u51B3\u5B9A\u662F\u5426\u8981\u5907\u4EFD\u6587\u4EF6\u65F6\uFF0C\u4EC5\u4EC5\u5BDF\u770B\u6587\u4EF6\u5927\u5C0F\u800C\u4E0D\u8003\u8651\u6587\u4EF6\u65F6\u95F4\u3002
--modify-window<span class="token operator">=</span>NUM \u51B3\u5B9A\u6587\u4EF6\u662F\u5426\u65F6\u95F4\u76F8\u540C\u65F6\u4F7F\u7528\u7684\u65F6\u95F4\u6233\u7A97\u53E3\uFF0C\u9ED8\u8BA4\u4E3A0\u3002
<span class="token parameter variable">-T</span> --temp-dir<span class="token operator">=</span>DIR \u5728DIR\u4E2D\u521B\u5EFA\u4E34\u65F6\u6587\u4EF6\u3002
--compare-dest<span class="token operator">=</span>DIR \u540C\u6837\u6BD4\u8F83DIR\u4E2D\u7684\u6587\u4EF6\u6765\u51B3\u5B9A\u662F\u5426\u9700\u8981\u5907\u4EFD\u3002
<span class="token parameter variable">-P</span> \u7B49\u540C\u4E8E --partial\u3002
<span class="token parameter variable">--progress</span> \u663E\u793A\u5907\u4EFD\u8FC7\u7A0B\u3002
-z, <span class="token parameter variable">--compress</span> \u5BF9\u5907\u4EFD\u7684\u6587\u4EF6\u5728\u4F20\u8F93\u65F6\u8FDB\u884C\u538B\u7F29\u5904\u7406\u3002
<span class="token parameter variable">--exclude</span><span class="token operator">=</span>PATTERN \u6307\u5B9A\u6392\u9664\u4E0D\u9700\u8981\u4F20\u8F93\u7684\u6587\u4EF6\u6A21\u5F0F\u3002
<span class="token parameter variable">--include</span><span class="token operator">=</span>PATTERN \u6307\u5B9A\u4E0D\u6392\u9664\u800C\u9700\u8981\u4F20\u8F93\u7684\u6587\u4EF6\u6A21\u5F0F\u3002
--exclude-from<span class="token operator">=</span>FILE \u6392\u9664FILE\u4E2D\u6307\u5B9A\u6A21\u5F0F\u7684\u6587\u4EF6\u3002
--include-from<span class="token operator">=</span>FILE \u4E0D\u6392\u9664FILE\u6307\u5B9A\u6A21\u5F0F\u5339\u914D\u7684\u6587\u4EF6\u3002
<span class="token parameter variable">--version</span> \u6253\u5370\u7248\u672C\u4FE1\u606F\u3002
<span class="token parameter variable">--address</span> \u7ED1\u5B9A\u5230\u7279\u5B9A\u7684\u5730\u5740\u3002
<span class="token parameter variable">--config</span><span class="token operator">=</span>FILE \u6307\u5B9A\u5176\u4ED6\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E0D\u4F7F\u7528\u9ED8\u8BA4\u7684rsyncd.conf\u6587\u4EF6\u3002
<span class="token parameter variable">--port</span><span class="token operator">=</span>PORT \u6307\u5B9A\u5176\u4ED6\u7684rsync\u670D\u52A1\u7AEF\u53E3\u3002
--blocking-io \u5BF9\u8FDC\u7A0Bshell\u4F7F\u7528\u963B\u585EIO\u3002
<span class="token parameter variable">-stats</span> \u7ED9\u51FA\u67D0\u4E9B\u6587\u4EF6\u7684\u4F20\u8F93\u72B6\u6001\u3002
<span class="token parameter variable">--progress</span> \u5728\u4F20\u8F93\u65F6\u73B0\u5B9E\u4F20\u8F93\u8FC7\u7A0B\u3002
--log-format<span class="token operator">=</span>formAT \u6307\u5B9A\u65E5\u5FD7\u6587\u4EF6\u683C\u5F0F\u3002
--password-file<span class="token operator">=</span>FILE \u4ECEFILE\u4E2D\u5F97\u5230\u5BC6\u7801\u3002
<span class="token parameter variable">--bwlimit</span><span class="token operator">=</span>KBPS \u9650\u5236I/O\u5E26\u5BBD\uFF0CKBytes per second\u3002
-h, <span class="token parameter variable">--help</span> \u663E\u793A\u5E2E\u52A9\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To copy files from remote to local, maintaining file properties and sym-links (-a), zipping for faster transfer (-z), verbose (-v).  </span>
<span class="token function">rsync</span> <span class="token parameter variable">-avz</span> host:file1 :file1 /dest/
<span class="token function">rsync</span> <span class="token parameter variable">-avz</span> /source host:/dest

<span class="token comment"># Copy files using checksum (-c) rather than time to detect if the file has changed. (Useful for validating backups). </span>
<span class="token function">rsync</span> <span class="token parameter variable">-avc</span> /source/ /dest/

<span class="token comment"># Copy contents of /src/foo to destination:</span>

<span class="token comment"># This command will create /dest/foo if it does not already exist</span>
<span class="token function">rsync</span> <span class="token parameter variable">-auv</span> /src/foo /dest

<span class="token comment"># Explicitly copy /src/foo to /dest/foo</span>
<span class="token function">rsync</span> <span class="token parameter variable">-auv</span> /src/foo/ /dest/foo

<span class="token comment"># Copy file from local to remote over ssh with non standard port 1234 to destination folder in remoteuser&#39;s home directory</span>
<span class="token function">rsync</span> <span class="token parameter variable">-avz</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;ssh -p1234&quot;</span> /source/file1 remoteuser@X.X.X.X:~/destination/


<span class="token comment">##\u4F7F\u7528cp\u5907\u4EFD\u65E5\u5FD7\uFF0C\u6BD4\u8F83\u5360\u7528IO\uFF0C\u53EF\u4EE5\u4F7F\u7528rsync  --bwlimit=10000\u9650\u901F</span>

<span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&#39;+%Y-%m-%d-%H-test1_access.log&#39;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">time1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&#39;+%Y-%m-%d-%H-test2_access.log&#39;</span><span class="token variable">)</span></span>
<span class="token comment">#cp /data/nginx/log/test1_access.log /data/nginx/log/$time</span>
<span class="token comment">#cp /data/nginx/log/test2_access.log /data/nginx/log/$time1</span>
/usr/bin/rsync <span class="token parameter variable">-av</span> <span class="token parameter variable">--bwlimit</span><span class="token operator">=</span><span class="token number">10000</span> /data/nginx/log/test1_access.log /data/nginx/log/<span class="token variable">$time</span>
/usr/bin/rsync <span class="token parameter variable">-av</span> <span class="token parameter variable">--bwlimit</span><span class="token operator">=</span><span class="token number">10000</span>  /data/nginx/log/test2_access.log /data/nginx/log/<span class="token variable">$time1</span>
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /data/nginx/log/test1_access.log
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /data/nginx/log/test2_access.log
<span class="token function">find</span> /data/nginx/log/ <span class="token parameter variable">-ctime</span> +5 <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>

<span class="token comment">##\u526A\u5207\u53C2\u8003\uFF0CIO\u901F\u5EA6\u9650\u5236\u7684cp\u548Cmv(\u9650\u901F1024 KB/s)</span>
<span class="token comment">##cp: rsync --bwlimit=1024 {src} {dest}</span>
<span class="token comment">##mv: rsync --bwlimit=1024 --remove-source-files {src} {dest}</span>


<span class="token comment">##\u4F7F\u7528ssh\u65B9\u5F0Frsync\uFF0C\u4E0D\u7528\u670D\u52A1\u7AEF\uFF0C\u7B80\u5355\u65B9\u4FBF\uFF0CSSH\u9700\u8981\u8BA4\u8BC1\uFF0C\u5C31\u4E0D\u7528\u6BCF\u6B21\u8F93\u5165\u5BC6\u7801</span>
<span class="token comment">#ssh-keygen -t rsa -N &#39;&#39; -f ~/.ssh/id_rsa -q -b 2048 -C &quot;root@test&quot;</span>
<span class="token comment">#cat ~/.ssh/id_rsa.pub &gt;&gt; ~/.ssh/authorized_keys</span>
<span class="token comment">#chmod 600 ~/.ssh/authorized_keys</span>

<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span>.gitlab-ci.yml <span class="token parameter variable">--exclude</span><span class="token operator">=</span>log <span class="token parameter variable">--exclude</span><span class="token operator">=</span>logs <span class="token parameter variable">--delete</span> /root/test <span class="token number">192.168</span>.1.119:/root/test1

<span class="token comment">##rsync \u53C2\u6570\u7684\u5177\u4F53\u53EF\u4EE5\u53C2\u8003\uFF1A</span>
<span class="token comment">##http://bbs.aqzt.com/thread-138-1-1.html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[l];function p(c,r){return s(),a("div",null,t)}const d=n(i,[["render",p],["__file","rsync.html.vue"]]);export{d as default};
