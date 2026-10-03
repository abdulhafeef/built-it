// ==================================================
// BUILD IT! — V3 Level-Based Game Engine
// Technical Learning Game with Checkpoint Progression
// ==================================================

// DOM Element References
const startButton = document.getElementById("start-button");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");

const scoreDisplay = document.getElementById("score");
const streakDisplay = document.getElementById("streak");
const livesDisplay = document.getElementById("lives");
const tryAgainButton = document.getElementById("try-again-button");

const levelIndicator = document.getElementById("level-indicator");
const questionProgress = document.getElementById("question-progress");
const hintButton = document.getElementById("hint-button");
const hintBox = document.getElementById("hint-box");
const streakBanner = document.getElementById("streak-banner");

// Builder Stage & Scenes
const builderTitle = document.getElementById("builder-title");
const buildProgress = document.getElementById("build-progress");
const buildProgressBar = document.getElementById("build-progress-bar");

const houseScene = document.getElementById("house-scene");
const rocketScene = document.getElementById("rocket-scene");
const robotScene = document.getElementById("robot-scene");
const carScene = document.getElementById("car-scene");

const housePieces = document.querySelectorAll(".house-piece");
const rocketPieces = document.querySelectorAll(".rocket-piece");
const robotPieces = document.querySelectorAll(".robot-piece");

// Build World Bar Container
const worldItemsRow = document.getElementById("world-items-row");

// Question Card & Inputs
const questionCard = document.getElementById("question-card");
const questionNumber = document.getElementById("question-number");
const difficultyBadge = document.getElementById("difficulty-badge");
const questionText = document.getElementById("question-text");
const codeSnippetBox = document.getElementById("code-snippet-box");
const codeSnippetText = document.getElementById("code-snippet-text");
const feedback = document.getElementById("feedback");

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

// Result & Continue Container
const resultBox = document.getElementById("result-box");
const resultStatus = document.getElementById("result-status");
const resultXpTag = document.getElementById("result-xp-tag");
const resultStreakTag = document.getElementById("result-streak-tag");
const resultCorrectAnswer = document.getElementById("result-correct-answer");
const resultExplanation = document.getElementById("result-explanation");
const continueButton = document.getElementById("continue-button");

// State Cards (Level Complete, Game Over / Level Failed, Game Complete)
const levelCompleteCard = document.getElementById("level-complete-card");
const levelCompleteTitle = document.getElementById("level-complete-title");
const levelCompleteMessage = document.getElementById("level-complete-message");
const buildCompleteStats = document.getElementById("build-complete-stats");
const buildUnlockBanner = document.getElementById("build-unlock-banner");
const nextLevelButton = document.getElementById("next-level-button");

const gameOverCard = document.getElementById("game-over-card");
const gameOverMessage = document.getElementById("game-over-message");
const gameOverStats = document.getElementById("game-over-stats");

const gameCompleteCard = document.getElementById("game-complete-card");
const completedBuildsShowcase = document.getElementById("completed-builds-showcase");
const finalStats = document.getElementById("final-stats");
const playAgainButton = document.getElementById("play-again-button");

// ==================================================
// QUESTION BANK (Very Beginner-Friendly & Educational)
// ==================================================

// --------------------------------------------------
// LEVEL 1: 🏠 HOUSE (Python Basics, Variables & Print)
// --------------------------------------------------
const houseQuestions = [
    // Q1
    {
        question: "In Python, which function is used to display text or numbers on the screen?",
        options: ["display()", "print()", "output()", "write()"],
        correct: 1,
        explanation: "`print()` is Python's built-in function to display text and values to the console or screen.",
        hint: "Think of putting words onto paper.",
        type: "concept",
        difficulty: "VERY EASY"
    },
    // Q2
    {
        question: "What will the following code output?",
        code: "x = 5\nprint(x)",
        options: ["5", "x", "'x'", "Error"],
        correct: 0,
        explanation: "The variable `x` stores the number `5`. Passing `x` without quotes to `print()` outputs the stored value `5`.",
        hint: "The variable x stores the number 5.",
        type: "code",
        difficulty: "VERY EASY"
    },
    // Q3
    {
        question: "What is the output of this simple calculation?",
        code: "print(10 + 5)",
        options: ["105", "50", "15", "Error"],
        correct: 2,
        explanation: "The `+` operator adds `10` and `5` numerically to produce `15`.",
        hint: "Simple arithmetic addition: 10 + 5.",
        type: "code",
        difficulty: "VERY EASY"
    },
    // Q4
    {
        question: "What does this string concatenation print?",
        code: "a = 'Py'\nb = 'thon'\nprint(a + b)",
        options: ["Py thon", "Py+thon", "Error", "Python"],
        correct: 3,
        explanation: "When applied to strings, the `+` operator joins them end-to-end without adding spaces, resulting in `Python`.",
        hint: "String concatenation links the two words directly together.",
        type: "code",
        difficulty: "VERY EASY"
    },
    // Q5
    {
        question: "What will len() return for this word?",
        code: "word = 'code'\nprint(len(word))",
        options: ["4", "3", "5", "Error"],
        correct: 0,
        explanation: "The `len()` function counts the number of characters in a string. `'code'` has 4 characters.",
        hint: "Count the letters: c - o - d - e.",
        type: "code",
        difficulty: "VERY EASY"
    },
    // Q6
    {
        question: "What is the output of accessing the first item in this list?",
        code: "fruits = ['apple', 'banana', 'cherry']\nprint(fruits[0])",
        options: ["banana", "cherry", "apple", "IndexError"],
        correct: 2,
        explanation: "Python uses 0-based indexing, so `fruits[0]` accesses the first item in the list (`apple`).",
        hint: "Python list indices start counting from 0.",
        type: "code",
        difficulty: "VERY EASY"
    },
    // Q7
    {
        question: "What will this if condition print?",
        code: "score = 80\nif score >= 50:\n    print('Pass')\nelse:\n    print('Fail')",
        options: ["Fail", "Pass", "Pass Fail", "Error"],
        correct: 1,
        explanation: "`80` is greater than or equal to `50`, so the `if` condition is `True` and `'Pass'` is printed.",
        hint: "Is 80 greater than or equal to 50?",
        type: "code",
        difficulty: "VERY EASY"
    },
    // Q8
    {
        question: "How many times does this loop print 'Hello'?",
        code: "for i in range(3):\n    print('Hello')",
        options: ["1 time", "2 times", "4 times", "3 times"],
        correct: 3,
        explanation: "`range(3)` produces `0`, `1`, and `2`, so the loop executes its body exactly 3 times.",
        hint: "range(3) runs for numbers 0, 1, and 2.",
        type: "code",
        difficulty: "VERY EASY"
    },
    // Q9
    {
        question: "What is the result of evaluating 10 > 20 in Python?",
        options: ["True", "None", "False", "Error"],
        correct: 2,
        explanation: "The `>` operator checks if the left value is strictly greater than the right value. Since `10` is not greater than `20`, it returns `False`.",
        hint: "Ask yourself: is 10 bigger than 20?",
        type: "concept",
        difficulty: "VERY EASY"
    },
    // Q10
    {
        question: "What is the value of x after this code runs?",
        code: "x = 10\nx = x + 5\nprint(x)",
        options: ["15", "10", "5", "20"],
        correct: 0,
        explanation: "`x` begins at `10`. Adding `5` gives `15`, which is reassigned back to `x`.",
        hint: "Calculate 10 + 5 to find the updated value of x.",
        type: "code",
        difficulty: "VERY EASY"
    }
];

