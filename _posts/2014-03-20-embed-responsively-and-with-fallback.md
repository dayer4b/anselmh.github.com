---
layout: post
title: "Embed responsively and with a fallback"
---

This post will show you how to provide fallbacks for embedded code from Codepen, JSbin or other services. It’s super easy but often forgot.

## Why?

If you’ve ever been reading your timeline viewing a blog post that includes a codepen while on the train you might already know why. All of the code snippet services are heavily relying on their own JavaScripts. If they can’t be loaded or the service is offline as a whole, the whole blog post can be useless as the core of it, the source code, isn’t loaded. That is why we want to avoid fully relying on JavaScript and instead provide a fallback when JavaScript isn’t available.

## How?

The good old `<noscript>` element comes into handy. While many of the sharing codes already include some noscript content, it often only contains a HTML link to the code-snippet itself again. This is not very useful and it would be a much better user experience if a user could still see the whole code and result. The only difference in fact should be that the live code-example might not be available. But all important code is available. All the time.

Format the fallback content in a way that users will not recognize anything went wrong.

Here’s how a possible CodePen implementation could look like:

	<p data-height="268" data-theme-id="0" data-slug-hash="djbmp" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/anselmh/pen/djbmp'>Drop shadow for 2 elems preserving the intersection</a> by Anselm Hannemann (<a href='http://codepen.io/anselmh'>@anselmh</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
	<script async src="//codepen.io/assets/embed/ei.js"></script>
	<noscript>
		<h3>HTML</h3>
		<pre><code>
		<div class="block">
			<div class="innerblock">
				<p>Content and other markup</p>
			</div>
		</div>
		</code></pre>

		<h3>CSS</h3>
		<pre><code>
		body {
			background: black;
		}

		.block {
			width: 80%;
			margin: 1em auto;
		}
		</code></pre>

		<h3>Result</h3>
		<img src="result.png" alt="Your alt text here">
	</noscript>

This, of course, works also with JSBin, and all other services that provide embedded snippets relying on scripts to show them.

## Be a good example

When you are including a code snippet you try to teach people something. Therefore you already want to be a good example how to make things on the web for other people. Make the experience for your users even better by regarding no JavaScript users (you know it’s mainly not those who disable it but people on wireless networks)! The users will thank you…

