---
layout: post
title: "Lessons learned pushing a new webstandard and how important it is to stay classy."
img:
published: false
copy: true
referrer: https://medium.com/@helloanselm/lessons-learned-pushing-a-new-webstandard-and-why-getting-involved-is-the-only-way-to-change-5b8d733f81b3
---

I always read W3C or WHATWG bashings. I even [wrote one myself](https://helloanselm.com/2012/why-the-whatwg-somehow-sucks/). I’m (better should say was as I’m not very active at the moment) part of the [RICG](http://ricg.io/), a movement that tried and successfully managed to get the first developer based need into an official webstandard. And the RICG started because W3C and WHATWG [failed to understand](http://lists.w3.org/Archives/Public/public-whatwg-archive/2011Aug/0293.html) [our needs](http://lists.w3.org/Archives/Public/public-whatwg-archive/2011Aug/0241.html).

_Note: The following paragraphs are my opinion and my impressions and don’t reflect the whole RICG. I only take this example because I learned a lot during this process._

But we failed, too. A lot. And it was because we were not used to how web standards work and how they need to work. We forgot about a lot of edge cases, we forgot to talk with browser vendors about our proposals, we forgot about writing tests, specifications (we didn’t even know how to write a specification).
If you wonder why such an abstract specification is needed: You probably know about browser inconsistencies of standard implementations, don’t you? If there hadn’t been such detailed specifications, we would have a hell of a mess in our browsers because each one would implement it the way they want. It happens all the time but gladfully only in details. But have a deeper look at accessibility in HTML, CSS which had been neglected for a long time and only now as people care about it, [the issues arise](https://github.com/medialize/ally.js#allyjs). They clearly show what happens if there’s no specification setting rules on implementation.

Gladfully, the RICG got so much attention from developers that W3C and WHATWG backed us finally and gave us advice. Ian Hickson, known for declining and being very critical about new standards, warned us about rushing through the specification and publishing it. As annoying as it was, only due to such comments the specification writers cared about more details which got pretty important when Yoav Weiss implemented the specification into the Blink engine. The first implementation of the `srcset` parser was very buggy indeed and brought up a few new bugs in the specification.

So while the whole story of responsive images turned out very well as we saw the need, got the direct feedback from developers and the group finally published it as webstandard, it wouldn’t have happened so smooth and well working without the help of the W3C, WHATWG and browser vendors.

It’s of course a hard way to propose something new. I know because every single time [I do so](http://lists.w3.org/Archives/Public/www-style/2013Aug/0303.html), I get responses that it’s either a niche problem or hard to solve and therefore not possible. But this doesn’t mean you need to stop there.

If you deeply care about that thing, stay strong, advertise it and try to get more use cases on the way to show that it’s important. If you do care, make a proposal that could actually work, write a prolyfill, a demo and reach out to developers and webstandard people to get feedback. It’s not ignored these days. But also keep in mind that it might indeed be a niche problem only you have. And if it is, it can’t and shouldn’t be a webstandard.

If you care about having duplicate / overlapping standards, take this as your mission and participate. Solve these problems, you’re not the only one out there having this opinion. But if all only complain and no one does something, nothing gets improved.

One lesson that I learned early from my parents: _Don’t swear to support your statement._ Don’t offend other people call them ‘dumb’, ‘useless’ or other bad words. It doesn’t help anyone (besides yourself maybe) and only creates more problems than it helps. I may even make your whole statement weak. Just talk in a serious and normal tone without swearing. Only then your arguments will be taken to improve things.

The last thing I want to mention here: As [Hixie](https://medium.com/@Hixie/i-wish-things-were-that-simple-df0d2a786ecc) wrote already — even if it’s hard sometimes and you need to discuss again and again, _participating in standards can be fun, can help people and can help get things implemented_. You just need to do it.

Cheers,
Anselm