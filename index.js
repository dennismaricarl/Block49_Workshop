//Question 1 

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inorder(root) {
    if (root) {
        // Traverse the left subtree
        inorder(root.left);

        // Print the value of the current node
        console.log(root.value);

        // Traverse the right subtree
        inorder(root.right);
    }
}

// Create the binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Test the inorder function
console.log("Inorder traversal:");
inorder(root);



//Question 2 

class Node_1 {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isSameTree(p, q) {
    if (!p && !q) {
        // Both Node_1s are null, consider them the same
        return true;
    }

    if (!p || !q || p.value !== q.value) {
        // One of the Node_1s is null or values are different, trees are not the same
        return false;
    }

    // Recursively check left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Test the isSameTree function
const tree1 = new Node_1(1);
tree1.left = new Node_1(2);
tree1.right = new Node_1(3);

const tree2 = new Node_1(1);
tree2.left = new Node_1(2);
tree2.right = new Node_1(3);

const tree3 = new Node_1(1);
tree3.left = new Node_1(2);

console.log("Tree1 and Tree2 are the same:", isSameTree(tree1, tree2)); // Should return true
console.log("Tree1 and Tree3 are the same:", isSameTree(tree1, tree3)); // Should return false


//Question 3

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function countNodes(root) {
    if (!root) {
        return 0;
    }

    // Calculate the height of the left subtree
    let leftHeight = 0;
    let leftNode = root.left;
    while (leftNode) {
        leftHeight++;
        leftNode = leftNode.left;
    }

    // Calculate the height of the right subtree
    let rightHeight = 0;
    let rightNode = root.right;
    while (rightNode) {
        rightHeight++;
        rightNode = rightNode.right;
    }

    if (leftHeight === rightHeight) {
        // The tree is a complete tree, use the formula 2^h - 1
        return Math.pow(2, leftHeight + 1) - 1;
    } else {
        // The tree is not a complete tree, count nodes recursively
        return 1 + countNodes(root.left) + countNodes(root.right);
    }
}

// Test the countNodes function
const Root = new TreeNode(10);
Root.left = new TreeNode(11);
Root.right = new TreeNode(12);
Root.left.left = new TreeNode(13);
Root.left.right = new TreeNode(14);
Root.right.left = new TreeNode(15);
Root.right.right = new TreeNode(16);

const totalNodes = countNodes(root);
console.log("Total nodes in the binary tree:", totalNodes); // Should output 7


//Question 4
