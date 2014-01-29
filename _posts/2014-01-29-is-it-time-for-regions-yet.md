---
layout: post
title: "Is it time for CSS Regions Yet?"
---

**The past week a lot of discussion came up about CSS Regions. Initiated by [Håkon Wium Lie’s article on AListApart](http://alistapart.com/blog/post/css-regions-considered-harmful) saying “CSS Regions considered harmful”, followed by a [counter-article](http://flippinawesome.org/2014/01/27/css-regions-matter/) and [a decision by Blink to drop CSS Regions for now](http://news.cnet.com/8301-1023_3-57617840-93/reversing-course-google-rejects-adobe-web-publishing-tech/) the web community is now split in half—half of them in sympathy of CSS Regions—half of them saying it’s currently a hacky technique. And that is the true problem.**

About two years ago [Adobe presented a new technique](http://html.adobe.com/webplatform/layout/regions/) to the world: [CSS Regions](http://dev.w3.org/csswg/css-regions/). They provide what has been possible in layout applications for decades now. With Regions it’s possible to let text flow into or around vector shaped paths. To present the new technique, Adobe implemented it into a fork of Chromium (which is WebKit/Blink driven). Since then, a webstandard has been written and is currently available as Editor’s Draft. Microsoft implemented Regions into Internet Explorer 11 (`-ms`-prefixed), Safari implemented them into Safari 7 and iOS7 with `-webkit`-prefix.

Håkon Wium Lie, one of the founders of CSS, wrote a very opinionated article in which he states that CSS Regions are considered harmful for several reasons. I will list them in short here:

- “Regions use Dummy `<div>`s”
- “Regions are not responsive”
- “Confusing text flow”
- “Verbosity”
- “Code reuse”

Quite a list, right? The problem is, they’re simply not the full truth. As many opinion pieces or articles stating something is “harmful” it only shows one perspective. In this case, against CSS Regions.

But let’s face the issues and track them down.

First, as I already mentioned, CSS Regions are currently an Editor’s Draft. This means, they are not a standard yet and it also means, they need to be improved to become a standard. This alone implies that the current status will *have* some issues but it also implies they’re likely being fixed soon.

### Additional markup

I am absolutely no fan of unnecessary, presentational code in our markup. This was the first thing I didn’t like about CSS Regions when I saw them first time in London, two years ago. But I know, currently there is no real way to get around that with the current toolset of CSS. Adobe wants (or wanted?) to tackle that apparently—they started writing on [CSS Pseudo-Elements Level 4](http://dev.w3.org/csswg/css-pseudo/) in 2012. Unfortunately there hasn’t been any progress since then.

For me (personally), CSS Regions is considered ‘hacky’ as long as they need additional presentational markup. But bear in mind, it’s not CSS Regions’ fault but only a dependency on the extension of the Pseudo Elements spec.

### Responsiveness

If you look at Adobe’s CSS Regions demos they’re all the same: Great looking layouts that are presented to the users on a big screen. But they never (at least in the four presentations I’ve seen) showed them to work responsively. In my opinion, this has been one of the biggest problems of CSS Regions—Adobe not showing how this works while everybody is talking about Responsive Web Design. They missed an opportunity here but gladly [Brian Rinaldi wrote an article how to use Regions in a Responsive Design](http://flippinawesome.org/2014/01/27/using-css-regions-in-responsive-designs/). You see, this is not impossible.<br>
I still think CSS Regions’ responsiveness is not very good but it’s not impossible to get it work and there’s always room to improve it.

### The Confusing Text flow

Well, I won’t write much about this but looking at Håkon’s example images I realized this is completely only his opinion. I find his proposal massively confusing and like the current spec much more. So this is highly debatable.

### Verbosity

A good call. Verbosity seems to be the latest thing to kill new webstandards. It was the same for the `<picture>`-element before finally some more people realized that verbosity often also means simplicity. And, in my opinion, webstandards should be simple to follow and to understand.<br>
Seeing this from a performance view, gzipping the webpage should make this a non-issue very easily. And you should serve your page gzipped anyways.

### Code Reuse

CSS Regions style currently isn’t appliable to any new page and text. This is true but is that what we want when we use CSS Regions? I don’t believe so.

## Why Blink is dropping it

After some thoughts on where Regions stand today and what they can or cannot do, I now want to explain why Blink engineers decided to drop CSS Regions from their engine.

When you look at the things [where Blink should go in 2014](https://groups.google.com/a/chromium.org/forum/#!msg/blink-dev/Z5OzwYh3Wfk/IWooaY5FZowJ), it is mainly speed and performance. The reason why Blink dropped CSS Regions is because they currently perform badly in Blink. I don’t know much more details about the implementation but I know that IE10/IE11 and Safari 7 are super fast browsers and they implemented CSS Regions in there. Therefore I believe it is an issue with Blink alone but that shouldn’t matter.

It is totally reasonable to drop an highly experimental technique which is not a finished webstandard yet because of whatever reason. It might not always be great for people who are working and fighting for that feature but you can’t deny that a fast changing specification can cause massive workload and problems.

I don’t wonder that CSS Regions have bad performance. They are a powerful toolset which requires massive calculations and of images and text along vector paths. Now apply this for a responsive design and imagine how this can affect a browser’s performance…

But isn’t it just rational to drop such a feature if it doesn’t work right now *and* is still experimental? In my opinion it is.

What I wonder about is, why people are starting to say “As Blink drops CSS Regions all is lost now and it’s going to die as a standard now”. Regions won’t die just because Blink drops them for the next time. Regions are still important. Blink is only one engine and there are many others that support the development of Regions right now. Keep on improving the webstandards.

If they’re good enough and perform well, I’m sure they will get implemented sooner or later. The best thing you can do is to improve the spec, test cases, file bugs and improve the webstandards and proposals itself. Thanks for caring!
