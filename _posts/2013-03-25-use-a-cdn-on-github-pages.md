---
layout: post
title: "Use a CDN on GitHub pages"

---

**After switching my content from a [CMS to Jekyll](/2013/blogging-with-jekyll/) based github pages I still had to deal with some drawbacks. Now I am using a CDN for static files…**

## Isn't github a CDN?

Yes it is. Github serves your content of github pages via several servers around the world which basically means it is a Content Delivery Network.

Unfortunately as it only serves static files you are not able to modify headers or similar things through a server configuration file. As github is mainly made for serving code repositories that are likely to change often, they set cache expires very low. A CSS or JavaScript is set to 10mins which isn't ideal performance-wise.

## To the help: A real CDN

Some weeks ago, a guy from [MaxCDN](http://www.maxcdn.com/) reached out to me if I am interested in using their CDN for my website. After some correspondence we came to an agreement that they will sponsor my website with a free account while I give Kudos in my footer.

I now set up my CDN which was so easy that I couldn't believe it. First when I considered the change I thought of the drawback to deliver the images to another remote repository somehow. Luckily the smart guys from MaxCDN took care of that by providing "[pull and push zones](http://support.netdna.com/pullzone/custom-integration/)". That means for your existing site you just set your domain to the CDN one after have set up the custom pull zone in dashboard. My calls looked like this before:

	<img src="/img/anselmhannemann.jpg">

Now I just changed the path to:

	<img src="http://img.anselmhannemann.netdna-cdn.com/img/anselmhannemann.jpg">

and have my CDN image. Everything else is done by MaxCDN. How easy is this?

By the way – their entry plans are from ~$40/yr so it's cheap to get it.

## The results

1. My load time decreased again as I am now serving from the nearest servers available to the users. It seems they have more at MaxCDN than github offers.
2. Images cache is now set to 12 months instead of 10 minutes. A super improvement in performance for recurring visitors.
3. My PageSpeed increased now to 93/100 points. What still holds me back are Webfonts. But with a load time (unload) of 418ms on my home page I might have one of the fastest websites currently available.


## Thank you!

Thanks a bunch, [MaxCDN](http://www.maxcdn.com/) for hosting my assets! It is a pleasure to recommend your service.

[<img src="http://img.anselmhannemann.netdna-cdn.com/img/netdna-color.svg" width="300">](http://www.maxcdn.com/)