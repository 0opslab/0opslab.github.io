import{_ as a,o as e,c as s,e as n}from"./app.a667bd71.js";const r={},i=n(`<p>java\u542F\u52A8\u53C2\u6570\u5171\u5206\u4E3A\u4E09\u5927\u7C7B\uFF0C\u5206\u522B\u662F\uFF1A</p><p>\u6807\u51C6\u53C2\u6570(-)\uFF1A\u76F8\u5BF9\u7A33\u5B9A\u7684\u53C2\u6570\uFF0C\u6BCF\u4E2A\u7248\u672C\u7684JVM\u90FD\u53EF\u7528\u3002 \u975E\u6807\u51C6X\u53C2\u6570(-X)\uFF1A\u9ED8\u8BA4jvm\u5B9E\u73B0\u8FD9\u4E9B\u53C2\u6570\u7684\u529F\u80FD\uFF0C\u4F46\u662F\u5E76\u4E0D\u4FDD\u8BC1\u6240\u6709jvm\u5B9E\u73B0\u90FD\u6EE1\u8DB3\uFF0C\u4E14\u4E0D\u4FDD\u8BC1\u5411\u540E\u517C\u5BB9\u3002 XX\u53C2\u6570(-XX)\uFF1A\u6B64\u7C7B\u53C2\u6570\u5404\u4E2Ajvm\u5B9E\u73B0\u4F1A\u6709\u6240\u4E0D\u540C\uFF0C\u5C06\u6765\u53EF\u80FD\u4F1A\u968F\u65F6\u53D6\u6D88\u3002</p><h5 id="\u6807\u51C6\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u6807\u51C6\u53C2\u6570" aria-hidden="true">#</a> \u6807\u51C6\u53C2\u6570(-)</h5><p>-d32\u53CA-d64 \u5206\u522B\u8868\u793A\u5E94\u7528\u8FD0\u884C\u572832\u4F4D\u621664\u4F4D\u7684\u73AF\u5883\u4E2D\uFF0C\u4F7F\u7528Java HotSpot Server VM\u7684\u9ED8\u8BA4\u4F7F\u7528\u7684\u662Fserver\u6A21\u5F0F\uFF0C\u800Cserver\u6A21\u5F0F\u9ED8\u8BA4\u4F7F\u7528\u7684\u662F-d64\uFF0C\u56E0\u6B64\u5728\u6CA1\u6709\u4F7F\u7528\u6B64\u53C2\u6570\u65F6\uFF0C\u9ED8\u8BA4\u5C31\u662F-d64\u3002 -server \u9009\u62E9 &quot;server&quot; VM\uFF0C\u9ED8\u8BA4 VM \u662F server,\u8868\u793A\u662F\u5728\u670D\u52A1\u5668\u7C7B\u8BA1\u7B97\u673A\u4E0A\u8FD0\u884C\u3002 -cp\u6216-classpath &lt;\u76EE\u5F55\u548C zip/jar \u6587\u4EF6\u7684\u7C7B\u641C\u7D22\u8DEF\u5F84&gt;linux\u7528&quot;:&quot;,windows\u7528&quot;;&quot;\u6765\u5206\u9694\u76EE\u5F55, JAR \u6863\u6848\u548C ZIP \u6863\u6848\u5217\u8868, \u7528\u4E8E\u641C\u7D22\u7C7B\u6587\u4EF6\u3002 \u4F7F\u7528-classpath\u540Ejvm\u5C06\u4E0D\u518D\u4F7F\u7528CLASSPATH\u4E2D\u7684\u7C7B\u641C\u7D22\u8DEF\u5F84\uFF0C\u5982\u679C-classpath\u548CCLASSPATH\u90FD\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u5219jvm\u4F7F\u7528\u5F53\u524D\u8DEF\u5F84(.)\u4F5C\u4E3A\u7C7B\u641C\u7D22\u8DEF\u5F84\u3002 -D&lt;\u540D\u79F0&gt;=&lt;\u503C&gt; \u8BBE\u7F6E\u7CFB\u7EDF\u5C5E\u6027,\u8FD0\u884C\u5728\u6B64jvm\u4E4B\u4E0A\u7684\u5E94\u7528\u7A0B\u5E8F\u53EF\u7528System.getProperty(\u201Cproperty\u201D)\u5F97\u5230value\u7684\u503C\u3002 \u5982\u679Cvalue\u4E2D\u6709\u7A7A\u683C\uFF0C\u5219\u9700\u8981\u7528\u53CC\u5F15\u53F7\u5C06\u8BE5\u503C\u62EC\u8D77\u6765\uFF0C\u5982-Dfoo=\u201Dfoo bar\u201D\u3002\u8BE5\u53C2\u6570\u901A\u5E38\u7528\u4E8E\u8BBE\u7F6E\u7CFB\u7EDF\u7EA7\u5168\u5C40\u53D8\u91CF\u503C\uFF0C\u5982\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4EE5\u4FBF\u8BE5\u5C5E\u6027\u5728\u7A0B\u5E8F\u4E2D\u4EFB\u4F55\u5730\u65B9\u90FD\u53EF\u8BBF\u95EE\u3002 -verbose:[class|gc|jni] \u542F\u7528\u8BE6\u7EC6\u8F93\u51FA\uFF0C\u4E00\u822C\u5728\u8C03\u8BD5\u548C\u8BCA\u65AD\u65F6\uFF0C\u90FD\u4F1A\u628Agc\u7684\u8BE6\u7EC6\u4FE1\u606F\u8F93\u51FA -version \u8F93\u51FA\u4EA7\u54C1\u7248\u672C\u5E76\u9000\u51FA -version:&lt;\u503C&gt; \u9700\u8981\u6307\u5B9A\u7684\u7248\u672C\u624D\u80FD\u8FD0\u884C -showversion \u8F93\u51FA\u4EA7\u54C1\u7248\u672C\u5E76\u7EE7\u7EED\uFF0C\u5373\u8F93\u51FA\u7248\u672C\u540E\uFF0C\u7EE7\u7EED\u6309java\u6267\u884C\uFF0C\u8FD9\u662F\u8DDF-version\u7684\u533A\u522B -jre-restrict-search | -no-jre-restrict-search \u5728\u7248\u672C\u641C\u7D22\u4E2D\u5305\u62EC/\u6392\u9664\u7528\u6237\u4E13\u7528 JRE -? -help \u8F93\u51FA\u6B64\u5E2E\u52A9\u6D88\u606F -X \u8F93\u51FA\u975E\u6807\u51C6\u9009\u9879\u7684\u5E2E\u52A9 -ea\u6216-enableassertions [:packagename...|:classname] \u6309\u6307\u5B9A\u7684\u7C92\u5EA6\u542F\u7528\u65AD\u8A00\uFF0C\u9ED8\u8BA4jvm\u5173\u95ED\u65AD\u8A00\u673A\u5236 -da\u6216-disableassertions [:packagename...|:classname] \u7981\u7528\u5177\u6709\u6307\u5B9A\u7C92\u5EA6\u7684\u65AD\u8A00 -esa | -enablesystemassertions \u542F\u7528\u7CFB\u7EDF\u65AD\u8A00 -dsa | -disablesystemassertions \u7981\u7528\u7CFB\u7EDF\u65AD\u8A00 -agentlib:libname[=\u9009\u9879] \u52A0\u8F7D\u672C\u673A\u4EE3\u7406\u5E93 libname, \u4F8B\u5982 -agentlib:hprof\u53E6\u8BF7\u53C2\u9605 -agentlib:jdwp=help \u548C -agentlib:hprof=help -agentpath:pathname[=\u9009\u9879] \u6309\u5B8C\u6574\u8DEF\u5F84\u540D\u52A0\u8F7D\u672C\u673A\u4EE3\u7406\u5E93 -javaagent:jarpath[=\u9009\u9879] \u52A0\u8F7DJava\u7F16\u7A0B\u8BED\u8A00\u4EE3\u7406, \u8BF7\u53C2\u9605 java.lang.instrument -splash:imagepath \u4F7F\u7528\u6307\u5B9A\u7684\u56FE\u50CF\u663E\u793A\u542F\u52A8\u5C4F\u5E55\uFF0C\u4E00\u822C\u7528\u4E8E\u56FE\u5F62\u7F16\u7A0B\u3002</p><h5 id="\u975E\u6807\u51C6x\u53C2\u6570-x" tabindex="-1"><a class="header-anchor" href="#\u975E\u6807\u51C6x\u53C2\u6570-x" aria-hidden="true">#</a> \u975E\u6807\u51C6X\u53C2\u6570(-X)</h5><p>\u4F7F\u7528\u547D\u4EE4java -X\uFF0C\u5373\u53EF\u628A\u975E\u6807\u51C6\u53C2\u6570\u8F93\u51FA\uFF0C\u5E73\u65F6\u4F7F\u7528\u4E2D\uFF0C\u6211\u4EEC\u7528\u5F97\u8F83\u591A\u7684\u5C31\u662F-Xloggc\uFF0C-Xms\u6570\u503C,-Xmx\u6570\u503C,-Xss\u6570\u503C,-Xmn\u6570\u503C\u4E86</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-Xmixed</span>  \u9ED8\u8BA4\u662Fmixed\uFF0C\u4F7F\u7528\u5B83\u4EEC\u6765\u8BBE\u7F6EJVM\u7684\u672C\u5730\u4EE3\u7801\u7F16\u8BD1\u6A21\u5F0F
<span class="token parameter variable">-Xint</span>    \u8868\u793A\u89E3\u91CA\u6267\u884C\uFF0C\u6240\u6709\u7684\u5B57\u8282\u7801\u5C06\u88AB\u76F4\u63A5\u6267\u884C\uFF0C\u800C\u4E0D\u4F1A\u7F16\u8BD1\u6210\u672C\u5730\u7801
<span class="token parameter variable">-Xcomp</span>   \u8868\u793A\u7B2C\u4E00\u6B21\u4F7F\u7528\u5C31\u7F16\u8BD1\u6210\u672C\u5730\u4EE3\u7801\u3002
<span class="token parameter variable">-Xbatch</span>  \u7981\u6B62\u540E\u53F0\u4EE3\u7801\u7F16\u8BD1\uFF0C\u5F3A\u5236\u5728\u524D\u53F0\u7F16\u8BD1\uFF0C\u7F16\u8BD1\u5B8C\u6210\u4E4B\u540E\u624D\u80FD\u8FDB\u884C\u4EE3\u7801\u6267\u884C\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cjvm\u5728\u540E\u53F0\u8FDB\u884C\u7F16\u8BD1\uFF0C\u82E5\u6CA1\u6709\u7F16\u8BD1\u5B8C\u6210\uFF0C\u5219\u524D\u53F0\u8FD0\u884C\u4EE3\u7801\u65F6\u4EE5\u89E3\u91CA\u6A21\u5F0F\u8FD0\u884C
-Xbootclasspath:    \u8BBE\u7F6E\u641C\u7D22\u8DEF\u5F84\u4EE5\u5F15\u5BFC\u7C7B\u548C\u8D44\u6E90\uFF0C\u8BA9jvm\u4ECE\u6307\u5B9A\u8DEF\u5F84\uFF08\u53EF\u4EE5\u662F\u5206\u53F7\u5206\u9694\u7684\u76EE\u5F55\u3001jar\u3001\u6216\u8005zip\uFF09\u4E2D\u52A0\u8F7Dbootclass\uFF0C\u7528\u6765\u66FF\u6362jdk\u7684rt.jar
-Xbootclasspath/a:  \u9644\u52A0\u5728\u5F15\u5BFC\u7C7B\u8DEF\u5F84\u672B\u5C3E
-Xbootclasspath/p:  \u7F6E\u4E8E\u5F15\u5BFC\u7C7B\u8DEF\u5F84\u4E4B\u524D\uFF0C\u8BA9jvm\u4F18\u5148\u4E8Ebootstrap\u9ED8\u8BA4\u8DEF\u5F84\u52A0\u8F7D\u6307\u5B9A\u8DEF\u5F84\u7684\u6240\u6709\u6587\u4EF6
<span class="token parameter variable">-Xcheck:jni</span>    \u5BF9JNI\u51FD\u6570\u8FDB\u884C\u9644\u52A0check\uFF1B\u6B64\u65F6jvm\u5C06\u6821\u9A8C\u4F20\u9012\u7ED9JNI\u51FD\u6570\u53C2\u6570\u7684\u5408\u6CD5\u6027\uFF0C\u5728\u672C\u5730\u4EE3\u7801\u4E2D\u9047\u5230\u975E\u6CD5\u6570\u636E\u65F6\uFF0Cjmv\u5C06\u62A5\u4E00\u4E2A\u81F4\u547D\u9519\u8BEF\u800C\u7EC8\u6B62\uFF1B\u4F7F\u7528\u8BE5\u53C2\u6570\u540E\u5C06\u9020\u6210\u6027\u80FD\u4E0B\u964D\uFF0C\u8BF7\u614E\u7528\u3002
<span class="token parameter variable">-Xfuture</span>   \u8BA9jvm\u5BF9\u7C7B\u6587\u4EF6\u6267\u884C\u4E25\u683C\u7684\u683C\u5F0F\u68C0\u67E5\uFF08\u9ED8\u8BA4jvm\u4E0D\u8FDB\u884C\u4E25\u683C\u683C\u5F0F\u68C0\u67E5\uFF09\uFF0C\u4EE5\u7B26\u5408\u7C7B\u6587\u4EF6\u683C\u5F0F\u89C4\u8303\uFF0C\u63A8\u8350\u5F00\u53D1\u4EBA\u5458\u4F7F\u7528\u8BE5\u53C2\u6570
<span class="token parameter variable">-Xincgc</span>    \u5F00\u542F\u589E\u91CFgc\uFF08\u9ED8\u8BA4\u4E3A\u5173\u95ED\uFF09\uFF1B\u8FD9\u6709\u52A9\u4E8E\u51CF\u5C11\u957F\u65F6\u95F4GC\u65F6\u5E94\u7528\u7A0B\u5E8F\u51FA\u73B0\u7684\u505C\u987F\uFF1B\u4F46\u7531\u4E8E\u53EF\u80FD\u548C\u5E94\u7528\u7A0B\u5E8F\u5E76\u53D1\u6267\u884C\uFF0C\u6240\u4EE5\u4F1A\u964D\u4F4ECPU\u5BF9\u5E94\u7528\u7684\u5904\u7406\u80FD\u529B
<span class="token parameter variable">-Xloggc:file</span>   \u4E0E-verbose:gc\u529F\u80FD\u7C7B\u4F3C\uFF0C\u53EA\u662F\u5C06\u6BCF\u6B21GC\u4E8B\u4EF6\u7684\u76F8\u5173\u60C5\u51B5\u8BB0\u5F55\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u6587\u4EF6\u7684\u4F4D\u7F6E\u6700\u597D\u5728\u672C\u5730\uFF0C\u4EE5\u907F\u514D\u7F51\u7EDC\u7684\u6F5C\u5728\u95EE\u9898\u3002\u82E5\u4E0Everbose\u547D\u4EE4\u540C\u65F6\u51FA\u73B0\u5728\u547D\u4EE4\u884C\u4E2D\uFF0C\u5219\u4EE5-Xloggc\u4E3A\u51C6\u3002
<span class="token parameter variable">-Xms</span>   \u6307\u5B9Ajvm\u5806\u7684\u521D\u59CB\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u4E3A\u7269\u7406\u5185\u5B58\u76841/64\uFF0C\u6700\u5C0F\u4E3A1M\uFF1B\u53EF\u4EE5\u6307\u5B9A\u5355\u4F4D\uFF0C\u6BD4\u5982k\u3001m\uFF0C\u82E5\u4E0D\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u4E3A\u5B57\u8282\u3002
<span class="token parameter variable">-Xmx</span>   \u6307\u5B9Ajvm\u5806\u7684\u6700\u5927\u503C\uFF0C\u9ED8\u8BA4\u4E3A\u7269\u7406\u5185\u5B58\u76841/4\u6216\u80051G\uFF0C\u6700\u5C0F\u4E3A2M\uFF1B\u5355\u4F4D\u4E0E-Xms\u4E00\u81F4\u3002
<span class="token parameter variable">-Xss</span>   \u8BBE\u7F6E\u5355\u4E2A\u7EBF\u7A0B\u6808\u7684\u5927\u5C0F\uFF0C\u4E00\u822C\u9ED8\u8BA4\u4E3A512k\u3002
<span class="token parameter variable">-Xmn</span>   \u8BBE\u7F6E\u5806<span class="token punctuation">(</span>heap<span class="token punctuation">)</span>\u7684\u5E74\u8F7B\u4EE3\u7684\u521D\u59CB\u503C\u53CA\u6700\u5927\u503C\uFF0C\u5355\u4F4D\u4E0E-Xms\u4E00\u81F4\uFF0C\u5E74\u8F7B\u4EE3\u662F\u5B58\u50A8\u65B0\u5BF9\u8C61\u7684\u5730\u5740\uFF0C\u4E5F\u662FGC\u53D1\u751F\u5F97\u6700\u9891\u7E41\u7684\u5730\u65B9\uFF0C\u82E5\u8BBE\u7F6E\u8FC7\u5C0F\uFF0C\u5219\u4F1A\u5BB9\u6613\u89E6\u53D1\u5E74\u8F7B\u4EE3\u5783\u573E\u56DE\u6536\uFF08minor gc\uFF09\uFF0C\u82E5\u8BBE\u7F6E\u8FC7\u5927\uFF0C\u53EA\u89E6\u53D1full gc\uFF0C\u5219\u5360\u7528\u65F6\u95F4\u4F1A\u5F88\u957F\uFF0Coracle\u5EFA\u8BAE\u662F\u628A\u5E74\u8F7B\u4EE3\u8BBE\u7F6E\u5728\u5806\u5927\u5C0F\u7684\u56DB\u4EFD\u4E4B\u4E00\u5230\u4E00\u534A\u7684\u3002\u8FD9\u547D\u4EE4\u540C\u65F6\u8BBE\u7F6E\u4E86\u521D\u59CB\u503C\u548C\u6700\u5927\u503C\uFF0C\u53EF\u4EE5\u4F7F\u7528-XX:NewSize\u548C-XX:MaxNewSiz\u6765\u5206\u522B\u8BBE\u7F6E\u3002
<span class="token parameter variable">-XshowSettings</span>    \u663E\u793A\u6240\u6709\u8BBE\u7F6E\u5E76\u7EE7\u7EED
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="xx\u53C2\u6570-xx" tabindex="-1"><a class="header-anchor" href="#xx\u53C2\u6570-xx" aria-hidden="true">#</a> XX\u53C2\u6570(-XX)</h5><h6 id="boolean\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#boolean\u7C7B\u578B" aria-hidden="true">#</a> boolean\u7C7B\u578B</h6><p>\u6B64\u7C7B\u53C2\u6570\uFF0C\u683C\u5F0F\uFF1A-XX:[+-]name\uFF0C\u4F5C\u4E3A\u529F\u80FD\u5F00\u5173\uFF0C\u8868\u793A\u542F\u7528\u6216\u8005\u7981\u7528\u5C5E\u6027</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-XX:+PrintFlagsFinal</span>  \u8F93\u51FA\u53C2\u6570\u7684\u6700\u7EC8\u503C
<span class="token parameter variable">-XX:+PrintFlagsInitial</span> \u8F93\u51FA\u53C2\u6570\u7684\u9ED8\u8BA4\u503C
<span class="token parameter variable">-XX:-DisableExplicitGC</span>  \u7981\u6B62\u8C03\u7528System.gc<span class="token punctuation">(</span><span class="token punctuation">)</span>\uFF1B\u4F46jvm\u7684gc\u4ECD\u7136\u6709\u6548
<span class="token parameter variable">-XX:+MaxFDLimit</span> \u6700\u5927\u5316\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u6570\u91CF\u9650\u5236
<span class="token parameter variable">-XX:+ScavengeBeforeFullGC</span>   \u65B0\u751F\u4EE3GC\u4F18\u5148\u4E8EFull GC\u6267\u884C
<span class="token parameter variable">-XX:+UseGCOverheadLimit</span> \u5728\u629B\u51FAOOM\u4E4B\u524D\u9650\u5236jvm\u8017\u8D39\u5728GC\u4E0A\u7684\u65F6\u95F4\u6BD4\u4F8B
<span class="token parameter variable">-XX:-UseConcMarkSweepGC</span> \u5BF9\u8001\u751F\u4EE3\u91C7\u7528\u5E76\u53D1\u6807\u8BB0\u4EA4\u6362\u7B97\u6CD5\u8FDB\u884CGC
<span class="token parameter variable">-XX:-UseParallelGC</span>  \u542F\u7528\u5E76\u884CGC
<span class="token parameter variable">-XX:-UseParallelOldGC</span>   \u5BF9Full GC\u542F\u7528\u5E76\u884C\uFF0C\u5F53-XX:-UseParallelGC\u542F\u7528\u65F6\u8BE5\u9879\u81EA\u52A8\u542F\u7528
<span class="token parameter variable">-XX:-UseSerialGC</span>    \u542F\u7528\u4E32\u884CGC
<span class="token parameter variable">-XX:+UseThreadPriorities</span>    \u542F\u7528\u672C\u5730\u7EBF\u7A0B\u4F18\u5148\u7EA7
<span class="token parameter variable">-XX:-UseG1GC</span>    \u542F\u7528G1\u7684GC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="key-value\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#key-value\u7C7B\u578B" aria-hidden="true">#</a> key-value\u7C7B\u578B</h6><p>\u6B64\u7C7B\u53C2\u6570\uFF0C\u683C\u5F0F\uFF1A-XX:name=value\u8868\u793A\u5C5E\u6027name\u7684\u503C\u4E3Avalue\u3002 <strong>\u6027\u80FD\u8C03\u4F18</strong> \u6027\u80FD\u8C03\u4F18\u65F6\uFF0C\u4E3B\u8981\u662F\u5BF9JVM\u7684\u5185\u5B58\u5206\u914D\u60C5\u51B5\u7684\u8C03\u4F18\uFF0C\u5305\u62EC\u5806\u5927\u5C0F\uFF0C\u5E74\u8F7B\u4EE3\u5927\u5C0F\uFF0C\u5E74\u8F7B\u5E74\u8001\u4EE3\u6BD4\u4F8B\u7B49\u7B49\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-XX:LargePageSizeInBytes</span><span class="token operator">=</span>4m \u8BBE\u7F6E\u7528\u4E8EJava\u5806\u7684\u5927\u9875\u9762\u5C3A\u5BF8
<span class="token parameter variable">-XX:MaxHeapFreeRatio</span><span class="token operator">=</span><span class="token number">70</span> GC\u540Ejava\u5806\u4E2D\u7A7A\u95F2\u91CF\u5360\u7684\u6700\u5927\u6BD4\u4F8B
<span class="token parameter variable">-XX:MaxNewSize</span><span class="token operator">=</span>size \u65B0\u751F\u6210\u5BF9\u8C61\u80FD\u5360\u7528\u5185\u5B58\u7684\u6700\u5927\u503C
<span class="token parameter variable">-XX:MaxPermSize</span><span class="token operator">=</span>64m \u8001\u751F\u4EE3\u5BF9\u8C61\u80FD\u5360\u7528\u5185\u5B58\u7684\u6700\u5927\u503C
<span class="token parameter variable">-XX:MinHeapFreeRatio</span><span class="token operator">=</span><span class="token number">40</span> GC\u540Ejava\u5806\u4E2D\u7A7A\u95F2\u91CF\u5360\u7684\u6700\u5C0F\u6BD4\u4F8B
<span class="token parameter variable">-XX:NewRatio</span><span class="token operator">=</span><span class="token number">2</span>  \u65B0\u751F\u4EE3\u5185\u5B58\u5BB9\u91CF\u4E0E\u8001\u751F\u4EE3\u5185\u5B58\u5BB9\u91CF\u7684\u6BD4\u4F8B
<span class="token parameter variable">-XX:NewSize</span><span class="token operator">=</span><span class="token number">2</span>.125m  \u65B0\u751F\u4EE3\u5BF9\u8C61\u751F\u6210\u65F6\u5360\u7528\u5185\u5B58\u7684\u9ED8\u8BA4\u503C
<span class="token parameter variable">-XX:ReservedCodeCacheSize</span><span class="token operator">=</span>32m   \u4FDD\u7559\u4EE3\u7801\u5360\u7528\u7684\u5185\u5B58\u5BB9\u91CF
<span class="token parameter variable">-XX:ThreadStackSize</span><span class="token operator">=</span><span class="token number">512</span> \u8BBE\u7F6E\u7EBF\u7A0B\u6808\u5927\u5C0F\uFF0C\u82E5\u4E3A0\u5219\u4F7F\u7528\u7CFB\u7EDF\u9ED8\u8BA4\u503C
<span class="token parameter variable">-XX:+UseLargePages</span>  \u4F7F\u7528\u5927\u9875\u9762\u5185\u5B58
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8C03\u8BD5\u76D1\u6D4B</strong> \u5728\u9700\u8981\u5BF9\u5E94\u7528\u8FDB\u884C\u76D1\u6D4B\uFF0C\u7279\u522B\u662F\u89C2\u5BDFGC\u60C5\u51B5\uFF0COOM\u540E\u68C0\u67E5\u95EE\u9898\u7B49</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-XX:-CITime</span> \u6253\u5370\u6D88\u8017\u5728JIT\u7F16\u8BD1\u7684\u65F6\u95F4
<span class="token parameter variable">-XX:ErrorFile</span><span class="token operator">=</span>./hs_err_pid<span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span>.log \u4FDD\u5B58\u9519\u8BEF\u65E5\u5FD7\u6216\u8005\u6570\u636E\u5230\u6587\u4EF6\u4E2D
<span class="token parameter variable">-XX:-ExtendedDTraceProbes</span>   \u5F00\u542Fsolaris\u7279\u6709\u7684dtrace\u63A2\u9488
<span class="token parameter variable">-XX:HeapDumpPath</span><span class="token operator">=</span>./java_pid<span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span>.hprof  \u6307\u5B9A\u5BFC\u51FA\u5806\u4FE1\u606F\u65F6\u7684\u8DEF\u5F84\u6216\u6587\u4EF6\u540D
<span class="token parameter variable">-XX:-HeapDumpOnOutOfMemoryError</span> \u5F53\u9996\u6B21\u906D\u9047OOM\u65F6\u5BFC\u51FA\u6B64\u65F6\u5806\u4E2D\u76F8\u5173\u4FE1\u606F
<span class="token parameter variable">-XX:OnError</span><span class="token operator">=</span><span class="token string">&quot;&lt;cmd args&gt;;&lt;cmd args&gt;&quot;</span> \u51FA\u73B0\u81F4\u547DERROR\u4E4B\u540E\u8FD0\u884C\u81EA\u5B9A\u4E49\u547D\u4EE4
<span class="token parameter variable">-XX:OnOutOfMemoryError</span><span class="token operator">=</span><span class="token string">&quot;&lt;cmd args&gt;;&lt;cmd args&gt;&quot;</span>  \u5F53\u9996\u6B21\u906D\u9047OOM\u65F6\u6267\u884C\u81EA\u5B9A\u4E49\u547D\u4EE4
<span class="token parameter variable">-XX:-PrintClassHistogram</span>    \u9047\u5230Ctrl-Break\u540E\u6253\u5370\u7C7B\u5B9E\u4F8B\u7684\u67F1\u72B6\u4FE1\u606F\uFF0C\u4E0Ejmap -histo\u529F\u80FD\u76F8\u540C
<span class="token parameter variable">-XX:-PrintConcurrentLocks</span>   \u9047\u5230Ctrl-Break\u540E\u6253\u5370\u5E76\u53D1\u9501\u7684\u76F8\u5173\u4FE1\u606F\uFF0C\u4E0Ejstack -l\u529F\u80FD\u76F8\u540C
<span class="token parameter variable">-XX:-PrintCommandLineFlags</span>  \u6253\u5370\u5728\u547D\u4EE4\u884C\u4E2D\u51FA\u73B0\u8FC7\u7684\u6807\u8BB0
<span class="token parameter variable">-XX:-PrintCompilation</span>   \u5F53\u4E00\u4E2A\u65B9\u6CD5\u88AB\u7F16\u8BD1\u65F6\u6253\u5370\u76F8\u5173\u4FE1\u606F
<span class="token parameter variable">-XX:-PrintGC</span>    \u6BCF\u6B21GC\u65F6\u6253\u5370\u76F8\u5173\u4FE1\u606F
<span class="token parameter variable">-XX:-PrintGC</span> Details    \u6BCF\u6B21GC\u65F6\u6253\u5370\u8BE6\u7EC6\u4FE1\u606F
<span class="token parameter variable">-XX:-PrintGCTimeStamps</span>  \u6253\u5370\u6BCF\u6B21GC\u7684\u65F6\u95F4\u6233
<span class="token parameter variable">-XX:-TraceClassLoading</span>  \u8DDF\u8E2A\u7C7B\u7684\u52A0\u8F7D\u4FE1\u606F
<span class="token parameter variable">-XX:-TraceClassLoadingPreorder</span>  \u8DDF\u8E2A\u88AB\u5F15\u7528\u5230\u7684\u6240\u6709\u7C7B\u7684\u52A0\u8F7D\u4FE1\u606F
<span class="token parameter variable">-XX:-TraceClassResolution</span>   \u8DDF\u8E2A\u5E38\u91CF\u6C60
<span class="token parameter variable">-XX:-TraceClassUnloading</span>    \u8DDF\u8E2A\u7C7B\u7684\u5378\u8F7D\u4FE1\u606F
<span class="token parameter variable">-XX:-TraceLoaderConstraints</span> \u8DDF\u8E2A\u7C7B\u52A0\u8F7D\u5668\u7EA6\u675F\u7684\u76F8\u5173\u4FE1\u606F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5E38\u7528XX\u53C2\u6570</strong> \u6253\u5370GC\u76F8\u5173\u7684\u5185\u5BB9\uFF0C\u5305\u62EC\u5806\u60C5\u51B5\uFF0CGC\u8BE6\u60C5\uFF0CGC\u65F6\u95F4\uFF0C\u53D1\u751FOOM\u65F6\uFF0C\u751F\u6210\u5FEB\u7167\uFF0C\u53D1\u751F\u9519\u8BEF\u662F\u8BB0\u5F55\u9519\u8BEF\u65E5\u5FD7\u7B49\uFF0C\u5982\u4E0B\uFF1A -XX:+PrintHeapAtGC -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCTimeStamps -XX:+PrintTenuringDistribution -XX:+PrintGCApplicationStoppedTime -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=logs/heapdump.hprof\uFF0C\u53D1\u751FOOM\u65F6\uFF0Cdump\u51FA\u5FEB\u7167\u5230\u6587\u4EF6heapdump.hprof\u4E2D\u3002 -XX:ErrorFile=logs/java_error_%p.log\uFF0C\u53D1\u751FJVM\u9519\u8BEF\u65F6\uFF0C\u628A\u65E5\u5FD7\u8F93\u51FA\u5230java_error_%p.log\u4E2D\u3002 \u4EE5\u4E0A\u53C2\u6570\u5747\u662F\u4F7F\u7528\u5EA6\u5F88\u9AD8\u7684\u53C2\u6570\uFF0C\u5728\u4F7F\u7528java\u547D\u4EE4\u542F\u52A8\u5E94\u7528\u65F6\uFF0C\u53EF\u4EE5\u628A\u8FD9\u4E9B\u53C2\u6570\u52A0\u4E0A\uFF0C\u4EE5\u4FBF\u4E8E\u540E\u7EED\u8C03\u4F18\u4E0E\u95EE\u9898\u8BCA\u65AD\u3002</p>`,17),l=[i];function t(p,o){return e(),s("div",null,l)}const v=a(r,[["render",t],["__file","java-jvm-params.html.vue"]]);export{v as default};