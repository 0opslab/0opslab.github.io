import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<p>\u4E3B\u8981\u5229\u7528JVM\u5185\u5EFA\u7684\u6307\u4EE4\u5BF9Java\u5E94\u7528\u7A0B\u5E8F\u7684\u8D44\u6E90\u548C\u6027\u80FD\u8FDB\u884C\u5B9E\u65F6\u7684\u547D\u4EE4\u884C\u7684\u76D1\u63A7\u3002jstat\u5DE5\u5177\u53EF\u4EE5\u67E5\u770B\u5806\u5185\u5B58\u5404\u90E8\u5206\u7684\u4F7F\u7528\u91CF\uFF0C\u4EE5\u53CA\u52A0\u8F7D\u7C7B\u7684\u6570\u91CF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jstat <span class="token punctuation">[</span>-\u547D\u4EE4\u9009\u9879<span class="token punctuation">]</span> <span class="token punctuation">[</span>vmid<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u95F4\u9694\u65F6\u95F4/\u6BEB\u79D2<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u67E5\u8BE2\u6B21\u6570<span class="token punctuation">]</span>

jstat <span class="token parameter variable">-options</span>

-class: \u7C7B\u52A0\u8F7D\u7684\u884C\u4E3A\u7EDF\u8BA1 Displays statistics about the behavior of the class loader.
-compiler:  HotSpt JIT\u7F16\u8BD1\u5668\u884C\u4E3A\u7EDF\u8BA1 Displays statistics about the behavior of the Java HotSpot VM Just-in-Time compiler.
-gc:    \u5783\u573E\u56DE\u6536\u5806\u7684\u884C\u4E3A\u7EDF\u8BA1\u3002Displays statistics about the behavior of the garbage collected heap.
-gccapacity:    \u5404\u4E2A\u5783\u573E\u56DE\u6536\u4EE3\u5BB9\u91CF<span class="token punctuation">(</span>young,old,meta<span class="token punctuation">)</span>\u548C\u4ED6\u4EEC\u76F8\u5E94\u7684\u7A7A\u95F4\u7EDF\u8BA1\u3002
-gccause:   \u5783\u573E\u6536\u96C6\u7EDF\u8BA1\u6982\u8FF0\uFF08\u540C-gcutil\uFF09,\u9644\u52A0\u6700\u8FD1\u4E24\u6B21\u5783\u573E\u56DE\u6536\u4E8B\u4EF6\u7684\u539F\u56E0\u3002
-gcmetacapacity:    \u7EDF\u8BA1\u5143\u7A7A\u95F4\u4F7F\u7528\u60C5\u51B5 Displays statistics about the sizes of the metaspace.
-gcnew: \u663E\u793A\u65B0\u751F\u4EE3\u7EDF\u8BA1\u4FE1\u606F Displays statistics of the behavior of the new generation.
-gcnewcapacity: \u7EDF\u8BA1\u65B0\u751F\u4EE3\u53CA\u5185\u5B58\u4F7F\u7528\u60C5\u51B5 Displays statistics about the sizes of the new generations and its corresponding spaces.
-gcold: \u7EDF\u8BA1\u8001\u5E74\u4EE3\u548C\u5143\u7A7A\u95F4\u4F7F\u7528\u60C5\u51B5 Displays statistics about the behavior of the old generation and metaspace statistics.
-gcoldcapacity: \u7EDF\u8BA1\u8001\u5E74\u4EE3\u5185\u5B58\u4F7F\u7528\u60C5\u51B5 Displays statistics about the sizes of the old generation.
-gcutil:    \u663E\u793A\u5404\u4E2A\u5404\u4EE3\u5185\u5B58\u4F7F\u7528\u767E\u5206\u6BD4 Displays a summary about garbage collection statistics.
-printcompilation:  Hotspot\u65B9\u6CD5\u7F16\u8BD1\u7EDF\u8BA1\u60C5\u51B5 Displays Java HotSpot VM compilation method statistics.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u5E38\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> \u5E38\u7528\u5B9E\u4F8B</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jstat \u2013gcutil PID \u91CD\u590D\u6B21\u6570 \u95F4\u9694\u65F6\u95F4

