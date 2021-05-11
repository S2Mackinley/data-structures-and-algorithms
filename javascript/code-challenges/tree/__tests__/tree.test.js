'use strict';

const BinarySearchTree = require('../binarySearchTree');

describe('binary search tree', () => {
  it('Can successfully instantiate an empty tree', () => {
    let tree = new BinarySearchTree();
    expect(tree.root).toEqual(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinarySearchTree();
    tree.add(6);
    expect(tree.root.value).toEqual(6);
    expect(tree.contains(6)).toEqual(true);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    let tree = new BinarySearchTree();
    tree.add(10);
    tree.add(1);
    tree.add(11);
    expect(tree.root.value).toEqual(10);
    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(11);
  });

  it('can successfully return a collection from a preorder traversal', () => {
    let expected = [1, 3, 5, 7, 9];
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(3);
    tree.add(5);
    tree.add(7);
    tree.add(9);
    expect(tree.preOrder()).toEqual(expected);
  });

  it('can successfully return a collection from an inorder traversal', () => {
    let tree = new BinarySearchTree();
    tree.add(8);
    tree.add(2);
    tree.add(7);
    tree.add(4);
    tree.add(6);
    tree.add(5);
    tree.add(3);
    tree.add(1);
    tree.add(9);
    let results = tree.inOrder();
    expect(results).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('can successfully return a collection from a postorder traversal', () => {
    let tree = new BinarySearchTree();
    tree.add(8);
    tree.add(2);
    tree.add(7);
    tree.add(4);
    tree.add(6);
    tree.add(5);
    tree.add(3);
    tree.add(1);
    tree.add(9);
    let results = tree.postOrder();
    expect(results[results.length-1]).toEqual(8);
  });

  it('should return false on .contains() if value does not exist in BST', () => {
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(3);
    tree.add(5);
    tree.add(7);
    tree.add(9);
    expect(tree.contains(10)).toEqual(false);
  });
  it('should return 11 as the max number', () => {
    let tree = new BinarySearchTree();
    tree.add(2);
    tree.add(5);
    tree.add(9);
    tree.add(4);
    tree.add(7);
    tree.add(6);
    tree.add(2);
    tree.add(5);
    tree.add(11);
    expect(tree.findMaxValue()).toEqual(11);
  });

  it ('using a breadth-first traversal', () => {
    let tree = new BinarySearchTree();
    tree.add(8);
    tree.add(2);
    tree.add(7);
    tree.add(4);
    tree.add(6);
    tree.add(5);
    tree.add(3);
    tree.add(1);
    tree.add(9);
    let results = tree.breadthFirst();
    expect(results).toEqual([8, 2, 9, 1, 7, 4, 3, 6, 5]);
  });

});
