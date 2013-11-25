---
layout: post
title: "Fix Image Resizing with object-fit"
published: true
---

As a webdeveloper you probably know how image/media behavior sucks regarding responsive webdesign. Some quick CSS fixes solve your issues usually:

	img {
		max-width: 100%;
		height: auto;
	}

But there is more than that. You may want to set an foreground image to fill its wrapping element, containing its intrinsic aspect-ratio and also want it to be repositioned always to center. Or, if you ever wanted to resize an iframe responsively in its initial aspect-ratio you might got into real trouble. Of course there are [fixes for that](http://embedresponsively.com/) kind of problem, too, but they all in all one can say:

> Media resizing behavior is outta control!

## Let's fix that

Yes, we're going to fix this now. There's a webstandard for it, it's the CSS property called [`object-fit`](http://www.w3.org/TR/css3-images/#the-object-fit). With that you'll set an media-element's size like you've been able to set for background images via `background-size` for a long time now. `object-fit` can have the following values:

![](http://www.w3.org/TR/css3-images/img_scale.png)

	img {
		/* Fills image into the parent element so it's fully covered. Contains aspect-ratio. */
		object-fit: cover;

		/* Fills image into the parent element so the img is fully shown. Can create letterboxes. */
		object-fit: contain;

		/* Fills image into the parent element so it's fully covered. Shrinks image, not respecting aspect-ratio. */
		object-fit: fill;
	}

Unfortunately browser support is as following:

<div class="embed-container">
	<iframe src="http://caniuse.com/object-fit/embed/" width="704" height="370"></iframe>
</div>

## Fix the browser support

As the browser support is not that good I wanted to have a interim solution. If you wanna depend on jQuery there also is a polyfill. The problem is, this polyfill isn't that performant as it calculates the image sizing live at runtime. <br>
When I started to write a vanilla JavaScript polyfill I realized the very same problem. While the solution I chose kind of worked, it didn't please me. Fortunately, when I asked [Christian Schaefer](https://twitter.com/derSchepp) for a code review, he came up with a much smarter idea.

Christian rewrote the whole code to work with CSS classes that are applied via JavaScript depending on the current 'situation' / 'state' of the image in a container. Additionally we wrap an [x-tag](https://hacks.mozilla.org/2013/05/speed-up-app-development-with-x-tag-and-web-components/) around the image element to be able to apply a CSS-only style solution. This way there's no need to constantly calculate sizes of the image to drastically improve the performance of the polyfill.

Well, enough said&mdash;check out the [`object-fit` Polyfill](https://github.com/anselmh/object-fit/) at GitHub.
It's also available via bower. Simply enter the following into your command line:

	$ bower install object-fit

And this will get you the polyfill as a component. By the way, there is no need for Modernizr. We have a neat and very small feature-test baked right into the polyfill.

Thanks to Christian for his great support and contributions!

-Anselm
