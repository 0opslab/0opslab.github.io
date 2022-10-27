import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<p>lsof\u547D\u4EE4 \u7528\u4E8E\u67E5\u770B\u4F60\u8FDB\u7A0B\u5F00\u6253\u7684\u6587\u4EF6\uFF0C\u6253\u5F00\u6587\u4EF6\u7684\u8FDB\u7A0B\uFF0C\u8FDB\u7A0B\u6253\u5F00\u7684\u7AEF\u53E3(TCP\u3001UDP)\u3002\u627E\u56DE/\u6062\u590D\u5220\u9664\u7684\u6587\u4EF6\u3002 \u662F\u5341\u5206\u65B9\u4FBF\u7684\u7CFB\u7EDF\u76D1\u89C6\u5DE5\u5177\uFF0C\u56E0\u4E3Alsof\u547D\u4EE4\u9700\u8981\u8BBF\u95EE\u6838\u5FC3\u5185\u5B58\u548C\u5404\u79CD\u6587\u4EF6\uFF0C\u6240\u4EE5\u9700\u8981root\u7528\u6237\u6267\u884C</p><h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-a\uFF1A\u5217\u51FA\u6253\u5F00\u6587\u4EF6\u5B58\u5728\u7684\u8FDB\u7A0B\uFF1B
-c<span class="token operator">&lt;</span>\u8FDB\u7A0B\u540D<span class="token operator">&gt;</span>\uFF1A\u5217\u51FA\u6307\u5B9A\u8FDB\u7A0B\u6240\u6253\u5F00\u7684\u6587\u4EF6\uFF1B
-g\uFF1A\u5217\u51FAGID\u53F7\u8FDB\u7A0B\u8BE6\u60C5\uFF1B
-d<span class="token operator">&lt;</span>\u6587\u4EF6\u53F7<span class="token operator">&gt;</span>\uFF1A\u5217\u51FA\u5360\u7528\u8BE5\u6587\u4EF6\u53F7\u7684\u8FDB\u7A0B\uFF1B
+d<span class="token operator">&lt;</span>\u76EE\u5F55<span class="token operator">&gt;</span>\uFF1A\u5217\u51FA\u76EE\u5F55\u4E0B\u88AB\u6253\u5F00\u7684\u6587\u4EF6\uFF1B
+D<span class="token operator">&lt;</span>\u76EE\u5F55<span class="token operator">&gt;</span>\uFF1A\u9012\u5F52\u5217\u51FA\u76EE\u5F55\u4E0B\u88AB\u6253\u5F00\u7684\u6587\u4EF6\uFF1B
-n<span class="token operator">&lt;</span>\u76EE\u5F55<span class="token operator">&gt;</span>\uFF1A\u5217\u51FA\u4F7F\u7528NFS\u7684\u6587\u4EF6\uFF1B
-i<span class="token operator">&lt;</span>\u6761\u4EF6<span class="token operator">&gt;</span>\uFF1A\u5217\u51FA\u7B26\u5408\u6761\u4EF6\u7684\u8FDB\u7A0B\u3002\uFF084\u30016\u3001\u534F\u8BAE\u3001:\u7AEF\u53E3\u3001 @ip \uFF09
-p<span class="token operator">&lt;</span>\u8FDB\u7A0B\u53F7<span class="token operator">&gt;</span>\uFF1A\u5217\u51FA\u6307\u5B9A\u8FDB\u7A0B\u53F7\u6240\u6253\u5F00\u7684\u6587\u4EF6\uFF1B
-u\uFF1A\u5217\u51FA<span class="token environment constant">UID</span>\u53F7\u8FDB\u7A0B\u8BE6\u60C5\uFF1B
-h\uFF1A\u663E\u793A\u5E2E\u52A9\u4FE1\u606F\uFF1B
-v\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># List all IPv4 network files</span>
<span class="token comment">#\u5217\u51FA\u6240\u6709IPv4\u7F51\u7EDC\u6587\u4EF6</span>
<span class="token function">sudo</span> <span class="token function">lsof</span> <span class="token parameter variable">-i4</span>

<span class="token comment"># List all IPv6 network files</span>
<span class="token comment">#\u5217\u51FA\u6240\u6709IPv6\u7F51\u7EDC\u6587\u4EF6</span>
<span class="token function">sudo</span> <span class="token function">lsof</span> <span class="token parameter variable">-i6</span>

