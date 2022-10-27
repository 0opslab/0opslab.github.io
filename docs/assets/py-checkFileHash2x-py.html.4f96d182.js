import{_ as n,o as s,c as a,e as t}from"./app.a667bd71.js";const p={},e=t(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#!/usr/bin/python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token keyword">import</span> getopt
<span class="token keyword">import</span> hashlib
<span class="token keyword">import</span> sys
<span class="token keyword">import</span> os
<span class="token keyword">import</span> time

<span class="token comment"># \`\`\`ops</span>
<span class="token comment"># title:\u57FA\u4E8Epython2\u7684\u6587\u4EF6hash\u53D8\u5316\u68C0\u67E5\u811A\u672C</span>
<span class="token comment"># descr:</span>
<span class="token comment"># \`\`\`</span>
_FILE_SLIM <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span>
<span class="token comment"># opts, args = getopt.getopt(sys.argv[1:], &quot;i:o:&quot;)</span>
<span class="token comment">#</span>
<span class="token comment"># fileInPath = &quot;&quot;</span>
<span class="token comment"># fileOutPath = &quot;&quot;</span>
<span class="token comment"># for op, value in opts:</span>
<span class="token comment">#     if op == &quot;-i&quot;:</span>
<span class="token comment">#         fileInPath = value</span>
<span class="token comment">#     elif op == &quot;-o&quot;:</span>
<span class="token comment">#         fileOutPath = value</span>
<span class="token comment">#</span>
<span class="token comment"># if fileInPath == &quot;&quot;:</span>
<span class="token comment">#     print &quot;\u8F93\u5165\u76EE\u5F55\u4E3A\u7A7A\uFF0C\u7A0B\u5E8F\u7ED3\u675F&quot;</span>
<span class="token comment">#     os._exit(0)</span>
<span class="token comment">#</span>
<span class="token comment"># if fileOutPath == &quot;&quot;:</span>
<span class="token comment">#     fileOutPath = &quot;./result_file.txt&quot;</span>
fileInPath <span class="token operator">=</span> <span class="token string">&quot;/webapp07/nfs/sec_lqlog/69_file_hash_.log&quot;</span>
filePaths <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;/webapp01/www/ydb3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/webapp02/qhwebapps/qhmcc_client9681&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/webapp02/qhwebapps/qhmcc_client9682&#39;</span><span class="token punctuation">,</span>
             <span class="token string">&#39;/webapp02/qhwebapps/qhmcc_manager&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/webapp02/qhwebapps/qhmcc_manager9882&#39;</span><span class="token punctuation">,</span>
             <span class="token string">&#39;/webapp02/qhwebapps/qhmcc_wap9781&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/webapp02/qhwebapps/qhmcc_wap9782&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/webapp02/webapps&#39;</span><span class="token punctuation">]</span>
<span class="token comment"># filePaths = [&quot;/webapp01/www/ydb3/qhmccClientWap/2018/gg/images&quot;]</span>
nowTime <span class="token operator">=</span> time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y%m%d_%H%M%S&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
fileOutPath <span class="token operator">=</span> <span class="token string">&quot;/webapp07/nfs/sec_lqlog/69_check_hash_&quot;</span> <span class="token operator">+</span> nowTime <span class="token operator">+</span> <span class="token string">&quot;.log&quot;</span>


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

    <span class="token comment"># result = str(hmd5.hexdigest())</span>
    <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>hmd5<span class="token punctuation">.</span>hexdigest<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">wirter</span><span class="token punctuation">(</span>file_and_hash<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u5199\u6587\u4EF6</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>fileOutPath<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>file_and_hash <span class="token operator">+</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>


<span class="token comment"># for fpathe, dirs, fs in os.walk(fileInPath):</span>
<span class="token comment">#     for f in fs:</span>
<span class="token comment">#         file_hash = File_md5(os.path.join(fpathe, f))</span>
<span class="token comment">#</span>
<span class="token comment">#         print file_is_hash</span>
<span class="token comment">#         wirter(file_is_hash)</span>
wirter<span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
one_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
two_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>fileInPath<span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    <span class="token keyword">for</span> line <span class="token keyword">in</span> f<span class="token punctuation">:</span>
        one_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token builtin">dir</span> <span class="token keyword">in</span> filePaths<span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token string">&quot;\u5F00\u59CB\u8BA1\u7B97=========&gt;&quot;</span> <span class="token operator">+</span> <span class="token builtin">dir</span>
    <span class="token keyword">for</span> fpathe<span class="token punctuation">,</span> dirs<span class="token punctuation">,</span> fs <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span><span class="token builtin">dir</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> f <span class="token keyword">in</span> fs<span class="token punctuation">:</span>
            <span class="token keyword">try</span><span class="token punctuation">:</span>
                file_hash <span class="token operator">=</span> File_md5<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>fpathe<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">)</span>
                file_is_hash <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>fpathe<span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;|&quot;</span> <span class="token operator">+</span> file_hash
                two_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>file_is_hash<span class="token punctuation">)</span>
            <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
                <span class="token keyword">pass</span>

difference_one <span class="token operator">=</span> <span class="token punctuation">[</span>v <span class="token keyword">for</span> v <span class="token keyword">in</span> one_list <span class="token keyword">if</span> v <span class="token keyword">not</span> <span class="token keyword">in</span> two_list<span class="token punctuation">]</span>
difference_two <span class="token operator">=</span> <span class="token punctuation">[</span>v <span class="token keyword">for</span> v <span class="token keyword">in</span> two_list <span class="token keyword">if</span> v <span class="token keyword">not</span> <span class="token keyword">in</span> one_list<span class="token punctuation">]</span>
<span class="token keyword">for</span> one <span class="token keyword">in</span> difference_one<span class="token punctuation">:</span>
    nowTime <span class="token operator">=</span> time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y%m%d_%H%M%S&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    wirter<span class="token punctuation">(</span>one <span class="token operator">+</span> <span class="token string">&quot;|&quot;</span> <span class="token operator">+</span> nowTime<span class="token operator">+</span><span class="token string">&quot;|\u6587\u4EF6\u88AB\u5220\u9664&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> two <span class="token keyword">in</span> difference_two<span class="token punctuation">:</span>
    nowTime <span class="token operator">=</span> time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y%m%d_%H%M%S&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    wirter<span class="token punctuation">(</span>two <span class="token operator">+</span> <span class="token string">&quot;|&quot;</span> <span class="token operator">+</span> nowTime <span class="token operator">+</span> <span class="token string">&quot;|\u65B0\u589E\u6587\u4EF6&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token string">&quot;69_SUCCESS&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function i(c,l){return s(),a("div",null,o)}const k=n(p,[["render",i],["__file","py-checkFileHash2x-py.html.vue"]]);export{k as default};
