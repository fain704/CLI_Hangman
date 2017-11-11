var inquirer = require('inquirer');
var letters = require('./letters.js');
var wins = 0;
var losses = 0;

var lettersArr;
var guessesArr;
var remainingGuesses;


//Game start function references lettersArr and guessesArr to same arrays in letters.js
function Game() {

	lettersArr = letters.lettersArr;
	guessesArr = letters.guessesArr;

//empties arrays
  lettersArr.length = 0;
  guessesArr.length = 0;

	remainingGuesses = 10;

//creates new arrays for word selected in letters.js
  letters.Letters();

  Guess();

}


//gameplay function
function Guess() {

	console.log(guessesArr);
	console.log('you have ' + remainingGuesses + ' guesses to get the word!!')

//asks for user input
	inquirer.prompt([
  {
	name: "guess",
	message: "Choose a letter: "
  }
  ]).then(function(answers){
  //if input doesn't match any index of lettersArr reduce remaining guesses and console log bad guess
  	if (lettersArr.indexOf(answers.guess) === -1){
  		remainingGuesses--;
		  console.log('Bad Guess!!');
  	}
  //loop through lettersArr and if guess matches place that value in matching index of guessArr
  	for (var i = 0; i < lettersArr.length; i++){
  		if(answers.guess === lettersArr[i]){
  			guessesArr[i] = lettersArr[i];
  			console.log("Good Guess!!!");
  		}
  	}
  //win loss continue conditions
  	if (lettersArr.toString() === guessesArr.toString()){
  		console.log('You won!!!');
      Restart();
    } else if (remainingGuesses === 0){
      console.log('You Lost!!!');
      Restart();
    } else {
      Guess();
    }

    

  });
};
//restart function asks for user input and either restarts the game or exits
function Restart() {

  inquirer.prompt([
  {
    name: "restart",
    message: "Would you like to play again?",
    type: "confirm"
  }
    ]).then(function(answers){
      if (answers.restart) {
        Game();
      } else {
        return;
      }
    });

};

Game();






    











