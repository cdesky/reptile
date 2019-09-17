var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.get('/', function(req, res) {
  request('http://www.cnblogs.com/galenyip', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      $ = cheerio.load(body); //拿到body，作为选择器
    }
  });
});

app.listen(3000, function() {
  console.log('listening on 3000');
});