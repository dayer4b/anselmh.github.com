---
layout: post
title: "Testing mouse events and CSS states with PhantomCSS"
---

In a large-scale ongoing component-driven front-end project it is likely that you’ll encounter regression bugs. This is the point where you should consider adding regression tests. I want to show you how to test your layout using [PhantomCSS](https://github.com/chrisgladd/grunt-phantomcss) (a tool using [CasperJS](http://casperjs.org/) (1.1) and [PhantomJS](http://phantomjs.org/) to make screenshots and compare them) and even **emulate CSS states**.

See how to set up and [configure PhantomCSS](https://github.com/chrisgladd/grunt-phantomcss#the-phantomcss-task) in the official docs and [read how to write basic tests](https://github.com/chrisgladd/grunt-phantomcss#basic-visual-tests). _(I’ll not explicitly cover this but focus on my advanced test)_

### TL;DR;

The following is a test case to find regression bugs in your component including CSS states like `:hover`, `:active`, `:visited`. This shows a basic test case that shows the general approach, not every single state in detail:

	casper.start('http://localhost:8001/test/visual')
	    .then(function () {
	        phantomcss.screenshot('.selector', 'screenshotname');
	    })
	    .then(function () {
	        this.mouse.move('.selector a.button'); // Trigger :hover state
	    })
	    .then(function () {
	        this.mouse.down('.selector a.button--large'); // Trigger :active state
	    });

	casper.on('mouse.move', function(resource) {
	    phantomcss.screenshot('.selector', 'screenshotname-hover');
	});

	casper.on('mouse.down', function(resource) {
	    phantomcss.screenshot('.selector', 'screenshotname-active');
	});

### The Explanation

So what does it do? First, we start by creating a new instance of Casper with `casper.start()`. We add our location as parameter—in my case I started a server on port `8001` via [`grunt-connect`](https://github.com/gruntjs/grunt-contrib-connect) and point it to my comonent’s visual test file.

You then can add your chain of actions / tests which should be executed by CasperJS. The `then()` function makes sure this is done in the given order as by default Casper handles things asynchronously. Inside, specify your test case. This can vary from simply creating a screenshot (like in the example above) up to a [complex JavaScript test](http://casperjs.readthedocs.org/en/latest/quickstart.html#now-let-s-scrape-google) to trigger JS driven actions in your component. `phantomcss.screenshot()` creates a screenshot at the [configured screen size](https://github.com/chrisgladd/grunt-phantomcss#responsive-layout-testing) (configuration is done in the grunt task).

Now the interesting part is when I say to move the mouse to a specific selector. This lets me trigger a `:hover` state as the mouse is now over my element with the styled hover-effect. The problem is, simply doing a screenshot now wouldn’t work as for whatever reason, the hover state isn’t triggered when PhantomJS makes the screenshot.

So I investigated searching for solutions, found many misleading but similar questions on Stack Overflow. Finally, after reaching out on Twitter, Ian Feather pointed me to the [CasperJS Events](http://casperjs.readthedocs.org/en/latest/events-filters.html), by luck. And, he was right. In fact, you need to listen to the mouse event with a casper event listener and then trigger the screenshot:

	casper.on('mouse.move', function(resource) {
	    phantomcss.screenshot('.selector', 'screenshotname-hover');
	});

### Looks easy, didn’t you know that?

This isn’t a big deal I think but still I didn’t found a single resource leading me to this solution to I thought to better write this down for everyone.

Hope you find it useful and if you have feedback, please let me know on [Twitter](https://twitter.com/helloanselm) or via [E-Mail](mailto:hello@anselm-hannemann.com?subject=Feedback:%20Testing%20CSS%20with%20PhantomCSS).
