'use strict';

let LeftJoin = require('../left-join');

describe('Left Join Tests:', () => {
	let leftJoin = null;
	beforeAll(() => {
		let hashOne = [
			{ key: 'fond', value: 'enamored' },
			{ key: 'wrath', value: 'anger' },
			{ key: 'diligent', value: 'employed' },
			{ key: 'outfit', value: 'garb' },
			{ key: 'guide', value: 'usher' },
			{ key: 'flow', value: 'null' },
		];

		let hashTwo = [
			{ key: 'fond', value: 'averse' },
			{ key: 'wrath', value: 'delight' },
			{ key: 'diligent', value: 'idle' },
			{ key: 'guide', value: 'follow' },
			{ key: 'flow', value: 'jam' },
			{ key: 'flow', value: 'jam' },
		];

		leftJoin = LeftJoin(hashOne, hashTwo);
		console.log(LeftJoin(hashOne, hashTwo));
	});
	it('LeftJoin(): Accepts only Hashed tables with keys as strings', () => {
		let hashOne = [{ key: 'fond', value: 'enamored' }];
		expect(hashOne[0].key).toEqual('fond');
		expect(hashOne[0].value).toEqual('enamored');
	});
	it('LeftJoin(): Accepts the values to be null and returns the value as null', () => {
		let hashOne = [{ key: 'test', value: null }];
		expect(hashOne[0].value).toBeNull();
	});
	it('LeftJoin(): accepts two hashed tables and return the tables joined', () => {
		let expectedOutput = [
			['fond', 'enamored', 'averse'],
			['wrath', 'anger', 'delight'],
			['diligent', 'employed', 'idle'],
			['outfit', 'garb', null],
			['guide', 'usher', 'follow'],
			['flow', 'null', 'jam'],
		];

		expect(leftJoin).toEqual(expectedOutput);
	});
	it('LeftJoin(): returns the joined values if the key only appears on the left hash table', () => {
		let expectedOutput = [
			['fond', 'enamored', 'averse'],
			['wrath', 'anger', 'delight'],
			['diligent', 'employed', 'idle'],
			['outfit', 'garb', null],
			['guide', 'usher', 'follow'],
			['flow', 'null', 'jam'],
		];

		expect(leftJoin[0]).toEqual(expectedOutput[0]);
	});
	it('LeftJoin(): returns a null in place of the right hashtable if the key is not present', () => {
		let expectedOutput = [
			['fond', 'enamored', 'averse'],
			['wrath', 'anger', 'delight'],
			['diligent', 'employed', 'idle'],
			['outfit', 'garb', null],
			['guide', 'usher', 'follow'],
			['flow', 'null', 'jam'],
		];

		expect(leftJoin[3]).toEqual(expectedOutput[3]);
	});
	it('LeftJoin(): returns a joined index even if the left hashtable value of a key is null', () => {
		let expectedOutput = [
			['fond', 'enamored', 'averse'],
			['wrath', 'anger', 'delight'],
			['diligent', 'employed', 'idle'],
			['outfit', 'garb', null],
			['guide', 'usher', 'follow'],
			['flow', 'null', 'jam'],
		];

		expect(leftJoin[5]).toEqual(expectedOutput[5]);
	});
});
