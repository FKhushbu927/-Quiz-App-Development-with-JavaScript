const questions = [
    {
        question: "Which is the largest river in Bangladesh?",
        answers: [
            { text: "Padma", correct: false },
            { text: "Meghna", correct: false },
            { text: "Jomuna", correct: true },
            { text: "Titas", correct: false },

        ]
    },


    {
        question: "Which is the largest Forest in the world?",
        answers: [
            { text: "Primorye Forest", correct: false },
            { text: " Valdivian Rainforest", correct: false },
            { text: "Amazon", correct: true },
            { text: "Taiga", correct: false },

        ]
    },


    {
        question: "Which is the largest Bridge in the world?",
        answers: [
            { text: "Changhua-Koahsiung Viaduct", correct: false },
            { text: " Cangde Grand Bridge", correct: false },
            { text: "Tianjin Grand Bridge", correct: false },
            { text: " Danyang-Kunshan Grand Bridge", correct: true },

        ]
    },

    {
        question: "Which is the largest country in the world?",
        answers: [
            { text: "USA", correct: false },
            { text: "Russia", correct: true },
            { text: "Canada", correct: false },
            { text: "South Korea", correct: false },

        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let totalScore = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " ." + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);

    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}


startQuiz();

