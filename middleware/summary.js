var summary = require('node-summary');

module.exports.summarize = function (req, res, next, title, content) {
  var titleWithNoTag = title.replace(/(<([^>]+)>)/gi, "");
  var contentWithNoTag = content.replace(/(<([^>]+)>)/gi, "");

  summary.summarize(titleWithNoTag, contentWithNoTag,
    function(err, summary) {
      if(err) {
          console.log("There was an error."); // Need better error reporting

          return "There was an error";
      }
      console.log(summary);
      var result = {
        summary : summary
      };
      return res.send(result);
  });
};


module.exports.getSortedSetences = function (req, res, next, content) {
  var contentWithNoTag = content.replace(/(<([^>]+)>)/gi, "");

  summary.getSortedSentences(contentWithNoTag, 5, function(err, sortedSentences) {
      if(err) {
          console.log("There was an error."); // Need better error reporting
      }

      console.log(sortedSentences);

      var result = {
        sortedSentences : sortedSentences
      };

      return res.send(result);
  });
};
