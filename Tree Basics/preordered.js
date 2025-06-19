// preordered traversal

class Node {
  constructor(v) {
    this.data = v;
    this.left = null;
    this.right = null;
  }
}
function printPreorder(node) {
  if (node === null) {
    return;
  }

  console.log(node.data);
  printPreorder(node.left);
  printPreorder(node.right);
}

function main() {
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.right = new Node(6);

  /*
                                    1
                            2               3
                        4       5               6
  */

  printPreorder(root);
}

main();