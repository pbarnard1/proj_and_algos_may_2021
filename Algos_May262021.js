// Adding height and size methods to our BST class - recursion used

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

    // Number of nodes in the tree
    size(node = this.root) { // Default starting point - root of tree
    if (node == null) { // Base case: if no node where we are, then this spot doesn't count towards the size
        // console.log("Reached dead end - returning 0");
        return 0;
    } else { // Add the current node, the number of nodes to the left, and the number of nodes to the right
        // console.log("Counting nodes to the left of the node with value =",node.value);
        var leftNodes = this.size(node.left);
        // console.log("Counting nodes to the right of the node with value =",node.value);
        var rightNodes = this.size(node.right);
        // console.log(`Returning ${1 + leftNodes + rightNodes} nodes upwards`);
        return 1 + leftNodes + rightNodes;
    }
}

    // Height of tree
    height(node = this.root) { // Default starting point - root of tree
        if (node == null) { // Base case: if no node where we are, then this spot doesn't count towards the height
            return 0;
        } else { // Add the current level and whichever subtree's height is bigger - the left tree or the right tree
            // NOTE: we need "this.height" instead of height because we're inside a class, so to reference
            // the same method we need to use "this.height", otherwise JS will look for a method *outside* the class
            // called "height"
            return 1 + Math.max(this.height(node.left),this.height(node.right));
        }
    }

    
}