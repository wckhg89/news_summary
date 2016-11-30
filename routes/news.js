var express = require('express');
var request = require('request');
var summaryArtilce = require('../middleware/summary');
var nounArticle = require('../middleware/noun');

var router = express.Router();
var summary = require('node-summary');


router.route('/articles/summary/:id')
  .get(function (req, res, next) {
    var url = 'http://news.zum.com/internal/m/articles/';
    var id = req.params.id;

    url += id;

    console.log(url);

    request(url, function (err, response, body) {
      var data = JSON.parse(body);
      summaryArtilce.summarize(req, res, next, data.title, data.content);
    });
  });

router.route('/articles/sort/:id')
  .get(function (req, res, next) {
    var url = 'http://news.zum.com/internal/m/articles/';
    var id = req.params.id;

    url += id;

    console.log(url);

    request(url, function (err, response, body) {
      var data = JSON.parse(body);
      summaryArtilce.getSortedSetences(req, res, next, data.content);
    });
  });

  router.route('/articles/noun/:id')
    .get(function (req, res, next) {
      var url = 'http://news.zum.com/internal/m/articles/';
      var id = req.params.id;

      url += id;

      console.log(url);

      request(url, function (err, response, body) {
        var data = JSON.parse(body);
        nounArticle.noun(req, res, next, data.content);
      });
    });


    router.route('/articles/sortednoun/:id')
      .get(function (req, res, next) {
        var url = 'http://news.zum.com/internal/m/articles/';
        var id = req.params.id;

        url += id;

        console.log(url);

        request(url, function (err, response, body) {
          var data = JSON.parse(body);
          nounArticle.sortedNoun(req, res, next, data.content);
        });
      });

module.exports = router;
