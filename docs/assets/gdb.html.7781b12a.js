import{_ as n,o as s,c as e,e as i}from"./app.a667bd71.js";const a={},d=i(`<h3 id="\u5E38\u7528\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u9009\u9879" aria-hidden="true">#</a> \u5E38\u7528\u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\uFF08gdb\uFF09help\uFF1A\u67E5\u770B\u547D\u4EE4\u5E2E\u52A9\uFF0C\u5177\u4F53\u547D\u4EE4\u67E5\u8BE2\u5728gdb\u4E2D\u8F93\u5165help + \u547D\u4EE4,\u7B80\u5199h
\uFF08gdb\uFF09run\uFF1A\u91CD\u65B0\u5F00\u59CB\u8FD0\u884C\u6587\u4EF6\uFF08run-text\uFF1A\u52A0\u8F7D\u6587\u672C\u6587\u4EF6\uFF0Crun-bin\uFF1A\u52A0\u8F7D\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF09,\u7B80\u5199r
\uFF08gdb\uFF09start\uFF1A\u5355\u6B65\u6267\u884C\uFF0C\u8FD0\u884C\u7A0B\u5E8F\uFF0C\u505C\u5728\u7B2C\u4E00\u6267\u884C\u8BED\u53E5
\uFF08gdb\uFF09list\uFF1A\u67E5\u770B\u539F\u4EE3\u7801\uFF08list-n,\u4ECE\u7B2Cn\u884C\u5F00\u59CB\u67E5\u770B\u4EE3\u7801\u3002list+ \u51FD\u6570\u540D\uFF1A\u67E5\u770B\u5177\u4F53\u51FD\u6570\uFF09,\u7B80\u5199l
\uFF08gdb\uFF09set\uFF1A\u8BBE\u7F6E\u53D8\u91CF\u7684\u503C
\uFF08gdb\uFF09next\uFF1A\u5355\u6B65\u8C03\u8BD5\uFF08\u9010\u8FC7\u7A0B\uFF0C\u51FD\u6570\u76F4\u63A5\u6267\u884C\uFF09,\u7B80\u5199n
\uFF08gdb\uFF09step\uFF1A\u5355\u6B65\u8C03\u8BD5\uFF08\u9010\u8BED\u53E5\uFF1A\u8DF3\u5165\u81EA\u5B9A\u4E49\u51FD\u6570\u5185\u90E8\u6267\u884C\uFF09,\u7B80\u5199s
\uFF08gdb\uFF09backtrace\uFF1A\u67E5\u770B\u51FD\u6570\u7684\u8C03\u7528\u7684\u6808\u5E27\u548C\u5C42\u7EA7\u5173\u7CFB,\u7B80\u5199bt
\uFF08gdb\uFF09frame\uFF1A\u5207\u6362\u51FD\u6570\u7684\u6808\u5E27,\u7B80\u5199f
\uFF08gdb\uFF09info\uFF1A\u67E5\u770B\u51FD\u6570\u5185\u90E8\u5C40\u90E8\u53D8\u91CF\u7684\u6570\u503C,\u7B80\u5199i
\uFF08gdb\uFF09finish\uFF1A\u7ED3\u675F\u5F53\u524D\u51FD\u6570\uFF0C\u8FD4\u56DE\u5230\u51FD\u6570\u8C03\u7528\u70B9
\uFF08gdb\uFF09continue\uFF1A\u7EE7\u7EED\u8FD0\u884C,\u7B80\u5199c
\uFF08gdb\uFF09print\uFF1A\u6253\u5370\u503C\u53CA\u5730\u5740,\u7B80\u5199p
\uFF08gdb\uFF09quit\uFF1A\u9000\u51FAgdb,\u7B80\u5199q
\uFF08gdb\uFF09break+num\uFF1A\u5728\u7B2Cnum\u884C\u8BBE\u7F6E\u65AD\u70B9,\u7B80\u5199b
\uFF08gdb\uFF09info breakpoints\uFF1A\u67E5\u770B\u5F53\u524D\u8BBE\u7F6E\u7684\u6240\u6709\u65AD\u70B9
\uFF08gdb\uFF09delete breakpoints num\uFF1A\u5220\u9664\u7B2Cnum\u4E2A\u65AD\u70B9,\u7B80\u5199d
\uFF08gdb\uFF09display\uFF1A\u8FFD\u8E2A\u67E5\u770B\u5177\u4F53\u53D8\u91CF\u503C
\uFF08gdb\uFF09undisplay\uFF1A\u53D6\u6D88\u8FFD\u8E2A\u89C2\u5BDF\u53D8\u91CF
\uFF08gdb\uFF09watch\uFF1A\u88AB\u8BBE\u7F6E\u89C2\u5BDF\u70B9\u7684\u53D8\u91CF\u53D1\u751F\u4FEE\u6539\u65F6\uFF0C\u6253\u5370\u663E\u793A
\uFF08gdb\uFF09i watch\uFF1A\u663E\u793A\u89C2\u5BDF\u70B9
\uFF08gdb\uFF09enable breakpoints\uFF1A\u542F\u7528\u65AD\u70B9
\uFF08gdb\uFF09disable breakpoints\uFF1A\u7981\u7528\u65AD\u70B9
\uFF08gdb\uFF09x\uFF1A\u67E5\u770B\u5185\u5B58x/20xw \u663E\u793A20\u4E2A\u5355\u5143\uFF0C16\u8FDB\u5236\uFF0C4\u5B57\u8282\u6BCF\u5355\u5143
\uFF08gdb\uFF09run argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>\uFF1A\u8C03\u8BD5\u65F6\u547D\u4EE4\u884C\u4F20\u53C2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># start the debugger</span>
gdb your-executable

<span class="token comment"># set a breakpoint</span>
b some-method, <span class="token builtin class-name">break</span> some-method

<span class="token comment"># run the program</span>
r, run

<span class="token comment"># when a breakpoint was reached:</span>

<span class="token comment"># run the current line, stepping over any invocations</span>
n, next
<span class="token comment"># run the current line, stepping into any invocations</span>
s, step
<span class="token comment"># print a stacktrace</span>
bt, backtrace
<span class="token comment"># evaluate an expression and print the result</span>
p <span class="token assign-left variable">length</span><span class="token operator">=</span>strlen<span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token comment"># list surrounding source code</span>
l, list
<span class="token comment"># continue execution</span>
c, <span class="token builtin class-name">continue</span>

<span class="token comment"># exit gdb (after program terminated)</span>
q, quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[d];function c(t,r){return s(),e("div",null,l)}const b=n(a,[["render",c],["__file","gdb.html.vue"]]);export{b as default};
