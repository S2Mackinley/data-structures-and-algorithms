'use strict';

const Node = require('./node');
const Stack = require('./stack');

class PseudoQueue {
  constructor(){
    this.frontStack = new Stack();
    this.backStack = new Stack();
  }
  isEmpty() {
    if (this.frontStack) {
      return true;
    } else {
      return false;
    }
  }

  enqueue(value){
    while(!this.frontStack.isEmpty()){
      const mover = this.frontStack.pop();
      this.backStack.push(mover);
    }
    this.backStack.push(value);
  }

  dequeue(){
    // for all nodes in backStack, move them to front stack until you get to the end node
    while(!this.backStack.isEmpty()){
      const mover = this.backStack.pop();
      this.frontStack.push(mover);
    }
    const removed = this.frontStack.pop();
    return removed;
  }

}

module.exports = PseudoQueue;
