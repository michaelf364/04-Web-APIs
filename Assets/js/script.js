//start screen
var startScn = document.querySelector("#startScn");
var startBtn = document.querySelector("#startBtn");
var highScoresBtn = document.querySelector("#highScoresBtn");

//question screen
var questionScn = document.querySelector("#questionScn");
var timeLeft = document.querySelector("#timeLeft");
var currentQuestion = document.querySelector("#currentQuestion");
var answers = document.querySelector("#answers");
var results = document.querySelector("#results");

//victory screen
var victoryScn = document.querySelector("#victoryScn");
var nameInput = document.querySelector("#nameInput").value;
var submitBtn = document.querySelector("#submitBtn");
var score = document.querySelector("#score");
var playAgainVSBtn = document.querySelector("#playAgainVSBtn");
var highScoresVSBtn = document.querySelector("#highScoresVSBtn");

//defeat screen
var defeatScn = document.querySelector("#defeatScn");
var playAgainDSBtn = document.querySelector("#playAgainDSBtn");
var highScoresDSBtn = document.querySelector("#highScoresDSBtn");

//high score screen
var highScoreScn = document.querySelector("#highScoreScn");
var highScoresList = document.querySelector("#highScoresList");
var backButton = document.querySelector("#backButton");

var currentIndex;
var timeLeft;
var timer;
var highScores = [
    {
        name: "None",
        score: 0
    },
    {
        name: "None",
        score: 0
    },
    {
        name: "None",
        score: 0
    },
    {
        name: "None",
        score: 0
    },
    {
        name: "None",
        score: 0
    }
];
var questions =
    [
        {
            question: "Commonly used data types DO NOT include",
            choices: ["strings", "booleans", "alerts", "numbers"],
            correctAnswer: 2
        },
        {
            question: "The condition in an if / else statement is enclosed within ____.",
            choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
            correctAnswer: 2
        },
        {
            question: "String values must be enclosed within ____ when being assigned to variables.",
            choices: ["commas", "curly brackets", "quotes", "parentheses"],
            correctAnswer: 2
        },
        {
            question: "Arrays in JavaScript can be used to store ____.",
            choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
            correctAnswer: 3
        },
        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is",
            choices: ["Javascript", "terminal", "for loops", "console.log"],
            correctAnswer: 3
        }
    ];
initialize();
function initialize() {
    loadScores();
    currentIndex = 0;
    timeLeft = 60;
    startScn.style.display = "block";
    questionScn.style.display = "none";
    victoryScn.style.display = "none";
    defeatScn.style.display = "none";
    highScoreScn.style.display = "none";
}

startBtn.addEventListener("click", function () {
    timeLeft = 60;
    currentIndex = 0;
    startScn.style.display = "none";
    questionScn.style.display = "block";
    victoryScn.style.display = "none";
    defeatScn.style.display = "none";
    highScoreScn.style.display = "none";
    displayQuestionScn(currentIndex);
    startTimer();
    timeLeftSpan.textContent = timeLeft;
});

highScoresBtn.addEventListener("click", function () {
    renderHighScores();
    displayHighScoreScreen();
});

highScoresVSBtn.addEventListener("click", function () {
    renderHighScores();
    displayHighScoreScreen();
});

highScoresDSBtn.addEventListener("click", function () {
    renderHighScores();
    displayHighScoreScreen();
});

playAgainDSBtn.addEventListener("click", function () {
    initialize();
});

playAgainVSBtn.addEventListener("click", function () {
    initialize();
});



function displayQuestionScn(index) {
    answers.innerHTML = "";
    currentQuestion.textContent = questions[index].question;
    for (var i = 0; i < questions[index].choices.length; i++) {
        var question = document.createElement("li");
        var questionBtn = document.createElement("button");
        questionBtn.setAttribute("type", "button");
        questionBtn.setAttribute("id", i);
        questionBtn.textContent = questions[index].choices[i];
        questionBtn.setAttribute("class", "btn btn-primary");
        question.appendChild(questionBtn);
        answers.appendChild(question);
    }
}

answers.addEventListener("click", function (playerAnswer) {
    if (playerAnswer.target.matches("button")) {
        var answer = playerAnswer.target.getAttribute("id");
        var isCorrect = checkAnswer(currentIndex, answer);
        if (isCorrect === true) {
            results.textContent = "Correct";
        }
        else {
            results.textContent = "Incorrect";
            timeLeft -= 10;
            timeLeftSpan.textContent = timeLeft;
        }
        setTimeout(clearResults, 1500)
        currentIndex++;
        if (currentIndex === questions.length) {
            clearInterval(timer);
            displayVictoryScreen();
            checkScore();
            return;
        }
        displayQuestionScn(currentIndex);
    }
});

backBtn.addEventListener("click", function () {
    initialize();
});

function checkAnswer(index, answer) {
    var userAnswer = parseInt(answer);
    var correctAnswer = parseInt(questions[index].correctAnswer)
    var isCorrect = false;
    if (userAnswer === correctAnswer) {
        isCorrect = true;
    }
    return isCorrect;
}

function clearResults() {
    results.textContent = "";
}

function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        if (timeLeft < 0) {
            DisplayDefeatScreen();
            clearInterval(timer);
        }
        timeLeftSpan.textContent = timeLeft;
    }, 1000)
}

function DisplayDefeatScreen() {
    questionScn.style.display = "none";
    startScn.style.display = "none";
    victoryScn.style.display = "none";
    defeatScn.style.display = "block";
    highScoreScn.style.display = "none";
    score.textContent = timeLeft;
}
function displayVictoryScreen() {
    questionScn.style.display = "none";
    startScn.style.display = "none";
    victoryScn.style.display = "block";
    highScoreScn.style.display = "none";
    defeatScn.style.display = "none";
    score.textContent = timeLeft;
}

function displayHighScoreScreen() {
    startScn.style.display = "none";
    questionScn.style.display = "none";
    victoryScn.style.display = "none";
    defeatScn.style.display = "none";
    highScoreScn.style.display = "block";
}
function checkScore() {
    var highScore = {
        name: "",
        score: timeLeft
    };

    for (var i = 0; i < highScores.length; i++) {
        if (timeLeft > parseInt(highScores[i].score)) {
            submitBtn.addEventListener("click", function () {
                highScores.name = nameInput;
                console.log(highScores.name);
            })
            highScores.splice(i, 0, highScore);
            highScores.splice(5, 1);
            saveScores();
            i = highScores.length;
        }
    }
}

function renderHighScores() {
    highScoresList.innerHTML = "";
    for (var i = 0; i < highScores.length; i++) {
        var score = document.createElement("li");
        score.textContent = (" " + highScores[i].name + ":  " + highScores[i].score);
        highScoresList.appendChild(score);
    }
}

function saveScores() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function loadScores() {
    var tempScores = JSON.parse(localStorage.getItem("highScores"));
    if (tempScores !== null) {
        highScores = tempScores;
    }
}