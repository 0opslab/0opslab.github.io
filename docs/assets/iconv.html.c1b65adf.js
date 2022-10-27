import{_ as n,o as a,c as e,e as s}from"./app.a667bd71.js";const i={},l=s(`<p>Linux\u4E0B\u7684iconv\u5F00\u53D1\u5E93\u5305\u62ECiconv_open,iconv_close,iconv\u7B49C\u51FD\u6570\uFF0C\u53EF\u4EE5\u7528\u6765\u5728C/C++\u7A0B\u5E8F\u4E2D\u5F88\u65B9\u4FBF\u7684\u8F6C\u6362\u5B57\u7B26\u7F16\u7801\uFF0C \u8FD9\u5728\u6293\u53D6\u7F51\u9875\u7684\u7A0B\u5E8F\u4E2D\u5F88\u6709\u7528\u5904\uFF0C\u800Ciconv\u547D\u4EE4\u5728\u8C03\u8BD5\u6B64\u7C7B\u7A0B\u5E8F\u65F6\u7528\u5F97\u7740\u3002</p><h3 id="\u5E38\u7528\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u9009\u9879" aria-hidden="true">#</a> \u5E38\u7528\u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-f</span> encoding :\u628A\u5B57\u7B26\u4ECEencoding\u7F16\u7801\u5F00\u59CB\u8F6C\u6362\u3002 
<span class="token parameter variable">-t</span> encoding :\u628A\u5B57\u7B26\u8F6C\u6362\u5230encoding\u7F16\u7801\u3002 
<span class="token parameter variable">-l</span> :\u5217\u51FA\u5DF2\u77E5\u7684\u7F16\u7801\u5B57\u7B26\u96C6\u5408 
<span class="token parameter variable">-o</span> <span class="token function">file</span> :\u6307\u5B9A\u8F93\u51FA\u6587\u4EF6 
<span class="token parameter variable">-c</span> :\u5FFD\u7565\u8F93\u51FA\u7684\u975E\u6CD5\u5B57\u7B26 
<span class="token parameter variable">-s</span> :\u7981\u6B62\u8B66\u544A\u4FE1\u606F\uFF0C\u4F46\u4E0D\u662F\u9519\u8BEF\u4FE1\u606F 
<span class="token parameter variable">--verbose</span> :\u663E\u793A\u8FDB\u5EA6\u4FE1\u606F 
-f\u548C-t\u6240\u80FD\u6307\u5B9A\u7684\u5408\u6CD5\u5B57\u7B26\u5728-l\u9009\u9879\u7684\u547D\u4EE4\u91CC\u9762\u90FD\u5217\u51FA\u6765\u4E86\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u5F53\u524D\u652F\u6301\u7684\u5B57\u7B26\u7F16\u7801</span>
<span class="token function">iconv</span> <span class="token parameter variable">-l</span>

<span class="token comment"># \u5C06\u6587\u4EF6file1\u8F6C\u7801\uFF0C\u8F6C\u540E\u6587\u4EF6\u8F93\u51FA\u5230fil2\u4E2D</span>
<span class="token function">iconv</span> file1 <span class="token parameter variable">-f</span> EUC-JP-MS <span class="token parameter variable">-t</span> UTF-8 <span class="token parameter variable">-o</span> file2


<span class="token comment"># To convert file (iconv.src) from iso-8859-1 to utf-8 and save to</span>
<span class="token comment">#\u5C06\u6587\u4EF6\uFF08iconv.src\uFF09\u4ECEiso-8859-1\u8F6C\u6362\u4E3Autf-8\u5E76\u4FDD\u5B58\u5230</span>
<span class="token comment"># /tmp/iconv.out</span>
<span class="token comment">#/tmp/icon V.\u5455\u5410</span>
<span class="token function">iconv</span> <span class="token parameter variable">-f</span> iso-8859-1 <span class="token parameter variable">-t</span> utf-8 iconv.src <span class="token parameter variable">-o</span> /tmp/iconv.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[l];function r(o,t){return a(),e("div",null,c)}const d=n(i,[["render",r],["__file","iconv.html.vue"]]);export{d as default};
