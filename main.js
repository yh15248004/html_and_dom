function printScore() {

  validateText();
  var scoreText = document.getElementById("score");
  scoreText.value = getScore();

  return false;
}

function validateText() {
  if (!validateRequired(document.getElementById('student_class').value, "必须填写班级！")) {
    document.getElementById('student_class').focus();
    return false;
  }

  if (!validateRequired(document.getElementById('student_number').value, "必须填写学号！")) {
    document.getElementById('student_number').focus();
    return false;
  }

  if (!validateRequired(document.getElementById('student_name').value, "必须填写姓名！")) {
    document.getElementById('student_name').focus();
    return false;
  }
}

function validateRequired(value, alertTxt) {
  var result = true;
  if (value.length === 0) {
    alert(alertTxt);
    result = false;
  }
  return result;
}

function getScore() {
  var score = 0;
  score += getTextsScore(['pro0101'],['统一建模语言'],5);
  score += getTextsScore(['pro010201','pro010202','pro010203'], ['封装性','继承性','多态性'], 15);

  score += getRadioScore('radio01',['B'],10);
  score += getRadioScore('radio02',['A'],10);

  score += getCheckboxScore('checkbox01',['ABD'],10);
  score += getCheckboxScore('checkbox02',['ABC'],10);

  score += getRadioScore('radio04',['X'],10);
  score += getRadioScore('radio05',['V'],10);

  score += getTextsScore(['pro0501'],['模型是对现实世界的简化和抽象,'+
    '模型是对所研究的系统、过程、事物或概念的一种表达形'+
    '式。可以是物理实体;可以是某种图形;或者是一种数学表达式。'],20);

  return score;
}

function getTextsScore(ids, answers, score) {
  var result = 0;
  var values = [];

  _.forEach(ids, function(id) {
    values.push(document.getElementById(id).value);
  });

  _.forEach(answers, function(answer) {
    var isExist = _.contains(values, answer);
    if (isExist) {
      result += score / answers.length;
    }
  });

  return result;
}

function getRadioScore(name, answers, score) {

  var questions = document.getElementsByName(name);
  var question = _.find(questions, function(question) {
    return question.checked && question.value === answers[0];
  });
  var isRight = !!question;

  return isRight ? score : 0;
}

function getCheckboxScore(name, answers, score) {

  var result = 0;
  var questions = document.getElementsByName(name);
  var selects = _.filter(questions, {checked : true});
  if (_.map(selects, 'value').join('') === answers[0]) {
    result =  score;
  }

  return result;
}
