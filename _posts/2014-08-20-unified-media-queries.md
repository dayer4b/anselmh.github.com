---
layout: post
title: "Quick Trick: Responsive Print Media Queries"
---

Do you write `@media screen` into your media query? Stop it.
It limits you more than it usually helps.

If you have a look at this example:

	@media only screen (min-width: 43em) {
		/* Your CSS here */
	}

This of course will work on your smartphone, tablet and desktop as expected.
But if won’t apply if you, for example, print the page. Because you’ve limited
the query to only apply to `screen`.

Did you really intend that? I guess not. It’s more effort to write and limits you.
Instead, write this:

	@media (min-width: 43em) {
		/* Your CSS here */
	}

This will apply to all media types, even print. The cool thing is, all your
adaptions for mobile will also apply to printed stuff. Because no, DIN A4 isn’t
the only format people will print. Some print C4, DIN A5 / A3 or a totally
different paper format and you layout will adapt accordingly.
