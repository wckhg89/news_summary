var express = require('express');
//var mecab = require('mecab-ffi');
var nodeSummary = require('node-summary');

var news = require('./routes/news');

var app = express();
var port = 3000;

app.use('/news/', news);

// mecab.parse('한글 형태소 분석기를 테스트', function(err, result) {
//   console.log (result);
// });

app.listen(port, function () {
  console.log("Server is runnig on " + port);
});
