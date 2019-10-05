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

// var wordsPic = [];

// wordsPic[0] = new Image();
// wordsPic[0].src = "assets/images/michaelMyers.jpg";

// wordsPic[1] = new Image();
// wordsPic[1].src = 'images/img/Splash_image2.jpg';

// wordsPic[2] = new Image();
// wordsPic[2].src = 'images/img/Splash_image3.jpg';

// wordsPic[3] = new Image();
// wordsPic[3].src = 'images/img/Splash_image4.jpg';

// wordsPic[4] = new Image();
// wordsPic[4].src = 'images/img/Splash_image5.jpg';

// wordsPic[5] = new Image();
// wordsPic[5].src = 'images/img/Splash_image6.jpg';

// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

//DOM Manipulation
var docUnderScore = document.getElementsByClassName("underscore");
var docWrongGuess = document.getElementsByClassName("wrongGuess");

// Match Picture to word


// var x = myFunction(words[i], wordsPic[i])

// function myFunction(a, b) {
//     if (a = words[0]) {
//         return b = wordsPic[0]
//     }   
    
// }
// console.log(x)





// Create answer arrays
var answerArray = [];
for ( var i = 0; i < word.length; i++) {
    if (word[i] === " ") {
        answerArray[i] = " ";
    }else {
    answerArray[i] = "_"    
    }
}
docUnderScore[0].innerHTML = answerArray.join(" ");
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
    wrongLetter.push(guess);
    docWrongGuess[0].innerHTML = wrongLetter;
};

docUnderScore[0].innerHTML = answerArray.join(" ");
})
