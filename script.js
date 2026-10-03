// ==================================================
// BUILD IT! — V3 Level-Based Game Engine
// Technical Learning Game with Checkpoint Progression
// ==================================================

// DOM Element References
const startButton = document.getElementById("start-button");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");

// Build World Progression Map Elements
const worldMapScreen = document.getElementById("world-map-screen");
const worldMapJourney = document.getElementById("world-map-journey");
const mapTotalXp = document.getElementById("map-total-xp");
const mapCheckpointsVal = document.getElementById("map-checkpoints-val");
const mapStreakVal = document.getElementById("map-streak-val");
const mapBackBtn = document.getElementById("map-back-btn");
const openWorldMapBtn = document.getElementById("open-world-map-btn");
const buildWorldBar = document.getElementById("build-world-bar");

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
const builderStage = document.getElementById("builder-stage");
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
const challengeTypeBadge = document.getElementById("challenge-type-badge");
const difficultyBadge = document.getElementById("difficulty-badge");
const questionText = document.getElementById("question-text");
const codeSnippetBox = document.getElementById("code-snippet-box");
const codeSnippetText = document.getElementById("code-snippet-text");
const codeSnippetLang = document.querySelector(".code-lang");
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
// LEVEL 1: 🏠 HOUSE (Python Fundamentals, Variables & Print)
// Mix: 4 MCQ, 3 Output, 2 Code-Choice, 1 Bug
// Distribution: A: 3, B: 3, C: 2, D: 2
// --------------------------------------------------
const houseQuestions = [
    // Q1
    {
        question: "Which built-in Python function displays text or numbers in the console?",
        options: ["display()", "print()", "write()", "output()"],
        correct: 1,
        explanation: "`print()` is Python's built-in function to display text and values to the screen.",
        hint: "Think of putting words onto paper.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q2
    {
        question: "Which line of Python code correctly stores the number 10 in a variable named score?",
        options: ["score = 10", "var score = 10", "int score = 10", "10 -> score"],
        correct: 0,
        explanation: "Python creates and assigns variables using just the variable name, an `=` sign, and the value.",
        hint: "Python does not require keywords like 'var' or type declarations.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    // Q3
    {
        question: "What will this Python calculation output?",
        code: "print(10 + 5)",
        options: ["105", "50", "15", "Error"],
        correct: 2,
        explanation: "The `+` operator adds `10` and `5` numerically to produce `15`.",
        hint: "Simple arithmetic addition: 10 + 5.",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q4
    {
        question: "What is wrong with this Python code?",
        code: "age = 20\nprint(Age)",
        options: [
            "Variables cannot store numbers in Python",
            "print() requires curly braces instead of parentheses",
            "The variable age cannot be printed without converting to text",
            "Variable names are case-sensitive, so 'Age' is not defined"
        ],
        correct: 3,
        explanation: "Python is case-sensitive: `age` and `Age` are completely different identifiers. Calling `Age` raises a `NameError`.",
        hint: "Check the capitalization of the variable name in both lines.",
        type: "bug",
        difficulty: "VERY EASY"
    },
    // Q5
    {
        question: "What will this string concatenation print?",
        code: "first = 'Py'\nsecond = 'thon'\nprint(first + second)",
        options: ["Python", "Py thon", "Py+thon", "None"],
        correct: 0,
        explanation: "The `+` operator joins string variables end-to-end without extra spaces, outputting `Python`.",
        hint: "Concatenation attaches the two strings directly together.",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q6
    {
        question: "Which code correctly prints the text 'Hello, World!' in Python?",
        options: [
            "echo 'Hello, World!'",
            "print('Hello, World!')",
            "System.out.println('Hello, World!')",
            "console.log('Hello, World!')"
        ],
        correct: 1,
        explanation: "In Python, `print()` with string quotes is the standard way to print messages.",
        hint: "Python uses the print() function with parentheses.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    // Q7
    {
        question: "What data type does the value 3.14 belong to in Python?",
        options: ["int", "str", "float", "bool"],
        correct: 2,
        explanation: "Numbers with a fractional decimal point (like `3.14`) are of type `float` in Python.",
        hint: "Floating-point numbers represent values with decimals.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q8
    {
        question: "Which symbol is used to assign a value to a variable in Python?",
        options: [":=", "==", "->", "="],
        correct: 3,
        explanation: "A single equals sign `=` is the assignment operator in Python. Double equals `==` is for comparison.",
        hint: "A single standard equals character.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q9
    {
        question: "What will this variable reassignment print?",
        code: "x = 5\nx = x + 3\nprint(x)",
        options: ["5", "8", "53", "3"],
        correct: 1,
        explanation: "`x` starts at `5`. Adding `3` produces `8`, which is assigned back to `x`.",
        hint: "Calculate 5 + 3.",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q10
    {
        question: "What is the result of evaluating 10 > 20 in Python?",
        options: ["False", "True", "None", "Error"],
        correct: 0,
        explanation: "10 is not greater than 20, so the comparison evaluates to the Boolean value `False`.",
        hint: "Ask yourself: is 10 strictly greater than 20?",
        type: "mcq",
        difficulty: "VERY EASY"
    }
];

// --------------------------------------------------
// LEVEL 2: 🚀 ROCKET (Strings, Operators, Loops & Functions)
// Mix: 4 MCQ, 3 Output, 2 Code-Choice, 1 Bug
// Distribution: A: 3, B: 2, C: 3, D: 2
// --------------------------------------------------
const rocketQuestions = [
    // Q1
    {
        question: "Which symbol is used for writing single-line comments in Python?",
        options: ["//", "/*", "#", "--"],
        correct: 2,
        explanation: "Python uses `#` for single-line comments. Everything on the line after `#` is ignored by the interpreter.",
        hint: "Also called the hash, pound, or number sign.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q2
    {
        question: "What will this string method output?",
        code: "city = 'tokyo'\nprint(city.upper())",
        options: ["TOKYO", "tokyo", "Tokyo", "Error"],
        correct: 0,
        explanation: "`upper()` converts all lowercase characters in the string to uppercase letters.",
        hint: "upper() transforms all characters to uppercase.",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q3
    {
        question: "Which keyword is used to define a reusable function in Python?",
        options: ["function", "def", "func", "fn"],
        correct: 1,
        explanation: "In Python, `def` (short for define) is the keyword used to declare functions.",
        hint: "A 3-letter keyword beginning with 'd'.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    // Q4
    {
        question: "What is the syntax bug in this if statement?",
        code: "score = 85\nif score >= 50\n    print('Passed')",
        options: [
            "score cannot be compared with a number",
            "print() must be inside curly braces",
            "The if condition line is missing a colon (:) at the end",
            "The variable name must be capitalized"
        ],
        correct: 2,
        explanation: "In Python, header statements like `if`, `for`, `while`, and `def` must end with a colon (`:`).",
        hint: "Look at the end of the line 'if score >= 50'.",
        type: "bug",
        difficulty: "VERY EASY"
    },
    // Q5
    {
        question: "What will this function call output?",
        code: "def multiply_by_two(n):\n    return n * 2\n\nprint(multiply_by_two(4))",
        options: ["4", "6", "16", "8"],
        correct: 3,
        explanation: "`multiply_by_two(4)` calculates `4 * 2`, returning `8`, which is printed.",
        hint: "Multiply 4 by 2.",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q6
    {
        question: "Which code creates a for loop that repeats exactly 3 times?",
        options: [
            "for i in range(3):",
            "loop 3 times:",
            "for (i = 0; i < 3; i++):",
            "repeat(3):"
        ],
        correct: 0,
        explanation: "`for i in range(3):` is the standard Python loop syntax, generating values 0, 1, and 2.",
        hint: "Python uses 'for ... in range(...):'.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    // Q7
    {
        question: "What is the result of evaluating True and False in Python?",
        options: ["True", "False", "None", "Error"],
        correct: 1,
        explanation: "The logical `and` operator requires both operands to be `True`. Since one is `False`, the result is `False`.",
        hint: "Both sides must be True for 'and' to be True.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q8
    {
        question: "What will be printed after this loop finishes?",
        code: "total = 0\nfor n in [1, 2, 3]:\n    total = total + n\nprint(total)",
        options: ["3", "5", "6", "0"],
        correct: 2,
        explanation: "The loop iterates over the numbers: `0 + 1 = 1`, `1 + 2 = 3`, `3 + 3 = 6`. Final total is `6`.",
        hint: "Add 1 + 2 + 3.",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q9
    {
        question: "Which operator checks if two values are equal in Python?",
        options: ["=", ":=", "equals", "=="],
        correct: 3,
        explanation: "`==` is the equality comparison operator. A single `=` is used for assigning values to variables.",
        hint: "Double equals sign checks equality.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q10
    {
        question: "What method adds a new item to the end of a Python list?",
        options: ["append()", "push()", "insert_end()", "add()"],
        correct: 0,
        explanation: "`append()` is the built-in list method that appends an element to the end of the list.",
        hint: "It starts with the letter 'a'.",
        type: "mcq",
        difficulty: "VERY EASY"
    }
];

// --------------------------------------------------
// LEVEL 3: 🤖 ROBOT (Lists, Tuples, Dictionaries & Classes)
// Mix: 4 MCQ, 3 Output, 2 Code-Choice, 1 Bug
// Distribution: A: 3, B: 2, C: 2, D: 3
// --------------------------------------------------
const robotQuestions = [
    // Q1
    {
        question: "Which Python data structure is defined using parentheses () and cannot be modified after creation?",
        options: ["List", "Dictionary", "Set", "Tuple"],
        correct: 3,
        explanation: "Tuples are immutable sequences in Python created with parentheses `()`. Their elements cannot be changed once created.",
        hint: "An immutable sequence starting with 'T'.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q2
    {
        question: "What is printed when accessing index -1 of this list?",
        code: "items = ['book', 'pen', 'laptop']\nprint(items[-1])",
        options: ["book", "laptop", "pen", "IndexError"],
        correct: 1,
        explanation: "Negative index `-1` retrieves the last element of the list, which is `'laptop'`.",
        hint: "Negative indexing counts backward starting from the last item.",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q3
    {
        question: "What will this list slice produce?",
        code: "letters = ['a', 'b', 'c', 'd']\nprint(letters[0:2])",
        options: ["['a', 'b']", "['a', 'b', 'c']", "['b', 'c']", "['a']"],
        correct: 0,
        explanation: "Slicing `[0:2]` includes items from index `0` up to (but not including) index `2`: `['a', 'b']`.",
        hint: "Includes index 0 and 1, stops before index 2.",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q4
    {
        question: "Which code correctly accesses the value of the key 'brand' in this dictionary?",
        code: "car = {'brand': 'Tesla', 'model': '3'}",
        options: [
            "car.get_key('brand')",
            "car(brand)",
            "car['brand']",
            "car->brand"
        ],
        correct: 2,
        explanation: "Dictionary values are retrieved using square bracket notation with the key name: `car['brand']`.",
        hint: "Use square brackets [] with the key name.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    // Q5
    {
        question: "What is the bug in this Python function definition?",
        code: "def greet(name)\n    return 'Hello ' + name",
        options: [
            "return statements are not allowed in functions",
            "name cannot be passed as an argument",
            "Functions must be called with curly braces",
            "Missing colon (:) after def greet(name)"
        ],
        correct: 3,
        explanation: "Function definition lines must end with a colon `:` to start the indented code block.",
        hint: "Check the punctuation at the end of the 'def' line.",
        type: "bug",
        difficulty: "VERY EASY"
    },
    // Q6
    {
        question: "In Object-Oriented Programming (OOP), what is a blueprint used for creating objects?",
        options: ["Class", "Method", "Module", "Variable"],
        correct: 0,
        explanation: "A Class serves as a blueprint or template from which individual object instances are created.",
        hint: "You define a 'class' to instantiate objects.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q7
    {
        question: "What will this simple class method call output?",
        code: "class Bot:\n    def speak(self):\n        return 'Beep'\n\nb = Bot()\nprint(b.speak())",
        options: ["None", "Beep", "Bot", "Error"],
        correct: 1,
        explanation: "`b` is an instance of `Bot`. Calling `b.speak()` runs the method and returns `'Beep'`.",
        hint: "The speak() method returns the string 'Beep'.",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q8
    {
        question: "Which code correctly defines a class named Robot in Python?",
        options: [
            "define Robot():",
            "class = Robot():",
            "class Robot:",
            "new class Robot{}"
        ],
        correct: 2,
        explanation: "In Python, classes are created using the `class` keyword followed by the class name and a colon: `class Robot:`.",
        hint: "The class keyword followed by the name and a colon.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    // Q9
    {
        question: "What does the len() function return when passed a dictionary with 3 key-value pairs?",
        options: ["6", "1", "Error", "3"],
        correct: 3,
        explanation: "When used on a dictionary, `len()` returns the number of keys (or key-value pairs), which is `3`.",
        hint: "It counts the total number of keys in the dictionary.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q10
    {
        question: "What keyword is used inside a loop to stop it immediately?",
        options: ["break", "exit", "stop", "halt"],
        correct: 0,
        explanation: "The `break` keyword immediately terminates the innermost enclosing loop.",
        hint: "To 'break' out of a loop.",
        type: "mcq",
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
        description: "Python Fundamentals, Variables & Print",
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
        description: "Strings, Operators, Loops & Functions",
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
        description: "Lists, Tuples, Dictionaries & Classes",
        questions: robotQuestions,
        pieces: robotPieces,
        sceneElement: robotScene,
        completionTitle: "🏆 LEVEL 3 COMPLETE!",
        completionDesc: "You conquered Level 3 and completed the entire Build World!",
        unlockNext: "🏆 BUILD WORLD COMPLETED!"
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

    // Build animation feedback on newly added piece
    if (newlyBuiltIndex >= 0) {
        const stage = builderStage || document.getElementById("builder-stage");
        if (stage) {
            stage.classList.remove("stage-build-glow");
            void stage.offsetWidth;
            stage.classList.add("stage-build-glow");
        }
        if (buildProgress) {
            buildProgress.classList.remove("badge-pop");
            void buildProgress.offsetWidth;
            buildProgress.classList.add("badge-pop");
        }
    }
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
    renderWorldMap();
}

// ==================================================
// BUILD WORLD / PROGRESSION MAP SYSTEM
// ==================================================

function renderWorldMap() {
    const journeyContainer = worldMapJourney || document.getElementById("world-map-journey");
    if (!journeyContainer) return;

    // Update Header summary stats
    const xpEl = mapTotalXp || document.getElementById("map-total-xp");
    if (xpEl) {
        xpEl.textContent = "⭐ " + totalXp + " XP";
    }

    const completedCount = completedLevels.filter(Boolean).length;
    const checkpointsEl = mapCheckpointsVal || document.getElementById("map-checkpoints-val");
    if (checkpointsEl) {
        checkpointsEl.textContent = "💾 " + completedCount + " / " + BUILDS.length + " BUILT";
    }

    const streakEl = mapStreakVal || document.getElementById("map-streak-val");
    if (streakEl) {
        streakEl.textContent = "🔥 " + bestStreak;
    }

    // (Duplicate bottom Start Building button removed per specification; main action button is on the active level card)

    let html = "";
    BUILDS.forEach(function (build, index) {
        const totalPieces = build.pieces ? build.pieces.length : build.questions.length;
        const currentPieces = buildPieces[index] !== undefined ? buildPieces[index] : 0;

        // Dynamic state determination:
        // COMPLETED: completedLevels[index] is true
        // CURRENT: index === currentBuildIndex && !completedLevels[index]
        // LOCKED: index > currentBuildIndex
        let state = "locked";
        let stateBadgeText = "🔒 LOCKED";
        let stateClass = "state-locked";
        let statusMsg = "Locked • Complete Level " + index + " to unlock";

        if (completedLevels[index]) {
            state = "completed";
            stateBadgeText = "✓ BUILT";
            stateClass = "state-completed";
            statusMsg = "Checkpoint Secured • " + totalPieces + " / " + totalPieces + " Pieces";
        } else if (index === currentBuildIndex) {
            state = "current";
            stateBadgeText = "▶ BUILDING NOW";
            stateClass = "state-current";
            statusMsg = "Active Project • " + currentPieces + " / " + totalPieces + " Pieces";
        } else if (index < currentBuildIndex) {
            state = "completed";
            stateBadgeText = "✓ BUILT";
            stateClass = "state-completed";
            statusMsg = "Checkpoint Secured";
        } else {
            state = "locked";
            stateBadgeText = "🔒 LOCKED";
            stateClass = "state-locked";
            statusMsg = "Locked • Complete Level " + index + " to unlock";
        }

        // Progression pathway connector between builds
        if (index > 0) {
            const isConnectorActive = completedLevels[index - 1];
            html += '<div class="map-path-connector ' + (isConnectorActive ? 'active' : '') + '">' +
                '<div class="connector-track">' +
                    '<div class="connector-line"></div>' +
                    '<div class="connector-arrow">' + (isConnectorActive ? '↓' : '▼') + '</div>' +
                '</div>' +
            '</div>';
        }

        // Build Node Card
        html += '<div class="map-node-wrapper">' +
            '<div class="map-node-card ' + stateClass + '" id="map-node-' + build.id + '">' +
                '<div class="node-header">' +
                    '<span class="node-level-tag">LEVEL ' + build.levelNumber + '</span>' +
                    '<span class="node-state-pill ' + stateClass + '">' + stateBadgeText + '</span>' +
                '</div>' +
                '<div class="node-body">' +
                    '<div class="node-icon-wrap ' + stateClass + '">' +
                        '<span class="node-icon">' + build.icon + '</span>' +
                        (state === "completed" ? '<span class="node-badge-corner check">✓</span>' : '') +
                        (state === "locked" ? '<span class="node-badge-corner lock">🔒</span>' : '') +
                    '</div>' +
                    '<div class="node-content">' +
                        '<h3 class="node-title">' + escapeHtml(build.name.toUpperCase()) + '</h3>' +
                        '<p class="node-topic">' + escapeHtml(build.description || "") + '</p>' +
                        '<div class="node-meta-row">' +
                            '<span class="node-meta-chip">🎯 ' + build.questions.length + ' Questions</span>' +
                            '<span class="node-meta-chip">🧱 ' + (state === "completed" ? totalPieces : currentPieces) + ' / ' + totalPieces + ' Pieces</span>' +
                        '</div>' +
                    '</div>' +
                '</div>';

        // Node Footer (Action or Status message)
        if (state === "current") {
            const btnLabel = (currentQuestionIndex > 0 || buildPieces[index] > 0) ? "RESUME BUILDING ➔" : "START BUILDING ➔";
            html += '<div class="node-footer">' +
                '<button class="btn-action primary-btn node-action-btn" type="button" data-level="' + index + '">' +
                    btnLabel +
                '</button>' +
            '</div>';
        } else if (state === "completed") {
            html += '<div class="node-footer">' +
                '<div class="node-status-bar completed">' +
                    '<span class="status-icon">✓</span>' +
                    '<span class="status-text">' + escapeHtml(statusMsg) + '</span>' +
                '</div>' +
            '</div>';
        } else {
            html += '<div class="node-footer">' +
                '<div class="node-status-bar locked">' +
                    '<span class="status-icon">🔒</span>' +
                    '<span class="status-text">' + escapeHtml(statusMsg) + '</span>' +
                '</div>' +
            '</div>';
        }

        html += '</div></div>'; // End map-node-card & map-node-wrapper
    });

    journeyContainer.innerHTML = html;

    // Attach event listeners to card action buttons
    const nodeActionBtns = journeyContainer.querySelectorAll(".node-action-btn");
    nodeActionBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            enterGameplayFromMap();
        });
    });
}

function enterGameplayFromMap() {
    // If all levels are already completed, show final victory screen
    if (completedLevels.every(Boolean)) {
        if (worldMapScreen) worldMapScreen.style.display = "none";
        if (gameScreen) gameScreen.style.display = "block";
        showGameComplete();
        return;
    }

    if (worldMapScreen) worldMapScreen.style.display = "none";
    if (startScreen) startScreen.style.display = "none";
    if (gameScreen) gameScreen.style.display = "block";

    // Ensure game cards visibility
    if (gameOverCard) gameOverCard.style.display = "none";
    if (levelCompleteCard) levelCompleteCard.style.display = "none";
    if (gameCompleteCard) gameCompleteCard.style.display = "none";
    if (questionCard) questionCard.style.display = "block";

    switchScene(currentBuildIndex);
    updateBuildWorldBar();
    updateBuilding(-1);

    if (!questionText.textContent || questionText.textContent === "Loading question...") {
        loadQuestion();
    }
}

function openWorldMap() {
    if (gameScreen) gameScreen.style.display = "none";
    if (startScreen) startScreen.style.display = "none";
    if (worldMapScreen) worldMapScreen.style.display = "block";
    renderWorldMap();
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
    difficultyBadge.textContent = question.difficulty || "VERY EASY";
    difficultyBadge.className = "difficulty-badge badge-easy";

    // Dynamic challenge type badge
    const qType = question.type || "mcq";
    if (challengeTypeBadge) {
        if (qType === "output") {
            challengeTypeBadge.textContent = "⚡ PREDICT OUTPUT";
            challengeTypeBadge.className = "challenge-type-badge type-output";
        } else if (qType === "code-choice") {
            challengeTypeBadge.textContent = "💻 CODE CHOICE";
            challengeTypeBadge.className = "challenge-type-badge type-code-choice";
        } else if (qType === "bug") {
            challengeTypeBadge.textContent = "🐛 FIND THE BUG";
            challengeTypeBadge.className = "challenge-type-badge type-bug";
        } else {
            challengeTypeBadge.textContent = "🎯 CONCEPT";
            challengeTypeBadge.className = "challenge-type-badge type-mcq";
        }
    }

    // Question text
    questionText.textContent = question.question;

    // Code snippet display
    if (question.code) {
        codeSnippetText.textContent = question.code;
        codeSnippetBox.style.display = "block";
        if (codeSnippetLang) {
            if (qType === "bug") {
                codeSnippetLang.textContent = "Buggy Code • Python";
            } else if (qType === "output") {
                codeSnippetLang.textContent = "Code • Python";
            } else {
                codeSnippetLang.textContent = "Python";
            }
        }
    } else {
        codeSnippetText.textContent = "";
        codeSnippetBox.style.display = "none";
    }

    // Populate answer buttons with distinct option badges
    const prefixes = ["A", "B", "C", "D"];
    const isCodeChoice = (qType === "code-choice");
    answerButtons.forEach(function (button, index) {
        button.innerHTML = '<span class="ans-badge">' + prefixes[index] + '</span><span class="ans-text">' + escapeHtml(question.options[index]) + '</span>';
        button.disabled = false;
        button.style.display = "flex";
        button.className = isCodeChoice ? "answer-btn code-choice-btn" : "answer-btn";
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

        const isCodeChoice = (question.type === "code-choice");
        const correctValHtml = isCodeChoice
            ? '<code class="correct-val-code">' + escapeHtml(question.options[question.correct]) + '</code>'
            : '<span class="correct-val">' + escapeHtml(question.options[question.correct]) + '</span>';
        resultCorrectAnswer.innerHTML = '<span class="correct-label">Correct answer:</span> ' + correctValHtml;
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

    // Transition to World Map progression screen
    gameScreen.style.display = "none";
    worldMapScreen.style.display = "block";
    renderWorldMap();
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
                        '<span class="showcase-name">' + escapeHtml(build.name) + ' — Completed</span>' +
                        '<span class="showcase-sub">Level ' + build.levelNumber + ' • ' + pieces + ' / ' + totalPieces + ' Pieces Built</span>' +
                    '</div>' +
                    '<span class="showcase-check">✓</span>' +
                '</div>';
        });
        showcaseContainer.innerHTML = showcaseHtml;
    }

    const completeSubtitle = document.getElementById("game-complete-subtitle") || gameCompleteCard.querySelector(".complete-subtitle");
    if (completeSubtitle) {
        completeSubtitle.textContent = "All " + BUILDS.length + " Levels Completed";
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
            '<div class="mini-stat-card"><span class="m-label">LEVELS COMPLETED</span><span class="m-val">' + completedCount + ' / ' + BUILDS.length + ' Completed</span></div>' +
            '<div class="mini-stat-card"><span class="m-label">PIECES BUILT</span><span class="m-val">🧱 ' + totalPiecesBuilt + ' / ' + maxPossiblePieces + '</span></div>' +
            '<div class="mini-stat-card"><span class="m-label">BEST STREAK</span><span class="m-val">🔥 ' + bestStreak + ' in a row</span></div>' +
            '<div class="mini-stat-card"><span class="m-label">CHECKPOINTS</span><span class="m-val">💾 ' + completedCount + ' / ' + BUILDS.length + ' Secured</span></div>' +
        '</div>';

    updateBuildWorldBar();
}

// Bind Play Again Button for Game Complete Screen
if (playAgainButton) {
    playAgainButton.addEventListener("click", function () {
        if (gameScreen) gameScreen.style.display = "none";
        if (startScreen) startScreen.style.display = "none";
        if (worldMapScreen) worldMapScreen.style.display = "block";
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
    renderWorldMap();
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
    gameScreen.style.display = "none";
    worldMapScreen.style.display = "block";
    renderWorldMap();
});

// Bind World Map Actions & Navigation
if (mapBackBtn) {
    mapBackBtn.addEventListener("click", function () {
        worldMapScreen.style.display = "none";
        startScreen.style.display = "block";
    });
}

if (openWorldMapBtn) {
    openWorldMapBtn.addEventListener("click", function () {
        openWorldMap();
    });
}

if (buildWorldBar) {
    buildWorldBar.addEventListener("click", function (e) {
        if (e.target && (e.target.id === "open-world-map-btn" || e.target.closest(".open-map-btn"))) {
            return;
        }
        if (e.target.closest(".world-item")) {
            openWorldMap();
        }
    });
}

// Initial Setup on load
switchScene(0);
updateBuilding(-1);
updateBuildWorldBar();
loadQuestion();
renderWorldMap();
