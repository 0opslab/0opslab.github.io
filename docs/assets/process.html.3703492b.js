import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<h2 id="\u8FDB\u7A0B\u7BA1\u7406\u7684\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B\u7BA1\u7406\u7684\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u8FDB\u7A0B\u7BA1\u7406\u7684\u5E38\u7528\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">service</span>
$ <span class="token function">top</span>
$ <span class="token function">ps</span>
$ pstree
$ <span class="token function">lsof</span>
$ <span class="token function">chkconfig</span>
$ <span class="token function">kill</span>
$ <span class="token function">nice</span>
$ <span class="token function">renice</span>
$ <span class="token function">sleep</span>
$ <span class="token function">nohup</span>
$ pgrep
$ <span class="token function">killall</span>
$ <span class="token function">pkill</span>
$ xkill

<span class="token function">ps</span> <span class="token parameter variable">-eaf</span>               <span class="token comment"># \u67E5\u770B\u6240\u6709\u8FDB\u7A0B</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> PID           <span class="token comment"># \u5F3A\u5236\u7EC8\u6B62\u67D0\u4E2APID\u8FDB\u7A0B</span>
<span class="token function">kill</span> <span class="token parameter variable">-15</span> PID          <span class="token comment"># \u5B89\u5168\u9000\u51FA \u9700\u7A0B\u5E8F\u5185\u90E8\u5904\u7406\u4FE1\u53F7</span>
cmd <span class="token operator">&amp;</span>                 <span class="token comment"># \u547D\u4EE4\u540E\u53F0\u8FD0\u884C</span>
<span class="token function">nohup</span> cmd <span class="token operator">&amp;</span>           <span class="token comment"># \u540E\u53F0\u8FD0\u884C\u4E0D\u53D7shell\u9000\u51FA\u5F71\u54CD</span>
ctrl+z                <span class="token comment"># \u5C06\u524D\u53F0\u653E\u5165\u540E\u53F0(\u6682\u505C)</span>
<span class="token function">jobs</span>                  <span class="token comment"># \u67E5\u770B\u540E\u53F0\u8FD0\u884C\u7A0B\u5E8F</span>
<span class="token function">bg</span> <span class="token number">2</span>                  <span class="token comment"># \u542F\u52A8\u540E\u53F0\u6682\u505C\u8FDB\u7A0B</span>
<span class="token function">fg</span> <span class="token number">2</span>                  <span class="token comment"># \u8C03\u56DE\u540E\u53F0\u8FDB\u7A0B</span>
pstree                <span class="token comment"># \u8FDB\u7A0B\u6811</span>
<span class="token function">vmstat</span> <span class="token number">1</span> <span class="token number">9</span>            <span class="token comment"># \u6BCF\u9694\u4E00\u79D2\u62A5\u544A\u7CFB\u7EDF\u6027\u80FD\u4FE1\u606F9\u6B21</span>
sar                   <span class="token comment"># \u67E5\u770Bcpu\u7B49\u72B6\u6001</span>
<span class="token function">lsof</span> <span class="token function">file</span>             <span class="token comment"># \u663E\u793A\u6253\u5F00\u6307\u5B9A\u6587\u4EF6\u7684\u6240\u6709\u8FDB\u7A0B</span>
<span class="token function">lsof</span> <span class="token parameter variable">-i:32768</span>         <span class="token comment"># \u67E5\u770B\u7AEF\u53E3\u7684\u8FDB\u7A0B</span>
<span class="token function">renice</span> +1 <span class="token number">180</span>         <span class="token comment"># \u628A180\u53F7\u8FDB\u7A0B\u7684\u4F18\u5148\u7EA7\u52A01</span>
<span class="token function">ps</span> aux <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token environment constant">USER</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nk</span> +4 <span class="token operator">|</span> <span class="token function">tail</span>       <span class="token comment"># \u663E\u793A\u6D88\u8017\u5185\u5B58\u6700\u591A\u768410\u4E2A\u8FD0\u884C\u4E2D\u7684\u8FDB\u7A0B\uFF0C\u4EE5\u5185\u5B58\u4F7F\u7528\u91CF\u6392\u5E8F.cpu +3	</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ps" tabindex="-1"><a class="header-anchor" href="#ps" aria-hidden="true">#</a> ps</h3><p>ps\u547D\u4EE4\u662FLinux\u4E2D\u6700\u57FA\u7840\u7684\u67E5\u770B\u7CFB\u7EDF\u8FDB\u7A0B\u7684\u547D\u4EE4\uFF0C\u80FD\u5217\u51FA\u7CFB\u7EDF\u4E2D\u8FD0\u884C\u7684\u8FDB\u7A0B\uFF0C\u5305\u62EC\u8FDB\u7A0B\u53F7\u3001CPU\u4F7F\u7528\u91CF\u3001\u5185\u5B58\u4F7F\u7528\u91CF\u7B49\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage:
	<span class="token function">ps</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span>
