---
layout: default
title: "Why the WHATWG somehow sucks!"
---

**Yesterday I found out that the WHATWG has failed once again. That seems nothing new to some people because there were several issues with the WHATWG recently but here is another topic where the WHATWG completely seem to have failed: Responsive images.**

Mathew Marquis posted a [new topic in our W3C responsive images group](http://www.w3.org/community/respimg/2012/05/11/respimg-proposal/). This blew me away because he wrote that in WHATWG IRC chat they were discussing a solution for responsive images in HTML.

You all know (if you are a reader of my blog or follow me) that this is what the W3C group and I discuss since 9 months now. I started the topic back in August 2011 on the WHATWG mailing list. This is where all the solution had its beginning and somehow (I cannot imagine why) I thought people from WHATWG are reading this mailing list. And surely I know they do because they even replied to the topic which had been in mailing lists for months (last post with solutions was end of January this year). So here we have discussed [my proposed extension of the img-tag](https://gist.github.com/1158855), the new element now called picture-element and many many other solutions.

Now after 9 months, the WHATWG IRC channel [proposed yet another solution](http://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-May/035746.html) with the awful syntax looking like this:

	<img src="face-600-200@1.jpg" alt="" set="face-600-200@1.jpg 600w 200h 1x, face-600-200@2.jpg 600w 200h 2x, face-icon.png 200w 200h">

Now, this solution had its roots when Apple released the "new iPad (3)" and needed to serve responsive images. They started to use a similar syntax in CSS. No standard. I don't know if any of the people how now proposed this syntax are working on real websites and ever thought about standard-ways. It does not seem so because this syntax is hardly maintainable, awful and not easy to write. Additionally we never had such a syntax in HTML or CSS before.

To make it short: The topic appeared in our W3C responsive images group and now after only 2 days we already had 160 replies stating nearly all that the WHATWG-proposal is total crap and the picture-element is in favour. Also [my img-tag extension](https://gist.github.com/1158855) would be way better than the proposal.

Now please discuss here or [in the group](http://www.w3.org/community/respimg/2012/05/11/respimg-proposal/) what you think about this topic.

*Disclaimer: I won't offend any of the WHATWG-members with the title of my blog post. But this topic should not have appeared at all and I only want to make this better in the future. So please, before posting and discussing new solutions, search the internet, first read the existing solutions and topics and then you might not even start a new discussion. This is the first thing I learned when I started using the internet and forums. Thank you for listening!*