import{_ as n,o as s,c as a,e as p}from"./app.a667bd71.js";const t={},e=p(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#!usr/bin/python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token keyword">import</span> getopt
<span class="token keyword">import</span> hashlib
<span class="token keyword">import</span> sys
<span class="token keyword">import</span> os

<span class="token comment"># \`\`\`ops</span>
<span class="token comment"># title:\u57FA\u4E8Epython2\u7684\u83B7\u53D6\u6587\u4EF6hash\u7684\u811A\u672C</span>
<span class="token comment"># descr:</span>
<span class="token comment"># \`\`\`</span>
<span class="token comment"># # fileInPath = &quot;&quot;</span>
_FILE_SLIM <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span>

filePaths <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;/webapp01/www/ydb3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/webapp02/qhwebapps/qhmcc_client9681&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/webapp02/qhwebapps/qhmcc_client9682&#39;</span><span class="token punctuation">,</span>
             <span class="token string">&#39;/webapp02/qhwebapps/qhmcc_manager&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/webapp02/qhwebapps/qhmcc_manager9882&#39;</span><span class="token punctuation">,</span>
             <span class="token string">&#39;/webapp02/qhwebapps/qhmcc_wap9781&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/webapp02/qhwebapps/qhmcc_wap9782&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/webapp02/webapps&#39;</span><span class="token punctuation">]</span>

<span class="token comment"># if fileOutPath == &quot;&quot;:</span>
<span class="token comment">#     fileOutPath = &quot;/webapp07/nfs/sec_lqlog/68_check_hash&quot;++&quot;.log&quot;</span>
fileOutPath <span class="token operator">=</span> <span class="token string">&quot;/webapp07/nfs/sec_lqlog/69_file_hash_.log&quot;</span>


<span class="token keyword">def</span> <span class="token function">File_md5</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
    calltimes <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># \u5206\u7247\u7684\u4E2A\u6570</span>
    hmd5 <span class="token operator">=</span> hashlib<span class="token punctuation">.</span>md5<span class="token punctuation">(</span><span class="token punctuation">)</span>
    fp <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&quot;rb&quot;</span><span class="token punctuation">)</span>
    f_size <span class="token operator">=</span> os<span class="token punctuation">.</span>stat<span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">.</span>st_size  <span class="token comment"># \u5F97\u5230\u6587\u4EF6\u7684\u5927\u5C0F</span>
    result <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token keyword">if</span> f_size <span class="token operator">&gt;</span> _FILE_SLIM<span class="token punctuation">:</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>f_size <span class="token operator">&gt;</span> _FILE_SLIM<span class="token punctuation">)</span><span class="token punctuation">:</span>
            hmd5<span class="token punctuation">.</span>update<span class="token punctuation">(</span>fp<span class="token punctuation">.</span>read<span class="token punctuation">(</span>_FILE_SLIM<span class="token punctuation">)</span><span class="token punctuation">)</span>
            f_size <span class="token operator">/=</span> _FILE_SLIM
            calltimes <span class="token operator">+=</span> <span class="token number">1</span>  <span class="token comment"># delete    #\u6587\u4EF6\u5927\u4E8E100M\u65F6\u8FDB\u884C\u5206\u7247\u5904\u7406</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>f_size <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span>f_size <span class="token operator">&lt;=</span> _FILE_SLIM<span class="token punctuation">)</span><span class="token punctuation">:</span>
            hmd5<span class="token punctuation">.</span>update<span class="token punctuation">(</span>fp<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        hmd5<span class="token punctuation">.</span>update<span class="token punctuation">(</span>fp<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>hmd5<span class="token punctuation">.</span>hexdigest<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">wirter</span><span class="token punctuation">(</span>file_and_hash<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u5199\u6587\u4EF6</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>fileOutPath<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>file_and_hash <span class="token operator">+</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">for</span> <span class="token builtin">dir</span> <span class="token keyword">in</span> filePaths<span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token string">&quot;\u5F00\u59CB\u8BA1\u7B97=========&gt;&quot;</span> <span class="token operator">+</span> <span class="token builtin">dir</span>
    <span class="token keyword">for</span> fpathe<span class="token punctuation">,</span> dirs<span class="token punctuation">,</span> fs <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span><span class="token builtin">dir</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> f <span class="token keyword">in</span> fs<span class="token punctuation">:</span>
            <span class="token keyword">try</span><span class="token punctuation">:</span>
                file_hash <span class="token operator">=</span> File_md5<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>fpathe<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">)</span>
                file_is_hash <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>fpathe<span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;|&quot;</span> <span class="token operator">+</span> file_hash
                <span class="token keyword">print</span> file_is_hash
                wirter<span class="token punctuation">(</span>file_is_hash<span class="token punctuation">)</span>
            <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
                <span class="token keyword">pass</span>

<span class="token keyword">print</span> <span class="token string">&quot;69_SUCCESS&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","py-getFileHash2x-py.html.vue"]]);export{k as default};