\u9009\u9879\uFF1A
  -a\uFF1A\u663E\u793A\u6240\u6709\u7EC8\u7AEF\u673A\u4E0B\u6267\u884C\u7684\u7A0B\u5E8F\uFF0C\u9664\u4E86\u9636\u6BB5\u4F5C\u4E1A\u9886\u5BFC\u8005\u4E4B\u5916\u3002
  a\uFF1A\u663E\u793A\u73B0\u884C\u7EC8\u7AEF\u673A\u4E0B\u7684\u6240\u6709\u7A0B\u5E8F\uFF0C\u5305\u62EC\u5176\u4ED6\u7528\u6237\u7684\u7A0B\u5E8F\u3002
  -A\uFF1A\u663E\u793A\u6240\u6709\u7A0B\u5E8F\u3002
  -c\uFF1A\u663E\u793ACLS\u548CPRI\u680F\u4F4D\u3002
  c\uFF1A\u5217\u51FA\u7A0B\u5E8F\u65F6\uFF0C\u663E\u793A\u6BCF\u4E2A\u7A0B\u5E8F\u771F\u6B63\u7684\u6307\u4EE4\u540D\u79F0\uFF0C\u800C\u4E0D\u5305\u542B\u8DEF\u5F84\uFF0C\u9009\u9879\u6216\u5E38\u9A7B\u670D\u52A1\u7684\u6807\u793A\u3002
  -C<span class="token operator">&lt;</span>\u6307\u4EE4\u540D\u79F0<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u6267\u884C\u6307\u4EE4\u7684\u540D\u79F0\uFF0C\u5E76\u5217\u51FA\u8BE5\u6307\u4EE4\u7684\u7A0B\u5E8F\u7684\u72B6\u51B5\u3002
  -d\uFF1A\u663E\u793A\u6240\u6709\u7A0B\u5E8F\uFF0C\u4F46\u4E0D\u5305\u62EC\u9636\u6BB5\u4F5C\u4E1A\u9886\u5BFC\u8005\u7684\u7A0B\u5E8F\u3002
  -e\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;A&quot;</span>\u9009\u9879\u76F8\u540C\u3002
  e\uFF1A\u5217\u51FA\u7A0B\u5E8F\u65F6\uFF0C\u663E\u793A\u6BCF\u4E2A\u7A0B\u5E8F\u6240\u4F7F\u7528\u7684\u73AF\u5883\u53D8\u91CF\u3002
  -f\uFF1A\u663E\u793A<span class="token environment constant">UID</span>,PPIP,C\u4E0ESTIME\u680F\u4F4D\u3002
  f\uFF1A\u7528ASCII\u5B57\u7B26\u663E\u793A\u6811\u72B6\u7ED3\u6784\uFF0C\u8868\u8FBE\u7A0B\u5E8F\u95F4\u7684\u76F8\u4E92\u5173\u7CFB\u3002
  -g<span class="token operator">&lt;</span>\u7FA4\u7EC4\u540D\u79F0<span class="token operator">&gt;</span>\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;-G&quot;</span>\u9009\u9879\u76F8\u540C\uFF0C\u5F53\u4EA6\u80FD\u4F7F\u7528\u9636\u6BB5\u4F5C\u4E1A\u9886\u5BFC\u8005\u7684\u540D\u79F0\u6765\u6307\u5B9A\u3002
  g\uFF1A\u663E\u793A\u73B0\u884C\u7EC8\u7AEF\u673A\u4E0B\u7684\u6240\u6709\u7A0B\u5E8F\uFF0C\u5305\u62EC\u7FA4\u7EC4\u9886\u5BFC\u8005\u7684\u7A0B\u5E8F\u3002
  -G<span class="token operator">&lt;</span>\u7FA4\u7EC4\u8BC6\u522B\u7801<span class="token operator">&gt;</span>\uFF1A\u5217\u51FA\u5C5E\u4E8E\u8BE5\u7FA4\u7EC4\u7684\u7A0B\u5E8F\u7684\u72B6\u51B5\uFF0C\u4E5F\u53EF\u4F7F\u7528\u7FA4\u7EC4\u540D\u79F0\u6765\u6307\u5B9A\u3002
  h\uFF1A\u4E0D\u663E\u793A\u6807\u9898\u5217\u3002
  -H\uFF1A\u663E\u793A\u6811\u72B6\u7ED3\u6784\uFF0C\u8868\u793A\u7A0B\u5E8F\u95F4\u7684\u76F8\u4E92\u5173\u7CFB\u3002
  -j\u6216j\uFF1A\u91C7\u7528\u5DE5\u4F5C\u63A7\u5236\u7684\u683C\u5F0F\u663E\u793A\u7A0B\u5E8F\u72B6\u51B5\u3002
  -l\u6216l\uFF1A\u91C7\u7528\u8BE6\u7EC6\u7684\u683C\u5F0F\u6765\u663E\u793A\u7A0B\u5E8F\u72B6\u51B5\u3002
  L\uFF1A\u5217\u51FA\u680F\u4F4D\u7684\u76F8\u5173\u4FE1\u606F\u3002
  -m\u6216m\uFF1A\u663E\u793A\u6240\u6709\u7684\u6267\u884C\u7EEA\u3002
  n\uFF1A\u4EE5\u6570\u5B57\u6765\u8868\u793A<span class="token environment constant">USER</span>\u548CWCHAN\u680F\u4F4D\u3002
  -N\uFF1A\u663E\u793A\u6240\u6709\u7684\u7A0B\u5E8F\uFF0C\u9664\u4E86\u6267\u884Cps\u6307\u4EE4\u7EC8\u7AEF\u673A\u4E0B\u7684\u7A0B\u5E8F\u4E4B\u5916\u3002
  -p<span class="token operator">&lt;</span>\u7A0B\u5E8F\u8BC6\u522B\u7801<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u7A0B\u5E8F\u8BC6\u522B\u7801\uFF0C\u5E76\u5217\u51FA\u8BE5\u7A0B\u5E8F\u7684\u72B6\u51B5\u3002
  p<span class="token operator">&lt;</span>\u7A0B\u5E8F\u8BC6\u522B\u7801<span class="token operator">&gt;</span>\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;-p&quot;</span>\u9009\u9879\u76F8\u540C\uFF0C\u53EA\u5728\u5217\u8868\u683C\u5F0F\u65B9\u9762\u7A0D\u6709\u5DEE\u5F02\u3002
  r\uFF1A\u53EA\u5217\u51FA\u73B0\u884C\u7EC8\u7AEF\u673A\u6B63\u5728\u6267\u884C\u4E2D\u7684\u7A0B\u5E8F\u3002
  -s<span class="token operator">&lt;</span>\u9636\u6BB5\u4F5C\u4E1A<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u9636\u6BB5\u4F5C\u4E1A\u7684\u7A0B\u5E8F\u8BC6\u522B\u7801\uFF0C\u5E76\u5217\u51FA\u96B6\u5C5E\u8BE5\u9636\u6BB5\u4F5C\u4E1A\u7684\u7A0B\u5E8F\u7684\u72B6\u51B5\u3002
  s\uFF1A\u91C7\u7528\u7A0B\u5E8F\u4FE1\u53F7\u7684\u683C\u5F0F\u663E\u793A\u7A0B\u5E8F\u72B6\u51B5\u3002
  S\uFF1A\u5217\u51FA\u7A0B\u5E8F\u65F6\uFF0C\u5305\u62EC\u5DF2\u4E2D\u65AD\u7684\u5B50\u7A0B\u5E8F\u8D44\u6599\u3002
  -t<span class="token operator">&lt;</span>\u7EC8\u7AEF\u673A\u7F16\u53F7<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u7EC8\u7AEF\u673A\u7F16\u53F7\uFF0C\u5E76\u5217\u51FA\u5C5E\u4E8E\u8BE5\u7EC8\u7AEF\u673A\u7684\u7A0B\u5E8F\u7684\u72B6\u51B5\u3002
  t<span class="token operator">&lt;</span>\u7EC8\u7AEF\u673A\u7F16\u53F7<span class="token operator">&gt;</span>\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;-t&quot;</span>\u9009\u9879\u76F8\u540C\uFF0C\u53EA\u5728\u5217\u8868\u683C\u5F0F\u65B9\u9762\u7A0D\u6709\u5DEE\u5F02\u3002
  -T\uFF1A\u663E\u793A\u73B0\u884C\u7EC8\u7AEF\u673A\u4E0B\u7684\u6240\u6709\u7A0B\u5E8F\u3002
  -u<span class="token operator">&lt;</span>\u7528\u6237\u8BC6\u522B\u7801<span class="token operator">&gt;</span>\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;-U&quot;</span>\u9009\u9879\u76F8\u540C\u3002
  u\uFF1A\u4EE5\u7528\u6237\u4E3A\u4E3B\u7684\u683C\u5F0F\u6765\u663E\u793A\u7A0B\u5E8F\u72B6\u51B5\u3002
  -U<span class="token operator">&lt;</span>\u7528\u6237\u8BC6\u522B\u7801<span class="token operator">&gt;</span>\uFF1A\u5217\u51FA\u5C5E\u4E8E\u8BE5\u7528\u6237\u7684\u7A0B\u5E8F\u7684\u72B6\u51B5\uFF0C\u4E5F\u53EF\u4F7F\u7528\u7528\u6237\u540D\u79F0\u6765\u6307\u5B9A\u3002
  U<span class="token operator">&lt;</span>\u7528\u6237\u540D\u79F0<span class="token operator">&gt;</span>\uFF1A\u5217\u51FA\u5C5E\u4E8E\u8BE5\u7528\u6237\u7684\u7A0B\u5E8F\u7684\u72B6\u51B5\u3002
  v\uFF1A\u91C7\u7528\u865A\u62DF\u5185\u5B58\u7684\u683C\u5F0F\u663E\u793A\u7A0B\u5E8F\u72B6\u51B5\u3002
  -V\u6216V\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002
  -w\u6216w\uFF1A\u91C7\u7528\u5BBD\u9614\u7684\u683C\u5F0F\u6765\u663E\u793A\u7A0B\u5E8F\u72B6\u51B5\u3002\u3000
  x\uFF1A\u663E\u793A\u6240\u6709\u7A0B\u5E8F\uFF0C\u4E0D\u4EE5\u7EC8\u7AEF\u673A\u6765\u533A\u5206\u3002
  X\uFF1A\u91C7\u7528\u65E7\u5F0F\u7684Linux i386\u767B\u9646\u683C\u5F0F\u663E\u793A\u7A0B\u5E8F\u72B6\u51B5\u3002
  -y\uFF1A\u914D\u5408\u9009\u9879<span class="token string">&quot;-l&quot;</span>\u4F7F\u7528\u65F6\uFF0C\u4E0D\u663E\u793AF<span class="token punctuation">(</span>flag<span class="token punctuation">)</span>\u680F\u4F4D\uFF0C\u5E76\u4EE5RSS\u680F\u4F4D\u53D6\u4EE3ADDR\u680F\u4F4D\u3000\u3002
  -<span class="token operator">&lt;</span>\u7A0B\u5E8F\u8BC6\u522B\u7801<span class="token operator">&gt;</span>\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;p&quot;</span>\u9009\u9879\u76F8\u540C\u3002
  --cols<span class="token operator">&lt;</span>\u6BCF\u5217\u5B57\u7B26\u6570<span class="token operator">&gt;</span>\uFF1A\u8BBE\u7F6E\u6BCF\u5217\u7684\u6700\u5927\u5B57\u7B26\u6570\u3002
  --columns<span class="token operator">&lt;</span>\u6BCF\u5217\u5B57\u7B26\u6570<span class="token operator">&gt;</span>\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;--cols&quot;</span>\u9009\u9879\u76F8\u540C\u3002
  --cumulative\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;S&quot;</span>\u9009\u9879\u76F8\u540C\u3002
  --deselect\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;-N&quot;</span>\u9009\u9879\u76F8\u540C\u3002
  --forest\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;f&quot;</span>\u9009\u9879\u76F8\u540C\u3002
  --headers\uFF1A\u91CD\u590D\u663E\u793A\u6807\u9898\u5217\u3002
  --help\uFF1A\u5728\u7EBF\u5E2E\u52A9\u3002
  --info\uFF1A\u663E\u793A\u6392\u9519\u4FE1\u606F\u3002
  --lines<span class="token operator">&lt;</span>\u663E\u793A\u5217\u6570<span class="token operator">&gt;</span>\uFF1A\u8BBE\u7F6E\u663E\u793A\u753B\u9762\u7684\u5217\u6570\u3002
  --no-headers\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;h&quot;</span>\u9009\u9879\u76F8\u540C\uFF0C\u53EA\u5728\u5217\u8868\u683C\u5F0F\u65B9\u9762\u7A0D\u6709\u5DEE\u5F02\u3002
  --group<span class="token operator">&lt;</span>\u7FA4\u7EC4\u540D\u79F0<span class="token operator">&gt;</span>\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;-G&quot;</span>\u9009\u9879\u76F8\u540C\u3002
  --Group<span class="token operator">&lt;</span>\u7FA4\u7EC4\u8BC6\u522B\u7801<span class="token operator">&gt;</span>\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;-G&quot;</span>\u9009\u9879\u76F8\u540C\u3002
  --pid<span class="token operator">&lt;</span>\u7A0B\u5E8F\u8BC6\u522B\u7801<span class="token operator">&gt;</span>\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;-p&quot;</span>\u9009\u9879\u76F8\u540C\u3002
  --rows<span class="token operator">&lt;</span>\u663E\u793A\u5217\u6570<span class="token operator">&gt;</span>\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;--lines&quot;</span>\u9009\u9879\u76F8\u540C\u3002
  --sid<span class="token operator">&lt;</span>\u9636\u6BB5\u4F5C\u4E1A<span class="token operator">&gt;</span>\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;-s&quot;</span>\u9009\u9879\u76F8\u540C\u3002
  --tty<span class="token operator">&lt;</span>\u7EC8\u7AEF\u673A\u7F16\u53F7<span class="token operator">&gt;</span>\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;-t&quot;</span>\u9009\u9879\u76F8\u540C\u3002
  --user<span class="token operator">&lt;</span>\u7528\u6237\u540D\u79F0<span class="token operator">&gt;</span>\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;-U&quot;</span>\u9009\u9879\u76F8\u540C\u3002
  --User<span class="token operator">&lt;</span>\u7528\u6237\u8BC6\u522B\u7801<span class="token operator">&gt;</span>\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;-U&quot;</span>\u9009\u9879\u76F8\u540C\u3002
  --version\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;-V&quot;</span>\u9009\u9879\u76F8\u540C\u3002
  --widty<span class="token operator">&lt;</span>\u6BCF\u5217\u5B57\u7B26\u6570<span class="token operator">&gt;</span>\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u6307\u5B9A<span class="token string">&quot;-cols&quot;</span>\u9009\u9879\u76F8\u540C\u3002
 
