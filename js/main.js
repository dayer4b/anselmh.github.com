/**
 * Main.js
 */

(function (global) {
	'use strict';

	// Check if we are dealing with mobile
	var isMobile = function () {
		return (window.innerWidth < 481);
	};

	var isLandscape = function () {
		return window.matchMedia("(orientation: landscape)").matches;
	};

	window.addEventListener('DOMContentLoaded', function () {
		var navigation = document.querySelector('.header__nav');

		if (isMobile() === true && isLandscape() === false) {
			navigation.classList.toggle('is-narrow');

			navigation.addEventListener('click', function () {
				navigation.classList.toggle('is-expanded');
			});
		}
	});

	window.addEventListener('orientationchange', function () {
		var navigation = document.querySelector('.header__nav');

		if (isMobile() === true && isLandscape() === false) {
			navigation.classList.toggle('is-narrow');

			navigation.addEventListener('click', function () {
				navigation.classList.toggle('is-expanded');
			});
		}
	});

}(window));
