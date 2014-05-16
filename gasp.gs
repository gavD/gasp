/**
 * Emulates RequireJS for Google Apps Script
 *
 * Example:
 *   var test = require('testerator');
 *   Logger.log(test.hello());
 */
this.require = function(lib) {
	var index = {
		testerator: 'http://pyknic-olivil.codio.io:8003/modules/testerator.js',
        queryString: 'http://pyknic-olivil.codio.io:8003/modules/queryString.js'
	}
	var library = UrlFetchApp.fetch(index[lib]).getContentText();
	eval(library);
	var that = this[lib];
	delete this[lib];
	return that;
}