ps\u547D\u4EE4\u8F93\u51FA\u5B57\u6BB5\u8BF4\u660E:
  \u2022 <span class="token environment constant">USER</span>\uFF1A\u8BE5 process \u5C5E\u4E8E\u90A3\u4E2A\u4F7F\u7528\u8005\u8D26\u53F7\u7684\uFF1F
  \u2022 PID \uFF1A\u8BE5 process \u7684\u53F7\u7801\u3002
  \u2022 <span class="token environment constant">PPID</span> \uFF1A\u8BE5 process\u7684\u7236\u8FDB\u7A0B\u7684\u53F7\u7801\u3002
  \u2022 %CPU\uFF1A\u8BE5 process \u4F7F\u7528\u6389\u7684 CPU \u8D44\u6E90\u767E\u5206\u6BD4\uFF1B
  \u2022 %MEM\uFF1A\u8BE5 process \u6240\u5360\u7528\u7684\u7269\u7406\u5185\u5B58\u767E\u5206\u6BD4\uFF1B
  \u2022 VSZ \uFF1A\u8BE5 process \u4F7F\u7528\u6389\u7684\u865A\u62DF\u5185\u5B58\u91CF <span class="token punctuation">(</span>Kbytes<span class="token punctuation">)</span>
  \u2022 RSS \uFF1A\u8BE5 process \u5360\u7528\u7684\u56FA\u5B9A\u7684\u5185\u5B58\u91CF <span class="token punctuation">(</span>Kbytes<span class="token punctuation">)</span>
  \u2022 TTY \uFF1A\u8BE5 process \u662F\u5728\u90A3\u4E2A\u7EC8\u7AEF\u673A\u4E0A\u9762\u8FD0\u4F5C\uFF0C\u82E5\u4E0E\u7EC8\u7AEF\u673A\u65E0\u5173\uFF0C\u5219\u663E\u793A ?\uFF0C\u53E6\u5916\uFF0C tty1-tty6 \u662F\u672C\u673A\u4E0A\u9762\u7684\u767B\u5165\u8005\u7A0B\u5E8F\uFF0C\u82E5\u4E3A pts/0 \u7B49\u7B49\u7684\uFF0C\u5219\u8868\u793A\u4E3A\u7531\u7F51\u7EDC\u8FDE\u63A5\u8FDB\u4E3B\u673A\u7684\u7A0B\u5E8F\u3002
  \u2022 STAT\uFF1A\u8BE5\u7A0B\u5E8F\u76EE\u524D\u7684\u72B6\u6001\uFF0C\u4E3B\u8981\u7684\u72B6\u6001\u6709\uFF1A
    o R \uFF1A\u8BE5\u7A0B\u5E8F\u76EE\u524D\u6B63\u5728\u8FD0\u4F5C\uFF0C\u6216\u8005\u662F\u53EF\u88AB\u8FD0\u4F5C\uFF1B
    o S \uFF1A\u8BE5\u7A0B\u5E8F\u76EE\u524D\u6B63\u5728\u7761\u7720\u5F53\u4E2D <span class="token punctuation">(</span>\u53EF\u8BF4\u662F idle \u72B6\u6001\u5566\uFF01<span class="token punctuation">)</span>\uFF0C\u4F46\u53EF\u88AB\u67D0\u4E9B\u8BAF\u53F7 <span class="token punctuation">(</span>signal<span class="token punctuation">)</span> \u5524\u9192\u3002
    o T \uFF1A\u8BE5\u7A0B\u5E8F\u76EE\u524D\u6B63\u5728\u4FA6\u6D4B\u6216\u8005\u662F\u505C\u6B62\u4E86\uFF1B
    o Z \uFF1A\u8BE5\u7A0B\u5E8F\u5E94\u8BE5\u5DF2\u7ECF\u7EC8\u6B62\uFF0C\u4F46\u662F\u5176\u7236\u7A0B\u5E8F\u5374\u65E0\u6CD5\u6B63\u5E38\u7684\u7EC8\u6B62\u4ED6\uFF0C\u9020\u6210 zombie <span class="token punctuation">(</span>\u7586\u5C38<span class="token punctuation">)</span> \u7A0B\u5E8F\u7684\u72B6\u6001
  \u2022 START\uFF1A\u8BE5 process \u88AB\u89E6\u53D1\u542F\u52A8\u7684\u65F6\u95F4\uFF1B
  \u2022 TIME \uFF1A\u8BE5 process \u5B9E\u9645\u4F7F\u7528 CPU \u8FD0\u4F5C\u7684\u65F6\u95F4\u3002
  \u2022 COMMAND\uFF1A\u8BE5\u7A0B\u5E8F\u7684\u5B9E\u9645\u6307\u4EE4\u4E3A\u4F55\uFF1F
  
