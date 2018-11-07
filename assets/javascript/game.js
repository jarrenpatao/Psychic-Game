var gueLef = 5;
var wins = 0;
var losses = 0;
var ties = 0;
var computerChoices = ['a','e','i','o','u','h','k','l','m','n','p','w',"'"];

document.write("Guess what letter I'm thinking of in the Hawaiian alphabet...");

document.onkeyup = function(event) {
  var userGuess = event.key;
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  if (userGuess === computerChoices) {
    wins++;
  }
  document.getElementById(userInput);
}