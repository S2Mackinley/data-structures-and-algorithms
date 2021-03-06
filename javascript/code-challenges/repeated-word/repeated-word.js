'use strict';
const findRepeatedWord = (inputString) => {
	if (typeof inputString !== 'string') {
		throw new Error('Must be a valid string');
	}

	let word = inputString.toLowerCase().split(' ');

	let wordCount = {};

	for (let i = 0; i < word.length; i++) {
		if (wordCount[word[i]]) {
			return word[i];
		} else {
			wordCount[word[i]] = 1;
		}
	}
	return 'There are no repeated words.';
};

module.exports = findRepeatedWord;
