// ==================================================
// BUILD IT! — V2 Game Engine
// Technical Interview Preparation Game
// ==================================================

// DOM Element References (Preserving all V1 identifiers)
const startButton = document.getElementById("start-button");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");

const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
const tryAgainButton = document.getElementById("try-again-button");

const levelIndicator = document.getElementById("level-indicator");
const questionProgress = document.getElementById("question-progress");
const hintButton = document.getElementById("hint-button");
const hintBox = document.getElementById("hint-box");

const questionCard = document.getElementById("question-card");
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

// State Cards (Level Complete, Game Over, Game Complete)
const levelCompleteCard = document.getElementById("level-complete-card");
const levelCompleteTitle = document.getElementById("level-complete-title");
const levelCompleteMessage = document.getElementById("level-complete-message");
const nextLevelButton = document.getElementById("next-level-button");

const gameOverCard = document.getElementById("game-over-card");
const gameOverMessage = document.getElementById("game-over-message");
const gameOverStats = document.getElementById("game-over-stats");

const gameCompleteCard = document.getElementById("game-complete-card");
const finalStats = document.getElementById("final-stats");

// ==================================================
// GAME STATE
// ==================================================

let score = 0;
let lives = 3;
let hintsRemaining = 3;
let hintUsedForCurrentQuestion = false;
let currentQuestion = 0;
let buildingProgress = 0;
let answered = false;

// ==================================================
// QUESTION BANK (15 Questions: 5 per Level)
// ==================================================

const questions = [
    // --------------------------------------------------
    // LEVEL 1 — BEGINNER (Python Basics & Fundamentals)
    // --------------------------------------------------
    {
        question: "Which of the following built-in functions returns the number of items in a Python list or string?",
        options: [
            "length()",
            "len()",
            "size()",
            "count()"
        ],
        correct: 1,
        level: 1,
        hint: "It is a short 3-letter built-in Python function."
    },
    {
        question: "Which of these data types in Python is immutable (cannot be modified after creation)?",
        options: [
            "List",
            "Dictionary",
            "Tuple",
            "Set"
        ],
        correct: 2,
        level: 1,
        hint: "It is defined with parentheses () and its elements cannot be reassigned."
    },
    {
        question: "What is the output of the slicing expression 'DEVELOPER'[0:3] in Python?",
        options: [
            "'DEV'",
            "'DEVE'",
            "'EVE'",
            "'DE'"
        ],
        correct: 0,
        level: 1,
        hint: "Python slice [start:end] includes start index 0 and stops just before index 3."
    },
    {
        question: "What is the result of evaluating 5 == '5' in Python?",
        options: [
            "True",
            "TypeError",
            "None",
            "False"
        ],
        correct: 3,
        level: 1,
        hint: "Python is strongly typed and does not automatically coerce an integer to match a string."
    },
    {
        question: "What is the average time complexity of accessing an element in an array by its index?",
        options: [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n²)"
        ],
        correct: 2,
        level: 1,
        hint: "Direct memory calculation allows constant time access."
    },

    // --------------------------------------------------
    // LEVEL 2 — INTERMEDIATE (DS, OOP, DBMS, SQL)
    // --------------------------------------------------
    {
        question: "Which data structure operates on a Last In, First Out (LIFO) principle?",
        options: [
            "Queue",
            "Stack",
            "Linked List",
            "Binary Tree"
        ],
        correct: 1,
        level: 2,
        hint: "Think about a stack of cafeteria trays: the last tray put on top is the first taken off."
    },
    {
        question: "Which OOP concept bundles data and methods together while restricting direct access to object internals?",
        options: [
            "Inheritance",
            "Polymorphism",
            "Abstraction",
            "Encapsulation"
        ],
        correct: 3,
        level: 2,
        hint: "Think of a protective capsule that hides internal state behind getters and setters."
    },
    {
        question: "Which SQL clause is used to filter records after an aggregate function like COUNT() or AVG()?",
        options: [
            "WHERE",
            "ORDER BY",
            "HAVING",
            "GROUP BY"
        ],
        correct: 2,
        level: 2,
        hint: "WHERE filters rows before grouping; this clause filters grouped results after aggregation."
    },
    {
        question: "Which data structure is typically used to implement Breadth-First Search (BFS) on a graph?",
        options: [
            "Queue",
            "Stack",
            "Priority Queue",
            "Hash Table"
        ],
        correct: 0,
        level: 2,
        hint: "BFS explores neighbors level-by-level in First-In, First-Out (FIFO) order."
    },
    {
        question: "In database transaction ACID properties, what does 'Atomicity' guarantee?",
        options: [
            "Data remains consistent after system crashes",
            "Concurrent transactions do not interfere",
            "All operations succeed completely or none are applied",
            "Committed changes survive future system crashes"
        ],
        correct: 2,
        level: 2,
        hint: "It represents the 'all-or-nothing' rule for database transactions."
    },

    // --------------------------------------------------
    // LEVEL 3 — ADVANCED (OS, Networks, Git, AI)
    // --------------------------------------------------
    {
        question: "What condition occurs when two or more processes are blocked indefinitely waiting for resources held by each other?",
        options: [
            "Starvation",
            "Race Condition",
            "Thrashing",
            "Deadlock"
        ],
        correct: 3,
        level: 3,
        hint: "Neither process can proceed, creating a permanent circular wait standstill."
    },
    {
        question: "Which OSI model layer manages end-to-end communication, flow control, and protocols like TCP and UDP?",
        options: [
            "Network Layer",
            "Transport Layer",
            "Data Link Layer",
            "Session Layer"
        ],
        correct: 1,
        level: 3,
        hint: "Layer 4 is responsible for reliable or best-effort segment delivery between hosts."
    },
    {
        question: "Which Git command applies the changes from a single specific commit into your current branch without merging?",
        options: [
            "git merge",
            "git rebase",
            "git checkout",
            "git cherry-pick"
        ],
        correct: 3,
        level: 3,
        hint: "Think about picking one specific fruit from another branch."
    },
    {
        question: "What problem occurs when a machine learning model learns training data noise and performs poorly on unseen test data?",
        options: [
            "Overfitting",
            "Underfitting",
            "Data Drift",
            "Vanishing Gradient"
        ],
        correct: 0,
        level: 3,
        hint: "High accuracy on training samples, but low generalizability on validation data."
    },
    {
        question: "Which CPU scheduling algorithm assigns each process a small fixed time slice (quantum) in cyclic order?",
        options: [
            "First-Come, First-Served",
            "Shortest Job First",
            "Round Robin",
            "Priority Scheduling"
        ],
        correct: 2,
        level: 3,
        hint: "It guarantees fair time-sharing by rotating through the ready queue."
    }
];

