import{_ as s,o as a,c as n,e}from"./app.a667bd71.js";const l={},c=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>snmptranslate .1.3.6.1.2.1.1.3.0    <span class="token comment"># \u67E5\u770B\u6620\u5C04\u5173\u7CFB</span>
	DISMAN-EVENT-MIB::sysUpTimeInstance
snmpdf <span class="token parameter variable">-v</span> <span class="token number">1</span> <span class="token parameter variable">-c</span> public localhost                            <span class="token comment"># SNMP\u76D1\u89C6\u8FDC\u7A0B\u4E3B\u673A\u7684\u78C1\u76D8\u7A7A\u95F4</span>
snmpnetstat <span class="token parameter variable">-v</span> 2c <span class="token parameter variable">-c</span> public <span class="token parameter variable">-a</span> <span class="token number">192.168</span>.6.53                <span class="token comment"># SNMP\u83B7\u53D6\u6307\u5B9AIP\u7684\u6240\u6709\u5F00\u653E\u7AEF\u53E3\u72B6\u6001</span>
snmpwalk <span class="token parameter variable">-v</span> 2c <span class="token parameter variable">-c</span> public <span class="token number">10.152</span>.14.117 .1.3.6.1.2.1.1.3.0  <span class="token comment"># SNMP\u83B7\u53D6\u4E3B\u673A\u542F\u52A8\u65F6\u95F4</span>
<span class="token comment"># MIB\u5B89\u88C5(ubuntu) </span>
<span class="token comment"># sudo apt-get install snmp-mibs-downloader</span>
<span class="token comment"># sudo download-mibs</span>
snmpwalk <span class="token parameter variable">-v</span> 2c <span class="token parameter variable">-c</span> public <span class="token number">10.152</span>.14.117 sysUpTimeInstance   <span class="token comment"># SNMP\u901A\u8FC7MIB\u5E93\u83B7\u53D6\u4E3B\u673A\u542F\u52A8\u65F6\u95F4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[c];function p(i,r){return a(),n("div",null,t)}const o=s(l,[["render",p],["__file","snmp.html.vue"]]);export{o as default};