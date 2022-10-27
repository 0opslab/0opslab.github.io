import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>::\`\`<span class="token variable"><span class="token variable">\`</span>ops
::title:\u4E00\u952E\u5220\u9664OneDrive
::descr:
::<span class="token variable">\`</span></span>\`\`

@echo off

::\u83B7\u53D6\u7BA1\u7406\u5458\u6743\u9650
%Windir%<span class="token punctuation">\\</span>System32<span class="token punctuation">\\</span>FLTMC.exe <span class="token operator">&gt;</span>nul <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">||</span> <span class="token punctuation">(</span>
    IF EXIST <span class="token string">&quot;%TEMP%\\AdminRun.vbs&quot;</span> DEL /f /q <span class="token string">&quot;%TEMP%\\AdminRun.vbs&quot;</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>nul
    ECHO CreateObject^<span class="token punctuation">(</span><span class="token string">&quot;Shell.Application&quot;</span>^<span class="token punctuation">)</span>.ShellExecute <span class="token string">&quot;%~f0&quot;</span>, <span class="token string">&quot;%1&quot;</span>, <span class="token string">&quot;&quot;</span>, <span class="token string">&quot;runas&quot;</span>, <span class="token number">1</span> <span class="token operator">&gt;&gt;</span> <span class="token string">&quot;%TEMP%\\AdminRun.vbs&quot;</span>
    ECHO CreateObject^<span class="token punctuation">(</span><span class="token string">&quot;Scripting.filesystemobject&quot;</span>^<span class="token punctuation">)</span>.DeleteFile ^<span class="token punctuation">(</span>WScript.ScriptFullName^<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token string">&quot;%TEMP%\\AdminRun.vbs&quot;</span>
    %Windir%<span class="token punctuation">\\</span>System32<span class="token punctuation">\\</span>CSCRIPT.exe //Nologo <span class="token string">&quot;%TEMP%\\AdminRun.vbs&quot;</span>
    Exit /b
<span class="token punctuation">)</span>
echo.
<span class="token builtin class-name">echo</span> \u5373\u5C06\u5220\u9664OneDrive\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F
echo.
<span class="token builtin class-name">echo</span> \u662F\uFF1A\u8BF7\u6309\u4EFB\u610F\u952E\u7EE7\u7EED\u3002
<span class="token builtin class-name">echo</span> \u5426\uFF1A\u70B9\u51FB\u53F3\u4E0A\u89D2\uFF0C\u5173\u95ED\u672C\u7A97\u53E3\u3002
echo.
<span class="token builtin class-name">echo</span> \u5982\u6709\u5B89\u5168\u8F6F\u4EF6\u5F39\u51FA\u62E6\u622A\u63D0\u793A\uFF0C\u653E\u884C\u5373\u53EF\u3002
pause
<span class="token builtin class-name">echo</span> \u6B63\u5728\u8C03\u7528OneDrive\u81EA\u5E26\u5378\u8F7D\u529F\u80FD\uFF0C\u8BF7\u7A0D\u540E\u3002
<span class="token keyword">for</span> /d %%f <span class="token keyword">in</span> <span class="token punctuation">(</span>%localappdata%<span class="token punctuation">\\</span>Microsoft<span class="token punctuation">\\</span>OneDrive<span class="token punctuation">\\</span>*<span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token punctuation">(</span>if exist <span class="token string">&quot;%%f\\OneDriveSetup.exe&quot;</span> %%f<span class="token punctuation">\\</span>OneDriveSetup.exe /uninstall<span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> OneDrive\u5378\u8F7D\u5B8C\u6210\uFF01
del /f /s /q %localappdata%<span class="token punctuation">\\</span>Microsoft<span class="token punctuation">\\</span>OneDrive<span class="token punctuation">\\</span>*.*
rd /s /q %localappdata%<span class="token punctuation">\\</span>Microsoft<span class="token punctuation">\\</span>OneDrive<span class="token punctuation">\\</span>
<span class="token builtin class-name">echo</span> OneDrive\u6B8B\u7559\u6587\u4EF6\u5220\u9664\u5B8C\u6210\uFF01
reg <span class="token function">add</span> <span class="token string">&quot;HKEY_CLASSES_ROOT\\CLSID\\{018D5C66-4533-4307-9B53-224DE2ED1FE6}\\ShellFolder&quot;</span> /v Attributes /t REG_DWORD /d <span class="token string">&quot;0xf090004d&quot;</span> /f
<span class="token builtin class-name">echo</span> OneDrive\u5BFC\u822A\u680F\u9009\u9879\u5220\u9664\u5B8C\u6210\uFF01
<span class="token builtin class-name">echo</span> \u5220\u9664\u5BFC\u822A\u680FOneDrive\u56FE\u6807\u5C06\u4F1A\u5728\u91CD\u542FWindows\u8D44\u6E90\u7BA1\u7406\u5668\u540E\u751F\u6548\u3002
echo.
echo.
<span class="token builtin class-name">echo</span> \u5DF2\u5C06OneDrive\u5F7B\u5E95\u5378\u8F7D\u3002\u5982\u6709\u6B8B\u7559\u6587\u4EF6\u65E0\u6CD5\u5220\u9664\uFF0C\u91CD\u542F\u540E\u624B\u5DE5\u5220\u9664\u5373\u53EF\u3002
<span class="token builtin class-name">echo</span> \u8BF7\u6309\u4EFB\u610F\u952E\u9000\u51FA\u672C\u7A0B\u5E8F\u3002
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[i];function o(c,p){return s(),a("div",null,l)}const r=n(t,[["render",o],["__file","windows-del-OneDriver-bat.html.vue"]]);export{r as default};
