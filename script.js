// ==================================================
// BUILD IT! — V3 Level-Based Game Engine
// Technical Learning Game with Checkpoint Progression
// ==================================================

// DOM Element References

const hudDailyBtn = document.getElementById("hud-daily-btn");
const hudAchievementsBtn = document.getElementById("hud-achievements-btn");
const hudReviewBtn = document.getElementById("hud-review-btn");
const hudRecordsBtn = document.getElementById("hud-records-btn");
const hudNewGameBtn = document.getElementById("hud-new-game-btn");
const challengeModalClose = document.getElementById("challenge-modal-close");
const cityChallengeModal = document.getElementById("city-challenge-modal");

const startButton = document.getElementById("start-button");
const startButtonText = document.getElementById("start-button-text");
const newGameButton = document.getElementById("new-game-button");
const newGameConfirmModal = document.getElementById("new-game-confirm-modal");
const newGameModalClose = document.getElementById("new-game-modal-close");
const newGameCancelBtn = document.getElementById("new-game-cancel-btn");
const newGameConfirmBtn = document.getElementById("new-game-confirm-btn");
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

// Dedicated Achievements Screen Elements
const achievementsScreen = document.getElementById("achievements-screen");
const achievementsBackBtn = document.getElementById("achievements-back-btn");
const homeWorldMapBtn = document.getElementById("home-world-map-btn");
const homeAchievementsBtn = document.getElementById("home-achievements-btn");
const homeAchievementsBadge = document.getElementById("home-achievements-badge");
const openAchievementsBtn = document.getElementById("open-achievements-btn");

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
const resultConceptBar = document.getElementById("result-concept-bar");
const resultConceptText = document.getElementById("result-concept-text");
const resultWrongChoiceNote = document.getElementById("result-wrong-choice-note");
const resultWrongChoiceText = document.getElementById("result-wrong-choice-text");
const resultExplanationHeading = document.getElementById("result-explanation-heading");
const resultTakeawayBox = document.getElementById("result-takeaway-box");
const resultTakeawayText = document.getElementById("result-takeaway-text");
const resultLearnMoreWrap = document.getElementById("result-learn-more-wrap");
const resultLearnMoreToggle = document.getElementById("result-learn-more-toggle");
const resultLearnMoreDrawer = document.getElementById("result-learn-more-drawer");
const resultLearnMoreText = document.getElementById("result-learn-more-text");
const learnMoreChevron = document.getElementById("learn-more-chevron");
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

// Sound, Toast & Achievements Elements
const soundToggleBtn = document.getElementById("sound-toggle-btn");
const soundToggleIcon = document.getElementById("sound-toggle-icon");
const soundToggleLabel = document.getElementById("sound-toggle-label");
const toastContainer = document.getElementById("toast-container");
const mapDailyStreakVal = document.getElementById("map-daily-streak-val");
const mapDailyBestVal = document.getElementById("map-daily-best-val");
const achievementsCountBadge = document.getElementById("achievements-count-badge");
const worldAchievementsGrid = document.getElementById("world-achievements-grid");
const perfectLevelBanner = document.getElementById("perfect-level-banner");
const finalAchievementsShowcase = document.getElementById("final-achievements-showcase");

// V9 DOM Element References (Mission Briefing, Mistake Review & Reports)
const missionBriefingCard = document.getElementById("mission-briefing-card");
const briefingStartBtn = document.getElementById("briefing-start-btn");
const levelChallengeStats = document.getElementById("level-challenge-stats");
const reviewMistakesLevelBtn = document.getElementById("review-mistakes-level-btn");
const levelMistakesBadge = document.getElementById("level-mistakes-badge");
const finalGradeBox = document.getElementById("final-grade-box");
const finalChallengeStats = document.getElementById("final-challenge-stats");
const finalPersonalRecords = document.getElementById("final-personal-records");
const reviewMistakesFinalBtn = document.getElementById("review-mistakes-final-btn");
const finalMistakesBadge = document.getElementById("final-mistakes-badge");
const mistakeReviewModal = document.getElementById("mistake-review-modal");
const closeReviewBtn = document.getElementById("close-review-btn");
const prevMistakeBtn = document.getElementById("prev-mistake-btn");
const nextMistakeBtn = document.getElementById("next-mistake-btn");
const reviewContent = document.getElementById("review-content");
const mistakeCounterText = document.getElementById("mistake-counter-text");

// EVOLUTION UPGRADE: DOM References
const homeGoalsCard = document.getElementById("home-goals-card");
const homeGoalsItemsRow = document.getElementById("home-goals-items-row");
const homeGoalsWeakConcept = document.getElementById("home-goals-weak-concept");
const homeDailyBuildBtn = document.getElementById("home-daily-build-btn");
const homeDailyBadge = document.getElementById("home-daily-badge");
const mapDailyBuildBtn = document.getElementById("map-daily-build-btn");
const worldMapMasterySection = document.getElementById("world-map-mastery-section");
const conceptMasteryGrid = document.getElementById("concept-mastery-grid");
const mapWeakConceptText = document.getElementById("map-weak-concept-text");

// Mission Tracker
const missionTracker = document.getElementById("mission-tracker");
const trackerMissionName = document.getElementById("tracker-mission-name");
const trackerPieceTarget = document.getElementById("tracker-piece-target");
const missionStepsRow = document.getElementById("mission-steps-row");

// Revenge Banner
const revengeBanner = document.getElementById("revenge-banner");
const revengeSubtitle = document.getElementById("revenge-subtitle");

// Code Builder
const codeBuilderContainer = document.getElementById("code-builder-container");
const codeBuilderSlots = document.getElementById("code-builder-slots");
const codeBuilderTokens = document.getElementById("code-builder-tokens");
const builderResetBtn = document.getElementById("builder-reset-btn");
const builderSubmitBtn = document.getElementById("builder-submit-btn");

// Daily Build Modal
const dailyBuildModal = document.getElementById("daily-build-modal");
const dailyBuildModalClose = document.getElementById("daily-build-modal-close");
const dailyModalBody = document.getElementById("daily-modal-body");

// Final Results 4 Quadrants
const quadWellContent = document.getElementById("quad-well-content");
const quadStruggledContent = document.getElementById("quad-struggled-content");
const quadLearnedContent = document.getElementById("quad-learned-content");
const quadNextContent = document.getElementById("quad-next-content");

// Orientation & Dedicated Challenge Containers
const challengeOrientationBar = document.getElementById("challenge-orientation-bar");
const orientationWorldTag = document.getElementById("orientation-world-tag");
const orientationStageTag = document.getElementById("orientation-stage-tag");
const orientationMissionTag = document.getElementById("orientation-mission-tag");
const outputChallengeContainer = document.getElementById("output-challenge-container");
const outputTerminalCode = document.getElementById("output-terminal-code");
const outputPromptText = document.getElementById("output-prompt-text");
const debugChallengeContainer = document.getElementById("debug-challenge-container");
const debugCodeText = document.getElementById("debug-code-text");
const worldSelectorNav = document.getElementById("world-selector-nav");
const futureWorldsSection = document.getElementById("future-worlds-section");
const futureWorldsGrid = document.getElementById("future-worlds-grid");


// ==================================================
// QUESTION BANK (Very Beginner-Friendly & Educational)
// ==================================================

// --------------------------------------------------
// LEVEL 1: 🏠 HOUSE (Python Fundamentals, Variables & Print)
// Pool: 20 Unique Questions (MCQ, Output, Code-Choice, Bug)
// --------------------------------------------------
// --------------------------------------------------
// LEVEL 1: 🏠 HOUSE (Python Fundamentals, Variables & Print)
// Pool: 20 Unique Questions (MCQ, Output, Code-Choice, Bug)
// --------------------------------------------------
const houseQuestions = [
    {
        id: "l1-mcq-000",
        concept: "Python Introduction",
        question: "What is Python primarily known for in programming?",
        options: ["A clear, readable, and beginner-friendly programming language", "A physical mechanical tool for assembling hardware motors", "A database query tool that cannot run application logic", "An operating system like Windows or Linux"],
        correct: 0,
        explanation: "Python is designed with an emphasis on code readability and clean English-like syntax, making it one of the most accessible and widely-used programming languages in the world.",
        takeaway: "Python uses clean, simple syntax so you can focus directly on learning programming logic.",
        learnMore: "Python was created by Guido van Rossum in 1991. Today it powers web applications, data science, artificial intelligence, automation, and games.",
        optionNotes: [null, "Python is software code, not a mechanical machine part.", "Python is a full general-purpose programming language, not just a query tool.", "Python is a programming language that runs on top of operating systems like Linux, macOS, and Windows."],
        hint: "Think about why Python is so popular for learning to code.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-mcq-001",
        concept: "Python print()",
        question: "Which built-in Python function displays text or numbers in the console?",
        options: ["display()", "print()", "write()", "output()"],
        correct: 1,
        explanation: "`print()` is Python's built-in standard function designed to output text, numbers, and variables to the console screen.",
        takeaway: "Use `print()` whenever you want to display data or messages to the screen.",
        learnMore: "You can pass multiple items into `print()` separated by commas, and Python will automatically separate them with a space.",
        optionNotes: ["`display()` is used in IPython/Jupyter environments, but is not standard built-in Python.", null, "`write()` is a file method (e.g. `file.write()`), not a global console print function.", "`output()` does not exist in Python's standard built-in functions."],
        hint: "Think of putting words onto paper.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-mcq-007",
        concept: "String Data Type (str)",
        question: "What data type does the text \"Hello\" belong to in Python?",
        options: ["char", "text", "str", "word"],
        correct: 2,
        explanation: "Text enclosed in quotes (single, double, or triple quotes) is of type `str` (string) in Python.",
        takeaway: "Textual data in Python is always represented by the `str` data type.",
        learnMore: "Strings in Python are immutable sequences of Unicode characters, supporting international text and emojis.",
        optionNotes: ["`char` is a single-character type in C/Java; Python has no `char` type, only single-character `str`.", "`text` is a descriptive word, not a built-in Python data type.", null, "`word` is not a data type in Python."],
        hint: "Short for 'string'.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-mcq-num",
        concept: "Numbers (Integers)",
        question: "Which of the following represents a number (integer) in Python?",
        options: ["val 42", "\"42\"", "number(42)", "42"],
        correct: 3,
        explanation: "In Python, numbers are written directly without quotation marks. Writing \"42\" with quotes creates a text string, not a number.",
        takeaway: "Write numbers directly without quotes to perform mathematical calculations.",
        learnMore: "Python integers (int) can be as large as your computer memory allows without overflowing.",
        optionNotes: ["val is used in languages like Kotlin/Scala, not Python.", "Surrounding with quotes makes it a string, not an integer.", "number() is not a standard Python type constructor (Python uses int()).", null],
        hint: "Numbers should not have quotation marks around them.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-code-001",
        concept: "Variable Assignment",
        question: "Which line of Python code correctly stores the number 10 in a variable named score?",
        options: ["var score = 10", "score = 10", "int score = 10", "10 -> score"],
        correct: 1,
        explanation: "Python dynamically assigns variables using the variable name, a single `=` symbol, and the value. No keywords or type declarations are needed.",
        takeaway: "Variables in Python are created automatically the first time you assign a value to them using `=`.",
        learnMore: "Python is dynamically typed: you don't need `var`, `let`, or `int` like JavaScript, C++, or Java.",
        optionNotes: ["`var` is used in JavaScript and other languages, but causes a `SyntaxError` in Python.", null, "`int score = 10` is C/Java syntax; Python does not use static type prefix declarations.", "`->` is used for function return type hints, not for variable assignment."],
        hint: "Python does not require keywords like 'var' or type declarations.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-mcq-002",
        concept: "Float Data Type",
        question: "What data type does the value 3.14 belong to in Python?",
        options: ["int", "str", "float", "bool"],
        correct: 2,
        explanation: "In Python, any numeric value containing a decimal point (like `3.14`) belongs to the `float` (floating-point number) data type.",
        takeaway: "Numbers with fractional decimal points are `float`; whole numbers without decimals are `int`.",
        learnMore: "You can check the type of any value interactively using `type(3.14)`, which returns `<class 'float'>`.",
        optionNotes: ["`int` represents whole numbers without decimals (like `3` or `14`).", "`str` represents text characters enclosed in quotes (like `'3.14'`).", null, "`bool` represents Boolean logical values (`True` or `False`)."],
        hint: "Floating-point numbers represent values with decimals.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-output-001",
        concept: "Arithmetic Addition (+)",
        question: "What will this Python calculation output?",
        code: "print(10 + 5)",
        options: ["105", "50", "Error", "15"],
        correct: 3,
        explanation: "Python evaluates `10 + 5` first inside the parentheses, producing the numeric sum `15`, which `print()` then outputs.",
        takeaway: "The `+` operator performs standard numeric addition when used between two numbers.",
        learnMore: "If both operands are integers, the result is an integer (`15`). If either were a float (e.g. `10.0 + 5`), the result would be `15.0`.",
        optionNotes: ["`'105'` would only happen if they were strings (`'10' + '5'`), not numbers.", "`50` is the result of multiplication (`10 * 5`), not addition.", "Valid numeric addition never throws an error in Python.", null],
        hint: "Simple arithmetic addition: 10 + 5.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-mcq-003",
        concept: "Assignment Operator (=)",
        question: "Which symbol is used to assign a value to a variable in Python?",
        options: ["=", "==", "->", ":="],
        correct: 0,
        explanation: "A single equals sign `=` assigns the value on its right to the variable on its left. Double equals `==` is an equality comparison operator.",
        takeaway: "`=` assigns a value to a variable, while `==` checks if two values are equal.",
        learnMore: "Confusing `=` (assignment) with `==` (equality check) is one of the most common beginner syntax mistakes.",
        optionNotes: [null, "`==` tests for equality and returns `True` or `False`; it does not assign values.", "`->` is used for function type annotations, not variable assignment.", "`:=` is the walrus operator (assignment expression introduced in Python 3.8), not standard variable assignment."],
        hint: "A single standard equals character.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-mcq-004",
        concept: "Comparison Operators (>)",
        question: "What is the result of evaluating 10 > 20 in Python?",
        options: ["None", "True", "False", "Error"],
        correct: 2,
        explanation: "The comparison operator `>` tests if the left value is strictly greater than the right value. Since 10 is not greater than 20, Python returns the Boolean `False`.",
        takeaway: "Comparison operators (`>`, `<`, `==`, `!=`, `>=`, `<=`) always evaluate to `True` or `False`.",
        learnMore: "Boolean results can directly control conditional statements like `if 10 > 20:`.",
        optionNotes: ["`None` represents the absence of a value, not the result of a comparison.", "`True` would only be returned if 10 were strictly greater than 20.", null, "Comparing two integers is completely valid and does not raise an error."],
        hint: "Ask yourself: is 10 strictly greater than 20?",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-mcq-input",
        concept: "User Input: input()",
        question: "Which built-in function is used to ask for and receive text input from the user in Python?",
        options: ["scan()", "read()", "ask()", "input()"],
        correct: 3,
        explanation: "The input() function pauses program execution, displays an optional prompt message, and waits for the user to type text and press Enter.",
        takeaway: "Use input() to receive text entered by the user. It always returns data as a string.",
        learnMore: "Because input() returns a string, use int(input()) if you need the user\'s entry as a number.",
        optionNotes: ["scan() is used in languages like C (scanf) or Go, not Python.", "read() is a method on file objects, not the global console input function.", "ask() is not a built-in Python function.", null],
        hint: "It takes \'input\' from the user.",
        type: "mcq",
        difficulty: "EASY"
    },
    {
        id: "l1-bug-001",
        concept: "Case Sensitivity",
        question: "What is wrong with this Python code?",
        code: "age = 20\nprint(Age)",
        options: ["Variable names are case-sensitive, so 'Age' is not defined", "print() requires curly braces instead of parentheses", "The variable age cannot be printed without converting to text", "Variables cannot store numbers in Python"],
        correct: 0,
        explanation: "Python identifiers are case-sensitive. The variable defined was `age` (lowercase), so calling `Age` (capital A) raises a `NameError: name 'Age' is not defined`.",
        takeaway: "Variable names in Python must match in letter casing everywhere they are referenced.",
        learnMore: "Best practice in Python (PEP 8) is to use `snake_case` (lowercase words separated by underscores) for variable names.",
        optionNotes: [null, "`print()` uses parentheses `()`, never curly braces `{}`.", "Numbers can be printed directly by `print()` without manual conversion.", "Variables can store any data type in Python, including numbers."],
        hint: "Check the capitalization of the variable name in both lines.",
        type: "bug",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-output-002",
        concept: "String Concatenation (+)",
        question: "What will this string concatenation print?",
        code: "first = 'Py'\nsecond = 'thon'\nprint(first + second)",
        options: ["Py thon", "Python", "Py+thon", "None"],
        correct: 1,
        explanation: "When `+` is applied between strings, Python concatenates (joins) them directly end-to-end without adding any extra space: `'Py'` + `'thon'` = `'Python'`.",
        takeaway: "String concatenation (`+`) joins strings directly without inserting spaces.",
        learnMore: "To include a space between strings, either add `' '` explicitly or pass them as separate arguments to `print(first, second)`.",
        optionNotes: ["String concatenation does not insert spaces automatically between joined strings.", null, "The `+` operator executes concatenation; it does not print the literal plus symbol.", "`print()` prints the concatenated string, not `None`."],
        hint: "Concatenation attaches the two strings directly together.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-code-002",
        concept: "Standard Output Syntax",
        question: "Which code correctly prints the text 'Hello, World!' in Python?",
        options: ["echo 'Hello, World!'", "console.log('Hello, World!')", "System.out.println('Hello, World!')", "print('Hello, World!')"],
        correct: 3,
        explanation: "`print('Hello, World!')` uses Python's built-in `print()` function with string quotes inside parentheses.",
        takeaway: "Always call `print(...)` with parentheses and enclose literal text in quotes.",
        learnMore: "Both single quotes `'...'` and double quotes `\"...\"` work identically for defining strings in Python.",
        optionNotes: ["`echo` is a shell command (Bash/PHP), not valid Python syntax.", "`console.log()` is JavaScript syntax, not Python.", "`System.out.println()` is Java syntax, not Python.", null],
        hint: "Python uses the print() function with parentheses.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-output-003",
        concept: "Variable Reassignment & Updating",
        question: "What will this variable reassignment print?",
        code: "x = 5\nx = x + 3\nprint(x)",
        options: ["8", "5", "53", "3"],
        correct: 0,
        explanation: "Python executes right-to-left: `x = 5`, then `x + 3` evaluates to `8`, which is reassigned back to `x`. Printing `x` outputs `8`.",
        takeaway: "Reassigning a variable updates its stored value; the previous value is replaced.",
        learnMore: "Python provides a shorthand for this called an augmented assignment: `x += 3` means the exact same thing as `x = x + 3`.",
        optionNotes: [null, "`5` was the initial value of `x`, before `x = x + 3` was evaluated.", "`'53'` would only happen if `x` was a string `'5'` concatenated with `'3'`, but here `x` is an integer.", "`3` was the added value, not the resulting total."],
        hint: "Calculate 5 + 3.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-mcq-005",
        concept: "Data Inspection: type()",
        question: "What built-in function is used to find the data type of any variable in Python?",
        options: ["typeof()", "type()", "kind()", "classof()"],
        correct: 1,
        explanation: "`type()` is Python's built-in function that inspects an object and returns its data type (e.g. `type(42)` returns `<class 'int'>`).",
        takeaway: "Pass any variable or value into `type()` to inspect its data type.",
        learnMore: "In production code, `isinstance(x, int)` is often preferred over `type()` when checking if an object matches a specific type.",
        optionNotes: ["`typeof` is an operator in JavaScript, not a Python function.", null, "`kind()` does not exist in Python.", "`classof()` does not exist in Python."],
        hint: "A simple 4-letter function: 'type'.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-code-003",
        concept: "Python Identifier Rules",
        question: "Which of the following is a valid variable name in Python?",
        options: ["2nd_player", "player-score", "player_score", "class"],
        correct: 2,
        explanation: "`player_score` is valid because Python identifiers can use letters, numbers, and underscores, cannot start with a digit, and cannot contain hyphens or be reserved keywords.",
        takeaway: "Variable names can contain letters, numbers, and underscores, but cannot start with a number.",
        learnMore: "Python reserved keywords like `class`, `def`, `if`, and `for` cannot be used as variable names.",
        optionNotes: ["`2nd_player` is invalid because variable names cannot begin with a number.", "`player-score` is invalid because the hyphen is parsed as the subtraction operator `-`.", null, "`class` is a reserved Python keyword used to define classes and cannot be used as a variable name."],
        hint: "Uses letters and underscores without starting with numbers.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-output-004",
        concept: "Arithmetic Subtraction (-)",
        question: "What will this arithmetic calculation print?",
        code: "print(20 - 7)",
        options: ["13", "27", "14", "Error"],
        correct: 0,
        explanation: "Python evaluates `20 - 7` inside the `print()` call, subtracting 7 from 20 to compute `13`.",
        takeaway: "The `-` operator performs arithmetic subtraction between numeric values.",
        learnMore: "Subtracting a larger number from a smaller number produces a negative number (e.g., `7 - 20` yields `-13`).",
        optionNotes: [null, "`27` is the result of addition (`20 + 7`), not subtraction.", "`14` is an off-by-one arithmetic error; `20 - 7` is exactly `13`.", "Valid integer subtraction does not raise an error."],
        hint: "Subtract 7 from 20.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-bug-002",
        concept: "String Literal Syntax",
        question: "What error will occur when executing this line?",
        code: "print(\"Welcome to Python!)",
        options: ["TypeError", "SyntaxError: unterminated string literal", "NameError: Welcome is not defined", "ZeroDivisionError"],
        correct: 1,
        explanation: "The string starts with a double quote `\"` but is missing its closing double quote before the `)`, triggering a `SyntaxError: unterminated string literal`.",
        takeaway: "Every string literal must be closed with the exact same quote character that opened it.",
        learnMore: "The correct line is `print(\"Welcome to Python!\")`. Always ensure quotes and parentheses are properly balanced.",
        optionNotes: ["`TypeError` occurs when an operation is performed on incompatible types, not for unclosed quote syntax.", null, "`NameError` occurs when referencing an undefined variable name.", "`ZeroDivisionError` occurs when dividing by zero (`x / 0`)."],
        hint: "Notice the missing closing quote at the end of the text.",
        type: "bug",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-output-005",
        concept: "Arithmetic Multiplication (*)",
        question: "What will this multiplication output in Python?",
        code: "print(4 * 3)",
        options: ["7", "43", "12", "1"],
        correct: 2,
        explanation: "The asterisk `*` is Python's multiplication operator. `4 * 3` calculates 4 multiplied by 3, which produces `12`.",
        takeaway: "Use `*` for multiplication and `**` for exponentiation in Python.",
        learnMore: "When `*` is used between a string and an integer (e.g. `'A' * 3`), it repeats the string: `'AAA'`.",
        optionNotes: ["`7` is the result of addition (`4 + 3`), not multiplication.", "`43` would only occur if treating them as text characters, not numeric multiplication.", null, "`1` is the result of subtraction (`4 - 3`), not multiplication."],
        hint: "Multiply 4 times 3.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-mcq-006",
        concept: "Boolean Literals",
        question: "What are the two possible Boolean values in Python?",
        options: ["TRUE and FALSE", "yes and no", "1 and 0", "True and False"],
        correct: 3,
        explanation: "Python's Boolean literals are capitalized: `True` and `False`. Lowercase `true` or uppercase `TRUE` will raise a `NameError` unless defined as variables.",
        takeaway: "Booleans in Python must always be capitalized: `True` and `False`.",
        learnMore: "Under the hood in Python, `bool` is a subclass of `int`: `True == 1` and `False == 0`.",
        optionNotes: ["`TRUE` and `FALSE` in all caps are not recognized keywords and raise `NameError`.", "`yes` and `no` are regular words/identifiers, not built-in Boolean values in Python.", "`1` and `0` are integers that evaluate as truthy/falsy, but the literal Boolean type values are `True` and `False`.", null],
        hint: "Capital T and Capital F.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-code-004",
        concept: "Single-Line Comments (#)",
        question: "How do you write a single-line comment in Python?",
        options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "-- This is a comment"],
        correct: 1,
        explanation: "Python uses the hash symbol `#` for single-line comments. Everything following `#` on that line is ignored by the Python interpreter.",
        takeaway: "Prefix any single-line note or explanation with `#` to create a comment in Python.",
        learnMore: "Comments are essential for explaining *why* code does something, rather than just *what* it does.",
        optionNotes: ["`//` is used in C, C++, JavaScript, and Java, but in Python `//` is the floor division operator!", null, "`/* ... */` is C/JavaScript multi-line comment syntax, which causes a `SyntaxError` in Python.", "`--` is SQL/Lua comment syntax, not Python."],
        hint: "Starts with the '#' character.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-output-006",
        concept: "Variable Overwriting",
        question: "What will this variable update print?",
        code: "color = 'red'\ncolor = 'blue'\nprint(color)",
        options: ["red", "redblue", "blue", "None"],
        correct: 2,
        explanation: "`color` is first set to `'red'`. The second line reassigns `color = 'blue'`, overwriting the previous value. Printing `color` outputs `'blue'`.",
        takeaway: "When you assign a new value to an existing variable, the old value is replaced completely.",
        learnMore: "Python executes line-by-line from top to bottom, so the most recent assignment wins.",
        optionNotes: ["`'red'` was replaced by the subsequent assignment `'blue'`.", "Reassigning does not concatenate strings; it replaces the variable's value.", null, "`print()` outputs the stored variable value, not `None`."],
        hint: "Variables take on the newest assigned value.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-bug-003",
        concept: "Assignment Order (Left-hand Target)",
        question: "Why does this assignment raise a SyntaxError?",
        code: "100 = total",
        options: ["Variable names must be in uppercase", "Numbers cannot be used in Python programs", "total is a reserved keyword", "Cannot assign to a literal number; variable name must be on the left"],
        correct: 3,
        explanation: "In Python assignment, the variable name (target) must always be on the left-hand side of `=`. Writing `100 = total` tries to assign to a numeric literal, raising a `SyntaxError`.",
        takeaway: "Variable assignment always follows: `variable_name = value` (target on the left, value on the right).",
        learnMore: "The correct statement is `total = 100`. Python cannot change the value of the literal number `100`.",
        optionNotes: ["Variable names in Python do not need to be in uppercase (PEP 8 recommends lowercase).", "Numbers can freely be used throughout Python programs.", "`total` is not a reserved keyword; it is a valid variable identifier.", null],
        hint: "Variable name goes on the left, value goes on the right.",
        type: "bug",
        difficulty: "VERY EASY"
    },
    {
        id: "l1-bld-001",
        concept: "Variables",
        question: "Which line of Python code correctly stores \"Cozy Cabin\" in a variable named house_name?",
        type: "mcq",
        difficulty: "EASY",
        builderTokens: ["house_name", "=", "\"Cozy Cabin\"", "set", "=="],
        correctOrder: ["house_name", "=", "\"Cozy Cabin\""],
        solutionCode: "house_name = \"Cozy Cabin\"",
        explanation: "In Python, variable assignment uses the variable name on the left, a single equals sign =, and the value on the right.",
        takeaway: "Variable assignment syntax in Python is always: variable_name = value.",
        learnMore: "Variable names cannot start with a number or contain spaces. Snake_case is Python standard style.",
        options: ["house_name = \"Cozy Cabin\"", "set house_name = \"Cozy Cabin\"", "house_name == \"Cozy Cabin\"", "\"Cozy Cabin\" = house_name"],
        correct: 0,
        optionNotes: [null, "Python does not use a \"set\" keyword for assigning variables.", "== is for comparison, not assignment.", "Variable name must be on the left."],
        hint: "Start with the variable name, then the single equals operator."
    },
    {
        id: "l1-bld-002",
        concept: "Strings",
        question: "Which line of code correctly prints the variable wall joined with an exclamation mark \"!\"?",
        type: "mcq",
        difficulty: "MEDIUM",
        builderTokens: ["print(", "wall", "+", "\"!\"", ")", "show("],
        correctOrder: ["print(", "wall", "+", "\"!\"", ")"],
        solutionCode: "print(wall + \"!\")",
        explanation: "Strings are concatenated using the + operator inside print(). The closing parenthesis completes the call.",
        takeaway: "The + operator concatenates strings end-to-end without adding spaces.",
        learnMore: "String concatenation creates a brand new string object in memory.",
        options: ["print(wall & \"!\")", "show(wall + \"!\")", "print(wall + \"!\")", "print(wall ++ \"!\")"],
        correct: 2,
        optionNotes: ["& is bitwise AND, not string concatenation.", "show() is not standard Python.", null, "Python does not have a ++ operator."],
        hint: "Use print(), the variable wall, and the plus sign."
    },
    {
        id: "l1-cmp-001",
        concept: "Variables",
        question: "Complete the code snippet to display the stored blueprint variable in the console:",
        code: "blueprint = \"Modern Villa\"\nprint(____)",
        type: "code-completion",
        difficulty: "VERY EASY",
        options: ["print", "\"blueprint\"", "var blueprint", "blueprint"],
        correct: 3,
        explanation: "Passing the variable identifier blueprint directly into print() prints its evaluated value: \"Modern Villa\".",
        takeaway: "Pass the variable name without quotes to print its value.",
        learnMore: "If you put quotes around \"blueprint\", Python treats it as a literal string rather than looking up the variable.",
        optionNotes: ["print would print the built-in function object.", "Quotes would print the word \"blueprint\" literally rather than its value.", "Python does not use the var keyword.", null],
        hint: "Pass the variable name directly without quotes."
    },
    {
        id: "l1-cmp-002",
        concept: "Data Types",
        question: "Complete the code to convert the string \"15\" into an integer so it can be added to 5:",
        code: "raw_height = \"15\"\nheight = ____(raw_height) + 5",
        type: "code-completion",
        difficulty: "EASY",
        options: ["int", "str", "float", "number"],
        correct: 0,
        explanation: "The int() constructor converts numeric strings like \"15\" into the integer 15, enabling mathematical addition.",
        takeaway: "Use int() to parse integers from strings.",
        learnMore: "Adding a string to an integer directly causes a TypeError: can only concatenate str to str.",
        optionNotes: [null, "str() would keep it as a string, causing a TypeError when added to 5.", "float() converts to decimal 15.0, not integer.", "number is not a built-in conversion function in Python."],
        hint: "Three-letter keyword for integer."
    },
    {
        id: "l1-rev-001",
        concept: "Variables",
        question: "What will be the final value stored in the variable foundation after this sequence?",
        code: "foundation = \"Stone\"\nbase = foundation\nfoundation = \"Brick\"\nprint(base)",
        type: "output",
        difficulty: "MEDIUM",
        options: ["Brick", "Stone", "StoneBrick", "Error"],
        correct: 1,
        explanation: "In Python, base is assigned the value that foundation currently holds (\"Stone\"). Later changing foundation to \"Brick\" does not mutate base.",
        takeaway: "Variables hold values/references; reassigning one variable does not alter another already-assigned variable.",
        learnMore: "Primitive values like strings and numbers in Python are immutable.",
        optionNotes: ["foundation was changed to \"Brick\", but base still refers to \"Stone\".", null, "Assignment does not concatenate strings.", "All operations are valid; no error occurs."],
        hint: "Trace what value base was holding before foundation was changed."
    },
    {
        id: "l1-rev-002",
        concept: "Strings",
        question: "What is the output when multiplying a string by an integer in Python?",
        code: "pillar = \"|--|\"\nprint(pillar * 2)",
        type: "output",
        difficulty: "EASY",
        options: ["|--||--|", "|--| 2", "Error: cannot multiply string", "|--|*2"],
        correct: 0,
        explanation: "In Python, multiplying a string by an integer n repeats the string sequence n times.",
        takeaway: "String repetition with * duplicates the string sequence.",
        learnMore: "If you multiply a string by 0 or a negative number, Python returns an empty string \"\".",
        optionNotes: [null, "Multiplication does not insert spaces.", "String multiplication by integer is valid and standard in Python.", "It evaluates the operation, not printing the expression literally."],
        hint: "Repeating the sequence two times."
    },
    {
        id: "l1-rev-003",
        concept: "Data Types",
        question: "Which expression evaluates to False in Python?",
        options: ["bool(1)", "bool(0)", "bool(\"False\")", "bool(-5)"],
        correct: 1,
        explanation: "In Python, the number 0 is falsy, so bool(0) returns False. Any non-empty string like \"False\" and non-zero integers are truthy.",
        takeaway: "0, None, and empty collections are falsy; all non-zero numbers and non-empty strings are truthy.",
        learnMore: "Even the string \"False\" is truthy because its length is greater than 0!",
        optionNotes: ["1 is non-zero, so bool(1) is True.", null, "\"False\" is a non-empty string, so bool(\"False\") is True!", "-5 is non-zero, so it is True."],
        hint: "The number zero is falsy."
    },
    {
        id: "l1-rev-004",
        concept: "Debugging",
        question: "Which error occurs if you try to use a variable before it has been assigned a value?",
        code: "print(unbuilt_roof)",
        options: ["TypeError", "SyntaxError", "NameError", "ValueError"],
        correct: 2,
        explanation: "Python raises a NameError when an identifier or variable name is used that has not been defined in the current scope.",
        takeaway: "NameError means Python cannot find any variable with that name.",
        learnMore: "Make sure you define or assign your variable before reading it in your code.",
        optionNotes: ["TypeError occurs when an operation is applied to an inappropriate type.", "SyntaxError occurs before code runs when Python grammar rules are broken.", null, "ValueError occurs when a function receives an argument of right type but inappropriate value."],
        hint: "Error indicating an unknown name."
    }
];

// --------------------------------------------------
const rocketQuestions = [
    {
        id: "l2-mcq-001",
        concept: "Code Comments (#)",
        question: "Which symbol is used for writing single-line comments in Python?",
        options: ["//", "#", "/*", "--"],
        correct: 1,
        explanation: "In Python, the hash `#` symbol marks the start of a single-line comment. The interpreter skips everything after `#` on that line.",
        takeaway: "Use `#` to write developer notes and explanations that Python ignores during execution.",
        learnMore: "You can also place `#` comments at the end of a code line (an inline comment) to explain that specific line.",
        optionNotes: ["`//` is integer floor division in Python (e.g. `7 // 2 == 3`), not a comment symbol.", null, "`/* ... */` is C/JavaScript multi-line comment syntax, which causes a SyntaxError in Python.", "`--` is SQL/Lua comment syntax, not Python."],
        hint: "Also called the hash, pound, or number sign.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-output-001",
        concept: "String Methods: upper()",
        question: "What will this string method output?",
        code: "city = 'tokyo'\nprint(city.upper())",
        options: ["Tokyo", "tokyo", "TOKYO", "Error"],
        correct: 2,
        explanation: "The `.upper()` string method returns a new copy of the string with all lowercase alphabetic characters converted to uppercase: `'tokyo'` becomes `'TOKYO'`.",
        takeaway: "`.upper()` converts all characters in a string to uppercase without modifying the original string in-place.",
        learnMore: "Strings in Python are immutable; `.upper()` returns a transformed copy rather than modifying `city` in memory.",
        optionNotes: ["`'Tokyo'` only capitalizes the first letter (`.capitalize()`), while `.upper()` capitalizes all letters.", "`'tokyo'` is the original string before `.upper()` was called.", null, "Valid string method calls return the transformed string without error."],
        hint: "upper() transforms all characters to uppercase.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-code-001",
        concept: "Function Definition (def)",
        question: "Which keyword is used to define a reusable function in Python?",
        options: ["function", "fn", "func", "def"],
        correct: 3,
        explanation: "In Python, the `def` keyword (short for define) is required to declare and create a reusable function block followed by the function name, parentheses, and a colon.",
        takeaway: "Every Python function begins with the `def` keyword followed by the function name and parentheses.",
        learnMore: "Functions allow you to organize code into reusable blocks and reduce repetitive logic across your program.",
        optionNotes: ["`function` is used in JavaScript and TypeScript, but causes a `SyntaxError` in Python.", "`fn` is used in Rust, not Python.", "`func` is used in Go and Swift, not Python.", null],
        hint: "A 3-letter keyword beginning with 'd'.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-bug-001",
        concept: "if Statement Syntax (Colon :)",
        question: "What is the syntax bug in this if statement?",
        code: "score = 85\nif score >= 50\n    print('Passed')",
        options: ["The if condition line is missing a colon (:) at the end", "print() must be inside curly braces", "score cannot be compared with a number", "The variable name must be capitalized"],
        correct: 0,
        explanation: "In Python, compound statements that introduce an indented code block—such as `if`, `elif`, `else`, `for`, `while`, and `def`—must end with a colon `:`.",
        takeaway: "Always put a colon `:` at the end of conditional statements like `if condition:`.",
        learnMore: "The correct line is `if score >= 50:`. The colon signals Python that an indented suite of statements follows.",
        optionNotes: [null, "`print()` uses parentheses, never curly braces.", "Variables holding numbers can freely be compared with `>=`.", "Variable names in Python do not need to be capitalized."],
        hint: "Look at the end of the line 'if score >= 50'.",
        type: "bug",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-output-002",
        concept: "Function Arguments & Return",
        question: "What will this function call output?",
        code: "def multiply_by_two(n):\n    return n * 2\n\nprint(multiply_by_two(4))",
        options: ["4", "6", "8", "16"],
        correct: 2,
        explanation: "Calling `multiply_by_two(4)` passes `4` to `n`. The function evaluates `n * 2` (4 * 2 = 8) and returns `8`, which `print()` displays.",
        takeaway: "The `return` statement sends a computed value back to the caller of the function.",
        learnMore: "If a function finishes without an explicit `return` statement, it automatically returns `None`.",
        optionNotes: ["`4` was the input argument `n`, not the computed output.", "`6` is addition (`4 + 2`), but the function performs multiplication `n * 2`.", null, "`16` is `4 * 4` (squaring), but the function multiplies by `2`."],
        hint: "Multiply 4 by 2.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-code-002",
        concept: "For Loops & range()",
        question: "Which code creates a for loop that repeats exactly 3 times?",
        options: ["repeat(3):", "loop 3 times:", "for (i = 0; i < 3; i++):", "for i in range(3):"],
        correct: 3,
        explanation: "`for i in range(3):` generates integers `0, 1, 2` (exactly 3 numbers), causing the loop body to execute exactly 3 times.",
        takeaway: "`range(n)` generates `n` numbers from `0` up to `n - 1`, making it ideal for looping `n` times.",
        learnMore: "`range(3)` produces `0`, `1`, and `2`. The loop variable `i` takes on each of these values sequentially.",
        optionNotes: ["`repeat(3):` is not a built-in Python looping construct.", "`loop 3 times:` is not valid Python syntax.", "`for (i = 0; ...)` is C/Java/JavaScript loop syntax, not valid Python.", null],
        hint: "Python uses 'for ... in range(...):'.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-mcq-002",
        concept: "Logical AND Operator",
        question: "What is the result of evaluating True and False in Python?",
        options: ["False", "True", "None", "Error"],
        correct: 0,
        explanation: "The logical `and` operator only evaluates to `True` if BOTH operands are `True`. Since the right operand is `False`, `True and False` evaluates to `False`.",
        takeaway: "`A and B` is only `True` when both `A` and `B` are `True`.",
        learnMore: "Python uses short-circuit evaluation: if the first operand of `and` is falsy, Python stops and returns it immediately without evaluating the second.",
        optionNotes: [null, "`True` requires both sides of `and` to be `True` (`True and True`).", "`None` represents the absence of a value, not a Boolean logic outcome.", "Logical operations between Booleans are fully supported and raise no error."],
        hint: "Both sides must be True for 'and' to be True.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-output-003",
        concept: "Loop Accumulator Pattern",
        question: "What will be printed after this loop finishes?",
        code: "total = 0\nfor n in [1, 2, 3]:\n    total = total + n\nprint(total)",
        options: ["3", "6", "5", "0"],
        correct: 1,
        explanation: "`count` starts at `0`. The loop iterates through `[1, 2, 3]`: `0 + 1 = 1`, then `1 + 2 = 3`, then `3 + 3 = 6`. After the loop finishes, printing `count` outputs `6`.",
        takeaway: "An accumulator variable initialized before a loop accumulates values across every iteration.",
        learnMore: "Python also provides the built-in `sum([1, 2, 3])` function to calculate the total directly.",
        optionNotes: ["`3` was the last element in the list, but `count` accumulates the sum of all elements.", null, "`5` is the sum of only 2 and 3, missing the first element `1`.", "`0` was the initial value of `count` before the loop executed."],
        hint: "Add 1 + 2 + 3.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-mcq-003",
        concept: "Equality Operator (==)",
        question: "Which operator checks if two values are equal in Python?",
        options: ["=", ":=", "equals", "=="],
        correct: 3,
        explanation: "Double equals `==` checks whether the values on both sides are equal and returns a Boolean (`True` or `False`). Single equals `=` is used for assignment.",
        takeaway: "Use `==` to check if two values are equal, and `=` to assign a value to a variable.",
        learnMore: "Python also has `is`, which checks if two references point to the exact same object in memory (identity), whereas `==` checks value equality.",
        optionNotes: ["`=` assigns a value to a variable; it does not check equality.", "`:=` is the walrus operator (assignment expression), not equality comparison.", "`equals` is a method in Java, not an operator in Python.", null],
        hint: "Double equals sign checks equality.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-mcq-004",
        concept: "List Methods: append()",
        question: "What method adds a new item to the end of a Python list?",
        options: ["append()", "push()", "insert_end()", "add()"],
        correct: 0,
        explanation: "The `.append()` method adds a single item to the very end of an existing Python list in-place.",
        takeaway: "`list.append(item)` adds `item` to the end of the list and increases its length by 1.",
        learnMore: "To combine all elements from another list instead of adding a single item, use `list.extend()`.",
        optionNotes: [null, "`push()` is used in JavaScript and PHP arrays, but does not exist on Python lists.", "`insert_end()` is not a Python list method.", "`add()` is used to add items to a Python `set`, not a `list`."],
        hint: "It starts with the letter 'a'.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-output-004",
        concept: "Sequence Length: len()",
        question: "What will this len() function output?",
        code: "word = 'rocket'\nprint(len(word))",
        options: ["5", "6", "7", "Error"],
        correct: 1,
        explanation: "`words` is a list containing 6 string elements: `'code'`, `'python'`, `'game'`, `'level'`, `'build'`, `'fun'`. `len(words)` counts the elements and outputs `6`.",
        takeaway: "`len()` returns the number of items in a list, tuple, dictionary, or string.",
        learnMore: "When called on a string (e.g. `len('python')`), `len()` counts the number of characters (which is 6).",
        optionNotes: ["`5` is the index of the last element (`words[5]`), not the count of elements.", null, "`7` is off by one; there are exactly 6 items in the list.", "Calling `len()` on a list containing 6 items is valid and raises no error."],
        hint: "Count the letters in 'rocket'.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-output-005",
        concept: "String Repetition (*)",
        question: "What will this string repetition output in Python?",
        code: "print('Go!' * 3)",
        options: ["Go! 3", "Go!*3", "Go!Go!Go!", "Error"],
        correct: 2,
        explanation: "Multiplying a string by an integer `n` repeats the string `n` times back-to-back: `'Go!' * 3` creates `'Go!Go!Go!'`.",
        takeaway: "The `*` operator repeats a string when multiplied by an integer.",
        learnMore: "Multiplying a string by `0` or a negative integer results in an empty string `''`.",
        optionNotes: ["String repetition does not insert spaces or print the multiplier number.", "The `*` operator executes string repetition; it does not print the literal `*` symbol.", null, "Multiplying a string by an integer is standard Python syntax and produces no error."],
        hint: "The string is repeated 3 times without spaces.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-mcq-005",
        concept: "Logical NOT Operator",
        question: "What is the result of evaluating not True in Python?",
        options: ["False", "True", "None", "Error"],
        correct: 0,
        explanation: "The `not` operator inverts the Boolean value of its operand. If the value is `True`, `not True` evaluates to `False`.",
        takeaway: "`not` flips `True` to `False` and `False` to `True`.",
        learnMore: "You can also use `not` on non-Boolean values: `not []` or `not ''` evaluates to `True` because empty collections are falsy.",
        optionNotes: [null, "`True` is the original value before being inverted by `not`.", "`None` represents the absence of a value, not a Boolean negation.", "`not True` is standard Python syntax and raises no error."],
        hint: "The opposite of True.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-bug-002",
        concept: "Function Header Syntax (Colon :)",
        question: "What is missing in this function definition header?",
        code: "def calculate_area(width, height)\n    return width * height",
        options: ["Missing return type keyword", "Missing colon (:) after (width, height)", "Parameters cannot have commas", "def should be replaced by function"],
        correct: 1,
        explanation: "Function definitions require a colon `:` at the end of the `def` header line before the indented body block: `def calc_area(width, height):`.",
        takeaway: "Function definition lines in Python must always end with a colon `:`. ",
        learnMore: "Missing colons after `def`, `if`, `for`, and `while` lines are the #1 cause of beginner `SyntaxError`s.",
        optionNotes: ["Python functions do not require static return type keywords.", null, "Multiple parameters in Python must be separated by commas.", "`def` is the correct and only keyword to define a function in Python."],
        hint: "Check the punctuation at the end of the first line.",
        type: "bug",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-mcq-006",
        concept: "range() Number Generation",
        question: "What sequence of numbers does range(4) generate?",
        options: ["1, 2, 3, 4", "0, 1, 2, 3, 4", "0, 1, 2, 3", "1, 2, 3"],
        correct: 2,
        explanation: "`range(n)` produces a sequence of numbers starting at `0` and incrementing by 1 up to, but not including, `n`. Thus `range(4)` generates `0, 1, 2, 3`.",
        takeaway: "`range(n)` starts at `0` and stops at `n - 1` (never including `n` itself).",
        learnMore: "To generate 1 through 4 instead, specify a custom start and stop: `range(1, 5)`.",
        optionNotes: ["`1, 2, 3, 4` corresponds to `range(1, 5)`, because `range(4)` starts at 0.", "`0, 1, 2, 3, 4` incorrectly includes 4; `range()` stops before reaching `n`.", null, "`1, 2, 3` misses the starting 0 index."],
        hint: "Starts at 0 and stops before 4.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-output-006",
        concept: "Inequality Operator (!=)",
        question: "What will this inequality comparison output?",
        code: "print(10 != 5)",
        options: ["None", "False", "10", "True"],
        correct: 3,
        explanation: "The `!=` operator checks if two values are *not* equal. Since `10` is indeed not equal to `20`, the comparison evaluates to `True`.",
        takeaway: "`!=` returns `True` if two values are different, and `False` if they are equal.",
        learnMore: "`10 != 20` is the exact logical opposite of `10 == 20` (`not (10 == 20)`).",
        optionNotes: ["`!=` returns a Boolean, never `None`.", "`False` would mean that 10 is equal to 20, but they are different.", "`10` is the value of `a`; comparison operators return Boolean `True` or `False`.", null],
        hint: "Is 10 different from 5?",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-code-003",
        concept: "Function Output: return",
        question: "Which statement properly returns a result from a Python function?",
        options: ["give result", "send result", "return result", "output result"],
        correct: 2,
        explanation: "The `return` keyword sends a value out of the function to the place where the function was called and immediately terminates the function's execution.",
        takeaway: "Use `return` inside a function to send the final result back to the caller.",
        learnMore: "Code written after a `return` statement in the same execution block is unreachable dead code.",
        optionNotes: ["`give` is not a Python keyword.", "`send` is not a Python keyword.", null, "`output` is not a Python keyword."],
        hint: "The standard keyword is 'return'.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-mcq-007",
        concept: "While Loops",
        question: "Which loop type in Python repeatedly executes as long as a condition remains True?",
        options: ["while loop", "for loop", "repeat loop", "until loop"],
        correct: 0,
        explanation: "A `while` loop repeatedly executes its code block as long as its condition remains `True`. It stops as soon as the condition evaluates to `False`.",
        takeaway: "Use a `while` loop when you don't know in advance how many times the loop needs to run.",
        learnMore: "Always ensure the condition eventually becomes `False` inside a `while` loop, or use `break`, to avoid an infinite loop.",
        optionNotes: [null, "`for` loops iterate over a predefined sequence or iterable.", "`repeat` is not a loop type in Python.", "`until` is used in Ruby or Pascal, but does not exist in Python."],
        hint: "Starts with 'w'.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-bug-003",
        concept: "Indentation in Python",
        question: "What causes an IndentationError in Python?",
        code: "def launch():\nprint('Blast off!')",
        options: ["Missing parentheses around 'Blast off!'", "launch is a restricted keyword", "print() cannot be used inside functions", "The line inside the function body is not indented"],
        correct: 3,
        explanation: "Python uses indentation (whitespace spaces at the start of a line) to define code blocks instead of curly braces `{}`. Missing or mismatched indentation raises an `IndentationError`.",
        takeaway: "Code blocks under `if`, `def`, `for`, and `while` must be consistently indented (usually 4 spaces).",
        learnMore: "Standard Python practice (PEP 8) mandates using 4 spaces per indentation level and avoiding tabs.",
        optionNotes: ["Parentheses around `'Blast off!'` are already present and valid.", "`launch` is a valid identifier, not a restricted Python keyword.", "`print()` can be freely used anywhere, including inside function bodies.", null],
        hint: "Python requires code inside functions to be indented.",
        type: "bug",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-output-007",
        concept: "String Methods: lower()",
        question: "What will this lower() string method output?",
        code: "planet = 'MARS'\nprint(planet.lower())",
        options: ["MARS", "mars", "Mars", "Error"],
        correct: 1,
        explanation: "The `.lower()` string method returns a copy of the string with all uppercase letters converted to lowercase: `'MARS'` becomes `'mars'`.",
        takeaway: "`.lower()` converts all alphabetic characters in a string to lowercase.",
        learnMore: "`.lower()` is frequently used to normalize user input for case-insensitive comparisons (e.g., `user_answer.lower() == 'yes'`).",
        optionNotes: ["`'MARS'` is the original uppercase string before `.lower()` was called.", null, "`'Mars'` is title-cased, but `.lower()` converts all characters to lowercase.", "Valid string method calls execute cleanly without error."],
        hint: "Converts uppercase letters to lowercase.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l2-bld-001",
        concept: "Loops",
        question: "Which loop statement correctly iterates over numbers from 0 up to 4 using fuel as the loop variable?",
        type: "mcq",
        difficulty: "MEDIUM",
        builderTokens: ["for", "fuel", "in", "range(5):", "while", "to"],
        correctOrder: ["for", "fuel", "in", "range(5):"],
        solutionCode: "for fuel in range(5):",
        explanation: "A Python for loop uses the syntax: for <variable> in <iterable>:. range(5) generates numbers 0, 1, 2, 3, 4.",
        takeaway: "Use \"for var in range(n):\" for counting loops in Python.",
        learnMore: "The colon : at the end is required to initiate the indented loop body block.",
        options: ["while fuel in range(5):", "for fuel in range(5):", "for fuel to 5:", "loop fuel in 5:"],
        correct: 1,
        optionNotes: ["while loops take a condition, not an \"in iterable\" clause.", null, "Python does not use a \"to\" keyword.", "\"loop\" is not a valid Python keyword."],
        hint: "Start with \"for\", then the loop variable, \"in\", and the range generator with colon."
    },
    {
        id: "l2-bld-002",
        concept: "Functions",
        question: "Which line correctly defines a function header named ignite with parameters thrust and angle?",
        type: "mcq",
        difficulty: "HARD",
        builderTokens: ["def", "ignite(", "thrust,", "angle", "):", "func", "function"],
        correctOrder: ["def", "ignite(", "thrust,", "angle", "):"],
        solutionCode: "def ignite(thrust, angle):",
        explanation: "In Python, functions are defined using def followed by the function name, parameters in parentheses separated by commas, and a colon.",
        takeaway: "The \"def\" keyword begins all standard function definitions in Python.",
        learnMore: "Unlike JavaScript (function) or Go/Rust (fn/func), Python exclusively uses \"def\".",
        options: ["def ignite[thrust, angle]:", "func ignite(thrust, angle):", "function ignite(thrust, angle):", "def ignite(thrust, angle):"],
        correct: 3,
        optionNotes: ["Parameters must use parentheses (), not square brackets.", "func is used in Go and Swift, not Python.", "function is JavaScript syntax.", null],
        hint: "Starts with \"def\" and ends with a colon."
    },
    {
        id: "l2-cmp-001",
        concept: "Loops",
        question: "Complete the loop code to print each telemetry value multiplied by 2:",
        code: "readings = [10, 20, 30]\nfor reading in readings:\n    print(____ * 2)",
        type: "code-completion",
        difficulty: "EASY",
        options: ["reading", "readings", "i", "val"],
        correct: 0,
        explanation: "Inside the loop, the variable reading holds the current item from readings during each iteration.",
        takeaway: "Use the exact loop target variable declared after \"for\" inside the loop body.",
        learnMore: "Multiplying the whole list readings * 2 would repeat the list, not multiply individual numbers.",
        optionNotes: [null, "readings is the entire list, not the individual iteration element.", "i is not defined in this loop.", "val is not defined in this scope."],
        hint: "The singular loop variable name."
    },
    {
        id: "l2-cmp-002",
        concept: "Functions",
        question: "Complete the function to send back the calculated orbital speed to the caller:",
        code: "def calc_speed(thrust, mass):\n    speed = thrust / mass\n    ____ speed",
        type: "code-completion",
        difficulty: "EASY",
        options: ["output", "print", "return", "send"],
        correct: 2,
        explanation: "The return keyword exits a function and passes the calculated result value back to the caller.",
        takeaway: "Functions use return to give back a result; print only displays text to the console.",
        learnMore: "A function without an explicit return statement implicitly returns None.",
        optionNotes: ["output is not a Python keyword.", "print displays text to the screen but does not return a value to the caller.", null, "send is not a Python keyword."],
        hint: "Keyword that gives back a value."
    },
    {
        id: "l2-rev-001",
        concept: "Strings",
        question: "What does the .count() method return for this rocket telemetry string?",
        code: "telemetry = \"STAGE1-STAGE2-STAGE3\"\nprint(telemetry.count(\"STAGE\"))",
        type: "output",
        difficulty: "MEDIUM",
        options: ["Error", "1", "2", "3"],
        correct: 3,
        explanation: "str.count(sub) returns the number of non-overlapping occurrences of the substring \"STAGE\" within the target string. Here it appears exactly 3 times.",
        takeaway: ".count() calculates how many times a substring appears in a string.",
        learnMore: ".count() is case-sensitive: \"stage\" would return 0.",
        optionNotes: ["count() is a standard string method and executes without error.", "There are three occurrences, not one.", "There are three occurrences, not two.", null],
        hint: "Count how many times STAGE appears."
    },
    {
        id: "l2-rev-002",
        concept: "Operators",
        question: "What is the boolean result of this logical operator expression?",
        code: "power = True\nsafe = False\nprint(power or safe and False)",
        type: "output",
        difficulty: "HARD",
        options: ["False", "True", "None", "Error"],
        correct: 1,
        explanation: "In Python operator precedence, \"and\" has higher precedence than \"or\". So safe and False evaluates first to False. Then power or False evaluates to True.",
        takeaway: "\"and\" is evaluated before \"or\" unless parentheses override precedence.",
        learnMore: "Best practice is to use explicit parentheses: (power or safe) and False vs power or (safe and False).",
        optionNotes: ["Because \"and\" binds tighter, safe and False is False; then True or False is True.", null, "Boolean expressions evaluate to True or False, not None.", "Logical operators are valid and raise no error."],
        hint: "\"and\" has higher precedence than \"or\"."
    },
    {
        id: "l2-rev-003",
        concept: "Loops",
        question: "How many times does this while loop execute its body?",
        code: "altitude = 3\nwhile altitude > 0:\n    altitude -= 1",
        type: "output",
        difficulty: "MEDIUM",
        options: ["2 times", "4 times", "3 times", "Infinite loop"],
        correct: 2,
        explanation: "Iterations: 1) altitude becomes 2; 2) altitude becomes 1; 3) altitude becomes 0. Then altitude > 0 is False, so the loop terminates after 3 iterations.",
        takeaway: "While loops continue as long as the condition evaluates to True.",
        learnMore: "Decreasing the loop variable towards the termination condition ensures the loop finishes safely.",
        optionNotes: ["It runs for 3, 2, and 1, which is 3 times.", "It stops as soon as altitude reaches 0, not running a 4th time.", null, "The counter decrements every cycle, so it is not an infinite loop."],
        hint: "Trace altitude values: 3 -> 2 -> 1 -> 0."
    },
    {
        id: "l2-rev-004",
        concept: "Functions",
        question: "What will this function call output when using default arguments?",
        code: "def booster(power=100):\n    return power + 20\n\nprint(booster())",
        type: "output",
        difficulty: "MEDIUM",
        options: ["120", "100", "20", "Error: missing argument"],
        correct: 0,
        explanation: "When booster() is called without arguments, power takes its default value of 100. The function returns 100 + 20 = 120.",
        takeaway: "Default parameter values are used when the caller does not provide an argument.",
        learnMore: "You can override the default by providing an argument: booster(200) returns 220.",
        optionNotes: [null, "The function adds 20 to the default value 100.", "The default value was 100, not 0.", "Default parameters make the argument optional, so no error is raised."],
        hint: "Default value of power is 100."
    }
];

// --------------------------------------------------
// LEVEL 3: 🤖 ROBOT (Data Structures, Dictionaries & OOP)
// Pool: 20 Unique Questions (MCQ, Output, Code-Choice, Bug)
// --------------------------------------------------
const robotQuestions = [
    {
        id: "l3-mcq-001",
        concept: "Data Structures: Tuple vs List",
        question: "Which Python data structure is defined using parentheses () and cannot be modified after creation?",
        options: ["List", "Dictionary", "Tuple", "Set"],
        correct: 2,
        explanation: "A tuple is defined using parentheses `()` and is immutable, meaning its elements cannot be changed, added, or removed once created.",
        takeaway: "Tuples use parentheses `()` and are immutable; lists use square brackets `[]` and are mutable.",
        learnMore: "Immutability makes tuples faster and hashable, allowing them to be used as dictionary keys, unlike lists.",
        optionNotes: ["`List` is created with square brackets `[]` and is mutable.", "`Dictionary` is created with curly braces `{}` and stores key-value pairs.", null, "`Set` is created with curly braces `{}` and stores unique unordered values."],
        hint: "An immutable sequence starting with 'T'.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-output-001",
        concept: "Negative Indexing (-1)",
        question: "What is printed when accessing index -1 of this list?",
        code: "items = ['book', 'pen', 'laptop']\nprint(items[-1])",
        options: ["laptop", "book", "pen", "IndexError"],
        correct: 0,
        explanation: "In Python, negative indices count backward from the end of the sequence. Index `-1` always refers to the very last element: in `['pen', 'book', 'laptop']`, index `-1` is `'laptop'`.",
        takeaway: "Index `-1` accesses the last element of any Python sequence without needing to know its length.",
        learnMore: "Similarly, `-2` refers to the second-to-last element (`'book'`), `-3` to the third-to-last (`'pen'`), and so on.",
        optionNotes: [null, "`'book'` is at index `1` (or index `-2`).", "`'pen'` is at index `0` (or index `-3`), the first item.", "Negative indexing is fully valid in Python and does not raise an `IndexError`."],
        hint: "Negative indexing counts backward starting from the last item.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-output-002",
        concept: "List Slicing [start:stop]",
        question: "What will this list slice produce?",
        code: "letters = ['a', 'b', 'c', 'd']\nprint(letters[0:2])",
        options: ["['a', 'b', 'c']", "['a', 'b']", "['b', 'c']", "['a']"],
        correct: 1,
        explanation: "List slicing `letters[0:2]` extracts elements starting at index `0` up to (but not including) index `2`. Elements at indices 0 and 1 are `'a'` and `'b'`, so the slice produces `['a', 'b']`.",
        takeaway: "Slicing `[start:stop]` includes the element at `start` and stops right before `stop`.",
        learnMore: "Slicing always returns a new list and never modifies the original list.",
        optionNotes: ["`['a', 'b', 'c']` includes index 2 (`letters[0:3]`), but `0:2` stops before index 2.", null, "`['b', 'c']` starts at index 1 (`letters[1:3]`), not index 0.", "`['a']` is only index 0 (`letters[0:1]`)."],
        hint: "Includes index 0 and 1, stops before index 2.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-code-001",
        concept: "Dictionary Key Access",
        question: "Which code correctly accesses the value of the key 'brand' in this dictionary?",
        code: "car = {'brand': 'Tesla', 'model': '3'}",
        options: ["car.get_key('brand')", "car(brand)", "car->brand", "car['brand']"],
        correct: 3,
        explanation: "Dictionary values are retrieved using square brackets with the key name: `car['brand']`. You can also safely use `car.get('brand')`.",
        takeaway: "Access dictionary values by placing the key inside square brackets: `dict_name[key]`.",
        learnMore: "If the key might not exist, `car.get('brand', 'Default')` avoids raising a `KeyError`.",
        optionNotes: ["`get_key()` is not a dictionary method in Python (the method is `.get('brand')`).", "`car(brand)` attempts to call `car` as a function, which raises a `TypeError`.", "`car->brand` is C++/PHP syntax, not valid Python.", null],
        hint: "Use square brackets [] with the key name.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-bug-001",
        concept: "Function Header Syntax (Colon :)",
        question: "What is the bug in this Python function definition?",
        code: "def greet(name)\n    return 'Hello ' + name",
        options: ["return statements are not allowed in functions", "name cannot be passed as an argument", "Functions must be called with curly braces", "Missing colon (:) after def greet(name)"],
        correct: 3,
        explanation: "The function definition header `def greet(name)` is missing a trailing colon `:`. Python requires a colon before any indented block.",
        takeaway: "Always end function definition lines with a colon `:`. ",
        learnMore: "The correct header is `def greet(name):`. Colons are mandatory for starting all code blocks in Python.",
        optionNotes: ["`return` statements are standard and valid inside functions.", "`name` is a valid parameter name for accepting arguments.", "Functions in Python use parentheses `()`, never curly braces.", null],
        hint: "Check the punctuation at the end of the 'def' line.",
        type: "bug",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-mcq-002",
        concept: "Object-Oriented Programming (OOP) Classes",
        question: "In Object-Oriented Programming (OOP), what is a blueprint used for creating objects?",
        options: ["Method", "Class", "Module", "Variable"],
        correct: 1,
        explanation: "A Class is a blueprint or template that defines the attributes (data) and methods (behavior) that objects instantiated from it will possess.",
        takeaway: "A `class` is the blueprint, and an `object` (or instance) is the concrete thing built from that blueprint.",
        learnMore: "For example, a `Robot` class defines what every robot has (e.g. `battery`, `name`) and can do (e.g. `speak()`).",
        optionNotes: ["A `Method` is a function defined inside a class, not the blueprint itself.", null, "A `Module` is a file containing Python code.", "A `Variable` holds a value or reference to an object."],
        hint: "You define a 'class' to instantiate objects.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-output-003",
        concept: "Class Method Invocation",
        question: "What will this simple class method call output?",
        code: "class Bot:\n    def speak(self):\n        return 'Beep'\n\nb = Bot()\nprint(b.speak())",
        options: ["None", "Bot", "Beep", "Error"],
        correct: 2,
        explanation: "`b = Bot()` creates an instance of `Bot`. Calling `b.speak()` invokes the `speak` method on that instance, which returns `'Beep'`, and `print()` outputs it.",
        takeaway: "Call an instance method using dot notation on the object: `instance.method()`.",
        learnMore: "Python automatically passes the object instance `b` as the first argument (`self`) to `speak(self)` behind the scenes.",
        optionNotes: ["`None` would only be returned if `speak()` had no `return` statement.", "`'Bot'` is the class name, not the value returned by `speak()`.", null, "Creating an instance and calling its method executes without error."],
        hint: "The speak() method returns the string 'Beep'.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-code-002",
        concept: "Class Definition Syntax",
        question: "Which code correctly defines a class named Robot in Python?",
        options: ["class Robot:", "class = Robot():", "define Robot():", "new class Robot{}"],
        correct: 0,
        explanation: "Classes in Python are defined with the `class` keyword followed by the class name in PascalCase and a colon: `class Robot:`.",
        takeaway: "Declare classes using `class ClassName:` followed by an indented block defining attributes and methods.",
        learnMore: "By PEP 8 convention, class names use `CapWords` (PascalCase), such as `Robot` or `UserProfile`.",
        optionNotes: [null, "`class = Robot():` attempts to assign to the reserved keyword `class`, raising a `SyntaxError`.", "`define` is not a Python keyword; classes use `class` and functions use `def`.", "`new class Robot{}` is Java/C++ syntax, invalid in Python."],
        hint: "The class keyword followed by the name and a colon.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-mcq-003",
        concept: "Dictionary Length: len()",
        question: "What does the len() function return when passed a dictionary with 3 key-value pairs?",
        options: ["3", "1", "Error", "6"],
        correct: 0,
        explanation: "When applied to a dictionary, `len(dictionary)` returns the total number of unique keys (key-value pairs) in the dictionary.",
        takeaway: "`len()` on a dictionary counts its total number of keys.",
        learnMore: "Keys in a dictionary must be unique. If you reassign an existing key, the length does not change.",
        optionNotes: [null, "`1` would only be returned if the dictionary contained only 1 key.", "`len()` works directly on dictionaries without error.", "`6` counts keys and values separately; `len()` counts key-value pairs."],
        hint: "It counts the total number of keys in the dictionary.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-mcq-004",
        concept: "Loop Termination (break)",
        question: "What keyword is used inside a loop to stop it immediately?",
        options: ["halt", "exit", "stop", "break"],
        correct: 3,
        explanation: "The `break` statement immediately terminates the loop in which it is placed, jumping execution to the first statement after the loop.",
        takeaway: "Use `break` to exit a loop immediately before its normal condition or range finishes.",
        learnMore: "Use `continue` when you want to skip only the current iteration and move to the next one, rather than stopping the whole loop.",
        optionNotes: ["`halt` is not a Python keyword.", "`exit()` terminates the entire Python program, not just the loop.", "`stop` is not a Python keyword.", null],
        hint: "To 'break' out of a loop.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-output-004",
        concept: "Dictionary Mutation & Size",
        question: "What will be printed when modifying this dictionary and checking its size?",
        code: "bot = {'id': 1}\nbot['name'] = 'Alpha'\nprint(len(bot))",
        options: ["1", "2", "3", "Error"],
        correct: 1,
        explanation: "The dictionary starts with 1 key: `{'id': 1}`. Assigning `bot['name'] = 'Alpha'` adds a second key. Therefore, `len(bot)` evaluates to `2`.",
        takeaway: "Adding a new key to a dictionary increases its key count by 1.",
        learnMore: "If the key `'name'` already existed, assigning to it would update its value without changing the dictionary's size.",
        optionNotes: ["`1` was the initial length before adding the `'name'` key.", null, "`3` would require adding two more distinct keys.", "Adding keys to a dictionary with `[]` is standard and raises no error."],
        hint: "Count how many keys are in the dictionary.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-mcq-005",
        concept: "List Methods: pop()",
        question: "Which list method removes and returns the last item from a list?",
        options: ["delete()", "remove()", "pop()", "discard()"],
        correct: 2,
        explanation: "The `.pop()` list method removes and returns the element at the specified index, or the very last element if no index is passed.",
        takeaway: "`list.pop()` removes the last item from a list and returns it.",
        learnMore: "`.remove(value)` searches for and removes the first matching value, but does not return it. `.pop()` works by index and returns the removed item.",
        optionNotes: ["`delete()` is not a list method (the statement is `del list[i]`).", "`remove()` searches for and removes the first matching value, but does not return it.", null, "`discard()` is a method on `set` objects, not on lists."],
        hint: "Think of 'popping' an item off a stack.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-code-003",
        concept: "Instance Methods (self)",
        question: "What is the conventional name for the first parameter of an instance method in a Python class?",
        options: ["this", "self", "me", "inst"],
        correct: 1,
        explanation: "In Python, the first parameter of any instance method is conventionally named `self`. It represents the specific object instance the method was called on.",
        takeaway: "Always include `self` as the first parameter of instance methods in a class.",
        learnMore: "While `self` is technically a convention (not a rigid language keyword), using anything else violates PEP 8 and confuses all Python tooling.",
        optionNotes: ["`this` is used in JavaScript, C++, and Java, but is not standard Python.", null, "`me` is not standard Python convention.", "`inst` is not standard Python convention."],
        hint: "A 4-letter word starting with 's'.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-bug-002",
        concept: "Tuple Immutability",
        question: "Why does this code cause a TypeError in Python?",
        code: "coords = (10, 20)\ncoords[0] = 50",
        options: ["coords is not a variable name", "Index 0 does not exist in coords", "Tuples are immutable and cannot be modified after creation", "Parentheses cannot hold numbers"],
        correct: 2,
        explanation: "Tuples cannot be modified after creation. Attempting item assignment on a tuple (`coords[0] = 50`) raises a `TypeError: 'tuple' object does not support item assignment`.",
        takeaway: "Tuples are immutable; if you need to modify elements in-place, use a `list` (`[...]`).",
        learnMore: "To change values in `coords`, convert it to a list: `coords_list = list(coords)`, modify it, then convert back: `tuple(coords_list)`.",
        optionNotes: ["`coords` is a valid variable identifier.", "Index 0 exists (it holds the number `10`), but cannot be changed in a tuple.", null, "Parentheses and tuples can hold numbers and any other Python data types."],
        hint: "Tuples are immutable.",
        type: "bug",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-output-005",
        concept: "Zero-Based Indexing",
        question: "What will this list index lookup print?",
        code: "nums = [10, 20, 30]\nprint(nums[1])",
        options: ["20", "10", "30", "IndexError"],
        correct: 0,
        explanation: "Python lists use zero-based indexing: `nums[0]` is `10`, `nums[1]` is `20`, and `nums[2]` is `30`. Accessing `nums[1]` prints `20`.",
        takeaway: "Indexing starts at `0`: the first element is at index `0`, the second at index `1`.",
        learnMore: "Remember: index `n` always accesses the `(n + 1)`-th element in the list.",
        optionNotes: [null, "`10` is at index `0` (the first element).", "`30` is at index `2` (the third element).", "Index 1 is valid in a 3-element list and raises no error."],
        hint: "Lists start at index 0.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-code-004",
        concept: "Class Initializer (__init__)",
        question: "Which special method is the constructor used to initialize newly created class instances?",
        options: ["__start__()", "__create__()", "__new__()", "__init__()"],
        correct: 3,
        explanation: "`__init__()` (with two leading and two trailing underscores, known as a 'dunder' method) is Python's instance initialization constructor.",
        takeaway: "Define `def __init__(self, ...):` to initialize new objects when creating instances of a class.",
        learnMore: "Python automatically calls `__init__()` immediately after `__new__()` creates the object instance.",
        optionNotes: ["`__start__()` is not a special method in Python.", "`__create__()` does not exist in Python.", "`__new__()` creates the object instance, but `__init__()` is the initializer constructor.", null],
        hint: "Short for initialize with double underscores.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-output-006",
        concept: "List Growth with append()",
        question: "What is the output after appending an element to this list?",
        code: "colors = ['red', 'green']\ncolors.append('blue')\nprint(len(colors))",
        options: ["2", "4", "3", "Error"],
        correct: 2,
        explanation: "`colors` begins with 2 elements (`'red'`, `'green'`). Calling `colors.append('blue')` adds `'blue'`, increasing the list length to `3`.",
        takeaway: "`list.append()` increases the length of the list by exactly 1.",
        learnMore: "Appending to the end of a list has an average time complexity of O(1) (constant time) in Python.",
        optionNotes: ["`2` was the initial length before calling `.append('blue')`.", "`4` would require appending two more items.", null, "Appending to a list and calling `len()` raises no error."],
        hint: "2 original items plus 1 appended item.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-mcq-006",
        concept: "Dictionary Membership (in)",
        question: "Which keyword checks whether a specific key exists in a dictionary?",
        options: ["has", "exists", "contains", "in"],
        correct: 3,
        explanation: "The `in` keyword checks whether a key exists in a dictionary (e.g. `'name' in user` returns `True` or `False`).",
        takeaway: "Use `key in dictionary` to check if a key exists before trying to access it.",
        learnMore: "Checking key membership with `in` is extremely fast (average O(1) lookup time) because dictionaries use hash tables.",
        optionNotes: ["`has` is not a Python keyword (nor is `has_key()`, which was removed in Python 3).", "`exists` is not a keyword or method in Python.", "`contains` is not a Python keyword (the dunder method is `__contains__`).", null],
        hint: "A 2-letter keyword: 'in'.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-bug-003",
        concept: "Missing Keys (KeyError)",
        question: "What exception is raised when looking up a key that does not exist in a dictionary?",
        code: "profile = {'name': 'Ada'}\nprint(profile['age'])",
        options: ["KeyError", "IndexError", "ValueError", "AttributeError"],
        correct: 0,
        explanation: "Accessing a dictionary key that does not exist using bracket notation `profile['age']` causes Python to raise a `KeyError: 'age'`.",
        takeaway: "Looking up a missing key with `[]` raises a `KeyError`; use `.get(key)` to provide a safe fallback.",
        learnMore: "`profile.get('age', 0)` returns `0` if `'age'` is not found, avoiding the `KeyError` entirely.",
        optionNotes: [null, "`IndexError` occurs when accessing an out-of-range index in a sequence like a list.", "`ValueError` occurs when an argument has the right type but inappropriate value.", "`AttributeError` occurs when accessing an attribute that an object doesn't have."],
        hint: "It has 'Key' in the name of the error.",
        type: "bug",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-output-007",
        concept: "Tuple Indexing",
        question: "What will accessing index 0 of this tuple print?",
        code: "point = (4, 9)\nprint(point[0])",
        options: ["9", "4", "(4, 9)", "Error"],
        correct: 1,
        explanation: "Tuples support the same 0-based indexing as lists: `point[0]` retrieves the first element from `point = (4, 9)`, which is `4`.",
        takeaway: "Access tuple elements by index using square brackets `tuple[index]`, just like lists.",
        learnMore: "While you can read elements from a tuple with indexing, you cannot reassign them (e.g. `point[0] = 5` raises `TypeError`).",
        optionNotes: ["`9` is at index `1` (the second element).", null, "'(4, 9)' is the entire tuple representation, not the single indexed item.", "Index 0 is valid for any non-empty tuple and raises no error."],
        hint: "The first item in the tuple.",
        type: "output",
        difficulty: "VERY EASY"
    },
    {
        id: "l3-bld-001",
        concept: "Dictionaries",
        question: "Which statement correctly creates a dictionary mapping \"core\" to 100 and \"online\" to True?",
        type: "mcq",
        difficulty: "HARD",
        builderTokens: ["status", "=", "{\"core\":", "100,", "\"online\":", "True}", "{\"core\" =", "dict("],
        correctOrder: ["status", "=", "{\"core\":", "100,", "\"online\":", "True}"],
        solutionCode: "status = {\"core\": 100, \"online\": True}",
        explanation: "Dictionaries in Python use curly braces {} with key: value pairs separated by commas.",
        takeaway: "Dictionary syntax: {key1: val1, key2: val2}. Colons separate keys from values.",
        learnMore: "Dictionary keys must be immutable types like strings, numbers, or tuples.",
        options: ["status = (\"core\": 100, \"online\": True)", "status = {\"core\" = 100, \"online\" = True}", "status = [\"core\": 100, \"online\": True]", "status = {\"core\": 100, \"online\": True}"],
        correct: 3,
        optionNotes: ["Parentheses () define tuples, not dictionaries.", "Dictionaries use colons : to map keys to values, not equals signs.", "Square brackets [] define lists, not dictionaries.", null],
        hint: "Curly braces with colon separating key and value."
    },
    {
        id: "l3-bld-002",
        concept: "Classes",
        question: "Which header correctly defines the constructor method for a Python class?",
        type: "mcq",
        difficulty: "HARD",
        builderTokens: ["def", "__init__(", "self,", "model", "):", "constructor(", "init("],
        correctOrder: ["def", "__init__(", "self,", "model", "):"],
        solutionCode: "def __init__(self, model):",
        explanation: "In Python classes, the constructor method is defined with def __init__(self, ...): with double underscores (dunder) and self as the first parameter.",
        takeaway: "__init__ with double underscores is the special constructor method in Python classes.",
        learnMore: "self refers to the specific instance being created and allows binding instance variables like self.model = model.",
        options: ["def __init__(self, model):", "def constructor(self, model):", "def init(self, model):", "class __init__(self, model):"],
        correct: 0,
        optionNotes: [null, "constructor is used in JS/TypeScript; Python uses __init__.", "init without double underscores is just a regular method, not the constructor.", "Methods are defined with def, not class."],
        hint: "Starts with def and uses double underscores around init."
    },
    {
        id: "l3-cmp-001",
        concept: "Lists",
        question: "Complete the code to add a new sensor \"thermal\" to the end of the robotic inventory list:",
        code: "sensors = [\"optical\", \"sonar\"]\nsensors.____(\"thermal\")",
        type: "code-completion",
        difficulty: "EASY",
        options: ["push", "add", "append", "insert_last"],
        correct: 2,
        explanation: "The .append() method adds a single item to the end of a list in-place.",
        takeaway: "Use list.append(item) to append elements to lists in Python.",
        learnMore: "Python lists do not have .push() (JavaScript) or .add() (Sets).",
        optionNotes: ["push() is JavaScript/PHP syntax.", "add() is for Python Sets, not Lists.", null, "insert_last is not a Python method."],
        hint: "The standard Python list method for adding to the end."
    },
    {
        id: "l3-cmp-002",
        concept: "Dictionaries",
        question: "Complete the code to safely retrieve \"armor\" from the dictionary with a default fallback of 0:",
        code: "stats = {\"hp\": 100, \"speed\": 50}\narmor_val = stats.____(\"armor\", 0)",
        type: "code-completion",
        difficulty: "MEDIUM",
        options: ["find", "get", "lookup", "fetch"],
        correct: 1,
        explanation: "dict.get(key, default) retrieves the value if the key exists, or returns the default value without raising a KeyError.",
        takeaway: "Use dict.get(key, default) to safely read dictionary keys with fallback values.",
        learnMore: "Accessing stats[\"armor\"] directly would raise a KeyError because \"armor\" is not in the dictionary.",
        optionNotes: ["find() is a string method, not a dictionary method.", null, "lookup() does not exist in standard Python dictionaries.", "fetch() is not a Python dictionary method."],
        hint: "Three-letter dictionary method for safe retrieval."
    },
    {
        id: "l3-rev-001",
        concept: "Lists",
        question: "What will be the output of reversing a list using slice step syntax [::-1]?",
        code: "chassis = [\"Alpha\", \"Beta\", \"Gamma\"]\nprint(chassis[::-1])",
        type: "output",
        difficulty: "MEDIUM",
        options: ["['Gamma', 'Beta', 'Alpha']", "['Alpha', 'Beta', 'Gamma']", "['Gamma']", "Error: invalid slice"],
        correct: 0,
        explanation: "The slice [::-1] uses a negative step of -1 to traverse the list in reverse order, returning a reversed shallow copy.",
        takeaway: "[::-1] is the Pythonic idiom to create a reversed copy of any sequence.",
        learnMore: "Unlike list.reverse(), which mutates the list in place and returns None, slice [::-1] returns a new reversed list.",
        optionNotes: [null, "The step -1 reverses the entire order.", "It does not slice only one element; the omission of start and stop covers the entire list.", "Negative slice steps are standard and fully supported in Python."],
        hint: "Step of -1 reverses the sequence."
    },
    {
        id: "l3-rev-002",
        concept: "Tuples",
        question: "What is the value of y after this tuple unpacking operation?",
        code: "coords = (10, 20, 30)\nx, y, z = coords\nprint(y)",
        type: "output",
        difficulty: "EASY",
        options: ["10", "20", "30", "(10, 20, 30)"],
        correct: 1,
        explanation: "Tuple unpacking assigns elements to variables in positional order. x gets 10, y gets 20, and z gets 30.",
        takeaway: "Tuple unpacking assigns each element positionally to corresponding variables.",
        learnMore: "The number of variables on the left must exactly match the number of elements in the tuple, or a ValueError is raised.",
        optionNotes: ["10 was assigned to the first variable x.", null, "30 was assigned to the third variable z.", "y is unpacked into a single integer, not the whole tuple."],
        hint: "y is the second variable in the assignment."
    },
    {
        id: "l3-rev-003",
        concept: "Dictionaries",
        question: "What happens when you update an existing key in a dictionary?",
        code: "firmware = {\"v\": 1, \"patch\": 0}\nfirmware[\"v\"] = 2\nprint(firmware[\"v\"])",
        type: "output",
        difficulty: "EASY",
        options: ["{\"v\": 2}", "1", "Error: key already exists", "2"],
        correct: 3,
        explanation: "Dictionary keys are unique. Assigning to an existing key overwrites its previous value in-place.",
        takeaway: "Assigning to an existing dictionary key updates its value.",
        learnMore: "If the key does not exist, assigning creates a new key-value pair.",
        optionNotes: ["Accessing firmware[\"v\"] returns the value 2, not a dictionary object.", "The previous value 1 was overwritten.", "Dictionaries do not error on duplicate key assignments; they update the value.", null],
        hint: "Assigning to an existing key updates its value."
    },
    {
        id: "l3-rev-004",
        concept: "Classes",
        question: "What will this method call print when accessing self attributes?",
        code: "class Droid:\n    def __init__(self, name):\n        self.name = name\n    def ping(self):\n        return \"Hi \" + self.name\n\nd = Droid(\"R2\")\nprint(d.ping())",
        type: "output",
        difficulty: "MEDIUM",
        options: ["Hi Droid", "Hi self.name", "Hi R2", "Error: self not defined"],
        correct: 2,
        explanation: "d is an instance of Droid with self.name set to \"R2\". d.ping() accesses self.name and returns \"Hi R2\".",
        takeaway: "Instance methods access instance variables using self.attribute.",
        learnMore: "Python automatically passes the instance d as the first argument (self) when calling d.ping().",
        optionNotes: ["Droid is the class name, not the instance name attribute.", "self.name evaluates to the stored instance string \"R2\".", null, "Python passes self automatically; no error occurs."],
        hint: "self.name was initialized to \"R2\"."
    }
];


// ==================================================
// DEDICATED CHAPTER BOSS QUESTION POOLS
// ==================================================
const HOUSE_BOSS_QUESTIONS = [
    {
        id: "h-boss-001",
        concept: "Python Fundamentals",
        question: "👑 HOUSE BOSS: Combine variables, strings, and types to determine the final output:",
        code: "style = \"Nordic\"\nstories = 2\nbanner = style + \" \" + str(stories) + \"-Story\"\nprint(banner.upper())",
        options: ["Nordic 2-Story", "NORDIC 2 STORY", "NORDIC 2-STORY", "Error: cannot concatenate int"],
        correct: 2,
        explanation: "First, str(stories) converts 2 to \"2\". Concatenation produces \"Nordic 2-Story\". Then banner.upper() converts all characters to uppercase: \"NORDIC 2-STORY\".",
        takeaway: "Complex Python expressions compose variables, type casting, concatenation, and methods into a reliable pipeline.",
        learnMore: "str() explicit casting prevents TypeErrors when joining numbers with strings.",
        optionNotes: ["upper() converts all characters to uppercase.", "The hyphen in \"-Story\" is preserved.", null, "str(stories) explicitly casts the integer to a string."],
        hint: "Trace the string concatenation and the uppercase method.",
        type: "mcq",
        difficulty: "BOSS",
        isBoss: true
    },
    {
        id: "h-boss-002",
        concept: "Arithmetic & Type Formatting",
        question: "👑 HOUSE BOSS: Trace the arithmetic calculation and string output for the roof framing:",
        code: "base = 10\nheight = 4\nroof_area = (base * height) // 2\nprint(\"Roof Area: \" + str(roof_area))",
        options: ["Roof Area: 20", "Roof Area: 40", "Roof Area: 20.0", "Roof Area: 10"],
        correct: 0,
        explanation: "(10 * 4) is 40. The floor division operator // divides 40 by 2 to yield integer 20. str(20) concatenates to produce \"Roof Area: 20\".",
        takeaway: "Use integer floor division // when you need a whole number result without decimal float conversion.",
        learnMore: "Single division / always produces a float (20.0), while // produces an int (20).",
        optionNotes: [null, "The area formula divides base * height by 2.", "Floor division // returns integer 20, not float 20.0.", "10 is just the base dimension."],
        hint: "Calculate (10 * 4) // 2 first, then cast to string.",
        type: "mcq",
        difficulty: "BOSS",
        isBoss: true
    },
    {
        id: "h-boss-003",
        concept: "String Repetition & Concatenation",
        question: "👑 HOUSE BOSS: What exact wall pattern will this Python code assemble and display?",
        code: "brick = \"[]\"\nwall = brick * 3\ndoor = \"[D]\"\nprint(wall + door + wall)",
        options: ["[][][D][][]", "[][][][][D]", "[D][][][][][][]", "[][][][D][][][]"],
        correct: 3,
        explanation: "brick * 3 creates \"[][][]\". Concatenating wall + door + wall joins 3 bricks, then the door, then 3 bricks: \"[][][][D][][][]\".",
        takeaway: "String repetition with * duplicates patterns, which can then be combined with other strings using +.",
        learnMore: "String multiplication in Python preserves exact characters and order without inserting spaces.",
        optionNotes: ["Both walls have 3 bricks each, totaling 6 bricks.", "The door is placed in the center between the two walls.", "The door is between the walls, not at the beginning.", null],
        hint: "Count the number of brick units on each side of the door.",
        type: "mcq",
        difficulty: "BOSS",
        isBoss: true
    },
    {
        id: "h-boss-004",
        concept: "Variables & Comparisons",
        question: "👑 HOUSE BOSS: Evaluate the construction budget to determine if the condition is True or False:",
        code: "budget = 100\ncost = 45 + 30\nremaining = budget - cost\nprint(remaining >= 25)",
        options: ["False", "True", "25", "Error"],
        correct: 1,
        explanation: "cost evaluates to 75. budget - cost is 100 - 75 = 25. The comparison 25 >= 25 is True.",
        takeaway: "Comparison operators like >= evaluate mathematical relations to Boolean True or False.",
        learnMore: ">= means greater than or equal to, so equal values evaluate to True.",
        optionNotes: ["25 is equal to 25, so >= evaluates to True.", null, "Comparisons return Booleans, not numbers.", "Arithmetic and comparison between numbers is valid."],
        hint: "Check if 25 is greater than or equal to 25.",
        type: "mcq",
        difficulty: "BOSS",
        isBoss: true
    },
    {
        id: "l1-boss-001",
        concept: "String Methods & Casting",
        question: "👑 HOUSE BOSS: Combine variables and string methods to determine the banner output:",
        code: "plan = \"villa\"\nrooms = 3\nprint(plan.upper() + \"-\" + str(rooms))",
        options: ["villa-3", "VILLA-3", "VILLA 3", "Error: str cannot add int"],
        correct: 1,
        explanation: "plan.upper() produces \"VILLA\". Concatenating \"-\" and str(rooms) (\"3\") yields \"VILLA-3\".",
        takeaway: "Uppercase transformation combined with string formatting creates clean identifiers.",
        learnMore: "upper() returns a new string and does not modify the original variable.",
        optionNotes: ["upper() converts villa to uppercase VILLA.", null, "The hyphen '-' was specified, not a space.", "str(rooms) casts integer 3 to string."],
        hint: "Convert villa to uppercase and append -3.",
        type: "mcq",
        difficulty: "BOSS",
        isBoss: true
    }
];

const ROCKET_BOSS_QUESTIONS = [
    {
        id: "r-boss-001",
        concept: "Loops & Functions",
        question: "👑 ROCKET BOSS: Trace the function, loop, and modulo operations to calculate thruster output:",
        code: "def boost(power):\n    total = 0\n    for i in range(1, 4):\n        if i % 2 == 1:\n            total += power * i\n    return total\nprint(boost(10))",
        options: ["60", "40", "30", "10"],
        correct: 1,
        explanation: "range(1, 4) produces 1, 2, 3. When i=1 (odd), total becomes 10*1=10. When i=2 (even), it is skipped. When i=3 (odd), total += 10*3 (30), yielding 40.",
        takeaway: "Loops combined with modulo checks let you selectively process specific iterations.",
        learnMore: "i % 2 == 1 is the standard idiom in Python for checking if an integer is odd.",
        optionNotes: ["60 would sum all steps without the modulo condition.", null, "30 is only the iteration when i=3.", "10 is only the iteration when i=1."],
        hint: "Only odd values of i (1 and 3) add to the total.",
        type: "mcq",
        difficulty: "BOSS",
        isBoss: true
    },
    {
        id: "r-boss-002",
        concept: "String Indexing & Loops",
        question: "👑 ROCKET BOSS: What flight telemetry code string is generated by this function?",
        code: "def stage_code(name, stages):\n    code = \"\"\n    for s in range(stages):\n        code += name[s] + str(s + 1)\n    return code\nprint(stage_code(\"APOLLO\", 3))",
        options: ["A1P1O1", "APOLLO3", "A0P1O2", "A1P2O3"],
        correct: 3,
        explanation: "For s=0: name[0]='A' + '1' -> 'A1'. For s=1: name[1]='P' + '2' -> 'P2'. For s=2: name[2]='O' + '3' -> 'O3'. Final string is 'A1P2O3'.",
        takeaway: "Loop indices can both access sequence characters and format sequential labels.",
        learnMore: "range(3) runs with s=0, 1, 2, matching zero-based string indexing perfectly.",
        optionNotes: ["The stage numbers increment with s + 1 (1, 2, 3).", "The function constructs individual stage characters, not the full name.", "s + 1 produces 1-indexed numbers (1, 2, 3), not 0-indexed.", null],
        hint: "Index 0 is 'A', index 1 is 'P', index 2 is 'O'.",
        type: "mcq",
        difficulty: "BOSS",
        isBoss: true
    },
    {
        id: "r-boss-003",
        concept: "While Loops & Break",
        question: "👑 ROCKET BOSS: How many burn cycles complete before the fuel threshold triggers a break?",
        code: "fuel = 20\nburns = 0\nwhile fuel > 0:\n    fuel -= 6\n    burns += 1\n    if fuel <= 5:\n        break\nprint(burns)",
        options: ["3", "4", "2", "1"],
        correct: 0,
        explanation: "Cycle 1: fuel becomes 14, burns=1. Cycle 2: fuel becomes 8, burns=2. Cycle 3: fuel becomes 2, burns=3. Since 2 <= 5, break terminates the loop. Output is 3.",
        takeaway: "The break statement exits the loop immediately, preventing any further iterations.",
        learnMore: "Without break, a fourth cycle would have run, reducing fuel below zero.",
        optionNotes: [null, "4 burns would occur without the break threshold.", "At 2 burns, fuel is 8, which is greater than 5, so loop continues.", "1 burn leaves fuel at 14."],
        hint: "Track fuel: 20 -> 14 -> 8 -> 2 (triggers break).",
        type: "mcq",
        difficulty: "BOSS",
        isBoss: true
    },
    {
        id: "r-boss-004",
        concept: "Logical Operators & Parameters",
        question: "👑 ROCKET BOSS: What boolean status does the launch clearance function return?",
        code: "def ready_to_launch(fuel_pct, systems_ok, crew_ready):\n    return fuel_pct >= 90 and systems_ok and crew_ready\nprint(ready_to_launch(95, True, False))",
        options: ["True", "None", "False", "Error"],
        correct: 2,
        explanation: "The and operator requires ALL operands to be True. Since crew_ready is False, the entire expression evaluates to False.",
        takeaway: "In Python, x and y and z is True only if every single condition is True.",
        learnMore: "Python uses short-circuit evaluation: if any term is False, it immediately stops evaluating.",
        optionNotes: ["crew_ready is False, so the 'and' chain cannot be True.", "The function returns a boolean, not None.", null, "All arguments and boolean operators are valid."],
        hint: "All three conditions must be True for 'and' to return True.",
        type: "mcq",
        difficulty: "BOSS",
        isBoss: true
    },
    {
        id: "l2-boss-001",
        concept: "Loops & Modulo Accumulation",
        question: "👑 ROCKET BOSS: Trace the function, loop, and modulo operations to determine orbital telemetry:",
        code: "def thrust_calc(cycles):\n    total = 0\n    for c in range(1, cycles + 1):\n        if c % 2 == 0:\n            total += c * 10\n    return total\nprint(thrust_calc(4))",
        options: ["100", "40", "60", "20"],
        correct: 2,
        explanation: "range(1, 5) produces 1, 2, 3, 4. Even numbers are 2 and 4. total += 2*10 (20) + 4*10 (40) = 60.",
        takeaway: "Loops and modulo checks filter and accumulate specific algorithmic iterations.",
        learnMore: "range(1, 5) stops before 5.",
        optionNotes: ["100 includes odd numbers.", "40 is only the second even iteration.", null, "20 is only the first even iteration."],
        hint: "Sum even cycles: 2*10 + 4*10.",
        type: "mcq",
        difficulty: "BOSS",
        isBoss: true
    }
];

const ROBOT_BOSS_QUESTIONS = [
    {
        id: "b-boss-001",
        concept: "Classes & Dictionaries",
        question: "👑 ROBOT BOSS: Trace the object instantiation, method call, and dictionary state:",
        code: "class Android:\n    def __init__(self, name):\n        self.data = {\"status\": \"standby\", \"power\": 100}\n    def activate(self):\n        self.data[\"status\"] = \"online\"\n        self.data[\"power\"] -= 15\nbot = Android(\"Atlas\")\nbot.activate()\nprint(bot.data[\"power\"])",
        options: ["85", "100", "online", "70"],
        correct: 0,
        explanation: "Android initializes self.data[\"power\"] to 100. activate() subtracts 15, leaving 85. bot.data[\"power\"] prints 85.",
        takeaway: "Instance methods can modify complex internal object attributes like dictionaries.",
        learnMore: "self ensures that changes apply specifically to the instance bot without affecting other Android objects.",
        optionNotes: [null, "100 was the starting power before activate() was called.", "online is the value of status, not power.", "Only 15 power was deducted (100 - 15 = 85)."],
        hint: "Starting power is 100, then activate() subtracts 15.",
        type: "mcq",
        difficulty: "BOSS",
        isBoss: true
    },
    {
        id: "b-boss-002",
        concept: "Lists & Dictionaries",
        question: "👑 ROBOT BOSS: What total sensor reading is calculated by iterating over the list keys?",
        code: "sensors = [\"temp\", \"gyro\", \"radar\"]\nvalues = {\"temp\": 20, \"gyro\": 50, \"radar\": 30}\ntotal = 0\nfor s in sensors:\n    total += values[s]\nprint(total)",
        options: ["50", "80", "100", "0"],
        correct: 2,
        explanation: "The loop iterates through each sensor name and looks up its value: 20 + 50 + 30 = 100.",
        takeaway: "Lists of keys are commonly used to iterate over and access values stored in dictionaries.",
        learnMore: "Dict lookups via key run in O(1) average time complexity in Python.",
        optionNotes: ["50 is only the gyro reading.", "80 misses the radar sensor (30).", null, "The loop successfully accumulates each value."],
        hint: "Sum the three values: 20 + 50 + 30.",
        type: "mcq",
        difficulty: "BOSS",
        isBoss: true
    },
    {
        id: "b-boss-003",
        concept: "OOP Methods & Returns",
        question: "👑 ROBOT BOSS: What final coordinate string does the navigation system return?",
        code: "class Rover:\n    def __init__(self):\n        self.x = 0\n        self.y = 0\n    def move(self, dx, dy):\n        self.x += dx\n        self.y += dy\n        return f\"({self.x},{self.y})\"\nr = Rover()\nr.move(2, 3)\nprint(r.move(1, 2))",
        options: ["(1,2)", "(2,3)", "(3,4)", "(3,5)"],
        correct: 3,
        explanation: "First move(2, 3) sets x=2, y=3. Second move(1, 2) adds to existing coordinates: x=2+1=3, y=3+2=5. Output is (3,5).",
        takeaway: "State persists across multiple method calls on the same object instance.",
        learnMore: "Each instance has its own self.x and self.y attributes that retain their values between invocations.",
        optionNotes: ["(1,2) is only the displacement of the second move.", "(2,3) was the position after the first move.", "(3,4) has an arithmetic error in y (3 + 2 = 5).", null],
        hint: "Add the coordinates: (0+2+1, 0+3+2).",
        type: "mcq",
        difficulty: "BOSS",
        isBoss: true
    },
    {
        id: "b-boss-004",
        concept: "Dictionary Operations",
        question: "👑 ROBOT BOSS: What is the output when retrieving keys using the get() method with defaults?",
        code: "bot = {\"id\": \"RX-9\", \"fuel\": 75}\nprint(bot.get(\"shield\", 100) + bot.get(\"fuel\", 0))",
        options: ["75", "175", "100", "Error"],
        correct: 1,
        explanation: "bot does not have 'shield', so bot.get('shield', 100) returns 100. bot has 'fuel', so bot.get('fuel', 0) returns 75. 100 + 75 = 175.",
        takeaway: "dict.get(key, default) safely returns a fallback value if the key does not exist.",
        learnMore: "Using get() avoids KeyError exceptions when accessing optional dictionary keys.",
        optionNotes: ["75 is only the fuel value without shield default.", null, "100 is only the shield default without fuel.", "get() with defaults is safe and does not raise an error."],
        hint: "'shield' defaults to 100 and 'fuel' is 75.",
        type: "mcq",
        difficulty: "BOSS",
        isBoss: true
    },
    {
        id: "l3-boss-001",
        concept: "OOP & Dictionary State",
        question: "👑 ROBOT BOSS: Trace the object instantiation, dictionary attribute update, and method computation:",
        code: "class CyberCore:\n    def __init__(self):\n        self.modules = {\"ai\": 10, \"drive\": 20}\n    def upgrade(self, mod, bonus):\n        self.modules[mod] = self.modules.get(mod, 0) + bonus\n        return sum(self.modules.values())\n\nbot = CyberCore()\nprint(bot.upgrade(\"ai\", 30))",
        options: ["60", "40", "50", "30"],
        correct: 0,
        explanation: "Initial self.modules = {\"ai\": 10, \"drive\": 20}. bot.upgrade(\"ai\", 30) updates \"ai\" to 10 + 30 = 40. Then sum(self.modules.values()) sums 40 + 20 = 60.",
        takeaway: "Advanced Python systems seamlessly integrate OOP classes, dictionary attributes, and built-in aggregation functions.",
        learnMore: "self.modules.values() returns a view of the values [40, 20], which sum() aggregates to 60.",
        optionNotes: [null, "40 is only the updated \"ai\" module, forgetting \"drive\" (20).", "50 would be 20 + 30 without adding the initial 10.", "30 is only the bonus value."],
        hint: "\"ai\" becomes 10 + 30 = 40. Then sum 40 + 20.",
        type: "mcq",
        difficulty: "BOSS",
        isBoss: true
    }
];

const BOSS_POOLS = [
    HOUSE_BOSS_QUESTIONS,
    ROCKET_BOSS_QUESTIONS,
    ROBOT_BOSS_QUESTIONS
];

let seenBossQuestionIds = new Set();

function getNextBossQuestion(buildIndex) {
    const pool = BOSS_POOLS[buildIndex] || HOUSE_BOSS_QUESTIONS;
    let unseen = pool.filter(function (q) {
        return !seenBossQuestionIds.has(q.id);
    });
    if (unseen.length === 0) {
        pool.forEach(function (q) { seenBossQuestionIds.delete(q.id); });
        unseen = pool.slice();
    }
    const chosen = unseen[0];
    seenBossQuestionIds.add(chosen.id);
    return chosen;
}

// ==================================================
// DAILY CHALLENGE QUESTION POOL (12 Varied MCQs: 3 A, 3 B, 3 C, 3 D)
// ==================================================
const DAILY_CHALLENGE_POOL = [
    {
        id: "dc-001",
        concept: "Variables & Concatenation",
        question: "📅 DAILY CHALLENGE: What will this Python code display in the console?",
        code: "material = \"Oak\"\nquantity = 4\nprint(material + \" x \" + str(quantity))",
        options: ["Oak x 4", "Oak x quantity", "Oak 4", "Error: cannot add str and int"],
        correct: 0,
        explanation: "str(quantity) converts the number 4 to \"4\". Concatenating \"Oak\", \" x \", and \"4\" yields \"Oak x 4\".",
        takeaway: "Always convert numbers to strings using str() before concatenating them with other strings.",
        learnMore: "You can also use Python f-strings like f\"{material} x {quantity}\" for string formatting.",
        optionNotes: [null, "The variable quantity was converted to its numeric value 4, not the variable name.", "The ' x ' string literal was included in the concatenation.", "str(quantity) successfully casts the int to a string, avoiding TypeError."],
        hint: "str(quantity) turns 4 into '4'.",
        type: "mcq",
        difficulty: "EASY"
    },
    {
        id: "dc-002",
        concept: "Loop Accumulator",
        question: "📅 DAILY CHALLENGE: What is the final value of velocity printed by this loop?",
        code: "velocity = 0\nfor stage in range(1, 4):\n    velocity += stage * 10\nprint(velocity)",
        options: ["30", "60", "100", "40"],
        correct: 1,
        explanation: "range(1, 4) produces 1, 2, 3. The loop adds 10, then 20, then 30: 10 + 20 + 30 = 60.",
        takeaway: "range(start, stop) excludes the stop value, running up to stop - 1.",
        learnMore: "The accumulator pattern adds values to a running total variable across loop iterations.",
        optionNotes: ["30 is only the final iteration (3 * 10) without accumulating.", null, "100 would include an iteration of 4, but range(1, 4) stops at 3.", "40 is not the sum of 10 + 20 + 30."],
        hint: "Add up 1*10 + 2*10 + 3*10.",
        type: "mcq",
        difficulty: "MEDIUM"
    },
    {
        id: "dc-003",
        concept: "Dictionary Length",
        question: "📅 DAILY CHALLENGE: What will len(systems) evaluate to after adding the new key?",
        code: "systems = {\"radar\": True}\nsystems[\"sonar\"] = False\nprint(len(systems))",
        options: ["1", "3", "2", "Error: dictionary cannot be resized"],
        correct: 2,
        explanation: "The dictionary starts with 1 key ('radar'). Assigning to 'sonar' adds a second key. len(systems) is 2.",
        takeaway: "Assigning a value to a new key in a dictionary inserts that key-value pair.",
        learnMore: "Dictionaries in Python are dynamic and mutable, growing as needed.",
        optionNotes: ["1 was the initial length before adding 'sonar'.", "3 would require 3 unique keys.", null, "Python dictionaries are dynamically mutable."],
        hint: "Count the number of keys now in the dictionary.",
        type: "mcq",
        difficulty: "EASY"
    },
    {
        id: "dc-004",
        concept: "List Methods",
        question: "📅 DAILY CHALLENGE: What is the result of applying .pop() to this list?",
        code: "items = [\"gear\", \"cog\", \"bolt\"]\nremoved = items.pop()\nprint(removed)",
        options: ["gear", "cog", "['gear', 'cog']", "bolt"],
        correct: 3,
        explanation: "Without arguments, list.pop() removes and returns the last item in the list: 'bolt'.",
        takeaway: "list.pop() removes and returns the last element by default.",
        learnMore: "You can also pass an index like list.pop(0) to remove and return a specific element.",
        optionNotes: ["'gear' is at index 0, but pop() removes from the end by default.", "'cog' is the middle element.", "['gear', 'cog'] is what remains in items, not what pop() returned.", null],
        hint: "pop() removes the last element.",
        type: "mcq",
        difficulty: "EASY"
    },
    {
        id: "dc-005",
        concept: "String Slicing",
        question: "📅 DAILY CHALLENGE: What substring is produced by word[:4]?",
        code: "word = \"PYTHONIC\"\nprint(word[:4])",
        options: ["PYTH", "PYTHO", "YTHO", "PYTHON"],
        correct: 0,
        explanation: "word[:4] slices from the beginning (index 0) up to index 4 (exclusive): characters at 0, 1, 2, 3 = 'PYTH'.",
        takeaway: "Slice notation [:n] extracts the first n characters of a sequence.",
        learnMore: "Slicing does not raise an IndexError even if the stop index exceeds the string length.",
        optionNotes: [null, "Index 4 is exclusive, so character at index 4 ('O') is not included.", "Slicing with omitted start starts at index 0, not 1.", "PYTHON is 6 characters long."],
        hint: "Take the first 4 characters.",
        type: "mcq",
        difficulty: "EASY"
    },
    {
        id: "dc-006",
        concept: "Functions & Defaults",
        question: "📅 DAILY CHALLENGE: What will this function call output when using its default argument?",
        code: "def greet(name, prefix=\"Dr.\"):\n    return prefix + \" \" + name\nprint(greet(\"Ada\"))",
        options: ["Ada", "Dr. Ada", "prefix Ada", "None"],
        correct: 1,
        explanation: "Because no second argument was provided, prefix defaults to 'Dr.', producing 'Dr. Ada'.",
        takeaway: "Default parameter values are used whenever a caller omits that argument.",
        learnMore: "Default arguments must follow non-default arguments in Python function definitions.",
        optionNotes: ["The default prefix 'Dr.' is included.", null, "The prefix variable contains 'Dr.', not literal 'prefix'.", "The function explicitly returns a string."],
        hint: "prefix defaults to 'Dr.'.",
        type: "mcq",
        difficulty: "EASY"
    },
    {
        id: "dc-007",
        concept: "Boolean Expressions",
        question: "📅 DAILY CHALLENGE: Which of the following expressions evaluates to True in Python?",
        code: "# Test boolean logic",
        options: ["bool(0)", "bool(\"\")", "bool(\"False\")", "bool([])"],
        correct: 2,
        explanation: "Any non-empty string in Python evaluates to True in boolean context, even if the text inside happens to be 'False'!",
        takeaway: "Empty collections, 0, and empty strings are falsy; any non-empty string is truthy.",
        learnMore: "bool('0') is also True because the string contains a character.",
        optionNotes: ["0 is falsy (bool(0) is False).", "An empty string \"\" is falsy.", null, "An empty list [] is falsy."],
        hint: "Any non-empty string evaluates to True.",
        type: "mcq",
        difficulty: "MEDIUM"
    },
    {
        id: "dc-008",
        concept: "Loops & range() Step",
        question: "📅 DAILY CHALLENGE: What list of numbers is generated by range(0, 10, 3)?",
        code: "print(list(range(0, 10, 3)))",
        options: ["[0, 1, 2]", "[3, 6, 9]", "[0, 3, 6]", "[0, 3, 6, 9]"],
        correct: 3,
        explanation: "range(start, stop, step) begins at 0 and adds 3 each step: 0, 3, 6, 9 (stops before 10).",
        takeaway: "The third argument to range() specifies the step size between numbers.",
        learnMore: "Negative step sizes can be used to count backward (e.g. range(10, 0, -1)).",
        optionNotes: ["Step size is 3, not 1.", "Starts at 0, not 3.", "9 is less than 10, so it is included in the sequence.", null],
        hint: "Count by 3 starting at 0: 0, 3, 6, 9.",
        type: "mcq",
        difficulty: "EASY"
    },
    {
        id: "dc-009",
        concept: "List Comprehensions / Filtering",
        question: "📅 DAILY CHALLENGE: What is the sum of even numbers produced by this loop?",
        code: "evens = []\nfor n in range(1, 6):\n    if n % 2 == 0:\n        evens.append(n)\nprint(sum(evens))",
        options: ["6", "12", "9", "4"],
        correct: 0,
        explanation: "range(1, 6) contains 1, 2, 3, 4, 5. The even numbers are 2 and 4. sum([2, 4]) is 6.",
        takeaway: "Modulo condition n % 2 == 0 filters for even integers.",
        learnMore: "sum() is a built-in Python function that totals numeric iterables.",
        optionNotes: [null, "12 would include odd numbers.", "9 is the sum of odd numbers (1 + 3 + 5).", "4 is only the second even number."],
        hint: "The even numbers between 1 and 5 are 2 and 4. Add them.",
        type: "mcq",
        difficulty: "MEDIUM"
    },
    {
        id: "dc-010",
        concept: "Tuple Immutability",
        question: "📅 DAILY CHALLENGE: What happens when executing point[0] = 5 on a tuple?",
        code: "point = (10, 20)\npoint[0] = 5",
        options: ["point becomes (5, 20)", "TypeError: 'tuple' object does not support item assignment", "SyntaxError", "ValueError"],
        correct: 1,
        explanation: "Tuples are immutable in Python; attempting to modify an item raises a TypeError.",
        takeaway: "Tuples cannot be altered after creation; use lists if you need mutable collections.",
        learnMore: "Immutability makes tuples safe to use as dictionary keys.",
        optionNotes: ["Tuples cannot be modified in-place.", null, "The syntax is valid; the error happens at runtime.", "TypeError is raised, not ValueError."],
        hint: "Tuples cannot be modified after creation.",
        type: "mcq",
        difficulty: "MEDIUM"
    },
    {
        id: "dc-011",
        concept: "Set Operations",
        question: "📅 DAILY CHALLENGE: How many unique elements does set([1, 2, 2, 3, 3, 3]) contain?",
        code: "s = set([1, 2, 2, 3, 3, 3])\nprint(len(s))",
        options: ["6", "1", "3", "Error"],
        correct: 2,
        explanation: "Sets in Python automatically eliminate duplicates. The unique elements are {1, 2, 3}, so len(s) is 3.",
        takeaway: "Sets store only unique items and automatically discard duplicate values.",
        learnMore: "Converting a list to a set is the most common Python idiom for removing duplicates.",
        optionNotes: ["6 is the length of the original list with duplicates.", "There are three distinct values (1, 2, and 3).", null, "set() successfully converts lists to sets."],
        hint: "Count only the distinct numbers: 1, 2, and 3.",
        type: "mcq",
        difficulty: "EASY"
    },
    {
        id: "dc-012",
        concept: "String Formatting & Methods",
        question: "📅 DAILY CHALLENGE: What does the .replace() method produce in this statement?",
        code: "msg = \"Python 2.7\"\nprint(msg.replace(\"2.7\", \"3.12\"))",
        options: ["Python 2.7", "2.7", "Python", "Python 3.12"],
        correct: 3,
        explanation: "str.replace(old, new) returns a new copy of the string where occurrences of old are replaced with new.",
        takeaway: "str.replace() returns a new updated string without modifying the original in place.",
        learnMore: "Strings in Python are immutable, so methods like replace() always return a brand new string.",
        optionNotes: ["The substring '2.7' is replaced with '3.12'.", "The prefix 'Python ' is retained.", "The full replaced string is returned, not just the prefix.", null],
        hint: "Replaces '2.7' with '3.12'.",
        type: "mcq",
        difficulty: "EASY"
    }
];

function getDailyQuestionsForDate(dateStr) {
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
        hash |= 0;
    }
    const dayIndex = Math.abs(hash);
    const startIdx = (dayIndex * 3) % DAILY_CHALLENGE_POOL.length;
    return [
        DAILY_CHALLENGE_POOL[startIdx],
        DAILY_CHALLENGE_POOL[(startIdx + 1) % DAILY_CHALLENGE_POOL.length],
        DAILY_CHALLENGE_POOL[(startIdx + 2) % DAILY_CHALLENGE_POOL.length]
    ];
}
const DAILY_BUILD_QUESTIONS = DAILY_CHALLENGE_POOL; // Alias for backward compatibility

// ==================================================
// LEVEL CONFIGURATIONS (Flexible & Extensible)
// ==================================================

// ==================================================
// SCALABLE MULTI-WORLD ARCHITECTURE
// Architecture: WORLD -> CHAPTER/STAGE -> CHALLENGE -> LEARNING -> BUILD -> MASTERY -> UNLOCK
// ==================================================

let currentWorldId = "python";

const WORLDS = [
    {
        id: "python",
        name: "Python World",
        shortName: "Python",
        icon: "🐍",
        status: "active",
        badge: "WORLD 1 • ACTIVE",
        tagline: "From First Line to Complete Systems",
        description: "Your journey starts with the absolute basics of Python and scales into sequences, functions, data structures, and object-oriented architecture.",
        difficultySummary: "Beginner → Basic → Intermediate → Advanced → Mastery",
        chapters: null // Attached below to BUILDS
    },
    {
        id: "sql",
        name: "SQL World",
        shortName: "SQL",
        icon: "🗄️",
        status: "locked",
        badge: "WORLD 2 • COMING LATER",
        tagline: "Relational Databases & Query Architecture",
        description: "SQL Basics → Filtering → Sorting → Aggregations → Multi-Table Joins → Advanced Database Architecture.",
        chaptersCount: 3,
        buildMilestones: "Bridge, Fortress, Metropolis",
        comingSoonNotice: "Under construction. Complete Python World to master programming foundations first!"
    },
    {
        id: "javascript",
        name: "JavaScript World",
        shortName: "JavaScript",
        icon: "⚡",
        status: "locked",
        badge: "WORLD 3 • COMING LATER",
        tagline: "Interactive Web & Event-Driven Systems",
        description: "Variables & Types → DOM Manipulation → Event Listeners → Async/Await → Full Web Application Architecture.",
        chaptersCount: 3,
        buildMilestones: "Clocktower, Cyber-Car, Space Station",
        comingSoonNotice: "In design on the Build World roadmap. Python World provides the logical foundation!"
    },
    {
        id: "ai_ml",
        name: "AI & Machine Learning World",
        shortName: "AI / ML",
        icon: "🧠",
        status: "locked",
        badge: "WORLD 4 • COMING LATER",
        tagline: "Data Pipelines, Models & Neural Networks",
        description: "Data Preparation → Statistical Models → Training Loops → Loss & Evaluation → AI Production Systems.",
        chaptersCount: 3,
        buildMilestones: "Neural Node, Quantum Core, Synth Android",
        comingSoonNotice: "Future world planned for advanced software engineers."
    },
    {
        id: "java",
        name: "Java World",
        shortName: "Java",
        icon: "☕",
        status: "locked",
        badge: "WORLD 5 • COMING LATER",
        tagline: "Object-Oriented Enterprise Architecture",
        description: "Syntax & Compilation → OOP & Interfaces → Collections & Streams → Concurrency & Enterprise Systems.",
        chaptersCount: 3,
        buildMilestones: "Citadel, Locomotive, Mega-Carrier",
        comingSoonNotice: "Future world planned for enterprise software engineering."
    }
];

function getCurrentWorld() {
    return WORLDS.find(function (w) { return w.id === currentWorldId; }) || WORLDS[0];
}

const BUILDS = [
    {
        id: "house",
        levelNumber: 1,
        name: "Python Basics",
        buildTheme: "House",
        icon: "🏠",
        title: "🏠 BUILD YOUR HOUSE",
        topicName: "CHAPTER 1 — 🏠 PYTHON BASICS",
        description: "Python Introduction, print(), Strings, Numbers, Variables & Types",
        questions: houseQuestions,
        pieces: housePieces,
        sceneElement: houseScene,
        completionTitle: "🏆 CHAPTER 1 COMPLETE!",
        completionDesc: "You completed Chapter 1 and built the Foundation House!",
        unlockNext: "🔓 CHAPTER 2 UNLOCKED: 🚀 LOGIC & LOOPS",
        missions: [
            { id: "h_m1", name: "1. Python Basics", icon: "🌱", pieceRange: [1, 2], desc: "What Python is and how print() works" },
            { id: "h_m2", name: "2. Text & Numbers", icon: "🧱", pieceRange: [3, 4], desc: "Working with strings and numbers" },
            { id: "h_m3", name: "3. Variables & Types", icon: "🔤", pieceRange: [5, 6], desc: "Storing values and data types" },
            { id: "h_m4", name: "4. Arithmetic & Operators", icon: "⚡", pieceRange: [7, 8], desc: "Calculations and assignment operators" },
            { id: "h_m5", name: "5. House Finale", icon: "👑", pieceRange: [9, 10], desc: "Combined fundamentals & House Boss", isBoss: true }
        ],
        pieceDetails: [
            { name: "Foundation Base", desc: "Variables anchor the foundational blueprint" },
            { name: "Foundation Slab", desc: "Print functions solidify the concrete slab" },
            { name: "Walls Lower", desc: "String variables frame the lower wall structure" },
            { name: "Walls Upper", desc: "String concatenation erects the upper walls" },
            { name: "Front Door", desc: "Boolean conditions install the entrance doorway" },
            { name: "Window Left", desc: "Type casting opens the left panoramic window" },
            { name: "Window Right", desc: "Debugged syntax seats the right window frame" },
            { name: "Main Roof", desc: "Resolved errors erect the main roof rafters" },
            { name: "Roof Trim & Chimney", desc: "String methods finish the roof trim" },
            { name: "Garden & Complete Estate", desc: "Python fundamentals complete the entire house!" }
        ]
    },
    {
        id: "rocket",
        levelNumber: 2,
        name: "Logic & Loops",
        buildTheme: "Rocket",
        icon: "🚀",
        title: "🚀 BUILD YOUR ROCKET",
        topicName: "CHAPTER 2 — 🚀 LOGIC & LOOPS",
        description: "Operators, Conditions, Loops & Functions",
        questions: rocketQuestions,
        pieces: rocketPieces,
        sceneElement: rocketScene,
        completionTitle: "🏆 CHAPTER 2 COMPLETE!",
        completionDesc: "You completed Chapter 2 and built the Orbital Rocket!",
        unlockNext: "🔓 CHAPTER 3 UNLOCKED: 🤖 COLLECTIONS & CLASSES",
        missions: [
            { id: "r_m1", name: "1. String Methods & Math", icon: "🚀", pieceRange: [1, 2], desc: "String manipulation and operators" },
            { id: "r_m2", name: "2. If-Else Decisions", icon: "⚡", pieceRange: [3, 4], desc: "Conditions and branching logic" },
            { id: "r_m3", name: "3. While & For Loops", icon: "🔄", pieceRange: [5, 6], desc: "Iteration and repeating actions" },
            { id: "r_m4", name: "4. Writing Functions", icon: "🧪", pieceRange: [7, 8], desc: "def, parameters, and return values" },
            { id: "r_m5", name: "5. Rocket Finale", icon: "👑", pieceRange: [9, 10], desc: "Combined logic & loop mastery", isBoss: true }
        ],
        pieceDetails: [
            { name: "Lower Fuselage", desc: "String slicing machines the lower booster stage" },
            { name: "Upper Fuselage", desc: "String methods assemble the pressurized cabin fuselage" },
            { name: "Left Guidance Fin", desc: "Arithmetic operators calibrate the left stabilizing fin" },
            { name: "Right Guidance Fin", desc: "Comparison operators balance aerodynamic right fin trim" },
            { name: "Cockpit Viewport", desc: "Iteration logic seats the reinforced cockpit viewport" },
            { name: "Engine Bell Nozzle", desc: "While loops forge the high-temperature engine nozzle" },
            { name: "Attitude Thrusters", desc: "Modular functions link the attitude control thrusters" },
            { name: "Supersonic Nose Cone", desc: "Return statements sharpen the supersonic nose cone" },
            { name: "Avionics Array", desc: "Debugged telemetry activates navigation avionics" },
            { name: "Ignition & Launch Pad", desc: "Combined propulsion systems trigger orbital launch ignition!" }
        ]
    },
    {
        id: "robot",
        levelNumber: 3,
        name: "Collections & Classes",
        buildTheme: "Robot",
        icon: "🤖",
        title: "🤖 BUILD YOUR ROBOT",
        topicName: "CHAPTER 3 — 🤖 COLLECTIONS & CLASSES",
        description: "Lists, Tuples, Dictionaries, Classes & Python Mastery",
        questions: robotQuestions,
        pieces: robotPieces,
        sceneElement: robotScene,
        completionTitle: "🏆 CHAPTER 3 COMPLETE!",
        completionDesc: "You conquered Chapter 3 and completed Python World!",
        unlockNext: "🏆 PYTHON WORLD MASTERED!",
        missions: [
            { id: "b_m1", name: "1. Lists & Sequences", icon: "📋", pieceRange: [1, 2], desc: "Ordered lists, indexing, and append" },
            { id: "b_m2", name: "2. Tuples & Records", icon: "📦", pieceRange: [3, 4], desc: "Immutable tuples and data packing" },
            { id: "b_m3", name: "3. Dictionaries", icon: "🗄️", pieceRange: [5, 6], desc: "Key-value pairs and lookups" },
            { id: "b_m4", name: "4. Classes & Objects", icon: "⚙️", pieceRange: [7, 8], desc: "Object-oriented programming & methods" },
            { id: "b_m5", name: "5. Python World Mastery", icon: "👑", pieceRange: [9, 10], desc: "Full cybernetic system integration", isBoss: true }
        ],
        pieceDetails: [
            { name: "Chassis Torso Base", desc: "Dynamic lists store the mechanical chassis components" },
            { name: "Arc Reactor Core", desc: "List manipulation mounts the central power reactor core" },
            { name: "Cranial Chassis", desc: "Immutable tuples anchor the titanium cranial framework" },
            { name: "Telemetry Antenna", desc: "Tuple unpacking extends the multi-frequency antennas" },
            { name: "Optical Visor Eyes", desc: "Dictionary keys map sensory visual perception bands" },
            { name: "Manipulator Left Arm", desc: "Dictionary lookup powers the precision left manipulator" },
            { name: "Hydraulic Right Arm", desc: "OOP classes instantiate the high-torque right arm" },
            { name: "Bipedal Leg System", desc: "Class inheritance constructs the bipedal leg hydraulics" },
            { name: "Exoskeleton Armor", desc: "Encapsulated logic seals the protective exoskeleton" },
            { name: "Autonomous AI Online", desc: "Cybernetic systems activate autonomous AI consciousness!" }
        ]
    }
];

// ==================================================
// GAME STATE (Dynamic Checkpoint & Progression System)
// ==================================================

let currentBuildIndex = 0;                                  // Index in BUILDS (0 = House, 1 = Rocket, 2 = Robot...)
let successfulCorrectAnswers = 0;                           // Exactly 0 to 10 successful correct answers required per level
let currentQuestionIndex = 0;                               // Synced alias for successfulCorrectAnswers
let currentQuestion = null;                                 // Active question object currently presented to player
const seenQuestionIds = new Set();                          // Question IDs displayed during the current level attempt (prevents repeats)
let questionAttempts = 0;                                   // Total question attempts in current level
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
let levelMistakes = 0;                                      // Mistakes in current level attempt
let sessionQuestionsAnswered = 0;                           // Total questions answered in current session
let lastUnlockedBuildIndex = -1;                            // Tracks newly unlocked build for animation
const unlockedAchievements = new Set();                     // IDs of achievements unlocked this run
const unlockedRewards = new Set();                          // IDs of rewards unlocked this run

// Extended tracking metrics for V6.3 True Achievements & Rewards
let totalQuestionsAttempted = 0;                             // Total questions attempted (correct or wrong) across session
let totalCorrectAnswers = 0;                                 // Total questions answered correctly across session
let outputAttempts = 0;                                      // Total output challenges attempted
let outputCorrect = 0;                                       // Total correct predict-the-output challenges
let bugAttempts = 0;                                         // Total bug challenges attempted
let bugCorrect = 0;                                          // Total correct find-the-bug challenges
const attemptsByType = { mcq: 0, output: 0, "code-choice": 0, bug: 0 };
const correctByType = { mcq: 0, output: 0, "code-choice": 0, bug: 0 };
const flawlessLevels = new Set();                            // Build indices completed with 10/10 correct, 0 hints, and 3 lives
const levelCorrectHistory = [];                              // History of correct answers per completed level
let minLivesInLevel = 3;                                      // Lowest life count experienced in current level attempt
let reachedOneLifeInLevel = false;                            // Whether player reached 1 life in this level attempt
let levelUsedHint = false;                                    // Whether hint was activated in current level attempt
let levelFinal5Correct = true;                                // Whether questions in the final 5 were all answered correctly
let levelFinal3Correct = true;                                // Whether questions in the final 3 were all answered correctly
let postOneLifeConsecutiveCorrect = 0;                        // Consecutive correct answers after reaching 1 life in current level
let bestNoHintLevelScore = 0;                                 // Best qualifying level score (out of 10) with 0 hints
let flawlessRunBroken = false;                                // Set to true if any mistake or hint occurs anywhere in the world run

// V9 Performance Report, Mistake Review & Personal Records State
let runMistakes = [];                                           // Stored mistakes from current run for learning review
const levelAttemptsByType = { mcq: 0, output: 0, "code-choice": 0, bug: 0 };
const levelCorrectByType = { mcq: 0, output: 0, "code-choice": 0, bug: 0 };
const completedLevelStats = [];                                 // Full report stats per completed level

// In-memory session personal records (cleared on browser reload / Ctrl+R, no localStorage)
const sessionPersonalRecords = {
    bestStreak: 0,
    bestLevelAccuracy: 0,
    mostXpRun: 0,
    mostPiecesRun: 0,
    fewestWorldWrongAttempts: null,
    bestChallengeAccuracy: { mcq: 0, output: 0, "code-choice": 0, bug: 0 }
};

let activeReviewMistakes = [];
let currentReviewIndex = 0;

// ==================================================
// ACHIEVEMENT SYSTEM VERSION MIGRATION (V6.3)
// ==================================================

const ACHIEVEMENT_SYSTEM_VERSION = 3;
const ACHIEVEMENT_VERSION_KEY = "built_it_achievement_version";

function checkAchievementVersionMigration() {
    try {
        const stored = localStorage.getItem(ACHIEVEMENT_VERSION_KEY);
        const version = stored ? parseInt(stored, 10) : 0;
        if (version < ACHIEVEMENT_SYSTEM_VERSION) {
            // Reset only legacy achievement-related keys if any exist
            localStorage.removeItem("built_it_unlocked_achievements");
            localStorage.removeItem("built_it_unlocked_rewards");
            localStorage.setItem(ACHIEVEMENT_VERSION_KEY, String(ACHIEVEMENT_SYSTEM_VERSION));
            unlockedAchievements.clear();
            unlockedRewards.clear();
        }
    } catch (e) {
        // localStorage not available or sandboxed
    }
}

checkAchievementVersionMigration();

// ==================================================
// AUDIO SYSTEM (Browser-Native Web Audio API)
// ==================================================

const SOUND_PRIORITIES = {
    finalWorldCompleted: 10,
    levelCompleted: 9,
    achievement: 8,
    reward: 7,
    levelUnlocked: 6,
    streak10: 5,
    streak: 4,
    gameOver: 4,
    build: 3,
    correct: 2,
    wrong: 2,
    click: 1
};

const AudioManager = {
    enabled: true,
    audioCtx: null,
    lastSoundType: null,
    lastSoundTime: 0,

    init() {
        if (!this.audioCtx) {
            const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
            if (AudioCtxClass) {
                this.audioCtx = new AudioCtxClass();
            }
        }
        if (this.audioCtx && this.audioCtx.state === "suspended") {
            this.audioCtx.resume();
        }
    },

    toggle() {
        this.enabled = !this.enabled;
        if (this.enabled) {
            this.init();
            this.playSound("click");
        }
        if (soundToggleIcon && soundToggleLabel && soundToggleBtn) {
            soundToggleIcon.textContent = this.enabled ? "🔊" : "🔇";
            soundToggleLabel.textContent = this.enabled ? "Sound ON" : "Sound OFF";
            soundToggleBtn.classList.toggle("is-muted", !this.enabled);
        }
    },

    playSound(type) {
        if (!this.enabled) return;
        try {
            this.init();
            if (!this.audioCtx) return;
            const now = this.audioCtx.currentTime;

            // Audio priority & throttle check (prevents audio clutter when sounds fire concurrently)
            const priority = SOUND_PRIORITIES[type] || 1;
            const lastPriority = SOUND_PRIORITIES[this.lastSoundType] || 0;
            const timeSinceLast = (now - this.lastSoundTime);

            if (timeSinceLast < 0.05 && priority < lastPriority) {
                // Ignore lower priority sound that collides within 50ms of a higher priority sound
                return;
            }

            this.lastSoundType = type;
            this.lastSoundTime = now;

            if (type === "click") {
                const osc = this.audioCtx.createOscillator();
                const gain = this.audioCtx.createGain();
                osc.type = "sine";
                osc.frequency.setValueAtTime(650, now);
                osc.frequency.exponentialRampToValueAtTime(850, now + 0.04);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
                osc.connect(gain);
                gain.connect(this.audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.045);
            } else if (type === "correct") {
                // Two upbeat ascending chime notes (D5, A5)
                const notes = [587.33, 880];
                notes.forEach(function (freq, i) {
                    const noteTime = now + (i * 0.08);
                    const osc = AudioManager.audioCtx.createOscillator();
                    const gain = AudioManager.audioCtx.createGain();
                    osc.type = "sine";
                    osc.frequency.setValueAtTime(freq, noteTime);
                    gain.gain.setValueAtTime(0.12, noteTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.14);
                    osc.connect(gain);
                    gain.connect(AudioManager.audioCtx.destination);
                    osc.start(noteTime);
                    osc.stop(noteTime + 0.15);
                });
            } else if (type === "bossStart") {
                const osc = AudioManager.audioCtx.createOscillator();
                const gain = AudioManager.audioCtx.createGain();
                osc.type = "sawtooth";
                osc.frequency.setValueAtTime(320, now);
                osc.frequency.exponentialRampToValueAtTime(110, now + 0.35);
                gain.gain.setValueAtTime(0.18, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
                osc.connect(gain);
                gain.connect(AudioManager.audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.4);
            } else if (type === "bossVictory") {
                const fanfare = [261.63, 329.63, 392.00, 523.25];
                fanfare.forEach(function (freq, i) {
                    const noteTime = now + (i * 0.12);
                    const osc = AudioManager.audioCtx.createOscillator();
                    const gain = AudioManager.audioCtx.createGain();
                    osc.type = "triangle";
                    osc.frequency.setValueAtTime(freq, noteTime);
                    gain.gain.setValueAtTime(0.16, noteTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.22);
                    osc.connect(gain);
                    gain.connect(AudioManager.audioCtx.destination);
                    osc.start(noteTime);
                    osc.stop(noteTime + 0.24);
                });
            } else if (type === "builderSnap") {
                const osc = AudioManager.audioCtx.createOscillator();
                const gain = AudioManager.audioCtx.createGain();
                osc.type = "sine";
                osc.frequency.setValueAtTime(800, now);
                osc.frequency.exponentialRampToValueAtTime(1200, now + 0.03);
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
                osc.connect(gain);
                gain.connect(AudioManager.audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.04);
            } else if (type === "dailyBuildWin") {
                const chord = [440, 554.37, 659.25];
                chord.forEach(function (freq) {
                    const osc = AudioManager.audioCtx.createOscillator();
                    const gain = AudioManager.audioCtx.createGain();
                    osc.type = "sine";
                    osc.frequency.setValueAtTime(freq, now);
                    gain.gain.setValueAtTime(0.1, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
                    osc.connect(gain);
                    gain.connect(AudioManager.audioCtx.destination);
                    osc.start(now);
                    osc.stop(now + 0.38);
                });
            } else if (type === "wrong") {
                // Distinct descending dual-tone error buzz (A3 220Hz -> E3 165Hz)
                // Rich sawtooth harmonics audible on all laptop, tablet, and mobile speakers
                const notes = [
                    { freq: 220.0, timeOffset: 0.00, dur: 0.11, gain: 0.16 },
                    { freq: 164.81, timeOffset: 0.10, dur: 0.16, gain: 0.16 }
                ];
                notes.forEach(function (n) {
                    const noteTime = now + n.timeOffset;
                    const osc = AudioManager.audioCtx.createOscillator();
                    const gain = AudioManager.audioCtx.createGain();
                    osc.type = "sawtooth";
                    osc.frequency.setValueAtTime(n.freq, noteTime);
                    osc.frequency.linearRampToValueAtTime(n.freq * 0.88, noteTime + n.dur);
                    gain.gain.setValueAtTime(n.gain, noteTime);
                    gain.gain.linearRampToValueAtTime(0.001, noteTime + n.dur);
                    osc.connect(gain);
                    gain.connect(AudioManager.audioCtx.destination);
                    osc.start(noteTime);
                    osc.stop(noteTime + n.dur + 0.01);
                });
            } else if (type === "build") {
                // Snappy mechanical click / construction tap
                const osc = this.audioCtx.createOscillator();
                const gain = this.audioCtx.createGain();
                osc.type = "sine";
                osc.frequency.setValueAtTime(480, now);
                osc.frequency.exponentialRampToValueAtTime(220, now + 0.08);
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
                osc.connect(gain);
                gain.connect(this.audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.085);
            } else if (type === "streak") {
                // Bright 3-note ascending arpeggio (C5, E5, G5)
                const freqs = [523.25, 659.25, 783.99];
                freqs.forEach(function (freq, idx) {
                    const noteTime = now + (idx * 0.07);
                    const osc = AudioManager.audioCtx.createOscillator();
                    const gain = AudioManager.audioCtx.createGain();
                    osc.type = "triangle";
                    osc.frequency.setValueAtTime(freq, noteTime);
                    gain.gain.setValueAtTime(0.12, noteTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.12);
                    osc.connect(gain);
                    gain.connect(AudioManager.audioCtx.destination);
                    osc.start(noteTime);
                    osc.stop(noteTime + 0.13);
                });
            } else if (type === "streak10") {
                // Grand 4-note celebratory arpeggio with high sparkle (C5, E5, G5, C6)
                const freqs = [523.25, 659.25, 783.99, 1046.5];
                freqs.forEach(function (freq, idx) {
                    const noteTime = now + (idx * 0.07);
                    const osc = AudioManager.audioCtx.createOscillator();
                    const gain = AudioManager.audioCtx.createGain();
                    osc.type = "sine";
                    osc.frequency.setValueAtTime(freq, noteTime);
                    gain.gain.setValueAtTime(0.15, noteTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.22);
                    osc.connect(gain);
                    gain.connect(AudioManager.audioCtx.destination);
                    osc.start(noteTime);
                    osc.stop(noteTime + 0.23);
                });
            } else if (type === "achievement") {
                // Triumphant double-chime fanfare (F5, A5, C6)
                const freqs = [698.46, 880.00, 1046.50];
                freqs.forEach(function (freq, idx) {
                    const noteTime = now + (idx * 0.09);
                    const osc = AudioManager.audioCtx.createOscillator();
                    const gain = AudioManager.audioCtx.createGain();
                    osc.type = "sine";
                    osc.frequency.setValueAtTime(freq, noteTime);
                    gain.gain.setValueAtTime(0.14, noteTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.25);
                    osc.connect(gain);
                    gain.connect(AudioManager.audioCtx.destination);
                    osc.start(noteTime);
                    osc.stop(noteTime + 0.26);
                });
            } else if (type === "reward") {
                // Sparkling crystalline chime arpeggio (E5, G#5, B5, E6)
                const freqs = [659.25, 830.61, 987.77, 1318.51];
                freqs.forEach(function (freq, idx) {
                    const noteTime = now + (idx * 0.07);
                    const osc = AudioManager.audioCtx.createOscillator();
                    const gain = AudioManager.audioCtx.createGain();
                    osc.type = "sine";
                    osc.frequency.setValueAtTime(freq, noteTime);
                    gain.gain.setValueAtTime(0.12, noteTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.28);
                    osc.connect(gain);
                    gain.connect(AudioManager.audioCtx.destination);
                    osc.start(noteTime);
                    osc.stop(noteTime + 0.29);
                });
            } else if (type === "levelCompleted") {
                // Fanfare melody (C5, E5, G5, C6)
                const freqs = [523.25, 659.25, 783.99, 1046.50];
                freqs.forEach(function (freq, idx) {
                    const noteTime = now + (idx * 0.1);
                    const osc = AudioManager.audioCtx.createOscillator();
                    const gain = AudioManager.audioCtx.createGain();
                    osc.type = "triangle";
                    osc.frequency.setValueAtTime(freq, noteTime);
                    gain.gain.setValueAtTime(0.14, noteTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, noteTime + (idx === 3 ? 0.35 : 0.16));
                    osc.connect(gain);
                    gain.connect(AudioManager.audioCtx.destination);
                    osc.start(noteTime);
                    osc.stop(noteTime + (idx === 3 ? 0.36 : 0.17));
                });
            } else if (type === "levelUnlocked") {
                // Inspiring ascending slide
                const osc = this.audioCtx.createOscillator();
                const gain = this.audioCtx.createGain();
                osc.type = "sine";
                osc.frequency.setValueAtTime(587.33, now);
                osc.frequency.exponentialRampToValueAtTime(1174.66, now + 0.28);
                gain.gain.setValueAtTime(0.12, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
                osc.connect(gain);
                gain.connect(this.audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.31);
            } else if (type === "gameOver") {
                // Melancholic descending notes
                const freqs = [330.00, 293.66, 220.00];
                freqs.forEach(function (freq, idx) {
                    const noteTime = now + (idx * 0.13);
                    const osc = AudioManager.audioCtx.createOscillator();
                    const gain = AudioManager.audioCtx.createGain();
                    osc.type = "sawtooth";
                    osc.frequency.setValueAtTime(freq, noteTime);
                    gain.gain.setValueAtTime(0.08, noteTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.18);
                    osc.connect(gain);
                    gain.connect(AudioManager.audioCtx.destination);
                    osc.start(noteTime);
                    osc.stop(noteTime + 0.19);
                });
            } else if (type === "finalWorldCompleted") {
                // Grand victory chord arpeggio
                const freqs = [523.25, 659.25, 783.99, 1046.50, 1318.51];
                freqs.forEach(function (freq, idx) {
                    const noteTime = now + (idx * 0.12);
                    const osc = AudioManager.audioCtx.createOscillator();
                    const gain = AudioManager.audioCtx.createGain();
                    osc.type = "sine";
                    osc.frequency.setValueAtTime(freq, noteTime);
                    gain.gain.setValueAtTime(0.15, noteTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, noteTime + (idx === 4 ? 0.6 : 0.22));
                    osc.connect(gain);
                    gain.connect(AudioManager.audioCtx.destination);
                    osc.start(noteTime);
                    osc.stop(noteTime + (idx === 4 ? 0.62 : 0.23));
                });
            }
        } catch (e) {
            console.warn("Audio playback exception:", e);
        }
    }
};

// ==================================================
// PERSISTENT STORAGE ENGINE — V11-A
// Unified Browser-Side LocalStorage Architecture
// ==================================================

const SAVE_STORAGE_KEY = "BUILD_IT_SAVE";
const CURRENT_SAVE_VERSION = 1;

const SafeStorage = {
    getItem(key) {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            console.warn("BUILD IT! SafeStorage.getItem error:", e);
            return null;
        }
    },
    setItem(key, value) {
        try {
            localStorage.setItem(key, value);
            return true;
        } catch (e) {
            console.warn("BUILD IT! SafeStorage.setItem error:", e);
            return false;
        }
    },
    removeItem(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.warn("BUILD IT! SafeStorage.removeItem error:", e);
            return false;
        }
    }
};

// ==================================================
// DAILY STREAK SYSTEM (LocalStorage Calendar Tracking)
// ==================================================

const DailyStreakManager = {
    LEGACY_STORAGE_KEY: "built_it_daily_streak",

    getTodayDateString() {
        const d = new Date();
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return year + "-" + month + "-" + day;
    },

    getYesterdayDateString() {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return year + "-" + month + "-" + day;
    },

    getData() {
        try {
            // First check unified BUILD_IT_SAVE
            const rawSave = SafeStorage.getItem(SAVE_STORAGE_KEY);
            if (rawSave) {
                const parsedSave = JSON.parse(rawSave);
                if (parsedSave && parsedSave.dailyStreak && typeof parsedSave.dailyStreak === "object") {
                    return {
                        lastActiveDate: typeof parsedSave.dailyStreak.lastActiveDate === "string" ? parsedSave.dailyStreak.lastActiveDate : "",
                        currentStreak: Number.isInteger(parsedSave.dailyStreak.currentStreak) ? parsedSave.dailyStreak.currentStreak : 0,
                        bestStreak: Number.isInteger(parsedSave.dailyStreak.bestStreak) ? parsedSave.dailyStreak.bestStreak : 0
                    };
                }
            }
            // Fallback: check legacy key if exists
            const legacyRaw = SafeStorage.getItem(this.LEGACY_STORAGE_KEY);
            if (legacyRaw) {
                const legacyParsed = JSON.parse(legacyRaw);
                if (legacyParsed && typeof legacyParsed === "object") {
                    return {
                        lastActiveDate: typeof legacyParsed.lastActiveDate === "string" ? legacyParsed.lastActiveDate : "",
                        currentStreak: Number.isInteger(legacyParsed.currentStreak) ? legacyParsed.currentStreak : 0,
                        bestStreak: Number.isInteger(legacyParsed.bestStreak) ? legacyParsed.bestStreak : 0
                    };
                }
            }
        } catch (e) {
            // storage unavailable
        }
        return { lastActiveDate: "", currentStreak: 0, bestStreak: 0 };
    },

    saveData(data) {
        try {
            const rawSave = SafeStorage.getItem(SAVE_STORAGE_KEY);
            let saveObj = null;
            if (rawSave) {
                try { saveObj = JSON.parse(rawSave); } catch (e) { saveObj = null; }
            }
            if (saveObj && typeof saveObj === "object") {
                saveObj.dailyStreak = {
                    lastActiveDate: data.lastActiveDate,
                    currentStreak: data.currentStreak,
                    bestStreak: data.bestStreak
                };
                SafeStorage.setItem(SAVE_STORAGE_KEY, JSON.stringify(saveObj));
            } else {
                if (typeof saveGameProgress === "function") {
                    saveGameProgress();
                } else {
                    SafeStorage.setItem(SAVE_STORAGE_KEY, JSON.stringify({
                        version: CURRENT_SAVE_VERSION,
                        dailyStreak: {
                            lastActiveDate: data.lastActiveDate,
                            currentStreak: data.currentStreak,
                            bestStreak: data.bestStreak
                        }
                    }));
                }
            }
        } catch (e) {
            // ignore
        }
    },

    checkMilestone(streakDays) {
        if (streakDays === 3) {
            showToast("streak", "🔥 3-DAY BUILDER", "3-Day Streak Reached!", "Earned the 3-Day Builder Badge!", "🔥");
        } else if (streakDays === 7) {
            showToast("streak", "🔥 7-DAY BUILDER", "7-Day Streak Reached!", "Unlocked 7-Day Flame Effect!", "🔥");
        } else if (streakDays === 14) {
            showToast("streak", "🔥 14-DAY BUILDER", "14-Day Streak Reached!", "Unlocked 14-Day Enhanced Flame!", "🔥");
        } else if (streakDays === 30) {
            showToast("streak", "🔥 30-DAY BUILDER", "30-Day Master Milestone!", "Unlocked Rare 30-Day Celebration!", "🔥");
        }
    },

    recordActivity() {
        const today = this.getTodayDateString();
        const yesterday = this.getYesterdayDateString();
        const data = this.getData();

        if (data.lastActiveDate === today) {
            this.updateUI();
            return false;
        }

        if (data.lastActiveDate === yesterday) {
            data.currentStreak += 1;
            if (data.currentStreak > data.bestStreak) {
                data.bestStreak = data.currentStreak;
            }
            data.lastActiveDate = today;
            this.saveData(data);
            showToast("streak", "DAILY STREAK", "🔥 DAILY STREAK +1!", data.currentStreak + " Days Active in a Row", "🔥");
            this.checkMilestone(data.currentStreak);
            AudioManager.playSound("streak");
            this.updateUI();
            return true;
        } else {
            data.currentStreak = 1;
            if (data.currentStreak > data.bestStreak) {
                data.bestStreak = data.currentStreak;
            }
            data.lastActiveDate = today;
            this.saveData(data);
            showToast("streak", "DAILY STREAK", "🔥 DAILY STREAK STARTED!", "1 Day Active! Keep it going tomorrow!", "🔥");
            this.updateUI();
            return true;
        }
    },

    updateUI() {
        const data = this.getData();
        const streak = data.currentStreak;
        if (mapDailyStreakVal) {
            if (streak >= 30) {
                mapDailyStreakVal.textContent = "🔥 30-DAY BUILDER";
            } else if (streak >= 14) {
                mapDailyStreakVal.textContent = "🔥 14-DAY BUILDER";
            } else if (streak >= 7) {
                mapDailyStreakVal.textContent = "🔥 7-DAY BUILDER";
            } else if (streak >= 3) {
                mapDailyStreakVal.textContent = "🔥 3-DAY BUILDER";
            } else if (streak > 0) {
                mapDailyStreakVal.textContent = "🔥 " + streak + (streak === 1 ? " DAY" : " DAYS");
            } else {
                mapDailyStreakVal.textContent = "🔥 START TODAY";
            }
        }
        if (mapDailyBestVal) {
            mapDailyBestVal.textContent = "Best: " + data.bestStreak;
        }

        const chip = document.querySelector(".chip-daily-streak");
        if (chip) {
            chip.classList.toggle("daily-badge-3", streak >= 3 && streak < 7);
            chip.classList.toggle("daily-badge-7", streak >= 7 && streak < 14);
            chip.classList.toggle("daily-badge-14", streak >= 14 && streak < 30);
            chip.classList.toggle("daily-badge-30", streak >= 30);
        }
    }
};

// ==================================================
// ACHIEVEMENTS & REWARDS DATA ARCHITECTURE (V8 MASTERY)
// ==================================================

const ACHIEVEMENTS = [
    {
        id: "first_build",
        title: "FIRST BUILD",
        rarity: "COMMON",
        type: "Normal",
        hidden: false,
        icon: "🏠",
        description: "Your first structure is complete.",
        rewardId: "build_spark",
        condition: "Complete Level 1.",
        getProgressText: function (state) {
            return (state.completedLevels && state.completedLevels[0]) ? "Completed" : "Not yet achieved";
        }
    },
    {
        id: "sharp_mind",
        title: "SHARP MIND",
        rarity: "UNCOMMON",
        type: "Skill",
        hidden: false,
        icon: "🧠",
        description: "Complete any level with at least 9/10 correct and 0 hints used.",
        rewardId: "starter_world_glow",
        condition: "Complete any level with at least 9 successful correct answers out of 10, using 0 hints. Wrong answers are allowed.",
        getProgressText: function (state) {
            if (state.unlockedAchievements && state.unlockedAchievements.includes("sharp_mind")) {
                return "Completed";
            }
            const best = state.bestNoHintLevelScore || 0;
            return "Best: " + best + " / 10 • Target: 9 / 10";
        }
    },
    {
        id: "perfect_builder",
        title: "PERFECT BUILDER",
        rarity: "RARE",
        type: "Mastery",
        hidden: false,
        icon: "✨",
        description: "Complete ONE entire level: 10/10 correct, 0 wrong answers, 0 hints, and 3/3 lives remaining.",
        rewardId: "perfect_build",
        condition: "Complete an entire level: 10/10 correct, 0 wrong answers, 0 hints, 3/3 lives remaining.",
        getProgressText: function (state) {
            return (state.unlockedAchievements && state.unlockedAchievements.includes("perfect_builder")) ? "Completed" : "10/10 correct • 0 wrong • 0 hints • 3 lives";
        }
    },
    {
        id: "streak_builder",
        title: "STREAK BUILDER",
        rarity: "RARE",
        type: "Streak",
        hidden: false,
        icon: "🔥",
        description: "Reach 15 consecutive correct answers without breaking the chain.",
        rewardId: "fire_streak",
        condition: "Reach 15 consecutive correct answers.",
        getProgressText: function (state) {
            if (state.unlockedAchievements && state.unlockedAchievements.includes("streak_builder")) {
                return "Completed";
            }
            return "Current best streak: " + Math.min(15, state.bestStreak || 0) + " / 15";
        }
    },
    {
        id: "bug_hunter",
        title: "BUG HUNTER",
        rarity: "RARE",
        type: "Challenge Specialization",
        hidden: false,
        icon: "🔍",
        description: "Correctly answer at least 8 bug challenges with >= 80% accuracy.",
        rewardId: "bug_hunter_effect",
        condition: "Correctly answer at least 8 BUG challenges AND achieve at least 80% accuracy across BUG challenges attempted.",
        getProgressText: function (state) {
            if (state.unlockedAchievements && state.unlockedAchievements.includes("bug_hunter")) {
                return "Completed";
            }
            const correct = state.bugCorrect || 0;
            const attempts = state.bugAttempts || 0;
            const acc = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;
            return correct + " / 8 correct • " + acc + "% accuracy";
        }
    },
    {
        id: "output_master",
        title: "OUTPUT MASTER",
        rarity: "RARE",
        type: "Challenge Specialization",
        hidden: false,
        icon: "⚡",
        description: "Correctly answer at least 8 output challenges with >= 80% accuracy.",
        rewardId: "output_pulse",
        condition: "Correctly answer at least 8 OUTPUT / PREDICT-OUTPUT challenges AND achieve at least 80% accuracy across OUTPUT challenges attempted.",
        getProgressText: function (state) {
            if (state.unlockedAchievements && state.unlockedAchievements.includes("output_master")) {
                return "Completed";
            }
            const correct = state.outputCorrect || 0;
            const attempts = state.outputAttempts || 0;
            const acc = attempts > 0 ? (Math.round((correct / attempts) * 1000) / 10) : 0;
            return correct + " / 8 correct • " + acc + "% accuracy";
        }
    },
    {
        id: "challenge_master",
        title: "CHALLENGE MASTER",
        rarity: "EPIC",
        type: "Variety",
        hidden: false,
        icon: "🎯",
        description: "Correctly answer at least 5 questions from EACH of the 4 challenge types.",
        rewardId: "explorer_glow",
        condition: "Correctly answer at least 5 questions from EACH of the 4 challenge types (MCQ, OUTPUT, CODE-CHOICE, BUG).",
        getProgressText: function (state) {
            if (state.unlockedAchievements && state.unlockedAchievements.includes("challenge_master")) {
                return "Completed";
            }
            const corr = state.correctByType || {};
            const mcq = corr.mcq || 0;
            const out = corr.output || 0;
            const code = corr["code-choice"] || 0;
            const bug = corr.bug || 0;
            return "MCQ " + mcq + "/5" + (mcq >= 5 ? " ✓" : "") +
                " • OUTPUT " + out + "/5" + (out >= 5 ? " ✓" : "") +
                " • CODE " + code + "/5" + (code >= 5 ? " ✓" : "") +
                " • BUG " + bug + "/5" + (bug >= 5 ? " ✓" : "");
        }
    },
    {
        id: "clutch_builder",
        title: "CLUTCH BUILDER",
        rarity: "EPIC",
        type: "Pressure",
        hidden: false,
        icon: "🛡️",
        description: "Reach 1 life, answer 5 consecutive correct after reaching 1 life, and complete the level.",
        rewardId: "clutch_build_effect",
        condition: "During a single level: reach 1 life remaining, answer 5 consecutive questions correctly after reaching 1 life, and complete that level.",
        getProgressText: function (state) {
            return (state.unlockedAchievements && state.unlockedAchievements.includes("clutch_builder")) ? "Completed" : "Reach 1 life, then 5 correct to finish";
        }
    },
    {
        id: "world_builder",
        title: "WORLD BUILDER",
        rarity: "EPIC",
        type: "Completion + Efficiency",
        hidden: false,
        icon: "🌍",
        description: "Complete all 3 levels and build at least 27 of 30 possible pieces.",
        rewardId: "world_builder_effect",
        condition: "Complete all 3 levels AND build at least 27 of the 30 possible pieces.",
        getProgressText: function (state) {
            if (state.unlockedAchievements && state.unlockedAchievements.includes("world_builder")) {
                return "Completed";
            }
            return (state.totalPiecesBuilt || 0) + " / 27 pieces";
        }
    },
    {
        id: "python_master",
        title: "PYTHON MASTER",
        rarity: "EPIC",
        type: "Overall Skill",
        hidden: false,
        icon: "👑",
        description: "Complete all 3 levels with >= 28/30 correct and no individual level below 9.",
        rewardId: "python_master_aura",
        condition: "Across all 3 levels: at least 28 successful correct answers out of 30 AND no individual level may have fewer than 9 correct answers.",
        getProgressText: function (state) {
            if (state.unlockedAchievements && state.unlockedAchievements.includes("python_master")) {
                return "Completed";
            }
            const history = state.levelCorrectHistory || [];
            const sum = history.reduce(function (a, b) { return a + b; }, 0);
            return Math.min(28, sum) + " / 28 correct";
        }
    },
    {
        id: "flawless_world",
        title: "FLAWLESS WORLD",
        rarity: "LEGENDARY",
        type: "Ultimate Mastery",
        hidden: false,
        icon: "🏆",
        description: "Complete all 3 levels with 30/30 correct, 0 wrong answers, 0 hints used, and 3/3 lives preserved throughout.",
        rewardId: "golden_world",
        condition: "Complete all 3 levels with: 30 / 30 correct, 0 wrong answers, 0 hints used, 3 / 3 lives remaining throughout every level.",
        getProgressText: function (state) {
            if (state.unlockedAchievements && state.unlockedAchievements.includes("flawless_world")) {
                return "Completed";
            }
            return (state.flawlessLevelsCount || 0) + " / 3 flawless levels (30/30, 0 hints)";
        }
    },
    {
        id: "boss_slayer",
        title: "BOSS SLAYER",
        rarity: "RARE",
        type: "Boss Victory",
        hidden: false,
        icon: "👑",
        description: "Defeat any level Boss Challenge to prove your combined concept mastery.",
        rewardId: "boss_slayer_aura",
        condition: "Conquer a level Boss challenge.",
        getProgressText: function (state) {
            return (state.unlockedAchievements && state.unlockedAchievements.includes("boss_slayer")) ? "Completed" : "Defeat a level Boss";
        }
    },
    {
        id: "code_artisan",
        title: "CODE ARTISAN",
        rarity: "UNCOMMON",
        type: "Construction",
        hidden: false,
        icon: "🧩",
        description: "Successfully assemble correct Python code in a Code Builder challenge.",
        rewardId: "code_artisan_glow",
        condition: "Correctly assemble a Code Builder statement.",
        getProgressText: function (state) {
            return (state.unlockedAchievements && state.unlockedAchievements.includes("code_artisan")) ? "Completed" : "Assemble a Code Builder challenge";
        }
    },
    {
        id: "daily_architect",
        title: "DAILY ARCHITECT",
        rarity: "RARE",
        type: "Daily Challenge",
        hidden: false,
        icon: "📅",
        description: "Complete a 3-challenge Daily Build sequence across all domains.",
        rewardId: "daily_architect_spark",
        condition: "Complete a Daily Build challenge.",
        getProgressText: function (state) {
            return (state.unlockedAchievements && state.unlockedAchievements.includes("daily_architect")) ? "Completed" : "Complete a Daily Build";
        }
    },
    {
        id: "concept_master",
        title: "CONCEPT MASTER",
        rarity: "EPIC",
        type: "Mastery",
        hidden: false,
        icon: "⭐",
        description: "Reach 'Mastered' status in any core programming concept.",
        rewardId: "concept_master_crown",
        condition: "Achieve Mastered status in at least one concept domain.",
        getProgressText: function (state) {
            return (state.unlockedAchievements && state.unlockedAchievements.includes("concept_master")) ? "Completed" : "Reach Mastered on any concept";
        }
    },
    {
        id: "secret_last_spark",
        title: "THE LAST SPARK",
        rarity: "LEGENDARY",
        type: "SECRET",
        hidden: true,
        icon: "⚡",
        description: "Survive with 1 life after using a hint and answer the final 3 questions consecutively to complete the level.",
        rewardId: "last_spark_effect",
        condition: "During a single level: reach 1 life, use a hint earlier in that level, correctly answer the final 3 required questions consecutively with no additional mistakes, and complete the level.",
        getProgressText: function (state) {
            return (state.unlockedAchievements && state.unlockedAchievements.includes("secret_last_spark")) ? "Completed" : "Secret achievement";
        }
    }
];

const REWARDS = {
    boss_slayer_aura: {
        id: "boss_slayer_aura",
        title: "Boss Slayer Aura",
        description: "A fierce golden crown aura illuminates your construction stage.",
        cssClass: "effect-boss-aura"
    },
    code_artisan_glow: {
        id: "code_artisan_glow",
        title: "Code Artisan Glow",
        description: "Syntactic cyan highlights pulse along your assembled components.",
        cssClass: "effect-code-artisan"
    },
    daily_architect_spark: {
        id: "daily_architect_spark",
        title: "Daily Architect Spark",
        description: "A brilliant calendar constellation shines over your daily builds.",
        cssClass: "effect-daily-spark"
    },
    concept_master_crown: {
        id: "concept_master_crown",
        title: "Concept Master Crown",
        description: "A luminous star crest marks your comprehensive programming mastery.",
        cssClass: "effect-concept-crown"
    },

    build_spark: {
        id: "build_spark",
        title: "Build Spark",
        description: "A brilliant electrical spark aura surrounds the construction stage.",
        cssClass: "effect-build-spark"
    },
    starter_world_glow: {
        id: "starter_world_glow",
        title: "Starter World Glow",
        description: "Subtle radiant glow illuminates completed Build World checkpoints.",
        cssClass: "effect-starter-glow"
    },
    output_pulse: {
        id: "output_pulse",
        title: "Output Pulse",
        description: "High-voltage electric pulse on active streak indicators.",
        cssClass: "effect-output-pulse"
    },
    bug_hunter_effect: {
        id: "bug_hunter_effect",
        title: "Bug Hunter Effect",
        description: "Matrix emerald text aura radiates from the construction header.",
        cssClass: "effect-bug-hunter"
    },
    fire_streak: {
        id: "fire_streak",
        title: "Fire Streak Effect",
        description: "Blazing fire ember border glows on the active streak indicator.",
        cssClass: "effect-fire-streak"
    },
    perfect_build: {
        id: "perfect_build",
        title: "Perfect Build Effect",
        description: "Shimmering construction glow celebrating flawless level engineering.",
        cssClass: "effect-perfect-build"
    },
    clutch_build_effect: {
        id: "clutch_build_effect",
        title: "Clutch Build Effect",
        description: "Intense protective shield glow surrounding the builder stage.",
        cssClass: "effect-clutch-build"
    },
    explorer_glow: {
        id: "explorer_glow",
        title: "Explorer Glow",
        description: "Expeditionary cyan glow across the achievements and progression showcase.",
        cssClass: "effect-explorer-glow"
    },
    world_builder_effect: {
        id: "world_builder_effect",
        title: "World Builder Effect",
        description: "A cosmic ambient radial glow illuminates the Build World progression journey.",
        cssClass: "effect-world-glow"
    },
    python_master_aura: {
        id: "python_master_aura",
        title: "Python Master Aura",
        description: "Permanent sapphire mastery aura crowning the XP and score header.",
        cssClass: "effect-python-aura"
    },
    golden_world: {
        id: "golden_world",
        title: "Golden World Effect",
        description: "Aura of golden stardust illuminating the entire World Map screen.",
        cssClass: "effect-golden-world"
    },
    last_spark_effect: {
        id: "last_spark_effect",
        title: "Last Spark Effect",
        description: "Resilient golden lightning ember surrounds the construction stage.",
        cssClass: "effect-last-spark"
    }
};

// ==================================================
// TOAST & VISUAL FEEDBACK HELPERS
// ==================================================

function showToast(type, tag, title, desc, icon) {
    if (!toastContainer) return;

    const item = document.createElement("div");
    let typeClass = "";
    if (type === "achievement") typeClass = " toast-achievement";
    else if (type === "reward") typeClass = " toast-reward";
    else if (type === "streak") typeClass = " toast-streak";

    item.className = "toast-item" + typeClass;
    item.innerHTML =
        '<div class="toast-icon">' + (icon || "🏆") + '</div>' +
        '<div class="toast-content">' +
        '<span class="toast-tag">' + escapeHtml(tag || "NOTIFICATION") + '</span>' +
        '<span class="toast-title">' + escapeHtml(title) + '</span>' +
        (desc ? '<span class="toast-desc">' + escapeHtml(desc) + '</span>' : '') +
        '</div>';

    toastContainer.appendChild(item);

    setTimeout(function () {
        item.classList.add("toast-leave");
        setTimeout(function () {
            item.remove();
        }, 320);
    }, 3500);
}

function showFloatingXp(targetElement, text) {
    if (!targetElement) return;
    const pill = document.createElement("div");
    pill.className = "floating-xp-pill";
    pill.textContent = text || "+10 XP";

    const rect = targetElement.getBoundingClientRect();
    pill.style.position = "fixed";
    pill.style.left = (rect.left + rect.width / 2) + "px";
    pill.style.top = (rect.top + 6) + "px";

    document.body.appendChild(pill);
    setTimeout(function () {
        pill.remove();
    }, 850);
}

// ==================================================
// PERSISTENT PROGRESSION ENGINE (V11-A)
// ==================================================

function validateSaveData(data) {
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        return null;
    }

    // Version validation (supports future migrations)
    if (!Number.isInteger(data.version) || data.version < 1) {
        return null;
    }

    // Completed levels array validation
    if (!Array.isArray(data.completedLevels)) {
        return null;
    }

    const maxLevels = BUILDS.length;
    const validatedCompleted = [];
    for (let i = 0; i < maxLevels; i++) {
        // Enforce strictly linear progression: level i can only be true if prior levels are true
        if (i === 0) {
            validatedCompleted.push(Boolean(data.completedLevels[i]));
        } else {
            const priorCompleted = validatedCompleted[i - 1];
            validatedCompleted.push(priorCompleted && Boolean(data.completedLevels[i]));
        }
    }

    // XP validation (non-negative finite number)
    let checkpointXpVal = 0;
    if (typeof data.checkpointXp === "number" && Number.isFinite(data.checkpointXp) && data.checkpointXp >= 0) {
        checkpointXpVal = Math.min(100000, Math.floor(data.checkpointXp));
    }

    let totalXpVal = checkpointXpVal;
    if (typeof data.totalXp === "number" && Number.isFinite(data.totalXp) && data.totalXp >= 0) {
        totalXpVal = Math.min(100000, Math.floor(data.totalXp));
    }
    totalXpVal = Math.max(totalXpVal, checkpointXpVal);

    // Best streak validation
    let bestStreakVal = 0;
    if (typeof data.bestStreak === "number" && Number.isFinite(data.bestStreak) && data.bestStreak >= 0) {
        bestStreakVal = Math.floor(data.bestStreak);
    }

    // Unlocked achievements validation (whitelist against defined ACHIEVEMENTS)
    const validAchIds = new Set(ACHIEVEMENTS.map(function (a) { return a.id; }));
    const validatedAch = [];
    if (Array.isArray(data.unlockedAchievements)) {
        data.unlockedAchievements.forEach(function (id) {
            if (typeof id === "string" && validAchIds.has(id) && !validatedAch.includes(id)) {
                validatedAch.push(id);
            }
        });
    }

    // Unlocked rewards validation (whitelist against defined REWARDS)
    const validRewardIds = new Set(Object.keys(REWARDS));
    const validatedRewards = [];
    if (Array.isArray(data.unlockedRewards)) {
        data.unlockedRewards.forEach(function (id) {
            if (typeof id === "string" && validRewardIds.has(id) && !validatedRewards.includes(id)) {
                validatedRewards.push(id);
            }
        });
    }

    // Personal records validation
    const validatedRecords = {
        bestStreak: 0,
        bestLevelAccuracy: 0,
        mostXpRun: 0,
        mostPiecesRun: 0,
        fewestWorldWrongAttempts: null,
        bestChallengeAccuracy: { mcq: 0, output: 0, "code-choice": 0, bug: 0 }
    };
    if (data.personalRecords && typeof data.personalRecords === "object") {
        const pr = data.personalRecords;
        if (typeof pr.bestStreak === "number" && Number.isFinite(pr.bestStreak) && pr.bestStreak >= 0) {
            validatedRecords.bestStreak = Math.floor(pr.bestStreak);
        }
        if (typeof pr.bestLevelAccuracy === "number" && Number.isFinite(pr.bestLevelAccuracy)) {
            validatedRecords.bestLevelAccuracy = Math.max(0, Math.min(100, Math.floor(pr.bestLevelAccuracy)));
        }
        if (typeof pr.mostXpRun === "number" && Number.isFinite(pr.mostXpRun) && pr.mostXpRun >= 0) {
            validatedRecords.mostXpRun = Math.floor(pr.mostXpRun);
        }
        if (typeof pr.mostPiecesRun === "number" && Number.isFinite(pr.mostPiecesRun) && pr.mostPiecesRun >= 0) {
            validatedRecords.mostPiecesRun = Math.min(30, Math.floor(pr.mostPiecesRun));
        }
        if (pr.fewestWorldWrongAttempts !== null && pr.fewestWorldWrongAttempts !== undefined) {
            if (typeof pr.fewestWorldWrongAttempts === "number" && Number.isFinite(pr.fewestWorldWrongAttempts) && pr.fewestWorldWrongAttempts >= 0) {
                validatedRecords.fewestWorldWrongAttempts = Math.floor(pr.fewestWorldWrongAttempts);
            }
        }
        if (pr.bestChallengeAccuracy && typeof pr.bestChallengeAccuracy === "object") {
            ["mcq", "output", "code-choice", "bug"].forEach(function (type) {
                const val = pr.bestChallengeAccuracy[type];
                if (typeof val === "number" && Number.isFinite(val)) {
                    validatedRecords.bestChallengeAccuracy[type] = Math.max(0, Math.min(100, Math.floor(val)));
                }
            });
        }
    }

    // Daily streak validation
    const validatedDaily = { lastActiveDate: "", currentStreak: 0, bestStreak: 0 };
    if (data.dailyStreak && typeof data.dailyStreak === "object") {
        if (typeof data.dailyStreak.lastActiveDate === "string") {
            validatedDaily.lastActiveDate = data.dailyStreak.lastActiveDate.slice(0, 30);
        }
        if (Number.isInteger(data.dailyStreak.currentStreak) && data.dailyStreak.currentStreak >= 0) {
            validatedDaily.currentStreak = data.dailyStreak.currentStreak;
        }
        if (Number.isInteger(data.dailyStreak.bestStreak) && data.dailyStreak.bestStreak >= 0) {
            validatedDaily.bestStreak = data.dailyStreak.bestStreak;
        }
    }

    // Completed level stats validation
    const validatedStats = [];
    if (Array.isArray(data.completedLevelStats)) {
        data.completedLevelStats.forEach(function (s, idx) {
            if (idx < maxLevels && s && typeof s === "object" && validatedCompleted[idx]) {
                validatedStats[idx] = s;
            } else {
                validatedStats[idx] = null;
            }
        });
    }

    // Flawless levels validation
    const validatedFlawless = [];
    if (Array.isArray(data.flawlessLevels)) {
        data.flawlessLevels.forEach(function (idx) {
            if (Number.isInteger(idx) && idx >= 0 && idx < maxLevels && validatedCompleted[idx]) {
                validatedFlawless.push(idx);
            }
        });
    }

    return {
        version: data.version,
        completedLevels: validatedCompleted,
        checkpointXp: checkpointXpVal,
        totalXp: totalXpVal,
        bestStreak: bestStreakVal,
        unlockedAchievements: validatedAch,
        unlockedRewards: validatedRewards,
        flawlessLevels: validatedFlawless,
        levelCorrectHistory: Array.isArray(data.levelCorrectHistory) ? data.levelCorrectHistory.slice(0, maxLevels) : [],
        bestNoHintLevelScore: typeof data.bestNoHintLevelScore === "number" ? Math.max(0, Math.min(10, data.bestNoHintLevelScore)) : 0,
        completedLevelStats: validatedStats,
        personalRecords: validatedRecords,
        dailyStreak: validatedDaily,
        conceptMastery: data.conceptMastery && typeof data.conceptMastery === "object" ? data.conceptMastery : null,
        dailyBuild: data.dailyBuild && typeof data.dailyBuild === "object" ? data.dailyBuild : null,
        cityState: data.cityState && typeof data.cityState === "object" ? data.cityState : null,
        metrics: data.metrics && typeof data.metrics === "object" ? data.metrics : null
    };
}

function hasSavedProgress() {
    // True if player has completed at least one level or has permanent checkpoint XP
    if (completedLevels && completedLevels.some(Boolean)) return true;
    if (checkpointXp > 0 || totalXp > 0) return true;
    return false;
}

function updateStartScreenUI(hasProgress) {
    if (hasProgress === undefined) {
        hasProgress = hasSavedProgress();
    }

    const startBtn = document.getElementById("start-button");
    const textSpan = document.getElementById("start-button-text") || (startBtn ? startBtn.querySelector(".btn-start-text") : null);
    const newGameBtn = document.getElementById("new-game-button");

    if (textSpan) {
        if (hasProgress) {
            textSpan.textContent = "CONTINUE BUILDING";
        } else {
            textSpan.textContent = "START GAME";
        }
    }

    if (newGameBtn) {
        newGameBtn.style.display = hasProgress ? "inline-flex" : "none";
    }

    if (homeAchievementsBadge && typeof unlockedAchievements !== "undefined") {
        homeAchievementsBadge.textContent = unlockedAchievements.size + "/" + ACHIEVEMENTS.length;
    }

    if (typeof DailyBuildManager !== "undefined") {
        DailyBuildManager.updateUI();
    }
    if (typeof renderPersonalGoals === "function") {
        renderPersonalGoals();
    }
}

function saveGameProgress() {
    try {
        const streakData = DailyStreakManager.getData();

        // Calculate highest unlocked build index
        let unlockedIndex = 0;
        for (let i = 0; i < BUILDS.length; i++) {
            if (completedLevels[i]) {
                unlockedIndex = Math.min(BUILDS.length - 1, i + 1);
            }
        }

        // Only persist completed build pieces; active incomplete build restarts with 0 pieces
        const persistentPieces = BUILDS.map(function (b, idx) {
            if (completedLevels[idx]) {
                return b.pieces ? b.pieces.length : b.questions.length;
            }
            return 0;
        });

        const saveData = {
            version: CURRENT_SAVE_VERSION,
            timestamp: Date.now(),
            unlockedBuildIndex: unlockedIndex,
            completedLevels: completedLevels.slice(0, BUILDS.length),
            checkpointXp: checkpointXp,
            totalXp: checkpointXp, // Permanent XP saved to localStorage
            bestStreak: bestStreak,
            buildPieces: persistentPieces,
            unlockedAchievements: Array.from(unlockedAchievements),
            unlockedRewards: Array.from(unlockedRewards),
            flawlessLevels: Array.from(flawlessLevels),
            levelCorrectHistory: levelCorrectHistory.slice(0, BUILDS.length),
            bestNoHintLevelScore: bestNoHintLevelScore,
            completedLevelStats: completedLevelStats.slice(0, BUILDS.length).map(function (s) {
                return s ? Object.assign({}, s) : null;
            }),
            personalRecords: {
                bestStreak: sessionPersonalRecords.bestStreak || 0,
                bestLevelAccuracy: sessionPersonalRecords.bestLevelAccuracy || 0,
                mostXpRun: sessionPersonalRecords.mostXpRun || 0,
                mostPiecesRun: sessionPersonalRecords.mostPiecesRun || 0,
                fewestWorldWrongAttempts: sessionPersonalRecords.fewestWorldWrongAttempts,
                bestChallengeAccuracy: Object.assign({}, sessionPersonalRecords.bestChallengeAccuracy)
            },
            dailyStreak: streakData,
            conceptMastery: ConceptMasteryManager.getData(),
            dailyBuild: DailyBuildManager.getData(),
            cityState: (window.CityEngine && window.CityEngine.getState) ? window.CityEngine.getState() : null,
        metrics: {
                totalQuestionsAttempted: totalQuestionsAttempted,
                totalCorrectAnswers: totalCorrectAnswers,
                outputAttempts: outputAttempts,
                outputCorrect: outputCorrect,
                bugAttempts: bugAttempts,
                bugCorrect: bugCorrect,
                attemptsByType: Object.assign({}, attemptsByType),
                correctByType: Object.assign({}, correctByType)
            }
        };

        SafeStorage.setItem(SAVE_STORAGE_KEY, JSON.stringify(saveData));
        updateStartScreenUI(hasSavedProgress());
        return true;
    } catch (e) {
        console.warn("BUILD IT! saveGameProgress exception:", e);
        return false;
    }
}

function loadGameProgress() {
    try {
        const raw = SafeStorage.getItem(SAVE_STORAGE_KEY);
        if (!raw) {
            completedLevels = new Array(BUILDS.length).fill(false);
            buildPieces = new Array(BUILDS.length).fill(0);
            checkpointXp = 0;
            totalXp = 0;
            currentBuildIndex = 0;
            successfulCorrectAnswers = 0;
            currentQuestionIndex = 0;
            currentQuestion = null;
            seenQuestionIds.clear();
    seenBossQuestionIds.clear();
            unlockedAchievements.clear();
            unlockedRewards.clear();
            // Reset City State
    if (window.CityEngine) {
        window.CityEngine.districts.forEach(function (d, idx) {
            d.unlocked = (idx === 0 || d.id === "civic");
        });
        Object.keys(window.CityEngine.buildings).forEach(function (k) {
            const b = window.CityEngine.buildings[k];
            if (b.isCivic) {
                b.status = "completed";
                b.currentStage = 1;
            } else {
                b.currentStage = 0;
                b.status = (k === "b_syntax") ? "available" : "locked";
            }
        });
        window.CityEngine.centerOnDistrict("d1");
        window.CityEngine.render();
        window.CityEngine.updateHUD();
    }

    updateStartScreenUI(false);
            return false;
        }

        let parsed = null;
        try {
            parsed = JSON.parse(raw);
        } catch (e) {
            console.warn("BUILD IT! Save file corrupted (invalid JSON). Starting fresh.");
            completedLevels = new Array(BUILDS.length).fill(false);
            buildPieces = new Array(BUILDS.length).fill(0);
            checkpointXp = 0;
            totalXp = 0;
            currentBuildIndex = 0;
            successfulCorrectAnswers = 0;
            currentQuestionIndex = 0;
            currentQuestion = null;
            seenQuestionIds.clear();
            unlockedAchievements.clear();
            unlockedRewards.clear();
            updateStartScreenUI(false);
            return false;
        }

        const valid = validateSaveData(parsed);
        if (!valid) {
            console.warn("BUILD IT! Save data failed validation. Starting fresh.");
            completedLevels = new Array(BUILDS.length).fill(false);
            buildPieces = new Array(BUILDS.length).fill(0);
            checkpointXp = 0;
            totalXp = 0;
            currentBuildIndex = 0;
            successfulCorrectAnswers = 0;
            currentQuestionIndex = 0;
            currentQuestion = null;
            seenQuestionIds.clear();
            unlockedAchievements.clear();
            unlockedRewards.clear();
            updateStartScreenUI(false);
            return false;
        }

        // Restore completed checkpoints
        completedLevels = valid.completedLevels.slice();
        checkpointXp = valid.checkpointXp;
        totalXp = valid.totalXp;
        bestStreak = Math.max(bestStreak, valid.bestStreak);

        // Restore achievements
        unlockedAchievements.clear();
        valid.unlockedAchievements.forEach(function (id) {
            unlockedAchievements.add(id);
        });

        // Restore rewards
        unlockedRewards.clear();
        valid.unlockedRewards.forEach(function (id) {
            unlockedRewards.add(id);
            if (REWARDS[id] && REWARDS[id].cssClass) {
                document.body.classList.add(REWARDS[id].cssClass);
            }
        });

        // Restore personal records
        if (valid.personalRecords) {
            Object.assign(sessionPersonalRecords, valid.personalRecords);
            if (sessionPersonalRecords.bestStreak > bestStreak) {
                bestStreak = sessionPersonalRecords.bestStreak;
            }
        }

        // Restore completed level stats
        completedLevelStats.length = 0;
        valid.completedLevelStats.forEach(function (s, idx) {
            completedLevelStats[idx] = s;
        });

        // Restore flawless levels & history
        flawlessLevels.clear();
        valid.flawlessLevels.forEach(function (idx) {
            flawlessLevels.add(idx);
        });
        levelCorrectHistory.length = 0;
        valid.levelCorrectHistory.forEach(function (h) {
            levelCorrectHistory.push(h);
        });
        bestNoHintLevelScore = valid.bestNoHintLevelScore || 0;

        // Restore concept mastery & daily build
        if (valid.conceptMastery) {
            ConceptMasteryManager.setData(valid.conceptMastery);
        }
        if (valid.dailyBuild) {
            DailyBuildManager.setData(valid.dailyBuild);
        }

        // Restore extended metrics
        if (valid.metrics) {
            if (typeof valid.metrics.totalQuestionsAttempted === "number") totalQuestionsAttempted = valid.metrics.totalQuestionsAttempted;
            if (typeof valid.metrics.totalCorrectAnswers === "number") totalCorrectAnswers = valid.metrics.totalCorrectAnswers;
            if (typeof valid.metrics.outputAttempts === "number") outputAttempts = valid.metrics.outputAttempts;
            if (typeof valid.metrics.outputCorrect === "number") outputCorrect = valid.metrics.outputCorrect;
            if (typeof valid.metrics.bugAttempts === "number") bugAttempts = valid.metrics.bugAttempts;
            if (typeof valid.metrics.bugCorrect === "number") bugCorrect = valid.metrics.bugCorrect;
            if (valid.metrics.attemptsByType) Object.assign(attemptsByType, valid.metrics.attemptsByType);
            if (valid.metrics.correctByType) Object.assign(correctByType, valid.metrics.correctByType);
        }

        // Determine currentBuildIndex (first incomplete level, or last level if all completed)
        let firstIncomplete = -1;
        for (let i = 0; i < BUILDS.length; i++) {
            if (!completedLevels[i]) {
                firstIncomplete = i;
                break;
            }
        }
        currentBuildIndex = (firstIncomplete >= 0) ? firstIncomplete : (BUILDS.length - 1);

        // Update buildPieces: 10 for completed builds, 0 for incomplete builds
        buildPieces = BUILDS.map(function (b, idx) {
            return completedLevels[idx] ? (b.pieces ? b.pieces.length : 10) : 0;
        });

        // Reset temporary active gameplay variables to safe fresh level-entry state
        successfulCorrectAnswers = 0;
        currentQuestionIndex = 0;
        currentQuestion = null;
        seenQuestionIds.clear();
        questionAttempts = 0;
        levelMistakes = 0;
        streak = 0;
        lives = 3;
        hintsRemaining = 1;
        hintUsedForCurrentQuestion = false;
        isAnswerLocked = false;

        // Update displays
        if (scoreDisplay) scoreDisplay.textContent = "⭐ " + totalXp + " XP";
        if (streakDisplay) streakDisplay.textContent = "🔥 0";
        updateLivesDisplay();
        updateHintDisplay();

        // Restore or migrate City Engine state
        if (window.CityEngine) {
            if (valid.cityState) {
                window.CityEngine.loadState(valid.cityState);
            } else {
                window.CityEngine.migrateFromLegacySave(valid);
            }
        }

        return true;
    } catch (e) {
        console.warn("BUILD IT! loadGameProgress exception:", e);
        updateStartScreenUI(false);
        return false;
    }
}

function openNewGameModal() {
    const modal = document.getElementById("new-game-confirm-modal");
    if (modal) {
        modal.style.display = "flex";
    }
}

function closeNewGameModal() {
    const modal = document.getElementById("new-game-confirm-modal");
    if (modal) {
        modal.style.display = "none";
    }
}

function resetWorldProgressForNewRun() {
    // Reset active world progression to Level 1
    completedLevels = new Array(BUILDS.length).fill(false);
    buildPieces = new Array(BUILDS.length).fill(0);
    checkpointXp = 0;
    totalXp = 0;
    currentBuildIndex = 0;
    successfulCorrectAnswers = 0;
    currentQuestionIndex = 0;
    currentQuestion = null;
    seenQuestionIds.clear();
    questionAttempts = 0;
    levelMistakes = 0;
    streak = 0;
    lives = 3;
    hintsRemaining = 1;
    hintUsedForCurrentQuestion = false;
    isAnswerLocked = false;
    completedLevelStats.length = 0;
    runMistakes.length = 0;
    flawlessLevels.clear();
    levelCorrectHistory.length = 0;

    // Reset visual pieces for all builds
    BUILDS.forEach(function (b) {
        if (b.pieces) {
            b.pieces.forEach(function (p) {
                p.classList.remove("built", "piece-pop");
            });
        }
    });

    if (scoreDisplay) scoreDisplay.textContent = "⭐ 0 XP";
    if (streakDisplay) streakDisplay.textContent = "🔥 0";
    updateLivesDisplay();
    updateHintDisplay();

    // Persist this reset (keeps unlocked achievements, personal records, and daily streak safe!)
    saveGameProgress();

    updateStartScreenUI(false);
    if (startScreen) startScreen.style.display = "none";
    if (worldMapScreen) worldMapScreen.style.display = "none";
    if (achievementsScreen) achievementsScreen.style.display = "none";
    if (gameScreen) gameScreen.style.display = "block";
    switchScene(0);
    updateBuildWorldBar();
    updateBuilding(-1);
    loadQuestion(true);
    showMissionBriefing(0);
    renderWorldMap();
    renderAchievementsGrid();
    DailyStreakManager.updateUI();

    showToast("", "NEW RUN STARTED", "✓ Ready for Level 1", "Your build world has been reset to Level 1. Good luck!", "🧱");
}

function clearSavedProgress() {
    SafeStorage.removeItem(SAVE_STORAGE_KEY);
    SafeStorage.removeItem("built_it_daily_streak");

    completedLevels = new Array(BUILDS.length).fill(false);
    buildPieces = new Array(BUILDS.length).fill(0);
    checkpointXp = 0;
    totalXp = 0;
    streak = 0;
    bestStreak = 0;
    lives = 3;
    hintsRemaining = 1;
    hintUsedForCurrentQuestion = false;
    isAnswerLocked = false;
    currentBuildIndex = 0;
    successfulCorrectAnswers = 0;
    currentQuestionIndex = 0;
    currentQuestion = null;
    seenQuestionIds.clear();
    questionAttempts = 0;
    levelMistakes = 0;
    completedLevelStats.length = 0;
    runMistakes.length = 0;
    flawlessLevels.clear();
    levelCorrectHistory.length = 0;
    bestNoHintLevelScore = 0;
    unlockedAchievements.clear();
    unlockedRewards.clear();

    sessionPersonalRecords.bestStreak = 0;
    sessionPersonalRecords.bestLevelAccuracy = 0;
    sessionPersonalRecords.mostXpRun = 0;
    sessionPersonalRecords.mostPiecesRun = 0;
    sessionPersonalRecords.fewestWorldWrongAttempts = null;
    sessionPersonalRecords.bestChallengeAccuracy = { mcq: 0, output: 0, "code-choice": 0, bug: 0 };

    BUILDS.forEach(function (b) {
        if (b.pieces) {
            b.pieces.forEach(function (p) {
                p.classList.remove("built", "piece-pop");
            });
        }
    });

    if (scoreDisplay) scoreDisplay.textContent = "⭐ 0 XP";
    if (streakDisplay) streakDisplay.textContent = "🔥 0";
    updateLivesDisplay();
    updateHintDisplay();

    updateStartScreenUI(false);
    switchScene(0);
    updateBuildWorldBar();
    loadQuestion(true);
    renderWorldMap();
    renderAchievementsGrid();
    DailyStreakManager.updateUI();
}

function unlockAchievement(id) {
    if (unlockedAchievements.has(id)) return;
    unlockedAchievements.add(id);

    const ach = ACHIEVEMENTS.find(function (a) { return a.id === id; });
    if (!ach) return;

    AudioManager.playSound("achievement");
    const rarityLabel = ach.rarity ? " • " + ach.rarity : "";
    showToast("achievement", "🏆 ACHIEVEMENT UNLOCKED" + rarityLabel, ach.title, ach.description, ach.icon);

    if (ach.rewardId) {
        setTimeout(function () {
            unlockReward(ach.rewardId);
        }, 700);
    }

    renderAchievementsGrid();
    saveGameProgress();
}

function unlockReward(rewardId) {
    if (unlockedRewards.has(rewardId)) return;
    unlockedRewards.add(rewardId);

    const reward = REWARDS[rewardId];
    if (!reward) return;

    if (reward.cssClass) {
        document.body.classList.add(reward.cssClass);
    }

    AudioManager.playSound("reward");
    showToast("reward", "🎁 REWARD UNLOCKED", reward.title, reward.description, "🎁");
    saveGameProgress();
}


// ==================================================
// CONCEPT MASTERY & WEAK CONCEPT ENGINE
// ==================================================
const CORE_CONCEPTS = [
    "Variables", "Strings", "Data Types", "Operators",
    "Loops", "Functions", "Lists", "Tuples",
    "Dictionaries", "Classes", "Debugging", "Output Reasoning"
];

const ConceptMasteryManager = {
    data: {},

    init() {
        CORE_CONCEPTS.forEach(function (c) {
            if (!ConceptMasteryManager.data[c]) {
                ConceptMasteryManager.data[c] = { attempts: 0, correct: 0 };
            }
        });
    },

    getData() {
        return Object.assign({}, this.data);
    },

    setData(saved) {
        if (saved && typeof saved === "object") {
            CORE_CONCEPTS.forEach(function (c) {
                if (saved[c] && typeof saved[c].attempts === "number" && typeof saved[c].correct === "number") {
                    ConceptMasteryManager.data[c] = {
                        attempts: Math.max(0, saved[c].attempts),
                        correct: Math.max(0, Math.min(saved[c].attempts, saved[c].correct))
                    };
                } else if (!ConceptMasteryManager.data[c]) {
                    ConceptMasteryManager.data[c] = { attempts: 0, correct: 0 };
                }
            });
        }
    },

    normalizeConcept(conceptStr) {
        if (!conceptStr) return "Variables";
        const lower = conceptStr.toLowerCase();
        if (lower.includes("var") || lower.includes("print")) return "Variables";
        if (lower.includes("string") || lower.includes("quote") || lower.includes("slice") || lower.includes("concat")) return "Strings";
        if (lower.includes("data") || lower.includes("type") || lower.includes("bool") || lower.includes("int") || lower.includes("float")) return "Data Types";
        if (lower.includes("operator") || lower.includes("arithmetic") || lower.includes("modulo") || lower.includes("precedence")) return "Operators";
        if (lower.includes("loop") || lower.includes("range") || lower.includes("for") || lower.includes("while") || lower.includes("break")) return "Loops";
        if (lower.includes("func") || lower.includes("def") || lower.includes("return") || lower.includes("param")) return "Functions";
        if (lower.includes("list") || lower.includes("append")) return "Lists";
        if (lower.includes("tuple") || lower.includes("immutab")) return "Tuples";
        if (lower.includes("dict") || lower.includes("key") || lower.includes("pair")) return "Dictionaries";
        if (lower.includes("class") || lower.includes("oop") || lower.includes("self") || lower.includes("method")) return "Classes";
        if (lower.includes("bug") || lower.includes("syntax") || lower.includes("error") || lower.includes("debug")) return "Debugging";
        return "Output Reasoning";
    },

    recordAttempt(rawConcept, isCorrect) {
        const c = this.normalizeConcept(rawConcept);
        if (!this.data[c]) this.data[c] = { attempts: 0, correct: 0 };
        this.data[c].attempts += 1;
        if (isCorrect) this.data[c].correct += 1;

        if (this.getTier(c) === "Mastered") {
            checkAchievements("concept_mastered");
        }
    },

    getTier(concept) {
        const item = this.data[concept] || { attempts: 0, correct: 0 };
        const correct = item.correct;
        const attempts = item.attempts;
        const acc = attempts > 0 ? (correct / attempts) : 0;

        if (correct >= 6 && acc >= 0.75) return "Mastered";
        if (correct >= 4) return "Strong";
        if (correct >= 2) return "Practicing";
        return "Learning";
    },

    detectWeakest() {
        let candidate = null;
        let lowestAcc = 1.1;

        CORE_CONCEPTS.forEach(function (c) {
            const item = ConceptMasteryManager.data[c];
            if (item && item.attempts >= 2) {
                const acc = item.correct / item.attempts;
                if (acc < 0.65 && acc < lowestAcc) {
                    lowestAcc = acc;
                    candidate = c;
                }
            }
        });

        if (candidate) {
            return {
                concept: candidate,
                tip: candidate + " need more practice. Keep experimenting with code challenges to strengthen this skill!",
                isWeak: true
            };
        }

        let strongest = "Variables";
        let bestCorrect = -1;
        CORE_CONCEPTS.forEach(function (c) {
            const item = ConceptMasteryManager.data[c];
            if (item && item.correct > bestCorrect) {
                bestCorrect = item.correct;
                strongest = c;
            }
        });

        return {
            concept: strongest,
            tip: strongest + " are becoming your strength! Keep building to master all 12 domains.",
            isWeak: false
        };
    },

    renderMasteryGrid() {
        if (!conceptMasteryGrid) return;
        let html = "";
        CORE_CONCEPTS.forEach(function (c) {
            const item = ConceptMasteryManager.data[c] || { attempts: 0, correct: 0 };
            const tier = ConceptMasteryManager.getTier(c);
            const tierClass = "tier-" + tier.toLowerCase();
            const pct = item.attempts > 0 ? Math.round((item.correct / item.attempts) * 100) : 0;
            const tierIcon = (tier === "Mastered") ? "⭐" : (tier === "Strong" ? "🟢" : (tier === "Practicing" ? "🔵" : "⚪"));

            html += '<div class="concept-card">' +
                '<div class="concept-card-top">' +
                '<span class="concept-name">' + escapeHtml(c) + '</span>' +
                '<span class="concept-tier ' + tierClass + '">' + tierIcon + ' ' + tier + '</span>' +
                '</div>' +
                '<div class="concept-progress-bar">' +
                '<div class="concept-progress-fill" style="width: ' + pct + '%; background: ' + (tier === "Mastered" ? "#fbbf24" : (tier === "Strong" ? "#4ade80" : "#38bdf8")) + '"></div>' +
                '</div>' +
                '<div class="concept-stats-text">' +
                '<span>' + item.correct + ' / ' + item.attempts + ' Correct</span>' +
                '<span>' + pct + '%</span>' +
                '</div>' +
                '</div>';
        });
        conceptMasteryGrid.innerHTML = html;

        if (mapWeakConceptText) {
            const advice = ConceptMasteryManager.detectWeakest();
            mapWeakConceptText.textContent = advice.tip;
        }
    }
};

ConceptMasteryManager.init();

// ==================================================
// DAILY BUILD SYSTEM (Once Per Calendar Day Challenge)
// ==================================================
const DailyBuildManager = {
    dailyData: {
        lastCompletedDate: "",
        streak: 0,
        bestStreak: 0
    },

    activeRunIndex: 0,
    activeRunScore: 0,
    isRunActive: false,
    isReplayMode: false,
    currentQuestions: [],

    getData() {
        return Object.assign({}, this.dailyData);
    },

    setData(saved) {
        if (saved && typeof saved === "object") {
            if (typeof saved.lastCompletedDate === "string") this.dailyData.lastCompletedDate = saved.lastCompletedDate;
            if (typeof saved.streak === "number") this.dailyData.streak = saved.streak;
            if (typeof saved.bestStreak === "number") this.dailyData.bestStreak = saved.bestStreak;
        }
    },

    isCompletedToday() {
        const today = DailyStreakManager.getTodayDateString();
        return this.dailyData.lastCompletedDate === today;
    },

    updateUI() {
        const completed = this.isCompletedToday();
        if (homeDailyBadge) {
            if (completed) {
                homeDailyBadge.textContent = "COMPLETED";
                homeDailyBadge.className = "home-badge-mini daily-badge-done";
            } else {
                homeDailyBadge.textContent = "READY";
                homeDailyBadge.className = "home-badge-mini daily-badge-active";
            }
        }
        if (mapDailyBuildBtn) {
            if (completed) {
                mapDailyBuildBtn.textContent = "📅 DAILY CHALLENGE (COMPLETED • PLAY AGAIN)";
                mapDailyBuildBtn.classList.add("daily-btn-done");
            } else {
                mapDailyBuildBtn.textContent = "📅 PLAY DAILY CHALLENGE (+25 XP)";
                mapDailyBuildBtn.classList.remove("daily-btn-done");
            }
        }
    },

    openModal() {
        if (!dailyBuildModal || !dailyModalBody) return;
        const completed = this.isCompletedToday();
        const streak = this.dailyData.streak || 0;
        const best = this.dailyData.bestStreak || 0;

        let nextMilestone = 5;
        if (streak >= 15) nextMilestone = 30;
        else if (streak >= 10) nextMilestone = 15;
        else if (streak >= 5) nextMilestone = 10;

        let bodyHtml =
            '<div class="daily-streak-status-banner">' +
            '<div class="daily-streak-left">' +
            '<span>🔥 DAILY CHALLENGE STREAK: ' + streak + ' DAYS</span>' +
            '</div>' +
            '<div class="daily-next-milestone">' +
            '<span>Next Milestone: ' + nextMilestone + ' Days (Best: ' + best + ')</span>' +
            '</div>' +
            '</div>';

        if (completed) {
            bodyHtml +=
                '<div class="daily-card-body">' +
                '<div style="text-align: center; padding: 20px 0;">' +
                '<div style="font-size: 2.8rem; margin-bottom: 10px;">🎉</div>' +
                '<h3 style="color: #4ade80; margin-bottom: 8px;">TODAY\'S DAILY CHALLENGE COMPLETE!</h3>' +
                '<p style="color: #fbbf24; font-weight: 700; margin-bottom: 6px;">⭐ Today\'s reward (+25 XP) already claimed</p>' +
                '<p style="color: #cbd5e1; max-width: 440px; margin: 0 auto 16px;">You conquered today\'s 3 daily engineering challenges. Replay anytime for practice!</p>' +
                '<div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">' +
                '<button class="btn-action primary-btn" type="button" id="daily-replay-btn">PLAY AGAIN ↺</button>' +
                '<button class="btn-action secondary-btn" type="button" id="daily-done-close-btn">CLOSE</button>' +
                '</div>' +
                '</div>' +
                '</div>';
        } else {
            bodyHtml +=
                '<div class="daily-card-body">' +
                '<p>Answer today\'s 3 Python MCQ challenges to earn bonus XP and advance your Daily Streak!</p>' +
                '<div class="daily-run-tracker">' +
                '<div class="daily-run-dot" id="db-dot-0">1</div>' +
                '<div class="daily-run-dot" id="db-dot-1">2</div>' +
                '<div class="daily-run-dot" id="db-dot-2">3</div>' +
                '</div>' +
                '<div id="daily-challenge-mount"></div>' +
                '<div style="text-align: center; margin-top: 18px;" id="daily-action-mount">' +
                '<button id="start-daily-run-btn" class="btn-action primary-btn" type="button">START 3-CHALLENGE RUN (+25 XP) ➔</button>' +
                '</div>' +
                '</div>';
        }

        dailyModalBody.innerHTML = bodyHtml;
        dailyBuildModal.style.display = "flex";

        const doneCloseBtn = document.getElementById("daily-done-close-btn");
        if (doneCloseBtn) {
            doneCloseBtn.addEventListener("click", function () {
                DailyBuildManager.closeModal();
            });
        }

        const replayBtn = document.getElementById("daily-replay-btn");
        if (replayBtn) {
            replayBtn.addEventListener("click", function () {
                DailyBuildManager.startRun(true);
            });
        }

        const startBtn = document.getElementById("start-daily-run-btn");
        if (startBtn) {
            startBtn.addEventListener("click", function () {
                DailyBuildManager.startRun(false);
            });
        }
    },

    closeModal() {
        if (dailyBuildModal) dailyBuildModal.style.display = "none";
        this.updateUI();
    },

    startRun(isReplay) {
        const today = DailyStreakManager.getTodayDateString();
        this.currentQuestions = getDailyQuestionsForDate(today);
        this.isReplayMode = !!isReplay;
        this.activeRunIndex = 0;
        this.activeRunScore = 0;
        this.isRunActive = true;

        if (dailyModalBody && this.isReplayMode) {
            dailyModalBody.innerHTML =
                '<div class="daily-streak-status-banner">' +
                '<div class="daily-streak-left">' +
                '<span>🎯 DAILY CHALLENGE — PRACTICE REPLAY</span>' +
                '</div>' +
                '<div class="daily-next-milestone">' +
                '<span>Today\'s reward already claimed • Practice Mode</span>' +
                '</div>' +
                '</div>' +
                '<div class="daily-card-body">' +
                '<div class="daily-run-tracker">' +
                '<div class="daily-run-dot" id="db-dot-0">1</div>' +
                '<div class="daily-run-dot" id="db-dot-1">2</div>' +
                '<div class="daily-run-dot" id="db-dot-2">3</div>' +
                '</div>' +
                '<div id="daily-challenge-mount"></div>' +
                '</div>';
        }

        this.renderChallengeStep();
    },

    renderChallengeStep() {
        const mount = document.getElementById("daily-challenge-mount");
        const actMount = document.getElementById("daily-action-mount");
        if (!mount) return;
        if (actMount) actMount.style.display = "none";

        for (let i = 0; i < 3; i++) {
            const dot = document.getElementById("db-dot-" + i);
            if (dot) {
                dot.className = "daily-run-dot" + (i < this.activeRunIndex ? " done" : (i === this.activeRunIndex ? " active" : ""));
            }
        }

        if (this.activeRunIndex >= this.currentQuestions.length) {
            this.finishRun();
            return;
        }

        const q = this.currentQuestions[this.activeRunIndex];
        let codeHtml = "";
        if (q.code) {
            codeHtml = '<div class="code-snippet-box" style="margin: 10px 0;"><pre><code>' + escapeHtml(q.code) + '</code></pre></div>';
        }

        let optsHtml = '<div class="answers-grid" style="margin-top: 12px;">';
        q.options.forEach(function (opt, idx) {
            optsHtml += '<button class="answer-btn db-opt-btn" type="button" data-idx="' + idx + '">' + escapeHtml(opt) + '</button>';
        });
        optsHtml += '</div>';

        const modeBadge = this.isReplayMode ? '<span class="status-badge" style="background: rgba(148, 163, 184, 0.2); color: #94a3b8; font-size: 0.75rem; margin-left: 8px;">PRACTICE REPLAY</span>' : '';

        mount.innerHTML =
            '<div class="question-card" style="margin: 10px 0; padding: 14px;">' +
            '<div style="display: flex; justify-content: space-between; align-items: center;">' +
            '<span class="question-badge">QUESTION ' + (this.activeRunIndex + 1) + ' OF 3</span>' +
            modeBadge +
            '</div>' +
            '<p style="font-weight: 700; color: #f8fafc; margin-top: 8px;">' + escapeHtml(q.question) + '</p>' +
            codeHtml +
            optsHtml +
            '</div>';

        const btns = mount.querySelectorAll(".db-opt-btn");
        btns.forEach(function (b) {
            b.addEventListener("click", function () {
                const sel = parseInt(b.getAttribute("data-idx"), 10);
                const isCorrect = (sel === q.correct);
                btns.forEach(function (btn) { btn.disabled = true; });

                if (isCorrect) {
                    b.classList.add("btn-correct");
                    AudioManager.playSound("correct");
                    DailyBuildManager.activeRunScore += 1;
                } else {
                    b.classList.add("btn-wrong");
                    btns[q.correct].classList.add("btn-correct");
                    AudioManager.playSound("wrong");
                }

                setTimeout(function () {
                    DailyBuildManager.activeRunIndex += 1;
                    DailyBuildManager.renderChallengeStep();
                }, 1100);
            });
        });
    },

    finishRun() {
        const mount = document.getElementById("daily-challenge-mount");
        const today = DailyStreakManager.getTodayDateString();
        const yesterday = DailyStreakManager.getYesterdayDateString();

        if (!this.isReplayMode) {
            // First successful run today: record completion, update streak and award XP
            if (this.dailyData.lastCompletedDate === yesterday) {
                this.dailyData.streak += 1;
            } else if (this.dailyData.lastCompletedDate !== today) {
                this.dailyData.streak = 1;
            }
            if (this.dailyData.streak > this.dailyData.bestStreak) {
                this.dailyData.bestStreak = this.dailyData.streak;
            }
            this.dailyData.lastCompletedDate = today;

            totalXp += 25;
            if (scoreDisplay) scoreDisplay.textContent = "⭐ " + totalXp + " XP";

            DailyStreakManager.recordActivity();
            checkAchievements("daily_build_complete");
            AudioManager.playSound("dailyBuildWin");
            saveGameProgress();
            this.updateUI();

            if (mount) {
                mount.innerHTML =
                    '<div style="text-align: center; padding: 24px 0;">' +
                    '<div style="font-size: 3rem; margin-bottom: 12px;">🎉</div>' +
                    '<h3 style="color: #fbbf24; margin-bottom: 8px;">TODAY\'S DAILY CHALLENGE COMPLETE!</h3>' +
                    '<p style="color: #4ade80; font-weight: 800; font-size: 1.1rem; margin-bottom: 6px;">⭐ +25 BONUS XP EARNED!</p>' +
                    '<p style="color: #cbd5e1; margin-bottom: 16px;">🔥 Daily Streak: ' + this.dailyData.streak + ' Days • Accuracy: ' + this.activeRunScore + ' / 3</p>' +
                    '<div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">' +
                    '<button class="btn-action primary-btn" type="button" id="daily-replay-again-btn">PLAY AGAIN ↺</button>' +
                    '<button class="btn-action secondary-btn" type="button" id="daily-collect-reward-btn">CLOSE</button>' +
                    '</div>' +
                    '</div>';

                const replayAgainBtn = document.getElementById("daily-replay-again-btn");
                if (replayAgainBtn) {
                    replayAgainBtn.addEventListener("click", function () {
                        DailyBuildManager.startRun(true);
                    });
                }

                const colBtn = document.getElementById("daily-collect-reward-btn");
                if (colBtn) {
                    colBtn.addEventListener("click", function () {
                        DailyBuildManager.closeModal();
                    });
                }
            }
        } else {
            // Replay mode: practice only, zero extra rewards, streak unchanged
            AudioManager.playSound("dailyBuildWin");
            if (mount) {
                mount.innerHTML =
                    '<div style="text-align: center; padding: 24px 0;">' +
                    '<div style="font-size: 3rem; margin-bottom: 12px;">🎯</div>' +
                    '<h3 style="color: #4ade80; margin-bottom: 8px;">PRACTICE RUN COMPLETE!</h3>' +
                    '<p style="color: #cbd5e1; margin-bottom: 6px;">You completed today\'s 3 challenges with score: ' + this.activeRunScore + ' / 3</p>' +
                    '<p style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 16px;">Practice replay mode — today\'s reward was already claimed.</p>' +
                    '<div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">' +
                    '<button class="btn-action primary-btn" type="button" id="daily-replay-again-btn">PLAY AGAIN ↺</button>' +
                    '<button class="btn-action secondary-btn" type="button" id="daily-collect-reward-btn">CLOSE</button>' +
                    '</div>' +
                    '</div>';

                const replayAgainBtn = document.getElementById("daily-replay-again-btn");
                if (replayAgainBtn) {
                    replayAgainBtn.addEventListener("click", function () {
                        DailyBuildManager.startRun(true);
                    });
                }

                const colBtn = document.getElementById("daily-collect-reward-btn");
                if (colBtn) {
                    colBtn.addEventListener("click", function () {
                        DailyBuildManager.closeModal();
                    });
                }
            }
        }
    }
};

// ==================================================
// PERSONAL GOALS ENGINE
// ==================================================
function renderPersonalGoals() {
    if (!homeGoalsItemsRow) return;

    const build = BUILDS[currentBuildIndex];
    const mIdx = Math.min(4, Math.floor(successfulCorrectAnswers / 2));
    const activeMission = build.missions ? build.missions[mIdx] : null;
    const missionName = activeMission ? activeMission.name : "Level Missions";

    const advice = ConceptMasteryManager.detectWeakest();
    if (homeGoalsWeakConcept) {
        homeGoalsWeakConcept.textContent = advice.isWeak
            ? "💡 Tip: " + advice.concept + " need more practice"
            : "⭐ Strength: " + advice.concept + " are mastered";
    }

    const goal1Done = (mIdx > 0);
    const goal1Pct = Math.min(100, Math.round(((successfulCorrectAnswers % 2) / 2) * 100));

    const streakTarget = 5;
    const streakDone = (streak >= streakTarget || bestStreak >= streakTarget);
    const streakPct = Math.min(100, Math.round((Math.min(streakTarget, Math.max(streak, bestStreak)) / streakTarget) * 100));

    const levelDone = !!completedLevels[currentBuildIndex];
    const levelPct = Math.min(100, successfulCorrectAnswers * 10);

    homeGoalsItemsRow.innerHTML =
        '<div class="goal-item-chip">' +
        '<div class="goal-item-header">' +
        '<span>🎯 ' + escapeHtml(missionName) + '</span>' +
        '<span class="goal-badge-status ' + (goal1Done ? 'goal-status-complete' : 'goal-status-active') + '">' + (goal1Done ? 'DONE' : 'ACTIVE') + '</span>' +
        '</div>' +
        '<span class="goal-desc">Progress through the ' + build.name + ' missions</span>' +
        '<div class="goal-track"><div class="goal-fill" style="width: ' + (goal1Done ? 100 : goal1Pct) + '%;"></div></div>' +
        '</div>' +
        '<div class="goal-item-chip">' +
        '<div class="goal-item-header">' +
        '<span>🔥 5-Answer Streak</span>' +
        '<span class="goal-badge-status ' + (streakDone ? 'goal-status-complete' : 'goal-status-active') + '">' + (streakDone ? 'DONE' : (Math.max(streak, bestStreak) + '/5')) + '</span>' +
        '</div>' +
        '<span class="goal-desc">Answer 5 questions consecutively correct</span>' +
        '<div class="goal-track"><div class="goal-fill" style="width: ' + streakPct + '%;"></div></div>' +
        '</div>' +
        '<div class="goal-item-chip">' +
        '<div class="goal-item-header">' +
        '<span>🏗️ Complete Level ' + build.levelNumber + '</span>' +
        '<span class="goal-badge-status ' + (levelDone ? 'goal-status-complete' : 'goal-status-active') + '">' + (levelDone ? 'SAVED' : (successfulCorrectAnswers + '/10')) + '</span>' +
        '</div>' +
        '<span class="goal-desc">Build all 10 pieces of the ' + build.name + '</span>' +
        '<div class="goal-track"><div class="goal-fill" style="width: ' + (levelDone ? 100 : levelPct) + '%;"></div></div>' +
        '</div>';
}

// ==================================================
// MISSION PROGRESSION TRACKER ENGINE
// ==================================================
function updateMissionTracker() {
    if (!missionTracker) return;
    const build = BUILDS[currentBuildIndex];
    if (!build || !build.missions) return;

    const currentMissionIdx = Math.min(4, Math.floor(successfulCorrectAnswers / 2));
    const activeMission = build.missions[currentMissionIdx];

    if (trackerMissionName && activeMission) {
        trackerMissionName.textContent = activeMission.name;
    }

    if (trackerPieceTarget) {
        const pieceIdx = Math.min(9, successfulCorrectAnswers);
        const pName = (build.pieceDetails && build.pieceDetails[pieceIdx]) ? build.pieceDetails[pieceIdx].name : ("Piece " + (pieceIdx + 1));
        trackerPieceTarget.textContent = "🎯 Piece " + (pieceIdx + 1) + "/10 • " + pName;
    }

    if (missionStepsRow) {
        let html = "";
        build.missions.forEach(function (m, idx) {
            let stateClass = "locked";
            let stateIcon = m.icon;
            if (idx < currentMissionIdx) {
                stateClass = "completed";
                stateIcon = "✓";
            } else if (idx === currentMissionIdx) {
                stateClass = "active";
                stateIcon = "▶";
            }
            if (m.isBoss) {
                stateClass += " boss-step";
            }

            html += '<div class="mission-step-pill ' + stateClass + '" title="' + escapeHtml(m.name) + '">' +
                '<span class="step-pill-icon">' + stateIcon + '</span>' +
                '<span class="step-pill-title">' + escapeHtml(m.name.replace(/^\d+\.\s*/, "")) + '</span>' +
                '</div>';
        });
        missionStepsRow.innerHTML = html;
    }
}

// ==================================================
// CODE BUILDER INTERACTIVE CHALLENGE ENGINE
// ==================================================
let builderPlacedTokens = [];
let builderAvailableTokens = [];
let activeBuilderQuestion = null;

function getAssembledCodeString(tokens) {
    if (!tokens || tokens.length === 0) return "";
    let result = "";
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i].trim();
        if (i === 0) {
            result = token;
        } else {
            const prev = tokens[i - 1].trim();
            if (prev.endsWith("(") || prev.endsWith("[") || prev.endsWith("{") ||
                token.startsWith(")") || token.startsWith("]") || token.startsWith("}") ||
                token.startsWith(",") || token.startsWith(":") ||
                prev.endsWith(".") || token.startsWith(".")) {
                result += token;
            } else {
                result += " " + token;
            }
        }
    }
    return result;
}

function normalizeCode(code) {
    if (!code) return "";
    return code
        .replace(/\s+/g, " ")
        .replace(/\s*([()[\]{},=+\-*\/%&|^<>!:])\s*/g, "$1")
        .trim();
}

function initCodeBuilder(question) {
    activeBuilderQuestion = question;
    builderPlacedTokens = [];
    builderAvailableTokens = (question.builderTokens && Array.isArray(question.builderTokens))
        ? question.builderTokens.slice()
        : [];
    renderCodeBuilderSlots();
    renderCodeBuilderTokens();
}

function renderCodeBuilderSlots() {
    if (!codeBuilderSlots) return;
    if (builderPlacedTokens.length === 0) {
        codeBuilderSlots.innerHTML = '<span class="slots-placeholder">Tap tokens below to assemble your code...</span>';
    } else {
        let tokensHtml = "";
        builderPlacedTokens.forEach(function (token, idx) {
            tokensHtml += '<span class="connected-token" data-idx="' + idx + '" role="button" tabindex="0" title="Tap to remove ' + escapeHtml(token) + '" aria-label="Token ' + escapeHtml(token) + '. Tap to remove.">' +
                '<span class="token-text">' + escapeHtml(token) + '</span>' +
                '<span class="token-del-btn" aria-hidden="true">✕</span>' +
                '</span>';
        });

        codeBuilderSlots.innerHTML =
            '<div class="assembled-code-line">' +
                '<span class="code-line-prefix">&gt;&gt;&gt;&nbsp;</span>' +
                '<div class="assembled-tokens-flow">' + tokensHtml + '</div>' +
            '</div>';

        const placedChips = codeBuilderSlots.querySelectorAll(".connected-token");
        placedChips.forEach(function (chip) {
            const removeAction = function () {
                if (isAnswerLocked) return;
                const idx = parseInt(chip.getAttribute("data-idx"), 10);
                const removed = builderPlacedTokens.splice(idx, 1)[0];
                builderAvailableTokens.push(removed);
                AudioManager.playSound("click");
                renderCodeBuilderSlots();
                renderCodeBuilderTokens();
            };
            chip.addEventListener("click", removeAction);
            chip.addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    removeAction();
                }
            });
        });
    }

    if (builderSubmitBtn) {
        builderSubmitBtn.disabled = (builderPlacedTokens.length === 0 || isAnswerLocked);
    }
}

function renderCodeBuilderTokens() {
    if (!codeBuilderTokens) return;
    let html = "";
    builderAvailableTokens.forEach(function (token, idx) {
        html += '<button type="button" class="code-token-chip" data-idx="' + idx + '" aria-label="Token ' + escapeHtml(token) + '. Tap to add to code.">' +
            escapeHtml(token) +
            '</button>';
    });
    codeBuilderTokens.innerHTML = html;

    const tokenChips = codeBuilderTokens.querySelectorAll(".code-token-chip");
    tokenChips.forEach(function (chip) {
        chip.addEventListener("click", function () {
            if (isAnswerLocked) return;
            const idx = parseInt(chip.getAttribute("data-idx"), 10);
            const token = builderAvailableTokens.splice(idx, 1)[0];
            builderPlacedTokens.push(token);
            AudioManager.playSound("builderSnap");
            renderCodeBuilderSlots();
            renderCodeBuilderTokens();
        });
    });
}

// RESET BUTTON: completely clears current assembly and returns all tokens to available with 0 stat changes
if (builderResetBtn) {
    builderResetBtn.addEventListener("click", function () {
        if (isAnswerLocked || !activeBuilderQuestion) return;
        builderPlacedTokens = [];
        builderAvailableTokens = (activeBuilderQuestion.builderTokens && Array.isArray(activeBuilderQuestion.builderTokens))
            ? activeBuilderQuestion.builderTokens.slice()
            : [];
        AudioManager.playSound("click");
        renderCodeBuilderSlots();
        renderCodeBuilderTokens();
    });
}

// SUBMIT BUTTON: validates exact assembled code against expected solution
if (builderSubmitBtn) {
    builderSubmitBtn.addEventListener("click", function () {
        if (isAnswerLocked || !activeBuilderQuestion || builderPlacedTokens.length === 0) return;

        const assembledStr = getAssembledCodeString(builderPlacedTokens);
        const normalizedAssembled = normalizeCode(assembledStr);

        const expectedStr = activeBuilderQuestion.solutionCode ||
            (activeBuilderQuestion.correctOrder ? getAssembledCodeString(activeBuilderQuestion.correctOrder) : "");
        const normalizedExpected = normalizeCode(expectedStr);

        // Check if token order exactly matches
        let isMatch = false;
        if (activeBuilderQuestion.correctOrder && Array.isArray(activeBuilderQuestion.correctOrder)) {
            if (builderPlacedTokens.length === activeBuilderQuestion.correctOrder.length) {
                isMatch = builderPlacedTokens.every(function (t, i) {
                    return t.trim() === activeBuilderQuestion.correctOrder[i].trim();
                });
            }
        }

        // Also check normalized string equality
        if (!isMatch && normalizedAssembled && normalizedExpected) {
            if (normalizedAssembled === normalizedExpected) {
                isMatch = true;
            }
        }

        // Also check accepted solutions list if provided
        if (!isMatch && activeBuilderQuestion.acceptedSolutions && Array.isArray(activeBuilderQuestion.acceptedSolutions)) {
            isMatch = activeBuilderQuestion.acceptedSolutions.some(function (sol) {
                return normalizeCode(sol) === normalizedAssembled;
            });
        }

        handleCodeBuilderAnswer(isMatch, assembledStr, expectedStr, activeBuilderQuestion);
    });
}

function handleCodeBuilderAnswer(isCorrect, assembledCode, expectedCode, question) {
    if (isAnswerLocked) return;
    isAnswerLocked = true;

    if (builderSubmitBtn) builderSubmitBtn.disabled = true;
    if (builderResetBtn) builderResetBtn.disabled = true;

    const build = BUILDS[currentBuildIndex];
    questionAttempts++;
    sessionQuestionsAnswered++;
    if (sessionQuestionsAnswered === 5) {
        DailyStreakManager.recordActivity();
    }

    const resultLifeTag = document.getElementById("result-life-tag");
    const resultPieceTag = document.getElementById("result-piece-tag");

    totalQuestionsAttempted++;
    attemptsByType["code-builder"] = (attemptsByType["code-builder"] || 0) + 1;
    levelAttemptsByType["code-builder"] = (levelAttemptsByType["code-builder"] || 0) + 1;

    if (isCorrect) {
        totalCorrectAnswers++;
        correctByType["code-builder"] = (correctByType["code-builder"] || 0) + 1;
        levelCorrectByType["code-builder"] = (levelCorrectByType["code-builder"] || 0) + 1;

        successfulCorrectAnswers++;
        currentQuestionIndex = successfulCorrectAnswers;

        totalXp += 10;
        scoreDisplay.textContent = "⭐ " + totalXp + " XP";
        showFloatingXp(builderSubmitBtn || scoreDisplay, "+10 XP");
        AudioManager.playSound("correct");

        streak += 1;
        if (streak > bestStreak) bestStreak = streak;
        streakDisplay.textContent = "🔥 " + streak;

        if (lives === 1 && reachedOneLifeInLevel) {
            postOneLifeConsecutiveCorrect++;
        }

        checkStreakMilestone(streak);

        buildPieces[currentBuildIndex] = successfulCorrectAnswers;
        updateBuilding(successfulCorrectAnswers - 1);
        AudioManager.playSound("build");

        // City Builder construction hook
        if (window.CityEngine && window.CityEngine.onCorrectChallengeAnswer) {
            window.CityEngine.onCorrectChallengeAnswer();
        }
        if (window.CityEngine && window.CityEngine.updateHUD) {
            window.CityEngine.updateHUD();
        }

        checkAchievements("answer");
        checkAchievements("code_builder_success");

        if (question.concept) {
            ConceptMasteryManager.recordAttempt(question.concept, true);
        }

        resultBox.className = "result-box result-correct";
        resultStatus.textContent = "✅ CORRECT CODE ASSEMBLED!";
        resultXpTag.textContent = "+10 XP";
        resultXpTag.className = "result-pill xp-pill xp-earned";

        if (resultLifeTag) resultLifeTag.style.display = "none";

        if (resultPieceTag) {
            const pieceIdx = Math.min(9, successfulCorrectAnswers - 1);
            const pInfo = (build.pieceDetails && build.pieceDetails[pieceIdx]) ? build.pieceDetails[pieceIdx] : null;
            if (pInfo) {
                resultPieceTag.textContent = "🧱 Built: " + pInfo.name + " (" + pInfo.desc + ")";
            } else {
                resultPieceTag.textContent = "🧱 Piece Added to Build!";
            }
            resultPieceTag.style.display = "inline-flex";
        }

        if (streak > 1) {
            resultStreakTag.textContent = "🔥 Streak: " + streak + " in a row!";
            resultStreakTag.style.display = "inline-flex";
        } else {
            resultStreakTag.textContent = "🔥 Streak Started!";
            resultStreakTag.style.display = "inline-flex";
        }

        resultCorrectAnswer.innerHTML = '<span class="correct-label">Assembled Code:</span> <code class="correct-val-code">' + escapeHtml(assembledCode) + '</code>';
        resultCorrectAnswer.style.display = "block";

        if (resultWrongChoiceNote) resultWrongChoiceNote.style.display = "none";

        if (resultConceptBar && question.concept) {
            resultConceptText.textContent = question.concept;
            resultConceptBar.style.display = "inline-flex";
        } else if (resultConceptBar) {
            resultConceptBar.style.display = "none";
        }

        if (resultExplanationHeading) resultExplanationHeading.textContent = "WHY IT WORKS";
        resultExplanation.textContent = question.explanation;

        if (resultTakeawayBox && question.takeaway) {
            resultTakeawayText.textContent = question.takeaway;
            resultTakeawayBox.style.display = "flex";
        } else if (resultTakeawayBox) {
            resultTakeawayBox.style.display = "none";
        }

        if (resultLearnMoreWrap && question.learnMore) {
            resultLearnMoreText.textContent = question.learnMore;
            resultLearnMoreDrawer.style.display = "none";
            if (resultLearnMoreToggle) resultLearnMoreToggle.setAttribute("aria-expanded", "false");
            if (learnMoreChevron) learnMoreChevron.textContent = "▾";
            resultLearnMoreWrap.style.display = "block";
        } else if (resultLearnMoreWrap) {
            resultLearnMoreWrap.style.display = "none";
        }

        if (successfulCorrectAnswers === 10) {
            continueButton.textContent = "COMPLETE LEVEL " + build.levelNumber + " ➔";
        } else {
            continueButton.textContent = "CONTINUE ➔";
        }

    } else {
        levelMistakes++;
        flawlessRunBroken = true;

        runMistakes.push({
            levelIndex: currentBuildIndex,
            levelNumber: build.levelNumber,
            levelName: build.name,
            questionText: question.question,
            code: null,
            type: "code-builder",
            concept: question.concept || "Python Code Assembly",
            userAnswer: assembledCode,
            userAnswerFlaw: "The assembled statement does not match the required Python syntax or order.",
            correctAnswer: expectedCode,
            explanation: question.explanation,
            takeaway: question.takeaway || "",
            learnMore: question.learnMore || ""
        });

        if (question.concept) {
            ConceptMasteryManager.recordAttempt(question.concept, false);
            pendingRevengeConcept = question.concept;
            if (window.CityEngine && window.CityEngine.onMistake) {
                window.CityEngine.onMistake(question.concept);
            }
        }

        lives = Math.max(0, lives - 1);
        minLivesInLevel = Math.min(minLivesInLevel, lives);
        streak = 0;
        streakDisplay.textContent = "🔥 0";
        updateLivesDisplay();

        AudioManager.playSound("wrong");

        const livesStat = document.querySelector(".stat-lives") || (livesDisplay ? livesDisplay.parentElement : null);
        if (livesStat) {
            livesStat.classList.remove("lives-hit");
            void livesStat.offsetWidth;
            livesStat.classList.add("lives-hit");
        }

        resultBox.className = "result-box result-wrong";
        resultStatus.textContent = "❌ INCORRECT CODE";
        resultXpTag.textContent = "+0 XP";
        resultXpTag.className = "result-pill xp-pill xp-zero";

        if (resultLifeTag) {
            resultLifeTag.textContent = "💔 -1 Life (" + lives + " left)";
            resultLifeTag.style.display = "inline-flex";
        }

        if (resultPieceTag) resultPieceTag.style.display = "none";

        resultStreakTag.textContent = "🔥 Streak Reset to 0";
        resultStreakTag.style.display = "inline-flex";

        resultCorrectAnswer.innerHTML = '<span class="correct-label">Expected Solution:</span> <code class="correct-val-code">' + escapeHtml(expectedCode) + '</code>';
        resultCorrectAnswer.style.display = "block";

        if (resultWrongChoiceNote) {
            resultWrongChoiceText.textContent = "You assembled: " + assembledCode;
            resultWrongChoiceNote.style.display = "flex";
        }

        if (resultConceptBar && question.concept) {
            resultConceptText.textContent = question.concept;
            resultConceptBar.style.display = "inline-flex";
        } else if (resultConceptBar) {
            resultConceptBar.style.display = "none";
        }

        if (resultExplanationHeading) resultExplanationHeading.textContent = "SOLUTION BREAKDOWN";
        resultExplanation.textContent = question.explanation;

        if (resultTakeawayBox && question.takeaway) {
            resultTakeawayText.textContent = question.takeaway;
            resultTakeawayBox.style.display = "flex";
        } else if (resultTakeawayBox) {
            resultTakeawayBox.style.display = "none";
        }

        if (resultLearnMoreWrap && question.learnMore) {
            resultLearnMoreText.textContent = question.learnMore;
            resultLearnMoreDrawer.style.display = "none";
            if (resultLearnMoreToggle) resultLearnMoreToggle.setAttribute("aria-expanded", "false");
            if (learnMoreChevron) learnMoreChevron.textContent = "▾";
            resultLearnMoreWrap.style.display = "block";
        } else if (resultLearnMoreWrap) {
            resultLearnMoreWrap.style.display = "none";
        }

        continueButton.textContent = "CONTINUE ➔";
    }

    resultBox.style.display = "block";
    resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function checkAchievements(trigger, payload) {
    // 13. BOSS SLAYER
    if (trigger === "boss_defeat") {
        unlockAchievement("boss_slayer");
    }

    // 14. CODE ARTISAN
    if (trigger === "code_builder_success") {
        unlockAchievement("code_artisan");
    }

    // 15. DAILY ARCHITECT
    if (trigger === "daily_build_complete") {
        unlockAchievement("daily_architect");
    }

    // 16. CONCEPT MASTER
    if (trigger === "concept_mastered") {
        unlockAchievement("concept_master");
    }

    const totalPiecesBuilt = buildPieces.reduce(function (sum, count) {
        return sum + count;
    }, 0);

    const totalPossiblePieces = BUILDS.reduce(function (sum, b) {
        return sum + (b.pieces ? b.pieces.length : b.questions.length);
    }, 0);

    // --------------------------------------------------
    // 4. STREAK BUILDER (15 consecutive correct answers)
    // --------------------------------------------------
    const currentStreakVal = Math.max(streak, bestStreak);
    if (currentStreakVal >= 15) {
        unlockAchievement("streak_builder");
    }

    // --------------------------------------------------
    // 5. BUG HUNTER (>= 8 correct bug challenges AND >= 80% accuracy)
    // --------------------------------------------------
    if (bugCorrect >= 8 && bugAttempts > 0 && (bugCorrect / bugAttempts) >= 0.8) {
        unlockAchievement("bug_hunter");
    }

    // --------------------------------------------------
    // 6. OUTPUT MASTER (>= 8 correct output challenges AND >= 80% accuracy)
    // --------------------------------------------------
    if (outputCorrect >= 8 && outputAttempts > 0 && (outputCorrect / outputAttempts) >= 0.8) {
        unlockAchievement("output_master");
    }

    // --------------------------------------------------
    // 7. CHALLENGE MASTER (>= 5 correct from EACH of the 4 challenge types)
    // --------------------------------------------------
    const mcqDone = (correctByType["mcq"] || 0) >= 5;
    const outputDone = (correctByType["output"] || 0) >= 5;
    const codeDone = (correctByType["code-choice"] || 0) >= 5;
    const bugDone = (correctByType["bug"] || 0) >= 5;
    if (mcqDone && outputDone && codeDone && bugDone) {
        unlockAchievement("challenge_master");
    }

    // --------------------------------------------------
    // LEVEL COMPLETION CHECKS (TRIGGER: level_complete)
    // --------------------------------------------------
    if (trigger === "level_complete" && payload) {
        const buildIdx = payload.buildIndex;

        // 1. FIRST BUILD: Complete Level 1
        if (buildIdx === 0) {
            unlockAchievement("first_build");
        }

        // 2. SHARP MIND: Complete any level with >= 9/10 correct and 0 hints used
        if (payload.noHint && payload.levelCorrect >= 9) {
            unlockAchievement("sharp_mind");
        }

        // 3. PERFECT BUILDER: Complete ONE entire level: 10/10 correct, 0 wrong answers, 0 hints, and 3/3 lives remaining
        if (payload.isPerfect && payload.noHint && lives === 3) {
            unlockAchievement("perfect_builder");
        }

        // 8. CLUTCH BUILDER: During single level: reached 1 life, answered 5 consecutive correct after reaching 1 life, completed level
        if (reachedOneLifeInLevel && lives === 1 && postOneLifeConsecutiveCorrect >= 5) {
            unlockAchievement("clutch_builder");
        }

        // 12. SECRET: THE LAST SPARK
        // Reached 1 life, used hint earlier in same level, answered final 3 required questions consecutively with no additional mistakes, completed level
        if (reachedOneLifeInLevel && lives === 1 && payload.usedHint && postOneLifeConsecutiveCorrect >= 3) {
            unlockAchievement("secret_last_spark");
        }

        // 9. WORLD BUILDER: Complete all 3 current levels AND build at least 27 of 30 pieces
        const allCompleted = (completedLevels.length >= BUILDS.length && completedLevels.every(Boolean));
        if (allCompleted && totalPiecesBuilt >= 27) {
            unlockAchievement("world_builder");
        }

        // 10. PYTHON MASTER: Across all 3 levels: >= 28/30 correct AND no individual level < 9 correct
        if (allCompleted && levelCorrectHistory.length >= BUILDS.length) {
            const sumScores = levelCorrectHistory.slice(0, BUILDS.length).reduce(function (sum, score) { return sum + score; }, 0);
            const allLevelsMin9 = levelCorrectHistory.slice(0, BUILDS.length).every(function (score) { return score >= 9; });
            if (sumScores >= 28 && allLevelsMin9) {
                unlockAchievement("python_master");
            }
        }

        // 11. FLAWLESS WORLD: Complete ALL 3 levels with 30/30 correct, 0 wrong answers, 0 hints, and 3/3 lives in every level
        if (allCompleted && !flawlessRunBroken && flawlessLevels.size >= BUILDS.length) {
            unlockAchievement("flawless_world");
        }
    }

    if (trigger === "game_complete") {
        const allCompleted = (completedLevels.length >= BUILDS.length && completedLevels.every(Boolean));
        if (allCompleted && totalPiecesBuilt >= 27) {
            unlockAchievement("world_builder");
        }
        if (allCompleted && levelCorrectHistory.length >= BUILDS.length) {
            const sumScores = levelCorrectHistory.slice(0, BUILDS.length).reduce(function (sum, score) { return sum + score; }, 0);
            const allLevelsMin9 = levelCorrectHistory.slice(0, BUILDS.length).every(function (score) { return score >= 9; });
            if (sumScores >= 28 && allLevelsMin9) {
                unlockAchievement("python_master");
            }
        }
        if (allCompleted && !flawlessRunBroken && flawlessLevels.size >= BUILDS.length) {
            unlockAchievement("flawless_world");
        }
    }
}

function renderAchievementsGrid() {
    if (!worldAchievementsGrid) return;
    if (achievementsCountBadge) {
        achievementsCountBadge.textContent = unlockedAchievements.size + " / " + ACHIEVEMENTS.length + " UNLOCKED";
    }
    if (homeAchievementsBadge) {
        homeAchievementsBadge.textContent = unlockedAchievements.size + "/" + ACHIEVEMENTS.length;
    }

    const totalPiecesBuilt = buildPieces.reduce(function (sum, count) {
        return sum + count;
    }, 0);

    const currentState = {
        totalPiecesBuilt: totalPiecesBuilt,
        streak: streak,
        bestStreak: bestStreak,
        totalCorrectAnswers: totalCorrectAnswers,
        outputCorrect: outputCorrect,
        outputAttempts: outputAttempts,
        bugCorrect: bugCorrect,
        bugAttempts: bugAttempts,
        attemptsByType: attemptsByType,
        correctByType: correctByType,
        completedLevels: completedLevels,
        levelCorrectHistory: levelCorrectHistory.slice(),
        bestNoHintLevelScore: bestNoHintLevelScore,
        flawlessLevelsCount: flawlessLevels.size,
        unlockedAchievements: Array.from(unlockedAchievements)
    };

    let html = "";
    ACHIEVEMENTS.forEach(function (ach) {
        const isUnlocked = unlockedAchievements.has(ach.id);
        const reward = ach.rewardId ? REWARDS[ach.rewardId] : null;
        const rarityClass = "rarity-" + (ach.rarity || "common").toLowerCase();

        if (isUnlocked) {
            html +=
                '<div class="achievement-card unlocked ' + rarityClass + '" id="ach-card-' + ach.id + '">' +
                '<div class="ach-icon-wrap">' + ach.icon + '</div>' +
                '<div class="ach-info">' +
                '<div class="ach-title-row">' +
                '<span class="ach-name">' + escapeHtml(ach.title) + '</span>' +
                '<span class="ach-status-badge">✓ UNLOCKED</span>' +
                '</div>' +
                '<div class="ach-badges-row">' +
                '<span class="ach-rarity-badge ' + rarityClass + '">' + escapeHtml(ach.rarity) + '</span>' +
                '</div>' +
                '<span class="ach-desc">' + escapeHtml(ach.description) + '</span>' +
                (reward ? '<span class="ach-reward-tag">🎁 Reward: ' + escapeHtml(reward.title) + '</span>' : '') +
                '</div>' +
                '</div>';
        } else if (ach.hidden) {
            // Secret achievement locked view: masked title with spark, ??? description, secret badge
            html +=
                '<div class="achievement-card locked secret ' + rarityClass + '" id="ach-card-' + ach.id + '">' +
                '<div class="ach-icon-wrap">🔒</div>' +
                '<div class="ach-info">' +
                '<div class="ach-title-row">' +
                '<span class="ach-name">⚡ THE LAST SPARK</span>' +
                '<span class="ach-status-badge">🔒 SECRET</span>' +
                '</div>' +
                '<div class="ach-badges-row">' +
                '<span class="ach-rarity-badge ' + rarityClass + '">' + escapeHtml(ach.rarity) + '</span>' +
                '</div>' +
                '<span class="ach-desc">???</span>' +
                '<div class="ach-progress-row"><span class="ach-progress-badge secret-pill">🔒 Secret achievement</span></div>' +
                (reward ? '<span class="ach-reward-tag">🎁 Reward: ' + escapeHtml(reward.title) + '</span>' : '') +
                '</div>' +
                '</div>';
        } else {
            let progressHtml = "";
            if (ach.id === "challenge_master") {
                const corr = currentState.correctByType || {};
                const mcq = corr.mcq || 0;
                const out = corr.output || 0;
                const code = corr["code-choice"] || 0;
                const bug = corr.bug || 0;
                progressHtml =
                    '<div class="ach-challenge-grid">' +
                    '<span class="ach-type-pill' + (mcq >= 5 ? ' is-done' : '') + '">MCQ ' + mcq + '/5' + (mcq >= 5 ? ' ✓' : '') + '</span>' +
                    '<span class="ach-type-pill' + (out >= 5 ? ' is-done' : '') + '">OUTPUT ' + out + '/5' + (out >= 5 ? ' ✓' : '') + '</span>' +
                    '<span class="ach-type-pill' + (code >= 5 ? ' is-done' : '') + '">CODE ' + code + '/5' + (code >= 5 ? ' ✓' : '') + '</span>' +
                    '<span class="ach-type-pill' + (bug >= 5 ? ' is-done' : '') + '">BUG ' + bug + '/5' + (bug >= 5 ? ' ✓' : '') + '</span>' +
                    '</div>';
            } else {
                const progressText = (typeof ach.getProgressText === "function") ? ach.getProgressText(currentState) : "";
                const isProgressDone = (progressText === "Completed");
                const isProgressPending = (!progressText || progressText === "Not yet achieved");
                if (!isProgressPending && !isProgressDone) {
                    progressHtml = '<div class="ach-progress-row"><span class="ach-progress-badge">📊 ' + escapeHtml(progressText) + '</span></div>';
                } else if (isProgressPending) {
                    progressHtml = '<div class="ach-progress-row"><span class="ach-progress-badge ach-status-pill">Not yet achieved</span></div>';
                }
            }

            html +=
                '<div class="achievement-card locked ' + rarityClass + '" id="ach-card-' + ach.id + '">' +
                '<div class="ach-icon-wrap">' + ach.icon + '</div>' +
                '<div class="ach-info">' +
                '<div class="ach-title-row">' +
                '<span class="ach-name">' + escapeHtml(ach.title) + '</span>' +
                '<span class="ach-status-badge">🔒 LOCKED</span>' +
                '</div>' +
                '<div class="ach-badges-row">' +
                '<span class="ach-rarity-badge ' + rarityClass + '">' + escapeHtml(ach.rarity) + '</span>' +
                '</div>' +
                '<span class="ach-desc">' + escapeHtml(ach.description) + '</span>' +
                progressHtml +
                (reward ? '<span class="ach-reward-tag">🎁 Reward: ' + escapeHtml(reward.title) + '</span>' : '') +
                '</div>' +
                '</div>';
        }
    });

    worldAchievementsGrid.innerHTML = html;
}


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

    // PHASE 3: Update segmented 10-piece progression pips
    const pips = document.querySelectorAll("#progress-pips-track .pip");
    if (pips && pips.length > 0) {
        pips.forEach(function (pip, index) {
            const isFilled = index < piecesBuilt;
            const isTarget = index === piecesBuilt && piecesBuilt < totalPieces;
            pip.classList.toggle("filled", isFilled);
            pip.classList.toggle("target", isTarget);
        });
    }

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
        AudioManager.playSound("build");
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
        } else if (currentBuildIndex === index && !completedLevels[index] && successfulCorrectAnswers > 0) {
            statusClass = "active";
            statusText = "In Progress (" + buildPieces[index] + "/" + totalPieces + ")";
        } else if (index === 0 || completedLevels[index - 1]) {
            statusClass = (currentBuildIndex === index) ? "active" : "unlocked";
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

    // 1. Render Multi-World Tabs
    const navEl = worldSelectorNav || document.getElementById("world-selector-nav");
    if (navEl) {
        let tabsHtml = "";
        WORLDS.forEach(function (world) {
            const isActive = (world.id === currentWorldId);
            const isLocked = (world.status === "locked");
            tabsHtml += '<button type="button" class="world-selector-tab ' + (isActive ? 'active' : '') + '" data-world="' + world.id + '" role="tab" aria-selected="' + (isActive ? 'true' : 'false') + '">' +
                '<span>' + (isLocked ? '🔒 ' : '') + world.icon + ' ' + escapeHtml(world.name.toUpperCase()) + '</span>' +
                '<span class="world-tab-badge">' + escapeHtml(world.badge) + '</span>' +
                '</button>';
        });
        navEl.innerHTML = tabsHtml;

        const tabs = navEl.querySelectorAll(".world-selector-tab");
        tabs.forEach(function (tab) {
            tab.addEventListener("click", function () {
                const wid = tab.getAttribute("data-world");
                const targetWorld = WORLDS.find(function (w) { return w.id === wid; });
                if (!targetWorld) return;
                if (targetWorld.status === "locked") {
                    showToast("info", "WORLD LOCKED 🔒", targetWorld.name, targetWorld.comingSoonNotice, targetWorld.icon);
                    AudioManager.playSound("click");
                    return;
                }
                currentWorldId = wid;
                AudioManager.playSound("click");
                renderWorldMap();
            });
        });
    }

    // 2. Render Future Worlds Roadmap Cards
    const fwGrid = futureWorldsGrid || document.getElementById("future-worlds-grid");
    if (fwGrid) {
        let fwHtml = "";
        const futureList = WORLDS.filter(function (w) { return w.status === "locked"; });
        futureList.forEach(function (fw) {
            fwHtml += '<div class="future-world-card">' +
                '<div class="future-card-header">' +
                    '<span class="future-card-icon">' + fw.icon + '</span>' +
                    '<span class="future-lock-badge">🔒 COMING LATER</span>' +
                '</div>' +
                '<h4 class="future-world-title">' + escapeHtml(fw.name) + '</h4>' +
                '<p class="future-world-desc">' + escapeHtml(fw.description) + '</p>' +
                '<div class="future-world-road">Planned Milestones: ' + escapeHtml(fw.buildMilestones || "3 Progressive Chapters") + '</div>' +
            '</div>';
        });
        fwGrid.innerHTML = fwHtml;
    }

    // 3. Update Header summary stats
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

    let html = "";
    BUILDS.forEach(function (build, index) {
        const totalPieces = build.pieces ? build.pieces.length : build.questions.length;
        const currentPieces = buildPieces[index] !== undefined ? buildPieces[index] : 0;

        // Dynamic state determination:
        // COMPLETED: completedLevels[index] is true
        // UNLOCKED: index === 0 || completedLevels[index - 1] is true
        // LOCKED: previous level is not completed
        const isCompleted = !!completedLevels[index];
        const isUnlocked = (index === 0 || !!completedLevels[index - 1]);

        let state = "locked";
        let stateBadgeText = "🔒 LOCKED";
        let stateClass = "state-locked";
        let statusMsg = "Locked • Complete Level " + index + " to unlock";
        let btnLabel = "START BUILDING ➔";

        if (isCompleted) {
            state = "completed";
            stateBadgeText = "✓ BUILT";
            stateClass = "state-completed";
            statusMsg = "Checkpoint Secured • " + totalPieces + " / " + totalPieces + " Pieces";
        } else if (isUnlocked) {
            state = "unlocked";
            stateClass = "state-current";
            if (index === currentBuildIndex && successfulCorrectAnswers > 0) {
                stateBadgeText = "▶ BUILDING NOW";
                btnLabel = "RESUME BUILDING ➔";
                statusMsg = "Active Project • " + currentPieces + " / " + totalPieces + " Pieces";
            } else {
                stateBadgeText = "🔓 UNLOCKED";
                btnLabel = "START BUILDING ➔";
                statusMsg = "Unlocked • Ready to Build";
            }
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
        const unlockPulseClass = (index === lastUnlockedBuildIndex) ? " node-unlock-pulse" : "";
        html += '<div class="map-node-wrapper">' +
            '<div class="map-node-card ' + stateClass + unlockPulseClass + '" id="map-node-' + build.id + '" data-level="' + index + '" data-state="' + state + '">' +
            '<div class="node-header">' +
            '<span class="node-level-tag">LEVEL ' + build.levelNumber + '</span>' +
            '<span class="node-state-pill ' + stateClass + '">' + stateBadgeText + '</span>' +
            '</div>' +
            '<div class="node-body">' +
            '<div class="node-icon-wrap ' + stateClass + '">' +
            '<span class="node-icon">' + build.icon + '</span>' +
            (isCompleted ? '<span class="node-badge-corner check">✓</span>' : '') +
            (state === "locked" ? '<span class="node-badge-corner lock">🔒</span>' : '') +
            '</div>' +
            '<div class="node-content">' +
            '<h3 class="node-title">' + escapeHtml(build.name.toUpperCase()) + '</h3>' +
            '<p class="node-topic">' + escapeHtml(build.description || "") + '</p>' +
            '<div class="node-meta-row">' +
            '<span class="node-meta-chip">🎯 10 Correct to Build</span>' +
            '<span class="node-meta-chip">🧱 ' + (isCompleted ? totalPieces : currentPieces) + ' / ' + totalPieces + ' Pieces</span>' +
            '</div>' +
            '<div class="node-missions-mini" style="margin-top: 8px; font-size: 0.72rem; color: #94a3b8;">' +
            (build.missions ? build.missions.map(function (m, mIdx) {
                const mDone = isCompleted || (index === currentBuildIndex && successfulCorrectAnswers >= m.pieceRange[1]);
                const mAct = (index === currentBuildIndex && !isCompleted && successfulCorrectAnswers >= m.pieceRange[0] - 1 && successfulCorrectAnswers < m.pieceRange[1]);
                const mIcon = mDone ? "✓" : (mAct ? "▶" : (m.isBoss ? "★" : "🔒"));
                const mColor = mDone ? "#4ade80" : (mAct ? "#38bdf8" : (m.isBoss ? "#fbbf24" : "#64748b"));
                return '<span style="color:' + mColor + '; margin-right: 6px;">' + mIcon + ' ' + escapeHtml(m.name.replace(/^\\d+\\.\\s*/, "")) + '</span>';
            }).join("") : "") +
            '</div>' +
            '</div>' +
            '</div>';

        // Node Footer (Action or Status message)
        if (state === "unlocked" || state === "current") {
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
                '<button class="replay-level-btn" type="button" data-replay="' + index + '">🔄 REPLAY LEVEL ' + build.levelNumber + '</button>' +
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

    // Attach event listeners to card nodes
    const nodeCards = journeyContainer.querySelectorAll(".map-node-card");
    nodeCards.forEach(function (card) {
        card.addEventListener("click", function (e) {
            // If action button was clicked directly, let its dedicated handler execute
            if (e.target && e.target.closest(".node-action-btn")) {
                return;
            }

            const lvl = parseInt(card.getAttribute("data-level"), 10);
            const st = card.getAttribute("data-state");

            if (st === "unlocked" || st === "current") {
                selectLevelFromMap(lvl);
            } else if (st === "completed") {
                AudioManager.playSound("click");
                const build = BUILDS[lvl];
                if (build) {
                    showToast("", "LEVEL COMPLETED", "✓ Level " + build.levelNumber + " Complete", "This level's checkpoint is secured!", "💾");
                }
            } else if (st === "locked") {
                AudioManager.playSound("wrong");
                const build = BUILDS[lvl];
                if (build) {
                    showToast("", "LEVEL LOCKED", "🔒 Level " + build.levelNumber + " Locked", "Complete Level " + lvl + " first to unlock this build!", "🔒");
                }
            }
        });
    });

    // Attach event listeners to card action buttons
    const nodeActionBtns = journeyContainer.querySelectorAll(".node-action-btn");
    nodeActionBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            const lvl = parseInt(btn.getAttribute("data-level"), 10);
            selectLevelFromMap(lvl);
        });
    });

    lastUnlockedBuildIndex = -1;
    DailyStreakManager.updateUI();
    renderAchievementsGrid();
}

function selectLevelFromMap(targetIndex) {
    if (targetIndex === undefined || targetIndex === null) {
        targetIndex = currentBuildIndex;
    }

    if (targetIndex < 0 || targetIndex >= BUILDS.length) return;

    // Check if target level is unlocked
    const isUnlocked = (targetIndex === 0 || !!completedLevels[targetIndex - 1]);
    if (!isUnlocked) {
        AudioManager.playSound("wrong");
        return;
    }

    // If all levels are already completed, show final victory screen
    if (completedLevels.every(Boolean)) {
        if (worldMapScreen) worldMapScreen.style.display = "none";
        if (achievementsScreen) achievementsScreen.style.display = "none";
        if (gameScreen) gameScreen.style.display = "block";
        showGameComplete();
        return;
    }

    AudioManager.playSound("click");

    // Hide world map, achievements and start screen, show game screen
    if (worldMapScreen) worldMapScreen.style.display = "none";
    if (achievementsScreen) achievementsScreen.style.display = "none";
    if (startScreen) startScreen.style.display = "none";
    if (gameScreen) gameScreen.style.display = "block";

    // Ensure game cards visibility
    if (gameOverCard) gameOverCard.style.display = "none";
    if (levelCompleteCard) levelCompleteCard.style.display = "none";
    if (gameCompleteCard) gameCompleteCard.style.display = "none";

    // PHASE 10: Zero-lives safety guard: if level failed (lives === 0), initialize clean retry state
    if (lives === 0 || (currentBuildIndex === targetIndex && lives <= 0)) {
        resetLevelForRetry(targetIndex);
        return;
    }

    // If switching to an unlocked level that isn't the active level, OR if current level was already completed:
    if (currentBuildIndex !== targetIndex || completedLevels[currentBuildIndex]) {
        currentBuildIndex = targetIndex;
        successfulCorrectAnswers = 0;
        currentQuestionIndex = 0;
        currentQuestion = null;
        seenQuestionIds.clear();
        questionAttempts = 0;
        levelMistakes = 0;

        // Reset level challenge stats for new level
        Object.keys(levelAttemptsByType).forEach(function (k) { levelAttemptsByType[k] = 0; });
        Object.keys(levelCorrectByType).forEach(function (k) { levelCorrectByType[k] = 0; });

        // Each new level gets fresh 3 lives & fresh 1 hint!
        lives = 3;
        hintsRemaining = 1;
        hintUsedForCurrentQuestion = false;
        isAnswerLocked = false;
        streak = 0;
        minLivesInLevel = 3;
        reachedOneLifeInLevel = false;
        levelUsedHint = false;
        levelFinal5Correct = true;
        levelFinal3Correct = true;
        postOneLifeConsecutiveCorrect = 0;

        updateLivesDisplay();
        updateHintDisplay();
        switchScene(currentBuildIndex);
        updateBuildWorldBar();
        updateBuilding(-1);
        loadQuestion(true);
        showMissionBriefing(currentBuildIndex);
        return;
    }

    // Resuming active level in progress
    switchScene(currentBuildIndex);
    updateBuildWorldBar();
    updateBuilding(-1);

    if (successfulCorrectAnswers === 0) {
        showMissionBriefing(currentBuildIndex);
    } else {
        if (missionBriefingCard) missionBriefingCard.style.display = "none";
        if (questionCard) questionCard.style.display = "block";
        if (!currentQuestion || !questionText.textContent || questionText.textContent === "Loading question...") {
            loadQuestion();
        }
    }
}

function enterGameplayFromMap(targetIndex) {
    selectLevelFromMap(targetIndex !== undefined ? targetIndex : currentBuildIndex);
}

// Contextual World Map origin tracking
let worldMapOrigin = "title"; // "game" or "title"

function updateMapBackButton() {
    if (!mapBackBtn) return;
    if (worldMapOrigin === "game") {
        mapBackBtn.innerHTML = "<span>← BACK TO GAME</span>";
    } else {
        mapBackBtn.innerHTML = "<span>← BACK / HOME</span>";
    }
}

function openWorldMap(origin) {
    if (origin) {
        worldMapOrigin = origin;
    } else if (gameScreen && gameScreen.style.display !== "none") {
        worldMapOrigin = "game";
    } else {
        worldMapOrigin = "title";
    }
    updateMapBackButton();
    if (gameScreen) gameScreen.style.display = "none";
    if (startScreen) startScreen.style.display = "none";
    if (achievementsScreen) achievementsScreen.style.display = "none";
    if (worldMapScreen) worldMapScreen.style.display = "block";
    renderWorldMap();
}

// Dedicated Achievements Screen Origin Tracking & Navigation
let achievementsOrigin = "title"; // "game" or "title"

function updateAchievementsBackButton() {
    if (!achievementsBackBtn) return;
    if (achievementsOrigin === "city") {
        achievementsBackBtn.innerHTML = "<span>← RETURN TO CITY</span>";
    } else if (achievementsOrigin === "game") {
        achievementsBackBtn.innerHTML = "<span>← BACK TO GAME</span>";
    } else {
        achievementsBackBtn.innerHTML = "<span>← BACK / HOME</span>";
    }
}

function openAchievements(origin) {
    if (origin) {
        achievementsOrigin = origin;
    } else if (gameScreen && gameScreen.style.display !== "none") {
        achievementsOrigin = "game";
    } else {
        achievementsOrigin = "city";
    }
    updateAchievementsBackButton();
    if (achievementsScreen) achievementsScreen.style.display = "flex";
    renderAchievementsGrid();
}

// PHASE 10: Clean level retry helper (used by both TRY AGAIN button and World Map retry)
function resetLevelForRetry(levelIndex) {
    if (levelIndex === undefined) levelIndex = currentBuildIndex;
    currentBuildIndex = levelIndex;
    successfulCorrectAnswers = 0;
    currentQuestionIndex = 0;
    currentQuestion = null;
    seenQuestionIds.clear();
    questionAttempts = 0;
    levelMistakes = 0;
    minLivesInLevel = 3;
    reachedOneLifeInLevel = false;
    levelUsedHint = false;
    levelFinal5Correct = true;
    levelFinal3Correct = true;
    postOneLifeConsecutiveCorrect = 0;
    flawlessRunBroken = true;
    buildPieces[currentBuildIndex] = 0; // Reset only this level's build pieces
    lives = 3;                         // Fresh 3 lives for retry
    hintsRemaining = 1;                // Reset hints for retry (strictly 1 hint)
    hintUsedForCurrentQuestion = false;
    isAnswerLocked = false;
    streak = 0;
    totalXp = checkpointXp;            // Restore XP from previously completed checkpoints

    // Reset level challenge stats and clear mistakes from this failed attempt
    Object.keys(levelAttemptsByType).forEach(function (k) { levelAttemptsByType[k] = 0; });
    Object.keys(levelCorrectByType).forEach(function (k) { levelCorrectByType[k] = 0; });
    runMistakes = runMistakes.filter(function (m) {
        return m.levelIndex !== currentBuildIndex;
    });

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

    // Reset UI visibility & show Mission Briefing for level restart
    if (gameOverCard) gameOverCard.style.display = "none";
    if (tryAgainButton) tryAgainButton.style.display = "none";

    switchScene(currentBuildIndex);
    updateBuildWorldBar();
    updateBuilding(-1);
    loadQuestion(true);
    showMissionBriefing(currentBuildIndex);
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
        hintButton.textContent = "💡 Tip Used";
        hintButton.classList.add("disabled");
    } else {
        hintButton.disabled = false;
        hintButton.textContent = "💡 ENGINEER TIP (1 left)";
        hintButton.classList.remove("disabled");
    }
}

hintButton.addEventListener("click", function () {
    AudioManager.playSound("click");
    if (hintsRemaining <= 0 || lives <= 0 || isAnswerLocked) {
        return;
    }

    const question = currentQuestion || BUILDS[currentBuildIndex].questions[0];

    if (!hintUsedForCurrentQuestion && hintsRemaining > 0) {
        hintsRemaining = 0;
        hintUsedForCurrentQuestion = true;
        levelUsedHint = true;
        flawlessRunBroken = true;
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
    if (currentStreak === 10) {
        streakBanner.textContent = "🔥 10 STREAK! ON FIRE!";
        streakBanner.style.display = "block";
        showToast("streak", "STREAK MILESTONE", "🔥 10 STREAK!", "You're on fire! 10 challenges in a row!", "🔥");
        setTimeout(function () {
            AudioManager.playSound("streak");
        }, 180);
    } else if (currentStreak === 20) {
        streakBanner.textContent = "⚡ 20 STREAK! UNSTOPPABLE!";
        streakBanner.style.display = "block";
        showToast("streak", "STREAK MILESTONE", "⚡ 20 STREAK!", "Unstoppable momentum! 20 in a row!", "⚡");
        setTimeout(function () {
            AudioManager.playSound("streak10");
        }, 180);
    } else if (currentStreak === 30) {
        streakBanner.textContent = "👑 30 STREAK! PERFECT RUN!";
        streakBanner.style.display = "block";
        showToast("streak", "STREAK MILESTONE", "👑 30 STREAK!", "LEGENDARY PERFECT RUN! 30 in a row!", "👑");
        setTimeout(function () {
            AudioManager.playSound("streak10");
        }, 180);
    } else {
        return;
    }

    setTimeout(function () {
        streakBanner.style.display = "none";
    }, 2400);
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
// QUESTION SELECTION & PROGRESSION ENGINE
// ==================================================

let pendingRevengeConcept = null;

function getNextUnseenQuestion(buildIndex) {
    const build = BUILDS[buildIndex];
    const pool = build.questions;
    const unseen = pool.filter(function (q) {
        return !seenQuestionIds.has(q.id);
    });

    if (unseen.length === 0) {
        return pool[0];
    }

    // 1. REVENGE / PRACTICE CHALLENGE PRIORITY:
    if (pendingRevengeConcept) {
        const conceptLower = pendingRevengeConcept.toLowerCase();
        const revengeMatch = unseen.find(function (q) {
            const qc = (q.concept || "").toLowerCase();
            return (qc.includes(conceptLower) || conceptLower.includes(qc)) && !q.isBoss;
        });

        if (revengeMatch) {
            pendingRevengeConcept = null;
            revengeMatch.isRevenge = true;
            seenQuestionIds.add(revengeMatch.id);
            return revengeMatch;
        }
        pendingRevengeConcept = null;
    }

    // 2. BOSS / CHAPTER FINALE TRIGGER:
    // When on piece 10 (successfulCorrectAnswers === 9), strictly present a fresh Chapter Boss Challenge!
    if (successfulCorrectAnswers === 9) {
        return getNextBossQuestion(buildIndex);
    }

    // 3. CURRICULUM ORDERING FOR CHAPTER 1 (Python Basics):
    // For a beginner progressing through stages 1 to 10 of Chapter 1,
    // deliver the stage curriculum question (index 0 to 9) if not seen yet!
    if (buildIndex === 0 && successfulCorrectAnswers < 10) {
        const targetQ = pool[successfulCorrectAnswers];
        if (targetQ && !seenQuestionIds.has(targetQ.id)) {
            seenQuestionIds.add(targetQ.id);
            return targetQ;
        }
    }

    // 4. PROGRESSIVE DIFFICULTY ALIGNMENT:
    let preferredDiff = "VERY EASY";
    if (successfulCorrectAnswers >= 6) {
        preferredDiff = (buildIndex === 2) ? "HARD" : "MEDIUM";
    } else if (successfulCorrectAnswers >= 4) {
        preferredDiff = (buildIndex === 0) ? "EASY" : "MEDIUM";
    } else if (successfulCorrectAnswers >= 2) {
        preferredDiff = (buildIndex === 0) ? "VERY EASY" : "EASY";
    }

    const matchingDiff = unseen.filter(function (q) {
        return !q.isBoss && q.difficulty === preferredDiff;
    });

    const candidate = (matchingDiff.length > 0)
        ? matchingDiff[0]
        : (unseen.find(function (q) { return !q.isBoss; }) || unseen[0]);

    seenQuestionIds.add(candidate.id);
    return candidate;
}

// ==================================================
// QUESTION LOADING & UI UPDATES
// ==================================================

function updateOrientationBar() {
    if (!challengeOrientationBar) return;
    const world = getCurrentWorld();
    const chapter = BUILDS[currentBuildIndex] || BUILDS[0];
    if (orientationWorldTag) {
        orientationWorldTag.textContent = world.icon + " " + world.name.toUpperCase();
    }
    if (orientationStageTag) {
        orientationStageTag.textContent = "CHAPTER " + chapter.levelNumber + ": " + chapter.name.toUpperCase();
    }
    const currentMission = (chapter.missions && chapter.missions.length > 0)
        ? (chapter.missions.find(function (m) {
            return successfulCorrectAnswers >= m.pieceRange[0] - 1 && successfulCorrectAnswers < m.pieceRange[1];
        }) || chapter.missions[chapter.missions.length - 1])
        : null;
    if (orientationMissionTag) {
        orientationMissionTag.textContent = currentMission ? currentMission.name : "Python Journey";
    }
}

function renderStandardOptionButtons(question, isTerminalStyle) {
    const prefixes = ["A", "B", "C", "D"];
    const nums = ["1", "2", "3", "4"];
    const isCodeChoice = (question.type === "code-choice");
    answerButtons.forEach(function (button, index) {
        if (!question.options || question.options[index] === undefined) {
            button.style.display = "none";
            return;
        }
        button.style.display = "flex";
        button.disabled = false;

        const badgeHtml = '<span class="ans-badge">' +
            '<span class="keycap-num">[' + nums[index] + ']</span> ' +
            '<span class="keycap-letter">[' + prefixes[index] + ']</span>' +
            '</span>';

        button.innerHTML = badgeHtml + '<span class="ans-text">' + escapeHtml(question.options[index]) + '</span>';
        button.className = isCodeChoice ? "answer-btn code-choice-btn" : (isTerminalStyle ? "answer-btn term-output-btn" : "answer-btn");
    });
}

function renderMCQChallenge(question) {
    if (challengeTypeBadge) {
        challengeTypeBadge.textContent = question.isBoss ? "👑 CHAPTER FINALE" : "🎯 MULTIPLE CHOICE";
        challengeTypeBadge.className = question.isBoss ? "challenge-type-badge type-boss" : "challenge-type-badge type-mcq";
    }
    if (codeSnippetBox) {
        if (question.code) {
            codeSnippetBox.style.display = "block";
            const codeEl = document.getElementById("code-snippet-text");
            if (codeEl) codeEl.textContent = question.code;
        } else {
            codeSnippetBox.style.display = "none";
        }
    }
    if (outputChallengeContainer) outputChallengeContainer.style.display = "none";
    if (debugChallengeContainer) debugChallengeContainer.style.display = "none";
    if (codeBuilderContainer) codeBuilderContainer.style.display = "none";

    const answersGrid = document.querySelector(".answers-grid");
    if (answersGrid) {
        answersGrid.style.display = "grid";
        answersGrid.className = "answers-grid mode-mcq";
    }
    renderStandardOptionButtons(question, false);
}

function renderOutputChallenge(question) {
    if (challengeTypeBadge) {
        challengeTypeBadge.textContent = "⚡ PREDICT OUTPUT";
        challengeTypeBadge.className = "challenge-type-badge type-output";
    }
    if (codeSnippetBox) codeSnippetBox.style.display = "none";
    if (debugChallengeContainer) debugChallengeContainer.style.display = "none";
    if (codeBuilderContainer) codeBuilderContainer.style.display = "none";

    if (outputChallengeContainer) {
        outputChallengeContainer.style.display = "block";
        if (outputTerminalCode) outputTerminalCode.textContent = question.code || "";
        if (outputPromptText) outputPromptText.textContent = "Predict what will be printed to the console:";
    }

    const answersGrid = document.querySelector(".answers-grid");
    if (answersGrid) {
        answersGrid.style.display = "grid";
        answersGrid.className = "answers-grid mode-output";
    }
    renderStandardOptionButtons(question, true);
}

function renderDebugChallenge(question) {
    if (challengeTypeBadge) {
        challengeTypeBadge.textContent = "🔍 BUG HUNT / FIX CODE";
        challengeTypeBadge.className = "challenge-type-badge type-bug";
    }
    if (codeSnippetBox) codeSnippetBox.style.display = "none";
    if (outputChallengeContainer) outputChallengeContainer.style.display = "none";
    if (codeBuilderContainer) codeBuilderContainer.style.display = "none";

    if (debugChallengeContainer) {
        debugChallengeContainer.style.display = "block";
        if (debugCodeText) debugCodeText.textContent = question.code || "";
    }

    const answersGrid = document.querySelector(".answers-grid");
    if (answersGrid) {
        answersGrid.style.display = "grid";
        answersGrid.className = "answers-grid mode-debug";
    }
    renderStandardOptionButtons(question, false);
}

function renderCodeBuilderChallenge(question) {
    if (challengeTypeBadge) {
        challengeTypeBadge.textContent = "🧩 CODE BUILDER";
        challengeTypeBadge.className = "challenge-type-badge type-code-choice";
    }
    if (codeSnippetBox) codeSnippetBox.style.display = "none";
    if (outputChallengeContainer) outputChallengeContainer.style.display = "none";
    if (debugChallengeContainer) debugChallengeContainer.style.display = "none";

    const answersGrid = document.querySelector(".answers-grid");
    if (answersGrid) answersGrid.style.display = "none";

    if (codeBuilderContainer) {
        codeBuilderContainer.style.display = "block";
        initCodeBuilder(question);
    }
}

function loadQuestion(forceNew) {
    if (forceNew === undefined) forceNew = true;
    const build = BUILDS[currentBuildIndex];

    if (forceNew || !currentQuestion) {
        currentQuestion = getNextUnseenQuestion(currentBuildIndex);
    }
    const question = currentQuestion;

    // Header level indicator & build progress (strictly tracking successful correct answers)
    levelIndicator.textContent = build.topicName;
    levelIndicator.className = "level-indicator level-" + build.levelNumber;
    if (questionProgress) {
        questionProgress.textContent = "BUILD PROGRESS: " + successfulCorrectAnswers + " / 10";
    }

    // PHASE 4: Question number badge communicates next target piece
    const nextPiece = Math.min(10, successfulCorrectAnswers + 1);
    questionNumber.textContent = "🎯 PIECE " + nextPiece + " OF 10";
    difficultyBadge.textContent = question.difficulty || "VERY EASY";
    // Mission Tracker Update
    updateMissionTracker();

    // Update orientation strip: WHERE AM I? WHAT AM I LEARNING?
    updateOrientationBar();

    // Revenge Challenge Banner Presentation (Beginner-friendly in early chapters)
    if (revengeBanner) {
        if (question.isRevenge) {
            const titleEl = revengeBanner.querySelector(".revenge-title");
            if (currentBuildIndex === 0) {
                if (titleEl) titleEl.textContent = "💡 PRACTICE & TRY AGAIN";
                if (revengeSubtitle) {
                    revengeSubtitle.textContent = "Let's practice " + (question.concept || "this concept") + " with a fresh challenge!";
                }
            } else {
                if (titleEl) titleEl.textContent = "⚔️ REVENGE CHALLENGE";
                if (revengeSubtitle) {
                    revengeSubtitle.textContent = "Conquer " + (question.concept || "this concept") + " with a fresh challenge!";
                }
            }
            revengeBanner.style.display = "flex";
        } else {
            revengeBanner.style.display = "none";
        }
    }

    // Boss Challenge Presentation
    if (question.isBoss) {
        if (questionCard) questionCard.classList.add("boss-card-active");
        if (challengeTypeBadge) {
            challengeTypeBadge.textContent = "👑 BOSS CHALLENGE";
            challengeTypeBadge.className = "challenge-type-badge type-boss";
        }
        if (difficultyBadge) {
            difficultyBadge.textContent = "BOSS";
            difficultyBadge.className = "difficulty-badge badge-boss";
        }
        AudioManager.playSound("bossStart");
    } else {
        if (questionCard) questionCard.classList.remove("boss-card-active");
        if (difficultyBadge) {
            difficultyBadge.textContent = question.difficulty || "EASY";
            difficultyBadge.className = (question.difficulty === "VERY EASY" || question.difficulty === "EASY")
                ? "difficulty-badge badge-easy"
                : "difficulty-badge badge-medium";
        }
    }

    // Subtle question entrance animation
    if (questionCard) {
        questionCard.classList.remove("question-card-enter");
        void questionCard.offsetWidth;
        questionCard.classList.add("question-card-enter");
    }

    // Question text
    questionText.textContent = question.question;

    // Dispatch to dedicated challenge renderer (Pure MCQ)
    renderMCQChallenge(question);

    // Reset hint state for current question
    hintUsedForCurrentQuestion = false;
    hintBox.textContent = "";
    hintBox.style.display = "none";
    updateHintDisplay();

    // Reset result box (V11-B Learning Depth)
    resultBox.style.display = "none";
    resultBox.className = "result-box";
    resultStreakTag.style.display = "none";
    resultCorrectAnswer.style.display = "none";
    if (resultConceptBar) resultConceptBar.style.display = "none";
    if (resultWrongChoiceNote) resultWrongChoiceNote.style.display = "none";
    if (resultTakeawayBox) resultTakeawayBox.style.display = "none";
    if (resultLearnMoreWrap) resultLearnMoreWrap.style.display = "none";
    if (resultLearnMoreDrawer) resultLearnMoreDrawer.style.display = "none";
    if (resultLearnMoreToggle) resultLearnMoreToggle.setAttribute("aria-expanded", "false");
    if (learnMoreChevron) learnMoreChevron.textContent = "▾";
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
    const question = currentQuestion;
    const isCorrect = (selectedIndex === question.correct);
    const qType = question.type || "mcq";

    questionAttempts++;
    sessionQuestionsAnswered++;
    if (sessionQuestionsAnswered === 5) {
        DailyStreakManager.recordActivity();
    }

    const resultLifeTag = document.getElementById("result-life-tag");
    const resultPieceTag = document.getElementById("result-piece-tag");

    totalQuestionsAttempted++;
    attemptsByType[qType] = (attemptsByType[qType] || 0) + 1;
    levelAttemptsByType[qType] = (levelAttemptsByType[qType] || 0) + 1;
    if (qType === "output") outputAttempts++;
    else if (qType === "bug") bugAttempts++;

    if (isCorrect) {
        // Track challenge types and correct answers
        totalCorrectAnswers++;
        correctByType[qType] = (correctByType[qType] || 0) + 1;
        levelCorrectByType[qType] = (levelCorrectByType[qType] || 0) + 1;
        if (qType === "output") outputCorrect++;
        else if (qType === "bug") bugCorrect++;

        // Exactly 1 successful correct answer incremented toward 10 required
        successfulCorrectAnswers++;
        currentQuestionIndex = successfulCorrectAnswers; // Synced for compatibility

        // Correct answer: +10 XP, +1 streak, build exactly 1 piece
        totalXp = totalXp + 10;
        scoreDisplay.textContent = "⭐ " + totalXp + " XP";

        showFloatingXp(answerButtons[selectedIndex], "+10 XP");
        AudioManager.playSound("correct");

        streak = streak + 1;
        if (streak > bestStreak) {
            bestStreak = streak;
        }
        streakDisplay.textContent = "🔥 " + streak;

        if (lives === 1 && reachedOneLifeInLevel) {
            postOneLifeConsecutiveCorrect++;
        }

        // Animate streak counter
        const streakStat = document.querySelector(".stat-streak") || (streakDisplay ? streakDisplay.parentElement : null);
        if (streakStat) {
            streakStat.classList.remove("streak-pop");
            void streakStat.offsetWidth;
            streakStat.classList.add("streak-pop");
        }

        checkStreakMilestone(streak);

        // Update physical build piece
        buildPieces[currentBuildIndex] = successfulCorrectAnswers;
        updateBuilding(successfulCorrectAnswers - 1);
        AudioManager.playSound("build");

        // City Builder construction hook
        if (window.CityEngine && window.CityEngine.onCorrectChallengeAnswer) {
            window.CityEngine.onCorrectChallengeAnswer();
        }
        if (window.CityEngine && window.CityEngine.updateHUD) {
            window.CityEngine.updateHUD();
        }

        answerButtons[selectedIndex].classList.add("btn-correct", "btn-pop");
        checkAchievements("answer");

        // Record concept mastery
        if (question.concept) {
            ConceptMasteryManager.recordAttempt(question.concept, true);
        }

        // Check Code Builder achievement
        if (qType === "code-builder") {
            checkAchievements("code_builder_success");
        }

        // Check Boss Defeat
        if (question.isBoss) {
            checkAchievements("boss_defeat");
            AudioManager.playSound("bossVictory");
            showToast("achievement", "👑 BOSS DEFEATED!", "Boss Conquered!", "You mastered the combined concepts of " + build.name + "!", "👑");
        }

        // Populate Result Box
        resultBox.className = "result-box result-correct";
        resultStatus.textContent = "✅ CORRECT ANSWER!";
        resultXpTag.textContent = "+10 XP";
        resultXpTag.className = "result-pill xp-pill xp-earned";

        if (resultLifeTag) {
            resultLifeTag.style.display = "none";
        }

        if (resultPieceTag) {
            const pieceIdx = Math.min(9, successfulCorrectAnswers - 1);
            const pInfo = (build.pieceDetails && build.pieceDetails[pieceIdx]) ? build.pieceDetails[pieceIdx] : null;
            if (pInfo) {
                resultPieceTag.textContent = "🧱 Built: " + pInfo.name + " (" + pInfo.desc + ")";
            } else {
                resultPieceTag.textContent = "🧱 Piece Added to Build!";
            }
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
        if (resultWrongChoiceNote) resultWrongChoiceNote.style.display = "none";

        // V11-B Learning Depth: Concept label
        if (resultConceptBar && question.concept) {
            resultConceptText.textContent = question.concept;
            resultConceptBar.style.display = "inline-flex";
        } else if (resultConceptBar) {
            resultConceptBar.style.display = "none";
        }

        if (resultExplanationHeading) {
            resultExplanationHeading.textContent = "WHY IT WORKS";
        }
        resultExplanation.textContent = question.explanation;

        // V11-B Learning Depth: Practical Takeaway
        if (resultTakeawayBox && question.takeaway) {
            resultTakeawayText.textContent = question.takeaway;
            resultTakeawayBox.style.display = "flex";
        } else if (resultTakeawayBox) {
            resultTakeawayBox.style.display = "none";
        }

        // V11-B Learning Depth: Optional Learn More
        if (resultLearnMoreWrap && question.learnMore) {
            resultLearnMoreText.textContent = question.learnMore;
            resultLearnMoreDrawer.style.display = "none";
            if (resultLearnMoreToggle) resultLearnMoreToggle.setAttribute("aria-expanded", "false");
            if (learnMoreChevron) learnMoreChevron.textContent = "▾";
            resultLearnMoreWrap.style.display = "block";
        } else if (resultLearnMoreWrap) {
            resultLearnMoreWrap.style.display = "none";
        }

        if (successfulCorrectAnswers === 10) {
            continueButton.textContent = "COMPLETE LEVEL " + build.levelNumber + " ➔";
        } else {
            continueButton.textContent = "CONTINUE ➔";
        }

    } else {
        // Wrong answer: -1 life on current level, reset streak, build NOTHING, 0 XP
        // Question attempt is discarded; successfulCorrectAnswers DOES NOT INCREASE.
        levelMistakes++;
        flawlessRunBroken = true;

        // V11-B Learning Depth: Specific distractor flaw reasoning
        let userFlawReason = null;
        if (question.optionNotes && question.optionNotes[selectedIndex]) {
            userFlawReason = question.optionNotes[selectedIndex];
        } else if (qType === "bug") {
            userFlawReason = "That choice does not fix the bug or creates an invalid statement.";
        } else if (qType === "code-choice") {
            userFlawReason = "That syntax is invalid or behaves differently in Python.";
        }

        // Store mistake details for learning review mode (V11-B enriched)
        runMistakes.push({
            levelIndex: currentBuildIndex,
            levelNumber: build.levelNumber,
            levelName: build.name,
            questionText: question.question,
            code: question.code || null,
            type: qType,
            concept: question.concept || "Python Fundamentals",
            userAnswer: question.options[selectedIndex],
            userAnswerFlaw: userFlawReason,
            correctAnswer: question.options[question.correct],
            explanation: question.explanation,
            takeaway: question.takeaway || "",
            learnMore: question.learnMore || ""
        });

        // Record concept mastery & queue revenge challenge
        if (question.concept) {
            ConceptMasteryManager.recordAttempt(question.concept, false);
            pendingRevengeConcept = question.concept;
            if (window.CityEngine && window.CityEngine.onMistake) {
                window.CityEngine.onMistake(question.concept);
            }
        }

        lives = Math.max(0, lives - 1);
        minLivesInLevel = Math.min(minLivesInLevel, lives);
        if (lives === 1) {
            reachedOneLifeInLevel = true;
            postOneLifeConsecutiveCorrect = 0;
        } else {
            postOneLifeConsecutiveCorrect = 0;
        }
        streak = 0;
        if (successfulCorrectAnswers >= 5) {
            levelFinal5Correct = false;
        }
        if (successfulCorrectAnswers >= 7) {
            levelFinal3Correct = false;
        }
        streakDisplay.textContent = "🔥 0";
        updateLivesDisplay();

        AudioManager.playSound("wrong");

        // Selected button shake and lives feedback
        answerButtons[selectedIndex].classList.add("btn-wrong", "is-wrong-shake");
        answerButtons[question.correct].classList.add("btn-correct");

        const livesStat = document.querySelector(".stat-lives") || (livesDisplay ? livesDisplay.parentElement : null);
        if (livesStat) {
            livesStat.classList.remove("lives-hit");
            void livesStat.offsetWidth;
            livesStat.classList.add("lives-hit");
        }

        // Populate Result Box
        resultBox.className = "result-box result-wrong";
        if (question.isBoss) {
            resultStatus.textContent = "❌ BOSS NOT DEFEATED";
        } else {
            resultStatus.textContent = "❌ INCORRECT";
        }
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

        // V11-B Learning Depth: Concept label for wrong answer
        if (resultConceptBar && question.concept) {
            resultConceptText.textContent = question.concept;
            resultConceptBar.style.display = "inline-flex";
        } else if (resultConceptBar) {
            resultConceptBar.style.display = "none";
        }

        // V11-B Learning Depth: Explain why the player's selected answer was wrong
        if (resultWrongChoiceNote && userFlawReason) {
            resultWrongChoiceText.textContent = userFlawReason;
            resultWrongChoiceNote.style.display = "flex";
        } else if (resultWrongChoiceNote) {
            resultWrongChoiceNote.style.display = "none";
        }

        if (resultExplanationHeading) {
            resultExplanationHeading.textContent = (question.type === "bug") ? "THE BUG & FIX" : "WHY THE CORRECT ANSWER WORKS";
        }
        resultExplanation.textContent = question.explanation;

        // V11-B Learning Depth: Practical Takeaway
        if (resultTakeawayBox && question.takeaway) {
            resultTakeawayText.textContent = question.takeaway;
            resultTakeawayBox.style.display = "flex";
        } else if (resultTakeawayBox) {
            resultTakeawayBox.style.display = "none";
        }

        // V11-B Learning Depth: Optional Learn More
        if (resultLearnMoreWrap && question.learnMore) {
            resultLearnMoreText.textContent = question.learnMore;
            resultLearnMoreDrawer.style.display = "none";
            if (resultLearnMoreToggle) resultLearnMoreToggle.setAttribute("aria-expanded", "false");
            if (learnMoreChevron) learnMoreChevron.textContent = "▾";
            resultLearnMoreWrap.style.display = "block";
        } else if (resultLearnMoreWrap) {
            resultLearnMoreWrap.style.display = "none";
        }

        // If lives reach 0, update continue button text
        if (lives === 0) {
            continueButton.textContent = "SEE RESULTS 💀";
        } else if (question.isBoss) {
            continueButton.textContent = "TRY NEXT BOSS CHALLENGE ➔";
        } else {
            continueButton.textContent = "CONTINUE ➔";
        }
    }

    resultBox.style.display = "block";
    updateBuildWorldBar();

    // PHASE 8: Answer feedback auto-scroll on small screens
    try {
        if (continueButton && continueButton.getBoundingClientRect) {
            const rect = continueButton.getBoundingClientRect();
            const vpHeight = window.innerHeight || document.documentElement.clientHeight || 800;
            if (rect.bottom > vpHeight - 20) {
                const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                continueButton.scrollIntoView({
                    behavior: prefersReducedMotion ? "auto" : "smooth",
                    block: "nearest"
                });
            }
        }
    } catch (e) {
        // Fallback gracefully
    }
}

// ==================================================
// CONTINUE BUTTON HANDLER (Progression & Replacement)
// ==================================================

continueButton.addEventListener("click", function () {
    AudioManager.playSound("click");
    // If lives hit 0, trigger Level Failed
    if (lives === 0) {
        showLevelFailed();
        return;
    }

    // City challenge progression hook
    if (window.CityEngine && window.CityEngine.activeChallengeBuildingId) {
        const b = window.CityEngine.buildings[window.CityEngine.activeChallengeBuildingId];
        if (b && (b.status === "completed" || b.currentStage >= b.totalStages)) {
            window.CityEngine.closeChallengeModal();
            window.CityEngine.selectBuilding(b.id);
            return;
        } else if (b) {
            window.CityEngine.startBuildingChallenge(b.id);
            return;
        }
    }

    // If 10 successful correct answers achieved, complete level
    if (successfulCorrectAnswers >= 10) {
        completeCurrentLevel();
    } else {
        // Load next unseen question (replacement question if wrong, or next target question if correct)
        loadQuestion(true);
    }
});

// ==================================================
// PHASE 6: LEVEL COMPLETION & VICTORY CELEBRATION
// ==================================================

const ConfettiManager = (function () {
    let canvas = null;
    let ctx = null;
    let particles = [];
    let animationFrameId = null;
    let stopTime = 0;

    function init() {
        if (!canvas) {
            canvas = document.getElementById("confetti-canvas");
            if (canvas) {
                ctx = canvas.getContext("2d");
            }
        }
    }

    function resize() {
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticle(mode) {
        const colors = ["#38bdf8", "#818cf8", "#34d399", "#fbbf24", "#f472b6", "#a78bfa", "#60a5fa"];
        const x = Math.random() * (canvas ? canvas.width : window.innerWidth);
        const y = mode === "grand" ? Math.random() * -120 : -20;
        const size = (Math.random() * 8) + 6;
        const speedY = (Math.random() * 3) + 2.5;
        const speedX = (Math.random() - 0.5) * 4;
        const rotation = Math.random() * 360;
        const rotSpeed = (Math.random() - 0.5) * 8;
        const color = colors[Math.floor(Math.random() * colors.length)];
        return {
            x: x,
            y: y,
            size: size,
            speedY: speedY,
            speedX: speedX,
            rotation: rotation,
            rotSpeed: rotSpeed,
            color: color,
            opacity: 1
        };
    }

    function launch(mode) {
        // Respect prefers-reduced-motion
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        init();
        if (!canvas || !ctx) return;

        resize();
        canvas.style.display = "block";

        const count = mode === "grand" ? 90 : 45;
        const duration = mode === "grand" ? 3500 : 2200;
        stopTime = Date.now() + duration;

        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push(createParticle(mode));
        }

        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        function loop() {
            if (!canvas || !ctx) return;
            const now = Date.now();
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const remaining = stopTime - now;
            let activeCount = 0;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.y += p.speedY;
                p.x += p.speedX;
                p.rotation += p.rotSpeed;

                if (remaining < 800) {
                    p.opacity = Math.max(0, remaining / 800);
                }

                if (p.y < canvas.height + 30 && p.opacity > 0) {
                    activeCount++;
                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.rotate((p.rotation * Math.PI) / 180);
                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = p.opacity;
                    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
                    ctx.restore();
                }
            }

            if (now < stopTime && activeCount > 0) {
                animationFrameId = requestAnimationFrame(loop);
            } else {
                stop();
            }
        }

        animationFrameId = requestAnimationFrame(loop);
    }

    function stop() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
        particles = [];
        if (canvas) {
            if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.style.display = "none";
        }
    }

    return {
        launch: launch,
        stop: stop
    };
})();

// ==================================================
// LEVEL COMPLETION (Checkpoint Reached)
// ==================================================

function completeCurrentLevel() {
    const build = BUILDS[currentBuildIndex];

    // Mark current level as completed checkpoint
    completedLevels[currentBuildIndex] = true;

    // Save checkpoint XP permanently
    checkpointXp = Math.max(totalXp, (currentBuildIndex + 1) * 100);
    totalXp = checkpointXp;

    const levelScore = Math.max(0, 10 - levelMistakes);
    levelCorrectHistory[currentBuildIndex] = levelScore;

    // Check if level was completed with 0 mistakes and 3 lives -> Perfect Level
    const isPerfect = (levelMistakes === 0 && lives === 3);
    const noHint = !levelUsedHint;
    if (isPerfect && noHint && lives === 3) {
        flawlessLevels.add(currentBuildIndex);
    }
    if (noHint && levelScore > bestNoHintLevelScore) {
        bestNoHintLevelScore = levelScore;
    }
    if (perfectLevelBanner) {
        perfectLevelBanner.style.display = isPerfect ? "inline-block" : "none";
    }

    // Save completed level stats for V9 detailed reports & world run tracking
    const levelAccuracy = questionAttempts > 0 ? Math.round((10 / questionAttempts) * 100) : 100;
    completedLevelStats[currentBuildIndex] = {
        levelIndex: currentBuildIndex,
        levelNumber: build.levelNumber,
        name: build.name,
        successfulCorrectAnswers: 10,
        questionAttempts: questionAttempts,
        wrongAttempts: levelMistakes,
        accuracy: levelAccuracy,
        xpEarned: 100,
        piecesBuilt: 10,
        livesLost: 3 - lives,
        remainingLives: lives,
        hintsUsed: levelUsedHint ? 1 : 0,
        bestStreak: bestStreak,
        attemptsByType: Object.assign({}, levelAttemptsByType),
        correctByType: Object.assign({}, levelCorrectByType)
    };

    AudioManager.playSound("levelCompleted");
    showToast("", "CHECKPOINT CREATED", "✓ CHECKPOINT CREATED", "Level " + build.levelNumber + " Complete! Checkpoint secured.", "💾");

    // Daily streak records activity on level completion
    DailyStreakManager.recordActivity();

    // Check level complete achievements
    checkAchievements("level_complete", {
        buildIndex: currentBuildIndex,
        levelCorrect: levelScore,
        isPerfect: isPerfect,
        noHint: noHint,
        usedHint: levelUsedHint,
        final5Correct: levelFinal5Correct,
        final3Correct: levelFinal3Correct,
        postOneLifeConsecutiveCorrect: postOneLifeConsecutiveCorrect,
        reachedOneLifeInLevel: reachedOneLifeInLevel
    });

    updateBuildWorldBar();
    saveGameProgress();

    if (currentBuildIndex < BUILDS.length - 1) {
        lastUnlockedBuildIndex = currentBuildIndex + 1;
        // More levels remain -> Show Checkpoint screen
        if (missionBriefingCard) missionBriefingCard.style.display = "none";
        questionCard.style.display = "none";
        levelCompleteCard.style.display = "block";

        const nextBuild = BUILDS[currentBuildIndex + 1];
        const totalPieces = 10;
        const hintsUsed = levelUsedHint ? 1 : 0;
        const livesLost = 3 - lives;

        levelCompleteTitle.textContent = "LEVEL " + build.levelNumber + " COMPLETE!";
        const completeBadge = document.getElementById("build-complete-badge");
        if (completeBadge) {
            completeBadge.textContent = build.icon + " " + build.name.toUpperCase() + " BUILT!";
        }
        levelCompleteMessage.textContent = "Outstanding work! You successfully answered all 10 required questions in Level " + build.levelNumber + " and established a permanent checkpoint!";

        // FEATURE 1: Detailed Level Performance Report
        buildCompleteStats.innerHTML =
            '<div class="report-section-title">📈 LEVEL ' + build.levelNumber + ' PERFORMANCE REPORT</div>' +
            '<div class="stat-card-row report-stats-grid">' +
            '<div class="mini-stat-card"><span class="m-label">LEVEL ACCURACY</span><span class="m-val highlight">' + levelAccuracy + '%</span></div>' +
            '<div class="mini-stat-card"><span class="m-label">CORRECT ANSWERS</span><span class="m-val">🎯 10 / 10</span></div>' +
            '<div class="mini-stat-card"><span class="m-label">TOTAL ATTEMPTS</span><span class="m-val">' + questionAttempts + '</span></div>' +
            '<div class="mini-stat-card"><span class="m-label">WRONG ATTEMPTS</span><span class="m-val">' + levelMistakes + '</span></div>' +
            '<div class="mini-stat-card"><span class="m-label">LIVES PRESERVED</span><span class="m-val">❤️ ' + lives + ' / 3</span></div>' +
            '<div class="mini-stat-card"><span class="m-label">LIVES LOST</span><span class="m-val">💔 ' + livesLost + '</span></div>' +
            '<div class="mini-stat-card"><span class="m-label">HINTS USED</span><span class="m-val">💡 ' + hintsUsed + ' / 1</span></div>' +
            '<div class="mini-stat-card"><span class="m-label">BEST STREAK</span><span class="m-val">🔥 ' + bestStreak + '</span></div>' +
            '<div class="mini-stat-card"><span class="m-label">PIECES BUILT</span><span class="m-val">🧱 10 / ' + totalPieces + '</span></div>' +
            '<div class="mini-stat-card"><span class="m-label">CHECKPOINT XP</span><span class="m-val">⭐ ' + totalXp + ' XP</span></div>' +
            '</div>';

        // Challenge-type breakdown for this completed level
        const types = ["mcq", "output", "code-choice", "bug"];
        const typeNames = {
            mcq: "🎯 MCQ",
            output: "⚡ OUTPUT",
            "code-choice": "💻 CODE-CHOICE",
            bug: "🔍 BUG"
        };

        let chalHtml = '<div class="report-section-title">📊 CHALLENGE TYPE PERFORMANCE</div><div class="challenge-breakdown-grid">';
        types.forEach(function (type) {
            const att = levelAttemptsByType[type] || 0;
            const corr = levelCorrectByType[type] || 0;
            const pct = att > 0 ? Math.round((corr / att) * 100) : 0;
            chalHtml +=
                '<div class="challenge-stat-card">' +
                '<span class="c-stat-type">' + typeNames[type] + '</span>' +
                '<div class="c-stat-progress">Correct: <strong>' + corr + ' / ' + att + '</strong></div>' +
                '<div class="c-stat-pct">' + pct + '%</div>' +
                '</div>';
        });
        chalHtml += '</div>';

        if (levelChallengeStats) {
            levelChallengeStats.innerHTML = chalHtml;
        }

        // Update Level Mistakes Badge count
        if (levelMistakesBadge) {
            const thisLevelMistakes = runMistakes.filter(function (m) {
                return m.levelIndex === currentBuildIndex;
            }).length;
            levelMistakesBadge.textContent = thisLevelMistakes;
        }

        buildUnlockBanner.innerHTML =
            '<div class="next-level-preview-box">' +
            '<span class="next-level-tag">NEXT LEVEL</span>' +
            '<div class="next-level-title">' + nextBuild.icon + ' Level ' + nextBuild.levelNumber + ': ' + nextBuild.name + '</div>' +
            '<div class="next-level-desc">' + (nextBuild.description || "") + '</div>' +
            '<div class="next-level-perks">❤️ 3 Fresh Lives • 💡 1 Fresh Hint</div>' +
            '</div>';

        nextLevelButton.textContent = "CONTINUE TO LEVEL " + nextBuild.levelNumber + " (" + nextBuild.name.toUpperCase() + ") ➔";
        ConfettiManager.launch("level");
    } else {
        // Final level complete (All levels conquered!) -> Final Victory Screen
        showGameComplete();
    }
}

nextLevelButton.addEventListener("click", function () {
    AudioManager.playSound("click");
    levelCompleteCard.style.display = "none";

    // Advance to next level
    currentBuildIndex = currentBuildIndex + 1;
    successfulCorrectAnswers = 0;
    currentQuestionIndex = 0;
    currentQuestion = null;
    seenQuestionIds.clear();
    questionAttempts = 0;
    levelMistakes = 0;

    // Reset level challenge stats for new level
    Object.keys(levelAttemptsByType).forEach(function (k) { levelAttemptsByType[k] = 0; });
    Object.keys(levelCorrectByType).forEach(function (k) { levelCorrectByType[k] = 0; });

    // Unlock celebration
    const nextBuild = BUILDS[currentBuildIndex];
    AudioManager.playSound("levelUnlocked");
    showToast("achievement", "NEW BUILD UNLOCKED", nextBuild.icon + " NEW BUILD UNLOCKED! " + nextBuild.name.toUpperCase(), nextBuild.description, "🔓");
    lastUnlockedBuildIndex = currentBuildIndex;

    // Each new level gets fresh 3 lives & fresh 1 hint!
    lives = 3;
    hintsRemaining = 1;
    hintUsedForCurrentQuestion = false;
    isAnswerLocked = false;
    streak = 0;
    minLivesInLevel = 3;
    reachedOneLifeInLevel = false;
    levelUsedHint = false;
    levelFinal5Correct = true;
    levelFinal3Correct = true;
    postOneLifeConsecutiveCorrect = 0;

    updateLivesDisplay();
    updateHintDisplay();
    switchScene(currentBuildIndex);
    updateBuildWorldBar();
    loadQuestion(true);

    // Transition to World Map progression screen
    gameScreen.style.display = "none";
    worldMapScreen.style.display = "block";
    renderWorldMap();
});

// ==================================================
// LEVEL FAILED SCREEN (Restarts ONLY the Current Level)
// ==================================================

function showLevelFailed() {
    AudioManager.playSound("gameOver");
    if (missionBriefingCard) missionBriefingCard.style.display = "none";
    questionCard.style.display = "none";
    levelCompleteCard.style.display = "none";
    gameCompleteCard.style.display = "none";
    gameOverCard.style.display = "block";
    tryAgainButton.style.display = "inline-block";
    hintButton.disabled = true;

    const build = BUILDS[currentBuildIndex];
    const totalPieces = 10;
    const gameOverTitle = document.getElementById("game-over-title");
    if (gameOverTitle) {
        gameOverTitle.textContent = "💀 LEVEL " + build.levelNumber + " FAILED";
    }

    gameOverMessage.textContent = "You ran out of lives on Level " + build.levelNumber + " (" + build.name + ").";

    gameOverStats.innerHTML =
        '<div class="stat-card-row">' +
        '<div class="mini-stat-card"><span class="m-label">BUILD PROGRESS</span><span class="m-val">🧱 ' + successfulCorrectAnswers + ' / 10 Built</span></div>' +
        '<div class="mini-stat-card"><span class="m-label">PIECES BUILT</span><span class="m-val">🧱 ' + buildPieces[currentBuildIndex] + ' / ' + totalPieces + '</span></div>' +
        '<div class="mini-stat-card"><span class="m-label">SAVED CHECKPOINT XP</span><span class="m-val">⭐ ' + checkpointXp + ' XP</span></div>' +
        '</div>' +
        '<p class="checkpoint-preserve-note">💾 <strong>Checkpoints are preserved!</strong> Previous completed levels remain saved. Only Level ' + build.levelNumber + ' will restart with 3 fresh lives and 1 hint.</p>';

    tryAgainButton.textContent = "TRY LEVEL " + build.levelNumber + " AGAIN ↺";
}

// When TRY AGAIN is clicked on a failed level:
tryAgainButton.addEventListener("click", function () {
    AudioManager.playSound("click");
    if (window.CityEngine && window.CityEngine.activeChallengeBuildingId) {
        lives = 3;
        updateLivesDisplay();
        gameOverCard.style.display = "none";
        questionCard.style.display = "block";
        window.CityEngine.startBuildingChallenge(window.CityEngine.activeChallengeBuildingId);
        return;
    }
    resetLevelForRetry(currentBuildIndex);
});

// ==================================================
// V9 RUN GRADE CALCULATION (Transparent Criteria)
// ==================================================

function calculateRunGrade(accuracy, hintsUsed, livesLost) {
    if (accuracy >= 95 && hintsUsed === 0 && livesLost === 0) {
        return {
            grade: "S",
            title: "S-RANK MASTER",
            desc: "Flawless World Conquered: 95%+ Accuracy, 0 Hints Used, 0 Lives Lost"
        };
    } else if (accuracy >= 90) {
        return {
            grade: "A",
            title: "A-RANK EXPERT",
            desc: "Exceptional Execution: 90%+ Overall World Accuracy"
        };
    } else if (accuracy >= 75) {
        return {
            grade: "B",
            title: "B-RANK BUILDER",
            desc: "Proficient Problem Solving: 75%+ Overall World Accuracy"
        };
    } else {
        return {
            grade: "C",
            title: "C-RANK APPRENTICE",
            desc: "Full World Completed with Perseverance (Under 75% Accuracy)"
        };
    }
}

// ==================================================
// FINAL GAME COMPLETE (All Levels Conquered)
// ==================================================

function showGameComplete() {
    AudioManager.playSound("finalWorldCompleted");
    if (missionBriefingCard) missionBriefingCard.style.display = "none";
    questionCard.style.display = "none";
    levelCompleteCard.style.display = "none";
    gameOverCard.style.display = "none";
    gameCompleteCard.style.display = "block";
    hintButton.disabled = true;

    // Check full world achievement
    checkAchievements("game_complete");

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
        completeSubtitle.textContent = "ALL " + BUILDS.length + " LEVELS COMPLETED";
    }

    // PHASE 6: Stronger grand celebration confetti for all levels completed
    ConfettiManager.launch("grand");

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

    const maxPossibleXp = BUILDS.length * 10 * 10; // Exactly 10 questions per level * 10 XP = 300 XP
    const totalPiecesBuilt = buildPieces.reduce(function (sum, count) {
        return sum + count;
    }, 0);
    const maxPossiblePieces = BUILDS.length * 10; // Exactly 10 pieces per level = 30 pieces
    const completedCount = completedLevels.filter(Boolean).length;

    // Calculate aggregated run totals across completed levels
    let runTotalAttempts = 0;
    let runWrongAttempts = 0;
    let runHintsUsed = 0;
    let runLivesLost = 0;
    const runTypeAttempts = { mcq: 0, output: 0, "code-choice": 0, bug: 0 };
    const runTypeCorrect = { mcq: 0, output: 0, "code-choice": 0, bug: 0 };

    completedLevelStats.forEach(function (stat) {
        if (!stat) return;
        runTotalAttempts += stat.questionAttempts;
        runWrongAttempts += stat.wrongAttempts;
        runHintsUsed += stat.hintsUsed;
        runLivesLost += stat.livesLost;
        ["mcq", "output", "code-choice", "bug"].forEach(function (type) {
            runTypeAttempts[type] += (stat.attemptsByType[type] || 0);
            runTypeCorrect[type] += (stat.correctByType[type] || 0);
        });
    });

    if (runTotalAttempts === 0) {
        runTotalAttempts = 30 + levelMistakes;
        runWrongAttempts = levelMistakes;
        runLivesLost = 3 - lives;
        runHintsUsed = levelUsedHint ? 1 : 0;
    }

    const runSuccessfulAnswers = 30; // 3 levels * 10 successful answers
    const runAccuracy = runTotalAttempts > 0 ? Math.round((runSuccessfulAnswers / runTotalAttempts) * 100) : 100;

    // EVOLUTION: Populate 4 Learning Quadrants
    if (quadWellContent && quadStruggledContent && quadLearnedContent && quadNextContent) {
        const topConcepts = [];
        const weakConcepts = [];

        CORE_CONCEPTS.forEach(function (c) {
            const item = ConceptMasteryManager.data[c];
            if (item && item.attempts > 0) {
                const acc = item.correct / item.attempts;
                if (acc >= 0.75) {
                    topConcepts.push(c + " (" + Math.round(acc * 100) + "%)");
                } else if (acc < 0.6) {
                    weakConcepts.push(c + " (" + Math.round(acc * 100) + "%)");
                }
            }
        });

        quadWellContent.innerHTML =
            '<ul>' +
            '<li><strong>Highest World Streak:</strong> ' + bestStreak + ' consecutive answers</li>' +
            '<li><strong>Overall Accuracy:</strong> ' + runAccuracy + '% across all 30 challenges</li>' +
            '<li><strong>Strong Domains:</strong> ' + (topConcepts.length > 0 ? topConcepts.slice(0, 3).join(", ") : "Fundamentals, Variables") + '</li>' +
            '</ul>';

        quadStruggledContent.innerHTML =
            '<ul>' +
            '<li><strong>Mistakes Logged:</strong> ' + runMistakes.length + ' questions missed in total</li>' +
            '<li><strong>Focus Areas:</strong> ' + (weakConcepts.length > 0 ? weakConcepts.join(", ") : "None! Flawless conceptual mastery") + '</li>' +
            '<li><strong>Hints Used:</strong> ' + runHintsUsed + ' / 3 available</li>' +
            '</ul>';

        quadLearnedContent.innerHTML =
            '<ul>' +
            '<li><strong>House:</strong> Syntax, Variables, Data Types & Print output</li>' +
            '<li><strong>Rocket:</strong> Slicing, Operators, Loops & Functions</li>' +
            '<li><strong>Robot:</strong> Lists, Tuples, Dictionaries & OOP Classes</li>' +
            '</ul>';

        const advice = ConceptMasteryManager.detectWeakest();
        quadNextContent.innerHTML =
            '<p style="margin: 0 0 6px 0;"><strong>' + escapeHtml(advice.tip) + '</strong></p>' +
            '<p style="margin: 0; color: #94a3b8; font-size: 0.78rem;">Take on the Daily Build or replay completed levels from the World Map to reach Mastered tier across all 12 domains!</p>';
    }

    // FEATURE 5: Performance Grade
    const gradeData = calculateRunGrade(runAccuracy, runHintsUsed, runLivesLost);
    if (finalGradeBox) {
        finalGradeBox.innerHTML =
            '<div class="grade-banner grade-' + gradeData.grade.toLowerCase() + '">' +
            '<div class="grade-badge-circle">' + gradeData.grade + '</div>' +
            '<div class="grade-content">' +
            '<span class="grade-badge-title">OVERALL PERFORMANCE GRADE: ' + gradeData.title + '</span>' +
            '<p class="grade-badge-desc">' + gradeData.desc + '</p>' +
            '<div class="grade-criteria-details">' +
            '<span>Accuracy: <strong>' + runAccuracy + '%</strong></span> • ' +
            '<span>Hints Used: <strong>' + runHintsUsed + '</strong></span> • ' +
            '<span>Lives Lost: <strong>' + runLivesLost + '</strong></span>' +
            '</div>' +
            '</div>' +
            '</div>';
    }

    // FEATURE 5: Overall Performance Report
    finalStats.innerHTML =
        '<div class="final-score-banner">' +
        '<span class="score-title">TOTAL XP EARNED</span>' +
        '<span class="score-number">⭐ ' + totalXp + ' / ' + maxPossibleXp + ' XP</span>' +
        '</div>' +
        '<div class="report-section-title">📈 OVERALL RUN PERFORMANCE</div>' +
        '<div class="stat-card-row report-stats-grid">' +
        '<div class="mini-stat-card"><span class="m-label">ACCURACY</span><span class="m-val highlight">' + runAccuracy + '%</span></div>' +
        '<div class="mini-stat-card"><span class="m-label">SUCCESSFUL ANSWERS</span><span class="m-val">🎯 ' + runSuccessfulAnswers + ' / 30</span></div>' +
        '<div class="mini-stat-card"><span class="m-label">TOTAL ATTEMPTS</span><span class="m-val">' + runTotalAttempts + '</span></div>' +
        '<div class="mini-stat-card"><span class="m-label">WRONG ATTEMPTS</span><span class="m-val">' + runWrongAttempts + '</span></div>' +
        '<div class="mini-stat-card"><span class="m-label">HINTS USED</span><span class="m-val">💡 ' + runHintsUsed + '</span></div>' +
        '<div class="mini-stat-card"><span class="m-label">BEST STREAK</span><span class="m-val">🔥 ' + bestStreak + '</span></div>' +
        '<div class="mini-stat-card"><span class="m-label">XP EARNED</span><span class="m-val">⭐ ' + totalXp + ' / ' + maxPossibleXp + '</span></div>' +
        '<div class="mini-stat-card"><span class="m-label">PIECES BUILT</span><span class="m-val">🧱 ' + totalPiecesBuilt + ' / ' + maxPossiblePieces + '</span></div>' +
        '<div class="mini-stat-card"><span class="m-label">LIVES LOST</span><span class="m-val">💔 ' + runLivesLost + '</span></div>' +
        '<div class="mini-stat-card"><span class="m-label">REMAINING LIVES</span><span class="m-val">❤️ ' + lives + ' / 3</span></div>' +
        '</div>';

    // FEATURE 5: Challenge Breakdown
    if (finalChallengeStats) {
        const types = ["mcq", "output", "code-choice", "bug"];
        const typeNames = {
            mcq: "🎯 MCQ",
            output: "⚡ OUTPUT",
            "code-choice": "💻 CODE-CHOICE",
            bug: "🔍 BUG"
        };
        let chalHtml = '<div class="report-section-title">📊 CHALLENGE BREAKDOWN (FULL RUN)</div><div class="challenge-breakdown-grid">';
        types.forEach(function (type) {
            const att = runTypeAttempts[type] || 0;
            const corr = runTypeCorrect[type] || 0;
            const pct = att > 0 ? Math.round((corr / att) * 100) : 0;
            chalHtml +=
                '<div class="challenge-stat-card">' +
                '<span class="c-stat-type">' + typeNames[type] + '</span>' +
                '<div class="c-stat-progress">Correct: <strong>' + corr + ' / ' + att + '</strong></div>' +
                '<div class="c-stat-pct">' + pct + '%</div>' +
                '</div>';
        });
        chalHtml += '</div>';
        finalChallengeStats.innerHTML = chalHtml;
    }

    // FEATURE 3: Personal Records Tracking
    let isNewBestStreak = false;
    let isNewBestAcc = false;
    let isNewMostXp = false;
    let isNewFewestWrong = false;
    let isNewPieces = false;

    if (bestStreak > sessionPersonalRecords.bestStreak) {
        sessionPersonalRecords.bestStreak = bestStreak;
        isNewBestStreak = true;
    }

    let maxLevelAcc = 0;
    completedLevelStats.forEach(function (s) {
        if (s && s.accuracy > maxLevelAcc) maxLevelAcc = s.accuracy;
    });
    if (maxLevelAcc > sessionPersonalRecords.bestLevelAccuracy) {
        sessionPersonalRecords.bestLevelAccuracy = maxLevelAcc;
        isNewBestAcc = true;
    }

    if (totalXp > sessionPersonalRecords.mostXpRun) {
        sessionPersonalRecords.mostXpRun = totalXp;
        isNewMostXp = true;
    }

    if (totalPiecesBuilt > sessionPersonalRecords.mostPiecesRun) {
        sessionPersonalRecords.mostPiecesRun = totalPiecesBuilt;
        isNewPieces = true;
    }

    if (sessionPersonalRecords.fewestWorldWrongAttempts === null || runWrongAttempts < sessionPersonalRecords.fewestWorldWrongAttempts) {
        sessionPersonalRecords.fewestWorldWrongAttempts = runWrongAttempts;
        isNewFewestWrong = true;
    }

    const challengeTypes = ["mcq", "output", "code-choice", "bug"];
    challengeTypes.forEach(function (type) {
        const att = runTypeAttempts[type];
        const corr = runTypeCorrect[type];
        const pct = att > 0 ? Math.round((corr / att) * 100) : 0;
        if (pct > (sessionPersonalRecords.bestChallengeAccuracy[type] || 0)) {
            sessionPersonalRecords.bestChallengeAccuracy[type] = pct;
        }
    });

    if (finalPersonalRecords) {
        finalPersonalRecords.innerHTML =
            '<div class="report-section-title">⭐ PERSONAL RECORDS (CURRENT SESSION)</div>' +
            '<div class="records-grid">' +
            '<div class="record-card">' +
            '<span class="r-label">BEST OVERALL STREAK</span>' +
            '<span class="r-val">🔥 ' + sessionPersonalRecords.bestStreak + '</span>' +
            (isNewBestStreak ? '<span class="record-new-tag">★ NEW RECORD!</span>' : '') +
            '</div>' +
            '<div class="record-card">' +
            '<span class="r-label">BEST LEVEL ACCURACY</span>' +
            '<span class="r-val">🎯 ' + sessionPersonalRecords.bestLevelAccuracy + '%</span>' +
            (isNewBestAcc ? '<span class="record-new-tag">★ NEW RECORD!</span>' : '') +
            '</div>' +
            '<div class="record-card">' +
            '<span class="r-label">MOST XP IN ONE RUN</span>' +
            '<span class="r-val">⭐ ' + sessionPersonalRecords.mostXpRun + ' XP</span>' +
            (isNewMostXp ? '<span class="record-new-tag">★ NEW RECORD!</span>' : '') +
            '</div>' +
            '<div class="record-card">' +
            '<span class="r-label">FEWEST WRONG ATTEMPTS</span>' +
            '<span class="r-val">🛡️ ' + (sessionPersonalRecords.fewestWorldWrongAttempts !== null ? sessionPersonalRecords.fewestWorldWrongAttempts : 0) + '</span>' +
            (isNewFewestWrong ? '<span class="record-new-tag">★ NEW RECORD!</span>' : '') +
            '</div>' +
            '<div class="record-card">' +
            '<span class="r-label">MOST PIECES BUILT</span>' +
            '<span class="r-val">🧱 ' + sessionPersonalRecords.mostPiecesRun + ' / 30</span>' +
            (isNewPieces ? '<span class="record-new-tag">★ NEW RECORD!</span>' : '') +
            '</div>' +
            '</div>';
    }

    // Update Final Mistakes Badge
    if (finalMistakesBadge) {
        finalMistakesBadge.textContent = runMistakes.length;
    }

    // Render achievements showcase in victory screen
    const finalAchShowcase = finalAchievementsShowcase || document.getElementById("final-achievements-showcase");
    if (finalAchShowcase) {
        let showcaseHtml = '<div class="final-achievements-title">🏆 ACHIEVEMENTS UNLOCKED THIS RUN (' + unlockedAchievements.size + ' / ' + ACHIEVEMENTS.length + ')</div><div class="final-ach-pills-row">';
        ACHIEVEMENTS.forEach(function (ach) {
            const isUnlocked = unlockedAchievements.has(ach.id);
            if (isUnlocked) {
                showcaseHtml += '<span class="final-ach-pill unlocked">' + ach.icon + ' ' + escapeHtml(ach.title) + '</span>';
            } else {
                showcaseHtml += '<span class="final-ach-pill">🔒 ???</span>';
            }
        });
        showcaseHtml += '</div>';
        finalAchShowcase.innerHTML = showcaseHtml;
    }

    updateBuildWorldBar();
    saveGameProgress();
}

// Bind Play Again Button for Game Complete Screen
if (playAgainButton) {
    playAgainButton.addEventListener("click", function () {
        AudioManager.playSound("click");
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
    ConfettiManager.stop();
    currentBuildIndex = 0;
    successfulCorrectAnswers = 0;
    currentQuestionIndex = 0;
    currentQuestion = null;
    seenQuestionIds.clear();
    questionAttempts = 0;
    levelMistakes = 0;
    sessionQuestionsAnswered = 0;
    lastUnlockedBuildIndex = -1;

    // Reset V9 level and run stats
    completedLevelStats.length = 0;
    runMistakes.length = 0;
    Object.keys(levelAttemptsByType).forEach(function (k) { levelAttemptsByType[k] = 0; });
    Object.keys(levelCorrectByType).forEach(function (k) { levelCorrectByType[k] = 0; });

    // Reset single-run tracking counters
    minLivesInLevel = 3;
    reachedOneLifeInLevel = false;
    levelUsedHint = false;
    levelFinal5Correct = true;
    levelFinal3Correct = true;
    postOneLifeConsecutiveCorrect = 0;
    flawlessRunBroken = false;
    flawlessLevels.clear();
    levelCorrectHistory.length = 0;

    // Clear cosmetic reward classes from body
    document.body.classList.remove(
        "effect-build-spark",
        "effect-world-glow",
        "effect-architect-build",
        "effect-starter-glow",
        "effect-world-expansion",
        "effect-world-completion",
        "effect-output-pulse",
        "effect-bug-hunter",
        "effect-code-pulse",
        "effect-focus-build",
        "effect-fire-streak",
        "effect-flame-burst",
        "effect-master-flame",
        "effect-perfect-build",
        "effect-golden-build",
        "effect-last-life",
        "effect-clutch-build",
        "effect-comeback-glow",
        "effect-explorer-glow",
        "effect-python-pulse",
        "effect-python-aura",
        "effect-golden-world",
        "effect-survivor",
        "effect-unbreakable",
        "effect-celebration"
    );

    // Re-apply active cosmetic classes for rewards unlocked in this session
    unlockedRewards.forEach(function (rid) {
        if (REWARDS[rid] && REWARDS[rid].cssClass) {
            document.body.classList.add(REWARDS[rid].cssClass);
        }
    });

    buildPieces = new Array(BUILDS.length).fill(0);
    completedLevels = new Array(BUILDS.length).fill(false);
    checkpointXp = 0;
    totalXp = 0;
    streak = 0;
    // Best streak is preserved across new runs / replay
    bestStreak = Math.max(bestStreak, sessionPersonalRecords.bestStreak || 0);
    lives = 3;
    hintsRemaining = 1;                 // Exactly 1 hint
    hintUsedForCurrentQuestion = false;
    isAnswerLocked = false;

    if (perfectLevelBanner) {
        perfectLevelBanner.style.display = "none";
    }

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

    saveGameProgress();
    updateStartScreenUI();

    switchScene(0);
    updateBuildWorldBar();
    loadQuestion(true);
    renderWorldMap();
    DailyStreakManager.updateUI();
    renderAchievementsGrid();
}

// ==================================================
// FEATURE 4: MISSION BRIEFING SYSTEM
// ==================================================

function showMissionBriefing(levelIndex) {
    const build = BUILDS[levelIndex];
    if (!build) return;

    if (questionCard) questionCard.style.display = "none";
    if (levelCompleteCard) levelCompleteCard.style.display = "none";
    if (gameOverCard) gameOverCard.style.display = "none";
    if (gameCompleteCard) gameCompleteCard.style.display = "none";

    const chip = document.getElementById("briefing-level-chip");
    const title = document.getElementById("briefing-title");
    const desc = document.getElementById("briefing-desc");
    const buildVal = document.getElementById("briefing-build");
    const startBtn = document.getElementById("briefing-start-btn");

    if (chip) chip.textContent = "CHAPTER " + build.levelNumber;
    if (title) title.textContent = (build.topicName || build.name).toUpperCase();
    if (desc) desc.textContent = build.description || "Master engineering challenges to complete this build.";
    if (buildVal) buildVal.textContent = build.icon + " " + build.name.toUpperCase();
    if (startBtn) startBtn.textContent = "START CHAPTER " + build.levelNumber + " (" + build.name.toUpperCase() + ") ➔";

    if (missionBriefingCard) {
        missionBriefingCard.style.display = "block";
    }
}

if (briefingStartBtn) {
    briefingStartBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        if (missionBriefingCard) missionBriefingCard.style.display = "none";
        if (questionCard) questionCard.style.display = "block";
        if (!currentQuestion || questionText.textContent === "Loading question...") {
            loadQuestion(true);
        }
    });
}

// ==================================================
// FEATURE 2: MISTAKE REVIEW SYSTEM (Pure Learning Mode)
// ==================================================

function openMistakeReview(scope) {
    if (scope === "all" || scope === undefined) {
        activeReviewMistakes = runMistakes.slice();
    } else {
        activeReviewMistakes = runMistakes.filter(function (m) {
            return m.levelIndex === scope;
        });
    }
    currentReviewIndex = 0;
    renderMistakeReview();
    if (mistakeReviewModal) {
        mistakeReviewModal.style.display = "flex";
    }
}

function closeMistakeReview() {
    if (mistakeReviewModal) {
        mistakeReviewModal.style.display = "none";
    }
}

function renderMistakeReview() {
    if (!reviewContent) return;

    if (activeReviewMistakes.length === 0) {
        if (mistakeCounterText) mistakeCounterText.textContent = "0 of 0";
        reviewContent.innerHTML =
            '<div class="review-empty-state">' +
            '<div class="empty-icon">🌟</div>' +
            '<h4 class="empty-title">NO MISTAKES TO REVIEW</h4>' +
            '<p class="empty-desc">Perfect run! You answered every question correctly without any errors.</p>' +
            '</div>';
        if (prevMistakeBtn) prevMistakeBtn.style.display = "none";
        if (nextMistakeBtn) nextMistakeBtn.style.display = "none";
        return;
    }

    if (prevMistakeBtn) prevMistakeBtn.style.display = "inline-flex";
    if (nextMistakeBtn) nextMistakeBtn.style.display = "inline-flex";

    const mistake = activeReviewMistakes[currentReviewIndex];
    if (mistakeCounterText) {
        mistakeCounterText.textContent = (currentReviewIndex + 1) + " of " + activeReviewMistakes.length;
    }

    if (prevMistakeBtn) prevMistakeBtn.disabled = (currentReviewIndex === 0);
    if (nextMistakeBtn) nextMistakeBtn.disabled = (currentReviewIndex === activeReviewMistakes.length - 1);

    const typeLabels = {
        mcq: "🎯 MCQ",
        output: "⚡ OUTPUT",
        "code-choice": "💻 CODE-CHOICE",
        bug: "🔍 BUG"
    };
    const typeLabel = typeLabels[mistake.type] || (mistake.type ? mistake.type.toUpperCase() : "QUESTION");

    let codeBlockHtml = "";
    if (mistake.code) {
        codeBlockHtml = '<div class="code-snippet-box review-code-box"><div class="code-header"><span class="code-lang">python</span></div><pre><code>' + escapeHtml(mistake.code) + '</code></pre></div>';
    }

    const conceptHtml = mistake.concept
        ? '<span class="review-concept-chip"><span class="review-concept-prefix">CONCEPT</span> <span class="review-concept-name">' + escapeHtml(mistake.concept) + '</span></span>'
        : '';

    const flawHtml = mistake.userAnswerFlaw
        ? '<div class="ans-flaw-note">⚠️ ' + escapeHtml(mistake.userAnswerFlaw) + '</div>'
        : '';

    const takeawayHtml = mistake.takeaway
        ? '<div class="review-takeaway-box"><span class="takeaway-label">🎯 KEY TAKEAWAY</span><p class="review-takeaway-text">' + escapeHtml(mistake.takeaway) + '</p></div>'
        : '';

    const learnMoreHtml = mistake.learnMore
        ? '<div class="review-learn-more-box"><span class="learn-more-label">📖 DEEPER DIVE</span><p class="review-learn-more-text">' + escapeHtml(mistake.learnMore) + '</p></div>'
        : '';

    reviewContent.innerHTML =
        '<div class="review-item-card">' +
        '<div class="review-meta-bar">' +
        '<span class="review-type-chip chip-' + escapeHtml(mistake.type) + '">' + typeLabel + '</span>' +
        conceptHtml +
        '<span class="review-level-chip">LEVEL ' + mistake.levelNumber + ': ' + escapeHtml(mistake.levelName.toUpperCase()) + '</span>' +
        '</div>' +
        '<div class="review-question-text">' + escapeHtml(mistake.questionText) + '</div>' +
        codeBlockHtml +
        '<div class="review-answers-grid">' +
        '<div class="review-answer-box your-answer">' +
        '<span class="ans-label">❌ YOUR ANSWER</span>' +
        '<div class="ans-text">' + escapeHtml(mistake.userAnswer) + '</div>' +
        flawHtml +
        '</div>' +
        '<div class="review-answer-box correct-answer">' +
        '<span class="ans-label">✅ CORRECT ANSWER</span>' +
        '<div class="ans-text">' + escapeHtml(mistake.correctAnswer) + '</div>' +
        '</div>' +
        '</div>' +
        '<div class="review-explanation-box">' +
        '<span class="exp-label">💡 WHY IT IS CORRECT</span>' +
        '<p class="exp-text">' + escapeHtml(mistake.explanation) + '</p>' +
        '</div>' +
        takeawayHtml +
        learnMoreHtml +
        '</div>';
}

if (reviewMistakesLevelBtn) {
    reviewMistakesLevelBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        openMistakeReview(currentBuildIndex);
    });
}

if (reviewMistakesFinalBtn) {
    reviewMistakesFinalBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        openMistakeReview("all");
    });
}

if (resultLearnMoreToggle) {
    resultLearnMoreToggle.addEventListener("click", function () {
        if (!resultLearnMoreDrawer) return;
        const isExpanded = resultLearnMoreToggle.getAttribute("aria-expanded") === "true";
        const nextState = !isExpanded;
        resultLearnMoreToggle.setAttribute("aria-expanded", String(nextState));
        resultLearnMoreDrawer.style.display = nextState ? "block" : "none";
        if (learnMoreChevron) {
            learnMoreChevron.textContent = nextState ? "▴" : "▾";
        }
    });
}

if (closeReviewBtn) {
    closeReviewBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        closeMistakeReview();
    });
}

if (prevMistakeBtn) {
    prevMistakeBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        if (currentReviewIndex > 0) {
            currentReviewIndex--;
            renderMistakeReview();
        }
    });
}

if (nextMistakeBtn) {
    nextMistakeBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        if (currentReviewIndex < activeReviewMistakes.length - 1) {
            currentReviewIndex++;
            renderMistakeReview();
        }
    });
}

if (mistakeReviewModal) {
    mistakeReviewModal.addEventListener("click", function (e) {
        if (e.target === mistakeReviewModal) {
            closeMistakeReview();
        }
    });
}

// ==================================================
// PHASE 1: KEYBOARD CONTROLS & ACCESSIBILITY
// ==================================================

document.addEventListener("keydown", function (e) {
    // Prevent intercepting text typing in inputs
    const activeEl = document.activeElement;
    const activeTag = (activeEl && activeEl.tagName) ? activeEl.tagName.toLowerCase() : "";
    if (activeTag === "input" || activeTag === "textarea" || activeTag === "select" || (activeEl && activeEl.isContentEditable)) {
        return;
    }

    // Mistake Review Navigation (Modal is open)
    if (mistakeReviewModal && mistakeReviewModal.style.display !== "none" && mistakeReviewModal.style.display !== "") {
        if (e.key === "Escape") {
            closeMistakeReview();
            return;
        }
        if (e.key === "ArrowLeft") {
            if (prevMistakeBtn && !prevMistakeBtn.disabled && prevMistakeBtn.style.display !== "none") {
                prevMistakeBtn.click();
            }
            e.preventDefault();
            return;
        }
        if (e.key === "ArrowRight") {
            if (nextMistakeBtn && !nextMistakeBtn.disabled && nextMistakeBtn.style.display !== "none") {
                nextMistakeBtn.click();
            }
            e.preventDefault();
            return;
        }
        return; // Don't trigger gameplay behind the modal
    }

    // New Game Confirmation Modal (Modal is open)
    const ngModal = document.getElementById("new-game-confirm-modal");
    if (ngModal && ngModal.style.display !== "none" && ngModal.style.display !== "") {
        if (e.key === "Escape") {
            closeNewGameModal();
            return;
        }
        return; // Don't trigger actions behind confirm modal
    }

    // Primary Actions (Enter or Space)
    if (e.key === "Enter" || e.key === " " || e.code === "Space") {
        // If an enabled button already has keyboard focus, let native browser activation proceed
        if (activeEl && activeEl.tagName && activeEl.tagName.toLowerCase() === "button" && !activeEl.disabled) {
            return;
        }

        // Contextual Primary Action 1: Game Over Retry
        if (gameOverCard && gameOverCard.style.display !== "none") {
            if (tryAgainButton && tryAgainButton.style.display !== "none" && !tryAgainButton.disabled) {
                e.preventDefault();
                tryAgainButton.click();
                return;
            }
        }

        // Contextual Primary Action 2: Game Complete Play Again
        if (gameCompleteCard && gameCompleteCard.style.display !== "none") {
            if (playAgainButton && playAgainButton.style.display !== "none" && !playAgainButton.disabled) {
                e.preventDefault();
                playAgainButton.click();
                return;
            }
        }

        // Contextual Primary Action 3: Level Complete Continue to Next Level
        if (levelCompleteCard && levelCompleteCard.style.display !== "none") {
            if (nextLevelButton && nextLevelButton.style.display !== "none" && !nextLevelButton.disabled) {
                e.preventDefault();
                nextLevelButton.click();
                return;
            }
        }

        // Contextual Primary Action 4: Mission Briefing Start Level
        if (missionBriefingCard && missionBriefingCard.style.display !== "none") {
            if (briefingStartBtn && briefingStartBtn.style.display !== "none" && !briefingStartBtn.disabled) {
                e.preventDefault();
                briefingStartBtn.click();
                return;
            }
        }

        // Contextual Primary Action 5: Result / Feedback Continue
        if (resultBox && resultBox.style.display !== "none") {
            if (continueButton && continueButton.style.display !== "none" && !continueButton.disabled) {
                e.preventDefault();
                continueButton.click();
                return;
            }
        }

        // Contextual Primary Action 6: Start Screen
        if (startScreen && startScreen.style.display !== "none") {
            if (startButton && !startButton.disabled) {
                e.preventDefault();
                startButton.click();
                return;
            }
        }

        // Contextual Primary Action 7: World Map Screen (enter first active/unlocked node)
        if (worldMapScreen && worldMapScreen.style.display !== "none") {
            const activeNodeBtn = document.querySelector(".map-node-card.active .btn-node-action, .map-node-card.unlocked .btn-node-action");
            if (activeNodeBtn && !activeNodeBtn.disabled) {
                e.preventDefault();
                activeNodeBtn.click();
                return;
            }
        }
    }

    // Hint: H or h
    if (e.key === "h" || e.key === "H") {
        if (gameScreen && gameScreen.style.display !== "none" &&
            questionCard && questionCard.style.display !== "none" &&
            !isAnswerLocked && hintButton && !hintButton.disabled && hintsRemaining > 0) {
            e.preventDefault();
            hintButton.click();
            return;
        }
    }

    // Answer Selection: 1-4 and A-D
    if (gameScreen && gameScreen.style.display !== "none" &&
        questionCard && questionCard.style.display !== "none" &&
        !isAnswerLocked && (!resultBox || resultBox.style.display === "none")) {
        let answerIndex = -1;
        if (e.key === "1") answerIndex = 0;
        else if (e.key === "2") answerIndex = 1;
        else if (e.key === "3") answerIndex = 2;
        else if (e.key === "4") answerIndex = 3;
        else if (e.key === "a" || e.key === "A") answerIndex = 0;
        else if (e.key === "b" || e.key === "B") answerIndex = 1;
        else if (e.key === "c" || e.key === "C") answerIndex = 2;
        else if (e.key === "d" || e.key === "D") answerIndex = 3;

        if (answerIndex >= 0 && answerButtons[answerIndex] && !answerButtons[answerIndex].disabled) {
            e.preventDefault();
            answerButtons[answerIndex].click();
            return;
        }
    }
});

// Bind Answer Buttons
answerButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        handleAnswer(index);
    });
});

// Bind Start Button (CONTINUE BUILDING or START GAME)
startButton.addEventListener("click", function () {
    AudioManager.playSound("click");
    selectLevelFromMap(currentBuildIndex);
});

// Bind Home Navigation Buttons (World Map & Achievements)
if (homeWorldMapBtn) {
    homeWorldMapBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        openWorldMap("title");
    });
}

if (homeAchievementsBtn) {
    homeAchievementsBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        openAchievements("title");
    });
}

// Bind New Game Button & Confirmation Modal
if (newGameButton) {
    newGameButton.addEventListener("click", function () {
        AudioManager.playSound("click");
        openNewGameModal();
    });
}

if (newGameModalClose) {
    newGameModalClose.addEventListener("click", function () {
        AudioManager.playSound("click");
        closeNewGameModal();
    });
}

if (newGameCancelBtn) {
    newGameCancelBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        closeNewGameModal();
    });
}

if (newGameConfirmBtn) {
    newGameConfirmBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        closeNewGameModal();
        resetWorldProgressForNewRun();
    });
}

if (newGameConfirmModal) {
    newGameConfirmModal.addEventListener("click", function (e) {
        if (e.target === newGameConfirmModal) {
            closeNewGameModal();
        }
    });
}

// Bind World Map Actions & Navigation
if (mapBackBtn) {
    mapBackBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        if (worldMapOrigin === "game") {
            worldMapScreen.style.display = "none";
            gameScreen.style.display = "block";
            if (lives === 0) {
                resetLevelForRetry(currentBuildIndex);
            } else if (successfulCorrectAnswers === 0) {
                showMissionBriefing(currentBuildIndex);
            } else {
                if (missionBriefingCard) missionBriefingCard.style.display = "none";
                if (questionCard) questionCard.style.display = "block";
                if (!currentQuestion || !questionText.textContent || questionText.textContent === "Loading question...") {
                    loadQuestion();
                }
            }
        } else {
            worldMapScreen.style.display = "none";
            startScreen.style.display = "block";
        }
    });
}

// Bind Dedicated Achievements Actions & Navigation
if (achievementsBackBtn) {
    achievementsBackBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        if (achievementsOrigin === "city") {
            achievementsScreen.style.display = "none";
            if (window.CityEngine) window.CityEngine.render();
        } else if (achievementsOrigin === "game") {
            achievementsScreen.style.display = "none";
            gameScreen.style.display = "block";
            if (lives === 0) {
                resetLevelForRetry(currentBuildIndex);
            } else if (successfulCorrectAnswers === 0) {
                showMissionBriefing(currentBuildIndex);
            } else {
                if (missionBriefingCard) missionBriefingCard.style.display = "none";
                if (questionCard) questionCard.style.display = "block";
                if (!currentQuestion || !questionText.textContent || questionText.textContent === "Loading question...") {
                    loadQuestion();
                }
            }
        } else {
            achievementsScreen.style.display = "none";
            startScreen.style.display = "block";
        }
    });
}

const achCloseBtn = document.getElementById("achievements-modal-close");
if (achCloseBtn) {
    achCloseBtn.addEventListener("click", function() {
        AudioManager.playSound("click");
        achievementsScreen.style.display = "none";
        if (window.CityEngine) window.CityEngine.render();
    });
}

if (openWorldMapBtn) {
    openWorldMapBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        openWorldMap("game");
    });
}

if (openAchievementsBtn) {
    openAchievementsBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        openAchievements("game");
    });
}

if (buildWorldBar) {
    buildWorldBar.addEventListener("click", function (e) {
        if (e.target && (e.target.id === "open-world-map-btn" || e.target.closest(".open-map-btn"))) {
            return;
        }
        if (e.target.closest(".world-item")) {
            AudioManager.playSound("click");
            openWorldMap("game");
        }
    });
}

// Sound toggle button binding
if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", function () {
        AudioManager.toggle();
    });
}

// Generic audio unlock gesture for browsers
document.addEventListener("click", function () {
    AudioManager.init();
}, { once: true });

// Initial Setup on load (V11-A)
checkAchievementVersionMigration();
loadGameProgress();
switchScene(currentBuildIndex);
updateBuilding(-1);
updateBuildWorldBar();
loadQuestion(true);
renderWorldMap();
DailyStreakManager.updateUI();
renderAchievementsGrid();

// Expose core game engine structures for inspection & testing
WORLDS[0].chapters = BUILDS;
window.WORLDS = WORLDS;
window.BUILDS = BUILDS;
window.AudioManager = AudioManager;
window.DailyStreakManager = DailyStreakManager;
window.ACHIEVEMENTS = ACHIEVEMENTS;
window.REWARDS = REWARDS;
window.houseQuestions = houseQuestions;
window.rocketQuestions = rocketQuestions;
window.robotQuestions = robotQuestions;
window.HOUSE_BOSS_QUESTIONS = HOUSE_BOSS_QUESTIONS;
window.ROCKET_BOSS_QUESTIONS = ROCKET_BOSS_QUESTIONS;
window.ROBOT_BOSS_QUESTIONS = ROBOT_BOSS_QUESTIONS;
window.DAILY_CHALLENGE_POOL = DAILY_CHALLENGE_POOL;
window.unlockedAchievements = unlockedAchievements;
window.unlockedRewards = unlockedRewards;
window.unlockAchievement = unlockAchievement;
window.checkAchievements = checkAchievements;
window.getGameState = function () {
    return {
        hasSavedProgress: hasSavedProgress(),
        currentBuildIndex: currentBuildIndex,
        currentQuestionIndex: successfulCorrectAnswers,
        successfulCorrectAnswers: successfulCorrectAnswers,
        currentQuestion: currentQuestion,
        seenQuestionIds: Array.from(seenQuestionIds),
        questionAttempts: questionAttempts,
        buildPieces: buildPieces.slice(),
        completedLevels: completedLevels.slice(),
        totalXp: totalXp,
        checkpointXp: checkpointXp,
        streak: streak,
        bestStreak: bestStreak,
        lives: lives,
        hintsRemaining: hintsRemaining,
        levelMistakes: levelMistakes,
        sessionQuestionsAnswered: sessionQuestionsAnswered,
        totalQuestionsAttempted: totalQuestionsAttempted,
        totalCorrectAnswers: totalCorrectAnswers,
        outputAttempts: outputAttempts,
        outputCorrect: outputCorrect,
        bugAttempts: bugAttempts,
        bugCorrect: bugCorrect,
        attemptsByType: Object.assign({}, attemptsByType),
        correctByType: Object.assign({}, correctByType),
        flawlessLevelsCount: flawlessLevels.size,
        levelCorrectHistory: levelCorrectHistory.slice(),
        minLivesInLevel: minLivesInLevel,
        reachedOneLifeInLevel: reachedOneLifeInLevel,
        levelUsedHint: levelUsedHint,
        levelFinal5Correct: levelFinal5Correct,
        levelFinal3Correct: levelFinal3Correct,
        postOneLifeConsecutiveCorrect: postOneLifeConsecutiveCorrect,
        bestNoHintLevelScore: bestNoHintLevelScore,
        flawlessRunBroken: flawlessRunBroken,
        unlockedAchievements: Array.from(unlockedAchievements),
        unlockedRewards: Array.from(unlockedRewards),
        runMistakes: runMistakes.slice(),
        completedLevelStats: completedLevelStats.slice(),
        levelAttemptsByType: Object.assign({}, levelAttemptsByType),
        levelCorrectByType: Object.assign({}, levelCorrectByType),
        sessionPersonalRecords: Object.assign({}, sessionPersonalRecords)
    };
};
window.checkAchievements = checkAchievements;
window.unlockAchievement = unlockAchievement;
window.unlockReward = unlockReward;
window.checkAchievementVersionMigration = checkAchievementVersionMigration;
window.flawlessLevels = flawlessLevels;
window.openMistakeReview = openMistakeReview;
window.closeMistakeReview = closeMistakeReview;
window.showMissionBriefing = showMissionBriefing;
window.calculateRunGrade = calculateRunGrade;
window.completedLevelStats = completedLevelStats;
window.runMistakes = runMistakes;
window.sessionPersonalRecords = sessionPersonalRecords;
window.openWorldMap = openWorldMap;
window.renderWorldMap = renderWorldMap;
window.selectLevelFromMap = selectLevelFromMap;
window.enterGameplayFromMap = enterGameplayFromMap;
window.completeCurrentLevel = completeCurrentLevel;
window.loadQuestion = loadQuestion;
window.initCodeBuilder = initCodeBuilder;
window.setGameTestState = function (state) {
    if (state.currentBuildIndex !== undefined) {
        currentBuildIndex = state.currentBuildIndex;
    }
    if (state.currentQuestion !== undefined) {
        currentQuestion = state.currentQuestion;
    }
    if (state.successfulCorrectAnswers !== undefined) {
        successfulCorrectAnswers = state.successfulCorrectAnswers;
        currentQuestionIndex = state.successfulCorrectAnswers;
        buildPieces[currentBuildIndex] = state.successfulCorrectAnswers;
    }
    if (state.currentQuestionIndex !== undefined) {
        successfulCorrectAnswers = state.currentQuestionIndex;
        currentQuestionIndex = state.currentQuestionIndex;
        buildPieces[currentBuildIndex] = state.currentQuestionIndex;
    }
    if (state.seenQuestionIds !== undefined) {
        seenQuestionIds.clear();
        state.seenQuestionIds.forEach(function (id) { seenQuestionIds.add(id); });
    }
    if (state.streak !== undefined) streak = state.streak;
    if (state.bestStreak !== undefined) bestStreak = state.bestStreak;
    if (state.lives !== undefined) lives = state.lives;
    if (state.totalPiecesBuilt !== undefined) {
        buildPieces[0] = state.totalPiecesBuilt;
    }
    if (state.totalQuestionsAttempted !== undefined) totalQuestionsAttempted = state.totalQuestionsAttempted;
    if (state.totalCorrectAnswers !== undefined) totalCorrectAnswers = state.totalCorrectAnswers;
    if (state.outputAttempts !== undefined) outputAttempts = state.outputAttempts;
    if (state.outputCorrect !== undefined) outputCorrect = state.outputCorrect;
    if (state.bugAttempts !== undefined) bugAttempts = state.bugAttempts;
    if (state.bugCorrect !== undefined) bugCorrect = state.bugCorrect;
    if (state.attemptsByType !== undefined) {
        Object.assign(attemptsByType, state.attemptsByType);
    }
    if (state.correctByType !== undefined) {
        Object.assign(correctByType, state.correctByType);
    }
    if (state.flawlessLevels !== undefined) {
        flawlessLevels.clear();
        state.flawlessLevels.forEach(function (idx) { flawlessLevels.add(idx); });
    }
    if (state.levelCorrectHistory !== undefined) {
        levelCorrectHistory.length = 0;
        state.levelCorrectHistory.forEach(function (c) { levelCorrectHistory.push(c); });
    }
    if (state.minLivesInLevel !== undefined) minLivesInLevel = state.minLivesInLevel;
    if (state.reachedOneLifeInLevel !== undefined) reachedOneLifeInLevel = state.reachedOneLifeInLevel;
    if (state.levelUsedHint !== undefined) levelUsedHint = state.levelUsedHint;
    if (state.levelFinal5Correct !== undefined) levelFinal5Correct = state.levelFinal5Correct;
    if (state.levelFinal3Correct !== undefined) levelFinal3Correct = state.levelFinal3Correct;
    if (state.postOneLifeConsecutiveCorrect !== undefined) postOneLifeConsecutiveCorrect = state.postOneLifeConsecutiveCorrect;
    if (state.bestNoHintLevelScore !== undefined) bestNoHintLevelScore = state.bestNoHintLevelScore;
    if (state.flawlessRunBroken !== undefined) flawlessRunBroken = state.flawlessRunBroken;
    if (state.buildPieces !== undefined) buildPieces = state.buildPieces.slice();
    if (state.completedLevels !== undefined) completedLevels = state.completedLevels.slice();
    if (state.unlockedAchievements !== undefined) {
        unlockedAchievements.clear();
        state.unlockedAchievements.forEach(function (id) { unlockedAchievements.add(id); });
    }
    if (state.runMistakes !== undefined) {
        runMistakes.length = 0;
        state.runMistakes.forEach(function (m) { runMistakes.push(Object.assign({}, m)); });
    }
    if (state.completedLevelStats !== undefined) {
        completedLevelStats.length = 0;
        state.completedLevelStats.forEach(function (s) { completedLevelStats.push(Object.assign({}, s)); });
    }
    if (state.levelAttemptsByType !== undefined) {
        Object.assign(levelAttemptsByType, state.levelAttemptsByType);
    }
    if (state.levelCorrectByType !== undefined) {
        Object.assign(levelCorrectByType, state.levelCorrectByType);
    }
    if (state.sessionPersonalRecords !== undefined) {
        Object.assign(sessionPersonalRecords, state.sessionPersonalRecords);
    }
};

// V11-A Persistent Player Progress System Exports
window.SAVE_STORAGE_KEY = SAVE_STORAGE_KEY;
window.saveGameProgress = saveGameProgress;
window.loadGameProgress = loadGameProgress;
window.clearSavedProgress = clearSavedProgress;
window.validateSaveData = validateSaveData;
window.hasSavedProgress = hasSavedProgress;
window.resetWorldProgressForNewRun = resetWorldProgressForNewRun;
window.openNewGameModal = openNewGameModal;
window.closeNewGameModal = closeNewGameModal;
window.openAchievements = openAchievements;





function replayCompletedLevel(levelIndex) {
    if (levelIndex < 0 || levelIndex >= BUILDS.length) return;
    currentBuildIndex = levelIndex;
    successfulCorrectAnswers = 0;
    currentQuestionIndex = 0;
    currentQuestion = null;
    seenQuestionIds.clear();
    questionAttempts = 0;
    levelMistakes = 0;
    streak = 0;
    lives = 3;
    hintsRemaining = 1;
    hintUsedForCurrentQuestion = false;
    isAnswerLocked = false;

    // Reset visually for replay
    if (BUILDS[levelIndex].pieces) {
        BUILDS[levelIndex].pieces.forEach(function (p) {
            p.classList.remove("built", "piece-pop");
        });
    }

    updateLivesDisplay();
    updateHintDisplay();
    switchScene(levelIndex);
    updateBuildWorldBar();
    updateBuilding(-1);
    loadQuestion(true);

    if (worldMapScreen) worldMapScreen.style.display = "none";
    if (gameScreen) gameScreen.style.display = "block";
    showToast("", "PRACTICE RUN", "Replaying Level " + (levelIndex + 1), "Checkpoints remain safe. Hone your mastery!", "🔄");
}


// Daily Build Event Listeners
if (homeDailyBuildBtn) {
    homeDailyBuildBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        DailyBuildManager.openModal();
    });
}

if (mapDailyBuildBtn) {
    mapDailyBuildBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        DailyBuildManager.openModal();
    });
}

if (dailyBuildModalClose) {
    dailyBuildModalClose.addEventListener("click", function () {
        DailyBuildManager.closeModal();
    });
}

// Test & Debug Interface
window.getCurrentQuestion = function () { return currentQuestion; };
window.getCurrentBuildIndex = function () { return currentBuildIndex; };
window.setCurrentBuildIndex = function (val) { currentBuildIndex = val; };
window.getSuccessfulCorrectAnswers = function () { return successfulCorrectAnswers; };
window.setSuccessfulCorrectAnswers = function (val) { successfulCorrectAnswers = val; };
window.getLives = function () { return lives; };
window.setLives = function (val) { lives = val; updateLivesDisplay(); };
window.getStreak = function () { return streak; };
window.setStreak = function (val) { streak = val; };
window.getTotalXp = function () { return totalXp; };
window.DailyBuildManager = DailyBuildManager;



// ==================================================
// CITY BUILDER INTEGRATION INTERFACES
// ==================================================

window.loadQuestionForCity = function (building, question) {
    currentQuestion = question;
    isAnswerLocked = false;
    hintUsedForCurrentQuestion = false;

    // Challenge Header
    const bIconEl = document.getElementById("challenge-building-icon");
    const bTitleEl = document.getElementById("challenge-building-title");
    const distSubEl = document.getElementById("challenge-district-subtitle");

    if (bIconEl) bIconEl.textContent = building.icon || "🏗️";
    if (bTitleEl) bTitleEl.textContent = building.name.toUpperCase();
    if (distSubEl && window.CityEngine) {
        const d = window.CityEngine.districts.find(function (dist) { return dist.id === building.districtId; });
        distSubEl.textContent = d ? d.name.toUpperCase() : "METROPOLIS";
    }

    // Orientation strip
    const oWorld = document.getElementById("orientation-world-tag");
    const oStage = document.getElementById("orientation-stage-tag");
    const oMission = document.getElementById("orientation-mission-tag");
    if (oWorld) oWorld.textContent = "🐍 PYTHON WORLD";
    if (oStage && window.CityEngine) {
        const d = window.CityEngine.districts.find(function (dist) { return dist.id === building.districtId; });
        oStage.textContent = d ? d.name.toUpperCase() : "CITY";
    }
    if (oMission) oMission.textContent = building.name;

    // Badges
    if (questionNumber) {
        const stageNum = (building.currentStage || 0) + 1;
        questionNumber.textContent = "🎯 STAGE " + stageNum + " OF " + building.totalStages;
    }
    if (difficultyBadge) {
        difficultyBadge.textContent = question.difficulty || "MODERATE";
        difficultyBadge.className = "difficulty-badge " + (
            question.difficulty === "VERY EASY" ? "badge-very-easy" :
            question.difficulty === "EASY" ? "badge-easy" :
            question.difficulty === "BOSS" ? "badge-boss" : "badge-medium"
        );
    }
    if (challengeTypeBadge) {
        const qType = question.type || "mcq";
        challengeTypeBadge.textContent = qType === "output" ? "⚡ OUTPUT" : qType === "bug" ? "🐛 BUG HUNT" : "🎯 MCQ";
        challengeTypeBadge.className = "challenge-type-badge type-" + qType;
    }

    // Question & Code
    if (questionText) questionText.textContent = question.question;

    if (codeSnippetBox && codeSnippetText) {
        if (question.code) {
            codeSnippetText.textContent = question.code;
            codeSnippetBox.style.display = "block";
        } else {
            codeSnippetBox.style.display = "none";
        }
    }

    // Reset Hint
    if (hintBox) hintBox.style.display = "none";
    updateHintDisplay();

    // Populate standard option buttons
    renderStandardOptionButtons(question, false);

    // Reset Result Box & Cards
    if (resultBox) resultBox.style.display = "none";
    if (feedback) feedback.style.display = "none";
    if (gameOverCard) gameOverCard.style.display = "none";
    if (levelCompleteCard) levelCompleteCard.style.display = "none";
    if (questionCard) questionCard.style.display = "block";

    // Ensure lives
    if (lives <= 0) lives = 3;
    updateLivesDisplay();
};

// City Top HUD Event Listeners
if (hudDailyBtn) {
    hudDailyBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        DailyBuildManager.openModal();
    });
}

if (hudAchievementsBtn) {
    hudAchievementsBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        openAchievements("city");
    });
}

if (hudReviewBtn) {
    hudReviewBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        openMistakeReview();
    });
}

if (hudRecordsBtn) {
    hudRecordsBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        openAchievements("city");
    });
}

if (hudNewGameBtn) {
    hudNewGameBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        openNewGameModal();
    });
}

if (challengeModalClose) {
    challengeModalClose.addEventListener("click", function () {
        AudioManager.playSound("click");
        if (window.CityEngine) {
            window.CityEngine.closeChallengeModal();
        }
    });
}

// Hall of Records / Personal Records Controller
function openHallOfRecords() {
    const modal = document.getElementById("hall-of-records-modal");
    if (!modal) return;

    if (window.AudioManager) window.AudioManager.playSound("click");

    const container = document.getElementById("records-stats-grid");
    if (container) {
        const curBestStreak = (typeof sessionPersonalRecords !== "undefined" && sessionPersonalRecords.bestStreak) || (typeof bestStreak !== "undefined" ? bestStreak : 0);
        const curDailyStreak = (typeof dailyStreak !== "undefined" && dailyStreak.currentStreak) || 0;
        const curDailyBest = (typeof dailyStreak !== "undefined" && dailyStreak.bestStreak) || 0;
        const curTotalXp = (typeof totalXp !== "undefined") ? totalXp : 0;
        const curBestAcc = (typeof sessionPersonalRecords !== "undefined" && sessionPersonalRecords.bestLevelAccuracy) || 0;
        const unlockedCount = (typeof unlockedAchievements !== "undefined") ? unlockedAchievements.size : 0;
        
        let completedBuildings = 0;
        if (window.CityEngine && window.CityEngine.buildings) {
            completedBuildings = Object.values(window.CityEngine.buildings).filter(b => b.status === "completed").length;
        }

        container.innerHTML = `
            <div class="record-stat-card">
                <span class="record-stat-icon">🔥</span>
                <div class="record-stat-info">
                    <span class="record-stat-label">BEST STREAK</span>
                    <span class="record-stat-val">${curBestStreak} Answers</span>
                    <span class="record-stat-sub">Consecutive correct without mistakes</span>
                </div>
            </div>
            <div class="record-stat-card">
                <span class="record-stat-icon">📅</span>
                <div class="record-stat-info">
                    <span class="record-stat-label">DAILY STREAK</span>
                    <span class="record-stat-val">${curDailyStreak} Days (Best: ${curDailyBest})</span>
                    <span class="record-stat-sub">Consecutive days building your city</span>
                </div>
            </div>
            <div class="record-stat-card">
                <span class="record-stat-icon">⭐</span>
                <div class="record-stat-info">
                    <span class="record-stat-label">TOTAL EXPERIENCE</span>
                    <span class="record-stat-val">${curTotalXp} XP</span>
                    <span class="record-stat-sub">Earned across all engineering challenges</span>
                </div>
            </div>
            <div class="record-stat-card">
                <span class="record-stat-icon">🎯</span>
                <div class="record-stat-info">
                    <span class="record-stat-label">BEST ACCURACY</span>
                    <span class="record-stat-val">${curBestAcc}%</span>
                    <span class="record-stat-sub">Highest single-chapter precision</span>
                </div>
            </div>
            <div class="record-stat-card">
                <span class="record-stat-icon">🏆</span>
                <div class="record-stat-info">
                    <span class="record-stat-label">MILESTONE BADGES</span>
                    <span class="record-stat-val">${unlockedCount} / 16 Unlocked</span>
                    <span class="record-stat-sub">Permanent trophies secured</span>
                </div>
            </div>
            <div class="record-stat-card">
                <span class="record-stat-icon">🏙️</span>
                <div class="record-stat-info">
                    <span class="record-stat-label">CITY DEVELOPMENTS</span>
                    <span class="record-stat-val">${completedBuildings} Buildings</span>
                    <span class="record-stat-sub">Structures erected in Python World</span>
                </div>
            </div>
        `;
    }

    modal.style.display = "flex";
}

function closeHallOfRecords() {
    const modal = document.getElementById("hall-of-records-modal");
    if (modal) modal.style.display = "none";
    if (window.CityEngine) window.CityEngine.render();
}

window.openHallOfRecords = openHallOfRecords;
window.closeHallOfRecords = closeHallOfRecords;

const recordsCloseBtn = document.getElementById("records-modal-close");
if (recordsCloseBtn) {
    recordsCloseBtn.onclick = function () {
        if (window.AudioManager) window.AudioManager.playSound("click");
        closeHallOfRecords();
    };
}

const recordsReturnBtn = document.getElementById("records-return-city-btn");
if (recordsReturnBtn) {
    recordsReturnBtn.onclick = function () {
        if (window.AudioManager) window.AudioManager.playSound("click");
        closeHallOfRecords();
    };
}

const recordsToAchBtn = document.getElementById("records-to-achievements-btn");
if (recordsToAchBtn) {
    recordsToAchBtn.onclick = function () {
        if (window.AudioManager) window.AudioManager.playSound("click");
        closeHallOfRecords();
        openAchievements("city");
    };
}

// Initialize City Engine at startup
if (window.CityEngine && typeof window.CityEngine.init === "function") {
    window.CityEngine.init();
    window.CityEngine.updateHUD();
}

