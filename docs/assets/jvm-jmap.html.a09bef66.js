import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const p={},t=e(`<p>Java Memory Map\u3002\u4E3B\u8981\u7528\u4E8E\u6253\u5370\u6307\u5B9AJava\u8FDB\u7A0B(\u6216\u6838\u5FC3\u6587\u4EF6\u3001\u8FDC\u7A0B\u8C03\u8BD5\u670D\u52A1\u5668)\u7684\u5171\u4EAB\u5BF9\u8C61\u5185\u5B58\u6620\u5C04\u6216\u5806\u5185\u5B58\u7EC6\u8282\u3002jmap\u547D\u4EE4\u53EF\u4EE5\u83B7\u5F97\u8FD0\u884C\u4E2D\u7684jvm\u7684\u5806\u7684\u5FEB\u7167\uFF0C\u4ECE\u800C\u53EF\u4EE5\u79BB\u7EBF\u5206\u6790\u5806\uFF0C\u4EE5\u68C0\u67E5\u5185\u5B58\u6CC4\u6F0F\uFF0C\u68C0\u67E5\u4E00\u4E9B\u4E25\u91CD\u5F71\u54CD\u6027\u80FD\u7684\u5927\u5BF9\u8C61\u7684\u521B\u5EFA\uFF0C\u68C0\u67E5\u7CFB\u7EDF\u4E2D\u4EC0\u4E48\u5BF9\u8C61\u6700\u591A\uFF0C\u5404\u79CD\u5BF9\u8C61\u6240\u5360\u5185\u5B58\u7684\u5927\u5C0F\u7B49\u7B49\u3002\u53EF\u4EE5\u4F7F\u7528jmap\u751F\u6210Heap Dump\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jmap <span class="token punctuation">[</span> options <span class="token punctuation">]</span> pid
jmap <span class="token punctuation">[</span> options <span class="token punctuation">]</span> executable core
jmap <span class="token punctuation">[</span> options <span class="token punctuation">]</span> <span class="token punctuation">[</span> pid <span class="token punctuation">]</span> server-id@ <span class="token punctuation">]</span> remote-hostname-or-IP

pid:\u76EE\u6807\u8FDB\u7A0B\u7684PID\uFF0C\u8FDB\u7A0B\u7F16\u53F7\uFF0C\u53EF\u4EE5\u91C7\u7528ps <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">java</span> \u67E5\u770Bjava\u8FDB\u7A0B\u7684PID<span class="token punctuation">;</span>
executable:\u4EA7\u751Fcore dump\u7684java\u53EF\u6267\u884C\u7A0B\u5E8F<span class="token punctuation">;</span>
core:\u5C06\u88AB\u6253\u5370\u4FE1\u606F\u7684core dump\u6587\u4EF6<span class="token punctuation">;</span>
remote-hostname-or-IP:\u8FDC\u7A0Bdebug\u670D\u52A1\u7684\u4E3B\u673A\u540D\u6216ip<span class="token punctuation">;</span>
server-id:\u552F\u4E00id,\u5047\u5982\u4E00\u53F0\u4E3B\u673A\u4E0A\u591A\u4E2A\u8FDC\u7A0Bdebug\u670D\u52A1<span class="token punctuation">;</span>

options\u53C2\u6570
-dump:<span class="token punctuation">[</span>live,<span class="token punctuation">]</span> <span class="token assign-left variable">format</span><span class="token operator">=</span>b, <span class="token assign-left variable">file</span><span class="token operator">=</span>filename
-dump:<span class="token punctuation">[</span>live,<span class="token punctuation">]</span>format<span class="token operator">=</span>b,file<span class="token operator">=</span> \u4F7F\u7528hprof\u4E8C\u8FDB\u5236\u5F62\u5F0F,\u8F93\u51FAjvm\u7684heap\u5185\u5BB9\u5230\u6587\u4EF6<span class="token operator">=</span>.  live\u5B50\u9009\u9879\u662F\u53EF\u9009\u7684\uFF0C\u5047\u5982\u6307\u5B9Alive\u9009\u9879,\u90A3\u4E48\u53EA\u8F93\u51FA\u6D3B\u7684\u5BF9\u8C61\u5230\u6587\u4EF6.


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> \u5E38\u7528\u5B9E\u4F8B</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u67E5\u770B\u5185\u5B58\u4F7F\u7528\u60C5\u51B5</span>
jmap \u2010heap <span class="token number">4728</span>

<span class="token comment">#\u67E5\u770B\u6240\u6709\u5BF9\u8C61\uFF0C\u5305\u62EC\u6D3B\u8DC3\u4EE5\u53CA\u975E\u6D3B\u8DC3\u7684</span>
jmap \u2010histo <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token function">more</span>

<span class="token comment">#\u67E5\u770B\u6D3B\u8DC3\u5BF9\u8C61</span>
jmap \u2010histo:live <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token function">more</span>

<span class="token comment">#\u5C06\u5185\u5B58\u4F7F\u7528\u60C5\u51B5dump\u5230\u6587\u4EF6\u4E2D</span>
jmap <span class="token parameter variable">-dump:format</span><span class="token operator">=</span>b,file<span class="token operator">=</span>dump_tomcat_4728.dat <span class="token number">4728</span>
<span class="token comment"># \u901A\u8FC7jhat\u5BF9dump\u6587\u4EF6\u8FDB\u884C\u5206\u6790</span>
jhat \u2010port <span class="token operator">&lt;</span>port<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
jhat <span class="token parameter variable">-port</span> <span class="token number">9999</span> dump_tomcat_4728.dat

<span class="token comment">#\u5373\u5C06\u5783\u573E\u56DE\u6536\u5BF9\u8C61\u4E2A\u6570</span>
jmap <span class="token parameter variable">-finalizerinfo</span> <span class="token number">32417</span>

<span class="token comment">#\u6253\u5370Java\u5806\u7684\u7C7B\u52A0\u8F7D\u5668\u7EDF\u8BA1\u4FE1\u606F</span>
jmap <span class="token parameter variable">-clstats</span> <span class="token number">21168</span>

jmap <span class="token parameter variable">-permstat</span> <span class="token number">19570</span>

<span class="token comment"># \u6253\u5370\u7B49\u5F85\u56DE\u6536\u7684\u5BF9\u8C61\u4FE1\u606F</span>
jmap <span class="token parameter variable">-finalizerinfo</span> <span class="token number">21168</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5806\u6808\u6982\u8981\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u5806\u6808\u6982\u8981\u4FE1\u606F" aria-hidden="true">#</a> \u5806\u6808\u6982\u8981\u4FE1\u606F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Heap Configuration:<span class="token comment">#\u5806\u5185\u5B58\u521D\u59CB\u5316\u914D\u7F6E</span>
   MinHeapFreeRatio <span class="token operator">=</span> <span class="token number">40</span>  <span class="token comment">#-XX:MinHeapFreeRatio\u8BBE\u7F6EJVM\u5806\u6700\u5C0F\u7A7A\u95F2\u6BD4\u7387  </span>
   MaxHeapFreeRatio <span class="token operator">=</span> <span class="token number">70</span>  <span class="token comment">#-XX:MaxHeapFreeRatio\u8BBE\u7F6EJVM\u5806\u6700\u5927\u7A7A\u95F2\u6BD4\u7387  </span>
   MaxHeapSize      <span class="token operator">=</span> <span class="token number">268435456</span><span class="token punctuation">(</span><span class="token number">256.0</span><span class="token punctuation">)</span><span class="token comment">#-XX:MaxHeapSize=\u8BBE\u7F6EJVM\u5806\u7684\u6700\u5927\u5927\u5C0F  </span>
   NewSize          <span class="token operator">=</span> <span class="token number">1048576</span> <span class="token punctuation">(</span><span class="token number">1</span>.0MB<span class="token punctuation">)</span> <span class="token comment">#-XX:NewSize=\u8BBE\u7F6EJVM\u5806\u7684\u2018\u65B0\u751F\u4EE3\u2019\u7684\u9ED8\u8BA4\u5927\u5C0F  </span>
   MaxNewSize       <span class="token operator">=</span> <span class="token number">4294901760</span> <span class="token punctuation">(</span><span class="token number">4095</span>.9375MB<span class="token punctuation">)</span> <span class="token comment">#-XX:MaxNewSize=\u8BBE\u7F6EJVM\u5806\u7684\u2018\u65B0\u751F\u4EE3\u2019\u7684\u6700\u5927\u5927\u5C0F </span>
   OldSize          <span class="token operator">=</span> <span class="token number">4194304</span> <span class="token punctuation">(</span><span class="token number">4</span>.0MB<span class="token punctuation">)</span> <span class="token comment">#-XX:OldSize=\u8BBE\u7F6EJVM\u5806\u7684\u2018\u8001\u751F\u4EE3\u2019\u7684\u5927\u5C0F  </span>
   NewRatio         <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">#-XX:NewRatio=:\u2018\u65B0\u751F\u4EE3\u2019\u548C\u2018\u8001\u751F\u4EE3\u2019\u7684\u5927\u5C0F\u6BD4\u7387  </span>
   SurvivorRatio    <span class="token operator">=</span> <span class="token number">8</span> <span class="token comment">#-XX:SurvivorRatio=\u8BBE\u7F6E\u5E74\u8F7B\u4EE3\u4E2DEden\u533A\u4E0ESurvivor\u533A\u7684\u5927\u5C0F\u6BD4\u503C  </span>
   PermSize         <span class="token operator">=</span> <span class="token number">12582912</span> <span class="token punctuation">(</span><span class="token number">12</span>.0MB<span class="token punctuation">)</span> <span class="token comment">#-XX:PermSize=&lt;value&gt;:\u8BBE\u7F6EJVM\u5806\u7684\u2018\u6C38\u751F\u4EE3\u2019\u7684\u521D\u59CB\u5927\u5C0F  </span>
   MaxPermSize      <span class="token operator">=</span> <span class="token number">67108864</span> <span class="token punctuation">(</span><span class="token number">64</span>.0MB<span class="token punctuation">)</span> <span class="token comment">#-XX:MaxPermSize=&lt;value&gt;:\u8BBE\u7F6EJVM\u5806\u7684\u2018\u6C38\u751F\u4EE3\u2019\u7684\u6700\u5927\u5927\u5C0F</span>
Heap Usage:  
PS Young Generation  
Eden Space:<span class="token comment">#Eden\u533A\u5185\u5B58\u5206\u5E03  </span>
   capacity <span class="token operator">=</span> <span class="token number">71630848</span> <span class="token punctuation">(</span><span class="token number">68</span>.3125MB<span class="token punctuation">)</span>
   used     <span class="token operator">=</span> <span class="token number">4272376</span> <span class="token punctuation">(</span><span class="token number">4</span>.074455261230469MB<span class="token punctuation">)</span>
   <span class="token function">free</span>     <span class="token operator">=</span> <span class="token number">67358472</span> <span class="token punctuation">(</span><span class="token number">64</span>.23804473876953MB<span class="token punctuation">)</span>
   <span class="token number">5.964435881032708</span>% used
From Space:<span class="token comment">#\u5176\u4E2D\u4E00\u4E2ASurvivor\u533A\u7684\u5185\u5B58\u5206\u5E03  </span>
   capacity <span class="token operator">=</span> <span class="token number">8912896</span> <span class="token punctuation">(</span><span class="token number">8</span>.5MB<span class="token punctuation">)</span>
   used     <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0</span>.0MB<span class="token punctuation">)</span>
   <span class="token function">free</span>     <span class="token operator">=</span> <span class="token number">8912896</span> <span class="token punctuation">(</span><span class="token number">8</span>.5MB<span class="token punctuation">)</span>
   <span class="token number">0.0</span>% used
To Space:<span class="token comment">#\u53E6\u4E00\u4E2ASurvivor\u533A\u7684\u5185\u5B58\u5206\u5E03  </span>
   capacity <span class="token operator">=</span> <span class="token number">8912896</span> <span class="token punctuation">(</span><span class="token number">8</span>.5MB<span class="token punctuation">)</span>
       used     <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0</span>.0MB<span class="token punctuation">)</span>
   <span class="token function">free</span>     <span class="token operator">=</span> <span class="token number">8912896</span> <span class="token punctuation">(</span><span class="token number">8</span>.5MB<span class="token punctuation">)</span>
   <span class="token number">0.0</span>% used
PS Perm Generation<span class="token comment">#\u5F53\u524D\u7684 \u201C\u6C38\u751F\u4EE3\u201D \u5185\u5B58\u5206\u5E03  </span>
   capacity <span class="token operator">=</span> <span class="token number">59506688</span> <span class="token punctuation">(</span><span class="token number">56</span>.75MB<span class="token punctuation">)</span>
   used     <span class="token operator">=</span> <span class="token number">59312368</span> <span class="token punctuation">(</span><span class="token number">56</span>.56468200683594MB<span class="token punctuation">)</span>
   <span class="token function">free</span>     <span class="token operator">=</span> <span class="token number">194320</span> <span class="token punctuation">(</span><span class="token number">0</span>.1853179931640625MB<span class="token punctuation">)</span>
   <span class="token number">99.67344847019548</span>% used
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[t];function i(l,c){return s(),a("div",null,o)}const u=n(p,[["render",i],["__file","jvm-jmap.html.vue"]]);export{u as default};
