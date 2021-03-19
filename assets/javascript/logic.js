lettersArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Global Variables
let gameSelectedLetter = "";
let winCounter = 0;
let loseCounter = 0;
let remainingUserGuesses = 10;
let wrongUserGuessesArray = [];

// Functions
function startGame() {
  generateRandomLetter();
}

function generateRandomLetter() {
  let letter = lettersArray[Math.floor(Math.random() * lettersArray.length)];
  gameSelectedLetter = letter;
  console.log(`Computer selected Letter: ${gameSelectedLetter}`);
  $("#guessesLeftCounter").text(remainingUserGuesses);
}

function checkUserGuess(userInput) {
  if (userInput === gameSelectedLetter) {
    winCounter++;
    console.log(`Wins: ${winCounter}`);
    $("#winCounter").text(winCounter);
    resetGuessCounter()
    resetWrongUserGuessesArray()
    startGame();
  } else {
    wrongGuess(userInput);
  }
}

function wrongGuess(userInput) {
  remainingUserGuesses--;
  $("#guessesLeftCounter").text(remainingUserGuesses);
  wrongUserGuessesArray.push(userInput);
  $("#already_guessed_container").text(wrongUserGuessesArray)
  checkRemainingGuesses();
}



function checkRemainingGuesses() {
  if (remainingUserGuesses === 0) {
    loseCounter++;
    $("#lossCounter").text(loseCounter);
    resetGuessCounter();
    resetWrongUserGuessesArray()
    startGame(); 
  }
}
function resetGuessCounter() {
  remainingUserGuesses = 10;
}
function resetWrongUserGuessesArray(){
    wrongUserGuessesArray = [];
    $("#already_guessed_container").empty();
};

startGame();
//  Function for capturing key clicks.
document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    let userInput = event.key.toUpperCase();
    console.log(`This is User Input: ${userInput}`);
    checkUserGuess(userInput);
  }
};
