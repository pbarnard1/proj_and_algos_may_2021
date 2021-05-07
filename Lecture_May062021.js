class SLLNode {
    constructor(val) {
        this.data = val; // Hold the value we want - could be an integer, array, another object, etc.
        this.next = null; // This is a pointer to the next node
    }
}

var myNode = new SLLNode(5);
console.log(myNode);
var myNode2 = new SLLNode(10);
// How can I connect the 5 node to the 10 node like this:
// [5] -> [10]

myNode.next = myNode2; // Connects the two nodes
console.log(myNode);
var myNode3 = new SLLNode(20);
myNode2.next = myNode3; // Connect the node at the end
console.log(myNode);

// Two ways to show the last node in our list
console.log(myNode.next.next);
console.log(myNode2.next);

// Define a singly linked list class here
class SLL {
    constructor() {
        this.head = null; // Head will point to the first node in our list - start with no nodes
    }

    // Define methods that belong to our SLL class below, such as addToFront.

    // Add a node to the front
    addToFront(val) {
        // this.head = val; // Doesn't work - MUST point to an object, not a value by itself
        if (this.head == null) { // If list is empty
            // Make a new node, and set the head to that new node
            this.head = new SLLNode(val);
        } else { // If list isn't empty
            // We make a new node, then link this node to the list
            var newNode = new SLLNode(val);
            newNode.next = this.head; // Link this node to the list from before
            // Move head to new node we created - that way, we don't lose the remaining nodes in the list
            this.head = newNode;
        }
    }

    // Come Monday for more info about how you can traverse through a list!
}
// Building a singly linked list
var mySLL = new SLL(); // Start a linked list from scratch
console.log(mySLL);
mySLL.addToFront(10); // Add node with value 10 to front
console.log(mySLL);
mySLL.addToFront(20); // Add second node with value 20 to front
console.log(mySLL);