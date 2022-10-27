import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const t={},i=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Custom HTTP method HTTP headers and JSON data:</span>
<span class="token comment">#\u81EA\u5B9A\u4E49HTTP\u65B9\u6CD5HTTP\u6807\u5934\u548CJSON\u6570\u636E\uFF1A</span>
http PUT example.org X-API-Token:123 <span class="token assign-left variable">name</span><span class="token operator">=</span>John

<span class="token comment"># Submitting forms:</span>
<span class="token comment">#\u63D0\u4EA4\u8868\u683C\uFF1A</span>
http <span class="token parameter variable">-f</span> POST example.org <span class="token assign-left variable">hello</span><span class="token operator">=</span>World

<span class="token comment"># See the request that is being sent using one of the output options:</span>
<span class="token comment">#\u8BF7\u53C2\u9605\u4F7F\u7528\u4EE5\u4E0B\u8F93\u51FA\u9009\u9879\u4E4B\u4E00\u53D1\u9001\u7684\u8BF7\u6C42\uFF1A</span>
http <span class="token parameter variable">-v</span> example.org

<span class="token comment"># Use Github API to post a comment on an issue with authentication:</span>
<span class="token comment">#\u4F7F\u7528Github API\u5BF9\u8EAB\u4EFD\u9A8C\u8BC1\u95EE\u9898\u53D1\u8868\u8BC4\u8BBA\uFF1A</span>
http <span class="token parameter variable">-a</span> USERNAME POST https://api.github.com/repos/jkbrzt/httpie/issues/83/comments <span class="token assign-left variable">body</span><span class="token operator">=</span><span class="token string">&#39;HTTPie is awesome!&#39;</span>

<span class="token comment"># Upload a file using redirected input:</span>
<span class="token comment">#\u4F7F\u7528\u91CD\u5B9A\u5411\u8F93\u5165\u4E0A\u4F20\u6587\u4EF6\uFF1A</span>
http example.org <span class="token operator">&lt;</span> file.json

<span class="token comment"># Download a file and save it via redirected output:</span>
<span class="token comment">#\u4E0B\u8F7D\u6587\u4EF6\u5E76\u901A\u8FC7\u91CD\u5B9A\u5411\u8F93\u51FA\u4FDD\u5B58\uFF1A</span>
http example.org/file <span class="token operator">&gt;</span> <span class="token function">file</span>

<span class="token comment"># Download a file wget style:</span>
<span class="token comment">#\u4E0B\u8F7D\u6587\u4EF6wget\u6837\u5F0F\uFF1A</span>
http <span class="token parameter variable">--download</span> example.org/file

<span class="token comment"># Use named sessions_ to make certain aspects or the communication</span>
<span class="token comment">#\u4F7F\u7528\u547D\u540D\u7684sessions_\u6765\u8FDB\u884C\u67D0\u4E9B\u65B9\u9762\u6216\u6C9F\u901A</span>
<span class="token comment"># persistent between requests to the same host:</span>
<span class="token comment">#\u5728\u5BF9\u540C\u4E00\u4E3B\u673A\u7684\u8BF7\u6C42\u4E4B\u95F4\u6301\u4E45\u5316\uFF1A</span>
<span class="token comment"># http --session=logged-in -a username:password httpbin.org/get API-Key:123</span>
<span class="token comment">#http --session =\u767B\u5F55 - \u7528\u6237\u540D\uFF1A\u5BC6\u7801httpbin.org/get API-Key\uFF1A123</span>
http <span class="token parameter variable">--session</span><span class="token operator">=</span>logged-in httpbin.org/headers

<span class="token comment"># Set a custom Host header to work around missing DNS records:</span>
<span class="token comment">#\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u4E3B\u673A\u6807\u5934\u4EE5\u89E3\u51B3\u4E22\u5931\u7684DNS\u8BB0\u5F55\uFF1A</span>
http localhost:8000 Host:example.com

<span class="token comment"># Simple JSON example:</span>
<span class="token comment">#\u7B80\u5355\u7684JSON\u793A\u4F8B\uFF1A</span>
http PUT example.org <span class="token assign-left variable">name</span><span class="token operator">=</span>John <span class="token assign-left variable">email</span><span class="token operator">=</span>john@example.org

