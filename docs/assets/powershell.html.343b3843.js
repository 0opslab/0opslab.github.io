import{_ as e,o as n,c as t,e as o}from"./app.a667bd71.js";const p={},r=o(`<p>PowerShell\u5E38\u7528\u547D\u4EE4\uFF1A</p><p>\u4E00 Get\u7C7B</p><p>1.Get-Command \uFF1A \u5F97\u5230\u6240\u6709PowerShell\u547D\u4EE4\uFF0C\u83B7\u53D6\u6709\u5173 cmdlet \u4EE5\u53CA\u6709\u5173 Windows PowerShell \u547D\u4EE4\u7684\u5176\u4ED6\u5143\u7D20\u7684\u57FA\u672C\u4FE1\u606F\u3002</p><pre><code>                          \u5305\u62ECCmdlet\u3001Alias\u3001Function\u3002
</code></pre><p>2.Get-Process \uFF1A \u83B7\u53D6\u6240\u6709\u8FDB\u7A0B 3.Get-Help \uFF1A \u663E\u793A\u6709\u5173 Windows PowerShell \u547D\u4EE4\u548C\u6982\u5FF5\u7684\u4FE1\u606F</p><p>4.Get-History \uFF1A \u83B7\u53D6\u5728\u5F53\u524D\u4F1A\u8BDD\u4E2D\u8F93\u5165\u7684\u547D\u4EE4\u7684\u5217\u8868</p><p>5.Get-Job \uFF1A \u83B7\u53D6\u5728\u5F53\u524D\u4F1A\u8BDD\u4E2D\u8FD0\u884C\u7684 Windows PowerShell \u540E\u53F0\u4F5C\u4E1A</p><p>6.Get-FormatData \uFF1A \u83B7\u53D6\u5F53\u524D\u4F1A\u8BDD\u4E2D\u7684\u683C\u5F0F\u6570\u636E</p><p>7.Get-Event \uFF1A \u83B7\u53D6\u4E8B\u4EF6\u961F\u5217\u4E2D\u7684\u4E8B\u4EF6</p><p>8.Get-Alias \uFF1A \u83B7\u53D6\u5F53\u524D\u4F1A\u8BDD\u7684\u522B\u540D</p><p>9.Get-Culture \uFF1A\u83B7\u53D6\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u8BBE\u7F6E\u7684\u5F53\u524D\u533A\u57DF\u6027</p><ol start="10"><li><p>Get-Date \uFF1A\u83B7\u53D6\u5F53\u524D\u65E5\u671F\u548C\u65F6\u95F4</p></li><li><p>Get-Host \uFF1A \u83B7\u53D6\u8868\u793A\u5F53\u524D\u4E3B\u673A\u7A0B\u5E8F\u7684\u5BF9\u8C61</p></li></ol><p>12.Get-Member \uFF1A \u83B7\u53D6\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><pre><code>                         \u5982\uFF1A$var = 3

                                $var | get-member

                          \u7ED3\u679C\uFF1ATypeName: System.Int32

                         Name        MemberType      Definition                                                                                           
                         ----                   ----------         ----------                                                                                           
                         CompareTo       Method      int CompareTo(System.Object value), int CompareTo(int value)                                         
                         Equals              Method     bool Equals(System.Object obj), bool Equals(int obj)                                                 
                        GetHashCode    Method     int GetHashCode()                                                                                    
                        GetType            Method     type GetType()                                                                                       
                        GetTypeCode     Method     System.TypeCode GetTypeCode()                                                                        
                        ToString             Method     string ToString(), string ToString(string format), string ToString(System.IFormatProvider provider...
</code></pre><p>13.Get-Random \uFF1A \u4ECE\u96C6\u5408\u4E2D\u83B7\u53D6\u968F\u673A\u6570\u6216\u968F\u673A\u9009\u62E9\u5BF9\u8C61</p><p>14.Get-UICulture \uFF1A \u83B7\u53D6\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u5F53\u524D\u7528\u6237\u754C\u9762 (UI) \u533A\u57DF\u6027\u8BBE\u7F6E</p><p>15.Get-Unique \uFF1A \u4ECE\u6392\u5E8F\u5217\u8868\u8FD4\u56DE\u552F\u4E00\u9879\u76EE</p><p>16.Get-Variable \uFF1A\u83B7\u53D6\u5F53\u524D\u63A7\u5236\u53F0\u4E2D\u7684\u53D8\u91CF</p><p>17.Get-EventLog \uFF1A \u83B7\u53D6\u672C\u5730\u6216\u8FDC\u7A0B\u8BA1\u7B97\u673A\u4E0A\u7684\u4E8B\u4EF6\u65E5\u5FD7\u6216\u4E8B\u4EF6\u65E5\u5FD7\u5217\u8868\u4E2D\u7684\u4E8B\u4EF6</p><p>18.Get-ChildItem \uFF1A \u83B7\u53D6\u4E00\u4E2A\u6216\u591A\u4E2A\u6307\u5B9A\u4F4D\u7F6E\u4E2D\u7684\u9879\u548C\u5B50\u9879</p><p>19.Get-Content \uFF1A \u83B7\u53D6\u6307\u5B9A\u4F4D\u7F6E\u7684\u9879\u7684\u5185\u5BB9</p><p>20.Get-ItemProperty \uFF1A\u83B7\u53D6\u6307\u5B9A\u9879\u7684\u5C5E\u6027</p><p>21.Get-WmiObject \uFF1A \u83B7\u53D6 Windows Management Instrumentation (WMI) \u7C7B\u7684\u5B9E\u4F8B\u6216\u53EF\u7528\u7C7B\u7684\u76F8\u5173\u4FE1\u606F</p><p>22.Get-Location \uFF1A\u83B7\u53D6\u5F53\u524D\u5DE5\u4F5C\u4F4D\u7F6E\u7684\u76F8\u5173\u4FE1\u606F\uFF08\u5982\uFF1AF:\\Users\\TaoMin \uFF09</p><p>23.Get-PSDrive\uFF1A\u83B7\u53D6\u5F53\u524D\u4F1A\u8BDD\u4E2D\u7684 Windows PowerShell \u9A71\u52A8\u5668</p><p>24.Get-Item\uFF1A\u83B7\u53D6\u4F4D\u4E8E\u6307\u5B9A\u4F4D\u7F6E\u7684\u9879</p><p>25.Get-Process \uFF1A\u83B7\u53D6\u5728\u672C\u5730\u8BA1\u7B97\u673A\u6216\u8FDC\u7A0B\u8BA1\u7B97\u673A\u4E0A\u8FD0\u884C\u7684\u8FDB\u7A0B</p><p>26.Get-Service \uFF1A \u83B7\u53D6\u672C\u5730\u6216\u8FDC\u7A0B\u8BA1\u7B97\u673A\u4E0A\u7684\u670D\u52A1</p><p>27.Get-Transaction \uFF1A\u83B7\u53D6\u5F53\u524D\uFF08\u6D3B\u52A8\uFF09\u4E8B\u52A1</p><p>28.Get-ExecutionPolicy \uFF1A\u83B7\u53D6\u5F53\u524D\u4F1A\u8BDD\u4E2D\u7684\u6267\u884C\u7B56\u7565</p><p>\u4E8C.Set\u7C7B \uFF08set\u7C7B\u547D\u4EE4\u4E00\u822C\u90FD\u542B\u6709\u53C2\u6570\uFF09</p><p>1.Set-Alias \uFF1A \u5728\u5F53\u524D Windows PowerShell \u4F1A\u8BDD\u4E2D\u4E3A cmdlet \u6216\u5176\u4ED6\u547D\u4EE4\u5143\u7D20\u521B\u5EFA\u6216\u66F4\u6539\u522B\u540D\uFF08\u66FF\u4EE3\u540D\u79F0\uFF09</p><pre><code>                  \u5982\uFF1A\u5982:Set-Alias aaa Get-Command
</code></pre><p>2.Set-PSDebug \uFF1A\u6253\u5F00\u548C\u5173\u95ED\u811A\u672C\u8C03\u8BD5\u529F\u80FD\uFF0C\u8BBE\u7F6E\u8DDF\u8E2A\u7EA7\u522B\u5E76\u5207\u6362 strict \u6A21\u5F0F</p><p>3.Set-StrictMode \uFF1A\u5EFA\u7ACB\u548C\u5F3A\u5236\u6267\u884C\u8868\u8FBE\u5F0F\u3001\u811A\u672C\u548C\u811A\u672C\u5757\u4E2D\u7684\u7F16\u7801\u89C4\u5219</p><p>4.Set-Date \uFF1A\u5C06\u8BA1\u7B97\u673A\u4E0A\u7684\u7CFB\u7EDF\u65F6\u95F4\u66F4\u6539\u4E3A\u6307\u5B9A\u7684\u65F6\u95F4</p><p>5.Set-Variable \uFF1A\u8BBE\u7F6E\u53D8\u91CF\u7684\u503C\uFF0C\u5982\u679C\u8BE5\u53D8\u91CF\u8FD8\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA\u8BE5\u53D8\u91CF</p><p>6.Set-PSBreakpoint \uFF1A\u5728\u884C\u3001\u547D\u4EE4\u6216\u8005\u53D8\u91CF\u4E0A\u8BBE\u7F6E\u65AD\u70B9</p><p>7.Set-Location \uFF1A\u5C06\u5F53\u524D\u5DE5\u4F5C\u4F4D\u7F6E\u8BBE\u7F6E\u4E3A\u6307\u5B9A\u7684\u4F4D\u7F6E</p><p>8.Set-Item \uFF1A\u5C06\u9879\u7684\u503C\u66F4\u6539\u4E3A\u547D\u4EE4\u4E2D\u6307\u5B9A\u7684\u503C</p><p>9.Set-Service \uFF1A\u542F\u52A8\u3001\u505C\u6B62\u548C\u6302\u8D77\u670D\u52A1\u5E76\u66F4\u6539\u670D\u52A1\u7684\u5C5E\u6027</p><p>10.Set-Content \uFF1A\u5728\u9879\u4E2D\u5199\u5165\u5185\u5BB9\u6216\u7528\u65B0\u5185\u5BB9\u66FF\u6362\u5176\u4E2D\u7684\u5185\u5BB9</p><p>11.Set-ItemProperty \uFF1A\u521B\u5EFA\u6216\u66F4\u6539\u67D0\u4E00\u9879\u7684\u5C5E\u6027\u503C</p><p>12.Set-WmiInstance \uFF1A\u521B\u5EFA\u6216\u66F4\u65B0\u73B0\u6709 Windows Management Instrumentation (WMI) \u7C7B\u7684\u5B9E\u4F8B</p><p>13.Set-ExecutionPolicy \uFF1A\u66F4\u6539 Windows PowerShell \u6267\u884C\u7B56\u7565\u7684\u7528\u6237\u9996\u9009\u9879\u3002</p><p>\u4E09.Write\u7C7B</p><p>1.Write-Host \uFF1A \u5C06\u81EA\u5B9A\u4E49\u8F93\u51FA\u5185\u5BB9\u5199\u5165\u4E3B\u673A\u3002\u7C7B\u4F3C\u4E8E.net\u7684 write()\u6216\u8005writeline()\u529F\u80FD</p><p>2.Write-Progress \uFF1A\u5728 Windows PowerShell \u547D\u4EE4\u7A97\u53E3\u5185\u663E\u793A\u8FDB\u5EA6\u680F</p><p>3.Write-Debug \uFF1A\u5C06\u8C03\u8BD5\u6D88\u606F\u5199\u5165\u63A7\u5236\u53F0</p><p>4.Write-Verbose\uFF1A\u5C06\u6587\u672C\u5199\u5165\u8BE6\u7EC6\u6D88\u606F\u6D41</p><p>5.Write-Warning \uFF1A\u5199\u5165\u8B66\u544A\u6D88\u606F</p><p>6.Write-Error \uFF1A \u5C06\u5BF9\u8C61\u5199\u5165\u9519\u8BEF\u6D41</p><p>7.Write-Output \uFF1A \u5C06\u6307\u5B9A\u5BF9\u8C61\u53D1\u9001\u5230\u7BA1\u9053\u4E2D\u7684\u4E0B\u4E00\u4E2A\u547D\u4EE4\uFF1B\u5982\u679C\u8BE5\u547D\u4EE4\u662F\u7BA1\u9053\u4E2D\u7684\u6700\u540E\u4E00\u4E2A\u547D\u4EE4\uFF0C\u5219\u5728\u63A7\u5236\u53F0\u4E0A\u663E\u793A\u8FD9\u4E9B\u5BF9\u8C61</p><p>8.Write-EventLog \uFF1A\u5C06\u4E8B\u4EF6\u5199\u5165\u4E8B\u4EF6\u65E5\u5FD7</p><p>PowerShell\u53D8\u91CF\u3001\u5E38\u91CF\u3001\u6570\u7EC4\uFF1A</p><p>\u4E00\u3001\u53D8\u91CF</p><p>PowerShell\u7684\u53D8\u91CF\u65E0\u9700\u9884\u5B9A\u4E49\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528\u3002\u5F53\u4F7F\u7528\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0C\u8BE5\u53D8\u91CF\u88AB\u81EA\u52A8\u58F0\u660E\u3002</p><p>\u53D8\u91CF\u4EE5 $ \u7B26\u53F7\u5F00\u5934\u3002\u5982\uFF1A$a</p><p>PowerShell\u666E\u901A\u53D8\u91CF\uFF1A</p><p>1.\u7ED9\u53D8\u91CF\u8D4B\u503C\uFF1A</p><p>\u65B9\u5F0F\u4E00\uFF1A</p><p>$a = &quot;This is a string&quot;</p><p>$b = 123</p><p>$c = 0.125</p><p>\u65B9\u5F0F\u4E8C\uFF1A</p><p>Set-Variable var 100</p><p>Set-Variable var1 \u201Dtest\u201C</p><p>Set-Variable va2 800</p><p>2.\u83B7\u53D6\u53D8\u91CF\u503C</p><p>get-variable var #\u83B7\u53D6\u5355\u4E2A\u53D8\u91CF\u503C</p><p>get-variable var* #\u83B7\u53D6\u591A\u4E2A\u53D8\u91CF\u503C</p><p>3.\u6E05\u7A7A\u53D8\u91CF\u503C</p><p>clear-variable var</p><p>4.\u5220\u9664\u53D8\u91CF</p><p>remove-variable var</p><p>5.\u8FDE\u63A5\u4E24\u4E2A\u5B57\u7B26\u4E32\u53D8\u91CF</p><p>$a = &quot;This is the 1st string&quot;</p><p>$b = &quot;This is the 2nd string&quot;</p><p>$c = $a + &quot; and &quot; + $b</p><p>$c</p><p>\u7ED3\u679C\uFF1AThis is the 1st string and This is the 2nd string</p><p>6.\u53D8\u91CF\u7684\u65B9\u6CD5</p><p>$date = Get-Date #\u83B7\u53D6\u5F53\u524D\u65F6\u95F4</p><p>$date.AddDays(3) #\u5F53\u524D\u65F6\u95F4\u52A0\u4E09\u5929</p><p>PowerShell\u7279\u6B8A\u53D8\u91CF\uFF1A</p><pre><code>PowerShell\u7684\u7279\u6B8A\u53D8\u91CF\u7531\u7CFB\u7EDF\u81EA\u52A8\u521B\u5EFA\u3002\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u53D8\u91CF\u540D\u79F0\u5E94\u8BE5\u4E0D\u548C\u7279\u6B8A\u53D8\u91CF\u76F8\u540C\u3002

$^ \uFF1A\u524D\u4E00\u547D\u4EE4\u884C\u7684\u7B2C\u4E00\u4E2A\u6807\u8BB0

$$ \uFF1A\u524D\u4E00\u547D\u4EE4\u884C\u7684\u6700\u540E\u4E00\u4E2A\u6807\u8BB0

$_ \uFF1A\u8868\u793A\u8868\u793A\u5F53\u524D\u5FAA\u73AF\u7684\u8FED\u4EE3\u53D8\u91CF\u3002

$? \uFF1A\u524D\u4E00\u547D\u4EE4\u6267\u884C\u72B6\u6001\uFF0C\u6210\u529F\uFF08Ture\uFF09 \u6216\u8005 \u5931\u8D25\uFF08False\uFF09

$Args \uFF1A\u4E3A\u811A\u672C\u6216\u8005\u51FD\u6570\u6307\u5B9A\u7684\u53C2\u6570

$Error \uFF1A\u9519\u8BEF\u53D1\u751F\u65F6\uFF0C\u9519\u8BEF\u5BF9\u8C61\u5B58\u50A8\u4E8E\u53D8\u91CF $Error \u4E2D

$Foreach \uFF1A\u5F15\u7528foreach\u5FAA\u73AF\u4E2D\u7684\u679A\u4E3E\u5668

$Home \uFF1A\u7528\u6237\u7684\u4E3B\u76EE\u5F55

$Host \uFF1A\u5F15\u7528\u5BBF\u4E3B POWERSHELL \u8BED\u8A00\u7684\u5E94\u7528\u7A0B\u5E8F

$Input \uFF1A\u901A\u8FC7\u7BA1\u9053\u4F20\u9012\u7ED9\u811A\u672C\u7684\u5BF9\u8C61\u7684\u679A\u4E3E\u5668

$LastExitCode \uFF1A\u4E0A\u4E00\u7A0B\u5E8F\u6216\u811A\u672C\u7684\u9000\u51FA\u4EE3\u7801

$Matches \uFF1A \u4F7F\u7528 \u2013match \u8FD0\u7B97\u7B26\u627E\u5230\u7684\u5339\u914D\u9879\u7684\u54C8\u5E0C\u8868

$PSHome \uFF1AWindows PowerShell \u7684\u5B89\u88C5\u4F4D\u7F6E

$profile \uFF1A\u6807\u51C6\u914D\u7F6E\u6587\u4EF6\uFF08\u53EF\u80FD\u4E0D\u5B58\u5728\uFF09

$StackTrace \uFF1A Windows PowerShell \u6355\u83B7\u7684\u4E0A\u4E00\u5F02\u5E38

$Switch \uFF1Aswitch \u8BED\u53E5\u4E2D\u7684\u679A\u4E3E\u5668
</code></pre><p>\u5F3A\u5236\u6307\u5B9A\u53D8\u91CF\u7C7B\u578B\uFF1A</p><p>\u4E00\u822C\u4E0D\u9700\u8981\u4E3APowerShell\u7684\u53D8\u91CF\u6307\u5B9A\u7C7B\u578B\u3002\u4F46\u662F\u4E5F\u53EF\u4EE5\u5F3A\u5236\u6307\u5B9A\u53D8\u91CF\u7C7B\u578B\u3002</p><p>\u5982\uFF1A[int] $b = 5</p><pre><code>  \u5219\u6B64\u53D8\u91CF\u53EA\u80FD\u5305\u542B\u6574\u6570\u503C\uFF0C\u5982\u679C\u5305\u542B\u5176\u4ED6\u7C7B\u578B\u4F1A\u51FA\u9519\u3002 \u5982 [int] $b = &quot;aaaa&quot; \u5C31\u4F1A\u62A5\u9519
</code></pre><p>\u5E38\u89C1\u53D8\u91CF\u7C7B\u578B\u5982\u4E0B\uFF1A</p><pre><code>  [int] \u3001[long]\u3001[string] \u3001[char] \u3001[bool] \u3001[byte] \u3001[double] \u3001[decimal] \u3001[single]

  [array] \uFF1A\u6570\u7EC4\u5BF9\u8C61

  [xml] \uFF1AXML\u5BF9\u8C61

  [hashtable] \uFF1A\u54C8\u5E0C\u8868\u5BF9\u8C61\uFF0C\u7C7B\u4F3C\u4E8E\u4E00\u4E2A\u5B57\u5178\u5BF9\u8C61
</code></pre><p>\u4E8C\u3001\u5E38\u91CF</p><pre><code> PowerShell\u5E38\u91CF\u7684\u503C\u6C38\u8FDC\u4E0D\u4F1A\u53D8\u3002\u5E38\u91CF\u4E0D\u80FD\u88AB\u5220\u9664\u3002

 \u4F7F\u7528\u5E38\u91CF\u4E4B\u524D\uFF0C\u9700\u8981\u901A\u8FC7Set-Variable\u6765\u521B\u5EFA\u5E38\u91CF\uFF0C\u4E14\u6307\u5B9A\u4E00\u4E9B\u53C2\u6570\u6765\u4F7F\u5B83\u7B49\u4E8E\u67D0\u4E2A\u5E38\u91CF\u3002

 \u5F53\u4F7F\u7528\u5E38\u91CF\u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u7528$\u5F00\u5934\u3002\u4F46\u662F\uFF0C\u4F7F\u7528Set-Variable\u5B9A\u4E49\u5E38\u91CF\u65F6\uFF0C\u4E0D\u53EF\u7528$\u7B26\u53F7\u5F00\u5934\u3002

 \u4F8B\u5982\uFF1A

         $aryComputers = &quot;loopback&quot;, &quot;localhost&quot;   #\u6570\u7EC4\u53D8\u91CF

         Set-Variable -name intDriveType -value 3 -option constant  #\u5E38\u91CF\u5B9A\u4E49 \u5E38\u91CF\uFF1AintDriveType \u503C\uFF1A3

         foreach ($strComputer in $aryComputers)   #\u5FAA\u73AF\u904D\u5386\u6570\u7EC4\u5BF9\u8C61

         {&quot;Hard drives on: &quot; + $strComputer

          #\u83B7\u53D6wmi\u5BF9\u8C61 \u5206\u7C7B\uFF1Awin32_logicaldisk \u7535\u8111\u540D\u79F0\uFF1A$strComputer \u6E90\u81EA\u6570\u7EC4\u5BF9\u8C61 \u7535\u8111\u8FC7\u6EE4\u6761\u4EF6\uFF1Adrivetype = 3 \uFF0C\u9A71\u52A8\u5668\u7C7B\u578B\u4E3A3

         Get-WmiObject -class win32_logicaldisk -computername $strComputer|  

         Where {$_.drivetype -eq $intDriveType}}
</code></pre><p>\u4E09\u3001\u6570\u7EC4</p><pre><code>  PowerShell\u4E2D\u521B\u5EFA\u6570\u7EC4\u7684\u65B9\u5F0F\u975E\u5E38\u7B80\u5355\uFF1A

  $arrName = &quot;LOGONSERVER&quot;,&quot;HOMEPATH&quot;, &quot;APPDATA&quot;,&quot;HOMEDRIVE&quot;

  \u548C\u521B\u5EFA\u53D8\u91CF\u65B9\u5F0F\u4E00\u6837\uFF0C\u53EA\u662F\u8D4B\u503C\u65F6\u53EF\u4EE5\u4ED8\u591A\u4E2A\u503C\u3002

  \u4F7F\u7528\u6570\u7EC4\u65B9\u5F0F\uFF1A$arrName[0] \uFF1A\u8868\u793A\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u6570\u7EC4\u9879\u7684\u503C

   \u6570\u7EC4\u4ECE0\u5F00\u59CB
</code></pre><p>PowerShell\u6CE8\u91CA\u7528\u6CD5\uFF1A</p><pre><code>   \u6CE8\u91CA\u7B26\u53F7\uFF1A#

   \u7528\u6CD5\u5982\u4E0B\uFF08\u4E00\u822C\u5728.ps1\u811A\u672C\u6587\u4EF6\u4E2D\u4F7F\u7528\uFF09\uFF1A

   Get-Process   #\u6B64\u5904\u5199\u6CE8\u91CA

   sort ws
</code></pre><p>PowerShell\u8FD0\u7B97\u7B26\u7528\u6CD5\uFF1A</p><p>\u8FD0\u7B97\u7B26\u5982\u4E0B\uFF1A</p><p>1.\u7B97\u672F\u4E8C\u5143\u8FD0\u7B97\u7B26\uFF1A</p><pre><code>  +   \u52A0\u3001\u4E32\u8054

   -    \u51CF

   *    \u4E58

   /    \u9664

   %   \u6A21
</code></pre><p>2.\u8D4B\u503C\u8FD0\u7B97\u7B26</p><pre><code>     =   +=    -=    *=    /=   %=
</code></pre><p>3.\u903B\u8F91\u8FD0\u7B97\u7B26</p><pre><code>     ! \u4E0D\u7B49\u4E8E

     not  \u975E

     and  \u4E14

      or   \u6216

4.\u6BD4\u8F83\u8FD0\u7B97\u7B26\uFF08\u53EF\u5728\u8FD0\u7B97\u7B26\u524D\u52A0\u4E0A i \u6216\u8005 c \uFF0C\u4EE5\u6307\u5B9A\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199\uFF09

       -eq  \u7B49\u4E8E   -ceq  \u533A\u5206\u5927\u5C0F\u5199

       -ne  \u4E0D\u7B49\u4E8E

       -gt   \u5927\u4E8E

       -ge  \u5927\u4E8E\u7B49\u4E8E

        -lt    \u5C0F\u4E8E

        -le   \u5C0F\u4E8E\u7B49\u4E8E

        -contains  \u5305\u542B 

 \u7528\u6CD5\u5982\u4E0B\uFF1A

        \u6B64\u6570\u7EC4\u4E2D\u662F\u5426\u5305\u542B3\uFF1A           1,2,3,5,3,2 \u2013contains 3

        \u8FD4\u56DE\u6240\u6709\u7B49\u4E8E3\u7684\u5143\u7D20\uFF1A        1,2,3,5,3,2 \u2013eq 3

        \u8FD4\u56DE\u6240\u6709\u5C0F\u4E8E3\u7684\u5143\u7D20\uFF1A         1,2,3,5,3,2 \u2013lt 3

        \u6D4B\u8BD5 2 \u662F\u5426\u5B58\u5728\u4E8E\u96C6\u5408\u4E2D\uFF1A   if (1, 3, 5 \u2013contains 2)

5.\u8C03\u7528\u8FD0\u7B97\u7B26

         &amp;  \u53EF\u7528\u4E8E\u8C03\u7528\u811A\u672C\u5757\u6216\u8005\u547D\u4EE4/\u51FD\u6570\u7684\u540D\u79F0 

                \u7528\u6CD5\u5982\u4E0B\uFF1A

                 $a = { Get-Process | Select -First 2}  #\u83B7\u53D6\u5904\u7406\u5668\u4FE1\u606F\u6392\u540D\u524D\u4E8C\u7684\u4E24\u6761\u8BB0\u5F55

                 &amp;$a

          .  \u53EF\u7528\u4E8E\u65B9\u6CD5\u8C03\u7528

                 \u7528\u6CD5\u5982\u4E0B\uFF1A

                  $a = &quot;\u8FD9\u662F\u5B57\u7B26\u4E32&quot;

                  $a.substring(0,3)

             ::  \u7528\u4E8E\u9759\u6001\u65B9\u6CD5\u8C03\u7528   



                   \u7528\u6CD5\u5982\u4E0B\uFF1A         

                   [DateTime]::IsLeapYear(2008)

                   \u7ED3\u679C\uFF1ATrue  

                   [DateTime]::Now  #\u8FD4\u56DE\u5F53\u524D\u65F6\u95F4

  6.\u5B57\u7B26\u4E32\u8FD0\u7B97\u7B26

            +  \u8FDE\u63A5\u4E24\u4E2A\u5B57\u7B26\u4E32

             *   \u6309\u6307\u5B9A\u6B21\u6570\u91CD\u590D\u5B57\u7B26\u4E32

              -f   \u8BBE\u7F6E\u5B57\u7B26\u4E32\u683C\u5F0F

               -replace   \u66FF\u6362\u8FD0\u7B97\u7B26    \u7528\u6CD5\uFF1A&quot;abcd&quot; -replace &quot;bc&quot;,&quot;TEST&quot;   \u8FD4\u56DE\u7ED3\u679C\uFF1AaTESTd

               -match   \u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D

               -like       \u901A\u914D\u7B26\u5339\u914D

  7.\u5176\u4ED6\u8FD0\u7B97\u7B26

                , \u6570\u7EC4\u6784\u9020\u51FD\u6570

                 ..  \u8303\u56F4\u8FD0\u7B97\u7B26

                 -is  \u7C7B\u578B\u9274\u522B\u5668  \u7528\u6CD5\uFF1A $a = 100  $a -is [int]  \u8FD4\u56DE\u7ED3\u679C\uFF1ATure  $a -is [string] \u8FD4\u56DE\u7ED3\u679C\uFF1AFalse

                 -as   \u7C7B\u578B\u8F6C\u6362\u5668  \u7528\u6CD5\uFF1A 1 -as [string]   #\u5C061\u4F5C\u4E3A\u5B57\u7B26\u4E32\u5904\u7406

                 -band  \u4E8C\u8FDB\u5236\u4E0E

                 -bor     \u4E8C\u8FDB\u5236\u6216

                 -bnot    \u4E8C\u8FDB\u5236\u975E

   8.\u8FD0\u7B97\u7B26\u4F18\u5148\u7EA7

                   (){} 

                   @$  

                    !  

                    [] 

                     . 

                    &amp;   

                    ++\u6216\u8005--   

                    \u4E00\u5143+ -   

                      * / %

                      \u4E8C\u5143 + -

                      \u6BD4\u8F83\u8FD0\u7B97\u7B26

                      -and -or

                        |

                        &gt;&gt;&gt;

                         =

     9.WindowsPowershell\u547D\u4EE4\u89E3\u6790\u987A\u5E8F

                      \u522B\u540D\uFF08alias\uFF09

                      \u51FD\u6570

                       cmdlet

                        \u811A\u672C

                         \u53EF\u6267\u884C\u6587\u4EF6

                         \u6B63\u5E38\u6587\u4EF6
</code></pre><p>PowerShell\u51FD\u6570\u7528\u6CD5\uFF1A</p><p>\u7528\u6CD5\u4E00\u5982\u4E0B\uFF1A\uFF08\u51FD\u6570\u4E2D\u6539\u53D8\u53D8\u91CF\u503C\u5E76\u4E0D\u5F71\u54CD\u5B9E\u9645\u503C\uFF09</p><pre><code>           $var1=10
           function one{&quot;The Variable is $var1&quot;}
           function two{$var1=20;one}
           one
           two
           one
</code></pre><p>\u6267\u884C\u7ED3\u679C\uFF1A</p><pre><code>          The Variable is 10
          The Variable is 20
          The Variable is 10
</code></pre><p>\u7528\u6CD5\u4E8C\u5982\u4E0B\uFF1A\uFF08\u51FD\u6570\u4E2D\u53D8\u91CF\u503C\u7684\u6539\u53D8\u8981\u7528$Script:var\u7684\u5F62\u5F0F\uFF09</p><pre><code>            $var1=10
            function one{&quot;The Variable is $var1&quot;}
            function two{$Script:var1=20;one}
            one
            two
            one
</code></pre><p>\u6267\u884C\u7ED3\u679C\uFF1A</p><pre><code>           The Variable is 10
           The Variable is 20
           The Variable is 20
</code></pre><p>PowerShell\u6761\u4EF6\u63A7\u5236\u7684\u7528\u6CD5\uFF1A</p><p>\u4E00\u3001\u5FAA\u73AF\u7C7B</p><p>1.foreach\u7684\u7528\u6CD5</p><p>\u7528\u6CD5\u4E00\u5982\u4E0B\uFF1A</p><pre><code>        $var=1..6 #\u5B9A\u4E49\u6570\u7EC4

        foreach($i in $var)
        {
                 $n++
                 Write-Host &quot;$i&quot;
         }
        Write-Host &quot;there were $n record&quot;
</code></pre><p>\u6267\u884C\u7ED3\u679C\uFF1A</p><pre><code>        1
        2
        3
        4
        5
        6
        there were 6 records
</code></pre><p>\u7528\u6CD5\u4E8C\u5982\u4E0B\uFF1A\u76F4\u63A5\u83B7\u53D6\u7BA1\u9053\u6570\u636E</p><pre><code>        $n = 0
        &quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot; | foreach{
                $n++
                Write-Host $_
                }
        Write-Host &quot;there were $n record&quot;
</code></pre><p>\u6267\u884C\u7ED3\u679C\uFF1A</p><pre><code>        a

        b

        c

        d

         there were 4 records
</code></pre><p>2.while\u7684\u7528\u6CD5</p><p>\u7528\u6CD5\u4E00\u5982\u4E0B\uFF1A $n = 0 while($n -le 5) #\u5F53$n\u5C0F\u4E8E\u7B49\u4E8E5\u65F6\u8FDB\u884C\u4E0B\u9762\u64CD\u4F5C { write-host $n $n++ }</p><p>\u6267\u884C\u7ED3\u679C\uFF1A</p><pre><code>        0

        1
        2
        3
        4
        5
</code></pre><ol start="3"><li>do...while\u7684\u7528\u6CD5</li></ol><p>\u7528\u6CD5\u4E00\u5982\u4E0B\uFF1A $n = 0 do { write-host $n $n++ } while($n -ne 3) #\u5F53$n&lt;&gt;3\u65F6\u8FDB\u884C\u5FAA\u73AF\u64CD\u4F5C</p><p>\u6267\u884C\u7ED3\u679C\uFF1A</p><pre><code>        0

        1
        2
</code></pre><ol start="4"><li>do...until\u7684\u7528\u6CD5</li></ol><p>\u7528\u6CD5\u4E00\u5982\u4E0B\uFF1A $n = 0 do { write-host $n $n++ } until($n -gt 3) #\u5F53$n&gt;3\u65F6\u505C\u6B62\u64CD\u4F5C</p><p>\u6267\u884C\u7ED3\u679C\uFF1A</p><pre><code>       0

       1
       2

       3
</code></pre><p>\u4E8C\u3001\u5206\u652F\u7C7B</p><p>1.if\u7528\u6CD5</p><p>if\u8BED\u6CD5\u7ED3\u6784\u5982\u4E0B\uFF1A</p><pre><code>          if\uFF08\u6761\u4EF61\uFF09

          {\u5904\u74061}

           elseif\uFF08\u6761\u4EF62\uFF09

           {\u5904\u74062}

           ...elseif \u53EF\u591A\u6B21\u91CD\u590D

           else

           {\u5904\u74063}
</code></pre><p>\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code>         Get-Service |foreach{  #foreach{\u5FC5\u987B\u653E\u5728\u4E00\u8D77\uFF0C\u4E0D\u53EF\u6362\u884C\u653E\u7F6E
                  if($_.status -eq &quot;running&quot;){   #if(){ \u5FC5\u987B\u653E\u5728\u4E00\u8D77\uFF0C\u4E0D\u53EF\u6362\u884C\u653E\u7F6E
                              write-host $_.displayname &quot;(&quot;$_status&quot;)&quot; -foregroundcolor &quot;green&quot;
                    }
                 else
                 {
                             write-host $_.displayname &quot;(&quot;$_status&quot;)&quot; -foregroundcolor &quot;red&quot;
                 }
        }
</code></pre><p>\u6267\u884C\u7ED3\u679C\uFF1A</p><pre><code>         Windows Audio Endpoint Builder ( )
         Windows Audio ( )
         ActiveX Installer (AxInstSV) ( )
         BitLocker Drive Encryption Service ( )
         Base Filtering Engine ( )
</code></pre><p>2.switch\u7528\u6CD5</p><p>switch\u8BED\u6CD5\u7ED3\u6784\u5982\u4E0B\uFF1A</p><pre><code>           switch [-regex | -wildcard | -exact] [-casesensitive]\uFF08\u8868\u8FBE\u5F0F\uFF09| -file filename   #\u8868\u8FBE\u5F0F\u53EF\u4EE5\u4E3A\u6570\u7EC4\uFF0C\u4E3A\u6570\u7EC4\u65F6\u987A\u5E8F\u5904\u7406\u6570\u7EC4\u6BCF\u4E00\u9879 

                                                                                                              # -file\u8868\u793A\u4ECE\u6587\u672C\u83B7\u5F97\u8F93\u5165\uFF0C\u8BFB\u53D6\u6587\u672C\u6BCF\u4E00\u884C\uFF0C\u5E76\u5BF9\u5176\u6267\u884Cswitch\u5757

           {

                 \u5B57\u7B261|\u6570\u5B571|\u53D8\u91CF1|\u8868\u8FBE\u5F0F1

                  {\u5904\u74061}     #\u6B64\u5904\u53EF\u52A0\u4E0A;break \u8868\u793A\u82E5\u5339\u914D\u4E0A\u5219\u8DF3\u51FAswitch\u8BED\u53E5      

                  \u5B57\u7B262|\u6570\u5B572|\u53D8\u91CF2|\u8868\u8FBE\u5F0F2

                  {\u5904\u74062}

                   ...\u4EE5\u4E0A\u7684\u7EC4\u5408\u53EF\u6709\u591A\u4E2A\uFF0C\u4E0D\u53EF\u91CD\u590D

                   default   #\u9ED8\u8BA4\u5904\u7406\u65B9\u5F0F\uFF0C\u8FD9\u4E2A\u662F\u9632\u6B62\u5339\u914D\u4E0D\u4E0A\u65F6\u7684\u5904\u7406\u65B9\u5F0F\uFF0C\u7C7B\u4F3C\u9519\u8BEF\u5904\u7406\u3002\u4E14default\u8BED\u53E5\u53EA\u53EF\u6709\u4E00\u4E2A

                    {\u5904\u74063}

           }
</code></pre><p>\u7528\u6CD5\u4E00\u5982\u4E0B\uFF1A switch\uFF08\u8868\u8FBE\u5F0F\uFF09</p><pre><code>                 $a = 3
                 switch($a)
                 {
                          1
                          {&quot;It&#39;s one&quot;;break}   #break:\u8868\u793A\u82E5\u5339\u914D\u8DF3\u51FAswith\u8BED\u53E5
                          2
                          {&quot;It&#39;s two&quot;;break}
                          3
                          {&quot;It&#39;s three&quot;;break}
                           4
                          {&quot;It&#39;s four&quot;;break}
                           5
                           {&quot;It&#39;s five&quot;;break}
                           default
                            {&quot;It&#39;s unknown&quot;;break}
                  }
</code></pre><p>\u6267\u884C\u7ED3\u679C\uFF1A</p><pre><code>          It&#39;s three

          \u82E5 $a = 8  \u6267\u884C\u7ED3\u679C\u4E3A\uFF1AIt&#39;s unknown
</code></pre><p>\u7528\u6CD5\u4E8C\u5982\u4E0B\uFF1Aswitch -casesensitive \uFF08\u8868\u8FBE\u5F0F\uFF09\u8868\u793A\u533A\u5206\u5927\u5C0F\u5199</p><pre><code>         $day = &quot;day1&quot;
         switch -casesensitive($day)  # -casesensitive \u8868\u793A\u5927\u5C0F\u5199\u654F\u611F\uFF0C\u5373\u533A\u5206\u5927\u5C0F\u5199
         {
                day1
                {&quot;It&#39;s Monday&quot; ;break}
                day2
                {&quot;It&#39;s Tuesday&quot;;break}
                day3
                {&quot;It&#39;s Wednesday&quot;;break}
                day4
                {&quot;It&#39;s Thursday&quot;;break}
                day5
                {&quot;It&#39;s Friday&quot;;break}
                day6
                {&quot;It&#39;s Saturday&quot;;break}
                day7
                {&quot;It&#39;s Sunday&quot;;break}
                default
               {&quot;It&#39;s unknown&quot;;break}
          }
</code></pre><p>\u6267\u884C\u7ED3\u679C\uFF1A It&#39;s Monday</p><pre><code>              \u82E5\u5B9A\u4E49  $day = &quot;Day1&quot;  \u6267\u884C\u7ED3\u679C\uFF1AIt&#39;s unknown
</code></pre><p>\u7528\u6CD5\u4E09\u5982\u4E0B\uFF1Aswitch -regex\uFF08\u8868\u8FBE\u5F0F\uFF09\u8868\u793A\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D</p><pre><code>  $day = &quot;day5&quot;
  switch -regex ($day)
  {
       ^[a-z]+$ 
       {&quot;\u5B57\u6BCD\uFF0C\u5339\u914D\u4E3A\uFF1A&quot; +$_ ;break}
       ^[\\d]+$ 
       {&quot;\u6570\u5B57\uFF0C\u5339\u914D\u4E3A\uFF1A&quot; +$_ ;break}
       ^\\w+$ 
       {&quot;\u5B57\u6BCD+\u6570\u5B57\uFF0C\u5339\u914D\u4E3A\uFF1A&quot; +$_ ;break}
       default
       {&quot;\u4EC0\u4E48\u90FD\u4E0D\u662F&quot; +$_;break}
  }
</code></pre><p>\u6267\u884C\u7ED3\u679C\uFF1A\u5B57\u6BCD+\u6570\u5B57\uFF0C\u5339\u914D\u4E3A\uFF1Aday6</p><pre><code>              \u82E5 $day = &quot;day&quot; \u6267\u884C\u7ED3\u679C\u4E3A\uFF1A\u5B57\u6BCD\uFF0C\u5339\u914D\u4E3A\uFF1Aday6

              \u82E5 $day = &quot;1234&quot; \u6267\u884C\u7ED3\u679C\u4E3A\uFF1A\u6570\u5B57\uFF0C\u5339\u914D\u4E3A\uFF1A1234

              \u82E5 $day = 12 \u6267\u884C\u7ED3\u679C\u4E3A\uFF1A\u6570\u5B57\uFF0C\u5339\u914D\u4E3A\uFF1A123

              \u82E5 $day = &quot;*&amp;^%&quot; \u6267\u884C\u7ED3\u679C\u4E3A\uFF1A\u4EC0\u4E48\u90FD\u4E0D\u662F\uFF0C\u5339\u914D\u4E3A\uFF1A*&amp;^%
</code></pre><p>\u7528\u6CD5\u56DB\u5982\u4E0B\uFF1Aswitch -regex\uFF08\u8868\u8FBE\u5F0F\uFF09\u8868\u793A\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D \u8868\u8FBE\u5F0F\u53EF\u4E3A\u6570\u7EC4</p><pre><code>   $day = &quot;day5&quot;,&quot;day6&quot;
   switch -regex ($day)
   {
          ^[a-z]+$ 
          {&quot;\u5B57\u6BCD\uFF0C\u5339\u914D\u4E3A\uFF1A&quot; +$_ ;}
          ^[\\d]+$ 
          {&quot;\u6570\u5B57\uFF0C\u5339\u914D\u4E3A\uFF1A&quot; +$_ ;}
          ^\\w+$ 
          {&quot;\u5B57\u6BCD+\u6570\u5B57\uFF0C\u5339\u914D\u4E3A\uFF1A&quot; +$_ ;}
          default
          {&quot;\u4EC0\u4E48\u90FD\u4E0D\u662F&quot; +$_;}
   }
</code></pre><p>\u6267\u884C\u7ED3\u679C\uFF1A\u5B57\u6BCD+\u6570\u5B57\uFF0C\u5339\u914D\u4E3A\uFF1Aday5</p><pre><code>             \u5B57\u6BCD+\u6570\u5B57\uFF0C\u5339\u914D\u4E3A\uFF1Aday6
</code></pre><p>\u7528\u6CD5\u4E94\u5982\u4E0B\uFF1Aswitch -wildcard \uFF08\u8868\u8FBE\u5F0F\uFF09\u8868\u793A\u901A\u914D\u7B26\u5339\u914D</p><pre><code>        $day = &quot;day2&quot;
        switch -wildcard ($day)
        {
             day2 
             {&quot;day2\uFF0C\u5339\u914D\u4E3A\uFF1A&quot; + $_;break}
              day3
             {&quot;day3\uFF0C\u5339\u914D\u4E3A\uFF1A&quot; + $_;break}
             day* 
             {&quot;\u901A\u914D\u7B26\uFF0C\u5339\u914D\u4E3A\uFF1A&quot; + $_;break}
             default
             {&quot;\u4EC0\u4E48\u90FD\u4E0D\u662F\uFF1A&quot; +$_;break}
        }
</code></pre><p>\u6267\u884C\u7ED3\u679C\uFF1Aday2\uFF0C\u5339\u914D\u4E3A\uFF1Aday2</p><pre><code>             \u82E5 $day = &quot;day5&quot;,\u6267\u884C\u7ED3\u679C\u4E3A\uFF1A\u901A\u914D\u7B26\uFF0C\u5339\u914D\u4E3A\uFF1Aday5

             \u82E5 $day = &quot;sunshine&quot;,\u6267\u884C\u7ED3\u679C\u4E3A\uFF1A\u4EC0\u4E48\u90FD\u4E0D\u662F\uFF1Asunshine
</code></pre><p>\u4E09\u3001\u8DF3\u8F6C\u7C7B</p><p>1.break\u7528\u6CD5\uFF1Abreak\u8BED\u53E5\u51FA\u73B0\u5728foreach\u3001for\u3001while\u3001switch\u7B49\u7ED3\u6784\u4E2D\u65F6\uFF0Cbreak\u8BED\u53E5\u5C06\u4F7Fwindows powershell\u7ACB\u5373\u9000\u51FA\u6574\u4E2A\u5FAA\u73AF\u3002</p><pre><code>                  \u5728\u4E0D\u5FAA\u73AF\u7684switch\u7ED3\u6784\u4E2D\uFF0Cpowershell\u5C06\u9000\u51FAswitch\u4EE3\u7801\u5757\u3002
</code></pre><p>\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code>         $var = 0
         while ($var -lt 10)
         {
                $var += 1
                if($var -eq 5)
                {
                      break       #\u5F53var=5\u65F6\uFF0C\u7EC8\u6B62while\u5FAA\u73AF

                 }
                write-host $var
          }
</code></pre><p>\u6267\u884C\u7ED3\u679C\uFF1A</p><pre><code>          1
          2
          3
          4
</code></pre><p>2.continue\u7528\u6CD5\uFF1Acontinue\u8BED\u53E5\u51FA\u73B0\u5728foreach\u3001for\u3001while\u7B49\u5FAA\u73AF\u7ED3\u6784\u4E2D\u65F6\uFF0Ccontinue\u8BED\u53E5\u5C06\u4F7Fwindows powershell\u7ACB\u5373\u9000\u51FA\u67D0\u4E00\u6B21\u8F6E\u5FAA\u73AF\uFF0C\u5E76\u7EE7\u7EED\u4E0B\u4E00\u8F6E\u5FAA\u73AF\u3002</p><p>\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code>      $var = 0
      while ($var -lt 10)
      {
            $var += 1
            if($var -eq 5)
            {
                    continue       #\u5F53var=5\u65F6\uFF0C\u8DF3\u51FA\u672C\u8F6E\u5FAA\u73AF\uFF0C\u7EE7\u7EED\u4E0B\u4E00\u8F6E\u5FAA\u73AF
            }
           write-host $var
     }
</code></pre><p>\u6267\u884C\u7ED3\u679C\uFF1A</p><pre><code>        1
        2
        3
        4
        6
        7
        8
        9
        10
</code></pre><p>PowerShell\u629B\u51FA\u5F02\u5E38\u7684Throw\u7528\u6CD5\uFF1A</p><p>\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code>               Throw  \u5B57\u7B26\u4E32|\u5F02\u5E38|ErrorRecord

              \u5982\uFF1Athrow  &quot;danger&quot;
</code></pre><p>\u8FD4\u56DE\u7ED3\u679C\uFF1Adanger \u53CA\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F</p><p>PowerShell\u83B7\u53D6\u51FA\u9519\u4FE1\u606F\u7684\u7528\u6CD5\uFF1A</p><p>\u7528\u6CD5\u5982\u4E0B\uFF1A function one { get-process -ea stop #-ea\u5B9A\u4E49\u9519\u8BEF\u53D1\u751F\u4EE5\u540E\u8BE5\u5982\u4F55\u7EE7\u7EED\u6267\u884C\uFF0C\u610F\u540C-ErrorAction get-childitem ada -ErrorAction stop #\u6B64\u5904\u6709\u9519\u8BEF \u8DEF\u5F84ada\u4E0D\u5B58\u5728 get-process -ErrorAction stop }</p><pre><code>      one
</code></pre><p>\u8FD4\u56DE\u7ED3\u679C\uFF1A\u62A5\u51FA\u9519\u8BEF\u4FE1\u606F</p><p>PowerShell\u5355\u6B65\u8C03\u8BD5\u7684\u7528\u6CD5\uFF1A</p><p>\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code>       #\u5355\u6B65\u8C03\u8BD5 \u9996\u5148\u8BBE\u7F6E\u8C03\u8BD5\u53EF\u7528 set-psDebug -step ;\u82E5\u8981\u8BBE\u7F6E\u4E3A\u975E\u8C03\u8BD5\u72B6\u6001 \u53EF\u7528 set-psDebug -off
       for($i = 1;$i -le 10 ; $i++)
       {
                write-host &quot;loop number $i&quot;
       }
</code></pre><p>\u6267\u884C\u7ED3\u679C\uFF1A\u4F1A\u51FA\u73B0\u9010\u6B65\u8C03\u8BD5\u7684\u5BF9\u8BDD\u6846</p>`,193),a=[r];function i(d,s){return n(),t("div",null,a)}const u=e(p,[["render",i],["__file","powershell.html.vue"]]);export{u as default};
