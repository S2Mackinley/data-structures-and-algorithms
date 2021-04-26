'use strict';

const LinkedList = require('./lib/linkedlist.js');

let ll = new LinkedList();

console.log('empty list', ll);

ll.insert(10);

console.log('single item', ll);

ll.insert(20);

console.log('2 items', ll);