import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},o=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Display wireless settings of the first wireless adapter</span>
<span class="token comment"># \u663E\u793A\u7B2C\u4E00\u4E2A\u65E0\u7EBF\u9002\u914D\u5668\u7684\u65E0\u7EBF\u8BBE\u7F6E</span>
iwconfig wlan0

<span class="token comment"># Take down / up the wireless adapter</span>
<span class="token comment"># \u53D6\u4E0B/\u5347\u8D77\u65E0\u7EBF\u9002\u914D\u5668</span>
iwconfig wlan0 txpower <span class="token punctuation">{</span>on<span class="token operator">|</span>auto<span class="token operator">|</span>off<span class="token punctuation">}</span>

<span class="token comment"># Change the mode of the wireless adapter</span>
<span class="token comment"># \u66F4\u6539\u65E0\u7EBF\u9002\u914D\u5668\u7684\u6A21\u5F0F</span>
iwconfig wlan0 mode <span class="token punctuation">{</span>managed<span class="token operator">|</span>ad-hoc<span class="token operator">|</span>monitor<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[o];function c(l,p){return s(),e("div",null,t)}const d=n(i,[["render",c],["__file","iwconfig.html.vue"]]);export{d as default};
