var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var url = 'http://substack.net/images/';

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body);

    var stream = fs.createWriteStream("image.csv");
    stream.once('open', function(fd) {

      $('tr').each(function (){
        var row = $(this);
        var permissions = row.find('code').first().text();
        var url = "http://substack.net/" + row.find('a').text();
        var filetype = url.split('.').pop();
        if (/.+\/$/.test(filetype)) {
          filetype = "dir"
        }
        console.log(permissions, url, filetype);
        stream.write(permissions + "," + url + "," + filetype + '\n');
        });
    stream.end();
    });
  }
})
