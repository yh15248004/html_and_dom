function RadioTopic(name, answer, scoreUnit) {
  Topic.call(this, name, answer, scoreUnit);
}

RadioTopic.prototype = Object.create(Topic.prototype);

RadioTopic.prototype.constructor = RadioTopic;

RadioTopic.prototype.calculate = function (document) {

  var radioElements = document.getElementsByName(this.name);

  var radioElement = _.find(radioElements, function(radioElement) {
    return radioElement.checked && radioElement.value === answer;
  });
  var isRight = !!radioElement;

  this.score = isRight ? this.scoreUnit : 0;

};
