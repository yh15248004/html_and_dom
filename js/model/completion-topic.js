function CompletionTopic(name, answer, scoreUnit) {
  Topic.call(this, name, answer, scoreUnit);
}

CompletionTopic.prototype = Object.create(Topic.prototype);

CompletionTopic.prototype.constructor = CompletionTopic;

CompletionTopic.prototype.calculate = function () {

  var _this = this;
  var values = [];

  for (var i = 0; i < _this.answer.length; i++) {
    values.push($('#'+_this.name + '_' + i).val());
  }

  _.forEach(_this.answer, function(acturlAnswer) {
    var isExist = _.contains(values, acturlAnswer);
    if (isExist) {
      _this.score += _this.scoreUnit / _this.answer.length;
    }
  });

};
