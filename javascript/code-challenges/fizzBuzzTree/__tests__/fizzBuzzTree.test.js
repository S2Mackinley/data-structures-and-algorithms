'use strict';

const Node = require('../node');
const Tree = require('../binaryTree');
const fizzbuzztree = require('../fizzBuzzTree');

const treeOne = new Tree(1);
treeOne.root.left = new Node(4);
treeOne.root.right = new Node(3);
treeOne.root.right.left = new Node(15);
treeOne.root.left.right = new Node(14);
treeOne.root.left.right.left = new Node(10);

describe('fizzbuzztree tests', () => {
  test('return node that has a value of 3, change it to fizz', () => {
    fizzbuzztree(treeOne);
    expect(treeOne.root.right.value).toEqual('fizz');
  });

  test('return node that has a value of 5, change it to buzz', () => {
    fizzbuzztree(treeOne);
    expect(treeOne.root.left.right.left.value).toEqual('buzz');
  });

  test('return a tree node that had a value of 15, change it to fizzbuzz', () => {
    fizzbuzztree(treeOne);
    expect(treeOne.root.right.left.value).toEqual('fizzbuzz');
  });
});
