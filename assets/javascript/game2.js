// ================================================================================================================================================
// Global Variables
// ================================================================================================================================================

// Create an array of words
let words = [
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

let guessQuote = [
    "The Shape, Pure Evil",
    "Man of your dreams, 'Welcome to prime time!'",
    "His favorite sport is hockey, Had a bad experience at summer camp",
    "The 'Perfect Organism', ",
    "'You Opened the Box!', ",
    "'What's your favorite movie?'",
    "Enjoys a nice Chianti with his dinner",
    "Sleeps for 27 years, A floater",
    "From the Lone Star state, Fond of mechanical landscaping tools",
    "One of the 'Good Guys', Doesn't play well with other children",
    "A dull boy, 'Here's Johnny!'"
]

const maxTries = 10
let remainingGuesses = 0;
let gameStarted = false;
let hasFinished = false;
let wins = 0;
let answerArray = [];
let wrongLetter = [];
let remainingLetters = word.length;

// Reset game
function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;
    answerArray = [];
    wrongLetter = [];
    for ( let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        if (word[i] === " ") {
            answerArray[i] = " ";
    }
}};
docUnderScore[0].innerHTML = answerArray.join("&nbsp");



// Pick a random word
let word = words[Math.floor(Math.random() * words.length)];
console.log(word);

//DOM Manipulation
let docUnderScore = document.getElementsByClassName("underscore");
let docWrongGuess = document.getElementsByClassName("wrongGuess");

// Create answer arrays
let answerArray = [];
for ( let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    if (word[i] === " ") {
        answerArray[i] = " ";
}
}
docUnderScore[0].innerHTML = answerArray.join("&nbsp"); 

// ================================================================================================================================================
// Game
// ================================================================================================================================================

//Get guess from player
document.addEventListener("keypress", (event) => {
let guess = event.key.toLowerCase();
for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
        answerArray[j] = guess.toUpperCase();
        remainingLetters--;
    }
  };
// If user's gues is correct
  if (answerArray.join("") == word) {
    alert("You Survived!");
// If user's guess is incorrect
} else {
    wrongLetter.push(guess.toUpperCase());
    docWrongGuess[0].innerHTML = wrongLetter;
};

docUnderScore[0].innerHTML = answerArray.join("&nbsp");
})
