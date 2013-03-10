---
layout: default
title: "Creating interactive Overlays for Adobe DPS with Edge"
---

**Adobe Edge (currently in 6th preview release) is a new product by Adobe to create HTML5-animations and interactive content natively in HTML5/JavaScript. Here is a tutorial how to use it for the Adobe Digital Publishing-Suite.**

Since [preview 6 of Adobe Edge](http://labs.adobe.com/technologies/edge/) you are able to directly export your Adobe Edge animations for Adobe DPS. Since it is only HTML it was possible to easily use it ever since but with the new export and InDesign CS6 you have all settings already set. Your overlay is set automatically and you only have to import the .oam-file into InDesign.

1. Build your animation in Adobe Edge  
![screenshot of building an animation in Adobe Edge](/assets/images/blog/2012-05-29_EdgeID/edge-1.png)

2. Go to "File &rarr; Publish Settings…" and select the tab for "InDesign/DPS". There you choose the destination for the export and the name as well as you can set a Poster Image (if none set, it will create one automatically). Press okay.
![screenshot of publish settings panel in Adobe Edge](/assets/images/blog/2012-05-29_EdgeID/edge-3.png)

3. After that you now go to "File &rarr; Publish" and Adobe Edge exports the chosen export-options.

4. Navigate in your Finder to the publishing folder. You will find an .oam-file. This is your zipped HTML container which now will be imported in InDesign.

5. Open up Adobe InDesign (CS6+) and create your new file (or choose an existing one). Then import your .oam-file using the Place-option. Then just place your frame on the InDesign page as you would do normally. InDesign automatically creates an HTML-overlay in your Overlay Creator panel.  
![screenshot of importing the Edge file in InDesign](/assets/images/blog/2012-05-29_EdgeID/edge-6.png)

6. View it on your iPad or on Desktop Preview (which has some bugs if you have very special animation, so it is safer to use a real device). Done.

Here are all the files to download and test. Please note this is under full copyright and only for testing purposes.

[Download Assets](/assets/files/blog/2012-05-29_EdgeID/dps-edge-tutorial.zip)