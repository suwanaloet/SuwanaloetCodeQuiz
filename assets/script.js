var questionArray = [
    {
        question: " Inside which HTML element do we put the JavaScript",
        answers: [
            { text: "a: js", correct: false },
            { text: "b: javascript", correct: false },
            { text: "c: scripting", correct: false },
            { text: "d: script", correct: true },
        ]
    },

    {
        question: " Where is the correct place to insert a JavaScript?",
        answers: [
            { text: "a: The <body section", correct: false },
            { text: "b: The <head> section", correct: false },
            { text: "c: Both the <head> section and the <body> section", correct: true },
            { text: "d: At the end of the css stylesheet", correct: false },
        ],

    },

    {
        question: " How can you add a comment in a JavaScript?",
        answers: [
            { text: "a: //This is a comment", correct: true },
            { text: "b: <!--This is a comment-->", correct: false },
            { text: "c:-This is a comment-", correct: false },
            { text: "d: *-This is a comment", correct: false },
        ],
    },

    {
        question: "  How do you add a comment in Javascript to have more than one line?",
        answers: [
            { text: "a: /* This comment has more than one line */", correct: true },
            { text: "b: <!-- This comment has more than one line -->", correct: false },
            { text: "c: //This comment has more than one line//", correct: false },
            { text: "d: /!This comment has more than one line!/", correct: false },
        ],

    },

    {
        question: " How do you declare a JavaScript variable?",
        answers: [
            { text: "v carName", correct: false },
            { text: "var carName", correct: true },
            { text: "variable carName", correct: false },
            { text: "!v carName", correct: false },
        ],

    },
];

var startButton = document.getElementById("startBtn")
var questionListEl = document.getElementById("questionbox")
var questionEl = document.getElementById("question")
var responseEl = document.getElementById("responses")
var timerEl = document.getElementById("quiz-timer")
var responseA = document.getElementById("a")
var responseB = document.getElementById("b")
var responseC = document.getElementById("c")
var responseD = document.getElementById("d")



function startQuiz() {
    var timeLeft = 120;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        timeLeft = timeLeft - 1
        timerEl.innerHTML = timeLeft + " seconds remaining "
        if (timeLeft <= 0) {
            clearInterval(timeInterval)
        }
    }, 1000);
    var message = "All done! your final score is" + timeLeft

    function subtractTime() {
        timeLeft = timeLeft - 5
    }

    question1()
    function question1() {
        questionEl.innerHTML = "1/5. Inside which HTML element do we put the JavaScript"
        responseA.innerHTML = "a: js"
        responseB.innerHTML = "b: javascript"
        responseC.innerHTML = "c: scripting"
        responseD.innerHTML = "d: script"

        responseA.addEventListener("click", function () {
            question2()

        })
        responseB.addEventListener("click", function () {
            subtractTime()

        })
        responseC.addEventListener("click", function () {
            subtractTime()

        })
        responseD.addEventListener("click", function () {
            subtractTime()

        })
    }

    function question2() {
        questionEl.innerHTML = "2/5. Where is the correct place to insert a JavaScript?"
            responseA.innerHTML = "a: The <body section"
            responseB.innerHTML = "b: The <head> section"
            responseC.innerHTML = "c: Both the <head> section and the <body> section"
            responseD.innerHTML = "d: At the end of the css stylesheet"

        responseA.addEventListener("click", function () {
            subtractTime()

        })
        responseB.addEventListener("click", function () {
            subtractTime()

        })
        responseC.addEventListener("click", function () {
            question3()

        })
        responseD.addEventListener("click", function () {
            subtractTime()

        })
    }

    function question3() {
        questionEl.innerHTML = "3/5. How can you add a comment in a JavaScript?"
            responseA.innerHTML = "a: //This is a comment"
            responseB.innerHTML = "b: <!--This is a comment-->"
            responseC.innerHTML = "c:-This is a comment-"
            responseD.innerHTML = "d: *-This is a comment"

        responseA.addEventListener("click", function () {
            question4()

        })
        responseB.addEventListener("click", function () {
            subtractTime()

        })
        responseC.addEventListener("click", function () {
            subtractTime()

        })
        responseD.addEventListener("click", function () {
            subtractTime()

        })
    }

    function question4() {
        questionEl.innerHTML = " 4/5. How do you add a comment in Javascript to have more than one line?"
            responseA.innerHTML = "a: /* This comment has more than one line */"
            responseB.innerHTML = "b: <!-- This comment has more than one line -->"
            responseC.innerHTML = "c: //This comment has more than one line//"
            responseD.innerHTML = "d: /!This comment has more than one line!/"

        responseA.addEventListener("click", function () {
            question5()

        })
        responseB.addEventListener("click", function () {
            subtractTime()

        })
        responseC.addEventListener("click", function () {
            subtractTime()

        })
        responseD.addEventListener("click", function () {
            subtractTime()

        })
    }

    function question5() {
        questionEl.innerHTML = "5/5. How do you declare a JavaScript variable?"
            responseA.innerHTML = "v carName"
            responseB.innerHTML = "var carName"
            responseC.innerHTML = "variable carName"
            responseD.innerHTML = "!v carName"

        responseA.addEventListener("click", function () {
            subtractTime()

        })
        responseB.addEventListener("click", function () {
            endScreen()
        })
        responseC.addEventListener("click", function () {
            subtractTime()

        })
        responseD.addEventListener("click", function () {
            subtractTime()

        })
    }

    function endScreen()
}


startButton.onclick = startQuiz;


