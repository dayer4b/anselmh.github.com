---
layout: post
title: "Firefox 16 developer tools update"
---

**In Firefox 16, Mozilla [added new functionality](https://hacks.mozilla.org/2012/08/new-firefox-command-line-helps-you-develop-faster/) to their own developer tools. This is amazing as these tools hadn't had much features yet.**

## media-query view

The new cool thing is the **media-query view** where you can view your website in different resolutions to **test your CSS3 @media-queries**. This is especially great as Firefox only resizes the website's viewport not the whole browser window. Why this is great? Because you are still able to use developer tools, as well as other browser-tabs in normal size.

I would say well done, Mozilla! :)

![](/assets/images/blog/2012-09-01/firefox_16_inspection-tools.jpg)

## Console

The other news is the **new console** where you can start controlling Firefox via console. **Open the console with Shift + F2** (add fn-key on OS X) and start typing.
Now, what can you do with it? [Chris Heilmann shows](http://christianheilmann.com/2012/08/15/browsers-have-a-presenter-mode-console-info/) a super-cool way of using console.info() for presentations. Get inspired!

## cookie edit

By typing in **"cookie"** you can also view cookies now and edit them in your dev-tools.

## screenshots

Or you **want some screenshots of the current view**? Type:

	screenshot heading.png 0 false h1

and you will get a screenshot in PNG-format of your h1-headline without anything around it (false) and do it immediately (0). Cool, he?

What do you think about these new features? I must say I like them a much and will reconsider using Firefox for development or debugging. :) Thanks to the Mozilla developers for this awesome work!