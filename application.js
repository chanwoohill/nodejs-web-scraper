var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');


var request = require('request');
request('http://substack.net/images/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    $ = cheerio.load(body);
    // console.log(body) 
 
// TO DO Make an HTTP GET request to http://substack.net/images/, 
// Parse the page’s html
// write a file to disk called images.csv File Permission/Absolute URL/File Type







  }


})
