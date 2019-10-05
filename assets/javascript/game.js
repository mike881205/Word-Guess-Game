// ================================================================================================================================================
// Global Variables
// ================================================================================================================================================
// Create an array of words
var words = [
"michael myers", 
"freddy krueger", 
"jason voorhees", 
"xenomorph", 
"pinhead", 
"ghostface", 
"hannibal lector", 
"pennywise", 
"leatherface", 
"chucky", 
"jack torrance"
];

// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

//DOM Manipulation
// DOM manipulation
var docUnderScore = document.getElementsByClassName("underscore");
var docWrongGuess = document.getElementsByClassName("wrongGuess");
var docPrompt = document.getElementsByClassName("prompt");
// Create answer array
var answerArray = [];
for ( var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

//Game Loop


//Get guess from player
document.addEventListener("keypress", (event) => {
var guess = event.key.toLocaleLowerCase();
for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
    }
  };
  


docUnderScore[0].innerHTML = answerArray.join(" ");})