\u5B9E\u4F8B\uFF1A
$ <span class="token function">ps</span>  //\u67E5\u770B\u5F53\u524D\u7EC8\u7AEF\u4E0B\u542F\u52A8\u7684\u8FDB\u7A0B
  PID TTY           TIME CMD
    <span class="token number">1</span> ??         <span class="token number">0</span>:09.48 /sbin/launchd
   <span class="token number">56</span> ??         <span class="token number">0</span>:00.29 /usr/sbin/syslogd
$ <span class="token function">ps</span> aux // \u67E5\u770B\u6240\u6709\u7684\u8FDB\u7A0B 
 <span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">more</span>
<span class="token environment constant">USER</span>               PID  %CPU %MEM      VSZ    RSS   TT  STAT STARTED      TIME COMMAND
monsoon            <span class="token number">497</span>  <span class="token number">14.2</span>  <span class="token number">6.7</span>  <span class="token number">6448572</span> <span class="token number">558980</span>   ??  S    <span class="token number">11</span>:06\u4E0A\u5348   <span class="token number">6</span>:22.40 /Applications/QQMusic.app/Contents/MacOS/QQMusic
$ <span class="token function">ps</span> <span class="token parameter variable">-e</span> <span class="token operator">|</span> <span class="token function">more</span>
  PID \u8FDB\u7A0BID 
  TTY\u4E0E\u8FDB\u7A0B\u5173\u8054\u7684\u7EC8\u7AEF
  TIME \u8FDB\u7A0B\u4F7F\u7528CPU\u7D2F\u8BA1\u65F6\u95F4
  CMD  \u6267\u884C\u6587\u4EF6\u7684\u540D\u79F0
  PID TTY           TIME CMD
    <span class="token number">1</span> ??         <span class="token number">0</span>:09.48 /sbin/launchd
   <span class="token number">56</span> ??         <span class="token number">0</span>:00.29 /usr/sbin/syslogd
