import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},i=e(`<h2 id="\u5E38\u7528\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u9009\u9879" aria-hidden="true">#</a> \u5E38\u7528\u9009\u9879</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-i</span>	\u5FFD\u7565\u5927\u5C0F\u5199
<span class="token parameter variable">-r</span>	\u9012\u5F52\u67E5\u627E\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u8FDB\u884C\u6587\u672C\u5339\u914D
<span class="token parameter variable">-l</span>	\u53EA\u663E\u793A\u5339\u914D\u6587\u4EF6\u6240\u5728\u7684\u6587\u4EF6\u540D
<span class="token parameter variable">-n</span>	\u663E\u793A\u5339\u914D\u6587\u4EF6\u6240\u5728\u6587\u4EF6\u7684\u884C\u53F7
<span class="token parameter variable">-A</span> NUM	\u663E\u793A\u5339\u914D\u6587\u672C\u540ENUM\u884C
<span class="token parameter variable">-B</span> NUM	\u663E\u793A\u5339\u914D\u6587\u672C\u524DNUM\u884C
<span class="token parameter variable">-C</span> NUM	\u663E\u793A\u5339\u914D\u6587\u672C\u524D\u540ENUM\u884C
<span class="token parameter variable">-v</span>	\u53CD\u8F6C\u5339\u914D\uFF0C\u5339\u914D\u4E0D\u5728\u6307\u5B9A\u6587\u672C\u7684\u884C
<span class="token parameter variable">-o</span>	\u53EA\u663E\u793A\u5339\u914D\u7684\u6587\u672C
<span class="token parameter variable">-c</span>	\u7EDF\u8BA1\u5339\u914D\u6587\u672C\u7684\u884C\u6570
<span class="token parameter variable">--color</span>	\u9AD8\u4EAE\u663E\u793A\u5339\u914D\u6587\u672C
<span class="token parameter variable">-h</span>    <span class="token comment"># \u4E0D\u663E\u793A\u6587\u4EF6\u540D</span>
<span class="token parameter variable">-i</span>    <span class="token comment"># \u5FFD\u7565\u5927\u5C0F\u5199</span>
<span class="token parameter variable">-l</span>    <span class="token comment"># \u53EA\u5217\u51FA\u5339\u914D\u884C\u6240\u5728\u6587\u4EF6\u7684\u6587\u4EF6\u540D</span>
<span class="token parameter variable">-n</span>    <span class="token comment"># \u5728\u6BCF\u4E00\u884C\u4E2D\u52A0\u4E0A\u76F8\u5BF9\u884C\u53F7</span>
<span class="token parameter variable">-s</span>    <span class="token comment"># \u65E0\u58F0\u64CD\u4F5C\u53EA\u663E\u793A\u62A5\u9519\uFF0C\u68C0\u67E5\u9000\u51FA\u72B6\u6001</span>
<span class="token parameter variable">-e</span>    <span class="token comment"># \u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F</span>
<span class="token parameter variable">-A3</span>   <span class="token comment"># \u6253\u5370\u5339\u914D\u884C\u548C\u4E0B\u4E09\u884C</span>
<span class="token parameter variable">-w</span>    <span class="token comment"># \u7CBE\u786E\u5339\u914D</span>
<span class="token parameter variable">-wc</span>   <span class="token comment"># \u7CBE\u786E\u5339\u914D\u6B21\u6570</span>
<span class="token parameter variable">-P</span>    <span class="token comment"># \u4F7F\u7528perl\u6B63\u5219\u8868\u8FBE\u5F0F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Search a file for a pattern</span>
<span class="token function">grep</span> pattern <span class="token function">file</span>

<span class="token comment"># Case insensitive search (with line numbers)</span>
<span class="token function">grep</span> <span class="token parameter variable">-in</span> pattern <span class="token function">file</span>

<span class="token comment"># Recursively grep for string &lt;pattern&gt; in folder:</span>
<span class="token function">grep</span> <span class="token parameter variable">-R</span> pattern folder

<span class="token comment">#grep\u9012\u5F52\u67E5\u627E/etc\u76EE\u5F55\u53CA\u5176\u5B50\u76EE\u5F55\u4E2D\u542B\u6709\u201Duser\u201C\u5B57\u7B26\u7684\u6587\u4EF6\uFF0C\u5E76\u663E\u793A\u6587\u4EF6\u4E0E\u5176\u542B\u6709\u201Duser\u201C\u5B57\u7B26\u4E32\u7684\u884C</span>
<span class="token function">grep</span> <span class="token parameter variable">-r</span> <span class="token string">&quot;user&quot;</span> /etc

<span class="token comment">#\u53EA\u5339\u914D\u4E00\u4E2A\u5355\u8BCD\uFF0C\u800C\u4E0D\u662F\u6700\u4E3A\u5355\u8BCD\u7684\u4E00\u90E8\u5206\u53BB\u5339\u914D</span>
<span class="token function">grep</span> <span class="token parameter variable">-w</span> user /etc/passwd

<span class="token comment">#\u67E5\u627E\u4E24\u4E2A\u5B57\u7B26\u4E32</span>
<span class="token function">grep</span> <span class="token string">&quot;user|USER&quot;</span> /etc/passwd

<span class="token comment">#\u53EA\u8F93\u51FA\u5305\u542B\u7684\u6587\u4EF6\u540D\u800C\u4E0D\u8F93\u51FA\u6587\u4EF6\u884C</span>
<span class="token function">grep</span> <span class="token parameter variable">-l</span> <span class="token string">&quot;user&quot;</span> /etc/*


<span class="token comment"># Read search patterns from a file (one per line)</span>
<span class="token function">grep</span> <span class="token parameter variable">-f</span> pattern_file <span class="token function">file</span>

<span class="token comment"># Find lines NOT containing pattern</span>
<span class="token function">grep</span> <span class="token parameter variable">-v</span> pattern <span class="token function">file</span>

<span class="token comment"># You can grep with regular expressions</span>
<span class="token function">grep</span> <span class="token string">&quot;^00&quot;</span> <span class="token function">file</span>  <span class="token comment">#Match lines starting with 00</span>
<span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}&quot;</span> <span class="token function">file</span>  <span class="token comment">#Find IP add</span>

<span class="token comment"># Find all files which match {pattern} in {directory}</span>
<span class="token comment"># This will show: &quot;file:line my research&quot;</span>
<span class="token function">grep</span> <span class="token parameter variable">-rnw</span> <span class="token string">&#39;directory&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;pattern&quot;</span>

<span class="token comment"># Exclude grep from your grepped output of ps.</span>
<span class="token comment"># Add [] to the first letter. Ex: sshd -&gt; [s]shd</span>
<span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;[h]ttpd&#39;</span>

<span class="token comment"># Colour in red {bash} and keep all other lines</span>
<span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token parameter variable">--color</span> <span class="token string">&#39;bash|$&#39;</span>

<span class="token comment">##cat\u662F\u7528\u4E8E\u67E5\u770B\u666E\u901A\u6587\u4EF6\u7684\u3002</span>
<span class="token function">cat</span> /etc/passwd

<span class="token comment">##zcat \u662F\u7528\u4E8E\u67E5\u770B\u538B\u7F29\u7684\u6587\u4EF6 </span>
<span class="token comment">##gzip \u5957\u4EF6\u5305\u542B\u8BB8\u591A\u53EF\u4EE5 \u201C\u5728\u539F\u5730\u201D \u5904\u7406\u538B\u7F29\u6587\u4EF6\u7684\u5B9E\u7528\u7A0B\u5E8F\u3002zcat\u3001zgrep\u3001zless\u3001zdiff \u7B49\u5B9E\u7528\u7A0B\u5E8F\u7684\u4F5C\u7528\u5206\u522B\u4E0E cat\u3001grep\u3001less \u548C diff \u76F8\u540C\uFF0C\u4F46\u662F\u5B83\u4EEC\u64CD\u4F5C\u538B\u7F29\u7684\u6587\u4EF6\u3002</span>
zcat web.log.gz <span class="token operator">|</span> <span class="token function">grep</span> aqzt.com <span class="token operator">|</span> <span class="token function">head</span>
 
<span class="token comment">###Grep &#39;OR&#39; \u6216\u64CD\u4F5C</span>
<span class="token function">grep</span> <span class="token string">&quot;pattern1\\|pattern2&quot;</span> file.txt
<span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;pattern1|pattern2&quot;</span> file.txt
<span class="token function">grep</span> <span class="token parameter variable">-e</span> pattern1 <span class="token parameter variable">-e</span> pattern2 file.txt
<span class="token function">egrep</span> <span class="token string">&quot;pattern1|pattern2&quot;</span> file.txt

<span class="token function">awk</span> <span class="token string">&#39;/pattern1|pattern2/&#39;</span> file.txt
<span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;/pattern1/b&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;/pattern2/b&#39;</span> <span class="token parameter variable">-e</span> d file.txt

<span class="token comment">#\u627E\u51FA\u6587\u4EF6\uFF08filename\uFF09\u4E2D\u5305\u542B123\u6216\u8005\u5305\u542Babc\u7684\u884C</span>
<span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;123|abc&#39;</span> filename 
<span class="token comment">#\u7528egrep\u540C\u6837\u53EF\u4EE5\u5B9E\u73B0</span>
<span class="token function">egrep</span> <span class="token string">&#39;123|abc&#39;</span> filename 
<span class="token comment">#awk \u7684\u5B9E\u73B0\u65B9\u5F0F</span>
<span class="token function">awk</span> <span class="token string">&#39;/123|abc/&#39;</span> filename 

<span class="token comment">###Grep &#39;AND&#39;  \u4E0E\u64CD\u4F5C</span>
<span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;pattern1.*pattern2&#39;</span> file.txt <span class="token comment"># in that order</span>
<span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;pattern1.*pattern2|pattern2.*pattern1&#39;</span> file.txt <span class="token comment"># in any order</span>
<span class="token function">grep</span> <span class="token string">&#39;pattern1&#39;</span> file.txt <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;pattern2&#39;</span> <span class="token comment"># in any order</span>

<span class="token function">awk</span> <span class="token string">&#39;/pattern1.*pattern2/&#39;</span> file.txt <span class="token comment"># in that order</span>
<span class="token function">awk</span> <span class="token string">&#39;/pattern1/ &amp;&amp; /pattern2/&#39;</span> file.txt <span class="token comment"># in any order</span>
<span class="token function">sed</span> <span class="token string">&#39;/pattern1.*pattern2/!d&#39;</span> file.txt <span class="token comment"># in that order</span>
<span class="token function">sed</span> <span class="token string">&#39;/pattern1/!d; /pattern2/!d&#39;</span> file.txt <span class="token comment"># in any order</span>

<span class="token comment">#\u663E\u793A\u65E2\u5339\u914D pattern1 \u53C8\u5339\u914D pattern2 \u7684\u884C\u3002</span>
<span class="token function">grep</span> pattern1 files <span class="token operator">|</span> <span class="token function">grep</span> pattern2 

<span class="token comment">###Grep &#39;NOT&#39; </span>
<span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&#39;pattern1&#39;</span> file.txt
<span class="token function">awk</span> <span class="token string">&#39;!/pattern1/&#39;</span> file.txt
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/pattern1/!p&#39;</span> file.txt

<span class="token comment">##\u5220\u9664\u4E24\u4E2A\u6587\u4EF6\u76F8\u540C\u90E8\u5206</span>
<span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-f</span> file1 file2 <span class="token operator">&amp;&amp;</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-f</span> file2 file1 

<span class="token comment">##\u8BA1\u7B97\u5E76\u96C6</span>
<span class="token function">sort</span> <span class="token parameter variable">-u</span> a.txt b.txt

<span class="token comment">##\u8BA1\u7B97\u4EA4\u96C6</span>
<span class="token function">grep</span> <span class="token parameter variable">-F</span> <span class="token parameter variable">-f</span> a.txt b.txt <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span>

<span class="token comment">##\u8BA1\u7B97\u5DEE\u96C6</span>
<span class="token function">grep</span> <span class="token parameter variable">-F</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-f</span> b.txt a.txt <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span>

<span class="token function">sort</span> a b b <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-u</span>  
<span class="token comment">#a b \u6392\u5E8F\uFF0C\u4E24\u4E2A\u7684\u4EA4\u96C6\u51FA\u73B0\u6B21\u5C31\u662F2 \u4E86\uFF0Ca b b \u518D\u6392\u5E8F\u3002b\u91CC\u9762\u7684\u6B21\u6570\uFF0C\u6700\u5C11\u662F2\u4E86\uFF0C\u4EA4\u96C6\u91CC\u9762\u7684\u662F3</span>
\u7136\u540E\u518Duniq <span class="token parameter variable">-u</span> \u53D6\u51FA\u73B0\u4E00\u6B21\u7684\uFF0C\u5C31\u662F\u60F3\u8981\u7684\u7ED3\u679C\u4E86

<span class="token comment">##\u5220\u9664\u4E24\u4E2A\u6587\u4EF6\u76F8\u540C\u90E8\u5206  \u5B9E\u7528comm</span>
<span class="token function">comm</span> <span class="token parameter variable">-3</span> file1 file2

<span class="token comment">##\u5220\u9664\u4E24\u4E2A\u6587\u4EF6\u76F8\u540C\u90E8\u5206  \u4F7F\u7528awk</span>
<span class="token function">awk</span> <span class="token string">&#39;{print NR, $0}&#39;</span> file1 file2 <span class="token operator">|</span><span class="token function">sort</span> -k2<span class="token operator">|</span><span class="token function">uniq</span> <span class="token parameter variable">-u</span> <span class="token parameter variable">-f</span> <span class="token number">1</span><span class="token operator">|</span><span class="token function">sort</span> -k1<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span>
<span class="token comment">##\u6216\u8005\uFF1A</span>
<span class="token function">awk</span> <span class="token string">&#39;{print $0}&#39;</span> file1 file2 <span class="token operator">|</span><span class="token function">sort</span><span class="token operator">|</span><span class="token function">uniq</span> <span class="token parameter variable">-u</span>

<span class="token comment">##\u5176\u4ED6\u64CD\u4F5C</span>
<span class="token comment">#\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u5730\u641C\u7D22\u3002\u9ED8\u8BA4\u60C5\u51B5\u533A\u5206\u5927\u5C0F\u5199\uFF0C</span>
<span class="token function">grep</span> <span class="token parameter variable">-i</span> pattern files 
<span class="token comment">#\u53EA\u5217\u51FA\u5339\u914D\u7684\u6587\u4EF6\u540D\uFF0C</span>
<span class="token function">grep</span> <span class="token parameter variable">-l</span> pattern files 
<span class="token comment">#\u5217\u51FA\u4E0D\u5339\u914D\u7684\u6587\u4EF6\u540D\uFF0C</span>
<span class="token function">grep</span> <span class="token parameter variable">-L</span> pattern files 
<span class="token comment">#\u53EA\u5339\u914D\u6574\u4E2A\u5355\u8BCD\uFF0C\u800C\u4E0D\u662F\u5B57\u7B26\u4E32\u7684\u4E00\u90E8\u5206\uFF08\u5982\u5339\u914D\u2018magic\u2019\uFF0C\u800C\u4E0D\u662F\u2018magical\u2019\uFF09\uFF0C</span>
<span class="token function">grep</span> <span class="token parameter variable">-w</span> pattern files 
<span class="token comment">#\u5339\u914D\u7684\u4E0A\u4E0B\u6587\u5206\u522B\u663E\u793A[number]\u884C\uFF0C</span>
<span class="token function">grep</span> <span class="token parameter variable">-C</span> number pattern files 

<span class="token comment">#grep -A \uFF1A\u663E\u793A\u5339\u914D\u884C\u548C\u4E4B\u540E\u7684\u51E0\u884C</span>
<span class="token comment">#-A -B -C \u540E\u9762\u90FD\u8DDF\u963F\u62C9\u4F2F\u6570\u5B57\uFF0C-A\u662F\u663E\u793A\u5339\u914D\u540E\u548C\u5B83\u540E\u9762\u7684n\u884C\u3002-B\u662F\u663E\u793A\u5339\u914D\u884C\u548C\u5B83\u524D\u9762\u7684n\u884C\u3002-C\u662F\u5339\u914D\u884C\u548C\u5B83\u524D\u540E\u5404n\u884C\u3002\u603B\u4F53\u6765\u8BF4\uFF0C-C\u8986\u76D6\u9762\u6700\u5927\u3002</span>
<span class="token function">grep</span> <span class="token parameter variable">-A</span> <span class="token number">5</span> wikipedia files.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[i];function l(r,c){return s(),a("div",null,p)}const v=n(t,[["render",l],["__file","grep.html.vue"]]);export{v as default};
