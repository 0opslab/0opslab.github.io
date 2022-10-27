import{_ as n,o as a,c as s,e}from"./app.a667bd71.js";const l={},i=e(`<p>Lua \u7A0B\u5E8F\u4EE3\u7801\u4FDD\u6301\u5230\u4E00\u4E2A\u4EE5 lua \u7ED3\u5C3E\u7684\u6587\u4EF6\uFF0C\u5E76\u6267\u884C\uFF0C\u8BE5\u6A21\u5F0F\u79F0\u4E3A\u811A\u672C\u5F0F\u7F16\u7A0B\u3002</p><h4 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h4><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- \u5355\u53F7\u6CE8\u91CA</span>

<span class="token comment">--[[
 \u591A\u884C\u6CE8\u91CA
 \u591A\u884C\u6CE8\u91CA
 --]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#--\u76F4\u63A5\u8FD0\u884Clua\u7A0B\u5E8F</span>
%lua \u7A0B\u5E8F\u540D.lua  
<span class="token comment">#--\u542F\u52A8lua\u89E3\u91CA\u5668\uFF0C\u8FDB\u5165\u4EA4\u4E92\u6A21\u5F0F                  </span>
%lua <span class="token parameter variable">-i</span> \u7A0B\u5E8F\u540D.lua 
<span class="token comment">#--\u8FD0\u884C\u7A0B\u5E8F                </span>
dofile<span class="token punctuation">(</span><span class="token string">&quot;\u7A0B\u5E8F\u540D.lua&quot;</span><span class="token punctuation">)</span>  
<span class="token comment">#--\u76F4\u63A5\u5728\u547D\u4EE4\u884C\u4E2D\u8F93\u5165\u4EE3\u7801              </span>
lua <span class="token parameter variable">-e</span> <span class="token string">&quot;code&quot;</span> 
<span class="token comment">#--\u52A0\u8F7D\u5E93\u6587\u4EF6a                     </span>
lua <span class="token parameter variable">-l</span> a                               
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[i];function d(t,r){return a(),s("div",null,c)}const o=n(l,[["render",d],["__file","lua.html.vue"]]);export{o as default};
