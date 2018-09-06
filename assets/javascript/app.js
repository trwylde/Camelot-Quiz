    //Game starts on a splash page. Clicking the startButton starts the quiz and resets the page
$("#startButton").on("click", function()  {
  $("#startButton").remove();
  $("#jumbo").remove();
})

var questions = [
{
  question: "In which royal home was the famous 'Round Table'?",
  options: ["The Palace of Versailles","Windsor Castle","The Winter Palace","The Castle of Camelot"],
  answer: "The Castle of Camelot",
  image:"assets/images/favicon.png"
},
{
  question: "Who was the ruler of Camelot?",
  options: ["King Edward","King Arthur", "King James", "King Tut"],
  answer: "King Arthur",
  image:"assets/images/favicon.png"
},
{
  question: "What was the name of the Queen of Camelot",
  options: ["Gwendolyn","Guinevere","Genevieve","Jacqueline"],
  answer: "Guinevere",
  image:"assets/images/favicon.png"
},
{
  question: "Why did the king have his knights meet at a round table?",
  options: ["He was once injured on the sharp corner of a rectangular table",
            "To signify that they would be best friends forever",
            "So that he could see everyone's faces",  
            "Everyone who sat around it was seen as trustworthy and equal"],
  answer: "Everyone who sat around it was seen as trustworthy and equal",
  image:"assets/images/favicon.png"
},
{
  question: "Which of these men was one of the king's knights?",
  options: ["Bors the Younger","Robert the Bruce","Richard the Lionheart","Pliny the Elder"],
  answer: "Bors the Younger",
  image:"assets/images/favicon.png"
},
{
  question: "What sage was was a mentor and advisor to the king and even orchestrated his birth through magic and intrigue",
  options: ["Darwin","Marvin","Merlin","Marlon Wayans"],
  answer: "",
  image:"assets/images/favicon.png"
},
{
  question: "Which one of the knights famously had an affair with the Queen and led to the kingdom's divide?",
  options: ["Sir Mixalot","Sir Lancelot","Sir Skipsalot","Sir Spamalot"],
  answer: "Sir Lancelot",
  image:"assets/images/favicon.png"
},
{
  question: "What is the name of the legendary, magical sword given to the king by The Lady of the Lake",
  options: ["Pridwen","Rhongomiant","Carnwennan","Excalibur"],
  answer: "Excalibur",
  image:"assets/images/favicon.png"
},
{
  question: "Sir Lancelot, the king's most trusted knight has a son who also ascends to the Round Table. What was his name?",
  options: ["Galahad","Gilead","Eaglehead","Gaheris"],
  answer: "Galahad",
  image:"assets/images/favicon.png"
},
{
  question: "Which knight falls in love with his uncle's intended bride while on a mission to rescue her?",
  options: ["Percival","Gawain","Tristan","Bedivere"],
  answer: "Tristan",
  image:"assets/images/favicon.png"
},
{
  question: "What is the name of the young woman whose heart was stolen during the rescue mission",
  options: ["Hilda","Morgana","Oprah","Isolde"],
  answer: "Isolde",
  image:"assets/images/favicon.png"
},
{
  question: "What nephew of the king sat at the Round Table and is described as being valiant, agile and handsome, with one arm shorter that the other?",
  options: ["Gaheris","Agravain","Caradoc","Segwarides"],
  answer: "Gaheris",
  image:"assets/images/favicon.png"
}];

var quiz = {
  questions:questions,
  currentQuestion:0,
  counter:30,
  correct:0,
  incorrect:0,
  countdown: function() {

  },
  loadQuestion: function()  {

  },
  nextQuestion: function()  {

  },
  timeUp: function()  {

  },
  results: function() {

  },
  clicked: function() {

  },
  answeredCorrectly() {

  },
  answeredIncorrectly() {

  },
  reset: function() {

  }

}