jstat <span class="token parameter variable">-class</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-h3</span> <span class="token number">55912</span> <span class="token number">1000</span> <span class="token number">100</span>
-class\uFF0C\u7C7B\u578B\u53C2\u6570
-t\uFF0C\u663E\u793A\u65F6\u95F4
-h3\uFF0C\u6BCFn\u6B21\u6253\u5370\u4E00\u6B21title
<span class="token number">55912</span>\uFF0C\u8FDB\u7A0Bid
<span class="token number">1000</span>\uFF08ms\uFF09\uFF0C\u6BCF1000ms\u6253\u5370\u4E00\u6B21
<span class="token number">100</span>\uFF0C\u5171\u6253\u5370\u591A\u5C11\u6B21\uFF08\u4E0D\u5199\u7684\u8BDD\u5C31\u662F\u4E00\u76F4\u6253\u5370\u4E0B\u53BB\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u7C7B\u52A0\u8F7D\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u52A0\u8F7D\u7EDF\u8BA1" aria-hidden="true">#</a> \u7C7B\u52A0\u8F7D\u7EDF\u8BA1</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jstat <span class="token parameter variable">-class</span> <span class="token number">8470</span>
Loaded  Bytes  Unloaded  Bytes     Time
 <span class="token number">12019</span> <span class="token number">22727.4</span>        <span class="token number">0</span>     <span class="token number">0.0</span>      <span class="token number">14.80</span>

Loaded\uFF1A\u52A0\u8F7D\u7684class\u6570\u91CF
Bytes\uFF1A\u52A0\u8F7D\u7684class\u6570\u91CF\u6240\u5360\u7528\u7A7A\u95F4\u5927\u5C0F
Unloaded\uFF1A\u672A\u52A0\u8F7D\u7684class\u6570\u91CF
Bytes\uFF1A\u672A\u52A0\u8F7D\u7684class\u6570\u91CF\u5360\u7528\u7A7A\u95F4
Time\uFF1A\u65F6\u95F4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u7F16\u8BD1\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u7EDF\u8BA1" aria-hidden="true">#</a> \u7F16\u8BD1\u7EDF\u8BA1</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jstat <span class="token parameter variable">-compiler</span> <span class="token number">8470</span>
Compiled Failed Invalid   Time   FailedType FailedMethod
   <span class="token number">10132</span>      <span class="token number">1</span>       <span class="token number">0</span>    <span class="token number">39.03</span>          <span class="token number">1</span> org/springframework/boot/loader/jar/JarURLConnection get

Compiled\uFF1A\u7F16\u8BD1\u6570\u91CF\u3002
Failed\uFF1A\u5931\u8D25\u6570\u91CF
Invalid\uFF1A\u4E0D\u53EF\u7528\u6570\u91CF
Time\uFF1A\u65F6\u95F4
FailedType\uFF1A\u5931\u8D25\u7C7B\u578B
FailedMethod\uFF1A\u5931\u8D25\u7684\u65B9\u6CD5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="jvm\u7F16\u8BD1\u65B9\u6CD5\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#jvm\u7F16\u8BD1\u65B9\u6CD5\u7EDF\u8BA1" aria-hidden="true">#</a> JVM\u7F16\u8BD1\u65B9\u6CD5\u7EDF\u8BA1</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jstat <span class="token parameter variable">-printcompilation</span> <span class="token number">8470</span>

Compiled  Size  Type Method
   <span class="token number">10139</span>   <span class="token number">3012</span>    <span class="token number">1</span> redis/clients/jedis/JedisFactory makeObject
   
