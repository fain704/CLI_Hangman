var words = [
			'javascript',
			'css',
			'bootstrap',
			'node',
			'jquery',
			'sql',
			'mongodb',
			'ajax',
			'api',
			'golang',
			'swift',
			'java',
			'fortran',
			'basic',
			'pascal',
			'lisp',
			'visualbasic',
			'scratch',
			'apl',
			'caml',
			'kotlin',
			'thinbasic',
			'snobol'
			]

//SelectWord function selects new word from array for use in letters.js
function SelectWord() {
	return words[Math.floor(Math.random()*words.length)];
};

module.exports = {SelectWord};