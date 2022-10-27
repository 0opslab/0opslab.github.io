import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},r=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To create a 2048-bit private key:</span>
<span class="token comment">#\u8981\u521B\u5EFA2048\u4F4D\u79C1\u94A5\uFF1A</span>
openssl genrsa <span class="token parameter variable">-out</span> server.key <span class="token number">2048</span>

<span class="token comment"># To create the Certificate Signing Request (CSR):</span>
<span class="token comment">#\u8981\u521B\u5EFA\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\uFF08CSR\uFF09\uFF1A</span>
openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-key</span> server.key <span class="token parameter variable">-out</span> server.csr

<span class="token comment"># To sign a certificate using a private key and CSR:</span>
<span class="token comment">#\u4F7F\u7528\u79C1\u94A5\u548CCSR\u7B7E\u7F72\u8BC1\u4E66\uFF1A</span>
openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-days</span> <span class="token number">365</span> <span class="token parameter variable">-in</span> server.csr <span class="token parameter variable">-signkey</span> server.key <span class="token parameter variable">-out</span> server.crt

<span class="token comment"># (The above commands may be run in sequence to generate a self-signed SSL certificate.)</span>
<span class="token comment">#\uFF08\u53EF\u4EE5\u6309\u987A\u5E8F\u8FD0\u884C\u4E0A\u8FF0\u547D\u4EE4\u4EE5\u751F\u6210\u81EA\u7B7E\u540DSSL\u8BC1\u4E66\u3002\uFF09</span>

<span class="token comment"># To show certificate information for a certificate signing request</span>
<span class="token comment">#\u663E\u793A\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\u7684\u8BC1\u4E66\u4FE1\u606F</span>
openssl req <span class="token parameter variable">-text</span> <span class="token parameter variable">-noout</span> <span class="token parameter variable">-in</span> server.csr

<span class="token comment"># To show certificate information for generated certificate</span>
<span class="token comment">#\u663E\u793A\u751F\u6210\u7684\u8BC1\u4E66\u7684\u8BC1\u4E66\u4FE1\u606F</span>
openssl x509 <span class="token parameter variable">-text</span> <span class="token parameter variable">-noout</span> <span class="token parameter variable">-in</span> server.crt 

<span class="token comment"># To get the sha256 fingerprint of a certificate</span>
<span class="token comment">#\u83B7\u53D6\u8BC1\u4E66\u7684sha256\u6307\u7EB9</span>
openssl x509 <span class="token parameter variable">-in</span> server.crt <span class="token parameter variable">-noout</span> <span class="token parameter variable">-sha256</span> <span class="token parameter variable">-fingerprint</span>

<span class="token comment"># To view certificate expiration:</span>
<span class="token comment">#\u8981\u67E5\u770B\u8BC1\u4E66\u8FC7\u671F\uFF1A</span>
<span class="token builtin class-name">echo</span> <span class="token operator">|</span> openssl s_client <span class="token parameter variable">-connect</span> <span class="token operator">&lt;</span>hostname<span class="token operator">&gt;</span>:443 <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /dev/null <span class="token operator">|</span> <span class="token punctuation">\\</span>
<span class="token function">awk</span> <span class="token string">&#39;/-----BEGIN/,/END CERTIFICATE-----/&#39;</span> <span class="token operator">|</span> <span class="token punctuation">\\</span>
openssl x509 <span class="token parameter variable">-noout</span> <span class="token parameter variable">-enddate</span>

<span class="token comment"># Generate Diffie-Hellman parameters:</span>
<span class="token comment">#\u751F\u6210Diffie-Hellman\u53C2\u6570\uFF1A</span>
openssl dhparam <span class="token parameter variable">-outform</span> PEM <span class="token parameter variable">-out</span> dhparams.pem <span class="token number">2048</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[r];function l(p,c){return s(),a("div",null,t)}const m=n(i,[["render",l],["__file","openssl.html.vue"]]);export{m as default};
