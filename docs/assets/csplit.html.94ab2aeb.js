import{_ as s,o as n,c as e,e as a}from"./app.a667bd71.js";const i={},t=a(`<p>-b, --suffix-format=\u683C\u5F0F \u4F7F\u7528sprintf \u683C\u5F0F\u4EE3\u66FF%02d -f, --prefix=\u524D\u7F00 \u4F7F\u7528\u6307\u5B9A\u524D\u7F00\u4EE3\u66FF&quot;xx&quot; -k, --keep-files \u4E0D\u79FB\u9664\u9519\u8BEF\u7684\u8F93\u51FA\u6587\u4EF6 -n, --digits=\u6570\u4F4D \u4F7F\u7528\u6307\u5B9A\u7684\u8FDB\u5236\u6570\u4F4D\u4EE3\u66FF\u4E8C\u8FDB\u5236 -s, --quiet, --silent \u4E0D\u663E\u793A\u8F93\u51FA\u6587\u4EF6\u7684\u5C3A\u5BF8\u8BA1\u6570 -z, --elide-empty-files \u5220\u9664\u7A7A\u7684\u8F93\u51FA\u6587\u4EF6 --help \u663E\u793A\u6B64\u5E2E\u52A9\u4FE1\u606F\u5E76\u9000\u51FA --version \u663E\u793A\u7248\u672C\u4FE1\u606F\u5E76\u9000\u51FA</p><p>\u5982\u679C\u6587\u4EF6\u4E3A&quot;-&quot;\uFF0C\u5219\u8BFB\u53D6\u6807\u51C6\u8F93\u5165\u3002\u6BCF\u4E2A&quot;\u683C\u5F0F&quot;\u53EF\u4EE5\u662F\uFF1A \u6574\u6570 \u4E0D\u5305\u62EC\u6307\u5B9A\u7684\u884C\uFF0C\u5E76\u4EE5\u5176\u4E3A\u6587\u4EF6\u5206\u5757\u8FB9\u754C /\u8868\u8FBE\u5F0F/[\u504F\u79FB\u91CF] \u4E0D\u5305\u62EC\u5339\u914D\u5230\u7684\u884C\uFF0C\u5E76\u4EE5\u5176\u4E3A\u6587\u4EF6\u5206\u5757\u8FB9\u754C %\u8868\u8FBE\u5F0F%[\u504F\u79FB\u91CF] \u9884\u5148\u8DF3\u8FC7\u5339\u914D\u7684\u884C\u6570\uFF0C\u4EE5\u5176\u4E3A\u6587\u4EF6\u5206\u5757\u8FB9\u754C {\u6574\u6570} \u5C06\u4E4B\u524D\u6307\u5B9A\u7684\u6A21\u5F0F\u91CD\u590D\u6307\u5B9A\u7684\u6B21\u6570 {*} \u5C06\u4E4B\u524D\u6307\u5B9A\u7684\u6A21\u5F0F\u91CD\u590D\u5C3D\u53EF\u80FD\u591A\u7684\u6B21\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Split a file based on pattern</span>
<span class="token comment">#\u6839\u636E\u6A21\u5F0F\u62C6\u5206\u6587\u4EF6</span>
<span class="token function">csplit</span> input.file <span class="token string">&#39;/PATTERN/&#39;</span>

<span class="token comment"># Use prefix/suffix to improve resulting file names</span>
<span class="token comment">#\u4F7F\u7528\u524D\u7F00/\u540E\u7F00\u6765\u6539\u8FDB\u751F\u6210\u7684\u6587\u4EF6\u540D</span>
<span class="token function">csplit</span> <span class="token parameter variable">-f</span> <span class="token string">&#39;prefix-&#39;</span> <span class="token parameter variable">-b</span> <span class="token string">&#39;%d.extension&#39;</span> input.file <span class="token string">&#39;/PATTERN/&#39;</span> <span class="token string">&#39;{*}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[t];function p(c,o){return n(),e("div",null,l)}const d=s(i,[["render",p],["__file","csplit.html.vue"]]);export{d as default};