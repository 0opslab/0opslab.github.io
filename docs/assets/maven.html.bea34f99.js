import{_ as p,r as a,o as c,c as o,a as s,b as t,e,d as n}from"./app.a667bd71.js";const d={},r=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u666E\u901A\u9879\u76EE</span>
mvn archetype:create
    <span class="token parameter variable">-DgroupId</span><span class="token operator">=</span>packageName
    <span class="token parameter variable">-DartifactId</span><span class="token operator">=</span>projectName

<span class="token comment">#\u521B\u5EFAMaven\u7684web\u9879\u76EE</span>
mvn archetype:create  <span class="token parameter variable">-DgroupId</span><span class="token operator">=</span>packageName <span class="token parameter variable">-DartifactId</span><span class="token operator">=</span>webappName
    <span class="token parameter variable">-DarchetypeArtifactId</span><span class="token operator">=</span>maven-archetype-webapp
    
<span class="token comment">#\u7F16\u8BD1\u6E90\u4EE3\u7801    </span>
mvn compile
<span class="token comment">#\u7F16\u8BD1\u6D4B\u8BD5\u4EE3\u7801</span>
mvn test-compile
<span class="token comment">#\u8FD0\u884C\u6D4B\u8BD5</span>
mvn <span class="token builtin class-name">test</span>
<span class="token comment">#\u4EA7\u751Fsite</span>
mvn site

<span class="token comment">#\u6253\u5305</span>
mvn package

<span class="token comment">#\u5728\u672C\u5730Repository\u4E2D\u5B89\u88C5jar</span>
mvn <span class="token function">install</span>
\u4F8B\uFF1Ainstalling D:<span class="token punctuation">\\</span>xxx<span class="token punctuation">\\</span>xx.jar to D:<span class="token punctuation">\\</span>xx<span class="token punctuation">\\</span>xxxx

<span class="token comment">#\u6E05\u9664\u4EA7\u751F\u7684\u9879\u76EE</span>
mvn clean

<span class="token comment">#\u751F\u6210eclipse\u9879\u76EE</span>
mvc eclipse:ecplise

<span class="token comment">#\u751F\u6210IDEA\u9879\u76EE</span>
mvn idea:idea

<span class="token comment">#\u53EA\u6253jar\u5305</span>
mvn jar:jar

<span class="token comment">#\u67E5\u770B\u5F53\u524D\u9879\u76EE\u5DF2\u5457\u89E3\u6790\u7684\u4F9D\u8D56</span>
mvn dependency:list

<span class="token comment">#\u663E\u793A\u6574\u4E2A\u4F9D\u8D56\u6811</span>
mvn dependency:tree

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="maven\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#maven\u63D2\u4EF6" aria-hidden="true">#</a> maven\u63D2\u4EF6</h3>`,2),u=n("Maven\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u6267\u884C\u63D2\u4EF6\u7684\u6846\u67B6\u3002\u63D2\u4EF6\u5171\u5206\u4E24\u7C7B\uFF1Abuild\u63D2\u4EF6\u548Creporting\u63D2\u4EF6\u3002"),v=s("strong",null,"build\u63D2\u4EF6",-1),m=n("\uFF0C\u4F1A\u5728build\u9636\u6BB5\u88AB\u6267\u884C\uFF0C\u5E94\u8BE5\u914D\u7F6E\u5728POM\u7684"),k=n("\u5143\u7D20\u4E2D\u3002"),g=s("strong",null,"reporting\u63D2\u4EF6",-1),b=n("\uFF0C\u751F\u6210\u7AD9\u70B9\u7684\u65F6\u5019\u4F1A\u6267\u884C\uFF0C\u5E94\u8BE5\u914D\u7F6E\u5728POM\u7684"),h=n("\u5143\u7D20\u4E2D\u3002\u56E0\u4E3Areporting\u63D2\u4EF6\u7684\u7ED3\u679C\u662F\u751F\u6210\u7684\u7AD9\u70B9\u7684\u4E00\u90E8\u5206\uFF0C\u6240\u4EE5\u8FD9\u79CD\u63D2\u4EF6\u5E94\u8BE5\u662F\u56FD\u9645\u5316\u548C\u672C\u5730\u5316\u7684\u3002"),x=e(`<p>\u4E0B\u9762\u662F\u4E00\u4E9B\u5E38\u7528\u63D2\u4EF6\u7684\u5217\u8868\uFF1A</p><table><thead><tr><th style="text-align:left;">\u63D2\u4EF6</th><th style="text-align:left;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">clean</td><td style="text-align:left;">\u6784\u5EFA\u4E4B\u540E\u6E05\u7406\u76EE\u6807\u6587\u4EF6\u3002\u5220\u9664\u76EE\u6807\u76EE\u5F55\u3002</td></tr><tr><td style="text-align:left;">compiler</td><td style="text-align:left;">\u7F16\u8BD1 Java \u6E90\u6587\u4EF6\u3002</td></tr><tr><td style="text-align:left;">surefile</td><td style="text-align:left;">\u8FD0\u884C JUnit \u5355\u5143\u6D4B\u8BD5\u3002\u521B\u5EFA\u6D4B\u8BD5\u62A5\u544A\u3002</td></tr><tr><td style="text-align:left;">jar</td><td style="text-align:left;">\u4ECE\u5F53\u524D\u5DE5\u7A0B\u4E2D\u6784\u5EFA JAR \u6587\u4EF6\u3002</td></tr><tr><td style="text-align:left;">war</td><td style="text-align:left;">\u4ECE\u5F53\u524D\u5DE5\u7A0B\u4E2D\u6784\u5EFA WAR \u6587\u4EF6\u3002</td></tr><tr><td style="text-align:left;">javadoc</td><td style="text-align:left;">\u4E3A\u5DE5\u7A0B\u751F\u6210 Javadoc\u3002</td></tr><tr><td style="text-align:left;">antrun</td><td style="text-align:left;">\u4ECE\u6784\u5EFA\u8FC7\u7A0B\u7684\u4EFB\u610F\u4E00\u4E2A\u9636\u6BB5\u4E2D\u8FD0\u884C\u4E00\u4E2A ant \u4EFB\u52A1\u7684\u96C6\u5408\u3002</td></tr></tbody></table><h3 id="\u4FEE\u6539maven\u6E90\u4E3A\u963F\u91CC\u6E90" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539maven\u6E90\u4E3A\u963F\u91CC\u6E90" aria-hidden="true">#</a> \u4FEE\u6539maven\u6E90\u4E3A\u963F\u91CC\u6E90</h3><p>\u4FEE\u6539maven\u76EE\u5F55\u4E0B\u7684settings.xml\u914D\u7F6E\u6587\u4EF6\uFF0C\u8BBE\u7F6E\u5982\u4E0B</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>alimaven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>aliyun maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://maven.aliyun.com/nexus/content/groups/public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>alimaven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>aliyun maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://maven.aliyun.com/nexus/content/repositories/central/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function f(_,y){const l=a("build"),i=a("reporting");return c(),o("div",null,[r,s("p",null,[u,v,m,t(l),k,g,b,t(i),h]),x])}const D=p(d,[["render",f],["__file","maven.html.vue"]]);export{D as default};
