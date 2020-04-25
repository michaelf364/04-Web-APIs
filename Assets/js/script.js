var quizQuestion = document.querySelector("#quizQuestion");
var quizAnswer = document.querySelector("#quizAnswer");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var time = 60;
var questions =
    [
        {
            question: "Commonly used data types DO NOT include",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: 2
        },

        {
            question: "The condition in an if / else statement is enclosed within ____.",
            choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
            answer: 2
        },

        {
            question: "String values must be enclosed within ____ when being assigned to variables.",
            choices: ["commas", "curly brackets", "quotes", "parentheses"],
            answer: 2
        },
        {
            question: "Arrays in JavaScript can be used to store ____.",
            choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
            answer: 3
        },
        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is",
            choices: ["Javascript", "terminal", "for loops", "console.log"],
            answer: 3
        }
    ];
    window.onload = function(){

    }
function startQuiz() {
    var quizTime = setInterval(() => {
        if (time === undefined) {
            clearInterval(quizTime);
        } else {
            Quiz();
        }
    }, 1000);
}
function Quiz() {

for (let i = 0; i < array.length; i++) {

    if (questions) {
        //answer wrong
        time--;
    }else{
        //answer correct
    }
    
}
}