Compiled\uFF1A\u6700\u8FD1\u7F16\u8BD1\u65B9\u6CD5\u7684\u6570\u91CF
Size\uFF1A\u6700\u8FD1\u7F16\u8BD1\u65B9\u6CD5\u7684\u5B57\u8282\u7801\u6570\u91CF
Type\uFF1A\u6700\u8FD1\u7F16\u8BD1\u65B9\u6CD5\u7684\u7F16\u8BD1\u7C7B\u578B\u3002
Method\uFF1A\u65B9\u6CD5\u540D\u6807\u8BC6\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u5783\u573E\u56DE\u6536\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u5783\u573E\u56DE\u6536\u7EDF\u8BA1" aria-hidden="true">#</a> \u5783\u573E\u56DE\u6536\u7EDF\u8BA1</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jstat <span class="token parameter variable">-gc</span> <span class="token number">8470</span>
S0C    S1C    S0U    S1U      EC       EU        OC         OU       MC     MU    CCSC   CCSU   YGC     YGCT    FGC    FGCT     GCT
<span class="token number">3584.0</span> <span class="token number">3584.0</span> <span class="token number">784.0</span>   <span class="token number">0.0</span>   <span class="token number">60928.0</span>   <span class="token number">7489.6</span>   <span class="token number">136704.0</span>   <span class="token number">41550.3</span>   <span class="token number">71424.0</span> <span class="token number">69828.5</span> <span class="token number">8192.0</span> <span class="token number">7846.9</span>    <span class="token number">118</span>    <span class="token number">0.886</span>   <span class="token number">3</span>      <span class="token number">0.573</span>    <span class="token number">1.458</span>

S0C\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u7B2C\u4E00\u4E2A\u5E78\u5B58\u533A\u7684\u5927\u5C0F
S1C\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u7B2C\u4E8C\u4E2A\u5E78\u5B58\u533A\u7684\u5927\u5C0F
S0U\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u7B2C\u4E00\u4E2A\u5E78\u5B58\u533A\u7684\u4F7F\u7528\u5927\u5C0F
S1U\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u7B2C\u4E8C\u4E2A\u5E78\u5B58\u533A\u7684\u4F7F\u7528\u5927\u5C0F
EC\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u4F0A\u7538\u56ED\u533A\u7684\u5927\u5C0F
EU\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u4F0A\u7538\u56ED\u533A\u7684\u4F7F\u7528\u5927\u5C0F
OC\uFF1A\u8001\u5E74\u4EE3\u5927\u5C0F
OU\uFF1A\u8001\u5E74\u4EE3\u4F7F\u7528\u5927\u5C0F
MC\uFF1A\u65B9\u6CD5\u533A\u5927\u5C0F
MU\uFF1A\u65B9\u6CD5\u533A\u4F7F\u7528\u5927\u5C0F
CCSC:\u538B\u7F29\u7C7B\u7A7A\u95F4\u5927\u5C0F
CCSU:\u538B\u7F29\u7C7B\u7A7A\u95F4\u4F7F\u7528\u5927\u5C0F
YGC\uFF1A\u5E74\u8F7B\u4EE3gc\u6B21\u6570
YGCT\uFF1A\u5E74\u8F7B\u4EE3\u6D88\u8017\u65F6\u95F4
FGC\uFF1A\u8001\u5E74\u4EE3gc\u6B21\u6570
FGCT\uFF1A\u8001\u5E74\u4EE3gc\u6D88\u8017\u65F6\u95F4
GCT\uFF1Agc\u6D88\u8017\u603B\u65F6\u95F4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u5806\u5185\u5B58\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u5806\u5185\u5B58\u7EDF\u8BA1" aria-hidden="true">#</a> \u5806\u5185\u5B58\u7EDF\u8BA1</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jstat <span class="token parameter variable">-gccapacity</span> <span class="token number">8470</span>

NGCMN    NGCMX     NGC     S0C   S1C       EC      OGCMN      OGCMX       OGC         OC       MCMN     MCMX      MC     CCSMN    CCSMX     CCSC    YGC    FGC