// --------------------------------------------------
// LEVEL 2: 🚀 ROCKET (Functions, Loops & Core Concepts)
// --------------------------------------------------
const rocketQuestions = [
    // Q1
    {
        question: "Which symbol is used to write a single-line comment in Python?",
        options: ["//", "/*", "#", "--"],
        correct: 2,
        explanation: "Python uses the hash symbol `#` for comments. Everything on the line after `#` is ignored by Python.",
        hint: "Also known as the hash or pound symbol.",
        type: "concept",
        difficulty: "VERY EASY"
    },
    // Q2
    {
        question: "What will this list look like after calling append()?",
        code: "nums = [1, 2]\nnums.append(3)\nprint(nums)",
        options: ["[1, 2, 3]", "[3, 1, 2]", "[1, 2]", "[3]"],
        correct: 0,
        explanation: "The `append()` method adds the item to the very end of the list, resulting in `[1, 2, 3]`.",
        hint: "append places an element at the end of the list.",
        type: "code",
        difficulty: "VERY EASY"
    },
    // Q3
    {
        question: "What will this string method output?",
        code: "text = 'hello'\nprint(text.upper())",
        options: ["Hello", "hello", "Error", "HELLO"],
        correct: 3,
        explanation: "`upper()` converts all lowercase letters in the string to uppercase: `'HELLO'`.",
        hint: "upper converts text to CAPITAL letters.",
        type: "code",
        difficulty: "VERY EASY"
    },
    // Q4
    {
        question: "Which keyword is used to define a new function in Python?",
        options: ["function", "def", "func", "create"],
        correct: 1,
        explanation: "In Python, the `def` keyword (short for define) is used to create user-defined functions.",
        hint: "A short 3-letter keyword starting with 'd'.",
        type: "concept",
        difficulty: "VERY EASY"
    },
    // Q5
    {
        question: "What will this function call print?",
        code: "def double(n):\n    return n * 2\n\nprint(double(4))",
        options: ["4", "2", "16", "8"],
        correct: 3,
        explanation: "Passing `4` to `double(n)` computes `4 * 2`, returning `8` which is printed.",
        hint: "Multiply 4 by 2.",
        type: "code",
        difficulty: "VERY EASY"
    },
    // Q6
    {
        question: "What is the output of evaluating True and False in Python?",
        options: ["True", "False", "None", "Error"],
        correct: 1,
        explanation: "The logical `and` operator requires both sides to be `True`. Since one side is `False`, the expression returns `False`.",
        hint: "For 'and' to be True, both operands must be True.",
        type: "concept",
        difficulty: "VERY EASY"
    },
    // Q7
    {
        question: "How do you access the value of 'age' from this dictionary?",
        code: "user = {'name': 'Sam', 'age': 21}\nprint(user['age'])",
        options: ["Sam", "'age'", "21", "KeyError"],
        correct: 2,
        explanation: "Dictionary values are retrieved by key in brackets. `user['age']` returns the associated value `21`.",
        hint: "The key 'age' is paired with the number 21.",
        type: "code",
        difficulty: "VERY EASY"
    },
    // Q8
    {
        question: "What is the final value of total after this loop runs?",
        code: "total = 0\nfor n in [1, 2, 3]:\n    total = total + n\nprint(total)",
        options: ["6", "3", "5", "0"],
        correct: 0,
        explanation: "The loop iterates through each number: `0 + 1 = 1`, `1 + 2 = 3`, `3 + 3 = 6`. The final total is `6`.",
        hint: "Add up 1 + 2 + 3.",
        type: "code",
        difficulty: "VERY EASY"
    },
    // Q9
    {
        question: "In computer science, what is a step-by-step procedure for solving a problem called?",
        options: ["Compiler", "Algorithm", "Hardware", "Bandwidth"],
        correct: 1,
        explanation: "An algorithm is a finite, well-defined sequence of instructions designed to solve a problem or perform a task.",
        hint: "The fundamental recipe or instruction sequence in programming.",
        type: "concept",
        difficulty: "VERY EASY"
    },
    // Q10
    {
        question: "What will happen when you try to run this code?",
        code: "x = 10\nif x > 5\n    print('Greater')",
        options: [
            "It prints 'Greater' normally",
            "TypeError",
            "IndentationError",
            "SyntaxError (missing colon : after condition)"
        ],
        correct: 3,
        explanation: "In Python, `if` statement condition lines must end with a colon (`:`). Omitting it triggers a `SyntaxError`.",
        hint: "Notice what punctuation is missing at the end of the line 'if x > 5'.",
        type: "code",
        difficulty: "VERY EASY"
    }
];

