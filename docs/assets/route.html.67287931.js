import{_ as e,o as n,c as s,e as a}from"./app.a667bd71.js";const i={},t=a(`<p>\u7528\u6765\u663E\u793A\u5E76\u8BBE\u7F6ELinux\u5185\u6838\u4E2D\u7684\u7F51\u7EDC\u8DEF\u7531\u8868\uFF0Croute\u547D\u4EE4\u8BBE\u7F6E\u7684\u8DEF\u7531\u4E3B\u8981\u662F\u9759\u6001\u8DEF\u7531\u3002\u8981\u5B9E\u73B0\u4E24\u4E2A\u4E0D\u540C\u7684\u5B50\u7F51\u4E4B\u95F4\u7684\u901A\u4FE1\uFF0C \u9700\u8981\u4E00\u53F0\u8FDE\u63A5\u4E24\u4E2A\u7F51\u7EDC\u7684\u8DEF\u7531\u5668\uFF0C\u6216\u8005\u540C\u65F6\u4F4D\u4E8E\u4E24\u4E2A\u7F51\u7EDC\u7684\u7F51\u5173\u6765\u5B9E\u73B0\u3002</p><h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-A\uFF1A\u8BBE\u7F6E\u5730\u5740\u7C7B\u578B\uFF1B
-C\uFF1A\u6253\u5370\u5C06Linux\u6838\u5FC3\u7684\u8DEF\u7531\u7F13\u5B58\uFF1B
-v\uFF1A\u8BE6\u7EC6\u4FE1\u606F\u6A21\u5F0F\uFF1B
-n\uFF1A\u4E0D\u6267\u884CDNS\u53CD\u5411\u67E5\u627E\uFF0C\u76F4\u63A5\u663E\u793A\u6570\u5B57\u5F62\u5F0F\u7684IP\u5730\u5740\uFF1B
-e\uFF1Anetstat\u683C\u5F0F\u663E\u793A\u8DEF\u7531\u8868\uFF1B
-net\uFF1A\u5230\u4E00\u4E2A\u7F51\u7EDC\u7684\u8DEF\u7531\u8868\uFF1B
-host\uFF1A\u5230\u4E00\u4E2A\u4E3B\u673A\u7684\u8DEF\u7531\u8868\u3002

<span class="token comment">## \u53C2\u6570</span>
Add\uFF1A\u589E\u52A0\u6307\u5B9A\u7684\u8DEF\u7531\u8BB0\u5F55\uFF1B
Del\uFF1A\u5220\u9664\u6307\u5B9A\u7684\u8DEF\u7531\u8BB0\u5F55\uFF1B
Target\uFF1A\u76EE\u7684\u7F51\u7EDC\u6216\u76EE\u7684\u4E3B\u673A\uFF1B
gw\uFF1A\u8BBE\u7F6E\u9ED8\u8BA4\u7F51\u5173\uFF1B
mss\uFF1A\u8BBE\u7F6ETCP\u7684\u6700\u5927\u533A\u5757\u957F\u5EA6\uFF08MSS\uFF09\uFF0C\u5355\u4F4DMB\uFF1B
window\uFF1A\u6307\u5B9A\u901A\u8FC7\u8DEF\u7531\u8868\u7684TCP\u8FDE\u63A5\u7684TCP\u7A97\u53E3\u5927\u5C0F\uFF1B
dev\uFF1A\u8DEF\u7531\u8BB0\u5F55\u6240\u8868\u793A\u7684\u7F51\u7EDC\u63A5\u53E3\u3002


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To display routing table IP addresses instead of host names:</span>
route <span class="token parameter variable">-n</span>

<span class="token comment"># To add a default gateway:</span>
route <span class="token function">add</span> default gateway <span class="token number">192.168</span>.0.1

<span class="token comment"># To add the normal loopback entry, using netmask 255.0.0.0 and associated with the &quot;lo&quot; device (assuming this device was previously set up correctly with ifconfig(8)).</span>
route <span class="token function">add</span> <span class="token parameter variable">-net</span> <span class="token number">127.0</span>.0.0 netmask <span class="token number">255.0</span>.0.0 dev lo

<span class="token comment"># To add a route to the local network 192.56.76.x via &quot;eth0&quot;.  The word &quot;dev&quot; can be omitted here.</span>
route <span class="token function">add</span> <span class="token parameter variable">-net</span> <span class="token number">192.56</span>.76.0 netmask <span class="token number">255.255</span>.255.0 dev eth0

<span class="token comment"># To delete the current default route, which is labeled &quot;default&quot; or 0.0.0.0 in the destination field of the current routing table.</span>
route del default

<span class="token comment"># To add a default  route (which will be used if no other route matches).  All packets using this route will be gatewayed through &quot;mango-gw&quot;. The device which will actually be used for that route depends on how we can reach &quot;mango-gw&quot; - the static route to &quot;mango-gw&quot; will have to be set up before.</span>
route <span class="token function">add</span> default gw mango-gw

<span class="token comment"># To add the route to the &quot;ipx4&quot; host via the SLIP interface (assuming that &quot;ipx4&quot; is the SLIP host).</span>
route <span class="token function">add</span> ipx4 sl0

<span class="token comment"># To add the net &quot;192.57.66.x&quot; to be gateway through the former route to the SLIP interface.</span>
route <span class="token function">add</span> <span class="token parameter variable">-net</span> <span class="token number">192.57</span>.66.0 netmask <span class="token number">255.255</span>.255.0 gw ipx4

<span class="token comment"># To install a rejecting route for the private network &quot;10.x.x.x.&quot;</span>
route <span class="token function">add</span> <span class="token parameter variable">-net</span> <span class="token number">10.0</span>.0.0 netmask <span class="token number">255.0</span>.0.0 reject

<span class="token comment"># This is an obscure one documented so people know how to do it. This sets all of the class D (multicast) IP routes to go via &quot;eth0&quot;. This is the correct normal configuration line with a multicasting kernel</span>
route <span class="token function">add</span> <span class="token parameter variable">-net</span> <span class="token number">224.0</span>.0.0 netmask <span class="token number">240.0</span>.0.0 dev eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[t];function o(d,r){return n(),s("div",null,l)}const u=e(i,[["render",o],["__file","route.html.vue"]]);export{u as default};