<span class="token comment"># Non-string fields use the := separator, which allows you to embed raw</span>
<span class="token comment">#\u975E\u5B57\u7B26\u4E32\u5B57\u6BB5\u4F7F\u7528\uFF1A=\u5206\u9694\u7B26\uFF0C\u5141\u8BB8\u60A8\u5D4C\u5165raw</span>
<span class="token comment"># JSON into the resulting object. Text and raw JSON files can also be</span>
<span class="token comment">#JSON\u8FDB\u5165\u7ED3\u679C\u5BF9\u8C61\u3002\u6587\u672C\u548C\u539F\u59CBJSON\u6587\u4EF6\u4E5F\u53EF\u4EE5</span>
<span class="token comment"># embedded into fields using =@ and :=@:</span>
<span class="token comment">#\u4F7F\u7528= @\u548C\uFF1A= @\u5D4C\u5165\u5230\u5B57\u6BB5\u4E2D\uFF1A</span>
http PUT api.example.com/person/1 <span class="token assign-left variable">name</span><span class="token operator">=</span>John age:<span class="token operator">=</span><span class="token number">29</span> married:<span class="token operator">=</span>false hobbies:<span class="token operator">=</span><span class="token string">&#39;[&quot;http&quot;, &quot;pies&quot;]&#39;</span> <span class="token assign-left variable">description</span><span class="token operator">=</span>@about-john.txt bookmarks:<span class="token operator">=</span>@bookmarks.json

<span class="token comment"># Send JSON data stored in a file:</span>
<span class="token comment">#\u53D1\u9001\u5B58\u50A8\u5728\u6587\u4EF6\u4E2D\u7684JSON\u6570\u636E\uFF1A</span>
http POST api.example.com/person/1 <span class="token operator">&lt;</span> person.json

<span class="token comment"># Regular Forms</span>
<span class="token comment">#\u5E38\u89C4\u8868\u683C</span>
http <span class="token parameter variable">--form</span> POST api.example.org/person/1 <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&#39;John Smith&#39;</span> <span class="token assign-left variable">email</span><span class="token operator">=</span>john@example.org <span class="token assign-left variable">cv</span><span class="token operator">=</span>@~/Documents/cv.txt

<span class="token comment"># File Upload Forms</span>
<span class="token comment">#\u6587\u4EF6\u4E0A\u4F20\u8868\u683C</span>
<span class="token comment"># If one or more file fields is present, the serialization and content</span>
<span class="token comment">#\u5982\u679C\u5B58\u5728\u4E00\u4E2A\u6216\u591A\u4E2A\u6587\u4EF6\u5B57\u6BB5\uFF0C\u5219\u4E3A\u5E8F\u5217\u5316\u548C\u5185\u5BB9</span>
<span class="token comment"># type is multipart/form-data:</span>
<span class="token comment">#type\u662Fmultipart / form-data\uFF1A</span>
http <span class="token parameter variable">-f</span> POST example.com/jobs <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&#39;John Smith&#39;</span> cv@~/Documents/cv.pdf

<span class="token comment"># To set custom headers you can use the Header:Value notation:</span>
<span class="token comment">#\u8981\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u6807\u5934\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u6807\u5934\uFF1A\u503C\u8868\u793A\u6CD5\uFF1A</span>
http example.org  User-Agent:Bacon/1.0  <span class="token string">&#39;Cookie:valued-visitor=yes;foo=bar&#39;</span> X-Foo:Bar  Referer:http://httpie.org/

<span class="token comment"># Basic auth:</span>
<span class="token comment">#\u57FA\u672C\u8BA4\u8BC1\uFF1A</span>
http <span class="token parameter variable">-a</span> username:password example.org

<span class="token comment"># Digest auth:</span>
<span class="token comment">#\u6458\u8981\u8EAB\u4EFD\u9A8C\u8BC1\uFF1A</span>
http --auth-type<span class="token operator">=</span>digest <span class="token parameter variable">-a</span> username:password example.org

<span class="token comment"># With password prompt:</span>
<span class="token comment">#\u4F7F\u7528\u5BC6\u7801\u63D0\u793A\uFF1A</span>
http <span class="token parameter variable">-a</span> username example.org

