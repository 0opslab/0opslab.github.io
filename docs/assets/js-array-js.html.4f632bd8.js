import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},t=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\`\`\`ops</span>
<span class="token comment">//title:js\u4E2D\u6570\u7EC4\u7684\u90A3\u4E9B\u64CD\u4F5C</span>
<span class="token comment">//descr:JavaScript\u4E2D\u90A3\u4E9B\u6570\u7EC4array\u7684\u64CD\u4F5C</span>
<span class="token comment">//\`\`\`</span>

<span class="token comment">//\u6570\u7EC4\u57FA\u7840\u65B9\u6CD5</span>
<span class="token comment">/*
//filter()\u65B9\u6CD5\uFF0C\u4E0Emap\u65B9\u6CD5\u7C7B\u4F3C\uFF0C\u4E5F\u662F\u5BF9\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u6267\u884C\u76F8\u540C\u7684\u51FD\u6570\uFF0C\u5C06\u8FD4\u56DEtrue\u7684\u7ED3\u679C\u7EC4\u5408\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4\u3002
//map()\u65B9\u6CD5\uFF0C\u4E3B\u8981\u7528\u4E8E\u5BF9\u6BCF\u4E2A\u6570\u7EC4\u91CC\u9762\u7684\u5143\u7D20\u6267\u884C\u76F8\u540C\u7684\u51FD\u6570\u6765\u521B\u5EFA\u65B0\u7684\u6570\u7EC4\u3002
//forEach()\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4E3B\u8981\u7528\u4E8E\u904D\u5386\u6570\u7EC4\u3002
//isArray()\u65B9\u6CD5\u3002\u8FD9\u4E2A\u65B9\u6CD5\u4E3B\u8981\u7528\u6765\u5224\u65AD\u53D8\u91CF\u662F\u5426\u662F\u4E00\u4E2Ajs\u6570\u7EC4
1\uFF1Aconcat();//\u5408\u5E76\u6570\u7EC4\uFF0C\u53EF\u4EE5\u5408\u5E76\u4E00\u4E2A\u6216\u591A\u4E2A\u6570\u7EC4\uFF0C\u4F1A\u8FD4\u56DE\u5408\u5E76\u6570\u7EC4\u4E4B\u540E\u7684\u6570\u636E\uFF0C\u4E0D\u4F1A\u6539\u53D8\u539F\u6765\u7684\u6570\u7EC4
2\uFF1Ajoin();//\u529F\u80FD\uFF1A\u5C06\u6570\u7EC4\u8F6C\u4E3A\u5B57\u7B26\u4E32\u5E76\u8FD4\u56DE\u8F6C\u5316\u7684\u5B57\u7B26\u4E32\u6570\u636E\uFF0C\u4E0D\u4F1A\u6539\u53D8\u539F\u6765\u7684\u6570\u7EC4\uFF1B
3\uFF1Apop();//\u529F\u80FD\uFF1A\u5220\u9664\u6570\u7EC4\u7684\u6700\u540E\u4E00\u4F4D\uFF0C\u5E76\u4E14\u8FD4\u56DE\u5220\u9664\u7684\u6570\u636E\uFF0C\u4F1A\u6539\u53D8\u539F\u6765\u7684\u6570\u7EC4
4\uFF1Ashift();//\u529F\u80FD\uFF1A\u5220\u9664\u6570\u7EC4\u7684\u7B2C\u4E00\u4F4D\u6570\u636E\uFF0C\u5E76\u4E14\u8FD4\u56DE\u5220\u9664\u7684\u6570\u636E\uFF0C\u4F1A\u6539\u53D8\u539F\u6765\u7684\u6570\u7EC4\u3002
5\uFF1Aunshift();//\u529F\u80FD\uFF1A\u5728\u6570\u7EC4\u7684\u9996\u4F4D\u65B0\u589E\u4E00\u4E2A\u6216\u591A\u6570\u636E\uFF0C\u5E76\u4E14\u8FD4\u56DE\u65B0\u6570\u7EC4\u7684\u957F\u5EA6\uFF0C\u4F1A\u6539\u53D8\u539F\u6765\u7684\u6570\u7EC4
6\uFF1Apush();//\u529F\u80FD\uFF1A\u5728\u6570\u7EC4\u7684\u6700\u540E\u4E00\u4F4D\u65B0\u589E\u4E00\u4E2A\u6216\u591A\u4E2A\u6570\u636E\uFF0C\u5E76\u4E14\u8FD4\u56DE\u65B0\u6570\u7EC4\u7684\u957F\u5EA6\uFF0C\u4F1A\u6539\u53D8\u539F\u6765\u7684\u6570\u7EC4
7\uFF1Areverse();//\u5C06\u6570\u7EC4\u7684\u6570\u636E\u8FDB\u884C\u53CD\u8F6C\uFF0C\u5E76\u4E14\u8FD4\u56DE\u53CD\u8F6C\u540E\u7684\u6570\u7EC4\uFF0C\u4F1A\u6539\u53D8\u539F\u6570\u7EC4
8\uFF1Asort();//\u529F\u80FD\uFF1A\u5BF9\u6570\u7EC4\u5185\u7684\u6570\u636E\u8FDB\u884C\u6392\u5E8F(\u9ED8\u8BA4\u4E3A\u5347\u5E8F)\uFF0C\u5E76\u4E14\u8FD4\u56DE\u6392\u8FC7\u5E8F\u7684\u65B0\u6570\u7EC4\uFF0C\u4F1A\u6539\u53D8\u539F\u6765\u7684\u6570\u7EC4
9\uFF1Aslice();//\u529F\u80FD\uFF1A\u622A\u53D6\u6307\u5B9A\u4F4D\u7F6E\u7684\u6570\u7EC4\uFF0C\u5E76\u4E14\u8FD4\u56DE\u622A\u53D6\u7684\u6570\u7EC4\uFF0C\u4E0D\u4F1A\u6539\u53D8\u539F\u6570\u7EC4
10\uFF1Asplice();//\u529F\u80FD\uFF1A\u5411\u6570\u7EC4\u4E2D\u6DFB\u52A0\uFF0C\u6216\u4ECE\u6570\u7EC4\u5220\u9664\uFF0C\u6216\u66FF\u6362\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\uFF0C\u7136\u540E\u8FD4\u56DE\u88AB\u5220\u9664/\u66FF\u6362\u7684\u5143\u7D20\u3002
11\uFF1AtoString();//\u529F\u80FD\uFF1A\u5C06\u6570\u7EC4\u8F6C\u6362\u6210\u5B57\u7B26\u4E32\uFF0C\u7C7B\u4F3C\u4E8E\u6CA1\u6709\u53C2\u6570\u7684join()\u3002\u8BE5\u65B9\u6CD5\u4F1A\u5728\u6570\u636E\u53D1\u751F\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u65F6\u88AB\u81EA\u52A8\u8C03\u7528\uFF0C\u5982\u679C\u624B\u52A8\u8C03\u7528\uFF0C\u5C31\u662F\u76F4\u63A5\u8F6C\u4E3A\u5B57\u7B26\u4E32\u3002\u4E0D\u4F1A\u6539\u53D8\u539F\u6570\u7EC4
12\uFF1AvalueOf();//\u529F\u80FD\uFF1A\u8FD4\u56DE\u6570\u7EC4\u7684\u539F\u59CB\u503C\uFF08\u4E00\u822C\u60C5\u51B5\u4E0B\u5176\u5B9E\u5C31\u662F\u6570\u7EC4\u81EA\u8EAB\uFF09\uFF0C\u4E00\u822C\u7531js\u5728\u540E\u53F0\u8C03\u7528\uFF0C\u5E76\u4E0D\u663E\u5F0F\u7684\u51FA\u73B0\u5728\u4EE3\u7801\u4E2D
13\uFF1AIndexOf();//\u529F\u80FD\uFF1A\u6839\u636E\u6307\u5B9A\u7684\u6570\u636E\uFF0C\u4ECE\u5DE6\u5411\u53F3\uFF0C\u67E5\u8BE2\u5728\u6570\u7EC4\u4E2D\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u6307\u5B9A\u7684\u6570\u636E\uFF0C\u8FD4\u56DE-1\uFF0C\u627E\u5230\u4E86\u6307\u5B9A\u7684\u6570\u636E\u8FD4\u56DE\u8BE5\u6570\u636E\u7684\u7D22\u5F15
14\uFF1AlastIndexOf();//\u529F\u80FD\uFF1AlastIndexOf() \u65B9\u6CD5\u53EF\u8FD4\u56DE\u4E00\u4E2A\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\u503C\u6700\u540E\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF0C\u5982\u679C\u6307\u5B9A\u7B2C\u4E8C\u4E2A\u53C2\u6570 start\uFF0C\u5219\u5728\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u7684\u6307\u5B9A\u4F4D\u7F6E\u4ECE\u540E\u5411\u524D\u641C\u7D22\u3002
15\uFF1AforEach();//\u529F\u80FD\uFF1AES5\u65B0\u589E\u7684\u65B9\u6CD5\uFF0C\u7528\u6765\u904D\u5386\u6570\u7EC4\uFF0C\u6CA1\u6709\u8FD4\u56DE\u503C\uFF0C
16\uFF1Amap();//map\u7684\u56DE\u8C03\u51FD\u6570\u4F1A\u5C06\u6267\u884C\u7ED3\u679C\u8FD4\u56DE\uFF0C\u6700\u540Emap\u5C06\u6240\u6709\u56DE\u8C03\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7EC4\u6210\u65B0\u6570\u7EC4\u8FD4\u56DE\u3002
17\uFF1Afilter();//\u529F\u80FD\uFF1A 1.\u540CforEach\u529F\u80FD\uFF1B 2.filter\u7684\u56DE\u8C03\u51FD\u6570\u9700\u8981\u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u5F53\u4E3Atrue\u65F6\uFF0C\u5C06\u672C\u6B21\u6570\u7EC4\u7684\u6570\u636E\u8FD4\u56DE
18\uFF1Aevery();//\u529F\u80FD\uFF1A\u5224\u65AD\u6570\u7EC4\u4E2D\u6BCF\u4E00\u9879\u662F\u5426\u90FD\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u53EA\u6709\u6240\u6709\u9879\u90FD\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u624D\u4F1A\u8FD4\u56DEtrue\u3002
19\uFF1Asome();//\u529F\u80FD\uFF1A\u5224\u65AD\u6570\u7EC4\u4E2D\u662F\u5426\u5B58\u5728\u6EE1\u8DB3\u6761\u4EF6\u7684\u9879\uFF0C\u53EA\u8981\u6709\u4E00\u9879\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u5C31\u4F1A\u8FD4\u56DEtrue\u3002
20.reduce();//\u529F\u80FD\uFF1A\u4ECE\u6570\u7EC4\u7684\u7B2C\u4E00\u9879\u5F00\u59CB\uFF0C\u9010\u4E2A\u904D\u5386\u5230\u6700\u540E\uFF0C\u8FED\u4EE3\u6570\u7EC4\u7684\u6240\u6709\u9879\uFF0C\u7136\u540E\u6784\u5EFA\u4E00\u4E2A\u6700\u7EC8\u8FD4\u56DE\u7684\u503C\u3002
21.reduceRight()//\u529F\u80FD\uFF1A\uFF08\u4E0Ereduce\u7C7B\u4F3C\uFF09\u4ECE\u6570\u7EC4\u7684\u6700\u540E\u4E00\u9879\u5F00\u59CB\uFF0C\u5411\u524D\u9010\u4E2A\u904D\u5386\u5230\u7B2C\u4E00\u4F4D\uFF0C\u8FED\u4EE3\u6570\u7EC4\u7684\u6240\u6709\u9879\uFF0C
*/</span>
<span class="token comment">//## \u6570\u7EC4\u904D\u5386</span>

<span class="token comment">//for \u5FAA\u73AF</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> someArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> elem <span class="token operator">=</span> someArray<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token comment">// \xB7\xB7\xB7</span>
<span class="token punctuation">}</span>

<span class="token comment">//for-in \u5FAA\u73AF</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> someArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u6570\u7EC4\u65B9\u6CD5 .forEach()</span>
<span class="token comment">// forEach() \u7684\u4E3B\u8981\u7F3A\u70B9\u662F\uFF1A</span>

<span class="token comment">// \u4E0D\u80FD\u5728\u5B83\u7684\u5FAA\u73AF\u4F53\u4E2D\u4F7F\u7528 await\u3002</span>
<span class="token comment">// \u4E0D\u80FD\u63D0\u524D\u9000\u51FA .forEach() \u5FAA\u73AF\u3002\u800C\u5728 for \u5FAA\u73AF\u4E2D\u53EF\u4EE5\u4F7F\u7528 break\u3002</span>
someArray<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">elem<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>elem<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//for-of \u5FAA\u73AF(\u63A8\u8350 ECMAScript 6\u652F\u6301)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> elem <span class="token keyword">of</span> someArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u6570\u7EC4\u7684\u5176\u4ED6\u65B9\u6CD5</span>
<span class="token comment">//indexOf()\u8BBF\u6C42 \uFF0C\u4E3B\u8981\u7528\u4E8E\u5728\u6570\u7EC4\u4E2D\u67E5\u627E\u5143\u7D20\uFF0C\u5E76\u628A\u5143\u7D20\u7684\u4F4D\u7F6E\u8FD4\u56DE\u6765\u3002</span>
<span class="token comment">//every()\u65B9\u6CD5\uFF0C\u4E3B\u8981\u7528\u4E8E\u68C0\u67E5\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5143\u7D20\u662F\u5426\u7B26\u5408\u51FD\u6570\u7684\u6761\u4EF6\uFF0C\u5982\u679C\u5176\u4E2D\u6709\u4E00\u4E2A\u4E0D\u7B26\u5408\uFF0C\u5219\u8FD4\u56DEfalse</span>


<span class="token comment">//reduce()\u65B9\u6CD5\uFF0C\u4E3B\u8981\u662F\u5BF9\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u6267\u884C\u51FD\u6570\uFF0C\u751F\u6210\u4E00\u4E2A\u503C\u3002\u4F8B\u5982\uFF0C\u4E0B\u9762\u6C42\u6570\u7EC4\u5143\u7D20\u7684\u603B\u548C\u3002</span>
<span class="token keyword">var</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> total <span class="token operator">+</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>getSum<span class="token punctuation">)</span>




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[t];function l(p,o){return s(),a("div",null,c)}const d=n(i,[["render",l],["__file","js-array-js.html.vue"]]);export{d as default};
