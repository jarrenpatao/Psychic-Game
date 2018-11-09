// Defined Variables
var guessLeft = 5;
var wins = 0;
var losses = 0;
// var computerOption = ['0','1','2','3','4','5','6','7','8','9'];
var computerChoice = Math.floor(Math.random() * 10);

    console.log(computerChoice)

// Defined Main Functions
var updateWins = function() {
  document.querySelector("#wins").innerHTML = "Wins: " + wins;
};
var updateLosses = function() {
  document.querySelector("#losses").innerHTML = "Losses: " + losses;
};
var updateGuesses = function() {
  document.querySelector("#guesses").innerHTML = "Guesses Left: " + guessLeft;
};

var generateGuess = function() {
  computerChoice = Math.floor(Math.random() * 10);
  
}

function resetGame() {
  guessLeft = 5;
  wins = 0;
  losses = 0;
  updateGuesses();
}

// Main Process
$(document).ready(function() {

  document.onkeyup = function(event) {
  var userInput = parseInt(event.key);
  if (isNaN(userInput)) {

    return;}

  if (userInput === computerChoice) {
      alert("Correct!");
      wins++;
      updateWins();
      guessLeft = 5;
      generateGuess();
      console.log(computerChoice);
    }
    else {
      alert("Wrong!");
      guessLeft--;
      updateLosses();
    }
  
  if (guessLeft === 0) {
    alert("You're pretty bad.");
    losses++;
    guessLeft = 5;
    generateGuess();
      console.log(computerChoice);
  }
  if (losses === 5) {
    alert("How have you made it this far in life... start over.");
    resetGame();
  
  };;
    updateWins();
    updateLosses();
    updateGuesses();
};})