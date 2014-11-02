/**
 * Main.js
 */

(function (global) {
	'use strict';

	// Check if we are dealing with mobile
	var isMobile = function () {
		return (window.innerWidth < 481);
	};

	window.addEventListener('DOMContentLoaded', function () {
		var navigation = document.querySelector('.header__nav');

		if (isMobile() === true) {
			navigation.classList.toggle('is-narrow');

			navigation.addEventListener('click', function () {
				navigation.classList.toggle('is-expanded');
			});
		}
	});

}(window));