<span class="token number">68096.0</span>  <span class="token number">68096.0</span>  <span class="token number">68096.0</span> <span class="token number">3584.0</span> <span class="token number">3584.0</span>  <span class="token number">60928.0</span>   <span class="token number">136704.0</span>   <span class="token number">136704.0</span>   <span class="token number">136704.0</span>   <span class="token number">136704.0</span>      <span class="token number">0.0</span> <span class="token number">1112064.0</span>  <span class="token number">71424.0</span>      <span class="token number">0.0</span> <span class="token number">1048576.0</span>   <span class="token number">8192.0</span>    <span class="token number">118</span>     <span class="token number">3</span>

NGCMN\uFF1A\u5E74\u8F7B\u4EE3\u6700\u5C0F\u5BB9\u91CF
NGCMX\uFF1A\u5E74\u8F7B\u4EE3\u6700\u5927\u5BB9\u91CF
NGC\uFF1A\u5F53\u524D\u5E74\u8F7B\u4EE3\u5BB9\u91CF
S0C\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u7B2C\u4E00\u4E2A\u5E78\u5B58\u533A\u7684\u5927\u5C0F
S1C\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u7B2C\u4E8C\u4E2A\u5E78\u5B58\u533A\u7684\u5927\u5C0F
EC\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u4F0A\u7538\u56ED\u533A\u7684\u5927\u5C0F
OGCMN\uFF1A\u8001\u5E74\u4EE3\u6700\u5C0F\u5BB9\u91CF
OGCMX\uFF1A\u8001\u5E74\u4EE3\u6700\u5927\u5BB9\u91CF
OGC\uFF1A\u5F53\u524D\u8001\u5E74\u4EE3\u5BB9\u91CF
OC:\u5F53\u524D\u8001\u5E74\u4EE3\u5927\u5C0F
MCMN\uFF1A\u6700\u5C0F\u5143\u6570\u636E\u5BB9\u91CF
MCMX\uFF1A\u6700\u5927\u5143\u6570\u636E\u5BB9\u91CF
MC\uFF1A\u5F53\u524D\u5143\u6570\u636E\u7A7A\u95F4\u5927\u5C0F
CCSMN\uFF1A\u6700\u5C0F\u538B\u7F29\u7C7B\u7A7A\u95F4\u5927\u5C0F
CCSMX\uFF1A\u6700\u5927\u538B\u7F29\u7C7B\u7A7A\u95F4\u5927\u5C0F
CCSC\uFF1A\u5F53\u524D\u538B\u7F29\u7C7B\u7A7A\u95F4\u5927\u5C0F
YGC\uFF1A\u5E74\u8F7B\u4EE3gc\u6B21\u6570
FGC\uFF1A\u8001\u5E74\u4EE3gc\u6B21\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u5E74\u8F7B\u4EE3\u5783\u573E\u56DE\u6536\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u5E74\u8F7B\u4EE3\u5783\u573E\u56DE\u6536\u7EDF\u8BA1" aria-hidden="true">#</a> \u5E74\u8F7B\u4EE3\u5783\u573E\u56DE\u6536\u7EDF\u8BA1</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jstat <span class="token parameter variable">-gcnew</span> <span class="token number">8470</span>

S0C    S1C    S0U    S1U   TT MTT  DSS      EC       EU     YGC     YGCT
<span class="token number">3584.0</span> <span class="token number">3584.0</span>  <span class="token number">784.0</span>    <span class="token number">0.0</span> <span class="token number">15</span>  <span class="token number">15</span> <span class="token number">3584.0</span>  <span class="token number">60928.0</span>   <span class="token number">8179.0</span>    <span class="token number">118</span>    <span class="token number">0.886</span>

