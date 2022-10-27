import{_ as s,o as n,c as a,e as t}from"./app.a667bd71.js";const e={},i=t(`<div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>::\`\`\`ops
::title:\u5220\u9664\u90A3\u4E9Bmstsc\u7684\u8BB0\u5F55
::descr:windows\u4E0B\u5229\u7528pshell\u5220\u9664\u8FDC\u7A0B\u684C\u9762\u8BB0\u5F55
::\`\`\`
<span class="token variable">$AllUser</span> = <span class="token function">Get-WmiObject</span> <span class="token operator">-</span><span class="token keyword">Class</span> Win32_UserAccount
<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$User</span> in <span class="token variable">$AllUser</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token variable">$RegPath</span> = <span class="token string">&quot;Registry::HKEY_USERS\\&quot;</span><span class="token operator">+</span><span class="token variable">$User</span><span class="token punctuation">.</span>SID+<span class="token string">&quot;\\Software\\Microsoft\\Terminal Server Client\\Servers\\&quot;</span>
	<span class="token function">Write-Host</span> <span class="token string">&quot;User:&quot;</span><span class="token variable">$User</span><span class="token punctuation">.</span>Name
	<span class="token function">Write-Host</span> <span class="token string">&quot;SID:&quot;</span><span class="token variable">$User</span><span class="token punctuation">.</span>SID
	<span class="token function">Write-Host</span> <span class="token string">&quot;Status:&quot;</span><span class="token variable">$User</span><span class="token punctuation">.</span>Status
	<span class="token keyword">Try</span>  
    	<span class="token punctuation">{</span> 
		<span class="token variable">$QueryPath</span> = <span class="token function">dir</span> <span class="token variable">$RegPath</span> <span class="token operator">-</span>Name <span class="token operator">-</span>ErrorAction Stop
	<span class="token punctuation">}</span>
	<span class="token keyword">Catch</span>
	<span class="token punctuation">{</span>
		<span class="token function">Write-Host</span> <span class="token string">&quot;No RDP Connections History&quot;</span>
		<span class="token function">Write-Host</span> <span class="token string">&quot;----------------------------------&quot;</span>
		<span class="token keyword">continue</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$Name</span> in <span class="token variable">$QueryPath</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>   
		<span class="token keyword">Try</span>  
    		<span class="token punctuation">{</span>  
    			<span class="token variable">$User</span> = <span class="token punctuation">(</span><span class="token function">Get-ItemProperty</span> <span class="token operator">-</span>Path <span class="token variable">$RegPath</span><span class="token variable">$Name</span> <span class="token operator">-</span>ErrorAction Stop<span class="token punctuation">)</span><span class="token punctuation">.</span>UsernameHint
    			<span class="token function">Write-Host</span> <span class="token string">&quot;User:&quot;</span><span class="token variable">$User</span>
    			<span class="token function">Write-Host</span> <span class="token string">&quot;Server:&quot;</span><span class="token variable">$Name</span>
    		<span class="token punctuation">}</span>
    		<span class="token keyword">Catch</span>  
    		<span class="token punctuation">{</span>
			<span class="token function">Write-Host</span> <span class="token string">&quot;No RDP Connections History&quot;</span>
    		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">Write-Host</span> <span class="token string">&quot;----------------------------------&quot;</span>	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[i];function l(p,c){return n(),a("div",null,o)}const u=s(e,[["render",l],["__file","windows-mstsc-record-ps1.html.vue"]]);export{u as default};
