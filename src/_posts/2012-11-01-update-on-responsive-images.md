---
layout: default
title: "Update on responsive images"
---

**After being quiet for several weeks here on my blog (except the weekly reading lists) I want to share some of the recent things that have happened on responsive images. There has been quite some progress since the last article.**

The [W3C ResponsiveImagesCommunityGroup](http://www.w3.org/community/respimg/) lead by [Mat Marquis](https://twitter.com/wilto) has grown to 168 participants as of today. It is great to have so much support and the support by group members has been awesome so far.

But to be honest still many people don't see a reason why a solution for responsive images is needed. We gained responses like that: Can't this be achieved already with SVG? Isn't that possible with CSS3? Hey, there is [this cool new approach for Retina here](filamentgroup.com/lab/rwd_img_compression/#commentNumber7) &ndash; did you saw it?  
That means, we did a bad job on educating people. And that is why Mat and Marcos built the **[responsiveimages.org](http://responsiveimages.org/)** website. This site is an overview of:

- [What is the picture-element?](http://picture.responsiveimages.org/)
- [What is the srcset-attribute?](http://dev.w3.org/html5/srcset/)
- [What are the use-cases for each?](http://usecases.responsiveimages.org/)
- [Demo space](http://demos.responsiveimages.org/)

Talking about the demo page: **We have a [working Chromium Build](https://github.com/yoavweiss/RespImg-WebCore/downloads)** by Yoav Weiss which can make use of the picture-element already. Isn't that amazing what a community can do on its own? Of course this still is far away from perfect but it is a start and makes clear that it is no problem to integrate it in today's UserAgents.

## W3C TPAC Meeting in Lyon

Today was a very important day for the Reponsive Images group. This week, the W3C has its annual meeting called #TPAC in Lyon.

Fortunately Mat has talked with W3C to get a slot for the responsive images problem. It has been confirmed that they get the chance to talk about this at TPAC and Marcos and Yoav who were in Lyon did a great job [presenting the current situation to the W3C](http://responsiveimagescg.github.com/meta/presentations/TPAC2012/). Afterwards there was quite a discussion: [Read the MinutesList of the meeting](http://www.w3.org/2012/11/01-html-wg-minutes.html#item03).

## What to do next?

We gather user evidence of our current picture-element implementation and are searching for a combination with srcset.  
I will **create a FAQ**-document where facts are explained, why picture is so important to have and usual questions are answered. This will be coming soon to the respimg-page I hope.  
Mat is now refactoring the demo-overview-page to have a better look and we try to improve the page and its content in the next days. We are still searching for good examples where responsive images work and demos showing this use-case.

And if you know **somebody working on the WebP-format**, please: We want to talk with them! We have quite some ideas and would love to discuss them with WebP developers. Thanks in advance for any hints or contacts! :)

**[&rarr; Discuss on Google Plus](https://plus.google.com/111125333979619018462/posts/gsqzhH4CAYh)**