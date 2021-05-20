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

/* prependVal
Create prependVal(list,value,before) that inserts a listNode with given value immediately
before the node with before (or at end). Return the new list.

Example: if given [5] -> [3] -> [8] -> [4] and you want to insert [6] before the node with [8], you
should wind up with [5]->[3]->[6]->[8]->[4].  If there's no node containing the value "before", we
insert at the end.  For example, if before = [10] and we want to insert the node [2], then the list would look
like [5]->[3]->[6]->[8]->[4]->[2].
*/

function prependVal(list, val, before) {
    var newNode = new SLLNode(val); // New node that will be inserted into the list
    
    // Edge case 1: the list is empty
    if (list.head == null) {
        list.head = newNode;
        return list;
    }

    // Start at the beginning of the list
    var runner = list.head;
    // Edge case 2: the "before" value is at the beginning of the list
    if (list.head.data == before) { // If node at beginning matches the before value
        newNode.next = list.head; // Connects the new node to the beginning of the list
        list.head = newNode; // Head of the list now points to the new node
        return list;
    }
    while (runner.next != null) {
        if (runner.next.data == before) {
            newNode.next = runner.next; // Connecting the new node to the list
            runner.next = newNode; // Connects the first part of the list to the new node
            return list;
        }
        runner = runner.next; // Moves the runner to the next value (node) in the list
    }

    // Edge case 3: the "before" number can't be found in our list

    // The runner reaches the end of the list
    runner.next = newNode; // Connect the new node to the end of the list
    return list;
}

/* removeVal
Create removeVal(list,value) that removes from our list the node with the given value.
Return the new list.  Remove only the first instance of the value.  If you want, solve
the challenge in a way so that it removes *all* instances of that value.
*/

function removeVal(list, val) {
    // Take the last node before the one that has "val" and connect it to the node that's
    // ahead of the one with "val"

    // Edge case 1: List is empty
    if (list.head == null) {
        return list; // Nothing to remove, so return the list
    }

    // Edge case 2: Value we're removing is at the beginning of the list
    if (list.head.data == val) {
        var removedNode = list.head;
        list.head = removedNode.next;
        removedNode.next = null;
        return list;
    }
    var runner = list.head; // Set runner to first node
    // All other cases: the value could be found from the second node onward
    while (runner.next != null) {
        if (runner.next.data == val) {
            var removedNode = runner.next; 
            runner.next = removedNode.next; // Connect to next node on the list
            removedNode.next = null; // Removed node containing value from the list
            return list;
        }
        runner = runner.next; // Move on to next node
    }
    // Node can't be found
    return list;
}



// New version with ALL instances of val removed
function removeValV2(list, val) {
    // Take the last node before the one that has "val" and connect it to the node that's
    // ahead of the one with "val"

    // Edge case 1: List is empty
    if (list.head == null) {
        return list; // Nothing to remove, so return the list
    }

    // Edge case 2: Value we're removing is at the beginning of the list (and could occur multiple times)
    while (list.head != null && list.head.data == val) { // Need list.head == null to check to see if there are nodes to look at
        var removedNode = list.head;
        list.head = removedNode.next;
        removedNode.next = null;
    }
    var runner = list.head; // Set runner to first node
    // ADDED - in case all nodes had the same value that were removed
    if (list.head == null) {
        return list;
    }
    // All other cases: the value could be found from the second node onward
    while (runner.next != null) {
        if (runner.next.data == val) {
            var removedNode = runner.next; 
            runner.next = removedNode.next; // Connect to next node on the list
            removedNode.next = null; // Removed node containing value from the list
            continue; // Keeps the runner where it is in case of multiple nodes in a row with val
        }
        runner = runner.next; // Move on to next node
    }
    // The list is done - we've reached the end, regardless of if there are nodes that were removed
    return list;
}

var mySLL = new SLL();
mySLL.addToFront(8);
mySLL.addToFront(8);
mySLL.addToFront(5);
mySLL.addToFront(5);
mySLL.addToFront(1);
mySLL.addToFront(1);
// mySLL.addToFront(4);
// mySLL.addToFront(8);
mySLL.printList();
// prependVal(mySLL, 7, 8);
removeValV2(mySLL, 8);
console.log("List with node removed:");
mySLL.printList();