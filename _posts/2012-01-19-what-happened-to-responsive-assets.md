---
layout: default
title: "What happened to responsive assets?"
---

**Already half a year ago I asked in the WHATWG and W3C mailing list about responsive images. Since then quite a few discussions sprout but if we reflect what happened, we can sum up: nothing.**

For those who don't know what this is all about, I'll explain quickly.

Since we've been able to build "[responsive](http://www.alistapart.com/articles/responsive-web-design/)" websites using CSS3's [@media-queries](http://www.w3.org/TR/css3-mediaqueries/) to fit the styles of a website to device-screen viewports we only had one big problem left: We are able to set specific styles for mobile phones, tablets, large screens or even more for monochrome displays but nearly all of the early-adopters ran into problems during testing.  
If you ever used a smartphone and a modern website you might have noticed that it takes several seconds to load a page.

The big problem is that we only can use one single image file and use this this to many different layouts via HTML. That also means we're serving a 1600px x 1200px image to a large monitor with a super-high-resolution of maybe 2560px x 1980px as well as to a simple "feature-phone" or smartphone with resolutions between 320px and 640px. With that in mind you can imagine what's wrong here: file-size. So there actually was, and still is, the need for a solution for that problem.

## First (and best) approach: an adaptive image file-format

This would be the very best solution at all. We would have a file format for our assets (means images, graphics) which can serve different resolutions and along with that different file-sizes to a browser.  
That sounds pretty cool but a bit unrealistic to you? Then I should mention there *are* some file-formats doing exactly this for video. So there already exist formats doing such stuff which made me (and [some other people](http://twitter.com/derSchepp)) think it should be possible to do. I think it would be possible to do that within WebP, the image-format Google tries to introduce.  
But of course there's the lack of browser support. All major browsers (Chrome, Firefox, Safari, Internet Explorer, Opera) have to support this format. And as we have seen on h.264 / ogg codecs this is something causes lot of trouble in WHATWG.

## Responsive HTML5 image tag attributes

So I came up with another idea. This idea just came into my mind because if we would get this file-format solution in some years, we need an approach for the time being.

This was the time I created [this gist snippet](https://gist.github.com/1158855) and shared via twitter:

	<img src="myimage_xs.jpg" media-xs="(min-device-width:320px and max-device-width:640px)" media-src-xs="myimage_xs.jpg" media-m="(min-device-width:640px and max-device-width:1024px)" media-src-m="myimage_m.jpg" media-xl="(min-device-width:1024px)" media-src-xl="myimage_xsl.jpg">

After some discussion I shared my idea to the WHATWG mailing list and ended on [W3C's mailing list](http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2011-August/032977.html) later. There was some discussion about it but essentially the most important fact was to see that most people didn't even understand that we need this urgently.  
After that, discussion came up on some [blogs](http://drublic.de/blog/responsive-media/), [Mozilla's Etherpad](https://etherpad.mozilla.org/responsive-assets), [jQuery Standards Group](https://groups.google.com/forum/#!topic/jquery-standards/rl8886ZRs8o) but I never heard something since months now.

<s>
## Update: Another valid approach

There’s [another approach](http://ikelewis.com/the-future/) which might be a bit handier than mine because code is a bit cleaner. This syntax is also used on video and audio tag already to provide different file/codec-formats.

	<img src="large-default-file.jpg">
	    <source src="smaller.jpg" media="max-width:600px">
	    <source src="tiny.jpg" media="max-width:320px">
	</img>

Although I’m not sure what happens to this approach when using old user agents or old parsers but in general there seem to be no problems about backwards-compatibility, too.
Here’s the explanation of syntax from the author (Isaac Lewis, http://ikelewis.com/):

This suggested spec change would create a syntactic placeholder for mobile browsers to find mobile versions of image URLs. Inside each ‹img› tag would be a ‹source› tag, containing a "media" and "src" parameter. The "media" parameter would contain the media query string that would trigger the use of the alternate image URL.  
Legacy browsers would simply use the default URL provided by the wrapper ‹img› tag. Mobile browsers could look for ‹source› tags contained by ‹img› tags, and validate the media query to determine which URL to use to load the image.

I edited this gist [now here](https://gist.github.com/1668965) to improve the syntax and compatibility to common and already used style:

	<img src="large-default-file.jpg" media="screen and (min-width:601px)" alt="this is alternative text for default file" title="this is title for default file">
	    <source src="smaller.jpg" media="screen and (max-device-width:600px)" alt="this is alternative text for smaller file" title="this is title for smaller file">
	    <source src="tiny.jpg" media="screen and (max-device-width:320px)" alt="this is alternative text for tiny file" title="this is title for tiny file">
	    <source src="monochrome.jpg" media="monochrome" alt="this is alternative text for monochrome file" title="this is title for monochrome file">
	</img>

This provides the possibility to use real media-queries as syntax and detect also features like monochrome display (Kindle etc.).  
We also could use alt and title text there. Thing is, browser-vendors need to implement it that way so the current alt text and title text is replacing the original one. But I think this isn’t a problem.
</s>  

** UPDATE2: This is a cancelled solution as it's not backwards-compatible due to how old browsers work with self-closing img-tag:

>The <img> tag can’t be opened up because of the way legacy browsers treat it as a self-closing tag.
>	<img>
>	more stuff
>	</img>
>The </img> tag would be treated as another img element in the DOM. And none of the contents between the <img> and the </img> would be considered as child elements. And a </img> with no src would hurt performance. See http://www.nczonline.net/blog/2009/11/30/empty-image-src-can-destroy-your-site/
>
>You have to have a new tag.

*from [JohnAlbin](http://www.alistapart.com/comments/responsive-images-how-they-almost-worked-and-what-we-need/P20/#26)

## Excerpt: other methods with PHP and JavaScript

There are several attempts to offer responsive media via PHP or JavaScript to the browser. This is okay but doesn't work as standard solution for the problem.  
*Point is:* We need a W3C standardized solution. And for that we need *semantically valid code*. As we've seen on the [Mozilla Etherpad](https://etherpad.mozilla.org/responsive-assets) in discussion panel we talked about semantics over there and with that most solutions won't work as they require additional non-semantic HTML elements.

## Responsive images and SEO or advertising

[Remi Grumeau](http://we-are-gurus.com/en) [mentioned a problem](http://drublic.de/blog/responsive-media/#comment-237) with responsive media for Google SEO purposes. He asked how this will affect image search results if there are different image-sizes.  
This is a valid argument but if we look at my proposed code-snippet there won't be a real problem as we define the "master-image" through the common src-tag on img-tag. We only add additional attributes to the element. So normally it shouldn't affect Google's crawling results at all and if, Google needs to adapt its logarithm to that.

And about responsive advertising there is a weblog article about that here: [Responsive Ads](http://www.ravelrumba.com/blog/responsive-ad-demos/). This is a pretty good proposal on how to deal with advertising on a responsive website. And as we would have the feature to have different files in one tag it only can be better for ads to serve device-specific ads.

## How to solve the problem

So all in all we need a valid proposal for the [W3C mailing list](http://lists.w3.org/) to get this started. I think my email request in July, 2011 wasn't clear enough to start discussion.

So let's start documenting a full and valid example of how responsive media could work in a standardized, semantically correct way.

**Are there any people willed to help me writing this proposal?
I would be pleased to have *at least one co-author* on board!**

<hr>

## <a name="update1">UPDATE1</a>

Mat Marquis wrote [an article for A List Apart](http://www.alistapart.com/articles/responsive-images-how-they-almost-worked-and-what-we-need/) about responsive images containing the most recent approaches, too. There's a huge discussion about the whole topic with many comments about basic stuff already dropped because of issues or lack of information.  
I've updated my article here with some valid comments:

### responsive image format 

This is a comment about what's "the real and only final solution". I confirm with that.

>REAL FUTURE SOLUTION
>The only real solution is an image format that is designed to download progressively to a specified size and potentially use spare bandwidth to download higher detail levels to allow for smooth scrolling. >Essentially images would appear to work in a similar way to Google maps but all image behaviour is contained within the original image file and the code to download the appropriate level of detail is controlled by the server and the browser and is outside the general control of the developer.

*by [tesmond](http://www.alistapart.com/comments/responsive-images-how-they-almost-worked-and-what-we-need/P10/#14)*

### Prefetching in Chrome

Then there's this comment about another problem with images loaded onload. We need a defer, async and lazy attribute for all media-elements in HTML!

>There is also another problem related with images. Lazy loading. With HTML5 we got async attribute to script element but no way to postpone image loading, force client to wait until image is really needed. >For example imagine CSS3 based carousel with 10, 100 KB each sized images. We need to fallback to JS code to inject images to the page. In my opinion there should be something like test.png, when visible browser should request it and then apply all css rules (including effects, like transitions).

*by [xorock](http://www.alistapart.com/comments/responsive-images-how-they-almost-worked-and-what-we-need/P30/#38)*

and [another problem faced with modern browsers](http://www.alistapart.com/comments/responsive-images-how-they-almost-worked-and-what-we-need/P40/#41) like Google Chrome who uses prefetching of resources before parsing HTML. This would lead to download of all offered images (from small to large ones in responsive-element). **But this has to be addressed by the Chrome devs and we shouldn't stop on developing this standard due to this edge-case!**
