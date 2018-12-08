//create a game that is capable of asking questions, generating right and wrong answers, calculating points,
//and working in a time frame.
//create a theme and research questions
//create the HTML and CSS to match the theme.
//what code needs to be written to generate questions
//what code needs to be written to receive the answers
//calculate score
//reset once the timer is complete
//alert the player once the game is done
//tally the correct and incorrect answers and display them on the screen
//add music clips
//hide
//iFrame video
//call on postions in the objects to play the videos




// var quizQuestions = [{

//   question: "Which artist sings the song 'Don't Watch Me Cry'?",
//   answers: ["Linkin Park", "Jorja Smith", "Grace"],
//   correctAnswer: "Jorja Smith",
// },
//{
//  question: "Which artist has a lotus flower tattooed on her hand?",
//  answers: ["Kehlani", "Demi Lovato", "Hailee Steinfeld"],
// correctAnswer: "Kehlani",
//  },
// {
//    question: "Which artist sings the song 'Heavy (feat. Kiiara)",
//   answers: ["Phora", "Billie Ellish", "Linkin Park"],
//   correctAnswer: "Linkin Park",
//  },
// {
//    question: "Which artist's birth name is Gabriella Wilson",
//    answers: ["H.E.R.", "Lady Gaga", "Sia"],
//   correctAnswer: "H.E.R.",

// },
//  {
//   question: "'Post Traumatic' by Mike Shinoda was written after the passing of",
//   answers: ["XXXtentacion", "Chester Bennington", "Chris Cornell"],
//    correctAnswer: "Chester Bennington"
// },
// {
//   question: "What is Incubus' most recently released album",
//  answers: ["8", "Make Yourself", "Morning View"],
//  correctAnswer: "8",
//  },
// {
//    question: "Which one of the following artists is not a christian rapper",
//    answers: ["Ivan B", "Nas", "NF"],
//    correctAnswer: "Nas",
// },
// {
//     question: "The song 'No Scope' is sung by",
//   answers: ["Russ", "Phora", "Joyner Lucas"],
//   correctAnswer: "Phora"
// },
//  {
//   question: "Summer Walker sings which song?",
//   answers: ["All These Years", "Body Count", "Karma"],
//    correctAnswer: "Karma"
// },
// {
//  question: "Tip Toe (feat. French Montana) is sung by:",
//   answers: ["Imagine Dragons", "Jason Derulo", "Russ"],
//  correctAnswer: "Jason Derulo"
//  },
//  ];

$(document).ready(function() {

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
    var wrong =0;


    if (question1 == "Jorja Smith") {
        correct++;
    } else
        wrong ++;
    if (question2 == "Kehlani") {
        correct++;
    }else
        wrong ++;
    if (question3 == "Linkin Park") {
        correct++;
    }else
        wrong ++;
    if (question4 == "H.E.R.") {
        correct++;
    }else
        wrong ++;
    if (question5 == "Chester Bennington") {
        correct++;
    }else
        wrong ++;
    if (question6 == "8") {
        correct++;
    }else
        wrong ++;
    if (question7 == "Nas") {
        correct++;
    }else
        wrong ++;
    if (question8 == "Phora") {
        correct++;
    }else
        wrong ++;
    if (question9 == "Karma") {
        correct++;
    }else
        wrong ++;
    if (question10 == "Jason Derulo") {
        correct++;
    }else
    wrong ++;


document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("correct").innerHTML = "You got " + correct + " correct.";
document.getElementById("wrong").innerHTML = "You got " + wrong + " wrong :(";
    }

check() 


var number = 60;

var intervalId;

$("#resume").on("click", run);

function run() {
  intervalId = setInterval(decrement, 1000);
}

function decrement() {

  number--;

  $("#timer").html("<h2>" + number + "</h2>");

  if (number === 0) {

    stop();

    alert("Time Up!");
  }
}

function stop() {

  clearInterval(intervalId);
}

run();



});