// --------------------------------------------------
// LEVEL 3: 🤖 ROBOT (Basic Structures, OOP & Logic)
// --------------------------------------------------
const robotQuestions = [
    // Q1
    {
        question: "In Python, which data structure is written with parentheses () and cannot be changed after creation?",
        options: ["List", "Dictionary", "Set", "Tuple"],
        correct: 3,
        explanation: "Tuples are immutable sequences written with parentheses `()`. Once created, their elements cannot be modified.",
        hint: "Unlike lists, this collection type is immutable.",
        type: "concept",
        difficulty: "VERY EASY"
    },
    // Q2
    {
        question: "What is the output of accessing the last item using negative index -1?",
        code: "items = ['pen', 'book', 'laptop']\nprint(items[-1])",
        options: ["pen", "laptop", "book", "IndexError"],
        correct: 1,
        explanation: "Negative indices count backward from the end in Python. Index `-1` accesses the very last item (`laptop`).",
        hint: "Negative indexing counts backward from the end.",
        type: "code",
        difficulty: "VERY EASY"
    },
    // Q3
    {
        question: "What will this list slice print?",
        code: "letters = ['a', 'b', 'c', 'd']\nprint(letters[0:2])",
        options: ["['a', 'b']", "['a', 'b', 'c']", "['b', 'c']", "['a']"],
        correct: 0,
        explanation: "Slicing `[0:2]` includes items at index `0` and `1`, stopping before index `2`: `['a', 'b']`.",
        hint: "Includes index 0 and 1, stops right before index 2.",
        type: "code",
        difficulty: "VERY EASY"
    },
    // Q4
    {
        question: "In Object-Oriented Programming, what is a blueprint used to create objects called?",
        options: ["Method", "Instance", "Class", "Module"],
        correct: 2,
        explanation: "A Class is a blueprint or template from which individual object instances are created.",
        hint: "You define a 'class' to produce instances (objects).",
        type: "concept",
        difficulty: "VERY EASY"
    },
    // Q5
    {
        question: "What will this simple class output when greeted?",
        code: "class Robot:\n    def say_hi(self):\n        return 'Beep Boop'\n\nr = Robot()\nprint(r.say_hi())",
        options: ["None", "Beep Boop", "Robot", "Error"],
        correct: 1,
        explanation: "`r` is an instance of `Robot`. Calling `r.say_hi()` invokes the method, returning `'Beep Boop'`.",
        hint: "Calling the method say_hi() returns the robot's greeting.",
        type: "code",
        difficulty: "VERY EASY"
    },
    // Q6
    {
        question: "Which data structure follows the First-In, First-Out (FIFO) principle?",
        options: ["Queue", "Stack", "Binary Tree", "Hash Table"],
        correct: 0,
        explanation: "A Queue operates on FIFO (First-In, First-Out), where the first element added is the first one removed, like a real waiting line.",
        hint: "Think of waiting in a line or queue: the first person to arrive is served first.",
        type: "concept",
        difficulty: "VERY EASY"
    },
    // Q7
    {
        question: "What will len() return for this dictionary?",
        code: "car = {'brand': 'Ford', 'model': 'Mustang', 'year': 1964}\nprint(len(car))",
        options: ["6", "1", "3", "Error"],
        correct: 2,
        explanation: "`len()` on a dictionary counts the number of key-value pairs, which is `3` (`brand`, `model`, `year`).",
        hint: "Count the keys: brand, model, year.",
        type: "code",
        difficulty: "VERY EASY"
    },
    // Q8
    {
        question: "Which Git command is used to save a snapshot of staged changes into project history?",
        options: ["git push", "git add", "git init", "git commit"],
        correct: 3,
        explanation: "`git commit` creates a permanent snapshot of your staged changes in the local repository history.",
        hint: "You 'commit' your changes with a message.",
        type: "concept",
        difficulty: "VERY EASY"
    },
    // Q9
    {
        question: "What is the output of this simple while loop?",
        code: "count = 1\nwhile count < 3:\n    count = count + 1\nprint(count)",
        options: ["2", "3", "1", "4"],
        correct: 1,
        explanation: "`count` starts at `1`, increments to `2`, then increments to `3`. The loop stops because `3 < 3` is `False`, printing `3`.",
        hint: "Trace each step: 1 -> 2 -> 3, then it stops.",
        type: "code",
        difficulty: "VERY EASY"
    },
    // Q10
    {
        question: "What will this function return for check_number(12)?",
        code: "def check_number(n):\n    if n % 2 == 0:\n        return 'Even'\n    return 'Odd'\n\nprint(check_number(12))",
        options: ["Odd", "None", "Even", "Error"],
        correct: 2,
        explanation: "`12 % 2` produces a remainder of `0`, so the `if` condition is `True` and the function returns `'Even'`.",
        hint: "Is 12 an even or odd number?",
        type: "code",
        difficulty: "VERY EASY"
    }
];

