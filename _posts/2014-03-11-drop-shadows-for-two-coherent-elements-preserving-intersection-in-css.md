---
layout: post
title: "Drop shadow for 2 elements preserving the intersection in CSS"
---

The following code is what I figured out as a solution for drop shadows on two coherent elements while preserving the intersection in plain CSS. This is especially useful for a toggle slide-up/-down function used on a page.

<p data-height="268" data-theme-id="0" data-slug-hash="djbmp" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/anselmh/pen/djbmp'>Drop shadow for 2 elems preserving the intersection</a> by Anselm Hannemann (<a href='http://codepen.io/anselmh'>@anselmh</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
<noscript>
### HTML

	<div class="block">
	  <div class="innerblock">
		<p>To display a box-shadowed container including an overlapping Toggle button which ‘inherits’ the box-shadow of its outer element.</p>
	  </div>
	  <a href="#" class="block_toggle">Show / Hide</a>
	</div>

### CSS

	body {
	  min-height: 30em;
	}

	.block {
	  position: relative;
	  z-index: 10;
	  width: 80%;
	  height: 6em;
	  margin: 1em auto;
	  padding: 0.25em 0.5em;
	  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);
	}

	.innerblock {

	}

	.block_toggle {
	  position: absolute;
	  top: 100%;
	  left: 50%;
	  z-index: 20;

	  width: 8rem;
	  margin-left: -5rem; /* 4rem + 1rem, because padding is added up */
	  padding: 0.5rem;
	  text-align: center;
	  background: #fff;
	  color: #ab1113;

	  /* This adds the box shadow of the toggler */
	  box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.25),
				  3px 1px 3px -2px rgba(0, 0, 0, 0.25),
				  -3px 1px 3px -2px rgba(0, 0, 0, 0.25);
	}

![Screenshot of the result showing two connected elements with outer drop-shadows](http://img.anselmhannemann.netdna-cdn.com/img/blog/drop-shadow-coherent-elements.png)
</noscript>

Feel free to use it on your page, fork it or leave a comment on the pen.

As a variant you could also use pseudo-elements to add the box shadows on the left / right side. Also, the code for positioning the coherent boxes is only for demo—not necessarily the best for your use-case.
