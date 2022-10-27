import{_ as e,o as n,c as i,e as s}from"./app.a667bd71.js";const l={},a=s(`<h2 id="\u9AD8\u4EAE\u641C\u7D22\u5355\u5143\u683C" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u4EAE\u641C\u7D22\u5355\u5143\u683C" aria-hidden="true">#</a> \u9AD8\u4EAE\u641C\u7D22\u5355\u5143\u683C</h2><div class="language-vbs ext-vbs line-numbers-mode"><pre class="language-vbs"><code>Private Sub Worksheet_SelectionChange(ByVal Target As Range)
Cells.Interior.ColorIndex = xlNone
Target.Interior.ColorIndex = 8
End Sub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9AD8\u4EAE\u641C\u7D22\u641C\u7D22\u5355\u5143\u683C\u6240\u5728\u7684\u884C\u548C\u5217" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u4EAE\u641C\u7D22\u641C\u7D22\u5355\u5143\u683C\u6240\u5728\u7684\u884C\u548C\u5217" aria-hidden="true">#</a> \u9AD8\u4EAE\u641C\u7D22\u641C\u7D22\u5355\u5143\u683C\u6240\u5728\u7684\u884C\u548C\u5217</h2><div class="language-vbs ext-vbs line-numbers-mode"><pre class="language-vbs"><code>Private Sub Worksheet_SelectionChange(ByVal Target As Range)
Cells.Interior.ColorIndex = xlNone
Rows(Selection.Row &amp; &quot;:&quot; &amp; Selection.Row + Selection.Rows.Count - 1).Interior.ColorIndex = 35
Columns(Selection.Column).Resize(, Selection.Columns.Count).Interior.ColorIndex = 20
End Sub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[a];function o(d,t){return n(),i("div",null,r)}const v=e(l,[["render",o],["__file","execl_vbs.html.vue"]]);export{v as default};
