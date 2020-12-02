"use strict";

// app code - Boot stuff when DOM is loaded
$(function () {
	console.group('App');
	console.log('DOM Loaded.');
	console.log('Settings:', (typeof $.site.settings !== undefined ? $.site.settings : null));
	console.groupEnd();
});
