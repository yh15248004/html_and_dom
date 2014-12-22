function AnswerFactory(topics) {
  this.topics = topics;
}

AnswerFactory.prototype.getTotalScore = function () {

  var _this = this;

  _.each(this.topics, function (topic) {
    topic.calculate();
  });

  var scores = _.map(_this.topics, 'score');
  return _.reduce(scores, function (scoreA, scoreB) {
    return scoreA + scoreB;
  });
};
