import{_ as e,o as n,c as s,e as i}from"./app.a667bd71.js";const a={},l=i(`<h3 id="bad-practice-\u4EE3\u7801\u4E2D\u7684\u4E00\u4E9B\u574F\u4E60\u60EF" tabindex="-1"><a class="header-anchor" href="#bad-practice-\u4EE3\u7801\u4E2D\u7684\u4E00\u4E9B\u574F\u4E60\u60EF" aria-hidden="true">#</a> Bad practice \u4EE3\u7801\u4E2D\u7684\u4E00\u4E9B\u574F\u4E60\u60EF</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u4E3B\u8981\u5305\u62EC\u7C7B\u540D\u7684\u547D\u540D\uFF0C\u4EE5\u5927\u5199\u5B57\u6BCD\u5F00\u5934 
Class names should start with an upper <span class="token keyword">case</span> letter 
\u65B9\u6CD5\u540D\u4EE5\u5C0F\u5199\u5B57\u6BCD\u5F00\u5934 
Method names should start with a lower <span class="token keyword">case</span> letter 
\u5B57\u6BB5\u540D\u4EE5\u5C0F\u5199\u5B57\u6BCD\u5F00\u5934 
Field names should start with a lower <span class="token keyword">case</span> letter 
\u65B9\u6CD5\u5E94\u8BE5\u68C0\u67E5\u975E\u7A7A 
equals<span class="token punctuation">(</span><span class="token punctuation">)</span>method does not check <span class="token keyword">for</span> null argument equals<span class="token punctuation">(</span><span class="token punctuation">)</span>
\u4E00\u4E2A\u7C7B\u8986\u5199\u4E86equals\u65B9\u6CD5\uFF0C\u6CA1\u6709\u8986\u5199hashCode\u65B9\u6CD5\uFF0C\u4F7F\u7528\u4E86Object\u5BF9\u8C61\u7684hashCode\u65B9\u6CD5 
Class defines equals<span class="token punctuation">(</span><span class="token punctuation">)</span> and uses Object.hashCode<span class="token punctuation">(</span><span class="token punctuation">)</span> 
\u65B9\u6CD5\u5FFD\u7565\u8FD4\u56DE\u503C\u7684\u5F02\u5E38\u4FE1\u606F 
Method ignores exceptional <span class="token builtin class-name">return</span> value 
\u65B9\u6CD5\u4E0D\u80FD\u5BF9\u53C2\u6570o\u7684\u7C7B\u578B\u505A\u4EFB\u4F55\u7684\u5047\u8BBE\u3002\u6BD4\u8F83\u6B64\u5BF9\u8C61\u4E0E\u6307\u5B9A\u7684\u5BF9\u8C61\u3002\u5F53\u4E14\u4EC5\u5F53\u8BE5\u53C2\u6570\u4E0D\u4E3A null\uFF0C\u5E76\u4E14\u662F\u8868\u793A\u4E0E\u6B64\u5BF9\u8C61\u76F8\u540C\u7684\u7C7B\u578B\u7684\u5BF9\u8C61\u65F6\uFF0C\u7ED3\u679C\u624D\u4E3A true\u3002 
Equals method should not assume anything about the <span class="token builtin class-name">type</span> of its argument equals<span class="token punctuation">(</span>Object o<span class="token punctuation">)</span>
\u7528<span class="token operator">==</span>\u6216\u8005\uFF01<span class="token operator">=</span>\u53BB\u6BD4\u8F83String\u7C7B\u578B\u7684\u5BF9\u8C61 
Comparison of String objects using <span class="token operator">==</span> or <span class="token operator">!=</span> 
\u65B9\u6CD5\u53EF\u80FD\u5FFD\u7565\u5F02\u5E38 
Method might ignore exception 
\u5728\u65B9\u6CD5\u4E2D\u8C03\u7528System.exit<span class="token punctuation">(</span>\u2026<span class="token punctuation">)</span>\u8BED\u53E5\uFF0C\u8003\u8651\u7528RuntimeException\u6765\u4EE3\u66FF 
Method invokes System.exit<span class="token punctuation">(</span><span class="token punctuation">)</span> 
\u65B9\u6CD5\u5FFD\u7565\u8FD4\u56DE\u7684\u591A\u4E2A\u5B57\u7B26\uFF0C\u5982\u679C\u5BF9\u7ED3\u679C\u6CA1\u6709\u68C0\u67E5\u5C31\u6CA1\u6CD5\u6B63\u786E\u5904\u7406\u7528\u6237\u8BFB\u53D6\u5C11\u91CF\u5B57\u7B26\u8BF7\u6C42\u7684\u60C5\u51B5\u3002 
Method ignores result of InputStream.read<span class="token punctuation">(</span><span class="token punctuation">)</span> InputStream.read
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dodgy-code-\u7CDF\u7CD5\u7684\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#dodgy-code-\u7CDF\u7CD5\u7684\u4EE3\u7801" aria-hidden="true">#</a> Dodgy code \u7CDF\u7CD5\u7684\u4EE3\u7801</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u6CA1\u6709\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6267\u884C\u7684case\u8BED\u53E5 
Switch statement found where default <span class="token keyword">case</span> is missing Switch
\u8BED\u53E5\u4E2D\u4E00\u4E2A\u5206\u652F\u6267\u884C\u540E\u53C8\u6267\u884C\u4E86\u4E0B\u4E00\u4E2A\u5206\u652F\u3002\u901A\u5E38case\u540E\u9762\u8981\u8DDFbreak \u6216\u8005return\u8BED\u53E5\u6765\u8DF3\u51FA\u3002 
Switch statement found where one <span class="token keyword">case</span> falls through to the next <span class="token keyword">case</span> Switch
\u8BE5\u6307\u4EE4\u4E3A\u5C40\u90E8\u53D8\u91CF\u8D4B\u503C\uFF0C\u4F46\u5728\u5176\u540E\u7684\u6CA1\u6709\u5BF9\u5979\u505A\u4EFB\u4F55\u4F7F\u7528\u3002\u901A\u5E38\uFF0C\u8FD9\u8868\u660E\u4E00\u4E2A\u9519\u8BEF\uFF0C\u56E0\u4E3A\u503C\u4ECE\u672A\u4F7F\u7528\u8FC7\u3002 
Dead store to <span class="token builtin class-name">local</span> variable 
\u5728\u5B9E\u4F8B\u65B9\u6CD5\u5199\u5165\u9759\u6001\u5B57\u6BB5 
Write to static field from instance method 
\u65B9\u6CD5\u4E2D\u5BF9\u4E0D\u4E3A\u7A7A\u7684\u503C\u8FDB\u884C\u4E3A\u7A7A\u7684\u5224\u65AD\u3002
Redundant nullcheck of value known to be non-null  
\u6B64\u65B9\u6CD5\u4F7F\u7528\u76F8\u540C\u7684\u4EE3\u7801\uFF0C\u4EE5\u5B9E\u73B0\u4E24\u4E2A\u6709\u6761\u4EF6\u7684\u5206\u652F\u3002\u68C0\u67E5\u4EE5\u786E\u4FDD\u8FD9\u662F\u4E0D\u662F\u4E00\u4E2A\u7F16\u7801\u9519\u8BEF 
Method uses the same code <span class="token keyword">for</span> two branches 
\u5728try/catch\u5757\u4E2D\u6355\u83B7\u5F02\u5E38\uFF0C\u4F46\u662F\u5F02\u5E38\u6CA1\u6709\u5728try\u8BED\u53E5\u4E2D\u629B\u51FA\u800CRuntimeException\u53C8\u6CA1\u6709\u660E\u786E\u7684\u88AB\u6355\u83B7 
Exception is caught when Exception is not thrown 
\u6574\u5F62\u6570\u9664\u6CD5\u5F3A\u5236\u8F6C\u6362\u4E3Adouble\u6216\u8005float\u7C7B\u578B\u3002 
Integral division result cast to double or float 
\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u6CA1\u6709\u8FDB\u884C\u662F\u5426\u4E3A\u7A7A\u7684\u68C0\u67E5\u5C31\u91CD\u65B0\u8D4B\u503C\uFF0C\u8FD9\u6837\u53EF\u80FD\u4F1A\u51FA\u73B0\u7A7A\u6307\u9488\u5F02\u5E38\u3002 
Possible null pointer dereference due to <span class="token builtin class-name">return</span> value of called method 
\u5BF9\u8C61\u521B\u5EFA\u4E86\u5E76\u6CA1\u6709\u7528 
Useless object created 
\u6CA1\u6709\u7528\u5230\u7684\u5B57\u6BB5 
Unread public/protected field
\u5173\u4E8E\u4EE3\u7801\u56FD\u9645\u5316\u76F8\u5173\u65B9\u9762\u7684
Internationalization 
Consider using Locale parameterized version of invoked method 
\u4F7F\u7528\u5E73\u53F0\u9ED8\u8BA4\u7684\u7F16\u7801\u683C\u5F0F\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u5927\u5C0F\u5199\u8F6C\u6362\uFF0C\u8FD9\u53EF\u80FD\u5BFC\u81F4\u56FD\u9645\u5B57\u7B26\u7684\u8F6C\u6362\u4E0D\u5F53\u3002\u4F7F\u7528\u4EE5\u4E0B\u65B9\u5F0F\u5BF9\u5B57\u7B26\u8FDB\u884C\u8F6C\u6362 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="performance-\u5173\u4E8E\u4EE3\u7801\u6027\u80FD\u76F8\u5173\u65B9\u9762\u7684" tabindex="-1"><a class="header-anchor" href="#performance-\u5173\u4E8E\u4EE3\u7801\u6027\u80FD\u76F8\u5173\u65B9\u9762\u7684" aria-hidden="true">#</a> Performance \u5173\u4E8E\u4EE3\u7801\u6027\u80FD\u76F8\u5173\u65B9\u9762\u7684</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u7C7B\u578B\u8F6C\u6362 \u6BD4\u5982\u5B57\u7B26\u4E32\u8F6C\u6362\u6210int \u5E94\u8BE5\u4F7F\u7528Integer.parseInt<span class="token punctuation">(</span>\u201C\u201D<span class="token punctuation">)</span> \u4EE3\u66FFInteger.valueOf<span class="token punctuation">(</span>\u201C\u201D<span class="token punctuation">)</span> 
Boxing/unboxing to parse a primitive 
\u6BCF\u6B21\u5FAA\u73AF\u91CC\u7684\u5B57\u7B26\u4E32+\u8FDE\u63A5\uFF0C\u90FD\u4F1A\u65B0\u4EA7\u751F\u4E00\u4E2Astring\u5BF9\u8C61\uFF0C\u5728java\u4E2D\uFF0C\u65B0\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u7684\u4EE3\u4EF7\u662F\u5F88\u6602\u8D35\u7684\uFF0C\u7279\u522B\u662F\u5728\u5FAA\u73AF\u8BED\u53E5\u4E2D\uFF0C\u6548\u7387\u8F83\u4F4E 
Method concatenates string using + <span class="token keyword">in</span> aloop 
\u89E3\u51B3\u529E\u6CD5\uFF1A\u4F7F\u7528StringBuffer\u6216\u8005StringBuilder\u91CD\u7528\u5BF9\u8C61\u3002
\u79C1\u6709\u65B9\u6CD5\u6CA1\u6709\u88AB\u8C03\u7528  
Private method is never called
\u5728\u4EE3\u7801\u4E2D\u663E\u5F0F\u7684\u8C03\u7528\u5783\u573E\u56DE\u6536\u547D\u540D\uFF0C\u8FD9\u6837\u505A\u5E76\u4E0D\u80FD\u8D77\u4F5C\u7528\u3002\u5728\u8FC7\u53BB\uFF0C\u6709\u4EBA\u5728\u5173\u95ED\u64CD\u4F5C\u6216\u8005finalize\u65B9\u6CD5\u4E2D\u8C03\u7528\u5783\u573E\u56DE\u6536\u65B9\u6CD5\u5BFC\u81F4\u4E86\u5F88\u591A\u7684\u6027\u80FD\u6D6A\u8D39\u3002\u8FD9\u6837\u5927\u89C4\u6A21\u56DE\u6536\u5BF9\u8C61\u65F6\u4F1A\u9020\u6210\u5904\u7406\u5668\u8FD0\u884C\u7F13\u6162\u3002 
Explicit garbage collection<span class="token punctuation">;</span>extremely dubious except <span class="token keyword">in</span> benchmarking code 
\u6CA1\u6709\u7528\u5230\u7684static \u5B57\u6BB5 
Unread field:should this field be static? 
\u6B64\u5185\u90E8\u7C7B\u5E94\u8BE5\u4F7F\u7528static\u4FEE\u9970
should be a static inner class  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="experimental" tabindex="-1"><a class="header-anchor" href="#experimental" aria-hidden="true">#</a> Experimental</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Method may fail to clean up stream or resource on checked exception 
\u8FD9\u79CD\u65B9\u6CD5\u53EF\u80FD\u65E0\u6CD5\u6E05\u9664\uFF08\u5173\u95ED\uFF0C\u5904\u7F6E\uFF09\u4E00\u4E2A\u6D41\uFF0C\u6570\u636E\u5E93\u5BF9\u8C61\uFF0C\u6216\u5176\u4ED6\u8D44\u6E90\u9700\u8981\u4E00\u4E2A\u660E\u786E\u7684\u6E05\u7406\u884C\u52A8 
\u89E3\u51B3\u65B9\u6CD5\uFF1A\u6D41\u7684\u5173\u95ED\u90FD\u5199\u5728finally\u91CC\u9762 
Malicious code vulnerability \u5173\u4E8E\u6076\u610F\u7834\u574F\u4EE3\u7801\u76F8\u5173\u65B9\u9762\u7684

\u6B64\u4EE3\u7801\u628A\u5916\u90E8\u53EF\u53D8\u5BF9\u8C61\u5F15\u7528\u5B58\u50A8\u5230\u5BF9\u8C61\u7684\u5185\u90E8\u8868\u793A\u3002\u5982\u679C\u5B9E\u4F8B\u53D7\u5230\u4E0D\u4FE1\u4EFB\u7684\u4EE3\u7801\u7684\u8BBF\u95EE\u548C\u6CA1\u6709\u68C0\u67E5\u7684\u53D8\u5316\u5371\u53CA\u5BF9\u8C61\u548C\u91CD\u8981\u5C5E\u6027\u7684\u5B89\u5168\u3002\u5B58\u50A8\u4E00\u4E2A\u5BF9\u8C61\u7684\u526F\u672C\uFF0C\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\u662F\u66F4\u597D\u7684\u529E\u6CD5\u3002 
May expose internal representation by incorporating reference to mutable object 

\u6B64\u5B57\u6BB5\u524D\u5E94\u8BE5\u52A0final 
Field isn\u2019t final but should be 
\u6B64\u5B57\u6BB5\u524D\u5E94\u8BE5\u52A0final 
Field isn\u2019t final and can\u2019t be protected from malicious code 
Field should be package protected 
\u4E00\u4E2A\u9759\u6001\u5B57\u6BB5\u662F\u53EF\u4EE5\u88AB\u6076\u610F\u4EE3\u7801\u6216\u5176\u4ED6\u7684\u5305\u8BBF\u95EE\u4FEE\u6539\u3002\u53EF\u4EE5\u628A\u8FD9\u79CD\u7C7B\u578B\u7684\u5B57\u6BB5\u58F0\u660E\u4E3Afinal\u7C7B\u578B\u7684\u4EE5\u9632\u6B62\u8FD9\u79CD\u9519\u8BEF\u3002 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="multithreaded-correctness-\u5173\u4E8E\u4EE3\u7801\u6B63\u786E\u6027\u76F8\u5173\u65B9\u9762\u7684" tabindex="-1"><a class="header-anchor" href="#multithreaded-correctness-\u5173\u4E8E\u4EE3\u7801\u6B63\u786E\u6027\u76F8\u5173\u65B9\u9762\u7684" aria-hidden="true">#</a> Multithreaded correctness \u5173\u4E8E\u4EE3\u7801\u6B63\u786E\u6027\u76F8\u5173\u65B9\u9762\u7684</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u5728\u591A\u7EBF\u7A0B\u4E2D\u672C\u8EAB\u5C31\u662F\u4E0D\u5B89\u5168\u7684\uFF0C\u5982\u679C\u5728\u7EBF\u7A0B\u8303\u56F4\u4E2D\u5171\u4EAB\u4E00\u4E2ADateFormat\u7684\u5B9E\u4F8B\u800C\u4E0D\u4F7F\u7528\u4E00\u4E2A\u540C\u6B65\u7684\u65B9\u6CD5\u5728\u5E94\u7528\u4E2D\u5C31\u4F1A\u51FA\u73B0\u4E00\u4E9B\u5947\u602A\u7684\u884C\u4E3A\u3002 
Static DateFormat DateFormat 
\u591A\u7EBF\u7A0B\u4F7F\u7528\u672C\u4E8B\u5C31\u662F\u4E0D\u5B89\u5168\u7684,\u6539\u8FDB\u65B9\u6CD5\uFF1A\u9700\u8981\u521B\u5EFA\u591A\u5B9E\u4F8B\u6216\u7EBF\u7A0B\u540C\u6B65 
Call to static DateFormat DateFormats
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="correctness-\u5173\u4E8E\u4EE3\u7801\u6B63\u786E\u6027\u76F8\u5173\u65B9\u9762\u7684" tabindex="-1"><a class="header-anchor" href="#correctness-\u5173\u4E8E\u4EE3\u7801\u6B63\u786E\u6027\u76F8\u5173\u65B9\u9762\u7684" aria-hidden="true">#</a> Correctness \u5173\u4E8E\u4EE3\u7801\u6B63\u786E\u6027\u76F8\u5173\u65B9\u9762\u7684</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u6B64\u4EE3\u7801\u4E4B\u524D\u5E9F\u5F03null\u503C\u68C0\u67E5\u3002\u89E3\u51B3\u529E\u6CD5 \u8FDB\u884Cnull\u68C0\u67E5 
Nullcheck of value previously dereferenced 
\u53EF\u80FD\u4E3Anull 
Possible null pointer dereference 
\u5BF9\u8C61\u8D4B\u4E3Anull\u503C\u540E \u6CA1\u6709\u88AB\u91CD\u65B0\u8D4B\u503C 
Null pointer dereference 
\u5728\u5F02\u5E38null\u503C\u5904\u7406\u5206\u652F\u8C03\u7528\u7684\u65B9\u6CD5\u4E0A\uFF0C\u53EF\u80FD\u5B58\u5728\u5BF9\u8C61\u53BB\u9664\u5F15\u7528\u64CD\u4F5C 
Possible null pointer dereference <span class="token keyword">in</span> method on exception path 
\u5206\u652F\u4E0A\uFF0C\u5B58\u5728\u5F15\u7528\u4E00\u4E2Anull\u5BF9\u8C61\u7684\u65B9\u6CD5\uFF0C\u5F15\u53D1\u7A7A\u6307\u9488\u5F02\u5E38\u3002 
value is null and guaranteed to be dereferenced on exception path exception
\u65B9\u6CD5\u4E2D\u5BF9\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\u81EA\u8EAB\u8FDB\u884C\u6BD4\u8F83\u8FD0\u7B97\uFF0C\u5E76\u53EF\u8BF4\u660E\u9519\u8BEF\u6216\u903B\u8F91\u9519\u8BEF\u3002\u8BF7\u786E\u4FDD\u60A8\u662F\u6BD4\u8F83\u6B63\u786E\u7684\u4E8B\u60C5\u3002 
Self comparison of value with itself 
\u660E\u663E\u7684\u65E0\u9650\u8FED\u4EE3\u5FAA\u73AF,\u5C06\u5BFC\u81F4\u5806\u6808\u6EA2\u51FA.
An apparent infinite recursive loop 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d=[l];function t(r,c){return n(),s("div",null,d)}const u=e(a,[["render",t],["__file","tools-findbugs.html.vue"]]);export{u as default};
