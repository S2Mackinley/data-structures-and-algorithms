/* eslint-disable indent */
'use strict';

const LinkedList = require('../linkedList.js');

let zipLists = (list1, list2) => {
	let newList = new LinkedList();
	let currentList1 = list1.head;
	let currentList2 = list2.head;

	while (currentList1 || currentList2) {
		if (currentList1) {
			newList.append(currentList1.value);
			currentList1 = currentList1.next;
		}
		if (currentList2) {
			newList.append(currentList2.value);
			currentList2 = currentList2.next;
		}
	}
	return newList;
};

module.exports = zipLists;

let input1 = new LinkedList();
input1.append(1);
input1.append(3);
input1.append(5);
input1.append(7);

let input2 = new LinkedList();
input2.append(2);
input2.append(4);
input2.append(6);
input2.append(8);

let check = zipLists(input1, input2);

console.log(check);