S0C\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u7B2C\u4E00\u4E2A\u5E78\u5B58\u533A\u7684\u5927\u5C0F
S1C\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u7B2C\u4E8C\u4E2A\u5E78\u5B58\u533A\u7684\u5927\u5C0F
S0U\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u7B2C\u4E00\u4E2A\u5E78\u5B58\u533A\u7684\u4F7F\u7528\u5927\u5C0F
S1U\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u7B2C\u4E8C\u4E2A\u5E78\u5B58\u533A\u7684\u4F7F\u7528\u5927\u5C0F
TT\uFF1A\u5BF9\u8C61\u5728\u5E74\u8F7B\u4EE3\u5B58\u6D3B\u7684\u6B21\u6570
MTT\uFF1A\u5BF9\u8C61\u5728\u65B0\u751F\u4EE3\u5B58\u6D3B\u7684\u6700\u5927\u6B21\u6570
DSS\uFF1A\u5F53\u524D\u671F\u671B\u7684\u5E78\u5B58\u533A\u5927\u5C0F\uFF08\u4F0A\u7538\u56ED\u533A\u5DF2\u6EE1\uFF09
EC\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u4F0A\u7538\u56ED\u533A\u7684\u5927\u5C0F
EU\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u4F0A\u7538\u56ED\u533A\u7684\u4F7F\u7528\u5927\u5C0F
YGC\uFF1A\u5E74\u8F7B\u4EE3gc\u6B21\u6570
YGCT\uFF1A\u5E74\u8F7B\u4EE3gc\u65F6\u6D88\u8017\u65F6\u95F4

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u65B0\u751F\u4EE3\u5185\u5B58\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u65B0\u751F\u4EE3\u5185\u5B58\u7EDF\u8BA1" aria-hidden="true">#</a> \u65B0\u751F\u4EE3\u5185\u5B58\u7EDF\u8BA1</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jstat <span class="token parameter variable">-gcnewcapacity</span> <span class="token number">8470</span>

NGCMN      NGCMX       NGC      S0CMX     S0C     S1CMX     S1C       ECMX        EC      YGC   FGC
<span class="token number">68096.0</span>    <span class="token number">68096.0</span>    <span class="token number">68096.0</span>  <span class="token number">22528.0</span>   <span class="token number">3584.0</span>  <span class="token number">22528.0</span>   <span class="token number">3584.0</span>    <span class="token number">67072.0</span>    <span class="token number">60928.0</span>   <span class="token number">118</span>     <span class="token number">3</span>
NGCMN\uFF1A\u5E74\u8F7B\u4EE3\u6700\u5C0F\u5BB9\u91CF
NGCMX\uFF1A\u5E74\u8F7B\u4EE3\u6700\u5927\u5BB9\u91CF
NGC\uFF1A\u5F53\u524D\u5E74\u8F7B\u4EE3\u5BB9\u91CF
S0CMX\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u7B2C\u4E00\u4E2A\u5E78\u5B58\u533A\u7684\u6700\u5927\u5927\u5C0F
S0C\uFF1A\u5F53\u524D\u5E74\u8F7B\u4EE3\u4E2D\u7B2C\u4E00\u4E2A\u5E78\u5B58\u533A\u7684\u5927\u5C0F
S1CMX\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u7B2C\u4E8C\u4E2A\u5E78\u5B58\u533A\u7684\u6700\u5927\u5927\u5C0F
S1C\uFF1A\u5F53\u524D\u5E74\u8F7B\u4EE3\u4E2D\u7B2C\u4E8C\u4E2A\u5E78\u5B58\u533A\u7684\u5927\u5C0F
ECMX\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u4F0A\u7538\u56ED\u533A\u7684\u6700\u5927\u5927\u5C0F
EC\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u4F0A\u7538\u56ED\u533A\u7684\u5F53\u524D\u5927\u5C0F
YGC\uFF1A\u5E74\u8F7B\u4EE3gc\u6B21\u6570
FGC\uFF1A\u8001\u5E74\u4EE3gc\u6B21\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u8001\u5E74\u4EE3\u5783\u573E\u56DE\u6536\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u8001\u5E74\u4EE3\u5783\u573E\u56DE\u6536\u7EDF\u8BA1" aria-hidden="true">#</a> \u8001\u5E74\u4EE3\u5783\u573E\u56DE\u6536\u7EDF\u8BA1</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jstat <span class="token parameter variable">-gcold</span> <span class="token number">8470</span>

