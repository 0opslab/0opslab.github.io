import{_ as n,o as a,c as s,e as t}from"./app.a667bd71.js";const e={},p=t(`<h5 id="_1-\u7B2C\u4E00\u79CD\u65B9\u5F0F-\u533F\u540D\u53C2\u6570-\u987A\u5E8F\u4F20\u9012\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_1-\u7B2C\u4E00\u79CD\u65B9\u5F0F-\u533F\u540D\u53C2\u6570-\u987A\u5E8F\u4F20\u9012\u53C2\u6570" aria-hidden="true">#</a> 1.\u7B2C\u4E00\u79CD\u65B9\u5F0F \u533F\u540D\u53C2\u6570 \u987A\u5E8F\u4F20\u9012\u53C2\u6570</h5><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectByGenderAndAge</span><span class="token punctuation">(</span><span class="token class-name">Short</span> gender<span class="token punctuation">,</span><span class="token class-name">String</span> age <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--\u4F1A\u62A5\u9519BindingException: Parameter &#39;gender&#39; not found. Available parameters are [arg1, arg0, param1, param2]--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectByGenderAndAge<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
  select * from employee where gender = #{gender} and age = #{age}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectByGenderAndAge<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
    select *  from employee where gender = #{param1} and age = #{param2}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-\u7B2C\u4E8C\u79CD\u65B9\u5F0F-\u4F7F\u7528-param\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#_2-\u7B2C\u4E8C\u79CD\u65B9\u5F0F-\u4F7F\u7528-param\u6CE8\u89E3" aria-hidden="true">#</a> 2.\u7B2C\u4E8C\u79CD\u65B9\u5F0F \u4F7F\u7528@Param\u6CE8\u89E3</h5><p>\u4F7F\u7528@Param\u6CE8\u89E3\u663E\u793A\u7684\u544A\u8BC9mybatis\u53C2\u6570\u7684\u540D\u5B57\uFF0C\u8FD9\u6837\u5728xml\u4E2D\u5C31\u53EF\u4EE5\u6309\u7167\u53C2\u6570\u540D\u53BB\u5F15\u7528\u4E86</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectByGenderAndAge</span><span class="token punctuation">(</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;gender&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Short</span> gender<span class="token punctuation">,</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> age <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectByGenderAndAge<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
  select * from employee where gender = #{gender} and age = #{age}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-\u4F7F\u7528map\u4F20\u9012\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528map\u4F20\u9012\u53C2\u6570" aria-hidden="true">#</a> 3.\u4F7F\u7528Map\u4F20\u9012\u53C2\u6570</h5><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u63A5\u53E3\u5B9A\u4E49</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectByMapParams</span><span class="token punctuation">(</span><span class="token class-name">Map</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u63A5\u53E3\u8C03\u7528</span>
<span class="token class-name">Map</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;gender&quot;</span><span class="token punctuation">,</span>gender<span class="token punctuation">)</span><span class="token punctuation">;</span>
params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span> result<span class="token operator">=</span> employeeMapper<span class="token punctuation">.</span><span class="token function">selectByMapParams</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token class-name">ResultMsg</span><span class="token punctuation">.</span><span class="token function">getMsg</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>xml\u63A5\u53E3\u5B9A\u4E49</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectByMapParams<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  select * from employee where gender = #{gender} and age = #{age}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-\u7528\u8FC7java-bean\u4F20\u9012\u591A\u4E2A\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_4-\u7528\u8FC7java-bean\u4F20\u9012\u591A\u4E2A\u53C2\u6570" aria-hidden="true">#</a> 4.\u7528\u8FC7java bean\u4F20\u9012\u591A\u4E2A\u53C2\u6570</h5><p>\u4F7F\u7528bean\u7684\u65B9\u5F0F\u6765\u4F20\u9012\u591A\u4E2A\u53C2\u6570\uFF0C\u4F7F\u7528\u65F6parameterType\u6307\u5B9A\u4E3A\u5BF9\u5E94\u7684bean\u7C7B\u578B\u5373\u53EF</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectByBeans</span><span class="token punctuation">(</span><span class="token class-name">Employee</span> employee<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">List</span> result<span class="token operator">=</span> employeeMapper<span class="token punctuation">.</span><span class="token function">selectByBeans</span><span class="token punctuation">(</span>employee<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token class-name">ResultMsg</span><span class="token punctuation">.</span><span class="token function">getMsg</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>xml\u63A5\u53E3\u5B9A\u4E49</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectByBeans<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.wg.demo.po.Employee<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  select
  *
  from employee where gender = #{gender} and age = #{age}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-\u76F4\u63A5\u4F7F\u7528json\u4F20\u9012\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_5-\u76F4\u63A5\u4F7F\u7528json\u4F20\u9012\u53C2\u6570" aria-hidden="true">#</a> 5.\u76F4\u63A5\u4F7F\u7528JSON\u4F20\u9012\u53C2\u6570</h5><p>\u4E00\u79CD\u4F20\u53C2\u65B9\u5F0F\uFF0Ccontroller\u5C42\u6536\u5230JSON\u578B\u6570\u636E\u540E\uFF0C\u76F4\u63A5\u4F20\u9012\u7ED9mapper\u5C42\u8FDB\u884C\u67E5\u8BE2\u64CD\u4F5C</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u591A\u4E2A\u53C2\u6570\u67E5\u8BE2_\u901A\u8FC7JSON\u4F20\u9012\u591A\u4E2A\u53C2\u6570&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;findByJSONObject&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResultMsg</span> <span class="token function">findByJSONObject</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">JSONObject</span> params<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">List</span> result<span class="token operator">=</span> employeeMapper<span class="token punctuation">.</span><span class="token function">findByJSONObject</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">ResultMsg</span><span class="token punctuation">.</span><span class="token function">getMsg</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token class-name">List</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByJSONObject</span><span class="token punctuation">(</span><span class="token class-name">JSONObject</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>findByJSONObject<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.alibaba.fastjson.JSONObject<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  select
  *
  from employee where gender = #{gender} and age = #{age}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-\u4F20\u9012\u96C6\u5408\u7C7B\u578B\u53C2\u6570list\u3001set\u3001array" tabindex="-1"><a class="header-anchor" href="#_6-\u4F20\u9012\u96C6\u5408\u7C7B\u578B\u53C2\u6570list\u3001set\u3001array" aria-hidden="true">#</a> 6.\u4F20\u9012\u96C6\u5408\u7C7B\u578B\u53C2\u6570List\u3001Set\u3001Array</h5><p>\u5728\u4E00\u4E9B\u590D\u6742\u7684\u67E5\u8BE2\u4E2D\uFF08\u5982 sql\u4E2D\u7684 in\u64CD\u4F5C\uFF09\uFF0C\u4F20\u7EDF\u7684\u53C2\u6570\u4F20\u9012\u5DF2\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u8FD9\u65F6\u5019\u5C31\u8981\u7528\u5230List\u3001Set\u3001Array\u7C7B\u578B\u7684\u53C2\u6570\u4F20\u9012\u3002</p><p>foreach\u5143\u7D20\u7684\u5C5E\u6027\u4E3B\u8981\u6709 item\uFF0Cindex\uFF0Ccollection\uFF0Copen\uFF0Cseparator\uFF0Cclose\u3002 item\u8868\u793A\u96C6\u5408\u4E2D\u6BCF\u4E00\u4E2A\u5143\u7D20\u8FDB\u884C\u8FED\u4EE3\u65F6\u7684\u522B\u540D\uFF0C index\u6307\u5B9A\u4E00\u4E2A\u540D\u5B57\uFF0C\u7528\u4E8E\u8868\u793A\u5728\u8FED\u4EE3\u8FC7\u7A0B\u4E2D\uFF0C\u6BCF\u6B21\u8FED\u4EE3\u5230\u7684\u4F4D\u7F6E\uFF0C open\u8868\u793A\u8BE5\u8BED\u53E5\u4EE5\u4EC0\u4E48\u5F00\u59CB\uFF0C separator\u8868\u793A\u5728\u6BCF\u6B21\u8FDB\u884C\u8FED\u4EE3\u4E4B\u95F4\u4EE5\u4EC0\u4E48\u7B26\u53F7\u4F5C\u4E3A\u5206\u9694\u7B26\uFF0C</p><p>close\u8868\u793A\u4EE5\u4EC0\u4E48\u7ED3\u675F</p><p>\u5728\u4F7F\u7528foreach\u7684\u65F6\u5019\u6700\u5173\u952E\u7684\u4E5F\u662F\u6700\u5BB9\u6613\u51FA\u9519\u7684\u5C31\u662Fcollection\u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u662F\u5FC5\u987B\u6307\u5B9A\u7684\uFF0C\u4F46\u662F\u5728\u4E0D\u540C\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u5C5E\u6027\u7684\u503C\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u4E3B\u8981\u6709\u4E00\u4E0B3\u79CD\u60C5\u51B5\uFF1A</p><p>1.\u5982\u679C\u4F20\u5165\u7684\u662F\u5355\u53C2\u6570\u4E14\u53C2\u6570\u7C7B\u578B\u662F\u4E00\u4E2AList\u7684\u65F6\u5019\uFF0Ccollection\u5C5E\u6027\u503C\u4E3Alist 2.\u5982\u679C\u4F20\u5165\u7684\u662F\u5355\u53C2\u6570\u4E14\u53C2\u6570\u7C7B\u578B\u662F\u4E00\u4E2Aarray\u6570\u7EC4\u7684\u65F6\u5019\uFF0Ccollection\u7684\u5C5E\u6027\u503C\u4E3Aarray 3.\u5982\u679C\u4F20\u5165\u7684\u53C2\u6570\u662F\u591A\u4E2A\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u628A\u5B83\u4EEC\u5C01\u88C5\u6210\u4E00\u4E2AMap\u6216\u8005Object</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u591A\u4E2A\u53C2\u6570\u67E5\u8BE2_\u901A\u8FC7List\u3001Set\u3001Array\u4F20\u9012\u591A\u4E2A\u53C2\u6570&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;findByList&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResultMsg</span> <span class="token function">findByList</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">List</span> result<span class="token operator">=</span> employeeMapper<span class="token punctuation">.</span>findByList <span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">ResultMsg</span><span class="token punctuation">.</span><span class="token function">getMsg</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">List</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByList</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>findByList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
	SELECT * from employee where age in
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(<span class="token punctuation">&quot;</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>,<span class="token punctuation">&quot;</span></span> <span class="token attr-name">close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      #{age}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_7-\u53C2\u6570\u7C7B\u578B\u4E3A\u5BF9\u8C61-\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#_7-\u53C2\u6570\u7C7B\u578B\u4E3A\u5BF9\u8C61-\u96C6\u5408" aria-hidden="true">#</a> 7.\u53C2\u6570\u7C7B\u578B\u4E3A\u5BF9\u8C61+\u96C6\u5408</h5><p>\u6BD4\u8F83\u590D\u6742\u7684\u7528\u6237\u6CD5\uFF1A</p><p>\u63A5\u53E3\u5B9A\u4E49</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByDepartment</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;department&quot;</span><span class="token punctuation">)</span><span class="token class-name">Department</span> department<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Department</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> deptName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> descr<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> employees<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u591A\u4E2A\u53C2\u6570\u67E5\u8BE2_\u5BF9\u8C61+\u96C6\u5408\u53C2\u6570&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;findByDepartment&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResultMsg</span> <span class="token function">findByDepartment</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Department</span> department<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">List</span> result<span class="token operator">=</span> employeeMapper<span class="token punctuation">.</span><span class="token function">findByDepartment</span><span class="token punctuation">(</span>department<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">ResultMsg</span><span class="token punctuation">.</span><span class="token function">getMsg</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>findByDepartment<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.wg.demo.po.Department<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    SELECT * from employee where dept_id =#{department.id} and age in
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>department.employees<span class="token punctuation">&quot;</span></span> <span class="token attr-name">open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(<span class="token punctuation">&quot;</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>,<span class="token punctuation">&quot;</span></span> <span class="token attr-name">close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>employee<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        #{employee.age}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),c=[p];function o(l,u){return a(),s("div",null,c)}const r=n(e,[["render",o],["__file","mybatis-params.html.vue"]]);export{r as default};