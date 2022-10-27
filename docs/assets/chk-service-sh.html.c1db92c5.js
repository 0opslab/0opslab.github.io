import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const t={},p=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u5229\u7528shell\u68C0\u67E5\u670D\u52A1\u7684\u72B6\u6001</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token comment">#</span>
<span class="token comment">#[ -f /lib/lsb/init-functions ] &amp;&amp; . /lib/lsb/init-functions</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-ne</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;need 1 parameter&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">fi</span>

<span class="token comment">#env=$(echo $1| tr &#39;[A-Z]&#39; &#39;[a-z]&#39;)</span>
<span class="token assign-left variable">env</span><span class="token operator">=</span><span class="token variable">$1</span>

<span class="token comment">#chek services status</span>
<span class="token assign-left variable">services</span><span class="token operator">=</span><span class="token punctuation">(</span>
vphotossaas
<span class="token punctuation">)</span>

<span class="token function-name function">get_version</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-s</span>  http://api-$<span class="token punctuation">{</span>env<span class="token punctuation">}</span>.vphotos.cn/$1/mini/app/healthCheck<span class="token operator">|</span> jq <span class="token parameter variable">-r</span> <span class="token string">&#39;.version&#39;</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span> 
	<span class="token comment">#return \${version}</span>
<span class="token punctuation">}</span>

<span class="token function-name function">get_code_status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token assign-left variable">code_status</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-s</span>  http://api-$<span class="token punctuation">{</span>env<span class="token punctuation">}</span>.vphotos.cn/$1/mini/app/healthCheck<span class="token operator">|</span> jq <span class="token parameter variable">-r</span> <span class="token string">&#39;.code&#39;</span><span class="token variable">)</span></span>
	<span class="token comment">#return \${code_status}</span>
<span class="token punctuation">}</span>

<span class="token function-name function">get_pod_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token assign-left variable">pod_name</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-s</span>  http://api-$<span class="token punctuation">{</span>env<span class="token punctuation">}</span>.vphotos.cn/$1/mini/app/healthCheck<span class="token operator">|</span> jq <span class="token parameter variable">-r</span> <span class="token string">&#39;.localName&#39;</span><span class="token variable">)</span></span>
	<span class="token builtin class-name">return</span> <span class="token variable">\${pod_name}</span>
<span class="token punctuation">}</span>


<span class="token function-name function">curl_ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token assign-left variable">CURL</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-o</span> /dev/null <span class="token parameter variable">-s</span> --connect-timeout <span class="token number">5</span> <span class="token parameter variable">-w</span> <span class="token string">&#39;%{http_code}&#39;</span> $1<span class="token operator">|</span><span class="token function">egrep</span> <span class="token string">&quot;200|302&quot;</span><span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">)</span></span>
  <span class="token builtin class-name">return</span> <span class="token variable">$CURL</span>
<span class="token punctuation">}</span>

<span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token for-or-select variable">n</span> <span class="token keyword">in</span> <span class="token variable">\${services<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
   <span class="token keyword">do</span> 
       get_version <span class="token variable">$n</span> <span class="token operator">&amp;&amp;</span> get_code_status <span class="token variable">$n</span> 
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
         <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token variable">$n</span> status: <span class="token variable">\${code_status}</span>&quot;</span>  <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m sucess <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>  <span class="token string">&quot;version: <span class="token variable">\${version}</span>&quot;</span>
      <span class="token keyword">else</span>
         <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span>  <span class="token string">&quot;<span class="token variable">$n</span> status: <span class="token variable">\${code_status}</span>&quot;</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m failed <span class="token entity" title="\\033">\\033</span>[0m&quot;</span> <span class="token string">&quot;version: <span class="token variable">\${version}</span>&quot;</span>
         <span class="token function">sleep</span> <span class="token number">3</span> <span class="token comment">#try again after sleep 10 </span>
          <span class="token comment">#CURL=$(curl $n|egrep &quot;200|302&quot;|wc -l)</span>
           get_code_status <span class="token variable">$n</span>
           <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${code_status}</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
              <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span>  <span class="token string">&quot;Retry <span class="token variable">$n</span> again status&quot;</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m sucess <span class="token entity" title="\\033">\\033</span>[0m&quot;</span> 
           <span class="token keyword">else</span>
              <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Retry <span class="token variable">$n</span> again status&quot;</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m failed <span class="token entity" title="\\033">\\033</span>[0m&quot;</span> 
          <span class="token keyword">fi</span> 
      <span class="token keyword">fi</span>
   <span class="token keyword">done</span>
<span class="token punctuation">}</span> 
main

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[p];function i(c,o){return n(),a("div",null,l)}const u=s(t,[["render",i],["__file","chk-service-sh.html.vue"]]);export{u as default};
