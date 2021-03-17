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
    "Z"
 ];

// Global Variables
let gameSelectedLetter = "";
let winCounter = 0;
let loseCounter = 0;
let remainingUserGuesses = 10;
let wrongUserGuessesArray = [];

// Functions
function startGame(){
    generateRandomLetter();
};

function generateRandomLetter(){
  let letter  = lettersArray[Math.floor(Math.random() * lettersArray.length)];
    gameSelectedLetter = letter;
    console.log(`Computer selected Letter: ${gameSelectedLetter}`);
};

function checkUserGuess(userInput){
    if(userInput === gameSelectedLetter){
        winCounter++;
        console.log(`Wins: ${winCounter}`);
        $("#winCounter").text(winCounter);
        startGame();
    }else{
        wrongGuess(userInput);
    }
};


function wrongGuess(userInput){
    wrongUserGuessesArray.push(userInput);
    loseCounter++;
    console.log(`losses: ${loseCounter}`);
    $("#lossCounter").text(loseCounter);
    startGame();
}


startGame();
//  Function for capturing key clicks.
document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      let userInput = event.key.toUpperCase();
        console.log(`This is User Input: ${userInput}`);
        checkUserGuess(userInput);
    }
  };