$ <span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">more</span>
  <span class="token environment constant">UID</span>  \u7528\u6237ID
  <span class="token environment constant">PPID</span> \u7236\u8FDB\u7A0B\u7684ID
  <span class="token environment constant">UID</span>   PID  <span class="token environment constant">PPID</span>   C STIME   TTY           TIME CMD
    <span class="token number">0</span>     <span class="token number">1</span>     <span class="token number">0</span>   <span class="token number">0</span> <span class="token number">11</span>:05\u4E0A\u5348 ??         <span class="token number">0</span>:09.64 /sbin/launchd
    <span class="token number">0</span>    <span class="token number">56</span>     <span class="token number">1</span>   <span class="token number">0</span> <span class="token number">11</span>:06\u4E0A\u5348 ??         <span class="token number">0</span>:00.29 /usr/sbin/syslogd
$ <span class="token function">ps</span> <span class="token parameter variable">-axj</span> //\u67E5\u770B\u5B88\u62A4\u8FDB\u7A0B
$ <span class="token function">ps</span> <span class="token parameter variable">-u</span> root //\u67E5\u770Broot\u7684\u8FDB\u573A

$ <span class="token function">watch</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token string">&#39;ps -aux --sort -pmem,-pcpu | head -10&#39;</span> //\u5B9E\u65F6\u76D1\u6D4B\u5185\u5B58\u548Ccpu\u4F7F\u7528\u8F83\u9AD8\u7684\u524D10\u4E2A\u7A0B\u5E8F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="top-htop" tabindex="-1"><a class="header-anchor" href="#top-htop" aria-hidden="true">#</a> top/htop</h3><p>top\u662F\u4E00\u4E2A\u5F88\u6709\u7528\u7684\u547D\u4EE4\uFF0C\u53EF\u4EE5\u76D1\u89C6\u7CFB\u7EDF\u4E2D\u4E0D\u540C\u8FDB\u7A0B\u6240\u4F7F\u7528\u7684\u8D44\u6E90\uFF0C\u5B83\u63D0\u4F9B\u5B9E\u65F6\u7684\u7CFB\u7EDF\u72B6\u6001\u4FE1\u606F\uFF0C\u662F\u4E00\u4E2A\u7EFC\u5408\u4E86\u591A\u65B9\u4FE1\u606F\u7684\u76D1\u89C6\u5DE5\u5177\uFF0C\u901A\u8FC7top\u547D\u4EE4\u6240\u63D0\u4F9B\u7684\u4EA4\u4E92\u5F0F\u7684\u89E3\u5BC6\uFF0C\u53EF\u4EE5\u7528\u70ED\u952E\u7BA1\u7406\u3002\u53E6\u5916htop\u547D\u4EE4\u662F\u52A0\u5F3A\u7248\u7684top\u547D\u4EE4\uFF0C\u4F46\u662F\u5728\u5E38\u7528\u7684\u53D1\u578B\u7248\u4E2D\u6CA1\u6709\u9ED8\u8BA4\u6309\u7167\uFF0C\u56E0\u6B64\u4E0D\u505A\u8BA8\u8BBA\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage: <span class="token function">top</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span>
\u9009\u9879:
  -b\uFF1A\u4EE5\u6279\u5904\u7406\u6A21\u5F0F\u64CD\u4F5C\uFF1B
  -c\uFF1A\u663E\u793A\u5B8C\u6574\u7684\u6CBB\u547D\u4EE4\uFF1B
  -d\uFF1A\u5C4F\u5E55\u5237\u65B0\u95F4\u9694\u65F6\u95F4\uFF1B
  -I\uFF1A\u5FFD\u7565\u5931\u6548\u8FC7\u7A0B\uFF1B
  -s\uFF1A\u4FDD\u5BC6\u6A21\u5F0F\uFF1B
  -S\uFF1A\u7D2F\u79EF\u6A21\u5F0F\uFF1B
  -i<span class="token operator">&lt;</span>\u65F6\u95F4<span class="token operator">&gt;</span>\uFF1A\u8BBE\u7F6E\u95F4\u9694\u65F6\u95F4\uFF1B
  -u<span class="token operator">&lt;</span>\u7528\u6237\u540D<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u7528\u6237\u540D\uFF1B
  -p<span class="token operator">&lt;</span>\u8FDB\u7A0B\u53F7<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u8FDB\u7A0B\uFF1B
  -n<span class="token operator">&lt;</span>\u6B21\u6570<span class="token operator">&gt;</span>\uFF1A\u5FAA\u73AF\u663E\u793A\u7684\u6B21\u6570\u3002
\u4EA4\u4E92\u547D\u4EE4\uFF1A
  h\uFF1A\u663E\u793A\u5E2E\u52A9\u753B\u9762\uFF0C\u7ED9\u51FA\u4E00\u4E9B\u7B80\u77ED\u7684\u547D\u4EE4\u603B\u7ED3\u8BF4\u660E\uFF1B
  k\uFF1A\u7EC8\u6B62\u4E00\u4E2A\u8FDB\u7A0B\uFF1B
  i\uFF1A\u5FFD\u7565\u95F2\u7F6E\u548C\u50F5\u6B7B\u8FDB\u7A0B\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5F00\u5173\u5F0F\u547D\u4EE4\uFF1B
  q\uFF1A\u9000\u51FA\u7A0B\u5E8F\uFF1B
  r\uFF1A\u91CD\u65B0\u5B89\u6392\u4E00\u4E2A\u8FDB\u7A0B\u7684\u4F18\u5148\u7EA7\u522B\uFF1B
  S\uFF1A\u5207\u6362\u5230\u7D2F\u8BA1\u6A21\u5F0F\uFF1B
  s\uFF1A\u6539\u53D8\u4E24\u6B21\u5237\u65B0\u4E4B\u95F4\u7684\u5EF6\u8FDF\u65F6\u95F4\uFF08\u5355\u4F4D\u4E3As\uFF09\uFF0C\u5982\u679C\u6709\u5C0F\u6570\uFF0C\u5C31\u6362\u7B97\u6210ms\u3002\u8F93\u51650\u503C\u5219\u7CFB\u7EDF\u5C06\u4E0D\u65AD\u5237\u65B0\uFF0C\u9ED8\u8BA4\u503C\u662F5s\uFF1B
  f\u6216\u8005F\uFF1A\u4ECE\u5F53\u524D\u663E\u793A\u4E2D\u6DFB\u52A0\u6216\u8005\u5220\u9664\u9879\u76EE\uFF1B
  o\u6216\u8005O\uFF1A\u6539\u53D8\u663E\u793A\u9879\u76EE\u7684\u987A\u5E8F\uFF1B
  l\uFF1A\u5207\u6362\u663E\u793A\u5E73\u5747\u8D1F\u8F7D\u548C\u542F\u52A8\u65F6\u95F4\u4FE1\u606F\uFF1B
  m\uFF1A\u5207\u6362\u663E\u793A\u5185\u5B58\u4FE1\u606F\uFF1B
  t\uFF1A\u5207\u6362\u663E\u793A\u8FDB\u7A0B\u548CCPU\u72B6\u6001\u4FE1\u606F\uFF1B
  c\uFF1A\u5207\u6362\u663E\u793A\u547D\u4EE4\u540D\u79F0\u548C\u5B8C\u6574\u547D\u4EE4\u884C\uFF1B
  M\uFF1A\u6839\u636E\u9A7B\u7559\u5185\u5B58\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F\uFF1B
  P\uFF1A\u6839\u636ECPU\u4F7F\u7528\u767E\u5206\u6BD4\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F\uFF1B
  T\uFF1A\u6839\u636E\u65F6\u95F4/\u7D2F\u8BA1\u65F6\u95F4\u8FDB\u884C\u6392\u5E8F\uFF1B
  w\uFF1A\u5C06\u5F53\u524D\u8BBE\u7F6E\u5199\u5165~/.toprc\u6587\u4EF6\u4E2D\u3002
  
