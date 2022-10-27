import{_ as e,o,c as t,e as r}from"./app.a667bd71.js";const a={},p=r('<h4 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF</h4><p>\u4E03\u725B\u4E91 https://goproxy.cn</p><p>\u963F\u91CC\u4E91 https://mirrors.aliyun.com/goproxy/</p><p>$ go env $ go env GOPATH GOO GOARCH $ go env -w GOPROXY=https://goproxy.cn,direct $ go help environment</p><h4 id="\u914D\u7F6E\u4EE3\u7406-go-1-13-\u53CA\u4EE5\u4E0A\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4EE3\u7406-go-1-13-\u53CA\u4EE5\u4E0A\u63A8\u8350" aria-hidden="true">#</a> \u914D\u7F6E\u4EE3\u7406\uFF08Go 1.13 \u53CA\u4EE5\u4E0A\u63A8\u8350\uFF09</h4><p>$ go env -w GO111MODULE=on $ go env -w GOPROXY=https://goproxy.cn,direct $ go env -u GOPROXY</p><h4 id="\u5176\u4ED6\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u7248\u672C" aria-hidden="true">#</a> \u5176\u4ED6\u7248\u672C</h4><p>$ export GO111MODULE=on $ export GOPROXY=https://goproxy.cn $ echo &quot;export GO111MODULE=on&quot; &gt;&gt; ~/.profile $ echo &quot;export GOPROXY=https://goproxy.cn&quot; &gt;&gt; ~/.profile $ source ~/.profile</p><h4 id="\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1" aria-hidden="true">#</a> \u7F16\u8BD1</h4><p>$ go build -v \u7F16\u8BD1\u65F6\u663E\u793A\u5305\u540D -p n \u5F00\u542F\u5E76\u53D1\u7F16\u8BD1\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8BE5\u503C\u4E3A CPU \u903B\u8F91\u6838\u6570 -a \u5F3A\u5236\u91CD\u65B0\u6784\u5EFA -n \u6253\u5370\u7F16\u8BD1\u65F6\u4F1A\u7528\u5230\u7684\u6240\u6709\u547D\u4EE4\uFF0C\u4F46\u4E0D\u771F\u6B63\u6267\u884C -x \u6253\u5370\u7F16\u8BD1\u65F6\u4F1A\u7528\u5230\u7684\u6240\u6709\u547D\u4EE4 -race \u5F00\u542F\u7ADE\u6001\u68C0\u6D4B</p><h4 id="\u8FD0\u884C\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u4EE3\u7801" aria-hidden="true">#</a> \u8FD0\u884C\u4EE3\u7801</h4><p>$ go run . # \u8FD0\u884C\u5F53\u524D\u76EE\u5F55\u7684\u5305 $ go run ./cmd/foo # \u8FD0\u884C ./cmd/foo \u76EE\u5F55\u4E0B\u7684\u5305 \u83B7\u53D6\u4F9D\u8D56 $ go get github.com/foo/bar@v1.2.3 $ go get github.com/foo/bar@8e1b8d3 $ go list -m all # \u663E\u793A\u6240\u6709\u4F9D\u8D56 $ go mod why -m golang.org/x/y # \u4E3A\u4EC0\u4F9D\u8D56\u5B83\uFF1F $ go clean -modcache # \u6E05\u9664\u6A21\u5757\u7F13\u5B58 \u683C\u5F0F\u5316\u4EE3\u7801 $ gofmt -d -w -r &#39;foo -&gt; Foo&#39; . # \u66FF\u6362 foo \u4E3A Foo $ gofmt -d -w -r &#39;strings.Replace(a, b, -1) -&gt; strings.ReplaceAll(a, b)&#39; .</p><h4 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h4><p>\u8BE5\u547D\u4EE4\u7528\u4E8E\u5BF9Go\u8BED\u8A00\u7F16\u5199\u7684\u7A0B\u5E8F\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u8FD9\u79CD\u6D4B\u8BD5\u662F\u4EE5\u4EE3\u7801\u5305\u4E3A\u5355\u4F4D\u7684\uFF0C\u547D\u4EE4\u4F1A\u81EA\u52A8\u6D4B\u8BD5\u6BCF\u4E00\u4E2A\u6307\u5B9A\u7684\u4EE3\u7801\u5305\u3002\u5F53\u7136\uFF0C\u524D\u63D0\u662F\u6307\u5B9A\u7684\u4EE3\u7801\u5305\u4E2D\u5B58\u5728\u6D4B\u8BD5\u6E90\u7801\u6587\u4EF6\u3002 \u6D4B\u8BD5\u7528\u4F8B\u6709\u56DB\u79CD\u5F62\u5F0F\uFF1A TestXxxx(t *testing.T) // \u57FA\u672C\u6D4B\u8BD5\u7528\u4F8B BenchmarkXxxx(b *testing.B) // \u538B\u529B\u6D4B\u8BD5\u7684\u6D4B\u8BD5\u7528\u4F8B Example_Xxx() // \u6D4B\u8BD5\u63A7\u5236\u53F0\u8F93\u51FA\u7684\u4F8B\u5B50 TestMain(m *testing.M) // \u6D4B\u8BD5Main\u51FD\u6570</p><p>$ go test -run \u4E3B\u8981\u662FTest\u5F00\u5934\u7684\u51FD\u6570\u4F7F\u7528\uFF0C\u8FD0\u884C\u6EE1\u8DB3\u8868\u8FBE\u5F0F\u7684\u6240\u6709\u6D4B\u8BD5\u7528\u4F8B</p><p>-bench \u4E0Erun\u884C\u4E3A\u7C7B\u4F3C\uFF0C\u4F46\u662F\u8DD1\u7684\u662FBenchmark\u5F00\u5934\u7684\u6D4B\u8BD5\u7528\u4F8B</p><p>-benchtime \u9ED8\u8BA4\u4E3A1s\uFF0C\u8868\u793Abenchmark\u6D4B\u8BD5\u7684\u6301\u7EED\u65F6\u95F4\uFF0C\u6CE8\u610F\u8981\u5E26\u5355\u4F4D\uFF0Ch\u4E3A\u5C0F\u65F6\uFF0Cm\u4E3A\u5206\u949F\uFF0Cs\u4E3A\u79D2\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8FD0\u884C\u591A\u5C11\u6B21\uFF0C\u5355\u4F4D\u4E3Ax\u65F6\u4EE3\u8868\u8FD0\u884C\u591A\u5C11\u6B21</p><p>-count \u4EE3\u8868\u8FD0\u884C\u591A\u5C11\u6B21\u793A\u4F8B\uFF0C\u6CE8\u610F\uFF0C\u8FD9\u91CC\u8DDFbenchtime\u7684\u6709\u5DEE\u522B\uFF0Ccount\u4EE3\u8868\u8FD0\u884C\u6BCF\u4E2A\u6D4B\u8BD5\u7528\u4F8B\u591A\u5C11\u6B21\uFF0C\u63A7\u5236\u53F0\u4F1A\u6709\u591A\u4E2A\u7528\u4F8B\u8FD0\u884C\u7684\u5C55\u793A\uFF0C\u5047\u8BBE-benchtime\u8BBE\u7F6E\u7684\u662F100x\uFF0C-count\u8BBE\u7F6E\u7684\u4E3A3\uFF0C\u5373\u4EE3\u8868\u8BE5\u57FA\u51C6\u6D4B\u8BD5\u8DD1100\u6B21\u8FED\u4EE3\uFF0C\u8FD0\u884C3\u6B21\u4EA7\u751F3\u4E2A\u7ED3\u679C</p><p>-cpu \u8FD0\u884C\u7684cpu\u6570\u91CF\uFF0C\u5176\u5B9E\u4E5F\u5C31\u662FGOMAXPROCS</p><p>-failfast \u524D\u4E00\u4E2A\u7528\u4F8B\u8FD0\u884C\u5931\u8D25\uFF0C\u4E0B\u4E00\u4E2A\u4E0D\u7EE7\u7EED\u8FD0\u884C</p><p>-list \u5217\u51FA\u7B26\u5408\u6761\u4EF6\u7684\u6D4B\u8BD5\u7528\u4F8B\u5217\u8868\uFF0C\u5199\u5339\u914D\u8868\u8FBE\u5F0F\uFF0C\u5E26\u4E86\u8FD9\u4E2A\u53C2\u6570\u5C31\u4E0D\u4F1A\u8FD0\u884C\u6D4B\u8BD5\u7528\u4F8B</p><p>-v \u663E\u793Alog\u6253\u5370\u7684\u5185\u5BB9</p><p>-timeout \u8D85\u65F6\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A10m\uFF0C\u4E5F\u5C31\u662F\u5341\u5206\u949F\u3002</p><p>-benchmem \u6253\u5370\u5185\u5B58alloc\u7EDF\u8BA1\u4FE1\u606F</p><p>-blockprofile \u5C06\u7528\u4F8Bgoroutine\u7684\u963B\u585E\u60C5\u51B5\u5199\u5165\u6587\u4EF6\uFF0C\u9700\u8981\u4F7F\u7528<em>go tool pprof</em>\u67E5\u770B</p><p>-cpuprofile \u5C06cpu\u4FE1\u606F\u5199\u5165\u6307\u5B9A\u6587\u4EF6</p><p>-memprofile \u5C06\u5185\u5B58\u4FE1\u606F\u5199\u5165\u6307\u5B9A\u6587\u4EF6</p><p>-mutexprofile \u5C06\u9501\u4FE1\u606F\u5199\u5165\u6307\u5B9A\u6587\u4EF6</p><p>-outputdir \u8BBE\u7F6E\u4E0A\u8FF0\u8F93\u51FA\u6587\u4EF6\u7684\u76EE\u5F55</p><p>-trace \u5C06\u6267\u884C\u94FE\u8DEF\u8F93\u51FA\u5230\u6307\u5B9A\u6587\u4EF6\uFF0C\u9700\u8981\u4F7F\u7528<em>go tool trace</em>\u67E5\u770B</p><p>test.short : \u4E00\u4E2A\u5FEB\u901F\u6D4B\u8BD5\u7684\u6807\u8BB0\uFF0C\u5728\u6D4B\u8BD5\u7528\u4F8B\u4E2D\u53EF\u4EE5\u4F7F\u7528 testing.Short() \u6765\u7ED5\u5F00\u4E00\u4E9B\u6D4B\u8BD5 test.outputdir : \u8F93\u51FA\u76EE\u5F55 test.coverprofile : \u6D4B\u8BD5\u8986\u76D6\u7387\u53C2\u6570\uFF0C\u6307\u5B9A\u8F93\u51FA\u6587\u4EF6 test.run : \u6307\u5B9A\u6B63\u5219\u6765\u8FD0\u884C\u67D0\u4E2A/\u67D0\u4E9B\u6D4B\u8BD5\u7528\u4F8B test.memprofile : \u5185\u5B58\u5206\u6790\u53C2\u6570\uFF0C\u6307\u5B9A\u8F93\u51FA\u6587\u4EF6 test.memprofilerate : \u5185\u5B58\u5206\u6790\u53C2\u6570\uFF0C\u5185\u5B58\u5206\u6790\u7684\u62BD\u6837\u7387 test.cpuprofile : cpu\u5206\u6790\u8F93\u51FA\u53C2\u6570\uFF0C\u4E3A\u7A7A\u5219\u4E0D\u505Acpu\u5206\u6790 test.blockprofile : \u963B\u585E\u4E8B\u4EF6\u7684\u5206\u6790\u53C2\u6570\uFF0C\u6307\u5B9A\u8F93\u51FA\u6587\u4EF6 test.blockprofilerate : \u963B\u585E\u4E8B\u4EF6\u7684\u5206\u6790\u53C2\u6570\uFF0C\u6307\u5B9A\u62BD\u6837\u9891\u7387 test.timeout : \u8D85\u65F6\u65F6\u95F4 test.cpu : \u6307\u5B9Acpu\u6570\u91CF test.parallel : \u6307\u5B9A\u8FD0\u884C\u6D4B\u8BD5\u7528\u4F8B\u7684\u5E76\u884C\u6570</p><h3 id="go-clean" tabindex="-1"><a class="header-anchor" href="#go-clean" aria-hidden="true">#</a> go clean</h3><p>\u8BE5\u547D\u4EE4\u4F1A\u5220\u9664\u6389\u6267\u884C\u5176\u5B83\u547D\u4EE4\u65F6\u4EA7\u751F\u7684\u4E00\u4E9B\u6587\u4EF6\u548C\u76EE\u5F55\u3002</p><h3 id="go-list" tabindex="-1"><a class="header-anchor" href="#go-list" aria-hidden="true">#</a> go list</h3><p>go list\u547D\u4EE4\u7684\u4F5C\u7528\u662F\u5217\u51FA\u6307\u5B9A\u7684\u4EE3\u7801\u5305\u7684\u4FE1\u606F\u3002</p>',35),n=[p];function c(i,h){return o(),t("div",null,n)}const l=e(a,[["render",c],["__file","go-cmd.html.vue"]]);export{l as default};