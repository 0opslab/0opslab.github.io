import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u67E5\u770B\u7F51\u5361\u7ED1\u5B9A\u4FE1\u606F</span>
nmcli con show 
<span class="token comment"># Desc: Command line interface to NetworkManager</span>
<span class="token comment">#\u63CF\u8FF0\uFF1ANetworkManager\u7684\u547D\u4EE4\u884C\u754C\u9762</span>

<span class="token comment"># Connect to a wireless access point - Parameters:</span>
<span class="token comment">#\u8FDE\u63A5\u5230\u65E0\u7EBF\u63A5\u5165\u70B9 - \u53C2\u6570\uFF1A</span>
<span class="token comment"># 	&lt;wiface&gt; -- the name of your wireless interface</span>
<span class="token comment">#&lt;wiface&gt;  - \u65E0\u7EBF\u63A5\u53E3\u7684\u540D\u79F0</span>
<span class="token comment">#	&lt;ssid&gt; -- the SSID of the access point</span>
<span class="token comment">#\uFF03&lt;ssid&gt;  - \u63A5\u5165\u70B9\u7684SSID</span>
<span class="token comment">#	&lt;pass&gt; -- the WiFi password</span>
<span class="token comment">#\uFF03&lt;pass&gt;  -  WiFi\u5BC6\u7801</span>
nmcli d wifi connect <span class="token operator">&lt;</span>ssid<span class="token operator">&gt;</span> password <span class="token operator">&lt;</span>pass<span class="token operator">&gt;</span> iface <span class="token operator">&lt;</span>wiface<span class="token operator">&gt;</span>

<span class="token comment"># Disconnect from WiFi - Parameters:</span>
<span class="token comment">#\u65AD\u5F00WiFi\u8FDE\u63A5 - \u53C2\u6570\uFF1A</span>
<span class="token comment">#	&lt;wiface&gt; -- the name of your wireless interface</span>
<span class="token comment">#\uFF03&lt;wiface&gt;  - \u65E0\u7EBF\u63A5\u53E3\u7684\u540D\u79F0</span>
nmcli d wifi disconnect iface <span class="token operator">&lt;</span>wiface<span class="token operator">&gt;</span>

<span class="token comment"># Get WiFi status (enabled / disabled)</span>
<span class="token comment">#\u83B7\u53D6WiFi\u72B6\u6001\uFF08\u542F\u7528/\u7981\u7528\uFF09</span>
nmcli radio wifi

<span class="token comment"># Enable / Disable WiFi</span>
<span class="token comment">#\u542F\u7528/\u7981\u7528WiFi</span>
nmcli radio wifi <span class="token operator">&lt;</span>on<span class="token operator">|</span>off<span class="token operator">&gt;</span>

<span class="token comment"># Show all available WiFi access points</span>
<span class="token comment">#\u663E\u793A\u6240\u6709\u53EF\u7528\u7684WiFi\u63A5\u5165\u70B9</span>
nmcli dev wifi list

<span class="token comment"># Refresh the available WiFi connection list</span>
<span class="token comment">#\u5237\u65B0\u53EF\u7528\u7684WiFi\u8FDE\u63A5\u5217\u8868</span>
nmcli dev wifi rescan

<span class="token comment"># Show all available connections</span>
<span class="token comment">#\u663E\u793A\u6240\u6709\u53EF\u7528\u7684\u8FDE\u63A5</span>
nmcli con

<span class="token comment"># Show only active connections</span>
<span class="token comment">#\u4EC5\u663E\u793A\u6D3B\u52A8\u8FDE\u63A5</span>
nmcli con show <span class="token parameter variable">--active</span>

<span class="token comment"># Review the available devices</span>
<span class="token comment">#\u67E5\u770B\u53EF\u7528\u7684\u8BBE\u5907</span>
nmcli dev status

<span class="token comment"># Add a dynamic ethernet connection - parameters:</span>
<span class="token comment">#\u6DFB\u52A0\u52A8\u6001\u4EE5\u592A\u7F51\u8FDE\u63A5 - \u53C2\u6570\uFF1A</span>
<span class="token comment">#	&lt;name&gt; -- the name of the connection</span>
<span class="token comment">#\uFF03&lt;name&gt;  - \u8FDE\u63A5\u7684\u540D\u79F0</span>
<span class="token comment">#	&lt;iface_name&gt; -- the name of the interface</span>
<span class="token comment">#\uFF03&lt;iface_name&gt;  - \u63A5\u53E3\u7684\u540D\u79F0</span>
nmcli con <span class="token function">add</span> <span class="token builtin class-name">type</span> ethernet con-name <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> ifname <span class="token operator">&lt;</span>iface_name<span class="token operator">&gt;</span>

<span class="token comment"># Import OpenVPN connection settings from file:</span>
<span class="token comment">#\u4ECE\u6587\u4EF6\u5BFC\u5165OpenVPN\u8FDE\u63A5\u8BBE\u7F6E\uFF1A</span>
nmcli con <span class="token function">import</span> <span class="token builtin class-name">type</span> openvpn <span class="token function">file</span> <span class="token operator">&lt;</span>path_to_ovpn_file<span class="token operator">&gt;</span>

<span class="token comment"># Bring up the ethernet connection</span>
<span class="token comment">#\u6253\u5F00\u4EE5\u592A\u7F51\u8FDE\u63A5</span>
nmcli con up <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function t(o,m){return s(),e("div",null,c)}const d=n(i,[["render",t],["__file","nmcli.html.vue"]]);export{d as default};
