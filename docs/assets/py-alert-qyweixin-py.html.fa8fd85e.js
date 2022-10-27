import{_ as n,o as s,c as a,e as t}from"./app.a667bd71.js";const p={},e=t(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">import</span> json
<span class="token comment"># \`\`\`ops</span>
<span class="token comment"># title:\u5B9E\u73B0\u4F01\u4E1A\u5FAE\u4FE1\u81EA\u52A8\u544A\u8B66\u529F\u80FD</span>
<span class="token comment"># descr:</span>
<span class="token comment"># \`\`\`</span>


<span class="token keyword">class</span> <span class="token class-name">WeiXin</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;\u5B9E\u73B0\u4F01\u4E1A\u5FAE\u4FE1\u81EA\u52A8\u544A\u8B66\u529F\u80FD&quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> corpid<span class="token punctuation">,</span> corpsecret<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>url <span class="token operator">=</span> <span class="token string">&quot;https://qyapi.weixin.qq.com/cgi-bin&quot;</span>
        self<span class="token punctuation">.</span>corpid <span class="token operator">=</span> corpid
        self<span class="token punctuation">.</span>corpsecret <span class="token operator">=</span> corpsecret
        self<span class="token punctuation">.</span>_token <span class="token operator">=</span> self<span class="token punctuation">.</span>_get_token<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">_get_token</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        \u83B7\u53D6\u4F01\u4E1A\u5FAE\u4FE1API\u63A5\u53E3\u7684access_token
        :return:
        &#39;&#39;&#39;</span>
        token_url <span class="token operator">=</span> self<span class="token punctuation">.</span>url <span class="token operator">+</span> \\
            <span class="token string">&quot;/gettoken?corpid=%s&amp;corpsecret=%s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>
                self<span class="token punctuation">.</span>corpid<span class="token punctuation">,</span> self<span class="token punctuation">.</span>corpsecret<span class="token punctuation">)</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            res <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>token_url<span class="token punctuation">)</span><span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
            token <span class="token operator">=</span> res<span class="token punctuation">[</span><span class="token string">&#39;access_token&#39;</span><span class="token punctuation">]</span>
            <span class="token keyword">return</span> token
        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">_get_media_id</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> file_obj<span class="token punctuation">)</span><span class="token punctuation">:</span>
        get_media_url <span class="token operator">=</span> self<span class="token punctuation">.</span>url <span class="token operator">+</span> \\
            <span class="token string">&quot;/media/upload?access_token={}&amp;type=file&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>_token<span class="token punctuation">)</span>
        data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;media&quot;</span><span class="token punctuation">:</span> file_obj<span class="token punctuation">}</span>

        <span class="token keyword">try</span><span class="token punctuation">:</span>
            res <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>url<span class="token operator">=</span>get_media_url<span class="token punctuation">,</span> files<span class="token operator">=</span>data<span class="token punctuation">)</span>
            media_id <span class="token operator">=</span> res<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;media_id&#39;</span><span class="token punctuation">]</span>
            <span class="token keyword">return</span> media_id
        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">send_text</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> agentid<span class="token punctuation">,</span> content<span class="token punctuation">,</span> touser<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> toparty<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        send_msg_url <span class="token operator">=</span> self<span class="token punctuation">.</span>url <span class="token operator">+</span> \\
            <span class="token string">&quot;/message/send?access_token=%s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>_token<span class="token punctuation">)</span>
        send_data <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;touser&quot;</span><span class="token punctuation">:</span> touser<span class="token punctuation">,</span>
            <span class="token string">&quot;toparty&quot;</span><span class="token punctuation">:</span> toparty<span class="token punctuation">,</span>
            <span class="token string">&quot;msgtype&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;agentid&quot;</span><span class="token punctuation">:</span> agentid<span class="token punctuation">,</span>
            <span class="token string">&quot;text&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;content&quot;</span><span class="token punctuation">:</span> content
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">try</span><span class="token punctuation">:</span>
            res <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>send_msg_url<span class="token punctuation">,</span> data<span class="token operator">=</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>send_data<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">send_image</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> agentid<span class="token punctuation">,</span> file_obj<span class="token punctuation">,</span> touser<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> toparty<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        media_id <span class="token operator">=</span> self<span class="token punctuation">.</span>_get_media_id<span class="token punctuation">(</span>file_obj<span class="token punctuation">)</span>
        send_msg_url <span class="token operator">=</span> self<span class="token punctuation">.</span>url <span class="token operator">+</span> \\
            <span class="token string">&quot;/message/send?access_token=%s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>_token<span class="token punctuation">)</span>
        send_data <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;touser&quot;</span><span class="token punctuation">:</span> touser<span class="token punctuation">,</span>
            <span class="token string">&quot;toparty&quot;</span><span class="token punctuation">:</span> toparty<span class="token punctuation">,</span>
            <span class="token string">&quot;msgtype&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;agentid&quot;</span><span class="token punctuation">:</span> agentid<span class="token punctuation">,</span>
            <span class="token string">&quot;image&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;media_id&quot;</span><span class="token punctuation">:</span> media_id
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">try</span><span class="token punctuation">:</span>
            res <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>send_msg_url<span class="token punctuation">,</span> data<span class="token operator">=</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>send_data<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","py-alert-qyweixin-py.html.vue"]]);export{r as default};
