import{_ as s,o as a,c as n,e}from"./app.a667bd71.js";const t={},p=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>::\`\`<span class="token variable"><span class="token variable">\`</span>ops
::title:\u5173\u4E8Ewindows\u5B89\u5168\u7B56\u7565IPsec\u76F8\u5173\u7684\u90A3\u4E9B\u8BBE\u7F6E
::descr:
::<span class="token variable">\`</span></span>\`\`

<span class="token builtin class-name">echo</span> \u521B\u5EFA\u5B89\u5168\u7B56\u7565
Netsh IPsec static <span class="token function">add</span> policy name <span class="token operator">=</span> APU\u5B89\u5168\u7B56\u7565

<span class="token builtin class-name">echo</span> \u521B\u5EFA\u7B5B\u9009\u5668\u662F\u963B\u6B62\u7684\u64CD\u4F5C
Netsh IPsec static <span class="token function">add</span> filteraction name <span class="token operator">=</span> stop action <span class="token operator">=</span> block

<span class="token builtin class-name">echo</span> \u521B\u5EFA\u7B5B\u9009\u5668\u662F\u5141\u8BB8\u7684\u64CD\u4F5C
Netsh IPsec static <span class="token function">add</span> filteraction name <span class="token operator">=</span> <span class="token function">open</span> action <span class="token operator">=</span> permit

<span class="token builtin class-name">echo</span> \u5EFA\u7ACB\u4E00\u4E2A\u7B5B\u9009\u5668\u53EF\u4EE5\u8BBF\u95EE\u7684\u7EC8\u7AEF\u5217\u8868
Netsh IPsec static <span class="token function">add</span> filterlist name <span class="token operator">=</span> \u53EF\u8BBF\u95EE\u7684\u7EC8\u7AEF\u5217\u8868
Netsh IPsec static <span class="token function">add</span> filter filterlist <span class="token operator">=</span> \u53EF\u8BBF\u95EE\u7684\u7EC8\u7AEF\u5217\u8868 srcaddr <span class="token operator">=</span> <span class="token number">203.86</span>.32.248 dstaddr <span class="token operator">=</span> me dstport <span class="token operator">=</span> <span class="token number">3389</span> description <span class="token operator">=</span> \u90E8\u95E81\u8BBF\u95EE protocol <span class="token operator">=</span> TCP mirrored <span class="token operator">=</span> <span class="token function">yes</span>

<span class="token builtin class-name">echo</span> \u5EFA\u7ACB\u4E00\u4E2A\u7B5B\u9009\u5668\u53EF\u4EE5\u8BBF\u95EE\u7684\u7EC8\u7AEF\u5217\u8868
Netsh ipsec static <span class="token function">add</span> filter filterlist <span class="token operator">=</span> \u53EF\u8BBF\u95EE\u7684\u7EC8\u7AEF\u5217\u8868 Srcaddr <span class="token operator">=</span> <span class="token number">203.86</span>.31.0 <span class="token assign-left variable">srcmask</span><span class="token operator">=</span><span class="token number">255.255</span>.255.0 dstaddr <span class="token operator">=</span> <span class="token number">60.190</span>.145.9 dstport <span class="token operator">=</span> <span class="token number">0</span> description <span class="token operator">=</span> \u90E8\u95E82\u8BBF\u95EE protocol <span class="token operator">=</span>any mirrored <span class="token operator">=</span> <span class="token function">yes</span>

<span class="token builtin class-name">echo</span> \u5EFA\u7ACB\u7B56\u7565\u89C4\u5219
Netsh ipsec static <span class="token function">add</span> rule name <span class="token operator">=</span> \u53EF\u8BBF\u95EE\u7684\u7EC8\u7AEF\u7B56\u7565\u89C4\u5219 Policy <span class="token operator">=</span> APU\u5B89\u5168\u7B56\u7565 filterlist <span class="token operator">=</span> \u53EF\u8BBF\u95EE\u7684\u7EC8\u7AEF\u5217\u8868 filteraction <span class="token operator">=</span> stop

<span class="token builtin class-name">echo</span> \u6FC0\u6D3B\u7B56\u7565
netsh ipsec static <span class="token builtin class-name">set</span> policy name <span class="token operator">=</span> APU\u5B89\u5168\u7B56\u7565 assign <span class="token operator">=</span> y


Netsh ipsec static <span class="token function">add</span> policy name <span class="token operator">=</span> \u9ED8\u8BA4\u7B56\u7565\u540D\u79F0

Netsh ipsec static <span class="token function">add</span> filteraction name <span class="token operator">=</span> \u963B\u6B62\u64CD\u4F5C action <span class="token operator">=</span> block

Netsh ipsec static <span class="token function">add</span> filteraction name <span class="token operator">=</span> \u5141\u8BB8\u64CD\u4F5C action <span class="token operator">=</span> permit

Netsh ipsec static <span class="token function">add</span> filterlist name <span class="token operator">=</span> \u8BBF\u95EE\u5217\u8868

Netsh ipsec static <span class="token function">add</span> filterlist name <span class="token operator">=</span> \u963B\u6B62\u5217\u8868

Netsh ipsec static <span class="token function">add</span> filter filterlist <span class="token operator">=</span> \u8BBF\u95EE\u5217\u88681 srcaddr <span class="token operator">=</span> <span class="token number">203.86</span>.32.248 dstaddr <span class="token operator">=</span> me dstport <span class="token operator">=</span> <span class="token number">3389</span> description <span class="token operator">=</span> \u90E8\u95E81\u8BBF\u95EE protocol <span class="token operator">=</span> TCP mirrored <span class="token operator">=</span> <span class="token function">yes</span>

Netsh ipsec static <span class="token function">add</span> filter filterlist <span class="token operator">=</span> \u8BBF\u95EE\u5217\u88682 srcaddr <span class="token operator">=</span> <span class="token number">203.86</span>.31.0 srcmask <span class="token operator">=</span> <span class="token number">255.255</span>.255.0  dstaddr <span class="token operator">=</span> <span class="token number">60.190</span>.145.9 dstport <span class="token operator">=</span> <span class="token number">0</span> description <span class="token operator">=</span> \u90E8\u95E82\u8BBF\u95EE protocol <span class="token operator">=</span> any mirrored <span class="token operator">=</span> <span class="token function">yes</span>

Netsh ipsec static <span class="token function">add</span> rule name <span class="token operator">=</span> \u53EF\u8BBF\u95EE\u7684\u7EC8\u7AEF\u7B56\u7565\u89C4\u5219 Policy <span class="token operator">=</span> \u9ED8\u8BA4\u7B56\u7565\u540D\u79F0 filterlist <span class="token operator">=</span> \u8BBF\u95EE\u5217\u88681 filteraction <span class="token operator">=</span> \u963B\u6B62\u64CD\u4F5C

Netsh ipsec static <span class="token function">add</span> rule name <span class="token operator">=</span> \u53EF\u8BBF\u95EE\u7684\u7EC8\u7AEF\u7B56\u7565\u89C4\u5219 Policy <span class="token operator">=</span> \u9ED8\u8BA4\u7B56\u7565\u540D\u79F0 filterlist <span class="token operator">=</span> \u8BBF\u95EE\u5217\u88682 filteraction <span class="token operator">=</span> \u963B\u6B62\u64CD\u4F5C

netsh ipsec static <span class="token builtin class-name">set</span> policy name <span class="token operator">=</span> \u9ED8\u8BA4\u7B56\u7565\u540D\u79F0 assign <span class="token operator">=</span> y

REM <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>\u5F00\u59CB<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> 
netsh ipsec static <span class="token function">add</span> policy <span class="token assign-left variable">name</span><span class="token operator">=</span>safedog 

REM \u6DFB\u52A02\u4E2A\u52A8\u4F5C\uFF0Cblock\u548Cpermit 
netsh ipsec static <span class="token function">add</span> filteraction <span class="token assign-left variable">name</span><span class="token operator">=</span>Permit <span class="token assign-left variable">action</span><span class="token operator">=</span>permit 
netsh ipsec static <span class="token function">add</span> filteraction <span class="token assign-left variable">name</span><span class="token operator">=</span>Block <span class="token assign-left variable">action</span><span class="token operator">=</span>block 

REM \u9996\u5148\u7981\u6B62\u6240\u6709\u8BBF\u95EE 
netsh ipsec static <span class="token function">add</span> filterlist <span class="token assign-left variable">name</span><span class="token operator">=</span>AllAccess 
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>AllAccess <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span>Me <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>Any 
netsh ipsec static <span class="token function">add</span> rule <span class="token assign-left variable">name</span><span class="token operator">=</span>BlockAllAccess <span class="token assign-left variable">policy</span><span class="token operator">=</span>safedog  <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>AllAccess <span class="token assign-left variable">filteraction</span><span class="token operator">=</span>Block 

REM \u5F00\u653E\u67D0\u4E9BIP\u65E0\u9650\u5236\u8BBF\u95EE 
netsh ipsec static <span class="token function">add</span> filterlist <span class="token assign-left variable">name</span><span class="token operator">=</span>UnLimitedIP 
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>UnLimitedIP <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span><span class="token number">61.128</span>.128.67 <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>Me 
netsh ipsec static <span class="token function">add</span> rule <span class="token assign-left variable">name</span><span class="token operator">=</span>AllowUnLimitedIP <span class="token assign-left variable">policy</span><span class="token operator">=</span>safedog  <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>UnLimitedIP <span class="token assign-left variable">filteraction</span><span class="token operator">=</span>Permit 

REM \u5F00\u653E\u67D0\u4E9B\u7AEF\u53E3 
netsh ipsec static <span class="token function">add</span> filterlist <span class="token assign-left variable">name</span><span class="token operator">=</span>OpenSomePort 
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>OpenSomePort <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span>Any <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>Me <span class="token assign-left variable">dstport</span><span class="token operator">=</span><span class="token number">20</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span>TCP 
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>OpenSomePort <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span>Any <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>Me <span class="token assign-left variable">dstport</span><span class="token operator">=</span><span class="token number">21</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span>TCP 
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>OpenSomePort <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span>Any <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>Me <span class="token assign-left variable">dstport</span><span class="token operator">=</span><span class="token number">80</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span>TCP 
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>OpenSomePort <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span>Any <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>Me <span class="token assign-left variable">dstport</span><span class="token operator">=</span><span class="token number">3389</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span>TCP 
netsh ipsec static <span class="token function">add</span> rule <span class="token assign-left variable">name</span><span class="token operator">=</span>AllowOpenSomePort <span class="token assign-left variable">policy</span><span class="token operator">=</span>safedog  <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>OpenSomePort <span class="token assign-left variable">filteraction</span><span class="token operator">=</span>Permit 

REM \u5F00\u653E\u67D0\u4E9Bip\u53EF\u4EE5\u8BBF\u95EE\u67D0\u4E9B\u7AEF\u53E3 
netsh ipsec static <span class="token function">add</span> filterlist <span class="token assign-left variable">name</span><span class="token operator">=</span>SomeIPSomePort 
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>SomeIPSomePort <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span>Me <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>Any <span class="token assign-left variable">dstport</span><span class="token operator">=</span><span class="token number">80</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span>TCP 
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>SomeIPSomePort <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span><span class="token number">61.128</span>.128.68 <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>Me <span class="token assign-left variable">dstport</span><span class="token operator">=</span><span class="token number">1433</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span>TCP 
netsh ipsec static <span class="token function">add</span> rule <span class="token assign-left variable">name</span><span class="token operator">=</span>AllowSomeIPSomePort <span class="token assign-left variable">policy</span><span class="token operator">=</span>safedog  <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>SomeIPSomePort <span class="token assign-left variable">filteraction</span><span class="token operator">=</span>Permit 

REM Windows <span class="token number">2003</span> IPsec rule <span class="token keyword">for</span> IPSec

REM del all ipsec policy and start <span class="token punctuation">(</span>\u6E05\u6389\u6240\u6709ipsec\u8BBE\u7F6E\uFF0C\u6DFB\u52A0IPSec\u7684\u4E00\u4E2A\u7B56\u7565\uFF09
netsh ipsec static del all
netsh ipsec static <span class="token function">add</span> policy <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;IPSec&quot;</span> <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;default IPsec policy&quot;</span>

REM <span class="token function">add</span> two action block and permit <span class="token punctuation">(</span>\u8BBE\u7F6E\u4E8C\u4E2A\u89C4\u5219\u5141\u8BB8\u548C\u7981\u6B62<span class="token punctuation">)</span>
netsh ipsec static <span class="token function">add</span> filteraction <span class="token assign-left variable">name</span><span class="token operator">=</span>Permit <span class="token assign-left variable">action</span><span class="token operator">=</span>permit
netsh ipsec static <span class="token function">add</span> filteraction <span class="token assign-left variable">name</span><span class="token operator">=</span>Block <span class="token assign-left variable">action</span><span class="token operator">=</span>block

REM Frist block all \uFF08\u9996\u5148\u8BBE\u7981\u6B62\u6240\u6709\u5165\u7AD9\u8BBF\u95EE\uFF09
netsh ipsec static <span class="token function">add</span> filterlist <span class="token assign-left variable">name</span><span class="token operator">=</span>othersdeny <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;the defalt rule for other access to server&quot;</span>
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>othersdeny <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span>me <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>any <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;the defalt access \u2018s deny&quot;</span>
netsh ipsec static <span class="token function">add</span> rule <span class="token assign-left variable">name</span><span class="token operator">=</span>blockallaccess <span class="token assign-left variable">policy</span><span class="token operator">=</span><span class="token string">&quot;IPSec&quot;</span> <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>othersdeny <span class="token assign-left variable">filteraction</span><span class="token operator">=</span>Block

REM allow <span class="token function">ip</span> addrss\uFF08\u5141\u8BB8\u5185\u7F51192.168.0.1/24 \u548C202.80.19.12\u8FD9\u4E9BIP\u65E0\u9650\u5236\u8BBF\u95EE\uFF09
netsh ipsec static <span class="token function">add</span> filterlist <span class="token assign-left variable">name</span><span class="token operator">=</span>allowip <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;allow the ip access to server&quot;</span>
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>allowip <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1 <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>me <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;the local access&quot;</span>
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>allowip <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span><span class="token number">192.168</span>.0.1 <span class="token assign-left variable">srcmask</span><span class="token operator">=</span><span class="token number">255.255</span>.255.0 <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>me <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;allow lan access&quot;</span>
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>allowip <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span><span class="token number">202.80</span>.19.12 <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>me <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;the admin access&quot;</span>
netsh ipsec static <span class="token function">add</span> rule <span class="token assign-left variable">name</span><span class="token operator">=</span>ruleallowip <span class="token assign-left variable">policy</span><span class="token operator">=</span><span class="token string">&quot;IPSec&quot;</span> <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>allowip <span class="token assign-left variable">filteraction</span><span class="token operator">=</span>Permit

REM allow tcp/udp port icmp<span class="token punctuation">(</span>\u5BF9\u5916\u5F00\u653E80/3389\u548C\u5141\u8BB8ping<span class="token punctuation">)</span>
netsh ipsec static <span class="token function">add</span> filterlist <span class="token assign-left variable">name</span><span class="token operator">=</span>allowport <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;allow all to access the port of server&quot;</span>
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>allowport <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span>Any <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>Me <span class="token assign-left variable">protocol</span><span class="token operator">=</span>icmp <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;allow all to ping&quot;</span>
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>allowport <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span>Any <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>Me <span class="token assign-left variable">dstport</span><span class="token operator">=</span><span class="token number">80</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span>TCP <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;allow all to access the server\u2019s web&quot;</span>
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>allowport <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span>Any <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>Me <span class="token assign-left variable">dstport</span><span class="token operator">=</span><span class="token number">3389</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span>TCP <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;allow all to access the server\u2019s RDP&quot;</span>
netsh ipsec static <span class="token function">add</span> rule <span class="token assign-left variable">name</span><span class="token operator">=</span>allowopenport <span class="token assign-left variable">policy</span><span class="token operator">=</span><span class="token string">&quot;IPSec&quot;</span> <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>allowport <span class="token assign-left variable">filteraction</span><span class="token operator">=</span>Permit

REM allow <span class="token function">ip</span> and limit tcp/udp port <span class="token punctuation">(</span>\u5141\u8BB8218.209.98.11\u8BBF\u95EEmysql\u76843306<span class="token punctuation">)</span>
REM netsh ipsec static <span class="token function">add</span> filterlist <span class="token assign-left variable">name</span><span class="token operator">=</span>ipopenport
REM netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>ipopenport <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span><span class="token number">218.209</span>.98.11 <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>Me <span class="token assign-left variable">dstport</span><span class="token operator">=</span><span class="token number">3306</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span>TCP
REM netsh ipsec static <span class="token function">add</span> rule <span class="token assign-left variable">name</span><span class="token operator">=</span>allowipopenport <span class="token assign-left variable">policy</span><span class="token operator">=</span><span class="token string">&quot;IPSec&quot;</span> <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>ipopenport <span class="token assign-left variable">filteraction</span><span class="token operator">=</span>Permit

REM allow icmp/dns resqust/web access<span class="token punctuation">(</span>\u5141\u8BB8\u670D\u52A1\u5668\u4E0A\u7F51 \u53EF\u4EE5\u6253\u5F00\u7F51\u7AD9 <span class="token number">80</span>\u53CA443 \u5141\u8BB8DNS\u67E5\u8BE2<span class="token punctuation">)</span>
netsh ipsec static <span class="token function">add</span> filterlist <span class="token assign-left variable">name</span><span class="token operator">=</span>output <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;Out allow rule&quot;</span>
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>output <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span>me <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>any <span class="token assign-left variable">protocol</span><span class="token operator">=</span>tcp <span class="token assign-left variable">mirrored</span><span class="token operator">=</span>yes <span class="token assign-left variable">dstport</span><span class="token operator">=</span><span class="token number">80</span> <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;allow web access&quot;</span>
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>output <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span>me <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>any <span class="token assign-left variable">protocol</span><span class="token operator">=</span>tcp <span class="token assign-left variable">mirrored</span><span class="token operator">=</span>yes <span class="token assign-left variable">dstport</span><span class="token operator">=</span><span class="token number">443</span> <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;allow https access&quot;</span>
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>output <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span>me <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>any <span class="token assign-left variable">protocol</span><span class="token operator">=</span>tcp <span class="token assign-left variable">mirrored</span><span class="token operator">=</span>yes <span class="token assign-left variable">dstport</span><span class="token operator">=</span><span class="token number">53</span> <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;allow tcp dns access &quot;</span>
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>output <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span>me <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>any <span class="token assign-left variable">protocol</span><span class="token operator">=</span>udp <span class="token assign-left variable">mirrored</span><span class="token operator">=</span>yes <span class="token assign-left variable">dstport</span><span class="token operator">=</span><span class="token number">53</span> <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;allow udp dns access &quot;</span>
netsh ipsec static <span class="token function">add</span> filter <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>output <span class="token assign-left variable">srcaddr</span><span class="token operator">=</span>me <span class="token assign-left variable">dstaddr</span><span class="token operator">=</span>any <span class="token assign-left variable">protocol</span><span class="token operator">=</span>icmp <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;allow ping out&quot;</span>
netsh ipsec static <span class="token function">add</span> rule <span class="token assign-left variable">name</span><span class="token operator">=</span>output <span class="token assign-left variable">policy</span><span class="token operator">=</span><span class="token string">&quot;IPSec&quot;</span> <span class="token assign-left variable">filterlist</span><span class="token operator">=</span>output <span class="token assign-left variable">filteraction</span><span class="token operator">=</span>Permit

REM apply ipsec policy <span class="token string">&quot;IPSec&quot;</span> <span class="token punctuation">(</span>\u5173\u952E\u7684\u4E00\u6B65\uFF0C\u542F\u7528ipsec\u89C4\u5219\uFF09
netsh ipsec static <span class="token builtin class-name">set</span> policy <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;IPSec&quot;</span> <span class="token assign-left variable">assign</span><span class="token operator">=</span>y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[p];function o(i,r){return a(),n("div",null,l)}const d=s(t,[["render",o],["__file","windows-ipsec-bat.html.vue"]]);export{d as default};