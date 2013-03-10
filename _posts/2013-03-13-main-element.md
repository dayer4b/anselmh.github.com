---
layout: post
title: "Why you should use &lt;main&gt;"
published: false
---

This element being a rookie to HTML5 it is still very unknown. I  assume many normal developers even never heard of the element yet. I want to quickly write up why every developer needs to know about this element.

Steve Faulkner proposed the [`<main>` element](http://www.w3.org/html/wg/drafts/html/master/grouping-content.html#the-main-element) some months ago to the WHATWG and W3C and finally it went into specification of HTML5.

As the name says already, the `<main>` element is a one time per document element which wraps the main content of the document. Most developers already use a `<div id="main">` or something similar wrapping their main content of the page. But because a div does not have any semantic meaning and for accessibility it would be great to identify the main content of a page, the `<main>` element will improve your site's accessibility a lot.

So the usage of the element is pretty simple:
The `<main>` element is used once per page and should be used wrapping your main content. That means, it will take its place between the body's `<header>` and `<footer>` element. Here is an example:

	<html>
		<head>
			<!-- head information here -->
		</head>

		<body>

			<header>
				<!-- Your site's header here -->
			</header>

			<main role="main">
				<!-- Site's main content here -->
			</main>

			<footer>
				<!-- Your site's footer here -->
			</footer>
		</body>
	</html>

As you can see I've added the `role="main"` ARIA attribute to the main element. That is because the main element is not widely supported by all browsers yet. For accessibility reasons this attribute will 'polyfill' the main element's meaning for screenreaders.

If you wonder if you can use this element while many browsers do not support this at the moment, don't worry: If a browser does not support the element, it will be interpreted as div-element but still get the ARIA role.

One thing you should indeed do for the fallback is adding one line of CSS to get the proper block-styling of the element:

<pre><code class="language-css">main {
	display: block;
}
</code></pre>

This is already included in Nicolas Gallagher's [normalize.css](https://github.com/necolas/normalize.css/) and therefore in HTML5Boilerplate as well.

_Notice: While WHATWG stating in its specification on main element that the element can be used as a sectioning element, this is clearly wrong. People of W3C and Steve Faulkner are on it so hopefully this will be fixed soon._