import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">1</span>.\u5C3D\u91CF\u907F\u514D\u5168\u8868\u626B\u63CF\uFF0C\u5E94\u8003\u8651\u5728 where \u548C order by \u6D89\u53CA\u7684\u5217\u4E0A\u5EFA\u7ACB\u7D22\u5F15

<span class="token number">2</span>.\u88AB\u9A71\u52A8\u8868\u7684\u5173\u8054\u5B57\u6BB5\u9700\u8981\u521B\u5EFA\u7D22\u5F15\uFF0C\u5426\u5219\u88AB\u9A71\u52A8\u8868\u4F1A\u8D70\u5168\u8868\u626B\u63CF

<span class="token number">3</span>.\u7D22\u5F15\u9075\u5FAA\u6700\u5DE6\u524D\u7F00\u5339\u914D\u539F\u5219\uFF0Clike \u5199\u6CD5\u53EA\u80FD\u5C06 % \u653E\u5728\u53F3\u8FB9\uFF0C\u5982 name like \u2018\u638C\u95E8\u5B66\u5458%\u2019\uFF1B\u82E5 % \u653E\u5728\u5DE6\u8FB9\u4F1A\u5BFC\u81F4\u7D22\u5F15\u5931\u6548

<span class="token number">4</span>.\u5E94\u5C3D\u91CF\u907F\u514D\u5728 where \u5B50\u53E5\u4E2D\u4F7F\u7528 <span class="token operator">!=</span> \uFF0C <span class="token operator">&lt;&gt;</span> \uFF0Cnot <span class="token keyword">in</span> \u64CD\u4F5C\u7B26\uFF0C\u4F1A\u5BFC\u81F4\u7D22\u5F15\u5931\u6548

<span class="token number">5</span>.\u5E94\u5C3D\u91CF\u907F\u514D\u5728 where \u5B50\u53E5\u4E2D\u4F7F\u7528 or \u6765\u8FDE\u63A5\u6761\u4EF6\uFF0C\u53EF\u5C1D\u8BD5\u62C6\u5206\u4E3A union/union all

<span class="token number">6</span>.\u53EF\u8003\u8651\u4F7F\u7528 join/left <span class="token function">join</span> \u5173\u8054\u67E5\u8BE2\uFF0C\u66FF\u4EE3\u5B50\u67E5\u8BE2\u3001in/not <span class="token keyword">in</span> \u7684\u5199\u6CD5\uFF0C\u5C3D\u91CF\u4E0D\u8981\u7528\u5B50\u67E5\u8BE2

<span class="token number">7</span>.\u5982\u679C <span class="token keyword">in</span> \u7684\u5185\u5BB9\u662F\u8FDE\u7EED\u7684\uFF0C\u53EF\u4F7F\u7528 between\u2026and \u6216\u8005 <span class="token operator">&gt;</span>\u2026.<span class="token operator">&lt;</span> \u66FF\u4EE3\uFF0C\u6539\u8D70\u8303\u56F4\u626B\u63CF

<span class="token number">8</span>.\u4E0D\u8981\u5728\u67E5\u8BE2\u5B57\u6BB5\u4E0A\u4F7F\u7528\u51FD\u6570\u6216\u8005\u8868\u8FBE\u5F0F\uFF0C\u4F1A\u5BFC\u81F4\u7D22\u5F15\u5931\u6548\uFF0C\u53EF\u5728\u53C2\u6570\u5B57\u6BB5\u4E0A\u505A\u51FD\u6570\u6216\u8868\u8FBE\u5F0F\u8FD0\u7B97

<span class="token number">9</span>.\u67E5\u8BE2\u65F6\u9700\u6839\u636E\u5B57\u6BB5\u5B9A\u4E49\u7C7B\u578B\u8FDB\u884C\u4F20\u53C2 \uFF0C\u82E5\u53C2\u6570\u7C7B\u578B\u4E0E\u5B57\u6BB5\u5B9A\u4E49\u7C7B\u578B\u4E0D\u4E00\u81F4\uFF0C\u4F1A\u5BFC\u81F4\u7D22\u5F15\u5931\u6548

