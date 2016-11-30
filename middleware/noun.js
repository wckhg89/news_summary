var mecab = require('mecab-ffi');
var _ = require('lodash');

module.exports.noun = function (req, res, next, content) {
  var contentWithNoTag = content.replace(/(<([^>]+)>)/gi, "");

  mecab.extractNounMap(contentWithNoTag, function(err, result) {
   console.log(result);

    var result = {
      noun : result
    };

    return res.json(result);
  });
};


module.exports.sortedNoun = function (req, res, next, content) {
  var contentWithNoTag = content.replace(/(<([^>]+)>)/gi, "");

  mecab.extractSortedNounCounts(contentWithNoTag, function(err, result) {

    var result = {
      noun : result
    };

    return res.json(result);
  });
};
