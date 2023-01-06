const questions = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const result = document.querySelector(".showresult");

//create question object
const questionsData = [
  {
    question: "What is css?",
    a: "casecading style",
    b: "nothing",
    c: "stylesheet",
    d: "rohan",
    ans: "ans1",
  },
  {
    question: "What is Html?",
    a: "casecading style",
    b: "nothing",
    c: "Hyper Text Markup language",
    d: "rohan",
    ans: "ans3",
  },
  {
    question: "What is Js?",
    a: "casecading style",
    b: "nothing",
    c: "stylesheet",
    d: "Javascript",
    ans: "ans4",
  },
  {
    question: "What is react?",
    a: "casecading style",
    b: "Js library",
    c: "nn",
    d: "rohan",
    ans: "ans2",
  },
];

//count the questions
let questionCount = 0;
let score = 0;

//grab the questions

const getQuestion = () => {
  const questionList = questionsData[questionCount];
  questions.textContent = questionList.question;
  option1.textContent = questionList.a;
  option2.textContent = questionList.b;
  option3.textContent = questionList.c;
  option4.textContent = questionList.d;
};
getQuestion();

//when click on submit get the selected data and match the value with the object
const getCheckAnswer = () => {
  let answer;
  answers.forEach((elm) => {
    if (elm.checked) {
      answer = elm.id;
    }
  });
  return answer;
};

submit.addEventListener("click", () => {
  const checkAnswer = getCheckAnswer();
console.log(checkAnswer);
  if (checkAnswer === questionsData[questionCount].ans) {
  
    score++;
  } else {

  }
  questionCount++;
  if (questionCount < questionsData.length) {
    getQuestion();
  } else {

    result.textContent = `'
        
       you scored ${score}/${questionsData.length} !!!!
        
        
        
        '`;
  }
});
