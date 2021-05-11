// We went over: printing values in the list
// Adding to the END of the list
// Using runner vs. runner.next as the condition in the loop when traveling through the list

class SLLNode {
    constructor(val) {
        this.data = val; // Hold the value we want - could be an integer, array, another object, etc.
        this.next = null; // This is a pointer to the next node
    }
}

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

    printList() {
        // Goal: travel through the list, printing each value along the way
        var runner = this.head; // First node in our list - if there are any nodes at all
        // Edge case: no nodes at all
        if (runner === null) {
            return null;
        }
        // We have at least one node in the list
        // Loop through the list - two ways to do it

        // // Method 1: For loop
        // for (runner = this.head; runner != null; runner = runner.next) {
        //     // Print value in node
        //     console.log(runner.data);
        // }
        // Method 2: While loop
        while (runner != null) {
            console.log(runner.data);
            // Move to the next node
            runner = runner.next;
        }
    }

    addToBack(val) {
        // Goal: add a node containing "val" to the end of the list
        // Start at the beginning of the list
        var runner = this.head;
        // If there are no nodes, then...
        if (this.head === null) {
            this.head = new SLLNode(val); // Create a node containing the value
            return this; // Returns the list
        }
        // Already have at least one node at this point

        // Use runner.next to check if there is a node ahead of the current one (runner)
        while (runner.next != null) {
            runner = runner.next;
        }
        var lastNode = new SLLNode(val); // Create node to put at the end
        runner.next = lastNode; // Connecting the new node to the end of the list
        return this.head; // Return the list
    }
}

var mySLL = new SLL(); // Start a linked list from scratch
console.log(mySLL);
mySLL.addToFront(20); // Add node with value 10 to front
console.log(mySLL);
mySLL.addToFront(10); // Add second node with value 20 to front
console.log(mySLL);
mySLL.addToBack(15); // Now add 15 to the back
console.log(mySLL);
mySLL.printList();
