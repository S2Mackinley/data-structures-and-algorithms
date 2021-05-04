'use strict';

const Node = require('./node.js');

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (this.back) {
      this.back.next = newNode; 
    }

    this.back = newNode;

    if (!this.front) {
      this.front = this.back;
    }
  }

  dequeue() {
    if(this.isEmpty()){
      throw Error `The list is empty`
    } else {
      const temp = this.front;
      this.front = this.front.next;
      return temp.value;
    }
  }

  peek() {
    if(!this.isEmpty()){
      return this.front.value;
    } else {
      throw Error `The list is empty`
    }
  }

  isEmpty() {
    if(this.front === null){
      return true;
    } else {
      return false;
    }
  }

}

module.exports = Queue;
