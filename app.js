var express = require('express');
var nodeSummary = require('node-summary');
var news = require('./routes/news');

var app = express();
var port = 3000;

app.use('/news/', news);

app.listen(port, function () {
  console.log("Server is runnig on " + port);
});
