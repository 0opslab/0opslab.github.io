import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},o=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-A\u6216\u2013catenate \u65B0\u589E\u6587\u4EF6\u5230\u5DF2\u5B58\u5728\u7684\u5907\u4EFD\u6587\u4EF6\u3002
-b<span class="token operator">&lt;</span>\u533A\u5757\u6570\u76EE<span class="token operator">&gt;</span>\u6216\u2013blocking-factor<span class="token operator">=</span><span class="token operator">&lt;</span>\u533A\u5757\u6570\u76EE<span class="token operator">&gt;</span> \u8BBE\u7F6E\u6BCF\u7B14\u8BB0\u5F55\u7684\u533A\u5757\u6570\u76EE\uFF0C\u6BCF\u4E2A\u533A\u5757\u5927\u5C0F\u4E3A12Bytes\u3002
-B\u6216\u2013read-full-records \u8BFB\u53D6\u6570\u636E\u65F6\u91CD\u8BBE\u533A\u5757\u5927\u5C0F\u3002
-c\u6216\u2013create \u5EFA\u7ACB\u65B0\u7684\u5907\u4EFD\u6587\u4EF6\u3002
-C<span class="token operator">&lt;</span>\u76EE\u7684\u76EE\u5F55<span class="token operator">&gt;</span>\u6216\u2013directory<span class="token operator">=</span><span class="token operator">&lt;</span>\u76EE\u7684\u76EE\u5F55<span class="token operator">&gt;</span> \u5207\u6362\u5230\u6307\u5B9A\u7684\u76EE\u5F55\u3002
-d\u6216\u2013diff\u6216\u2013compare \u5BF9\u6BD4\u5907\u4EFD\u6587\u4EF6\u5185\u548C\u6587\u4EF6\u7CFB\u7EDF\u4E0A\u7684\u6587\u4EF6\u7684\u5DEE\u5F02\u3002
-f<span class="token operator">&lt;</span>\u5907\u4EFD\u6587\u4EF6<span class="token operator">&gt;</span>\u6216\u2013file<span class="token operator">=</span><span class="token operator">&lt;</span>\u5907\u4EFD\u6587\u4EF6<span class="token operator">&gt;</span> \u6307\u5B9A\u5907\u4EFD\u6587\u4EF6\u3002
-F<span class="token operator">&lt;</span>Script\u6587\u4EF6<span class="token operator">&gt;</span>\u6216\u2013info-script<span class="token operator">=</span><span class="token operator">&lt;</span>Script\u6587\u4EF6<span class="token operator">&gt;</span> \u6BCF\u6B21\u66F4\u6362\u78C1\u5E26\u65F6\uFF0C\u5C31\u6267\u884C\u6307\u5B9A\u7684Script\u6587\u4EF6\u3002
-g\u6216\u2013listed-incremental \u5904\u7406GNU\u683C\u5F0F\u7684\u5927\u91CF\u5907\u4EFD\u3002
-G\u6216\u2013incremental \u5904\u7406\u65E7\u7684GNU\u683C\u5F0F\u7684\u5927\u91CF\u5907\u4EFD\u3002
-h\u6216\u2013dereference \u4E0D\u5EFA\u7ACB\u7B26\u53F7\u8FDE\u63A5\uFF0C\u76F4\u63A5\u590D\u5236\u8BE5\u8FDE\u63A5\u6240\u6307\u5411\u7684\u539F\u59CB\u6587\u4EF6\u3002
-i\u6216\u2013ignore-zeros \u5FFD\u7565\u5907\u4EFD\u6587\u4EF6\u4E2D\u76840 Byte\u533A\u5757\uFF0C\u4E5F\u5C31\u662FEOF\u3002
-k\u6216\u2013keep-old-files \u89E3\u5F00\u5907\u4EFD\u6587\u4EF6\u65F6\uFF0C\u4E0D\u8986\u76D6\u5DF2\u6709\u7684\u6587\u4EF6\u3002
-K<span class="token operator">&lt;</span>\u6587\u4EF6<span class="token operator">&gt;</span>\u6216\u2013starting-file<span class="token operator">=</span><span class="token operator">&lt;</span>\u6587\u4EF6<span class="token operator">&gt;</span> \u4ECE\u6307\u5B9A\u7684\u6587\u4EF6\u5F00\u59CB\u8FD8\u539F\u3002
-l\u6216\u2013one-file-system \u590D\u5236\u7684\u6587\u4EF6\u6216\u76EE\u5F55\u5B58\u653E\u7684\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u5FC5\u987B\u4E0Etar\u6307\u4EE4\u6267\u884C\u65F6\u6240\u5904\u7684\u6587\u4EF6\u7CFB\u7EDF\u76F8\u540C\uFF0C\u5426\u5219\u4E0D\u4E88\u590D\u5236\u3002
-L<span class="token operator">&lt;</span>\u5A92\u4F53\u5BB9\u91CF<span class="token operator">&gt;</span>\u6216-tape-length<span class="token operator">=</span><span class="token operator">&lt;</span>\u5A92\u4F53\u5BB9\u91CF<span class="token operator">&gt;</span> \u8BBE\u7F6E\u5B58\u653E\u6BCF\u4F53\u7684\u5BB9\u91CF\uFF0C\u5355\u4F4D\u4EE51024 Bytes\u8BA1\u7B97\u3002
-m\u6216\u2013modification-time \u8FD8\u539F\u6587\u4EF6\u65F6\uFF0C\u4E0D\u53D8\u66F4\u6587\u4EF6\u7684\u66F4\u6539\u65F6\u95F4\u3002
-M\u6216\u2013multi-volume \u5728\u5EFA\u7ACB\uFF0C\u8FD8\u539F\u5907\u4EFD\u6587\u4EF6\u6216\u5217\u51FA\u5176\u4E2D\u7684\u5185\u5BB9\u65F6\uFF0C\u91C7\u7528\u591A\u5377\u518C\u6A21\u5F0F\u3002
-N<span class="token operator">&lt;</span>\u65E5\u671F\u683C\u5F0F<span class="token operator">&gt;</span>\u6216\u2013newer<span class="token operator">=</span><span class="token operator">&lt;</span>\u65E5\u671F\u65F6\u95F4<span class="token operator">&gt;</span> \u53EA\u5C06\u8F83\u6307\u5B9A\u65E5\u671F\u66F4\u65B0\u7684\u6587\u4EF6\u4FDD\u5B58\u5230\u5907\u4EFD\u6587\u4EF6\u91CC\u3002
-o\u6216\u2013old-archive\u6216\u2013portability \u5C06\u8D44\u6599\u5199\u5165\u5907\u4EFD\u6587\u4EF6\u65F6\u4F7F\u7528V7\u683C\u5F0F\u3002
-O\u6216\u2013stdout \u628A\u4ECE\u5907\u4EFD\u6587\u4EF6\u91CC\u8FD8\u539F\u7684\u6587\u4EF6\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u8BBE\u5907\u3002
-p\u6216\u2013same-permissions \u7528\u539F\u6765\u7684\u6587\u4EF6\u6743\u9650\u8FD8\u539F\u6587\u4EF6\u3002
-P\u6216\u2013absolute-names \u6587\u4EF6\u540D\u4F7F\u7528\u7EDD\u5BF9\u540D\u79F0\uFF0C\u4E0D\u79FB\u9664\u6587\u4EF6\u540D\u79F0\u524D\u7684\u201D/\u201D\u53F7\u3002
-r\u6216\u2013append \u65B0\u589E\u6587\u4EF6\u5230\u5DF2\u5B58\u5728\u7684\u5907\u4EFD\u6587\u4EF6\u7684\u7ED3\u5C3E\u90E8\u5206\u3002
-R\u6216\u2013block-number \u5217\u51FA\u6BCF\u4E2A\u4FE1\u606F\u5728\u5907\u4EFD\u6587\u4EF6\u4E2D\u7684\u533A\u5757\u7F16\u53F7\u3002
-s\u6216\u2013same-order \u8FD8\u539F\u6587\u4EF6\u7684\u987A\u5E8F\u548C\u5907\u4EFD\u6587\u4EF6\u5185\u7684\u5B58\u653E\u987A\u5E8F\u76F8\u540C\u3002
-S\u6216\u2013sparse \u5018\u82E5\u4E00\u4E2A\u6587\u4EF6\u5185\u542B\u5927\u91CF\u7684\u8FDE\u7EED0\u5B57\u8282\uFF0C\u5219\u5C06\u6B64\u6587\u4EF6\u5B58\u6210\u7A00\u758F\u6587\u4EF6\u3002
-t\u6216\u2013list \u5217\u51FA\u5907\u4EFD\u6587\u4EF6\u7684\u5185\u5BB9\u3002
-T<span class="token operator">&lt;</span>\u8303\u672C\u6587\u4EF6<span class="token operator">&gt;</span>\u6216\u2013files-from<span class="token operator">=</span><span class="token operator">&lt;</span>\u8303\u672C\u6587\u4EF6<span class="token operator">&gt;</span> \u6307\u5B9A\u8303\u672C\u6587\u4EF6\uFF0C\u5176\u5185\u542B\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u8303\u672C\u6837\u5F0F\uFF0C\u8BA9tar\u89E3\u5F00\u6216\u5EFA\u7ACB\u7B26\u5408\u8BBE\u7F6E\u6761\u4EF6\u7684\u6587\u4EF6\u3002
-u\u6216\u2013update \u4EC5\u7F6E\u6362\u8F83\u5907\u4EFD\u6587\u4EF6\u5185\u7684\u6587\u4EF6\u66F4\u65B0\u7684\u6587\u4EF6\u3002
-U\u6216\u2013unlink-first \u89E3\u5F00\u538B\u7F29\u6587\u4EF6\u8FD8\u539F\u6587\u4EF6\u4E4B\u524D\uFF0C\u5148\u89E3\u9664\u6587\u4EF6\u7684\u8FDE\u63A5\u3002
-v\u6216\u2013verbose \u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\u3002
-V<span class="token operator">&lt;</span>\u5377\u518C\u540D\u79F0<span class="token operator">&gt;</span>\u6216\u2013label<span class="token operator">=</span><span class="token operator">&lt;</span>\u5377\u518C\u540D\u79F0<span class="token operator">&gt;</span> \u5EFA\u7ACB\u4F7F\u7528\u6307\u5B9A\u7684\u5377\u518C\u540D\u79F0\u7684\u5907\u4EFD\u6587\u4EF6\u3002
-w\u6216\u2013interactive \u906D\u9047\u95EE\u9898\u65F6\u5148\u8BE2\u95EE\u7528\u6237\u3002
-W\u6216\u2013verify \u5199\u5165\u5907\u4EFD\u6587\u4EF6\u540E\uFF0C\u786E\u8BA4\u6587\u4EF6\u6B63\u786E\u65E0\u8BEF\u3002
-x\u6216\u2013extract\u6216\u2013get \u4ECE\u5907\u4EFD\u6587\u4EF6\u4E2D\u8FD8\u539F\u6587\u4EF6\u3002
-X<span class="token operator">&lt;</span>\u8303\u672C\u6587\u4EF6<span class="token operator">&gt;</span>\u6216\u2013exclude-from<span class="token operator">=</span><span class="token operator">&lt;</span>\u8303\u672C\u6587\u4EF6<span class="token operator">&gt;</span> \u6307\u5B9A\u8303\u672C\u6587\u4EF6\uFF0C\u5176\u5185\u542B\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u8303\u672C\u6837\u5F0F\uFF0C\u8BA9ar\u6392\u9664\u7B26\u5408\u8BBE\u7F6E\u6761\u4EF6\u7684\u6587\u4EF6\u3002
-z\u6216\u2013gzip\u6216\u2013ungzip \u901A\u8FC7gzip\u6307\u4EE4\u5904\u7406\u5907\u4EFD\u6587\u4EF6\u3002
-Z\u6216\u2013compress\u6216\u2013uncompress \u901A\u8FC7compress\u6307\u4EE4\u5904\u7406\u5907\u4EFD\u6587\u4EF6\u3002
-<span class="token operator">&lt;</span>\u8BBE\u5907\u7F16\u53F7<span class="token operator">&gt;</span><span class="token operator">&lt;</span>\u5B58\u50A8\u5BC6\u5EA6<span class="token operator">&gt;</span> \u8BBE\u7F6E\u5907\u4EFD\u7528\u7684\u5916\u56F4\u8BBE\u5907\u7F16\u53F7\u53CA\u5B58\u653E\u6570\u636E\u7684\u5BC6\u5EA6\u3002
\u2013after-date<span class="token operator">=</span><span class="token operator">&lt;</span>\u65E5\u671F\u65F6\u95F4<span class="token operator">&gt;</span> \u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201D-N\u201D\u53C2\u6570\u76F8\u540C\u3002
\u2013atime-preserve \u4E0D\u53D8\u66F4\u6587\u4EF6\u7684\u5B58\u53D6\u65F6\u95F4\u3002
\u2013backup<span class="token operator">=</span><span class="token operator">&lt;</span>\u5907\u4EFD\u65B9\u5F0F<span class="token operator">&gt;</span>\u6216\u2013backup \u79FB\u9664\u6587\u4EF6\u524D\u5148\u8FDB\u884C\u5907\u4EFD\u3002
\u2013checkpoint \u8BFB\u53D6\u5907\u4EFD\u6587\u4EF6\u65F6\u5217\u51FA\u76EE\u5F55\u540D\u79F0\u3002
\u2013concatenate \u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201D-A\u201D\u53C2\u6570\u76F8\u540C\u3002
\u2013confirmation \u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201D-w\u201D\u53C2\u6570\u76F8\u540C\u3002
\u2013delete \u4ECE\u5907\u4EFD\u6587\u4EF6\u4E2D\u5220\u9664\u6307\u5B9A\u7684\u6587\u4EF6\u3002
\u2013exclude<span class="token operator">=</span><span class="token operator">&lt;</span>\u8303\u672C\u6837\u5F0F<span class="token operator">&gt;</span> \u6392\u9664\u7B26\u5408\u8303\u672C\u6837\u5F0F\u7684\u95EE\u5BB6\u3002
\u2013group<span class="token operator">=</span><span class="token operator">&lt;</span>\u7FA4\u7EC4\u540D\u79F0<span class="token operator">&gt;</span> \u628A\u52A0\u5165\u8BBE\u5907\u6587\u4EF6\u4E2D\u7684\u6587\u4EF6\u7684\u6240\u5C5E\u7FA4\u7EC4\u8BBE\u6210\u6307\u5B9A\u7684\u7FA4\u7EC4\u3002
\u2013help \u5728\u7EBF\u5E2E\u52A9\u3002
\u2013ignore-failed-read \u5FFD\u7565\u6570\u636E\u8BFB\u53D6\u9519\u8BEF\uFF0C\u4E0D\u4E2D\u65AD\u7A0B\u5E8F\u7684\u6267\u884C\u3002
\u2013new-volume-script<span class="token operator">=</span><span class="token operator">&lt;</span>Script\u6587\u4EF6<span class="token operator">&gt;</span> \u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201D-F\u201D\u53C2\u6570\u76F8\u540C\u3002
\u2013newer-mtime \u53EA\u4FDD\u5B58\u66F4\u6539\u8FC7\u7684\u6587\u4EF6\u3002
\u2013no-recursion \u4E0D\u505A\u9012\u5F52\u5904\u7406\uFF0C\u4E5F\u5C31\u662F\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u53CA\u5B50\u76EE\u5F55\u4E0D\u4E88\u5904\u7406\u3002
\u2013null \u4ECEnull\u8BBE\u5907\u8BFB\u53D6\u6587\u4EF6\u540D\u79F0\u3002
\u2013numeric-owner \u4EE5\u7528\u6237\u8BC6\u522B\u7801\u53CA\u7FA4\u7EC4\u8BC6\u522B\u7801\u53D6\u4EE3\u7528\u6237\u540D\u79F0\u548C\u7FA4\u7EC4\u540D\u79F0\u3002
\u2013owner<span class="token operator">=</span><span class="token operator">&lt;</span>\u7528\u6237\u540D\u79F0<span class="token operator">&gt;</span> \u628A\u52A0\u5165\u5907\u4EFD\u6587\u4EF6\u4E2D\u7684\u6587\u4EF6\u7684\u62E5\u6709\u8005\u8BBE\u6210\u6307\u5B9A\u7684\u7528\u6237\u3002
\u2013posix \u5C06\u6570\u636E\u5199\u5165\u5907\u4EFD\u6587\u4EF6\u65F6\u4F7F\u7528POSIX\u683C\u5F0F\u3002
\u2013preserve \u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201D-ps\u201D\u53C2\u6570\u76F8\u540C\u3002
\u2013preserve-order \u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201D-A\u201D\u53C2\u6570\u76F8\u540C\u3002
\u2013preserve-permissions \u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201D-p\u201D\u53C2\u6570\u76F8\u540C\u3002
\u2013record-size<span class="token operator">=</span><span class="token operator">&lt;</span>\u533A\u5757\u6570\u76EE<span class="token operator">&gt;</span> \u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201D-b\u201D\u53C2\u6570\u76F8\u540C\u3002
\u2013recursive-unlink \u89E3\u5F00\u538B\u7F29\u6587\u4EF6\u8FD8\u539F\u76EE\u5F55\u4E4B\u524D\uFF0C\u5148\u89E3\u9664\u6574\u4E2A\u76EE\u5F55\u4E0B\u6240\u6709\u6587\u4EF6\u7684\u8FDE\u63A5\u3002
\u2013remove-files \u6587\u4EF6\u52A0\u5165\u5907\u4EFD\u6587\u4EF6\u540E\uFF0C\u5C31\u5C06\u5176\u5220\u9664\u3002
\u2013rsh-command<span class="token operator">=</span><span class="token operator">&lt;</span>\u6267\u884C\u6307\u4EE4<span class="token operator">&gt;</span> \u8BBE\u7F6E\u8981\u5728\u8FDC\u7AEF\u4E3B\u673A\u4E0A\u6267\u884C\u7684\u6307\u4EE4\uFF0C\u4EE5\u53D6\u4EE3rsh\u6307\u4EE4\u3002
\u2013same-owner \u5C1D\u8BD5\u4EE5\u76F8\u540C\u7684\u6587\u4EF6\u62E5\u6709\u8005\u8FD8\u539F\u95EE\u5BB6\u4F60\u3002
\u2013suffix<span class="token operator">=</span><span class="token operator">&lt;</span>\u5907\u4EFD\u5B57\u5C3E\u5B57\u7B26\u4E32<span class="token operator">&gt;</span> \u79FB\u9664\u6587\u4EF6\u524D\u5148\u884C\u5907\u4EFD\u3002
\u2013totals \u5907\u4EFD\u6587\u4EF6\u5EFA\u7ACB\u540E\uFF0C\u5217\u51FA\u6587\u4EF6\u5927\u5C0F\u3002
\u2013use-compress-program<span class="token operator">=</span><span class="token operator">&lt;</span>\u6267\u884C\u6307\u4EE4<span class="token operator">&gt;</span> \u901A\u8FC7\u6307\u5B9A\u7684\u6307\u4EE4\u5904\u7406\u5907\u4EFD\u6587\u4EF6\u3002
\u2013version \u663E\u793A\u7248\u672C\u4FE1\u606F\u3002
\u2013volno-file<span class="token operator">=</span><span class="token operator">&lt;</span>\u7F16\u53F7\u6587\u4EF6<span class="token operator">&gt;</span> \u4F7F\u7528\u6307\u5B9A\u6587\u4EF6\u5185\u7684\u7F16\u53F7\u53D6\u4EE3\u9884\u8BBE\u7684\u5377\u518C\u7F16\u53F7\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To extract an uncompressed archive:</span>
<span class="token comment">#\u8981\u63D0\u53D6\u672A\u538B\u7F29\u7684\u5B58\u6863\uFF1A</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> /path/to/foo.tar

