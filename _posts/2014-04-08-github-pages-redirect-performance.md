---
layout: post
title: "Analyzing the GitHub Pages Waterfall Chart"
img: http://img.anselmhannemann.netdna-cdn.com/img/blog/gh-pages-waterfall-chart.png
---

Using GitHub pages is common practice today, especially using it as host for your Open Source project’s website. But also, websites like mine, rely on GitHub’s pages service. But recently I stumbled over a little caveat—which helps GitHub to prevent attacks.

_Please be aware this post is written as of April, 2014 and things might have changed when you read this post. You find the links with the proper information right here in the article._

While I already wrote about problems with [using GitHub pages as a CDN to serve static files](http://helloanselm.com/2013/use-a-cdn-on-github-pages/) I always was pretty convinced of the world-wide load performance with GitHub pages. As I optimized my website’s performance last week, I got a tweet from Andy Davies telling me a strange behavior about the initial load of the page:

<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p><a href="https://twitter.com/helloanselm">@helloanselm</a> <a href="https://twitter.com/WebPerfNews">@WebPerfNews</a>  1st waterfall redirect pattern seems quite common with GH pages</p>&mdash; Andy Davies (@AndyDavies) <a href="https://twitter.com/AndyDavies/statuses/450305634698035200">March 30, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I never have discovered this and it does not affect everyone. But as I could confirm it in the Webpagetests for [1st load](http://www.webpagetest.org/result/140330_RE_1b398b7fe4b8e6ca24088a7fd8ae1350/), [also from another location](http://www.webpagetest.org/result/140330_13_GJF/1/details/) it bothered me so I reached out to the awesome GitHub support.

Only a few hours later I got the answer to this behavior:

> What you're seeing is an intentional 302 redirect for GitHub Pages. Our DDoS mitigation technology samples the HTTP traffic in order to detect bots and DDoS precursors, and issues HTTP 302 responses to smoothly redirect users that are not bots.<br>
This particular redirect activity only happens for GitHub Pages with custom domains that are set up with DNS A records pointing directly to our Pages IP addresses. In order to avoid the redirects, you could use a sub domain, e.g. blog.example.com, instead of an apex domain, e.g. example.com, as a CNAME for your GitHub Page. This sub domain will be backed by our Content Delivery Network and won't return a 302.

This behavior is also somehow documented in the Github blog under [Faster, more awesome Github pages](https://github.com/blog/1715-faster-more-awesome-github-pages) and [Setting up custom domains with pages](https://help.github.com/articles/setting-up-a-custom-domain-with-pages).

## Comparing GitHub Pages to local hoster

Yesterday I got a newsletter from MaxCDN, the provider of my CDN, with announcements of new tools. They now offer a tool to [compare the ping of two sites](http://tools.maxcdn.com/) but also the [first and last byte of two websites](http://tools.maxcdn.com/http).

This came in handy to compare the first byte times between my local dealer site and my GitHub site leading to the following result which I already anticipated:

![Chart showing the GitHub pages response times being faster than locale’s compared world-wide](http://img.anselmhannemann.netdna-cdn.com/img/blog/gh-pages-redirect-performance-comparison.png)

While my locale provider is much faster serving the site in my own country, GitHub does a far better job even with the redirect if you look at the request response time from e.g. Asia or America. Due to the long distance to Germany (where my local provider serves the site from) it’s much faster to go to Githubs Firewall and Servers which serve from their ‘always local’ servers than going the long distance half around the world.

## What does that mean now?

If you use GitHub pages with custom domain depending on your configuration it might happen that people will experience a redirect and therefore a long response time before they can see your website.

If you are serving a locale community this means you might want to avoid using GitHub pages (state April, 2014) for your site. But if you’re serving a global community, you still might go better with GitHub pages than with your local provider. So as so often, it depends who’s your target audience.
