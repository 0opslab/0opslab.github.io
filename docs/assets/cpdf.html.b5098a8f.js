import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},t=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Read in.pdf, select pages 1, 2, 3 and 6, and write those pages to</span>
<span class="token comment">#\u8BFB\u5165.pdf\uFF0C\u9009\u62E9\u7B2C1,2,3\u548C6\u9875\uFF0C\u7136\u540E\u5C06\u8FD9\u4E9B\u9875\u9762\u5199\u5165</span>
<span class="token comment"># out.pdf</span>
<span class="token comment">#out.pdf</span>
cpdf in.pdf <span class="token number">1</span>-3,6 <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Select the even pages (2, 4, 6...) from in.pdf and write those pages</span>
<span class="token comment">#\u4ECEin.pdf\u4E2D\u9009\u62E9\u5076\u6570\u9875\uFF082,4,6 ...\uFF09\u5E76\u5199\u5165\u8FD9\u4E9B\u9875\u9762</span>
<span class="token comment"># to out.pdf</span>
<span class="token comment">#\u5230out.pdf</span>
cpdf in.pdf even <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Using AND to perform several operations in order, here merging two</span>
<span class="token comment">#\u4F7F\u7528AND\u6309\u987A\u5E8F\u6267\u884C\u591A\u4E2A\u64CD\u4F5C\uFF0C\u8FD9\u91CC\u5408\u5E76\u4E24\u4E2A</span>
<span class="token comment"># files together and adding a copyright stamp to every page.</span>
<span class="token comment">#\u6587\u4EF6\u4E00\u8D77\u5E76\u4E3A\u6BCF\u4E2A\u9875\u9762\u6DFB\u52A0\u7248\u6743\u6807\u8BB0\u3002</span>
cpdf <span class="token parameter variable">-merge</span> in.pdf in2.pdf AND -add-text <span class="token string">&quot;Copyright 2014&quot;</span> <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Read control.txt and use its contents as the command line arguments</span>
<span class="token comment">#\u8BFB\u53D6control.txt\u5E76\u5C06\u5176\u5185\u5BB9\u7528\u4F5C\u547D\u4EE4\u884C\u53C2\u6570</span>
<span class="token comment"># for cpdf.</span>
<span class="token comment">#\u5BF9\u4E8Ecpdf\u3002</span>
cpdf <span class="token parameter variable">-control</span> control.txt

<span class="token comment"># Merge in.pdf and in2.pdf into one document, writing to out.pdf.</span>
<span class="token comment">#\u5C06in.pdf\u548Cin2.pdf\u5408\u5E76\u5230\u4E00\u4E2A\u6587\u6863\u4E2D\uFF0C\u5199\u5165out.pdf\u3002</span>
cpdf <span class="token parameter variable">-merge</span> in.pdf in2.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Split in.pdf into ten-page chunks, writing them to Chunk001.pdf,</span>
<span class="token comment">#\u5C06in.pdf\u62C6\u5206\u4E3A\u5341\u9875\u5757\uFF0C\u5C06\u5B83\u4EEC\u5199\u5165Chunk001.pdf\uFF0C</span>
<span class="token comment"># Chunk002.pdf etc</span>
<span class="token comment">#Chunk002.pdf\u7B49</span>
cpdf <span class="token parameter variable">-split</span> in.pdf <span class="token parameter variable">-o</span> Chunk%%%.pdf <span class="token parameter variable">-chunk</span> <span class="token number">10</span>

<span class="token comment"># Split in.pdf on bookmark boundaries, writing each to a file whose</span>
<span class="token comment">#\u5728\u4E66\u7B7E\u8FB9\u754C\u4E0A\u62C6\u5206in.pdf\uFF0C\u5C06\u6BCF\u4E2A\u6587\u4EF6\u5199\u5165\u4E00\u4E2A\u6587\u4EF6</span>
<span class="token comment"># name is the bookmark label</span>
<span class="token comment">#name\u662F\u4E66\u7B7E\u6807\u7B7E</span>
cpdf -split-bookmarks <span class="token number">0</span> in.pdf <span class="token parameter variable">-o</span> @N.pdf

