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

// ==================================================
// QUESTION BANK (Very Beginner-Friendly & Educational)
// ==================================================

// --------------------------------------------------
// LEVEL 1: 🏠 HOUSE (Python Fundamentals, Variables & Print)
// Pool: 20 Unique Questions (MCQ, Output, Code-Choice, Bug)
// --------------------------------------------------
const houseQuestions = [
    // Q1
    {
        id: "l1-mcq-001",
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
        id: "l1-code-001",
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
        id: "l1-output-001",
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
        id: "l1-bug-001",
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
        id: "l1-output-002",
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
        id: "l1-code-002",
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
        id: "l1-mcq-002",
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
        id: "l1-mcq-003",
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
        id: "l1-output-003",
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
        id: "l1-mcq-004",
        question: "What is the result of evaluating 10 > 20 in Python?",
        options: ["False", "True", "None", "Error"],
        correct: 0,
        explanation: "10 is not greater than 20, so the comparison evaluates to the Boolean value `False`.",
        hint: "Ask yourself: is 10 strictly greater than 20?",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q11
    {
        id: "l1-mcq-005",
        question: "What built-in function is used to find the data type of any variable in Python?",
        options: ["typeof()", "type()", "kind()", "classof()"],
        correct: 1,
        explanation: "The `type()` function returns the data type of the given object (e.g., `<class 'int'>`).",
        hint: "A simple 4-letter function: 'type'.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q12
    {
        id: "l1-code-003",
        question: "Which of the following is a valid variable name in Python?",
        options: ["2nd_player", "player_score", "player-score", "class"],
        correct: 1,
        explanation: "Variable names can contain letters, numbers, and underscores, but cannot start with a digit or contain hyphens, nor can they be reserved keywords like `class`.",
        hint: "Uses letters and underscores without starting with numbers.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    // Q13
    {
        id: "l1-output-004",
        question: "What will this arithmetic calculation print?",
        code: "print(20 - 7)",
        options: ["27", "13", "14", "Error"],
        correct: 1,
        explanation: "`20 - 7` subtracts 7 from 20, resulting in `13`.",
        hint: "Subtract 7 from 20.",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q14
    {
        id: "l1-bug-002",
        question: "What error will occur when executing this line?",
        code: "print(\"Welcome to Python!)",
        options: [
            "TypeError",
            "SyntaxError: unterminated string literal",
            "NameError: Welcome is not defined",
            "ZeroDivisionError"
        ],
        correct: 1,
        explanation: "The opening double quote has no matching closing quote before the closing parenthesis, causing a `SyntaxError`.",
        hint: "Notice the missing closing quote at the end of the text.",
        type: "bug",
        difficulty: "VERY EASY"
    },
    // Q15
    {
        id: "l1-output-005",
        question: "What will this multiplication output in Python?",
        code: "print(4 * 3)",
        options: ["7", "43", "12", "1"],
        correct: 2,
        explanation: "The `*` symbol is the multiplication operator in Python. `4 * 3` gives `12`.",
        hint: "Multiply 4 times 3.",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q16
    {
        id: "l1-mcq-006",
        question: "What are the two possible Boolean values in Python?",
        options: ["TRUE and FALSE", "yes and no", "True and False", "1 and 0"],
        correct: 2,
        explanation: "In Python, Boolean values are written with capital first letters: `True` and `False`.",
        hint: "Capital T and Capital F.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q17
    {
        id: "l1-code-004",
        question: "How do you write a single-line comment in Python?",
        options: [
            "# This is a comment",
            "// This is a comment",
            "/* This is a comment */",
            "-- This is a comment"
        ],
        correct: 0,
        explanation: "Python uses the hash symbol `#` for single-line comments.",
        hint: "Starts with the '#' character.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    // Q18
    {
        id: "l1-mcq-007",
        question: "What data type does the text \"Hello\" belong to in Python?",
        options: ["char", "text", "str", "word"],
        correct: 2,
        explanation: "Text enclosed in quotes has the type `str` (short for string) in Python.",
        hint: "Short for 'string'.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q19
    {
        id: "l1-output-006",
        question: "What will this variable update print?",
        code: "color = 'red'\ncolor = 'blue'\nprint(color)",
        options: ["red", "blue", "redblue", "None"],
        correct: 1,
        explanation: "Variables store the most recently assigned value. The value was updated from `'red'` to `'blue'`.",
        hint: "Variables take on the newest assigned value.",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q20
    {
        id: "l1-bug-003",
        question: "Why does this assignment raise a SyntaxError?",
        code: "100 = total",
        options: [
            "Variable names must be in uppercase",
            "Numbers cannot be used in Python programs",
            "Cannot assign to a literal number; variable name must be on the left",
            "total is a reserved keyword"
        ],
        correct: 2,
        explanation: "In Python, the variable being assigned to must always be on the left-hand side of `=` (e.g. `total = 100`).",
        hint: "Variable name goes on the left, value goes on the right.",
        type: "bug",
        difficulty: "VERY EASY"
    }
];

// --------------------------------------------------
// LEVEL 2: 🚀 ROCKET (Strings, Operators, Loops & Functions)
// Pool: 20 Unique Questions (MCQ, Output, Code-Choice, Bug)
// --------------------------------------------------
const rocketQuestions = [
    // Q1
    {
        id: "l2-mcq-001",
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
        id: "l2-output-001",
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
        id: "l2-code-001",
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
        id: "l2-bug-001",
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
        id: "l2-output-002",
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
        id: "l2-code-002",
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
        id: "l2-mcq-002",
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
        id: "l2-output-003",
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
        id: "l2-mcq-003",
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
        id: "l2-mcq-004",
        question: "What method adds a new item to the end of a Python list?",
        options: ["append()", "push()", "insert_end()", "add()"],
        correct: 0,
        explanation: "`append()` is the built-in list method that appends an element to the end of the list.",
        hint: "It starts with the letter 'a'.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q11
    {
        id: "l2-output-004",
        question: "What will this len() function output?",
        code: "word = 'rocket'\nprint(len(word))",
        options: ["5", "6", "7", "Error"],
        correct: 1,
        explanation: "`len()` counts the number of characters in the string `'rocket'`, which has 6 letters.",
        hint: "Count the letters in 'rocket'.",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q12
    {
        id: "l2-output-005",
        question: "What will this string repetition output in Python?",
        code: "print('Go!' * 3)",
        options: ["Go! 3", "Go!Go!Go!", "Go!*3", "Error"],
        correct: 1,
        explanation: "Multiplying a string by an integer repeats the string that many times: `'Go!Go!Go!'`.",
        hint: "The string is repeated 3 times without spaces.",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q13
    {
        id: "l2-mcq-005",
        question: "What is the result of evaluating not True in Python?",
        options: ["True", "False", "None", "Error"],
        correct: 1,
        explanation: "The `not` operator inverts a Boolean value: `not True` becomes `False`.",
        hint: "The opposite of True.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q14
    {
        id: "l2-bug-002",
        question: "What is missing in this function definition header?",
        code: "def calculate_area(width, height)\n    return width * height",
        options: [
            "Missing return type keyword",
            "Missing colon (:) after (width, height)",
            "Parameters cannot have commas",
            "def should be replaced by function"
        ],
        correct: 1,
        explanation: "Every function header in Python must terminate with a colon `:` before the indented block.",
        hint: "Check the punctuation at the end of the first line.",
        type: "bug",
        difficulty: "VERY EASY"
    },
    // Q15
    {
        id: "l2-mcq-006",
        question: "What sequence of numbers does range(4) generate?",
        options: ["1, 2, 3, 4", "0, 1, 2, 3", "0, 1, 2, 3, 4", "1, 2, 3"],
        correct: 1,
        explanation: "`range(4)` starts at 0 and produces 4 numbers: 0, 1, 2, and 3 (stops before 4).",
        hint: "Starts at 0 and stops before 4.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q16
    {
        id: "l2-output-006",
        question: "What will this inequality comparison output?",
        code: "print(10 != 5)",
        options: ["True", "False", "10", "None"],
        correct: 0,
        explanation: "`!=` means 'not equal to'. Since 10 is indeed not equal to 5, the expression evaluates to `True`.",
        hint: "Is 10 different from 5?",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q17
    {
        id: "l2-code-003",
        question: "Which statement properly returns a result from a Python function?",
        options: ["give result", "send result", "return result", "output result"],
        correct: 2,
        explanation: "The `return` keyword passes back a value from a function to its caller.",
        hint: "The standard keyword is 'return'.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    // Q18
    {
        id: "l2-mcq-007",
        question: "Which loop type in Python repeatedly executes as long as a condition remains True?",
        options: ["for loop", "while loop", "repeat loop", "until loop"],
        correct: 1,
        explanation: "A `while` loop continues running its block repeatedly as long as its test condition evaluates to `True`.",
        hint: "Starts with 'w'.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q19
    {
        id: "l2-bug-003",
        question: "What causes an IndentationError in Python?",
        code: "def launch():\nprint('Blast off!')",
        options: [
            "Missing parentheses around 'Blast off!'",
            "launch is a restricted keyword",
            "The line inside the function body is not indented",
            "print() cannot be used inside functions"
        ],
        correct: 2,
        explanation: "Python uses indentation (typically 4 spaces) to define code blocks. The statement inside `launch()` must be indented.",
        hint: "Python requires code inside functions to be indented.",
        type: "bug",
        difficulty: "VERY EASY"
    },
    // Q20
    {
        id: "l2-output-007",
        question: "What will this lower() string method output?",
        code: "planet = 'MARS'\nprint(planet.lower())",
        options: ["mars", "MARS", "Mars", "Error"],
        correct: 0,
        explanation: "`lower()` converts all characters in a string to lowercase, outputting `'mars'`.",
        hint: "Converts uppercase letters to lowercase.",
        type: "output",
        difficulty: "VERY EASY"
    }
];

// --------------------------------------------------
// LEVEL 3: 🤖 ROBOT (Lists, Tuples, Dictionaries & Classes)
// Pool: 20 Unique Questions (MCQ, Output, Code-Choice, Bug)
// --------------------------------------------------
const robotQuestions = [
    // Q1
    {
        id: "l3-mcq-001",
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
        id: "l3-output-001",
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
        id: "l3-output-002",
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
        id: "l3-code-001",
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
        id: "l3-bug-001",
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
        id: "l3-mcq-002",
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
        id: "l3-output-003",
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
        id: "l3-code-002",
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
        id: "l3-mcq-003",
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
        id: "l3-mcq-004",
        question: "What keyword is used inside a loop to stop it immediately?",
        options: ["break", "exit", "stop", "halt"],
        correct: 0,
        explanation: "The `break` keyword immediately terminates the innermost enclosing loop.",
        hint: "To 'break' out of a loop.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q11
    {
        id: "l3-output-004",
        question: "What will be printed when modifying this dictionary and checking its size?",
        code: "bot = {'id': 1}\nbot['name'] = 'Alpha'\nprint(len(bot))",
        options: ["1", "2", "3", "Error"],
        correct: 1,
        explanation: "The dictionary started with 1 key (`'id'`) and added another key (`'name'`), so `len(bot)` is `2`.",
        hint: "Count how many keys are in the dictionary.",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q12
    {
        id: "l3-mcq-005",
        question: "Which list method removes and returns the last item from a list?",
        options: ["pop()", "remove()", "delete()", "discard()"],
        correct: 0,
        explanation: "`pop()` removes and returns the last element from the list (or from a specific index if provided).",
        hint: "Think of 'popping' an item off a stack.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q13
    {
        id: "l3-code-003",
        question: "What is the conventional name for the first parameter of an instance method in a Python class?",
        options: ["this", "self", "me", "inst"],
        correct: 1,
        explanation: "In Python, `self` represents the instance of the class and is conventionally the first parameter of instance methods.",
        hint: "A 4-letter word starting with 's'.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    // Q14
    {
        id: "l3-bug-002",
        question: "Why does this code cause a TypeError in Python?",
        code: "coords = (10, 20)\ncoords[0] = 50",
        options: [
            "coords is not a variable name",
            "Tuples are immutable and cannot be modified after creation",
            "Index 0 does not exist in coords",
            "Parentheses cannot hold numbers"
        ],
        correct: 1,
        explanation: "Tuples cannot be altered once created; attempting to assign to an element raises a `TypeError`.",
        hint: "Tuples are immutable.",
        type: "bug",
        difficulty: "VERY EASY"
    },
    // Q15
    {
        id: "l3-output-005",
        question: "What will this list index lookup print?",
        code: "nums = [10, 20, 30]\nprint(nums[1])",
        options: ["10", "20", "30", "IndexError"],
        correct: 1,
        explanation: "Python uses 0-based indexing: `nums[0]` is `10`, and `nums[1]` is `20`.",
        hint: "Lists start at index 0.",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q16
    {
        id: "l3-code-004",
        question: "Which special method is the constructor used to initialize newly created class instances?",
        options: ["__start__()", "__init__()", "__new__()", "__create__()"],
        correct: 1,
        explanation: "`__init__()` is Python's initialization constructor method called when an object is instantiated.",
        hint: "Short for initialize with double underscores.",
        type: "code-choice",
        difficulty: "VERY EASY"
    },
    // Q17
    {
        id: "l3-output-006",
        question: "What is the output after appending an element to this list?",
        code: "colors = ['red', 'green']\ncolors.append('blue')\nprint(len(colors))",
        options: ["2", "3", "4", "Error"],
        correct: 1,
        explanation: "`colors` originally has 2 items. Appending `'blue'` increases the length to `3`.",
        hint: "2 original items plus 1 appended item.",
        type: "output",
        difficulty: "VERY EASY"
    },
    // Q18
    {
        id: "l3-mcq-006",
        question: "Which keyword checks whether a specific key exists in a dictionary?",
        options: ["has", "exists", "in", "contains"],
        correct: 2,
        explanation: "The `in` keyword checks membership (e.g., `'model' in car`).",
        hint: "A 2-letter keyword: 'in'.",
        type: "mcq",
        difficulty: "VERY EASY"
    },
    // Q19
    {
        id: "l3-bug-003",
        question: "What exception is raised when looking up a key that does not exist in a dictionary?",
        code: "profile = {'name': 'Ada'}\nprint(profile['age'])",
        options: ["IndexError", "KeyError", "ValueError", "AttributeError"],
        correct: 1,
        explanation: "Accessing a non-existent dictionary key directly with `[]` raises a `KeyError`.",
        hint: "It has 'Key' in the name of the error.",
        type: "bug",
        difficulty: "VERY EASY"
    },
    // Q20
    {
        id: "l3-output-007",
        question: "What will accessing index 0 of this tuple print?",
        code: "point = (4, 9)\nprint(point[0])",
        options: ["4", "9", "(4, 9)", "Error"],
        correct: 0,
        explanation: "Tuples support 0-based indexing: `point[0]` accesses the first item, which is `4`.",
        hint: "The first item in the tuple.",
        type: "output",
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
// DAILY STREAK SYSTEM (LocalStorage Calendar Tracking)
// ==================================================

const DailyStreakManager = {
    STORAGE_KEY: "built_it_daily_streak",

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
            const raw = localStorage.getItem(this.STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && typeof parsed === "object") {
                    return {
                        lastActiveDate: typeof parsed.lastActiveDate === "string" ? parsed.lastActiveDate : "",
                        currentStreak: Number.isInteger(parsed.currentStreak) ? parsed.currentStreak : 0,
                        bestStreak: Number.isInteger(parsed.bestStreak) ? parsed.bestStreak : 0
                    };
                }
            }
        } catch (e) {
            // localStorage unavailable
        }
        return { lastActiveDate: "", currentStreak: 0, bestStreak: 0 };
    },

    saveData(data) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
                lastActiveDate: data.lastActiveDate,
                currentStreak: data.currentStreak,
                bestStreak: data.bestStreak
            }));
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
}

function checkAchievements(trigger, payload) {
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
                            '<span class="ach-status-badge">UNLOCKED</span>' +
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
                            '<span class="ach-status-badge">SECRET</span>' +
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
                            '<span class="ach-status-badge">LOCKED</span>' +
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
        if (gameScreen) gameScreen.style.display = "block";
        showGameComplete();
        return;
    }

    AudioManager.playSound("click");

    // Hide world map and start screen, show game screen
    if (worldMapScreen) worldMapScreen.style.display = "none";
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

// PHASE 9: Contextual World Map origin tracking
let worldMapOrigin = "title"; // "game" or "title"

function updateMapBackButton() {
    if (!mapBackBtn) return;
    if (worldMapOrigin === "game") {
        mapBackBtn.textContent = "← BACK TO GAME";
    } else {
        mapBackBtn.textContent = "← TITLE SCREEN";
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
    if (worldMapScreen) worldMapScreen.style.display = "block";
    renderWorldMap();
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
        hintButton.textContent = "💡 Hint Used";
        hintButton.classList.add("disabled");
    } else {
        hintButton.disabled = false;
        hintButton.textContent = "💡 Hint (1 left)";
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

function getNextUnseenQuestion(buildIndex) {
    const build = BUILDS[buildIndex];
    const pool = build.questions;
    const unseen = pool.filter(function (q) {
        return !seenQuestionIds.has(q.id);
    });

    if (unseen.length === 0) {
        // Fallback safeguard (pool has 20 questions, max possible seen per attempt is 12)
        return pool[0];
    }

    const selectedQuestion = unseen[0];
    seenQuestionIds.add(selectedQuestion.id);
    return selectedQuestion;
}

// ==================================================
// QUESTION LOADING & UI UPDATES
// ==================================================

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
    difficultyBadge.className = "difficulty-badge badge-easy";

    // PHASE 5: Dynamic challenge type badge (MCQ, OUTPUT, CODE-CHOICE, BUG)
    const qType = question.type || "mcq";
    if (challengeTypeBadge) {
        if (qType === "output") {
            challengeTypeBadge.textContent = "⚡ OUTPUT";
            challengeTypeBadge.className = "challenge-type-badge type-output";
        } else if (qType === "code-choice") {
            challengeTypeBadge.textContent = "💻 CODE-CHOICE";
            challengeTypeBadge.className = "challenge-type-badge type-code-choice";
        } else if (qType === "bug") {
            challengeTypeBadge.textContent = "🔍 BUG";
            challengeTypeBadge.className = "challenge-type-badge type-bug";
        } else {
            challengeTypeBadge.textContent = "🎯 MCQ";
            challengeTypeBadge.className = "challenge-type-badge type-mcq";
        }
    }

    // PHASE 7: Subtle question entrance animation
    if (questionCard) {
        questionCard.classList.remove("question-card-enter");
        void questionCard.offsetWidth;
        questionCard.classList.add("question-card-enter");
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

    // PHASE 1: Populate answer buttons with distinct keycaps [1] [A]
    const prefixes = ["A", "B", "C", "D"];
    const nums = ["1", "2", "3", "4"];
    const isCodeChoice = (qType === "code-choice");
    answerButtons.forEach(function (button, index) {
        button.innerHTML = '<span class="ans-badge">' +
            '<span class="keycap-num">[' + nums[index] + ']</span> ' +
            '<span class="keycap-letter">[' + prefixes[index] + ']</span>' +
            '</span><span class="ans-text">' + escapeHtml(question.options[index]) + '</span>';
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

        answerButtons[selectedIndex].classList.add("btn-correct", "btn-pop");
        checkAchievements("answer");

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

        // Store mistake details for learning review mode
        runMistakes.push({
            levelIndex: currentBuildIndex,
            levelNumber: build.levelNumber,
            levelName: build.name,
            questionText: question.question,
            code: question.code || null,
            type: qType,
            userAnswer: question.options[selectedIndex],
            correctAnswer: question.options[question.correct],
            explanation: question.explanation
        });

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
    checkpointXp = totalXp;

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
    bestStreak = 0;
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

    if (chip) chip.textContent = "LEVEL " + build.levelNumber;
    if (title) title.textContent = (build.topicName || build.name).toUpperCase();
    if (desc) desc.textContent = build.description || "Master engineering challenges to complete this build.";
    if (buildVal) buildVal.textContent = build.icon + " " + build.name.toUpperCase();
    if (startBtn) startBtn.textContent = "START LEVEL " + build.levelNumber + " (" + build.name.toUpperCase() + ") ➔";

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

    reviewContent.innerHTML =
        '<div class="review-item-card">' +
            '<div class="review-meta-bar">' +
                '<span class="review-type-chip chip-' + escapeHtml(mistake.type) + '">' + typeLabel + '</span>' +
                '<span class="review-level-chip">LEVEL ' + mistake.levelNumber + ': ' + escapeHtml(mistake.levelName.toUpperCase()) + '</span>' +
            '</div>' +
            '<div class="review-question-text">' + escapeHtml(mistake.questionText) + '</div>' +
            codeBlockHtml +
            '<div class="review-answers-grid">' +
                '<div class="review-answer-box your-answer">' +
                    '<span class="ans-label">❌ YOUR ANSWER</span>' +
                    '<div class="ans-text">' + escapeHtml(mistake.userAnswer) + '</div>' +
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

// Bind Start Button
startButton.addEventListener("click", function () {
    AudioManager.playSound("click");
    startScreen.style.display = "none";
    gameScreen.style.display = "none";
    worldMapScreen.style.display = "block";
    worldMapOrigin = "title";
    updateMapBackButton();
    renderWorldMap();
});

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

if (openWorldMapBtn) {
    openWorldMapBtn.addEventListener("click", function () {
        AudioManager.playSound("click");
        openWorldMap("game");
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

// Initial Setup on load
switchScene(0);
updateBuilding(-1);
updateBuildWorldBar();
loadQuestion(true);
renderWorldMap();
DailyStreakManager.updateUI();
renderAchievementsGrid();

// Expose core game engine structures for inspection & testing
window.BUILDS = BUILDS;
window.AudioManager = AudioManager;
window.DailyStreakManager = DailyStreakManager;
window.ACHIEVEMENTS = ACHIEVEMENTS;
window.REWARDS = REWARDS;
window.getGameState = function () {
    return {
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
window.setGameTestState = function (state) {
    if (state.currentBuildIndex !== undefined) {
        currentBuildIndex = state.currentBuildIndex;
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