\u5B9E\u4F8B\uFF1A
$ <span class="token function">top</span>
<span class="token comment"># top -xxx \u5F53\u524D\u65F6\u95F4  up xx \u7CFB\u7EDF\u8FD0\u884C\u65F6\u95F4  x users\u5F53\u524D\u767B\u5F55\u7528\u6237\u6570 </span>
<span class="token comment"># load average \u7CFB\u7EDF\u8D1F\u8F7D \u5373\u4EFB\u52A1\u961F\u5217\u7684\u5E73\u5747\u957F\u5EA6 \u5206\u522B1\u5206\u949F 5\u5206\u949F 15\u5206\u949F\u524D\u5230\u73B0\u5728\u7684\u5E73\u5747\u503C</span>
<span class="token function">top</span> - <span class="token number">13</span>:28:01 up <span class="token number">76</span> days, <span class="token number">16</span>:09,  <span class="token number">2</span> users,  load average: <span class="token number">0.00</span>, <span class="token number">0.01</span>, <span class="token number">0.05</span>
<span class="token comment"># \u7B2C\u4E8C\u3001\u4E09\u884C\u4E3A\u8FDB\u7A0B\u548CCPU\u7684\u4FE1\u606F\uFF0C\u5F53\u6709\u591A\u4E2ACPU\u65F6\uFF0C\u8FD9\u4E9B\u5185\u5BB9\u53EF\u80FD\u4F1A\u8D85\u8FC7\u4FE9\u884C</span>
<span class="token comment"># total \u8FDB\u7A0B\u603B\u6570 running \u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B\u6570 sleeping \u7761\u7720\u7684\u8FDB\u7A0B\u6570 </span>
<span class="token comment"># stoped \u505C\u6B62\u7684\u8FDB\u7A0B\u6570 zombie \u50F5\u5C38\u8FDB\u7A0B\u6570</span>
Tasks:  <span class="token number">85</span> total,   <span class="token number">1</span> running,  <span class="token number">84</span> sleeping,   <span class="token number">0</span> stopped,   <span class="token number">0</span> zombie
<span class="token comment"># CPU\u4FE1\u606F \u591A\u4E2ACPU\u5728\u6570\u5B57\u952E\u76D81 \u53EF\u4EE5\u6309\u7167\u6BCF\u4E2A\u903B\u8F91CPU\u7684\u72B6\u51B5</span>
<span class="token comment"># us \u7528\u6237\u7A7A\u95F4\u5360\u7528CPU\u767E\u5206\u6BD4 sy\u5185\u6838\u7A7A\u95F4\u5360\u7528CPU\u767E\u5206\u6BD4 ni\u7528\u6237\u8FDB\u573A\u7A7A\u95F4\u5185\u6539\u53D8\u4F18\u5148\u7EA7\u7684\u8FDB\u7A0B\u5360\u7528CPU\u767E\u5206\u6BD4</span>
<span class="token comment"># id \u7A7A\u95F2CPU\u767E\u5206\u6BD4 wa \u7B49\u5F85\u8F93\u5165\u8F93\u51FA\u7684CPU\u65F6\u95F4\u767E\u5206\u6BD4 hi \u786C\u4EF6CPU\u4E2D\u65AD\u518D\u7528\u767E\u5206\u6BD4 si\u8F6F\u4E2D\u65AD\u5360\u7528\u767E\u5206\u6BD4</span>
<span class="token comment"># \u865A\u62DF\u673A\u5360\u7528\u767E\u5206\u6BD4</span>
%Cpu<span class="token punctuation">(</span>s<span class="token punctuation">)</span>:  <span class="token number">0.2</span> us,  <span class="token number">0.1</span> sy,  <span class="token number">0.0</span> ni, <span class="token number">99.7</span> id,  <span class="token number">0.1</span> wa,  <span class="token number">0.0</span> hi,  <span class="token number">0.0</span> si,  <span class="token number">0.0</span> st
<span class="token comment"># \u5185\u5B58\u4FE1\u606F</span>
<span class="token comment"># total \u7269\u7406\u5185\u5B58\u603B\u91CF free \u7A7A\u95F2\u5185\u5B58\u603B\u91CF	used \u4F7F\u7528\u7684\u7269\u7406\u5185\u5B58\u603B\u91CF  buff/cache \u5185\u6838\u7F13\u5B58\u7684\u5185\u5B58\u91CF</span>
KiB Mem <span class="token builtin class-name">:</span>  <span class="token number">3882032</span> total,   <span class="token number">211112</span> free,   <span class="token number">166384</span> used,  <span class="token number">3504536</span> buff/cache
<span class="token comment"># swap </span>
<span class="token comment"># total \u4EA4\u6362\u533A\u603B\u603B\u91CF	free \u7A7A\u95F2\u4EA4\u6362\u533A\u603B\u91CF used \u4F7F\u7528\u7684\u4EA4\u6362\u533A\u603B\u91CF avail mem\u6709\u6548\u5185\u5B58</span>
KiB Swap:        <span class="token number">0</span> total,        <span class="token number">0</span> free,        <span class="token number">0</span> used.  <span class="token number">3409756</span> avail Mem
<span class="token comment"># PID-\u8FDB\u7A0BID  USER-\u8FDB\u7A0B\u641C\u6709\u8005 PR-\u8FDB\u7A0B\u4F18\u5148\u7EA7 NI-nice\u503C\u8D1F\u503C\u8868\u793A\u9AD8\u4F18\u5148\u7EA7 \u6B63\u76F4\u8868\u793A\u4F4E\u4F18\u5148\u7EA7</span>
<span class="token comment"># VIRT-\u8FDB\u7A0B\u4F7F\u7528\u7684\u865A\u62DF\u5185\u5B58\u603B\u91CF,\u5355\u4F4D\u4E3AKB  RES-\u8FDB\u7A0B\u4F7F\u7528\u7684\uFF0C\u672A\u88AB\u6362\u51FA\u6765\u7684\u7269\u7406\u5185\u5B58\u5927\u5C0F</span>
<span class="token comment"># SHR-\u5171\u4EAB\u5185\u5B58\u5927\u5C0F\uFF0C\u5355\u4F4DKB S-\u8FDB\u7A0B\u72B6\u6001 D=\u4E0D\u53EF\u4E2D\u65AD\u7684\u7761\u7720\u72B6\u6001 R=\u7761\u7720 T=\u8DDF\u8E2A/\u505C\u6B62 Z=\u50F5\u5C38\u8FDB\u7A0B</span>
<span class="token comment"># %CPU-\u4E0A\u6B21\u66F4\u65B0\u5230\u73B0\u5728\u7684CPU\u65F6\u95F4\u5360\u7528\u767E\u5206\u6BD4 %MEM-\u8FDB\u7A0B\u4F7F\u7528\u7684\u7269\u7406\u5185\u5B58\u767E\u5206\u6BD4 </span>
<span class="token comment"># TIME+/\u8FDB\u7A0B\u4F7F\u7528CPU\u65F6\u95F4\u603B\u8BA1\uFF0C\u5355\u4F4D1/100\u79D2</span>
<span class="token comment"># COMMAND-\u8FDB\u7A0B\u540D\u79F0</span>
  PID <span class="token environment constant">USER</span>      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
    <span class="token number">1</span> root      <span class="token number">20</span>   <span class="token number">0</span>  <span class="token number">123036</span>   <span class="token number">3736</span>   <span class="token number">2428</span> S   <span class="token number">0.0</span>  <span class="token number">0.1</span>   <span class="token number">4</span>:57.39 systemd
    