// ==================================================
// HOUSE BUILDING LOGIC (15 Pieces)
// ==================================================

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

// ==================================================
// HINT SYSTEM
// ==================================================

function updateHintDisplay() {
    if (hintsRemaining <= 0) {
        hintButton.disabled = true;
        hintButton.textContent = "💡 No hints left";
        hintButton.classList.add("disabled");
    } else {
        hintButton.disabled = false;
        hintButton.textContent = "💡 Hint (" + hintsRemaining + " left)";
        hintButton.classList.remove("disabled");
    }
}

hintButton.addEventListener("click", function () {
    // Cannot use hints if none left, player died, or already answered
    if (hintsRemaining <= 0 || lives <= 0 || answered) {
        return;
    }

    const question = questions[currentQuestion];

    // Only deduct 1 hint if not already revealed for this question
    if (!hintUsedForCurrentQuestion) {
        hintsRemaining = Math.max(0, hintsRemaining - 1);
        hintUsedForCurrentQuestion = true;
        updateHintDisplay();
    }

    // Display the question hint
    hintBox.textContent = "💡 Hint: " + question.hint;
    hintBox.style.display = "block";
});

// ==================================================
// QUESTION LOADING & UI UPDATES
// ==================================================

function getLevelTitle(level) {
    if (level === 1) return "LEVEL 1 — BEGINNER";
    if (level === 2) return "LEVEL 2 — INTERMEDIATE";
    return "LEVEL 3 — ADVANCED";
}

function loadQuestion() {
    const question = questions[currentQuestion];

    // Update level indicator & color theme
    levelIndicator.textContent = getLevelTitle(question.level);
    levelIndicator.className = "level-indicator level-" + question.level;

    // Progress within current 5-question level
    const questionInLevel = (currentQuestion % 5) + 1;
    questionProgress.textContent = "Question " + questionInLevel + " / 5";

    questionNumber.textContent = "Question " + (currentQuestion + 1) + " (Level " + question.level + ")";
    questionText.textContent = question.question;

    const optionPrefixes = ["A", "B", "C", "D"];
    answerButtons.forEach(function (button, index) {
        button.textContent = optionPrefixes[index] + ". " + question.options[index];
        button.disabled = false;
        button.style.display = "block";
        button.className = "answer-btn";
    });

    // Reset feedback
    feedback.textContent = "";
    feedback.className = "feedback";

    // Reset hint state for the new question
    hintUsedForCurrentQuestion = false;
    hintBox.textContent = "";
    hintBox.style.display = "none";
    updateHintDisplay();

    // Unlock answers
    answered = false;
}

// ==================================================
// ANSWER HANDLING & LEVEL PROGRESSION
// ==================================================

