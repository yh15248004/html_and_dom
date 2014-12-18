function AnswerFactory(document, topics) {
  this.document = document;
  this.topics = topics;
}

AnswerFactory.prototype.getTotalScore = function () {

  var _this = this;

  _.each(this.topics, function (topic) {
    topic.calculate(_this.document);
  });

  var scores = _.pluck(_this.topics, 'score');
  return _.reduce(scores, function (scoreA, scoreB) {
    return scoreA + scoreB;
  });
};