$ <span class="token function">top</span>  <span class="token parameter variable">-d</span> <span class="token number">2</span> //\u6BCF\u9694\u4FE9\u79D2\u663E\u793A\u6240\u6709\u8FDB\u7A0B\u7684\u8D44\u6E90\u5360\u7528\u60C5\u51B5
$ <span class="token function">top</span> <span class="token parameter variable">-p</span> <span class="token number">4360,4345</span> //\u76D1\u63A7\u5236\u5EA6\u7684\u8FDB\u573A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pgrep-pkill-kill-w" tabindex="-1"><a class="header-anchor" href="#pgrep-pkill-kill-w" aria-hidden="true">#</a> pgrep/pkill/kill/w</h3><p>pgrep\u547D\u4EE4\u4EE5\u540D\u79F0\u4E3A\u4F9D\u636E\u4ECE\u8FDB\u7A0B\u8FD0\u884C\u961F\u5217\u4E2D\u67E5\u627E\u8FDB\u7A0B\uFF0C\u5E76\u663E\u793A\u67E5\u627E\u5230\u7684\u8FDB\u573Aid\u3002\u6BCF\u4E00\u4E2A\u8FDB\u7A0BID\u4EE5\u4E00\u4E2A\u5341\u8FDB\u5236\u6570\u8868\u793A\uFF0C\u901A\u8FC7\u4E00\u4E2A\u5206\u5272\u5B57\u7B26\u4E32\u548C\u4E0B\u4E00\u4E2AID\u5206\u5F00\uFF0C\u9ED8\u8BA4\u7684\u5206\u5272\u5B57\u7B26\u4E32\u662F\u4E00\u4E2A\u65B0\u884C\u3002\u5BF9\u4E8E\u6BCF\u4E2A\u5C5E\u6027\u9009\u9879\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E0A\u6307\u5B9A\u4E00\u4E2A\u4EE5\u9017\u53F7\u5206\u5272\u7684\u53EF\u80FD\u503C\u7684\u96C6\u5408\u3002pkill\u547D\u4EE4\u53EF\u4EE5\u6309\u7167\u8FDB\u7A0B\u540D\u6740\u6B7B\u8FDB\u7A0B\u3002\u5982\u679C\u60F3\u8981\u5355\u72EC\u6740\u6B7B\u67D0\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u4F7F\u7528kill\u547D\u4EE4\uFF0C\u8BE5\u547D\u4EE4\u7ED9\u6307\u5B9A\u8FDB\u7A0B\u53D1\u9001\u4FE1\u53F7\uFF0C\u5927\u591A\u6570\u7528\u4E8E\u5173\u95ED\u8FDB\u7A0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage: pgrep <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u53C2\u6570<span class="token punctuation">]</span>
\u9009\u9879:
  -o\uFF1A\u4EC5\u663E\u793A\u627E\u5230\u7684\u6700\u5C0F\uFF08\u8D77\u59CB\uFF09\u8FDB\u7A0B\u53F7\uFF1B
  -n\uFF1A\u4EC5\u663E\u793A\u627E\u5230\u7684\u6700\u5927\uFF08\u7ED3\u675F\uFF09\u8FDB\u7A0B\u53F7\uFF1B
  -l\uFF1A\u663E\u793A\u8FDB\u7A0B\u540D\u79F0\uFF1B
  -P\uFF1A\u6307\u5B9A\u7236\u8FDB\u7A0B\u53F7\uFF1B
  -g\uFF1A\u6307\u5B9A\u8FDB\u7A0B\u7EC4\uFF1B
  -t\uFF1A\u6307\u5B9A\u5F00\u542F\u8FDB\u7A0B\u7684\u7EC8\u7AEF\uFF1B
  -u\uFF1A\u6307\u5B9A\u8FDB\u7A0B\u7684\u6709\u6548\u7528\u6237ID\u3002
\u53C2\u6570\uFF1A
	\u8FDB\u7A0B\u540D\u79F0\uFF0C\u6307\u5B9A\u8981\u67E5\u627E\u7684\u8FDB\u573A\u540D\u79F0\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u7C7B\u4F3Cgrep\u6307\u4EE4\u4E2D\u5339\u914D\u6A21\u5F0F
\u5B9E\u4F8B\uFF1A
	$ pgrep <span class="token parameter variable">-u</span> monsoon <span class="token parameter variable">-l</span> <span class="token function">sh</span> //\u663E\u793A\u7528\u6237\u4E3Amonsoon\u4E0B\u540D\u79F0\u4E3Ash\u7684\u8FDB\u7A0BID
	
