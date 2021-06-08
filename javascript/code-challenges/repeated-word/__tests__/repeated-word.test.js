'use strict';
const findRepeatedWord = require('../repeated-word.js');

describe('findRepeatedWord function', () => {
	it('should throw an error for non-string inputs', () => {
		expect(() => {
			findRepeatedWord(100);
		}).toThrow('Must be a valid string');
		expect(() => {
			findRepeatedWord([]);
		}).toThrow('Must be a valid string');
		expect(() => {
			findRepeatedWord({});
		}).toThrow('Must be a valid string');
		expect(() => {
			findRepeatedWord(true);
		}).toThrow('Must be a valid string');
		expect(() => {
			findRepeatedWord(null);
		}).toThrow('Must be a valid string');
		expect(() => {
			findRepeatedWord();
		}).toThrow('Must be a valid string');
	});

	it('should correctly return the only repeated word in a string', () => {
		let string = 'the cat jumped over the hat';

		let found = findRepeatedWord(string);

		expect(found).toEqual('the');
	});

	it('should return the first repeated word and not the second', () => {
		let string1 = 'Who what when were why.. what when?';
		let found = findRepeatedWord(string1);

		expect(found).toEqual('what');
	});

	it('should correctly return no found repeated words if none exist in the input string', () => {
		let noRepeats = 'this is my cool non word repeating sentence.';
		let result = findRepeatedWord(noRepeats);

		expect(result).toEqual('There are no repeated words.');
	});
});
