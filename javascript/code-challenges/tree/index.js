
'use strict';


const BinarySearchTree = require('./binarySearchTree');


let BST = new BinarySearchTree();

BST.add(20);
BST.add(7);
BST.add(43);
BST.add(1);
BST.add(11);

console.log(BST.inOrder());
console.log(BST.preOrder());
console.log(BST.postOrder());

console.log(BST.contains(7));
console.log(BST.contains(99));
