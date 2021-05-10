'use strict';

const Node = require('./node');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let results = [];
    let _walk = node => {
      results.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    let _walk = node => {
      if(node.left) _walk(node.left);
      results.push(node.value);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  postOrder() {
    let results = [];
    let _walk = node => {
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  add(value) {
    let node = new Node(value);

    let _addValue = (current, node) => {
      if(node.value < current.value){
        if(!current.left){
          current.left = node;
        } else {
          _addValue(current.left, node);
        }
      } else {
        if(!current.right){
          current.right = node;
        } else {
          _addValue(current.right, node);
        }
      }
    };

    if(!this.root) {
      this.root = node;
    } else {
      _addValue(this.root, node);
    }

  }

  contains(value) {
    if(!this.root.value) return false;

    let _search = (current, value) => {
      if(current.value === value){
        return true;
      } else if(current.value > value) {
        if(!current.left) return false;
        return _search(current.left, value);
      } else {
        if(!current.right) return false;
        return _search(current.right, value);
      }
    };

    return _search(this.root, value);
  }

  findMaxValue() {
    let max = this.root.value;

    let _walk = (node) => {
      max = node.value > max ? node.value : max;
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);

    };
    _walk(this.root);
    return max;
  }

}

module.exports = BinarySearchTree;
