import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},i=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-c\u6216\u2013bytes\u6216\u2013chars \u53EA\u663E\u793ABytes\u6570\u3002
-l\u6216\u2013lines \u53EA\u663E\u793A\u5217\u6570\u3002
-w\u6216\u2013words \u53EA\u663E\u793A\u5B57\u6570\u3002
\u2013help \u5728\u7EBF\u5E2E\u52A9\u3002
\u2013version \u663E\u793A\u7248\u672C\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Count the number of words (file or STDIN)</span>
<span class="token comment">#\u8BA1\u7B97\u5355\u8BCD\u6570\uFF08\u6587\u4EF6\u6216STDIN\uFF09</span>
<span class="token function">wc</span> <span class="token parameter variable">-w</span> /path/to/foo.txt
<span class="token function">cat</span> /path/to/foo.txt <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-w</span>

<span class="token comment"># Count the number of lines (file or STDIN)</span>
<span class="token comment">#\u8BA1\u7B97\u884C\u6570\uFF08\u6587\u4EF6\u6216STDIN\uFF09</span>
<span class="token function">wc</span> <span class="token parameter variable">-l</span> /path/to/foo.txt
<span class="token function">cat</span> /path/to/foo.txt <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>

<span class="token comment"># Count the number of bytes (file or STDIN)</span>
<span class="token comment">#\u8BA1\u7B97\u5B57\u8282\u6570\uFF08\u6587\u4EF6\u6216STDIN\uFF09</span>
<span class="token function">wc</span> <span class="token parameter variable">-c</span> /path/to/foo.txt
<span class="token function">cat</span> /path/to/foo.txt <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-c</span>

<span class="token comment"># Count files and directories at a given location</span>
<span class="token comment">#\u8BA1\u7B97\u7ED9\u5B9A\u4F4D\u7F6E\u7684\u6587\u4EF6\u548C\u76EE\u5F55</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>

<span class="token comment"># If you ever use \`wc\` in a shell script and need to compare the output with an int you can</span>
<span class="token comment">#\u5982\u679C\u4F60\u5728shell\u811A\u672C\u4E2D\u4F7F\u7528\`wc\`\u5E76\u4E14\u9700\u8981\u5C06\u8F93\u51FA\u4E0Eint\u8FDB\u884C\u6BD4\u8F83</span>
<span class="token comment"># clean the output (wc returns extra characters around the integer) by using xargs:</span>
<span class="token comment">#\u4F7F\u7528xargs\u6E05\u7406\u8F93\u51FA\uFF08wc\u8FD4\u56DE\u6574\u6570\u5468\u56F4\u7684\u989D\u5916\u5B57\u7B26\uFF09\uFF1A</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">xargs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[i];function l(o,r){return s(),a("div",null,c)}const d=n(t,[["render",l],["__file","wc.html.vue"]]);export{d as default};