MC       MU      CCSC     CCSU       OC          OU       YGC    FGC    FGCT     GCT
<span class="token number">71424.0</span>  <span class="token number">69828.5</span>   <span class="token number">8192.0</span>   <span class="token number">7846.9</span>    <span class="token number">136704.0</span>     <span class="token number">41550.3</span>    <span class="token number">118</span>     <span class="token number">3</span>    <span class="token number">0.573</span>    <span class="token number">1.458</span>
MC\uFF1A\u65B9\u6CD5\u533A\u5927\u5C0F
MU\uFF1A\u65B9\u6CD5\u533A\u4F7F\u7528\u5927\u5C0F
CCSC:\u538B\u7F29\u7C7B\u7A7A\u95F4\u5927\u5C0F
CCSU:\u538B\u7F29\u7C7B\u7A7A\u95F4\u4F7F\u7528\u5927\u5C0F
OC\uFF1A\u8001\u5E74\u4EE3\u5927\u5C0F
OU\uFF1A\u8001\u5E74\u4EE3\u4F7F\u7528\u5927\u5C0F
YGC\uFF1A\u5E74\u8F7B\u4EE3gc\u6B21\u6570
FGC\uFF1A\u8001\u5E74\u4EE3gc\u6B21\u6570
FGCT\uFF1A\u8001\u5E74\u4EE3gc\u65F6\u6D88\u8017\u65F6\u95F4
GCT\uFF1Agc\u6D88\u8017\u603B\u65F6\u95F4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u603B\u7ED3\u5783\u573E\u56DE\u6536\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3\u5783\u573E\u56DE\u6536\u7EDF\u8BA1" aria-hidden="true">#</a> \u603B\u7ED3\u5783\u573E\u56DE\u6536\u7EDF\u8BA1</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jstat <span class="token parameter variable">-gcutil</span> <span class="token number">8470</span>
S0     S1     E      O      M     CCS    YGC     YGCT    FGC    FGCT     GCT
<span class="token number">21.88</span>   <span class="token number">0.00</span>  <span class="token number">18.14</span>  <span class="token number">30.39</span>  <span class="token number">97.77</span>  <span class="token number">95.79</span>    <span class="token number">118</span>    <span class="token number">0.886</span>     <span class="token number">3</span>    <span class="token number">0.573</span>    <span class="token number">1.458</span>
S0\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u7B2C\u4E00\u4E2A\u5E78\u5B58\u533A\u5DF2\u4F7F\u7528\u7684\u5360\u5F53\u524D\u5BB9\u91CF\u767E\u5206\u6BD4
S1\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u7B2C\u4E8C\u4E2A\u5E78\u5B58\u533A\u5DF2\u4F7F\u7528\u7684\u5360\u5F53\u524D\u5BB9\u91CF\u767E\u5206\u6BD4
E\uFF1A\u5E74\u8F7B\u4EE3\u4E2D\u4F0A\u7538\u56ED\u5DF2\u4F7F\u7528\u7684\u5360\u5F53\u524D\u5BB9\u91CF\u767E\u5206\u6BD4
O\uFF1A\u8001\u5E74\u4EE3\u5DF2\u4F7F\u7528\u7684\u5360\u5F53\u524D\u5BB9\u91CF\u767E\u5206\u6BD4
M\uFF1A\u5143\u6570\u636E\u533A\u5DF2\u4F7F\u7528\u7684\u5360\u5F53\u524D\u5BB9\u91CF\u767E\u5206\u6BD4
CCS\uFF1A\u538B\u7F29\u7C7B\u7A7A\u95F4\u4F7F\u7528\u7684\u5360\u5F53\u524D\u5BB9\u91CF\u767E\u5206\u6BD4
YGC\uFF1A\u5E74\u8F7B\u4EE3gc\u6B21\u6570
FGC\uFF1A\u8001\u5E74\u4EE3gc\u6B21\u6570
FGCT\uFF1A\u8001\u5E74\u4EE3gc\u65F6\u6D88\u8017\u65F6\u95F4
GCT\uFF1Agc\u6D88\u8017\u603B\u65F6\u95F4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),d=[l];function c(r,v){return s(),a("div",null,d)}const t=n(i,[["render",c],["__file","jvm-jstat.html.vue"]]);export{t as default};
