import{_ as n,o as a,c as e,e as s}from"./app.a667bd71.js";const i={},l=s(`<h1 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> ~/.bash_profile
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/opt/gradle-4.8.1/bin
<span class="token builtin class-name">source</span> ~/.bash_profile
<span class="token comment">#\u82E5\u663E\u793A\u51FA\u7248\u672C\u53F7\uFF0C\u5219\u8BF4\u660E\u5B89\u88C5\u6210\u529F</span>
gradle <span class="token parameter variable">-v</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u5E2E\u52A9\u547D\u4EE4
gradle <span class="token parameter variable">--help</span>

\u67E5\u770B\u7248\u672C
gradle <span class="token parameter variable">-v</span>

\u6267\u884C\u7279\u5B9A\u7684\u4EFB\u52A1
gradle <span class="token punctuation">[</span>taskName<span class="token punctuation">]</span>

\u67E5\u770B\u6240\u6709\u53EF\u7528\u7684task
gradle task


\u6784\u5EFA
gradle build

\u8DF3\u8FC7\u6D4B\u8BD5\u6784\u5EFA\u6784\u5EFA
gradle build <span class="token parameter variable">-x</span> <span class="token builtin class-name">test</span>

\u7EE7\u7EED\u6267\u884C\u4EFB\u52A1\u800C\u5FFD\u7565\u524D\u9762\u5931\u8D25\u7684\u4EFB\u52A1
gradle build <span class="token parameter variable">--continue</span>

\u8BD5\u8FD0\u884Cbuild
gradle <span class="token parameter variable">-m</span> build

\u4EA7\u751Fbuild\u8FD0\u884C\u65F6\u95F4\u7684\u62A5\u544A
gradle build <span class="token parameter variable">--profile</span>
\u7ED3\u679C\u5B58\u50A8\u5728build/report/profile\u76EE\u5F55\uFF0C\u540D\u79F0\u4E3Abuild\u8FD0\u884C\u7684\u65F6\u95F4\u3002

\u663E\u793A\u4EFB\u52A1\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB
gradlle tasks <span class="token parameter variable">--all</span>

\u67E5\u770BtestCompile\u7684\u4F9D\u8D56\u5173\u7CFB
gradle <span class="token parameter variable">-q</span> dependencies <span class="token parameter variable">--configuration</span> testCompile

\u6E05\u7A7A\u6240\u6709\u7F16\u8BD1\u3001\u6253\u5305\u751F\u6210\u7684\u6587\u4EF6<span class="token punctuation">(</span>\u5373\uFF1A\u6E05\u7A7Abuild\u76EE\u5F55<span class="token punctuation">)</span>
gradle clean

\u4F7F\u7528\u6307\u5B9A\u7684Gradle\u6587\u4EF6\u8C03\u7528\u4EFB\u52A1
gradle <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>file_path<span class="token punctuation">]</span> <span class="token punctuation">[</span>task<span class="token punctuation">]</span>

\u4F7F\u7528\u6307\u5B9A\u7684\u76EE\u5F55\u8C03\u7528\u4EFB\u52A1
gradle <span class="token parameter variable">-q</span> <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span> helloWorld

Gradle\u7684\u56FE\u5F62\u754C\u9762
gradle <span class="token parameter variable">--gui</span>

Gradle\u7684\u547D\u4EE4\u65E5\u5FD7\u8F93\u51FA\u6709ERROR\uFF08\u9519\u8BEF\u4FE1\u606F\uFF09\u3001QUIET\uFF08\u91CD\u8981\u4FE1\u606F\uFF09\u3001WARNGING\uFF08\u8B66\u544A\u4FE1\u606F\uFF09\u3001LIFECYLE\uFF08\u8FDB\u7A0B\u4FE1\u606F\uFF09\u3001 INFO\uFF08\u4E00\u822C\u4FE1\u606F\uFF09\u3001DEBUG \uFF08\u8C03\u8BD5\u4FE1\u606F\uFF09\u4E00\u51716\u4E2A\u7EA7\u522B\u3002\u5728\u6267\u884CGradle\u4EFB\u52A1\u662F\u53EF\u4EE5\u9002\u65F6\u5730\u8C03\u6574\u4FE1\u606F\u8F93\u51FA\u7B49\u7EA7\uFF0C\u4EE5\u65B9\u4FBF\u5730\u89C2\u770B\u6267\u884C\u7ED3\u679C\u3002

-q/--quit \u542F\u7528\u91CD\u8981\u4FE1\u606F\u7EA7\u522B\uFF0C\u6539\u7EA7\u522B\u4E0B\u53EA\u4F1A\u8F93\u51FA\u81EA\u5DF1\u5728\u547D\u4EE4\u884C\u4E0B\u6253\u5370\u7684\u4FE1\u606F\u53CA\u9519\u8BEF\u4FE1\u606F\u3002
-i/--info \u4F1A\u8F93\u51FA\u9664DEBUG\u4EE5\u5916\u7684\u6240\u6709\u4FE1\u606F\u3002
-d/--dubug \u4F1A\u8F93\u51FA\u6240\u6709\u65E5\u5FD7\u4FE1\u606F\u3002
-s/--stacktrace \u4F1A\u8F93\u51FA\u8BE6\u7EC6\u7684\u9519\u8BEF\u5806\u6808\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[l];function r(v,c){return a(),e("div",null,d)}const u=n(i,[["render",r],["__file","gradle.html.vue"]]);export{u as default};
