import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},p=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>


<span class="token comment">####\u6628\u5929\u65E5\u671F\uFF081\u5929\u4EE5\u524D\uFF09</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> last-day +%Y-%m-%d 
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;1 days ago&quot;</span> +%Y-%m-%d
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;-1 days&#39;</span> +%Y-%m-%d

<span class="token comment">####\u4E0B\u5468\u4E00\u65E5\u671F</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;next monday&#39;</span> +%Y-%m-%d 

<span class="token comment">####\u660E\u5929\u65E5\u671F</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> next-day +%Y-%m-%d
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;1 days&#39;</span> +%Y-%m-%d

<span class="token comment">####\u524D\u5929 \uFF082\u5929\u4EE5\u524D\uFF09 \u2018n days ago&#39;  \u8868\u793An\u5929\u524D\u7684\u90A3\u4E00\u5929</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;2 days ago&quot;</span> +%Y-%m-%d

<span class="token comment">####\u4E0A\u4E2A\u6708\u7684\u4ECA\u5929</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> last-month +%Y-%m-%d

<span class="token comment">####\u4E0B\u4E2A\u6708\u7684\u4ECA\u5929</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> next-month +%Y-%m-%d

<span class="token comment">###\u5F53\u524D\u65F6\u95F4</span>
<span class="token function">date</span> +%Y-%m-%d_%H_%M_%S

<span class="token comment">###\u6CE8\u610F : \u5F53\u4F60\u4E0D\u5E0C\u671B\u51FA\u73B0\u65E0\u610F\u4E49\u7684 0 \u65F6(\u6BD4\u5982\u8BF4 1999/03/07)\uFF0C\u5219\u53EF\u4EE5\u5728\u6807\u8BB0\u4E2D\u63D2\u5165 \u2013 \u7B26\u53F7</span>
<span class="token comment">###\u6BD4\u5982\u8BF4 date +%-H:%-M:%-S \u4F1A\u628A\u65F6\u5206\u79D2\u4E2D\u65E0\u610F\u4E49\u7684 0 \u7ED9\u53BB\u6389\uFF0C\u50CF\u662F\u539F\u672C\u7684 08:09:04 \u4F1A\u53D8\u4E3A 8:9:4\u3002</span>
<span class="token function">date</span> +%Y%-m%-d
<span class="token comment">##201766</span>

<span class="token comment">####################################################################</span>
\u65E5\u671F\u65B9\u9762 <span class="token builtin class-name">:</span>  
%a <span class="token builtin class-name">:</span> \u661F\u671F\u51E0 <span class="token punctuation">(</span>Sun<span class="token punctuation">..</span>Sat<span class="token punctuation">)</span>  
%A <span class="token builtin class-name">:</span> \u661F\u671F\u51E0 <span class="token punctuation">(</span>Sunday<span class="token punctuation">..</span>Saturday<span class="token punctuation">)</span>  
%b <span class="token builtin class-name">:</span> \u6708\u4EFD <span class="token punctuation">(</span>Jan<span class="token punctuation">..</span>Dec<span class="token punctuation">)</span>  
%B <span class="token builtin class-name">:</span> \u6708\u4EFD <span class="token punctuation">(</span>January<span class="token punctuation">..</span>December<span class="token punctuation">)</span>  
%c <span class="token builtin class-name">:</span> \u76F4\u63A5\u663E\u793A\u65E5\u671F\u548C\u65F6\u95F4  
%d <span class="token builtin class-name">:</span> \u65E5 <span class="token punctuation">(</span>01<span class="token punctuation">..</span><span class="token number">31</span><span class="token punctuation">)</span>  
%D <span class="token builtin class-name">:</span> \u76F4\u63A5\u663E\u793A\u65E5\u671F <span class="token punctuation">(</span>mm/dd/yy<span class="token punctuation">)</span>  
%h <span class="token builtin class-name">:</span> \u540C %b  
%j <span class="token builtin class-name">:</span> \u4E00\u5E74\u4E2D\u7684\u7B2C\u51E0\u5929 <span class="token punctuation">(</span>001<span class="token punctuation">..</span><span class="token number">366</span><span class="token punctuation">)</span>  
%m <span class="token builtin class-name">:</span> \u6708\u4EFD <span class="token punctuation">(</span>01<span class="token punctuation">..</span><span class="token number">12</span><span class="token punctuation">)</span>  
%U <span class="token builtin class-name">:</span> \u4E00\u5E74\u4E2D\u7684\u7B2C\u51E0\u5468 <span class="token punctuation">(</span>00<span class="token punctuation">..</span><span class="token number">53</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>\u4EE5 Sunday \u4E3A\u4E00\u5468\u7684\u7B2C\u4E00\u5929\u7684\u60C5\u5F62<span class="token punctuation">)</span>  
%w <span class="token builtin class-name">:</span> \u4E00\u5468\u4E2D\u7684\u7B2C\u51E0\u5929 <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">..</span><span class="token number">6</span><span class="token punctuation">)</span>  
%W <span class="token builtin class-name">:</span> \u4E00\u5E74\u4E2D\u7684\u7B2C\u51E0\u5468 <span class="token punctuation">(</span>00<span class="token punctuation">..</span><span class="token number">53</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>\u4EE5 Monday \u4E3A\u4E00\u5468\u7684\u7B2C\u4E00\u5929\u7684\u60C5\u5F62<span class="token punctuation">)</span>  
%x <span class="token builtin class-name">:</span> \u76F4\u63A5\u663E\u793A\u65E5\u671F <span class="token punctuation">(</span>mm/dd/yy<span class="token punctuation">)</span>  
%y <span class="token builtin class-name">:</span> \u5E74\u4EFD\u7684\u6700\u540E\u4E24\u4F4D\u6570\u5B57 <span class="token punctuation">(</span>00.99<span class="token punctuation">)</span>  
%Y <span class="token builtin class-name">:</span> \u5B8C\u6574\u5E74\u4EFD <span class="token punctuation">(</span>0000<span class="token punctuation">..</span><span class="token number">9999</span><span class="token punctuation">)</span>

