// mirror tree

function mirrorTree(root) {
  if (!root) {
    return null;
  }

  const left = mirrorTree(root.left);
  const right = mirrorTree(root.right);

  root.left = right;
  root.right = left;

  return root;
}

class TreeNode {
  constructor(v) {
    this.data = v;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

function printInorder(node) {
    if (node === null) {
        return;
    }
    printInorder(node.left);
    console.log(node.data);
    printInorder(node.right);
}
console.log(printInorder(root));
const mirroredRoot = mirrorTree(root);
console.log(printInorder(mirroredRoot));