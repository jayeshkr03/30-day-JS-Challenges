// binary tree implementation
const BinaryTree = require('./binary-tree');

// create a new binary tree 
const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);

// print the in-order traversal of the tree
console.log('In-order traversal: ', tree.inOrderTraversal());

