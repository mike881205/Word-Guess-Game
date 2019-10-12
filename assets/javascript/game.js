// ================================================================================================================================================
// Global Variables
// ================================================================================================================================================

// Create an array of words
let words = [
    "michael myers", 
    "freddy krueger", 
    "jason voorhees", 
    "pinhead", 
    "ghostface", 
    "pennywise", 
    "leatherface", 
    "chucky", 
    ];
    
    
    // Pick a random word
    let word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
    
    const maxTries = 10;
    let remainingGuesses = 0;
    let gameStarted = false;
    let hasFinished = false;
    let wins = 0;
    let guessedLetters = [];
    let remainingLetters = word.length;
    let answerArray = [];
    
    //DOM Manipulation
    let docUnderScore = document.getElementsByClassName("underscore");
    let docGuess = document.getElementsByClassName("guess"); 

    // Create answer arrays
    
    for ( let i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            answerArray[i] = " ";
        }else {
        answerArray[i] = "_"    
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
            answerArray[j] = guess;
            remainingLetters--;
        }
      };
    // If user's gues is correct
      if (answerArray.join("") === word) {
        guessedLetters.push(guess.toUpperCase());
        docGuess[0].innerHTML = "You've survived! Refresh to try again!";
    // If user's guess is incorrect
    } else {
        guessedLetters.push(guess.toUpperCase());
        docGuess[0].innerHTML = guessedLetters;
    };
    
    docUnderScore[0].innerHTML = answerArray.join("&nbsp");
    })