import{d as n}from"./app.63462732.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1>\u5B57\u7B26\u4E32</h1><ul><li>\u5B57\u7B26\u4E32\u7684\u57FA\u7840\u64CD\u4F5C</li><li>\u5B57\u7B26\u4E32\u7684\u57FA\u7840\u77E5\u8BC6</li><li>\u5B57\u7B26\u4E32\u7684\u9AD8\u6548\u6784\u9020</li><li>\u5B57\u7B26\u4E32\u7684\u5E95\u5C42\u64CD\u4F5C</li></ul><h2>\u5B57\u7B26\u4E32\u7684\u57FA\u7840\u64CD\u4F5C</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u58F0\u660E</span>
<span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">&quot;\u4F60\u597D&quot;</span><span class="token comment">// s := &quot;\u4F60\u597D&quot;</span>
<span class="token comment">//\u8BFB\u53D6</span>
fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token comment">// \u8F6C\u5316\u4E3Aunicode\u7801\u70B9\u5B58\u50A8</span>
<span class="token boolean">_</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">rune</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token comment">// \u8F6C\u5316\u4E3A\u5B57\u7B26\u5B58\u50A8</span>
<span class="token boolean">_</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token comment">// \u5B57\u7B26\u7684\u7B80\u5355\u62FC\u63A5</span>
s1 <span class="token operator">:=</span> <span class="token string">&quot;\u4F60&quot;</span>
s2 <span class="token operator">:=</span> <span class="token string">&quot;\u597D&quot;</span>
s <span class="token operator">:=</span> s1 <span class="token operator">+</span> s2
<span class="token comment">// \u591A\u884C\u5B57\u7B26</span>
s <span class="token operator">=</span> <span class="token string">\`
\u4F60\u597D

\u4E16\u754C
\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2>\u5B57\u7B26\u4E32\u7684\u57FA\u7840\u77E5\u8BC6</h2><ul><li>\u5B57\u7B26\u4E32\u7684\u6570\u636E\u662F\u53EA\u8BFB\u6570\u636E\u4E0D\u53EF\u66F4\u6539</li><li>\u5B57\u7B26\u4E32\u7684\u96F6\u503C\u662F\u53EF\u7528\u7684\uFF0C<code>var s string</code> \u7ED3\u679C\u662F<code>&quot;&quot;</code></li><li>\u83B7\u53D6\u5B57\u7B26\u4E32\u957F\u5EA6\u7684\u64CD\u4F5C\u65F6\u95F4\u590D\u6742\u5EA6\u662F<code>O(1)</code>\u56E0\u4E3A\u5B83\u662F\u4E0D\u53EF\u53D8\u7684\u53EA\u8BFB\u6570\u636E\uFF0C\u6240\u4EE5\u957F\u5EA6\u88AB\u4FDD\u5B58\u5728\u4E86\u5B57\u6BB5\u4E2D\uFF0C\u76F4\u63A5\u8BFB\u8FD9\u4E2A\u5B57\u6BB5\u5373\u53EF</li><li>\u5B57\u7B26\u4E32\u53EF\u4EE5\u901A\u8FC7<code>+</code>,<code>+=</code> \u8FDB\u884C\u62FC\u63A5</li><li>\u5B57\u7B26\u4E32\u53EF\u4EE5\u4F7F\u7528<code>&gt; &lt; &gt;= &lt;= == =!</code> \u8FD0\u7B97\u7B26\uFF0C\u6BD4\u8F83\u7684\u987A\u5E8F\u662F\uFF1A <ul><li>\u5148\u6BD4\u8F83\u957F\u5EA6</li><li>\u518D\u6BD4\u8F83\u662F\u5426\u662F\u6307\u5411\u4E00\u5757\u5185\u5B58\u5730\u5740</li><li>\u5982\u679C\u90FD\u6EE1\u8DB3\u518D\u6BD4\u8F83\u5177\u4F53\u6570\u636E</li></ul></li><li>\u5B57\u7B26\u4E32\u539F\u751F\u652F\u6301unicode\u5B57\u7B26\u96C6\uFF0C\u5E76\u4E14go\u9ED8\u8BA4\u652F\u6301utf-8\u7684\u7F16\u7801\u7B97\u6CD5 <ul><li>rune\u5B58\u50A8unicode\u7684\u4E00\u4E2A\u7801\u70B9</li><li>byte\u5B58\u50A8\u771F\u5B9E\u7684\u5E95\u5C42\u5B57\u7B26\uFF08\u6BD4\u5982utf-8\uFF0C\u4E09\u4E2A\u5B57\u7B26\u6765\u4FDD\u5B58\u4E00\u4E2A\u4E2D\u6587\u5B57\u7B26\uFF0Crune\u5C31\u53EA\u663E\u793A\u4E00\u4E2A\u5B57\u7B26\uFF0Cbyte\u4F1A\u663E\u793A\u4E09\u4E2A\uFF09</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">&quot;\u4E2D&quot;</span>
  fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">rune</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// output: [228 184 173] [20013]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li>\u4F7F\u7528\`\`\u539F\u751F\u652F\u6301\u591A\u884C\u5B57\u7B26</li></ul><h2>\u5B57\u7B26\u4E32\u7684\u9AD8\u6548\u6784\u9020</h2><p>\u5B57\u7B26\u4E32\u7684\u6784\u9020\u6709\u4EE5\u4E0B\u8FD9\u4E48\u51E0\u79CD</p><ul><li>\u6700\u5E38\u89C4\u7684\u4F7F\u7528<code>+</code>\u548C <code>+=</code></li><li>fmt.Sprintf</li><li>strings.Join</li><li>strings.Builder</li><li>bytes.Buffer</li></ul><p>\u8BA9\u6211\u4EEC\u5206\u522B\u7ED9\u51FA\u4EE3\u7801\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">//\u6700\u5E38\u89C4\u7684\u4F7F\u7528\`+\`\u548C \`+=\`</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s1 <span class="token operator">:=</span> <span class="token string">&quot;\u4E2D&quot;</span>
	s2 <span class="token operator">:=</span> <span class="token string">&quot;\u56FD&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>s1 <span class="token operator">+</span> s2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">//fmt.Sprintf</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s1 <span class="token operator">:=</span> <span class="token string">&quot;\u4E2D&quot;</span>
	s2 <span class="token operator">:=</span> <span class="token string">&quot;\u56FD&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%s%s&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">//strings.Join</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s1 <span class="token operator">:=</span> <span class="token string">&quot;\u4E2D&quot;</span>
	s2 <span class="token operator">:=</span> <span class="token string">&quot;\u56FD&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">//strings.Builder</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> b strings<span class="token punctuation">.</span>Builder
  b<span class="token punctuation">.</span><span class="token function">Grow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// \u7ED9\u51FA\u731C\u6D4B\u6700\u7EC8\u7684string\u957F\u5EA6</span>
	s1 <span class="token operator">:=</span> <span class="token string">&quot;\u4E2D&quot;</span>
	s2 <span class="token operator">:=</span> <span class="token string">&quot;\u56FD&quot;</span>
	b<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
	b<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">//bytes.Buffer</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;bytes&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> b bytes<span class="token punctuation">.</span>Buffer
	s1 <span class="token operator">:=</span> <span class="token string">&quot;\u4E2D&quot;</span>
	s2 <span class="token operator">:=</span> <span class="token string">&quot;\u56FD&quot;</span>
	b<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
	b<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u6839\u636Ebenchmark\uFF0C\u5F97\u51FA\u4EE5\u4E0B\u7ED3\u8BBA\uFF1A</p><ul><li>\u5E26\u6709\u9884\u4F30string\u957F\u5EA6\u7684strings.Builder \u6700\u5FEB</li><li>\u5E26\u6709\u9884\u4F30\u7684bytes.Buffer \u548Cstrings.Join \u6027\u80FD\u7B2C\u4E8C\u6863\u6B21</li><li>\u6CA1\u6709\u9884\u4F30\u957F\u5EA6\u7684strings.Builder\u548Cbytes.Buffer\u4EE5\u53CA + += \u7B2C\u4E09\u6863\u6B21</li><li>fmt.Sprintf\u6700\u5DEE\u52B2</li></ul><p>\u90A3\u4E48\uFF1A</p><ul><li>\u5F53\u80FD\u7ED9\u51FA\u9884\u4F30\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F18\u9009\u4F7F\u7528 strings.Buffer</li><li>strings.Joins\u6027\u80FD\u6700\u7A33\uFF0C\u6CA1\u6709\u9884\u4F30\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u7A33\u5B9A\u554A</li><li>\u64CD\u4F5C\u7B26 + += \u6700\u76F4\u89C2\uFF0C\u5E76\u4E14\u5728\u5B57\u7B26\u77ED\uFF0C\u4EE5\u53CA\u7F16\u8BD1\u5668\u77E5\u9053\u8FDE\u63A5\u7684\u5B57\u7B26\u4E32\u4E2A\u6570\u65F6\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u8FD8\u80FD\u5F97\u5230\u7F16\u8BD1\u5668\u7684\u4F18\u5316</li><li>fmt.Sprintf \u7528\u5728\u591A\u7C7B\u578B\u7EC4\u6210\u5B57\u7B26\u4E32\u7684\u65F6\u5019\u662F\u6700\u597D\u7684\uFF0C\u867D\u7136\u5B83\u6548\u7387\u5F88\u5DEE\uFF0C\u4F46\u662F\u4EBA\u5BB6\u80FD\u529B\u5F3A\u554A</li></ul><h2>\u5B57\u7B26\u4E32\u7684\u5E95\u5C42</h2><h3>\u6570\u636E\u7ED3\u6784</h3><h3>\u89E3\u6790\u8FC7\u7A0B</h3><h3>\u62FC\u63A5</h3><h3>\u7C7B\u578B\u8F6C\u6362</h3><h2>\u53C2\u8003\u8D44\u6599</h2><ul><li>\u56FE\u4E66: go\u7CBE\u8FDB\u4E4B\u8DEF</li><li>https://draveness.me/golang/docs/part2-foundation/ch03-datastructure/golang-string/</li></ul>`,26);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
