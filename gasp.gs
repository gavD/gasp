/**
 * Emulates RequireJS for Google Apps Script
 *
 * Example:
 *   var test = require('testerator');
 *   Logger.log(test.hello);
 */
function require(lib) {
	var index = {
		testerator: 'https://gist.githubusercontent.com/phishy/e9e240d2e1c5e5d8208d/raw/7d339f28bfd6f7e42ace7b3681208ebb9e6c8e9b/testy.js'
	}
	var library = UrlFetchApp.fetch(index[lib]).getContentText();
	eval(library);
	var that = this[lib];
	delete this[lib];
	return that;
}