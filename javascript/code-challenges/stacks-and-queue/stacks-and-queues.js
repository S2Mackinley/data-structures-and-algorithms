  
'use strict';

const Queue = require('./lib/queue.js');
const Stack = require('./lib/stack.js');

let stack = new Stack();
let queue = new Queue();

// push
console.log('empty stack', stack);
console.log('first', stack.push('1'));
console.log('second', stack.push('2'));
console.log('third', stack.push('3'));

// pop
console.log('popped off the stack', stack.pop());
console.log('stack after pop:', stack);
// console.log('delete another', stack.pop());
// console.log('stack after pop:', stack);

// peek
// console.log('peeking the top', stack.peek());

// isEmpty
// console.log('is it empty', stack.isEmpty());

// enqueue
// console.log('empty queue', queue);
// console.log('enqueue 1', queue.enqueue(1));
// console.log('enqueue 2', queue.enqueue(2));
// console.log('enqueue 3', queue.enqueue(3));

// dequeue
// console.log('dequeue', queue.dequeue());
// console.log('queue after dequeue', queue);

// peek
// console.log('sneaky peek', queue.peek());

// isEmpty
console.log('is it empty', queue.isEmpty());