<span class="token comment"># Authorization information from your ~/.netrc file is honored as well:</span>
<span class="token comment">#\u6765\u81EA\u301C/ .netrc\u6587\u4EF6\u7684\u6388\u6743\u4FE1\u606F\u4E5F\u53D7\u5230\u5C0A\u91CD\uFF1A</span>
<span class="token function">cat</span> ~/.netrc
    machine httpbin.org
    login httpie
    <span class="token comment"># password test</span>
http httpbin.org/basic-auth/httpie/test

<span class="token comment"># You can specify proxies to be used through the --proxy argument for each</span>
<span class="token comment">#\u60A8\u53EF\u4EE5\u901A\u8FC7\u6BCF\u4E2A\u7684--proxy\u53C2\u6570\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u4EE3\u7406</span>
<span class="token comment"># protocol (which is included in the value in case of redirects across</span>
<span class="token comment">#\u534F\u8BAE\uFF08\u5728\u91CD\u5B9A\u5411\u7684\u60C5\u51B5\u4E0B\u5305\u542B\u5728\u503C\u4E2D</span>
<span class="token comment"># protocols):</span>
<span class="token comment">#\u534F\u8BAE\uFF09\uFF1A</span>
http <span class="token parameter variable">--proxy</span><span class="token operator">=</span>http:http://10.10.1.10:3128 <span class="token parameter variable">--proxy</span><span class="token operator">=</span>https:https://10.10.1.10:1080 example.org

<span class="token comment"># With Basic authentication:</span>
<span class="token comment">#\u4F7F\u7528\u57FA\u672C\u8BA4\u8BC1\uFF1A</span>
http <span class="token parameter variable">--proxy</span><span class="token operator">=</span>http:http://user:pass@10.10.1.10:3128 example.org

<span class="token comment"># To skip the HOST&#39;S SSL CERTIFICATE VERIFICATION, you can pass</span>
<span class="token comment">#\u8981\u8DF3\u8FC7\u4E3B\u673A\u7684SSL\u8BC1\u4E66\u9A8C\u8BC1\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7</span>
<span class="token comment"># --verify=no (default is yes):</span>
<span class="token comment">#--verify = no\uFF08\u9ED8\u8BA4\u4E3A\u662F\uFF09\uFF1A</span>
http <span class="token parameter variable">--verify</span><span class="token operator">=</span>no https://example.org

<span class="token comment"># You can also use --verify=&lt;CA_BUNDLE_PATH&gt; to set a CUSTOM CA BUNDLE path:</span>
<span class="token comment">#\u60A8\u8FD8\u53EF\u4EE5\u4F7F\u7528--verify = &lt;CA_BUNDLE_PATH&gt;\u6765\u8BBE\u7F6ECUSTOM CA BUNDLE\u8DEF\u5F84\uFF1A</span>
http <span class="token parameter variable">--verify</span><span class="token operator">=</span>/ssl/custom_ca_bundle https://example.org

<span class="token comment"># To use a CLIENT SIDE CERTIFICATE for the SSL communication, you can pass</span>
<span class="token comment">#\u8981\u4F7F\u7528CLIENT SIDE CERTIFICATE\u8FDB\u884CSSL\u901A\u4FE1\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7</span>
<span class="token comment"># the path of the cert file with --cert:</span>
<span class="token comment">#\u4F7F\u7528--cert\u7684cert\u6587\u4EF6\u7684\u8DEF\u5F84\uFF1A</span>
http <span class="token parameter variable">--cert</span><span class="token operator">=</span>client.pem https://example.org

<span class="token comment"># If the PRIVATE KEY is not contained in the cert file you may pass the</span>
<span class="token comment">#\u5982\u679C\u8BC1\u4E66\u6587\u4EF6\u4E2D\u6CA1\u6709\u5305\u542B\u79C1\u94A5\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7</span>
<span class="token comment"># path of the key file with --cert-key:</span>
<span class="token comment">#\u4F7F\u7528--cert-key\u7684\u5BC6\u94A5\u6587\u4EF6\u7684\u8DEF\u5F84\uFF1A</span>
http <span class="token parameter variable">--cert</span><span class="token operator">=</span>client.crt --cert-key<span class="token operator">=</span>client.key https://example.org

