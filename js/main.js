function submit_onclick() {

  var requiredInputs = [
      {
        id: 'student_class',
        text: '班级'
      },
      {
        id: 'student_number',
        text: '学号'
      },
      {
        id: 'student_name',
        text: '姓名'
      }
  ];

  if (validateRequired(requiredInputs)) {
    return false;
  }

  var topics = buildTopics();

  var answerFactory = new AnswerFactory(document, topics);

  var totalScoreElement = $('#totalScore');
  if (totalScoreElement) {
    totalScoreElement.html(answerFactory.getTotalScore());
  }

  return false;
}

function validateRequired(inputs) {

  var result = false;
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    var element = $('#' + input.id);
    var formGroup = element.parent().parent();
    if (_.isEmpty(element.val())) {
      $('#myModal').modal({
        keyboard: $('div.modal-body').text(input.text+'不能为空！')
      });
      formGroup.addClass('has-error');
      element.focus();
      result = true;
      break;
    }
    if (formGroup.hasClass('has-error')) {
      formGroup.removeClass('has-error');
    }
  }

  return result;
}

function buildTopics() {
  return [
    new CompletionTopic('completion_1', ['统一建模语言'], 5),
    new CompletionTopic('completion_2', ['封装性', '继承性', '多态性'], 15),
    new RadioTopic('choice_1', 'B', 10),
    new RadioTopic('choice_2', 'A', 10),
    new McqTopic('mcq_1', 'ABD', 10),
    new McqTopic('mcq_2', 'ABC', 10),
    new RadioTopic('true_false_1', 'X', 10),
    new RadioTopic('true_false_2', 'V', 10),
    new CompletionTopic('short_answer_1',
    ['模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。'],
    20),
  ];
}
