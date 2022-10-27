import{_ as n,o as s,c as a,e as t}from"./app.a667bd71.js";const e={},l=t(`<p>\u5185\u8054\u6837\u5F0F\u4E4B\u5916,\u5B9A\u4E49CSS\u6837\u5F0F\u7684\u8BED\u6CD5\u603B\u9075\u5B88\u5982\u4E0B\u7684\u683C\u5F0F:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*select -\u9009\u62E9\u5668: \u51B3\u5B9A\u8BE5\u6837\u5F0F\u5B9A\u4E49\u5BF9\u90A3\u4E9B\u5143\u7D20\u8D77\u4F5C\u7528*/</span>
<span class="token selector">selector</span><span class="token punctuation">{</span>
<span class="token comment">/*property:value -\u5C5E\u6027\u5B9A\u4E49:\u51B3\u5B9A\u4E86\u8FD9\u5143\u7D20\u8D77\u4EC0\u4E48\u6837\u7684\u4F5C\u7528 (\u5B57\u4F53,\u989C\u8272,\u5E03\u5C40\u7B49)*/</span>
    <span class="token property">property1</span><span class="token punctuation">:</span>value1<span class="token punctuation">;</span>
    <span class="token property">property2</span><span class="token punctuation">:</span>value2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u7B80\u5355\u7684\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u6700\u7B80\u5355\u7684\u9009\u62E9\u5668" aria-hidden="true">#</a> \u6700\u7B80\u5355\u7684\u9009\u62E9\u5668</h3><p>\u5143\u7D20\u9009\u62E9\u5668\u662F\u6700\u7B80\u5355\u7684\u9009\u62E9\u5668,\u5176\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">E</span> <span class="token punctuation">{</span> ....<span class="token punctuation">}</span>     <span class="token comment">/*\u5176\u4E2DE\u4EE3\u8868\u6709\u6548\u7684HTML\u5143\u7D20\u540D*/</span>
<span class="token comment">/*\u5177\u4F53\u53EF\u5206\u4E3A\u5982\u4E0B\u51E0\u79CD*/</span>
<span class="token selector">E</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>                    <span class="token selector">\u6307\u5B9A\u8BE5\u6837\u5F0F\u5BF9\u90A3\u4E9B\u6807\u7B7E\u8D77\u4F5C\u7528
E[attr]</span><span class="token punctuation">{</span><span class="token punctuation">}</span>               <span class="token selector">\u6307\u5B9A\u8BE5\u6837\u5F0F\u5BF9\u5177\u6709\u67D0\u4E00\u5C5E\u6027\u7684\u6807\u7B7E\u8D77\u4F5C\u7528
E[attr=value]</span><span class="token punctuation">{</span><span class="token punctuation">}</span>         <span class="token selector">\u6307\u5B9A\u8BE5\u6837\u5F0F\u5BF9\u5177\u6709\u67D0\u4E00\u5C5E\u6027\u4E14\u5176\u503C\u4E3Avalue\u7684\u6807\u7B7E\u8D77\u4F5C\u7528
E[attr~=value]</span><span class="token punctuation">{</span><span class="token punctuation">}</span>        <span class="token selector">\u6307\u5B9A\u8BE5\u6837\u5F0F\u5BF9\u5177\u6709\u67D0\u4E00\u5C5E\u6027\u4E14\u5176\u804C\u80FD\u80A1\u4E3A\u7A7A\u683C\u9694\u5F00\u7684\u7CFB\u5217\u4E2D,\u5176\u4E2D\u67D0\u4E2A\u503C\u4E3Avalue\u7684\u6807\u7B7E\u8D77\u4F5C\u7528
E[attr |= value]</span><span class="token punctuation">{</span><span class="token punctuation">}</span>      <span class="token selector">\u6307\u5B9A\u8BE5\u6837\u5F0F\u5BF9\u5177\u6709\u67D0\u4E00\u5C5E\u6027\u4E14\u5176\u804C\u80FD\u80A1\u4E3A\u7A7A\u683C\u9694\u5F00\u7684\u7CFB\u5217\u4E2D,\u5176\u4E2D\u7B2C\u4E00\u4E2A\u503C\u4E3Avalue\u7684\u6807\u7B7E\u8D77\u4F5C\u7528
E[attr ^=value]</span><span class="token punctuation">{</span><span class="token punctuation">}</span>       <span class="token selector">\u6307\u5B9A\u8BE5\u6837\u5F0F\u5BF9\u5177\u6709\u67D0\u4E00\u5C5E\u6027,\u4E14\u5176\u503C\u662F\u4EE5value\u5F00\u5934\u7684\u6807\u7B7E\u8D77\u4F5C\u7528
E[att$=&quot;value &quot;]</span><span class="token punctuation">{</span><span class="token punctuation">}</span>      <span class="token selector">\u6307\u5B9A\u8BE5\u6837\u5F0F\u5BF9\u5177\u6709\u67D0\u4E00\u5C5E\u6027,\u4E14\u5176\u503C\u662F\u4EE5value\u7ED3\u5C3E\u7684\u6807\u7B7E\u8D77\u4F5C\u7528
E[att*=&quot;value&quot;]</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>      <span class="token selector">\u6307\u5B9A\u8BE5\u6837\u5F0F\u5BF9\u5177\u6709\u67D0\u4E00\u5C5E\u6027,\u4E14\u5176\u503C\u5305\u542Bvalue\u7684\u6807\u7B7E\u8D77\u4F5C\u7528.

&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
 &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html;charset=UTF-8&quot;&gt;
 &lt;title&gt;CSS\u5C5E\u6027\u9009\u62E9\u5668&lt;/title&gt;
 &lt;style type=&quot;text/css&quot;&gt;

    div</span><span class="token punctuation">{</span>
         <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
         <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
         <span class="token property">background-color</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
         <span class="token property">border</span><span class="token punctuation">:</span>1px solid black<span class="token punctuation">;</span>
     <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token comment">/*\u5BF9\u6240\u6709ID\u5C5E\u6027\u7684div*/</span>
<span class="token selector">div[id]</span><span class="token punctuation">{</span>
 <span class="token property">background-color</span><span class="token punctuation">:</span> #aaa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*\u5BF9id\u5C5E\u6027\u5305\u542Bxx\u7684div*/</span>
<span class="token selector">div[id*=xx]</span><span class="token punctuation">{</span>
 <span class="token property">background-color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*\u5BF9id\u5C5E\u6027\u4EE5xx\u5F00\u5934\u7684div*/</span>
<span class="token selector">div[id^=xx]</span><span class="token punctuation">{</span>
 <span class="token property">background-color</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
 <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*\u5BF9id\u5C5E\u6027\u7B49\u4E8Exx\u7684div*/</span>
<span class="token selector">div[id=xx]</span><span class="token punctuation">{</span>
 <span class="token property">background-color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
 <span class="token property">color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

 &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
 &lt;div&gt;\u6CA1\u6709\u4EFB\u4F55\u5C5E\u6027\u7684div&lt;/div&gt;
 &lt;div id=<span class="token string">&#39;a&#39;</span>&gt; \u5E26\u6709ID\u5C5E\u6027\u7684div&lt;/div&gt;
 &lt;div id=<span class="token string">&quot;zzxx&quot;</span>&gt; id\u5C5E\u6027\u4E2D\u5305\u542Bxx&lt;/div&gt;
 &lt;div id=<span class="token string">&quot;xxyy&quot;</span>&gt; id\u5C5E\u6027\u4EE5xx\u5F00\u5934\u7684div&lt;/div&gt;
 &lt;div id=<span class="token string">&#39;xx&#39;</span>&gt;id\u5C5E\u6027\u503C\u7B49\u4E8Exx\u7684div&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="id\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#id\u9009\u62E9\u5668" aria-hidden="true">#</a> ID\u9009\u62E9\u5668</h3><p>ID\u9009\u62E9\u5668\u6307\u5B9ACSS\u6837\u5F0F\u5C06\u4F1A\u5BF9\u5177\u6709\u6307\u5B9AID\u5C5E\u6027\u7684\u6807\u7B7E\u8D77\u4F5C\u7528.ID\u9009\u62E9\u5668\u7684\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B: \u6307\u5B9A\u8BE5css\u6837\u5F0F\u9009\u62E9\u5668\u5BF9id\u4E3Aidvalue\u7684\u6807\u7B7E\u8D77\u4F5C\u7528,\u5404\u4E2A\u6D4F\u89C8\u5668\u5BF9ID\u9009\u62E9\u5668\u7684\u652F\u6301\u90FD\u5F88\u597D.\u4EC5\u5BF9\u6307\u5B9A\u5143\u7D20\u8D77\u4F5C\u7528\u7684ID\u9009\u62E9\u5668</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">#idValue</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">E#idvalue</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">/*\u53EA\u5BF9P\u6807\u7B7E\u8D77\u4F5C\u7528\u7684css\u6837\u5F0F*/</span>
<span class="token selector">p#xx</span><span class="token punctuation">{</span>

    <span class="token property">border</span><span class="token punctuation">:</span>3px dotted black<span class="token punctuation">;</span>

    <span class="token property">background-color</span><span class="token punctuation">:</span>#888<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token comment">/*\u5B9E\u4F8B*/</span>

<span class="token selector">div</span><span class="token punctuation">{</span>
 <span class="token property">background-color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
 <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
 <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
 <span class="token property">padding</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
<span class="token selector">#xx</span><span class="token punctuation">{</span>
 <span class="token property">border</span><span class="token punctuation">:</span> 3px dotted black<span class="token punctuation">;</span>
 <span class="token property">background-color</span><span class="token punctuation">:</span> #888<span class="token punctuation">;</span>
<span class="token punctuation">}</span>



&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
 &lt;meta http-equiv=<span class="token string">&quot;Content-Type&quot;</span> content=<span class="token string">&quot;text/html;charset=UTF-8&quot;</span>&gt;
 &lt;title&gt;ID\u9009\u62E9\u5668&lt;/title&gt;
 &lt;link rel=<span class="token string">&quot;stylesheet&quot;</span> type=<span class="token string">&quot;text/css&quot;</span> href=<span class="token string">&quot;4.css&quot;</span>&gt;
&lt;/head&gt;
&lt;body&gt;
 &lt;div&gt;\u6CA1\u6709\u4EFB\u4F55\u5C5E\u6027\u7684div&lt;/div&gt;
 &lt;div id=<span class="token string">&quot;xx&quot;</span>&gt;\u6709id\u5C5E\u6027\u4E14\u5176\u503C\u4E3Axx\u7684div&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="class\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#class\u9009\u62E9\u5668" aria-hidden="true">#</a> class\u9009\u62E9\u5668</h3><p>class\u9009\u62E9\u5668\u6307\u5B9Acss\u6837\u5F0F\u5BF9\u5177\u6709\u6307\u5B9Aclass\u5C5E\u6027\u7684\u5143\u7D20\u8D77\u4F5C\u7528,class\u9009\u62E9\u5668\u7684\u8BED\u6CD5\u683C\u5F0F\u4E3A:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>E<span class="token punctuation">]</span>.classValue <span class="token punctuation">{</span><span class="token punctuation">}</span>            /*\u5176\u4E2DE\u662F\u6709\u6548\u7684HTML\u6807\u7B7E*/

.myclass<span class="token punctuation">{</span>
 width: 200px<span class="token punctuation">;</span>
 height: 30px<span class="token punctuation">;</span>
 background-color: <span class="token comment">#ddd;</span>
 padding: 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
p.myclass<span class="token punctuation">{</span>
 border: 3px dotted black<span class="token punctuation">;</span>
 background-color: <span class="token comment">#333366;</span>
<span class="token punctuation">}</span>

 <span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>meta http-equiv<span class="token operator">=</span><span class="token string">&quot;Content-Type&quot;</span> <span class="token assign-left variable">content</span><span class="token operator">=</span><span class="token string">&quot;text/html;charset=UTF-8&quot;</span><span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>link <span class="token assign-left variable">rel</span><span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;text/css&quot;</span> <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;5.css&quot;</span><span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>class\u9009\u62E9\u5668<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>div <span class="token assign-left variable">class</span><span class="token operator">=</span><span class="token string">&quot;myclass&quot;</span><span class="token operator">&gt;</span>class\u4E3Amyclass\u7684div<span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>p <span class="token assign-left variable">class</span><span class="token operator">=</span><span class="token string">&quot;myclass&quot;</span><span class="token operator">&gt;</span>class\u4E3Amyclass\u7684p<span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5305\u542B\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u5305\u542B\u9009\u62E9\u5668" aria-hidden="true">#</a> \u5305\u542B\u9009\u62E9\u5668</h3><p>\u5305\u9009\u62E9\u5668\u7528\u4E8E\u6307\u5B9A\u76EE\u6807\u9009\u62E9\u5668\u5FC5\u987B\u5904\u4E8E\u67D0\u4E2A\u9009\u62E9\u5668\u5BF9\u5E94\u7684\u5143\u7D20\u5185\u90E8.\u5176\u8BED\u6CD5\u683C\u5F0F\u4E3A:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">selector1 selector2</span> <span class="token punctuation">{</span>   <span class="token punctuation">}</span>  <span class="token comment">/*selector1,selector2 \u90FD\u662F\u6709\u6548\u7684\u9009\u62E9\u5668*/</span>

<span class="token comment">/*\u5B9E\u4F8B*/</span>

<span class="token selector">div</span><span class="token punctuation">{</span>
 <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
 <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
 <span class="token property">background-color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
 <span class="token property">margin</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div .a</span><span class="token punctuation">{</span>
 <span class="token property">width</span><span class="token punctuation">:</span> 280px<span class="token punctuation">;</span>
 <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
 <span class="token property">background-color</span><span class="token punctuation">:</span> #888<span class="token punctuation">;</span>
 <span class="token property">border</span><span class="token punctuation">:</span> 2px dotted black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
 &lt;meta http-equiv=<span class="token string">&quot;Content-type&quot;</span> content=<span class="token string">&quot;text/html;charset=UTF-8&quot;</span>&gt;
 &lt;link rel=<span class="token string">&quot;stylesheet&quot;</span> type=<span class="token string">&quot;text/css&quot;</span> href=<span class="token string">&quot;6.css&quot;</span>&gt;
 &lt;title&gt;\u5305\u542B\u9009\u62E9\u5668&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
 &lt;div&gt;\u6CA1\u6709\u4EFB\u4F55\u5C5E\u6027\u7684div&lt;/div&gt;
 &lt;div&gt;&lt;section&gt;&lt;div class=<span class="token string">&#39;a&#39;</span>&gt; \u5904\u4E8Ediv\u5185<span class="token punctuation">,</span>\u4E14\u6709\u5C5E\u6027class\u4E3Aa\u7684div&lt;/div&gt;&lt;/section&gt;&lt;/div&gt;
 &lt;p class=<span class="token string">&#39;a&#39;</span>&gt; \u6CA1\u6709\u5904\u4E8Ediv\u5185<span class="token punctuation">,</span>\u4F46class\u4E3Aa\u7684\u5143\u7D20&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B50\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B50\u9009\u62E9\u5668" aria-hidden="true">#</a> \u5B50\u9009\u62E9\u5668</h3><p>\u5B50\u9009\u62E9\u5668\u7528\u4E8E\u6307\u5B9A\u76EE\u6807\u9009\u62E9\u5668\u5FC5\u987B\u662F\u67D0\u4E2A\u9009\u62E9\u5668\u5BF9\u5E94\u7684\u5143\u7D20\u7684\u5B50\u5143\u7D20.\u5176\u8BED\u6CD5\u683C\u5F0F\u4E3A:: \u5305\u542B\u9009\u62E9\u5668\u4E0E\u5B50\u9009\u62E9\u5668\u6709\u70B9\u7C7B\u4F3C.\u5B83\u4EEC\u4E4B\u95F4\u7684\u533A\u522B\u5728\u4E8E:\u5BF9\u4E8E\u5305\u542B\u9009\u62E9\u5668,\u53EA\u8981\u76EE\u6807\u9009\u62E9\u5668\u4F4D\u4E8E\u5916\u90E8\u9009\u62E9\u5668\u5BF9\u5E94\u7684\u5143\u7D20\u5185\u90E8,\u5373\u4F7F\u662F \u5B59\u5B50\u5143\u7D20\u90FD\u53EF\u4EE5.</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">SELECTOR1&gt;SELECTOR2</span> <span class="token punctuation">{</span>....<span class="token punctuation">}</span> <span class="token comment">/* \u5176\u4E2Dselector1 \u548C selector2 \u90FD\u662F\u6709\u6548\u7684\u9009\u62E9\u5668*/</span>

<span class="token selector">selector ~ selector2</span> <span class="token punctuation">{</span>....<span class="token punctuation">}</span>

<span class="token selector">div</span><span class="token punctuation">{</span>
 <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
 <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
 <span class="token property">background-color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
 <span class="token property">margin</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#linux ~ .long</span><span class="token punctuation">{</span>
 <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
 <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>



&lt;!DOCTYPE thml&gt;
&lt;html&gt;
&lt;head&gt;
 &lt;meta http-equiv=<span class="token string">&quot;Content-Type&quot;</span> content=<span class="token string">&quot;text/html;charset=UTF-8&quot;</span>&gt;
 &lt;link rel=<span class="token string">&quot;stylesheet&quot;</span> type=<span class="token string">&quot;text/css&quot;</span> href=<span class="token string">&quot;8.css&quot;</span>&gt;
 &lt;title&gt;\u5144\u5F1F\u9009\u62E9\u5668&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
 &lt;div&gt;\u75AF\u72C2\u7A0B\u5E8F\u5458&lt;/div&gt;
 &lt;div class=<span class="token string">&#39;long&#39;</span>&gt; \u75AF\u72C2\u7801\u519C&lt;/div&gt;
 &lt;div id=<span class="token string">&#39;linux&#39;</span>&gt;\u75AF\u72C2linux\u793E\u533A&lt;/div&gt;
 &lt;div class=<span class="token string">&#39;long&#39;</span>&gt;\u75AF\u72C2PHP&lt;/div&gt;
 &lt;div class=<span class="token string">&#39;long&#39;</span>&gt;\u75AF\u72C2ASM&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EC4\u5408\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u9009\u62E9\u5668" aria-hidden="true">#</a> \u7EC4\u5408\u9009\u62E9\u5668</h3><p>\u7EC4\u5408\u9009\u62E9\u5668.\u6709\u65F6\u60F3\u8BA9\u4E00\u4E2Acss\u6837\u5F0F\u5BF9\u591A\u4E2A\u9009\u62E9\u5668\u8D77\u4F5C\u7528,\u90A3\u4E48\u5C31\u53EF\u4EE5\u5229\u7528\u9009\u62E9\u7EC4\u5408\u5668\u6765\u5B9E\u73B0 \u4F2A\u5143\u7D20\u9009\u62E9\u5668 \u4F2A\u5143\u7D20\u9009\u62E9\u5668\u5E76\u4E0D\u662F\u9488\u5BF9\u771F\u6B63\u7684\u5143\u7D20\u4F7F\u7528\u7684\u9009\u62E9\u5668,\u4F2A\u5143\u7D20\u9009\u62E9\u5668\u53EA\u80FD\u9488\u5BF9css\u4E2D\u7684\u4F2A\u5143\u7D20\u8D77\u4F5C\u7528. css\u63D0\u4F9B\u7684\u4F2A\u5143\u7D20\u9009\u62E9\u5668\u6709\u5982\u4E0B\u51E0\u4E2A:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">selector1,selector2,selecotr3</span><span class="token punctuation">{</span>  <span class="token punctuation">}</span>
    <span class="token punctuation">:</span><span class="token property">first-letter</span> <span class="token punctuation">:</span><span class="token property">\u8BE5\u9009\u62E9\u5668\u5BF9\u5E94\u7684css\u6837\u5F0F\u5BF9\u6307\u5B9A\u5BF9\u8C61\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u8D77\u4F5C\u7528</span>
    <span class="token punctuation">:</span>first-line    <span class="token property">\u8BE5\u9009\u62E9\u5668\u5BF9\u5E94\u7684css\u6837\u5F0F\u5BF9\u6307\u5B9A\u5BF9\u8C61\u7684\u7B2C\u4E00\u884C\u5185\u5BB9\u8D77\u4F5C\u7528</span>
    <span class="token punctuation">:</span>before        \u8BE5\u9009\u62E9\u5668\u4E0E\u5185\u5BB9\u76F8\u5173\u7684\u5C5E\u6027\u7ED3\u5408\u8D77\u6765<span class="token punctuation">,</span><span class="token property">\u7528\u4E8E\u5728\u6307\u5B9A\u5BF9\u8C61\u5185\u90E8\u7684\u524D\u7AEF\u63D2\u5165\u5185\u5BB9</span>
    <span class="token punctuation">:</span>after         \u8BE5\u9009\u62E9\u5668\u4E0E\u5185\u5BB9\u76F8\u5173\u7684\u5C5E\u6027\u7ED3\u5408\u8D77\u6765<span class="token punctuation">,</span>\u7528\u4E8E\u5728\u6307\u5B9A\u5BF9\u8C61\u7684\u5C3E\u90E8\u63D2\u5165\u5185\u5BB9.

<span class="token comment">/*\u5B9E\u4F8B*/</span>

<span class="token selector">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
 &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html;charset=UTF-8&quot;&gt;
 &lt;title&gt;\u4F2A\u5143\u7D20\u9009\u62E9\u5668&lt;/title&gt;
 &lt;style type=&quot;text/css&quot;&gt;
  span</span><span class="token punctuation">{</span>
   <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">span:first-letter</span><span class="token punctuation">{</span>
   <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
   <span class="token property">font-size</span><span class="token punctuation">:</span> 20pt<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">section:first-letter</span>
  <span class="token punctuation">{</span>
   <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
   <span class="token property">font-size</span><span class="token punctuation">:</span> 40pt<span class="token punctuation">;</span>
   <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
  <span class="token selector">p:first-letter</span>
  <span class="token punctuation">{</span>
   <span class="token property">color</span><span class="token punctuation">:</span>#f00<span class="token punctuation">;</span>
   <span class="token property">font-size</span><span class="token punctuation">:</span> 50pt<span class="token punctuation">;</span>
   <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
 &lt;span&gt;abc&lt;/span&gt;
 &lt;section&gt;\u5176\u5B9E\u6211\u5185\u5FC3\u6709\u4E00\u9053 nick&lt;/section&gt;
 &lt;p&gt;\u505A\u4EBA\u8981\u75AF\u72C2&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ui\u5143\u7D20\u72B6\u6001\u4F2A\u7C7B\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#ui\u5143\u7D20\u72B6\u6001\u4F2A\u7C7B\u9009\u62E9\u5668" aria-hidden="true">#</a> UI\u5143\u7D20\u72B6\u6001\u4F2A\u7C7B\u9009\u62E9\u5668</h3><p>UI\u5143\u7D20\u72B6\u6001\u4F2A\u7C7B\u9009\u62E9\u5668\u4E3B\u8981\u7528\u4E8E\u6839\u636EUI\u5143\u7D20\u7684\u72B6\u6001\u8FDB\u884C\u7B5B\u9009,\u4E3B\u8981\u6709\u5982\u4E0B\u51E0\u4E2A:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>    <span class="token property">seletor</span><span class="token punctuation">:</span>link                \u5339\u914Dseletor\u9009\u62E9\u5668\u4E14\u672A\u88AB\u8BBF\u95EE\u8FC7\u7684\u5143\u7D20.
    <span class="token property">seletor</span><span class="token punctuation">:</span>visited             \u5339\u914Dseletor\u9009\u62E9\u5668\u4E14\u4EE5\u88AB\u8BBF\u95EE\u8FC7\u7684\u5143\u7D20
    <span class="token property">seletor</span><span class="token punctuation">:</span>active              \u5339\u914Dseletor\u9009\u62E9\u5668\u4E14\u5904\u4E8E\u88AB\u7528\u6237\u6FC0\u6D3B\u72B6\u6001
    <span class="token property">seleotr</span><span class="token punctuation">:</span>hover               \u5339\u914Dseletor\u9009\u62E9\u5668\u4E14\u5904\u4E8E\u9F20\u6807\u60AC\u505C\u72B6\u6001\u7684\u5143\u7D20
    <span class="token property">seletor</span><span class="token punctuation">:</span>focus               \u5339\u914Dseletor\u9009\u62E9\u5668\u4E14\u5DF2\u5F97\u5230\u7126\u70B9\u7684\u5143\u7D20
    <span class="token property">seletor</span><span class="token punctuation">:</span>enabled             \u5339\u914Dseletor\u9009\u62E9\u5668\u4E14\u5F53\u524D\u5904\u4E8E\u53EF\u7528\u72B6\u6001\u7684\u5143\u7D20
    <span class="token property">seleotr</span><span class="token punctuation">:</span>disabled            \u5339\u914Dseletor\u9009\u62E9\u5668\u4E14\u5F53\u524D\u5904\u4E8E\u4E0D\u53EF\u7528\u72B6\u6001\u7684\u5143\u7D20
    <span class="token property">seleotr</span><span class="token punctuation">:</span>checked             \u5339\u914Dseletor\u9009\u62E9\u5668\u4E14\u5F53\u524D\u5904\u4E8E\u9009\u4E2D\u72B6\u6001\u7684\u5143\u7D20
    <span class="token property">seletor</span><span class="token punctuation">:</span>default             \u5339\u914Dseletor\u9009\u62E9\u5668\u4E14\u9875\u9762\u6253\u5F00\u5904\u4E8E\u9009\u4E2D\u72B6\u6001
    <span class="token property">seletor</span><span class="token punctuation">:</span>read-only           \u5339\u914Dseletor\u9009\u62E9\u5668\u4E14\u5F53\u524D\u5904\u4E8E\u53EA\u8BFB\u72B6\u6001\u7684\u5143\u7D20
    <span class="token property">seletor</span><span class="token punctuation">:</span>read-write          \u5339\u914Dseletor\u9009\u62E9\u5668\u4E14\u5F53\u524D\u5904\u4E8E\u8BFB\u5199\u72B6\u6001\u7684\u5143\u7D20
    <span class="token property">seletor</span><span class="token punctuation">:</span>selection           \u5339\u914Dselector\u9009\u62E9\u5668\u7684\u5143\u7D20\u4E2D\u5F53\u524D\u88AB\u9009\u4E2D\u7684\u5185\u5BB9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7ED3\u6784\u6027\u4F2A\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u6027\u4F2A\u9009\u62E9\u5668" aria-hidden="true">#</a> \u7ED3\u6784\u6027\u4F2A\u9009\u62E9\u5668</h3><p>\u7ED3\u6784\u6027\u4F2A\u7C7B\u9009\u62E9\u5668\u6307\u7684\u662F\u6839\u636EHTML\u5143\u7D20\u4E4B\u95F4\u7684\u7ED3\u6784\u5173\u952E\u8FDB\u884C\u7B5B\u9009\u7684\u4F2A\u7C7B\u9009\u62E9\u5668,\u7ED3\u6784\u6027\u4F2A\u7C7B\u9009\u62E9\u5668\u6709\u4E0B\u9762\u51E0\u4E2A:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">SELECTOR</span><span class="token punctuation">:</span>root            \u5339\u914D\u6587\u6863\u7684\u6839\u5143\u7D20<span class="token punctuation">,</span>
<span class="token property">selector</span><span class="token punctuation">:</span>first-child     \u5339\u914D\u7B26\u5408selector\u9009\u62E9\u5668<span class="token punctuation">,</span>\u800C\u4E14\u5FC5\u987B\u662F\u5176\u7236\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9\u5143\u7D20
<span class="token property">selector</span><span class="token punctuation">:</span>last-child      \u5339\u914D\u7B26\u5408selector\u9009\u62E9\u5668<span class="token punctuation">,</span>\u800C\u4E14\u5FC5\u987B\u662F\u5176\u7236\u5143\u7D20\u7684\u6700\u540E\u4E00\u4E2A\u5B50\u8282\u70B9\u5143\u7D20
<span class="token property">selector</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>    \u5339\u914D\u7B26\u5408selector\u9009\u62E9\u5668<span class="token punctuation">,</span>\u800C\u4E14\u5FC5\u987B\u662F\u5176\u7236\u5143\u7D20\u7684\u7B2Cn\u4E2A\u5B50\u8282\u70B9\u5143\u7D20
<span class="token property">seletor</span><span class="token punctuation">:</span><span class="token function">nth-last-child</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> \u5339\u914D\u7B26\u5408seletor\u9009\u62E9\u5668<span class="token punctuation">,</span>\u800C\u4E14\u5FC5\u987B\u662F\u5176\u7236\u5143\u7D20\u7684\u5012\u6570\u7B2Cn\u4E2A\u5B50\u8282\u70B9\u5143\u7D20
<span class="token property">seletor</span><span class="token punctuation">:</span>only-child       \u5339\u914D\u7B26\u5408seletor\u9009\u62E9\u5668<span class="token punctuation">,</span>\u800C\u4E14\u5FC5\u987B\u662F\u5176\u7236\u5143\u7D20\u7684\u552F\u4E00\u5B50\u8282\u70B9
<span class="token property">seleotr</span><span class="token punctuation">:</span>first-of-type    \u5339\u914D\u7B26\u5408seleotr\u9009\u62E9\u5668<span class="token punctuation">,</span>\u800C\u4E14\u662F\u4E0E\u5B83\u540C\u7C7B\u578B<span class="token punctuation">,</span>\u540C\u7EA7\u7684\u5144\u5F1F\u7B2C\u4E00\u4E2A\u5143\u7D20
<span class="token property">seletor</span><span class="token punctuation">:</span>last-of-type     \u5339\u914D\u7B26\u5408seletor\u9009\u62E9\u5668<span class="token punctuation">,</span>\u800C\u4E14\u662F\u4E0E\u5B83\u540C\u7C7B\u578B<span class="token punctuation">,</span>\u540C\u7EA7\u7684\u5144\u5F1F\u6700\u540E\u4E00\u4E2A\u5143\u7D20
<span class="token property">seletor</span><span class="token punctuation">:</span><span class="token function">nth-of-type</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>   \u5339\u914D\u7B26\u5408seletor\u9009\u62E9\u5668<span class="token punctuation">,</span>\u800C\u4E14\u662F\u4E0E\u5B83\u540C\u7C7B\u578B<span class="token punctuation">,</span>\u7B2Cn\u4E2A\u5144\u5F1F\u8282\u70B9
<span class="token property">seletor</span><span class="token punctuation">:</span><span class="token function">nth-last-of-type</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> \u5339\u914D\u7B26\u5408seleotr\u9009\u62E9\u5668<span class="token punctuation">,</span>\u800C\u4E14\u662F\u4E0E\u5B83\u540C\u7C7B\u578B<span class="token punctuation">,</span>\u5012\u6570\u7B2Cn\u4E2A\u5144\u5F1F\u8282\u70B9
<span class="token property">seletor</span><span class="token punctuation">:</span>only-of-type        \u5339\u914D\u7B26\u5408seleotr\u9009\u62E9\u5668<span class="token punctuation">,</span>\u800C\u4E14\u662F\u4E0E\u5B83\u540C\u7C7B\u578B\u7684\u552F\u4E00\u5144\u5F1F\u8282\u70B9
<span class="token property">seleotr</span><span class="token punctuation">:</span>empty               \u5339\u914D\u7B26\u5408seletor\u9009\u62E9\u5668<span class="token punctuation">,</span>\u800C\u4E14\u5176\u5185\u90E8\u6CA1\u6709\u4EFB\u4F55\u5B50\u5143\u7D20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),p=[l];function i(c,o){return s(),a("div",null,p)}const d=n(e,[["render",i],["__file","css-selector.html.vue"]]);export{d as default};