<span class="token comment"># You can control what should be printed via several options:</span>
<span class="token comment">#\u60A8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u51E0\u4E2A\u9009\u9879\u63A7\u5236\u5E94\u8BE5\u6253\u5370\u7684\u5185\u5BB9\uFF1A</span>
  <span class="token comment"># --headers, -h   Only the response headers are printed.</span>
  <span class="token comment"># --body, -b      Only the response body is printed.</span>
  <span class="token comment"># --verbose, -v   Print the whole HTTP exchange (request and response).</span>
  <span class="token comment"># --print, -p     Selects parts of the HTTP exchange.</span>
http <span class="token parameter variable">--verbose</span> PUT httpbin.org/put <span class="token assign-left variable">hello</span><span class="token operator">=</span>world

<span class="token comment"># Print request and response headers:</span>
<span class="token comment">#\u6253\u5370\u8BF7\u6C42\u548C\u54CD\u5E94\u6807\u5934\uFF1A</span>
  <span class="token comment"># Character   Stands for</span>
  <span class="token comment"># ----------- -------------------</span>
  <span class="token comment"># H           Request headers.</span>
  <span class="token comment"># B           Request body.</span>
  <span class="token comment"># h           Response headers.</span>
  <span class="token comment"># b           Response body.</span>
http <span class="token parameter variable">--print</span><span class="token operator">=</span>Hh PUT httpbin.org/put <span class="token assign-left variable">hello</span><span class="token operator">=</span>world

<span class="token comment"># Let&#39;s say that there is an API that returns the whole resource when it</span>
<span class="token comment">#\u5047\u8BBE\u6709\u4E00\u4E2AAPI\u53EF\u4EE5\u5728\u8FD4\u56DE\u65F6\u8FD4\u56DE\u6574\u4E2A\u8D44\u6E90</span>
<span class="token comment"># is updated, but you are only interested in the response headers to see</span>
<span class="token comment">#\u5DF2\u66F4\u65B0\uFF0C\u4F46\u60A8\u53EA\u5BF9\u8981\u67E5\u770B\u7684\u54CD\u5E94\u6807\u5934\u611F\u5174\u8DA3</span>
<span class="token comment"># the status code after an update:</span>
<span class="token comment">#\u66F4\u65B0\u540E\u7684\u72B6\u6001\u4EE3\u7801\uFF1A</span>
http <span class="token parameter variable">--headers</span> PATCH example.org/Really-Huge-Resource <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&#39;New Name&#39;</span>

<span class="token comment"># Redirect from a file:</span>
<span class="token comment">#\u4ECE\u6587\u4EF6\u91CD\u5B9A\u5411\uFF1A</span>
http PUT example.com/person/1 X-API-Token:123 <span class="token operator">&lt;</span> person.json

<span class="token comment"># Or the output of another program:</span>
<span class="token comment">#\u6216\u8005\u53E6\u4E00\u4E2A\u7A0B\u5E8F\u7684\u8F93\u51FA\uFF1A</span>
<span class="token function">grep</span> <span class="token string">&#39;401 Unauthorized&#39;</span> /var/log/httpd/error_log <span class="token operator">|</span> http POST example.org/intruders

<span class="token comment"># You can use echo for simple data:</span>
<span class="token comment">#\u60A8\u53EF\u4EE5\u5C06echo\u7528\u4E8E\u7B80\u5355\u6570\u636E\uFF1A</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;{&quot;name&quot;: &quot;John&quot;}&#39;</span> <span class="token operator">|</span> http PATCH example.com/person/1 X-API-Token:123

<span class="token comment"># You can even pipe web services together using HTTPie:</span>
<span class="token comment">#\u60A8\u751A\u81F3\u53EF\u4EE5\u4F7F\u7528HTTPie\u5C06Web\u670D\u52A1\u8FDE\u63A5\u5728\u4E00\u8D77\uFF1A</span>
http GET https://api.github.com/repos/jkbrzt/httpie <span class="token operator">|</span> http POST httpbin.org/post

