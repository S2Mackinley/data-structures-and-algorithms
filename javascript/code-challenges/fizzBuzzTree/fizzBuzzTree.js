'use strict';

const fizzbuzzer = (node) => {
  if (node.value % 3 === 0 && node.value % 5 === 0) {
    node.value = 'fizzbuzz';
  }
  if (node.value % 3 === 0 && node.value % 5 !== 0) {
    node.value = 'fizz';
  }
  if (node.value % 5 === 0 && node.value % 3 !== 0) {
    node.value = 'buzz';
  }
  return undefined;
};

const postTraversal = (root) => {
  if (!root) {
    return undefined;
  }
  postTraversal(root.left);
  postTraversal(root.right);
  fizzbuzzer(root);
  return undefined;
};

module.exports = function fizzbuzztree(tree) {
  postTraversal(tree.root);
  return tree;
};
