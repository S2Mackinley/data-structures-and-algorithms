/* eslint-disable indent */
'use strict';

const Node = require('./node.js');

class List {
	constructor() {
		this.head = null;
	}

	append(value) {
		let node = new Node(value);

		// This happens if the list is empty
		if (!this.head) {
			this.head = node;
			return this;
		}

		// If we have stuff, add it to the end
		let currentNode = this.head;
		while (currentNode.next) {
			currentNode = currentNode.next;
		}

		currentNode.next = node;
		//
		return this;
	}

	includes(value) {
		//if theres no head just return false cuz their aint no thang in here.
		if (!this.head) {
			return false;
		}
		let current = this.head;

		while (current.next) {
			if (current.value === value) {
				return true;
			}
			current = current.next;
		}

		if (current.value === value) {
			return true;
		}
		return false;
	}

	insert(value) {
		let node = new Node(value);

		node.next = this.head;

		this.head = node;

		return this;
	}

	insertAfter(value, newVal) {
		let node = new Node(newVal);
		let current = this.head;

		while (current.value !== value) {
			current = current.next;
		}

		node.next = current.next;
		current.next = node;

		return this;
	}

	insertBefore(value, newVal) {
		let node = new Node(newVal);
		let current = this.head;

		while (current.next.value !== value) {
			current = current.next;
		}

		node.next = current.next;
		current.next = node;

		return this;
	}

	kthfromend(k) {
		let current = this.head;
		let length = 0;

		while (current) {
			length++;
			current = current.next;
		}

		let index = 1;
		current = this.head;

		while (current && index !== length - k) {
			index++;
			current = current.next;
		}

		return current ? current : 'exception';
	}

	toString() {
		let data = ''; //string to save data from our node
		let current = this.header; //created current to start at the header
		while (current !== null) {
			// well keep going until current is equal to null if current is null then there are no nodes left in the list
			data = data + current.data + ''; //saves the data at current node in a string
			current = current.next; //now we go to the next node
		}
		return data; // now we return the data
	}
}

module.exports = List;
