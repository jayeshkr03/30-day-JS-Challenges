// lowest common ancestor of tree

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function lca(root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lca(root.left, p, q);
  const right = lca(root.right, p, q);
  if (left && right) return root;
  else return left || right;
}

let root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);


let p = root.right, q = root.left;

const ancestor = lca(root, p, q);
console.log(`LCA of ${p.val} and ${q.val} is: ${ancestor.val}`);
  