<span class="token comment"># To create an uncompressed archive:</span>
<span class="token comment">#\u8981\u521B\u5EFA\u672A\u538B\u7F29\u7684\u5B58\u6863\uFF1A</span>
<span class="token function">tar</span> <span class="token parameter variable">-cvf</span> /path/to/foo.tar /path/to/foo/

<span class="token comment"># To extract a .gz archive:</span>
<span class="token comment">#\u8981\u63D0\u53D6.gz\u5B58\u6863\uFF1A</span>
<span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> /path/to/foo.tgz

<span class="token comment"># To create a .gz archive:</span>
<span class="token comment">#\u8981\u521B\u5EFA.gz\u5B58\u6863\uFF1A</span>
<span class="token function">tar</span> <span class="token parameter variable">-czvf</span> /path/to/foo.tgz /path/to/foo/

<span class="token comment"># To list the content of an .gz archive:</span>
<span class="token comment">#\u5217\u51FA.gz\u5B58\u6863\u7684\u5185\u5BB9\uFF1A</span>
<span class="token function">tar</span> <span class="token parameter variable">-ztvf</span> /path/to/foo.tgz

<span class="token comment"># To extract a .bz2 archive:</span>
<span class="token comment">#\u8981\u63D0\u53D6.bz2\u5B58\u6863\uFF1A</span>
<span class="token function">tar</span> <span class="token parameter variable">-xjvf</span> /path/to/foo.tgz

