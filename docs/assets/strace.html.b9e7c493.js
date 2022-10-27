import{_ as a,o as s,c as n,e}from"./app.a667bd71.js";const l={},p=e(`<p>strace\u547D\u4EE4 \u662F\u4E00\u4E2A\u96C6\u8BCA\u65AD\u3001\u8C03\u8BD5\u3001\u7EDF\u8BA1\u4E0E\u4E00\u4F53\u7684\u5DE5\u5177\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528strace\u5BF9\u5E94\u7528\u7684\u7CFB\u7EDF\u8C03\u7528\u548C\u4FE1\u53F7\u4F20\u9012\u7684\u8DDF\u8E2A\u7ED3\u679C \u6765\u5BF9\u5E94\u7528\u8FDB\u884C\u5206\u6790\uFF0C\u4EE5\u8FBE\u5230\u89E3\u51B3\u95EE\u9898\u6216\u8005\u662F\u4E86\u89E3\u5E94\u7528\u5DE5\u4F5C\u8FC7\u7A0B\u7684\u76EE\u7684\u3002\u5F53\u7136strace\u4E0E\u4E13\u4E1A\u7684\u8C03\u8BD5\u5DE5\u5177\u6BD4\u5982\u8BF4gdb\u4E4B\u7C7B\u7684 \u662F\u6CA1\u6CD5\u76F8\u6BD4\u7684\uFF0C\u56E0\u4E3A\u5B83\u4E0D\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684\u8C03\u8BD5\u5668\u3002</p><h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-c</span> \u7EDF\u8BA1\u6BCF\u4E00\u7CFB\u7EDF\u8C03\u7528\u7684\u6240\u6267\u884C\u7684\u65F6\u95F4,\u6B21\u6570\u548C\u51FA\u9519\u7684\u6B21\u6570\u7B49.
<span class="token parameter variable">-d</span> \u8F93\u51FAstrace\u5173\u4E8E\u6807\u51C6\u9519\u8BEF\u7684\u8C03\u8BD5\u4FE1\u606F.
<span class="token parameter variable">-f</span> \u8DDF\u8E2A\u7531fork\u8C03\u7528\u6240\u4EA7\u751F\u7684\u5B50\u8FDB\u7A0B.
<span class="token parameter variable">-ff</span> \u5982\u679C\u63D0\u4F9B-o filename,\u5219\u6240\u6709\u8FDB\u7A0B\u7684\u8DDF\u8E2A\u7ED3\u679C\u8F93\u51FA\u5230\u76F8\u5E94\u7684filename.pid\u4E2D,pid\u662F\u5404\u8FDB\u7A0B\u7684\u8FDB\u7A0B\u53F7.
<span class="token parameter variable">-F</span> \u5C1D\u8BD5\u8DDF\u8E2Avfork\u8C03\u7528.\u5728-f\u65F6,vfork\u4E0D\u88AB\u8DDF\u8E2A.
<span class="token parameter variable">-h</span> \u8F93\u51FA\u7B80\u8981\u7684\u5E2E\u52A9\u4FE1\u606F.
<span class="token parameter variable">-i</span> \u8F93\u51FA\u7CFB\u7EDF\u8C03\u7528\u7684\u5165\u53E3\u6307\u9488.
<span class="token parameter variable">-q</span> \u7981\u6B62\u8F93\u51FA\u5173\u4E8E\u8131\u79BB\u7684\u6D88\u606F.
<span class="token parameter variable">-r</span> \u6253\u5370\u51FA\u76F8\u5BF9\u65F6\u95F4\u5173\u4E8E,,\u6BCF\u4E00\u4E2A\u7CFB\u7EDF\u8C03\u7528.
<span class="token parameter variable">-t</span> \u5728\u8F93\u51FA\u4E2D\u7684\u6BCF\u4E00\u884C\u524D\u52A0\u4E0A\u65F6\u95F4\u4FE1\u606F.
<span class="token parameter variable">-tt</span> \u5728\u8F93\u51FA\u4E2D\u7684\u6BCF\u4E00\u884C\u524D\u52A0\u4E0A\u65F6\u95F4\u4FE1\u606F,\u5FAE\u79D2\u7EA7.
<span class="token parameter variable">-ttt</span> \u5FAE\u79D2\u7EA7\u8F93\u51FA,\u4EE5\u79D2\u4E86\u8868\u793A\u65F6\u95F4.
<span class="token parameter variable">-T</span> \u663E\u793A\u6BCF\u4E00\u8C03\u7528\u6240\u8017\u7684\u65F6\u95F4.
<span class="token parameter variable">-v</span> \u8F93\u51FA\u6240\u6709\u7684\u7CFB\u7EDF\u8C03\u7528.\u4E00\u4E9B\u8C03\u7528\u5173\u4E8E\u73AF\u5883\u53D8\u91CF,\u72B6\u6001,\u8F93\u5165\u8F93\u51FA\u7B49\u8C03\u7528\u7531\u4E8E\u4F7F\u7528\u9891\u7E41,\u9ED8\u8BA4\u4E0D\u8F93\u51FA.
<span class="token parameter variable">-V</span> \u8F93\u51FAstrace\u7684\u7248\u672C\u4FE1\u606F.
<span class="token parameter variable">-x</span> \u4EE5\u5341\u516D\u8FDB\u5236\u5F62\u5F0F\u8F93\u51FA\u975E\u6807\u51C6\u5B57\u7B26\u4E32
<span class="token parameter variable">-xx</span> \u6240\u6709\u5B57\u7B26\u4E32\u4EE5\u5341\u516D\u8FDB\u5236\u5F62\u5F0F\u8F93\u51FA.
<span class="token parameter variable">-a</span> <span class="token function">column</span> \u8BBE\u7F6E\u8FD4\u56DE\u503C\u7684\u8F93\u51FA\u4F4D\u7F6E.\u9ED8\u8BA4 \u4E3A40.
<span class="token parameter variable">-e</span> <span class="token function">expr</span> \u6307\u5B9A\u4E00\u4E2A\u8868\u8FBE\u5F0F,\u7528\u6765\u63A7\u5236\u5982\u4F55\u8DDF\u8E2A.\u683C\u5F0F\uFF1A<span class="token punctuation">[</span>qualifier<span class="token operator">=</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">]</span>value1<span class="token punctuation">[</span>,value2<span class="token punctuation">]</span><span class="token punctuation">..</span>.
qualifier\u53EA\u80FD\u662F trace,abbrev,verbose,raw,signal,read,write\u5176\u4E2D\u4E4B\u4E00.value\u662F\u7528\u6765\u9650\u5B9A\u7684\u7B26\u53F7\u6216\u6570\u5B57.\u9ED8\u8BA4\u7684 qualifier\u662F trace.
\u611F\u53F9\u53F7\u662F\u5426\u5B9A\u7B26\u53F7.\u4F8B\u5982:-eopen\u7B49\u4EF7\u4E8E <span class="token parameter variable">-e</span> <span class="token assign-left variable">trace</span><span class="token operator">=</span>open,\u8868\u793A\u53EA\u8DDF\u8E2Aopen\u8C03\u7528.\u800C-etrace<span class="token operator">!=</span>open \u8868\u793A\u8DDF\u8E2A\u9664\u4E86open\u4EE5\u5916\u7684\u5176\u4ED6\u8C03\u7528.
\u6709\u4E24\u4E2A\u7279\u6B8A\u7684\u7B26\u53F7 all \u548C none. \u6CE8\u610F\u6709\u4E9Bshell\u4F7F\u7528<span class="token operator">!</span>\u6765\u6267\u884C\u5386\u53F2\u8BB0\u5F55\u91CC\u7684\u547D\u4EE4,\u6240\u4EE5\u8981\u4F7F\u7528<span class="token punctuation">\\</span><span class="token punctuation">\\</span>.
<span class="token parameter variable">-e</span> <span class="token assign-left variable">trace</span><span class="token operator">=</span>set \u53EA\u8DDF\u8E2A\u6307\u5B9A\u7684\u7CFB\u7EDF \u8C03\u7528.\u4F8B\u5982:-e <span class="token assign-left variable">trace</span><span class="token operator">=</span>open,close,rean,write\u8868\u793A\u53EA\u8DDF\u8E2A\u8FD9\u56DB\u4E2A\u7CFB\u7EDF\u8C03\u7528.\u9ED8\u8BA4\u7684\u4E3Aset<span class="token operator">=</span>all.
<span class="token parameter variable">-e</span> <span class="token assign-left variable">trace</span><span class="token operator">=</span>file \u53EA\u8DDF\u8E2A\u6709\u5173\u6587\u4EF6\u64CD\u4F5C\u7684\u7CFB\u7EDF\u8C03\u7528.
<span class="token parameter variable">-e</span> <span class="token assign-left variable">trace</span><span class="token operator">=</span>process \u53EA\u8DDF\u8E2A\u6709\u5173\u8FDB\u7A0B\u63A7\u5236\u7684\u7CFB\u7EDF\u8C03\u7528.
<span class="token parameter variable">-e</span> <span class="token assign-left variable">trace</span><span class="token operator">=</span>network \u8DDF\u8E2A\u4E0E\u7F51\u7EDC\u6709\u5173\u7684\u6240\u6709\u7CFB\u7EDF\u8C03\u7528.
<span class="token parameter variable">-e</span> <span class="token assign-left variable">strace</span><span class="token operator">=</span>signal \u8DDF\u8E2A\u6240\u6709\u4E0E\u7CFB\u7EDF\u4FE1\u53F7\u6709\u5173\u7684 \u7CFB\u7EDF\u8C03\u7528
<span class="token parameter variable">-e</span> <span class="token assign-left variable">trace</span><span class="token operator">=</span>ipc \u8DDF\u8E2A\u6240\u6709\u4E0E\u8FDB\u7A0B\u901A\u8BAF\u6709\u5173\u7684\u7CFB\u7EDF\u8C03\u7528
<span class="token parameter variable">-e</span> <span class="token assign-left variable">abbrev</span><span class="token operator">=</span>set \u8BBE\u5B9Astrace\u8F93\u51FA\u7684\u7CFB\u7EDF\u8C03\u7528\u7684\u7ED3\u679C\u96C6.-v \u7B49\u4E0E <span class="token assign-left variable">abbrev</span><span class="token operator">=</span>none.\u9ED8\u8BA4\u4E3Aabbrev<span class="token operator">=</span>all.
<span class="token parameter variable">-e</span> <span class="token assign-left variable">raw</span><span class="token operator">=</span>set \u5C06\u6307\u5B9A\u7684\u7CFB\u7EDF\u8C03\u7528\u7684\u53C2\u6570\u4EE5\u5341\u516D\u8FDB\u5236\u663E\u793A.
<span class="token parameter variable">-e</span> <span class="token assign-left variable">signal</span><span class="token operator">=</span>set \u6307\u5B9A\u8DDF\u8E2A\u7684\u7CFB\u7EDF\u4FE1\u53F7.\u9ED8\u8BA4\u4E3Aall.\u5982 <span class="token assign-left variable">signal</span><span class="token operator">=</span><span class="token operator">!</span>SIGIO<span class="token punctuation">(</span>\u6216\u8005signal<span class="token operator">=</span><span class="token operator">!</span>io<span class="token punctuation">)</span>,\u8868\u793A\u4E0D\u8DDF\u8E2ASIGIO\u4FE1\u53F7.
<span class="token parameter variable">-e</span> <span class="token assign-left variable">read</span><span class="token operator">=</span>set \u8F93\u51FA\u4ECE\u6307\u5B9A\u6587\u4EF6\u4E2D\u8BFB\u51FA \u7684\u6570\u636E.\u4F8B\u5982: <span class="token parameter variable">-e</span> <span class="token assign-left variable">read</span><span class="token operator">=</span><span class="token number">3,5</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">write</span><span class="token operator">=</span>set \u8F93\u51FA\u5199\u5165\u5230\u6307\u5B9A\u6587\u4EF6\u4E2D\u7684\u6570\u636E.
<span class="token parameter variable">-o</span> filename \u5C06strace\u7684\u8F93\u51FA\u5199\u5165\u6587\u4EF6filename
<span class="token parameter variable">-p</span> pid \u8DDF\u8E2A\u6307\u5B9A\u7684\u8FDB\u7A0Bpid.
<span class="token parameter variable">-s</span> strsize \u6307\u5B9A\u8F93\u51FA\u7684\u5B57\u7B26\u4E32\u7684\u6700\u5927\u957F\u5EA6.\u9ED8\u8BA4\u4E3A32.\u6587\u4EF6\u540D\u4E00\u76F4\u5168\u90E8\u8F93\u51FA.
<span class="token parameter variable">-u</span> username \u4EE5username\u7684<span class="token environment constant">UID</span>\u548CGID\u6267\u884C\u88AB\u8DDF\u8E2A\u7684\u547D\u4EE4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Basic stracing</span>
<span class="token comment">#\u57FA\u672C\u7684\u652F\u6491</span>
<span class="token function">strace</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>

<span class="token comment"># save the trace to a file</span>
<span class="token comment">#\u5C06\u8DDF\u8E2A\u4FDD\u5B58\u5230\u6587\u4EF6</span>
<span class="token function">strace</span> <span class="token parameter variable">-o</span> strace.out <span class="token operator">&lt;</span>other switches<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>

<span class="token comment"># follow only the open() system call</span>
<span class="token comment">#\u53EA\u5173\u6CE8open\uFF08\uFF09\u7CFB\u7EDF\u8C03\u7528</span>
<span class="token function">strace</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">trace</span><span class="token operator">=</span>open <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>

<span class="token comment"># follow all the system calls which open a file</span>
<span class="token comment">#\u6309\u7167\u6253\u5F00\u6587\u4EF6\u7684\u6240\u6709\u7CFB\u7EDF\u8C03\u7528</span>
<span class="token function">strace</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">trace</span><span class="token operator">=</span>file <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>

<span class="token comment"># follow all the system calls associated with process</span>
<span class="token comment">#\u6309\u7167\u4E0E\u8FDB\u7A0B\u5173\u8054\u7684\u6240\u6709\u7CFB\u7EDF\u8C03\u7528</span>
<span class="token comment"># management</span>
<span class="token comment">#\u7BA1\u7406</span>
<span class="token function">strace</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">trace</span><span class="token operator">=</span>process <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>

<span class="token comment"># follow child processes as they are created</span>
<span class="token comment">#\u5728\u521B\u5EFA\u65F6\u8DDF\u8E2A\u5B50\u8FDB\u7A0B</span>
<span class="token function">strace</span> <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>

<span class="token comment"># count time, calls and errors for each system call</span>
<span class="token comment">#\u8BA1\u7B97\u6BCF\u4E2A\u7CFB\u7EDF\u8C03\u7528\u7684\u65F6\u95F4\uFF0C\u8C03\u7528\u548C\u9519\u8BEF</span>
<span class="token function">strace</span> <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>

<span class="token comment"># trace a running process (multiple PIDs can be specified)</span>
<span class="token comment">#\u8DDF\u8E2A\u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B\uFF08\u53EF\u4EE5\u6307\u5B9A\u591A\u4E2APID\uFF09</span>
<span class="token function">strace</span> <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[p];function r(i,c){return s(),n("div",null,t)}const v=a(l,[["render",r],["__file","strace.html.vue"]]);export{v as default};