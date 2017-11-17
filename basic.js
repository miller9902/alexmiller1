var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesSoFar = [];
var userGuess = null;

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice)


document.onkeypress = function(event) {
	var userGuess = event.key;

	// guessesSoFar.push(userGuess);
	// console.log(guessesSoFar);
	var hasGuessed = document.getElementById('guessessofar').innerHTML;
	document.getElementById('guessessofar').innerHTML = hasGuessed + userGuess;
	console.log(hasGuessed);

	if (true) {}


	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		
	}

	if(userGuess === computerChoice) {
		wins++;
		alert("You Won!")
		guesses = 10;
		guessesSoFar = [];
	}else{
		guesses--;
	}

	if(guesses === 0) {
		losses++;
		alert("You Lost");
		guesses = 10;
		guessesSoFar = [];
	}



	document.getElementById('wins').innerHTML = "Wins: " + wins;
	document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;

}