<span class="token comment"># Scale both the dimensions and contents of in.pdf by a factor of two</span>
<span class="token comment">#\u5C06in.pdf\u7684\u7EF4\u5EA6\u548C\u5185\u5BB9\u7F29\u653E\u4E24\u500D</span>
<span class="token comment"># in x and y directions.</span>
<span class="token comment">#\u5728x\u548Cy\u65B9\u5411\u3002</span>
cpdf -scale-page <span class="token string">&quot;2 2&quot;</span> in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Scale the pages in in.pdf to fit the US Letter page size, writing to</span>
<span class="token comment">#\u7F29\u653Ein.pdf\u4E2D\u7684\u9875\u9762\u4EE5\u9002\u5408US Letter\u9875\u9762\u5927\u5C0F\uFF0C\u5199\u5165</span>
<span class="token comment"># out.pdf</span>
<span class="token comment">#out.pdf</span>
cpdf -scale-to-fit usletterportrait in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Shift the contents of the page by 26 pts in the x direction, and 18</span>
<span class="token comment">#\u5C06\u9875\u9762\u5185\u5BB9\u6CBFx\u65B9\u5411\u79FB\u52A826\u70B9\uFF0C\u7136\u540E\u79FB\u52A818</span>
<span class="token comment"># millimetres in the y direction, writing to out.pdf</span>
<span class="token comment">#\u5728y\u65B9\u5411\u4E0A\u6BEB\u7C73\uFF0C\u5199\u5230out.pdf</span>
cpdf <span class="token parameter variable">-shift</span> <span class="token string">&quot;26pt 18mm&quot;</span> in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Rotate the contents of the pages in in.pdf by ninety degrees and</span>
<span class="token comment">#\u5C06in.pdf\u4E2D\u7684\u9875\u9762\u5185\u5BB9\u65CB\u8F6C90\u5EA6</span>
<span class="token comment"># write to out.pdf.</span>
<span class="token comment">#\u5199\u5230out.pdf\u3002</span>
cpdf -rotate-contents <span class="token number">90</span> in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Crop the pages in in.pdf to a 600 pts by 400 pts rectangle.</span>
<span class="token comment">#\u5C06in.pdf\u4E2D\u7684\u9875\u9762\u88C1\u526A\u4E3A600 pts\xD7400 pts\u77E9\u5F62\u3002</span>
cpdf <span class="token parameter variable">-crop</span> <span class="token string">&quot;0 0 600pt 400pt&quot;</span> in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Encrypt using 128bit PDF encryption using the owner password &#39;fred&#39;</span>
<span class="token comment">#\u4F7F\u7528\u6240\u6709\u8005\u5BC6\u7801&#39;fred&#39;\u4F7F\u7528128\u4F4DPDF\u52A0\u5BC6\u8FDB\u884C\u52A0\u5BC6</span>
<span class="token comment"># and the user password &#39;joe&#39;</span>
<span class="token comment">#\u548C\u7528\u6237\u5BC6\u7801&#39;joe&#39;</span>
cpdf <span class="token parameter variable">-encrypt</span> 128bit fred joe in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Decrypt using the owner password, writing to out.pdf.</span>
<span class="token comment">#\u4F7F\u7528\u6240\u6709\u8005\u5BC6\u7801\u89E3\u5BC6\uFF0C\u5199\u5165out.pdf\u3002</span>
cpdf <span class="token parameter variable">-decrypt</span> in.pdf <span class="token assign-left variable">owner</span><span class="token operator">=</span>fred <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Compress the data streams in in.pdf, writing the result to out.pdf.</span>
<span class="token comment">#\u538B\u7F29in.pdf\u4E2D\u7684\u6570\u636E\u6D41\uFF0C\u5C06\u7ED3\u679C\u5199\u5165out.pdf\u3002</span>
cpdf <span class="token parameter variable">-compress</span> in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Decompress the data streams in in.pdf, writing to out.pdf.</span>
<span class="token comment">#\u5728in.pdf\u4E2D\u89E3\u538B\u7F29\u6570\u636E\u6D41\uFF0C\u5199\u5165out.pdf\u3002</span>
cpdf <span class="token parameter variable">-decompress</span> in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># List the bookmarks in in.pdf. This would produce:</span>
<span class="token comment">#\u5217\u51FAin.pdf\u4E2D\u7684\u4E66\u7B7E\u3002\u8FD9\u4F1A\u4EA7\u751F\uFF1A</span>
cpdf -list-bookmarks in.pdf

<span class="token comment"># Outputs:</span>
<span class="token comment">#\u8F93\u51FA\uFF1A</span>

