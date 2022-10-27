import{_ as e,o as a,c as s,e as n}from"./app.a667bd71.js";const i={},r=n(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F18\u5316idea64.exe.vmoptions\u7684\u914D\u7F6E</span>
<span class="token parameter variable">-Xms512m</span>
<span class="token parameter variable">-Xmx750m</span>
<span class="token parameter variable">-Xmn264m</span>
<span class="token parameter variable">-XX:MaxPermSize</span><span class="token operator">=</span>350m
<span class="token parameter variable">-XX:PermSize</span><span class="token operator">=</span>128m
<span class="token parameter variable">-XX:ReservedCodeCacheSize</span><span class="token operator">=</span>240m
<span class="token parameter variable">-Xverify:none</span>
<span class="token parameter variable">-Xnoclassgc</span>
<span class="token parameter variable">-XX:+UseParNewGC</span>
<span class="token parameter variable">-XX:+UseConcMarkSweepGC</span>
<span class="token parameter variable">-XX:SoftRefLRUPolicyMSPerMB</span><span class="token operator">=</span><span class="token number">50</span>
<span class="token parameter variable">-ea</span>
<span class="token parameter variable">-server</span>
<span class="token parameter variable">-Dsun.io.useCanonCaches</span><span class="token operator">=</span>false
<span class="token parameter variable">-Dsun.awt.keepWorkingSetOnMinimize</span><span class="token operator">=</span>true
<span class="token parameter variable">-Djava.net.preferIPv4Stack</span><span class="token operator">=</span>true
<span class="token parameter variable">-XX:+HeapDumpOnOutOfMemoryError</span>
<span class="token parameter variable">-XX:-OmitStackTraceInFastThrow</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BBE\u7F6Emaven" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6Emaven" aria-hidden="true">#</a> \u8BBE\u7F6Emaven</h2><p>1.\u5728File-&gt;settings-&gt;\u641C\u7D22maven 2.Mavan home directory--\u8BBE\u7F6Emaven\u5B89\u88C5\u5305\u7684bin\u6587\u4EF6\u5939\u6240\u5728\u7684\u4F4D\u7F6E 3.User settings file--\u8BBE\u7F6Esetting\u6587\u4EF6\u6240\u5728\u7684\u4F4D\u7F6E 4.Local repository--\u8BBE\u7F6E\u672C\u5730\u4ED3\u5E93</p><h2 id="idea-\u8BBE\u7F6E\u4EE3\u7801\u884C\u5BBD\u5EA6" tabindex="-1"><a class="header-anchor" href="#idea-\u8BBE\u7F6E\u4EE3\u7801\u884C\u5BBD\u5EA6" aria-hidden="true">#</a> IDEA \u8BBE\u7F6E\u4EE3\u7801\u884C\u5BBD\u5EA6</h2><p>1.\u5728File-&gt;settings-&gt;Editor-&gt;Code Style 2.\u6709\u4EBA\u4F1A\u95EE\uFF0C\u5982\u679C\u8F93\u5165\u7684\u4EE3\u7801\u8D85\u51FA\u5BBD\u5EA6\u754C\u7EBF\u65F6\uFF0C\u5982\u4F55\u8BA9IDE\u81EA\u52A8\u5C06\u4EE3\u7801\u6362\u884C\uFF1F\u6709\u4E24\u79CD\u65B9\u5F0F\uFF01 3.\u7B2C\u4E00\u79CD\uFF0C\u5728\u4E0A\u8FF0\u7684\u201CRight margin (columns)\u201D\u7684\u4E0B\u65B9\uFF0C\u6709\u201CWrap when typing reaches right margin\u201D\u9009\u9879\uFF0C\u9009\u4E2D\u5B83\uFF0C\u662F\u4EC0\u4E48\u6548\u679C\u5462\uFF1F 4.\u968F\u7740\u8F93\u5165\u7684\u5B57\u7B26\u7684\u589E\u52A0\uFF0C\u5F53\u4EE3\u7801\u5BBD\u5EA6\u5230\u8FBE\u754C\u7EBF\u65F6\uFF0CIDEA\u4F1A\u81EA\u52A8\u5C06\u4EE3\u7801\u6362\u884C\u3002 5.\u7B2C\u4E00\u79CD\u65B9\u5F0F\u662F\u5728\u8F93\u5165\u4EE3\u7801\u65F6\u89E6\u53D1\uFF0C\u8FD8\u6709\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF0C\u5728File-&gt;settings-&gt;Code Style-&gt;Java\u4E2D\uFF0C\u9009\u4E2D\u201CWrapping and Braces\u201D\u9009\u9879\u5361\uFF0C 6.\u5728\u201CKeep when reformatting\u201D\u4E2D\u6709\u4E00\u4E2A\u201CEnsure rigth margin is not exceeded\u201D\uFF0C\u9009\u4E2D\u5B83\uFF0C\u662F\u4EC0\u4E48\u6548\u679C\u5462\uFF1F 7.\u4ECE\u914D\u7F6E\u9879\u7684\u5B57\u9762\u610F\u601D\u5F88\u5BB9\u6613\u7406\u89E3\uFF0C\u5728\u683C\u5F0F\u5316Java\u4EE3\u7801\u65F6\uFF0C\u786E\u4FDD\u4EE3\u7801\u6CA1\u6709\u8D85\u8FC7\u5BBD\u5EA6\u754C\u7EBF\u3002 8.\u5373\u8F93\u5165\u7684\u4EE3\u7801\u8D85\u51FA\u754C\u7EBF\u540E</p><h2 id="idea-\u63D0\u793A\u4E0D\u533A\u5206\u5927\u5C0F\u5199" tabindex="-1"><a class="header-anchor" href="#idea-\u63D0\u793A\u4E0D\u533A\u5206\u5927\u5C0F\u5199" aria-hidden="true">#</a> IDEA \u63D0\u793A\u4E0D\u533A\u5206\u5927\u5C0F\u5199</h2><p>1.\u9996\u5148\u6253\u5F00File-----&gt;setting 2.\u7136\u540E\uFF0C\u8F93\u5165\uFF1Asensitive 3.\u5C06\u53F3\u4FA7\u7684 case sensitive completion \u4FEE\u6539\u4E3ANONE</p><h2 id="\u9690\u85CF\u4E0D\u60F3\u770B\u5230\u7684\u6587\u4EF6\u6216\u8005\u6587\u4EF6\u5939-\u7C7B\u4F3Ceclipse\u7684filter\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u9690\u85CF\u4E0D\u60F3\u770B\u5230\u7684\u6587\u4EF6\u6216\u8005\u6587\u4EF6\u5939-\u7C7B\u4F3Ceclipse\u7684filter\u529F\u80FD" aria-hidden="true">#</a> \u9690\u85CF\u4E0D\u60F3\u770B\u5230\u7684\u6587\u4EF6\u6216\u8005\u6587\u4EF6\u5939\uFF08\u7C7B\u4F3Ceclipse\u7684filter\u529F\u80FD\uFF09</h2><p>intellij idea \u9690\u85CF\u4E0D\u60F3\u770B\u5230\u7684\u6587\u4EF6\u6216\u8005\u6587\u4EF6\u5939\uFF08\u7C7B\u4F3Ceclipse\u7684filter\u529F\u80FD\uFF09 \u6253\u5F00intellij --&gt;:&gt;File --&gt;&gt;Settings--&gt;&gt;\u641C\u7D22File Type</p><h2 id="\u4FEE\u6539\u667A\u80FD\u63D0\u793A\u5FEB\u6377\u952E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u667A\u80FD\u63D0\u793A\u5FEB\u6377\u952E" aria-hidden="true">#</a> \u4FEE\u6539\u667A\u80FD\u63D0\u793A\u5FEB\u6377\u952E</h2><p>1.File -&gt; Settings -&gt; Keymap -&gt; Main menu -&gt; Code -&gt; Completion -&gt; Basic=&gt;\u4FEE\u6539\u4E3ACtrl+Alt+Enter<br> 2.\u4FDD\u5B58\u65F6\u628A\u51B2\u7A81\u7684Remove\u6389\u3002 3.File -&gt; Settings -&gt; Keymap -&gt; Editor Actions -&gt; Complete Current Statement=&gt;\u4FEE\u6539\u4E3ACtrl+</p><h2 id="\u4EE3\u7801\u667A\u80FD\u63D0\u793A-\u5FFD\u7565\u5927\u5C0F\u5199" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u667A\u80FD\u63D0\u793A-\u5FFD\u7565\u5927\u5C0F\u5199" aria-hidden="true">#</a> \u4EE3\u7801\u667A\u80FD\u63D0\u793A\uFF0C\u5FFD\u7565\u5927\u5C0F\u5199</h2><p>File -&gt; Settings -&gt; Editor -&gt; Code Completion\u91CC\u628ACase sensitive completion\u8BBE\u7F6E\u4E3ANone\u5C31\u53EF\u4EE5\u4E86</p><h2 id="\u63D0\u793A\u5B9E\u73B0serializable\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u63D0\u793A\u5B9E\u73B0serializable\u63A5\u53E3" aria-hidden="true">#</a> \u63D0\u793A\u5B9E\u73B0Serializable\u63A5\u53E3</h2><p>1.\u4F7F\u7528 Eclipse \u6216 MyEclipse \u7684\u540C\u5B66\u53EF\u80FD\u77E5\u9053\uFF0C\u5982\u679C implements Serializable \u63A5\u53E3\u65F6\uFF0C\u4F1A\u63D0\u793A\u4F60\u751F\u6210 serialVersionUID\u3002 2.\u4F46 Intellij IDEA \u9ED8\u8BA4\u6CA1\u542F\u7528\u8FD9\u4E2A\u529F\u80FD\u3002 3.Preferences-&gt;IEditor-&gt;nspections-&gt;Serialization issues-&gt;Serializable class without \u2019serialVersionUID\u2019\uFF0C 4.\u9009\u4E2D\u4EE5\u4E0A\u540E\uFF0C\u5728\u4F60\u7684class\u4E2D\uFF1A\u5149\u6807\u5B9A\u4F4D\u5728\u7C7B\u540D\u524D\uFF0C\u6309 Alt+Enter \u5C31\u4F1A\u63D0\u793A\u81EA\u52A8\u521B\u5EFA serialVersionUID</p>`,15),t=[r];function l(p,o){return a(),s("div",null,t)}const d=e(i,[["render",l],["__file","idea-optimization.html.vue"]]);export{d as default};