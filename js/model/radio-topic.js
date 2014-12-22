function RadioTopic(name, answer, scoreUnit) {
  Topic.call(this, name, answer, scoreUnit);
}

RadioTopic.prototype = Object.create(Topic.prototype);

RadioTopic.prototype.constructor = RadioTopic;

RadioTopic.prototype.calculate = function (document) {

  _this = this;
  var radioElements = $("[name="+this.name+"]");

  var radioElement = _.find(radioElements, function(radioElement) {
    return radioElement.checked && radioElement.value === _this.answer;
  });
  var isRight = !!radioElement;

  this.score = isRight ? this.scoreUnit : 0;

};
