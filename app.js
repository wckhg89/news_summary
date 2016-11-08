var express = require('express');
var nodeSummary = require('node-summary');
var mecab = require('mecab-ya');


var news = require('./routes/news');

var app = express();
var port = 3000;

app.use('/news/', news);





app.listen(port, function () {
  console.log("Server is runnig on " + port);

  var text = '아버지가방에들어가신다';

  mecab.pos(text, function (err, result) {
      console.log(result);
      /*
          [ [ '아버지', 'NNG' ],
            [ '가', 'JKS' ],
            [ '방', 'NNG' ],
            [ '에', 'JKB' ],
            [ '들어가', 'VV' ],
            [ '신다', 'EP+EC' ] ]
      */
  });
});
