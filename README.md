# Google Apps Script Packages (gasp)

A RequireJS-esque way to include code into your Google Apps Scripts

```
var gasp = UrlFetchApp.fetch('http://gasify.io/gasp.js').getContentText();
eval(gasp);

var qs = require('queryString');
var obj = qs.parse('name=phishy&greeting=hello');
Logger.log(obj);
```