<span class="token number">10</span>.\u4E0D\u8981\u4F7F\u7528 <span class="token keyword">select</span> *  \u5199\u6CD5\uFF0C\u53EA\u67E5\u8BE2\u9700\u8981\u7684\u5217

<span class="token number">11</span>.\u4E0D\u8981\u5728\u6570\u636E\u5E93\u4E2D\u4F7F\u7528\u53D8\u91CF + \u5206\u7EC4\u6392\u5E8F\u65B9\u5F0F\u6784\u9020\u6392\u5E8F\u5B57\u6BB5\uFF0CMySQL \u9700\u8981\u57FA\u4E8E\u5168\u91CF\u6570\u636E\u505A\u6392\u5E8F\u5206\u7EC4\uFF0C\u6548\u7387\u5F88\u4F4E

<span class="token number">12</span>.\u901A\u8FC7 limit \u65B9\u5F0F\u5206\u9875\u4F1A\u5BFC\u81F4\u540E\u7EED\u5206\u9875\u8D8A\u6765\u8D8A\u6162\uFF0C\u53EF\u53D6\u524D\u4E00\u6B21\u5206\u9875\u7684\u6700\u5927 ID \u4F5C\u4E3A\u4E0B\u4E00\u9875\u53C2\u6570\u8F93\u5165\uFF0C\u8FDB\u884C\u5206\u9875

<span class="token number">13</span>.\u4E0D\u8981\u901A\u8FC7 order by rand<span class="token punctuation">(</span><span class="token punctuation">)</span> \u65B9\u5F0F\u53D6\u968F\u673A\u6570\uFF0C\u6548\u7387\u6781\u4F4E\u3002\u5982\u679C\u9700\u8981\u53D6\u968F\u673A\u6570\uFF0C\u53EF\u4EE5\u5148\u7528\u968F\u673A\u6570\u65B9\u6CD5\u53D6\u5F97\u4E00\u4E2A\u6574\u6570\uFF0C\u7136\u540E\u6839\u636E id<span class="token operator">&gt;=</span> \u8BE5\u6574\u6570\u5373\u53EF\u3002

<span class="token number">14</span>.\u7981\u6B62\u4E0D\u5FC5\u8981\u7684\u6392\u5E8F\uFF0C\u6392\u5E8F\u64CD\u4F5C\u6781\u8017\u8D44\u6E90\uFF0C\u4E0D\u8981\u8F7B\u6613\u5206\u7EC4\u6392\u5E8F

<span class="token number">15</span>.\u4E0D\u8981\u5728\u7A0B\u5E8F\u4E2D\u4F7F\u7528 using index \u5F3A\u5236\u7D22\u5F15\u5199\u6CD5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4F7F\u7528-union-union-all-\u66FF\u6362-or-\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-union-union-all-\u66FF\u6362-or-\u5199\u6CD5" aria-hidden="true">#</a> <strong>\u4F7F\u7528 union/union all \u66FF\u6362 or \u5199\u6CD5</strong></h4><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>## \u4F1A\u4F7F\u7D22\u5F15\u5931\u6548
 select count(0)
 from students
 where students.created_at&gt;=&#39;2021-05-01&#39;
   or students.referrer_user_id&gt;0;
   
