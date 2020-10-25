var timerCount = 100
var timerEl = document.querySelector("#timer")
var startButton = document.querySelector("#startButton")

timerEl.textContent = timerCount

startButton.addEventListener("click", function (event) {
    event.preventDefault
    var timer = window.setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount

        if (timerCount === 0) {
            clearInterval(timer)
        }
    }, 1000)
});

var questions = [
    {
        q: "What is the short cut for creating a basic html file?",
        choices: ["!", "?", "@", "H"],
        a: "A"
    },
    {
        q: "How do you access the first element of an array? ",
        choices: ["[0]", "[1]", "[2]", "3",],
        a: "A"
    },
    {
        q: "The first 'C' in CSS stands for?",
        choices: ["Crying", "Creamy", "Cascading", "Coding"],
        a: "C"
    },
    {
        q: "___.floor___.random()*100) will generate a random number between 1 and 100 ",
        choices: ["Number", "0", "Numero", "Math"],
        a: "D"
    },
    {
        q: "Someone who writes code for a living is called?",
        choices: ["Code Master", "Wizard", "Programmer", "Computer Magician"],
        a: "C"

    }
]


var questionsPointer = 0

var question = document.querySelector("#question")
var buttonA = document.querySelector("#buttonA")
var buttonB = document.querySelector("#buttonB")
var buttonC = document.querySelector("#buttonC")
var buttonD = document.querySelector("#buttonD")


function setQuestions() {

    if (questionsPointer === questions.length) {
        clearInterval(timer)
        alert("You are done with " + timerCount + " seconds left")
        return
    }

    question.textContent = questions[questionsPointer].q
    buttonA.textContent = questions[questionsPointer].choices[0]
    buttonB.textContent = questions[questionsPointer].choices[1]
    buttonC.textContent = questions[questionsPointer].choices[2]
    buttonD.textContent = questions[questionsPointer].choices[3]

}


setQuestions()

buttonA.addEventListener("click", function () {
    if (buttonA.getAttribute("data-answer") === questions[questionsPointer].a) {
        console.log("This is correct")
        questionsPointer++
        setQuestions()
    } else {
        console.log("wrong")
        timerCount -= 10
    }
})

buttonB.addEventListener("click", function () {
    if (buttonB.getAttribute("data-answer") === questions[questionsPointer].a) {
        console.log("This is correct")
        questionsPointer++
        setQuestions()
    } else {
        console.log("wrong")
        timerCount -= 10
    }
})

buttonC.addEventListener("click", function () {
    if (buttonC.getAttribute("data-answer") === questions[questionsPointer].a) {
        console.log("This is correct")
        questionsPointer++
        setQuestions()
    } else {
        console.log("wrong")
        timerCount -= 10
    }
})

buttonD.addEventListener("click", function () {
    if (buttonD.getAttribute("data-answer") === questions[questionsPointer].a) {
        console.log("This is correct")
        questionsPointer++
        setQuestions()
    } else {
        console.log("wrong")
        timerCount -= 10
    }
})



