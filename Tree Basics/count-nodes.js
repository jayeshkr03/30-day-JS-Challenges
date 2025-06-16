// count number of nodes

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function countNodes(root) {
    if (root === null) {
        return 0;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

console.log(countNodes(root)); 