// ==================================================
// LEVEL CONFIGURATIONS (Flexible & Extensible)
// ==================================================

const BUILDS = [
    {
        id: "house",
        levelNumber: 1,
        name: "House",
        icon: "🏠",
        title: "🏠 BUILD YOUR HOUSE",
        topicName: "LEVEL 1 — 🏠 HOUSE",
        description: "Python Basics, Variables & Print",
        questions: houseQuestions,
        pieces: housePieces,
        sceneElement: houseScene,
        completionTitle: "🏆 LEVEL 1 COMPLETE!",
        completionDesc: "You completed Level 1 and established your first permanent checkpoint!",
        unlockNext: "🔓 LEVEL 2 UNLOCKED: 🚀 ROCKET"
    },
    {
        id: "rocket",
        levelNumber: 2,
        name: "Rocket",
        icon: "🚀",
        title: "🚀 BUILD YOUR ROCKET",
        topicName: "LEVEL 2 — 🚀 ROCKET",
        description: "Functions, Loops & Core Concepts",
        questions: rocketQuestions,
        pieces: rocketPieces,
        sceneElement: rocketScene,
        completionTitle: "🏆 LEVEL 2 COMPLETE!",
        completionDesc: "You completed Level 2 and reached the orbital checkpoint!",
        unlockNext: "🔓 LEVEL 3 UNLOCKED: 🤖 ROBOT"
    },
    {
        id: "robot",
        levelNumber: 3,
        name: "Robot",
        icon: "🤖",
        title: "🤖 BUILD YOUR ROBOT",
        topicName: "LEVEL 3 — 🤖 ROBOT",
        description: "Basic Structures & OOP Logic",
        questions: robotQuestions,
        pieces: robotPieces,
        sceneElement: robotScene,
        completionTitle: "🏆 LEVEL 3 COMPLETE!",
        completionDesc: "You conquered Level 3 and completed the entire Build World!",
        unlockNext: "🏆 BUILD WORLD MASTERED!"
    }
];

// ==================================================
// GAME STATE (Dynamic Checkpoint & Progression System)
// ==================================================

let currentBuildIndex = 0;                                  // Index in BUILDS (0 = House, 1 = Rocket, 2 = Robot...)
let currentQuestionIndex = 0;                               // 0 to (build.questions.length - 1) within current level
let buildPieces = new Array(BUILDS.length).fill(0);         // Dynamic pieces built per build
let completedLevels = new Array(BUILDS.length).fill(false); // Dynamic checkpoint completion flags per build
let checkpointXp = 0;                                       // Permanent XP preserved from completed levels
let totalXp = 0;                                            // Active total XP
let streak = 0;                                             // Current consecutive correct streak
let bestStreak = 0;                                         // Best streak across the whole run
let lives = 3;                                              // Level-specific lives (always 3 per level!)
let hintsRemaining = 1;                                     // Strictly 1 hint per level attempt
let hintUsedForCurrentQuestion = false;
let isAnswerLocked = false;

// ==================================================
// BUILD PROGRESSION & SCENE MANAGEMENT
// ==================================================

function updateBuilding(newlyBuiltIndex) {
    const build = BUILDS[currentBuildIndex];
    const piecesBuilt = buildPieces[currentBuildIndex];
    const totalPieces = build.pieces ? build.pieces.length : build.questions.length;

    if (build.pieces) {
        build.pieces.forEach(function (piece, index) {
            const isBuilt = index < piecesBuilt;
            piece.classList.toggle("built", isBuilt);
            if (index === newlyBuiltIndex) {
                piece.classList.remove("piece-pop");
                void piece.offsetWidth; // Trigger reflow for animation restart
                piece.classList.add("piece-pop");
            }
        });
    }

    const percent = totalPieces > 0 ? Math.round((piecesBuilt / totalPieces) * 100) : 0;
    buildProgress.textContent = build.icon + " " + piecesBuilt + " / " + totalPieces + " (" + percent + "%)";
    buildProgressBar.style.width = percent + "%";
}

function buildNextPiece() {
    const build = BUILDS[currentBuildIndex];
    const totalPieces = build.pieces ? build.pieces.length : build.questions.length;
    if (buildPieces[currentBuildIndex] < totalPieces) {
        const newlyBuiltIndex = buildPieces[currentBuildIndex];
        buildPieces[currentBuildIndex] = newlyBuiltIndex + 1;
        updateBuilding(newlyBuiltIndex);
    }
}

function switchScene(targetIndex) {
    BUILDS.forEach(function (b, idx) {
        if (b.sceneElement) {
            if (idx === targetIndex) {
                b.sceneElement.style.display = "block";
                b.sceneElement.classList.add("active");
            } else {
                b.sceneElement.style.display = "none";
                b.sceneElement.classList.remove("active");
            }
        }
    });

    if (carScene) {
        carScene.style.display = "none";
    }

    if (BUILDS[targetIndex]) {
        builderTitle.textContent = BUILDS[targetIndex].title;
    }
    updateBuilding(-1);
}

