'use strict';

const Node = require('./node.js');

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    this[this.length++] = value;
    return this;
  }

  pop() {
    if (this.length === 0) return 'empty stack';

    let result = this[--this.length];

    delete this[this.length];
    return result;
  }

  peek() {
    if (this.length === 0) return 'empty stack';

    let result = this[--this.length];

    return result;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = Stack;
