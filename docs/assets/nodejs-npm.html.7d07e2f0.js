import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const p={},t=e(`<p>name|pkg \u6A21\u5757\u540D version \u7248\u672C\u53F7 version range \u7248\u672C\u8303\u56F4 @scope \u4F5C\u7528\u57DF\u3002\u6240\u6709 npm \u8F6F\u4EF6\u5305\u90FD\u6709\u4E00\u4E2A\u540D\u79F0\u3002\u67D0\u4E9B\u8F6F\u4EF6\u5305\u540D\u79F0\u4E5F\u6709\u4F5C\u7528\u57DF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B npm \u7684\u7248\u672C //6.4.0  \u5B89\u88C5\u6210\u529F\u4F1A\u8FD4\u56DE\u7248\u672C\u53F7</span>
$ <span class="token function">npm</span> <span class="token parameter variable">-v</span>  

<span class="token comment"># \u67E5\u770B\u5404\u4E2A\u547D\u4EE4\u7684\u7B80\u5355\u7528\u6CD5</span>
$ <span class="token function">npm</span> <span class="token parameter variable">-l</span> 
 
<span class="token comment"># \u67E5\u770B npm \u547D\u4EE4\u5217\u8868</span>
$ <span class="token function">npm</span> <span class="token builtin class-name">help</span>

<span class="token comment"># \u67E5\u770B npm \u7684\u914D\u7F6E</span>
$ <span class="token function">npm</span> config list <span class="token parameter variable">-l</span>

<span class="token comment"># npm init\u7528\u6765\u521D\u59CB\u5316\u751F\u6210\u4E00\u4E2A\u65B0\u7684package.json\u6587\u4EF6</span>
$ <span class="token function">npm</span> <span class="token builtin class-name">set</span> init-author-name <span class="token string">&#39;my name jerry&#39;</span>
$ <span class="token builtin class-name">set</span> init-author-email <span class="token string">&#39;12345@qq.com&#39;</span>
$ <span class="token builtin class-name">set</span> init-author-url <span class="token string">&#39;http://yourdomain.com&#39;</span>
$ <span class="token function">npm</span> <span class="token builtin class-name">set</span> init-license <span class="token string">&#39;MIT&#39;</span>
$ <span class="token function">npm</span> init


$ <span class="token function">npm</span> search \u641C\u7D22\u8BCD <span class="token punctuation">[</span>-g<span class="token punctuation">]</span>

<span class="token comment">#\u5F53\u524D\u9879\u76EE\u5B89\u88C5\u7684\u6240\u6709\u6A21\u5757</span>
<span class="token variable">$npm</span> list

<span class="token comment">#\u5217\u51FA\u5168\u5C40\u5B89\u88C5\u7684\u6A21\u5757 \u5E26\u4E0A[--depth 0] \u4E0D\u6DF1\u5165\u5230\u5305\u7684\u652F\u70B9 \u66F4\u7B80\u6D01</span>
$ <span class="token function">npm</span> list <span class="token parameter variable">-g</span> <span class="token parameter variable">--depth</span> <span class="token number">0</span>

<span class="token comment"># \u8BFB\u53D6package.json\u91CC\u9762\u7684\u914D\u7F6E\u5355\u5B89\u88C5  </span>
$ <span class="token function">npm</span> <span class="token function">install</span> 
//\u53EF\u7B80\u5199\u6210 <span class="token function">npm</span> i

<span class="token comment"># \u9ED8\u8BA4\u5B89\u88C5\u6307\u5B9A\u6A21\u5757\u7684\u6700\u65B0(@latest)\u7248\u672C</span>
$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token punctuation">[</span>@scope/<span class="token punctuation">]</span>name 
//eg:npm <span class="token function">install</span> gulp

<span class="token comment"># \u5B89\u88C5\u6307\u5B9A\u6A21\u5757\u7684\u6307\u5B9A\u7248\u672C</span>
$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token punctuation">[</span>@scope/<span class="token punctuation">]</span>name@version
//eg: <span class="token function">npm</span> <span class="token function">install</span> gulp@3.9.1

<span class="token comment"># \u5B89\u88C5\u6307\u5B9A\u6307\u5B9A\u7248\u672C\u8303\u56F4\u5185\u7684\u6A21\u5757</span>
$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token punctuation">[</span>@scope/<span class="token punctuation">]</span>name@version range
//eg: <span class="token function">npm</span> <span class="token function">install</span> vue@<span class="token string">&quot;=1.0.28  2.0.0&quot;</span>

<span class="token comment"># \u5B89\u88C5\u6307\u5B9A\u6A21\u5757\u7684\u6307\u5B9A\u6807\u7B7E \u9ED8\u8BA4\u503C\u4E3A(@latest)</span>
$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token punctuation">[</span>@scope/<span class="token punctuation">]</span>name@tag
//eg:npm <span class="token function">install</span> sax@0.1.1

<span class="token comment"># \u901A\u8FC7Github\u4EE3\u7801\u5E93\u5730\u5740\u5B89\u88C5</span>
$ <span class="token function">npm</span> <span class="token function">install</span> tarball url
//eg:npm <span class="token function">install</span> git://github.com/package/path.git

<span class="token comment">#\u5378\u8F7D\u5F53\u524D\u9879\u76EE\u6216\u5168\u5C40\u6A21\u5757 </span>
$ <span class="token function">npm</span> uninstall name <span class="token punctuation">[</span>-g<span class="token punctuation">]</span> 

eg: <span class="token function">npm</span> uninstall gulp --save-dev  
    <span class="token function">npm</span> i gulp <span class="token parameter variable">-g</span>

<span class="token comment">#\u5378\u8F7D\u540E\uFF0C\u4F60\u53EF\u4EE5\u5230 /node\\_modules/ \u76EE\u5F55\u4E0B\u67E5\u770B\u5305\u662F\u5426\u8FD8\u5B58\u5728\uFF0C\u6216\u8005\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B\uFF1A</span>
<span class="token comment">#\u67E5\u770B\u5B89\u88C5\u7684\u6A21\u5757</span>
<span class="token function">npm</span> <span class="token function">ls</span> 

<span class="token comment">#\u5347\u7EA7\u5F53\u524D\u9879\u76EE\u6216\u5168\u5C40\u7684\u6307\u5B9A\u6A21\u5757</span>
$ <span class="token function">npm</span> update name <span class="token punctuation">[</span>-g<span class="token punctuation">]</span> 

<span class="token comment"># \u5F15\u7528\u4F9D\u8D56 \u6709\u4E9B\u5305\u662F\u5168\u5C40\u5B89\u88C5\u4E86\uFF0C\u5728\u9879\u76EE\u91CC\u9762\u53EA\u9700\u8981\u5F15\u7528\u5373\u53EF\u3002</span>
$ <span class="token function">npm</span> <span class="token function">link</span> <span class="token punctuation">[</span>@scope/<span class="token punctuation">]</span>pkg<span class="token punctuation">[</span>@version<span class="token punctuation">]</span>
//eg: \u5F15\u7528   <span class="token function">npm</span> <span class="token function">link</span> gulp gulp-ssh gulp-ftp
//eg: \u89E3\u9664\u5F15\u7528 <span class="token function">npm</span> unlink gulp

<span class="token comment"># \u5F15\u7528\u6A21\u5757 \u672C\u4EBA\u7528\u5F97\u5C11\u6CA1\u6DF1\u5165\u8BF4\u4E86 \u7528\u5F97\u4E0A\u65F6\u53EF\u53BB\u7FFB\u6587\u6863\u4F8B\u5B50</span>
$ <span class="token function">npm</span> <span class="token function">link</span> <span class="token punctuation">(</span>in package <span class="token function">dir</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm-run-\u6267\u884C\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#npm-run-\u6267\u884C\u811A\u672C" aria-hidden="true">#</a> npm run \u6267\u884C\u811A\u672C</h2><p>package.json\u7684scripts\u5B57\u6BB5\uFF0C\u53EF\u4EE5\u7528\u4E8E\u6307\u5B9A\u811A\u672C\u547D\u4EE4\uFF0C\u4F9Bnpm\u76F4\u63A5\u8C03\u7528\u3002npm run\u4F1A\u521B\u5EFA\u4E00\u4E2AShell\uFF0C\u6267\u884C\u6307\u5B9A\u7684\u547D\u4EE4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm_test&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;reporter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xunit&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;script&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;bundle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mkdir -p build/$npm_package_version/&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">//$npm_package_version \u8BFB\u7684\u662F\u5916\u5C42&quot;version&quot;\u7684\u503C\uFF0C\u540C\u7406$npm_package_name \u8BFB\u7684\u662F\u5916\u5C42&quot;name&quot;\u7684\u503C</span>
        <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mocha test/ --reporter $npm_package_config_reporter&quot;</span>
        <span class="token comment">//$npm_package_config_reporter\u8BFB\u7684\u662F&quot;config&quot;\u91CC\u7684&quot;reporter&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pre-\u548Cpost-\u4E24\u4E2A\u94A9\u5B50-hook" tabindex="-1"><a class="header-anchor" href="#pre-\u548Cpost-\u4E24\u4E2A\u94A9\u5B50-hook" aria-hidden="true">#</a> pre-\u548Cpost-\u4E24\u4E2A\u94A9\u5B50\uFF08hook\uFF09</h4><p>npm\u4F1A\u5148\u67E5\u770B\u6709\u6CA1\u6709\u5B9A\u4E49prelint\u548Cpostlint\u4E24\u4E2A\u94A9\u5B50\uFF0C\u5982\u679C\u6709\u7684\u8BDD\uFF0C\u5C31\u4F1A \u5148\u6267\u884Cnpm run pre-\u547D\u4EE4\u540D\uFF0C\u7136\u540E\u6267\u884Cnpm run \u547D\u4EE4\u540D\uFF0C\u6700\u540E\u6267\u884Cnpm run post-\u547D\u4EE4\u540D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --cache --ext .js --ext .jsx src&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;karma start --log-leve=error karma.config.js --single-run=true&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;pretest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run lint&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;posttest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo &#39;Finished running tests&#39;&quot;</span>
  <span class="token punctuation">}</span>
  
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>\u7EC8\u7AEF<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
$ npm run lint
<span class="token comment">//\u76F4\u63A5\u6267\u884C npm run lint \u7ED3\u675F</span>

$ npm run test
<span class="token comment">//\u56E0\u4E3A\u6709\u5B9A\u4E49\u4E86\u4E24\u4E2A\u94A9\u5B50pretest\u3001posttest\u3002</span>
<span class="token comment">//\u6240\u4EE5\u5148\u6267\u884C npm run pretest</span>
<span class="token comment">//\u7136\u540E\u6267\u884C npm run test</span>
<span class="token comment">//\u6700\u540E\u6267\u884C npm run posttest</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[t];function l(o,c){return s(),a("div",null,i)}const u=n(p,[["render",l],["__file","nodejs-npm.html.vue"]]);export{u as default};
