import{_ as i,r as l,o as t,c as p,a as n,b as c,e as a,d as s}from"./app.a667bd71.js";const r={},o=a(`<p>\u6587\u4EF6\u5728\u8BA1\u7B97\u673A\u4E2D\u626E\u6F14\u7740\u81F3\u5173\u91CD\u8981\u7684\u89D2\u8272\u3002\u5728Linux\u7CFB\u7EDF\u4E2D\u53EF\u4EE5\u8BF4\u4E00\u5207\u53CA\u6587\u4EF6\uFF0C\u64CD\u4F5C\u6587\u4EF6\u5C31\u80FD\u64CD\u4F5C\u4E00\u5207\u3002\u5728linux\u4E2D\u6587\u4EF6\u5927\u6982\u5206\u4E3A\u5E38\u89C1\u5982\u4E0B\u51E0\u79CD</p><ul><li>block \u5757\u8BBE\u5907\u6587\u4EF6\uFF0C\u5982\u78C1\u76D8\u5206\u533A\u3001\u5149\u9A71</li><li>char \u5B57\u7B26\u8BBE\u5907\uFF0C\u6307\u5728I/O\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u4EE5\u5B57\u7B26\u4E3A\u5355\u4F4D\u8FDB\u884C\u4F20\u8F93\u7684\u8BBE\u5907\uFF0C\u5982\u952E\u76D8\u3001\u6253\u5370\u673A</li><li>dir \u76EE\u5F55\u7C7B\u578B</li><li>fifo \u547D\u540D\u7BA1\u9053</li><li>file \u666E\u901A\u6587\u4EF6\u7C7B\u578B\uFF0C\u5982\u6587\u672C\u6587\u4EF6\u6216\u53EF\u6267\u884C\u6587\u4EF6\u7B49</li><li>link \u7B26\u53F7\u94FE\u63A5</li><li>unknown \u672A\u77E5\u7C7B\u578B</li></ul><p>\u64CD\u4F5Clinux\u5C31\u662F\u5229\u7528\u5404\u79CD\u5DE5\u5177(\u53EF\u6267\u884C\u6587\u4EF6)\u53BB\u64CD\u4F5C\u5176\u4ED6\u6587\u4EF6\u7684\u8FC7\u7A0B\u3002\u5728linux\u4E2D\u63D0\u4F9B\u4E86\u5F88\u591A\u6587\u4EF6\u64CD\u4F5C\u76F8\u5173\u7684\u547D\u4EE4\uFF0C\u6B64\u6B21\u5217\u4E3E\u5E38\u7528\u7684\u4E00\u4E9B\u547D\u4EE4\u53CA\u5176\u5E38\u7528\u7684\u683C\u5F0F\u3002\u53E6\u5916\u6587\u4EF6\u662F\u5177\u6709\u6743\u9650\u5C5E\u6027\u7684\u3002\u4E0B\u9762\u662F\u6240\u6709\u7684\u6587\u4EF6\u7EC4\u5408</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u82E5\u8981 rwx \u5219 <span class="token number">4</span>+2+1<span class="token operator">=</span><span class="token number">7</span> 
\u82E5\u8981 rw- \u5219 <span class="token number">4</span>+2+0<span class="token operator">=</span><span class="token number">6</span> 
\u82E5\u8981 r-w \u5219 <span class="token number">4</span>+0+1<span class="token operator">=</span><span class="token number">5</span> 
\u82E5\u8981 r\u2014 \u5219 <span class="token number">4</span>+0+0<span class="token operator">=</span><span class="token number">4</span> 
\u82E5\u8981 <span class="token parameter variable">-wx</span> \u5219 <span class="token number">0</span>+2+1<span class="token operator">=</span><span class="token number">3</span> 
\u82E5\u8981 -w- \u5219 <span class="token number">0</span>+2+0<span class="token operator">=</span><span class="token number">2</span> 
\u82E5\u8981 - <span class="token parameter variable">-x</span> \u5219 <span class="token number">0</span>+0+1<span class="token operator">=</span><span class="token number">1</span> 
\u82E5\u8981 - - - \u5219 <span class="token number">0</span>+0+0<span class="token operator">=</span><span class="token number">0</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>touch file # \u521B\u5EFA\u7A7A\u767D\u6587\u4EF6 rm -rf \u76EE\u5F55\u540D # \u4E0D\u63D0\u793A\u5220\u9664\u975E\u7A7A\u76EE\u5F55(-r:\u9012\u5F52\u5220\u9664 -f\u5F3A\u5236) dos2unix # windows\u6587\u672C\u8F6Clinux\u6587\u672C<br> unix2dos # linux\u6587\u672C\u8F6Cwindows\u6587\u672C enca filename # \u67E5\u770B\u7F16\u7801 \u5B89\u88C5 yum install -y enca md5sum # \u67E5\u770Bmd5\u503C ln \u6E90\u6587\u4EF6 \u76EE\u6807\u6587\u4EF6 # \u786C\u94FE\u63A5 ln -s \u6E90\u6587\u4EF6 \u76EE\u6807\u6587\u4EF6 # \u7B26\u53F7\u8FDE\u63A5 readlink -f /data # \u67E5\u770B\u8FDE\u63A5\u771F\u5B9E\u76EE\u5F55 cat file | nl |less # \u67E5\u770B\u4E0A\u4E0B\u7FFB\u9875\u4E14\u663E\u793A\u884C\u53F7 q\u9000\u51FA head # \u67E5\u770B\u6587\u4EF6\u5F00\u5934\u5185\u5BB9 head -c 10m # \u622A\u53D6\u6587\u4EF6\u4E2D10M\u5185\u5BB9 split -C 10M # \u5C06\u6587\u4EF6\u5207\u5272\u5927\u5C0F\u4E3A10M tail -f file # \u67E5\u770B\u7ED3\u5C3E \u76D1\u89C6\u65E5\u5FD7\u6587\u4EF6 file # \u68C0\u67E5\u6587\u4EF6\u7C7B\u578B umask # \u66F4\u6539\u9ED8\u8BA4\u6743\u9650 uniq # \u5220\u9664\u91CD\u590D\u7684\u884C uniq -c # \u91CD\u590D\u7684\u884C\u51FA\u73B0\u6B21\u6570 uniq -u # \u53EA\u663E\u793A\u4E0D\u91CD\u590D\u884C paste a b # \u5C06\u4E24\u4E2A\u6587\u4EF6\u5408\u5E76\u7528tab\u952E\u5206\u9694\u5F00 paste -d&#39;+&#39; a b # \u5C06\u4E24\u4E2A\u6587\u4EF6\u5408\u5E76\u6307\u5B9A&#39;+&#39;\u7B26\u53F7\u9694\u5F00 paste -s a # \u5C06\u591A\u884C\u6570\u636E\u5408\u5E76\u5230\u4E00\u884C\u7528tab\u952E\u9694\u5F00 chattr +i /etc/passwd # \u8BBE\u7F6E\u4E0D\u53EF\u6539\u53D8\u4F4D more # \u5411\u4E0B\u5206\u9762\u5668 locate \u5B57\u7B26\u4E32 # \u641C\u7D22 wc -l file # \u67E5\u770B\u884C\u6570 cp filename{,.bak} # \u5FEB\u901F\u5907\u4EFD\u4E00\u4E2A\u6587\u4EF6 \\cp a b # \u62F7\u8D1D\u4E0D\u63D0\u793A \u65E2\u4E0D\u4F7F\u7528\u522B\u540D cp -i rev # \u5C06\u884C\u4E2D\u7684\u5B57\u7B26\u9006\u5E8F\u6392\u5217 comm -12 2 3 # \u884C\u548C\u884C\u6BD4\u8F83\u5339\u914D iconv -f gbk -t utf8 \u539F.txt &gt; \u65B0.txt # \u8F6C\u6362\u7F16\u7801 rename \u539F\u6A21\u5F0F \u76EE\u6807\u6A21\u5F0F \u6587\u4EF6 # \u91CD\u547D\u540D \u53EF\u6B63\u5219 watch -d -n 1 &#39;df; ls -FlAt /path&#39; # \u5B9E\u65F6\u67D0\u4E2A\u76EE\u5F55\u4E0B\u67E5\u770B\u6700\u65B0\u6539\u52A8\u8FC7\u7684\u6587\u4EF6 cp -v /dev/dvd /rhel4.6.iso9660 # \u5236\u4F5C\u955C\u50CF diff suzu.c suzu2.c &gt; sz.patch # \u5236\u4F5C\u8865\u4E01 patch suzu.c &lt; sz.patch # \u5B89\u88C5\u8865\u4E01</p><h2 id="\u6587\u4EF6acl\u6743\u9650\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6acl\u6743\u9650\u63A7\u5236" aria-hidden="true">#</a> \u6587\u4EF6ACL\u6743\u9650\u63A7\u5236</h2><pre><code>	getfacl 1.test                      # \u67E5\u770B\u6587\u4EF6ACL\u6743\u9650
	setfacl -R -m u:xuesong:rw- 1.test  # \u5BF9\u6587\u4EF6\u589E\u52A0\u7528\u6237\u7684\u8BFB\u5199\u6743\u9650 -R \u9012\u5F52
</code></pre><h2 id="svn\u66F4\u65B0\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#svn\u66F4\u65B0\u4EE3\u7801" aria-hidden="true">#</a> svn\u66F4\u65B0\u4EE3\u7801</h2><pre><code>	--force # \u5F3A\u5236\u8986\u76D6
	/usr/bin/svn --username user --password passwd co  $Code  \${SvnPath}src/                 # \u68C0\u51FA\u6574\u4E2A\u9879\u76EE
	/usr/bin/svn --username user --password passwd export  $Code$File \${SvnPath}src/$File    # \u5BFC\u51FA\u4E2A\u522B\u6587\u4EF6
</code></pre><h2 id="\u6062\u590Drm\u5220\u9664\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6062\u590Drm\u5220\u9664\u7684\u6587\u4EF6" aria-hidden="true">#</a> \u6062\u590Drm\u5220\u9664\u7684\u6587\u4EF6</h2><pre><code>	# debugfs\u9488\u5BF9 ext2   # ext3grep\u9488\u5BF9 ext3   # extundelete\u9488\u5BF9 ext4
	df -T   # \u9996\u5148\u67E5\u770B\u78C1\u76D8\u5206\u533A\u683C\u5F0F
	umount /data/     # \u5378\u8F7D\u6302\u8F7D,\u6570\u636E\u4E22\u5931\u8BF7\u9996\u5148\u5378\u8F7D\u6302\u8F7D,\u6216\u91CD\u65B0\u6302\u8F7D\u53EA\u8BFB
	ext3grep /dev/sdb1 --ls --inode 2         # \u8BB0\u5F55\u4FE1\u606F\u7EE7\u7EED\u67E5\u627E\u76EE\u5F55\u4E0B\u6587\u4EF6inode\u4FE1\u606F
	ext3grep /dev/sdb1 --ls --inode 131081    # \u6B64\u5904\u662Finode
	ext3grep /dev/sdb1 --restore-inode 49153  # \u8BB0\u5F55\u4E0Binode\u4FE1\u606F\u5F00\u59CB\u6062\u590D\u76EE\u5F55
</code></pre><h4 id="ls-mv-cp-rm-touch-pwd-mkdir-rmdir-cd" tabindex="-1"><a class="header-anchor" href="#ls-mv-cp-rm-touch-pwd-mkdir-rmdir-cd" aria-hidden="true">#</a> ls\\mv\\cp\\rm\\touch\\pwd\\mkdir\\rmdir\\cd</h4><p>\u5E38\u7528\u7684\u6587\u4EF6\u64CD\u4F5C\u6587\u4EF6\u76EE\u5F55\u67E5\u770B\u3001\u6587\u4EF6\u7684\u590D\u5236\u3001\u79FB\u52A8\u3001\u65B0\u5EFA\u3001\u5220\u9664\u548C\u76EE\u5F55\u5207\u6362</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">### ls \u4EA7\u68C0\u6587\u4EF6\u548C\u76EE\u5F55\u4FE1\u606F</span>
usage: 
	<span class="token function">ls</span> <span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span> <span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
\u9009\u9879\uFF1A
  <span class="token parameter variable">-a</span>  \u5217\u51FA\u5305\u62EC.a\u5F00\u5934\u7684\u9690\u85CF\u6587\u4EF6\u7684\u6240\u6709\u6587\u4EF6
  <span class="token parameter variable">-A</span>  \u901A-a\uFF0C\u4F46\u4E0D\u5217\u51FA<span class="token string">&quot;.&quot;</span>\u548C<span class="token string">&quot;..&quot;</span>
  <span class="token parameter variable">-l</span>  \u5217\u51FA\u6587\u4EF6\u7684\u8BE6\u7EC6\u4FE1\u606F
  <span class="token parameter variable">-c</span>  \u6839\u636Ectime\u6392\u5E8F\u663E\u793A
  <span class="token parameter variable">-t</span>  \u6839\u636E\u6587\u4EF6\u4FEE\u6539\u65F6\u95F4\u6392\u5E8F
\u5E38\u7528\u5B9E\u4F8B:
	//\u663E\u793A\u5F53\u524D\u76EE\u5F55\u4E0B\u975E\u9690\u85CF\u7684\u6587\u4EF6\u4E0E\u76EE\u5F55
	<span class="token comment"># ls</span>
	//\u663E\u793A\u5F53\u524D\u76EE\u5F55\u4E0B\u6240\u6709\u6587\u4EF6\u548C\u76EE\u5F55
	<span class="token comment"># ls -a</span>
	//\u957F\u683C\u5F0F\u8F93\u51FA
	<span class="token comment"># ls -l</span>
	// \u663E\u793A\u6587\u4EF6\u7684inode\u4FE1\u606F
	<span class="token comment"># ls -i</span>
	// \u6309\u7167\u6587\u4EF6\u4FEE\u6539\u65F6\u95F4\u663E\u793A
	<span class="token comment"># ls -t</span>
	// \u9012\u5F52\u663E\u793A
	<span class="token comment"># ls -R</span>
	
<span class="token comment">### mv \u6587\u4EF6\u79FB\u52A8\u548C\u91CD\u547D\u540D</span>
usage:
	<span class="token function">mv</span> <span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span> <span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
\u53C2\u6570\uFF1A
  <span class="token parameter variable">-b</span>  \u8986\u76D6\u524D\u505A\u5907\u4EFD
  <span class="token parameter variable">-f</span>  \u5982\u5B58\u5728\u4E0D\u8BE2\u95EE\u800C\u5F3A\u5236\u8986\u76D6
  <span class="token parameter variable">-i</span>  \u5982\u5B58\u5728\u5219\u8BE2\u95EE\u662F\u5426\u8986\u76D6
  <span class="token parameter variable">-u</span>  \u8F83\u65B0\u624D\u8986\u76D6
  <span class="token parameter variable">-t</span>  \u5C06\u591A\u4E2A\u6E90\u6587\u4EF6\u79FB\u52A8\u5230\u7EDF\u4E00\u76EE\u5F55\u4E0B\uFF0C\u76EE\u5F55\u53C2\u6570\u5728\u524D\uFF0C\u6587\u4EF6\u53C2\u6570\u5728\u540E
\u5B9E\u4F8B\uFF1A
    <span class="token function">mv</span> a /tmp/ \u5C06\u6587\u4EF6a\u79FB\u52A8\u5230 /tmp\u76EE\u5F55\u4E0B
    <span class="token function">mv</span> a b \u5C06a\u547D\u540D\u4E3Ab
    
<span class="token comment">### cp \u7528\u4E8E\u6587\u4EF6\u590D\u5236</span>
usgae:
	<span class="token function">cp</span> <span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span> <span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
\u9009\u9879:
  <span class="token parameter variable">-r</span> <span class="token parameter variable">-R</span> \u9012\u5F52\u590D\u5236\u8BE5\u76EE\u5F55\u53CA\u5176\u5B50\u76EE\u5F55\u5185\u5BB9
  <span class="token parameter variable">-p</span>  \u8FDE\u540C\u6863\u6848\u5C5E\u6027\u4E00\u8D77\u590D\u5236\u8FC7\u53BB
  <span class="token parameter variable">-f</span>  \u4E0D\u8BE2\u95EE\u800C\u5F3A\u5236\u590D\u5236
  <span class="token parameter variable">-s</span>  \u751F\u6210\u5FEB\u6377\u65B9\u5F0F
  <span class="token parameter variable">-a</span>  \u5C06\u6863\u6848\u7684\u6240\u6709\u7279\u6027\u90FD\u4E00\u8D77\u590D\u5236
\u5B9E\u4F8B:
	//\u590D\u5236aaa\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u5230bbb\u76EE\u5F55\u4E0B
	<span class="token comment"># cp aaa/* bbb/</span>

<span class="token comment">### scp \u8BE5\u547D\u4EE4\u53EF\u4EE5\u5B9E\u73B0\u5938\u670D\u52A1\u4E4B\u95F4\u7684\u6587\u4EF6\u590D\u5236</span>
usage:
	<span class="token function">scp</span> <span class="token punctuation">[</span>\u53C2\u6570<span class="token punctuation">]</span> source_file target_file
\u53C2\u6570\uFF1A
  -1\uFF1A\u4F7F\u7528ssh\u534F\u8BAE\u7248\u672C1\uFF1B
  -2\uFF1A\u4F7F\u7528ssh\u534F\u8BAE\u7248\u672C2\uFF1B
  -4\uFF1A\u4F7F\u7528ipv4\uFF1B
  -6\uFF1A\u4F7F\u7528ipv6\uFF1B
  -B\uFF1A\u4EE5\u6279\u5904\u7406\u6A21\u5F0F\u8FD0\u884C\uFF1B
  -C\uFF1A\u4F7F\u7528\u538B\u7F29\uFF1B
  -F\uFF1A\u6307\u5B9Assh\u914D\u7F6E\u6587\u4EF6\uFF1B
  -l\uFF1A\u6307\u5B9A\u5BBD\u5E26\u9650\u5236\uFF1B
  -o\uFF1A\u6307\u5B9A\u4F7F\u7528\u7684ssh\u9009\u9879\uFF1B
  -P\uFF1A\u6307\u5B9A\u8FDC\u7A0B\u4E3B\u673A\u7684\u7AEF\u53E3\u53F7\uFF1B
  -p\uFF1A\u4FDD\u7559\u6587\u4EF6\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\uFF0C\u6700\u540E\u8BBF\u95EE\u65F6\u95F4\u548C\u6743\u9650\u6A21\u5F0F\uFF1B
  -q\uFF1A\u4E0D\u663E\u793A\u590D\u5236\u8FDB\u5EA6\uFF1B
  -r\uFF1A\u4EE5\u9012\u5F52\u65B9\u5F0F\u590D\u5236\u3002
\u5B9E\u4F8B\uFF1A
	scp\u5E38\u7528\u7684\u547D\u4EE4\u683C\u5F0F
    <span class="token comment"># scp local_file remote_username@remote_ip:remote_folder  </span>
    <span class="token comment"># scp local_file remote_username@remote_ip:remote_file   </span>
    <span class="token comment"># scp local_file remote_ip:remote_folder  </span>
    <span class="token comment"># scp local_file remote_ip:remote_file </span>
    //\u4ECE\u8FDC\u5904\u590D\u5236\u6587\u4EF6\u5230\u672C\u5730\u76EE\u5F55
	<span class="token comment"># scp root@10.10.10.10:/opt/soft/nginx-0.5.38.tar.gz /opt/soft/</span>
	//\u4E0A\u4F20\u672C\u5730\u6587\u4EF6\u5230\u8FDC\u7A0B\u4E3B\u673A\u6307\u5B9A\u76EE\u5F55
	<span class="token comment"># scp /opt/soft/nginx-0.5.38.tar.gz root@10.10.10.10:/opt/soft/scptest</span>
	// \u4E0A\u4F20\u76EE\u5F55
	<span class="token comment"># scp -r /opt/soft/mongodb root@10.10.10.10:/opt/soft/scptest</span>
	
<span class="token comment">### rm \u5220\u9664\u6587\u4EF6</span>
usage:
	<span class="token function">rm</span> <span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span> <span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
\u9009\u9879\uFF1A
  <span class="token parameter variable">-r</span>  \u5220\u9664\u6587\u4EF6\u5939
  <span class="token parameter variable">-f</span>  \u5220\u9664\u4E0D\u63D0\u793A
  <span class="token parameter variable">-i</span>  \u5220\u9664\u63D0\u793A
  <span class="token parameter variable">-v</span>  \u8BE6\u7EC6\u663E\u793A\u8FDB\u884C\u6B65\u9AA4
 
<span class="token comment">### touch \u521B\u5EFA\u7A7A\u6587\u4EF6\u6216\u66F4\u65B0\u6587\u4EF6\u65F6\u95F4</span>
usgae:
	<span class="token function">touch</span> <span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span> \u6587\u4EF6
\u53C2\u6570\uFF1A
  <span class="token parameter variable">-a</span>  \u53EA\u4FEE\u6539\u5B58\u53D6\u65F6\u95F4
  <span class="token parameter variable">-m</span>  \u503C\u4FEE\u6539\u53D8\u52A8\u65F6\u95F4
  <span class="token parameter variable">-r</span>  eg:touch <span class="token parameter variable">-r</span> a b ,\u4F7Fb\u7684\u65F6\u95F4\u548Ca\u76F8\u540C
  <span class="token parameter variable">-t</span>  \u6307\u5B9A\u7279\u5B9A\u7684\u65F6\u95F4 eg:touch <span class="token parameter variable">-t</span> <span class="token number">201211142234.50</span> log.log 
      <span class="token parameter variable">-t</span> <span class="token function">time</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>CC<span class="token punctuation">]</span>YY<span class="token punctuation">]</span>MMDDhhmm<span class="token punctuation">[</span>.SS<span class="token punctuation">]</span>,C:\u5E74\u524D\u4E24\u4F4D
<span class="token comment">### pwd \u67E5\u770B\u5F53\u524D\u6240\u5728\u7684\u8DEF\u5F84</span>
<span class="token comment">### cd \u5207\u6362\u76EE\u5F55</span>
  - \uFF1A\u8FD4\u56DE\u4E0A\u5C42\u76EE\u5F55
  <span class="token punctuation">..</span> :\u8FD4\u56DE\u4E0A\u5C42\u76EE\u5F55
  \u56DE\u8F66  \uFF1A\u8FD4\u56DE\u4E3B\u76EE\u5F55
  /   :\u6839\u76EE\u5F55
  
<span class="token comment">### mkdir \u521B\u5EFA\u65B0\u76EE\u5F55</span>
usage:
	<span class="token function">mkdir</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> \u76EE\u5F55
\u9009\u9879\uFF1A
  <span class="token parameter variable">-p</span>  \u9012\u5F52\u521B\u5EFA\u76EE\u5F55\uFF0C\u82E5\u7236\u76EE\u5F55\u4E0D\u5B58\u5728\u5219\u4F9D\u6B21\u521B\u5EFA
  <span class="token parameter variable">-m</span>  \u81EA\u5B9A\u4E49\u521B\u5EFA\u76EE\u5F55\u7684\u6743\u9650  eg:mkdir <span class="token parameter variable">-m</span> <span class="token number">777</span> hehe
  <span class="token parameter variable">-v</span>  \u663E\u793A\u521B\u5EFA\u76EE\u5F55\u7684\u8BE6\u7EC6\u4FE1\u606F

<span class="token comment">### rmdir \u5220\u9664\u7A7A\u76EE\u5F55</span>
usgae:
	<span class="token function">rmdir</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> \u76EE\u5F55
\u9009\u9879:
  <span class="token parameter variable">-v</span>  \u663E\u793A\u6267\u884C\u8FC7\u7A0B
  <span class="token parameter variable">-p</span>  \u82E5\u81EA\u7236\u6BCD\u5220\u9664\u540E\u7236\u76EE\u5F55\u4E3A\u7A7A\u5219\u4E00\u5E76\u5220\u9664

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####echo\\cat\\tac\\more\\less\\nl\\head\\tail\\wc\\sort\\uniq</p><p>\u8FD9\u4E9B\u547D\u4EE4\u662F\u7528\u6765\u67E5\u770B\u73AF\u5883\u53D8\u91CF\u3001\u6587\u4EF6\u5185\u5BB9\u548C\u7F16\u8F91\u6587\u4EF6\u5185\u5BB9\u7684\u547D\u4EE4\uFF0C\u4F1A\u7ECF\u5E38\u7684\u7528\u5230\u7684\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">### echo \u7528\u4E8E\u5728shell\u4E2D\u67E5\u770Bshell\u53D8\u91CF\u7684\u503C</span>
usage:
	<span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u53C2\u6570<span class="token punctuation">]</span>
\u9009\u9879\uFF1A
  <span class="token parameter variable">-n</span>  \u8F93\u51FA\u540E\u4E0D\u6362\u884C
  <span class="token parameter variable">-e</span>  \u9047\u5230\u8F6C\u4E49\u5B57\u7B26\u7279\u6B8A\u5904\u7406  
  
<span class="token comment">### cat \u67E5\u770B\u6587\u4EF6\u6216\u5408\u5E76\u6587\u4EF6   tac \u53CD\u5411\u663E\u793A</span>
usage:
	<span class="token function">cat</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u53C2\u6570<span class="token punctuation">]</span>
\u9009\u9879\uFF1A
  -n\u6216-number\uFF1A\u67091\u5F00\u59CB\u5BF9\u6240\u6709\u8F93\u51FA\u7684\u884C\u6570\u7F16\u53F7\uFF1B
  -b\u6216--number-nonblank\uFF1A\u548C-n\u76F8\u4F3C\uFF0C\u53EA\u4E0D\u8FC7\u5BF9\u4E8E\u7A7A\u767D\u884C\u4E0D\u7F16\u53F7\uFF1B
  -s\u6216--squeeze-blank\uFF1A\u5F53\u9047\u5230\u6709\u8FDE\u7EED\u4E24\u884C\u4EE5\u4E0A\u7684\u7A7A\u767D\u884C\uFF0C\u5C31\u4EE3\u6362\u4E3A\u4E00\u884C\u7684\u7A7A\u767D\u884C\uFF1B
  -A\uFF1A\u663E\u793A\u4E0D\u53EF\u6253\u5370\u5B57\u7B26\uFF0C\u884C\u5C3E\u663E\u793A\u201C$\u201D\uFF1B
  -e\uFF1A\u7B49\u4EF7\u4E8E<span class="token string">&quot;-vE&quot;</span>\u9009\u9879\uFF1B
  -t\uFF1A\u7B49\u4EF7\u4E8E<span class="token string">&quot;-vT&quot;</span>\u9009\u9879\uFF1B
\u5B9E\u4F8B\uFF1A
  <span class="token comment"># cat m1 \uFF08\u5728\u5C4F\u5E55\u4E0A\u663E\u793A\u6587\u4EF6ml\u7684\u5185\u5BB9\uFF09</span>
  <span class="token comment"># cat m1 m2 \uFF08\u540C\u65F6\u663E\u793A\u6587\u4EF6ml\u548Cm2\u7684\u5185\u5BB9\uFF09</span>
  <span class="token comment"># cat m1 m2 &gt; file \uFF08\u5C06\u6587\u4EF6ml\u548Cm2\u5408\u5E76\u540E\u653E\u5165\u6587\u4EF6file\u4E2D\uFF09</span>
  
<span class="token comment">### more \u6309\u9875\u67E5\u770B\u6587\u7AE0\u5185\u5BB9\uFF0C\u4ECE\u524D\u5411\u540E\u8BFB\u53D6\u6587\u4EF6</span>
usage:
	<span class="token function">more</span> <span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span> <span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
\u5FEB\u6377\u952E\uFF1A
	space \u663E\u793A\u6587\u672C\u7684\u4E0B\u4E00\u5C4F\u5185\u5BB9
	enter \u663E\u793A\u6587\u672C\u7684\u4E0B\u4E00\u884C\u5185\u5BB9
	<span class="token operator">|</span> \u53EF\u4EE5\u5728\u6587\u672C\u4E2D\u5BFB\u627E\u4E0B\u4E00\u4E2A\u5339\u914D\u7684\u6A21\u5F0F
	H \u663E\u793A\u5E2E\u52A9
	B \u663E\u793A\u4E0A\u4E00\u5C4F
	Q \u9000\u51FA
\u9009\u9879\uFF1A
  -<span class="token operator">&lt;</span>\u6570\u5B57<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u6BCF\u5C4F\u663E\u793A\u7684\u884C\u6570\uFF1B
  -d\uFF1A\u663E\u793A\u201C<span class="token punctuation">[</span>press space to continue,<span class="token string">&#39;q&#39;</span> to quit.<span class="token punctuation">]</span>\u201D\u548C\u201C<span class="token punctuation">[</span>Press <span class="token string">&#39;h&#39;</span> <span class="token keyword">for</span> instructions<span class="token punctuation">]</span>\u201D\uFF1B
  -c\uFF1A\u4E0D\u8FDB\u884C\u6EDA\u5C4F\u64CD\u4F5C\u3002\u6BCF\u6B21\u5237\u65B0\u8FD9\u4E2A\u5C4F\u5E55\uFF1B
  -s\uFF1A\u5C06\u591A\u4E2A\u7A7A\u884C\u538B\u7F29\u6210\u4E00\u884C\u663E\u793A\uFF1B
  -u\uFF1A\u7981\u6B62\u4E0B\u5212\u7EBF\uFF1B
  +<span class="token operator">&lt;</span>\u6570\u5B57<span class="token operator">&gt;</span>\uFF1A\u4ECE\u6307\u5B9A\u6570\u5B57\u7684\u884C\u5F00\u59CB\u663E\u793A\u3002
\u5B9E\u4F8B\uFF1A
	// \u663E\u793A\u6587\u4EF6file\u7684\u5185\u5BB9\uFF0C\u4F46\u5728\u663E\u793A\u4E4B\u524D\u5148\u6E05\u5C4F
	<span class="token comment"># more -dc file</span>
	// \u663E\u793A\u6587\u4EF6file\u7684\u5185\u5BB9\uFF0C\u6BCF10\u884C\u663E\u793A\u4E00\u6B21
	<span class="token comment"># more -c -10 file</span>

<span class="token comment">### less \u5141\u8BB8\u7528\u6237\u5411\u524D\u6216\u5411\u540E\u6D4F\u89C8\u6587\u4EF6</span>
usage:
	<span class="token function">less</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> \u53C2\u6570
\u9009\u9879\uFF1A
  -e\uFF1A\u6587\u4EF6\u5185\u5BB9\u663E\u793A\u5B8C\u6BD5\u540E\uFF0C\u81EA\u52A8\u9000\u51FA\uFF1B
  -f\uFF1A\u5F3A\u5236\u663E\u793A\u6587\u4EF6\uFF1B
  -g\uFF1A\u4E0D\u52A0\u4EAE\u663E\u793A\u641C\u7D22\u5230\u7684\u6240\u6709\u5173\u952E\u8BCD\uFF0C\u4EC5\u663E\u793A\u5F53\u524D\u663E\u793A\u7684\u5173\u952E\u5B57\uFF0C\u4EE5\u63D0\u9AD8\u663E\u793A\u901F\u5EA6\uFF1B
  -l\uFF1A\u641C\u7D22\u65F6\u5FFD\u7565\u5927\u5C0F\u5199\u7684\u5DEE\u5F02\uFF1B
  -N\uFF1A\u6BCF\u4E00\u884C\u884C\u9996\u663E\u793A\u884C\u53F7\uFF1B
  -s\uFF1A\u5C06\u8FDE\u7EED\u591A\u4E2A\u7A7A\u884C\u538B\u7F29\u6210\u4E00\u884C\u663E\u793A\uFF1B
  -S\uFF1A\u5728\u5355\u884C\u663E\u793A\u8F83\u957F\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u6362\u884C\u663E\u793A\uFF1B
  -x<span class="token operator">&lt;</span>\u6570\u5B57<span class="token operator">&gt;</span>\uFF1A\u5C06TAB\u5B57\u7B26\u663E\u793A\u4E3A\u6307\u5B9A\u4E2A\u6570\u7684\u7A7A\u683C\u5B57\u7B26\u3002
<span class="token comment">### head \u4ECE\u5934\u5F00\u59CB\u663E\u793A\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u663E\u793A\u5F00\u593410\u884C</span>
usage:
	<span class="token function">head</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u53C2\u6570<span class="token punctuation">]</span>
\u9009\u9879:
  -n<span class="token operator">&lt;</span>\u6570\u5B57<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u663E\u793A\u5934\u90E8\u5185\u5BB9\u7684\u884C\u6570\uFF1B
  -c<span class="token operator">&lt;</span>\u5B57\u7B26\u6570<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u663E\u793A\u5934\u90E8\u5185\u5BB9\u7684\u5B57\u7B26\u6570\uFF1B
  -v\uFF1A\u603B\u662F\u663E\u793A\u6587\u4EF6\u540D\u7684\u5934\u4FE1\u606F\uFF1B
  -q\uFF1A\u4E0D\u663E\u793A\u6587\u4EF6\u540D\u7684\u5934\u4FE1\u606F\u3002

<span class="token comment">### nl \u8BA1\u7B97\u8F93\u5165\u4E2D\u7684\u884C\u53F7</span>
usage:
	<span class="token function">nl</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> \u53C2\u6570
\u9009\u9879\uFF1A
  <span class="token parameter variable">-b</span> \uFF1A\u6307\u5B9A\u884C\u53F7\u6307\u5B9A\u7684\u65B9\u5F0F\uFF0C\u4E3B\u8981\u6709\u4E24\u79CD\uFF1A
      <span class="token parameter variable">-b</span> a \uFF1A\u8868\u793A\u4E0D\u8BBA\u662F\u5426\u4E3A\u7A7A\u884C\uFF0C\u4E5F\u540C\u6837\u5217\u51FA\u884C\u53F7<span class="token punctuation">(</span>\u7C7B\u4F3C <span class="token function">cat</span> -n<span class="token punctuation">)</span>\uFF1B
      <span class="token parameter variable">-b</span> t \uFF1A\u5982\u679C\u6709\u7A7A\u884C\uFF0C\u7A7A\u7684\u90A3\u4E00\u884C\u4E0D\u8981\u5217\u51FA\u884C\u53F7<span class="token punctuation">(</span>\u9ED8\u8BA4\u503C<span class="token punctuation">)</span>\uFF1B

  <span class="token parameter variable">-n</span> \uFF1A\u5217\u51FA\u884C\u53F7\u8868\u793A\u7684\u65B9\u6CD5\uFF0C\u4E3B\u8981\u6709\u4E09\u79CD\uFF1A
      <span class="token parameter variable">-n</span> <span class="token function">ln</span> \uFF1A\u884C\u53F7\u5728\u8424\u5E55\u7684\u6700\u5DE6\u65B9\u663E\u793A\uFF1B
      <span class="token parameter variable">-n</span> rn \uFF1A\u884C\u53F7\u5728\u81EA\u5DF1\u680F\u4F4D\u7684\u6700\u53F3\u65B9\u663E\u793A\uFF0C\u4E14\u4E0D\u52A0 <span class="token number">0</span> \uFF1B
      <span class="token parameter variable">-n</span> rz \uFF1A\u884C\u53F7\u5728\u81EA\u5DF1\u680F\u4F4D\u7684\u6700\u53F3\u65B9\u663E\u793A\uFF0C\u4E14\u52A0 <span class="token number">0</span> \uFF1B

  <span class="token parameter variable">-w</span> \uFF1A\u884C\u53F7\u680F\u4F4D\u7684\u5360\u7528\u7684\u4F4D\u6570\u3002
  <span class="token parameter variable">-p</span> \uFF1A\u5728\u903B\u8F91\u5B9A\u754C\u7B26\u5904\u4E0D\u91CD\u65B0\u5F00\u59CB\u8BA1\u7B97\u3002
\u5B9E\u4F8B\uFF1A
	// \u663E\u793A\u884C\u53F7 <span class="token punctuation">(</span>\u7A7A\u767D\u884C\u4E0D\u4F1A\u663E\u793A<span class="token punctuation">)</span>
	<span class="token comment"># nl xx.log</span>
	// \u663E\u793A\u884C\u53F7<span class="token punctuation">(</span>\u7A7A\u767D\u884C\u4E1A\u4F1A\u663E\u793A<span class="token punctuation">)</span>
	<span class="token comment"># nl -b a xx.log</span>
	// \u8BA9\u884C\u53F7\u524D\u9762\u81EA\u52A8\u8865\u4E0A0,\u7EDF\u4E00\u8F93\u51FA\u683C\u5F0F
	<span class="token comment"># nl -b a -n rz xx.log</span>
	
<span class="token comment">### tail \u7528\u4E8E\u8F93\u5165\u6587\u4EF6\u4E2D\u7684\u5C3E\u90E8\u5185\u5BB9</span>
usage\uFF1A
	<span class="token function">tail</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> \u53C2\u6570
\u9009\u9879:
  <span class="token parameter variable">-v</span>  \u663E\u793A\u8BE6\u7EC6\u7684\u5904\u7406\u4FE1\u606F
  <span class="token parameter variable">-q</span>  \u4E0D\u663E\u793A\u5904\u7406\u4FE1\u606F
  -num/-n <span class="token punctuation">(</span>-<span class="token punctuation">)</span>num      \u663E\u793A\u6700\u540Enum\u884C\u5185\u5BB9
  <span class="token parameter variable">-n</span> +num \u4ECE\u7B2Cnum\u884C\u5F00\u59CB\u663E\u793A\u540E\u9762\u7684\u6570\u636E
  <span class="token parameter variable">-c</span>  \u663E\u793A\u6700\u540Ec\u4E2A\u5B57\u7B26
  <span class="token parameter variable">-f</span>  \u5FAA\u73AF\u8BFB\u53D6
\u5B9E\u4F8B\uFF1A
	//\u663E\u793A\u6587\u4EF6\u7684\u6700\u540E10\u884C
	<span class="token comment"># tail file</span>
	// \u663E\u793A\u6587\u4EF6file\u7684\u5185\u5BB9\uFF0C\u4ECE\u7B2C20\u884C\u5230\u6587\u4EF6\u672B\u5C3E
	<span class="token comment"># tail +20 file</span>
	// \u663E\u793A\u6587\u4EF6file\u7684\u6700\u540E10\u4E2A\u5B57\u7B26\u4E32
	<span class="token comment"># tail -c 10 file </span>

\u5E38\u7528\u7EC4\u5408\u547D\u4EE4:
//\u4ECE\u7B2C3000\u884C\u5F00\u59CB\uFF0C\u663E\u793A1000\u884C\u3002\u5373\u663E\u793A3000~3999\u884C
<span class="token comment"># cat file | tail -n +3000 | head -n 1000</span>
//\u663E\u793A1000\u884C\u52303000\u884C
<span class="token comment"># cat file | head -n 3000 | tail -n +1000</span>
// \u67E5\u770B\u6587\u4EF6\u7684\u7B2C5\u884C\u5230\u7B2C10\u884C
<span class="token comment"># sed -n &#39;5,10p&#39; file</span>
// \u5FAA\u73AF\u76D1\u89C6\u65E5\u5FD7\u6587\u4EF6
<span class="token comment"># tail -f xx.log</span>

<span class="token comment">### wc \u8BE5\u547D\u4EE4\u7528\u6765\u8BA1\u7B97\u6570\u5B57</span>
usage:
	<span class="token function">wc</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> <span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
\u9009\u9879:
  -c\u6216--bytes\u6216\u2014\u2014chars\uFF1A\u53EA\u663E\u793ABytes\u6570\uFF1B
  -l\u6216\u2014\u2014lines\uFF1A\u53EA\u663E\u793A\u5217\u6570\uFF1B
  -w\u6216\u2014\u2014words\uFF1A\u53EA\u663E\u793A\u5B57\u6570\u3002
\u5E38\u7528\u5B9E\u4F8B:
	<span class="token comment"># wc -l file  //\u7EDF\u8BA1\u6587\u4EF6\u884C\u6570</span>
	<span class="token comment"># wc -w file  //\u7EDF\u8BA1\u5355\u8BCD\u6570</span>
	<span class="token comment"># wc -c file  //\u7EDF\u8BA1\u5B57\u7B26\u6570</span>

<span class="token comment">### sort \u5BF9\u6587\u4EF6\u8FDB\u884C\u6392\u5E8F\uFF0C\u5E76\u5C06\u6392\u5E8F\u7ED3\u679C\u6807\u51C6\u8F93\u51FA</span>
usage: <span class="token function">sort</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> <span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
\u9009\u9879:
  -b\uFF1A\u5FFD\u7565\u6BCF\u884C\u524D\u9762\u5F00\u59CB\u51FA\u7684\u7A7A\u683C\u5B57\u7B26\uFF1B
  -c\uFF1A\u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5DF2\u7ECF\u6309\u7167\u987A\u5E8F\u6392\u5E8F\uFF1B
  -d\uFF1A\u6392\u5E8F\u65F6\uFF0C\u5904\u7406\u82F1\u6587\u5B57\u6BCD\u3001\u6570\u5B57\u53CA\u7A7A\u683C\u5B57\u7B26\u5916\uFF0C\u5FFD\u7565\u5176\u4ED6\u7684\u5B57\u7B26\uFF1B
  -f\uFF1A\u6392\u5E8F\u65F6\uFF0C\u5C06\u5C0F\u5199\u5B57\u6BCD\u89C6\u4E3A\u5927\u5199\u5B57\u6BCD\uFF1B
  -i\uFF1A\u6392\u5E8F\u65F6\uFF0C\u9664\u4E86040\u81F3176\u4E4B\u95F4\u7684ASCII\u5B57\u7B26\u5916\uFF0C\u5FFD\u7565\u5176\u4ED6\u7684\u5B57\u7B26\uFF1B
  -m\uFF1A\u5C06\u51E0\u4E2A\u6392\u5E8F\u53F7\u7684\u6587\u4EF6\u8FDB\u884C\u5408\u5E76\uFF1B
  -M\uFF1A\u5C06\u524D\u97623\u4E2A\u5B57\u6BCD\u4F9D\u7167\u6708\u4EFD\u7684\u7F29\u5199\u8FDB\u884C\u6392\u5E8F\uFF1B
  -n\uFF1A\u4F9D\u7167\u6570\u503C\u7684\u5927\u5C0F\u6392\u5E8F\uFF1B
  -o<span class="token operator">&lt;</span>\u8F93\u51FA\u6587\u4EF6<span class="token operator">&gt;</span>\uFF1A\u5C06\u6392\u5E8F\u540E\u7684\u7ED3\u679C\u5B58\u5165\u5236\u5B9A\u7684\u6587\u4EF6\uFF1B
  -r\uFF1A\u4EE5\u76F8\u53CD\u7684\u987A\u5E8F\u6765\u6392\u5E8F\uFF1B
  -t<span class="token operator">&lt;</span>\u5206\u9694\u5B57\u7B26<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u6392\u5E8F\u65F6\u6240\u7528\u7684\u680F\u4F4D\u5206\u9694\u5B57\u7B26\uFF1B
  <span class="token parameter variable">-k</span> \u6307\u5B9A\u67D0\u4E00\u4E2A\u5217\u6392\u5E8F
  +<span class="token operator">&lt;</span>\u8D77\u59CB\u680F\u4F4D<span class="token operator">&gt;</span>-<span class="token operator">&lt;</span>\u7ED3\u675F\u680F\u4F4D<span class="token operator">&gt;</span>\uFF1A\u4EE5\u6307\u5B9A\u7684\u680F\u4F4D\u6765\u6392\u5E8F\uFF0C\u8303\u56F4\u7531\u8D77\u59CB\u680F\u4F4D\u5230\u7ED3\u675F\u680F\u4F4D\u7684\u524D\u4E00\u680F\u4F4D\u3002
\u5B9E\u4F8B\uFF1A
	//\u5BF9\u6587\u4EF6\u5185\u5BB9\u8FDB\u884C\u6392\u5E8F
	<span class="token comment"># sort sort.txt</span>
	// \u5BF9\u6587\u4EF6\u5185\u5BB9\u8FDB\u884C\u6392\u5E8F\uFF0C\u5FFD\u7565\u76F8\u540C\u7684\u884C
	<span class="token comment"># sort -u sort.txt</span>
	// \u6BCF\u884C\u6309\u7A7A\u683C\u5206\u5272\u6210\u5217\uFF0C\u6309\u7167\u7B2C2\u5217\u6392\u5E8F
	<span class="token comment"># sort -t &#39;&#39; -k 2 sort.txt</span>
	
<span class="token comment">### uniq \u7528\u6237\u4E0E\u62A5\u544A\u548C\u5FFD\u7565\u6587\u4EF6\u4E2D\u7684\u91CD\u590D\u884C</span>
usage:
	<span class="token function">uniq</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> <span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
\u9009\u9879:
  -c\u6216\u2014\u2014count\uFF1A\u5728\u6BCF\u5217\u65C1\u8FB9\u663E\u793A\u8BE5\u884C\u91CD\u590D\u51FA\u73B0\u7684\u6B21\u6570\uFF1B
  -d\u6216--repeated\uFF1A\u4EC5\u663E\u793A\u91CD\u590D\u51FA\u73B0\u7684\u884C\u5217\uFF1B
  -f<span class="token operator">&lt;</span>\u680F\u4F4D<span class="token operator">&gt;</span>\u6216--skip-fields<span class="token operator">=</span><span class="token operator">&lt;</span>\u680F\u4F4D<span class="token operator">&gt;</span>\uFF1A\u5FFD\u7565\u6BD4\u8F83\u6307\u5B9A\u7684\u680F\u4F4D\uFF1B
  -s<span class="token operator">&lt;</span>\u5B57\u7B26\u4F4D\u7F6E<span class="token operator">&gt;</span>\u6216--skip-chars<span class="token operator">=</span><span class="token operator">&lt;</span>\u5B57\u7B26\u4F4D\u7F6E<span class="token operator">&gt;</span>\uFF1A\u5FFD\u7565\u6BD4\u8F83\u6307\u5B9A\u7684\u5B57\u7B26\uFF1B
  -u\u6216\u2014\u2014unique\uFF1A\u4EC5\u663E\u793A\u51FA\u4E00\u6B21\u7684\u884C\u5217\uFF1B
  -w<span class="token operator">&lt;</span>\u5B57\u7B26\u4F4D\u7F6E<span class="token operator">&gt;</span>\u6216--check-chars<span class="token operator">=</span><span class="token operator">&lt;</span>\u5B57\u7B26\u4F4D\u7F6E<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u8981\u6BD4\u8F83\u7684\u5B57\u7B26\u3002
\u5B9E\u4F8B\uFF1A
	//\u5220\u9664\u91CD\u590D\u884C
	<span class="token comment"># uniq file.txt </span>
	<span class="token comment"># sort file.text | uniq</span>
	<span class="token comment"># sort -u file</span>
	// \u53EA\u663E\u793A\u4E00\u884C
	<span class="token comment"># uniq -u file.txt</span>
	// \u7EDF\u8BA1\u5404\u4E2A\u884C\u5728\u6587\u4EF6\u4E2D\u51FA\u73B0\u7684\u6B21\u6570
	<span class="token comment"># sort file.txt | uniq -c</span>
	// \u5728\u6587\u4EF6\u4E2D\u67E5\u627E\u91CD\u590D\u7684\u884C
	<span class="token comment"># sort file.text | uniq -d</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="split-paste-cut" tabindex="-1"><a class="header-anchor" href="#split-paste-cut" aria-hidden="true">#</a> split\\paste\\cut</h3><p>\u5BF9\u6587\u4EF6\u8FDB\u884C\u5206\u5272\u5408\u5E76\u4E5F\u662F\u5F88\u5E38\u89C1\u7684\u64CD\u4F5C\uFF0C\u5F53\u7136\u968F\u7740\u66F4\u667A\u80FD\u5316\u7684\u5DE5\u5177\u7684\u8BDE\u751F\uFF0C\u8FD9\u4E9B\u547D\u4EE4\u7EC8\u5C06\u9000\u51FA\u5386\u53F2\u7684\u821E\u53F0\u3002\u4E5F\u8BB8\u6240\u8C13\u7684\u533A\u5757\u8FDE\u63A5\u8F66\u8F99\u80FD\u5728\u51E0\u5E74\u5185\u5B8C\u6210\u8FD9\u4E00\u9879\u4EFB\u52A1\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">### split \u5C06\u4E00\u4E2A\u5927\u6587\u4EF6\u5206\u5272\u6210\u5F88\u591A\u5C0F\u6587\u4EF6</span>
usage:
	<span class="token function">split</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> \u53C2\u6570
\u9009\u9879:
  -b\uFF1A\u503C\u4E3A\u6BCF\u4E00\u8F93\u51FA\u6863\u6848\u7684\u5927\u5C0F\uFF0C\u5355\u4F4D\u4E3A byte\u3002
  -C\uFF1A\u6BCF\u4E00\u8F93\u51FA\u6863\u4E2D\uFF0C\u5355\u884C\u7684\u6700\u5927 byte \u6570\u3002
  -d\uFF1A\u4F7F\u7528\u6570\u5B57\u4F5C\u4E3A\u540E\u7F00\u3002
  -l\uFF1A\u503C\u4E3A\u6BCF\u4E00\u8F93\u51FA\u6863\u7684\u884C\u6570\u5927\u5C0F\u3002
\u5B9E\u4F8B:
	// \u5C06date.txt\u6587\u4EF6\u5206\u5272\u621010M\u5927\u5C0F\u7684\u6587\u4EF6
    <span class="token comment"># split -b 10M date.txt</span>
    // \u6BCF10000\u884C\u4E00\u4E2A\u6587\u4EF6
    <span class="token comment"># split -l 10000 data.txt</span>

<span class="token comment">### paste \u7528\u4E8E\u5C06\u591A\u4E2A\u6587\u4EF6\u6309\u7167\u884C\u8FDB\u5217\u5408\u5E76</span>
usage:
	<span class="token function">paste</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> \u53C2\u6570
\u9009\u9879:
	-d<span class="token operator">&lt;</span>\u95F4\u9694\u5B57\u7B26<span class="token operator">&gt;</span>\u6216--delimiters<span class="token operator">=</span><span class="token operator">&lt;</span>\u95F4\u9694\u5B57\u7B26<span class="token operator">&gt;</span>\uFF1A\u7528\u6307\u5B9A\u7684\u95F4\u9694\u5B57\u7B26\u53D6\u4EE3\u8DF3\u683C\u5B57\u7B26\uFF1B
	-s\u6216\u2014\u2014serial\u4E32\u5217\u8FDB\u884C\u800C\u975E\u5E73\u884C\u5904\u7406\u3002
\u5B9E\u4F8B:
	<span class="token comment"># paste file1 file2</span>

<span class="token comment">### cut \u663E\u793A\u884C\u4E2D\u7684\u6307\u5B9A\u4E0D\u670D\uFF0C\u5220\u9664\u6587\u4EF6\u4E2D\u7684\u6307\u5B9A\u5B57\u6BB5</span>
usage:
	<span class="token function">cut</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> <span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
\u9009\u9879:
  -b\uFF1A\u4EC5\u663E\u793A\u884C\u4E2D\u6307\u5B9A\u76F4\u63A5\u8303\u56F4\u7684\u5185\u5BB9\uFF1B
  -c\uFF1A\u4EC5\u663E\u793A\u884C\u4E2D\u6307\u5B9A\u8303\u56F4\u7684\u5B57\u7B26\uFF1B
  -d\uFF1A\u6307\u5B9A\u5B57\u6BB5\u7684\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u7684\u5B57\u6BB5\u5206\u9694\u7B26\u4E3A\u201CTAB\u201D\uFF1B
  -f\uFF1A\u663E\u793A\u6307\u5B9A\u5B57\u6BB5\u7684\u5185\u5BB9\uFF1B
  -n\uFF1A\u4E0E\u201C-b\u201D\u9009\u9879\u8FDE\u7528\uFF0C\u4E0D\u5206\u5272\u591A\u5B57\u8282\u5B57\u7B26\uFF1B
  --complement\uFF1A\u8865\u8DB3\u88AB\u9009\u62E9\u7684\u5B57\u8282\u3001\u5B57\u7B26\u6216\u5B57\u6BB5\uFF1B
  --out-delimiter<span class="token operator">=</span><span class="token operator">&lt;</span>\u5B57\u6BB5\u5206\u9694\u7B26<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u8F93\u51FA\u5185\u5BB9\u662F\u7684\u5B57\u6BB5\u5206\u5272\u7B26\uFF1B
  --help\uFF1A\u663E\u793A\u6307\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F\uFF1B
  --version\uFF1A\u663E\u793A\u6307\u4EE4\u7684\u7248\u672C\u4FE1\u606F\u3002
 \u5B9E\u4F8B:
 	//\u663E\u793A\u7B2C5\u4E2A\u5B57\u7B26\u5F00\u59CB\u5230\u7ED3\u5C3E\u7684\u5185\u5BB9
 	<span class="token comment"># cut -c5- test.txt</span>
 	//\u53EA\u663E\u793A\u524D\u4FE9\u4E2A\u5B57\u7B26
 	<span class="token comment"># cut -c-2 test.txt</span>
 	//\u663E\u793A\u7B2C\u4E00\u4E2A\u5230\u7B2C\u4E09\u4E2A\u5B57\u7B26
 	<span class="token comment"># cut -c1-3 test.txt</span>
 
// \u53D6\u51FA\u4FE9\u4E2A\u6587\u4EF6\u7684\u5E76\u96C6
<span class="token comment">#cat file1 file2 | sort | uniq &gt; file3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="find-xargs-grep-awk-sed" tabindex="-1"><a class="header-anchor" href="#find-xargs-grep-awk-sed" aria-hidden="true">#</a> find\\xargs\\grep\\awk\\sed</h3><p>find\u547D\u4EE4\u53EF\u4EE5\u662Flinux\u4E2D\u6700\u6709\u7528\u7684\u547D\u4EE4\u4E4B\u4E00,\u6709\u4E86find\u547D\u4EE4\u53EF\u4EE5\u6309\u7167\u4E00\u5B9A\u7684\u6761\u4EF6\u67E5\u627E\u6587\u4EF6\uFF0C\u5E76\u5BF9\u6587\u4EF6\u8FDB\u884C\u6279\u5904\u7406\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage:
	<span class="token function">find</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u53C2\u6570<span class="token punctuation">]</span>
\u9009\u9879\uFF1A
  -amin<span class="token operator">&lt;</span>\u5206\u949F<span class="token operator">&gt;</span>\uFF1A\u67E5\u627E\u5728\u6307\u5B9A\u65F6\u95F4\u66FE\u88AB\u5B58\u53D6\u8FC7\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF0C\u5355\u4F4D\u4EE5\u5206\u949F\u8BA1\u7B97\uFF1B
  -anewer<span class="token operator">&lt;</span>\u53C2\u8003\u6587\u4EF6\u6216\u76EE\u5F55<span class="token operator">&gt;</span>\uFF1A\u67E5\u627E\u5176\u5B58\u53D6\u65F6\u95F4\u8F83\u6307\u5B9A\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u5B58\u53D6\u65F6\u95F4\u66F4\u63A5\u8FD1\u73B0\u5728\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
  -atime<span class="token operator">&lt;</span><span class="token number">24</span>\u5C0F\u65F6\u6570<span class="token operator">&gt;</span>\uFF1A\u67E5\u627E\u5728\u6307\u5B9A\u65F6\u95F4\u66FE\u88AB\u5B58\u53D6\u8FC7\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF0C\u5355\u4F4D\u4EE524\u5C0F\u65F6\u8BA1\u7B97\uFF1B
  -cmin<span class="token operator">&lt;</span>\u5206\u949F<span class="token operator">&gt;</span>\uFF1A\u67E5\u627E\u5728\u6307\u5B9A\u65F6\u95F4\u4E4B\u65F6\u88AB\u66F4\u6539\u8FC7\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
  -cnewer<span class="token operator">&lt;</span>\u53C2\u8003\u6587\u4EF6\u6216\u76EE\u5F55<span class="token operator">&gt;</span>\u67E5\u627E\u5176\u66F4\u6539\u65F6\u95F4\u8F83\u6307\u5B9A\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u66F4\u6539\u65F6\u95F4\u66F4\u63A5\u8FD1\u73B0\u5728\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
  -ctime<span class="token operator">&lt;</span><span class="token number">24</span>\u5C0F\u65F6\u6570<span class="token operator">&gt;</span>\uFF1A\u67E5\u627E\u5728\u6307\u5B9A\u65F6\u95F4\u4E4B\u65F6\u88AB\u66F4\u6539\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF0C\u5355\u4F4D\u4EE524\u5C0F\u65F6\u8BA1\u7B97\uFF1B
  -daystart\uFF1A\u4ECE\u672C\u65E5\u5F00\u59CB\u8BA1\u7B97\u65F6\u95F4\uFF1B
  -depth\uFF1A\u4ECE\u6307\u5B9A\u76EE\u5F55\u4E0B\u6700\u6DF1\u5C42\u7684\u5B50\u76EE\u5F55\u5F00\u59CB\u67E5\u627E\uFF1B
  -expty\uFF1A\u5BFB\u627E\u6587\u4EF6\u5927\u5C0F\u4E3A0 Byte\u7684\u6587\u4EF6\uFF0C\u6216\u76EE\u5F55\u4E0B\u6CA1\u6709\u4EFB\u4F55\u5B50\u76EE\u5F55\u6216\u6587\u4EF6\u7684\u7A7A\u76EE\u5F55\uFF1B
  -exec<span class="token operator">&lt;</span>\u6267\u884C\u6307\u4EE4<span class="token operator">&gt;</span>\uFF1A\u5047\u8BBEfind\u6307\u4EE4\u7684\u56DE\u4F20\u503C\u4E3ATrue\uFF0C\u5C31\u6267\u884C\u8BE5\u6307\u4EE4\uFF1B
  -false\uFF1A\u5C06find\u6307\u4EE4\u7684\u56DE\u4F20\u503C\u7686\u8BBE\u4E3AFalse\uFF1B
  -fls<span class="token operator">&lt;</span>\u5217\u8868\u6587\u4EF6<span class="token operator">&gt;</span>\uFF1A\u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201C-ls\u201D\u53C2\u6570\u7C7B\u4F3C\uFF0C\u4F46\u4F1A\u628A\u7ED3\u679C\u4FDD\u5B58\u4E3A\u6307\u5B9A\u7684\u5217\u8868\u6587\u4EF6\uFF1B
  -follow\uFF1A\u6392\u9664\u7B26\u53F7\u8FDE\u63A5\uFF1B
  -fprint<span class="token operator">&lt;</span>\u5217\u8868\u6587\u4EF6<span class="token operator">&gt;</span>\uFF1A\u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201C-print\u201D\u53C2\u6570\u7C7B\u4F3C\uFF0C\u4F46\u4F1A\u628A\u7ED3\u679C\u4FDD\u5B58\u6210\u6307\u5B9A\u7684\u5217\u8868\u6587\u4EF6\uFF1B
  -fprint<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>\u5217\u8868\u6587\u4EF6<span class="token operator">&gt;</span>\uFF1A\u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201C-print0\u201D\u53C2\u6570\u7C7B\u4F3C\uFF0C\u4F46\u4F1A\u628A\u7ED3\u679C\u4FDD\u5B58\u6210\u6307\u5B9A\u7684\u5217\u8868\u6587\u4EF6\uFF1B
  -fprintf<span class="token operator">&lt;</span>\u5217\u8868\u6587\u4EF6<span class="token operator">&gt;</span><span class="token operator">&lt;</span>\u8F93\u51FA\u683C\u5F0F<span class="token operator">&gt;</span>\uFF1A\u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201C-printf\u201D\u53C2\u6570\u7C7B\u4F3C\uFF0C\u4F46\u4F1A\u628A\u7ED3\u679C\u4FDD\u5B58\u6210\u6307\u5B9A\u7684\u5217\u8868\u6587\u4EF6\uFF1B
  -fstype<span class="token operator">&lt;</span>\u6587\u4EF6\u7CFB\u7EDF\u7C7B\u578B<span class="token operator">&gt;</span>\uFF1A\u53EA\u5BFB\u627E\u8BE5\u6587\u4EF6\u7CFB\u7EDF\u7C7B\u578B\u4E0B\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
  -gid<span class="token operator">&lt;</span>\u7FA4\u7EC4\u8BC6\u522B\u7801<span class="token operator">&gt;</span>\uFF1A\u67E5\u627E\u7B26\u5408\u6307\u5B9A\u4E4B\u7FA4\u7EC4\u8BC6\u522B\u7801\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
  -group<span class="token operator">&lt;</span>\u7FA4\u7EC4\u540D\u79F0<span class="token operator">&gt;</span>\uFF1A\u67E5\u627E\u7B26\u5408\u6307\u5B9A\u4E4B\u7FA4\u7EC4\u540D\u79F0\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
  -help\u6216\u2014\u2014help\uFF1A\u5728\u7EBF\u5E2E\u52A9\uFF1B
  -ilname<span class="token operator">&lt;</span>\u8303\u672C\u6837\u5F0F<span class="token operator">&gt;</span>\uFF1A\u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201C-lname\u201D\u53C2\u6570\u7C7B\u4F3C\uFF0C\u4F46\u5FFD\u7565\u5B57\u7B26\u5927\u5C0F\u5199\u7684\u5DEE\u522B\uFF1B
  -iname<span class="token operator">&lt;</span>\u8303\u672C\u6837\u5F0F<span class="token operator">&gt;</span>\uFF1A\u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201C-name\u201D\u53C2\u6570\u7C7B\u4F3C\uFF0C\u4F46\u5FFD\u7565\u5B57\u7B26\u5927\u5C0F\u5199\u7684\u5DEE\u522B\uFF1B
  -inum<span class="token operator">&lt;</span>inode\u7F16\u53F7<span class="token operator">&gt;</span>\uFF1A\u67E5\u627E\u7B26\u5408\u6307\u5B9A\u7684inode\u7F16\u53F7\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
  -ipath<span class="token operator">&lt;</span>\u8303\u672C\u6837\u5F0F<span class="token operator">&gt;</span>\uFF1A\u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201C-path\u201D\u53C2\u6570\u7C7B\u4F3C\uFF0C\u4F46\u5FFD\u7565\u5B57\u7B26\u5927\u5C0F\u5199\u7684\u5DEE\u522B\uFF1B
  -iregex<span class="token operator">&lt;</span>\u8303\u672C\u6837\u5F0F<span class="token operator">&gt;</span>\uFF1A\u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201C-regexe\u201D\u53C2\u6570\u7C7B\u4F3C\uFF0C\u4F46\u5FFD\u7565\u5B57\u7B26\u5927\u5C0F\u5199\u7684\u5DEE\u522B\uFF1B
  -links<span class="token operator">&lt;</span>\u8FDE\u63A5\u6570\u76EE<span class="token operator">&gt;</span>\uFF1A\u67E5\u627E\u7B26\u5408\u6307\u5B9A\u7684\u786C\u8FDE\u63A5\u6570\u76EE\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
  -iname<span class="token operator">&lt;</span>\u8303\u672C\u6837\u5F0F<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u5BFB\u627E\u7B26\u53F7\u8FDE\u63A5\u7684\u8303\u672C\u6837\u5F0F\uFF1B
  -ls\uFF1A\u5047\u8BBEfind\u6307\u4EE4\u7684\u56DE\u4F20\u503C\u4E3ATure\uFF0C\u5C31\u5C06\u6587\u4EF6\u6216\u76EE\u5F55\u540D\u79F0\u5217\u51FA\u5230\u6807\u51C6\u8F93\u51FA\uFF1B
  -maxdepth<span class="token operator">&lt;</span>\u76EE\u5F55\u5C42\u7EA7<span class="token operator">&gt;</span>\uFF1A\u8BBE\u7F6E\u6700\u5927\u76EE\u5F55\u5C42\u7EA7\uFF1B
  -mindepth<span class="token operator">&lt;</span>\u76EE\u5F55\u5C42\u7EA7<span class="token operator">&gt;</span>\uFF1A\u8BBE\u7F6E\u6700\u5C0F\u76EE\u5F55\u5C42\u7EA7\uFF1B
  -mmin<span class="token operator">&lt;</span>\u5206\u949F<span class="token operator">&gt;</span>\uFF1A\u67E5\u627E\u5728\u6307\u5B9A\u65F6\u95F4\u66FE\u88AB\u66F4\u6539\u8FC7\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF0C\u5355\u4F4D\u4EE5\u5206\u949F\u8BA1\u7B97\uFF1B
  -mount\uFF1A\u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201C-xdev\u201D\u76F8\u540C\uFF1B
  -mtime<span class="token operator">&lt;</span><span class="token number">24</span>\u5C0F\u65F6\u6570<span class="token operator">&gt;</span>\uFF1A\u67E5\u627E\u5728\u6307\u5B9A\u65F6\u95F4\u66FE\u88AB\u66F4\u6539\u8FC7\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF0C\u5355\u4F4D\u4EE524\u5C0F\u65F6\u8BA1\u7B97\uFF1B
  -name<span class="token operator">&lt;</span>\u8303\u672C\u6837\u5F0F<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u5BFB\u627E\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u8303\u672C\u6837\u5F0F\uFF1B
  -newer<span class="token operator">&lt;</span>\u53C2\u8003\u6587\u4EF6\u6216\u76EE\u5F55<span class="token operator">&gt;</span>\uFF1A\u67E5\u627E\u5176\u66F4\u6539\u65F6\u95F4\u8F83\u6307\u5B9A\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u66F4\u6539\u65F6\u95F4\u66F4\u63A5\u8FD1\u73B0\u5728\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
  -nogroup\uFF1A\u627E\u51FA\u4E0D\u5C5E\u4E8E\u672C\u5730\u4E3B\u673A\u7FA4\u7EC4\u8BC6\u522B\u7801\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
  -noleaf\uFF1A\u4E0D\u53BB\u8003\u8651\u76EE\u5F55\u81F3\u5C11\u9700\u62E5\u6709\u4E24\u4E2A\u786C\u8FDE\u63A5\u5B58\u5728\uFF1B
  -nouser\uFF1A\u627E\u51FA\u4E0D\u5C5E\u4E8E\u672C\u5730\u4E3B\u673A\u7528\u6237\u8BC6\u522B\u7801\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
  -ok<span class="token operator">&lt;</span>\u6267\u884C\u6307\u4EE4<span class="token operator">&gt;</span>\uFF1A\u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201C-exec\u201D\u7C7B\u4F3C\uFF0C\u4F46\u5728\u6267\u884C\u6307\u4EE4\u4E4B\u524D\u4F1A\u5148\u8BE2\u95EE\u7528\u6237\uFF0C
  	\u82E5\u56DE\u7B54\u201Cy\u201D\u6216\u201CY\u201D\uFF0C\u5219\u653E\u5F03\u6267\u884C\u547D\u4EE4\uFF1B
  -path<span class="token operator">&lt;</span>\u8303\u672C\u6837\u5F0F<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u5BFB\u627E\u76EE\u5F55\u7684\u8303\u672C\u6837\u5F0F\uFF1B
  -perm<span class="token operator">&lt;</span>\u6743\u9650\u6570\u503C<span class="token operator">&gt;</span>\uFF1A\u67E5\u627E\u7B26\u5408\u6307\u5B9A\u7684\u6743\u9650\u6570\u503C\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
  -print\uFF1A\u5047\u8BBEfind\u6307\u4EE4\u7684\u56DE\u4F20\u503C\u4E3ATure\uFF0C\u5C31\u5C06\u6587\u4EF6\u6216\u76EE\u5F55\u540D\u79F0\u5217\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u3002
  	\u683C\u5F0F\u4E3A\u6BCF\u5217\u4E00\u4E2A\u540D\u79F0\uFF0C\u6BCF\u4E2A\u540D\u79F0\u524D\u7686\u6709\u201C./\u201D\u5B57\u7B26\u4E32\uFF1B
  -print0\uFF1A\u5047\u8BBEfind\u6307\u4EE4\u7684\u56DE\u4F20\u503C\u4E3ATure\uFF0C\u5C31\u5C06\u6587\u4EF6\u6216\u76EE\u5F55\u540D\u79F0\u5217\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u3002\u683C\u5F0F\u4E3A\u5168\u90E8\u7684\u540D\u79F0\u7686\u5728\u540C\u4E00\u884C\uFF1B
  -printf<span class="token operator">&lt;</span>\u8F93\u51FA\u683C\u5F0F<span class="token operator">&gt;</span>\uFF1A\u5047\u8BBEfind\u6307\u4EE4\u7684\u56DE\u4F20\u503C\u4E3ATure\uFF0C\u5C31\u5C06\u6587\u4EF6\u6216\u76EE\u5F55\u540D\u79F0\u5217\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u3002\u683C\u5F0F\u53EF\u4EE5\u81EA\u884C\u6307\u5B9A\uFF1B
  -prune\uFF1A\u4E0D\u5BFB\u627E\u5B57\u7B26\u4E32\u4F5C\u4E3A\u5BFB\u627E\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u8303\u672C\u6837\u5F0F<span class="token punctuation">;</span>
  -regex<span class="token operator">&lt;</span>\u8303\u672C\u6837\u5F0F<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u5BFB\u627E\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u8303\u672C\u6837\u5F0F\uFF1B
  -size<span class="token operator">&lt;</span>\u6587\u4EF6\u5927\u5C0F<span class="token operator">&gt;</span>\uFF1A\u67E5\u627E\u7B26\u5408\u6307\u5B9A\u7684\u6587\u4EF6\u5927\u5C0F\u7684\u6587\u4EF6\uFF1B
  -true\uFF1A\u5C06find\u6307\u4EE4\u7684\u56DE\u4F20\u503C\u7686\u8BBE\u4E3ATrue\uFF1B
  -typ<span class="token operator">&lt;</span>\u6587\u4EF6\u7C7B\u578B<span class="token operator">&gt;</span>\uFF1A\u53EA\u5BFB\u627E\u7B26\u5408\u6307\u5B9A\u7684\u6587\u4EF6\u7C7B\u578B\u7684\u6587\u4EF6\uFF1B
  -uid<span class="token operator">&lt;</span>\u7528\u6237\u8BC6\u522B\u7801<span class="token operator">&gt;</span>\uFF1A\u67E5\u627E\u7B26\u5408\u6307\u5B9A\u7684\u7528\u6237\u8BC6\u522B\u7801\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
  -used<span class="token operator">&lt;</span>\u65E5\u6570<span class="token operator">&gt;</span>\uFF1A\u67E5\u627E\u6587\u4EF6\u6216\u76EE\u5F55\u88AB\u66F4\u6539\u4E4B\u540E\u5728\u6307\u5B9A\u65F6\u95F4\u66FE\u88AB\u5B58\u53D6\u8FC7\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF0C\u5355\u4F4D\u4EE5\u65E5\u8BA1\u7B97\uFF1B
  -user<span class="token operator">&lt;</span>\u62E5\u6709\u8005\u540D\u79F0<span class="token operator">&gt;</span>\uFF1A\u67E5\u627E\u7B26\u548C\u6307\u5B9A\u7684\u62E5\u6709\u8005\u540D\u79F0\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
  -version\u6216\u2014\u2014version\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\uFF1B
  -xdev\uFF1A\u5C06\u8303\u56F4\u5C40\u9650\u5728\u5148\u884C\u7684\u6587\u4EF6\u7CFB\u7EDF\u4E2D\uFF1B
  -xtype<span class="token operator">&lt;</span>\u6587\u4EF6\u7C7B\u578B<span class="token operator">&gt;</span>\uFF1A\u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201C-type\u201D\u53C2\u6570\u7C7B\u4F3C\uFF0C\u5DEE\u522B\u5728\u4E8E\u5B83\u9488\u5BF9\u7B26\u53F7\u8FDE\u63A5\u68C0\u67E5\u3002
\u5B9E\u4F8B:
	//\u57FA\u4E8Ename\u67E5\u8BE2
	<span class="token comment"># find . -name test.txt</span>
	<span class="token comment"># find /etc -name test.txt</span>
    <span class="token comment"># find /home -iname test.txt</span>
    <span class="token comment"># find / -type d -name test</span>
    <span class="token comment"># find . -type f -name test.php</span>
    <span class="token comment"># find . -type f -name *.php  //(&quot;*.php&quot; \u4E5F\u662F\u53EF\u4EE5\u7684)</span>
    
    //\u57FA\u4E8E\u6743\u9650\u7684\u67E5\u8BE2
    <span class="token comment"># find . -type f -perm 777 -print</span>
    
    //\u57FA\u4E8E\u7528\u6237\u597D\u7EC4\u67E5\u8BE2
    <span class="token comment"># find / -user root -name test.txt</span>
    <span class="token comment"># find /home -group developer</span>
    <span class="token comment"># find /home -user developer -iname *.txt</span>
    
    // \u57FA\u4E8E\u65F6\u95F4\u67E5\u8BE2\u6587\u4EF6\u6216\u76EE\u5F55
    <span class="token comment"># find / -mtime 50</span>
    <span class="token comment"># find / -mtime +50 -mtime -100</span>
    
    // \u6309\u7167\u6587\u4EF6\u7C7B\u578B\u67E5\u627E
    <span class="token comment"># find . type s //socket\u6587\u4EF6</span>
    <span class="token comment"># find . type d //\u67E5\u627E\u6240\u6709\u76EE\u5F55</span>
    <span class="token comment"># find . type f //\u67E5\u627E\u4E00\u822C\u6587\u4EF6</span>
    <span class="token comment"># find </span>
    
    // \u57FA\u4E8E\u6587\u4EF6\u5927\u5C0F\u67E5\u627E\u6587\u4EF6\u6216\u76EE\u5F55
    <span class="token comment"># find / -empty //\u67E5\u627E\u7A7A\u6587\u4EF6</span>
    <span class="token comment"># find / -size 50M</span>
    <span class="token comment"># find / -size +50M -size -100M</span>
    <span class="token comment"># find / -type f -exec ls -s {} \\; | sort -n -r | head -5 //\u67E5\u627E\u5F53\u524D\u76EE\u5F55\u6700\u5927\u76845\u4E2A\u6587\u4EF6</span>
    
    
    // \u9650\u5B9A\u641C\u7D22\u76EE\u5F55\u6DF1\u5EA6
    <span class="token comment"># find / -maxdepth 2 -name passwd</span>
    <span class="token comment"># find / -mindepth 3 -maxdepth 5 -name &quot;*per*&quot;</span>
    
    // \u76F8\u53CD\u5339\u914D
    <span class="token comment"># find / -not -name &quot;*.py&quot;</span>
    
    
    // \u5728find\u547D\u4EE4\u67E5\u627E\u5230\u7684\u6587\u4EF6\u4E0A\u6267\u884C\u547D\u4EE4
    <span class="token comment"># find -name &quot;*.py&quot; -exec md5sum {} \\;</span>
    // \u67E5\u627E\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6240\u6709txt\u6587\u4EF6
    <span class="token comment"># find ./ -name &quot;*.txt&quot; -exec ls -l &quot;{}&quot; /;</span>
    // \u5C06\u5F53\u524D\u76EE\u5F55\u4E0B\u7684txt\u6587\u4EF6\u91CD\u540D\u6210txtd
    <span class="token comment"># find ./ -name &quot;*.txt&quot; -exec mv &quot;{}&quot; &quot;{}d&quot; /;</span>
	// \u67E5\u627E\u5185\u5BB9\u4E2D\u5305\u542B\u2018password\u2019\u7684\u6587\u4EF6\u5217\u8868
	<span class="token comment"># find . -type f  -exec grep &#39;password&#39;  -l {} \\;</span>
	// \u67E5\u627E\u4E00\u5C0F\u65F6\u5185\u88AB\u7F16\u8F91\u8FC7\u7684\u6587\u4EF6
	<span class="token comment"># find . -mmin -60 -exec ls -l {} \\;</span>
	// \u5220\u9664\u6240\u6709pm3\u6587\u4EF6\u540D\u4E2D\u7684\u7A7A\u683C
	<span class="token comment"># find . -type f -iname &quot;*.mp3&quot; -exec rename &quot;s/ /_/g&quot; {};</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),d=n("strong",null,"xargs\u547D\u4EE4",-1),v=s("\u662F\u7ED9\u5176\u4ED6\u547D\u4EE4\u4F20\u9012\u53C2\u6570\u7684\u4E00\u4E2A\u8FC7\u6EE4\u5668\uFF0C\u4E5F\u662F\u7EC4\u5408\u591A\u4E2A\u547D\u4EE4\u7684\u4E00\u4E2A\u5DE5\u5177\u3002\u5B83\u64C5\u957F\u5C06\u6807\u51C6\u8F93\u5165\u6570\u636E\u8F6C\u6362\u6210\u547D\u4EE4\u884C\u53C2\u6570\uFF0Cxargs\u80FD\u591F\u5904\u7406\u7BA1\u9053\u6216\u8005stdin\u5E76\u5C06\u5176\u8F6C\u6362\u6210\u7279\u5B9A\u547D\u4EE4\u7684\u547D\u4EE4\u53C2\u6570\u3002xargs\u4E5F\u53EF\u4EE5\u5C06\u5355\u884C\u6216\u591A\u884C\u6587\u672C\u8F93\u5165\u8F6C\u6362\u4E3A\u5176\u4ED6\u683C\u5F0F\uFF0C\u4F8B\u5982\u591A\u884C\u53D8\u5355\u884C\uFF0C\u5355\u884C\u53D8\u591A\u884C\u3002xargs\u7684\u9ED8\u8BA4\u547D\u4EE4\u662F"),u={href:"http://man.linuxde.net/echo",target:"_blank",rel:"noopener noreferrer"},m=s("echo"),b=s("\uFF0C\u7A7A\u683C\u662F\u9ED8\u8BA4\u5B9A\u754C\u7B26\u3002\u8FD9\u610F\u5473\u7740\u901A\u8FC7\u7BA1\u9053\u4F20\u9012\u7ED9xargs\u7684\u8F93\u5165\u5C06\u4F1A\u5305\u542B\u6362\u884C\u548C\u7A7A\u767D\uFF0C\u4E0D\u8FC7\u901A\u8FC7xargs\u7684\u5904\u7406\uFF0C\u6362\u884C\u548C\u7A7A\u767D\u5C06\u88AB\u7A7A\u683C\u53D6\u4EE3\u3002xargs\u662F\u6784\u5EFA\u5355\u884C\u547D\u4EE4\u7684\u91CD\u8981\u7EC4\u4EF6\u4E4B\u4E00\u3002"),k=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage:
	<span class="token function">xargs</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> <span class="token builtin class-name">command</span> \u53C2\u6570
\u9009\u9879:
	<span class="token parameter variable">-n</span> \u591A\u884C\u8F93\u51FA
	<span class="token parameter variable">-d</span> \u81EA\u5B9A\u4E49\u5206\u754C\u7B26
	<span class="token parameter variable">-t</span> \u6267\u884C\u547D\u4EE4\u524D\u5148\u6253\u5370\u547D\u4EE4
	<span class="token parameter variable">-I</span> \u53C2\u6570\u66FF\u6362
\u5B9E\u4F8B:
	<span class="token comment"># a.txt b.txt c.txt</span>
	//\u67E5\u770Btxt\u6587\u4EF6\u7684\u8BE6\u7EC6\u4FE1\u606F
	// \u547D\u4EE4\u6267\u884C\u8FC7\u7A0B:
	//	<span class="token number">1</span>.ls *.txt \u8F93\u51FA a.txt b.txt c.txt
	//	<span class="token number">2</span>.\u901A\u8FC7\u7BA1\u9053\u5C06\u8F93\u51FA\u7684 a.txt b.txt c.txt\u4F20\u9012\u4E2Axargs
	//	<span class="token number">3</span>.xargs\u901A\u8FC7\u7A7A\u683C/\u6362\u884C\u4F5C\u4E3A\u5206\u5272\u7B26\u5C06\u8F93\u51FA\u8F6C\u6210a.txt<span class="token punctuation">\\</span>b.txt<span class="token punctuation">\\</span>c.txt
	//	<span class="token number">4</span>.xargs\u5C06\u5206\u5272\u7ED3\u679C\u4F20\u9012\u7ED9\u540E\u7EED\u7684\u547D\u4EE4
	//	<span class="token number">5</span>.\u6267\u884C\u7EC4\u548C\u6210\u7684\u547D\u4EE4 <span class="token function">ls</span> <span class="token parameter variable">-al</span> a.txt b.txt c.txt
	<span class="token comment"># ls *.txt | xargs ls -al</span>
	<span class="token comment"># ls *.txt | xargs -t ls -al  //\u6267\u884C\u547D\u4EE4\u524D\u5148\u6253\u5370\u547D\u4EE4</span>
	<span class="token comment"># ls *.txt | xargs -t -n1 ls -al //\u5C06\u4E00\u6761\u547D\u4EE4\u7EC4\u5408\u62103\u6761\u547D\u4EE4\uFF0C\u5373\u6267\u884C3\u6B21ls</span>
	//-I <span class="token string">&#39;{}&#39;</span> \u8868\u793A\u5C06\u540E\u9762\u7684\u547D\u4EE4\u4E2D\u7684<span class="token punctuation">{</span><span class="token punctuation">}</span>\u66FF\u6362\u6210\u7B7E\u540D\u89E3\u6790\u51FA\u6765\u7684\u53C2\u6570\u503C\uFF0C\u5728\u6267\u884C\u547D\u4EE4
	<span class="token comment"># ls *.txt | xargs -t -n1 -I &#39;{}&#39;  mv {} {}.backup</span>
	// <span class="token parameter variable">-print0</span> \u544A\u8BC9find\u547D\u4EE4\u5728\u8F93\u51FA\u6587\u4EF6\u540D\u4E4B\u540E\u8DDF\u4E0ANULL\u5B57\u7B26\uFF0C\u800C\u4E0D\u662F\u6362\u884C\u7B26
	// <span class="token parameter variable">-0</span> \u544A\u8BC9xargs \u4EE5NULL\u4F5C\u4E3A\u5206\u5272\u7B26
	<span class="token comment"># find . -name &quot;*.txt&quot; -print0 | xargs -0 -t ls -al</span>
	
	// <span class="token function">find</span> + <span class="token function">xargs</span> \u5E38\u89C1\u7684\u547D\u4EE4\u5B9E\u4F8B
	// \u6279\u91CF\u4E0B\u8F7D
	<span class="token comment"># cat url-list.txt | xargs wget \u2013c</span>
	//\u67E5\u627E\u5E76\u538B\u7F29jpg\u6587\u4EF6
	<span class="token comment"># find / -name *.jpg -type f -print | xargs tar -cvzf images.tar.gz</span>
	//\u590D\u5236\u56FE\u7247\u515A\u53E6\u5916\u4E00\u4E2A\u76EE\u5F55
	<span class="token comment"># find . -iname &quot;*.jpg&quot; | xargs -1n -i cp {} /backup/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> grep</h5><p>grep\u662Fglobal search regular expression and print out the line\u7684\u7B80\u79F0\uFF0C\u7B80\u5355\u7684\u8BF4\u5C31\u662F\u641C\u7D22\u6B63\u5219\u8868\u8FBE\u5F0F\u5E76\u6253\u5370\uFF0C\u662Flinux\u4E2D\u5F3A\u5927\u7684\u6587\u672C\u641C\u7D22\u5DE5\u5177\uFF0C\u4F7F\u7528\u5B83\u53EF\u4EE5\u5229\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u8FDB\u884C\u641C\u7D22\u5339\u914D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage:
	<span class="token function">grep</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> PATTERN FILE
	<span class="token function">grep</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> <span class="token punctuation">[</span>-e PATTERN <span class="token operator">|</span> <span class="token parameter variable">-f</span> file<span class="token punctuation">]</span> <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span>
\u9009\u9879\uFF1A
  <span class="token parameter variable">-a</span> \u4E0D\u8981\u5FFD\u7565\u4E8C\u8FDB\u5236\u6570\u636E\u3002
  -A<span class="token operator">&lt;</span>\u663E\u793A\u5217\u6570<span class="token operator">&gt;</span> \u9664\u4E86\u663E\u793A\u7B26\u5408\u8303\u672C\u6837\u5F0F\u7684\u90A3\u4E00\u884C\u4E4B\u5916\uFF0C\u5E76\u663E\u793A\u8BE5\u884C\u4E4B\u540E\u7684\u5185\u5BB9\u3002
  <span class="token parameter variable">-b</span> \u5728\u663E\u793A\u7B26\u5408\u8303\u672C\u6837\u5F0F\u7684\u90A3\u4E00\u884C\u4E4B\u5916\uFF0C\u5E76\u663E\u793A\u8BE5\u884C\u4E4B\u524D\u7684\u5185\u5BB9\u3002
  <span class="token parameter variable">-c</span> \u8BA1\u7B97\u7B26\u5408\u8303\u672C\u6837\u5F0F\u7684\u5217\u6570\u3002
  -C<span class="token operator">&lt;</span>\u663E\u793A\u5217\u6570<span class="token operator">&gt;</span>\u6216-<span class="token operator">&lt;</span>\u663E\u793A\u5217\u6570<span class="token operator">&gt;</span>  \u9664\u4E86\u663E\u793A\u7B26\u5408\u8303\u672C\u6837\u5F0F\u7684\u90A3\u4E00\u5217\u4E4B\u5916\uFF0C\u5E76\u663E\u793A\u8BE5\u5217\u4E4B\u524D\u540E\u7684\u5185\u5BB9\u3002
  -d<span class="token operator">&lt;</span>\u8FDB\u884C\u52A8\u4F5C<span class="token operator">&gt;</span> \u5F53\u6307\u5B9A\u8981\u67E5\u627E\u7684\u662F\u76EE\u5F55\u800C\u975E\u6587\u4EF6\u65F6\uFF0C\u5FC5\u987B\u4F7F\u7528\u8FD9\u9879\u53C2\u6570\uFF0C\u5426\u5219grep\u547D\u4EE4\u5C06\u56DE\u62A5\u4FE1\u606F\u5E76\u505C\u6B62\u52A8\u4F5C\u3002
  -e<span class="token operator">&lt;</span>\u8303\u672C\u6837\u5F0F<span class="token operator">&gt;</span> \u6307\u5B9A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u67E5\u627E\u6587\u4EF6\u5185\u5BB9\u7684\u8303\u672C\u6837\u5F0F\u3002
  <span class="token parameter variable">-E</span> \u5C06\u8303\u672C\u6837\u5F0F\u4E3A\u5EF6\u4F38\u7684\u666E\u901A\u8868\u793A\u6CD5\u6765\u4F7F\u7528\uFF0C\u610F\u5473\u7740\u4F7F\u7528\u80FD\u4F7F\u7528\u6269\u5C55\u6B63\u5219\u8868\u8FBE\u5F0F\u3002
  -f<span class="token operator">&lt;</span>\u8303\u672C\u6587\u4EF6<span class="token operator">&gt;</span> \u6307\u5B9A\u8303\u672C\u6587\u4EF6\uFF0C\u5176\u5185\u5BB9\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u8303\u672C\u6837\u5F0F\uFF0C\u8BA9grep\u67E5\u627E\u7B26\u5408\u8303\u672C\u6761\u4EF6\u7684\u6587\u4EF6\u5185\u5BB9\uFF0C\u683C\u5F0F\u4E3A\u6BCF\u4E00\u5217\u7684\u8303\u672C\u6837\u5F0F\u3002
  <span class="token parameter variable">-F</span> \u5C06\u8303\u672C\u6837\u5F0F\u89C6\u4E3A\u56FA\u5B9A\u5B57\u7B26\u4E32\u7684\u5217\u8868\u3002
  <span class="token parameter variable">-G</span> \u5C06\u8303\u672C\u6837\u5F0F\u89C6\u4E3A\u666E\u901A\u7684\u8868\u793A\u6CD5\u6765\u4F7F\u7528\u3002
  <span class="token parameter variable">-h</span> \u5728\u663E\u793A\u7B26\u5408\u8303\u672C\u6837\u5F0F\u7684\u90A3\u4E00\u5217\u4E4B\u524D\uFF0C\u4E0D\u6807\u793A\u8BE5\u5217\u6240\u5C5E\u7684\u6587\u4EF6\u540D\u79F0\u3002
  <span class="token parameter variable">-H</span> \u5728\u663E\u793A\u7B26\u5408\u8303\u672C\u6837\u5F0F\u7684\u90A3\u4E00\u5217\u4E4B\u524D\uFF0C\u6807\u793A\u8BE5\u5217\u7684\u6587\u4EF6\u540D\u79F0\u3002
  <span class="token parameter variable">-i</span> \u5FFD\u7565\u5B57\u7B26\u5927\u5C0F\u5199\u7684\u5DEE\u522B\u3002
  <span class="token parameter variable">-l</span> \u5217\u51FA\u6587\u4EF6\u5185\u5BB9\u7B26\u5408\u6307\u5B9A\u7684\u8303\u672C\u6837\u5F0F\u7684\u6587\u4EF6\u540D\u79F0\u3002
  <span class="token parameter variable">-L</span> \u5217\u51FA\u6587\u4EF6\u5185\u5BB9\u4E0D\u7B26\u5408\u6307\u5B9A\u7684\u8303\u672C\u6837\u5F0F\u7684\u6587\u4EF6\u540D\u79F0\u3002
  <span class="token parameter variable">-n</span> \u5728\u663E\u793A\u7B26\u5408\u8303\u672C\u6837\u5F0F\u7684\u90A3\u4E00\u5217\u4E4B\u524D\uFF0C\u6807\u793A\u51FA\u8BE5\u5217\u7684\u7F16\u53F7\u3002
  <span class="token parameter variable">-q</span> \u4E0D\u663E\u793A\u4EFB\u4F55\u4FE1\u606F\u3002
  -R/-r \u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201C-d recurse\u201D\u53C2\u6570\u76F8\u540C\u3002
  <span class="token parameter variable">-s</span> \u4E0D\u663E\u793A\u9519\u8BEF\u4FE1\u606F\u3002
  <span class="token parameter variable">-v</span> \u53CD\u8F6C\u67E5\u627E\u3002
  <span class="token parameter variable">-w</span> \u53EA\u663E\u793A\u5168\u5B57\u7B26\u5408\u7684\u5217\u3002
  <span class="token parameter variable">-x</span> \u53EA\u663E\u793A\u5168\u5217\u7B26\u5408\u7684\u5217\u3002
  <span class="token parameter variable">-y</span> \u6B64\u53C2\u6570\u6548\u679C\u8DDF\u201C-i\u201D\u76F8\u540C\u3002
  <span class="token parameter variable">-o</span> \u53EA\u8F93\u51FA\u6587\u4EF6\u4E2D\u5339\u914D\u5230\u7684\u90E8\u5206\u3002
\u5B9E\u4F8B\uFF1A
	\u5E38\u89C1\u7528\u6CD5\uFF1A
	//\u5728\u6587\u4EF6\u641C\u7D22\uFF0C\u8FD4\u56DE\u7B26\u5408\u7684\u6587\u672C\u884C
	<span class="token comment"># grep match_pattern file_name</span>
	<span class="token comment"># grep &quot;match_pattern&quot; file_name</span>
	//\u5728\u591A\u4E2A\u6587\u4EF6\u4E2D\u67E5\u627E
	<span class="token comment"># grep &quot;match_pattern&quot; file_1 file_2</span>
	// \u6807\u8BB0\u5339\u914D\u6F14\u793A
	<span class="token comment"># grep &quot;match_pattern&quot; file_name --color=auto</span>
	// \u5728/etc/passwd\u4E2D\u67E5\u627Eroot
	<span class="token comment"># grep root /etc/passwd</span>
	// \u5728\u591A\u4E2A\u6587\u4EF6\u4E2D\u67E5\u627E\u6A21\u5F0F
	<span class="token comment"># grep root /etc/passwd /etc/shadow</span>
	// \u4F7F\u7528-l\u53C2\u6570\u5217\u51FA\u884C\u53F7\u6307\u5B9A\u6A21\u5F0F\u7684\u6587\u4EF6\u540D
	<span class="token comment"># grep -l root /etc/passwd /etc/shadow</span>
	// \u4F7F\u7528-\u4F60\u53C2\u6570\uFF0C\u5728\u6587\u4EF6\u4E2D\u67E5\u627E\u6A21\u5F0F\u5E76\u663E\u793A\u5339\u914D\u884C\u7684\u884C\u53F7
	<span class="token comment"># grep -n root /etc/passwd</span>
	// \u4F7F\u7528-v\u53C2\u6570\u8F93\u51FA\u4E0D\u5305\u542B\u6307\u5B9A\u6A21\u5F0F\u7684\u884C
	<span class="token comment"># grep -v root /etc/passwd</span>
	//\u4F7F\u7528^\u67E5\u627E\u5F00\u5934\u7684\u884C\u53F7
	<span class="token comment"># grep ^root /etc/passwd</span>
	//\u4F7F\u7528$\u67E5\u627E\u7ED3\u5C3E\u7684\u884C
	<span class="token comment"># grep root$ /etc/passwd</span>
	//\u4F7F\u7528-r\u5728\u6307\u5B9A\u76EE\u5F55\u4E0B\u9012\u5F52\u67E5\u627E\u6307\u5B9A\u6A21\u5F0F
	<span class="token comment"># grep -r root /etc/</span>
	// \u4F7F\u7528-i\u53C2\u6570\u5FFD\u7565\u5927\u5C0F\u5199
	<span class="token comment"># grep -i root /etc/passwd</span>
	// \u4F7F\u7528-e\u53C2\u6570\u67E5\u627E\u591A\u4E2A\u6A21\u5F0F
	<span class="token comment"># grep -e &quot;root&quot; -e &quot;toor&quot; /etc/passwd</span>
	// \u4F7F\u7528-f\u7528\u6307\u5B9A\u7684\u6A21\u5F0F\u6587\u4EF6\u67E5\u627E
	<span class="token comment"># grep -f grep_pattern.file /etc/passwd</span>
	// \u4F7F\u7528-c\u53C2\u6570\u8BA1\u7B97\u6A21\u5F0F\u5339\u914D\u5230\u7684\u6570\u91CF
	<span class="token comment"># grep -c root /etc/passwd</span>
	// \u8F93\u51FA\u5339\u914D\u6307\u5B9A\u6A21\u5F0F\u884C\u7684\u524DN\u884C
	<span class="token comment"># grep -B 4 &quot;root&quot; /etc/passwd</span>
	// \u8F93\u51FA\u5339\u914D\u884C\u540E\u7684\u540EN\u884C
	<span class="token comment"># grep -A 4 &quot;root&quot; /etc/passwd</span>
	// \u8F93\u51FA\u5339\u914D\u884C\u7684\u524D\u540E\u54044\u884C
	<span class="token comment"># grep -C 4 &quot;root&quot; /etc/passwd</span>
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#####awk</p><p>awk\u662F\u4E00\u4E2A\u5F3A\u5927\u7684\u6587\u672C\u5206\u6790\u5DE5\u5177\uFF0C\u76F8\u5BF9\u4E8Egrep\u7684\u67E5\u627E\uFF0Csed\u7684\u7F16\u8F91\uFF0Cawk\u5728\u5BF9\u6570\u636E\u5206\u6790\u7EDF\u8BA1\u65B9\u9762\u5C24\u4E3A\u5F3A\u5927\u3002\u5176\u5DE5\u4F5C\u539F\u7406\u7B80\u5355\u7684\u6765\u8BF4\u5C31\u662F\u5427\u6587\u4EF6\u9010\u884C\u7684\u8BFB\u5165\uFF0C\u4EE5\u7A7A\u683C\u4E3A\u9ED8\u8BA4\u7684\u5206\u5272\u7B26\u6BCF\u884C\u5207\u7247\uFF0C\u5207\u5F00\u7684\u6B65\u4F10\u518D\u8FDB\u884C\u5404\u79CD\u5206\u6790\u5904\u7406\u3002awk\u67093\u4E2A\u4E0D\u540C\u7684\u7248\u672C\uFF0Cawk\u3001nawk\u548Cgawk\uFF0C\u672A\u7279\u522B\u8BF4\u4E00\u822C\u6307gawk\u3002awk\u5DE5\u4F5C\u6D41\u7A0B\u662F\u8FD9\u6837\u7684\uFF1A\u5148\u6267\u884CBEGING\uFF0C\u7136\u540E\u8BFB\u53D6\u6587\u4EF6\uFF0C\u8BFB\u5165\u6709/n\u6362\u884C\u7B26\u5206\u5272\u7684\u4E00\u6761\u8BB0\u5F55\uFF0C\u7136\u540E\u5C06\u8BB0\u5F55\u6309\u6307\u5B9A\u7684\u57DF\u5206\u9694\u7B26\u5212\u5206\u57DF\uFF0C\u586B\u5145\u57DF\uFF0C$0\u5219\u8868\u793A\u6240\u6709\u57DF,$1\u8868\u793A\u7B2C\u4E00\u4E2A\u57DF,$n\u8868\u793A\u7B2Cn\u4E2A\u57DF,\u968F\u540E\u5F00\u59CB\u6267\u884C\u6A21\u5F0F\u6240\u5BF9\u5E94\u7684\u52A8\u4F5Caction\u3002\u63A5\u7740\u5F00\u59CB\u8BFB\u5165\u7B2C\u4E8C\u6761\u8BB0\u5F55\xB7\xB7\xB7\xB7\xB7\xB7\u76F4\u5230\u6240\u6709\u7684\u8BB0\u5F55\u90FD\u8BFB\u5B8C\uFF0C\u6700\u540E\u6267\u884CEND\u64CD\u4F5C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage:
	<span class="token function">awk</span> <span class="token punctuation">[</span>-F field-separator<span class="token punctuation">]</span> <span class="token string">&#39;commands&#39;</span> intput-files
	<span class="token function">awk</span> <span class="token parameter variable">-f</span> awk-script-file input-files
\u6A21\u5F0F:
	awk\u7684\u6A21\u5F0F\u53EF\u4EE5\u662F\u4EE5\u4E0B\u4EFB\u610F\u4E00\u4E2A
	/\u6B63\u5219\u8868\u8FBE\u5F0F/:	\u4F7F\u7528\u901A\u914D\u7B26\u7684\u6269\u5C55\u96C6
	\u5173\u7CFB\u8868\u8FBE\u5F0F:		\u4F7F\u7528\u8FD0\u7B97\u7B26\u8FDB\u884C\u64CD\u4F5C\u3001\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u6216\u6570\u5B57\u7684\u6BD4\u8F83\u6D4B\u8BD5
	\u6A21\u5F0F\u5339\u914D\u8868\u8FBE\u5F0F:	\u7528\u8FD0\u7B97\u7B26~<span class="token punctuation">(</span>\u5339\u914D<span class="token punctuation">)</span> \u548C~<span class="token operator">!</span><span class="token punctuation">(</span>\u4E0D\u5339\u914D<span class="token punctuation">)</span>
awk\u811A\u672C\u7684\u57FA\u672C\u7ED3\u6784
	\u4E00\u4E2Aawk\u811A\u672C\u901A\u5E38\u7531\uFF1ABEGIN\u8BED\u53E5\u5757\u3001pattern\u8BED\u53E5\u5757\u3001END\u8BED\u53E5\u5757 \u8FD93\u90E8\u5206\u6784\u6210\uFF0C\u8FD9\u4E09\u90E8\u5206\u662F\u53EF\u9009\u7684\uFF0C
	\u4EFB\u610F\u4E00\u90E8\u5206\u90FD\u53EF\u4EE5\u4E0D\u51FA\u73B0\u5728\u811A\u672C\u4E2D\uFF0C\u811A\u672C\u901A\u5E38\u662F\u88AB\u5355\u5F15\u53F7\u6216\u53CC\u5F15\u53F7\u5305\u8D77\u6765\uFF1A
	<span class="token function">awk</span> <span class="token string">&#39;BEGIN{ print &quot;start&quot; } pattern{ command} NED{ print &quot;end&quot; }&#39;</span> <span class="token function">file</span>
	<span class="token function">awk</span> <span class="token string">&#39;BEGIN{ i=0 } { i++ } END { print i }&#39;</span> <span class="token function">file</span>
	<span class="token function">awk</span> <span class="token string">&quot;BEGIN{ i=0 } { i++ } END { print i}&quot;</span> <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4E0A\u63CF\u8FF0\u4E86awk\u811A\u672C\u7684\u57FA\u672C\u7ED3\u6784\uFF0C\u4E0B\u8F7D\u8BF4\u8BF4awk\u7684\u5DE5\u4F5C\u539F\u7406\uFF0C\u5982\u4E0A\u6240\u793A\u5148\u6267\u884CBEGIN\u8BED\u53E5\u5757\uFF0C\u5728\u6267\u884Cpattern\u8BED\u53E5\uFF0C\u6700\u540E\u6267\u884CEND\u8BED\u53E5\u5757\uFF0C\u8BE6\u7EC6\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><ul><li>\u7B2C\u4E00\u6B65\uFF1A\u6267\u884C<code>BEGIN{ commands }</code>\u8BED\u53E5\u5757\u4E2D\u7684\u8BED\u53E5\uFF1B</li><li>\u7B2C\u4E8C\u6B65\uFF1A\u4ECE\u6587\u4EF6\u6216\u6807\u51C6\u8F93\u5165(stdin)\u8BFB\u53D6\u4E00\u884C\uFF0C\u7136\u540E\u6267\u884C<code>pattern{ commands }</code>\u8BED\u53E5\u5757\uFF0C\u5B83\u9010\u884C\u626B\u63CF\u6587\u4EF6\uFF0C\u4ECE\u7B2C\u4E00\u884C\u5230\u6700\u540E\u4E00\u884C\u91CD\u590D\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u76F4\u5230\u6587\u4EF6\u5168\u90E8\u88AB\u8BFB\u53D6\u5B8C\u6BD5\u3002</li><li>\u7B2C\u4E09\u6B65\uFF1A\u5F53\u8BFB\u81F3\u8F93\u5165\u6D41\u672B\u5C3E\u65F6\uFF0C\u6267\u884C<code>END{ commands }</code>\u8BED\u53E5\u5757\u3002</li></ul><p>\u53E6\u5916awk\u5185\u7F6E\u4E86\u4E00\u4E9B\u53D8\u91CF\uFF0C\u53EF\u4EE5\u65B9\u5F6A\u7684\u5728\u8BED\u53E5\u5757\u4E2D\u4F7F\u7528,\u8FD9\u4E9B\u53D8\u91CF\u6709\u548C\u5185\u7F6E\u7684\u5B57\u7B26\u51FD\u6570:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$n \u5F53\u524D\u8BB0\u5F55\u7684\u7B2Cn\u4E2A\u5B57\u6BB5\uFF0C\u6BD4\u5982n\u4E3A1\u8868\u793A\u7B2C\u4E00\u4E2A\u5B57\u6BB5\uFF0Cn\u4E3A2\u8868\u793A\u7B2C\u4E8C\u4E2A\u5B57\u6BB5\u3002 
$0 \u8FD9\u4E2A\u53D8\u91CF\u5305\u542B\u6267\u884C\u8FC7\u7A0B\u4E2D\u5F53\u524D\u884C\u7684\u6587\u672C\u5185\u5BB9\u3002
[N] ARGC \u547D\u4EE4\u884C\u53C2\u6570\u7684\u6570\u76EE\u3002
[G] ARGIND \u547D\u4EE4\u884C\u4E2D\u5F53\u524D\u6587\u4EF6\u7684\u4F4D\u7F6E\uFF08\u4ECE0\u5F00\u59CB\u7B97\uFF09\u3002
[N] ARGV \u5305\u542B\u547D\u4EE4\u884C\u53C2\u6570\u7684\u6570\u7EC4\u3002
[G] CONVFMT \u6570\u5B57\u8F6C\u6362\u683C\u5F0F\uFF08\u9ED8\u8BA4\u503C\u4E3A%.6g\uFF09\u3002
[P] ENVIRON \u73AF\u5883\u53D8\u91CF\u5173\u8054\u6570\u7EC4\u3002
[N] ERRNO \u6700\u540E\u4E00\u4E2A\u7CFB\u7EDF\u9519\u8BEF\u7684\u63CF\u8FF0\u3002
[G] FIELDWIDTHS \u5B57\u6BB5\u5BBD\u5EA6\u5217\u8868\uFF08\u7528\u7A7A\u683C\u952E\u5206\u9694\uFF09\u3002
[A] FILENAME \u5F53\u524D\u8F93\u5165\u6587\u4EF6\u7684\u540D\u3002
[P] FNR \u540CNR\uFF0C\u4F46\u76F8\u5BF9\u4E8E\u5F53\u524D\u6587\u4EF6\u3002
[A] FS \u5B57\u6BB5\u5206\u9694\u7B26\uFF08\u9ED8\u8BA4\u662F\u4EFB\u4F55\u7A7A\u683C\uFF09\u3002
[G] IGNORECASE \u5982\u679C\u4E3A\u771F\uFF0C\u5219\u8FDB\u884C\u5FFD\u7565\u5927\u5C0F\u5199\u7684\u5339\u914D\u3002
[A] NF \u8868\u793A\u5B57\u6BB5\u6570\uFF0C\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u5BF9\u5E94\u4E8E\u5F53\u524D\u7684\u5B57\u6BB5\u6570\u3002
[A] NR \u8868\u793A\u8BB0\u5F55\u6570\uFF0C\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u5BF9\u5E94\u4E8E\u5F53\u524D\u7684\u884C\u53F7\u3002
[A] OFMT \u6570\u5B57\u7684\u8F93\u51FA\u683C\u5F0F\uFF08\u9ED8\u8BA4\u503C\u662F%.6g\uFF09\u3002
[A] OFS \u8F93\u51FA\u5B57\u6BB5\u5206\u9694\u7B26\uFF08\u9ED8\u8BA4\u503C\u662F\u4E00\u4E2A\u7A7A\u683C\uFF09\u3002
[A] ORS \u8F93\u51FA\u8BB0\u5F55\u5206\u9694\u7B26\uFF08\u9ED8\u8BA4\u503C\u662F\u4E00\u4E2A\u6362\u884C\u7B26\uFF09\u3002
[A] RS \u8BB0\u5F55\u5206\u9694\u7B26\uFF08\u9ED8\u8BA4\u662F\u4E00\u4E2A\u6362\u884C\u7B26\uFF09\u3002
[N] RSTART \u7531match\u51FD\u6570\u6240\u5339\u914D\u7684\u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u4F4D\u7F6E\u3002
[N] RLENGTH \u7531match\u51FD\u6570\u6240\u5339\u914D\u7684\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u3002
[N] SUBSEP \u6570\u7EC4\u4E0B\u6807\u5206\u9694\u7B26\uFF08\u9ED8\u8BA4\u503C\u662F34\uFF09\u3002

\u5B57\u7B26\u51FD\u6570://Ere\u90FD\u662F\u53EF\u4EE5\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F

gsub( Ere, Repl, [ In ] )	\u9664\u4E86\u6B63\u5219\u8868\u8FBE\u5F0F\u6240\u6709\u5177\u4F53\u503C\u88AB\u66FF\u4EE3\u8FD9\u70B9\uFF0C\u5B83\u548C sub \u51FD\u6570\u5B8C\u5168\u4E00\u6837\u5730\u6267\u884C\u3002
sub( Ere, Repl, [ In ] )	\u7528 Repl \u53C2\u6570\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\u66FF\u6362 In \u53C2\u6570\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\u4E2D\u7684\u7531 Ere \u53C2\u6570\u6307\u5B9A\u7684\u6269\u5C55\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u7B2C\u4E00\u4E2A\u5177\u4F53\u503C\u3002sub \u51FD\u6570\u8FD4\u56DE\u66FF\u6362\u7684\u6570\u91CF\u3002\u51FA\u73B0\u5728 Repl \u53C2\u6570\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\u4E2D\u7684 &amp;\uFF08\u548C\u7B26\u53F7\uFF09\u7531 In \u53C2\u6570\u6307\u5B9A\u7684\u4E0E Ere \u53C2\u6570\u7684\u6307\u5B9A\u7684\u6269\u5C55\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u7684\u5B57\u7B26\u4E32\u66FF\u6362\u3002\u5982\u679C\u672A\u6307\u5B9A In \u53C2\u6570\uFF0C\u7F3A\u7701\u503C\u662F\u6574\u4E2A\u8BB0\u5F55\uFF08$0 \u8BB0\u5F55\u53D8\u91CF\uFF09\u3002
index( String1, String2 )	\u5728\u7531 String1 \u53C2\u6570\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\uFF08\u5176\u4E2D\u6709\u51FA\u73B0 String2 \u6307\u5B9A\u7684\u53C2\u6570\uFF09\u4E2D\uFF0C\u8FD4\u56DE\u4F4D\u7F6E\uFF0C\u4ECE 1 \u5F00\u59CB\u7F16\u53F7\u3002\u5982\u679C String2 \u53C2\u6570\u4E0D\u5728 String1 \u53C2\u6570\u4E2D\u51FA\u73B0\uFF0C\u5219\u8FD4\u56DE 0\uFF08\u96F6\uFF09\u3002
length [(String)]	\u8FD4\u56DE String \u53C2\u6570\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF08\u5B57\u7B26\u5F62\u5F0F\uFF09\u3002\u5982\u679C\u672A\u7ED9\u51FA String \u53C2\u6570\uFF0C\u5219\u8FD4\u56DE\u6574\u4E2A\u8BB0\u5F55\u7684\u957F\u5EA6\uFF08$0 \u8BB0\u5F55\u53D8\u91CF\uFF09\u3002
blength [(String)]	\u8FD4\u56DE String \u53C2\u6570\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF08\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF09\u3002\u5982\u679C\u672A\u7ED9\u51FA String \u53C2\u6570\uFF0C\u5219\u8FD4\u56DE\u6574\u4E2A\u8BB0\u5F55\u7684\u957F\u5EA6\uFF08$0 \u8BB0\u5F55\u53D8\u91CF\uFF09\u3002
substr( String, M, [ N ] )	\u8FD4\u56DE\u5177\u6709 N \u53C2\u6570\u6307\u5B9A\u7684\u5B57\u7B26\u6570\u91CF\u5B50\u4E32\u3002\u5B50\u4E32\u4ECE String \u53C2\u6570\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\u53D6\u5F97\uFF0C\u5176\u5B57\u7B26\u4EE5 M \u53C2\u6570\u6307\u5B9A\u7684\u4F4D\u7F6E\u5F00\u59CB\u3002M \u53C2\u6570\u6307\u5B9A\u4E3A\u5C06 String \u53C2\u6570\u4E2D\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4F5C\u4E3A\u7F16\u53F7 1\u3002\u5982\u679C\u672A\u6307\u5B9A N \u53C2\u6570\uFF0C\u5219\u5B50\u4E32\u7684\u957F\u5EA6\u5C06\u662F M \u53C2\u6570\u6307\u5B9A\u7684\u4F4D\u7F6E\u5230 String \u53C2\u6570\u7684\u672B\u5C3E \u7684\u957F\u5EA6\u3002
match( String, Ere )	\u5728 String \u53C2\u6570\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\uFF08Ere \u53C2\u6570\u6307\u5B9A\u7684\u6269\u5C55\u6B63\u5219\u8868\u8FBE\u5F0F\u51FA\u73B0\u5728\u5176\u4E2D\uFF09\u4E2D\u8FD4\u56DE\u4F4D\u7F6E\uFF08\u5B57\u7B26\u5F62\u5F0F\uFF09\uFF0C\u4ECE 1 \u5F00\u59CB\u7F16\u53F7\uFF0C\u6216\u5982\u679C Ere \u53C2\u6570\u4E0D\u51FA\u73B0\uFF0C\u5219\u8FD4\u56DE 0\uFF08\u96F6\uFF09\u3002RSTART \u7279\u6B8A\u53D8\u91CF\u8BBE\u7F6E\u4E3A\u8FD4\u56DE\u503C\u3002RLENGTH \u7279\u6B8A\u53D8\u91CF\u8BBE\u7F6E\u4E3A\u5339\u914D\u7684\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u6216\u5982\u679C\u672A\u627E\u5230\u4EFB\u4F55\u5339\u914D\uFF0C\u5219\u8BBE\u7F6E\u4E3A -1\uFF08\u8D1F\u4E00\uFF09\u3002
split( String, A, [Ere] )	\u5C06 String \u53C2\u6570\u6307\u5B9A\u7684\u53C2\u6570\u5206\u5272\u4E3A\u6570\u7EC4\u5143\u7D20 A[1], A[2], . . ., A[n]\uFF0C\u5E76\u8FD4\u56DE n \u53D8\u91CF\u7684\u503C\u3002\u6B64\u5206\u9694\u53EF\u4EE5\u901A\u8FC7 Ere \u53C2\u6570\u6307\u5B9A\u7684\u6269\u5C55\u6B63\u5219\u8868\u8FBE\u5F0F\u8FDB\u884C\uFF0C\u6216\u7528\u5F53\u524D\u5B57\u6BB5\u5206\u9694\u7B26\uFF08FS \u7279\u6B8A\u53D8\u91CF\uFF09\u6765\u8FDB\u884C\uFF08\u5982\u679C\u6CA1\u6709\u7ED9\u51FA Ere \u53C2\u6570\uFF09\u3002\u9664\u975E\u4E0A\u4E0B\u6587\u6307\u660E\u7279\u5B9A\u7684\u5143\u7D20\u8FD8\u5E94\u5177\u6709\u4E00\u4E2A\u6570\u5B57\u503C\uFF0C\u5426\u5219 A \u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u7528\u5B57\u7B26\u4E32\u503C\u6765\u521B\u5EFA\u3002
tolower( String )	\u8FD4\u56DE String \u53C2\u6570\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\uFF0C\u5B57\u7B26\u4E32\u4E2D\u6BCF\u4E2A\u5927\u5199\u5B57\u7B26\u5C06\u66F4\u6539\u4E3A\u5C0F\u5199\u3002\u5927\u5199\u548C\u5C0F\u5199\u7684\u6620\u5C04\u7531\u5F53\u524D\u8BED\u8A00\u73AF\u5883\u7684 LC_CTYPE \u8303\u7574\u5B9A\u4E49\u3002
toupper( String )	\u8FD4\u56DE String \u53C2\u6570\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\uFF0C\u5B57\u7B26\u4E32\u4E2D\u6BCF\u4E2A\u5C0F\u5199\u5B57\u7B26\u5C06\u66F4\u6539\u4E3A\u5927\u5199\u3002\u5927\u5199\u548C\u5C0F\u5199\u7684\u6620\u5C04\u7531\u5F53\u524D\u8BED\u8A00\u73AF\u5883\u7684 LC_CTYPE \u8303\u7574\u5B9A\u4E49\u3002
sprintf(Format, Expr, Expr, . . . )	\u6839\u636E Format \u53C2\u6570\u6307\u5B9A\u7684 printf \u5B50\u4F8B\u7A0B\u683C\u5F0F\u5B57\u7B26\u4E32\u6765\u683C\u5F0F\u5316 Expr \u53C2\u6570\u6307\u5B9A\u7684\u8868\u8FBE\u5F0F\u5E76\u8FD4\u56DE\u6700\u540E\u751F\u6210\u7684\u5B57\u7B26\u4E32\u3002


\u7279\u6B8A\u51FD\u6570\uFF1A
close( Expression )	\u7528\u540C\u4E00\u4E2A\u5E26\u5B57\u7B26\u4E32\u503C\u7684 Expression \u53C2\u6570\u6765\u5173\u95ED\u7531 print \u6216 printf \u8BED\u53E5\u6253\u5F00\u7684\u6216\u8C03\u7528 getline \u51FD\u6570\u6253\u5F00\u7684\u6587\u4EF6\u6216\u7BA1\u9053\u3002\u5982\u679C\u6587\u4EF6\u6216\u7BA1\u9053\u6210\u529F\u5173\u95ED\uFF0C\u5219\u8FD4\u56DE 0\uFF1B\u5176\u5B83\u60C5\u51B5\u4E0B\u8FD4\u56DE\u975E\u96F6\u503C\u3002\u5982\u679C\u6253\u7B97\u5199\u4E00\u4E2A\u6587\u4EF6\uFF0C\u5E76\u7A0D\u540E\u5728\u540C\u4E00\u4E2A\u7A0B\u5E8F\u4E2D\u8BFB\u53D6\u6587\u4EF6\uFF0C\u5219 close \u8BED\u53E5\u662F\u5FC5\u9700\u7684\u3002
system(command )	\u6267\u884C Command \u53C2\u6570\u6307\u5B9A\u7684\u547D\u4EE4\uFF0C\u5E76\u8FD4\u56DE\u9000\u51FA\u72B6\u6001\u3002\u7B49\u540C\u4E8E system \u5B50\u4F8B\u7A0B\u3002
Expression | getline [ Variable ]	\u4ECE\u6765\u81EA Expression \u53C2\u6570\u6307\u5B9A\u7684\u547D\u4EE4\u7684\u8F93\u51FA\u4E2D\u901A\u8FC7\u7BA1\u9053\u4F20\u9001\u7684\u6D41\u4E2D\u8BFB\u53D6\u4E00\u4E2A\u8F93\u5165\u8BB0\u5F55\uFF0C\u5E76\u5C06\u8BE5\u8BB0\u5F55\u7684\u503C\u6307\u5B9A\u7ED9 Variable \u53C2\u6570\u6307\u5B9A\u7684\u53D8\u91CF\u3002\u5982\u679C\u5F53\u524D\u672A\u6253\u5F00\u5C06 Expression \u53C2\u6570\u7684\u503C\u4F5C\u4E3A\u5176\u547D\u4EE4\u540D\u79F0\u7684\u6D41\uFF0C\u5219\u521B\u5EFA\u6D41\u3002\u521B\u5EFA\u7684\u6D41\u7B49\u540C\u4E8E\u8C03\u7528 popen \u5B50\u4F8B\u7A0B\uFF0C\u6B64\u65F6 Command \u53C2\u6570\u53D6 Expression \u53C2\u6570\u7684\u503C\u4E14 Mode \u53C2\u6570\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u662F r \u7684\u503C\u3002\u53EA\u8981\u6D41\u4FDD\u7559\u6253\u5F00\u4E14 Expression \u53C2\u6570\u6C42\u5F97\u540C\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5219\u5BF9 getline \u51FD\u6570\u7684\u6BCF\u6B21\u540E\u7EED\u8C03\u7528\u8BFB\u53D6\u53E6\u4E00\u4E2A\u8BB0\u5F55\u3002\u5982\u679C\u672A\u6307\u5B9A Variable \u53C2\u6570\uFF0C\u5219 $0 \u8BB0\u5F55\u53D8\u91CF\u548C NF \u7279\u6B8A\u53D8\u91CF\u8BBE\u7F6E\u4E3A\u4ECE\u6D41\u8BFB\u53D6\u7684\u8BB0\u5F55\u3002
getline [ Variable ] &lt; Expression	\u4ECE Expression \u53C2\u6570\u6307\u5B9A\u7684\u6587\u4EF6\u8BFB\u53D6\u8F93\u5165\u7684\u4E0B\u4E00\u4E2A\u8BB0\u5F55\uFF0C\u5E76\u5C06 Variable \u53C2\u6570\u6307\u5B9A\u7684\u53D8\u91CF\u8BBE\u7F6E\u4E3A\u8BE5\u8BB0\u5F55\u7684\u503C\u3002\u53EA\u8981\u6D41\u4FDD\u7559\u6253\u5F00\u4E14 Expression \u53C2\u6570\u5BF9\u540C\u4E00\u4E2A\u5B57\u7B26\u4E32\u6C42\u503C\uFF0C\u5219\u5BF9 getline \u51FD\u6570\u7684\u6BCF\u6B21\u540E\u7EED\u8C03\u7528\u8BFB\u53D6\u53E6\u4E00\u4E2A\u8BB0\u5F55\u3002\u5982\u679C\u672A\u6307\u5B9A Variable \u53C2\u6570\uFF0C\u5219 $0 \u8BB0\u5F55\u53D8\u91CF\u548C NF \u7279\u6B8A\u53D8\u91CF\u8BBE\u7F6E\u4E3A\u4ECE\u6D41\u8BFB\u53D6\u7684\u8BB0\u5F55\u3002
getline [ Variable ]	\u5C06 Variable \u53C2\u6570\u6307\u5B9A\u7684\u53D8\u91CF\u8BBE\u7F6E\u4E3A\u4ECE\u5F53\u524D\u8F93\u5165\u6587\u4EF6\u8BFB\u53D6\u7684\u4E0B\u4E00\u4E2A\u8F93\u5165\u8BB0\u5F55\u3002\u5982\u679C\u672A\u6307\u5B9A Variable \u53C2\u6570\uFF0C\u5219 $0 \u8BB0\u5F55\u53D8\u91CF\u8BBE\u7F6E\u4E3A\u8BE5\u8BB0\u5F55\u7684\u503C\uFF0C\u8FD8\u5C06\u8BBE\u7F6E NF\u3001NR \u548C FNR \u7279\u6B8A\u53D8\u91CF\u3002

\u65F6\u95F4\u51FD\u6570:
mktime( YYYY MM dd HH MM ss[ DST])	\u751F\u6210\u65F6\u95F4\u683C\u5F0F
strftime([format [, timestamp]])	\u683C\u5F0F\u5316\u65F6\u95F4\u8F93\u51FA\uFF0C\u5C06\u65F6\u95F4\u6233\u8F6C\u4E3A\u65F6\u95F4\u5B57\u7B26\u4E32
systime()	\u5F97\u5230\u65F6\u95F4\u6233,\u8FD4\u56DE\u4ECE1970\u5E741\u67081\u65E5\u5F00\u59CB\u5230\u5F53\u524D\u65F6\u95F4(\u4E0D\u8BA1\u95F0\u5E74)\u7684\u6574\u79D2\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u4F8B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;A line 1<span class="token entity" title="\\n">\\n</span>B line 2&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;BEGIN { print &quot;start&quot; } { print } END { print &quot;end&quot; }&#39;</span>
start
A line <span class="token number">1</span>
B line <span class="token number">2</span>
end

// \u5982\u4E0A\u8F93\u51FAA\u548CB
$ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;A line 1<span class="token entity" title="\\n">\\n</span>B line 2&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;BEGIN { print &quot;start&quot; } { print $1} END { print &quot;end&quot; }&#39;</span>

//\u4F7F\u7528\u53D8\u91CF
$ <span class="token builtin class-name">echo</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ var1=&quot;v1&quot;; var2=&quot;v2&quot;; var3=&quot;v3&quot;; print var1,var2,var3; }&#39;</span>
v1 v2 v3
$ <span class="token builtin class-name">echo</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ var1=&quot;v1&quot;; var2=&quot;v2&quot;; var3=&quot;v3&quot;; print var1&quot;=&quot;var2&quot;=&quot;var3; }&#39;</span>
<span class="token assign-left variable">v1</span><span class="token operator">=</span>v2<span class="token operator">=</span>v3

//\u4F7F\u7528<span class="token variable">$NF</span>\u80FD\u83B7\u53D6\u5230\u6700\u540E\u4E00\u4E2A\u5B57\u6BB5 \u4F7F\u7528<span class="token variable"><span class="token variable">$(</span>NF-1<span class="token variable">)</span></span>\u5C31\u80FD\u83B7\u53D6\u5012\u6570\u7B2C\u4E8C\u4E2A\u5B57\u6BB5
$ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;line1 f2 f3<span class="token entity" title="\\n">\\n</span> line2 f4 f5&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $NF}&#39;</span>
f3
f5
//\u6253\u5370\u6BCF\u4E00\u884C\u7684\u7B2C\u4E8C\u548C\u7B2C\u4E09\u4E2A\u5B57\u6BB5
$ <span class="token function">awk</span> <span class="token string">&#39;{ print $2,$3} &#39;</span> filename
//\u7EDF\u8BA1\u6587\u4EF6\u4E2D\u7684\u884C\u6570
$ <span class="token function">awk</span> <span class="token string">&#39;END{ print NR }&#39;</span> filename

// \u6BCF\u4E00\u884C\u4E2D\u7B2C\u4E00\u4E2A\u5B57\u6BB5\u7684\u503C\u7D2F\u52A0
$ <span class="token function">seq</span> <span class="token number">5</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;BEGIN{ sum=0; print &quot;\u603B\u548C\uFF1A&quot; } { print $1&quot;+&quot;; sum+=$1 } END{ print &quot;\u7B49\u4E8E&quot;; print sum }&#39;</span>

//\u4F20\u9012\u5916\u90E8\u53D8\u91CF
$ <span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token number">1000</span>
$ <span class="token builtin class-name">echo</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">VARIABLE</span><span class="token operator">=</span><span class="token variable">$var</span> <span class="token string">&#39;{ print VARRIABLE }&#39;</span>


//\u8FD0\u7B97\u7B26
//+ -	\u52A0\uFF0C\u51CF
//* / <span class="token operator">&amp;</span>	\u4E58\uFF0C\u9664\u4E0E\u6C42\u4F59
//+ - <span class="token operator">!</span>	\u4E00\u5143\u52A0\uFF0C\u51CF\u548C\u903B\u8F91\u975E
//^ ***	\u6C42\u5E42
//++ --	\u589E\u52A0\u6216\u51CF\u5C11\uFF0C\u4F5C\u4E3A\u524D\u7F00\u6216\u540E\u7F00
//<span class="token operator">=</span> <span class="token operator">+=</span> -<span class="token operator">=</span> *<span class="token operator">=</span> /<span class="token operator">=</span> %<span class="token operator">=</span> ^<span class="token operator">=</span> **<span class="token operator">=</span>	\u8D4B\u503C\u8BED\u53E5
// <span class="token operator">||</span> <span class="token operator">&amp;&amp;</span> \u6216 \u4E0E
// <span class="token operator">&lt;</span> <span class="token operator">&lt;=</span> <span class="token operator">&gt;</span> <span class="token operator">&gt;=</span> <span class="token operator">!=</span> <span class="token operator">==</span>	\u5173\u7CFB\u8FD0\u7B97\u7B26
//$	\u5B57\u6BB5\u5F15\u7528
//\u7A7A\u683C	\u5B57\u7B26\u4E32\u8FDE\u63A5\u7B26
//?:	\u6761\u4EF6\u8868\u8FBE\u5F0F<span class="token punctuation">(</span>\u4E09\u76EE\u8FD0\u7B97\u7B26<span class="token punctuation">)</span>
//in	\u6570\u7EC4\u4E2D\u662F\u5426\u5B58\u5728\u67D0\u952E\u503C
$ <span class="token function">awk</span> <span class="token string">&#39;BEGIN{a=&quot;b&quot;;print a++,++a;}&#39;</span>
$ <span class="token function">awk</span> <span class="token string">&#39;BEGIN{a=1;b=2;print (a&gt;5 &amp;&amp; b&lt;=2),(a&gt;5 || b&lt;=2);}&#39;</span>
$ <span class="token function">awk</span> <span class="token string">&#39;BEGIN{a=11;if(a &gt;= 9){print &quot;ok&quot;;}}&#39;</span>
$ <span class="token function">awk</span> <span class="token string">&#39;BEGIN{a=&quot;b&quot;;print a==&quot;b&quot;?&quot;ok&quot;:&quot;err&quot;;}&#39;</span>
$ <span class="token function">awk</span> <span class="token string">&#39;BEGIN{a=&quot;b&quot;;arr[0]=&quot;b&quot;;arr[1]=&quot;c&quot;;print (a in arr);}&#39;</span>

// \u6B63\u5219\u8FD0\u7B97\u7B26
//~ ~\uFF01 \u5339\u914D\u6216\u4E0D\u5339\u914D
$ <span class="token function">awk</span> <span class="token string">&#39;BEGIN{a=&quot;100testa&quot;;if(a ~ /^100*/){print &quot;ok&quot;;}}&#39;</span>

//next\u8BED\u6CD5 awk\u4E2Dnext\u8BED\u53E5\u4F7F\u7528\uFF1A\u5728\u5FAA\u73AF\u9010\u884C\u5339\u914D\uFF0C\u5982\u679C\u9047\u5230next\uFF0C\u5C31\u4F1A\u8DF3\u8FC7\u5F53\u524D\u884C\uFF0C\u76F4\u63A5\u5FFD\u7565\u4E0B\u9762\u8BED\u53E5
// \u53EA\u5BF9\u53CC\u6570\u884C\u8FDB\u884C\u5904\u7406
$ <span class="token function">awk</span> <span class="token string">&#39;NR%2==1{next}{print NR,$0;}&#39;</span> file_name
// \u8DF3\u8FC7web\u5F00\u5934\u7684\u884C \u7136\u540E\u5C06\u9700\u8981\u5185\u5BB9\u4E0E\u4E0B\u9762\u7684\u884C\u5408\u5E76\u4E3A\u4E00\u884C
$ <span class="token function">awk</span> <span class="token string">&#39;/^web/{T=$0;next;}{print T&quot;:t&quot;$0;}&#39;</span> test.txt

// \u8F93\u51FA\u5230\u6587\u4EF6
$ <span class="token builtin class-name">echo</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{printf(&quot;hello word!n&quot;) &gt; &quot;datafile&quot;}&#39;</span>
$ <span class="token builtin class-name">echo</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{printf(&quot;hello word!n&quot;) &gt;&gt; &quot;datafile&quot;}&#39;</span>

//\u8BBE\u5B9A\u5206\u754C\u7B26<span class="token punctuation">(</span>\u9ED8\u8BA4\u662F\u7A7A\u683C<span class="token punctuation">)</span>
$ <span class="token function">awk</span> -F: <span class="token string">&#39;{ print $NF }&#39;</span> /etc/passwd
$ <span class="token function">awk</span> <span class="token string">&#39;BEGIN{ FS=&quot;:&quot; } { print $NF }&#39;</span> /etc/passwd

// if-else
$ <span class="token function">awk</span> <span class="token string">&#39;BEGIN{
test=100;
if(test&gt;90){
  print &quot;very good&quot;;
  }
  else if(test&gt;60){
    print &quot;good&quot;;
  }
  else{
    print &quot;no pass&quot;;
  }
 }&#39;</span>
 
 // <span class="token keyword">while</span>
 $ <span class="token function">awk</span> <span class="token string">&#39;BEGIN{
  test=100;
  total=0;
  while(i&lt;=test){
    total+=i;
    i++;
  }
  print total;
  }&#39;</span>
  
  // for\u5FAA\u73AF
  <span class="token variable">$awk</span> <span class="token string">&#39;BEGIN{
  for(k in ENVIRON){
    print k&quot;=&quot;ENVIRON[k];
  }
  }&#39;</span>
  
  //\u6570\u7EC4
  Array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;sun&quot;</span>
  Array<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;kai&quot;</span>
  Array<span class="token punctuation">[</span><span class="token string">&quot;first&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www&quot;</span>
  Array<span class="token punctuation">[</span><span class="token string">&quot;last&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;name&quot;</span>
  Array<span class="token punctuation">[</span><span class="token string">&quot;birth&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;1987&quot;</span>
  
  $ <span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">array</span><span class="token operator">=</span><span class="token variable">$Array</span> <span class="token string">&#39;{ for(item in array) {print array[item]}; }&#39;</span>
  $ <span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">array</span><span class="token operator">=</span><span class="token variable">$Array</span> <span class="token string">&#39;{ for(i=1;i&lt;=len;i++) {print array[i]}; }&#39;</span>
  
  //\u5B57\u7B26\u4E32\u5185\u7F6E\u51FD\u6570
  //gsub,sub
  $ <span class="token function">awk</span> <span class="token string">&#39;BEGIN{info=&quot;this is a test2010test!&quot;;gsub(/[0-9]+/,&quot;!&quot;,info);print info}&#39;</span>
	this is a test<span class="token operator">!</span>test<span class="token operator">!</span>
  // \u67E5\u627E\u5B57\u7B26\u4E32
  $ <span class="token function">awk</span> <span class="token string">&#39;BEGIN{info=&quot;this is a test2010test!&quot;;print index(info,&quot;test&quot;)?&quot;ok&quot;:&quot;no found&quot;;}&#39;</span>
  // \u6B63\u5219\u8868\u793Amatch\u4F7F\u7528
  $ <span class="token function">awk</span> <span class="token string">&#39;BEGIN{info=&quot;this is a test2010test!&quot;;print match(info,/[0-9]+/)?&quot;ok&quot;:&quot;no found&quot;;}&#39;</span>
  // \u5B57\u7B26\u4E32\u622A\u53D6
  $ <span class="token function">awk</span> <span class="token string">&#39;BEGIN{info=&quot;this is a test2010test!&quot;;print substr(info,4,10);}&#39;</span>
  // \u5B57\u7B26\u4E32\u5206\u5272
  $ <span class="token function">awk</span> <span class="token string">&#39;BEGIN{info=&quot;this is a test&quot;;split(info,tA,&quot; &quot;);print length(tA);for(k in tA){print k,tA[k];}}&#39;</span>
  
  // \u6253\u5F00\u548C\u5173\u95ED\u5916\u90E8\u6587\u4EF6
  $ <span class="token function">awk</span> <span class="token string">&#39;BEGIN{while(&quot;cat /etc/passwd&quot;|getline){print $0;};close(&quot;/etc/passwd&quot;);}&#39;</span>
  
  //\u6C42\u65F6\u95F4\u5DEE
  $ <span class="token function">awk</span> <span class="token string">&#39;BEGIN{tstamp1=mktime(&quot;2014 01 03 12 13 14&quot;);tstamp2=systime();print tstamp2-tstamp1;}&#39;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="sed" tabindex="-1"><a class="header-anchor" href="#sed" aria-hidden="true">#</a> sed</h5><p>sed\u662Fstream editor for filtering and transforming text\u7684\u7B80\u79F0\uFF0C\u7B80\u5355\u7684\u8BF4\u5C31sed\u5C31\u662F\u4E00\u4E2A\u6D41\u7F16\u8F91\u5668\uFF0C\u5B83\u80FD\u914D\u5408\u6B63\u5219\u8868\u8FBE\u5F0F\u5B8C\u6210\u6279\u91CF\u81EA\u52A8\u5316\u7684\u6587\u4EF6\u7F16\u8F91\u3002\u5904\u7406\u65F6\u628A\u5F53\u524D\u884C\u7F13\u5B58\u8D77\u6765\uFF0C\u7136\u540E\u5BF9\u7F13\u5B58\u8FDB\u884C\u5904\u7406\uFF0C\u5C06\u5904\u7406\u7ED3\u679C\u8F93\u51FA\u7684\u5C4F\u5E55\u4E0A\uFF0C\u7136\u540E\u63A5\u7740\u5904\u7406\u4E0B\u4E00\u884C\uFF0C\u8FD9\u6837\u4E0D\u65AD\u91CD\u590D\u76F4\u81F3\u6587\u4EF6\u672B\u5C3E\u3002\u6587\u4EF6\u7684\u5185\u5BB9\u5E76\u4E0D\u4F1A\u6539\u53D8\uFF0C\u9664\u975E\u624B\u52A8\u91CD\u5B9A\u5411\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage:
	<span class="token function">sed</span> <span class="token punctuation">[</span>option<span class="token punctuation">]</span> <span class="token string">&#39;command&#39;</span> files
	<span class="token function">sed</span> <span class="token punctuation">[</span>option<span class="token punctuation">]</span> <span class="token parameter variable">-f</span> script_file files
\u9009\u9879\uFF1A
  -e<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\u6216--expression<span class="token operator">=</span><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\uFF1A\u4EE5\u9009\u9879\u4E2D\u7684\u6307\u5B9A\u7684script\u6765\u5904\u7406\u8F93\u5165\u7684\u6587\u672C\u6587\u4EF6\uFF1B
  -f<span class="token operator">&lt;</span>script\u6587\u4EF6<span class="token operator">&gt;</span>\u6216--file<span class="token operator">=</span><span class="token operator">&lt;</span>script\u6587\u4EF6<span class="token operator">&gt;</span>\uFF1A\u4EE5\u9009\u9879\u4E2D\u6307\u5B9A\u7684script\u6587\u4EF6\u6765\u5904\u7406\u8F93\u5165\u7684\u6587\u672C\u6587\u4EF6\uFF1B
  -h\u6216--help\uFF1A\u663E\u793A\u5E2E\u52A9\uFF1B
  -n\u6216--quiet\u6216\u2014\u2014silent\uFF1A\u4EC5\u663E\u793Ascript\u5904\u7406\u540E\u7684\u7ED3\u679C\uFF1B
  -V\u6216--version\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002
command\uFF1A
  a<span class="token punctuation">\\</span> \u5728\u5F53\u524D\u884C\u4E0B\u9762\u63D2\u5165\u6587\u672C\u3002
  i<span class="token punctuation">\\</span> \u5728\u5F53\u524D\u884C\u4E0A\u9762\u63D2\u5165\u6587\u672C\u3002
  c<span class="token punctuation">\\</span> \u628A\u9009\u5B9A\u7684\u884C\u6539\u4E3A\u65B0\u7684\u6587\u672C\u3002
  d \u5220\u9664\uFF0C\u5220\u9664\u9009\u62E9\u7684\u884C\u3002
  D \u5220\u9664\u6A21\u677F\u5757\u7684\u7B2C\u4E00\u884C\u3002
  s \u66FF\u6362\u6307\u5B9A\u5B57\u7B26
  h \u62F7\u8D1D\u6A21\u677F\u5757\u7684\u5185\u5BB9\u5230\u5185\u5B58\u4E2D\u7684\u7F13\u51B2\u533A\u3002
  H \u8FFD\u52A0\u6A21\u677F\u5757\u7684\u5185\u5BB9\u5230\u5185\u5B58\u4E2D\u7684\u7F13\u51B2\u533A\u3002
  g \u83B7\u5F97\u5185\u5B58\u7F13\u51B2\u533A\u7684\u5185\u5BB9\uFF0C\u5E76\u66FF\u4EE3\u5F53\u524D\u6A21\u677F\u5757\u4E2D\u7684\u6587\u672C\u3002
  G \u83B7\u5F97\u5185\u5B58\u7F13\u51B2\u533A\u7684\u5185\u5BB9\uFF0C\u5E76\u8FFD\u52A0\u5230\u5F53\u524D\u6A21\u677F\u5757\u6587\u672C\u7684\u540E\u9762\u3002
  l \u5217\u8868\u4E0D\u80FD\u6253\u5370\u5B57\u7B26\u7684\u6E05\u5355\u3002
  n \u8BFB\u53D6\u4E0B\u4E00\u4E2A\u8F93\u5165\u884C\uFF0C\u7528\u4E0B\u4E00\u4E2A\u547D\u4EE4\u5904\u7406\u65B0\u7684\u884C\u800C\u4E0D\u662F\u7528\u7B2C\u4E00\u4E2A\u547D\u4EE4\u3002
  N \u8FFD\u52A0\u4E0B\u4E00\u4E2A\u8F93\u5165\u884C\u5230\u6A21\u677F\u5757\u540E\u9762\u5E76\u5728\u4E8C\u8005\u95F4\u5D4C\u5165\u4E00\u4E2A\u65B0\u884C\uFF0C\u6539\u53D8\u5F53\u524D\u884C\u53F7\u7801\u3002
  p \u6253\u5370\u6A21\u677F\u5757\u7684\u884C\u3002
  P<span class="token punctuation">(</span>\u5927\u5199<span class="token punctuation">)</span> \u6253\u5370\u6A21\u677F\u5757\u7684\u7B2C\u4E00\u884C\u3002
  q \u9000\u51FASed\u3002
  b lable \u5206\u652F\u5230\u811A\u672C\u4E2D\u5E26\u6709\u6807\u8BB0\u7684\u5730\u65B9\uFF0C\u5982\u679C\u5206\u652F\u4E0D\u5B58\u5728\u5219\u5206\u652F\u5230\u811A\u672C\u7684\u672B\u5C3E\u3002
  r <span class="token function">file</span> \u4ECEfile\u4E2D\u8BFB\u884C\u3002
  t label if\u5206\u652F\uFF0C\u4ECE\u6700\u540E\u4E00\u884C\u5F00\u59CB\uFF0C\u6761\u4EF6\u4E00\u65E6\u6EE1\u8DB3\u6216\u8005T\uFF0Ct\u547D\u4EE4\uFF0C\u5C06\u5BFC\u81F4\u5206\u652F\u5230\u5E26\u6709\u6807\u53F7\u7684\u547D\u4EE4\u5904\uFF0C\u6216\u8005\u5230\u811A\u672C\u7684\u672B\u5C3E\u3002
  T label \u9519\u8BEF\u5206\u652F\uFF0C\u4ECE\u6700\u540E\u4E00\u884C\u5F00\u59CB\uFF0C\u4E00\u65E6\u53D1\u751F\u9519\u8BEF\u6216\u8005T\uFF0Ct\u547D\u4EE4\uFF0C\u5C06\u5BFC\u81F4\u5206\u652F\u5230\u5E26\u6709\u6807\u53F7\u7684\u547D\u4EE4\u5904\uFF0C\u6216\u8005\u5230\u811A\u672C\u7684\u672B\u5C3E\u3002
  w <span class="token function">file</span> \u5199\u5E76\u8FFD\u52A0\u6A21\u677F\u5757\u5230file\u672B\u5C3E\u3002  
  W <span class="token function">file</span> \u5199\u5E76\u8FFD\u52A0\u6A21\u677F\u5757\u7684\u7B2C\u4E00\u884C\u5230file\u672B\u5C3E\u3002  
  <span class="token operator">!</span> \u8868\u793A\u540E\u9762\u7684\u547D\u4EE4\u5BF9\u6240\u6709\u6CA1\u6709\u88AB\u9009\u5B9A\u7684\u884C\u53D1\u751F\u4F5C\u7528\u3002  
  <span class="token operator">=</span> \u6253\u5370\u5F53\u524D\u884C\u53F7\u7801\u3002  
  <span class="token comment"># \u628A\u6CE8\u91CA\u6269\u5C55\u5230\u4E0B\u4E00\u4E2A\u6362\u884C\u7B26\u4EE5\u524D\u3002</span>
  
<span class="token function">sed</span> \u66FF\u6362\u6807\u8BB0
	g	\u8868\u793A\u884C\u5185\u5168\u9762\u66FF\u6362
	p	\u8868\u793A\u6253\u5370\u884C
	w	\u8868\u793A\u5427\u884C\u5199\u5165\u4E00\u4E2A\u6587\u4EF6
	x	\u8868\u793A\u4E92\u6362\u6A21\u5757\u4E2D\u7684\u6587\u672C\u548C\u7F13\u51B2\u533A\u4E2D\u7684\u6587\u672C
	y 	\u8868\u793A\u5427\u4E00\u4E2A\u5B57\u7B26\u7FFB\u8BD1\u4E3A\u53E6\u5916\u7684\u5B57\u7B26<span class="token punctuation">(</span>\u4F46\u4E0D\u9002\u7528\u6B63\u5219\u8868\u8FBE\u5F0F<span class="token punctuation">)</span>
	<span class="token punctuation">\\</span><span class="token number">1</span>	\u5B50\u4E32\u6807\u8BB0
	<span class="token operator">&amp;</span>	\u5DF2\u5339\u914D\u5B57\u7B26\u4E32\u6BD4\u8F83
	
<span class="token function">sed</span> \u5143\u5B57\u7B26\u96C6
    ^ \u5339\u914D\u884C\u5F00\u59CB\uFF0C\u5982\uFF1A/^sed/\u5339\u914D\u6240\u6709\u4EE5sed\u5F00\u5934\u7684\u884C\u3002
    $ \u5339\u914D\u884C\u7ED3\u675F\uFF0C\u5982\uFF1A/sed$/\u5339\u914D\u6240\u6709\u4EE5sed\u7ED3\u5C3E\u7684\u884C\u3002
    <span class="token builtin class-name">.</span> \u5339\u914D\u4E00\u4E2A\u975E\u6362\u884C\u7B26\u7684\u4EFB\u610F\u5B57\u7B26\uFF0C\u5982\uFF1A/s.d/\u5339\u914Ds\u540E\u63A5\u4E00\u4E2A\u4EFB\u610F\u5B57\u7B26\uFF0C\u6700\u540E\u662Fd\u3002
    * \u5339\u914D0\u4E2A\u6216\u591A\u4E2A\u5B57\u7B26\uFF0C\u5982\uFF1A/*sed/\u5339\u914D\u6240\u6709\u6A21\u677F\u662F\u4E00\u4E2A\u6216\u591A\u4E2A\u7A7A\u683C\u540E\u7D27\u8DDFsed\u7684\u884C\u3002
    <span class="token punctuation">[</span><span class="token punctuation">]</span> \u5339\u914D\u4E00\u4E2A\u6307\u5B9A\u8303\u56F4\u5185\u7684\u5B57\u7B26\uFF0C\u5982/<span class="token punctuation">[</span>ss<span class="token punctuation">]</span>ed/\u5339\u914Dsed\u548CSed\u3002  
    <span class="token punctuation">[</span>^<span class="token punctuation">]</span> \u5339\u914D\u4E00\u4E2A\u4E0D\u5728\u6307\u5B9A\u8303\u56F4\u5185\u7684\u5B57\u7B26\uFF0C\u5982\uFF1A/<span class="token punctuation">[</span>^A-RT-Z<span class="token punctuation">]</span>ed/\u5339\u914D\u4E0D\u5305\u542BA-R\u548CT-Z\u7684\u4E00\u4E2A\u5B57\u6BCD\u5F00\u5934\uFF0C\u7D27\u8DDFed\u7684\u884C\u3002
    <span class="token punctuation">\\</span><span class="token punctuation">(</span><span class="token punctuation">..</span><span class="token punctuation">\\</span><span class="token punctuation">)</span> \u5339\u914D\u5B50\u4E32\uFF0C\u4FDD\u5B58\u5339\u914D\u7684\u5B57\u7B26\uFF0C\u5982s/<span class="token punctuation">\\</span><span class="token punctuation">(</span>love<span class="token punctuation">\\</span><span class="token punctuation">)</span>able/<span class="token punctuation">\\</span>1rs\uFF0Cloveable\u88AB\u66FF\u6362\u6210lovers\u3002
    <span class="token operator">&amp;</span> \u4FDD\u5B58\u641C\u7D22\u5B57\u7B26\u7528\u6765\u66FF\u6362\u5176\u4ED6\u5B57\u7B26\uFF0C\u5982s/love/**<span class="token operator">&amp;</span>**/\uFF0Clove\u8FD9\u6210**love**\u3002
    <span class="token punctuation">\\</span><span class="token operator">&lt;</span> \u5339\u914D\u5355\u8BCD\u7684\u5F00\u59CB\uFF0C\u5982:/<span class="token punctuation">\\</span><span class="token operator">&lt;</span>love/\u5339\u914D\u5305\u542B\u4EE5love\u5F00\u5934\u7684\u5355\u8BCD\u7684\u884C\u3002
    <span class="token punctuation">\\</span><span class="token operator">&gt;</span> \u5339\u914D\u5355\u8BCD\u7684\u7ED3\u675F\uFF0C\u5982/love<span class="token punctuation">\\</span><span class="token operator">&gt;</span>/\u5339\u914D\u5305\u542B\u4EE5love\u7ED3\u5C3E\u7684\u5355\u8BCD\u7684\u884C\u3002
    x<span class="token punctuation">\\</span><span class="token punctuation">{</span>m<span class="token punctuation">\\</span><span class="token punctuation">}</span> \u91CD\u590D\u5B57\u7B26x\uFF0Cm\u6B21\uFF0C\u5982\uFF1A/0<span class="token punctuation">\\</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">\\</span><span class="token punctuation">}</span>/\u5339\u914D\u5305\u542B5\u4E2A0\u7684\u884C\u3002
    x<span class="token punctuation">\\</span><span class="token punctuation">{</span>m,<span class="token punctuation">\\</span><span class="token punctuation">}</span> \u91CD\u590D\u5B57\u7B26x\uFF0C\u81F3\u5C11m\u6B21\uFF0C\u5982\uFF1A/0<span class="token punctuation">\\</span><span class="token punctuation">{</span><span class="token number">5</span>,<span class="token punctuation">\\</span><span class="token punctuation">}</span>/\u5339\u914D\u81F3\u5C11\u67095\u4E2A0\u7684\u884C\u3002
    x<span class="token punctuation">\\</span><span class="token punctuation">{</span>m,n<span class="token punctuation">\\</span><span class="token punctuation">}</span> \u91CD\u590D\u5B57\u7B26x\uFF0C\u81F3\u5C11m\u6B21\uFF0C\u4E0D\u591A\u4E8En\u6B21\uFF0C\u5982\uFF1A/0<span class="token punctuation">\\</span><span class="token punctuation">{</span><span class="token number">5,10</span><span class="token punctuation">\\</span><span class="token punctuation">}</span>/\u5339\u914D5~10\u4E2A0\u7684\u884C\u3002
    
 \u5B9E\u4F8B\uFF1A
 	// \u5C06book\u66FF\u6362\u4E3Abooks
 	$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;book xx friends&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/book/books/&#39;</span>
 	books xx friends
 	
 	// \u5C06\u6587\u4EF6\u4E2D\u7B2C\u4E00\u4E2Ao\u66FF\u6362\u4E3A\u5927\u5199\u7684O
 	$ <span class="token function">sed</span> <span class="token string">&#39;s/o/O/&#39;</span> sort.txt
 	// \u5C06\u6BCF\u884C\u4E2Do\u66FF\u6362\u4E3AO
 	$ <span class="token function">sed</span> <span class="token string">&#39;s/o/O/g&#39;</span> sort.txt
 	// \u76F4\u63A5\u7F16\u8F91\u6E90\u6587\u4EF6
 	$ <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/o/O/g&#39;</span> sed.txt
 	// \u5C06\u6BCF\u884C\u4E2D\u7684\u6BCF\u7B2C\u4E8C\u4E2Ao\u66FF\u6362\u4E3A\u5927\u5199\u7684O
 	$ <span class="token function">sed</span> <span class="token string">&#39;s/o/O/2g&#39;</span> sed.txt
 	
 	//\u9ED8\u8BA4\u7684\u754C\u5B9A\u7B26\u4E3A/\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4EFB\u610F\u7684\u754C\u5B9A\u7B26
 	$ <span class="token function">sed</span> <span class="token string">&#39;s:o:O:&#39;</span> sed.txt
 	//\u66FF\u6362\u5B9A\u4E49\u670D\u4F60
 	$ <span class="token function">sed</span> <span class="token string">&#39;s:o:\\:0:&#39;</span> sed.txt
 	
 	//\u5220\u9664\u64CD\u4F5C
 	//\u5220\u9664\u7A7A\u767D\u884C
 	$ <span class="token function">sed</span> <span class="token string">&#39;/^$/d&#39;</span> sed.txt
 	//\u5220\u9664\u6587\u4EF6\u7684\u7B2C\u4E8C\u884C
 	$ <span class="token function">sed</span> <span class="token string">&#39;2d&#39;</span> sed.txt
 	//\u5220\u9664\u6587\u4EF6\u7684\u7B2C2\u884C\u5230\u672B\u5C3E\u7684\u6240\u6709\u884C
 	$ <span class="token function">sed</span> <span class="token string">&#39;2,$d&#39;</span> sed.txt
 	//\u5220\u9664\u6587\u4EF6\u7684\u6700\u540E\u4E00\u884C
 	$ <span class="token function">sed</span> <span class="token string">&#39;$d&#39;</span> sed.txt
 	// \u5220\u9664\u6587\u4EF6\u4E2D\u6240\u6709\u5F00\u5934\u662Ftest\u7684\u884C
 	$ <span class="token function">sed</span> <span class="token string">&#39;/^test/d&#39;</span> file.txt
 	// \u5220\u9664\u6587\u4EF6\u4E2D\u7684\u7A7A\u884C\u548C\u4EE5test\u5F00\u5934\u7684\u884C
 	$ <span class="token function">sed</span> <span class="token string">&#39;/^g/d;/^$/d&#39;</span> sed.txt
 	
 	//\u5DF2\u5339\u914D\u7684\u5B57\u7B26\u4E32\u6807\u8BB0<span class="token operator">&amp;</span>
 	//\u5C06google\u4E2Doo\u7528p\u6807\u7B7E\u6807\u8BB0\u8D77\u6765
 	$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;google&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/o\\+/&lt;p&gt;&amp;&lt;\\/p&gt;/g&#39;</span>
 	//\u5C06\u6240\u4EE5\u4EE5192.168.0.\u5F00\u5934\u7684\u884C\u90FD\u66FF\u6362\u4E3A\u52A0\u4E0A-localhost
 	$ <span class="token function">sed</span> <span class="token string">&#39;s/^/192.168.0/&amp;-localhost/&#39;</span> sed.txt
 	
 	//\u5C06\u4EE5go\u5F00\u5934\u7684\u8BCD\u66FF\u6362\u4E3AGo\u5F00\u5934
 	$ <span class="token function">sed</span> <span class="token string">&#39;s/\\&lt;go/Go/g&#39;</span> sed.txt
 	//\u5C06\u81F3\u5C112\u4E2A00\u8FDE\u7EED\u7684\u6570\u5B57\u66FF\u6362\u4E3AXX
 	$ <span class="token function">sed</span> <span class="token string">&#39;s/0\\{2,\\}/XX/g&#39;</span> sed.txt
 	
 	//\u4F7F\u7528\u53D8\u91CF
 	$ <span class="token assign-left variable">test</span><span class="token operator">=</span>hello
 	$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&quot;s/<span class="token variable">$test</span>/Hello/&quot;</span>
  
  	// \u5B50\u4E32\u6807\u8BB0
	$ <span class="token builtin class-name">echo</span> aaa BBB <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/\\([a-z]\\+\\) \\([A-Z]\\+\\)/\\2 \\1/&#39;</span>
	
	
	// \u9009\u5B9A\u884C\u7684\u8303\u56F4
	//\u6253\u5370\u6A21\u677Ftest\u548Ccheck\u6240\u786E\u5B9A\u7684\u8303\u56F4\u5185\u7684\u884C
	$ <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/test/,/check/p&#39;</span> <span class="token function">file</span>
	// \u4ECE\u7B2C5\u884C\u5F00\u59CB\u5230\u9047\u5230\u4EE5test\u5F00\u5934\u7684\u884C\u4E4B\u524D\u7684\u6240\u6709\u884C
	$ <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;5,/^test/p&#39;</span> <span class="token function">file</span>
	// \u6253\u5370\u4EE5g\u5F00\u5934\u7684\u884C\u5230\u4E0B\u4E00\u4E2Ag\u5F00\u5934\u884C\u4E4B\u524D\u7684\u6240\u6709\u884C
	$ <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/^g/,/^g/p&#39;</span> sort.txt
	// \u4EE5g\u5F00\u5934\u7684\u884C\u5230\u4E0B\u4E00\u4E2Ag\u5F00\u5934\u884C\u4E4B\u524D\u7684\u6240\u6709\u884C\u672B\u5C3E\u52A0\u4E0Aaaa bbb\u5E76\u6253\u5370
	$ <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/^g/,/^g/s/$/aaa bbb/p&#39;</span> sort.txt
	
	// \u591A\u70B9\u7F16\u8F91
	// sed\u8868\u8FBE\u5F0F\u7684\u7B2C\u4E00\u6761\u547D\u4EE4\u5220\u96641\u81F35\u884C\uFF0C\u7B2C\u4E8C\u6761\u547D\u4EE4\u7528check\u66FF\u6362test\u3002
	// \u547D\u4EE4\u7684\u6267\u884C\u987A\u5E8F\u5BF9\u7ED3\u679C\u6709\u5F71\u54CD\u3002\u5982\u679C\u4E24\u4E2A\u547D\u4EE4\u90FD\u662F\u66FF\u6362\u547D\u4EE4\uFF0C\u90A3\u4E48\u7B2C\u4E00\u4E2A\u66FF\u6362\u547D\u4EE4\u5C06\u5F71\u54CD\u7B2C\u4E8C\u4E2A\u66FF\u6362\u547D\u4EE4\u7684\u7ED3\u679C\u3002
	$ <span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;1,5d&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/test/check/&#39;</span> <span class="token function">file</span>
	
	// \u6587\u4EF6
	// file\u91CC\u7684\u5185\u5BB9\u88AB\u8BFB\u8FDB\u6765\uFF0C\u663E\u793A\u5728test\u5339\u914D\u7684\u884C\u540E\u9762\uFF0C\u5982\u679C\u5339\u914D\u591A\u884C\uFF0C\u5219file\u7684\u5185\u5BB9\u663E\u793A\u5728\u6240\u6709\u5339\u914D\u884C\u540E\u9762
	$ <span class="token function">sed</span> <span class="token string">&#39;/test/r file&#39;</span> <span class="token function">file</span>
	// \u5728file\u4E2D\u6240\u6709\u5305\u542Btest\u7684\u884C\u90FD\u88AB\u5199\u5165f\u91CC\u9762
	$ <span class="token function">sed</span> <span class="token string">&#39;/test/w f&#39;</span> <span class="token function">file</span>
	
	//\u5947\u5076\u884C
	$ <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;p;n&#39;</span> <span class="token builtin class-name">test</span> //\u5947\u6570\u884C
	$ <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;n;p&#39;</span> <span class="token builtin class-name">test</span> //\u5076\u6570\u884C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vi-vim" tabindex="-1"><a class="header-anchor" href="#vi-vim" aria-hidden="true">#</a> vi/vim</h4><p>vi\u548Cvim\u662F\u547D\u4EE4\u5F62\u5F0F\u4E0B\u7F16\u8F91\u6587\u4EF6\u7684\u6700\u4F73\u9009\u62E9\uFF0C\u5F53\u7136\u8FD8\u6709\u795E\u4E00\u6837\u7684emacs\u3002vi\u7F16\u8F91\u5668\u652F\u6301\u7F16\u8F91\u6A21\u5F0F\u548C\u547D\u4EE4\u6A21\u5F0F\uFF0C\u7F16\u8F91\u6A21\u5F0F\u4E0B\u53EF\u4EE5\u5B8C\u6210\u6587\u672C\u7684\u7F16\u8F91\u529F\u80FD\uFF0C\u547D\u4EE4\u6A21\u5F0F\u4E0B\u53EF\u4EE5\u5B8C\u6210\u5BF9\u6587\u4EF6\u7684\u64CD\u4F5C\u547D\u4EE4\uFF0C\u8981\u6B63\u786E\u4F7F\u7528vi\u7F16\u8F91\u5668\u5C31\u5FC5\u987B\u719F\u7EC3\u638C\u63E1\u7740\u4E24\u79CD\u6A21\u5F0F\u7684\u5207\u6362\u3002</p><p>vi\u6709\u4E00\u4E9B\u5185\u7F6E\u7684\u547D\u4EE4\uFF0C\u4EE5\u201C\uFF1A\u201C\u5F00\u5934\u8F93\u5165</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Ctrl+u\uFF1A\u5411\u6587\u4EF6\u9996\u7FFB\u534A\u5C4F\uFF1B
Ctrl+d\uFF1A\u5411\u6587\u4EF6\u5C3E\u7FFB\u534A\u5C4F\uFF1B
Ctrl+f\uFF1A\u5411\u6587\u4EF6\u5C3E\u7FFB\u4E00\u5C4F\uFF1B
Ctrl+b\uFF1A\u5411\u6587\u4EF6\u9996\u7FFB\u4E00\u5C4F\uFF1B
Esc\uFF1A\u4ECE\u7F16\u8F91\u6A21\u5F0F\u5207\u6362\u5230\u547D\u4EE4\u6A21\u5F0F\uFF1B
ZZ\uFF1A\u547D\u4EE4\u6A21\u5F0F\u4E0B\u4FDD\u5B58\u5F53\u524D\u6587\u4EF6\u6240\u505A\u7684\u4FEE\u6539\u540E\u9000\u51FAvi\uFF1B
:\u884C\u53F7\uFF1A\u5149\u6807\u8DF3\u8F6C\u5230\u6307\u5B9A\u884C\u7684\u884C\u9996\uFF1B
:$\uFF1A\u5149\u6807\u8DF3\u8F6C\u5230\u6700\u540E\u4E00\u884C\u7684\u884C\u9996\uFF1B
x\u6216X\uFF1A\u5220\u9664\u4E00\u4E2A\u5B57\u7B26\uFF0Cx\u5220\u9664\u5149\u6807\u540E\u7684\uFF0C\u800CX\u5220\u9664\u5149\u6807\u524D\u7684\uFF1B
D\uFF1A\u5220\u9664\u4ECE\u5F53\u524D\u5149\u6807\u5230\u5149\u6807\u6240\u5728\u884C\u5C3E\u7684\u5168\u90E8\u5B57\u7B26\uFF1B
dd\uFF1A\u5220\u9664\u5149\u6807\u884C\u6B63\u884C\u5185\u5BB9\uFF1B
ndd\uFF1A\u5220\u9664\u5F53\u524D\u884C\u53CA\u5176\u540En-1\u884C\uFF1B
nyy\uFF1A\u5C06\u5F53\u524D\u884C\u53CA\u5176\u4E0Bn\u884C\u7684\u5185\u5BB9\u4FDD\u5B58\u5230\u5BC4\u5B58\u5668\uFF1F\u4E2D\uFF0C\u5176\u4E2D\uFF1F\u4E3A\u4E00\u4E2A\u5B57\u6BCD\uFF0Cn\u4E3A\u4E00\u4E2A\u6570\u5B57\uFF1B
p\uFF1A\u7C98\u8D34\u6587\u672C\u64CD\u4F5C\uFF0C\u7528\u4E8E\u5C06\u7F13\u5B58\u533A\u7684\u5185\u5BB9\u7C98\u8D34\u5230\u5F53\u524D\u5149\u6807\u6240\u5728\u4F4D\u7F6E\u7684\u4E0B\u65B9\uFF1B
P\uFF1A\u7C98\u8D34\u6587\u672C\u64CD\u4F5C\uFF0C\u7528\u4E8E\u5C06\u7F13\u5B58\u533A\u7684\u5185\u5BB9\u7C98\u8D34\u5230\u5F53\u524D\u5149\u6807\u6240\u5728\u4F4D\u7F6E\u7684\u4E0A\u65B9\uFF1B
/\u5B57\u7B26\u4E32\uFF1A\u6587\u672C\u67E5\u627E\u64CD\u4F5C\uFF0C\u7528\u4E8E\u4ECE\u5F53\u524D\u5149\u6807\u6240\u5728\u4F4D\u7F6E\u5F00\u59CB\u5411\u6587\u4EF6\u5C3E\u90E8\u67E5\u627E\u6307\u5B9A\u5B57\u7B26\u4E32\u7684\u5185\u5BB9\uFF0C\u67E5\u627E\u7684\u5B57\u7B26\u4E32\u4F1A\u88AB\u52A0\u4EAE\u663E\u793A\uFF1B
\uFF1Fname\uFF1A\u6587\u672C\u67E5\u627E\u64CD\u4F5C\uFF0C\u7528\u4E8E\u4ECE\u5F53\u524D\u5149\u6807\u6240\u5728\u4F4D\u7F6E\u5F00\u59CB\u5411\u6587\u4EF6\u5934\u90E8\u67E5\u627E\u6307\u5B9A\u5B57\u7B26\u4E32\u7684\u5185\u5BB9\uFF0C\u67E5\u627E\u7684\u5B57\u7B26\u4E32\u4F1A\u88AB\u52A0\u4EAE\u663E\u793A\uFF1B
a\uFF0Cbs/F/T\uFF1A\u66FF\u6362\u6587\u672C\u64CD\u4F5C\uFF0C\u7528\u4E8E\u5728\u7B2Ca\u884C\u5230\u7B2Cb\u884C\u4E4B\u95F4\uFF0C\u5C06F\u5B57\u7B26\u4E32\u6362\u6210T\u5B57\u7B26\u4E32\u3002\u5176\u4E2D\uFF0C\u201Cs/\u201D\u8868\u793A\u8FDB\u884C\u66FF\u6362\u64CD\u4F5C\uFF1B
a\uFF1A\u5728\u5F53\u524D\u5B57\u7B26\u540E\u6DFB\u52A0\u6587\u672C\uFF1B
A\uFF1A\u5728\u884C\u672B\u6DFB\u52A0\u6587\u672C\uFF1B
i\uFF1A\u5728\u5F53\u524D\u5B57\u7B26\u524D\u63D2\u5165\u6587\u672C\uFF1B
I\uFF1A\u5728\u884C\u9996\u63D2\u5165\u6587\u672C\uFF1B
o\uFF1A\u5728\u5F53\u524D\u884C\u540E\u9762\u63D2\u5165\u4E00\u7A7A\u884C\uFF1B
O\uFF1A\u5728\u5F53\u524D\u884C\u524D\u9762\u63D2\u5165\u4E00\u7A7A\u884C\uFF1B
:wq\uFF1A\u5728\u547D\u4EE4\u6A21\u5F0F\u4E0B\uFF0C\u6267\u884C\u5B58\u76D8\u9000\u51FA\u64CD\u4F5C\uFF1B
:w\uFF1A\u5728\u547D\u4EE4\u6A21\u5F0F\u4E0B\uFF0C\u6267\u884C\u5B58\u76D8\u64CD\u4F5C\uFF1B
:w\uFF01\uFF1A\u5728\u547D\u4EE4\u6A21\u5F0F\u4E0B\uFF0C\u6267\u884C\u5F3A\u5236\u5B58\u76D8\u64CD\u4F5C\uFF1B
:q\uFF1A\u5728\u547D\u4EE4\u6A21\u5F0F\u4E0B\uFF0C\u6267\u884C\u9000\u51FAvi\u64CD\u4F5C\uFF1B
:q\uFF01\uFF1A\u5728\u547D\u4EE4\u6A21\u5F0F\u4E0B\uFF0C\u6267\u884C\u5F3A\u5236\u9000\u51FAvi\u64CD\u4F5C\uFF1B
:e\u6587\u4EF6\u540D\uFF1A\u5728\u547D\u4EE4\u6A21\u5F0F\u4E0B\uFF0C\u6253\u5F00\u5E76\u7F16\u8F91\u6307\u5B9A\u540D\u79F0\u7684\u6587\u4EF6\uFF1B
:n\uFF1A\u5728\u547D\u4EE4\u6A21\u5F0F\u4E0B\uFF0C\u5982\u679C\u540C\u65F6\u6253\u5F00\u591A\u4E2A\u6587\u4EF6\uFF0C\u5219\u7EE7\u7EED\u7F16\u8F91\u4E0B\u4E00\u4E2A\u6587\u4EF6\uFF1B
:f\uFF1A\u5728\u547D\u4EE4\u6A21\u5F0F\u4E0B\uFF0C\u7528\u4E8E\u663E\u793A\u5F53\u524D\u7684\u6587\u4EF6\u540D\u3001\u5149\u6807\u6240\u5728\u884C\u7684\u884C\u53F7\u4EE5\u53CA\u663E\u793A\u6BD4\u4F8B\uFF1B
:set number\uFF1A\u5728\u547D\u4EE4\u6A21\u5F0F\u4E0B\uFF0C\u7528\u4E8E\u5728\u6700\u5DE6\u7AEF\u663E\u793A\u884C\u53F7\uFF1B
:set nonumber\uFF1A\u5728\u547D\u4EE4\u6A21\u5F0F\u4E0B\uFF0C\u7528\u4E8E\u5728\u6700\u5DE6\u7AEF\u4E0D\u663E\u793A\u884C\u53F7\uFF1B


usage: 
	<span class="token function">vi</span> <span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span> <span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
	
\u9009\u9879
    +<span class="token operator">&lt;</span>\u884C\u53F7<span class="token operator">&gt;</span>\uFF1A\u4ECE\u6307\u5B9A\u884C\u53F7\u7684\u884C\u5F00\u59CB\u5148\u662F\u6587\u672C\u5185\u5BB9\uFF1B
    -b\uFF1A\u4EE5\u4E8C\u8FDB\u5236\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6\uFF0C\u7528\u4E8E\u7F16\u8F91\u4E8C\u8FDB\u5236\u6587\u4EF6\u548C\u53EF\u6267\u884C\u6587\u4EF6\uFF1B
    -c<span class="token operator">&lt;</span>\u6307\u4EE4<span class="token operator">&gt;</span>\uFF1A\u5728\u5B8C\u6210\u5BF9\u7B2C\u4E00\u4E2A\u6587\u4EF6\u7F16\u8F91\u4EFB\u52A1\u540E\uFF0C\u6267\u884C\u7ED9\u51FA\u7684\u6307\u4EE4\uFF1B
    -d\uFF1A\u4EE5diff\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6\uFF0C\u5F53\u591A\u4E2A\u6587\u4EF6\u7F16\u8F91\u65F6\uFF0C\u663E\u793A\u6587\u4EF6\u5DEE\u5F02\u90E8\u5206\uFF1B
    -l\uFF1A\u4F7F\u7528lisp\u6A21\u5F0F\uFF0C\u6253\u5F00\u201Clisp\u201D\u548C\u201Cshowmatch\u201D\uFF1B
    -m\uFF1A\u53D6\u6D88\u5199\u6587\u4EF6\u529F\u80FD\uFF0C\u91CD\u8BBE\u201Cwrite\u201D\u9009\u9879\uFF1B
    -M\uFF1A\u5173\u95ED\u4FEE\u6539\u529F\u80FD\uFF1B
    -n\uFF1A\u4E0D\u5B9E\u7528\u7F13\u5B58\u529F\u80FD\uFF1B
    -o<span class="token operator">&lt;</span>\u6587\u4EF6\u6570\u76EE<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u540C\u65F6\u6253\u5F00\u6307\u5B9A\u6570\u76EE\u7684\u6587\u4EF6\uFF1B
    -R\uFF1A\u4EE5\u53EA\u8BFB\u65B9\u5F0F\u6253\u5F00\u6587\u4EF6\uFF1B
    -s\uFF1A\u5B89\u9759\u6A21\u5F0F\uFF0C\u4E0D\u73B0\u5B9E\u6307\u4EE4\u7684\u4EFB\u4F55\u9519\u8BEF\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#####\u6587\u4EF6\u7F16\u7801</p><p>\u5E38\u5E38\u56E0\u4E3A\u4E00\u4E9B\u7F16\u7801\u7684\u95EE\u9898\u5BFC\u81F4\u6587\u4EF6\u5185\u5BB9\u4E71\u7801\u4E0D\u53EF\u8BFB\uFF0C\u5728linu\u60F3\u4E0B\u66F4\u6587\u4EF6\u7F16\u7801\u6709\u5173\u7684\u64CD\u4F5C\u6709\u3002</p><ol><li><p>\u5728vi/vim\u4E2D\u53EF\u4EE5\u67E5\u770B\u548C\u8BBE\u7F6E\u6587\u4EF6\u7F16\u7801</p><p>:set fileencoding</p><p>:set encoding=utf-8</p></li><li><p>\u4F7F\u7528enca\u67E5\u770B\u6587\u4EF6\u7F16\u7801</p><p>$ enca filename</p></li><li><p>iconv\u8F6C\u6362\u6587\u4EF6\u7F16\u7801</p><p>$ iconv -f encoding -t encoding inputfile</p><p>$ iconv -f GBK -t UTF-8 file1 -o file2</p></li><li><p>enconv \u8F6C\u6362\u6587\u4EF6\u7F16\u7801</p><p>$ enconv -L zh_CN -x UTF-8 filename</p></li><li><p>\u6587\u4EF6\u540D\u4E71\u7801</p><p>\u6709\u4E8B\u4ECEwindows\u4E0Bcopy\u5230linux\u7684\u6587\u4EF6\u540D\u53EF\u80FD\u4F1A\u51FA\u73B0\u4E71\u7801\uFF0C\u6B64\u65F6\u53EF\u4EE5\u901A\u8FC7convmv\u547D\u4EE4\u6765\u5B8C\u6210\u8BE5\u64CD\u4F5C\u3002</p></li></ol><h5 id="\u8D85\u5927\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8D85\u5927\u6587\u4EF6" aria-hidden="true">#</a> \u8D85\u5927\u6587\u4EF6</h5><p>\u6709\u4E9B\u8D85\u5927\u7684\u6587\u4EF6\u7528\u5E38\u89C4\u547D\u4EE4\u64CD\u4F5C\uFF0C\u7ECF\u5E38\u4E0D\u5C3D\u4EBA\u610F\uFF0C\u6B64\u65F6\u9700\u8981\u8D85\u5927\u6587\u4EF6\u64CD\u4F5C\u65B9\u6848</p><ol><li><p>vim\u7684largefile\u63D2\u4EF6</p></li><li><p>glolgg \u65E5\u5FD7\u8D44\u6E90\u7BA1\u7406\u5668</p></li><li><p>JOE\u6587\u4EF6\u7F16\u8F91\u5668</p></li><li><p>\u5206\u5272\u64CD\u4F5C</p><p>\u200B</p></li></ol><h4 id="\u6587\u4EF6\u5F52\u6863" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u5F52\u6863" aria-hidden="true">#</a> \u6587\u4EF6\u5F52\u6863</h4><p>\u6240\u8C13\u6587\u4EF6\u5F52\u6863\u65E0\u975E\u5C31\u662F\u6253\u5305\u538B\u7F29\u4E4B\u7C7B\u7684\u3002\u5728linux\u5E38\u7528\u7684\u5F52\u6863\u547D\u4EE4\u6709tar\u7B49\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">### tar</span>
usage:
	<span class="token function">tar</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u53C2\u6570<span class="token punctuation">]</span>
\u9009\u9879:
  -A\u6216--catenate\uFF1A\u65B0\u589E\u6587\u4EF6\u5230\u4EE5\u5B58\u5728\u7684\u5907\u4EFD\u6587\u4EF6\uFF1B
  -B\uFF1A\u8BBE\u7F6E\u533A\u5757\u5927\u5C0F\uFF1B
  -c\u6216--create\uFF1A\u5EFA\u7ACB\u65B0\u7684\u5907\u4EFD\u6587\u4EF6\uFF1B
  <span class="token parameter variable">-C</span> <span class="token operator">&lt;</span>\u76EE\u5F55<span class="token operator">&gt;</span>\uFF1A\u8FD9\u4E2A\u9009\u9879\u7528\u5728\u89E3\u538B\u7F29\uFF0C\u82E5\u8981\u5728\u7279\u5B9A\u76EE\u5F55\u89E3\u538B\u7F29\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u9009\u9879\u3002
  -d\uFF1A\u8BB0\u5F55\u6587\u4EF6\u7684\u5DEE\u522B\uFF1B
  -x\u6216--extract\u6216--get\uFF1A\u4ECE\u5907\u4EFD\u6587\u4EF6\u4E2D\u8FD8\u539F\u6587\u4EF6\uFF1B
  -t\u6216--list\uFF1A\u5217\u51FA\u5907\u4EFD\u6587\u4EF6\u7684\u5185\u5BB9\uFF1B
  -z\u6216--gzip\u6216--ungzip\uFF1A\u901A\u8FC7gzip\u6307\u4EE4\u5904\u7406\u5907\u4EFD\u6587\u4EF6\uFF1B
  -Z\u6216--compress\u6216--uncompress\uFF1A\u901A\u8FC7compress\u6307\u4EE4\u5904\u7406\u5907\u4EFD\u6587\u4EF6\uFF1B
  -f<span class="token operator">&lt;</span>\u5907\u4EFD\u6587\u4EF6<span class="token operator">&gt;</span>\u6216--file<span class="token operator">=</span><span class="token operator">&lt;</span>\u5907\u4EFD\u6587\u4EF6<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u5907\u4EFD\u6587\u4EF6\uFF1B
  -v\u6216--verbose\uFF1A\u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\uFF1B
  -r\uFF1A\u6DFB\u52A0\u6587\u4EF6\u5230\u5DF2\u7ECF\u538B\u7F29\u7684\u6587\u4EF6\uFF1B
  -u\uFF1A\u6DFB\u52A0\u6539\u53D8\u4E86\u548C\u73B0\u6709\u7684\u6587\u4EF6\u5230\u5DF2\u7ECF\u5B58\u5728\u7684\u538B\u7F29\u6587\u4EF6\uFF1B
  -j\uFF1A\u652F\u6301bzip2\u89E3\u538B\u6587\u4EF6\uFF1B
  -v\uFF1A\u663E\u793A\u64CD\u4F5C\u8FC7\u7A0B\uFF1B
  -l\uFF1A\u6587\u4EF6\u7CFB\u7EDF\u8FB9\u754C\u8BBE\u7F6E\uFF1B
  -k\uFF1A\u4FDD\u7559\u539F\u6709\u6587\u4EF6\u4E0D\u8986\u76D6\uFF1B
  -m\uFF1A\u4FDD\u7559\u6587\u4EF6\u4E0D\u88AB\u8986\u76D6\uFF1B
  -w\uFF1A\u786E\u8BA4\u538B\u7F29\u6587\u4EF6\u7684\u6B63\u786E\u6027\uFF1B
  -p\u6216--same-permissions\uFF1A\u7528\u539F\u6765\u7684\u6587\u4EF6\u6743\u9650\u8FD8\u539F\u6587\u4EF6\uFF1B
  -P\u6216--absolute-names\uFF1A\u6587\u4EF6\u540D\u4F7F\u7528\u7EDD\u5BF9\u540D\u79F0\uFF0C\u4E0D\u79FB\u9664\u6587\u4EF6\u540D\u79F0\u524D\u7684\u201C/\u201D\u53F7\uFF1B
  <span class="token parameter variable">-N</span> <span class="token operator">&lt;</span>\u65E5\u671F\u683C\u5F0F<span class="token operator">&gt;</span> \u6216 <span class="token parameter variable">--newer</span><span class="token operator">=</span><span class="token operator">&lt;</span>\u65E5\u671F\u65F6\u95F4<span class="token operator">&gt;</span>\uFF1A\u53EA\u5C06\u8F83\u6307\u5B9A\u65E5\u671F\u66F4\u65B0\u7684\u6587\u4EF6\u4FDD\u5B58\u5230\u5907\u4EFD\u6587\u4EF6\u91CC\uFF1B
  <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token operator">&lt;</span>\u8303\u672C\u6837\u5F0F<span class="token operator">&gt;</span>\uFF1A\u6392\u9664\u7B26\u5408\u8303\u672C\u6837\u5F0F\u7684\u6587\u4EF6\u3002
 \u5B9E\u4F8B\uFF1A
 	//\u4EC5\u4EC5\u6253\u5305\uFF0C\u4E0D\u538B\u7F29
 	$ <span class="token function">tar</span> <span class="token parameter variable">-cvf</span> log.tar  log.txt
 	//\u6253\u5305\u4EE5gzip\u538B\u7F29
 	$ <span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> log.tar.gz log.txt
 	//\u6253\u5305\u4EE5bzip2\u538B\u7F29
 	$ <span class="token function">tar</span> <span class="token parameter variable">-jcvf</span> log.tar.bz2 log.txt
 	// \u67E5\u770B\u538B\u7F29\u5305\u7684\u5185\u5BB9
 	$ <span class="token function">tar</span> <span class="token parameter variable">-ztvf</span> log.tar.gz
 	// \u89E3\u538B\u538B\u7F29\u5305
 	$ <span class="token function">tar</span> <span class="token parameter variable">-zxvg</span> log.tar.gz
 	// \u4FDD\u7559\u539F\u6587\u4EF6\u7684\u5C5E\u6027\u538B\u7F29
 	$ <span class="token function">tar</span> <span class="token parameter variable">-zcvpf</span> log.tar.gz log.txt
 	//
 	$ <span class="token function">tar</span> <span class="token parameter variable">-jxv</span> <span class="token parameter variable">-f</span> log.tar.gz <span class="token parameter variable">-C</span> \u89E3\u538B\u76EE\u5F55
 	
 //zip
 $ <span class="token function">zip</span> file.zip files
 $ <span class="token function">unzip</span> file.zip
 
 // <span class="token function">rar</span>
 $ <span class="token function">rar</span> a filerar <span class="token function">file</span>
 $ <span class="token function">unrar</span> e filerar.rar
 $ <span class="token function">unrar</span> x filerar.rar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function g(f,h){const e=l("ExternalLinkIcon");return t(),p("div",null,[o,n("p",null,[d,v,n("a",u,[m,c(e)]),b]),k])}const q=i(r,[["render",g],["__file","file.html.vue"]]);export{q as default};
