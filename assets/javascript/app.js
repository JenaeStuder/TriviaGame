// at the opening of the window this shows which divs are showing
// and which ones are hidden.
$(document).ready(function () {
    window.onload = $("#triviaQuestions").hide()
    window.onload = $("#after_submit").hide()
    window.onload = $("#button").hide()

    //the button click events that transfer you to the next parts of the quiz

    $("#startGame").click(function () {
        $("#triviaQuestions").show();
        $("#button").show()
        $("#opening").hide()
    });
    $("#button").click(function () {
        $("#after_submit").show()
        $("#button").hide()
        $("#triviaQuestions").hide()
        stop()
    })

    //timer

    var number = 60;

    var intervalId;

    $("#startGame").click(run);

    function run() {
        intervalId = setInterval(decrement, 1000);
        console.log("run")
    }

    function decrement() {

        number--;

        $("#timer").html("<h2>" + number + "</h2>");

        if (number === 0) {

            stop();
            check();
            $("#after_submit").show()
            $("#button").hide()
            $("#triviaQuestions").hide()

            alert("Times Up!");
            console.log("decrement")
        }
    }

    function stop() {

        clearInterval(intervalId);
        console.log("stop")
    }

});



//function that checks to see if the players answers are correct

function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var correct = 0;
    var wrong = 0;


    if (question1 == "Jorja Smith") {
        correct++;
    } else
        wrong++;
    if (question2 == "Kehlani") {
        correct++;
    } else
        wrong++;
    if (question3 == "Linkin Park") {
        correct++;
    } else
        wrong++;
    if (question4 == "H.E.R.") {
        correct++;
    } else
        wrong++;
    if (question5 == "Chester Bennington") {
        correct++;
    } else
        wrong++;
    if (question6 == "8") {
        correct++;
    } else
        wrong++;
    if (question7 == "Nas") {
        correct++;
    } else
        wrong++;
    if (question8 == "Phora") {
        correct++;
    } else
        wrong++;
    if (question9 == "Karma") {
        correct++;
    } else
        wrong++;
    if (question10 == "Jason Derulo") {
        correct++;
    } else
        wrong++;
    console.log("check")


    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("wrong").innerHTML = "You got " + wrong + " wrong.";
};

check();

