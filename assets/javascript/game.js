// ================================================================================================================================================
// Global Variables
// ================================================================================================================================================
// Create an array of words
var word = [
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
]

var rightLetter = [];
var wrongLetter = [];
var underScore = [];

// Choose word randomly
    var randNum = Math.floor(Math.random() * word.length);
    var randWord = word[randNum];
    console.log(randWord);

// DOM manipulation
var docUnderScore = document.getElementsByClassName("underscore");
var docRightGuess = document.getElementsByClassName("rightGuess");
var docWrongGuess = document.getElementsByClassName("wrongGuess");


// ================================================================================================================================================
// Main
// ================================================================================================================================================
// Create underscore based on length of word
    var generateUnderscore = () => {
        for ( var i = 0; i < randWord.length; i++) {
            underScore.push("_");
        }
        return underScore;
    }

// Get user guess
    document.addEventListener("keypress", (event) => {
        var keyWord = String.fromCharCode(event.keyCode);
        // if user's guess is correct    
        if (randWord.indexOf(keyWord) > -1) {
        // replace underscore with correct letter
            underScore[randWord.indexOf(keyWord)] = keyWord;
            docUnderScore[0].innerHTML = underScore.join(" ");
            
        // check to see if user word matches guess
            if (underScore.join("") === randWord) {
                alert("You Survived!");
            }
        }
        // if user's guess is incorrect     
        else {
            wrongLetter.push(keyWord);
            docWrongGuess[0].innerHTML = wrongLetter;
        }

    });

    docUnderScore[0].innerHTML = generateUnderscore().join(" ");

    

