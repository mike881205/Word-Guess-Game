// // ================================================================================================================================================
// // Global Variables
// // ================================================================================================================================================
// // Create an array of words
// var word = [
//     "michael myers", "freddy krueger", "jason voorhees", "xenomorph", "pinhead", "ghostface", "hannibal lector", "pennywise", "leatherface", "chucky", "jack torrance"]

// var rightLetter = [];
// var wrongLetter = [];
// var underScore = [];

// // Choose word randomly
//     var randNum = Math.floor(Math.random() * word.length);
//     var randWord = word[randNum];
//     console.log(randWord);

// // DOM manipulation
// var docUnderScore = document.getElementsByClassName("underscore");
// var docRightGuess = document.getElementsByClassName("rightGuess");
// var docWrongGuess = document.getElementsByClassName("wrongGuess");


// // ================================================================================================================================================
// // Main
// // ================================================================================================================================================
// // Create underscore based on length of word
//     var generateUnderscore = () => {
//         for ( var i = 0; i < randWord.length; i++) {
//             underScore.push("_");
//         }
//         return underScore;
//     }

// // Get user guess
//     document.addEventListener("keypress", (event) => {
//         var letterPressed = String.fromCharCode(event.keyCode);
//         // if user's guess is correct    
//         if (randWord.indexOf(letterPressed) > -1) {
//         // replace underscore with correct letter
//             underScore[randWord.indexOf(letterPressed)] = letterPressed;
//             docUnderScore[0].innerHTML = underScore.join(" ");
            
//         // check to see if user word matches guess
//             if (underScore.join("") === randWord) {
//                 alert("You Survived!");
//             }
//         }
//         // if user's guess is incorrect     
//         else {
//             wrongLetter.push(letterPressed);
//             docWrongGuess[0].innerHTML = wrongLetter;
//         }

//     });

//     docUnderScore[0].innerHTML = generateUnderscore().join(" ");


// Create an array of words
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
    ];
    // Pick a random word
    var word = words[Math.floor(Math.random() * words.length)];
    // Set up the answer array
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    }
    var remainingLetters = word.length;
    // The game loop
    while (remainingLetters > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));
    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
    // Exit the game loop
    break;
    } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
    } else {
    // Update the game state with the guess
    for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
    answerArray[j] = guess;
    remainingLetters--;
    }
    }
    }
    // The end of the game loop
    }
    // Show the answer and congratulate the player
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);