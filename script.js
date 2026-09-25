const startButton = document.getElementById("start-button");
const gameScreen = document.getElementById("game-screen");

startButton.addEventListener("click", function () {
    gameScreen.style.display = "block";
});


let score = 0;
let lives = 3;
let answered = false;

const livesDisplay = document.getElementById("lives");
const tryAgainButton = document.getElementById("try-again-button");
const scoreDisplay = document.getElementById("score");
const correctAnswer = document.getElementById("correct-answer");

correctAnswer.addEventListener("click", function () {
    if (answered) {
    return;
}

    answered = true;
    score = score + 10;
    scoreDisplay.textContent = "Score: " + score;

    document.getElementById("feedback").textContent = "Correct! 🎉";
});


const wrongAnswer1 = document.getElementById("wrong-answer-1");

wrongAnswer1.addEventListener("click", function () {
    if (answered) {
    return;
}

    answered = true;
    if (lives > 0) {
        lives = lives - 1;
    }

    livesDisplay.textContent = "Lives: " + (lives > 0 ? "❤️ ".repeat(lives) : "💔 0");

    if (lives === 0) {
        document.getElementById("feedback").textContent = "💀 GAME OVER — Final Score: " + score;

        correctAnswer.disabled = true;
        wrongAnswer1.disabled = true;
        wrongAnswer2.disabled = true;
        wrongAnswer3.disabled = true;

        correctAnswer.style.display = "none";
        wrongAnswer1.style.display = "none";
        wrongAnswer2.style.display = "none";
        wrongAnswer3.style.display = "none";
        tryAgainButton.style.display = "block";
    } else {
        document.getElementById("feedback").textContent = "Wrong answer ❌";
    }
});

const wrongAnswer2 = document.getElementById("wrong-answer-2");

wrongAnswer2.addEventListener("click", function () {
    if (answered) {
    return;
}

    answered = true;

    if (lives > 0) {
        lives = lives - 1;
    }

    livesDisplay.textContent = "Lives: " + (lives > 0 ? "❤️ ".repeat(lives) : "💔 0");

    if (lives === 0) {
        document.getElementById("feedback").textContent = "💀 GAME OVER — Final Score: " + score;

        correctAnswer.disabled = true;
        wrongAnswer1.disabled = true;
        wrongAnswer2.disabled = true;
        wrongAnswer3.disabled = true;

        correctAnswer.style.display = "none";
        wrongAnswer1.style.display = "none";
        wrongAnswer2.style.display = "none";
        wrongAnswer3.style.display = "none";
        tryAgainButton.style.display = "block";
    } else {
        document.getElementById("feedback").textContent = "Wrong answer ❌";
    }
});

const wrongAnswer3 = document.getElementById("wrong-answer-3");

wrongAnswer3.addEventListener("click", function () {
    if (answered) {
    return;
}

    answered = true;
    if (lives > 0) {
        lives = lives - 1;
    }

    livesDisplay.textContent = "Lives: " + (lives > 0 ? "❤️ ".repeat(lives) : "💔 0");

    if (lives === 0) {
        document.getElementById("feedback").textContent = "💀 GAME OVER — Final Score: " + score;

        correctAnswer.disabled = true;
        wrongAnswer1.disabled = true;
        wrongAnswer2.disabled = true;
        wrongAnswer3.disabled = true;

        correctAnswer.style.display = "none";
        wrongAnswer1.style.display = "none";
        wrongAnswer2.style.display = "none";
        wrongAnswer3.style.display = "none";
        tryAgainButton.style.display = "block";
    } else {
        document.getElementById("feedback").textContent = "Wrong answer ❌";
    }
});


tryAgainButton.addEventListener("click", function () {
    score = 0;
    lives = 3;
    answered = false;

    scoreDisplay.textContent = "Score: 0";
    livesDisplay.textContent = "Lives: ❤️ ❤️ ❤️";

    document.getElementById("feedback").textContent = "";

    correctAnswer.style.display = "block";
    wrongAnswer1.style.display = "block";
    wrongAnswer2.style.display = "block";
    wrongAnswer3.style.display = "block";

    correctAnswer.disabled = false;
    wrongAnswer1.disabled = false;
    wrongAnswer2.disabled = false;
    wrongAnswer3.disabled = false;

    tryAgainButton.style.display = "none";
});