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
var highScore = document.getElementById("hs")
var highId = document.getElementById("id")


function startQuiz() {
    var timeLeft = 320;
    var timeInterval = setInterval(function () {
        timeLeft = timeLeft - 1
        timerEl.innerHTML = timeLeft + " seconds remaining "
        if (timeLeft <= 0) {
            clearInterval(timeInterval)
            endScreen()
        }
    }, 1000);
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
        responseA.textContent = "a: The <body> section"
        responseB.textContent = "b: The <head> section"
        responseC.textContent = "c: Both the <head> section and the <body> section"
        responseD.innerHTML = "d: At the end of the css stylesheet"
        responseA.addEventListener("click", function () {
            subtractTime()
        })

        responseC.removeEventListener("click", function () {
            subtractTime()

        })

        responseC.addEventListener("click", function () {
            question3()

        })
    }

    function question3() {
        questionEl.innerHTML = "3/5. How can you add a comment in a JavaScript?"
        responseA.textContent = "a: //This is a comment"
        responseB.textContent = "b: <!--This is a comment-->"
        responseC.textContent = "c:-This is a comment-"
        responseD.textContent = "d: *-This is a comment"

        responseC.removeEventListener("click", function () {
            question3()

        })
        responseC.addEventListener("click", function () {
            subtractTime()
        })
        responseA.removeEventListener("click", function () {
            subtractTime()

        })

        responseA.addEventListener("click", function () {
            question4()

        })
    }

    function question4() {
        questionEl.innerHTML = " 4/5. How do you add a comment in Javascript to have more than one line?"
        responseA.textContent = "a: /* This comment has more than one line */"
        responseB.textContent = "b: <!-- This comment has more than one line -->"
        responseC.textContent = "c: //This comment has more than one line//..   "
        responseD.textContent = "d: /!This comment has more than one line!/"

        responseC.removeEventListener("click", function () {
            question3()

        })

        responseA.removeEventListener("click", function () {
            question4()

        })


        responseA.addEventListener("click", function () {
            question5()

        })

    }

    function question5() {
        questionEl.innerHTML = "5/5. How do you declare a JavaScript variable?"
        responseA.innerHTML = "v carName"
        responseB.innerHTML = "var carName"
        responseC.innerHTML = "variable carName"
        responseD.textContent = "!v carName"

        responseA.removeEventListener("click", function () {
            question5()

        })
        responseC.removeEventListener("click", function () {
            question3()

        })
        responseA.addEventListener("click", function () {
            subtractTime()

        })
        responseB.removeEventListener("click", function () {
            subtractTime()
        })
        responseB.addEventListener("click", function () {
            endScreen()
        })
    }
        function endScreen() {
            var highScore = timeLeft
            var highId = document.getElementById("idsubmit")
            localStorage.setItem("hs", highScore);
            localStorage.setItem("id", highId);

            questionEl.innerHTML = "Game Over"
            document.getElementById("a").style.visibility = "hidden"
            document.getElementById("b").style.visibility = "hidden"
            document.getElementById("c").style.visibility = "hidden"
            document.getElementById("d").style.visibility = "hidden"
            displayMessage()
        }
        function displayMessage() {
            questionEl.innerHTML = "Congrats!" + highId + "your final score is" + timeLeft
        }

}

startButton.onclick = startQuiz;


