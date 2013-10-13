---
layout: post
title: "Prefetching CSS Resources"
published: true
---

If you use images in CSS backgrounds or in `::before` and `::after` pesudo-elements the browser is not able to prefetch these resources with its prefetch algorithm. This is because this algorithm only searches for image resources in the HTML source.

To read the sources given in CSS the user agent would have to parse the CSS first which is a big performance bottleneck. This is the reason why browsers don't do it. Now as we know this, we might want to solve that.

It is relatively easy: As CSS is not parsed yet, a browser takes all sources that are written in the HTML source regardless if you prevent the image from being shown to the user by applying `display: none;` to the html class. In short, write the following in your HTML source:

	<div class="preload">
		<img src="img/css-background-image.jpg" alt="">
	</div>

And in your CSS you write:

	.preload {
		display: none !important;
	}

Now the prefetching algorithm of a modern browser is able to fetch the image source and as soon as the CSS is parsed the image is yet just available and can be displayed immediately. Otherwise during fetching the external source while executing the CSS this would shortly block the page and impact the performance of your site.

A few notices on that technique you should be aware of:

- If no CSS is applied to the page for whatever reason the image is shown to the user (which might not be intended).
- You don't need to set an `alt=""` text on the `img` elements as this is a non-descriptive layout image which probably isn't inteded to be read out by screenreaders. Be aware we [need to set it as empty attribute](http://webaim.org/techniques/images/alt_text#decorative) to prevent some screenreaders from reading the source of the graphic. I know screenreader should not read `display: none;` but in fact some do and also if no CSS is applied, the empty alt-attribute still works so I found this the better technique.
- This technique also works for image resources that are used in JavaScripts.

That's it, I hope it helps. Thanks for reading!

_Credit notice: I am not sure where I found this technique first but [Harry](http://csswizardry.com/) at least uses it so I guess I owe him the credit although I added the alt-attribute for better screenreader compatibility even if the CSS is not loaded._
