// inordered traversal

class Node {
    constructor(v) {
        this.data = v;
        this.left = null;
        this.right = null;
    }
}

function printInorder(node) {
    if (node === null) {
        return;
    }
    printInorder(node.left);
    printInorder(node.right);
    console.log(node.data);
}


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

printInorder(root);