function McqTopic(name, answer, scoreUnit) {
  Topic.call(this, name, answer, scoreUnit);
}

McqTopic.prototype = Object.create(Topic.prototype);

McqTopic.prototype.constructor = McqTopic;

McqTopic.prototype.calculate = function (document) {

  var checkboxElements = document.getElementsByName(name);
  var selects = _.filter(checkboxElements, {checked : true});
  if (_.map(selects, 'value').join('') === answer) {
    this.score = this.scoreUnit;
  }
};