<span class="token comment"># You can use cat to enter multiline data on the terminal:</span>
<span class="token comment">#\u60A8\u53EF\u4EE5\u4F7F\u7528cat\u5728\u7EC8\u7AEF\u4E0A\u8F93\u5165\u591A\u884C\u6570\u636E\uFF1A</span>
<span class="token function">cat</span> <span class="token operator">|</span> http POST example.com
    <span class="token operator">&lt;</span>paste<span class="token operator">&gt;</span>
    <span class="token comment"># ^D</span>
<span class="token function">cat</span> <span class="token operator">|</span> http POST example.com/todos Content-Type:text/plain
    - buy milk
    - call parents
    ^D

<span class="token comment"># On OS X, you can send the contents of the clipboard with pbpaste:</span>
<span class="token comment">#\u5728OS X\u4E0A\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528pbpaste\u53D1\u9001\u526A\u8D34\u677F\u7684\u5185\u5BB9\uFF1A</span>
pbpaste <span class="token operator">|</span> http PUT example.com

<span class="token comment"># Passing data through stdin cannot be combined with data fields specified</span>
<span class="token comment">#\u901A\u8FC7stdin\u4F20\u9012\u6570\u636E\u4E0D\u80FD\u4E0E\u6307\u5B9A\u7684\u6570\u636E\u5B57\u6BB5\u7EC4\u5408</span>
<span class="token comment"># on the command line:</span>
<span class="token comment">#\u5728\u547D\u4EE4\u884C\u4E0A\uFF1A</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;data&#39;</span> <span class="token operator">|</span> http POST example.org <span class="token assign-left variable">more</span><span class="token operator">=</span>data   <span class="token comment"># This is invalid</span>


<span class="token comment"># AN ALTERNATIVE TO REDIRECTED stdin is specifying a filename (as</span>
<span class="token comment">#\u91CD\u5B9A\u5411stdin\u7684\u66FF\u4EE3\u65B9\u6CD5\u662F\u6307\u5B9A\u6587\u4EF6\u540D\uFF08\u5982</span>
<span class="token comment"># @/path/to/file) whose content is used as if it came from stdin.</span>
<span class="token comment">#@ / path / to / file\uFF09\u5176\u5185\u5BB9\u88AB\u7528\u4F5C\u6765\u81EAstdin\u7684\u5185\u5BB9\u3002</span>

<span class="token comment"># It has the advantage that THE Content-Type HEADER IS AUTOMATICALLY SET</span>
<span class="token comment">#\u5B83\u7684\u4F18\u70B9\u662F\u5185\u5BB9\u7C7B\u578B\u6807\u9898\u662F\u81EA\u52A8\u8BBE\u7F6E\u7684</span>
<span class="token comment"># to the appropriate value based on the filename extension. For example,</span>
<span class="token comment">#\u57FA\u4E8E\u6587\u4EF6\u6269\u5C55\u540D\u7684\u9002\u5F53\u503C\u3002\u4F8B\u5982\uFF0C</span>
<span class="token comment"># the following request sends the verbatim contents of that XML file with</span>
<span class="token comment">#\u4EE5\u4E0B\u8BF7\u6C42\u53D1\u9001\u8BE5XML\u6587\u4EF6\u7684\u9010\u5B57\u5185\u5BB9</span>
<span class="token comment"># Content-Type: application/xml:</span>
<span class="token comment">#Content-Type\uFF1Aapplication / xml\uFF1A</span>
http PUT httpbin.org/put @/data/file.xml

<span class="token comment"># Download a file:</span>
<span class="token comment">#\u4E0B\u8F7D\u6587\u4EF6\uFF1A</span>
http example.org/Movie.mov <span class="token operator">&gt;</span> Movie.mov

<span class="token comment"># Download an image of Octocat, resize it using ImageMagick, upload it</span>
<span class="token comment">#\u4E0B\u8F7DOctocat\u7684\u56FE\u50CF\uFF0C\u4F7F\u7528ImageMagick\u8C03\u6574\u5927\u5C0F\uFF0C\u4E0A\u4F20</span>
<span class="token comment"># elsewhere:</span>
<span class="token comment">#\u522B\u5904\uFF1A</span>
http octodex.github.com/images/original.jpg <span class="token operator">|</span> convert - <span class="token parameter variable">-resize</span> <span class="token number">25</span>% -  <span class="token operator">|</span> http example.org/Octocats

