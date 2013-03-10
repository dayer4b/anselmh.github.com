---
layout: post
title: "My Coding Style and Guidelines"
---

Harry Roberts was the first one [publishing his coding style for HTML/CSS](http://csswizardry.com/2012/04/my-html-css-coding-style/), [Hans-Christian Reinl](http://drublic.de/blog/my-coding-style-and-guidelines/) followed the call to write down its own and now I will share my style, too.

I really should mention that this is only how I work. It doesn't mean by far that you should follow my style here from this day on but maybe I do some things you might use yourself in future projects.

Please let me know if you think that there are ways to do certain things better or in a more understandable way through comments.

# Philosophy

My own coding philosophy is simple: Make it as simple as it can be but understandable for everyone without explaining it in comments. The code should be self-explaining. If it is not, then use short comments to explain what you did. If your code is clean and self-explaining it will semantically be correct in most cases.

# Frameworks

I personally thought for a long time that I do not want to use frameworks because they are limiting my freedom of code. As I do not like to rewrite existing code for other purposes but prefer to write my own code I do not like many frameworks that have default output of code. This is why I do not like most CMS either and prefer [MODX](http://modx.com/) or [Kirby](http://getkirby.com/).
But it totally makes sense to share ideas and reuse existing best practices. The [HTML5Boilerplate](http://html5boilerplate.com/) exactly does it in the way I like it &ndash; it provides me a default minimal output of HTML I have to write on every website anyway. Not more, not less.

# HTML

As HTML5 is not as strict in its syntax requirements as it was before, we could experiment with a lot looser code-style: &lt;li>s are not requiring closing, some attributes do not require quotes, tags not needing to be lowercase and elements like &lt;hr />s not needing to be self-closing and much more. Above what I prefer or why I do not use the short-style:

## Unquoted attributes

The possibility to use unquoted attributes is no option for me. In HTML5 you're able to write <code>&lt;p class=myclass></code>. This is valid syntax and works for an example like this. But as I recommend to *write maintainable and scalable code*  I prefer writing with quotes. That allows me to add additional classes or other values later on. An unquoted attribute-value with space wouldn't be possible, so this is no option for me.

## No self closing tags

In HTML5 it is not necessary anymore to add trailing slashes to self-closing tags. I prefer to set them because it tells me this element is closed then but this is personal choice and I would never give an advice which one to choose here.

## Optional closing tags

As mentioned before you don't have to close tags like &lt;li>. This is a nice time-saver and as I use separate lines and tab-spaces this doesn't screw up your code-readability. But unfortunately most editors, IDEs, CMS and other software do not understand this behavior and could screw up the whole code I prefer to not do this in live-projects.
In fact, I use this style for private use when writing my HTML5-based presentation slides etc. And fortunately this works in Design-mode of Dreamweaver CS6 so this is like building the slides in Powerpoint.

## Code indentation

I prefer using tabs because spaces are bad to maintain.

## Whitespace

I often changed my style on whitespace in the past. Now I use a lot of whitespace in the last year. This is mainly because of better code readability and maintainability. I just section the html-elements by applying or avoiding whitespace:

	<dl>
	    <dt></dt>
	    <dd></dt>

	    <dt></dt>
	    <dd></dt>

	    <dt></dt>
	    <dd></dt>
	</dl>

	<div class="promo">
	    <p><strong>Pellentesque</strong> senectus</p>
	    <a href="#" class="btn">Lorem</a>
	</div>

<hr>

# CSS

So that was my HTML coding-style but what about my CSS? This is a bit more tricky as it is another language. And there are preprocessors etc which also have their very own style.

## IDs

Some people lie Harry Roberts say "never use IDs". I do not. I think IDs are valid and I use them regularly in projects. They are unique identifiers and that is what you have to consider when using IDs. If you are not as experienced with CSS I'd recommend to just use classes but if you know what you do, IDs are a great help to identify single unique elements on a website. But always be careful and think if about it twice. Often you can use a class instead of an ID.

## Comments

This is where I differ from many developers. While many developers say comments have to be written in code to explain what I wrote, I am very careful with comments. You might find not more than 10 comments on a website / stylesheet sometimes in my sites. This is because I always try to write self-explaining code. That means either the elements explain theirselves or the classnames do that. I think this is the most effective and understandable way.
Of course I write basic comments to section the stylesheet for quick finding the right section.

	/* /NORMALIZE */
	/* MAINSTYLE */

## The shared section

I try do this exactly like Harry Roberts. The shared section defines default values that apply to many basic selectors. Harry explained it as variables in vanilla CSS:

	a,.brand,h1,h2,h3,h4,h5,h6{
 	   color:#BADA55;
	}

## formatting

I do it the standard way:

	selector{
	    color: #fff;
	}

CodeKit does the minify for the production files.

## Vendor prefixes

I like the way writing vendor prefixes in the clean way. Although it needs a bit handcraft formatting it is worth it:

	selector{
		-webkit-box-sizing: border-box;
		   -moz-box-sizing: border-box;
		    -ms-box-sizing: border-box;
		     -o-box-sizing: border-box;
		        box-sizing: border-box;
	}

# Summary

So that basically is my code-style. I hope it is helpful for some of my readers and maybe inspires you at some point but be aware that I would never would suggest you to change to my style. If you read [Harry's](http://csswizardry.com/2012/04/my-html-css-coding-style/), [Hans'](http://drublic.de/blog/my-coding-style-and-guidelines/) and my code-style you can see that we three differ completely in some points. So reconsider what is the best for *you*…

If you do write your own, please tweet it at me with the hashtag [#codestyle](http://twitter.com/search/#codestyle), that way everyone can easily keep track of any posts.