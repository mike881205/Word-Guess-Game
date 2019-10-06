// ================================================================================================================================================
// Global Variables
// ================================================================================================================================================

// Create an array of words
var words = [
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
    var word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
    
    //DOM Manipulation
    var docUnderScore = document.getElementsByClassName("underscore");
    var docWrongGuess = document.getElementsByClassName("wrongGuess"); 

    // Create answer arrays
    var answerArray = [];
    for ( var i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            answerArray[i] = " ";
        }else {
        answerArray[i] = "_"    
        }
    }
    docUnderScore[0].innerHTML = answerArray.join("&nbsp");
    var wrongLetter = [];
    var remainingLetters = word.length;
    
    // ================================================================================================================================================
    // Game
    // ================================================================================================================================================
    
    //Get guess from player
    document.addEventListener("keypress", (event) => {
    var guess = event.key.toLowerCase();
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
        }
      };
    // If user's gues is correct
      if (answerArray.join("") === word) {
        alert("You Survived!");
    // If user's guess is incorrect
    } else {
        wrongLetter.push(guess.toUpperCase());
        docWrongGuess[0].innerHTML = wrongLetter;
    };
    
    docUnderScore[0].innerHTML = answerArray.join("&nbsp");
    })