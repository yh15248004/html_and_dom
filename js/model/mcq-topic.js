function McqTopic(name, answer, scoreUnit) {
  Topic.call(this, name, answer, scoreUnit);
}

McqTopic.prototype = Object.create(Topic.prototype);

McqTopic.prototype.constructor = McqTopic;

McqTopic.prototype.calculate = function () {

  var checkboxElements = $("[name="+this.name+"]");
  var selects = _.filter(checkboxElements, {checked : true});
  if (_.map(selects, 'value').join('') === this.answer) {
    this.score = this.scoreUnit;
  }
};
