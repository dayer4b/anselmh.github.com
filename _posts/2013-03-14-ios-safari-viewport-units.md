---
layout: post
title: "iOS Safari Viewport units"
published: false
---

**Viewport units are a great improvement for coding responsive design. Unfortunately Apple breaks it.**

The current iOS Safari builds (6.1.2) do not render viewport units like `vh` or `vw` correct if you use them inside of media-queries.

This is a show-blocker as they interpret the units but don't calculate them properly so a pixel-fallback will not work here.

The only thing you can do here seems to drop the units. Even worse, if you won't drop them completely you cannot rely on feature-detection here and have to do browser sniffing instead.

Here is the test for it: [viewport units on iOS with media-queries]()

Also have a look at [@derSchepp's viewport unit test](http://hg.csswg.org/test/raw-file/e0275ecc7fb5/contributors/christianschaefer/submitted/css3-values/viewport-units-css2-001.html) in CSSWG  test repository. This is the important result:

	vh length applied to max-height: getComputedStyle returns a non-zero px-based value
	assert_equals: expected "non-zero px-based value" but got "10vh"

This specific bug seems to apply to all WebKit browsers so this is a general WebKit bug.