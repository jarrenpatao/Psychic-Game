// Defined Variables
var guessLeft = 5;
var wins = 0;
var losses = 0;
var computerOption = ['0','1','2','3','4','5','6','7','8','9'];
var computerChoice = computerOption[Math.floor(Math.random() * 10)];

    console.log(computerChoice)

// Defined Main Functions
function updateWins() {
  document.querySelector("#wins").innerHTML = "Wins: " + wins;
};
function updateLosses() {
  document.querySelector("#losses").innerHTML = "Losses: " + losses;
};
function updateGuesses() {
  document.querySelector("#guesses").innerHTML = "Guesses Left: " + guessLeft;
};

function resetGame() {
  var guessLeft = 5;
  var wins = 0;
  var losses = 0;
}

// Main Process
$(document).ready(function() {

  document.onkeyup = function(event) {
  var userInput = event.key;
  if (userInput === "0" || userInput === "1" || userInput === "2" || userInput === "3" || userInput === "4" || userInput === "5" || userInput === "6" || userInput === "7" || userInput === "8" || userInput === "9") {
    if (userInput === computerChoice) {
      alert("Correct!");
      wins++;
      updateWins();
      guessLeft = 5;
    }
    else {
      alert("Wrong!");
      guessLeft--;
      updateLosses();
    }
  }
  if (guessLeft === 0) {
    alert("You're pretty bad.");
    losses++;
    guessLeft = 5;
  }
  if (losses === 10) {
    alert("How have you made it this far in life... start over.");
    resetGame();
  
  };;
    updateWins();
    updateLosses();
    updateGuesses();
};})