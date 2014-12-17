function printScore() {

  var scoreText = document.getElementById("score");
  scoreText.value = getScore();

  return false;
}

function getScore() {
  var score = 0;
  score += getTextScore('pro0101','统一建模语言',5);
  score += getTextScore('pro010201','封装性',5);
  score += getTextScore('pro010202','继承性',5);
  score += getTextScore('pro010203','多态性',5);

  score += getRadioScore('radio01','B',10);
  score += getRadioScore('radio02','A',10);

  score += getCheckboxScore('checkbox01','ABD',10);
  score += getCheckboxScore('checkbox02','ABC',10);

  score += getRadioScore('radio04','X',10);
  score += getRadioScore('radio05','V',10);

  score += getTextScore('pro0501','模型是对现实世界的简化和抽象,'+
    '模型是对所研究的系统、过程、事物或概念的一种表达形'+
    '式。可以是物理实体;可以是某种图形;或者是一种数学表达式。',20);

  return score;
}

function getTextScore(id, answer, score) {
  return document.getElementById(id).value ? score : 0;
}

function getRadioScore(name, answer, score) {

  var questions = document.getElementsByName(name);
  var question = _.find(questions, function(question) {
    return question.checked && question.value === answer;
  });
  var isRight = !!question;

  return isRight ? score : 0;
}

function getCheckboxScore(name, answer, score) {

  var result = 0;
  var questions = document.getElementsByName(name);
  var selects = _.filter(questions, {checked : true});
  if (_.map(selects, 'value').join('') === answer) {
    result =  score;
  }
  
  return result;
}
