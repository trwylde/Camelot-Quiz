    //Game starts on a splash page. Clicking the startButton starts the quiz and resets the page
$("#startButton").on("click", function()  {
  $("#startButton").remove();
  $("#instructions").remove();
  quiz.loadQuestion();
})

$(document).on("click",".option-button",function(e)  {
  quiz.clicked(e);
})

$(document).on("click","#reset",function()  {
  quiz.reset();
})
var questions = [
{
  question: "In which royal home was the famous 'Round Table'?",
  options: ["A: The Palace of Versailles","B: Windsor Castle","C: The Winter Palace","D: The Castle of Camelot"],
  answer: "D: The Castle of Camelot",
  image:"assets/images/castle.gif"
},
{
  question: "Who was the ruler of Camelot?",
  options: ["A: King Edward","B: King Arthur", "C: King James", "D: King Tut"],
  answer: "B: King Arthur",
  image:"assets/images/king_arthur.png"
},
{
  question: "What was the name of the Queen of Camelot?",
  options: ["A: Gwendolyn","B: Guinevere","C: Genevieve","D: Jacqueline"],
  answer: "B: Guinevere",
  image:"assets/images/queen_guinevere.gif"
},
{
  question: "Why did the king have his knights meet at a round table?",
  options: ["A: He was once injured on the sharp corner of a rectangular table",
            "B: To signify that they would be best friends forever",
            "C: So that he could see everyone's faces",  
            "D: Everyone who sat around it was seen as trustworthy and equal"],
  answer: "D: Everyone who sat around it was seen as trustworthy and equal",
  image:"assets/images/round_table.gif"
},
{
  question: "Which of these men was one of the king's knights?",
  options: ["A: Bors the Younger","B: Robert the Bruce","C: Richard the Lionheart","D: Pliny the Elder"],
  answer: "A: Bors the Younger",
  image:"assets/images/knights.gif"
},
{
  question: "What sage advisor to the king orchestrated his birth through magic and intrigue?",
  options: ["A: Darwin","B: Marvin","C: Merlin","D: Marlon Wayans"],
  answer: "C: Merlin",
  image:"assets/images/merlin.gif"
},
{
  question: "Which one of the knights famously had an affair with the Queen and led to the kingdom's divide?",
  options: ["A: Sir Mixalot","B: Sir Lancelot","C: Sir Skipsalot","D: Sir Spamalot"],
  answer: "B: Sir Lancelot",
  image:"assets/images/lancelot.gif"
},
{
  question: "What is the name of the legendary, magical sword given to the king by The Lady of the Lake?",
  options: ["A: Pridwen","B: Rhongomiant","C: Carnwennan","D: Excalibur"],
  answer: "D: Excalibur",
  image:"assets/images/excalibur.gif"
},
{
  question: "Sir Lancelot had a son who also ascends to the Round Table. What was his name?",
  options: ["A: Galahad","B: Gilead","C: Eaglehead","D: Gareth"],
  answer: "A: Galahad",
  image:"assets/images/galahad.gif"
},
{
  question: "Which knight falls in love with his uncle's intended bride while on a mission to rescue her?",
  options: ["A: Percival","B: Gawain","C: Tristan","D: Bedivere"],
  answer: "C: Tristan",
  image:"assets/images/tristan.gif"
},
{
  question: "What is the name of the young woman whose heart was stolen during the rescue mission?",
  options: ["A: Hilda","B: Morgana","C: Oprah","D: Isolde"],
  answer: "D: Isolde",
  image:"assets/images/isolde.gif"
},
{
  question: "The king's nephew, Sir ___ , is described as valiant, agile and handsome, with one arm shorter that the other.",
  options: ["A: Gaheris","B: Agravain","C: Caradoc","D: Segwarides"],
  answer: "A: Gaheris",
  image:"assets/images/gaheris.png"
}];

