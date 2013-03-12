---
layout: post
title: "Blogging with Jekyll, Markdown and GitHub pages"

---

**As already announced I now switched my engine behind the whole site. From MODX CMS I am now using static files generated through Jekyll and rendered on GitHub's pages CDN.**

## What has changed?

Pretty much changed. Beginning with the backend which I dropped completely in favor of Jekyll, followed by rewriting the complete frontend code including a complete design change. It is a fresh, new website with more important information about me.

## Dropping the backend and switch to Jekyll

This was a rather long decision I've made over the last few months. Until now, I had MODX as CMS. It powered my blog and the homepage. While a CMS works great for most people it didn't for me. I just didn't need the whole backend stuff. Also I couldn't write my posts on mobile very good due to the heavy manager.

By switching to [Jekyll](https://github.com/mojombo/jekyll) I now have simple Markdown files. I write them in [iAWriter](http://www.iawriter.com/mac/) on Desktop, Mobile, Tablet synced via Dropbox. So I now can edit from everywhere and by pushing the files to github pages via Jekyll I get ready html-files as output while keeping all original data. This is flexible and I can always switch hosts to my own server or to another CDN.

## Frontend-Code

The frontend code is again based on the still incredible [HTML5Boilerplate](http://html5boilerplate.com/) but I am using a customized build of [Hans-Christian Reinl's init project](https://github.com/drublic/init). This combines Sass language for CSS with several more cool things. I just dropped grunt.js because it does not make too much sense to use grunt.js as build tool while having Jekyll and ruby already for that.

## Performance

[I recently optimized the old website for better performance](/2012/high-performance-blog/). I now rebuilt the whole website with performance in mind. For that I do several things:

### Prefetch DNS for all requested domains

	<link rel="dns-prefetch" href="//helloanselm.com">
	<link rel="dns-prefetch" href="//fonts.googleapis.com">
	<link rel="dns-prefetch" href="//ajax.googleapis.com">

### Load Webfonts asynchronously

This is a personal choice but as I am relying on a CDN for serving the webfonts I preferred the asynchronous loading of the fonts. This is done by the following code snippet.

<pre class="language-javascript"><code>
WebFontConfig = {
	google: { families: [ 'Istok+Web:400,700:latin' , 'Lora:400,700:latin' ] }
};
(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();
</code></pre>
[View as gist](https://gist.github.com/anselmh/5133497)

This all results in a super fast load time. As the site is served through a CDN, delays are much less than before when serving everything from just German servers. Even on mobile networks the site loads very fast.

## URL Redirects

This is a bit trickier than usual and as GitHub pages only serve static content you are not able to send 301 redirects or similar. This is with what you have to deal when moving to static pages. You can either just use the same URL structure as you've had before or you can redirect the user via JavaScript on your 404.html page.
I've chosen to to the latter. My URL structure is now simpler than before. I don't care too much about Google and therefore it does not matter that my previous links will break here. For the users I rewrite my URL with a small JavaScript pattern in my 404.html so they still get my blog posts.

## File bugs or contribute

As I am hosting and serving the site on GitHub, you can [file issues to the repository](https://github.com/anselmh/anselmh.github.com) or send a pull-request. I am happy to discuss specific topics in the bug tracker with you.

## Comments

As before I don't provide a possibility to comment. Due to change to Jekyll this won't be possible anymore except by using tools like Branch or discourse. But I prefer using Twitter, app.net, Google Plus or the GitHub issue tracker for that. So please use these tools instead.