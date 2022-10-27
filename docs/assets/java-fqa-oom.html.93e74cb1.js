import{_ as a,o as e,c as s,e as n}from"./app.a667bd71.js";const i={},l=n(`<p>Java\u5E94\u7528\u5173\u4E8Eoom\u5E38\u89C1\u7684\u95EE\u9898\u5206\u4E3A\u51E0\u7C7B\uFF1A</p><ul><li><p>java.lang.OutOfMemoryError: Java heap space\uFF0C\u5806\u7684\u5185\u5B58\u5360\u7528\u5DF2\u7ECF\u8FBE\u5230-Xmx\u8BBE\u7F6E\u7684\u6700\u5927\u503C\uFF0C\u65E0\u6CD5\u521B\u5EFA\u65B0\u5BF9\u8C61\uFF0C\u7B80\u5355\u7684\u53EF\u4EE5\u8003\u8651\u901A\u8FC7\u8C03\u6574-Xmx\u53C2\u6570\u6765\u89E3\u51B3\u3002</p></li><li><p>java.lang.OutOfMemoryError: GC Overhead limit exceeded\uFF0C\u8868\u793AGC\u4E00\u76F4\u5728\u6267\u884C\u4E14java\u8FDB\u7A0B\u8FD0\u884C\u5F88\u6162\uFF0C\u901A\u5E38\u4F1A\u629B\u51FA\u6B64\u5F02\u5E38\uFF0Cjava\u5806\u7684\u5206\u914D\u7684\u7A7A\u95F4\u5F88\u5C0F\u4EE5\u81F3\u4E8E\u65B0\u6570\u636E\u65E0\u6CD5\u653E\u5230\u5806\u4E2D\u3002\u8003\u8651\u8C03\u6574\u5806\u5927\u5C0F\uFF0C\u5982\u679C\u60F3\u5173\u95ED\u6B64\u8F93\u51FA\uFF0C\u53EF\u7528\u53C2\u6570\u6765\u5173\u95ED-XX:-UseGCOverheadLimit\u3002</p></li><li><p>java.lang.OutOfMemoryError: Requested array size exceeds VM limit\uFF0Cjava\u5E94\u7528\u5C1D\u8BD5\u5206\u914D\u5927\u4E8E\u5806\u5927\u5C0F\u7684\u6570\u7EC4\uFF0C\u5982\u5806\u5927\u5C0F\u662F256M\uFF0C\u5374\u8981\u5206\u914D512M\u7684\u6570\u7EC4\uFF0C\u5219\u4F1A\u62A5\u9519\u3002\u8003\u8651\u8C03\u6574\u5806\u5927\u5C0F\u6216\u8005\u4FEE\u6539\u4EE3\u7801</p></li><li><p>java.lang.OutOfMemoryError: Metaspace\uFF0C\u5F53\u7C7B\u5143\u6570\u636E\u6240\u9700\u7684\u672C\u673A\u5185\u5B58\u91CF\u8D85\u8FC7\u65F6MaxMetaSpaceSize\u65F6\u62A5\u51FA\uFF0C\u8003\u8651\u8C03\u6574MaxMetaSpaceSize\u3002</p></li><li><p>java.lang.OutOfMemoryError: request size bytes for reason. Out of swap space?\u5F53\u6765\u81EA\u672C\u673A\u5806\u7684\u5206\u914D\u5931\u8D25\u5E76\u4E14\u672C\u673A\u5806\u53EF\u80FD\u63A5\u8FD1\u8017\u5C3D\u65F6\u4F1A\u62A5\u6B64\u9519\u8BEF\uFF0C\u9700\u8981\u67E5\u770B\u65E5\u5FD7\u6765\u5904\u7406\u3002</p></li><li><p>java.lang.OutOfMemoryError: Compressed class space\uFF0CJVM\u7684\u975E\u5806\u7ED3\u6784\u4E2D\uFF0C\u7C7B\u6307\u9488\u5B58\u653E\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u8003\u8651\u4F7F\u7528CompressedClassSpaceSize\u6765\u8C03\u6574\u3002</p></li><li><p>java.lang.OutOfMemoryError: reason stack_trace_with_native_method\uFF0CJVM\u7684\u672C\u5730\u65B9\u6CD5\u533A\u4E0D\u8DB3\uFF0C\u5728Java\u672C\u673A\u63A5\u53E3\uFF08JNI\uFF09\u6216\u672C\u673A\u65B9\u6CD5\u4E2D\u68C0\u6D4B\u5230\u5206\u914D\u5931\u8D25\uFF0C\u9700\u8981\u67E5\u627E\u5BF9\u5E94\u5806\u6808\u4FE1\u606F\u6765\u67E5\u8BE2\u3002</p></li></ul><p>java\u5E94\u7528\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u53D1\u751FOOM\uFF08out of memory\uFF09\uFF0C\u56E0\u6B64\u9700\u8981\u5EFA\u8BAE\u5728java\u5E94\u7528\u542F\u52A8\u65F6\uFF0C\u6DFB\u52A0\u51E0\u4E2A\u53C2\u6570\uFF0C\u5305\u62EC-Xloggc:file -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=logs/heapdump.hprof -XX:ErrorFile=logs/java_error_%p.log\u3002\u8FD9\u6837\u5F53\u53D1\u751Foom\u65F6\uFF0C\u53EF\u4EE5\u4ECEdump\u51FA\u6765\u7684\u6587\u4EF6\u6765\u5206\u6790oom\u7684\u539F\u56E0\u3002\u4E0E\u5185\u5B58\u95EE\u9898\u76F8\u5173\u7684java\u547D\u4EE4\u884C\u5DE5\u5177\u5305\u62ECjmap,jstat\uFF0C\u56E0\u6B64\u5185\u5B58OOM\u95EE\u9898\u6392\u67E5\u5957\u8DEF\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># (1)\u627E\u5230java\u5E94\u7528\u8FDB\u7A0B(PID)</span>
jps <span class="token parameter variable">-lvm</span>
\u6216\u8005
<span class="token function">top</span> <span class="token parameter variable">-c</span>

<span class="token comment"># (2)\u4E86\u89E3\u6B64\u8FDB\u7A0B\u542F\u52A8\u53C2\u6570\uFF08\u7279\u522B\u662F-Xms\uFF0C-Xmx\u7B49\uFF09</span>
<span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span>  PID
\u6216\u8005
jinfo <span class="token parameter variable">-flags</span> PID

<span class="token comment"># (3) \u786E\u8BA4\u5185\u5B58\u60C5\u51B5</span>
jmap <span class="token parameter variable">-heap</span> PID

<span class="token comment"># (4) \u67E5\u627E\u5360\u5185\u5B58\u7684\u5927\u5BF9\u8C61</span>
jmap <span class="token parameter variable">-histo:live</span> PID 

<span class="token comment"># (5) dump\u51FA\u5806\u6587\u4EF6\uFF0C\u4EE5\u4FBF\u4F7F\u7528\u5DE5\u5177\u5206\u6790</span>
jmap <span class="token parameter variable">-dump:file</span><span class="token operator">=</span>./heap.hprof PID

<span class="token comment"># (6) \u67E5\u770BGC\u53D8\u5316\u60C5\u51B5\uFF0C\u5982\u4E0B\u6BCF\u79D2\u6253\u5370\u4E00\u6B21</span>
jstat <span class="token parameter variable">-gc</span> PID <span class="token number">1000</span> 

<span class="token comment"># (7) \u7ED3\u5408\u65E5\u5FD7\u6587\u4EF6\u51FA\u9519\u4FE1\u606F\u53CAdump\u51FA\u6765\u7684\u5806\u6587\u4EF6\u5206\u6790OOM\u548CGC\u60C5\u51B5</span>
- \u5185\u5B58\u5206\u914D\u5C0F\uFF0C\u9002\u5F53\u8C03\u6574\u5185\u5B58
- \u5BF9\u8C61\u88AB\u9891\u7E41\u521B\u5EFA\uFF0C\u4E14\u4E0D\u91CA\u653E\uFF0C\u4F18\u5316\u4EE3\u7801
- young gc\u9891\u7387\u592A\u9AD8\uFF0C\u67E5\u770B-Xmn\u3001-XX:SurvivorRatio\u7B49\u53C2\u6570\u8BBE\u7F6E\u662F\u5426\u5408\u7406

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[l];function p(o,m){return e(),s("div",null,r)}const v=a(i,[["render",p],["__file","java-fqa-oom.html.vue"]]);export{v as default};