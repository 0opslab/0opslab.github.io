import{_ as n,o as s,c as e,e as i}from"./app.a667bd71.js";const a={},l=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Start tmux:</span>
<span class="token comment">#\u542F\u52A8tmux\uFF1A</span>
tmux

<span class="token comment"># Detach from tmux:</span>
<span class="token comment">#\u4ECEtmux\u5206\u79BB\uFF1A</span>
Ctrl-b d

<span class="token comment"># Restore tmux session:</span>
<span class="token comment">#\u6062\u590Dtmux\u4F1A\u8BDD\uFF1A</span>
tmux attach

<span class="token comment"># Detach an already attached session (great if you are moving devices with different screen resolutions)</span>
<span class="token comment">#\u5206\u79BB\u5DF2\u8FDE\u63A5\u7684\u4F1A\u8BDD\uFF08\u5982\u679C\u60A8\u6B63\u5728\u79FB\u52A8\u5177\u6709\u4E0D\u540C\u5C4F\u5E55\u5206\u8FA8\u7387\u7684\u8BBE\u5907\uFF0C\u5219\u975E\u5E38\u68D2\uFF09</span>
tmux attach <span class="token parameter variable">-d</span> 

<span class="token comment"># Display session:</span>
<span class="token comment">#\u663E\u793A\u4F1A\u8BDD\uFF1A</span>
tmux <span class="token function">ls</span>

<span class="token comment"># Rename session:</span>
<span class="token comment">#\u91CD\u547D\u540D\u4F1A\u8BDD\uFF1A</span>
Ctrl-b $

<span class="token comment"># Switch session:</span>
<span class="token comment">#\u5207\u6362\u4F1A\u8BDD\uFF1A</span>
Ctrl-b s

<span class="token comment"># Start a shared session:</span>
<span class="token comment">#\u542F\u52A8\u5171\u4EAB\u4F1A\u8BDD\uFF1A</span>
tmux <span class="token parameter variable">-S</span> /tmp/your_shared_session
<span class="token function">chmod</span> <span class="token number">777</span> /tmp/your_shared_session

<span class="token comment"># Help screen (Q to quit):</span>
<span class="token comment">#\u5E2E\u52A9\u5C4F\u5E55\uFF08Q\u9000\u51FA\uFF09\uFF1A</span>
Ctrl-b ?

<span class="token comment"># Scroll in window:</span>
<span class="token comment">#\u6EDA\u52A8\u7A97\u53E3\uFF1A</span>
Ctrl-b PageUp/PageDown

<span class="token comment"># Reload configuation file</span>
<span class="token comment">#\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6</span>
Ctrl-b <span class="token builtin class-name">:</span> source-file /path/to/file

<span class="token comment"># Window management</span>
<span class="token comment">#\u7A97\u53E3\u7BA1\u7406</span>
<span class="token comment"># =================</span>
<span class="token comment">#=================</span>

<span class="token comment"># Create window:</span>
<span class="token comment">#\u521B\u5EFA\u7A97\u53E3\uFF1A</span>
Ctrl-b c

<span class="token comment"># Destroy window:</span>
<span class="token comment">#\u9500\u6BC1\u7A97\u53E3\uFF1A</span>
Ctrl-b x

<span class="token comment"># Switch between windows:</span>
<span class="token comment">#\u5728\u7A97\u53E3\u4E4B\u95F4\u5207\u6362\uFF1A</span>
Ctrl-b <span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>
or
Ctrl-b Arrows

<span class="token comment"># Split windows horizontally:</span>
<span class="token comment">#\u6C34\u5E73\u5206\u5272\u7A97\u53E3\uFF1A</span>
Ctrl-b %

<span class="token comment"># Split windows vertically:</span>
<span class="token comment">#\u5782\u76F4\u62C6\u5206\u7A97\u53E3\uFF1A</span>
Ctrl-b &quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function m(d,t){return s(),e("div",null,c)}const o=n(a,[["render",m],["__file","tmux.html.vue"]]);export{o as default};
