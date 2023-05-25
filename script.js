const start_btn = document.querySelector(".start");
const question_panel = document.querySelector(".question_panel");
const que_text = question_panel.querySelector(".que_text");
const options_panel = question_panel.querySelector(".options");
const next_btn = document.querySelector(".next_btn");
const total_que = document.querySelector(".que_footer .total_que");
const count_que = document.querySelector(".que_footer .count_que");
const result_panel = document.querySelector(".result_panel");

const total_que_result = document.querySelector(".total_que span");
const right_ans_result = document.querySelector(".right_ans span");
const wrong_ans_result = document.querySelector(".wrong_ans span");
const percentage = document.querySelector(".percentage span");

const start_again = document.querySelector(".result_footer .start_again");
const exit = document.querySelector(".result_footer .exit");

start_btn.onclick = () => {
  question_panel.classList.remove("inactive");
  start_btn.classList.add("inactive");
};

total_que.innerText = questions.length;
total_que_result.innerText = questions.length;

var que_index = 0;
var right_answers = 0;
var wrong_answers = 0;
count_que.innerText = que_index + 1;
showQuestion(que_index);

function showQuestion(q_index) {
  que_text.innerText =
    questions[q_index].num + ". " + questions[q_index].question;
  var option_statement = "";
  for (var i = 0; i < questions[q_index].options.length; i++) {
    option_statement += `<div class = "option">${questions[q_index].options[i]}</div>`;
  }

  options_panel.innerHTML = option_statement;

  var allOptions = options_panel.querySelectorAll(".option");

  for (var j = 0; j < allOptions.length; j++) {
    allOptions[j].setAttribute("onclick", "UserAnswer(this)");
  }
  next_btn.classList.add("inactive");
}

next_btn.onclick = () => {
  que_index++;

  if (questions.length > que_index) {
    count_que.innerText = que_index + 1;
    showQuestion(que_index);
  } else {
    console.log("Questions completed!");
    question_panel.classList.add("inactive");
    result_panel.classList.remove("inactive");
    right_ans_result.innerText = right_answers;
    wrong_ans_result.innerText = wrong_answers;
    percentage.innerText =
      ((right_answers * 100) / questions.length).toFixed(2) + "%";
  }

  if (questions.length - 1 == que_index) {
    next_btn.innerText = "Finish";
  }
};

function UserAnswer(answer) {
  let userAns = answer.innerText;
  let correctAns = questions[que_index].answer;
  var allOptions2 = options_panel.querySelectorAll(".option");

  next_btn.classList.remove("inactive");

  if (userAns == correctAns) {
    console.log("%c Right Answer", "color:green");
    answer.classList.add("correct");
    right_answers++;
  } else {
    console.log("%c Wrong Answer", "color:red");
    answer.classList.add("incorrect");
    wrong_answers++;

    for (var i = 0; i < allOptions2.length; i++) {
      if (allOptions2[i].innerText == correctAns) {
        allOptions2[i].classList.add("correct");
      }
    }
  }

  for (var j = 0; j < allOptions2.length; j++) {
    allOptions2[j].classList.add("disabled");
  }
}

start_again.onclick = () => {
  question_panel.classList.remove("inactive");
  result_panel.classList.add("inactive");

  reset();
};

exit.onclick = () => {
  start_btn.classList.remove("inactive");
  result_panel.classList.add("inactive");

  reset();
};

function reset() {
  que_index = 0;
  right_answers = 0;
  wrong_answers = 0;
  count_que.innerText = que_index + 1;
  showQuestion(que_index);
}
