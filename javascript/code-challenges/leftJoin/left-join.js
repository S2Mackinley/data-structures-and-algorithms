'use strict';

const LeftJoin = (hashOne, hashTwo) => {
	let results = [];
	for (let i = 0; i < hashOne.length; i++) {
		let found = false;
		for (let j = 0; j < hashTwo.length; j++) {
			if (hashOne[i].key === hashTwo[j].key) {
				results[results.length] = [hashOne[i].key, hashOne[i].value, hashTwo[j].value];
				found = true;
				break;
			}
		}
		if (found === false) {
			results[results.length] = [hashOne[i].key, hashOne[i].value, null];
		}
	}
	return results;
};

module.exports = LeftJoin;
