import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<h3 id="\u5E38\u7528\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u9009\u9879" aria-hidden="true">#</a> \u5E38\u7528\u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-o\uFF1A\u6307\u5B9A\u751F\u6210\u7684\u8F93\u51FA\u6587\u4EF6\uFF1B
-E\uFF1A\u4EC5\u6267\u884C\u7F16\u8BD1\u9884\u5904\u7406\uFF1B
-S\uFF1A\u5C06C\u4EE3\u7801\u8F6C\u6362\u4E3A\u6C47\u7F16\u4EE3\u7801\uFF1B
-wall\uFF1A\u663E\u793A\u8B66\u544A\u4FE1\u606F\uFF1B
-c\uFF1A\u4EC5\u6267\u884C\u7F16\u8BD1\u64CD\u4F5C\uFF0C\u4E0D\u8FDB\u884C\u8FDE\u63A5\u64CD\u4F5C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Compile a file</span>
<span class="token comment">#\u7F16\u8BD1\u6587\u4EF6</span>
gcc file.c

<span class="token comment"># Compile a file with a custom output</span>
<span class="token comment">#\u4F7F\u7528\u81EA\u5B9A\u4E49\u8F93\u51FA\u7F16\u8BD1\u6587\u4EF6</span>
gcc <span class="token parameter variable">-o</span> <span class="token function">file</span> file.c

<span class="token comment"># Debug symbols</span>
<span class="token comment">#\u8C03\u8BD5\u7B26\u53F7</span>
gcc <span class="token parameter variable">-g</span>

<span class="token comment"># Debug with all symbols.</span>
<span class="token comment">#\u4F7F\u7528\u6240\u6709\u7B26\u53F7\u8FDB\u884C\u8C03\u8BD5</span>
gcc <span class="token parameter variable">-ggdb3</span>

<span class="token comment"># Build for 64 bytes</span>
<span class="token comment">#\u6784\u5EFA\u4E3A64\u4E2A\u5B57\u8282</span>
gcc <span class="token parameter variable">-m64</span>

<span class="token comment"># Include the directory {/usr/include/myPersonnal/lib/} to the list of path for #include &lt;....&gt;</span>
<span class="token comment">#\u5C06\u76EE\u5F55{/ usr / include / myPersonnal / lib /}\u5305\u542B\u5728include &lt;....&gt;\u7684\u8DEF\u5F84\u5217\u8868\u4E2D</span>
<span class="token comment"># With this option, no warning / error will be reported for the files in {/usr/include/myPersonnal/lib/}</span>
<span class="token comment">#\u4F7F\u7528\u6B64\u9009\u9879\uFF0C\u5C06\u4E0D\u4F1A\u62A5\u544A{/ usr / include / myPersonnal / lib /}\u4E2D\u6587\u4EF6\u7684\u8B66\u544A/\u9519\u8BEF</span>
gcc <span class="token parameter variable">-isystem</span> /usr/include/myPersonnal/lib/

<span class="token comment"># Build a GUI for windows (Mingw) (Will disable the term/console)</span>
<span class="token comment">#\u4E3AWindows\u6784\u5EFAGUI\uFF08Mingw\uFF09\uFF08\u5C06\u7981\u7528\u672F\u8BED/\u63A7\u5236\u53F0\uFF09</span>
gcc <span class="token parameter variable">-mwindows</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[l];function d(r,m){return s(),e("div",null,c)}const o=n(i,[["render",d],["__file","gcc.html.vue"]]);export{o as default};
