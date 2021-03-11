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
let gameSelectedLetter = generateRandomLetter();
console.log(`The games random selected letter: ${gameSelectedLetter}`);




// Functions
function generateRandomLetter(){
  let letter  = lettersArray[Math.floor(Math.random() * lettersArray.length)];
    return letter;
};



//  Function for capturing key clicks.
document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      let userInput = event.key.toUpperCase();
        console.log(`This is User Input: ${userInput}`);
    }
  };