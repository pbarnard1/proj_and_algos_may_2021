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

/* Building a stack */
class StackNode {
    constructor(val) {
        this.data = val; // Hold the value we want - could be an integer, array, another object, etc.
        this.next = null; // This is a pointer to the next node
    }
}

class Stack {
    constructor() {
        this.top = null; // Top is the topmost node in our stack
    }

    push(val) {
        var newNode = new StackNode(val); // Create a new node containing the value given
        // Now we need to connect to the rest of the stack
        newNode.next = this.top; // Connecting the new node to the stack
        this.top = newNode; // Move the top pointer to the new node
    }

    pop() {
        // Stack is empty - i.e. no nodes - no need to do anything
        if (this.top == null) {
            return;
        }
        var removedNode = this.top;
        this.top = removedNode.next;
        removedNode.next = null;
        return removedNode;
    }

    printTop() {
        if (this.top == null) {
            console.log("No value");
        } else {
            console.log("Top =",this.top.data);
        }
    }

    // isEmpty()
}

var myStack = new Stack();
myStack.push(5);
myStack.push(8);
console.log(myStack);
var removedNode = myStack.pop();
console.log(myStack);
myStack.printTop();
myStack.pop();
myStack.printTop();

/* Things to remember when dealing with stacks:
LIFO = Last in, first out
(FIFO = First in, first out - an example is a queue data structure) 

Inserting a value = O(1)
Empty the stack = O(n)
*/

/* Longest suffix (from To Do 4 in Strings) 
Write a function that, when given a word array, returns the largest suffix (word-end) common 
to all words in the array. 

For inputs ["deforestation", "citation", "conviction", "incarceration"], return "tion" 
(not all that creative a rhyming point).  If it is ["nice", "ice", "baby"], return "", because 
they can't get along - or they don't share a common ending.
*/

function longestSuffix(strArr) {
    // Goal: common, long suffix - start with ""
    // Get the length of the shortest string
    // Loop through each string from the end - stop when the letters aren't the same
    // Return this suffix

    // No suffix if array is empty or only has one string
    if (strArr.length <= 1) {
        return "";
    }
    var suffix = "";
    var shortestLength = strArr[0].length;
    // Loop to find length of shortest string
    for (var k = 1; k < strArr.length; k++) {
        if (strArr[k].length < shortestLength) {
            shortestLength = strArr[k].length;
        }
    }
    var isFinished = false; // Boolean used to determine if a noncommon letter is found
    // Loop through each character - one at a time from the end
    for (var i = 0; i < shortestLength; i++) {
        var curLetter = strArr[0].charAt(strArr[0].length - 1 - i);
        // Loop through each word
        for (var j = 1; j < strArr.length; j++) {
            var curWord = strArr[j];
            var curChar = curWord.charAt(curWord.length - 1 - i);
            if (curChar != curLetter) {
                isFinished = true;
                break;
            } else if (j == strArr.length - 1) { // Same letter for all words
                suffix = curLetter + suffix;
            }
        }
        if (isFinished) {
            break;
        }
    }
    return suffix;
}

console.log(longestSuffix(["deforestation", "citation", "conviction", "incarceration"]));
console.log(longestSuffix(["hello"]));
console.log(longestSuffix(["hello","hilo","flo"]));
console.log(longestSuffix(["bison","son","son"]));