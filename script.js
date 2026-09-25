const startButton = document.getElementById("start-button");
const gameScreen = document.getElementById("game-screen");

startButton.addEventListener("click", function () {
    gameScreen.style.display = "block";
});


let score = 0;
let lives = 3;

const livesDisplay = document.getElementById("lives");

const scoreDisplay = document.getElementById("score");
const correctAnswer = document.getElementById("correct-answer");

correctAnswer.addEventListener("click", function () {
    score = score + 10;
    scoreDisplay.textContent = "Score: " + score;

    document.getElementById("feedback").textContent = "Correct! 🎉";
});


const wrongAnswer1 = document.getElementById("wrong-answer-1");

wrongAnswer1.addEventListener("click", function () {
    if (lives > 0) {
        lives = lives - 1;
    }

    livesDisplay.textContent = "Lives: " + (lives > 0 ? "❤️ ".repeat(lives) : "💔 0");

    if (lives === 0) {
        document.getElementById("feedback").textContent = "💀 GAME OVER";

        correctAnswer.disabled = true;
        wrongAnswer1.disabled = true;
        wrongAnswer2.disabled = true;
        wrongAnswer3.disabled = true;

        correctAnswer.style.display = "none";
        wrongAnswer1.style.display = "none";
        wrongAnswer2.style.display = "none";
        wrongAnswer3.style.display = "none";
    } else {
        document.getElementById("feedback").textContent = "Wrong answer ❌";
    }
});

const wrongAnswer2 = document.getElementById("wrong-answer-2");

wrongAnswer2.addEventListener("click", function () {
    if (lives > 0) {
        lives = lives - 1;
    }

    livesDisplay.textContent = "Lives: " + (lives > 0 ? "❤️ ".repeat(lives) : "💔 0");

    if (lives === 0) {
        document.getElementById("feedback").textContent = "💀 GAME OVER";

        correctAnswer.disabled = true;
        wrongAnswer1.disabled = true;
        wrongAnswer2.disabled = true;
        wrongAnswer3.disabled = true;

        correctAnswer.style.display = "none";
        wrongAnswer1.style.display = "none";
        wrongAnswer2.style.display = "none";
        wrongAnswer3.style.display = "none";
    } else {
        document.getElementById("feedback").textContent = "Wrong answer ❌";
    }
});

const wrongAnswer3 = document.getElementById("wrong-answer-3");

wrongAnswer3.addEventListener("click", function () {
    if (lives > 0) {
        lives = lives - 1;
    }

    livesDisplay.textContent = "Lives: " + (lives > 0 ? "❤️ ".repeat(lives) : "💔 0");

    if (lives === 0) {
        document.getElementById("feedback").textContent = "💀 GAME OVER";

        correctAnswer.disabled = true;
        wrongAnswer1.disabled = true;
        wrongAnswer2.disabled = true;
        wrongAnswer3.disabled = true;

        correctAnswer.style.display = "none";
        wrongAnswer1.style.display = "none";
        wrongAnswer2.style.display = "none";
        wrongAnswer3.style.display = "none";
    } else {
        document.getElementById("feedback").textContent = "Wrong answer ❌";
    }
});