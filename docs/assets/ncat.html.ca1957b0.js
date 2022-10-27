import{_ as n,o as s,c as a,e as t}from"./app.a667bd71.js";const e={},p=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Connect mode (ncat is client) | default port is 31337</span>
<span class="token comment">#\u8FDE\u63A5\u6A21\u5F0F\uFF08ncat\u662F\u5BA2\u6237\u7AEF\uFF09|\u9ED8\u8BA4\u7AEF\u53E3\u662F31337</span>
ncat <span class="token operator">&lt;</span>host<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>port<span class="token operator">&gt;</span><span class="token punctuation">]</span>

<span class="token comment"># Listen mode (ncat is server) | default port is 31337</span>
<span class="token comment">#\u76D1\u542C\u6A21\u5F0F\uFF08ncat\u662F\u670D\u52A1\u5668\uFF09|\u9ED8\u8BA4\u7AEF\u53E3\u662F31337</span>
ncat <span class="token parameter variable">-l</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>host<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>port<span class="token operator">&gt;</span><span class="token punctuation">]</span>

<span class="token comment"># Transfer file (closes after one transfer)</span>
<span class="token comment">#\u4F20\u8F93\u6587\u4EF6\uFF08\u4E00\u6B21\u4F20\u8F93\u540E\u5173\u95ED\uFF09</span>
ncat <span class="token parameter variable">-l</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>host<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>port<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token function">file</span>

<span class="token comment"># Transfer file (stays open for multiple transfers)</span>
<span class="token comment">#\u4F20\u8F93\u6587\u4EF6\uFF08\u4FDD\u6301\u6253\u5F00\u4EE5\u8FDB\u884C\u591A\u6B21\u4F20\u8F93\uFF09</span>
ncat <span class="token parameter variable">-l</span> --keep-open <span class="token punctuation">[</span><span class="token operator">&lt;</span>host<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>port<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token function">file</span>

<span class="token comment"># Receive file</span>
<span class="token comment">#\u63A5\u6536\u6587\u4EF6</span>
ncat <span class="token punctuation">[</span><span class="token operator">&lt;</span>host<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>port<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token function">file</span>

<span class="token comment"># Brokering | allows for multiple clients to connect</span>
<span class="token comment">#\u7ECF\u7EAA\u4EBA|\u5141\u8BB8\u591A\u4E2A\u5BA2\u6237\u7AEF\u8FDE\u63A5</span>
ncat <span class="token parameter variable">-l</span> <span class="token parameter variable">--broker</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>host<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>port<span class="token operator">&gt;</span><span class="token punctuation">]</span>

<span class="token comment"># Listen with SSL | many options, use ncat --help for full list</span>
<span class="token comment">#\u7528SSL\u542C\u5F88\u591A\u9009\u9879\uFF0C\u4F7F\u7528ncat --help\u83B7\u53D6\u5B8C\u6574\u5217\u8868</span>
ncat <span class="token parameter variable">-l</span> <span class="token parameter variable">--ssl</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>host<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>port<span class="token operator">&gt;</span><span class="token punctuation">]</span>

<span class="token comment"># Access control</span>
<span class="token comment">#\u8BBF\u95EE\u63A7\u5236</span>
ncat <span class="token parameter variable">-l</span> <span class="token parameter variable">--allow</span> <span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span>
ncat <span class="token parameter variable">-l</span> <span class="token parameter variable">--deny</span> <span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span>

<span class="token comment"># Proxying</span>
<span class="token comment">#\u4EE3\u7406</span>
ncat <span class="token parameter variable">--proxy</span> <span class="token operator">&lt;</span>proxyhost<span class="token operator">&gt;</span><span class="token punctuation">[</span>:<span class="token operator">&lt;</span>proxyport<span class="token operator">&gt;</span><span class="token punctuation">]</span> --proxy-type <span class="token punctuation">{</span>http <span class="token operator">|</span> socks4<span class="token punctuation">}</span> <span class="token operator">&lt;</span>host<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token operator">&lt;</span>port<span class="token operator">&gt;</span><span class="token punctuation">]</span>

<span class="token comment"># Chat server | can use brokering for multi-user chat</span>
<span class="token comment">#\u804A\u5929\u670D\u52A1\u5668|\u53EF\u4EE5\u4F7F\u7528\u4EE3\u7406\u8FDB\u884C\u591A\u7528\u6237\u804A\u5929</span>
ncat <span class="token parameter variable">-l</span> <span class="token parameter variable">--chat</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>host<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>port<span class="token operator">&gt;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[p];function l(c,r){return s(),a("div",null,o)}const u=n(e,[["render",l],["__file","ncat.html.vue"]]);export{u as default};
