import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},t=e(`<h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><p>git\u4E00\u5171\u6709\u4E09\u4E2A\u914D\u7F6E\u6587\u4EF6</p><ol><li>\u4ED3\u5E93\u7EA7\u7684\u914D\u7F6E\u6587\u4EF6\uFF1A\u5728\u4ED3\u5E93\u7684 <code>.git/.gitconfig</code>\uFF0C\u8BE5\u914D\u7F6E\u6587\u4EF6\u53EA\u5BF9\u6240\u5728\u7684\u4ED3\u5E93\u6709\u6548\u3002</li><li>\u5168\u5C40\u914D\u7F6E\u6587\u4EF6\uFF1AMac \u7CFB\u7EDF\u5728 <code>~/.gitconfig</code>\uFF0CWindows \u7CFB\u7EDF\u5728 <code>C:\\Users\\&lt;\u7528\u6237\u540D&gt;\\.gitconfig</code>\u3002</li><li>\u7CFB\u7EDF\u7EA7\u7684\u914D\u7F6E\u6587\u4EF6\uFF1A\u5728 Git \u7684\u5B89\u88C5\u76EE\u5F55\u4E0B\uFF08Mac \u7CFB\u7EDF\u4E0B\u5B89\u88C5\u76EE\u5F55\u5728 <code>/usr/local/git</code>\uFF09\u7684 <code>etc</code> \u6587\u4EF6\u5939\u4E2D\u7684 <code>gitconfig</code></li></ol><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u914D\u7F6E\u4FE1\u606F</span>
<span class="token comment"># --local\uFF1A\u4ED3\u5E93\u7EA7\uFF0C--global\uFF1A\u5168\u5C40\u7EA7\uFF0C--system\uFF1A\u7CFB\u7EDF\u7EA7</span>
$ <span class="token function">git</span> config <span class="token operator">&lt;</span>--local <span class="token operator">|</span> <span class="token parameter variable">--global</span> <span class="token operator">|</span> --system<span class="token operator">&gt;</span> <span class="token parameter variable">-l</span>

<span class="token comment"># \u67E5\u770B\u5F53\u524D\u751F\u6548\u7684\u914D\u7F6E\u4FE1\u606F</span>
$ <span class="token function">git</span> config <span class="token parameter variable">-l</span>

<span class="token comment"># \u7F16\u8F91\u914D\u7F6E\u6587\u4EF6</span>
<span class="token comment"># --local\uFF1A\u4ED3\u5E93\u7EA7\uFF0C--global\uFF1A\u5168\u5C40\u7EA7\uFF0C--system\uFF1A\u7CFB\u7EDF\u7EA7</span>
$ <span class="token function">git</span> config <span class="token operator">&lt;</span>--local <span class="token operator">|</span> <span class="token parameter variable">--global</span> <span class="token operator">|</span> --system<span class="token operator">&gt;</span> <span class="token parameter variable">-e</span>

<span class="token comment"># \u6DFB\u52A0\u914D\u7F6E\u9879</span>
<span class="token comment"># --local\uFF1A\u4ED3\u5E93\u7EA7\uFF0C--global\uFF1A\u5168\u5C40\u7EA7\uFF0C--system\uFF1A\u7CFB\u7EDF\u7EA7</span>
$ <span class="token function">git</span> config <span class="token operator">&lt;</span>--local <span class="token operator">|</span> <span class="token parameter variable">--global</span> <span class="token operator">|</span> --system<span class="token operator">&gt;</span> <span class="token parameter variable">--add</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>

<span class="token comment"># \u83B7\u53D6\u914D\u7F6E\u9879</span>
$ <span class="token function">git</span> config <span class="token operator">&lt;</span>--local <span class="token operator">|</span> <span class="token parameter variable">--global</span> <span class="token operator">|</span> --system<span class="token operator">&gt;</span> <span class="token parameter variable">--get</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>

<span class="token comment"># \u5220\u9664\u914D\u7F6E\u9879</span>
$ <span class="token function">git</span> config <span class="token operator">&lt;</span>--local <span class="token operator">|</span> <span class="token parameter variable">--global</span> <span class="token operator">|</span> --system<span class="token operator">&gt;</span> <span class="token parameter variable">--unset</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>

<span class="token comment"># \u914D\u7F6E\u63D0\u4EA4\u8BB0\u5F55\u4E2D\u7684\u7528\u6237\u4FE1\u606F</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token operator">&lt;</span>\u7528\u6237\u540D<span class="token operator">&gt;</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token operator">&lt;</span>\u90AE\u7BB1\u5730\u5740<span class="token operator">&gt;</span>

<span class="token comment"># \u66F4\u6539Git\u7F13\u5B58\u533A\u7684\u5927\u5C0F</span>
<span class="token comment"># \u5982\u679C\u63D0\u4EA4\u7684\u5185\u5BB9\u8F83\u5927\uFF0C\u9ED8\u8BA4\u7F13\u5B58\u8F83\u5C0F\uFF0C\u63D0\u4EA4\u4F1A\u5931\u8D25</span>
<span class="token comment"># \u7F13\u5B58\u5927\u5C0F\u5355\u4F4D\uFF1AB\uFF0C\u4F8B\u5982\uFF1A524288000\uFF08500MB\uFF09</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> http.postBuffer <span class="token operator">&lt;</span>\u7F13\u5B58\u5927\u5C0F<span class="token operator">&gt;</span>

<span class="token comment"># \u8C03\u7528 git status/git diff \u547D\u4EE4\u65F6\u4EE5\u9AD8\u4EAE\u6216\u5F69\u8272\u65B9\u5F0F\u663E\u793A\u6539\u52A8\u72B6\u6001</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> color.ui <span class="token boolean">true</span>

<span class="token comment"># \u914D\u7F6E\u53EF\u4EE5\u7F13\u5B58\u5BC6\u7801\uFF0C\u9ED8\u8BA4\u7F13\u5B58\u65F6\u95F415\u5206\u949F</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> credential.helper cache

<span class="token comment"># \u914D\u7F6E\u5BC6\u7801\u7684\u7F13\u5B58\u65F6\u95F4</span>
<span class="token comment"># \u7F13\u5B58\u65F6\u95F4\u5355\u4F4D\uFF1A\u79D2</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> credential.helper <span class="token string">&#39;cache --timeout=&lt;\u7F13\u5B58\u65F6\u95F4&gt;&#39;</span>

<span class="token comment"># \u914D\u7F6E\u957F\u671F\u5B58\u50A8\u5BC6\u7801</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> credential.helper store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521D\u59CB\u5316\u672C\u5730\u5E93</span>
<span class="token function">git</span> init
<span class="token comment">#\u67E5\u770B\u72B6\u6001</span>
<span class="token function">git</span> status
<span class="token comment"># \u4EE5\u7B80\u77ED\u6A21\u5F0F\u67E5\u770B\u672C\u5730\u4ED3\u5E93\u7684\u72B6\u6001</span>
<span class="token comment"># \u4F1A\u663E\u793A\u4E24\u5217\uFF0C\u7B2C\u4E00\u5217\u662F\u6587\u4EF6\u7684\u72B6\u6001\uFF0C\u7B2C\u4E8C\u5217\u662F\u5BF9\u5E94\u7684\u6587\u4EF6</span>
<span class="token comment"># \u6587\u4EF6\u72B6\u6001\uFF1AA \u65B0\u589E\uFF0CM \u4FEE\u6539\uFF0CD \u5220\u9664\uFF0C?? \u672A\u6DFB\u52A0\u5230Git\u4E2D</span>
$ <span class="token function">git</span> status <span class="token parameter variable">-s</span>
<span class="token comment"># \u5C06\u65B0\u5EFA/\u4FEE\u6539\u7684\u5185\u5BB9\u63D0\u4EA4</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>file name<span class="token operator">&gt;</span>
<span class="token comment"># \u79FB\u9664\u6682\u5B58\u533A\u7684\u4FEE\u6539</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> <span class="token operator">&lt;</span>file name<span class="token operator">&gt;</span>
<span class="token comment"># \u5C06\u6682\u5B58\u533A\u7684\u5185\u5BB9\u63D0\u4EA4\u5230\u672C\u5730\u5E93</span>
<span class="token function">git</span> commit <span class="token operator">&lt;</span>file name<span class="token operator">&gt;</span>
<span class="token comment"># \u6587\u4EF6\u4ECE\u6682\u5B58\u533A\u5230\u672C\u5730\u5E93</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7" aria-hidden="true">#</a> \u65E5\u5FD7</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5386\u53F2\u63D0\u4EA4(\u7A7A\u683C\u5411\u4E0B\u7FFB\u9875\uFF0Cb\u5411\u4E0A\u7FFB\u9875\uFF0Cq\u9000\u51FA)</span>
<span class="token function">git</span> log
<span class="token comment"># \u4EE5\u6F02\u4EAE\u7684\u4E00\u884C\u663E\u793A\uFF0C\u5305\u542B\u5168\u90E8\u54C8\u5E0C\u7D22\u5F15\u503C</span>
<span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline
<span class="token comment"># \u4EE5\u7B80\u6D01\u7684\u4E00\u884C\u663E\u793A\uFF0C\u5305\u542B\u7B80\u6D01\u54C8\u5E0C\u7D22\u5F15\u503C</span>
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span>
<span class="token comment"># \u4EE5\u7B80\u6D01\u7684\u4E00\u884C\u663E\u793A\uFF0C\u5305\u542B\u7B80\u6D01\u54C8\u5E0C\u7D22\u5F15\u503C\uFF0C\u540C\u65F6\u663E\u793A\u79FB\u52A8\u5230\u67D0\u4E2A\u5386\u53F2\u7248\u672C\u6240\u9700\u7684\u6B65\u6570</span>
<span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7248\u672C\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u63A7\u5236" aria-hidden="true">#</a> \u7248\u672C\u63A7\u5236</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u56DE\u5230\u6307\u5B9A\u54C8\u5E0C\u503C\u6240\u5BF9\u5E94\u7684\u7248\u672C</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> \u7B80\u6D01/\u5B8C\u6574\u54C8\u5E0C\u7D22\u5F15\u503C
<span class="token comment"># \u5F3A\u5236\u5DE5\u4F5C\u533A\u3001\u6682\u5B58\u533A\u3001\u672C\u5730\u5E93\u4E3A\u5F53\u524DHEAD\u6307\u9488\u6240\u5728\u7684\u7248\u672C</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD
<span class="token comment"># \u540E\u9000\u4E00\u4E2A\u7248\u672C\u3000</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^
<span class="token comment"># \u540E\u9000\u4E00\u4E2A\u7248\u672C\uFF08\u6CE2\u6D6A\u7EBF~\u540E\u9762\u7684\u6570\u5B57\u8868\u793A\u540E\u9000\u51E0\u4E2A\u7248\u672C\uFF09</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD~1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6BD4\u8F83\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#\u6BD4\u8F83\u5DEE\u5F02" aria-hidden="true">#</a> \u6BD4\u8F83\u5DEE\u5F02</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6BD4\u8F83\u5DE5\u4F5C\u533A\u548C\u6682\u5B58\u533A\u7684\u6240\u6709\u6587\u4EF6\u5DEE\u5F02</span>
<span class="token function">git</span> <span class="token function">diff</span>
<span class="token comment"># \u6BD4\u8F83\u5DE5\u4F5C\u533A\u548C\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u7684\u5DEE\u5F02</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>file name<span class="token operator">&gt;</span>
<span class="token comment"># \u6BD4\u8F83\u5DE5\u4F5C\u533A\u8DDF\u672C\u5730\u5E93\u7684\u67D0\u4E2A\u7248\u672C\u7684\u6307\u5B9A\u6587\u4EF6\u7684\u5DEE\u5F02</span>
<span class="token function">git</span> <span class="token function">diff</span> HEAD<span class="token operator">|</span>HEAD^<span class="token operator">|</span>HEAD~<span class="token operator">|</span>\u54C8\u5E0C\u7D22\u5F15\u503C <span class="token operator">&lt;</span>file name<span class="token operator">&gt;</span>
<span class="token comment"># \u6BD4\u8F83\u6682\u5B58\u533A\u4E2D\u7684\u6587\u4EF6\u548C\u4E0A\u6B21\u63D0\u4EA4\u65F6\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--staged</span>

<span class="token comment"># \u6BD4\u8F83\u5F53\u524D\u6587\u4EF6\u548C\u4E0A\u6B21\u63D0\u4EA4\u65F6\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> HEAD

<span class="token comment"># \u67E5\u770B\u4ECE\u6307\u5B9A\u7684\u7248\u672C\u4E4B\u540E\u6539\u52A8\u7684\u5185\u5BB9</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>commit ID<span class="token operator">&gt;</span>

<span class="token comment"># \u6BD4\u8F83\u4E24\u4E2A\u5206\u652F\u4E4B\u95F4\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>\u5206\u652F\u540D\u79F0<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>\u5206\u652F\u540D\u79F0<span class="token operator">&gt;</span>

<span class="token comment"># \u67E5\u770B\u4E24\u4E2A\u5206\u652F\u5206\u5F00\u540E\u5404\u81EA\u7684\u6539\u52A8\u5185\u5BB9</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>\u5206\u652F\u540D\u79F0<span class="token operator">&gt;</span><span class="token punctuation">..</span>.<span class="token operator">&lt;</span>\u5206\u652F\u540D\u79F0<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5206\u652F\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u64CD\u4F5C" aria-hidden="true">#</a> \u5206\u652F\u64CD\u4F5C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u6240\u6709\u5206\u652F</span>
<span class="token function">git</span> branch <span class="token parameter variable">-v</span>
<span class="token comment"># \u4FEE\u6539\u5206\u652F\u540D\u79F0</span>
<span class="token comment"># \u5982\u679C\u4E0D\u6307\u5B9A\u539F\u5206\u652F\u540D\u79F0\u5219\u4E3A\u5F53\u524D\u6240\u5728\u5206\u652F</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-m</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>\u539F\u5206\u652F\u540D\u79F0<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span>\u65B0\u7684\u5206\u652F\u540D\u79F0<span class="token operator">&gt;</span>
<span class="token comment"># \u5F3A\u5236\u4FEE\u6539\u5206\u652F\u540D\u79F0</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-M</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>\u539F\u5206\u652F\u540D\u79F0<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span>\u65B0\u7684\u5206\u652F\u540D\u79F0<span class="token operator">&gt;</span>

<span class="token comment"># \u5220\u9664\u6307\u5B9A\u7684\u672C\u5730\u5206\u652F</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>\u5206\u652F\u540D\u79F0<span class="token operator">&gt;</span>

<span class="token comment"># \u5F3A\u5236\u5220\u9664\u6307\u5B9A\u7684\u672C\u5730\u5206\u652F</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-D</span> <span class="token operator">&lt;</span>\u5206\u652F\u540D\u79F0<span class="token operator">&gt;</span>

<span class="token comment"># \u65B0\u5EFA\u5206\u652F</span>
<span class="token function">git</span> branch <span class="token operator">&lt;</span>\u5206\u652F\u540D<span class="token operator">&gt;</span>
<span class="token comment"># \u5207\u6362\u5206\u652F</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>\u5206\u652F\u540D<span class="token operator">&gt;</span>
<span class="token comment"># \u5408\u5E76\u5206\u652F</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>\u88AB\u5408\u5E76\u5206\u652F\u540D<span class="token operator">&gt;</span>
<span class="token comment"># \u5217\u51FA\u672C\u5730\u7684\u6240\u6709\u5206\u652F\u5E76\u663E\u793A\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\uFF0C\u5F53\u524D\u6240\u5728\u5206\u652F\u4EE5 &quot;*&quot; \u6807\u51FA</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u4EA4\u4E92" tabindex="-1"><a class="header-anchor" href="#\u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u4EA4\u4E92" aria-hidden="true">#</a> \u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u4EA4\u4E92</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u514B\u9686\u8FDC\u7A0B\u5E93</span>
<span class="token function">git</span> clone <span class="token operator">&lt;</span>\u8FDC\u7A0B\u5E93\u5730\u5740<span class="token operator">&gt;</span>
<span class="token comment"># \u67E5\u770B\u8FDC\u7A0B\u5E93\u5730\u5740\u522B\u540D</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>
<span class="token function">git</span> remote <span class="token parameter variable">--verbose</span>
<span class="token comment"># \u65B0\u5EFA\u8FDC\u7A0B\u5E93\u5730\u5740\u522B\u540D</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>\u522B\u540D<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>\u8FDC\u7A0B\u5E93\u5730\u5740<span class="token operator">&gt;</span>
<span class="token comment"># \u4FEE\u6539\u8FDC\u7A0B\u4ED3\u5E93\u7684\u522B\u540D</span>
<span class="token function">git</span> remote <span class="token function">rename</span> <span class="token operator">&lt;</span>\u539F\u8FDC\u7A0B\u4ED3\u5E93\u7684\u522B\u540D<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>\u65B0\u7684\u522B\u540D<span class="token operator">&gt;</span>
<span class="token comment"># \u5220\u9664\u672C\u5730\u4E2D\u8FDC\u7A0B\u5E93\u522B\u540D</span>
<span class="token function">git</span> remote <span class="token function">rm</span> <span class="token operator">&lt;</span>\u522B\u540D<span class="token operator">&gt;</span>
<span class="token comment"># \u672C\u5730\u5E93\u67D0\u4E2A\u5206\u652F\u63A8\u9001\u5230\u8FDC\u7A0B\u5E93\uFF0C\u5206\u652F\u5FC5\u987B\u6307\u5B9A</span>
<span class="token function">git</span> push <span class="token operator">&lt;</span>\u522B\u540D<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>\u5206\u652F\u540D<span class="token operator">&gt;</span>
<span class="token comment"># \u628A\u8FDC\u7A0B\u5E93\u7684\u4FEE\u6539\u62C9\u53D6\u5230\u672C\u5730\uFF08\u8BE5\u547D\u4EE4\u5305\u62EC git fetch\uFF0Cgit merge\uFF09</span>
<span class="token comment"># \u5220\u9664\u6307\u5B9A\u7684\u8FDC\u7A0B\u4ED3\u5E93\u7684\u5206\u652F</span>
<span class="token function">git</span> push <span class="token operator">&lt;</span>\u8FDC\u7A0B\u4ED3\u5E93\u7684\u522B\u540D<span class="token operator">&gt;</span> :<span class="token operator">&lt;</span>\u8FDC\u7A0B\u5206\u652F\u540D<span class="token operator">&gt;</span>
<span class="token function">git</span> push <span class="token operator">&lt;</span>\u8FDC\u7A0B\u4ED3\u5E93\u7684\u522B\u540D<span class="token operator">&gt;</span> <span class="token parameter variable">--delete</span> <span class="token operator">&lt;</span>\u8FDC\u7A0B\u5206\u652F\u540D<span class="token operator">&gt;</span>
<span class="token function">git</span> pull <span class="token operator">&lt;</span>\u522B\u540D<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>\u5206\u652F\u540D<span class="token operator">&gt;</span>
<span class="token comment"># \u6293\u53D6\u8FDC\u7A0B\u5E93\u7684\u6307\u5B9A\u5206\u652F\u5230\u672C\u5730\uFF0C\u4F46\u6CA1\u6709\u5408\u5E76</span>
<span class="token function">git</span> fetch <span class="token operator">&lt;</span>\u8FDC\u7A0B\u5E93\u522B\u540D<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>\u8FDC\u7A0B\u5E93\u5206\u652F\u540D<span class="token operator">&gt;</span>
<span class="token comment"># \u5C06\u6293\u53D6\u4E0B\u6765\u7684\u8FDC\u7A0B\u7684\u5206\u652F\uFF0C\u8DDF\u5F53\u524D\u6240\u5728\u5206\u652F\u8FDB\u884C\u5408\u5E76</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>\u8FDC\u7A0B\u5E93\u522B\u540D/\u8FDC\u7A0B\u5E93\u5206\u652F\u540D<span class="token operator">&gt;</span>
<span class="token comment"># \u590D\u5236\u8FDC\u7A0B\u5E93</span>
<span class="token function">git</span> fork
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6682\u5B58\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6682\u5B58\u64CD\u4F5C" aria-hidden="true">#</a> \u6682\u5B58\u64CD\u4F5C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash \u6682\u5B58\u5F53\u524D\u4FEE\u6539
<span class="token function">git</span> stash apply \u6062\u590D\u6700\u8FD1\u7684\u4E00\u6B21\u6682\u5B58
<span class="token function">git</span> stash pop \u6062\u590D\u6682\u5B58\u5E76\u5220\u9664\u6682\u5B58\u8BB0\u5F55
<span class="token function">git</span> stash list \u67E5\u770B\u6682\u5B58\u5217\u8868
<span class="token function">git</span> stash drop \u6682\u5B58\u540D<span class="token punctuation">(</span>\u4F8B\uFF1Astash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span> \u79FB\u9664\u67D0\u6B21\u6682\u5B58
<span class="token function">git</span> stash <span class="token function">clear</span> \u6E05\u9664\u6682\u5B58
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56DE\u9000\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u56DE\u9000\u64CD\u4F5C" aria-hidden="true">#</a> \u56DE\u9000\u64CD\u4F5C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^ \u56DE\u9000\u5230\u4E0A\u4E00\u4E2A\u7248\u672C
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> ahdhs1<span class="token punctuation">(</span>commit_id<span class="token punctuation">)</span> \u56DE\u9000\u5230\u67D0\u4E2A\u7248\u672C
<span class="token function">git</span> checkout -- file\u64A4\u9500\u4FEE\u6539\u7684\u6587\u4EF6<span class="token punctuation">(</span>\u5982\u679C\u6587\u4EF6\u52A0\u5165\u5230\u4E86\u6682\u5B58\u533A\uFF0C\u5219\u56DE\u9000\u5230\u6682\u5B58\u533A\u7684\uFF0C\u5982\u679C\u6587\u4EF6\u52A0\u5165\u5230\u4E86\u7248\u672C\u5E93\uFF0C\u5219\u8FD8\u539F\u81F3\u52A0\u5165\u7248\u672C\u5E93\u4E4B\u540E\u7684\u72B6\u6001<span class="token punctuation">)</span>
<span class="token function">git</span> reset HEAD <span class="token function">file</span> \u64A4\u56DE\u6682\u5B58\u533A\u7684\u6587\u4EF6\u4FEE\u6539\u5230\u5DE5\u4F5C\u533A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6807\u7B7E\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E\u64CD\u4F5C" aria-hidden="true">#</a> \u6807\u7B7E\u64CD\u4F5C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> tag \u6807\u7B7E\u540D \u6DFB\u52A0\u6807\u7B7E<span class="token punctuation">(</span>\u9ED8\u8BA4\u5BF9\u5F53\u524D\u7248\u672C<span class="token punctuation">)</span>
<span class="token function">git</span> tag \u6807\u7B7E\u540D commit_id \u5BF9\u67D0\u4E00\u63D0\u4EA4\u8BB0\u5F55\u6253\u6807\u7B7E
<span class="token function">git</span> tag <span class="token parameter variable">-a</span> \u6807\u7B7E\u540D <span class="token parameter variable">-m</span> <span class="token string">&#39;\u63CF\u8FF0&#39;</span> \u521B\u5EFA\u65B0\u6807\u7B7E\u5E76\u589E\u52A0\u5907\u6CE8
<span class="token function">git</span> tag \u5217\u51FA\u6240\u6709\u6807\u7B7E\u5217\u8868
<span class="token function">git</span> show \u6807\u7B7E\u540D \u67E5\u770B\u6807\u7B7E\u4FE1\u606F
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> \u6807\u7B7E\u540D \u5220\u9664\u672C\u5730\u6807\u7B7E
<span class="token function">git</span> push origin \u6807\u7B7E\u540D \u63A8\u9001\u6807\u7B7E\u5230\u8FDC\u7A0B\u4ED3\u5E93
<span class="token function">git</span> push origin <span class="token parameter variable">--tags</span> \u63A8\u9001\u6240\u6709\u6807\u7B7E\u5230\u8FDC\u7A0B\u4ED3\u5E93
<span class="token function">git</span> push origin :refs/tags/\u6807\u7B7E\u540D \u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u4E2D\u5220\u9664\u6807\u7B7E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5220\u9664\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u64CD\u4F5C" aria-hidden="true">#</a> \u5220\u9664\u64CD\u4F5C</h3><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code># \u6211\u8981\u5220\u6389\u8BB0\u5F55\u7684\u6587\u4EF6\u7684\u8DEF\u5F84\u662F(\u76F8\u5BF9\u4E8E\u9879\u76EE):src/main/resources/config/application-test.yml
git filter-branch --force --index-filter &#39;git rm --cached --ignore-unmatch src/main/resources/config/application-test.yml&#39; --prune-empty --tag-name-filter cat -- --all
# \u672C\u5730\u8BB0\u5F55\u8986\u76D6\u5230Github,(\u6240\u6709branch\u4EE5\u53CA\u6240\u6709tags)
git push origin --force --all
git push origin --force --tags
# \u786E\u4FDD\u6CA1\u6709\u4EC0\u4E48\u95EE\u9898\u4E4B\u540E,\u5F3A\u5236\u89E3\u9664\u5BF9\u672C\u5730\u5B58\u50A8\u5E93\u4E2D\u7684\u6240\u6709\u5BF9\u8C61\u7684\u5F15\u7528\u548C\u5783\u573E\u6536\u96C6
git for-each-ref --format=&#39;delete %(refname)&#39; refs/original | git update-ref --stdin
git reflog expire --expire=now --all
git gc --prune=now
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5220\u9664\u6240\u6709\u63D0\u4EA4\u5386\u53F2\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6240\u6709\u63D0\u4EA4\u5386\u53F2\u8BB0\u5F55" aria-hidden="true">#</a> \u5220\u9664\u6240\u6709\u63D0\u4EA4\u5386\u53F2\u8BB0\u5F55</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C1D\u8BD5 \u8FD0\u884C </span>
<span class="token function">git</span> checkout <span class="token parameter variable">--orphan</span> latest_branch
<span class="token comment"># \u6DFB\u52A0\u6240\u6709\u6587\u4EF6</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token comment"># \u63D0\u4EA4\u66F4\u6539</span>
<span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&quot;commit message&quot;</span>
<span class="token comment"># \u5220\u9664\u5206\u652F</span>
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> master
<span class="token comment"># \u5C06\u5F53\u524D\u5206\u652F\u91CD\u547D\u540D</span>
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> master
<span class="token comment"># \u6700\u540E\uFF0C\u5F3A\u5236\u66F4\u65B0\u5B58\u50A8\u5E93\u3002</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4-1" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4-1" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To set your identity:</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;John Doe&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email johndoe@example.com

<span class="token comment"># To set your editor:</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> core.editor emacs

<span class="token comment"># To enable color:</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> color.ui <span class="token boolean">true</span>

<span class="token comment"># To stage all changes for commit:</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">--all</span>

<span class="token comment"># To stash changes locally, this will keep the changes in a separate changelist</span>
<span class="token comment"># called stash and the working directory is cleaned. You can apply changes</span>
<span class="token comment"># from the stash anytime</span>
<span class="token function">git</span> stash

<span class="token comment"># To stash changes with a message</span>
<span class="token function">git</span> stash save <span class="token string">&quot;message&quot;</span>

<span class="token comment"># To list all the stashed changes</span>
<span class="token function">git</span> stash list

<span class="token comment"># To apply the most recent change and remove the stash from the stash list</span>
<span class="token function">git</span> stash pop

<span class="token comment"># To apply any stash from the list of stashes. This does not remove the stash</span>
<span class="token comment"># from the stash list</span>
<span class="token function">git</span> stash apply stash@<span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span>

<span class="token comment"># To commit staged changes</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Your commit message&quot;</span>

<span class="token comment"># To edit previous commit message</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span>

<span class="token comment"># Git commit in the past</span>
<span class="token function">git</span> commit <span class="token parameter variable">--date</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token parameter variable">--date</span><span class="token operator">=</span><span class="token string">&#39;2 day ago&#39;</span><span class="token variable">\`</span></span>&quot;</span>
<span class="token function">git</span> commit <span class="token parameter variable">--date</span><span class="token operator">=</span><span class="token string">&quot;Jun 13 18:30:25 IST 2015&quot;</span>
<span class="token comment"># more recent versions of Git also support --date=&quot;2 days ago&quot; directly</span>

<span class="token comment"># To change the date of an existing commit</span>
<span class="token function">git</span> filter-branch --env-filter <span class="token punctuation">\\</span>
    <span class="token string">&#39;if [ $GIT_COMMIT = 119f9ecf58069b265ab22f1f97d2b648faf932e0 ]
     then
         export GIT_AUTHOR_DATE=&quot;Fri Jan 2 21:38:53 2009 -0800&quot;
         export GIT_COMMITTER_DATE=&quot;Sat May 19 01:01:01 2007 -0700&quot;
     fi&#39;</span>

<span class="token comment"># To removed staged and working directory changes</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span>

<span class="token comment"># To go 2 commits back</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD~2

<span class="token comment"># To remove untracked files</span>
<span class="token function">git</span> clean <span class="token parameter variable">-f</span> <span class="token parameter variable">-d</span>

<span class="token comment"># To remove untracked and ignored files</span>
<span class="token function">git</span> clean <span class="token parameter variable">-f</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-x</span>

<span class="token comment"># To push to the tracked master branch:</span>
<span class="token function">git</span> push origin master

<span class="token comment"># To push to a specified repository:</span>
<span class="token function">git</span> push git@github.com:username/project.git

<span class="token comment"># To delete the branch &quot;branch_name&quot;</span>
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> branch_name

<span class="token comment"># To make an exisiting branch track a remote branch</span>
<span class="token function">git</span> branch <span class="token parameter variable">-u</span> upstream/foo

<span class="token comment"># To see who commited which line in a file</span>
<span class="token function">git</span> blame filename

<span class="token comment"># To sync a fork with the master repo:</span>
<span class="token comment"># Set a new repo</span>
<span class="token function">git</span> remote <span class="token function">add</span> upstream git@github.com:name/repo.git    
<span class="token comment"># Confirm new remote repo</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>                                           
<span class="token comment"># Get branches</span>
<span class="token function">git</span> fetch upstream                                      
<span class="token comment"># List local - remote branches</span>
<span class="token function">git</span> branch <span class="token parameter variable">-va</span>                                          
<span class="token comment"># Checkout local master branch</span>
<span class="token function">git</span> checkout master                                     
<span class="token comment"># Create and checkout a new branch</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> new_branch                              
<span class="token comment"># Merge remote into local repo</span>
<span class="token function">git</span> merge upstream/master                               
<span class="token comment"># Show what a commit did.</span>
<span class="token function">git</span> show 83fb499                                        
<span class="token comment"># Shows the file as it appeared at 83fb499.</span>
<span class="token function">git</span> show 83fb499:path/fo/file.ext                       
<span class="token comment"># Check difference between branches</span>
<span class="token function">git</span> <span class="token function">diff</span> branch_1 branch_2                              
<span class="token comment"># Show all the commits</span>
<span class="token function">git</span> log                                                 
<span class="token comment"># Show the changes from last commit</span>
<span class="token function">git</span> status                                              

<span class="token comment"># Commit history of a set of files</span>
<span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>email --patch-with-stat <span class="token parameter variable">--reverse</span> --full-index -- Admin<span class="token punctuation">\\</span>*.py <span class="token operator">&gt;</span> Sripts.patch

<span class="token comment"># Import commits from another repo</span>
<span class="token function">git</span> --git-dir<span class="token operator">=</span><span class="token punctuation">..</span>/some_other_repo/.git format-patch <span class="token parameter variable">-k</span> <span class="token parameter variable">-1</span> <span class="token parameter variable">--stdout</span> <span class="token operator">&lt;</span>commit SHA<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token function">git</span> am <span class="token parameter variable">-3</span> <span class="token parameter variable">-k</span>

<span class="token comment"># View commits that will be pushed</span>
<span class="token function">git</span> log @<span class="token punctuation">{</span>u<span class="token punctuation">}</span><span class="token punctuation">..</span>

<span class="token comment"># View changes that are new on a feature branch</span>
<span class="token function">git</span> log <span class="token parameter variable">-p</span> feature <span class="token parameter variable">--not</span> master
<span class="token function">git</span> <span class="token function">diff</span> master<span class="token punctuation">..</span>.feature

<span class="token comment"># Interactive rebase for the last 7 commits</span>
<span class="token function">git</span> rebase <span class="token parameter variable">-i</span> @~7

<span class="token comment"># Diff files WITHOUT considering them a part of git</span>
<span class="token comment"># This can be used to diff files that are not in a git repo!</span>
<span class="token function">git</span> <span class="token function">diff</span> --no-index path/to/file/A path/to/file/B

<span class="token comment"># To pull changes while overwriting any local commits</span>
<span class="token comment"># \u7B80\u5355\u7684\u8BF4\u5C31\u662F\u62FF\u8FDC\u7A0B\u7684\u4EE3\u7801\u8986\u76D6\u672C\u5730\u7684\u4EE3\u7801</span>
<span class="token function">git</span> fetch <span class="token parameter variable">--all</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> origin/master

<span class="token comment"># Update all your submodules</span>
<span class="token function">git</span> submodule update <span class="token parameter variable">--init</span> <span class="token parameter variable">--recursive</span>

<span class="token comment"># Perform a shallow clone to only get latest commits</span>
<span class="token comment"># (helps save data when cloning large repos)</span>
<span class="token function">git</span> clone <span class="token parameter variable">--depth</span> <span class="token number">1</span> <span class="token operator">&lt;</span>remote-url<span class="token operator">&gt;</span>

<span class="token comment"># To unshallow a clone</span>
<span class="token function">git</span> pull <span class="token parameter variable">--unshallow</span>

<span class="token comment"># Create a bare branch (one that has no commits on it)</span>
<span class="token function">git</span> checkout <span class="token parameter variable">--orphan</span> branch_name

<span class="token comment"># Checkout a new branch from a different starting point</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> master upstream/master

<span class="token comment"># Remove all stale branches (ones that have been deleted on remote)</span>
<span class="token comment"># So if you have a lot of useless branches, delete them on Github and then run this</span>
<span class="token function">git</span> remote prune origin

<span class="token comment"># The following can be used to prune all remotes at once</span>
<span class="token function">git</span> remote prune <span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> remote <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;\\n&#39;</span> <span class="token string">&#39; &#39;</span><span class="token variable">)</span></span>

<span class="token comment"># Revisions can also be identified with :/text</span>
<span class="token comment"># So, this will show the first commit that has &quot;cool&quot; in their message body</span>
<span class="token function">git</span> show :/cool

<span class="token comment"># Undo parts of last commit in a specific file</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-p</span> HEAD^ -- /path/to/file

<span class="token comment"># Revert a commit and keep the history of the reverted change as a separate revert commit</span>
<span class="token function">git</span> revert <span class="token operator">&lt;</span>commit SHA<span class="token operator">&gt;</span>

<span class="token comment"># Pich a commit from a branch to current branch. This is different than merge as</span>
<span class="token comment"># this just applies a single commit from a branch to current branch</span>
<span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>commit SHA<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),l=[t];function c(o,p){return s(),a("div",null,l)}const d=n(i,[["render",c],["__file","git.html.vue"]]);export{d as default};
