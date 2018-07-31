webpackJsonp([0xb10d0a11b345],{305:function(n,s){n.exports={data:{markdownRemark:{html:'<h1 id="introduction"><a href="#introduction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction</h1>\n<p><a href="http://graphql.org/learn">GraphQL.org</a> is the best place to get started learning GraphQL.  Here is an excerpt from the introduction:</p>\n<blockquote>\n<p>GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn\'t tied to any specific database or storage engine and is instead backed by your existing code and data.</p>\n</blockquote>\n<blockquote>\n<p>A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type.</p>\n</blockquote>\n<p>Here is a "Hello World" for GraphQL .NET.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">using</span> System<span class="token punctuation">;</span>\n<span class="token keyword">using</span> GraphQL<span class="token punctuation">;</span>\n<span class="token keyword">using</span> GraphQL<span class="token punctuation">.</span>Types<span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Program</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> schema <span class="token operator">=</span> Schema<span class="token punctuation">.</span><span class="token function">For</span><span class="token punctuation">(</span><span class="token string">@"\n      type Query {\n        hello: String\n      }\n    "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">var</span> json <span class="token operator">=</span> schema<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>_ <span class="token operator">=</span><span class="token operator">></span>\n    <span class="token punctuation">{</span>\n      _<span class="token punctuation">.</span>Query <span class="token operator">=</span> <span class="token string">"{ hello }"</span><span class="token punctuation">;</span>\n      _<span class="token punctuation">.</span>Root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> Hello <span class="token operator">=</span> <span class="token string">"Hello World!"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Output</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"hello"</span><span class="token operator">:</span> <span class="token string">"Hello World!"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>There are two ways you can build your schema.  One is with a Handler / Endpoints approach using Schema Syntax.  The other is through GraphTypes.  The basics of both are demonstrated using the following schema definition.</p>\n<blockquote>\n<p><code class="language-text">!</code> signifies a field is non-nullable.</p>\n</blockquote>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql">type Droid <span class="token punctuation">{</span>\n  <span class="token attr-name">id</span><span class="token punctuation">:</span> String<span class="token operator">!</span>\n  <span class="token attr-name">name</span><span class="token punctuation">:</span> String<span class="token operator">!</span>\n<span class="token punctuation">}</span>\n\ntype Query <span class="token punctuation">{</span>\n  <span class="token attr-name">hero</span><span class="token punctuation">:</span> Droid\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="handler--endpoints-approach"><a href="#handler--endpoints-approach" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Handler / Endpoints Approach</h2>\n<p>The endpoints approach relys upon Schema Syntax, coding conventions, and tries to provide a minmal amount of syntax.  It is the easiest to get started using though does not currently support some advanced scenarios.</p>\n<blockquote>\n<p>Use the optional <code class="language-text">GraphQLMetadata</code> attribute to customize the endpoint.</p>\n</blockquote>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Droid</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">string</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n  <span class="token keyword">public</span> <span class="token keyword">string</span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Query</span>\n<span class="token punctuation">{</span>\n  <span class="token punctuation">[</span><span class="token class-name">GraphQLMetadata</span><span class="token punctuation">(</span><span class="token string">"hero"</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n  <span class="token keyword">public</span> <span class="token class-name">Droid</span> <span class="token function">GetHero</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Droid</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token string">"1"</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"R2-D2"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> schema <span class="token operator">=</span> Schema<span class="token punctuation">.</span><span class="token function">For</span><span class="token punctuation">(</span><span class="token string">@"\n  type Droid {\n    id: String!\n    name: String!\n  }\n\n  type Query {\n    hero: Droid\n  }\n"</span><span class="token punctuation">,</span> _ <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    _<span class="token punctuation">.</span>Types<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Include</span><span class="token punctuation">&lt;</span><span class="token class-name">Query</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> json <span class="token operator">=</span> schema<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>_ <span class="token operator">=</span><span class="token operator">></span>\n<span class="token punctuation">{</span>\n  _<span class="token punctuation">.</span>Query <span class="token operator">=</span> <span class="token string">"{ hero { id name } }"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Output</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"hero"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>\n      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"R2-D2"</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="graphtype-types-approach"><a href="#graphtype-types-approach" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GraphType Types Approach</h2>\n<p>The <code class="language-text">GraphType</code> "Type" approach can be more verbose, but gives you access to all of the provided properties of your <code class="language-text">GraphType</code>\'s and <code class="language-text">Schema</code>.  You are required to use inheritance to leverage that functionality.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">using</span> System<span class="token punctuation">;</span>\n<span class="token keyword">using</span> GraphQL<span class="token punctuation">;</span>\n<span class="token keyword">using</span> GraphQL<span class="token punctuation">.</span>Types<span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Droid</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">string</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n  <span class="token keyword">public</span> <span class="token keyword">string</span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DroidType</span> <span class="token punctuation">:</span> <span class="token class-name">ObjectGraphType</span><span class="token operator">&lt;</span>Droid<span class="token operator">></span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">DroidType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token function">Field</span><span class="token punctuation">(</span>x <span class="token operator">=</span><span class="token operator">></span> x<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Description</span><span class="token punctuation">(</span><span class="token string">"The Id of the Droid."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">Field</span><span class="token punctuation">(</span>x <span class="token operator">=</span><span class="token operator">></span> x<span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Description</span><span class="token punctuation">(</span><span class="token string">"The name of the Droid."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StarWarsQuery</span> <span class="token punctuation">:</span> <span class="token class-name">ObjectGraphType</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">StarWarsQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token generic-method"><span class="token function">Field</span><span class="token punctuation">&lt;</span><span class="token class-name">DroidType</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>\n      <span class="token string">"hero"</span><span class="token punctuation">,</span>\n      resolve<span class="token punctuation">:</span> context <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">new</span> <span class="token class-name">Droid</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token string">"1"</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"R2-D2"</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Program</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> schema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schema</span> <span class="token punctuation">{</span> Query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StarWarsQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">var</span> json <span class="token operator">=</span> schema<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>_ <span class="token operator">=</span><span class="token operator">></span>\n    <span class="token punctuation">{</span>\n      _<span class="token punctuation">.</span>Schema <span class="token operator">=</span> schema<span class="token punctuation">;</span>\n      _<span class="token punctuation">.</span>Query <span class="token operator">=</span> <span class="token string">"hero { id name }"</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Output</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"hero"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>\n      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"R2-D2"</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',fields:{relativePath:"docs/getting-started/introduction.md"}},site:{siteMetadata:{githubEditUrl:"https://github.com/graphql-dotnet/graphql-dotnet/edit/master/docs2/site"}}},pathContext:{relativePath:"docs/getting-started/introduction.md"}}}});
//# sourceMappingURL=path---docs-getting-started-introduction-6989fcb8f42e6bf8e016.js.map