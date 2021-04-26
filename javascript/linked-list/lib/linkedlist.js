'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value); // adds first node to list
    if(!this.head) {
      this.head = node;
    } else {
      let current = this.head; // start traversing at head
      while(current.next) { // while more nodes exist in list
        current = current.next; // go to the next node
      }
      current.next = node;
    }
    return this;
  }

  includes(value) {
    let node = this.head;
    while(node) {
      if(node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  toString() {
    let node = this.head;
    let result = '';
    while(node) {
      result = result + `{ ${node.value} } -> `
      if (node.next === null){ result = result + `NULL`}
      node = node.next;
    }
    return result;
  }

}

module.exports = LinkedList;