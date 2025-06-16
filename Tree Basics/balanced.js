// Node structure for the binary tree

class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    isBalanced(root) {
        if (root === null) {
            return true;
        }

        const leftHeight = this.getHeight(root.left);
        const rightHeight = this.getHeight(root.right);

        if (Math.abs(leftHeight - rightHeight) <= 1 &&
            this.isBalanced(root.left) &&
            this.isBalanced(root.right)) {
            return true;
        }

        return false;
    }

    getHeight(root) {
        if (root === null) {
            return 0;
        }

        const leftHeight = this.getHeight(root.left);
        const rightHeight = this.getHeight(root.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.right = new Node(6);
root.left.right.right.right = new Node(7);

const solution = new Solution();

if (solution.isBalanced(root)) {
    console.log("The tree is balanced.");
} else {
    console.log("The tree is not balanced.");
}
