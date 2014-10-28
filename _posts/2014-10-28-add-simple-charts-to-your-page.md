---
layout: post
title: "Add a single SVG Chart to your Page"
img:
---

I recently made an improvement to [WDRL’s website](http://wdrl.info/) and wanted to integrate a pie chart. It was clear to use SVG here but as I use variable data I wanted to do this via JavaScript. There are tons of chart libraries but I was curious to find a small solution that works fine for just one or two charts on a site.

Interestingly, people always share jQuery plugins, huge chart libraries if you ask them for a solution. While this is fine if you have a lot of charts to display it probably serves a lot of overhead to websites that only need to show one simple chart.

My first approach was to use the [Snap.svg](http://snapsvg.io/) library which is awesome because it has built-in animations for all charts and therefore produces very nice results in nearly no time. The thing that bothered me was that the library itself is heavy with 70kb (minified, not gzipped) and that the integration of it felt a little bit akward from the coding style. That said, this is a completely personal perference that didn’t fit to me.

So I wrote it on my own. Thankfully there are a few tutorials that explain how this works. I adapted some code examples, [mainly this one by David Flanagan](https://www.inkling.com/read/javascript-definitive-guide-david-flanagan-6th/chapter-21/drawing-a-pie-chart-with) which helped me out on the mathematic formulae, and wrote my own code:


	var pieChart = function (data, width, height, cx, cy, r, colors, labels, lx, ly) {
		var svgns = 'http://www.w3.org/2000/svg';
		var chart = document.createElementNS(svgns, 'svg:svg');
		var total = 0;
		var angles = [];
		var startAngle = 0;
		var i = 0;

		chart.setAttribute('width', width);
		chart.setAttribute('height', height);
		chart.setAttribute('viewBox', '0 0 ' + width + ' ' + height);

		// Add all data values so we know how big the whole pie is
		for (i = 0; i < data.length; i++) {
			total += data[i];
		};

		// Now figure out how big each slice of the pie is. Angles in radians.
		for (i = 0; i < data.length; i++) {
			angles[i] = data[i] / total * Math.PI * 2;
		};

		// Loop through each slice of pie.
		for (i = 0; i < data.length; i++) {
			var path = document.createElementNS(svgns, 'path');
			var labelColor = document.createElementNS(svgns, 'rect');
			var label = document.createElementNS(svgns, 'text');
			var endAngle = startAngle + angles[i];
			var x1 = cx + r * Math.sin(startAngle);
			var y1 = cy - r * Math.cos(startAngle);
			var x2 = cx + r * Math.sin(endAngle);
			var y2 = cy - r * Math.cos(endAngle);
			var big = 0;
			var d;
			var labelShare = Math.round(((data[i] / total) * 100)) + '%: ';

			if (endAngle - startAngle > Math.PI) {
				big = 1;
			}

			d = 'M ' + cx + ',' + cy + // Start at circle center
			' L ' + x1 + ',' + y1 + // Draw line to (x1,y1)
			' A ' + r + ',' + r + // Draw an arc of radius r
			' 0 ' + big + ' 1 ' + // Arc details...
			x2 + ',' + y2 + // Arc goes to to (x2,y2)
			' Z'; // Close path back to (cx,cy)

			// Now set attributes on the <svg:path> element
			path.setAttribute('d', d);
			path.setAttribute('fill', colors[i]);
			chart.appendChild(path);

			// The next wedge begins where this one ends
			startAngle = endAngle;

			// Now draw a little matching square for the key
			labelColor.setAttribute('x', lx);
			labelColor.setAttribute('y', ly + 30*i);
			labelColor.setAttribute('width', 20);
			labelColor.setAttribute('height', 20);
			labelColor.setAttribute('fill', colors[i]);
			chart.appendChild(labelColor);

			// Add label to the right of the rectangle
			label.setAttribute('x', lx + 30);
			label.setAttribute('y', ly + 30*i + 18);
			label.setAttribute('font-family', '"jaf-bernino-sans", sans-serif');
			label.setAttribute('font-size', '16');

			// Add DOM node for the text to the <svg:text> element
			label.appendChild(document.createTextNode(labelShare + labels[i]));
			chart.appendChild(label);
		}

		return chart;
	};

	// ServicesChart
	var serviceChartWrapper = document.querySelector('#chart-a');
	var serviceChartData = [80, 10, 2];
	var serviceChartColors = ['#017E61', '#01A57F', '#02E4B0'];
	var serviceChartLabels = ['Label 1', 'Label 2', 'Label 3'];
	var servicesChart = pieChart(serviceChartData, 450, 200, 100, 100, 100, serviceChartColors, serviceChartLabels, 220, 50);

	// Append Charts to DOM
	if (serviceChartWrapper) {
		serviceChartWrapper.appendChild(servicesChart);
	};

[View the whole file here](https://github.com/anselmh/wdrl/blob/gh-pages/js/main.js). The script generates a SVG pie chart and takes variables for the data (that is used to cut the slices), label descriptions and colors for the slices. For sure this isn’t the most flexible solution and the code could be abstracted a lot more but I really wanted to cut file size down and create it to display a few pie charts and nothing more. It’s as small as 2kb (minified, not gzipped) so it saved me about 68kb. Of course, it lacks of the chart animation for example but this wasn’t my goal.

Hopefully that short article and script helps you a little bit. If you have improvements or suggestions, just let me know [via Twitter](https://twitter.com/helloanselm) or [E-Mail](mailto:hello@anselm-hannemann.com?subject=Feedback%20to%20SVG20%Chart20%Article)!

