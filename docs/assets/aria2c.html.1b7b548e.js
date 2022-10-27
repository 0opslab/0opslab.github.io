import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Just download a file</span>
<span class="token comment">#\u53EA\u9700\u4E0B\u8F7D\u4E00\u4E2A\u6587\u4EF6</span>
<span class="token comment"># The url can be a http(s), ftp, .torrent file or even a magnet link</span>
<span class="token comment">#\u7F51\u5740\u53EF\u4EE5\u662Fhttp\uFF08s\uFF09\uFF0Cftp\uFF0C.torrent\u6587\u4EF6\u751A\u81F3\u662F\u78C1\u94C1\u94FE\u63A5</span>
aria2c <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>

<span class="token comment"># To prevent downloading the .torrent file</span>
<span class="token comment">#\u9632\u6B62\u4E0B\u8F7D.torrent\u6587\u4EF6</span>
aria2c --follow-torrent<span class="token operator">=</span>mem <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>

<span class="token comment"># Download 1 file at a time (-j) </span>
<span class="token comment">#\u4E00\u6B21\u4E0B\u8F7D1\u4E2A\u6587\u4EF6\uFF08-j\uFF09</span>
<span class="token comment"># continuing (-c) any partially downloaded ones</span>
<span class="token comment">#\u7EE7\u7EED\uFF08-c\uFF09\u4EFB\u4F55\u90E8\u5206\u4E0B\u8F7D\u7684</span>
<span class="token comment"># to the directory specified (-d)</span>
<span class="token comment">#\u5230\u6307\u5B9A\u7684\u76EE\u5F55\uFF08-d\uFF09</span>
<span class="token comment"># reading urls from the file (-i)</span>
<span class="token comment">#\u4ECE\u6587\u4EF6\u4E2D\u8BFB\u53D6\u7F51\u5740\uFF08-i\uFF09</span>
aria2c <span class="token parameter variable">-j</span> <span class="token number">1</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-d</span> ~/Downloads <span class="token parameter variable">-i</span> /path/to/file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[t];function o(c,r){return s(),a("div",null,i)}const d=n(l,[["render",o],["__file","aria2c.html.vue"]]);export{d as default};
