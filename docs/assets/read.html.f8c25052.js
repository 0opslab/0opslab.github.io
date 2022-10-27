import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-a</span> \u540E\u8DDF\u4E00\u4E2A\u53D8\u91CF\uFF0C\u8BE5\u53D8\u91CF\u4F1A\u88AB\u8BA4\u4E3A\u662F\u4E2A\u6570\u7EC4\uFF0C\u7136\u540E\u7ED9\u5176\u8D4B\u503C\uFF0C\u9ED8\u8BA4\u662F\u4EE5\u7A7A\u683C\u4E3A\u5206\u5272\u7B26\u3002
<span class="token parameter variable">-d</span> \u540E\u9762\u8DDF\u4E00\u4E2A\u6807\u5FD7\u7B26\uFF0C\u5176\u5B9E\u53EA\u6709\u5176\u540E\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u6709\u7528\uFF0C\u4F5C\u4E3A\u7ED3\u675F\u7684\u6807\u5FD7\u3002
<span class="token parameter variable">-p</span> \u540E\u9762\u8DDF\u63D0\u793A\u4FE1\u606F\uFF0C\u5373\u5728\u8F93\u5165\u524D\u6253\u5370\u63D0\u793A\u4FE1\u606F\u3002
<span class="token parameter variable">-e</span> \u5728\u8F93\u5165\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4\u8865\u5168\u529F\u80FD\u3002
<span class="token parameter variable">-n</span> \u540E\u8DDF\u4E00\u4E2A\u6570\u5B57\uFF0C\u5B9A\u4E49\u8F93\u5165\u6587\u672C\u7684\u957F\u5EA6\uFF0C\u5F88\u5B9E\u7528\u3002
<span class="token parameter variable">-r</span> \u5C4F\u853D<span class="token punctuation">\\</span>\uFF0C\u5982\u679C\u6CA1\u6709\u8BE5\u9009\u9879\uFF0C\u5219<span class="token punctuation">\\</span>\u4F5C\u4E3A\u4E00\u4E2A\u8F6C\u4E49\u5B57\u7B26\uFF0C\u6709\u7684\u8BDD <span class="token punctuation">\\</span>\u5C31\u662F\u4E2A\u6B63\u5E38\u7684\u5B57\u7B26\u4E86\u3002
<span class="token parameter variable">-s</span> \u5B89\u9759\u6A21\u5F0F\uFF0C\u5728\u8F93\u5165\u5B57\u7B26\u65F6\u4E0D\u518D\u5C4F\u5E55\u4E0A\u663E\u793A\uFF0C\u4F8B\u5982login\u65F6\u8F93\u5165\u5BC6\u7801\u3002
<span class="token parameter variable">-t</span> \u540E\u9762\u8DDF\u79D2\u6570\uFF0C\u5B9A\u4E49\u8F93\u5165\u5B57\u7B26\u7684\u7B49\u5F85\u65F6\u95F4\u3002
<span class="token parameter variable">-u</span> \u540E\u9762\u8DDFfd\uFF0C\u4ECE\u6587\u4EF6\u63CF\u8FF0\u7B26\u4E2D\u8BFB\u5165\uFF0C\u8BE5\u6587\u4EF6\u63CF\u8FF0\u7B26\u53EF\u4EE5\u662Fexec\u65B0\u5F00\u542F\u7684\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-t</span> <span class="token number">5</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;A compress ([bzip2|gzip|xz]): &quot;</span>  Com
<span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$Com</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">Com</span><span class="token operator">=</span>gzip
<span class="token builtin class-name">echo</span> <span class="token variable">$Com</span>


<span class="token comment"># \u63A7\u5236\u7B49\u5F85\u8F93\u5165\u7684\u65F6\u95F4 -t Second</span>
<span class="token keyword">if</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-t</span> <span class="token number">5</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Please input your name:&quot;</span> name<span class="token punctuation">;</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$name</span>,welcome!&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;sorry&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">fi</span><span class="token punctuation">;</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token comment"># \u63A7\u5236\u8F93\u5165\u5B57\u7B26\u957F\u5EA6 -nNumber Number\u8868\u793A\u63A7\u5236\u5B57\u7B26\u7684\u957F\u5EA6,\u8D85\u8FC7\u5219read\u547D\u4EE4\u7ACB\u5373\u63A5\u53D7\u8F93\u5165\u5E76\u5C06\u5176\u4F20\u7ED9\u53D8\u91CF\u3002\u65E0\u9700\u6309\u56DE\u8F66\u952E\u3002</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-n1</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Do you agree with me [Y/N]?&quot;</span> ans
<span class="token keyword">case</span> <span class="token variable">$ans</span> <span class="token keyword">in</span>
Y<span class="token operator">|</span>y<span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Great!&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
N<span class="token operator">|</span>n<span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Oh No!&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
*<span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Please choice Y or N&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span><span class="token punctuation">;</span>

<span class="token comment"># \u8BFB\u53D6\u6587\u4EF6,\u901A\u8FC7cat file \u914D\u5408\u7BA1\u9053\u5904\u7406,\u5982 cat file | while read line</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">if</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;choice your file:&quot;</span> yourfile<span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token function">cat</span> <span class="token variable">$yourfile</span><span class="token operator">|</span><span class="token keyword">while</span> <span class="token builtin class-name">read</span> line
    <span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Line <span class="token variable">$count</span>:<span class="token variable">$line</span>&quot;</span>
        <span class="token builtin class-name">let</span> count++
    <span class="token keyword">done</span>
    <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;None&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">fi</span><span class="token punctuation">;</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token comment"># \u7E41\u7410\u7248\u672C</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;your name:&quot;</span>
<span class="token builtin class-name">read</span> name
<span class="token builtin class-name">echo</span> <span class="token string">&quot;name:<span class="token variable">$name</span>&quot;</span>

<span class="token comment"># \u7CBE\u7B80\u7248 -p \u63D0\u793A</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;your name:&quot;</span> name
<span class="token builtin class-name">echo</span> <span class="token string">&quot;name:<span class="token variable">$name</span>&quot;</span>

<span class="token comment">#\u5982\u679C\u4E0D\u6307\u5B9A\u53D8\u91CF\u5219\u653E\u5728\u73AF\u5883\u53D8\u91CFREPLY\u4E2D</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;you name:&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;name:<span class="token environment constant">$REPLY</span>&quot;</span>

<span class="token comment">#\u5BC6\u7801 read -s (\u8F93\u5165\u4E0D\u663E\u793A\u5728\u76D1\u89C6\u5668\u4E0A,\u5B9E\u5219\u6539\u53D8\u80CC\u666F\u8272)</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;your pwd:&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[i];function p(c,o){return s(),a("div",null,t)}const u=n(l,[["render",p],["__file","read.html.vue"]]);export{u as default};
