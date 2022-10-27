import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},c=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> <span class="token punctuation">[</span>-1246BCpqrv<span class="token punctuation">]</span> <span class="token punctuation">[</span>-c cipher<span class="token punctuation">]</span> <span class="token punctuation">[</span>-F ssh_config<span class="token punctuation">]</span> <span class="token punctuation">[</span>-i identity_file<span class="token punctuation">]</span>
<span class="token punctuation">[</span>-l limit<span class="token punctuation">]</span> <span class="token punctuation">[</span>-o ssh_option<span class="token punctuation">]</span> <span class="token punctuation">[</span>-P port<span class="token punctuation">]</span> <span class="token punctuation">[</span>-S program<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span>user@<span class="token punctuation">]</span>host1:<span class="token punctuation">]</span>file1 <span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>user@<span class="token punctuation">]</span>host2:<span class="token punctuation">]</span>file2

-1\uFF1A \u5F3A\u5236scp\u547D\u4EE4\u4F7F\u7528\u534F\u8BAEssh1
-2\uFF1A \u5F3A\u5236scp\u547D\u4EE4\u4F7F\u7528\u534F\u8BAEssh2
-4\uFF1A \u5F3A\u5236scp\u547D\u4EE4\u53EA\u4F7F\u7528IPv4\u5BFB\u5740
-6\uFF1A \u5F3A\u5236scp\u547D\u4EE4\u53EA\u4F7F\u7528IPv6\u5BFB\u5740
-B\uFF1A \u4F7F\u7528\u6279\u5904\u7406\u6A21\u5F0F\uFF08\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u4E0D\u8BE2\u95EE\u4F20\u8F93\u53E3\u4EE4\u6216\u77ED\u8BED\uFF09
-C\uFF1A \u5141\u8BB8\u538B\u7F29\u3002\uFF08\u5C06-C\u6807\u5FD7\u4F20\u9012\u7ED9ssh\uFF0C\u4ECE\u800C\u6253\u5F00\u538B\u7F29\u529F\u80FD\uFF09
-p\uFF1A\u4FDD\u7559\u539F\u6587\u4EF6\u7684\u4FEE\u6539\u65F6\u95F4\uFF0C\u8BBF\u95EE\u65F6\u95F4\u548C\u8BBF\u95EE\u6743\u9650\u3002
-q\uFF1A \u4E0D\u663E\u793A\u4F20\u8F93\u8FDB\u5EA6\u6761\u3002
-r\uFF1A \u9012\u5F52\u590D\u5236\u6574\u4E2A\u76EE\u5F55\u3002
-v\uFF1A\u8BE6\u7EC6\u65B9\u5F0F\u663E\u793A\u8F93\u51FA\u3002scp\u548Cssh<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\u4F1A\u663E\u793A\u51FA\u6574\u4E2A\u8FC7\u7A0B\u7684\u8C03\u8BD5\u4FE1\u606F\u3002\u8FD9\u4E9B\u4FE1\u606F\u7528\u4E8E\u8C03\u8BD5\u8FDE\u63A5\uFF0C\u9A8C\u8BC1\u548C\u914D\u7F6E\u95EE\u9898\u3002
<span class="token parameter variable">-c</span> cipher\uFF1A \u4EE5cipher\u5C06\u6570\u636E\u4F20\u8F93\u8FDB\u884C\u52A0\u5BC6\uFF0C\u8FD9\u4E2A\u9009\u9879\u5C06\u76F4\u63A5\u4F20\u9012\u7ED9ssh\u3002
<span class="token parameter variable">-F</span> ssh_config\uFF1A \u6307\u5B9A\u4E00\u4E2A\u66FF\u4EE3\u7684ssh\u914D\u7F6E\u6587\u4EF6\uFF0C\u6B64\u53C2\u6570\u76F4\u63A5\u4F20\u9012\u7ED9ssh\u3002
<span class="token parameter variable">-i</span> identity_file\uFF1A \u4ECE\u6307\u5B9A\u6587\u4EF6\u4E2D\u8BFB\u53D6\u4F20\u8F93\u65F6\u4F7F\u7528\u7684\u5BC6\u94A5\u6587\u4EF6\uFF0C\u6B64\u53C2\u6570\u76F4\u63A5\u4F20\u9012\u7ED9ssh\u3002
<span class="token parameter variable">-l</span> limit\uFF1A \u9650\u5B9A\u7528\u6237\u6240\u80FD\u4F7F\u7528\u7684\u5E26\u5BBD\uFF0C\u4EE5Kbit/s\u4E3A\u5355\u4F4D\u3002
<span class="token parameter variable">-o</span> ssh_option\uFF1A \u5982\u679C\u4E60\u60EF\u4E8E\u4F7F\u7528ssh_config<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>\u4E2D\u7684\u53C2\u6570\u4F20\u9012\u65B9\u5F0F\uFF0C
<span class="token parameter variable">-P</span> port\uFF1A\u6CE8\u610F\u662F\u5927\u5199\u7684P, port\u662F\u6307\u5B9A\u6570\u636E\u4F20\u8F93\u7528\u5230\u7684\u7AEF\u53E3\u53F7
<span class="token parameter variable">-S</span> program\uFF1A \u6307\u5B9A\u52A0\u5BC6\u4F20\u8F93\u65F6\u6240\u4F7F\u7528\u7684\u7A0B\u5E8F\u3002\u6B64\u7A0B\u5E8F\u5FC5\u987B\u80FD\u591F\u7406\u89E3ssh<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\u7684\u9009\u9879\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4ECE\u672C\u5730\u590D\u5236\u5230\u8FDC\u7A0B</span>
<span class="token function">scp</span> local_file remote_username@remote_ip:remote_folder 
<span class="token function">scp</span> local_file remote_username@remote_ip:remote_file 
<span class="token function">scp</span> local_file remote_ip:remote_folder 
<span class="token function">scp</span> local_file remote_ip:remote_file 

<span class="token comment"># \u4ECE\u8FDC\u7A0B\u590D\u5236\u5230\u672C\u5730</span>
<span class="token function">scp</span> root@www.w3cschool.cc:/home/root/others/music /home/space/music/1.mp3 
<span class="token function">scp</span> <span class="token parameter variable">-r</span> www.w3cschool.cc:/home/root/others/ /home/space/music/


<span class="token comment"># To copy a file from your local machine to a remote server:</span>
<span class="token function">scp</span> foo.txt user@example.com:remote/dir

<span class="token comment"># To copy a file from a remote server to your local machine:</span>
<span class="token function">scp</span> user@example.com:remote/dir/foo.txt local/dir

<span class="token comment"># To scp a file over a SOCKS proxy on localhost and port 9999 (see ssh for tunnel setup):</span>
<span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;ProxyCommand nc -x 127.0.0.1:9999 -X 4 %h %p&quot;</span> file.txt username@example2.com:/tmp/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[c];function l(p,o){return s(),a("div",null,t)}const u=n(i,[["render",l],["__file","scp.html.vue"]]);export{u as default};
