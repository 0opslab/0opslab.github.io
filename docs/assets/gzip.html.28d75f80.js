import{_ as s,o as n,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<p>gzip\u662F\u4E2A\u4F7F\u7528\u5E7F\u6CDB\u7684\u538B\u7F29\u7A0B\u5E8F\uFF0C\u6587\u4EF6\u7ECF\u5B83\u538B\u7F29\u8FC7\u540E\uFF0C\u5176\u540D\u79F0\u540E\u9762\u4F1A\u591A\u51FA\u201D.gz\u201D\u7684\u6269\u5C55\u540D\u3002</p><h3 id="\u5E38\u7528\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u53C2\u6570" aria-hidden="true">#</a> \u5E38\u7528\u53C2\u6570</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-a\u6216\u2013ascii \u3000\u4F7F\u7528ASCII\u6587\u5B57\u6A21\u5F0F\u3002
-c\u6216\u2013stdout\u6216\u2013to-stdout \u3000\u628A\u538B\u7F29\u540E\u7684\u6587\u4EF6\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u8BBE\u5907\uFF0C\u4E0D\u53BB\u66F4\u52A8\u539F\u59CB\u6587\u4EF6\u3002
-d\u6216\u2013decompress\u6216\u2014-uncompress \u3000\u89E3\u5F00\u538B\u7F29\u6587\u4EF6\u3002
-f\u6216\u2013force \u3000\u5F3A\u884C\u538B\u7F29\u6587\u4EF6\u3002\u4E0D\u7406\u4F1A\u6587\u4EF6\u540D\u79F0\u6216\u786C\u8FDE\u63A5\u662F\u5426\u5B58\u5728\u4EE5\u53CA\u8BE5\u6587\u4EF6\u662F\u5426\u4E3A\u7B26\u53F7\u8FDE\u63A5\u3002
-h\u6216\u2013help \u3000\u5728\u7EBF\u5E2E\u52A9\u3002
-l\u6216\u2013list \u3000\u5217\u51FA\u538B\u7F29\u6587\u4EF6\u7684\u76F8\u5173\u4FE1\u606F\u3002
-L\u6216\u2013license \u3000\u663E\u793A\u7248\u672C\u4E0E\u7248\u6743\u4FE1\u606F\u3002
-n\u6216\u2013no-name \u3000\u538B\u7F29\u6587\u4EF6\u65F6\uFF0C\u4E0D\u4FDD\u5B58\u539F\u6765\u7684\u6587\u4EF6\u540D\u79F0\u53CA\u65F6\u95F4\u6233\u8BB0\u3002
-N\u6216\u2013name \u3000\u538B\u7F29\u6587\u4EF6\u65F6\uFF0C\u4FDD\u5B58\u539F\u6765\u7684\u6587\u4EF6\u540D\u79F0\u53CA\u65F6\u95F4\u6233\u8BB0\u3002
-q\u6216\u2013quiet \u3000\u4E0D\u663E\u793A\u8B66\u544A\u4FE1\u606F\u3002
-r\u6216\u2013recursive \u3000\u9012\u5F52\u5904\u7406\uFF0C\u5C06\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u53CA\u5B50\u76EE\u5F55\u4E00\u5E76\u5904\u7406\u3002
-S<span class="token operator">&lt;</span>\u538B\u7F29\u5B57\u5C3E\u5B57\u7B26\u4E32<span class="token operator">&gt;</span>\u6216\u2014-suffix<span class="token operator">&lt;</span>\u538B\u7F29\u5B57\u5C3E\u5B57\u7B26\u4E32<span class="token operator">&gt;</span> \u3000\u66F4\u6539\u538B\u7F29\u5B57\u5C3E\u5B57\u7B26\u4E32\u3002
-t\u6216\u2013test \u3000\u6D4B\u8BD5\u538B\u7F29\u6587\u4EF6\u662F\u5426\u6B63\u786E\u65E0\u8BEF\u3002
-v\u6216\u2013verbose \u3000\u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\u3002
-V\u6216\u2013version \u3000\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002
-<span class="token operator">&lt;</span>\u538B\u7F29\u6548\u7387<span class="token operator">&gt;</span> \u3000\u538B\u7F29\u6548\u7387\u662F\u4E00\u4E2A\u4ECB\u4E8E1\uFF0D9\u7684\u6570\u503C\uFF0C\u9884\u8BBE\u503C\u4E3A\u201D6\u2033\uFF0C\u6307\u5B9A\u6108\u5927\u7684\u6570\u503C\uFF0C\u538B\u7F29\u6548\u7387\u5C31\u4F1A\u6108\u9AD8\u3002
\u2013best \u3000\u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201D-9\u2033\u53C2\u6570\u76F8\u540C\u3002
\u2013fast \u3000\u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201D-1\u2033\u53C2\u6570\u76F8\u540C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To create a *.gz compressed file</span>
<span class="token comment">#\u521B\u5EFA* .gz\u538B\u7F29\u6587\u4EF6</span>
<span class="token function">gzip</span> test.txt

<span class="token comment"># To create a *.gz compressed file to a specific location using -c option (standard out)</span>
<span class="token comment">#\u4F7F\u7528-c\u9009\u9879\uFF08\u6807\u51C6\u8F93\u51FA\uFF09\u5C06* .gz\u538B\u7F29\u6587\u4EF6\u521B\u5EFA\u5230\u7279\u5B9A\u4F4D\u7F6E</span>
<span class="token function">gzip</span> <span class="token parameter variable">-c</span> test.txt <span class="token operator">&gt;</span> test_custom.txt.gz

<span class="token comment"># To uncompress a *.gz file</span>
<span class="token comment">#\u89E3\u538B\u7F29* .gz\u6587\u4EF6</span>
<span class="token function">gzip</span> <span class="token parameter variable">-d</span> test.txt.gz

<span class="token comment"># Display compression ratio of the compressed file using gzip -l</span>
<span class="token comment">#\u4F7F\u7528gzip -l\u663E\u793A\u538B\u7F29\u6587\u4EF6\u7684\u538B\u7F29\u6BD4</span>
<span class="token function">gzip</span> <span class="token parameter variable">-l</span> *.gz

<span class="token comment"># Recursively compress all the files under a specified directory</span>
<span class="token comment">#\u9012\u5F52\u538B\u7F29\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6</span>
<span class="token function">gzip</span> <span class="token parameter variable">-r</span> documents_directory

<span class="token comment"># To create a *.gz compressed file and keep the original</span>
<span class="token comment">#\u8981\u521B\u5EFA* .gz\u538B\u7F29\u6587\u4EF6\u5E76\u4FDD\u7559\u539F\u59CB\u6587\u4EF6</span>
<span class="token function">gzip</span> <span class="token operator">&lt;</span> test.txt <span class="token operator">&gt;</span> test.txt.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[l];function c(d,r){return n(),e("div",null,t)}const p=s(i,[["render",c],["__file","gzip.html.vue"]]);export{p as default};
