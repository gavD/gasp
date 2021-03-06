# Google Apps Script Packages (gasp)

A RequireJS-esque way to include code into your Google Apps Scripts

Example:

```javascript
eval(UrlFetchApp.fetch('http://pyknic-olivil.codio.io:8003/gasp.gs').getContentText());

var qs = require('queryString');
var obj = qs.parse('name=phishy&greeting=hello');
Logger.log(obj);
```

For testing and evaluation, you can hotload the gasp.js library:

```javascript
eval(UrlFetchApp.fetch('http://pyknic-olivil.codio.io:8003/gasp.gs').getContentText());
```

For better performance, include the following code the top of your Code.gs file:

```javascript
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
};
```

Currently, javascript libraries that have been rectified for use in Google Apps Script are hosted in this repository. If you would like to add a library, please send a pull request with an associated test.