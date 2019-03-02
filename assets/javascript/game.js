// Array for all potential letter choices
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables to hold specfic values
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesMade = [];
var userGuess = document.onkeyup; // User guess is keyed in
var compGuess = letters[Math.floor(Math.random() * letters.length)]; // computer generates random selction from the letters array

// Function to run when user guess is made
document.onkeyup = function (event) {
  // Determines the key for the user
  userGuess = event.key;
  // 
  guessesMade.push(userGuess);

  if (compGuess == userGuess) {
    wins++;
    guessesLeft = 9;
    guessesMade = [];
  }
  
  if (compGuess != userGuess) {
    guessesLeft--;
  }

  if (guessesLeft == 0) {
    losses++;
    guessesLeft = 9;
    guessesMade = [];
  }

  var html =
    '<p><h1>The Psychic Game</h1></p>' +
    '<p>Guess what letter I am thinking of</p>' +
    '<p>Wins: ' + wins + '</p>' +
    '<p>Losses: ' + losses + '</p>' +
    '<p>Guesses left: ' + guessesLeft + '</p>' +
	'<p>Your guesses so far: ' + guessesMade + '</p>';
	
document.getElementById("psychicGame").innerHTML = html;

}