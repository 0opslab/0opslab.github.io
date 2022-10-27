import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To find the \`foo\` snap:</span>
<span class="token comment">#\u8981\u627E\u5230\`foo\` snap\uFF1A</span>
snap <span class="token function">find</span> foo

<span class="token comment"># To view detailed information about snap \`foo\`:</span>
<span class="token comment">#\u8981\u67E5\u770B\u5173\u4E8Esnap\`food\`\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF1A</span>
snap info foo

<span class="token comment"># To view all private snaps (must be logged in):</span>
<span class="token comment">#\u8981\u67E5\u770B\u6240\u6709\u79C1\u4EBA\u5FEB\u7167\uFF08\u5FC5\u987B\u767B\u5F55\uFF09\uFF1A</span>
snap <span class="token function">find</span> <span class="token parameter variable">--private</span>

<span class="token comment"># To install the \`foo\` snap:</span>
<span class="token comment">#\u8981\u5B89\u88C5\`foo\` snap\uFF1A</span>
<span class="token function">sudo</span> snap <span class="token function">install</span> foo

<span class="token comment"># To install the \`foo\` snap from the &quot;beta&quot; channel:</span>
<span class="token comment">#\u8981\u4ECE\u201Cbeta\u201D\u9891\u9053\u5B89\u88C5\`foo\`\u6309\u94AE\uFF1A</span>
<span class="token function">sudo</span> snap <span class="token function">install</span> foo <span class="token parameter variable">--channel</span><span class="token operator">=</span>beta

<span class="token comment"># To view installed snaps:</span>
<span class="token comment">#\u8981\u67E5\u770B\u5DF2\u5B89\u88C5\u7684\u5FEB\u7167\uFF1A</span>
snap list

<span class="token comment"># To list all revisions of installed snaps:</span>
<span class="token comment">#\u5217\u51FA\u5DF2\u5B89\u88C5\u5FEB\u7167\u7684\u6240\u6709\u4FEE\u8BA2\uFF1A</span>
snap list <span class="token parameter variable">--all</span>

<span class="token comment"># To (manually) update all snaps:</span>
<span class="token comment">#\u8981\uFF08\u624B\u52A8\uFF09\u66F4\u65B0\u6240\u6709\u5FEB\u7167\uFF1A</span>
<span class="token function">sudo</span> snap refresh

<span class="token comment"># To (manually) update the \`foo\` snap:</span>
<span class="token comment">#\u8981\uFF08\u624B\u52A8\uFF09\u66F4\u65B0\`foo\`\u6309\u94AE\uFF1A</span>
<span class="token function">sudo</span> snap refresh foo

<span class="token comment"># To update the \`foo\` snap to the &quot;beta&quot; channel:</span>
<span class="token comment">#\u8981\u66F4\u65B0\`foo\`\u5BF9\u9F50\u201Cbeta\u201D\u9891\u9053\uFF1A</span>
<span class="token function">sudo</span> snap refresh foo <span class="token parameter variable">--channel</span><span class="token operator">=</span>beta

<span class="token comment"># To revert the \`foo\` snap to a prior version:</span>
<span class="token comment">#\u8981\u5C06\`foo\` snap\u6062\u590D\u4E3A\u5148\u524D\u7248\u672C\uFF1A</span>
<span class="token function">sudo</span> snap revert foo

<span class="token comment"># To revert the \`foo\` snap to revision 5:</span>
<span class="token comment">#\u8981\u5C06\`foo\` snap\u6062\u590D\u4E3A\u4FEE\u8BA2\u72485\uFF1A</span>
snap revert foo <span class="token parameter variable">--revision</span> <span class="token number">5</span>

<span class="token comment"># To remove the \`foo\` snap:</span>
<span class="token comment">#\u5220\u9664\`foo\` snap\uFF1A</span>
<span class="token function">sudo</span> snap remove foo

<span class="token comment"># To log in to snap (must first create account online):</span>
<span class="token comment">#\u767B\u5F55\u5230\u5FEB\u7167\uFF08\u5FC5\u987B\u5148\u5728\u7EBF\u521B\u5EFA\u5E10\u6237\uFF09\uFF1A</span>
<span class="token function">sudo</span> snap login

<span class="token comment"># To log out of snap:</span>
<span class="token comment">#\u8981\u6CE8\u9500\u5FEB\u7167\uFF1A</span>
snap <span class="token builtin class-name">logout</span>

<span class="token comment"># To view a transaction log summary:</span>
<span class="token comment">#\u8981\u67E5\u770B\u4E8B\u52A1\u65E5\u5FD7\u6458\u8981\uFF1A</span>
snap changes

<span class="token comment"># To view details of item 123 in the transaction log:</span>
<span class="token comment">#\u8981\u67E5\u770B\u4E8B\u52A1\u65E5\u5FD7\u4E2D\u9879\u76EE123\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF1A</span>
snap change <span class="token number">123</span>

<span class="token comment"># To watch transaction 123:</span>
<span class="token comment">#\u89C2\u770B\u4EA4\u6613123\uFF1A</span>
snap <span class="token function">watch</span> <span class="token number">123</span>

<span class="token comment"># To abort transaction 123:</span>
<span class="token comment">#\u8981\u4E2D\u6B62\u4EA4\u6613123\uFF1A</span>
snap abort <span class="token number">123</span>

<span class="token comment"># To download the \`foo\` snap (and its assertions) *without* installing it:</span>
<span class="token comment">#\u8981\u4E0B\u8F7D\`foo\` snap\uFF08\u53CA\u5176\u65AD\u8A00\uFF09*\u800C\u4E0D\u5B89\u88C5\u5B83\uFF1A</span>
snap download foo

<span class="token comment"># To install the locally-downloaded \`foo\` snap with assertions:</span>
<span class="token comment">#\u4F7F\u7528\u65AD\u8A00\u5B89\u88C5\u672C\u5730\u4E0B\u8F7D\u7684\`foo\` snap\uFF1A</span>
snap ack foo.assert
snap <span class="token function">install</span> foo.snap

<span class="token comment"># To install the locally-downloaded \`foo\` snap without assertions:</span>
<span class="token comment">#\u8981\u5728\u6CA1\u6709\u65AD\u8A00\u7684\u60C5\u51B5\u4E0B\u5B89\u88C5\u672C\u5730\u4E0B\u8F7D\u7684\`foo\` snap\uFF1A</span>
<span class="token comment"># NB: this is dangerous, because the integrity of the snap will not be</span>
<span class="token comment">#\u6CE8\u610F\uFF1A\u8FD9\u5F88\u5371\u9669\uFF0C\u56E0\u4E3A\u5FEB\u7167\u7684\u5B8C\u6574\u6027\u4E0D\u4F1A</span>
<span class="token comment"># verified. You should only do this to test a snap that you are currently</span>
<span class="token comment">#\u9A8C\u8BC1\u3002\u60A8\u5E94\u8BE5\u53EA\u6267\u884C\u6B64\u64CD\u4F5C\u6765\u6D4B\u8BD5\u60A8\u5F53\u524D\u7684\u5FEB\u7167</span>
<span class="token comment"># developing.</span>
<span class="token comment">#\u53D1\u5C55\u3002</span>
snap <span class="token function">install</span> <span class="token parameter variable">--dangerous</span> foo.snap

<span class="token comment"># To install snap \`foo\` in &quot;dev mode&quot;:</span>
<span class="token comment">#\u8981\u5728\u201C\u5F00\u53D1\u6A21\u5F0F\u201D\u4E0B\u5B89\u88C5snap\`foo\`\uFF1A</span>
<span class="token comment"># NB: this is dangerous, and bypasses the snap sandboxing mechanisms</span>
<span class="token comment">#\u6CE8\u610F\uFF1A\u8FD9\u5F88\u5371\u9669\uFF0C\u5E76\u7ED5\u8FC7\u4E86\u5FEB\u7167\u6C99\u7BB1\u673A\u5236</span>
snap <span class="token function">install</span> <span class="token parameter variable">--devmode</span> foo

<span class="token comment"># To install snap \`foo\` in &quot;classic mode&quot;:</span>
<span class="token comment">#\u8981\u5728\u201C\u7ECF\u5178\u6A21\u5F0F\u201D\u4E0B\u5B89\u88C5snap\`foo\`\uFF1A</span>
<span class="token comment"># NB: this is likewise dangerous</span>
<span class="token comment">#\u6CE8\u610F\uFF1A\u8FD9\u540C\u6837\u5F88\u5371\u9669</span>
snap <span class="token function">install</span> <span class="token parameter variable">--classic</span> foo

<span class="token comment"># To view available snap interfaces:</span>
<span class="token comment">#\u8981\u67E5\u770B\u53EF\u7528\u7684\u6355\u6349\u63A5\u53E3\uFF1A</span>
snap interfaces

<span class="token comment"># To connect the \`foo:camera\` plug to the ubuntu core slot:</span>
<span class="token comment">#\u8981\u5C06\`foo\uFF1Acamera\`\u63D2\u5934\u8FDE\u63A5\u5230ubuntu\u6838\u5FC3\u63D2\u69FD\uFF1A</span>
snap connect foo:camera :camera

<span class="token comment"># To disconnect the \`foo:camera\` plug from the ubuntu core slot:</span>
<span class="token comment">#\u4ECEubuntu\u6838\u5FC3\u63D2\u69FD\u65AD\u5F00\`foo\uFF1Acamera\`\u63D2\u5934\uFF1A</span>
snap disconnect foo:camera

<span class="token comment"># To disable the \`foo\` snap</span>
<span class="token comment">#\u8981\u7981\u7528\`foo\`\u5FEB\u7167</span>
snap disable foo

<span class="token comment"># To enable the \`foo\` snap</span>
<span class="token comment">#\u542F\u7528\`foo\` snap</span>
snap <span class="token builtin class-name">enable</span> foo

<span class="token comment"># To set snap \`foo\`&#39;s \`bar\` property to 10:</span>
<span class="token comment">#\u5C06snap\`foo\`\u7684\`bar\`\u5C5E\u6027\u8BBE\u7F6E\u4E3A10\uFF1A</span>
snap <span class="token builtin class-name">set</span> foo <span class="token assign-left variable">bar</span><span class="token operator">=</span><span class="token number">10</span>

<span class="token comment"># To read snap \`foo\`&#39;s current \`bar\` property:</span>
<span class="token comment">#\u8981\u9605\u8BFBsnap\`foo\`\u7684\u5F53\u524D\`bar\`\u5C5E\u6027\uFF1A</span>
snap get foo bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[l];function c(t,d){return s(),a("div",null,o)}const p=n(i,[["render",c],["__file","snap.html.vue"]]);export{p as default};
