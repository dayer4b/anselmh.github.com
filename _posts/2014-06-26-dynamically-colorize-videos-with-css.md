---
layout: post
title: "Dynamically colorize videos with CSS"
---

How do you colorize a video in the very same colors you use in your webdesign? Of course, in CSS. Now what do you do if you have different colors and want them to be reflected in your video? Yes, you animate it.

**Caution: The following technique is a proof-of-concept that might have a heavy impact on your CPU & GPU. Please do not ever use this technique in real / client projects until the performance issue has been resolved.**

## The Demo

_Please wait a bit until the video starts playing. Embeded demo takes a little bit… works currently best in Chrome (Canary)._

<p data-height="480" data-theme-id="0" data-slug-hash="KGilq" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/anselmh/pen/KGilq/'>Fullscreen Video Hue</a> by Anselm Hannemann (<a href='http://codepen.io/anselmh'>@anselmh</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

## The HTML

The HTML is pretty straight forward. As the `<video>` element (just as `<img>`) don’t support pseudo elements, there’s no way to do this with just one element. If you fancy this solution to be ugly, feel free to create a web component including this source so it’ll be hidden in the ShadowDOM. Instead, use a simple video element with a source child (in this case only one but be sure to add more to support all browsers) and an empty div element. The 2nd element is only presentational which might not be ideal but as it doesn’t contain any special role or content in it, it doesn’t harm either regarding accessibility or similar.

	<video controls="no-controls">
		<source src="http://media.xiph.org/mango/tears_of_steel_1080p.webm">
	</video>
	<div class="videohue"></div>

## The CSS

Regarding the CSS, an animation is needed showing your animated hue on the video. Use autoprefixer to make it working in older browsers that only support a prefixed animation syntax. Further on, set up your hue element to match the size of the video by positioning it absolutely above the video element, stack it over it and call the animation. Done.

	/*
	 * The Animation
	 */

	@keyframes colorize {
		0% {
			background: rgba(255, 0, 0, 0.5);
		}
		25% {
			background: rgba(0, 255, 0, 0.5);
		}
		50% {
			background: rgba(0, 0, 255, 0.5);
		}
		75% {
			background: rgba(0, 115, 115, 0.5);
		}
		100% {
			background: rgba(125, 0, 115, 0.5);
		}
	}

	/*
	 * Create the hue effect
	 */

	video {
		position: relative;
		width: 100vw;
		height: 100vh;
		object-fit: cover;
	}

	.videohue {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 10;
		animation: 20s colorize infinite both;
	}

So this is the explanation for this cool effect but as written initially, using current machines and browsers this causes heavy performance issues so you shouldn’t use it in production. If you want to have this effect now, please read the next section…

## The proper way to do it (currently)…

It’s simple: Just do the hue animation completely in the video editing / post-processing app of your choice (e.g. Adobe After Effects). This way, there’s no performance impact at all as you’re pre-processing the whole video colorizing effect in prior. But maybe some day we’ll have powerful enough machines and able to work with such techniques.

## Final words and other experiments

There’s not much to add to it. Except, I played around a bit more and here is another demo I want to show you. Currently does only work in Chrome. Thanks to [Tears of Steel](http://tearsofsteel.org/) for the open source video material.

<p data-height="480" data-theme-id="0" data-slug-hash="BLcHC" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/anselmh/pen/BLcHC/'>Fullscreen Video Hue</a> by Anselm Hannemann (<a href='http://codepen.io/anselmh'>@anselmh</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
<small>(CC) Blender Foundation | mango.blender.org</small>
