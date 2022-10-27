import{_ as n,o as s,c as e,e as l}from"./app.a667bd71.js";const a={},i=l(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># DocBook XML to PDF</span>
<span class="token comment">#DocBook XML\u5230PDF</span>
xmlto pdf mydoc.xml

<span class="token comment"># DocBook XML to HTML</span>
<span class="token comment">#DocBook XML\u5230HTML</span>
xmlto <span class="token parameter variable">-o</span> html-dir html mydoc.xml

<span class="token comment"># DocBook XML to single HTML file</span>
<span class="token comment">#DocBook XML\u5230\u5355\u4E2AHTML\u6587\u4EF6</span>
xmlto html-nochunks mydoc.xml

<span class="token comment"># modify output with XSL override</span>
<span class="token comment">#\u4F7F\u7528XSL\u8986\u76D6\u4FEE\u6539\u8F93\u51FA</span>
xmlto <span class="token parameter variable">-m</span> ulink.xsl pdf mydoc.xml

<span class="token comment"># use non-default xsl</span>
<span class="token comment">#\u4F7F\u7528\u975E\u9ED8\u8BA4\u7684xsl</span>
xmlto <span class="token parameter variable">-x</span> mystylesheet.xsl pdf mydoc.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[i];function c(m,t){return s(),e("div",null,o)}const r=n(a,[["render",c],["__file","xmlto.html.vue"]]);export{r as default};
