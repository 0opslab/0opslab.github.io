import{_ as n,o as a,c as s,e}from"./app.a667bd71.js";const t={},p=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> zxvpf gz.tar.gz <span class="token parameter variable">-C</span> \u653E\u5230\u6307\u5B9A\u76EE\u5F55 \u5305\u4E2D\u7684\u76EE\u5F55       <span class="token comment"># \u89E3\u5305tar.gz \u4E0D\u6307\u5B9A\u76EE\u5F55\u5219\u5168\u89E3\u538B</span>
<span class="token function">tar</span> zcvpf /<span class="token variable">$path</span>/gz.tar.gz * <span class="token comment"># \u6253\u5305gz \u6CE8\u610F*\u6700\u597D\u7528\u76F8\u5BF9\u8DEF\u5F84</span>
<span class="token function">tar</span> zcf /<span class="token variable">$path</span>/gz.tar.gz *   <span class="token comment"># \u6253\u5305\u6B63\u786E\u4E0D\u63D0\u793A</span>
<span class="token function">tar</span> ztvpf gz.tar.gz          <span class="token comment"># \u67E5\u770Bgz</span>
<span class="token function">tar</span> xvf <span class="token number">1</span>.tar <span class="token parameter variable">-C</span> \u76EE\u5F55        <span class="token comment"># \u89E3\u5305tar</span>
<span class="token function">tar</span> <span class="token parameter variable">-cvf</span> <span class="token number">1</span>.tar *             <span class="token comment"># \u6253\u5305tar</span>
<span class="token function">tar</span> tvf <span class="token number">1</span>.tar                <span class="token comment"># \u67E5\u770Btar</span>
<span class="token function">tar</span> <span class="token parameter variable">-rvf</span> <span class="token number">1</span>.tar \u6587\u4EF6\u540D        <span class="token comment"># \u7ED9tar\u8FFD\u52A0\u6587\u4EF6</span>
<span class="token function">tar</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span>/home/dmtsai <span class="token parameter variable">-zcvf</span> myfile.tar.gz /home/* /etc      <span class="token comment"># \u6253\u5305/home, /etc \uFF0C\u4F46\u6392\u9664 /home/dmtsai</span>
<span class="token function">tar</span> <span class="token parameter variable">-N</span> <span class="token string">&quot;2005/06/01&quot;</span> <span class="token parameter variable">-zcvf</span> home.tar.gz /home      <span class="token comment"># \u5728 /home \u5F53\u4E2D\uFF0C\u6BD4 2005/06/01 \u65B0\u7684\u6587\u4EF6\u624D\u5907\u4EFD</span>
<span class="token function">tar</span> <span class="token parameter variable">-zcvfh</span> home.tar.gz /home                     <span class="token comment"># \u6253\u5305\u76EE\u5F55\u4E2D\u5305\u62EC\u8FDE\u63A5\u76EE\u5F55</span>
zgrep \u5B57\u7B26 <span class="token number">1</span>.gz              <span class="token comment"># \u67E5\u770B\u538B\u7F29\u5305\u4E2D\u6587\u4EF6\u5B57\u7B26\u884C</span>
<span class="token function">bzip2</span>  <span class="token parameter variable">-dv</span> <span class="token number">1</span>.tar.bz2         <span class="token comment"># \u89E3\u538Bbzip2</span>
<span class="token function">bzip2</span> <span class="token parameter variable">-v</span> <span class="token number">1</span>.tar               <span class="token comment"># bzip2\u538B\u7F29</span>
bzcat                        <span class="token comment"># \u67E5\u770Bbzip2</span>
<span class="token function">gzip</span> A                       <span class="token comment"># \u76F4\u63A5\u538B\u7F29\u6587\u4EF6 # \u538B\u7F29\u540E\u6E90\u6587\u4EF6\u6D88\u5931</span>
gunzip A.gz                  <span class="token comment"># \u76F4\u63A5\u89E3\u538B\u6587\u4EF6 # \u89E3\u538B\u540E\u6E90\u6587\u4EF6\u6D88\u5931</span>
<span class="token function">gzip</span> <span class="token parameter variable">-dv</span> <span class="token number">1</span>.tar.gz            <span class="token comment"># \u89E3\u538Bgzip\u5230tar</span>
<span class="token function">gzip</span> <span class="token parameter variable">-v</span> <span class="token number">1</span>.tar                <span class="token comment"># \u538B\u7F29tar\u5230gz</span>
<span class="token function">unzip</span> zip.zip                <span class="token comment"># \u89E3\u538Bzip</span>
<span class="token function">zip</span> zip.zip *                <span class="token comment"># \u538B\u7F29zip</span>
<span class="token comment"># rar3.6\u4E0B\u8F7D:  http://www.rarsoft.com/rar/rarlinux-3.6.0.tar.gz</span>
<span class="token comment"># \u538B\u7F29\u6587\u4EF6\u4E3Arar\u5305</span>
<span class="token function">rar</span> a rar.rar *.jpg
<span class="token comment"># \u89E3\u538Brar\u5305</span>
<span class="token function">unrar</span> x rar.rar
<span class="token comment"># 7z\u538B\u7F29</span>
7z a 7z.7z *
<span class="token comment"># 7z\u89E3\u538B</span>
7z e 7z.7z
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[p];function l(i,r){return a(),s("div",null,c)}const m=n(t,[["render",l],["__file","bak.html.vue"]]);export{m as default};
