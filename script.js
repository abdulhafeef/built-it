const startButton = document.getElementById("start-button");
const gameScreen = document.getElementById("game-screen");

const livesDisplay = document.getElementById("lives");
const tryAgainButton = document.getElementById("try-again-button");
const scoreDisplay = document.getElementById("score");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const feedback = document.getElementById("feedback");
const buildProgress = document.getElementById("build-progress");

const housePieces = document.querySelectorAll(".house-piece");

const correctAnswer = document.getElementById("correct-answer");
const wrongAnswer1 = document.getElementById("wrong-answer-1");
const wrongAnswer2 = document.getElementById("wrong-answer-2");
const wrongAnswer3 = document.getElementById("wrong-answer-3");

const answerButtons = [
    correctAnswer,
    wrongAnswer1,
    wrongAnswer2,
    wrongAnswer3
];


let score = 0;
let lives = 3;
let answered = false;
let currentQuestion = 0;
let buildingProgress = 0;


const questions = [
    {
        question: "What is the correct way to print something in Python?",
        options: [
            'print("Hello")',
            'echo "Hello"',
            'printf("Hello")',
            'console.log("Hello")'
        ],
        correct: 0
    },

    {
        question: "Which data structure follows LIFO?",
        options: [
            "Queue",
            "Stack",
            "Array",
            "Tree"
        ],
        correct: 1
    }
];


function updateBuilding() {
    housePieces.forEach(function (piece, index) {
        piece.classList.toggle("built", index < buildingProgress);
    });

    buildProgress.textContent =
        "House progress: " + buildingProgress + " / " + questions.length;
}


function resetBuilding() {
    buildingProgress = 0;
    updateBuilding();
}


function buildNextPiece() {
    if (buildingProgress < housePieces.length) {
        buildingProgress = buildingProgress + 1;
        updateBuilding();
    }
}


function loadQuestion() {
    const question = questions[currentQuestion];

    questionNumber.textContent = "Question " + (currentQuestion + 1);
    questionText.textContent = question.question;

    answerButtons.forEach(function (button, index) {
        button.textContent = question.options[index];
        button.disabled = false;
        button.style.display = "block";
    });

    feedback.textContent = "";
    answered = false;
}


function handleAnswer(selectedIndex) {

    if (answered) {
        return;
    }

    answered = true;

    const question = questions[currentQuestion];

    if (selectedIndex === question.correct) {

        score = score + 10;
        scoreDisplay.textContent = "Score: " + score;

        buildNextPiece();
        feedback.textContent = "Correct! 🎉 House piece built! 🧱";

    } else {

        lives = lives - 1;

        livesDisplay.textContent =
            "Lives: " + (lives > 0 ? "❤️ ".repeat(lives) : "💔 0");

        if (lives === 0) {

            feedback.textContent =
                "💀 GAME OVER — Final Score: " + score;

            answerButtons.forEach(function (button) {
                button.disabled = true;
                button.style.display = "none";
            });

            tryAgainButton.style.display = "block";

            return;

        } else {

            feedback.textContent = "Wrong answer ❌ No house piece built.";
        }
    }


    setTimeout(function () {

        currentQuestion = currentQuestion + 1;

        if (currentQuestion < questions.length) {

            loadQuestion();

        } else {

            questionNumber.textContent = "🏆 COMPLETE!";
            questionText.textContent =
                "You completed all the questions and built the house!";

            feedback.textContent =
                "Final Score: " + score;

            answerButtons.forEach(function (button) {
                button.style.display = "none";
            });

            tryAgainButton.style.display = "block";
        }

    }, 1000);
}


answerButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

        handleAnswer(index);

    });

});


startButton.addEventListener("click", function () {

    gameScreen.style.display = "block";

    score = 0;
    lives = 3;
    currentQuestion = 0;
    answered = false;

    scoreDisplay.textContent = "Score: 0";
    livesDisplay.textContent = "Lives: ❤️ ❤️ ❤️";

    tryAgainButton.style.display = "none";

    resetBuilding();
    loadQuestion();

});


tryAgainButton.addEventListener("click", function () {

    score = 0;
    lives = 3;
    currentQuestion = 0;
    answered = false;

    scoreDisplay.textContent = "Score: 0";
    livesDisplay.textContent = "Lives: ❤️ ❤️ ❤️";

    tryAgainButton.style.display = "none";

    resetBuilding();
    loadQuestion();

});


resetBuilding();
