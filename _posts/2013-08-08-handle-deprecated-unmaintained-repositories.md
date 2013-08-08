---
layout: post
title: "Handle Deprecated and Unmaintained Repositories"
published: true
---

It's very likely you set up a public and maybe Open Source repository on github or services like bitbucket. Those are services where developers find all their needed Open Source stuff: Libraries, Polyfills, Code examples. But a big problem is, one never really knows if a repository is still actively maintained.

This article takes on several steps how to deal with repositories that you aren't developing actively anymore. I encourage you to invest the 5-minutes declaring your repository as 'inactive' so people know this might not be up-to-date anymore.

## Updating the Repository's title

Most people just look at a repository's name. Therefore, inactive repositories should reflect this in their title byprefixing them with **[DEPRECATED]** or **[INACTIVE]**.

## Updating the Metadata

The first and easiest approach is to update Metadata. Write a notice to your README.md file directly as first Headline:

> [DEPRECATED] Your Repo name

or write inactive instead:

> [INACTIVE] Your Repo name

You can then have a follow up paragraph with more details about the state of repository (still usable or not recommended to use anymore).

## Adding a console message

Another approach is to give a decent hint to developers using your code in the Web developer console. But be aware that not every developer uses DevTools and Console so this is likely to be overseen. I think it is a good additional way to inform users about the deprecation by adding a message like this to your JavaScript:

	console.warn('Important notice: This library is deprecated and not actively developed anymore.');

## 'Removing' the code from the repository

If your repository is deprecated and the code you provide might be even invalid or non-working you might consider removing the code. Don't do that! Instead, just move the code away from master branch (clean this one) into another branch so people don't see the code by default but still can access it. You might want to tag the last good working release with git-tags.

## Update Articles and Blog posts

Don't forget to update your blog posts and articles. They are likely to be found in Search engines and people might want to know instantly that this is deprecated, especially if you provide a zip or tarball download (remove them).

## Link to Alternatives

If there is another, still maintained library doing the same thing, add a reference to it on your library so people find an alternative solution for their problem.

----

_**You don't need to do all of those things but if you only do one or two of those points you will help many people using your library or finding it through search engines. Thanks for helping keep the web clean and up-to-date!**_

_By the way: If you're near Zurich, Switzerland you should attend the [WebPlatformDocSprint](http://lanyrd.com/2013/web-platform-doc-sprint-zurich/). It's fun and helps to improve the web._
