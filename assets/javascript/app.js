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


$(document).ready(function () {

    var quizQuestions = [{

        question: "Which artist sings the song 'Don't Watch Me Cry'?",
        answers: ["Linkin Park", "Jorja Smith", "Grace"],
        correctAnswer: "Jorja Smith",
    },
    {
        question: "Which artist has a lotus flower tattooed on her hand?",
        answers: ["Kehlani", "Demi Lovato", "Hailee Steinfeld"],
        correctAnswer: "Kehlani",
    },
    {
        question: "Which artist sings the song 'Heavy (feat. Kiiara)",
        answers: ["Phora", "Billie Ellish", "Linkin Park"],
        correctAnswer: "Linkin Park",
    },
    {
        question: "Which artist's birth name is Gabriella Wilson",
        answers: ["H.E.R.", "Lady Gaga", "Sia"],
        correctAnswer: "H.E.R.",

    },
    {
        question: "'Post Traumatic' by Mike Shinoda was written after the passing of",
        answers: ["XXXtentacion", "Chester Bennington", "Chris Cornell"],
        correctAnswer: "Chester Bennington"
    },
    {
        question: "What is Incubus' most recently released album",
        answers: ["8", "Make Yourself", "Morning View"],
        correctAnswer: "8",
    },
    {
        question: "Which one of the following artists is not a christian rapper",
        answers: ["Ivan B", "Nas", "NF"],
        correctAnswer: "Nas",
    },
    {
        question: "The song 'No Scope' is sung by",
        answers: ["Russ", "Phora", "Joyner Lucas"],
        correctAnswer: "Phora"
    },
    {
        question: "Summer Walker sings which song?",
        answers: ["All These Years", "Body Count", "Karma"],
        correctAnswer: "Karma"
    },
    {
        question: "Tip Toe (feat. French Montana) is sung by:",
        answers: ["Imagine Dragons", "Jason Derulo", "Russ"],
        correctAnswer: "Jason Derulo"
    },
    ];


    var triviaQuiz = $("#triviaGame");
    var results = $("#results");
    var submitButton = $("#submit");

    console.log(quizQuestions)


    function triviaGame() {
   
        console.log("inside triviaGame function");

        var output = [];
        var answers;

        // for each question...
        for (var i = 0; i < quizQuestions.length; i++) {

            console.log("looping");
            // first reset the list of answers
            answers = [];

            // for each available answer to this question...
            // for (quizQuestions[i] ) {

            // ...add an html radio button
            //    answers.push(
            //        '<label>'
            //        + '<input type="radio" name="question' + i + '" value="' + answers + '">'
            //       + answers + ': '
            //        + quizQuestions[i].answers.length
            //       + '</label>'
            //    );
            //   }

            console.log(quizQuestions[i].answers);

            let wrapper = $("<div>");
            let qDiv = $("<div>").text(quizQuestions[i].question);
            wrapper.append(qDiv);
            quizQuestions[i].answers.forEach(function (e, j) {
                let A1 = $("<div>").text(e);
                wrapper.append(A1);
            });
            $("#triviaGame").append(wrapper);


            output.push(
                '<div class="question">' + quizQuestions[i].question.length + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        function radioButton() {
            var x = document.getElementById("myRadio").value;
            document.getElementById("answers").innerHTML = x;
        }
        radioButton();

    }
    //timer
    var number = 30;

    var intervalId;

    $("#start").click(run);

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#show-number").html("<h2>" + number + "</h2>");

      if (number === 0) {

        stop();

        alert("Times Up! Let's see how you did!");
      }
    }

    function stop() {

      clearInterval(intervalId);
    }
    
    run();
    
   // setTimeout(thirtySeconds, 1000);
   // setTimeout(tenSeconds, 10000);
   // setTimeout(timeUp, 30000);

   // function thirtySeconds() {
   //     $("#time-left").html("<h2> 30 Seconds!</h2>")
   //     console.log("10 seconds left")
  //  }

   // function tenSeconds() {
    //    $("#time-left").html("<h2>About 5 Seconds Left!!!!!</h2>")
    //    console.log("5 seconds left")
   // }

   // function timeUp() {
    //    $("#time-left").html("<h2>Times Up!!!!!</h2>")
   //     console.log("done")

  //  }





    console.log(quizQuestions)
    console.log(run)



    function results() { };

    triviaGame();
    $("#submit").click(results);

});
