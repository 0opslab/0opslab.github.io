import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const i={},t=e(`<p>\u4EE5\u5E38\u7528\u7684centos\u7CFB\u7EDF\u4E3A\u4F8B\uFF0C\u7CFB\u7EDF\u9ED8\u8BA4\u662F\u5B89\u88C5\u4E86openssh\u7684\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u3002\u5982\u679C\u6CA1\u6709\u5B89\u88C5\u53EF\u4EE5yum\u6216\u8005apt-get\u5927\u6CD5\u5B89\u88C5\u3002\u5B89\u88C5\u5F88\u7B80\u5355\uFF0C \u4F46\u662F\u60F3\u8981\u4F7F\u7528\u597D\u8FD8\u662F\u9700\u8981\u70B9\u65F6\u95F4\u7684\u3002\u4E0B\u9762\u662F\u4E00\u4E9B\u76F8\u5173\u7684\u914D\u7F6E\u6587\u4EF6\u548C\u65E5\u5FD7\u6587\u4EF6\u8BF4\u660E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u670D\u52A1\u5668\u914D\u7F6E\u6587\u4EF6
/etc/ssh/sshd_config

# \u5BA2\u6237\u7AEF\u914D\u7F6E
/etc/ssh/ssh_config

# \u5BA2\u6237\u7AEF\u7528\u6237\u914D\u7F6E
$home/.ssh/config

## \u4E3B\u673A\u5BC6\u94A5\u76F8\u5173\u7684\u6587\u4EF6
/etc/ssh/ssh_host_key:\u4E3B\u673ARSA\u8BA4\u8BC1\u79C1\u94A5\uFF08SSH-1\uFF09
/etc/ssh/ssh_host_key.pub :\u4E3B\u673ARSA\u8BA4\u8BC1\u516C\u94A5(SSH-1)
/etc/ssh/ssh_host_dsa_key:\u4E3B\u673ADSA\u8BA4\u8BC1\u79C1\u94A5\uFF08SSH-2\uFF09
/etc/ssh/ssh_host_dsa_key.pub:\u4E3B\u673ADSA\u8BA4\u8BC1\u516C\u94A5SSH2
/etc/ssh/ssh_host_rsa_key:\u4E3B\u673ARSA\u8BA4\u8BC1\u79C1\u94A5\uFF08SSH-2\uFF09
/etc/ssh/ssh_host_rsa_key.pub:\u4E3B\u673ARSA\u8BA4\u8BC1\u516C\u94A5(SSH-2)
/etc/ssh/ssh_known_host:\u5DF2\u77E5\u7684\u4E3B\u673A\u5BC6\u94A5\u7684\u7CFB\u7EDF\u7EA7\u5217\u8868

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u89E3\u51B3ssh\u94FE\u63A5\u6162" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3ssh\u94FE\u63A5\u6162" aria-hidden="true">#</a> \u89E3\u51B3ssh\u94FE\u63A5\u6162</h3><p>sed -i &#39;s/GSSAPIAuthentication yes/GSSAPIAuthentication no/&#39; /etc/ssh/sshd_config sed -i &#39;/#UseDNS yes/a\\UseDNS no&#39; /etc/ssh/sshd_config /etc/init.d/sshd restart</p><h3 id="\u5BA2\u6237\u7AEF\u547D\u4EE4ssh" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u547D\u4EE4ssh" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF\u547D\u4EE4SSH</h3><p>\u5BA2\u6237\u7AEFSSH\u547D\u4EE4\u53EF\u4EE5\u7528\u6765\u8FDE\u63A5SSH\u670D\u52A1\u7AEF\uFF0C\u5E76\u4E14\u8F7D\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u6267\u884C\u547D\u4EE4\u3002\u4E0B\u9762\u662F\u5BA2\u6237\u7AEFSSH\u547D\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage: <span class="token function">ssh</span> <span class="token punctuation">[</span>-1246AaCfgKkMNnqsTtVvXxYy<span class="token punctuation">]</span> <span class="token punctuation">[</span>-b bind_address<span class="token punctuation">]</span> <span class="token punctuation">[</span>-c cipher_spec<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>-D <span class="token punctuation">[</span>bind_address:<span class="token punctuation">]</span>port<span class="token punctuation">]</span> <span class="token punctuation">[</span>-E log_file<span class="token punctuation">]</span> <span class="token punctuation">[</span>-e escape_char<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>-F configfile<span class="token punctuation">]</span> <span class="token punctuation">[</span>-I pkcs11<span class="token punctuation">]</span> <span class="token punctuation">[</span>-i identity_file<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>-L <span class="token punctuation">[</span>bind_address:<span class="token punctuation">]</span>port:host:hostport<span class="token punctuation">]</span> <span class="token punctuation">[</span>-l login_name<span class="token punctuation">]</span> <span class="token punctuation">[</span>-m mac_spec<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>-O ctl_cmd<span class="token punctuation">]</span> <span class="token punctuation">[</span>-o option<span class="token punctuation">]</span> <span class="token punctuation">[</span>-p port<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>-Q cipher <span class="token operator">|</span> cipher-auth <span class="token operator">|</span> mac <span class="token operator">|</span> kex <span class="token operator">|</span> key<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>-R <span class="token punctuation">[</span>bind_address:<span class="token punctuation">]</span>port:host:hostport<span class="token punctuation">]</span> <span class="token punctuation">[</span>-S ctl_path<span class="token punctuation">]</span> <span class="token punctuation">[</span>-W host:port<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>-w local_tun<span class="token punctuation">[</span>:remote_tun<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>user@<span class="token punctuation">]</span>hostname <span class="token punctuation">[</span>command<span class="token punctuation">]</span>
 <span class="token parameter variable">-a</span>
    \u7981\u6B62\u8F6C\u53D1\u8BA4\u8BC1\u4EE3\u7406\u7684\u8FDE\u63A5.
<span class="token parameter variable">-A</span>
    \u5141\u8BB8\u8F6C\u53D1\u8BA4\u8BC1\u4EE3\u7406\u7684\u8FDE\u63A5. \u53EF\u4EE5\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5BF9\u6BCF\u4E2A\u4E3B\u673A\u5355\u72EC\u8BBE\u5B9A\u8FD9\u4E2A\u53C2\u6570.
    \u4EE3\u7406\u8F6C\u53D1\u987B\u8C28\u614E. \u67D0\u4E9B\u7528\u6237\u80FD\u591F\u5728\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u7ED5\u8FC7\u6587\u4EF6\u8BBF\u95EE\u6743\u9650 <span class="token punctuation">(</span>\u7531\u4E8E\u4EE3\u7406\u7684 UNIX \u57DF socket<span class="token punctuation">)</span>, \u4ED6\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8F6C\u53D1\u7684\u8FDE\u63A5\u8BBF\u95EE
    \u672C\u5730\u4EE3\u7406. \u653B\u51FB\u8005\u4E0D\u53EF\u80FD\u4ECE\u4EE3\u7406\u83B7\u5F97\u5BC6\u94A5\u5185\u5BB9, \u4F46\u662F\u4ED6\u4EEC\u80FD\u591F\u64CD\u4F5C\u8FD9\u4E9B\u5BC6\u94A5, \u5229\u7528\u52A0\u8F7D\u5230\u4EE3\u7406\u4E0A \u7684\u8EAB\u4EFD\u4FE1\u606F\u901A\u8FC7\u8BA4\u8BC1.
<span class="token parameter variable">-b</span> bind_address
    \u5728\u62E5\u6709\u591A\u4E2A\u63A5\u53E3\u6216\u5730\u5740\u522B\u540D\u7684\u673A\u5668\u4E0A, \u6307\u5B9A\u6536\u53D1\u63A5\u53E3.
<span class="token parameter variable">-c</span> blowfish<span class="token operator">|</span>3des<span class="token operator">|</span>des
    \u9009\u62E9\u52A0\u5BC6\u4F1A\u8BDD\u7684\u5BC6\u7801\u672F. 3des \u662F\u9ED8\u8BA4\u7B97\u6CD5. 3des <span class="token punctuation">(</span>triple-des<span class="token punctuation">)</span> \u7528\u4E09\u652F\u4E0D\u540C\u7684\u5BC6\u94A5\u505A\u52A0\u5BC6-\u89E3\u5BC6-\u52A0\u5BC6\u4E09\u6B21\u8FD0\u7B97, \u88AB\u8BA4\u4E3A\u6BD4\u8F83\u53EF\u9760.
    blowfish \u662F\u4E00\u79CD\u5FEB\u901F\u7684\u5206\u7EC4\u52A0\u5BC6\u672F<span class="token punctuation">(</span>block cipher<span class="token punctuation">)</span>, \u975E\u5E38\u5B89\u5168, \u800C\u4E14\u901F\u5EA6\u6BD4 3des \u5FEB\u7684\u591A. des \u4EC5\u652F\u6301 \u5BA2\u6237\u7AEF, \u76EE\u7684\u662F\u80FD\u591F\u548C
    \u8001\u5F0F\u7684\u4E0D\u652F\u6301 3des \u7684\u534F\u8BAE\u7B2C\u4E00\u7248\u4E92\u64CD\u4F5C. \u7531\u4E8E\u5176\u5BC6\u7801\u7B97\u6CD5\u4E0A\u7684\u5F31\u70B9, \u5F3A\u70C8\u5EFA\u8BAE\u907F\u514D\u4F7F\u7528.
    
<span class="token parameter variable">-c</span> cipher_spec
    \u53E6\u5916, \u5BF9\u4E8E\u534F\u8BAE\u7B2C\u4E8C\u7248, \u8FD9\u91CC\u53EF\u4EE5\u6307\u5B9A\u4E00\u7EC4\u7528\u9017\u53F7\u9694\u5F00, \u6309\u4F18\u5148\u987A\u5E8F\u6392\u5217\u7684\u5BC6\u7801\u672F. \u8BE6\u89C1 Ciphers
    
<span class="token parameter variable">-e</span> ch<span class="token operator">|</span>^ch<span class="token operator">|</span>none
    \u8BBE\u7F6E pty \u4F1A\u8BDD\u7684 escape \u5B57\u7B26 <span class="token punctuation">(</span>\u9ED8\u8BA4\u5B57\u7B26: <span class="token variable"><span class="token variable">\`</span>~&#39; <span class="token punctuation">)</span> <span class="token builtin class-name">.</span> escape \u5B57\u7B26\u53EA\u5728\u884C\u9996\u6709\u6548, escape \u5B57\u7B26\u540E\u9762\u8DDF\u4E00\u4E2A\u70B9 <span class="token punctuation">(</span><span class="token variable">\`</span></span>.&#39; <span class="token punctuation">)</span> \u8868\u793A\u7ED3\u675F
    \u8FDE\u63A5, \u8DDF\u4E00\u4E2A control-Z \u8868\u793A\u6302\u8D77\u8FDE\u63A5<span class="token punctuation">(</span>suspend<span class="token punctuation">)</span>, \u8DDF escape \u5B57\u7B26\u81EA\u5DF1 \u8868\u793A\u8F93\u51FA\u8FD9\u4E2A\u5B57\u7B26. \u628A\u8FD9\u4E2A\u5B57\u7B26\u8BBE\u4E3A \`<span class="token variable"><span class="token variable">\`</span>none \u5219\u7981\u6B62
    escape \u529F\u80FD, \u4F7F\u4F1A\u8BDD\u5B8C\u5168\u900F\u660E.

<span class="token parameter variable">-f</span> \u8981\u6C42 \u5728\u6267\u884C\u547D\u4EE4\u524D\u9000\u81F3\u540E\u53F0. \u5B83\u7528\u4E8E\u5F53 \u51C6\u5907\u8BE2\u95EE\u53E3\u4EE4\u6216\u5BC6\u8BED, \u4F46\u662F\u7528\u6237\u5E0C\u671B\u5B83\u5728\u540E\u53F0\u8FDB\u884C. \u8BE5\u9009\u9879\u9690\u542B\u4E86 <span class="token parameter variable">-n</span> \u9009\u9879. \u5728\u8FDC\u7AEF\u673A\u5668
    \u4E0A\u542F\u52A8 X11 \u7A0B\u5E8F\u7684\u63A8\u8350\u624B\u6CD5\u5C31\u662F\u7C7B\u4F3C\u4E8E <span class="token function">ssh</span> <span class="token parameter variable">-f</span> <span class="token function">host</span> xterm \u7684\u547D\u4EE4.
    
<span class="token parameter variable">-g</span> \u5141\u8BB8\u8FDC\u7AEF\u4E3B\u673A\u8FDE\u63A5\u672C\u5730\u8F6C\u53D1\u7684\u7AEF\u53E3.
    
<span class="token parameter variable">-i</span> identity_file \u6307\u5B9A\u4E00\u4E2A RSA \u6216 DSA \u8BA4\u8BC1\u6240\u9700\u7684\u8EAB\u4EFD<span class="token punctuation">(</span>\u79C1\u94A5<span class="token punctuation">)</span>\u6587\u4EF6. \u9ED8\u8BA4\u6587\u4EF6\u662F\u534F\u8BAE\u7B2C\u4E00\u7248\u7684 <span class="token environment constant">$HOME</span>/.ssh/identity \u4EE5\u53CA\u534F\u8BAE\u7B2C\u4E8C\u7248\u7684 
    <span class="token environment constant">$HOME</span>/.ssh/id_rsa \u548C <span class="token environment constant">$HOME</span>/.ssh/id_dsa \u6587\u4EF6. \u4E5F\u53EF\u4EE5\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5BF9\u6BCF\u4E2A\u4E3B\u673A\u5355\u72EC\u6307\u5B9A\u8EAB\u4EFD\u6587\u4EF6. \u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\u591A\u4E2A
     <span class="token parameter variable">-i</span> \u9009\u9879 <span class="token punctuation">(</span>\u4E5F\u53EF\u4EE5\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u6307\u5B9A\u591A\u4E2A\u8EAB\u4EFD\u6587\u4EF6<span class="token punctuation">)</span>.
    
<span class="token parameter variable">-I</span> smartcard_device \u6307\u5B9A\u667A\u80FD\u5361<span class="token punctuation">(</span>smartcard<span class="token punctuation">)</span>\u8BBE\u5907. \u53C2\u6570\u662F\u8BBE\u5907\u6587\u4EF6, \u80FD\u591F\u7528\u5B83\u548C\u667A\u80FD\u5361\u901A\u4FE1, \u667A\u80FD\u5361\u91CC\u9762\u5B58\u50A8\u4E86\u7528\u6237\u7684 RSA \u79C1\u94A5.
    
<span class="token parameter variable">-k</span> \u7981\u6B62\u8F6C\u53D1 Kerberos \u95E8\u7968\u548C AFS \u4EE4\u724C. \u53EF\u4EE5\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5BF9\u6BCF\u4E2A\u4E3B\u673A\u5355\u72EC\u8BBE\u5B9A\u8FD9\u4E2A\u53C2\u6570.
    
<span class="token parameter variable">-l</span> login_name \u6307\u5B9A\u767B\u5F55\u8FDC\u7A0B\u4E3B\u673A\u7684\u7528\u6237. \u53EF\u4EE5\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5BF9\u6BCF\u4E2A\u4E3B\u673A\u5355\u72EC\u8BBE\u5B9A\u8FD9\u4E2A\u53C2\u6570.
    
<span class="token parameter variable">-m</span> mac_spec \u53E6\u5916, \u5BF9\u4E8E\u534F\u8BAE\u7B2C\u4E8C\u7248, \u8FD9\u91CC\u53EF\u4EE5\u6307\u5B9A\u4E00\u7EC4\u7528\u9017\u53F7\u9694\u5F00, \u6309\u4F18\u5148\u987A\u5E8F\u6392\u5217\u7684 MAC<span class="token punctuation">(</span>\u6D88\u606F\u9A8C\u8BC1\u7801<span class="token punctuation">)</span>\u7B97\u6CD5 <span class="token punctuation">(</span>message authentication code<span class="token punctuation">)</span>.
    \u8BE6\u60C5\u4EE5 MACs \u4E3A\u5173\u952E\u5B57\u67E5\u8BE2.
    
<span class="token parameter variable">-n</span> \u628A stdin \u91CD\u5B9A\u5411\u5230 /dev/null <span class="token punctuation">(</span>\u5B9E\u9645\u4E0A\u9632\u6B62\u4ECE stdin \u8BFB\u53D6\u6570\u636E<span class="token punctuation">)</span>. \u5728\u540E\u53F0\u8FD0\u884C\u65F6\u4E00\u5B9A\u4F1A\u7528\u5230\u8FD9\u4E2A\u9009\u9879. \u5B83\u7684\u5E38\u7528\u6280\u5DE7\u662F\u8FDC\u7A0B\u8FD0\u884C
     X11 \u7A0B\u5E8F. \u4F8B\u5982, <span class="token function">ssh</span> <span class="token parameter variable">-n</span> shadows.cs.hut.fi emacs \u5C06\u4F1A\u5728 shadows.cs.hut.fi \u4E0A\u542F\u52A8 emacs, \u540C\u65F6\u81EA\u52A8\u5728\u52A0\u5BC6\u901A\u9053\u4E2D\u8F6C\u53D1
      X11 \u8FDE\u63A5. \u5728\u540E\u53F0\u8FD0\u884C. <span class="token punctuation">(</span>\u4F46\u662F\u5982\u679C \u8981\u6C42\u53E3\u4EE4\u6216\u5BC6\u8BED, \u8FD9\u79CD\u65B9\u5F0F\u5C31\u65E0\u6CD5\u5DE5\u4F5C<span class="token punctuation">;</span> \u53C2\u89C1 <span class="token parameter variable">-f</span> \u9009\u9879.<span class="token punctuation">)</span>
    
<span class="token parameter variable">-N</span> \u4E0D\u6267\u884C\u8FDC\u7A0B\u547D\u4EE4. \u7528\u4E8E\u8F6C\u53D1\u7AEF\u53E3. <span class="token punctuation">(</span>\u4EC5\u9650\u534F\u8BAE\u7B2C\u4E8C\u7248<span class="token punctuation">)</span>
    
<span class="token parameter variable">-o</span> option \u53EF\u4EE5\u5728\u8FD9\u91CC\u7ED9\u51FA\u67D0\u4E9B\u9009\u9879, \u683C\u5F0F\u548C\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u683C\u5F0F\u4E00\u6837. \u5B83\u7528\u6765\u8BBE\u7F6E\u90A3\u4E9B\u6CA1\u6709\u547D\u4EE4\u884C\u5F00\u5173\u7684\u9009\u9879.
    
<span class="token parameter variable">-p</span> port \u6307\u5B9A\u8FDC\u7A0B\u4E3B\u673A\u7684\u7AEF\u53E3. \u53EF\u4EE5\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5BF9\u6BCF\u4E2A\u4E3B\u673A\u5355\u72EC\u8BBE\u5B9A\u8FD9\u4E2A\u53C2\u6570.
    
<span class="token parameter variable">-q</span> \u5B89\u9759\u6A21\u5F0F. \u6D88\u9664\u6240\u6709\u7684\u8B66\u544A\u548C\u8BCA\u65AD\u4FE1\u606F.
    
<span class="token parameter variable">-s</span> \u8BF7\u6C42\u8FDC\u7A0B\u7CFB\u7EDF\u6FC0\u6D3B\u4E00\u4E2A\u5B50\u7CFB\u7EDF. \u5B50\u7CFB\u7EDF\u662F SSH2 \u534F\u8BAE\u7684\u4E00\u4E2A\u7279\u6027, \u80FD\u591F\u534F\u52A9 \u5176\u4ED6\u5E94\u7528\u7A0B\u5E8F<span class="token punctuation">(</span>\u5982 <span class="token function">sftp</span><span class="token punctuation">)</span>\u628ASSH\u7528\u505A\u5B89\u5168\u901A\u8DEF.
    \u5B50\u7CFB\u7EDF\u901A\u8FC7\u8FDC\u7A0B\u547D\u4EE4\u6307\u5B9A.
    
<span class="token parameter variable">-t</span> \u5F3A\u5236\u5206\u914D\u4F2A\u7EC8\u7AEF. \u53EF\u4EE5\u5728\u8FDC\u7A0B\u673A\u5668\u4E0A\u6267\u884C\u4EFB\u4F55\u5168\u5C4F\u5E55<span class="token punctuation">(</span>screen-based<span class="token punctuation">)</span>\u7A0B\u5E8F, \u6240\u4EE5\u975E\u5E38\u6709\u7528, \u4F8B\u5982\u83DC\u5355\u670D\u52A1. \u5E76\u8054\u7684 <span class="token parameter variable">-t</span>
    \u9009\u9879\u5F3A\u5236\u5206\u914D\u7EC8\u7AEF, \u5373\u4F7F \u6CA1\u6709\u672C\u5730\u7EC8\u7AEF.
    
<span class="token parameter variable">-T</span> \u7981\u6B62\u5206\u914D\u4F2A\u7EC8\u7AEF.
    
<span class="token parameter variable">-v</span> \u5197\u8BE6\u6A21\u5F0F. \u4F7F \u6253\u5370\u5173\u4E8E\u8FD0\u884C\u60C5\u51B5\u7684\u8C03\u8BD5\u4FE1\u606F. \u5728\u8C03\u8BD5\u8FDE\u63A5, \u8BA4\u8BC1\u548C\u914D\u7F6E\u95EE\u9898\u65F6\u975E\u5E38\u6709\u7528. \u5E76\u8054\u7684 <span class="token parameter variable">-v</span> \u9009\u9879\u80FD\u591F\u589E\u52A0\u5197\u8BE6\u7A0B\u5EA6.
    \u6700\u591A\u4E3A\u4E09\u4E2A.
    
<span class="token parameter variable">-x</span> \u7981\u6B62 X11 \u8F6C\u53D1.
<span class="token parameter variable">-X</span>
    \u5141\u8BB8 X11 \u8F6C\u53D1. \u53EF\u4EE5\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5BF9\u6BCF\u4E2A\u4E3B\u673A\u5355\u72EC\u8BBE\u5B9A\u8FD9\u4E2A\u53C2\u6570.
    \u5E94\u8BE5\u8C28\u614E\u4F7F\u7528 X11 \u8F6C\u53D1. \u5982\u679C\u7528\u6237\u5728\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u80FD\u591F\u7ED5\u8FC7\u6587\u4EF6\u8BBF\u95EE\u6743\u9650 <span class="token punctuation">(</span>\u6839\u636E\u7528\u6237\u7684X\u6388\u6743\u6570\u636E\u5E93<span class="token punctuation">)</span>, \u4ED6\u5C31\u53EF\u4EE5\u901A\u8FC7\u8F6C\u53D1\u7684\u8FDE\u63A5
    \u8BBF\u95EE\u672C\u5730 X11 \u663E\u793A\u5668. \u653B\u51FB\u8005\u53EF\u4EE5\u636E\u6B64\u91C7\u53D6\u884C\u52A8, \u5982\u76D1\u89C6\u952E\u76D8\u8F93\u5165\u7B49.
    
<span class="token parameter variable">-C</span>
    \u8981\u6C42\u8FDB\u884C\u6570\u636E\u538B\u7F29 <span class="token punctuation">(</span>\u5305\u62EC stdin, stdout, stderr \u4EE5\u53CA\u8F6C\u53D1 X11 \u548C TCP/IP \u8FDE\u63A5 \u7684\u6570\u636E<span class="token punctuation">)</span>. \u538B\u7F29\u7B97\u6CD5\u548C gzip<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> \u7684\u4E00\u6837, 
    \u534F\u8BAE\u7B2C\u4E00\u7248\u4E2D, \u538B\u7F29\u7EA7\u522B <span class="token variable">\`</span></span><span class="token variable"><span class="token variable">\`</span>level \u7528 CompressionLevel \u9009\u9879\u63A7\u5236. \u538B\u7F29\u6280\u672F\u5728 modem \u7EBF\u8DEF\u6216\u5176\u4ED6\u6162\u901F\u8FDE\u63A5\u4E0A\u5F88\u6709\u7528, \u4F46\u662F
    \u5728\u9AD8\u901F\u7F51\u7EDC\u4E0A\u53CD\u800C \u53EF\u80FD\u964D\u4F4E\u901F\u5EA6. \u53EF\u4EE5\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5BF9\u6BCF\u4E2A\u4E3B\u673A\u5355\u72EC\u8BBE\u5B9A\u8FD9\u4E2A\u53C2\u6570. \u53E6\u89C1 Compression \u9009\u9879.
    
<span class="token parameter variable">-F</span> configfile
    \u6307\u5B9A\u4E00\u4E2A\u7528\u6237\u7EA7\u914D\u7F6E\u6587\u4EF6. \u5982\u679C\u5728\u547D\u4EE4\u884C\u4E0A\u6307\u5B9A\u4E86\u914D\u7F6E\u6587\u4EF6, \u7CFB\u7EDF\u7EA7\u914D\u7F6E\u6587\u4EF6 <span class="token punctuation">(</span>/etc/ssh/ssh_config <span class="token punctuation">)</span> \u5C06\u88AB\u5FFD\u7565. \u9ED8\u8BA4\u7684\u7528
    \u6237\u7EA7\u914D\u7F6E\u6587\u4EF6\u662F <span class="token environment constant">$HOME</span>/.ssh/config
    
<span class="token parameter variable">-L</span> port:host:hostport
    \u5C06\u672C\u5730\u673A<span class="token punctuation">(</span>\u5BA2\u6237\u673A<span class="token punctuation">)</span>\u7684\u67D0\u4E2A\u7AEF\u53E3\u8F6C\u53D1\u5230\u8FDC\u7AEF\u6307\u5B9A\u673A\u5668\u7684\u6307\u5B9A\u7AEF\u53E3. \u5DE5\u4F5C\u539F\u7406\u662F\u8FD9\u6837\u7684, \u672C\u5730\u673A\u5668\u4E0A\u5206\u914D\u4E86\u4E00\u4E2A socket \u4FA6\u542C port
     \u7AEF\u53E3, \u4E00\u65E6\u8FD9\u4E2A\u7AEF\u53E3\u4E0A\u6709\u4E86\u8FDE\u63A5, \u8BE5\u8FDE\u63A5\u5C31\u7ECF\u8FC7\u5B89\u5168\u901A\u9053\u8F6C\u53D1\u51FA\u53BB, \u540C\u65F6\u8FDC\u7A0B\u4E3B\u673A\u548C <span class="token function">host</span> \u7684 hostport \u7AEF\u53E3\u5EFA\u7ACB\u8FDE\u63A5. \u53EF\u4EE5
     \u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u6307\u5B9A\u7AEF\u53E3\u7684\u8F6C\u53D1. \u53EA\u6709 root \u624D\u80FD\u8F6C\u53D1\u7279\u6743\u7AEF\u53E3. IPv6 \u5730\u5740\u7528\u53E6\u4E00\u79CD\u683C\u5F0F\u8BF4\u660E: port/host/hostport
    
<span class="token parameter variable">-R</span> port:host:hostport
    \u5C06\u8FDC\u7A0B\u4E3B\u673A<span class="token punctuation">(</span>\u670D\u52A1\u5668<span class="token punctuation">)</span>\u7684\u67D0\u4E2A\u7AEF\u53E3\u8F6C\u53D1\u5230\u672C\u5730\u7AEF\u6307\u5B9A\u673A\u5668\u7684\u6307\u5B9A\u7AEF\u53E3. \u5DE5\u4F5C\u539F\u7406\u662F\u8FD9\u6837\u7684, \u8FDC\u7A0B\u4E3B\u673A\u4E0A\u5206\u914D\u4E86\u4E00\u4E2A socket \u4FA6\u542C 
    port \u7AEF\u53E3, \u4E00\u65E6\u8FD9\u4E2A\u7AEF\u53E3\u4E0A\u6709\u4E86\u8FDE\u63A5, \u8BE5\u8FDE\u63A5\u5C31\u7ECF\u8FC7\u5B89\u5168\u901A\u9053\u8F6C\u5411\u51FA\u53BB, \u540C\u65F6\u672C\u5730\u4E3B\u673A\u548C <span class="token function">host</span> \u7684 hostport \u7AEF\u53E3\u5EFA\u7ACB\u8FDE\u63A5.
     \u53EF\u4EE5\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u6307\u5B9A\u7AEF\u53E3\u7684\u8F6C\u53D1. \u53EA\u6709\u7528 root \u767B\u5F55\u8FDC\u7A0B\u4E3B\u673A \u624D\u80FD\u8F6C\u53D1\u7279\u6743\u7AEF\u53E3. IPv6 \u5730\u5740\u7528\u53E6\u4E00\u79CD\u683C\u5F0F\u8BF4\u660E: port/host/hostport
    
<span class="token parameter variable">-D</span> port
    \u6307\u5B9A\u4E00\u4E2A\u672C\u5730\u673A\u5668 <span class="token variable">\`</span></span>\`\u52A8\u6001\u7684 \u5E94\u7528\u7A0B\u5E8F\u7AEF\u53E3\u8F6C\u53D1. \u5DE5\u4F5C\u539F\u7406\u662F\u8FD9\u6837\u7684, \u672C\u5730\u673A\u5668\u4E0A\u5206\u914D\u4E86\u4E00\u4E2A socket \u4FA6\u542C port \u7AEF\u53E3, 
    \u4E00\u65E6\u8FD9\u4E2A\u7AEF\u53E3\u4E0A\u6709\u4E86\u8FDE\u63A5, \u8BE5\u8FDE\u63A5\u5C31\u7ECF\u8FC7\u5B89\u5168\u901A\u9053\u8F6C\u53D1\u51FA\u53BB, \u6839\u636E\u5E94\u7528\u7A0B\u5E8F\u7684\u534F\u8BAE\u53EF\u4EE5\u5224\u65AD\u51FA\u8FDC\u7A0B\u4E3B\u673A\u5C06\u548C\u54EA\u91CC\u8FDE\u63A5. 
    \u76EE\u524D\u652F\u6301 SOCKS4 \u534F\u8BAE, \u5C06\u5145\u5F53 SOCKS4 \u670D\u52A1\u5668. \u53EA\u6709 root \u624D\u80FD\u8F6C\u53D1\u7279\u6743\u7AEF\u53E3. \u53EF\u4EE5\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u6307\u5B9A\u52A8\u6001\u7AEF\u53E3\u7684\u8F6C\u53D1.
    
<span class="token parameter variable">-1</span> \u5F3A\u5236 \u53EA\u4F7F\u7528\u534F\u8BAE\u7B2C\u4E00\u7248.
<span class="token parameter variable">-2</span> \u5F3A\u5236 \u53EA\u4F7F\u7528\u534F\u8BAE\u7B2C\u4E8C\u7248.
<span class="token parameter variable">-4</span> \u5F3A\u5236 \u53EA\u4F7F\u7528 IPv4 \u5730\u5740.
<span class="token parameter variable">-6</span> \u5F3A\u5236 \u53EA\u4F7F\u7528 IPv6 \u5730\u5740.          
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> \u5E38\u7528\u5B9E\u4F8B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5F53\u524D\u7528\u6237\u767B\u5F55\u8FDC\u7A0B\u4E3B\u673A</span>
<span class="token function">ssh</span> <span class="token number">192.168</span>.1.108

<span class="token comment">#\u4EE5tank\u7528\u6237\u767B\u5F55\u8FDC\u7A0B\u4E3B\u673A</span>
<span class="token function">ssh</span> <span class="token number">192.168</span>.1.108 <span class="token parameter variable">-l</span> tank

<span class="token comment">#\u6307\u5B9A\u7AEF\u53E3\u767B\u5F55</span>
<span class="token function">ssh</span> tank@192.168.1.108 <span class="token parameter variable">-p</span> <span class="token number">2222</span>

<span class="token comment">#\u901A\u8FC7\u4EE3\u7406\u767B\u5F55 </span>
<span class="token function">ssh</span>  <span class="token parameter variable">-D</span> <span class="token number">7575</span> tank@192.168.1.108 

<span class="token comment"># \u5BF9\u6240\u6709\u6570\u636E\u8BF7\u6C42\u538B\u7F29</span>
<span class="token function">ssh</span> <span class="token parameter variable">-C</span> <span class="token number">192.168</span>.0.103

<span class="token comment"># \u7ED1\u5B9A\u6E90\u5730\u5740</span>
<span class="token function">ssh</span> <span class="token parameter variable">-b</span> <span class="token number">192.168</span>.0.200 <span class="token parameter variable">-l</span> leni <span class="token number">192.168</span>.0.103

<span class="token comment"># \u76F4\u63A5\u8FDE\u63A5\u5230\u53EA\u80FD\u901A\u8FC7\u4E3B\u673AB\u8FDE\u63A5\u7684\u4E3B\u673AA</span>
<span class="token function">ssh</span> <span class="token parameter variable">-t</span> hostA <span class="token function">ssh</span> hostB

<span class="token comment"># To ssh via pem file (which normally needs 0600 permissions):</span>
<span class="token comment">#\u8981\u901A\u8FC7pem\u6587\u4EF6ssh\uFF08\u901A\u5E38\u9700\u89810600\u6743\u9650\uFF09\uFF1A</span>
<span class="token function">ssh</span> <span class="token parameter variable">-i</span> /path/to/file.pem user@example.com

<span class="token comment"># To connect on an non-standard port:</span>
<span class="token comment">#\u8981\u5728\u975E\u6807\u51C6\u7AEF\u53E3\u4E0A\u8FDE\u63A5\uFF1A</span>
<span class="token function">ssh</span> <span class="token parameter variable">-p</span> <span class="token number">2222</span> user@example.com

<span class="token comment"># To connect and forward the authentication agent</span>
<span class="token comment">#\u8FDE\u63A5\u548C\u8F6C\u53D1\u8EAB\u4EFD\u9A8C\u8BC1\u4EE3\u7406</span>
<span class="token function">ssh</span> <span class="token parameter variable">-A</span> user@example.com

<span class="token comment"># To execute a command on a remote server:</span>
<span class="token comment">#\u8981\u5728\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u6267\u884C\u547D\u4EE4\uFF1A</span>
<span class="token function">ssh</span> <span class="token parameter variable">-t</span> user@example.com <span class="token string">&#39;the-remote-command&#39;</span>

<span class="token comment"># To tunnel an x session over SSH:</span>
<span class="token comment">#\u901A\u8FC7SSH\u96A7\u9053\u4F20\u8F93x\u4F1A\u8BDD\uFF1A</span>
<span class="token function">ssh</span> <span class="token parameter variable">-X</span> user@example.com

<span class="token comment"># Redirect traffic with a tunnel between local host (port 8080) and a remote</span>
<span class="token comment">#\u4F7F\u7528\u672C\u5730\u4E3B\u673A\uFF08\u7AEF\u53E38080\uFF09\u548C\u8FDC\u7A0B\u63A7\u5236\u5668\u4E4B\u95F4\u7684\u96A7\u9053\u91CD\u5B9A\u5411\u6D41\u91CF</span>
<span class="token comment"># host (remote.example.com:5000) through a proxy (personal.server.com):</span>
<span class="token comment">#\u4E3B\u673A\uFF08remote.example.com:5000\uFF09\u901A\u8FC7\u4EE3\u7406\uFF08personal.server.com\uFF09\uFF1A</span>
<span class="token function">ssh</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">-L</span> <span class="token number">8080</span>:remote.example.com:5000 user@personal.server.com <span class="token parameter variable">-N</span>

<span class="token comment"># To launch a specific x application over SSH:</span>
<span class="token comment">#\u8981\u901A\u8FC7SSH\u542F\u52A8\u7279\u5B9A\u7684x\u5E94\u7528\u7A0B\u5E8F\uFF1A</span>
<span class="token function">ssh</span> <span class="token parameter variable">-X</span> <span class="token parameter variable">-t</span> user@example.com <span class="token string">&#39;chromium-browser&#39;</span>

<span class="token comment"># To create a SOCKS proxy on localhost and port 9999</span>
<span class="token comment">#\u5728localhost\u548C\u7AEF\u53E39999\u4E0A\u521B\u5EFASOCKS\u4EE3\u7406</span>
<span class="token function">ssh</span> <span class="token parameter variable">-D</span> <span class="token number">9999</span> user@example.com

<span class="token comment"># To tunnel an ssh session over the SOCKS proxy on localhost and port 9999</span>
<span class="token comment">#\u5728localhost\u548C\u7AEF\u53E39999\u4E0A\u901A\u8FC7SOCKS\u4EE3\u7406\u96A7\u9053ssh\u4F1A\u8BDD</span>
<span class="token function">ssh</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;ProxyCommand nc -x 127.0.0.1:9999 -X 4 %h %p&quot;</span> username@example2.com

<span class="token comment"># -X use an xsession, -C compress data, &quot;-c blowfish&quot; use the encryption blowfish</span>
<span class="token comment">#-X\u4F7F\u7528xsession\uFF0C-C\u538B\u7F29\u6570\u636E\uFF0C\u201C-c blowfish\u201D\u4F7F\u7528\u52A0\u5BC6\u6CB3\u8C5A</span>
<span class="token function">ssh</span> user@example.com <span class="token parameter variable">-C</span> <span class="token parameter variable">-c</span> blowfish <span class="token parameter variable">-X</span>

<span class="token comment"># For more information, see:</span>
<span class="token comment">#\u6709\u5173\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\uFF1A</span>
<span class="token comment"># http://unix.stackexchange.com/q/12755/44856</span>
<span class="token comment">#HTTP://Unix.stack Exchange.com/\u8BF7/12755/44856</span>

<span class="token comment"># Copy files and folders through ssh from remote host to pwd with tar.gz compression</span>
<span class="token comment">#\u4F7F\u7528tar.gz\u538B\u7F29\u5C06\u6587\u4EF6\u548C\u6587\u4EF6\u5939\u901A\u8FC7ssh\u4ECE\u8FDC\u7A0B\u4E3B\u673A\u590D\u5236\u5230pwd</span>
<span class="token comment"># when there is no rsync command available</span>
<span class="token comment">#\u5F53\u6CA1\u6709\u53EF\u7528\u7684rsync\u547D\u4EE4\u65F6</span>
<span class="token function">ssh</span> user@example.com <span class="token string">&quot;cd /var/www/Shared/; tar zcf - asset1 asset2&quot;</span> <span class="token operator">|</span> <span class="token function">tar</span> zxf -

<span class="token comment"># Mount folder/filesystem through SSH</span>
<span class="token comment">#\u901A\u8FC7SSH\u6302\u8F7D\u6587\u4EF6\u5939/\u6587\u4EF6\u7CFB\u7EDF</span>
<span class="token comment"># Install SSHFS from https://github.com/libfuse/sshfs</span>
<span class="token comment">#\u4ECEhttps://github.com/libfuse/sshfs\u5B89\u88C5SSHFS</span>
<span class="token comment"># Will allow you to mount a folder securely over a network.</span>
<span class="token comment">#\u5141\u8BB8\u60A8\u901A\u8FC7\u7F51\u7EDC\u5B89\u5168\u5730\u6302\u8F7D\u6587\u4EF6\u5939\u3002</span>
sshfs name@server:/path/to/folder /path/to/mount/point

<span class="token comment"># Emacs can read file through SSH</span>
<span class="token comment">#Emacs\u53EF\u4EE5\u901A\u8FC7SSH\u8BFB\u53D6\u6587\u4EF6</span>
<span class="token comment"># Doc: http://www.gnu.org/software/emacs/manual/html_node/emacs/Remote-Files.html</span>
<span class="token comment">#Doc\uFF1Ahttp\uFF1A//www.gnu.org/software/emacs/manual/html_node/emacs/Remote-Files.html</span>
emacs /ssh:name@server:/path/to/file


<span class="token comment"># To generate an SSH key:</span>
<span class="token comment">#\u8981\u751F\u6210SSH\u5BC6\u94A5\uFF1A</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa

<span class="token comment"># To generate a 4096-bit SSH key:</span>
<span class="token comment">#\u8981\u751F\u62104096\u4F4DSSH\u5BC6\u94A5\uFF1A</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span>

<span class="token comment"># To update a passphrase on a key</span>
<span class="token comment">#\u66F4\u65B0\u5BC6\u94A5\u7684\u5BC6\u7801</span>
ssh-keygen <span class="token parameter variable">-p</span> <span class="token parameter variable">-P</span> old_passphrase <span class="token parameter variable">-N</span> new_passphrase <span class="token parameter variable">-f</span> /path/to/keyfile

<span class="token comment"># To remove a passphrase on a key</span>
<span class="token comment">#\u5220\u9664\u5BC6\u94A5\u4E0A\u7684\u5BC6\u7801</span>
ssh-keygen <span class="token parameter variable">-p</span> <span class="token parameter variable">-P</span> old_passphrase <span class="token parameter variable">-N</span> <span class="token string">&#39;&#39;</span> <span class="token parameter variable">-f</span> /path/to/keyfile

<span class="token comment"># To generate a 4096 bit RSA key with a passphase and comment containing the user and hostname</span>
<span class="token comment">#\u751F\u6210\u5E26\u6709passphase\u76844096\u4F4DRSA\u5BC6\u94A5\u548C\u5305\u542B\u7528\u6237\u548C\u4E3B\u673A\u540D\u7684\u6CE8\u91CA</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;<span class="token environment constant">$USER</span>@<span class="token environment constant">$HOSTNAME</span>&quot;</span> <span class="token parameter variable">-P</span> passphrase

<span class="token comment"># To copy a key to a remote host:</span>
<span class="token comment">#\u8981\u5C06\u5BC6\u94A5\u590D\u5236\u5230\u8FDC\u7A0B\u4E3B\u673A\uFF1A</span>
ssh-copy-id username@host

<span class="token comment"># To copy a key to a remote host on a non-standard port:</span>
<span class="token comment">#\u8981\u5C06\u5BC6\u94A5\u590D\u5236\u5230\u975E\u6807\u51C6\u7AEF\u53E3\u4E0A\u7684\u8FDC\u7A0B\u4E3B\u673A\uFF1A</span>
ssh-copy-id username@host <span class="token parameter variable">-p</span> <span class="token number">2222</span>

<span class="token comment"># To copy a key to a remote host on a non-standard port with non-standard ssh key:</span>
<span class="token comment">#\u8981\u4F7F\u7528\u975E\u6807\u51C6ssh\u5BC6\u94A5\u5C06\u5BC6\u94A5\u590D\u5236\u5230\u975E\u6807\u51C6\u7AEF\u53E3\u4E0A\u7684\u8FDC\u7A0B\u4E3B\u673A\uFF1A</span>
ssh-copy-id ~/.ssh/otherkey <span class="token string">&quot;username@host -p 2222&quot;</span>

ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-N</span> <span class="token string">&quot;&quot;</span> <span class="token parameter variable">-f</span> ~/.ssh/id_rsa <span class="token parameter variable">-q</span> <span class="token parameter variable">-b</span> <span class="token number">2048</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;test@ppabc.cn&quot;</span>

<span class="token comment">#\u67E5\u770B\u751F\u4EA7\u7684\u5BC6\u5319</span>
<span class="token function">cat</span> ~/.ssh/id_dsa

<span class="token comment">##\u7528ssh -v \u663E\u793A\u8BE6\u7EC6\u7684\u767B\u9646\u4FE1\u606F\u67E5\u627E\u539F\u56E0\uFF1A</span>
<span class="token function">ssh</span> <span class="token parameter variable">-v</span> localhost

<span class="token comment"># \u4ECElinux ssh\u767B\u5F55\u53E6\u4E00\u53F0linux </span>
<span class="token function">ssh</span> <span class="token parameter variable">-p</span> <span class="token number">22</span> user@192.168.1.209                            
<span class="token comment"># \u5229\u7528ssh\u64CD\u4F5C\u8FDC\u7A0B\u4E3B\u673A</span>
<span class="token function">ssh</span> <span class="token parameter variable">-p</span> <span class="token number">22</span> root@192.168.1.209 CMD                        
<span class="token comment"># \u628A\u672C\u5730\u6587\u4EF6\u62F7\u8D1D\u5230\u8FDC\u7A0B\u4E3B\u673A</span>
<span class="token function">scp</span> <span class="token parameter variable">-P</span> <span class="token number">22</span> \u6587\u4EF6 root@ip:/\u76EE\u5F55                            
<span class="token comment"># \u6307\u5B9A\u5BC6\u7801\u8FDC\u7A0B\u64CD\u4F5C</span>
sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;\u5BC6\u7801&#39;</span> <span class="token function">ssh</span> <span class="token parameter variable">-n</span> root@<span class="token variable">$IP</span> <span class="token string">&quot;echo hello&quot;</span>          
<span class="token comment"># ssh\u8FDE\u63A5\u4E0D\u63D0\u793Ayes</span>
<span class="token function">ssh</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no <span class="token variable">$IP</span>                     
<span class="token comment"># \u6307\u5B9A\u4F2A\u7EC8\u7AEF \u5BA2\u6237\u7AEF\u4EE5\u4EA4\u4E92\u6A21\u5F0F\u5DE5\u4F5C</span>
<span class="token function">ssh</span> <span class="token parameter variable">-t</span> <span class="token string">&quot;su -&quot;</span>                                           
<span class="token comment"># \u628A\u8FDC\u7A0B\u6307\u5B9A\u6587\u4EF6\u62F7\u8D1D\u5230\u672C\u5730</span>
<span class="token function">scp</span> root@192.168.1.209:\u8FDC\u7A0B\u76EE\u5F55 \u672C\u5730\u76EE\u5F55                 
<span class="token comment"># \u7528SSH\u521B\u5EFA\u7AEF\u53E3\u8F6C\u53D1\u901A\u9053</span>
<span class="token function">ssh</span> <span class="token parameter variable">-N</span> -L2001:remotehost:80 user@somemachine            
<span class="token comment"># \u5D4C\u5957\u4F7F\u7528SSH</span>
<span class="token function">ssh</span> <span class="token parameter variable">-t</span> host_A <span class="token function">ssh</span> host_B                                
<span class="token comment"># \u8FDC\u7A0Bsu\u6267\u884C\u547D\u4EE4 Cmd=&quot;\\&quot;/sbin/ifconfig eth0\\&quot;&quot;</span>
<span class="token function">ssh</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-p</span> <span class="token number">22</span> <span class="token variable">$user</span>@<span class="token variable">$Ip</span> /bin/su - root <span class="token parameter variable">-c</span> <span class="token punctuation">{</span><span class="token variable">$Cmd</span><span class="token punctuation">}</span><span class="token punctuation">;</span>        
<span class="token comment"># \u751F\u6210\u5BC6\u94A5</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa                                       
<span class="token comment"># \u4F20\u9001key</span>
ssh-copy-id <span class="token parameter variable">-i</span> xuesong@10.10.10.133                     
<span class="token comment"># \u516C\u94A5\u5B58\u653E\u4F4D\u7F6E</span>
<span class="token function">vi</span> <span class="token environment constant">$HOME</span>/.ssh/authorized_keys                           
<span class="token comment"># \u901A\u8FC7ssh\u6302\u8F7D\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u7684\u6587\u4EF6\u5939</span>
sshfs name@server:/path/to/folder /path/to/mount/point  
<span class="token comment"># \u5378\u8F7Dssh\u6302\u8F7D\u7684\u76EE\u5F55</span>
fusermount <span class="token parameter variable">-u</span> /path/to/mount/point                      
<span class="token function">ssh</span> user@host <span class="token function">cat</span> /path/to/remotefile <span class="token operator">|</span> <span class="token function">diff</span> /path/to/localfile -                <span class="token comment"># \u7528DIFF\u5BF9\u6BD4\u8FDC\u7A0B\u6587\u4EF6\u8DDF\u672C\u5730\u6587\u4EF6</span>
<span class="token function">su</span> - user <span class="token parameter variable">-c</span> <span class="token string">&quot;ssh user@192.168.1.1 <span class="token entity" title="\\&quot;">\\&quot;</span>echo -e aa |mail -s test mail@163.com<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>    <span class="token comment"># \u5207\u6362\u7528\u6237\u767B\u5F55\u8FDC\u7A0B\u53D1\u9001\u90AE\u4EF6</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ssh\u65E0\u5BC6\u7801\u8BA4\u8BC1-rsa" tabindex="-1"><a class="header-anchor" href="#ssh\u65E0\u5BC6\u7801\u8BA4\u8BC1-rsa" aria-hidden="true">#</a> ssh\u65E0\u5BC6\u7801\u8BA4\u8BC1 RSA</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa
<span class="token function">cat</span> ~/.ssh/id_rsa.pub <span class="token operator">&gt;&gt;</span> ~/.ssh/authorized_keys
<span class="token function">chmod</span> <span class="token number">600</span> ~/.ssh/authorized_keys

<span class="token comment">#ssh\u65E0\u5BC6\u7801\u8BA4\u8BC1 DSA</span>
ssh-keygen <span class="token parameter variable">-t</span> dsa <span class="token parameter variable">-P</span> <span class="token string">&#39;&#39;</span> <span class="token parameter variable">-f</span> ~/.ssh/id_dsa
<span class="token function">cat</span> ~/.ssh/id_dsa.pub <span class="token operator">&gt;&gt;</span> ~/.ssh/authorized_keys
<span class="token function">chmod</span> <span class="token number">600</span> ~/.ssh/authorized_keys



<span class="token comment">#\u62F7\u8D1D\u672C\u5730\u751F\u4EA7\u7684key\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u7AEF\uFF08\u4E24\u79CD\u65B9\u6CD5\uFF09</span>
<span class="token comment">#1</span>
<span class="token function">cat</span> ~/.ssh/id_dsa.pub <span class="token operator">|</span> <span class="token function">ssh</span> \u8FDC\u7A0B\u7528\u6237\u540D@\u8FDC\u7A0B\u670D\u52A1\u5668ip <span class="token string">&#39;cat - &gt;&gt; ~/.ssh/authorized_keys&#39;</span>
<span class="token function">scp</span> ~/.ssh/id_dsa.pub username@\u8FDC\u7A0B\u673A\u5668IP:/userhome/.ssh/authorized_keys
ssh-copy-id  <span class="token parameter variable">-i</span> /root/.ssh/id_dsa.pub root@192.168.142.136

<span class="token comment">#2</span>
<span class="token function">scp</span> ~/.ssh/id_dsa.pub test@10.0.0.13:/home/test/
<span class="token comment">##\u767B\u9646\u8FDC\u7A0B\u670D\u52A1\u5668test@10.0.0.13 \u540E\u6267\u884C\uFF1A</span>
<span class="token function">cat</span> /home/test/id_dsa.pub <span class="token operator">&gt;&gt;</span>  ~/.ssh/authorized_keys
<span class="token function">chmod</span> <span class="token number">600</span> ~/.ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ssh\u5BC6\u94A5\u5206\u53D1\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#ssh\u5BC6\u94A5\u5206\u53D1\u811A\u672C" aria-hidden="true">#</a> ssh\u5BC6\u94A5\u5206\u53D1\u811A\u672C</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;\u8F93\u5165\u8FDC\u7AEF\u670D\u52A1\u5668IP: &quot;</span> <span class="token function">ip</span>
<span class="token comment">##ssh-copy-id -o StrictHostKeyChecking=no -i ~/.ssh/id_rsa.pub root@$ip</span>
ssh-copy-id <span class="token parameter variable">-i</span> ~/.ssh/id_rsa.pub root@<span class="token variable">$ip</span>
<span class="token function">ssh</span> root@<span class="token variable">$ip</span> <span class="token string">&#39;sed -i &quot;s/^#RSAAuthentication\\ yes/RSAAuthentication\\ yes/g&quot; /etc/ssh/sshd_config&#39;</span>
<span class="token function">ssh</span> root@<span class="token variable">$ip</span> <span class="token string">&#39;sed -i &quot;s/^#PubkeyAuthentication\\ yes/PubkeyAuthentication yes/g&quot; /etc/ssh/sshd_config&#39;</span>
<span class="token function">ssh</span> root@<span class="token variable">$ip</span> <span class="token string">&#39;sed -i &quot;s/^#PermitRootLogin\\ yes/PermitRootLogin\\ yes/g&quot; /etc/ssh/sshd_config&#39;</span>
<span class="token function">ssh</span> root@<span class="token variable">$ip</span> <span class="token string">&#39;service sshd restart&#39;</span>
<span class="token assign-left variable">hostname</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ssh</span> root@$<span class="token punctuation">{</span>ip<span class="token punctuation">}</span> <span class="token string">&#39;hostname&#39;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u6DFB\u52A0\u4E3B\u673A\u540D\u548CIP\u5230\u672C\u5730/etc/hosts\u6587\u4EF6\u4E2D&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$ip</span>    <span class="token variable">$hostname</span>&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u8FDC\u7AEF\u4E3B\u673A\u4E3B\u673A\u540D\u79F0\u4E3A<span class="token variable">$hostname</span>, \u8BF7\u67E5\u770B /etc/hosts \u786E\u4FDD\u8BE5\u4E3B\u673A\u540D\u548CIP\u6DFB\u52A0\u5230\u4E3B\u673A\u5217\u8868\u6587\u4EF6\u4E2D&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[t];function p(c,o){return n(),a("div",null,l)}const d=s(i,[["render",p],["__file","ssh.html.vue"]]);export{d as default};