\u65F6\u95F4\u65B9\u9762 <span class="token builtin class-name">:</span>  
% <span class="token builtin class-name">:</span> \u5370\u51FA  
% %n <span class="token builtin class-name">:</span> \u4E0B\u4E00\u884C  
%t <span class="token builtin class-name">:</span> \u8DF3\u683C  
%H <span class="token builtin class-name">:</span> \u5C0F\u65F6<span class="token punctuation">(</span>00<span class="token punctuation">..</span><span class="token number">23</span><span class="token punctuation">)</span>  
%I <span class="token builtin class-name">:</span> \u5C0F\u65F6<span class="token punctuation">(</span>01<span class="token punctuation">..</span><span class="token number">12</span><span class="token punctuation">)</span>  
%k <span class="token builtin class-name">:</span> \u5C0F\u65F6<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">..</span><span class="token number">23</span><span class="token punctuation">)</span>  
%l <span class="token builtin class-name">:</span> \u5C0F\u65F6<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">12</span><span class="token punctuation">)</span>  
%M <span class="token builtin class-name">:</span> \u5206\u949F<span class="token punctuation">(</span>00<span class="token punctuation">..</span><span class="token number">59</span><span class="token punctuation">)</span>  
%p <span class="token builtin class-name">:</span> \u663E\u793A\u672C\u5730 AM \u6216 PM  
%r <span class="token builtin class-name">:</span> \u76F4\u63A5\u663E\u793A\u65F6\u95F4 <span class="token punctuation">(</span><span class="token number">12</span> \u5C0F\u65F6\u5236\uFF0C\u683C\u5F0F\u4E3A hh:mm:ss <span class="token punctuation">[</span>AP<span class="token punctuation">]</span>M<span class="token punctuation">)</span>  
%s <span class="token builtin class-name">:</span> \u4ECE <span class="token number">1970</span> \u5E74 <span class="token number">1</span> \u6708 <span class="token number">1</span> \u65E5 00:00:00 UTC \u5230\u76EE\u524D\u4E3A\u6B62\u7684\u79D2\u6570 %S <span class="token builtin class-name">:</span> \u79D2<span class="token punctuation">(</span>00<span class="token punctuation">..</span><span class="token number">61</span><span class="token punctuation">)</span>  
%T <span class="token builtin class-name">:</span> \u76F4\u63A5\u663E\u793A\u65F6\u95F4 <span class="token punctuation">(</span><span class="token number">24</span> \u5C0F\u65F6\u5236<span class="token punctuation">)</span>  
%X <span class="token builtin class-name">:</span> \u76F8\u5F53\u4E8E %H:%M:%S  
%Z <span class="token builtin class-name">:</span> \u663E\u793A\u65F6\u533A  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[p];function i(c,u){return s(),a("div",null,l)}const d=n(t,[["render",i],["__file","time.html.vue"]]);export{d as default};
