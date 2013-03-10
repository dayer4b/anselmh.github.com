---
layout: default
title: "What's wrong with Adobe Proto"
---

**When Adobe published Adobe Proto I was thrilled. They promised a wireframe / prototyping tool that makes it easy to set up wireframes for websites on an iPad. The concept indeed is super simple but the app itself has many bugs.**

And because of these bugs, [Adobe Proto](http://www.adobe.com/products/proto.html) currently won't work for many people. It may work for some projects and some people but for me, it wouldn't. And here is why:

# Pixel based layout

While we are currently desigining fluid layouts and multi-device experiences, Adobe Proto only allows a preset of fixed layouts. You have the choice between 960px, 992px, 768px, 320px and 480px. No fluid option is given while Adobe Dreamweaver CS6 got the fluid-grid layout option. Why is this not included in Proto? Shouldn't be much effort.

# Not optimized for responsiveness

It would be very cool to have one wireframe with more than one views. This could easily be achieved by adding more drawing areas to one file. With that we could handle responsive webdesigns inside Adobe Proto.

# Grids are insuffiecient

The grids that Adobe Proto has included are insufficient and missing a configurator or customize panel. I currently only have the possibility to choose 8, 10, 12, 14, 16 columns. What the hell are these options for? The only one I can imagine to use is 12 columns. But why isn't there an option for 1, 2, 3, 4 columns? Or even 24? These missing defaults along with collumn gutter of 8, 10, 16, 20, 24, 28 are not really helpful. The problem is, I have to choose one of them and cannot insert my own values.

# No alignment to grid

![screenshot of Adobe Proto App with wireframe on it](/assets/images/blog/2012-07-12_Proto/dw-proto_0-2.png)

After you've created a new document based on a grid system you start drawing your layout. You might think that if you draw, the box would align magically to the grid system. No, you're wrong. Adobe Proto doesn't align your box to the grid system what makes your layout look awful and results in wrong CSS code afterwards. This is a major drawback if you want to do a wireframe that you can use as codebase.

# Creative Cloud App not available, <s>Dreamweaver officially not ready for Proto</s>

While Adobe announced on Creative Cloud presentation that you can use the whole product family including the new Touch apps, this is only partially the truth. It is possible to use Proto and of course it is possible to use Adobe Dreamweaver. But you might think you can use both together and edit your wireframes from Proto inside of Dreamweaver. But the gateway still is not available.  
In fact you can get it working manually. You just have to install the [beta plugin for Dreamweaver from Adobe Labs](http://labs.adobe.com/technologies/protoextension/) and download your cloud files from creative.adobe.com manually. After installing the plugin you can open the .pro (Proto) files in Dreamweaver. The plugin will convert the wireframe into HTML and CSS code and you can start editing your site.

**UPDATE**: Since of today Dreamweaver 6.0.1 update coming via Creative Cloud supports opening Adobe Proto files. Adobe integrated the former plugin into the Dreamweaver core.

# The output (code)

![screenshot of Adobe Dreamweaver with html output on it](/assets/images/blog/2012-07-12_Proto/dw-proto_1.png)

But if you are looking at what the Dreamweaver extension extracted from Proto wireframe, you will think again if you really want to use this tool for code.

As written before the boxes don't align to the grid. The converted CSS is totally blown-up by unnecessary properties and pixel-based layout stuff. But it misses a browser-reset or normalize. The HTML is a mix between HTML5, XHTML and wrong tags.  
I set up a headline in Adobe Proto by choosing the headline-text-tool in the App. Now the result of this is a p-tag which is definitely not a headline-tag.

![screenshot of Adobe Proto App with wireframe on it](/assets/images/blog/2012-07-12_Proto/dw-proto_2.png)

So my conclusion to Adobe Proto ist: If you only do a quick wireframe that isn't used for anything else than to share an idea, Adobe Proto might be a great help for you. If you want to use it for a real layout, wait for a maybe coming update that fixes all the things I wrote about. This tool is not ready yet. Sorry Adobe!