var quiz = {
  questions: questions,
  currentQuestion: 0,
//  currentImage: 0,
  counter: 15,
  correct: 0,
  incorrect: 0,
  unanswered: 0,

  countdown: function() {
    quiz.counter--;
    $("#counter").html(quiz.counter);
    if(quiz.counter <= 0) {
      console.log("TIME UP!");
      quiz.timeUp();
    }
  },

  loadQuestion: function()  {
    timer = setInterval(quiz.countdown,1000);
    $("#gameDisplay").html("<h2> Time remaining <span id='counter'> 15 </span> seconds</h2>");
    $("#gameDisplay").append("<h2>" + questions[quiz.currentQuestion].question + "</h2>");
//    $("imageDisplay").remove();
        //For loop to dynamically create buttons equal to the options.
    for(var i = 0; i < questions[quiz.currentQuestion].options.length; i ++)  {
      $("#gameDisplay").append("<button class='option-button' id='button-" + i + "' data-name='" + questions[quiz.currentQuestion].options[i] +"' >" + 
        questions[quiz.currentQuestion].options[i] + "</button>");
    }
  },

  /*displayImage: function()  {
    $("#imageDisplay").append("<img src="+ questions[quiz.currentQuestion].image +">");
  }, */

  nextQuestion: function()  {
    quiz.counter = 15;
    $("#counter").html(quiz.counter);
    quiz.currentQuestion++;
    quiz.loadQuestion();
    $("#imageDisplay").empty();
  },

  timeUp: function()  {
    clearInterval(timer);
    quiz.unanswered++;
    $("#gameDisplay").html("<h2>You're out of time!</h2>"); 
    $("#gameDisplay").append("<h3>The answer you were looking for is " + 
      questions[quiz.currentQuestion].answer + "</h3>");
    $("#imageDisplay").append("<img src="+ questions[quiz.currentQuestion].image +">");

      if(quiz.currentQuestion == questions.length - 1) {
        setTimeout(quiz.results, 3*1000);
      }
      else{
        setTimeout(quiz.nextQuestion, 3*1000);
      }
  },
  results: function() {
    clearInterval(timer);
    $("#gameDisplay").html("<h2>All done!</h2>");
    $("#gameDisplay").append("<h3>Correct answers: " + quiz.correct + "</h3>");
    $("#gameDisplay").append("<h3>Incorrect answers: " + quiz.incorrect + "</h3>");
    $("#gameDisplay").append("<h3>Unaswered: " + quiz.unanswered + "</h3>");
    $("#gameDisplay").append("<button id='reset'> RESET</button>");
  },

  clicked: function(e) {
    clearInterval(timer);
    if($(e.target).data("name") == questions[quiz.currentQuestion].answer) {
      quiz.answeredCorrectly();
    }
    else{
      quiz.answeredIncorrectly();
    }
  },

  answeredCorrectly: function() {
      console.log("YOU GOT IT!");
      clearInterval(timer);
      quiz.correct++;
      $("#gameDisplay").html("<h2>You got it right!</h2>");
      //append image at current index
//     $("imageDisplay").attr('src','questions[quiz.currentQuestion].image');

    $("#imageDisplay").append("<img src="+ questions[quiz.currentQuestion].image +">");
      
      if(quiz.currentQuestion == questions.length - 1) {
        setTimeout(quiz.results, 3*1000);
      }
      else{
        setTimeout(quiz.nextQuestion, 3*1000);
      }
  },

  answeredIncorrectly: function() {
      console.log("WRONG!");
      clearInterval(timer);
      quiz.incorrect++;
      $("#gameDisplay").html("<h2>Wrong answer!</h2>");
      $("#gameDisplay").append("<h3>The answer you were looking for is " + 
      questions[quiz.currentQuestion].answer + "</h3>");
      $("#imageDisplay").append("<img src="+ questions[quiz.currentQuestion].image +">");
      
      if(quiz.currentQuestion == questions.length - 1) {
        setTimeout(quiz.results, 3*1000);
      }
      else{
        setTimeout(quiz.nextQuestion, 3*1000);
      }
  },


  reset: function() {
    $("#imageDisplay").empty();
    quiz.currentQuestion = 0;
    quiz.counter = 15;
    quiz.correct = 0;
    quiz.incorrect = 0;
    quiz.unanswered = 0;
    quiz.loadQuestion();
  }

}