function updateBuildWorldBar() {
    const container = worldItemsRow || document.getElementById("world-items-row");
    if (!container) return;

    const worldLevelCount = document.querySelector(".world-level-count");
    if (worldLevelCount) {
        worldLevelCount.textContent = BUILDS.length + " Levels";
    }

    let html = "";
    BUILDS.forEach(function (build, index) {
        let statusClass = "locked";
        let statusText = "🔒 Locked";
        const totalPieces = build.pieces ? build.pieces.length : build.questions.length;

        if (completedLevels[index]) {
            statusClass = "completed";
            statusText = "✅ Completed";
        } else if (currentBuildIndex === index) {
            statusClass = "active";
            statusText = "In Progress (" + buildPieces[index] + "/" + totalPieces + ")";
        } else if (index === 0) {
            statusClass = "";
            statusText = "Available";
        } else if (completedLevels[index - 1]) {
            statusClass = "";
            statusText = "🔓 Unlocked";
        } else {
            statusClass = "locked";
            statusText = "🔒 Locked";
        }

        if (index > 0) {
            html += '<div class="world-divider" aria-hidden="true">➔</div>';
        }

        html += '<div id="world-item-' + build.id + '" class="world-item ' + statusClass + '">' +
            '<span class="world-icon">' + build.icon + '</span>' +
            '<div class="world-info">' +
                '<span class="world-name">L' + build.levelNumber + ': ' + escapeHtml(build.name) + '</span>' +
                '<span class="world-status">' + statusText + '</span>' +
            '</div>' +
        '</div>';
    });

    container.innerHTML = html;
}

// ==================================================
// LIVES DISPLAY HELPER
// ==================================================

function updateLivesDisplay() {
    let livesText = "";
    for (let i = 0; i < 3; i++) {
        livesText += (i < lives) ? "❤️ " : "🖤 ";
    }
    livesDisplay.textContent = livesText.trim();
}

// ==================================================
// HINT SYSTEM (Strictly 1 Hint Per Level)
// ==================================================

function updateHintDisplay() {
    if (hintsRemaining <= 0) {
        hintButton.disabled = true;
        hintButton.textContent = "💡 Hint Used";
        hintButton.classList.add("disabled");
    } else {
        hintButton.disabled = false;
        hintButton.textContent = "💡 Hint (1 left)";
        hintButton.classList.remove("disabled");
    }
}

hintButton.addEventListener("click", function () {
    if (hintsRemaining <= 0 || lives <= 0 || isAnswerLocked) {
        return;
    }

    const build = BUILDS[currentBuildIndex];
    const question = build.questions[currentQuestionIndex];

    if (!hintUsedForCurrentQuestion && hintsRemaining > 0) {
        hintsRemaining = 0;
        hintUsedForCurrentQuestion = true;
        updateHintDisplay();
    }

    hintBox.textContent = "💡 Clue: " + question.hint;
    hintBox.style.display = "block";
    hintButton.disabled = true;
});

// ==================================================
// STREAK & MILESTONE NOTIFICATIONS
// ==================================================

function checkStreakMilestone(currentStreak) {
    let message = "";
    if (currentStreak === 3) {
        message = "🔥 3 IN A ROW! ON FIRE!";
    } else if (currentStreak === 5) {
        message = "⚡ 5 STREAK! UNSTOPPABLE!";
    } else if (currentStreak === 10) {
        message = "🌟 10 STREAK! PERFECT RUN!";
    }

    if (message) {
        streakBanner.textContent = message;
        streakBanner.style.display = "block";
        setTimeout(function () {
            streakBanner.style.display = "none";
        }, 2200);
    }
}

