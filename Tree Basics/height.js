// height of tree

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function heightOfBinaryTree(root) {
    if (root === null) return 0; 

    let queue = [root];
    let height = 0; 

    while (queue.length > 0) {
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let current = queue.shift(); 

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        height++; 
    }

    return height;
}

const root = new TreeNode(11);
root.left = new TreeNode(12);
root.left.left = new TreeNode(14);
root.left.left.left = new TreeNode(19);

console.log(heightOfBinaryTree(root));
