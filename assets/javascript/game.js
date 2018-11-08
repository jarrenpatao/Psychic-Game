// Defined Variables
var guessLeft = 5;
var wins = 0;
var losses = 0;
var ties = 0;
var questionIndex = 0;
var computerChoice = ['0','1','2','3','4','5','6','7','8','9'];

// Defined Main Functions
function resetGame() {
  var gueLef = 5;
  var wins = 0;
  var losses = 0;
}

// Main Process

for(var i = 0; i < computerChoice(Math.floor(Math.random[i])); i++){
  console.log(computerChoice[i]);
}

document.onkeyup = function(event){
  if(event.key === "0" || event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5" || event.key === "6" || event.key === "7" || event.key === "8" || event.key === "9"){
    if(event.key === computerChoice){
      alert("sweet!");
      wins++;
      } 
      else {
        alert("wrong.");
        guessLeft--;
      }
    }
  }

// Reset Game
if (gueLef === 0){
  resetGame();
}