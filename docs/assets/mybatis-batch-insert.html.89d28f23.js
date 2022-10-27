import{_ as n,o as s,c as a,e as t}from"./app.a667bd71.js";const p={},e=t(`<p>mybatis\u6279\u91CF\u63D2\u5165\u6709\u4E09\u79CD\u65B9\u5F0F\uFF1A</p><ol><li>\u53CD\u590D\u6267\u884C\u5355\u6761\u63D2\u5165\u8BED\u53E5</li><li>xml\u62FC\u63A5sql</li><li>\u6279\u5904\u7406\u6267\u884C</li></ol><h5 id="\u53CD\u590D\u6267\u884C\u5355\u6761\u63D2\u5165\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u53CD\u590D\u6267\u884C\u5355\u6761\u63D2\u5165\u8BED\u53E5" aria-hidden="true">#</a> \u53CD\u590D\u6267\u884C\u5355\u6761\u63D2\u5165\u8BED\u53E5</h5><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testInsertBatch2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">User</span> user<span class="token punctuation">;</span>
    <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> sqlSessionTemplate<span class="token punctuation">.</span><span class="token function">getSqlSessionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">UserDao</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserDao</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">500</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setDelFlag</span><span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    sqlSession<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> end <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---------------&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>start <span class="token operator">-</span> end<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;---------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="xml\u62FC\u63A5sql" tabindex="-1"><a class="header-anchor" href="#xml\u62FC\u63A5sql" aria-hidden="true">#</a> xml\u62FC\u63A5sql</h5><p>\u8FD9\u79CD\u65B9\u5F0F\u5C31\u662F\u5229\u7528xml\u62FC\u63A5sql\u8BED\u53E5\uFF0C\u56E0\u6B64\u79CD\u65B9\u5F0F\u7ECF\u5E38\u4F1A\u53D7\u9650\u4E8Esql\u7F13\u5B58\u5927\u5C0F\u7684\u9650\u5236\uFF0C\u6BD4\u5982mysql\u7684\u9650\u5236\u4E3A1M</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>insertBatch<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    INSERT INTO t_user (id, name, del_flag)
    VALUES
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">collection</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span> <span class="token attr-name">separator</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>,<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
         (#{user.id}, #{user.name}, #{user.delFlag})
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span> <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>foreach \u7684\u4E3B\u8981\u4F5C\u7528\u5728\u6784\u5EFA in \u6761\u4EF6\u4E2D\uFF0C\u5B83\u53EF\u4EE5\u5728 sql \u8BED\u53E5\u4E2D\u8FDB\u884C\u8FED\u4EE3\u4E00\u4E2A\u96C6\u5408\u3002foreach \u5143\u7D20\u7684\u5C5E\u6027\u4E3B\u8981\u6709 collection\uFF0Citem\uFF0Cseparator\uFF0Cindex\uFF0Copen\uFF0Cclose\u3002</p><ol><li>collection\uFF1A\u6307\u5B9A\u8981\u904D\u5386\u7684\u96C6\u5408\u3002\u8868\u793A\u4F20\u5165\u8FC7\u6765\u7684\u53C2\u6570\u7684\u6570\u636E\u7C7B\u578B\u3002\u8BE5\u5C5E\u6027\u662F\u5FC5\u987B\u6307\u5B9A\u7684\uFF0C\u8981\u505A foreach \u7684\u5BF9\u8C61\u3002\u5728\u4F7F\u7528 foreach \u7684\u65F6\u5019\u6700\u5173\u952E\u7684\u4E5F\u662F\u6700\u5BB9\u6613\u51FA\u9519\u7684\u5C31\u662F collection \u5C5E\u6027\u3002\u5728\u4E0D\u540C\u60C5\u51B5 \u4E0B\uFF0C\u8BE5\u5C5E\u6027\u7684\u503C\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u4E3B\u8981\u6709\u4E00\u4E0B 3 \u79CD\u60C5\u51B5\uFF1A a. \u5982\u679C\u4F20\u5165\u7684\u662F\u5355\u53C2\u6570\u4E14\u53C2\u6570\u7C7B\u578B\u662F\u4E00\u4E2A List \u7684\u65F6\u5019\uFF0Ccollection \u5C5E\u6027\u503C\u4E3A list\u3002 b. \u5982\u679C\u4F20\u5165\u7684\u662F\u5355\u53C2\u6570\u4E14\u53C2\u6570\u7C7B\u578B\u662F\u4E00\u4E2A\u6570\u7EC4\u7684\u65F6\u5019\uFF0Ccollection \u7684\u5C5E\u6027\u503C\u4E3A array\u3002 c. \u5982\u679C\u4F20\u5165\u7684\u53C2\u6570\u662F\u591A\u4E2A\u7684\u65F6\u5019\uFF0C\u5C31\u9700\u8981\u628A\u5B83\u4EEC\u5C01\u88C5\u6210 Map\uFF0C\u5F53\u7136\u5355\u53C2\u6570\u4E5F\u53EF\u4EE5\u5C01\u88C5\u6210 Map\u3002Map \u5BF9\u8C61\u6CA1\u6709\u9ED8\u8BA4\u7684\u952E\u3002</li><li>item\uFF1A\u8868\u793A\u96C6\u5408\u4E2D\u6BCF\u4E00\u4E2A\u5143\u7D20\u8FDB\u884C\u8FED\u4EE3\u65F6\u7684\u522B\u540D\u3002\u5C06\u5F53\u524D\u904D\u5386\u51FA\u7684\u5143\u7D20\u8D4B\u503C\u7ED9\u6307\u5B9A\u7684\u53D8\u91CF\uFF0C\u7136\u540E\u7528#{\u53D8\u91CF\u540D}\uFF0C\u5C31\u80FD\u53D6\u51FA\u53D8\u91CF\u7684\u503C\uFF0C\u4E5F\u5C31\u662F\u5F53\u524D\u904D\u5386\u51FA\u7684\u5143\u7D20\u3002</li><li>separator\uFF1A\u8868\u793A\u5728\u6BCF\u6B21\u8FDB\u884C\u8FED\u4EE3\u4E4B\u95F4\u4EE5\u4EC0\u4E48\u7B26\u53F7\u4F5C\u4E3A\u5206\u9694\u7B26\u3002<code>select * from tab where id in(1,2,3)</code>\u76F8\u5F53\u4E8E1,2,3\u4E4B\u95F4\u7684&quot;,&quot;</li><li>index\uFF1A\u7D22\u5F15\u3002index \u6307\u5B9A\u4E00\u4E2A\u540D\u5B57\uFF0C\u7528\u4E8E\u8868\u793A\u5728\u8FED\u4EE3\u8FC7\u7A0B\u4E2D\uFF0C\u6BCF\u6B21\u8FED\u4EE3\u5230\u7684\u4F4D\u7F6E\u3002\u904D\u5386 list \u7684\u65F6\u5019 index \u5C31\u662F\u7D22\u5F15\uFF0C\u904D\u5386 map \u7684\u65F6\u5019 index \u8868\u793A\u7684\u5C31\u662F map \u7684 key\uFF0Citem \u5C31\u662F map \u7684\u503C\u3002</li><li>open/close\uFF1A\u8868\u793A\u8BE5\u8BED\u53E5\u4EE5\u4EC0\u4E48\u5F00\u59CB/\u7ED3\u675F\u3002</li></ol><p>\u4F7F\u7528\u65B9\u5F0F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testInsertBatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">User</span> user<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setDelFlag</span><span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    userService<span class="token punctuation">.</span><span class="token function">insertBatch</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> end <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---------------&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>start <span class="token operator">-</span> end<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;---------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u6279\u5904\u7406\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u6279\u5904\u7406\u6267\u884C" aria-hidden="true">#</a> \u6279\u5904\u7406\u6267\u884C</h5><p>\u63A5\u53E3\u5B9A\u4E49\u548C\u666E\u901A\u7684\u63A5\u53E3\u4E00\u81F4</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>insert<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    INSERT INTO t_user (id, name, del_flag) VALUES(#{id}, #{name}, #{delFlag})
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6279\u5904\u7406\u6267\u884C\u6A21\u5F0F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testInsertBatch2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">User</span> user<span class="token punctuation">;</span>
    <span class="token comment">//\u5F00\u542F\u6279\u5904\u7406\u6A21\u5F0F</span>
    <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> sqlSessionTemplate<span class="token punctuation">.</span><span class="token function">getSqlSessionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token class-name">ExecutorType</span><span class="token punctuation">.</span><span class="token constant">BATCH</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">UserDao</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserDao</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">500</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setDelFlag</span><span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    sqlSession<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> end <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---------------&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>start <span class="token operator">-</span> end<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;---------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","mybatis-batch-insert.html.vue"]]);export{k as default};