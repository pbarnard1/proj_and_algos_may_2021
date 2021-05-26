// Binary search trees (BST)

// Node we'll use in the BST
class BSTNode {
    constructor(val) {
        this.value = val; // Value in the node
        this.left = null; // Points to nodes whose values are smaller than this one
        this.right = null; // Points to nodes whose values are bigger than this one
    }
}

// Binary search tree structure itself
class BST {
    constructor() {
        this.root = null; // Root points to first node in tree - initially no nodes in the tree to start
    }

    // Method to add new nodes to the list
    add(val) {
        var newNode = new BSTNode(val); // Create new BST node - we'll figure out where to place it in a minute
        // If tree is empty...
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        // There is at least one node in the tree at this point
        var runner = this.root; // Runner will point to the current node we're looking at
        // Travel through tree
        while (runner !== null) {
            // Go left if value is smaller than the current node's (runner's) value 
            if (val < runner.value) {
                if (runner.left === null) { // If there's no nodes to the left, insert the new node here
                    runner.left = newNode;
                    return this;
                } else { // Node exists to the left, so move down tree
                    runner = runner.left;
                }
            } else { // Go right
                if (runner.right === null) { // If there's no nodes to the right, insert the new node here
                    runner.right = newNode;
                    return this;
                } else { // Node exists to the right, so move down tree
                    runner = runner.right;
                }
            }
        }
    }

    // Add additional methods here.
}

var myBST = new BST();
console.log(myBST);
myBST.add(10);
console.log(myBST);
myBST.add(15);
console.log(myBST);
myBST.add(8);
console.log(myBST);
myBST.add(12);
console.log(myBST);
console.log(myBST.root.right); // Show nodes to the right of the root node