const questionsArray = [
  {
    question: 'Capital of Bangladesh is',
    answers: [
      {
        answer: 'Dhaka',
        correct: true,
      },
      {
        answer: 'Khulna',
        correct: false,
      },
      {
        answer: 'Bogura',
        correct: false,
      },
      {
        answer: 'None of these',
        correct: false,
      },
    ],
  },
  {
    question: ' How many total Districts are there in Bangladesh?',
    answers: [
      {
        answer: 62,
        correct: false,
      },
      {
        answer: 63,
        correct: false,
      },
      {
        answer: 64,
        correct: true,
      },
      {
        answer: 65,
        correct: false,
      },
    ],
  },
  {
    question: ' What is the country calling code for Bangladesh?',
    answers: [
      {
        answer: '+49',
        correct: false,
      },
      {
        answer: '+230',
        correct: false,
      },
      {
        answer: '+97',
        correct: false,
      },
      {
        answer: '+880',
        correct: true,
      },
    ],
  },
  {
    question: 'When Bangladesh got independence?',
    answers: [
      {
        answer: 1970,
        correct: false,
      },
      {
        answer: 1971,
        correct: true,
      },
      {
        answer: 1972,
        correct: false,
      },
      {
        answer: 1973,
        correct: false,
      },
    ],
  },
  {
    question: 'Official language of Bangladesh is',
    answers: [
      {
        answer: 'Bengali',
        correct: true,
      },
      {
        answer: 'Urdu',
        correct: false,
      },
      {
        answer: 'Urdu',
        correct: false,
      },
      {
        answer: 'Hindi',
        correct: false,
      },
    ],
  },
];

const answers = document.getElementById('answers');
const question = document.getElementById('question');
const nextBtn = document.getElementById('next-btn');

nextBtn.addEventListener('click', calculate);

let currentQuestionIndex = 0;
let score = 0;
nextBtn.innerHTML = 'Next';

function setQuestions() {
  const currentQuestion = questionsArray[currentQuestionIndex].question;
  const questionNo = currentQuestionIndex + 1;
  question.innerHTML = `${questionNo}. ${currentQuestion}`;

  questionsArray[currentQuestionIndex].answers.map((element) => {
    const btn = document.createElement('button');
    btn.innerHTML = element.answer;
    btn.classList.add('btn');
    btn.addEventListener('click', instantResult);
    btn.dataset.correct = element.correct;
    answers.appendChild(btn);
  });
}
function instantResult(e) {
  const selectbtn = e.target;
  const isCorrect = selectbtn.dataset.correct === 'true';
  if (isCorrect) {
    selectbtn.classList.add('correct');
    score += 5;
  } else {
    selectbtn.classList.add('false');
  }
  const btnArray = Array.from(answers.children);
  btnArray.forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextBtn.style.display = 'block';
}
setQuestions();

function calculate() {
  currentQuestionIndex += 1;
  answers.innerHTML = null;
  const questionNo = currentQuestionIndex + 1;
  if (questionNo <= questionsArray.length) {
    setQuestions();
  } else {
    nextBtn.innerHTML = 'Ply again.';
    nextBtn.removeEventListener('click', calculate);
    nextBtn.addEventListener('click', () => {
      window.location.reload();
    });
    let reaction = score >= 15 ? 'Good Job!' : score == 10 ? 'Good!' : 'Alas!';
    question.innerHTML = `${reaction} Your score is ${score} out of 20`;
  }
}