<span class="token comment"># Add bookmarks in the same form from a prepared file bookmarks.txt to</span>
<span class="token comment">#\u4ECE\u51C6\u5907\u597D\u7684\u6587\u4EF6bookmarks.txt\u4E2D\u6DFB\u52A0\u76F8\u540C\u8868\u5355\u7684\u4E66\u7B7E</span>
<span class="token comment"># in.pdf, writing to out.pdf.</span>
<span class="token comment">#in.pdf\uFF0C\u5199\u5230out.pdf\u3002</span>
cpdf -add-bookmarks bookmarks.txt in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Use the Split style to build a presentation from the PDF in.pdf,</span>
<span class="token comment">#\u4F7F\u7528\u62C6\u5206\u6837\u5F0F\u4ECEPDF in.pdf\u6784\u5EFA\u6F14\u793A\u6587\u7A3F\uFF0C</span>
<span class="token comment"># each slide staying 10 seconds on screen unless manually advanced.</span>
<span class="token comment">#\u6BCF\u4E2A\u5E7B\u706F\u7247\u5728\u5C4F\u5E55\u4E0A\u505C\u755910\u79D2\uFF0C\u9664\u975E\u624B\u52A8\u524D\u8FDB\u3002</span>
<span class="token comment"># The first page, being a title does not move on automatically, and</span>
<span class="token comment">#\u4F5C\u4E3A\u6807\u9898\u7684\u7B2C\u4E00\u9875\u4E0D\u4F1A\u81EA\u52A8\u79FB\u52A8\uFF0C\u5E76\u4E14</span>
<span class="token comment"># has no transition effect.</span>
<span class="token comment">#\u6CA1\u6709\u8FC7\u6E21\u6548\u5E94\u3002</span>
cpdf <span class="token parameter variable">-presentation</span> in.pdf <span class="token number">2</span>-end <span class="token parameter variable">-trans</span> Split <span class="token parameter variable">-duration</span> <span class="token number">10</span> <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Stamp the file watermark.pdf on to each page of in.pdf, writing the</span>
<span class="token comment">#\u5C06\u6587\u4EF6watermark.pdf\u6807\u8BB0\u5230in.pdf\u7684\u6BCF\u4E00\u9875\u4E0A\uFF0C\u5199\u5165</span>
<span class="token comment"># result to out.pdf.</span>
<span class="token comment">#\u7ED3\u679C\u662Fout.pdf\u3002</span>
cpdf -stamp-on watermark.pdf in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Add a page number and date to all the pages in in.pdf using the</span>
<span class="token comment">#\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u4E3Ain.pdf\u4E2D\u7684\u6240\u6709\u9875\u9762\u6DFB\u52A0\u9875\u7801\u548C\u65E5\u671F</span>
<span class="token comment"># Courier font, writing to out.pdf</span>
<span class="token comment">#Courier\u5B57\u4F53\uFF0C\u5199\u5165out.pdf</span>
cpdf <span class="token parameter variable">-topleft</span> <span class="token number">10</span> <span class="token parameter variable">-font</span> Courier -add-text <span class="token string">&quot;Page %Page<span class="token entity" title="\\n">\\n</span>Date %d-%m-%Y&quot;</span> in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Two up impose the file in.pdf, writing to out.pdf</span>
<span class="token comment">#\u4E24\u4E2A\u4EBA\u5C06\u6587\u4EF6in.pdf\u5F3A\u5236\u5199\u5165out.pdf</span>
cpdf -twoup-stack in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Add extra blank pages after pages one, three and four of a document.</span>
<span class="token comment">#\u5728\u6587\u6863\u7684\u7B2C\u4E00\u9875\uFF0C\u7B2C\u4E09\u9875\u548C\u7B2C\u56DB\u9875\u4E4B\u540E\u6DFB\u52A0\u989D\u5916\u7684\u7A7A\u767D\u9875\u3002</span>
cpdf -pad-after <span class="token number">1,3</span>,4 in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># List the annotations in a file in.pdf to standard output.</span>
<span class="token comment">#\u5C06\u6587\u4EF6in.pdf\u4E2D\u7684\u6CE8\u91CA\u5217\u51FA\u4E3A\u6807\u51C6\u8F93\u51FA\u3002</span>
cpdf -list-annotations in.pdf

<span class="token comment"># Might Produce:</span>
<span class="token comment">#\u53EF\u80FD\u4F1A\u4EA7\u751F\uFF1A</span>

<span class="token comment"># -- # Annotation text content 1 # -- # -- # Annotation text content 2</span>
<span class="token comment"># - \u6CE8\u91CA\u6587\u672C\u5185\u5BB91  -   - \u6CE8\u91CA\u6587\u672C\u5185\u5BB92</span>
<span class="token comment"># --</span>
<span class="token comment">#--</span>

