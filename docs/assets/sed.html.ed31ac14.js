import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const p={},t=e(`<p>Sed\uFF1AStream Editor \u6D41\u5F0F\u7F16\u8F91\u5668 \u53C8\u79F0\u884C\u7F16\u8F91\u5668\uFF0C\u6BCF\u6B21\u53EA\u7F16\u8F91\u4E00\u884C\u3002Sed\u5DE5\u4F5C\u662F\u5728\u201C\u6A21\u5F0F\u7A7A\u95F4\u201D\u4E2D\u8FDB\u884C\u7684\uFF0C \u5E76\u4E0D\u64CD\u4F5C\u6E90\u6587\u4EF6\u3002\u5BF9\u6E90\u6587\u4EF6\u65E0\u5371\u5BB3\u3002 \u5148\u8BFB\u53D6\u8D44\u6599\u3001\u5B58\u5165\u6A21\u5F0F\u7A7A\u95F4\u3001\u5BF9\u5176\u8FDB\u884C\u7F16\u8F91\u3001\u518D\u8F93\u51FA\u3001\u518D\u7528\u4E0B\u4E00\u884C\u66FF\u6362\u6A21\u5F0F\u7A7A\u95F4\u5185\u5BB9 \u8C03\u8BD5\u5DE5\u5177sedsed (\u53C2\u6570 -d) http://aurelio.net/sedsed/sedsed-1.0</p><h2 id="\u5E38\u7528\u9009\u9879\u53CA\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u9009\u9879\u53CA\u8BF4\u660E" aria-hidden="true">#</a> \u5E38\u7528\u9009\u9879\u53CA\u8BF4\u660E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Sed <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token string">&#39;script&#39;</span> input_file\u2026
Sed <span class="token punctuation">[</span>options<span class="token punctuation">]</span> \u2013f script_file input_file\u2026
Sed <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token string">&#39;ADDR1,ADDR2command&#39;</span> input_file\u2026
Sed <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token string">&#39;/PATTERN/command&#39;</span> input_file\u2026\u2026
Sed <span class="token string">&#39;/PATTERN1/,/PATTERN2/command&#39;</span> input_file\u2026\u2026

-n\uFF1A\u53EA\u663E\u793Ased\u5339\u914D\u5230\u7684\u884C\u3002\u5176\u4F59\u884C\u4E0D\u663E\u793A\u3002
<span class="token parameter variable">-i</span> \uFF1A\u53EF\u4EE5\u76F4\u63A5\u64CD\u4F5C\u539F\u6587\u4EF6\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0Bsed\u4E0D\u4F1A\u6539\u53D8\u539F\u6587\u4EF6\uFF0C\u4F46\u662F-i\u9009\u9879\u53EF\u4EE5\u4FEE\u6539\u539F\u6587\u4EF6\uFF0C\u6B64\u9009\u9879\u5E94\u614E\u7528\u3002
-r\uFF1A\u53EF\u4EE5\u4F7F\u7528\u6807\u51C6\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0Bsed\u53EA\u652F\u6301\u57FA\u672C\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u4F46\u662F\u52A0\u4E0A-r\u9009\u9879\u540E\u5219\u652F\u6301\u6269\u5C55\u6B63\u5219\u8868\u8FBE\u5F0F
-e\uFF1A\u591A\u811A\u672C\u5171\u7528\u3002
<span class="token parameter variable">-n</span> 	 <span class="token comment"># \u8F93\u51FA\u7531\u7F16\u8F91\u6307\u4EE4\u63A7\u5236(\u53D6\u6D88\u9ED8\u8BA4\u7684\u8F93\u51FA,\u5FC5\u987B\u4E0E\u7F16\u8F91\u6307\u4EE4\u4E00\u8D77\u914D\u5408)</span>
b    <span class="token comment"># \u8DF3\u8FC7\u5339\u914D\u7684\u884C</span>
p    <span class="token comment"># \u6253\u5370</span>
d    <span class="token comment"># \u5220\u9664</span>
s    <span class="token comment"># \u66FF\u6362</span>
g    <span class="token comment"># \u914D\u5408s\u5168\u90E8\u66FF\u6362</span>
i    <span class="token comment"># \u884C\u524D\u63D2\u5165</span>
a    <span class="token comment"># \u884C\u540E\u63D2\u5165</span>
r    <span class="token comment"># \u8BFB</span>
y    <span class="token comment"># \u8F6C\u6362</span>
q    <span class="token comment"># \u9000\u51FA</span>

<span class="token operator">&amp;</span>    <span class="token comment"># \u4EE3\u8868\u67E5\u627E\u7684\u4E32\u5185\u5BB9</span>
*    <span class="token comment"># \u4EFB\u610F\u591A\u4E2A \u524D\u9A71\u5B57\u7B26(\u524D\u5BFC\u7B26)</span>
?    <span class="token comment"># 0\u62161\u4E2A \u6700\u5C0F\u5339\u914D \u6CA1\u52A0-r\u53C2\u6570\u9700\u8F6C\u4E49 \\?</span>
$    <span class="token comment"># \u6700\u540E\u4E00\u884C</span>
.*   <span class="token comment"># \u5339\u914D\u4EFB\u610F\u591A\u4E2A\u5B57\u7B26</span>
<span class="token punctuation">\\</span><span class="token punctuation">(</span>a<span class="token punctuation">\\</span><span class="token punctuation">)</span>   <span class="token comment"># \u4FDD\u5B58a\u4F5C\u4E3A\u6807\u7B7E1(\\1)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6A21\u5F0F\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5F0F\u7A7A\u95F4" aria-hidden="true">#</a> \u6A21\u5F0F\u7A7A\u95F4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6A21\u5F0F\u7A7A\u95F4(\u4E24\u884C\u4E24\u884C\u5904\u7406) \u6A21\u5F0F\u5339\u914D\u7684\u8303\u56F4\uFF0C\u4E00\u822C\u800C\u8A00\uFF0C\u6A21\u5F0F\u7A7A\u95F4\u662F\u8F93\u5165\u6587\u672C\u4E2D\u67D0\u4E00\u884C\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528N\u51FD\u6570\u628A\u591A\u4E8E\u4E00\u884C\u8BFB\u5165\u6A21\u5F0F\u7A7A\u95F4</span>
<span class="token comment"># \u6682\u5B58\u7A7A\u95F4\u91CC\u9ED8\u8BA4\u5B58\u50A8\u4E00\u4E2A\u7A7A\u884C</span>
n   <span class="token comment"># \u8BFB\u5165\u4E0B\u4E00\u884C(\u8986\u76D6\u4E0A\u4E00\u884C)</span>
h   <span class="token comment"># \u628A\u6A21\u5F0F\u7A7A\u95F4\u91CC\u7684\u884C\u62F7\u8D1D\u5230\u6682\u5B58\u7A7A\u95F4</span>
H   <span class="token comment"># \u628A\u6A21\u5F0F\u7A7A\u95F4\u91CC\u7684\u884C\u8FFD\u52A0\u5230\u6682\u5B58\u7A7A\u95F4</span>
g   <span class="token comment"># \u7528\u6682\u5B58\u7A7A\u95F4\u7684\u5185\u5BB9\u66FF\u6362\u6A21\u5F0F\u7A7A\u95F4\u7684\u884C</span>
G   <span class="token comment"># \u628A\u6682\u5B58\u7A7A\u95F4\u7684\u5185\u5BB9\u8FFD\u52A0\u5230\u6A21\u5F0F\u7A7A\u95F4\u7684\u884C\u540E</span>
x   <span class="token comment"># \u5C06\u6682\u5B58\u7A7A\u95F4\u7684\u5185\u5BB9\u4E8E\u6A21\u5F0F\u7A7A\u95F4\u91CC\u7684\u5F53\u524D\u884C\u4E92\u6362</span>
\uFF01  <span class="token comment"># \u5BF9\u5176\u524D\u9762\u7684\u8981\u5339\u914D\u7684\u8303\u56F4\u53D6\u53CD</span>
D   <span class="token comment"># \u5220\u9664\u5F53\u524D\u6A21\u5F0F\u7A7A\u95F4\u4E2D\u76F4\u5230\u5E76\u5305\u542B\u7B2C\u4E00\u4E2A\u6362\u884C\u7B26\u7684\u6240\u6709\u5B57\u7B26(/.*/\u5339\u914D\u6A21\u5F0F\u7A7A\u95F4\u4E2D\u6240\u6709\u5185\u5BB9\uFF0C\u5339\u914D\u5230\u5C31\u6267\u884CD,\u6CA1\u5339\u914D\u5230\u5C31\u7ED3\u675FD)</span>
N   <span class="token comment"># \u8FFD\u52A0\u4E0B\u4E00\u4E2A\u8F93\u5165\u884C\u5230\u6A21\u5F0F\u7A7A\u95F4\u540E\u9762\u5E76\u5728\u7B2C\u4E8C\u8005\u95F4\u5D4C\u5165\u4E00\u4E2A\u6362\u884C\u7B26\uFF0C\u6539\u53D8\u5F53\u524D\u884C\u53F7\u7801,\u6A21\u5F0F\u5339\u914D\u53EF\u4EE5\u5EF6\u4F38\u8DE8\u57DF\u8FD9\u4E2A\u5185\u5D4C\u6362\u884C</span>
p   <span class="token comment"># \u6253\u5370\u6A21\u5F0F\u7A7A\u95F4\u4E2D\u7684\u76F4\u5230\u5E76\u5305\u542B\u7B2C\u4E00\u4E2A\u6362\u884C\u7684\u6240\u6709\u5B57\u7B26 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6807\u7B7E\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E\u51FD\u6570" aria-hidden="true">#</a> \u6807\u7B7E\u51FD\u6570</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">:</span> lable <span class="token comment"># \u5EFA\u7ACB\u547D\u4EE4\u6807\u8BB0\uFF0C\u914D\u5408b\uFF0Ct\u51FD\u6570\u4F7F\u7528\u8DF3\u8F6C</span>
b lable <span class="token comment"># \u5206\u652F\u5230\u811A\u672C\u4E2D\u5E26\u6709\u6807\u8BB0\u7684\u5730\u65B9\uFF0C\u5982\u679C\u5206\u652F\u4E0D\u5B58\u5728\u5219\u5206\u652F\u5230\u811A\u672C\u7684\u672B\u5C3E\u3002</span>
t labe  <span class="token comment"># \u5224\u65AD\u5206\u652F\uFF0C\u4ECE\u6700\u540E\u4E00\u884C\u5F00\u59CB\uFF0C\u6761\u4EF6\u4E00\u65E6\u6EE1\u8DB3\u6216\u8005T,t\u547D\u4EE4\uFF0C\u5C06\u5BFC\u81F4\u5206\u652F\u5230\u5E26\u6709\u6807\u53F7\u7684\u547D\u4EE4\u51FA\uFF0C\u6216\u8005\u5230\u811A\u672C\u672B\u5C3E\u3002\u4E0Eb\u51FD\u6570\u4E0D\u540C\u5728\u4E8Et\u5728\u6267\u884C\u8DF3\u8F6C\u524D\u4F1A\u5148\u68C0\u67E5\u5176\u524D\u4E00\u4E2A\u66FF\u6362\u547D\u4EE4\u662F\u5426\u6210\u529F\uFF0C\u5982\u6210\u529F\uFF0C\u5219\u6267\u884C\u8DF3\u8F6C\u3002</span>

<span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;{:p1;/A/s/A/AA/;/B/s/B/BB/;/[AB]\\{10\\}/b;b p1;}&#39;</span>     <span class="token comment"># \u6587\u4EF6\u5185\u5BB9\u7B2C\u4E00\u884CA\u7B2C\u4E8C\u884CB:\u5EFA\u7ACB\u6807\u7B7Ep1;\u4E24\u4E2A\u66FF\u6362\u51FD\u6570(A\u66FF\u6362\u6210AA,B\u66FF\u6362\u6210BB)\u5F53A\u6216\u8005B\u8FBE\u523010\u4E2A\u4EE5\u540E\u8C03\u7528b,\u8FD4\u56DE</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;sd  f   f   [a    b      c    cddd    eee]&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;:n;s#\\(\\[[^ ]*\\)  *#\\1#;tn&#39;</span>  <span class="token comment">#\u6807\u7B7E\u51FD\u6570t\u4F7F\u7528\u65B9\u6CD5,\u66FF\u6362[]\u91CC\u7684\u7A7A\u683C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To replace all occurrences of &quot;day&quot; with &quot;night&quot; and write to stdout:</span>
<span class="token comment">#\u7528\u201Cnight\u201D\u66FF\u6362\u6240\u6709\u51FA\u73B0\u7684\u201Cday\u201D\u5E76\u5199\u5165stdout\uFF1A</span>
<span class="token function">sed</span> <span class="token string">&#39;s/day/night/g&#39;</span> file.txt

<span class="token comment"># To replace all occurrences of &quot;day&quot; with &quot;night&quot; within file.txt:</span>
<span class="token comment">#\u8981\u5728file.txt\u4E2D\u7528\u201Cnight\u201D\u66FF\u6362\u6240\u6709\u51FA\u73B0\u7684\u201Cday\u201D\uFF1A</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/day/night/g&#39;</span> file.txt

<span class="token comment"># To replace all occurrences of &quot;day&quot; with &quot;night&quot; on stdin:</span>
<span class="token comment">#\u8981\u5728stdin\u4E0A\u7528\u201Cnight\u201D\u66FF\u6362\u6240\u6709\u51FA\u73B0\u7684\u201Cday\u201D\uFF1A</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;It is daytime&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/day/night/g&#39;</span>

<span class="token comment"># To remove leading spaces</span>
<span class="token comment">#\u5220\u9664\u524D\u5BFC\u7A7A\u683C</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-r</span> <span class="token string">&#39;s/^\\s+//g&#39;</span> file.txt

<span class="token comment"># To remove empty lines and print results to stdout:</span>
<span class="token comment">#\u5220\u9664\u7A7A\u884C\u5E76\u5C06\u7ED3\u679C\u6253\u5370\u5230stdout\uFF1A</span>
<span class="token function">sed</span> <span class="token string">&#39;/^$/d&#39;</span> file.txt

<span class="token comment"># To replace newlines in multiple lines</span>
<span class="token comment">#\u8981\u66FF\u6362\u591A\u884C\u4E2D\u7684\u6362\u884C\u7B26</span>
<span class="token function">sed</span> <span class="token string">&#39;:a;N;$!ba;s/\\n//g&#39;</span>  file.txt

<span class="token comment"># Insert a line before a matching pattern:</span>
<span class="token comment">#\u5728\u5339\u914D\u7684\u6A21\u5F0F\u4E4B\u524D\u63D2\u5165\u4E00\u884C\uFF1A</span>
<span class="token function">sed</span> <span class="token string">&#39;/Once upon a time/i\\Chapter 1&#39;</span>

<span class="token comment"># Add a line after a matching pattern:</span>
<span class="token comment">#\u5728\u5339\u914D\u6A21\u5F0F\u540E\u6DFB\u52A0\u4E00\u884C\uFF1A</span>
<span class="token function">sed</span> <span class="token string">&#39;/happily ever after/a\\The end.&#39;</span>


<span class="token comment">#^\u5339\u914D\u4E0E\u4E0D\u5339\u914D: n p ! </span>
<span class="token comment">##-n\u6253\u5370\u5339\u914D\u5230\u7684\u884C\u8F93\u51FA\uFF0C\u9ED8\u8BA4\u6240\u6709\u884C\u8F93\u51FA\u3002</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/ATTGC/p&#39;</span> file1          \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000      
<span class="token comment">##\u591A\u4E2A\u6761\u4EF6\u5339\u914D\uFF08\u6216\uFF09\uFF0C\u4E0Egrep \u547D\u4EE4\u7C7B\u4F3Cgrep &#39;AT\\|GC&#39; file1</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/AT\\|GC/p&#39;</span> file1\u3000\u3000<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/\\(AT\\|GC\\)/p&#39;</span> file1       
 <span class="token comment">##\u6CA1\u6709\u5339\u914D\u4E0A\u7684\u6253\u5370\u51FA\u6765</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/ATTGC/!p&#39;</span> file1        \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000     

<span class="token comment">#^\u5220\u9664\u884C: d</span>
<span class="token comment">##\u5220\u96643\u5230\u6700\u540E\u4E00\u884C\uFF0C\u5176\u4F59\u884C\u6253\u5370\u51FA\u6765</span>
<span class="token function">sed</span> <span class="token string">&#39;3,$d&#39;</span> file1\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000
\u3000<span class="token comment">##\u5339\u914D\u7684\u884C\u5220\u9664</span>
<span class="token function">sed</span> <span class="token string">&#39;/ATGC/d&#39;</span> file1\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000

<span class="token comment">#^\u66FF\u6362: [] {} ()</span>
<span class="token comment">##\u66FF\u6362\u540E\u7684\u884C\u548C\u6CA1\u6709\u66FF\u6362\u7684\u884C\u4E00\u8D77\u6253\u5370\u51FA\u6765</span>
<span class="token function">sed</span> <span class="token string">&#39;s/ATGC/atgc/&#39;</span> file1\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000
<span class="token comment">##\u66FF\u6362\u540E\u7684\u884C\u6253\u5370\u51FA\u6765</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;s/ATGC/atgc/p&#39;</span> file1\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000
<span class="token comment">##\u66FF\u6362\u591A\u4E2A\u7A7A\u683C\u548Ctab\u4E3A\u5355\u4E2Atab</span>
<span class="token function">sed</span> <span class="token string">&#39;s/[ \\t]\\{1,\\}/\\t/&#39;</span> file1\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000    
<span class="token comment">##\u5728\u6570\u5B57\u5F00\u5934\u7684\u884C\u524D\u9762\u52A0000(&amp;)</span>
<span class="token function">sed</span> <span class="token string">&#39;s/^[0-9]/000&amp;/&#39;</span> file1\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000
<span class="token comment">##\u6355\u83B7\uFF0C\u8FFD\u52A0(\\1)</span>
<span class="token function">sed</span> <span class="token string">&#39;s/AA\\(abc\\)BB/\\1CC/&#39;</span> file1\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000

<span class="token comment">#^ \u6DFB\u52A0\u884C: a i</span>
<span class="token comment">##\u5F00\u5934\u5339\u914D\u5230AAA\u7684\u884C\u540E\u589E\u52A0\u4E00\u7A7A\u884C</span>
<span class="token function">sed</span> <span class="token string">&#39;/^AAA/a \\\\&#39;</span> file1\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000
<span class="token comment">##\u5F00\u5934\u5339\u914D\u5230AAA\u7684\u884C\u524D\u589E\u52A0\u4E00\u7A7A\u884C</span>
<span class="token function">sed</span> <span class="token string">&#39;/^AAA/i \\\\&#39;</span> file1\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 

<span class="token comment">#^\u83B7\u53D6\u4E0B\u4E00\u884C: n</span>
<span class="token comment">##\u83B7\u5F97fa\u6587\u4EF6\u7684\u4E92\u8865\u5E8F\u5217\uFF0C\u6216\u8005sed &#39;/^&gt;/!{y/ATGC/TACG/;}&#39;  file.fa</span>
<span class="token function">sed</span> <span class="token string">&#39;/^&gt;/{n;y/ATGC/TACG/;}&#39;</span>  file.fa\u3000\u3000\u3000\u3000

<span class="token comment">#\u5C06\u67E5\u627E\u7ED3\u679C\u8FDB\u884C\u66FF\u6362\u5E76\u67E5\u770B\u66FF\u6362\u540E\u7684\u7ED3\u679C</span>
<span class="token function">find</span> ./ <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;test.txt&quot;</span><span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s#oldboy#oldgirl#g&#39;</span>
<span class="token function">find</span> ./ <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;test.txt&quot;</span><span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">cat</span>

<span class="token comment">#\u4E0A\u8FF0\u66FF\u6362\u8FC7\u7A0B\u7B49\u4EF7\u4E8E</span>
<span class="token function">find</span> ./ <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;test.txt&quot;</span> <span class="token parameter variable">-exec</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s#oldboy#oldgirl#g&#39;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
<span class="token comment">#\u540C\u65F6\u7B49\u4EF7\u4E8E</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s#oldboy#oldgirl#g&#39;</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">find</span> /home/zxl/ <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;test.txt&quot;</span><span class="token variable">\`</span></span>\u3000\u3000\u3000

<span class="token comment">#1.sed\u4E2D\u4F7F\u7528\u53D8\u91CF,\u793A\u4F8B:</span>
<span class="token assign-left variable">dhcp_ip</span><span class="token operator">=</span><span class="token number">192.168</span>.137
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@&#39;</span><span class="token number">192.168</span>.1<span class="token string">&#39;@&#39;</span><span class="token string">&quot;<span class="token variable">$dhcp_ip</span>&quot;</span>&#39;@g<span class="token string">&#39; dhcp.template

dhcp_ip=192.168.1
sed -i &#39;</span>s@<span class="token string">&#39;192.168.137&#39;</span>@<span class="token string">&#39;&quot;$dhcp_ip&quot;&#39;</span>@g<span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>22d<span class="token punctuation">;</span>23d<span class="token string">&#39; dhcp.template

##\u67E5\u6587\u4EF6\u4ECE32994\u523034871\u884C\u5185\u5BB9
sed -n &#39;</span><span class="token number">32994</span>,34871p<span class="token string">&#39;  config_file

##\u5220\u9664\u6587\u4EF6\u4ECE32994\u523034871\u884C\u5185\u5BB9
sed &#39;</span><span class="token number">32994,34871</span> d<span class="token string">&#39; config_file

##\u66FF\u6362\u6587\u4EF6\u4E2Dperformance_schema\u6539\u4E3Aperformance_schema_bak
sed -i &quot;s/performance_schema/performance_schema_bak/g&quot; config_file

##sed\u53BB\u9664\u6CE8\u91CA\u884C
sed -i -c -e &#39;</span>/^<span class="token comment">#/d&#39; config_file</span>

<span class="token comment">##sed\u53BB\u9664\u7A7A\u884C</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;/^$/d&#39;</span> config_file

<span class="token comment">##sed\u53BB\u7A7A\u884C\u548C\u6CE8\u91CA\u884C</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;/^$/d;/^#/&#39;</span> config_file

<span class="token comment">##\u5728\u67D0\u5B57\u7B26\u4E32\u4E0B\u9762\u4E00\u884C\u589E\u52A0\u4E00\u5B57\u7B26\u4E32</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/fastcgi_path_info/a\\fastcgi_param ENV_VAR_MY test;&#39;</span> test*.conf

<span class="token comment">#\u5047\u8BBE\u5904\u7406\u7684\u6587\u672C\u4E3Atest.file</span>
<span class="token comment">#\u5728\u6BCF\u884C\u7684\u5934\u6DFB\u52A0\u5B57\u7B26\uFF0C\u6BD4\u5982&quot;HEAD&quot;\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A</span>
<span class="token function">sed</span> <span class="token string">&#39;s/^/HEAD&amp;/g&#39;</span> test.file

<span class="token comment">#\u5728\u6BCF\u884C\u7684\u884C\u5C3E\u6DFB\u52A0\u5B57\u7B26\uFF0C\u6BD4\u5982\u201CTAIL\u201D\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A</span>
<span class="token function">sed</span> <span class="token string">&#39;s/$/&amp;TAIL/g&#39;</span> test.file

<span class="token comment">##\u66FF\u6362\u67D0\u4E9B\u540E\u7F00\u6587\u4EF6\u4E2D\u7684\u5B57\u7B26</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/text_to_replace/replacement/g&quot;</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span><span class="token variable">\`</span></span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/10.0.0.75/10.0.0.76/g&quot;</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.properties&quot;</span><span class="token variable">\`</span></span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/10.0.0.18/10.0.0.17/g&quot;</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.properties&quot;</span><span class="token variable">\`</span></span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/10.0.0.16/10.0.0.17/g&quot;</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.php&quot;</span><span class="token variable">\`</span></span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/d12/111222/g&quot;</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.properties&quot;</span><span class="token variable">\`</span></span>

<span class="token comment">#sed\u5220\u9664\u6587\u4EF6\u5012\u657010\u884C</span>
<span class="token comment">#\u628A\u6587\u4EF6\u5012\u5E8F</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;1!G;$!h;$!d&#39;</span> filename  
<span class="token comment">#\u5220\u966410\u884C</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;1,10d&#39;</span> filename     
<span class="token comment">#\u628A\u6587\u4EF6\u5012\u5E8F\u56DE\u6765  </span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;1!G;$!h;$!d&#39;</span> filename  
<span class="token function">sed</span> 10q                                       <span class="token comment"># \u663E\u793A\u6587\u4EF6\u4E2D\u7684\u524D10\u884C (\u6A21\u62DF&quot;head&quot;)</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;$=&#39;</span>                                   <span class="token comment"># \u8BA1\u7B97\u884C\u6570(\u6A21\u62DF &quot;wc -l&quot;)</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;5,/^no/p&#39;</span>                             <span class="token comment"># \u6253\u5370\u4ECE\u7B2C5\u884C\u5230\u4EE5no\u5F00\u5934\u884C\u4E4B\u95F4\u7684\u6240\u6709\u884C</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;/^<span class="token variable">$f</span>/d&quot;</span> a     \u3000\u3000                  \u3000<span class="token comment"># \u5220\u9664\u5339\u914D\u884C</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/aaa/,$d&#39;</span>                             <span class="token comment"># \u5220\u9664\u5339\u914D\u884C\u5230\u672B\u5C3E</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/=/:/&quot;</span> c                             <span class="token comment"># \u76F4\u63A5\u5BF9\u6587\u672C\u66FF\u6362</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;/^pearls/s/$/j/&quot;</span>                      <span class="token comment"># \u627E\u5230pearls\u5F00\u5934\u5728\u884C\u5C3E\u52A0j</span>
<span class="token function">sed</span> <span class="token string">&#39;/1/,/3/p&#39;</span> <span class="token function">file</span>                           <span class="token comment"># \u6253\u53701\u548C3\u4E4B\u95F4\u7684\u884C</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;1p&#39;</span> \u6587\u4EF6                              <span class="token comment"># \u53D6\u51FA\u6307\u5B9A\u884C</span>
<span class="token function">sed</span> <span class="token string">&#39;5i\\aaa&#39;</span> <span class="token function">file</span>                             <span class="token comment"># \u5728\u7B2C5\u884C\u4E4B\u524D\u63D2\u5165\u884C</span>
<span class="token function">sed</span> <span class="token string">&#39;5a\\aaa&#39;</span> <span class="token function">file</span>                             <span class="token comment"># \u5728\u7B2C5\u884C\u4E4B\u540E\u62BD\u5165\u884C</span>
<span class="token builtin class-name">echo</span> a<span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;/a/i\\b&#39;</span>                        <span class="token comment"># \u5728\u5339\u914D\u884C\u524D\u63D2\u5165\u4E00\u884C</span>
<span class="token builtin class-name">echo</span> a<span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;/a/a\\b&#39;</span>                        <span class="token comment"># \u5728\u5339\u914D\u884C\u540E\u63D2\u5165\u4E00\u884C</span>
<span class="token builtin class-name">echo</span> a<span class="token operator">|</span><span class="token function">sed</span> <span class="token string">&#39;s/a/&amp;\\nb/g&#39;</span>                       <span class="token comment"># \u5728\u5339\u914D\u884C\u540E\u63D2\u5165\u4E00\u884C</span>
<span class="token function">seq</span> <span class="token number">10</span><span class="token operator">|</span> <span class="token function">sed</span> -e<span class="token punctuation">{</span><span class="token number">1,3</span><span class="token punctuation">}</span><span class="token string">&#39;s/./a/&#39;</span>                   <span class="token comment"># \u5339\u914D1\u548C3\u884C\u66FF\u6362</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/regexp/!p&#39;</span>                           <span class="token comment"># \u53EA\u663E\u793A\u4E0D\u5339\u914D\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u884C</span>
<span class="token function">sed</span> <span class="token string">&#39;/regexp/d&#39;</span>                               <span class="token comment"># \u53EA\u663E\u793A\u4E0D\u5339\u914D\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u884C</span>
<span class="token function">sed</span> <span class="token string">&#39;$!N;s/\\n//&#39;</span>                              <span class="token comment"># \u5C06\u6BCF\u4E24\u884C\u8FDE\u63A5\u6210\u4E00\u884C</span>
<span class="token function">sed</span> <span class="token string">&#39;/baz/s/foo/bar/g&#39;</span>                        <span class="token comment"># \u53EA\u5728\u884C\u4E2D\u51FA\u73B0\u5B57\u4E32&quot;baz&quot;\u7684\u60C5\u51B5\u4E0B\u5C06&quot;foo&quot;\u66FF\u6362\u6210&quot;bar&quot; </span>
<span class="token function">sed</span> <span class="token string">&#39;/baz/!s/foo/bar/g&#39;</span>                       <span class="token comment"># \u5C06&quot;foo&quot;\u66FF\u6362\u6210&quot;bar&quot;\uFF0C\u5E76\u4E14\u53EA\u5728\u884C\u4E2D\u672A\u51FA\u73B0\u5B57\u4E32&quot;baz&quot;\u7684\u60C5\u51B5\u4E0B\u66FF\u6362</span>
<span class="token builtin class-name">echo</span> a<span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/a/#&amp;/g&#39;</span>                      <span class="token comment"># \u5728a\u524D\u9762\u52A0#\u53F7</span>
<span class="token function">sed</span> <span class="token string">&#39;s/foo/bar/4&#39;</span>                             <span class="token comment"># \u53EA\u66FF\u6362\u6BCF\u4E00\u884C\u4E2D\u7684\u7B2C\u56DB\u4E2A\u5B57\u4E32</span>
<span class="token function">sed</span> <span class="token string">&#39;s/\\(.*\\)foo/\\1bar/&#39;</span>                      <span class="token comment"># \u66FF\u6362\u6BCF\u884C\u6700\u540E\u4E00\u4E2A\u5B57\u7B26\u4E32</span>
<span class="token function">sed</span> <span class="token string">&#39;s/\\(.*\\)foo\\(.*foo\\)/\\1bar\\2/&#39;</span>           <span class="token comment"># \u66FF\u6362\u5012\u6570\u7B2C\u4E8C\u4E2A\u5B57\u7B26\u4E32</span>
<span class="token function">sed</span> <span class="token string">&#39;s/[0-9][0-9]$/&amp;5&#39;</span>                        <span class="token comment"># \u5728\u4EE5[0-9][0-9]\u7ED3\u5C3E\u7684\u884C\u540E\u52A05</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39; /^eth\\|em[01][^:]/{n;p;}&#39;</span>            <span class="token comment"># \u5339\u914D\u591A\u4E2A\u5173\u952E\u5B57</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-r</span> <span class="token string">&#39; /eth|em[01][^:]/{n;p;}&#39;</span>           <span class="token comment"># \u5339\u914D\u591A\u4E2A\u5173\u952E\u5B57</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;1<span class="token entity" title="\\n">\\n</span>2&quot;</span><span class="token operator">|</span><span class="token function">xargs</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> <span class="token function">sed</span> <span class="token string">&#39;s/^/1/&#39;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>    <span class="token comment"># \u540C\u65F6\u5904\u7406\u591A\u4E2A\u6587\u4EF6</span>
<span class="token function">sed</span> <span class="token string">&#39;/west/,/east/s/$/*VACA*/&#39;</span>                <span class="token comment"># \u4FEE\u6539west\u548Ceast\u4E4B\u95F4\u7684\u6240\u6709\u884C\uFF0C\u5728\u7ED3\u5C3E\u5904\u52A0*VACA*</span>
<span class="token function">sed</span>  <span class="token string">&#39;s/[^1-9]*\\([0-9]\\+\\).*/\\1/&#39;</span>             <span class="token comment"># \u53D6\u51FA\u7B2C\u4E00\u7EC4\u6570\u5B57\uFF0C\u5E76\u4E14\u5FFD\u7565\u6389\u5F00\u5934\u76840</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/regexp/{g;1!p;};h&#39;</span>                   <span class="token comment"># \u67E5\u627E\u5B57\u7B26\u4E32\u5E76\u5C06\u5339\u914D\u884C\u7684\u4E0A\u4E00\u884C\u663E\u793A\u51FA\u6765\uFF0C\u4F46\u5E76\u4E0D\u663E\u793A\u5339\u914D\u884C</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39; /regexp/{n;p;}&#39;</span>                      <span class="token comment"># \u67E5\u627E\u5B57\u7B26\u4E32\u5E76\u5C06\u5339\u914D\u884C\u7684\u4E0B\u4E00\u884C\u663E\u793A\u51FA\u6765\uFF0C\u4F46\u5E76\u4E0D\u663E\u793A\u5339\u914D\u884C</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;s/\\(mar\\)got/\\1ianne/p&#39;</span>               <span class="token comment"># \u4FDD\u5B58\\(mar\\)\u4F5C\u4E3A\u6807\u7B7E1</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;s/\\([0-9]\\+\\).*\\(t\\)/\\2\\1/p&#39;</span>          <span class="token comment"># \u4FDD\u5B58\u591A\u4E2A\u6807\u7B7E</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;1,3d&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/1/2/&#39;</span>                  <span class="token comment"># \u591A\u91CD\u7F16\u8F91(\u5148\u5220\u96641-3\u884C\uFF0C\u5728\u5C061\u66FF\u6362\u62102)</span>
<span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/@.*//g&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;/^$/d&#39;</span>                  <span class="token comment"># \u5220\u9664\u6389@\u540E\u9762\u6240\u6709\u5B57\u7B26\uFF0C\u548C\u7A7A\u884C</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;{s/\u6587\u672C(\u6B63\u5219)/\u66FF\u6362\u7684\u5185\u5BB9/p}&quot;</span>       <span class="token comment"># \u66FF\u6362\u5E76\u6253\u5370\u51FA\u66FF\u6362\u884C</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;{s/^ *[0-9]*//p}&quot;</span>                  <span class="token comment"># \u6253\u5370\u5E76\u5220\u9664\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u90A3\u90E8\u5206\u5185\u5BB9</span>
<span class="token builtin class-name">echo</span> abcd<span class="token operator">|</span><span class="token function">sed</span> <span class="token string">&#39;y/bd/BE/&#39;</span>                      <span class="token comment"># \u5339\u914D\u5B57\u7B26\u66FF\u6362</span>
<span class="token function">sed</span> <span class="token string">&#39;/^#/b;y/y/P/&#39;</span> <span class="token number">2</span>                          <span class="token comment"># \u975E#\u53F7\u5F00\u5934\u7684\u884C\u66FF\u6362\u5B57\u7B26</span>
<span class="token function">sed</span> <span class="token string">&#39;/suan/r \u8BFB\u5165\u6587\u4EF6&#39;</span>                        <span class="token comment"># \u627E\u5230\u542Bsuan\u7684\u884C\uFF0C\u5728\u540E\u9762\u52A0\u4E0A\u8BFB\u5165\u7684\u6587\u4EF6\u5185\u5BB9</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/no/w \u5199\u5165\u6587\u4EF6&#39;</span>                       <span class="token comment"># \u627E\u5230\u542Bno\u7684\u884C\uFF0C\u5199\u5165\u5230\u6307\u5B9A\u6587\u4EF6\u4E2D</span>
<span class="token function">sed</span> <span class="token string">&#39;/regex/G&#39;</span>                                <span class="token comment"># \u5728\u5339\u914D\u5F0F\u6837\u884C\u4E4B\u540E\u63D2\u5165\u4E00\u7A7A\u884C</span>
<span class="token function">sed</span> <span class="token string">&#39;/regex/{x;p;x;G;}&#39;</span>                       <span class="token comment"># \u5728\u5339\u914D\u5F0F\u6837\u884C\u4E4B\u524D\u548C\u4E4B\u540E\u5404\u63D2\u5165\u4E00\u7A7A\u884C</span>
<span class="token function">sed</span> <span class="token string">&#39;n;d&#39;</span>                                     <span class="token comment"># \u5220\u9664\u6240\u6709\u5076\u6570\u884C</span>
<span class="token function">sed</span> <span class="token string">&#39;G;G&#39;</span>                                     <span class="token comment"># \u5728\u6BCF\u4E00\u884C\u540E\u9762\u589E\u52A0\u4E24\u7A7A\u884C</span>
<span class="token function">sed</span> <span class="token string">&#39;/^$/d;G&#39;</span>                                 <span class="token comment"># \u5728\u8F93\u51FA\u7684\u6587\u672C\u4E2D\u6BCF\u4E00\u884C\u540E\u9762\u5C06\u6709\u4E14\u53EA\u6709\u4E00\u7A7A\u884C</span>
<span class="token function">sed</span> <span class="token string">&#39;n;n;n;n;G;&#39;</span>                              <span class="token comment"># \u5728\u6BCF5\u884C\u540E\u589E\u52A0\u4E00\u7A7A\u767D\u884C</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;5~5p&#39;</span>                                 <span class="token comment"># \u53EA\u6253\u5370\u884C\u53F7\u4E3A5\u7684\u500D\u6570</span>
<span class="token function">seq</span> <span class="token number">1</span> <span class="token number">30</span><span class="token operator">|</span><span class="token function">sed</span>  <span class="token string">&#39;5~5s/.*/a/&#39;</span>                    <span class="token comment"># \u500D\u6570\u884C\u6267\u884C\u66FF\u6362</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;3,\${p;n;n;n;n;n;n;}&#39;</span>                  <span class="token comment"># \u4ECE\u7B2C3\u884C\u5F00\u59CB\uFF0C\u6BCF7\u884C\u663E\u793A\u4E00\u6B21</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;h;n;G;p&#39;</span>                              <span class="token comment"># \u5947\u5076\u8C03\u6362</span>
<span class="token function">seq</span> <span class="token number">1</span> <span class="token number">10</span><span class="token operator">|</span><span class="token function">sed</span> <span class="token string">&#39;1!G;h;$!d&#39;</span>                      <span class="token comment"># \u5012\u53D9\u6392\u5217</span>
<span class="token function">ls</span> -l<span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/^.rwx.*/p&#39;</span>                     <span class="token comment"># \u67E5\u627E\u5C5E\u4E3B\u6743\u9650\u4E3A7\u7684\u6587\u4EF6</span>
<span class="token function">sed</span> <span class="token operator">=</span> filename <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;N;s/\\n/\\t/&#39;</span>             <span class="token comment"># \u4E3A\u6587\u4EF6\u4E2D\u7684\u6BCF\u4E00\u884C\u8FDB\u884C\u7F16\u53F7(\u7B80\u5355\u7684\u5DE6\u5BF9\u9F50\u65B9\u5F0F)</span>
<span class="token function">sed</span> <span class="token string">&#39;s/^[ \\t]*//&#39;</span>                             <span class="token comment"># \u5C06\u6BCF\u4E00\u884C\u524D\u5BFC\u7684&quot;\u7A7A\u767D\u5B57\u7B26&quot;(\u7A7A\u683C\uFF0C\u5236\u8868\u7B26)\u5220\u9664,\u4F7F\u4E4B\u5DE6\u5BF9\u9F50 </span>
<span class="token function">sed</span> <span class="token string">&#39;s/^[ \\t]*//;s/[ \\t]*$//&#39;</span>                 <span class="token comment"># \u5C06\u6BCF\u4E00\u884C\u4E2D\u7684\u524D\u5BFC\u548C\u62D6\u5C3E\u7684\u7A7A\u767D\u5B57\u7B26\u5220\u9664</span>
<span class="token builtin class-name">echo</span> abcd<span class="token punctuation">\\</span><span class="token punctuation">\\</span>nabcde <span class="token operator">|</span><span class="token function">sed</span> <span class="token string">&#39;s/\\\\n/@/g&#39;</span> <span class="token operator">|</span><span class="token function">tr</span> <span class="token string">&#39;@&#39;</span> <span class="token string">&#39;\\n&#39;</span>        <span class="token comment"># \u5C06\u6362\u884C\u7B26\u8F6C\u6362\u4E3A\u6362\u884C</span>
<span class="token function">cat</span> tmp<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token operator">|</span><span class="token function">sort</span> -n<span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;$p&#39;</span>           <span class="token comment"># \u53D6\u4E00\u5217\u6700\u5927\u503C</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;{s/^[^\\/]*//;s/\\:.*//;p}&#39;</span> /etc/passwd          <span class="token comment"># \u53D6\u7528\u6237\u5BB6\u76EE\u5F55(\u5339\u914D\u4E0D\u4E3A/\u7684\u5B57\u7B26\u548C\u5339\u914D:\u5230\u7ED3\u5C3E\u7684\u5B57\u7B26\u5168\u90E8\u5220\u9664)</span>
<span class="token function">sed</span> <span class="token operator">=</span> filename <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;N;s/^/      /; s/ *\\(.\\{6,\\}\\)\\n/\\1   /&#39;</span>   <span class="token comment"># \u5BF9\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u884C\u7F16\u53F7(\u884C\u53F7\u5728\u5DE6\uFF0C\u6587\u5B57\u53F3\u7AEF\u5BF9\u9F50)</span>
/sbin/ifconfig <span class="token operator">|</span><span class="token function">sed</span> <span class="token string">&#39;s/.*inet addr:\\(.*\\) Bca.*/\\1/g&#39;</span> <span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/eth/{n;p}&#39;</span>   <span class="token comment"># \u53D6\u6240\u6709IP</span>


<span class="token function">nl</span> <span class="token function">file</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token number">10</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;NR == 1 &#39;</span><span class="token punctuation">{</span>print <span class="token variable">$1</span><span class="token punctuation">}</span><span class="token string">&#39; 

awk &#39;</span>BEGIN<span class="token punctuation">{</span>CMD<span class="token operator">=</span><span class="token string">&quot;wc -l file&quot;</span><span class="token punctuation">;</span>CMD<span class="token operator">|</span>getline i<span class="token punctuation">}</span>NR<span class="token operator">&lt;=</span><span class="token punctuation">(</span>i-10<span class="token punctuation">)</span><span class="token string">&#39; file
sed -n &#39;</span>:a<span class="token punctuation">;</span><span class="token number">1,10</span><span class="token operator">!</span><span class="token punctuation">{</span>P<span class="token punctuation">;</span>N<span class="token punctuation">;</span>D<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>N<span class="token punctuation">;</span>ba<span class="token string">&#39; file



 # \u5728\u6BCF\u4E00\u884C\u540E\u9762\u589E\u52A0\u4E00\u7A7A\u884C
 sed G

 # \u5C06\u539F\u6765\u7684\u6240\u6709\u7A7A\u884C\u5220\u9664\u5E76\u5728\u6BCF\u4E00\u884C\u540E\u9762\u589E\u52A0\u4E00\u7A7A\u884C\u3002
 # \u8FD9\u6837\u5728\u8F93\u51FA\u7684\u6587\u672C\u4E2D\u6BCF\u4E00\u884C\u540E\u9762\u5C06\u6709\u4E14\u53EA\u6709\u4E00\u7A7A\u884C\u3002
 sed &#39;</span>/^$/d<span class="token punctuation">;</span>G<span class="token string">&#39;

 # \u5728\u6BCF\u4E00\u884C\u540E\u9762\u589E\u52A0\u4E24\u884C\u7A7A\u884C
 sed &#39;</span>G<span class="token punctuation">;</span>G<span class="token string">&#39;

 # \u5C06\u7B2C\u4E00\u4E2A\u811A\u672C\u6240\u4EA7\u751F\u7684\u6240\u6709\u7A7A\u884C\u5220\u9664\uFF08\u5373\u5220\u9664\u6240\u6709\u5076\u6570\u884C\uFF09
 sed &#39;</span>n<span class="token punctuation">;</span>d<span class="token string">&#39;

 # \u5728\u5339\u914D\u5F0F\u6837\u201Cregex\u201D\u7684\u884C\u4E4B\u524D\u63D2\u5165\u4E00\u7A7A\u884C
 sed &#39;</span>/regex/<span class="token punctuation">{</span>x<span class="token punctuation">;</span>p<span class="token punctuation">;</span>x<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token string">&#39;

 # \u5728\u5339\u914D\u5F0F\u6837\u201Cregex\u201D\u7684\u884C\u4E4B\u540E\u63D2\u5165\u4E00\u7A7A\u884C
 sed &#39;</span>/regex/G<span class="token string">&#39;

 # \u5728\u5339\u914D\u5F0F\u6837\u201Cregex\u201D\u7684\u884C\u4E4B\u524D\u548C\u4E4B\u540E\u5404\u63D2\u5165\u4E00\u7A7A\u884C
 sed &#39;</span>/regex/<span class="token punctuation">{</span>x<span class="token punctuation">;</span>p<span class="token punctuation">;</span>x<span class="token punctuation">;</span>G<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token string">&#39;

\u7F16\u53F7\uFF1A
--------

 # \u4E3A\u6587\u4EF6\u4E2D\u7684\u6BCF\u4E00\u884C\u8FDB\u884C\u7F16\u53F7\uFF08\u7B80\u5355\u7684\u5DE6\u5BF9\u9F50\u65B9\u5F0F\uFF09\u3002\u8FD9\u91CC\u4F7F\u7528\u4E86\u201C\u5236\u8868\u7B26\u201D
 # \uFF08tab\uFF0C\u89C1\u672C\u6587\u672B\u5C3E\u5173\u4E8E&#39;</span><span class="token punctuation">\\</span>t<span class="token string">&#39;\u7684\u7528\u6CD5\u7684\u63CF\u8FF0\uFF09\u800C\u4E0D\u662F\u7A7A\u683C\u6765\u5BF9\u9F50\u8FB9\u7F18\u3002
 sed = filename | sed &#39;</span>N<span class="token punctuation">;</span>s/<span class="token punctuation">\\</span>n/<span class="token punctuation">\\</span>t/<span class="token string">&#39;

 # \u5BF9\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u884C\u7F16\u53F7\uFF08\u884C\u53F7\u5728\u5DE6\uFF0C\u6587\u5B57\u53F3\u7AEF\u5BF9\u9F50\uFF09\u3002
 sed = filename | sed &#39;</span>N<span class="token punctuation">;</span> s/^/     /<span class="token punctuation">;</span> s/ *<span class="token punctuation">\\</span><span class="token punctuation">(</span>.<span class="token punctuation">\\</span><span class="token punctuation">{</span><span class="token number">6</span>,<span class="token punctuation">\\</span><span class="token punctuation">}</span><span class="token punctuation">\\</span><span class="token punctuation">)</span><span class="token punctuation">\\</span>n/<span class="token punctuation">\\</span><span class="token number">1</span>  /<span class="token string">&#39;

 # \u5BF9\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u884C\u7F16\u53F7\uFF0C\u4F46\u53EA\u663E\u793A\u975E\u7A7A\u767D\u884C\u7684\u884C\u53F7\u3002
 sed &#39;</span>/./<span class="token operator">=</span><span class="token string">&#39; filename | sed &#39;</span>/./N<span class="token punctuation">;</span> s/<span class="token punctuation">\\</span>n/ /<span class="token string">&#39;

 # \u8BA1\u7B97\u884C\u6570 \uFF08\u6A21\u62DF &quot;wc -l&quot;\uFF09
 sed -n &#39;</span>$<span class="token operator">=</span><span class="token string">&#39;

\u6587\u672C\u8F6C\u6362\u548C\u66FF\u4EE3\uFF1A
--------

 # Unix\u73AF\u5883\uFF1A\u8F6C\u6362DOS\u7684\u65B0\u884C\u7B26\uFF08CR/LF\uFF09\u4E3AUnix\u683C\u5F0F\u3002
 sed &#39;</span>s/.$//<span class="token string">&#39;                     # \u5047\u8BBE\u6240\u6709\u884C\u4EE5CR/LF\u7ED3\u675F
 sed &#39;</span>s/^M$//<span class="token string">&#39;                    # \u5728bash/tcsh\u4E2D\uFF0C\u5C06\u6309Ctrl-M\u6539\u4E3A\u6309Ctrl-V
 sed &#39;</span>s/<span class="token punctuation">\\</span>x0D$//<span class="token string">&#39;                  # ssed\u3001gsed 3.02.80\uFF0C\u53CA\u66F4\u9AD8\u7248\u672C

 # Unix\u73AF\u5883\uFF1A\u8F6C\u6362Unix\u7684\u65B0\u884C\u7B26\uFF08LF\uFF09\u4E3ADOS\u683C\u5F0F\u3002
 sed &quot;s/$/\`echo -e \\\\\\r\`/&quot;        # \u5728ksh\u4E0B\u6240\u4F7F\u7528\u7684\u547D\u4EE4
 sed &#39;</span>s/<span class="token string">$&#39;&quot;/\`echo <span class="token entity" title="\\\\">\\\\</span><span class="token entity" title="\\r">\\r</span>\`/&quot;         # \u5728bash\u4E0B\u6240\u4F7F\u7528\u7684\u547D\u4EE4
 sed &quot;s/$/\`echo <span class="token entity" title="\\\\">\\\\</span><span class="token entity" title="\\r">\\r</span>\`/&quot;           # \u5728zsh\u4E0B\u6240\u4F7F\u7528\u7684\u547D\u4EE4
 sed &#39;</span>s/$/<span class="token punctuation">\\</span>r/<span class="token string">&#39;                    # gsed 3.02.80 \u53CA\u66F4\u9AD8\u7248\u672C

 # DOS\u73AF\u5883\uFF1A\u8F6C\u6362Unix\u65B0\u884C\u7B26\uFF08LF\uFF09\u4E3ADOS\u683C\u5F0F\u3002
 sed &quot;s/$//&quot;                      # \u65B9\u6CD5 1
 sed -n p                         # \u65B9\u6CD5 2

 # DOS\u73AF\u5883\uFF1A\u8F6C\u6362DOS\u65B0\u884C\u7B26\uFF08CR/LF\uFF09\u4E3AUnix\u683C\u5F0F\u3002
 # \u4E0B\u9762\u7684\u811A\u672C\u53EA\u5BF9UnxUtils sed 4.0.7 \u53CA\u66F4\u9AD8\u7248\u672C\u6709\u6548\u3002\u8981\u8BC6\u522BUnxUtils\u7248\u672C\u7684
 #  sed\u53EF\u4EE5\u901A\u8FC7\u5176\u7279\u6709\u7684\u201C--text\u201D\u9009\u9879\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u5E2E\u52A9\u9009\u9879\uFF08\u201C--help\u201D\uFF09\u770B
 # \u5176\u4E2D\u6709\u65E0\u4E00\u4E2A\u201C--text\u201D\u9879\u4EE5\u6B64\u6765\u5224\u65AD\u6240\u4F7F\u7528\u7684\u662F\u5426\u662FUnxUtils\u7248\u672C\u3002\u5176\u5B83DOS
 # \u7248\u672C\u7684\u7684sed\u5219\u65E0\u6CD5\u8FDB\u884C\u8FD9\u4E00\u8F6C\u6362\u3002\u4F46\u53EF\u4EE5\u7528\u201Ctr\u201D\u6765\u5B9E\u73B0\u8FD9\u4E00\u8F6C\u6362\u3002
 sed &quot;s/\\r//&quot; infile &gt;outfile     # UnxUtils sed v4.0.7 \u6216\u66F4\u9AD8\u7248\u672C
 tr -d \\r &lt;infile &gt;outfile        # GNU tr 1.22 \u6216\u66F4\u9AD8\u7248\u672C

 # \u5C06\u6BCF\u4E00\u884C\u524D\u5BFC\u7684\u201C\u7A7A\u767D\u5B57\u7B26\u201D\uFF08\u7A7A\u683C\uFF0C\u5236\u8868\u7B26\uFF09\u5220\u9664
 # \u4F7F\u4E4B\u5DE6\u5BF9\u9F50
 sed &#39;</span>s/^<span class="token punctuation">[</span> <span class="token punctuation">\\</span>t<span class="token punctuation">]</span>*//<span class="token string">&#39;                # \u89C1\u672C\u6587\u672B\u5C3E\u5173\u4E8E&#39;</span><span class="token punctuation">\\</span>t<span class="token string">&#39;\u7528\u6CD5\u7684\u63CF\u8FF0

 # \u5C06\u6BCF\u4E00\u884C\u62D6\u5C3E\u7684\u201C\u7A7A\u767D\u5B57\u7B26\u201D\uFF08\u7A7A\u683C\uFF0C\u5236\u8868\u7B26\uFF09\u5220\u9664
 sed &#39;</span>s/<span class="token punctuation">[</span> <span class="token punctuation">\\</span>t<span class="token punctuation">]</span>*$//<span class="token string">&#39;                # \u89C1\u672C\u6587\u672B\u5C3E\u5173\u4E8E&#39;</span><span class="token punctuation">\\</span>t<span class="token string">&#39;\u7528\u6CD5\u7684\u63CF\u8FF0

 # \u5C06\u6BCF\u4E00\u884C\u4E2D\u7684\u524D\u5BFC\u548C\u62D6\u5C3E\u7684\u7A7A\u767D\u5B57\u7B26\u5220\u9664
 sed &#39;</span>s/^<span class="token punctuation">[</span> <span class="token punctuation">\\</span>t<span class="token punctuation">]</span>*//<span class="token punctuation">;</span>s/<span class="token punctuation">[</span> <span class="token punctuation">\\</span>t<span class="token punctuation">]</span>*$//<span class="token string">&#39;

 # \u5728\u6BCF\u4E00\u884C\u5F00\u5934\u5904\u63D2\u51655\u4E2A\u7A7A\u683C\uFF08\u4F7F\u5168\u6587\u5411\u53F3\u79FB\u52A85\u4E2A\u5B57\u7B26\u7684\u4F4D\u7F6E\uFF09
 sed &#39;</span>s/^/     /<span class="token string">&#39;

 # \u4EE579\u4E2A\u5B57\u7B26\u4E3A\u5BBD\u5EA6\uFF0C\u5C06\u6240\u6709\u6587\u672C\u53F3\u5BF9\u9F50
 sed -e :a -e &#39;</span>s/^.<span class="token punctuation">\\</span><span class="token punctuation">{</span><span class="token number">1,78</span><span class="token punctuation">\\</span><span class="token punctuation">}</span>$/ <span class="token operator">&amp;</span>/<span class="token punctuation">;</span>ta<span class="token string">&#39;  # 78\u4E2A\u5B57\u7B26\u5916\u52A0\u6700\u540E\u7684\u4E00\u4E2A\u7A7A\u683C

 # \u4EE579\u4E2A\u5B57\u7B26\u4E3A\u5BBD\u5EA6\uFF0C\u4F7F\u6240\u6709\u6587\u672C\u5C45\u4E2D\u3002\u5728\u65B9\u6CD51\u4E2D\uFF0C\u4E3A\u4E86\u8BA9\u6587\u672C\u5C45\u4E2D\u6BCF\u4E00\u884C\u7684\u524D
 # \u5934\u548C\u540E\u5934\u90FD\u586B\u5145\u4E86\u7A7A\u683C\u3002 \u5728\u65B9\u6CD52\u4E2D\uFF0C\u5728\u5C45\u4E2D\u6587\u672C\u7684\u8FC7\u7A0B\u4E2D\u53EA\u5728\u6587\u672C\u7684\u524D\u9762\u586B\u5145
 # \u7A7A\u683C\uFF0C\u5E76\u4E14\u6700\u7EC8\u8FD9\u4E9B\u7A7A\u683C\u5C06\u6709\u4E00\u534A\u4F1A\u88AB\u5220\u9664\u3002\u6B64\u5916\u6BCF\u4E00\u884C\u7684\u540E\u5934\u5E76\u672A\u586B\u5145\u7A7A\u683C\u3002
 sed  -e :a -e &#39;</span>s/^.<span class="token punctuation">\\</span><span class="token punctuation">{</span><span class="token number">1,77</span><span class="token punctuation">\\</span><span class="token punctuation">}</span>$/ <span class="token operator">&amp;</span> /<span class="token punctuation">;</span>ta<span class="token string">&#39;                     # \u65B9\u6CD51
 sed  -e :a -e &#39;</span>s/^.<span class="token punctuation">\\</span><span class="token punctuation">{</span><span class="token number">1,77</span><span class="token punctuation">\\</span><span class="token punctuation">}</span>$/ <span class="token operator">&amp;</span>/<span class="token punctuation">;</span>ta<span class="token string">&#39; -e &#39;</span>s/<span class="token punctuation">\\</span><span class="token punctuation">(</span> *<span class="token punctuation">\\</span><span class="token punctuation">)</span><span class="token punctuation">\\</span><span class="token number">1</span>/<span class="token punctuation">\\</span><span class="token number">1</span>/<span class="token string">&#39;  # \u65B9\u6CD52

 # \u5728\u6BCF\u4E00\u884C\u4E2D\u67E5\u627E\u5B57\u4E32\u201Cfoo\u201D\uFF0C\u5E76\u5C06\u627E\u5230\u7684\u201Cfoo\u201D\u66FF\u6362\u4E3A\u201Cbar\u201D
 sed &#39;</span>s/foo/bar/<span class="token string">&#39;                 # \u53EA\u66FF\u6362\u6BCF\u4E00\u884C\u4E2D\u7684\u7B2C\u4E00\u4E2A\u201Cfoo\u201D\u5B57\u4E32
 sed &#39;</span>s/foo/bar/4<span class="token string">&#39;                # \u53EA\u66FF\u6362\u6BCF\u4E00\u884C\u4E2D\u7684\u7B2C\u56DB\u4E2A\u201Cfoo\u201D\u5B57\u4E32
 sed &#39;</span>s/foo/bar/g<span class="token string">&#39;                # \u5C06\u6BCF\u4E00\u884C\u4E2D\u7684\u6240\u6709\u201Cfoo\u201D\u90FD\u6362\u6210\u201Cbar\u201D
 sed &#39;</span>s/<span class="token punctuation">\\</span><span class="token punctuation">(</span>.*<span class="token punctuation">\\</span><span class="token punctuation">)</span>foo<span class="token punctuation">\\</span><span class="token punctuation">(</span>.*foo<span class="token punctuation">\\</span><span class="token punctuation">)</span>/<span class="token punctuation">\\</span>1bar<span class="token punctuation">\\</span><span class="token number">2</span>/<span class="token string">&#39; # \u66FF\u6362\u5012\u6570\u7B2C\u4E8C\u4E2A\u201Cfoo\u201D
 sed &#39;</span>s/<span class="token punctuation">\\</span><span class="token punctuation">(</span>.*<span class="token punctuation">\\</span><span class="token punctuation">)</span>foo/<span class="token punctuation">\\</span>1bar/<span class="token string">&#39;            # \u66FF\u6362\u6700\u540E\u4E00\u4E2A\u201Cfoo\u201D

 # \u53EA\u5728\u884C\u4E2D\u51FA\u73B0\u5B57\u4E32\u201Cbaz\u201D\u7684\u60C5\u51B5\u4E0B\u5C06\u201Cfoo\u201D\u66FF\u6362\u6210\u201Cbar\u201D
 sed &#39;</span>/baz/s/foo/bar/g<span class="token string">&#39;

 # \u5C06\u201Cfoo\u201D\u66FF\u6362\u6210\u201Cbar\u201D\uFF0C\u5E76\u4E14\u53EA\u5728\u884C\u4E2D\u672A\u51FA\u73B0\u5B57\u4E32\u201Cbaz\u201D\u7684\u60C5\u51B5\u4E0B\u66FF\u6362
 sed &#39;</span>/baz/<span class="token operator">!</span>s/foo/bar/g<span class="token string">&#39;

 # \u4E0D\u7BA1\u662F\u201Cscarlet\u201D\u201Cruby\u201D\u8FD8\u662F\u201Cpuce\u201D\uFF0C\u4E00\u5F8B\u6362\u6210\u201Cred\u201D
 sed &#39;</span>s/scarlet/red/g<span class="token punctuation">;</span>s/ruby/red/g<span class="token punctuation">;</span>s/puce/red/g<span class="token string">&#39;  #\u5BF9\u591A\u6570\u7684sed\u90FD\u6709\u6548
 gsed &#39;</span>s/scarlet<span class="token punctuation">\\</span><span class="token operator">|</span>ruby<span class="token punctuation">\\</span><span class="token operator">|</span>puce/red/g<span class="token string">&#39;               # \u53EA\u5BF9GNU sed\u6709\u6548

 # \u5012\u7F6E\u6240\u6709\u884C\uFF0C\u7B2C\u4E00\u884C\u6210\u4E3A\u6700\u540E\u4E00\u884C\uFF0C\u4F9D\u6B21\u7C7B\u63A8\uFF08\u6A21\u62DF\u201Ctac\u201D\uFF09\u3002
 # \u7531\u4E8E\u67D0\u4E9B\u539F\u56E0\uFF0C\u4F7F\u7528\u4E0B\u9762\u547D\u4EE4\u65F6HHsed v1.5\u4F1A\u5C06\u6587\u4EF6\u4E2D\u7684\u7A7A\u884C\u5220\u9664
 sed &#39;</span><span class="token number">1</span><span class="token operator">!</span>G<span class="token punctuation">;</span>h<span class="token punctuation">;</span><span class="token variable">$!</span>d<span class="token string">&#39;               # \u65B9\u6CD51
 sed -n &#39;</span><span class="token number">1</span><span class="token operator">!</span>G<span class="token punctuation">;</span>h<span class="token punctuation">;</span><span class="token variable">$p</span><span class="token string">&#39;             # \u65B9\u6CD52

 # \u5C06\u884C\u4E2D\u7684\u5B57\u7B26\u9006\u5E8F\u6392\u5217\uFF0C\u7B2C\u4E00\u4E2A\u5B57\u6210\u4E3A\u6700\u540E\u4E00\u5B57\uFF0C\u2026\u2026\uFF08\u6A21\u62DF\u201Crev\u201D\uFF09
 sed &#39;</span>/<span class="token punctuation">\\</span>n/<span class="token operator">!</span>G<span class="token punctuation">;</span>s/<span class="token punctuation">\\</span><span class="token punctuation">(</span>.<span class="token punctuation">\\</span><span class="token punctuation">)</span><span class="token punctuation">\\</span><span class="token punctuation">(</span>.*<span class="token punctuation">\\</span>n<span class="token punctuation">\\</span><span class="token punctuation">)</span>/<span class="token operator">&amp;</span><span class="token punctuation">\\</span><span class="token number">2</span><span class="token punctuation">\\</span><span class="token number">1</span>/<span class="token punctuation">;</span>//D<span class="token punctuation">;</span>s/.//<span class="token string">&#39;

 # \u5C06\u6BCF\u4E24\u884C\u8FDE\u63A5\u6210\u4E00\u884C\uFF08\u7C7B\u4F3C\u201Cpaste\u201D\uFF09
 sed &#39;</span><span class="token variable">$!</span>N<span class="token punctuation">;</span>s/<span class="token punctuation">\\</span>n/ /<span class="token string">&#39;

 # \u5982\u679C\u5F53\u524D\u884C\u4EE5\u53CD\u659C\u6760\u201C\\\u201D\u7ED3\u675F\uFF0C\u5219\u5C06\u4E0B\u4E00\u884C\u5E76\u5230\u5F53\u524D\u884C\u672B\u5C3E
 # \u5E76\u53BB\u6389\u539F\u6765\u884C\u5C3E\u7684\u53CD\u659C\u6760
 sed -e :a -e &#39;</span>/<span class="token punctuation">\\</span><span class="token punctuation">\\</span>$/N<span class="token punctuation">;</span> s/<span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>n//<span class="token punctuation">;</span> ta<span class="token string">&#39;

 # \u5982\u679C\u5F53\u524D\u884C\u4EE5\u7B49\u53F7\u5F00\u5934\uFF0C\u5C06\u5F53\u524D\u884C\u5E76\u5230\u4E0A\u4E00\u884C\u672B\u5C3E
 # \u5E76\u4EE5\u5355\u4E2A\u7A7A\u683C\u4EE3\u66FF\u539F\u6765\u884C\u5934\u7684\u201C=\u201D
 sed -e :a -e &#39;</span><span class="token variable">$!</span>N<span class="token punctuation">;</span>s/<span class="token punctuation">\\</span>n<span class="token operator">=</span>/ /<span class="token punctuation">;</span>ta<span class="token string">&#39; -e &#39;</span>P<span class="token punctuation">;</span>D<span class="token string">&#39;

 # \u4E3A\u6570\u5B57\u5B57\u4E32\u589E\u52A0\u9017\u53F7\u5206\u9694\u7B26\u53F7\uFF0C\u5C06\u201C1234567\u201D\u6539\u4E3A\u201C1,234,567\u201D
 gsed &#39;</span>:a<span class="token punctuation">;</span>s/<span class="token punctuation">\\</span>B<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">\\</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">\\</span><span class="token punctuation">}</span><span class="token punctuation">\\</span><span class="token operator">&gt;</span>/,<span class="token operator">&amp;</span>/<span class="token punctuation">;</span>ta<span class="token string">&#39;                     # GNU sed
 sed -e :a -e &#39;</span>s/<span class="token punctuation">\\</span><span class="token punctuation">(</span>.*<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">\\</span><span class="token punctuation">)</span><span class="token punctuation">\\</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">\\</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">\\</span><span class="token punctuation">}</span><span class="token punctuation">\\</span><span class="token punctuation">)</span>/<span class="token punctuation">\\</span><span class="token number">1</span>,<span class="token punctuation">\\</span><span class="token number">2</span>/<span class="token punctuation">;</span>ta<span class="token string">&#39;  # \u5176\u4ED6sed

 # \u4E3A\u5E26\u6709\u5C0F\u6570\u70B9\u548C\u8D1F\u53F7\u7684\u6570\u503C\u589E\u52A0\u9017\u53F7\u5206\u9694\u7B26\uFF08GNU sed\uFF09
 gsed -r &#39;</span>:a<span class="token punctuation">;</span>s/<span class="token punctuation">(</span>^<span class="token operator">|</span><span class="token punctuation">[</span>^0-9.<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>+<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span>/<span class="token punctuation">\\</span><span class="token number">1</span><span class="token punctuation">\\</span><span class="token number">2</span>,<span class="token punctuation">\\</span><span class="token number">3</span>/g<span class="token punctuation">;</span>ta<span class="token string">&#39;

 # \u5728\u6BCF5\u884C\u540E\u589E\u52A0\u4E00\u7A7A\u767D\u884C \uFF08\u5728\u7B2C5\uFF0C10\uFF0C15\uFF0C20\uFF0C\u7B49\u884C\u540E\u589E\u52A0\u4E00\u7A7A\u767D\u884C\uFF09
 gsed &#39;</span><span class="token number">0</span>~5G<span class="token string">&#39;                      # \u53EA\u5BF9GNU sed\u6709\u6548
 sed &#39;</span>n<span class="token punctuation">;</span>n<span class="token punctuation">;</span>n<span class="token punctuation">;</span>n<span class="token punctuation">;</span>G<span class="token punctuation">;</span><span class="token string">&#39;                 # \u5176\u4ED6sed

\u9009\u62E9\u6027\u5730\u663E\u793A\u7279\u5B9A\u884C\uFF1A
--------

 # \u663E\u793A\u6587\u4EF6\u4E2D\u7684\u524D10\u884C \uFF08\u6A21\u62DF\u201Chead\u201D\u7684\u884C\u4E3A\uFF09
 sed 10q

 # \u663E\u793A\u6587\u4EF6\u4E2D\u7684\u7B2C\u4E00\u884C \uFF08\u6A21\u62DF\u201Chead -1\u201D\u547D\u4EE4\uFF09
 sed q

 # \u663E\u793A\u6587\u4EF6\u4E2D\u7684\u6700\u540E10\u884C \uFF08\u6A21\u62DF\u201Ctail\u201D\uFF09
 sed -e :a -e &#39;</span><span class="token variable">$q</span><span class="token punctuation">;</span>N<span class="token punctuation">;</span><span class="token number">11</span>,<span class="token variable">$D</span><span class="token punctuation">;</span>ba<span class="token string">&#39;

 # \u663E\u793A\u6587\u4EF6\u4E2D\u7684\u6700\u540E2\u884C\uFF08\u6A21\u62DF\u201Ctail -2\u201D\u547D\u4EE4\uFF09
 sed &#39;</span><span class="token variable">$!</span>N<span class="token punctuation">;</span><span class="token variable">$!</span>D<span class="token string">&#39;

 # \u663E\u793A\u6587\u4EF6\u4E2D\u7684\u6700\u540E\u4E00\u884C\uFF08\u6A21\u62DF\u201Ctail -1\u201D\uFF09
 sed &#39;</span><span class="token variable">$!</span>d<span class="token string">&#39;                        # \u65B9\u6CD51
 sed -n &#39;</span><span class="token variable">$p</span><span class="token string">&#39;                      # \u65B9\u6CD52

 # \u663E\u793A\u6587\u4EF6\u4E2D\u7684\u5012\u6570\u7B2C\u4E8C\u884C
 sed -e &#39;</span><span class="token variable">$!</span><span class="token punctuation">{</span>h<span class="token punctuation">;</span>d<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token string">&#39; -e x              # \u5F53\u6587\u4EF6\u4E2D\u53EA\u6709\u4E00\u884C\u65F6\uFF0C\u8F93\u5165\u7A7A\u884C
 sed -e &#39;</span><span class="token number">1</span><span class="token punctuation">{</span><span class="token variable">$q</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token string">&#39; -e &#39;</span><span class="token variable">$!</span><span class="token punctuation">{</span>h<span class="token punctuation">;</span>d<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token string">&#39; -e x  # \u5F53\u6587\u4EF6\u4E2D\u53EA\u6709\u4E00\u884C\u65F6\uFF0C\u663E\u793A\u8BE5\u884C
 sed -e &#39;</span><span class="token number">1</span><span class="token punctuation">{</span><span class="token variable">$d</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token string">&#39; -e &#39;</span><span class="token variable">$!</span><span class="token punctuation">{</span>h<span class="token punctuation">;</span>d<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token string">&#39; -e x  # \u5F53\u6587\u4EF6\u4E2D\u53EA\u6709\u4E00\u884C\u65F6\uFF0C\u4E0D\u8F93\u51FA

 # \u53EA\u663E\u793A\u5339\u914D\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u884C\uFF08\u6A21\u62DF\u201Cgrep\u201D\uFF09
 sed -n &#39;</span>/regexp/p<span class="token string">&#39;               # \u65B9\u6CD51
 sed &#39;</span>/regexp/<span class="token operator">!</span>d<span class="token string">&#39;                 # \u65B9\u6CD52

 # \u53EA\u663E\u793A\u201C\u4E0D\u201D\u5339\u914D\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u884C\uFF08\u6A21\u62DF\u201Cgrep -v\u201D\uFF09
 sed -n &#39;</span>/regexp/<span class="token operator">!</span>p<span class="token string">&#39;              # \u65B9\u6CD51\uFF0C\u4E0E\u524D\u9762\u7684\u547D\u4EE4\u76F8\u5BF9\u5E94
 sed &#39;</span>/regexp/d<span class="token string">&#39;                  # \u65B9\u6CD52\uFF0C\u7C7B\u4F3C\u7684\u8BED\u6CD5

 # \u67E5\u627E\u201Cregexp\u201D\u5E76\u5C06\u5339\u914D\u884C\u7684\u4E0A\u4E00\u884C\u663E\u793A\u51FA\u6765\uFF0C\u4F46\u5E76\u4E0D\u663E\u793A\u5339\u914D\u884C
 sed -n &#39;</span>/regexp/<span class="token punctuation">{</span>g<span class="token punctuation">;</span><span class="token number">1</span><span class="token operator">!</span>p<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>h<span class="token string">&#39;

 # \u67E5\u627E\u201Cregexp\u201D\u5E76\u5C06\u5339\u914D\u884C\u7684\u4E0B\u4E00\u884C\u663E\u793A\u51FA\u6765\uFF0C\u4F46\u5E76\u4E0D\u663E\u793A\u5339\u914D\u884C
 sed -n &#39;</span>/regexp/<span class="token punctuation">{</span>n<span class="token punctuation">;</span>p<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token string">&#39;

 # \u663E\u793A\u5305\u542B\u201Cregexp\u201D\u7684\u884C\u53CA\u5176\u524D\u540E\u884C\uFF0C\u5E76\u5728\u7B2C\u4E00\u884C\u4E4B\u524D\u52A0\u4E0A\u201Cregexp\u201D\u6240
 # \u5728\u884C\u7684\u884C\u53F7 \uFF08\u7C7B\u4F3C\u201Cgrep -A1 -B1\u201D\uFF09
 sed -n -e &#39;</span>/regexp/<span class="token punctuation">{</span><span class="token operator">=</span><span class="token punctuation">;</span>x<span class="token punctuation">;</span><span class="token number">1</span><span class="token operator">!</span>p<span class="token punctuation">;</span>g<span class="token punctuation">;</span><span class="token variable">$!</span>N<span class="token punctuation">;</span>p<span class="token punctuation">;</span>D<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token string">&#39; -e h

 # \u663E\u793A\u5305\u542B\u201CAAA\u201D\u3001\u201CBBB\u201D\u6216\u201CCCC\u201D\u7684\u884C\uFF08\u4EFB\u610F\u6B21\u5E8F\uFF09
 sed &#39;</span>/AAA/<span class="token operator">!</span>d<span class="token punctuation">;</span> /BBB/<span class="token operator">!</span>d<span class="token punctuation">;</span> /CCC/<span class="token operator">!</span>d<span class="token string">&#39;  # \u5B57\u4E32\u7684\u6B21\u5E8F\u4E0D\u5F71\u54CD\u7ED3\u679C

 # \u663E\u793A\u5305\u542B\u201CAAA\u201D\u3001\u201CBBB\u201D\u548C\u201CCCC\u201D\u7684\u884C\uFF08\u56FA\u5B9A\u6B21\u5E8F\uFF09
 sed &#39;</span>/AAA.*BBB.*CCC/<span class="token operator">!</span>d<span class="token string">&#39;

 # \u663E\u793A\u5305\u542B\u201CAAA\u201D\u201CBBB\u201D\u6216\u201CCCC\u201D\u7684\u884C \uFF08\u6A21\u62DF\u201Cegrep\u201D\uFF09
 sed -e &#39;</span>/AAA/b<span class="token string">&#39; -e &#39;</span>/BBB/b<span class="token string">&#39; -e &#39;</span>/CCC/b<span class="token string">&#39; -e d    # \u591A\u6570sed
 gsed &#39;</span>/AAA<span class="token punctuation">\\</span><span class="token operator">|</span>BBB<span class="token punctuation">\\</span><span class="token operator">|</span>CCC/<span class="token operator">!</span>d<span class="token string">&#39;                        # \u5BF9GNU sed\u6709\u6548

 # \u663E\u793A\u5305\u542B\u201CAAA\u201D\u7684\u6BB5\u843D \uFF08\u6BB5\u843D\u95F4\u4EE5\u7A7A\u884C\u5206\u9694\uFF09
 # HHsed v1.5 \u5FC5\u987B\u5728\u201Cx;\u201D\u540E\u52A0\u5165\u201CG;\u201D\uFF0C\u63A5\u4E0B\u6765\u76843\u4E2A\u811A\u672C\u90FD\u662F\u8FD9\u6837
 sed -e &#39;</span>/./<span class="token punctuation">{</span>H<span class="token punctuation">;</span><span class="token variable">$!</span>d<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token string">&#39; -e &#39;</span>x<span class="token punctuation">;</span>/AAA/<span class="token operator">!</span>d<span class="token punctuation">;</span><span class="token string">&#39;

 # \u663E\u793A\u5305\u542B\u201CAAA\u201D\u201CBBB\u201D\u548C\u201CCCC\u201D\u4E09\u4E2A\u5B57\u4E32\u7684\u6BB5\u843D \uFF08\u4EFB\u610F\u6B21\u5E8F\uFF09
 sed -e &#39;</span>/./<span class="token punctuation">{</span>H<span class="token punctuation">;</span><span class="token variable">$!</span>d<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token string">&#39; -e &#39;</span>x<span class="token punctuation">;</span>/AAA/<span class="token operator">!</span>d<span class="token punctuation">;</span>/BBB/<span class="token operator">!</span>d<span class="token punctuation">;</span>/CCC/<span class="token operator">!</span>d<span class="token string">&#39;

 # \u663E\u793A\u5305\u542B\u201CAAA\u201D\u3001\u201CBBB\u201D\u3001\u201CCCC\u201D\u4E09\u8005\u4E2D\u4EFB\u4E00\u5B57\u4E32\u7684\u6BB5\u843D \uFF08\u4EFB\u610F\u6B21\u5E8F\uFF09
 sed -e &#39;</span>/./<span class="token punctuation">{</span>H<span class="token punctuation">;</span><span class="token variable">$!</span>d<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token string">&#39; -e &#39;</span>x<span class="token punctuation">;</span>/AAA/b<span class="token string">&#39; -e &#39;</span>/BBB/b<span class="token string">&#39; -e &#39;</span>/CCC/b<span class="token string">&#39; -e d
 gsed &#39;</span>/./<span class="token punctuation">{</span>H<span class="token punctuation">;</span><span class="token variable">$!</span>d<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>x<span class="token punctuation">;</span>/AAA<span class="token punctuation">\\</span><span class="token operator">|</span>BBB<span class="token punctuation">\\</span><span class="token operator">|</span>CCC/b<span class="token punctuation">;</span>d<span class="token string">&#39;         # \u53EA\u5BF9GNU sed\u6709\u6548

 # \u663E\u793A\u5305\u542B65\u4E2A\u6216\u4EE5\u4E0A\u5B57\u7B26\u7684\u884C
 sed -n &#39;</span>/^.<span class="token punctuation">\\</span><span class="token punctuation">{</span><span class="token number">65</span><span class="token punctuation">\\</span><span class="token punctuation">}</span>/p<span class="token string">&#39;

 # \u663E\u793A\u5305\u542B65\u4E2A\u4EE5\u4E0B\u5B57\u7B26\u7684\u884C
 sed -n &#39;</span>/^.<span class="token punctuation">\\</span><span class="token punctuation">{</span><span class="token number">65</span><span class="token punctuation">\\</span><span class="token punctuation">}</span>/<span class="token operator">!</span>p<span class="token string">&#39;            # \u65B9\u6CD51\uFF0C\u4E0E\u4E0A\u9762\u7684\u811A\u672C\u76F8\u5BF9\u5E94
 sed &#39;</span>/^.<span class="token punctuation">\\</span><span class="token punctuation">{</span><span class="token number">65</span><span class="token punctuation">\\</span><span class="token punctuation">}</span>/d<span class="token string">&#39;                # \u65B9\u6CD52\uFF0C\u66F4\u7B80\u4FBF\u4E00\u70B9\u7684\u65B9\u6CD5

 # \u663E\u793A\u90E8\u5206\u6587\u672C\u2014\u2014\u4ECE\u5305\u542B\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u884C\u5F00\u59CB\u5230\u6700\u540E\u4E00\u884C\u7ED3\u675F
 sed -n &#39;</span>/regexp/,<span class="token variable">$p</span><span class="token string">&#39;

 # \u663E\u793A\u90E8\u5206\u6587\u672C\u2014\u2014\u6307\u5B9A\u884C\u53F7\u8303\u56F4\uFF08\u4ECE\u7B2C8\u81F3\u7B2C12\u884C\uFF0C\u542B8\u548C12\u884C\uFF09
 sed -n &#39;</span><span class="token number">8</span>,12p<span class="token string">&#39;                   # \u65B9\u6CD51
 sed &#39;</span><span class="token number">8,12</span><span class="token operator">!</span>d<span class="token string">&#39;                     # \u65B9\u6CD52

 # \u663E\u793A\u7B2C52\u884C
 sed -n &#39;</span>52p<span class="token string">&#39;                     # \u65B9\u6CD51
 sed &#39;</span><span class="token number">52</span><span class="token operator">!</span>d<span class="token string">&#39;                       # \u65B9\u6CD52
 sed &#39;</span>52q<span class="token punctuation">;</span>d<span class="token string">&#39;                      # \u65B9\u6CD53, \u5904\u7406\u5927\u6587\u4EF6\u65F6\u66F4\u6709\u6548\u7387

 # \u4ECE\u7B2C3\u884C\u5F00\u59CB\uFF0C\u6BCF7\u884C\u663E\u793A\u4E00\u6B21    
 gsed -n &#39;</span><span class="token number">3</span>~7p<span class="token string">&#39;                   # \u53EA\u5BF9GNU sed\u6709\u6548
 sed -n &#39;</span><span class="token number">3</span>,<span class="token variable">\${p;n;n;n;n;n;n;}</span><span class="token string">&#39;     # \u5176\u4ED6sed

 # \u663E\u793A\u4E24\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u4E4B\u95F4\u7684\u6587\u672C\uFF08\u5305\u542B\uFF09
 sed -n &#39;</span>/Iowa/,/Montana/p<span class="token string">&#39;       # \u533A\u5206\u5927\u5C0F\u5199\u65B9\u5F0F

\u9009\u62E9\u6027\u5730\u5220\u9664\u7279\u5B9A\u884C\uFF1A
--------

 # \u663E\u793A\u901A\u7BC7\u6587\u6863\uFF0C\u9664\u4E86\u4E24\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u4E4B\u95F4\u7684\u5185\u5BB9
 sed &#39;</span>/Iowa/,/Montana/d<span class="token string">&#39;

 # \u5220\u9664\u6587\u4EF6\u4E2D\u76F8\u90BB\u7684\u91CD\u590D\u884C\uFF08\u6A21\u62DF\u201Cuniq\u201D\uFF09
 # \u53EA\u4FDD\u7559\u91CD\u590D\u884C\u4E2D\u7684\u7B2C\u4E00\u884C\uFF0C\u5176\u4ED6\u884C\u5220\u9664
 sed &#39;</span><span class="token variable">$!</span>N<span class="token punctuation">;</span> /^<span class="token punctuation">\\</span><span class="token punctuation">(</span>.*<span class="token punctuation">\\</span><span class="token punctuation">)</span><span class="token punctuation">\\</span>n<span class="token punctuation">\\</span><span class="token number">1</span>$/<span class="token operator">!</span>P<span class="token punctuation">;</span> D<span class="token string">&#39;

 # \u5220\u9664\u6587\u4EF6\u4E2D\u7684\u91CD\u590D\u884C\uFF0C\u4E0D\u7BA1\u6709\u65E0\u76F8\u90BB\u3002\u6CE8\u610Fhold space\u6240\u80FD\u652F\u6301\u7684\u7F13\u5B58
 # \u5927\u5C0F\uFF0C\u6216\u8005\u4F7F\u7528GNU sed\u3002
 sed -n &#39;</span>G<span class="token punctuation">;</span> s/<span class="token punctuation">\\</span>n/<span class="token operator">&amp;&amp;</span>/<span class="token punctuation">;</span> /^<span class="token punctuation">\\</span><span class="token punctuation">(</span><span class="token punctuation">[</span> -~<span class="token punctuation">]</span>*<span class="token punctuation">\\</span>n<span class="token punctuation">\\</span><span class="token punctuation">)</span>.*<span class="token punctuation">\\</span>n<span class="token punctuation">\\</span><span class="token number">1</span>/d<span class="token punctuation">;</span> s/<span class="token punctuation">\\</span>n//<span class="token punctuation">;</span> h<span class="token punctuation">;</span> P<span class="token string">&#39;

 # \u5220\u9664\u9664\u91CD\u590D\u884C\u5916\u7684\u6240\u6709\u884C\uFF08\u6A21\u62DF\u201Cuniq -d\u201D\uFF09
 sed &#39;</span><span class="token variable">$!</span>N<span class="token punctuation">;</span> s/^<span class="token punctuation">\\</span><span class="token punctuation">(</span>.*<span class="token punctuation">\\</span><span class="token punctuation">)</span><span class="token punctuation">\\</span>n<span class="token punctuation">\\</span><span class="token number">1</span>$/<span class="token punctuation">\\</span><span class="token number">1</span>/<span class="token punctuation">;</span> t<span class="token punctuation">;</span> D<span class="token string">&#39;

 # \u5220\u9664\u6587\u4EF6\u4E2D\u5F00\u5934\u768410\u884C
 sed &#39;</span><span class="token number">1</span>,10d<span class="token string">&#39;

 # \u5220\u9664\u6587\u4EF6\u4E2D\u7684\u6700\u540E\u4E00\u884C
 sed &#39;</span><span class="token variable">$d</span><span class="token string">&#39;

 # \u5220\u9664\u6587\u4EF6\u4E2D\u7684\u6700\u540E\u4E24\u884C
 sed &#39;</span>N<span class="token punctuation">;</span><span class="token variable">$!</span>P<span class="token punctuation">;</span><span class="token variable">$!</span>D<span class="token punctuation">;</span><span class="token variable">$d</span><span class="token string">&#39;

 # \u5220\u9664\u6587\u4EF6\u4E2D\u7684\u6700\u540E10\u884C
 sed -e :a -e &#39;</span><span class="token variable">$d</span><span class="token punctuation">;</span>N<span class="token punctuation">;</span><span class="token number">2</span>,10ba<span class="token string">&#39; -e &#39;</span>P<span class="token punctuation">;</span>D<span class="token string">&#39;   # \u65B9\u6CD51
 sed -n -e :a -e &#39;</span><span class="token number">1,10</span><span class="token operator">!</span><span class="token punctuation">{</span>P<span class="token punctuation">;</span>N<span class="token punctuation">;</span>D<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>N<span class="token punctuation">;</span>ba<span class="token string">&#39;  # \u65B9\u6CD52

 # \u5220\u96648\u7684\u500D\u6570\u884C
 gsed &#39;</span><span class="token number">0</span>~8d<span class="token string">&#39;                           # \u53EA\u5BF9GNU sed\u6709\u6548
 sed &#39;</span>n<span class="token punctuation">;</span>n<span class="token punctuation">;</span>n<span class="token punctuation">;</span>n<span class="token punctuation">;</span>n<span class="token punctuation">;</span>n<span class="token punctuation">;</span>n<span class="token punctuation">;</span>d<span class="token punctuation">;</span><span class="token string">&#39;                # \u5176\u4ED6sed

 # \u5220\u9664\u5339\u914D\u5F0F\u6837\u7684\u884C
 sed &#39;</span>/pattern/d<span class="token string">&#39;                      # \u5220\u9664\u542Bpattern\u7684\u884C\u3002\u5F53\u7136pattern
                                       # \u53EF\u4EE5\u6362\u6210\u4EFB\u4F55\u6709\u6548\u7684\u6B63\u5219\u8868\u8FBE\u5F0F

 # \u5220\u9664\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u7A7A\u884C\uFF08\u4E0E\u201Cgrep &#39;</span><span class="token builtin class-name">.</span><span class="token string">&#39; \u201D\u6548\u679C\u76F8\u540C\uFF09
 sed &#39;</span>/^$/d<span class="token string">&#39;                           # \u65B9\u6CD51
 sed &#39;</span>/./<span class="token operator">!</span>d<span class="token string">&#39;                           # \u65B9\u6CD52

 # \u53EA\u4FDD\u7559\u591A\u4E2A\u76F8\u90BB\u7A7A\u884C\u7684\u7B2C\u4E00\u884C\u3002\u5E76\u4E14\u5220\u9664\u6587\u4EF6\u9876\u90E8\u548C\u5C3E\u90E8\u7684\u7A7A\u884C\u3002
 # \uFF08\u6A21\u62DF\u201Ccat -s\u201D\uFF09
 sed &#39;</span>/./,/^$/<span class="token operator">!</span>d<span class="token string">&#39;        #\u65B9\u6CD51\uFF0C\u5220\u9664\u6587\u4EF6\u9876\u90E8\u7684\u7A7A\u884C\uFF0C\u5141\u8BB8\u5C3E\u90E8\u4FDD\u7559\u4E00\u7A7A\u884C
 sed &#39;</span>/^$/N<span class="token punctuation">;</span>/<span class="token punctuation">\\</span>n$/D<span class="token string">&#39;      #\u65B9\u6CD52\uFF0C\u5141\u8BB8\u9876\u90E8\u4FDD\u7559\u4E00\u7A7A\u884C\uFF0C\u5C3E\u90E8\u4E0D\u7559\u7A7A\u884C

 # \u53EA\u4FDD\u7559\u591A\u4E2A\u76F8\u90BB\u7A7A\u884C\u7684\u524D\u4E24\u884C\u3002
 sed &#39;</span>/^$/N<span class="token punctuation">;</span>/<span class="token punctuation">\\</span>n$/N<span class="token punctuation">;</span>//D<span class="token string">&#39;

 # \u5220\u9664\u6587\u4EF6\u9876\u90E8\u7684\u6240\u6709\u7A7A\u884C
 sed &#39;</span>/./,<span class="token variable">$!</span>d<span class="token string">&#39;

 # \u5220\u9664\u6587\u4EF6\u5C3E\u90E8\u7684\u6240\u6709\u7A7A\u884C
 sed -e :a -e &#39;</span>/^<span class="token punctuation">\\</span>n*$/<span class="token punctuation">{</span><span class="token variable">$d</span><span class="token punctuation">;</span>N<span class="token punctuation">;</span>ba<span class="token string">&#39; -e &#39;</span><span class="token punctuation">}</span><span class="token string">&#39;  # \u5BF9\u6240\u6709sed\u6709\u6548
 sed -e :a -e &#39;</span>/^<span class="token punctuation">\\</span>n*$/N<span class="token punctuation">;</span>/<span class="token punctuation">\\</span>n$/ba<span class="token string">&#39;        # \u540C\u4E0A\uFF0C\u4F46\u53EA\u5BF9 gsed 3.02.*\u6709\u6548

 # \u5220\u9664\u6BCF\u4E2A\u6BB5\u843D\u7684\u6700\u540E\u4E00\u884C
 sed -n &#39;</span>/^$/<span class="token punctuation">{</span>p<span class="token punctuation">;</span>h<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>/./<span class="token punctuation">{</span>x<span class="token punctuation">;</span>/./p<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token string">&#39;

\u7279\u6B8A\u5E94\u7528\uFF1A
--------

 # \u79FB\u9664\u624B\u518C\u9875\uFF08man page\uFF09\u4E2D\u7684nroff\u6807\u8BB0\u3002\u5728Unix System V\u6216bash shell\u4E0B\u4F7F
 # \u7528&#39;</span><span class="token builtin class-name">echo</span><span class="token string">&#39;\u547D\u4EE4\u65F6\u53EF\u80FD\u9700\u8981\u52A0\u4E0A -e \u9009\u9879\u3002
 sed &quot;s/.\`echo \\\\\\b\`//g&quot;    # \u5916\u5C42\u7684\u53CC\u62EC\u53F7\u662F\u5FC5\u987B\u7684\uFF08Unix\u73AF\u5883\uFF09
 sed &#39;</span>s/.^H//g<span class="token string">&#39;             # \u5728bash\u6216tcsh\u4E2D, \u6309 Ctrl-V \u518D\u6309 Ctrl-H
 sed &#39;</span>s/.<span class="token punctuation">\\</span>x08//g<span class="token string">&#39;           # sed 1.5\uFF0CGNU sed\uFF0Cssed\u6240\u4F7F\u7528\u7684\u5341\u516D\u8FDB\u5236\u7684\u8868\u793A\u65B9\u6CD5

 # \u63D0\u53D6\u65B0\u95FB\u7EC4\u6216 e-mail \u7684\u90AE\u4EF6\u5934
 sed &#39;</span>/^$/q<span class="token string">&#39;                # \u5220\u9664\u7B2C\u4E00\u884C\u7A7A\u884C\u540E\u7684\u6240\u6709\u5185\u5BB9

 # \u63D0\u53D6\u65B0\u95FB\u7EC4\u6216 e-mail \u7684\u6B63\u6587\u90E8\u5206
 sed &#39;</span><span class="token number">1</span>,/^$/d<span class="token string">&#39;              # \u5220\u9664\u7B2C\u4E00\u884C\u7A7A\u884C\u4E4B\u524D\u7684\u6240\u6709\u5185\u5BB9

 # \u4ECE\u90AE\u4EF6\u5934\u63D0\u53D6\u201CSubject\u201D\uFF08\u6807\u9898\u680F\u5B57\u6BB5\uFF09\uFF0C\u5E76\u79FB\u9664\u5F00\u5934\u7684\u201CSubject:\u201D\u5B57\u6837
 sed &#39;</span>/^Subject: */<span class="token operator">!</span>d<span class="token punctuation">;</span> s///<span class="token punctuation">;</span>q<span class="token string">&#39;

 # \u4ECE\u90AE\u4EF6\u5934\u83B7\u5F97\u56DE\u590D\u5730\u5740
 sed &#39;</span>/^Reply-To:/q<span class="token punctuation">;</span> /^From:/h<span class="token punctuation">;</span> /./d<span class="token punctuation">;</span>g<span class="token punctuation">;</span>q<span class="token string">&#39;

 # \u83B7\u53D6\u90AE\u4EF6\u5730\u5740\u3002\u5728\u4E0A\u4E00\u4E2A\u811A\u672C\u6240\u4EA7\u751F\u7684\u90A3\u4E00\u884C\u90AE\u4EF6\u5934\u7684\u57FA\u7840\u4E0A\u8FDB\u4E00\u6B65\u7684\u5C06\u975E\u7535\u90AE
 # \u5730\u5740\u7684\u90E8\u5206\u5243\u9664\u3002\uFF08\u89C1\u4E0A\u4E00\u811A\u672C\uFF09
 sed &#39;</span>s/ *<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>//<span class="token punctuation">;</span> s/<span class="token operator">&gt;</span>.*//<span class="token punctuation">;</span> s/.*<span class="token punctuation">[</span>:<span class="token operator">&lt;</span><span class="token punctuation">]</span> *//<span class="token string">&#39;

 # \u5728\u6BCF\u4E00\u884C\u5F00\u5934\u52A0\u4E0A\u4E00\u4E2A\u5C16\u62EC\u53F7\u548C\u7A7A\u683C\uFF08\u5F15\u7528\u4FE1\u606F\uFF09
 sed &#39;</span>s/^/<span class="token operator">&gt;</span> /<span class="token string">&#39;

 # \u5C06\u6BCF\u4E00\u884C\u5F00\u5934\u5904\u7684\u5C16\u62EC\u53F7\u548C\u7A7A\u683C\u5220\u9664\uFF08\u89E3\u9664\u5F15\u7528\uFF09
 sed &#39;</span>s/^<span class="token operator">&gt;</span> //<span class="token string">&#39;

 # \u79FB\u9664\u5927\u90E8\u5206\u7684HTML\u6807\u7B7E\uFF08\u5305\u62EC\u8DE8\u884C\u6807\u7B7E\uFF09
 sed -e :a -e &#39;</span>s/<span class="token operator">&lt;</span><span class="token punctuation">[</span>^<span class="token operator">&gt;</span><span class="token punctuation">]</span>*<span class="token operator">&gt;</span>//g<span class="token punctuation">;</span>/<span class="token operator">&lt;</span>/N<span class="token punctuation">;</span>//ba<span class="token string">&#39;

 # \u5C06\u5206\u6210\u591A\u5377\u7684uuencode\u6587\u4EF6\u89E3\u7801\u3002\u79FB\u9664\u6587\u4EF6\u5934\u4FE1\u606F\uFF0C\u53EA\u4FDD\u7559uuencode\u7F16\u7801\u90E8\u5206\u3002
 # \u6587\u4EF6\u5FC5\u987B\u4EE5\u7279\u5B9A\u987A\u5E8F\u4F20\u7ED9sed\u3002\u4E0B\u9762\u7B2C\u4E00\u79CD\u7248\u672C\u7684\u811A\u672C\u53EF\u4EE5\u76F4\u63A5\u5728\u547D\u4EE4\u884C\u4E0B\u8F93\u5165\uFF1B
 # \u7B2C\u4E8C\u79CD\u7248\u672C\u5219\u53EF\u4EE5\u653E\u5165\u4E00\u4E2A\u5E26\u6267\u884C\u6743\u9650\u7684shell\u811A\u672C\u4E2D\u3002\uFF08\u7531Rahul Dhesi\u7684\u4E00
 # \u4E2A\u811A\u672C\u4FEE\u6539\u800C\u6765\u3002\uFF09
 sed &#39;</span>/^end/,/^begin/d<span class="token string">&#39; file1 file2 ... fileX | uudecode   # vers. 1
 sed &#39;</span>/^end/,/^begin/d<span class="token string">&#39; &quot;$@&quot; | uudecode                    # vers. 2

 # \u5C06\u6587\u4EF6\u4E2D\u7684\u6BB5\u843D\u4EE5\u5B57\u6BCD\u987A\u5E8F\u6392\u5E8F\u3002\u6BB5\u843D\u95F4\u4EE5\uFF08\u4E00\u884C\u6216\u591A\u884C\uFF09\u7A7A\u884C\u5206\u9694\u3002GNU sed\u4F7F\u7528
 # \u5B57\u5143\u201C\\v\u201D\u6765\u8868\u793A\u5782\u76F4\u5236\u8868\u7B26\uFF0C\u8FD9\u91CC\u7528\u5B83\u6765\u4F5C\u4E3A\u6362\u884C\u7B26\u7684\u5360\u4F4D\u7B26\u2014\u2014\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5
 # \u7528\u5176\u4ED6\u672A\u5728\u6587\u4EF6\u4E2D\u4F7F\u7528\u7684\u5B57\u7B26\u6765\u4EE3\u66FF\u5B83\u3002
 sed &#39;</span>/./<span class="token punctuation">{</span>H<span class="token punctuation">;</span>d<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>x<span class="token punctuation">;</span>s/<span class="token punctuation">\\</span>n/<span class="token operator">=</span><span class="token punctuation">{</span>NL<span class="token punctuation">}</span><span class="token operator">=</span>/g<span class="token string">&#39; file | sort | sed &#39;</span>1s/<span class="token operator">=</span><span class="token punctuation">{</span>NL<span class="token punctuation">}</span><span class="token operator">=</span>//<span class="token punctuation">;</span>s/<span class="token operator">=</span><span class="token punctuation">{</span>NL<span class="token punctuation">}</span><span class="token operator">=</span>/<span class="token punctuation">\\</span>n/g<span class="token string">&#39;
 gsed &#39;</span>/./<span class="token punctuation">{</span>H<span class="token punctuation">;</span>d<span class="token punctuation">}</span><span class="token punctuation">;</span>x<span class="token punctuation">;</span>y/<span class="token punctuation">\\</span>n/<span class="token punctuation">\\</span>v/<span class="token string">&#39; file | sort | sed &#39;</span>1s/<span class="token punctuation">\\</span>v//<span class="token punctuation">;</span>y/<span class="token punctuation">\\</span>v/<span class="token punctuation">\\</span>n/<span class="token string">&#39;

 # \u5206\u522B\u538B\u7F29\u6BCF\u4E2A.TXT\u6587\u4EF6\uFF0C\u538B\u7F29\u540E\u5220\u9664\u539F\u6765\u7684\u6587\u4EF6\u5E76\u5C06\u538B\u7F29\u540E\u7684.ZIP\u6587\u4EF6
 # \u547D\u540D\u4E3A\u4E0E\u539F\u6765\u76F8\u540C\u7684\u540D\u5B57\uFF08\u53EA\u662F\u6269\u5C55\u540D\u4E0D\u540C\uFF09\u3002\uFF08DOS\u73AF\u5883\uFF1A\u201Cdir /b\u201D
 # \u663E\u793A\u4E0D\u5E26\u8DEF\u5F84\u7684\u6587\u4EF6\u540D\uFF09\u3002
 echo @echo off &gt;zipup.bat
 dir /b *.txt | sed &quot;s/^\\(.*\\)\\.TXT/pkzip -mo \\1 \\1.TXT/&quot; &gt;&gt;zipup.bat


\u4F7F\u7528SED\uFF1ASed\u63A5\u53D7\u4E00\u4E2A\u6216\u591A\u4E2A\u7F16\u8F91\u547D\u4EE4\uFF0C\u5E76\u4E14\u6BCF\u8BFB\u5165\u4E00\u884C\u540E\u5C31\u4F9D\u6B21\u5E94\u7528\u8FD9\u4E9B\u547D\u4EE4\u3002
\u5F53\u8BFB\u5165\u7B2C\u4E00\u884C\u8F93\u5165\u540E\uFF0Csed\u5BF9\u5176\u5E94\u7528\u6240\u6709\u7684\u547D\u4EE4\uFF0C\u7136\u540E\u5C06\u7ED3\u679C\u8F93\u51FA\u3002\u63A5\u7740\u518D\u8BFB\u5165\u7B2C\u4E8C
\u884C\u8F93\u5165\uFF0C\u5BF9\u5176\u5E94\u7528\u6240\u6709\u7684\u547D\u4EE4\u2026\u2026\u5E76\u91CD\u590D\u8FD9\u4E2A\u8FC7\u7A0B\u3002\u4E0A\u4E00\u4E2A\u4F8B\u5B50\u4E2Dsed\u7531\u6807\u51C6\u8F93\u5165\u8BBE
\u5907\uFF08\u5373\u547D\u4EE4\u89E3\u91CA\u5668\uFF0C\u901A\u5E38\u662F\u4EE5\u7BA1\u9053\u8F93\u5165\u7684\u5F62\u5F0F\uFF09\u83B7\u5F97\u8F93\u5165\u3002\u5728\u547D\u4EE4\u884C\u7ED9\u51FA\u4E00\u4E2A\u6216\u591A
\u4E2A\u6587\u4EF6\u540D\u4F5C\u4E3A\u53C2\u6570\u65F6\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u53D6\u4EE3\u6807\u51C6\u8F93\u5165\u8BBE\u5907\u6210\u4E3Ased\u7684\u8F93\u5165\u3002sed\u7684\u8F93\u51FA\u5C06\u88AB
\u9001\u5230\u6807\u51C6\u8F93\u51FA\uFF08\u663E\u793A\u5668\uFF09\u3002\u56E0\u6B64\uFF1A

 cat filename | sed &#39;</span>10q<span class="token string">&#39;         # \u4F7F\u7528\u7BA1\u9053\u8F93\u5165
 sed &#39;</span>10q<span class="token string">&#39; filename               # \u540C\u6837\u6548\u679C\uFF0C\u4F46\u4E0D\u4F7F\u7528\u7BA1\u9053\u8F93\u5165
 sed &#39;</span>10q<span class="token string">&#39; filename &gt; newfile     # \u5C06\u8F93\u51FA\u8F6C\u79FB\uFF08\u91CD\u5B9A\u5411\uFF09\u5230\u78C1\u76D8\u4E0A

\u8981\u4E86\u89E3sed\u547D\u4EE4\u7684\u4F7F\u7528\u8BF4\u660E\uFF0C\u5305\u62EC\u5982\u4F55\u901A\u8FC7\u811A\u672C\u6587\u4EF6\uFF08\u800C\u975E\u4ECE\u547D\u4EE4\u884C\uFF09\u6765\u4F7F\u7528\u8FD9\u4E9B\u547D
\u4EE4\uFF0C\u8BF7\u53C2\u9605\u300Ased &amp; awk\u300B\u7B2C\u4E8C\u7248\uFF0C\u4F5C\u8005Dale Dougherty\u548CArnold Robbins
\uFF08O&#39;</span>Reilly\uFF0C1997\uFF1Bhttp://www.ora.com\uFF09\uFF0C\u300AUNIX Text Processing\u300B\uFF0C\u4F5C\u8005
Dale Dougherty\u548CTim O<span class="token string">&#39;Reilly\uFF08Hayden Books\uFF0C1987\uFF09\u6216\u8005\u662FMike Arst\u5199\u7684\u6559
\u7A0B\u2014\u2014\u538B\u7F29\u5305\u7684\u540D\u79F0\u662F\u201CU-SEDIT2.ZIP\u201D\uFF08\u5728\u8BB8\u591A\u7AD9\u70B9\u4E0A\u90FD\u627E\u5F97\u5230\uFF09\u3002\u8981\u53D1\u6398sed
\u7684\u6F5C\u529B\uFF0C\u5219\u5FC5\u987B\u5BF9\u201C\u6B63\u5219\u8868\u8FBE\u5F0F\u201D\u6709\u8DB3\u591F\u7684\u7406\u89E3\u3002\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u8D44\u6599\u53EF\u4EE5\u770B
\u300AMastering Regular Expressions\u300B\u4F5C\u8005Jeffrey Friedl\uFF08O&#39;</span>reilly <span class="token number">1997</span>\uFF09\u3002
Unix\u7CFB\u7EDF\u6240\u63D0\u4F9B\u7684\u624B\u518C\u9875\uFF08\u201Cman\u201D\uFF09\u4E5F\u4F1A\u6709\u6240\u5E2E\u52A9\uFF08\u8BD5\u4E00\u4E0B\u8FD9\u4E9B\u547D\u4EE4
\u201Cman sed\u201D\u3001\u201Cman regexp\u201D\uFF0C\u6216\u8005\u770B\u201Cman ed\u201D\u4E2D\u5173\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u90E8\u5206\uFF09\uFF0C\u4F46
\u624B\u518C\u63D0\u4F9B\u7684\u4FE1\u606F\u6BD4\u8F83\u201C\u62BD\u8C61\u201D\u2014\u2014\u8FD9\u4E5F\u662F\u5B83\u4E00\u76F4\u4E3A\u4EBA\u6240\u8BDF\u75C5\u7684\u3002\u4E0D\u8FC7\uFF0C\u5B83\u672C\u6765\u5C31\u4E0D
\u662F\u7528\u6765\u6559\u521D\u5B66\u8005\u5982\u4F55\u4F7F\u7528sed\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u6559\u6750\uFF0C\u800C\u53EA\u662F\u4E3A\u90A3\u4E9B\u719F\u6089\u8FD9\u4E9B\u5DE5\u5177\u7684\u4EBA
\u63D0\u4F9B\u7684\u4E00\u4E9B\u6587\u672C\u53C2\u8003\u3002

\u62EC\u53F7\u8BED\u6CD5\uFF1A\u524D\u9762\u7684\u4F8B\u5B50\u5BF9sed\u547D\u4EE4\u57FA\u672C\u4E0A\u90FD\u4F7F\u7528\u5355\u5F15\u53F7\uFF08<span class="token string">&#39;...&#39;</span>\uFF09\u800C\u975E\u53CC\u5F15\u53F7
\uFF08<span class="token string">&quot;...&quot;</span>\uFF09\u8FD9\u662F\u56E0\u4E3Ased\u901A\u5E38\u662F\u5728Unix\u5E73\u53F0\u4E0A\u4F7F\u7528\u3002\u5355\u5F15\u53F7\u4E0B\uFF0CUnix\u7684shell\uFF08\u547D\u4EE4
\u89E3\u91CA\u5668\uFF09\u4E0D\u4F1A\u5BF9\u7F8E\u5143\u7B26\uFF08$\uFF09\u548C\u540E\u5F15\u53F7\uFF08<span class="token variable"><span class="token variable">\`</span><span class="token punctuation">..</span>.<span class="token variable">\`</span></span>\uFF09\u8FDB\u884C\u89E3\u91CA\u548C\u6267\u884C\u3002\u800C\u5728\u53CC\u5F15\u53F7\u4E0B
\u7F8E\u5143\u7B26\u4F1A\u88AB\u5C55\u5F00\u4E3A\u53D8\u91CF\u6216\u53C2\u6570\u7684\u503C\uFF0C\u540E\u5F15\u53F7\u4E2D\u7684\u547D\u4EE4\u88AB\u6267\u884C\u5E76\u4EE5\u8F93\u51FA\u7684\u7ED3\u679C\u4EE3\u66FF
\u540E\u5F15\u53F7\u4E2D\u7684\u5185\u5BB9\u3002\u800C\u5728\u201Ccsh\u201D\u53CA\u5176\u884D\u751F\u7684shell\u4E2D\u4F7F\u7528\u611F\u53F9\u53F7\uFF08<span class="token operator">!</span>\uFF09\u65F6\u9700\u8981\u5728\u5176\u524D
\u9762\u52A0\u4E0A\u8F6C\u4E49\u7528\u7684\u53CD\u659C\u6760\uFF08\u5C31\u50CF\u8FD9\u6837\uFF1A<span class="token punctuation">\\</span><span class="token operator">!</span>\uFF09\u4EE5\u4FDD\u8BC1\u4E0A\u9762\u6240\u4F7F\u7528\u7684\u4F8B\u5B50\u80FD\u6B63\u5E38\u8FD0\u884C
\uFF08\u5305\u62EC\u4F7F\u7528\u5355\u5F15\u53F7\u7684\u60C5\u51B5\u4E0B\uFF09\u3002DOS\u7248\u672C\u7684Sed\u5219\u4E00\u5F8B\u4F7F\u7528\u53CC\u5F15\u53F7\uFF08<span class="token string">&quot;...&quot;</span>\uFF09\u800C\u4E0D\u662F
\u5F15\u53F7\u6765\u5708\u8D77\u547D\u4EE4\u3002

<span class="token string">&#39;\\t&#39;</span>\u7684\u7528\u6CD5\uFF1A\u4E3A\u4E86\u4F7F\u672C\u6587\u4FDD\u6301\u884C\u6587\u7B80\u6D01\uFF0C\u6211\u4EEC\u5728\u811A\u672C\u4E2D\u4F7F\u7528<span class="token string">&#39;\\t&#39;</span>\u6765\u8868\u793A\u4E00\u4E2A\u5236\u8868
\u7B26\u3002\u4F46\u662F\u73B0\u5728\u5927\u90E8\u5206\u7248\u672C\u7684sed\u8FD8\u4E0D\u80FD\u8BC6\u522B<span class="token string">&#39;\\t&#39;</span>\u7684\u7B80\u5199\u65B9\u5F0F\uFF0C\u56E0\u6B64\u5F53\u5728\u547D\u4EE4\u884C\u4E2D\u4E3A
\u811A\u672C\u8F93\u5165\u5236\u8868\u7B26\u65F6\uFF0C\u4F60\u5E94\u8BE5\u76F4\u63A5\u6309TAB\u952E\u6765\u8F93\u5165\u5236\u8868\u7B26\u800C\u4E0D\u662F\u8F93\u5165<span class="token string">&#39;\\t&#39;</span>\u3002\u4E0B\u5217\u7684\u5DE5
\u5177\u8F6F\u4EF6\u90FD\u652F\u6301<span class="token string">&#39;\\t&#39;</span>\u505A\u4E3A\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5B57\u5143\u6765\u8868\u793A\u5236\u8868\u7B26\uFF1Aawk\u3001perl\u3001HHsed\u3001
sedmod\u4EE5\u53CAGNU <span class="token function">sed</span> v3.02.80\u3002

\u4E0D\u540C\u7248\u672C\u7684SED\uFF1A\u4E0D\u540C\u7684\u7248\u672C\u95F4\u7684sed\u4F1A\u6709\u4E9B\u4E0D\u540C\u4E4B\u5904\uFF0C\u53EF\u4EE5\u60F3\u8C61\u5B83\u4EEC\u4E4B\u95F4\u5728\u8BED\u6CD5\u4E0A
\u4F1A\u6709\u5DEE\u5F02\u3002\u5177\u4F53\u800C\u8A00\uFF0C\u5B83\u4EEC\u4E2D\u5927\u90E8\u5206\u4E0D\u652F\u6301\u5728\u7F16\u8F91\u547D\u4EE4\u4E2D\u95F4\u4F7F\u7528\u6807\u7B7E\uFF08:name\uFF09\u6216\u5206
\u652F\u547D\u4EE4\uFF08b,t\uFF09\uFF0C\u9664\u975E\u662F\u653E\u5728\u90A3\u4E9B\u7684\u672B\u5C3E\u3002\u8FD9\u7BC7\u6587\u6863\u4E2D\u6211\u4EEC\u5C3D\u91CF\u9009\u7528\u4E86\u53EF\u79FB\u690D\u6027\u8F83\u9AD8
\u7684\u8BED\u6CD5\uFF0C\u4EE5\u4F7F\u5927\u591A\u6570\u7248\u672C\u7684sed\u7684\u7528\u6237\u90FD\u80FD\u4F7F\u7528\u8FD9\u4E9B\u811A\u672C\u3002\u4E0D\u8FC7GNU\u7248\u672C\u7684sed\u5141\u8BB8\u4F7F
\u7528\u66F4\u7B80\u6D01\u7684\u8BED\u6CD5\u3002\u60F3\u50CF\u4E00\u4E0B\u5F53\u8BFB\u8005\u770B\u5230\u4E00\u4E2A\u5F88\u957F\u7684\u547D\u4EE4\u65F6\u7684\u5FC3\u60C5\uFF1A

   <span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;/AAA/b&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;/BBB/b&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;/CCC/b&#39;</span> <span class="token parameter variable">-e</span> d

\u597D\u6D88\u606F\u662FGNU sed\u80FD\u8BA9\u547D\u4EE4\u66F4\u7D27\u51D1\uFF1A

   <span class="token function">sed</span> <span class="token string">&#39;/AAA/b;/BBB/b;/CCC/b;d&#39;</span>      <span class="token comment"># \u751A\u81F3\u53EF\u4EE5\u5199\u6210</span>
   <span class="token function">sed</span> <span class="token string">&#39;/AAA\\|BBB\\|CCC/b;d&#39;</span>

\u6B64\u5916\uFF0C\u8BF7\u6CE8\u610F\u867D\u7136\u8BB8\u591A\u7248\u672C\u7684sed\u63A5\u53D7\u8C61\u201C/one/ s/RE1/RE2/\u201D\u8FD9\u79CD\u5728<span class="token string">&#39;s&#39;</span>\u524D\u5E26\u6709\u7A7A
\u683C\u7684\u547D\u4EE4\uFF0C\u4F46\u8FD9\u4E9B\u7248\u672C\u4E2D\u6709\u4E9B\u5374\u4E0D\u63A5\u53D7\u8FD9\u6837\u7684\u547D\u4EE4:\u201C/one/<span class="token operator">!</span> s/RE1/RE2/\u201D\u3002\u8FD9\u65F6
\u53EA\u9700\u8981\u628A\u4E2D\u95F4\u7684\u7A7A\u683C\u53BB\u6389\u5C31\u884C\u4E86\u3002

\u901F\u5EA6\u4F18\u5316\uFF1A\u5F53\u7531\u4E8E\u67D0\u79CD\u539F\u56E0\uFF08\u6BD4\u5982\u8F93\u5165\u6587\u4EF6\u8F83\u5927\u3001\u5904\u7406\u5668\u6216\u786C\u76D8\u8F83\u6162\u7B49\uFF09\u9700\u8981\u63D0\u9AD8
\u547D\u4EE4\u6267\u884C\u901F\u5EA6\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u5728\u66FF\u6362\u547D\u4EE4\uFF08\u201Cs/<span class="token punctuation">..</span>./<span class="token punctuation">..</span>./\u201D\uFF09\u524D\u9762\u52A0\u4E0A\u5730\u5740\u8868\u8FBE\u5F0F\u6765
\u63D0\u9AD8\u901F\u5EA6\u3002\u4E3E\u4F8B\u6765\u8BF4\uFF1A

   <span class="token function">sed</span> <span class="token string">&#39;s/foo/bar/g&#39;</span> filename         <span class="token comment"># \u6807\u51C6\u66FF\u6362\u547D\u4EE4</span>
   <span class="token function">sed</span> <span class="token string">&#39;/foo/ s/foo/bar/g&#39;</span> filename   <span class="token comment"># \u901F\u5EA6\u66F4\u5FEB</span>
   <span class="token function">sed</span> <span class="token string">&#39;/foo/ s//bar/g&#39;</span> filename      <span class="token comment"># \u7B80\u5199\u5F62\u5F0F</span>

\u5F53\u53EA\u9700\u8981\u663E\u793A\u6587\u4EF6\u7684\u524D\u9762\u7684\u90E8\u5206\u6216\u9700\u8981\u5220\u9664\u540E\u9762\u7684\u5185\u5BB9\u65F6\uFF0C\u53EF\u4EE5\u5728\u811A\u672C\u4E2D\u4F7F\u7528\u201Cq\u201D
\u547D\u4EE4\uFF08\u9000\u51FA\u547D\u4EE4\uFF09\u3002\u5728\u5904\u7406\u5927\u7684\u6587\u4EF6\u65F6\uFF0C\u8FD9\u4F1A\u8282\u7701\u5927\u91CF\u65F6\u95F4\u3002\u56E0\u6B64\uFF1A

   <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;45,50p&#39;</span> filename           <span class="token comment"># \u663E\u793A\u7B2C45\u523050\u884C</span>
   <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;51q;45,50p&#39;</span> filename       <span class="token comment"># \u4E00\u6837\uFF0C\u4F46\u5FEB\u5F97\u591A</span>

\u5982\u679C\u4F60\u6709\u5176\u4ED6\u7684\u5355\u884C\u811A\u672C\u60F3\u4E0E\u5927\u5BB6\u5206\u4EAB\u6216\u8005\u4F60\u53D1\u73B0\u4E86\u672C\u6587\u6863\u4E2D\u9519\u8BEF\u7684\u5730\u65B9\uFF0C\u8BF7\u53D1\u7535
\u5B50\u90AE\u4EF6\u7ED9\u672C\u6587\u6863\u7684\u4F5C\u8005\uFF08Eric Pement\uFF09\u3002\u90AE\u4EF6\u4E2D\u8BF7\u8BB0\u5F97\u63D0\u4F9B\u4F60\u6240\u4F7F\u7528\u7684sed\u7248\u672C\u3001 
\u8BE5sed\u6240\u8FD0\u884C\u7684\u64CD\u4F5C\u7CFB\u7EDF\u53CA\u5BF9\u95EE\u9898\u7684\u9002\u5F53\u63CF\u8FF0\u3002\u672C\u6587\u6240\u6307\u7684\u5355\u884C\u811A\u672C\u6307\u547D\u4EE4\u884C\u7684\u957F
\u5EA6\u572865\u4E2A\u5B57\u7B26\u621665\u4E2A\u4EE5\u4E0B\u7684sed\u811A\u672C\u3014\u8BD1\u6CE81\u3015\u3002\u672C\u6587\u6863\u7684\u5404\u79CD\u811A\u672C\u662F\u7531\u4EE5\u4E0B\u6240\u5217\u4F5C
\u8005\u6240\u5199\u6216\u63D0\u4F9B\uFF1A

 Al Aab                               <span class="token comment"># \u5EFA\u7ACB\u4E86\u201Cseders\u201D\u90AE\u4EF6\u5217\u8868</span>
 Edgar Allen                          <span class="token comment"># \u8BB8\u591A\u65B9\u9762</span>
 Yiorgos Adamopoulos                  <span class="token comment"># \u8BB8\u591A\u65B9\u9762</span>
 Dale Dougherty                       <span class="token comment"># \u300Ased &amp; awk\u300B\u4F5C\u8005</span>
 Carlos Duarte                        <span class="token comment"># \u300Ado it with sed\u300B\u4F5C\u8005</span>
 Eric Pement                          <span class="token comment"># \u672C\u6587\u6863\u7684\u4F5C\u8005</span>
 Ken Pizzini                          <span class="token comment"># GNU sed v3.02 \u7684\u4F5C\u8005</span>
 S.G. Ravenhall                       <span class="token comment"># \u53BBhtml\u6807\u7B7E\u811A\u672C</span>
 Greg Ubben                           <span class="token comment"># \u6709\u8BF8\u591A\u8D21\u732E\u5E76\u63D0\u4F9B\u4E86\u8BB8\u591A\u5E2E\u52A9</span>
-------------------------------------------------------------------------

\u8BD1\u6CE81\uFF1A\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0Csed\u811A\u672C\u65E0\u8BBA\u591A\u957F\u90FD\u80FD\u5199\u6210\u5355\u884C\u7684\u5F62\u5F0F\uFF08\u901A\u8FC7<span class="token variable"><span class="token variable">\`</span>-e&#39;\u9009\u9879\u548C<span class="token variable">\`</span></span><span class="token punctuation">;</span>&#39;
\u53F7\uFF09\u2014\u2014\u53EA\u8981\u547D\u4EE4\u89E3\u91CA\u5668\u652F\u6301\uFF0C\u6240\u4EE5\u8FD9\u91CC\u8BF4\u7684\u5355\u884C\u811A\u672C\u9664\u4E86\u80FD\u5199\u6210\u4E00\u884C\u8FD8\u5BF9\u957F\u5EA6\u6709
\u6240\u9650\u5236\u3002\u56E0\u4E3A\u8FD9\u4E9B\u5355\u884C\u811A\u672C\u7684\u610F\u4E49\u4E0D\u5728\u4E8E\u5B83\u4EEC\u662F\u4EE5\u5355\u884C\u7684\u5F62\u5F0F\u51FA\u73B0\u3002\u800C\u662F\u8BA9\u7528\u6237\u80FD
\u65B9\u4FBF\u5730\u5728\u547D\u4EE4\u884C\u4E2D\u4F7F\u7528\u8FD9\u4E9B\u7D27\u51D1\u7684\u811A\u672C\u624D\u662F\u5176\u610F\u4E49\u6240\u5728\u3002

\u3000\u3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),i=[t];function l(c,o){return s(),a("div",null,i)}const d=n(p,[["render",l],["__file","sed.html.vue"]]);export{d as default};