## \u4F18\u5316\u5199\u6CD5
select count(0)
 from 
 (select id
 from students
 where students.created_at&gt;=&#39;2021-05-01&#39;
 union
 select id
 from students
where students.referrer_user_id&gt;0) as t;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4F7F\u7528-join-\u5173\u8054\u66FF\u6362\u5B50\u67E5\u8BE2\u3001in\u3001exists-\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-join-\u5173\u8054\u66FF\u6362\u5B50\u67E5\u8BE2\u3001in\u3001exists-\u5199\u6CD5" aria-hidden="true">#</a> <strong>\u4F7F\u7528 join \u5173\u8054\u66FF\u6362\u5B50\u67E5\u8BE2\u3001in\u3001exists \u5199\u6CD5</strong></h4><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">## Mysql \u7684\u5199\u6CD5\u4E2D\uFF0C\u975E\u5E38\u4E0D\u5EFA\u8BAE\u5B50\u67E5\u8BE2\u5199\u6CD5\uFF0C\u800C\u5E94\u8BE5\u5C3D\u91CF\u7528 join \u65B9\u5F0F\u66FF\u6362\u5B50\u67E5\u8BE2\u5199\u6CD5</span>
<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>money<span class="token punctuation">)</span>
 <span class="token keyword">from</span> students
 <span class="token keyword">join</span> 
 <span class="token punctuation">(</span><span class="token keyword">select</span> payments<span class="token punctuation">.</span>stu_id<span class="token punctuation">,</span>payments<span class="token punctuation">.</span>money
 <span class="token keyword">from</span> payments
 <span class="token keyword">where</span> payments<span class="token punctuation">.</span>is_paid<span class="token operator">=</span><span class="token number">1</span>
   <span class="token operator">and</span> payments<span class="token punctuation">.</span>is_canceled<span class="token operator">=</span><span class="token number">0</span>
     <span class="token operator">and</span> payments<span class="token punctuation">.</span>money<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">as</span> t <span class="token keyword">on</span> students<span class="token punctuation">.</span>id<span class="token operator">=</span>t<span class="token punctuation">.</span>stu_id
    <span class="token keyword">where</span> students<span class="token punctuation">.</span>created_at<span class="token operator">&gt;=</span><span class="token string">&#39;2021-05-01&#39;</span>
      <span class="token operator">and</span> students<span class="token punctuation">.</span>created_at<span class="token operator">&lt;</span> <span class="token string">&#39;2021-06-01&#39;</span><span class="token punctuation">;</span>
      
<span class="token comment">## \u76F4\u63A5\u4F7F\u7528 join \u8FDB\u884C\u591A\u8868\u5173\u8054\uFF0C\u5E76\u5C06\u67E5\u8BE2\u6761\u4EF6\u5199\u5165\u5230 where \u4E2D      </span>
 <span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>payments<span class="token punctuation">.</span>money<span class="token punctuation">)</span>
 <span class="token keyword">from</span> students
 <span class="token keyword">join</span> payments <span class="token keyword">on</span> students<span class="token punctuation">.</span>id<span class="token operator">=</span>payments<span class="token punctuation">.</span>stu_id
 <span class="token keyword">where</span> payments<span class="token punctuation">.</span>is_paid<span class="token operator">=</span><span class="token number">1</span>
   <span class="token operator">and</span> payments<span class="token punctuation">.</span>is_canceled<span class="token operator">=</span><span class="token number">0</span>
   <span class="token operator">and</span> payments<span class="token punctuation">.</span>money<span class="token operator">&gt;</span><span class="token number">0</span>
   <span class="token operator">and</span> students<span class="token punctuation">.</span>created_at<span class="token operator">&gt;=</span><span class="token string">&#39;2021-05-01&#39;</span>
   <span class="token operator">and</span> students<span class="token punctuation">.</span>created_at<span class="token operator">&lt;</span> <span class="token string">&#39;2021-06-01&#39;</span><span class="token punctuation">;</span>      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4F7F\u7528-join-left-join-\u66FF\u4EE3-in-exists\u3001not-in-not-exists-\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-join-left-join-\u66FF\u4EE3-in-exists\u3001not-in-not-exists-\u5199\u6CD5" aria-hidden="true">#</a> <strong>\u4F7F\u7528 join/left join \u66FF\u4EE3 in/exists\u3001not in/not exists \u5199\u6CD5</strong></h4><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># \u4E0D\u5EFA\u8BAE\u5199\u6CD5</span>
