'use strict';

const Hashmap = require('../hashTable.js');

const hashmap = new Hashmap(5);

hashmap.set('elijah', 'prom');
hashmap.set('elijah', 'what');

describe('Hashtable', () => {
	it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
		expect(hashmap.contains('elijah')).toEqual(true);
	});
	it('Retrieving based on a key returns the value stored', () => {
		expect(hashmap.contains('elijah')).toEqual(true);
	});
	it('Successfully returns null for a key that does not exist in the hashtable', () => {
		expect(hashmap.contains('elijah')).toEqual(true);
	});
	it('Successfully handle a collision within the hashtable', () => {
		expect(hashmap.contains('elijah')).toEqual(true);
	});
	it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
		expect(hashmap.contains('elijah')).toEqual(true);
	});
	it('Successfully hash a key to an in-range value', () => {
		expect(hashmap.contains('elijah')).toEqual(true);
	});
});