function handleAnswer(selectedIndex) {
    if (answered) {
        return;
    }

    // Lock answer immediately
    answered = true;

    // Disable all answer buttons to prevent multiple clicks
    answerButtons.forEach(function (button) {
        button.disabled = true;
    });

    const question = questions[currentQuestion];

    if (selectedIndex === question.correct) {
        score = score + 10;
        scoreDisplay.textContent = "Score: " + score;

        // Build exactly one piece on correct answer
        buildNextPiece();

        answerButtons[selectedIndex].classList.add("btn-correct");
        feedback.textContent = "Correct! 🎉 House piece built! 🧱";
        feedback.className = "feedback feedback-correct";
    } else {
        lives = lives - 1;
        livesDisplay.textContent =
            "Lives: " + (lives > 0 ? "❤️ ".repeat(lives) : "💔 0");

        answerButtons[selectedIndex].classList.add("btn-wrong");
        // Highlight correct answer for learning
        answerButtons[question.correct].classList.add("btn-correct");

        feedback.textContent = "Wrong answer ❌ No house piece built.";
        feedback.className = "feedback feedback-wrong";

        if (lives === 0) {
            setTimeout(function () {
                showGameOver();
            }, 1000);
            return;
        }
    }

    // Progression timer
    setTimeout(function () {
        // Clear option feedback styles
        answerButtons.forEach(function (button) {
            button.classList.remove("btn-correct", "btn-wrong");
        });

        // Check for level completion or game completion
        // Level 1 completes after question index 4 (5 questions)
        // Level 2 completes after question index 9 (5 questions)
        // Level 3 completes after question index 14 (5 questions)
        if (currentQuestion === 4) {
            showLevelComplete(1);
        } else if (currentQuestion === 9) {
            showLevelComplete(2);
        } else if (currentQuestion === 14) {
            showGameComplete();
        } else {
            currentQuestion = currentQuestion + 1;
            loadQuestion();
        }
    }, 1200);
}

// ==================================================
// STATE SCREENS (LEVEL COMPLETE, GAME COMPLETE, GAME OVER)
// ==================================================

function showLevelComplete(completedLevel) {
    questionCard.style.display = "none";
    levelCompleteCard.style.display = "block";

    if (completedLevel === 1) {
        levelCompleteTitle.textContent = "🎉 LEVEL 1 COMPLETE!";
        levelCompleteMessage.textContent =
            "Awesome work! You mastered Python fundamentals. Your house foundation, walls, and ground windows are now in place. Ready for Intermediate topics?";
        nextLevelButton.textContent = "CONTINUE TO LEVEL 2";
    } else if (completedLevel === 2) {
        levelCompleteTitle.textContent = "🎉 LEVEL 2 COMPLETE!";
        levelCompleteMessage.textContent =
            "Fantastic progress! You tackled Data Structures, OOP, and DBMS. Your house now has a roof and chimney. Ready for Advanced systems questions?";
        nextLevelButton.textContent = "CONTINUE TO LEVEL 3";
    }
}

nextLevelButton.addEventListener("click", function () {
    levelCompleteCard.style.display = "none";
    questionCard.style.display = "block";
    currentQuestion = currentQuestion + 1;
    loadQuestion();
});

function showGameComplete() {
    questionCard.style.display = "none";
    gameCompleteCard.style.display = "block";
    tryAgainButton.style.display = "block";
    hintButton.disabled = true;

    finalStats.innerHTML =
        "<p>🏆 <strong>Final Score:</strong> " + score + " / " + (questions.length * 10) + " points</p>" +
        "<p>❤️ <strong>Lives Remaining:</strong> " + lives + " / 3</p>" +
        "<p>💡 <strong>Hints Remaining:</strong> " + hintsRemaining + " / 3</p>" +
        "<p>🏡 <strong>House Construction:</strong> " + buildingProgress + " / " + questions.length + " pieces built!</p>";
}

function showGameOver() {
    questionCard.style.display = "none";
    gameOverCard.style.display = "block";
    tryAgainButton.style.display = "block";
    hintButton.disabled = true;

    gameOverStats.innerHTML =
        "<p><strong>Final Score:</strong> " + score + " points</p>" +
        "<p><strong>House Pieces Built:</strong> " + buildingProgress + " / " + questions.length + "</p>" +
        "<p><strong>Progress:</strong> Stopped at " + getLevelTitle(questions[currentQuestion].level) + "</p>";
}

// ==================================================
// RESET & INITIALIZATION
// ==================================================

function resetGame() {
    score = 0;
    lives = 3;
    hintsRemaining = 3;
    hintUsedForCurrentQuestion = false;
    currentQuestion = 0;
    buildingProgress = 0;
    answered = false;

    scoreDisplay.textContent = "Score: 0";
    livesDisplay.textContent = "Lives: ❤️ ❤️ ❤️";

    updateHintDisplay();
    hintBox.textContent = "";
    hintBox.style.display = "none";

    feedback.textContent = "";
    feedback.className = "feedback";

    // Reset card visibility
    levelCompleteCard.style.display = "none";
    gameOverCard.style.display = "none";
    gameCompleteCard.style.display = "none";
    questionCard.style.display = "block";
    tryAgainButton.style.display = "none";

    resetBuilding();
    loadQuestion();
}

// Bind Answer Buttons
answerButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        handleAnswer(index);
    });
});

// Bind Start Button
startButton.addEventListener("click", function () {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    resetGame();
});

// Bind Try Again Button
tryAgainButton.addEventListener("click", function () {
    resetGame();
});

// Initialize on page load
resetBuilding();
