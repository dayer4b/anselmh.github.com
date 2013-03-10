---
layout: post
title: "A chance for WebP?"
---

**WebP ("Weppy") is this image format we heard much about. The format has been developed by Google and has a better compression than JPEG while it saves bytes on graphics also comparing to PNG. Unfortunately only 33% of the browsers support it yet. Time for a change…**

##First some explanations why we need the change

We are having a problem with our devices right now. As there are more and more devices in our world that differ in screen resolution, size, projection, the problem of resolutions is getting worse.
The super simple explanation is: There is one picture you want to display on a 320x240px screen and at the same time have this image printed (300dpi) or displayed on an iPad3 (2048x1536px). How in hell should that work with current file-formats? It won't ever.

This is why we decided that we need responsive images / media. I am part of the [W3C Community Working Group "responsive images"](http://www.w3.org/community/respimg/) and we came across many problems there. We discussed HTML-solutions, CSS-solutions, Javascript-solutions, Polyfills as well as about responsive image formats. Trying to come up with a standard solution is not as easy as you might think it is.
But our point today should focus only on one of these topics:

##Responsive file formats

The community thinks we should have a file-format which is able to serve different resolutions by the mobile-first concept. And this is what I am looking for as well. So we discussed if we could somehow take care of this issue in our W3C group and came to the point that we can't.
We are not responsible for file-formats but we are for HTML in this case. So we decided to outsource this problem. But it is in my personal interest that this topic reaches the right people: the browser vendors and the developers of WebP.

##Why WebP?

You now might wonder why this is only about [WebP](https://developers.google.com/speed/webp/). I talked to many people and each and every time we came to the conclusion that only WebP provides the power and possibilities to implement that concept.

First, I would like to mention that it is proven that the concept can be implemented into an image format. A similar approach can be found in the [MrSID-format](http://en.wikipedia.org/wiki/MrSID) and it is partially implemented in JPE2000. This MrSID-format is able to "stream" images, in this case satellite pictures.

And now we need an image format which is good regarding to image quality (WebP is already for photos and graphics), which is universal (WebP combines JPEG and PNG / graphics and photos in one format), outputs small files ([WebP does](https://developers.google.com/speed/webp/docs/webp_lossless_alpha_study#results)) and which is actively developed. All these point perfectly fit to WebP.
The file format is actively under development and as the market share is not that big yet we have the chance to now expand the format featuring this streaming behavior.
If you would like to use WebP today, you are already able to do so: Chrome and Opera support WebP natively. For all others some tough people developed a [WebP-shim for Firefox](http://antimatter15.github.com/weppy/demo.html) and even a full [Javascript-powered WebP-decoder](http://webpjs.appspot.com/).

##Spread the message

I am sure that if WebP would offer such a feature, this format would become famous and maybe replace JPEG and PNG as a file format on digital devices.
**So please**

- **share this post**
- **ping the WebP community and developers**
- **ping the browser vendors and Google**

**This is a topic that would solve many problems for us web developers (no additional technique needed for responsive images in most cases), for the mobile network providers (saves bandwidth) and for the users (performance).**

Thanks in advance for helping this topic to be addressed!
-Anselm