<span class="token comment"># Copy the annotations from from.pdf to in.pdf, writing to out.pdf.</span>
<span class="token comment">#\u5C06\u6CE8\u91CA\u4ECEfrom.pdf\u590D\u5236\u5230in.pdf\uFF0C\u5199\u5165out.pdf\u3002</span>
cpdf -copy-annotations from.pdf in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Set the document title of in.pdf. writing to out.pdf.</span>
<span class="token comment">#\u8BBE\u7F6Ein.pdf\u7684\u6587\u6863\u6807\u9898\u3002\u5199\u5230out.pdf\u3002</span>
cpdf -set-title <span class="token string">&quot;The New Title&quot;</span> in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Set the document in.pdf to open with the Acrobat Viewer&#39;s toolbar</span>
<span class="token comment">#\u5C06\u6587\u6863in.pdf\u8BBE\u7F6E\u4E3A\u4F7F\u7528Acrobat Viewer\u7684\u5DE5\u5177\u680F\u6253\u5F00</span>
<span class="token comment"># hidden, writing to out.pdf.</span>
<span class="token comment">#\u9690\u85CF\uFF0C\u5199\u51FA\u6765.pdf\u3002</span>
cpdf -hide-toolbar <span class="token boolean">true</span> in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Set the metadata in a PDF in.pdf to the contents of the file</span>
<span class="token comment">#\u5C06PDF in.pdf\u4E2D\u7684\u5143\u6570\u636E\u8BBE\u7F6E\u4E3A\u6587\u4EF6\u7684\u5185\u5BB9</span>
<span class="token comment"># metadata.xml, and write the output to out.pdf.</span>
<span class="token comment">#metadata.xml\uFF0C\u5E76\u5C06\u8F93\u51FA\u5199\u5165out.pdf\u3002</span>
cpdf -set-metadata metadata.xml in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Set the document in.pdf to open in Acrobat Viewer showing two</span>
<span class="token comment">#\u5C06\u6587\u6863in.pdf\u8BBE\u7F6E\u4E3A\u5728Acrobat Viewer\u4E2D\u6253\u5F00\uFF0C\u663E\u793A\u4E24\u4E2A</span>
<span class="token comment"># columns of pages, starting on the right, putting the result in</span>
<span class="token comment">#\u9875\u9762\u7684\u5217\uFF0C\u4ECE\u53F3\u4FA7\u5F00\u59CB\uFF0C\u5C06\u7ED3\u679C\u653E\u5165</span>
<span class="token comment"># out.pdf.</span>
<span class="token comment">#out.pdf\u3002</span>
cpdf -set-page-layout TwoColumnRight in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Set the document in.pdf to open in Acrobat Viewer in full screen</span>
<span class="token comment">#\u5C06\u6587\u6863in.pdf\u8BBE\u7F6E\u4E3A\u5728Acrobat Viewer\u4E2D\u5168\u5C4F\u6253\u5F00</span>
<span class="token comment"># mode, putting the result in out.pdf.</span>
<span class="token comment">#\u6A21\u5F0F\uFF0C\u5C06\u7ED3\u679C\u8F93\u5165out.pdf\u3002</span>
cpdf -set-page-mode FullScreen in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Attach the file sheet.xls to in.pdf, writing to out.pdf.</span>
<span class="token comment">#\u5C06\u6587\u4EF6sheet.xls\u9644\u52A0\u5230in.pdf\uFF0C\u5199\u5165out.pdf\u3002</span>
cpdf -attach-file sheet.xls in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Remove any attachments from in.pdf, writing to out.pdf.</span>
<span class="token comment">#\u4ECEin.pdf\u4E2D\u5220\u9664\u6240\u6709\u9644\u4EF6\uFF0C\u5199\u5165out.pdf\u3002</span>
cpdf -remove-files in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Blacken all the text in in.pdf, writing to out.pdf.</span>
<span class="token comment">#\u5C06in.pdf\u4E2D\u7684\u6240\u6709\u6587\u672C\u53D8\u9ED1\uFF0C\u5199\u5165out.pdf\u3002</span>
cpdf <span class="token parameter variable">-blacktext</span> in.pdf <span class="token parameter variable">-o</span> out.pdf

<span class="token comment"># Make sure all lines in in.pdf are at least 2 pts wide, writing to</span>
<span class="token comment">#\u786E\u4FDDin.pdf\u4E2D\u7684\u6240\u6709\u884C\u90FD\u81F3\u5C11\u67092\u4E2A\u5BBD\uFF0C\u5199\u5165</span>
<span class="token comment"># out.pdf.</span>
<span class="token comment">#out.pdf\u3002</span>
cpdf <span class="token parameter variable">-thinlines</span> 2pt in.pdf <span class="token parameter variable">-o</span> out.pdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[t];function l(d,o){return s(),e("div",null,p)}const m=n(i,[["render",l],["__file","cpdf.html.vue"]]);export{m as default};