usage: <span class="token function">pkill</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u53C2\u6570<span class="token punctuation">]</span>
\u9009\u9879\uFF1A
  -o\uFF1A\u4EC5\u5411\u627E\u5230\u7684\u6700\u5C0F\uFF08\u8D77\u59CB\uFF09\u8FDB\u7A0B\u53F7\u53D1\u9001\u4FE1\u53F7\uFF1B
  -n\uFF1A\u4EC5\u5411\u627E\u5230\u7684\u6700\u5927\uFF08\u7ED3\u675F\uFF09\u8FDB\u7A0B\u53F7\u53D1\u9001\u4FE1\u53F7\uFF1B
  -P\uFF1A\u6307\u5B9A\u7236\u8FDB\u7A0B\u53F7\u53D1\u9001\u4FE1\u53F7\uFF1B
  -g\uFF1A\u6307\u5B9A\u8FDB\u7A0B\u7EC4\uFF1B
  -t\uFF1A\u6307\u5B9A\u5F00\u542F\u8FDB\u7A0B\u7684\u7EC8\u7AEF\u3002
\u53C2\u6570:
	\u6307\u5B9A\u8981\u67E5\u627E\u7684\u8FDB\u7A0B\u540D\u79F0\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u7C7B\u4F3Cgrep\u6307\u4EE4\u4E2D\u7684\u5339\u914D\u6A21\u5F0F\u3002
\u5B9E\u4F8B:
	<span class="token function">pkill</span> gaim
	
	
usage: 
	<span class="token function">kill</span> <span class="token punctuation">[</span>-s signal<span class="token operator">|</span>-p<span class="token punctuation">]</span> <span class="token punctuation">[</span>-q sigval<span class="token punctuation">]</span> <span class="token punctuation">[</span>-a<span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">]</span> pid<span class="token punctuation">..</span>.
    <span class="token function">kill</span> <span class="token parameter variable">-l</span> <span class="token punctuation">[</span>signal<span class="token punctuation">]</span>
\u5E38\u7528\u4FE1\u53F7\uFF1A
    <span class="token number">0</span>\uFF09\u7528\u4E8E\u6D4B\u8BD5\u8FDB\u7A0B\u662F\u5426\u5B58\u5728
    <span class="token number">1</span>\uFF09SIGHUP:\u65E0\u9700\u5173\u95ED\u8FDB\u7A0B\u8BA9\u5176\u91CD\u8BFB\u914D\u7F6E\u6587\u4EF6
    <span class="token number">2</span>\uFF09SIGINT:\u4E2D\u6B62\u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B\uFF0C\u76F8\u5F53\u4E8Ectrl+c
    <span class="token number">3</span><span class="token punctuation">)</span> SIGQUIT:\u9000\u51FA\uFF0C\u76F8\u5F53\u4E8Ectrl+<span class="token punctuation">\\</span>
    <span class="token number">9</span><span class="token punctuation">)</span> SIGKILL:\u5F3A\u5236\u6740\u6B7B\u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B
    <span class="token number">15</span>\uFF09SIGTERM:\u7EC8\u6B62\u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B
    <span class="token number">18</span>\uFF09SIGCONT:\u7EE7\u7EED\u8FD0\u884C
    <span class="token number">19</span>\uFF09SIGSTOP:\u540E\u53F0\u7761\u7720
\u6307\u5B9A\u4FE1\u53F7\u65B9\u5F0F\uFF1A
    \u6570\u5B57\u65B9\u5F0F,\u59821
    \u4FE1\u53F7\u5B8C\u6574\u540D\u5B57\uFF0C\u5982SIGHUP
    \u4FE1\u53F7\u7B80\u5199\uFF0C\u5982HUP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="w" tabindex="-1"><a class="header-anchor" href="#w" aria-hidden="true">#</a> w</h3><p>w\u547D\u4EE4\u63D0\u4F9B\u4E86\u5F53\u524D\u767B\u5F55\u7684\u7528\u6237\u53CA\u5176\u6B63\u5728\u6267\u884C\u7684\u8FDB\u7A0B\u7684\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ w
<span class="token number">15</span>:35  up  <span class="token number">4</span>:30, <span class="token number">3</span> users, load averages: <span class="token number">1.36</span> <span class="token number">1.51</span> <span class="token number">1.50</span>
<span class="token environment constant">USER</span>     TTY      FROM              LOGIN@  IDLE WHAT
monsoon  console  -                <span class="token number">11</span>:06    <span class="token number">4</span>:28 -
monsoon  s000     -                <span class="token number">12</span>:18    <span class="token number">1</span>:21 <span class="token parameter variable">-bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u540E\u53F0\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u540E\u53F0\u8FDB\u7A0B" aria-hidden="true">#</a> \u540E\u53F0\u8FDB\u7A0B</h3><p>\u8981\u5728\u540E\u53F0\u542F\u52A8\u4E00\u4E2A\u8FDB\u7A0B\uFF0C\u4F7F\u7528&amp;\u7B26\u53F7\uFF0C\u6B64\u65F6\u8BE5\u8FDB\u7A0B\u4E0D\u4F1A\u4ECE\u7528\u6237\u4E2D\u8BFB\u53D6\u8F93\u5165\uFF0C\u76F4\u5230\u5B83\u88AB\u79FB\u52A8\u5230\u524D\u53F0\u3002\u5F53\u7136\u4E5F\u53EF\u4EE5\u4F7F\u7528Ctrl+z\u6682\u505C\u6267\u884C\u4E00\u4E2A\u7A0B\u5E8F\u5E76\u628A\u5B83\u53D1\u9001\u5230\u540E\u53F0\uFF0C\u5B83\u4F1A\u7ED9\u7981\u6B62\u53D1\u9001SIGSTOP\u4FE1\u53F7\uFF0C\u4ECE\u800C\u6682\u505C\u5B83\u7684\u6267\u884C\uFF0C\u5B83\u4F1A\u53D8\u4E3A\u7A7A\u95F2\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ ./weixin &amp;
$ jobs
[1]+ Running  weinxin &amp;

$ tar -cf backup.tar. backup/ ### \u6309\u4E0BCtrl + Z
$ jobs

\u8981\u5728\u540E\u53F0\u7EE7\u7EED\u8FD0\u884C\u4E0A\u9762\u88AB\u6682\u505C\u7684\u547D\u4EE4\uFF0C\u4F7F\u7528bg\u547D\u4EE4
$ bg
# \u8981\u628A\u540E\u53F0\u8FDB\u7A0B\u53D1\u9001\u5230\u524D\u53F0,\u4F7F\u7528fg\u547D\u4EE4\u4EE5\u53CA\u4EBA\u4EFB\u52A1\u7684ID\uFF0C\u7C7B\u4F3C
$ jobs
$ fg %1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),p=[l];function t(c,o){return s(),a("div",null,p)}const d=n(i,[["render",t],["__file","process.html.vue"]]);export{d as default};
