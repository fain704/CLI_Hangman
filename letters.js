var wordFn = require('./words.js');
var word;
var lettersArr = [];
var guessesArr = [];

//selects new word and creates lettersArr and guessesArr for use in index.js
function Letters(){
	word = wordFn.SelectWord();
	for (var i = 0; i < word.length; i++){
		lettersArr[i] = word[i];
		guessesArr[i] = '_';
	}
};


module.exports = {lettersArr, guessesArr, Letters};