<span class="token keyword">select</span> u<span class="token punctuation">.</span>id 
 <span class="token keyword">from</span> users u 
 <span class="token keyword">where</span> u<span class="token punctuation">.</span>updated_at <span class="token operator">&gt;</span> <span class="token string">&#39;2021-05-20 12:00:00&#39;</span>
	<span class="token operator">and</span> u<span class="token punctuation">.</span>id <span class="token operator">not</span> <span class="token operator">in</span><span class="token punctuation">(</span><span class="token keyword">select</span> a<span class="token punctuation">.</span>user_id <span class="token keyword">from</span> users_account_number a<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># \u4F18\u5316\u5199\u6CD5</span>
<span class="token keyword">select</span> u<span class="token punctuation">.</span>id 
 <span class="token keyword">from</span> users u 
 <span class="token keyword">left</span> <span class="token keyword">join</span> users_account_number a <span class="token keyword">on</span> u<span class="token punctuation">.</span>id<span class="token operator">=</span>a<span class="token punctuation">.</span>user_id
 <span class="token keyword">where</span> u<span class="token punctuation">.</span>updated_at <span class="token operator">&gt;</span> <span class="token string">&#39;2021-05-20 12:00:00&#39;</span>
 <span class="token operator">and</span> a<span class="token punctuation">.</span>user_id <span class="token operator">is</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6839\u636E\u5B57\u6BB5\u7C7B\u578B\u5408\u7406\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u5B57\u6BB5\u7C7B\u578B\u5408\u7406\u4F20\u53C2" aria-hidden="true">#</a> <strong>\u6839\u636E\u5B57\u6BB5\u7C7B\u578B\u5408\u7406\u4F20\u53C2</strong></h4><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">#\u53C2\u6570\u7C7B\u578B\u4E0E\u5B57\u6BB5\u5B9A\u4E49\u7C7B\u578B\u4E0D\u4E00\u81F4</span>
<span class="token keyword">select</span> <span class="token operator">*</span>
 <span class="token keyword">from</span> users
 <span class="token keyword">where</span> mobile<span class="token operator">=</span><span class="token number">13199999999</span><span class="token punctuation">;</span>
<span class="token comment"># </span>
<span class="token keyword">select</span> <span class="token operator">*</span>
 <span class="token keyword">from</span> users
 <span class="token keyword">where</span> mobile<span class="token operator">=</span><span class="token string">&#39;13999999999&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4E0D\u8981\u5728\u67E5\u8BE2\u5B57\u6BB5\u4E0A\u4F7F\u7528\u51FD\u6570\u6216\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u8981\u5728\u67E5\u8BE2\u5B57\u6BB5\u4E0A\u4F7F\u7528\u51FD\u6570\u6216\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> <strong>\u4E0D\u8981\u5728\u67E5\u8BE2\u5B57\u6BB5\u4E0A\u4F7F\u7528\u51FD\u6570\u6216\u8868\u8FBE\u5F0F</strong></h4><h4 id="\u9632\u6B62\u5206\u9875\u8FC7\u5927\u5BFC\u81F4\u67E5\u8BE2\u8D8A\u6765\u8D8A\u6162-\u53EF\u4F7F\u7528id\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u9632\u6B62\u5206\u9875\u8FC7\u5927\u5BFC\u81F4\u67E5\u8BE2\u8D8A\u6765\u8D8A\u6162-\u53EF\u4F7F\u7528id\u4F18\u5316" aria-hidden="true">#</a> <strong>\u9632\u6B62\u5206\u9875\u8FC7\u5927\u5BFC\u81F4\u67E5\u8BE2\u8D8A\u6765\u8D8A\u6162\uFF0C\u53EF\u4F7F\u7528id\u4F18\u5316</strong></h4>`,11),l=[i];function o(p,c){return s(),a("div",null,l)}const d=n(t,[["render",o],["__file","mysql-yh-sql.html.vue"]]);export{d as default};