<span class="token comment"># Force colorizing and formatting, and show both the request and the</span>
<span class="token comment">#\u5F3A\u5236\u7740\u8272\u548C\u683C\u5F0F\u5316\uFF0C\u5E76\u663E\u793A\u8BF7\u6C42\u548C</span>
<span class="token comment"># response in less pager:</span>
<span class="token comment">#\u54CD\u5E94\u66F4\u5C11\u7684\u5BFB\u547C\u673A\uFF1A</span>
http <span class="token parameter variable">--pretty</span><span class="token operator">=</span>all <span class="token parameter variable">--verbose</span> example.org <span class="token operator">|</span> <span class="token function">less</span> <span class="token parameter variable">-R</span>

<span class="token comment"># When enabled using the --download, -d flag, response headers are printed</span>
<span class="token comment">#\u4F7F\u7528--download\uFF0C-d\u6807\u5FD7\u542F\u7528\u65F6\uFF0C\u5C06\u6253\u5370\u54CD\u5E94\u6807\u5934</span>
<span class="token comment"># to the terminal (stderr), and a progress bar is shown while the response</span>
<span class="token comment">#\u5230\u7EC8\u7AEF\uFF08stderr\uFF09\uFF0C\u54CD\u5E94\u65F6\u663E\u793A\u8FDB\u5EA6\u6761</span>
<span class="token comment"># body is being saved to a file.</span>
<span class="token comment">#\u6B63\u5728\u5C06\u6B63\u6587\u4FDD\u5B58\u5230\u6587\u4EF6\u4E2D\u3002</span>
http <span class="token parameter variable">--download</span> https://github.com/jkbrzt/httpie/tarball/master

<span class="token comment"># You can also redirect the response body to another program while the</span>
<span class="token comment">#\u60A8\u8FD8\u53EF\u4EE5\u5C06\u54CD\u5E94\u6B63\u6587\u91CD\u5B9A\u5411\u5230\u53E6\u4E00\u4E2A\u7A0B\u5E8F</span>
<span class="token comment"># response headers and progress are still shown in the terminal:</span>
<span class="token comment">#\u54CD\u5E94\u6807\u5934\u548C\u8FDB\u5EA6\u4ECD\u663E\u793A\u5728\u7EC8\u7AEF\u4E2D\uFF1A</span>
http <span class="token parameter variable">-d</span> https://github.com/jkbrzt/httpie/tarball/master <span class="token operator">|</span>  <span class="token function">tar</span> zxf -

<span class="token comment"># If --output, -o is specified, you can resume a partial download using</span>
<span class="token comment">#\u5982\u679C\u6307\u5B9A\u4E86--output\uFF0C-o\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u6062\u590D\u90E8\u5206\u4E0B\u8F7D</span>
<span class="token comment"># the --continue, -c option. This only works with servers that support</span>
<span class="token comment">#--continue\uFF0C-c\u9009\u9879\u3002\u8FD9\u4EC5\u9002\u7528\u4E8E\u652F\u6301\u7684\u670D\u52A1\u5668</span>
<span class="token comment"># Range requests and 206 Partial Content responses. If the server doesn&#39;t</span>
<span class="token comment">#\u8303\u56F4\u8BF7\u6C42\u548C206\u90E8\u5206\u5185\u5BB9\u54CD\u5E94\u3002\u5982\u679C\u670D\u52A1\u5668\u6CA1\u6709</span>
<span class="token comment"># support that, the whole file will simply be downloaded:</span>
<span class="token comment">#\u652F\u6301\uFF0C\u53EA\u9700\u4E0B\u8F7D\u6574\u4E2A\u6587\u4EF6\uFF1A</span>
http <span class="token parameter variable">-dco</span> file.zip example.org/file

<span class="token comment"># Prettified streamed response:</span>
<span class="token comment">#Prettified\u6D41\u5A92\u4F53\u54CD\u5E94\uFF1A</span>
http <span class="token parameter variable">--stream</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">-a</span> YOUR-TWITTER-NAME https://stream.twitter.com/1/statuses/filter.json <span class="token assign-left variable">track</span><span class="token operator">=</span><span class="token string">&#39;Justin Bieber&#39;</span>