<span class="token comment"># To create a .bz2 archive:</span>
<span class="token comment">#\u8981\u521B\u5EFA.bz2\u5B58\u6863\uFF1A</span>
<span class="token function">tar</span> <span class="token parameter variable">-cjvf</span> /path/to/foo.tgz /path/to/foo/

<span class="token comment"># To extract a .tar in specified Directory:</span>
<span class="token comment">#\u8981\u5728\u6307\u5B9A\u76EE\u5F55\u4E2D\u63D0\u53D6.tar\uFF1A</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> /path/to/foo.tar <span class="token parameter variable">-C</span> /path/to/destination/

<span class="token comment"># To list the content of an .bz2 archive:</span>
<span class="token comment">#\u5217\u51FA.bz2\u5B58\u6863\u7684\u5185\u5BB9\uFF1A</span>
<span class="token function">tar</span> <span class="token parameter variable">-jtvf</span> /path/to/foo.tgz

<span class="token comment"># To create a .gz archive and exclude all jpg,gif,... from the tgz</span>
<span class="token comment">#\u8981\u521B\u5EFA.gz\u5B58\u6863\u5E76\u4ECEtgz\u4E2D\u6392\u9664\u6240\u6709jpg\uFF0Cgif\uFF0C....</span>
<span class="token function">tar</span> czvf /path/to/foo.tgz <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token punctuation">\\</span>*.<span class="token punctuation">{</span>jpg,gif,png,wmv,flv,tar.gz,zip<span class="token punctuation">}</span> /path/to/foo/

<span class="token comment"># To use parallel (multi-threaded) implementation of compression algorithms:</span>
<span class="token comment">#\u8981\u4F7F\u7528\u538B\u7F29\u7B97\u6CD5\u7684\u5E76\u884C\uFF08\u591A\u7EBF\u7A0B\uFF09\u5B9E\u73B0\uFF1A</span>
<span class="token function">tar</span> <span class="token parameter variable">-z</span> <span class="token punctuation">..</span>. -<span class="token operator">&gt;</span> <span class="token function">tar</span> <span class="token parameter variable">-Ipigz</span> <span class="token punctuation">..</span>.
<span class="token function">tar</span> <span class="token parameter variable">-j</span> <span class="token punctuation">..</span>. -<span class="token operator">&gt;</span> <span class="token function">tar</span> <span class="token parameter variable">-Ipbzip2</span> <span class="token punctuation">..</span>.
<span class="token function">tar</span> <span class="token parameter variable">-J</span> <span class="token punctuation">..</span>. -<span class="token operator">&gt;</span> <span class="token function">tar</span> <span class="token parameter variable">-Ipixz</span> <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[o];function i(r,p){return s(),a("div",null,l)}const d=n(t,[["render",i],["__file","tar.html.vue"]]);export{d as default};