<span class="token comment"># List all open sockets</span>
<span class="token comment">#\u5217\u51FA\u6240\u6709\u6253\u5F00\u7684\u5957\u63A5\u5B57</span>
<span class="token function">lsof</span> <span class="token parameter variable">-i</span>

<span class="token comment"># List all listening ports</span>
<span class="token comment">#\u5217\u51FA\u6240\u6709\u4FA6\u542C\u7AEF\u53E3</span>
<span class="token function">lsof</span> <span class="token parameter variable">-Pnl</span> +M <span class="token parameter variable">-i4</span>

<span class="token comment"># Find which program is using the port 80</span>
<span class="token comment">#\u627E\u5230\u6B63\u5728\u4F7F\u7528\u7AEF\u53E380\u7684\u7A0B\u5E8F</span>
<span class="token function">lsof</span> <span class="token parameter variable">-i</span> TCP:80

<span class="token comment"># List all connections to a specific host</span>
<span class="token comment">#\u5217\u51FA\u4E0E\u7279\u5B9A\u4E3B\u673A\u7684\u6240\u6709\u8FDE\u63A5</span>
<span class="token function">lsof</span> -i@192.168.1.5

<span class="token comment"># List all processes accessing a particular file/directory</span>
<span class="token comment">#\u5217\u51FA\u8BBF\u95EE\u7279\u5B9A\u6587\u4EF6/\u76EE\u5F55\u7684\u6240\u6709\u8FDB\u7A0B</span>
<span class="token function">lsof</span> <span class="token operator">&lt;</span>/path/to/file<span class="token operator">&gt;</span>

<span class="token comment"># List all files open for a particular user</span>
<span class="token comment">#\u5217\u51FA\u4E3A\u7279\u5B9A\u7528\u6237\u6253\u5F00\u7684\u6240\u6709\u6587\u4EF6</span>
<span class="token function">lsof</span> <span class="token parameter variable">-u</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>

<span class="token comment"># List all files/network connections a command is using</span>
<span class="token comment">#\u5217\u51FA\u547D\u4EE4\u6B63\u5728\u4F7F\u7528\u7684\u6240\u6709\u6587\u4EF6/\u7F51\u7EDC\u8FDE\u63A5</span>
<span class="token function">lsof</span> <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>command-name<span class="token operator">&gt;</span>

<span class="token comment"># List all files a process has open</span>
<span class="token comment">#\u5217\u51FA\u8FDB\u7A0B\u5DF2\u6253\u5F00\u7684\u6240\u6709\u6587\u4EF6</span>
<span class="token function">lsof</span> <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span>

<span class="token comment"># List all files open mounted at /mount/point.</span>
<span class="token comment">#\u5217\u51FA\u6302\u8F7D\u5728/ mount / point\u7684\u6240\u6709\u6587\u4EF6\u3002</span>
<span class="token comment"># Particularly useful for finding which process(es) are using a</span>
<span class="token comment">#\u7279\u522B\u9002\u7528\u4E8E\u67E5\u627E\u54EA\u4E9B\u8FDB\u7A0B\u6B63\u5728\u4F7F\u7528a</span>
<span class="token comment"># mounted USB stick or CD/DVD.</span>
<span class="token comment">#\u5B89\u88C5\u7684USB\u8BB0\u5FC6\u68D2\u6216CD / DVD\u3002</span>
<span class="token function">lsof</span> +f -- <span class="token operator">&lt;</span>/mount/point<span class="token operator">&gt;</span>

<span class="token comment"># See this primer: http://www.danielmiessler.com/study/lsof/</span>
<span class="token comment">#\u89C1\u8FD9\u4E2A\u5165\u95E8\u4E66\uFF1Ahttp\uFF1A//www.danielmiessler.com/study/lsof/</span>
<span class="token comment"># for a number of other useful lsof tips</span>
<span class="token comment">#\u5BF9\u4E8E\u8BB8\u591A\u5176\u4ED6\u6709\u7528\u7684lsof\u63D0\u793A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[i];function t(c,p){return s(),a("div",null,o)}const d=n(l,[["render",t],["__file","lsof.html.vue"]]);export{d as default};