<span class="token comment"># Send each new tweet (JSON object) mentioning &quot;Apple&quot; to another</span>
<span class="token comment">#\u5C06\u6BCF\u4E2A\u63D0\u53CA\u201CApple\u201D\u7684\u65B0\u63A8\u6587\uFF08JSON\u5BF9\u8C61\uFF09\u53D1\u9001\u7ED9\u53E6\u4E00\u4E2A</span>
<span class="token comment"># server as soon as it arrives from the Twitter streaming API:</span>
<span class="token comment">#\u670D\u52A1\u5668\u4E00\u65E6\u4ECETwitter\u6D41\u5A92\u4F53API\u5230\u8FBE\uFF1A</span>
http <span class="token parameter variable">--stream</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">-a</span> YOUR-TWITTER-NAME https://stream.twitter.com/1/statuses/filter.json <span class="token assign-left variable">track</span><span class="token operator">=</span>Apple <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> tweet<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$tweet</span>&quot;</span> <span class="token operator">|</span> http POST example.org/tweets <span class="token punctuation">;</span> <span class="token keyword">done</span>

<span class="token comment"># Create a new session named user1 for example.org:</span>
<span class="token comment">#\u4E3Aexample.org\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Auser1\u7684\u65B0\u4F1A\u8BDD\uFF1A</span>
http <span class="token parameter variable">--session</span><span class="token operator">=</span>user1 <span class="token parameter variable">-a</span> user1:password example.org X-Foo:Bar

<span class="token comment"># Now you can refer to the session by its name, and the previously used</span>
<span class="token comment">#\u73B0\u5728\uFF0C\u60A8\u53EF\u4EE5\u6309\u540D\u79F0\u548C\u4E4B\u524D\u4F7F\u7528\u7684\u65B9\u5F0F\u5F15\u7528\u4F1A\u8BDD</span>
<span class="token comment"># authorization and HTTP headers will automatically be set:</span>
<span class="token comment">#\u5C06\u81EA\u52A8\u8BBE\u7F6E\u6388\u6743\u548CHTTP\u6807\u5934\uFF1A</span>
http <span class="token parameter variable">--session</span><span class="token operator">=</span>user1 example.org

<span class="token comment"># To create or reuse a different session, simple specify a different name:</span>
<span class="token comment">#\u8981\u521B\u5EFA\u6216\u91CD\u7528\u5176\u4ED6\u4F1A\u8BDD\uFF0C\u53EA\u9700\u6307\u5B9A\u5176\u4ED6\u540D\u79F0\uFF1A</span>
http <span class="token parameter variable">--session</span><span class="token operator">=</span>user2 <span class="token parameter variable">-a</span> user2:password example.org X-Bar:Foo

<span class="token comment"># Instead of a name, you can also directly specify a path to a session</span>
<span class="token comment">#\u60A8\u4E5F\u53EF\u4EE5\u76F4\u63A5\u6307\u5B9A\u4F1A\u8BDD\u7684\u8DEF\u5F84\uFF0C\u800C\u4E0D\u662F\u540D\u79F0</span>
<span class="token comment"># file. This allows for sessions to be re-used across multiple hosts:</span>
<span class="token comment">#\u6587\u4EF6\u3002\u8FD9\u5141\u8BB8\u8DE8\u591A\u4E2A\u4E3B\u673A\u91CD\u7528\u4F1A\u8BDD\uFF1A</span>
http <span class="token parameter variable">--session</span><span class="token operator">=</span>/tmp/session.json example.orghttp <span class="token parameter variable">--session</span><span class="token operator">=</span>/tmp/session.json admin.example.orghttp <span class="token parameter variable">--session</span><span class="token operator">=~</span>/.httpie/sessions/another.example.org/test.json example.orghttp --session-read-only<span class="token operator">=</span>/tmp/session.json example.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[i];function o(p,c){return s(),e("div",null,l)}const m=n(t,[["render",o],["__file","cmd-http.html.vue"]]);export{m as default};
