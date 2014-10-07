---
layout: post
title: "Parsing Iconfont Characters Automatically"
img: //img-anselmhannemann.netdna-ssl.com/img/blog/iconfont-parsing.png
---

Recently I had to fix some issues in an iconfont. In the end all was tracked down to a corrupt WOFF font file but during the debugging process I found a neat solution to display all characters including unicodes of an iconfont automatically.

> Be aware that the following technique will only work if you have a SVG file of the font.

A common problem with iconfonts is that an icon is somehow related to a unicode character. Usually you display icon using pseudo-elements in CSS requiring the unicode of the character. But how do you determine what icon is used on which character code if you are not the creator of the font?

In a current project we use a lot of components and write visual tests for each of them. Except, the iconfont hadn’t had a proper one. For that test I needed to display all characters of the font somehow but didn’t know (and don’t want to) how the characters are referenced. But more importantly, I thought, would be extendability, when later on, characters are added.

## How I came to my solution

This was the time when I thought about somehow it must be possible to parse a webfont to get that information or, worst case, running through a unicode table and show the results where applied. Fortunately the latter isn’t needed as we have a SVG font. SVG is written as ‘readable’ markup and so is a SVG icon-font. Each character has a DOM node with attributes and the vector points that define the character. And here we start:

## The SVG WebFont

The following code snippet is a sample of a character from an SVG icon font:

	<?xml version="1.0" standalone="no"?>
	<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
	  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" >
	<svg xmlns="http://www.w3.org/2000/svg">
		<defs>
			<font id="vsir-iconfont" horiz-adv-x="250" >
				<font-face units-per-em="100" ascent="80" descent="-20" />
				<glyph unicode=" " horiz-adv-x="50" d="" />
				<glyph unicode="!" horiz-adv-x="100" d="M83.522656250000011
				  38.628515624999999 C85.970996093749989 38.628515625000006
				  90.867675781250000 38.628515625000006 93.316015624999977
				  38.628515625000006 C94.026953124999977 38.628515625000006
				  94.737695312500023 z" />
			</font>
		</defs>
	</svg>

The interesting part here is the `<glyph>` element which wraps each character and its attribute `unicode="!"`. We now have an identifier to get every glyph of the font (the DOM element) and its unicode reference which here is our unique identifier (as a font can only have one glyph for one unicode-expression).

## Displaying the Icons in our HTML

To display the font icons we need three things:

1. The HTML Markup
2. The Scss/CSS styles that actually display the font through generated content
3. The JavaScript that dynamically fetches all available glyphs of the font

### The HTML

Easy. Besides the reference to our CSS Style Sheet in the head of the HTML we only need two lines of HTML:

	<div id="svg" style="display: none;"></div>
	<table class="icons">
		<thead>
			<tr>
				<td>Symbol</td>
				<td>Unicode (CSS)</td>
			</tr>
		</thead>
	</table>

The first is the container where we want to load our SVG font into to read the DOM. We will do this via AJAX load to ensure the font is loaded when we run our additional scripts through it. I tried some things with iFrames (objected because of no cross-browser `seamless` support) and `<object>` (didn’t work too good and I don’t like using the object element) but in the end the scripted solution works best for automated tests in my opinion.
As we only want to access the DOM but don’t want to see the DOM we need to add the `display: none;` attribute here.
The second, the `<table>` element, is where we want to display our icons along with the corresponding unicode character.

### The Scss/CSS

First, we want to include our webfont with the CSS3 `@font-face` rule. This is an example using Scss as preprocessed CSS language.

	@font-face {
		font-family: iconfont;
		src: url('iconfont.eot');
		src: url('iconfont.eot?#i') format('embedded-opentype'),
			 url('iconfont.woff') format('woff'),
			 url('iconfont.ttf') format('truetype'),
			 url('iconfont.svg#') format('svg');
		font-weight: normal;
		font-style: normal;
	}

We now want to display all the things so we need to add the unicodes that are available through the SVG DOM as generated content.

	// CSS Code here
	td {
		font-family: iconfont;
	}


### The JavaScript part

I use jQuery here but if you don’t need to support older browsers you can easily replace the jQuery methods with the native ones.

	$(window).load(function () {
		var svgns = 'http://www.w3.org/2000/svg';
		var svgUrl = '../fonts/iconfont.svg';

		$('#svg').load(svgUrl, function (svgUrl) {
			// Insert content of the SVG file in our invisible DOM node
			$('#svg').append(svgUrl);

			// Find all glyph nodes in the SVG file
			var svg = $('svg').find('glyph');
			// Add unicode escaping for CSS
			var unicodePrefix = '\\';
			var iconOutput = '';
			var icons = [];
			var i = 0;

			for (i=0; i < svg.length; i++) {
				var unicode = svg[i].getAttribute('unicode').toString();

				icons.push(unicode);
			}

			for (i=0; i < icons.length; i++) {
				var iconChar = icons[i].charCodeAt();

				iconChar = iconChar.toString(16); // Convert to string format
				iconOutput += '<tr><td class="icon--' + icons[i] + '">' +
				                icons[<i></i>] +
				                '</td><td><code>' +
				                unicodePrefix +
				                iconChar +
				                '</code></td></tr>';
			}

			$('.icons').append(iconOutput);
		});
	});

## The Result

I’ve created [a JSBin demo](http://jsbin.com/ziwol/7) using the [FontAwesome](http://fontawesome.io/) icon font used by Bootrstrap. _Note: As I’m relying on an external CDN here, I hope this demo still works when you view it._

<a class="jsbin-embed" href="http://jsbin.com/ziwol/7/embed?html,css,js,output">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>
