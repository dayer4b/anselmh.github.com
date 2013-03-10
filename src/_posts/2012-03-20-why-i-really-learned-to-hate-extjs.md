---
layout: default
title: "Why I really learned to hate extJS"
---

**MODX CMS started to use extJS when developing MODX Revolution. The whole backend uses it. Because it's super-easy to build a huge backend interface with the framework, they are totally stuck with it. The problem with it is, that extJS is big and unhandy.**

So when I started to use MODX 2.0.0pl first, I recognized that the backend is gorgeous. It was easy to handle as a user and for a CMS backend it is one of the most beautiful backends I've ever seen. Everything is structured well and we even have context-menu to use.

Then after using Revolution some months and building several websites and even custom plugins, I started to quarrel with extJS. I recognized that the backend is super-slow when using it to develop a site. I am a power-user and click several times a second some times. I want sites to load as quick as possible.  
This is where extJS really failed: It is a powerful but heavy framework. I think a framework which has a pageOnLoad of 4.30secs or better 5.9secs to fully load the manager is unacceptable. Also this is in 2.2.0pl2 where we nearly have the 4x speed due to caching etc. as we had in 2.0pl of MODX.

Another thing I started to really hate extJS is the full javascript-experience. Things are always animated even where it makes no sense and sometimes I have to wait on an action without getting a response like a spinner.  
When I develop a site or write just a blog-entry I like to use several browser-tabs with my backend open. I like having one tab with my blog-entry I'm writing on, one with another similar article and maybe another one with some site-structure open. This is nearly impossible when using the MODX manager made with extJS. We don't have a right click anymore where I can say: open in new tab which often would also fail because there's just a "javascript:;" command not a real URL. And I cannot press cmd / strg + click to open a button in a new tab. If I do press indeed, my current site is gone regardless I'v saved my information or not. This, for me, is unacceptable.

**Please, people, build good interfaces!** Spend some more time on your interfaces and make them work good. Especially when it is about accessibility and usability.  
There are reasons that I didn't blog much about MODX recently. extJS problems are one of them. Processwire for example uses just jQuery and plain HTML and works ways better for me than any extJS site.

*EDIT* I just wanted to be clear: This is not against MODX but as MODX uses extJS I use this as example. extJS for me just doesn't work. And all arguments that it is easy for developers don't count: You never should combine backend and frontend development. Why? Because it makes no sense from a UX perspective.