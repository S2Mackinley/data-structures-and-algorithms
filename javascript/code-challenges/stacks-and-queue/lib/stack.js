'use strict';

const Node = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    const node = new Node(val);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if(!this.isEmpty()){

      const current = this.top;
      this.top = current.next;
      return current.value;
    } else {
      throw Error `The list is empty`
    }
  }

  peek() {
    if(!this.isEmpty()){
      return this.top.value;
    } else {
      throw Error `The list is empty`
    }

  }

  isEmpty() {
    if(this.top === null){
      return true;
    } else {
      return false;
    }
  }

}

module.exports = Stack;
