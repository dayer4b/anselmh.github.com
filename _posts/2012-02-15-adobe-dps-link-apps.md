---
layout: post
title: "[Adobe DPS] (not) target your .folio with external links on iOS"
---

**This article describes why you cannot target your folio / your articles in your folio within iOS with a simple URL-scheme.**

>>"Is there anyway to attache an .ics (ical appointment) to a link in the Digital Publishing Suite?" <cite>by Anonymous</cite>

>I don’t think so. If possible, try to make it in a webcontent and let the iPad decide what to do. <cite>by Johannes Henseler</cite>

iOS offers the possibility to use [x-callback-url](http://x-callback-url.com/specifications/) for links on iOS. This means you can actually link from a link viewed on an iOS device to your target-app or even to specific articles.

As you might already know, the Digital Publishing Suite has its own protocol since some versions called navto://. Within that you are able to reference articles and pages of your .folio:

	navto://<folioname>:<pagenumber>

So as you might be able to register iOS procotols for your App regarding to iOS Developer guide, Adobe decided to not offer this possibility by providing one general protocol named "navto" instead of using a protocol with a valid unique-scheme like

	"navto_<appuid>://<folioname>:<pagenumber>

If they had done this, we could actually set URLs to inside-folios regardless how many Apps are on the iPad because each of them would have its unique URL scheme. This – in my opinion – seems very useful but we don't actually can influence this. And I don't think Adobe will change now, after many ppl using the old schemes, the scheme again.

Sorry, these are not good news but I wanted to share why this is impossible currently.
-Anselm