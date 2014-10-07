---
layout: post
title: "The (missing) Awareness Of Pagesize"
---

I just read that article which gives an overview on what average websites consist of and compares to responsive websites:
[What are Responsive Websites made of?](http://www.guypo.com/mobile/what-are-responsive-websites-made-of/).

What I saw there made me think what is wrong with the average website:

![infographic about the balance of HTML, CSS, JS and Images on responsive vs non-responsive websites showing average of 1.4MB, 2/3rd images, too much JavaScript](//img-anselmhannemann.netdna-ssl.com/img/blog/rwd-page-reqs-by-ftype-res.png)

First, it is about **the pagesize itself**:
1.4MB is the average. I cannot imagine why so many websites need so much 'information' that they are this large. A normal website shouldn't be larger than ~500kb I'd say, many can be even smaller. Surely there are some pages where this does not apply but even on heavily image driven websites you can achieve a pagesize of 1.4MB (spoken about a website I've build recently with many images).

Second, the **image size problem**:
This is a bigger problem because we have to start with optimizing images with tools like [ImageOptim](http://imageoptim.com/) or [Adept](https://github.com/technopagan/adept-jpg-compressor). This way we remove the clutter from the image which is not needed for web.
But then, when we look at the image size chart on Guy Podjarny's site we see that images are more than 2/3rd of the whole site. The problem isn't the size itself but that images are optimized for high resolution displays or Desktop-sized images that aren't needed on mobile. This is what I've been always telling about why we need [responsive images](http://responsiveimages.org/).
Recently [performance people jumped up to the train](http://www.stevesouders.com/blog/2013/04/26/i/) which increased awareness again. Jason Grisby last week wrote on [what to consider on a RWD site](http://blog.cloudfour.com/sensible-jumps-in-responsive-image-file-sizes/) when it goes to images.
Yoav Weiss – our RICG browser-implementation-hero – wrote a test repository called [Sizer-Soze](https://github.com/yoavweiss/Sizer-Soze) to show the actual impact of using non-resized images on a responsive website.

Third, the **CSS and JavaScript size**. This made me gasp for air when I saw the _average(!)_ file size of CSS and JS used on a normal website. 220kb of JavaScript is the average on a single random website out there. This is incredibly much especially when you consider this is not the maximum but average! I've built several websites, some of them heavily driven by JavaScript but none of them reached the 200kb marker.
What does this tell us? I assume people don't write JavaScript but include jQuery for ease. Then, searching for a specific functionality, they find a plugin that has this feature and include it. They don't care about the cost and size of this plugin or wether it would have been simple to write the functionality itself. This is where we need to crate awareness to the normal developers: You should only use what you need. And don't include jQuery just because you need a form validation or animated property. There are many options besides including a big framework.

**To improve web performance we not only need to be aware ourselves about the cost of a single image or a jQuery plugin but also need to tell other developers how to easily improve the performance of their website.**
This sometimes can be a tough job but I encourage you to do it anyway. It helps you and all other people around the world.