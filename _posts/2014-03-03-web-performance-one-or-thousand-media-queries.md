---
layout: post
title: "Web Performance: One or thousands of Media Queries?"
---

**The question if multiple media queries hurt performance pops up very often.
Because naturally as a developer you think it can’t be good for performance if
you let the browser evaluate them often. Out of curiosity, I researched a bit on
that and found interesting insights…**

I hadn’t any clue how to track down media query evaluation of a browser (you
can’t do that with DevTools), except forking the core and adding timers to it
(which is no option as I don’t know any C++). So the logical step for me was to
ask engineers on twitter about it:

<blockquote class="twitter-tweet" lang="en"><p>Do you know if there’s impact on CSS evaluation performance if CSS has 10 or 100 Media-Queries inlined? +<a href="https://twitter.com/yoavweiss">@yoavweiss</a> <a href="https://twitter.com/addyosmani">@addyosmani</a> <a href="https://twitter.com/paul_irish">@paul_irish</a></p>&mdash; Anselm Hannemann (@helloanselm) <a href="https://twitter.com/helloanselm/statuses/423452770528952320">January 15, 2014</a></blockquote>

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/helloanselm">@helloanselm</a> If there is a measurable performance impact, I&#39;d consider it a bug :)</p>&mdash; Yoav Weiss (@yoavweiss) <a href="https://twitter.com/yoavweiss/statuses/423510524714708992">January 15, 2014</a></blockquote>

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/helloanselm">@helloanselm</a> In theory, it sure seems like it. Might be worth trying to measure, tho (If you have the time &amp; will to do so)</p>&mdash; Yoav Weiss (@yoavweiss) <a href="https://twitter.com/yoavweiss/statuses/423514135679082496">January 15, 2014</a></blockquote>

## A look into the source

This is a pretty theoretical but still helpful answer because it led me to the
next step: Have a look at the source. In times where everything is on GitHub it’s
easy to dig into the source of anything that is open-source. WebKit and Gecko are,
so their source code is to be found on Github.

Both engines do serialize and strip out duplicated media-queries so they only
need to evaluate each media query once. Also they cache the queries so that they
can re-use it later on. You can view source of [WebKit](https://github.com/WebKit/webkit/blob/master/Source/WebCore/css/MediaQuery.cpp) or [Gecko](https://github.com/mozilla/gecko-dev/blob/master/layout/style/nsIMediaList.h) here.

Of course this doesn’t mean there is no difference but looking at the source there
shouldn’t be a performance issue. Also, I guess there is no performance lack when
evaluating hundreds of different media queries that is recognizable / measurable.

## Conclusion

It doesn’t matter if you use one big or multiple media-queries in your code
assuming your values are mostly the same. It shouldn’t matter if your values are
different for each(!) of your hundreds of media-queries but could affect performance
(found no way to track this down). The only thing I could add here is that using
many inline media queries often is that they’re [increasing the size of your CSS](http://benfrain.com/inline-or-combined-media-queries-in-sass-fight/)
(unless your gzipping it) and that affects performance as it’s loaded blocking.

So all in all, happy media-querying!

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