// Helper to escape HTML characters in strings
function escapeHtml(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// ==================================================
// QUESTION LOADING & UI UPDATES
// ==================================================

function loadQuestion() {
    const build = BUILDS[currentBuildIndex];
    const question = build.questions[currentQuestionIndex];
    const totalQuestions = build.questions.length;

    // Header level indicator & question progress
    levelIndicator.textContent = build.topicName;
    levelIndicator.className = "level-indicator level-" + build.levelNumber;
    questionProgress.textContent = "Question " + (currentQuestionIndex + 1) + " / " + totalQuestions;

    // Question number & difficulty badge
    questionNumber.textContent = "Question " + (currentQuestionIndex + 1) + " / " + totalQuestions + " (" + build.name + ")";
    difficultyBadge.textContent = question.difficulty;
    difficultyBadge.className = "difficulty-badge badge-easy";

    // Question text
    questionText.textContent = question.question;

    // Code snippet display
    if (question.code) {
        codeSnippetText.textContent = question.code;
        codeSnippetBox.style.display = "block";
    } else {
        codeSnippetText.textContent = "";
        codeSnippetBox.style.display = "none";
    }

    // Populate answer buttons with distinct option badges
    const prefixes = ["A", "B", "C", "D"];
    answerButtons.forEach(function (button, index) {
        button.innerHTML = '<span class="ans-badge">' + prefixes[index] + '</span><span class="ans-text">' + escapeHtml(question.options[index]) + '</span>';
        button.disabled = false;
        button.style.display = "flex";
        button.className = "answer-btn";
    });

    // Reset hint state for current question
    hintUsedForCurrentQuestion = false;
    hintBox.textContent = "";
    hintBox.style.display = "none";
    updateHintDisplay();

    // Reset result box
    resultBox.style.display = "none";
    resultBox.className = "result-box";
    resultStreakTag.style.display = "none";
    resultCorrectAnswer.style.display = "none";
    continueButton.textContent = "CONTINUE ➔";

    // Unlock answers
    isAnswerLocked = false;
    updateBuildWorldBar();
    updateBuilding(-1);
}

// ==================================================
// ANSWER HANDLING & LOCKING
// ==================================================

function handleAnswer(selectedIndex) {
    if (isAnswerLocked) {
        return;
    }

    // Immediately lock all answer buttons to prevent multiple clicks
    isAnswerLocked = true;
    answerButtons.forEach(function (btn) {
        btn.disabled = true;
    });

    const build = BUILDS[currentBuildIndex];
    const question = build.questions[currentQuestionIndex];
    const isCorrect = (selectedIndex === question.correct);
    const isFinalQuestion = (currentQuestionIndex === build.questions.length - 1);

    const resultLifeTag = document.getElementById("result-life-tag");
    const resultPieceTag = document.getElementById("result-piece-tag");

    if (isCorrect) {
        // Correct answer: +10 XP, +1 streak, build exactly 1 piece
        totalXp = totalXp + 10;
        scoreDisplay.textContent = "⭐ " + totalXp + " XP";

        streak = streak + 1;
        if (streak > bestStreak) {
            bestStreak = streak;
        }
        streakDisplay.textContent = "🔥 " + streak;
        checkStreakMilestone(streak);

        buildNextPiece();

        answerButtons[selectedIndex].classList.add("btn-correct");

        // Populate Result Box
        resultBox.className = "result-box result-correct";
        resultStatus.textContent = "✅ CORRECT ANSWER!";
        resultXpTag.textContent = "+10 XP";
        resultXpTag.className = "result-pill xp-pill xp-earned";

        if (resultLifeTag) {
            resultLifeTag.style.display = "none";
        }

        if (resultPieceTag) {
            resultPieceTag.textContent = "🧱 Piece Added to Build!";
            resultPieceTag.style.display = "inline-flex";
        }

        if (streak > 1) {
            resultStreakTag.textContent = "🔥 Streak: " + streak + " in a row!";
            resultStreakTag.style.display = "inline-flex";
        } else {
            resultStreakTag.textContent = "🔥 Streak Started!";
            resultStreakTag.style.display = "inline-flex";
        }

        resultCorrectAnswer.style.display = "none";
        resultExplanation.textContent = question.explanation;

        if (isFinalQuestion) {
            continueButton.textContent = "COMPLETE LEVEL " + build.levelNumber + " ➔";
        } else {
            continueButton.textContent = "CONTINUE ➔";
        }

    } else {
        // Wrong answer: -1 life on current level, reset streak, build NOTHING
        lives = Math.max(0, lives - 1);
        streak = 0;
        streakDisplay.textContent = "🔥 0";
        updateLivesDisplay();

        answerButtons[selectedIndex].classList.add("btn-wrong");
        answerButtons[question.correct].classList.add("btn-correct");

        // Populate Result Box
        resultBox.className = "result-box result-wrong";
        resultStatus.textContent = "❌ INCORRECT";
        resultXpTag.textContent = "+0 XP";
        resultXpTag.className = "result-pill xp-pill xp-zero";

        if (resultLifeTag) {
            resultLifeTag.textContent = "💔 -1 Life (" + lives + " left)";
            resultLifeTag.style.display = "inline-flex";
        }

        if (resultPieceTag) {
            resultPieceTag.style.display = "none";
        }

        resultStreakTag.textContent = "🔥 Streak Reset to 0";
        resultStreakTag.style.display = "inline-flex";

        resultCorrectAnswer.innerHTML = '<span class="correct-label">Correct answer:</span> <span class="correct-val">' + escapeHtml(question.options[question.correct]) + '</span>';
        resultCorrectAnswer.style.display = "block";
        resultExplanation.textContent = question.explanation;

        // If lives reach 0, update continue button text
        if (lives === 0) {
            continueButton.textContent = "SEE RESULTS 💀";
        } else if (isFinalQuestion) {
            continueButton.textContent = "COMPLETE LEVEL " + build.levelNumber + " ➔";
        } else {
            continueButton.textContent = "CONTINUE ➔";
        }
    }

    resultBox.style.display = "block";
    updateBuildWorldBar();
}

// ==================================================
// CONTINUE BUTTON HANDLER (Manual Progression)
// ==================================================

continueButton.addEventListener("click", function () {
    // If lives hit 0, trigger Level Failed
    if (lives === 0) {
        showLevelFailed();
        return;
    }

    const build = BUILDS[currentBuildIndex];
    // If more questions remain in the level, advance to next question
    if (currentQuestionIndex < build.questions.length - 1) {
        currentQuestionIndex = currentQuestionIndex + 1;
        loadQuestion();
    } else {
        // Final question of level reached and player survived!
        completeCurrentLevel();
    }
});

// ==================================================
// LEVEL COMPLETION (Checkpoint Reached)
// ==================================================

function completeCurrentLevel() {
    const build = BUILDS[currentBuildIndex];

    // Mark current level as completed checkpoint
    completedLevels[currentBuildIndex] = true;

    // Save checkpoint XP permanently
    checkpointXp = totalXp;

    updateBuildWorldBar();

    if (currentBuildIndex < BUILDS.length - 1) {
        // More levels remain -> Show Checkpoint screen
        questionCard.style.display = "none";
        levelCompleteCard.style.display = "block";

        const nextBuild = BUILDS[currentBuildIndex + 1];
        const totalPieces = build.pieces ? build.pieces.length : build.questions.length;

        levelCompleteTitle.textContent = "LEVEL " + build.levelNumber + " COMPLETE!";
        const completeBadge = document.getElementById("build-complete-badge");
        if (completeBadge) {
            completeBadge.textContent = build.icon + " " + build.name.toUpperCase() + " BUILT!";
        }
        levelCompleteMessage.textContent = "Outstanding work! You completed all " + build.questions.length + " questions in Level " + build.levelNumber + " and established a permanent checkpoint!";

        buildCompleteStats.innerHTML =
            '<div class="stat-card-row">' +
                '<div class="mini-stat-card"><span class="m-label">CHECKPOINT XP</span><span class="m-val">⭐ ' + totalXp + ' XP</span></div>' +
                '<div class="mini-stat-card"><span class="m-label">PIECES BUILT</span><span class="m-val">🧱 ' + buildPieces[currentBuildIndex] + ' / ' + totalPieces + '</span></div>' +
                '<div class="mini-stat-card"><span class="m-label">BEST STREAK</span><span class="m-val">🔥 ' + bestStreak + '</span></div>' +
                '<div class="mini-stat-card"><span class="m-label">LIVES PRESERVED</span><span class="m-val">❤️ ' + lives + ' / 3</span></div>' +
            '</div>';

        buildUnlockBanner.innerHTML =
            '<div class="next-level-preview-box">' +
                '<span class="next-level-tag">NEXT LEVEL</span>' +
                '<div class="next-level-title">' + nextBuild.icon + ' Level ' + nextBuild.levelNumber + ': ' + nextBuild.name + '</div>' +
                '<div class="next-level-desc">' + (nextBuild.description || "") + '</div>' +
                '<div class="next-level-perks">❤️ 3 Fresh Lives • 💡 1 Fresh Hint</div>' +
            '</div>';

        nextLevelButton.textContent = "CONTINUE TO LEVEL " + nextBuild.levelNumber + " (" + nextBuild.name.toUpperCase() + ") ➔";
    } else {
        // Final level complete (All levels conquered!) -> Final Victory Screen
        showGameComplete();
    }
}

nextLevelButton.addEventListener("click", function () {
    levelCompleteCard.style.display = "none";
    questionCard.style.display = "block";

    // Advance to next level
    currentBuildIndex = currentBuildIndex + 1;
    currentQuestionIndex = 0;

    // Each new level gets fresh 3 lives & fresh 1 hint!
    lives = 3;
    hintsRemaining = 1;
    streak = 0;

    updateLivesDisplay();
    updateHintDisplay();
    switchScene(currentBuildIndex);
    updateBuildWorldBar();
    loadQuestion();
});

// ==================================================
// LEVEL FAILED SCREEN (Restarts ONLY the Current Level)
// ==================================================

function showLevelFailed() {
    questionCard.style.display = "none";
    levelCompleteCard.style.display = "none";
    gameCompleteCard.style.display = "none";
    gameOverCard.style.display = "block";
    tryAgainButton.style.display = "inline-block";
    hintButton.disabled = true;

    const build = BUILDS[currentBuildIndex];
    const totalPieces = build.pieces ? build.pieces.length : build.questions.length;
    const gameOverTitle = document.getElementById("game-over-title");
    if (gameOverTitle) {
        gameOverTitle.textContent = "💀 LEVEL " + build.levelNumber + " FAILED";
    }

    gameOverMessage.textContent = "You ran out of lives on Level " + build.levelNumber + " (" + build.name + ").";

    gameOverStats.innerHTML =
        '<div class="stat-card-row">' +
            '<div class="mini-stat-card"><span class="m-label">STOPPED AT</span><span class="m-val">Question ' + (currentQuestionIndex + 1) + ' / ' + build.questions.length + '</span></div>' +
            '<div class="mini-stat-card"><span class="m-label">PIECES BUILT</span><span class="m-val">🧱 ' + buildPieces[currentBuildIndex] + ' / ' + totalPieces + '</span></div>' +
            '<div class="mini-stat-card"><span class="m-label">SAVED CHECKPOINT XP</span><span class="m-val">⭐ ' + checkpointXp + ' XP</span></div>' +
        '</div>' +
        '<p class="checkpoint-preserve-note">💾 <strong>Checkpoints are preserved!</strong> Previous completed levels remain saved. Only Level ' + build.levelNumber + ' will restart with 3 fresh lives and 1 hint.</p>';

    tryAgainButton.textContent = "TRY LEVEL " + build.levelNumber + " AGAIN ↺";
}

// When TRY AGAIN is clicked on a failed level:
tryAgainButton.addEventListener("click", function () {
    // Restart ONLY the current level!
    // Player does NOT go back to Level 1!
    currentQuestionIndex = 0;
    buildPieces[currentBuildIndex] = 0; // Reset only this level's build pieces
    lives = 3;                         // Fresh 3 lives for retry!
    hintsRemaining = 1;                // Reset hints for retry (strictly 1 hint)!
    streak = 0;
    totalXp = checkpointXp;            // Restore XP from previously completed checkpoints

    // Update displays
    scoreDisplay.textContent = "⭐ " + totalXp + " XP";
    streakDisplay.textContent = "🔥 0";
    updateLivesDisplay();
    updateHintDisplay();

    // Reset visual pieces for only the current level scene
    if (BUILDS[currentBuildIndex] && BUILDS[currentBuildIndex].pieces) {
        BUILDS[currentBuildIndex].pieces.forEach(function (p) {
            p.classList.remove("built");
            p.classList.remove("piece-pop");
        });
    }

    // Reset UI visibility
    gameOverCard.style.display = "none";
    tryAgainButton.style.display = "none";
    questionCard.style.display = "block";

    switchScene(currentBuildIndex);
    updateBuildWorldBar();
    loadQuestion();
});

// ==================================================
// FINAL GAME COMPLETE (All Levels Conquered)
// ==================================================

function showGameComplete() {
    questionCard.style.display = "none";
    levelCompleteCard.style.display = "none";
    gameOverCard.style.display = "none";
    gameCompleteCard.style.display = "block";
    hintButton.disabled = true;

    // Dynamically render completed builds showcase from BUILDS
    const showcaseContainer = completedBuildsShowcase || document.getElementById("completed-builds-showcase") || document.querySelector(".completed-builds-showcase");
    if (showcaseContainer) {
        let showcaseHtml = "";
        BUILDS.forEach(function (build, index) {
            const totalPieces = build.pieces ? build.pieces.length : build.questions.length;
            const pieces = buildPieces[index] !== undefined ? buildPieces[index] : totalPieces;
            showcaseHtml +=
                '<div class="showcase-card">' +
                    '<span class="showcase-icon">' + build.icon + '</span>' +
                    '<div class="showcase-text">' +
                        '<span class="showcase-name">' + escapeHtml(build.name) + ' — Complete</span>' +
                        '<span class="showcase-sub">Level ' + build.levelNumber + ' • ' + pieces + '/' + totalPieces + ' Pieces</span>' +
                    '</div>' +
                    '<span class="showcase-check">✓</span>' +
                '</div>';
        });
        showcaseContainer.innerHTML = showcaseHtml;
    }

    const completeSubtitle = document.getElementById("game-complete-subtitle") || gameCompleteCard.querySelector(".complete-subtitle");
    if (completeSubtitle) {
        completeSubtitle.textContent = "All " + BUILDS.length + " Levels Mastered";
    }

    const gameCompleteSummary = document.getElementById("game-complete-summary");
    if (gameCompleteSummary) {
        const buildNames = BUILDS.map(function (b) { return b.name; });
        let namesText = "";
        if (buildNames.length <= 2) {
            namesText = buildNames.join(" and ");
        } else {
            namesText = buildNames.slice(0, -1).join(", ") + ", and " + buildNames[buildNames.length - 1];
        }
        gameCompleteSummary.textContent =
            "Incredible achievement! You conquered all " + BUILDS.length +
            " levels, solved engineering challenges, and successfully built the " +
            namesText + "!";
    }

    const maxPossibleXp = BUILDS.reduce(function (sum, b) {
        return sum + (b.questions.length * 10);
    }, 0);
    const totalPiecesBuilt = buildPieces.reduce(function (sum, count) {
        return sum + count;
    }, 0);
    const maxPossiblePieces = BUILDS.reduce(function (sum, b) {
        return sum + (b.pieces ? b.pieces.length : b.questions.length);
    }, 0);
    const completedCount = completedLevels.filter(Boolean).length;

    finalStats.innerHTML =
        '<div class="final-score-banner">' +
            '<span class="score-title">TOTAL XP EARNED</span>' +
            '<span class="score-number">⭐ ' + totalXp + ' / ' + maxPossibleXp + ' XP</span>' +
        '</div>' +
        '<div class="stat-card-row">' +
            '<div class="mini-stat-card"><span class="m-label">COMPLETED BUILDS</span><span class="m-val">' + completedCount + ' / ' + BUILDS.length + ' Complete</span></div>' +
            '<div class="mini-stat-card"><span class="m-label">TOTAL PIECES</span><span class="m-val">🧱 ' + totalPiecesBuilt + ' / ' + maxPossiblePieces + '</span></div>' +
            '<div class="mini-stat-card"><span class="m-label">BEST STREAK</span><span class="m-val">🔥 ' + bestStreak + ' in a row</span></div>' +
            '<div class="mini-stat-card"><span class="m-label">CHECKPOINTS</span><span class="m-val">💾 ' + completedCount + ' / ' + BUILDS.length + ' Secured</span></div>' +
        '</div>';

    updateBuildWorldBar();
}

// Bind Play Again Button for Game Complete Screen
if (playAgainButton) {
    playAgainButton.addEventListener("click", function () {
        startNewGame();
    });
}

// ==================================================
// FULL GAME RESET (From Start Screen or Play Again)
// ==================================================

function startNewGame() {
    currentBuildIndex = 0;
    currentQuestionIndex = 0;
    buildPieces = new Array(BUILDS.length).fill(0);
    completedLevels = new Array(BUILDS.length).fill(false);
    checkpointXp = 0;
    totalXp = 0;
    streak = 0;
    bestStreak = 0;
    lives = 3;
    hintsRemaining = 1;                 // Exactly 1 hint
    hintUsedForCurrentQuestion = false;
    isAnswerLocked = false;

    scoreDisplay.textContent = "⭐ 0 XP";
    streakDisplay.textContent = "🔥 0";
    updateLivesDisplay();
    updateHintDisplay();

    hintBox.textContent = "";
    hintBox.style.display = "none";
    streakBanner.style.display = "none";

    // Clear all piece built styles
    BUILDS.forEach(function (b) {
        if (b.pieces) {
            b.pieces.forEach(function (p) {
                p.classList.remove("built", "piece-pop");
            });
        }
    });

    // Reset screen cards visibility
    levelCompleteCard.style.display = "none";
    gameOverCard.style.display = "none";
    gameCompleteCard.style.display = "none";
    tryAgainButton.style.display = "none";
    questionCard.style.display = "block";

    switchScene(0);
    updateBuildWorldBar();
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
    startNewGame();
});

// Initial Setup on load
switchScene(0);
updateBuilding(-1);
updateBuildWorldBar();
