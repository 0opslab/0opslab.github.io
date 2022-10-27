import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-d<span class="token operator">&lt;</span>\u95F4\u9694\u5B57\u7B26<span class="token operator">&gt;</span>\u6216\u2013delimiters<span class="token operator">=</span><span class="token operator">&lt;</span>\u95F4\u9694\u5B57\u7B26<span class="token operator">&gt;</span> \u3000\u7528\u6307\u5B9A\u7684\u95F4\u9694\u5B57\u7B26\u53D6\u4EE3\u8DF3\u683C\u5B57\u7B26\u3002
-s\u6216\u2013serial \u3000\u4E32\u5217\u8FDB\u884C\u800C\u975E\u5E73\u884C\u5904\u7406\u3002
\u2013help \u3000\u5728\u7EBF\u5E2E\u52A9\u3002
\u2013version \u3000\u663E\u793A\u5E2E\u52A9\u4FE1\u606F\u3002
<span class="token punctuation">[</span>\u6587\u4EF6\u2026<span class="token punctuation">]</span> \u6307\u5B9A\u64CD\u4F5C\u7684\u6587\u4EF6\u8DEF\u5F84
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Concat columns from files</span>
<span class="token comment">#\u6765\u81EA\u6587\u4EF6\u7684Concat\u5217</span>
<span class="token function">paste</span> file1 file2 <span class="token punctuation">..</span>.

<span class="token comment"># List the files in the current directory in three columns:</span>
<span class="token comment">#\u5728\u4E09\u5217\u4E2D\u5217\u51FA\u5F53\u524D\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\uFF1A</span>
<span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">paste</span> - - -

<span class="token comment"># Combine pairs of lines from a file into single lines:</span>
<span class="token comment">#\u5C06\u6587\u4EF6\u4E2D\u7684\u7EBF\u5BF9\u7EC4\u5408\u6210\u5355\u884C\uFF1A</span>
<span class="token function">paste</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;\\t\\n&#39;</span> myfile

<span class="token comment"># Number the lines in a file, similar to nl(1):</span>
<span class="token comment">#\u5BF9\u6587\u4EF6\u4E2D\u7684\u884C\u8FDB\u884C\u7F16\u53F7\uFF0C\u7C7B\u4F3C\u4E8Enl\uFF081\uFF09\uFF1A</span>
<span class="token function">sed</span> <span class="token operator">=</span> myfile <span class="token operator">|</span> <span class="token function">paste</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;\\t\\n&#39;</span> - -

<span class="token comment"># Create a colon-separated list of directories named bin,</span>
<span class="token comment">#\u521B\u5EFA\u4EE5\u5192\u53F7\u5206\u9694\u7684\u540D\u4E3Abin\u7684\u76EE\u5F55\u5217\u8868\uFF0C</span>
<span class="token comment"># suitable for use in the PATH environment variable:</span>
<span class="token comment">#\u9002\u5408\u5728PATH\u73AF\u5883\u53D8\u91CF\u4E2D\u4F7F\u7528\uFF1A</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> bin <span class="token parameter variable">-type</span> d <span class="token operator">|</span> <span class="token function">paste</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-d</span> <span class="token builtin class-name">:</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[l];function c(o,p){return s(),a("div",null,t)}const d=n(i,[["render",c],["__file","paste.html.vue"]]);export{d as default};
