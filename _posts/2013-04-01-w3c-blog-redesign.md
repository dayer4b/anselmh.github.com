---
layout: post
title: "The W3C Redesign in a nutshell"
published: false
---

**By accident I was forced to redesign the W3C QA blog. An interesting back and forward story.**

A few weeks ago I stumbled over a link on twitter which linked to the W3C blog. I almost had forgotten how outdated the design of it was. It looked like a website from the late 90s.
But I had problems to read the blog posts because the site uses "Gill Sans MT" font as main text font. This font unfortunately is not thought for such small reading texts and distracts the eye with its ugly rendering in small sizes.

That forced me to write a tweet about it mentioning the w3c team on twitter. A few minutes later they replied if I had a design proposal and as I sat in a train with not much work to do I thought 'hey, let's try if a simple design works'.

That's what I did: I just removed the old stylesheet and rebuilt the whole stylesheet using a bigger, better readable font-family optimized for screens. I dropped the background images and some of the colors and replaced them with simple greyscale and W3C blue colors to keep it stupid simple.
Then I added some nice features such as the search field will resize when it is focused with a nice transition.

I sent a screenshot to Coralie, who maintains the blog, and she liked it much. After a bit of conversation we dropped the idea to jump on HTML5 in markup because neither of us had the time to rewrite all MovableType templates for that. Also it has to work on all browsers including older InternetExplorers, so it was easier to just write a new stylesheet. I hope someone will soon find the time to upgrade the site to HTML5 and I will be happy to provide a proper updated stylesheet then.

