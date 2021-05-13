// More on big O notation:

// When we talk about big O, we're always considering the WORST-CASE scenario.
// Big O notation is used to describe how long it tasks a function to run, and it's also used
// to describe how much extra space you'll use.


// O(1) means it'll take the same amount of time to run a block of code no matter how complex
// the inputs are.

// O(n) means that as an item like an array or object gets bigger, the amount of time needed
// to run grows at the same rate as the length of the item increases.

// There are others, like O(n^2), O(log n) [technically base-2 logarithm], O(n^3), O(2^n), O(n!)
// (read as "n factorial", so 4! = 4*3*2*1 = 24), O(n log n), etc.  Efficiency plays a major
// role in software and web development, because you don't want a client to wait too long for a page
// or an application to run.  You also don't want to take up too much extra space as well.

// Let's illustrate with some examples:

/* Finding the max value of an array */

/* What are the worst-case scenarios for:
Time complexity: O(n)
Space complexity: O(1)
*/
function findMaxValue(arr) {
    // Edge case: array is empty, so we'll return null (arbitrary choice; could do undefined, NaN, false, etc.)
    if (arr.length == 0) {
        return null;
    }
    var maxVal = arr[0];
    // Loop through array
    for (var k = 1; k < arr.length; k++) {
        if (arr[k] > maxVal) {
            maxVal = arr[k];
        }
    }
    return maxVal;
}

/* What if we knew the array was sorted beforehand?  Then what would the worst-case be in each? 
If the array is sorted, it's an O(1) operation because we'd go straight to the end of the array. 
But this assumes we KNOW it was sorted in advance.  If we didn't, then it's an O(n) operation. */

/* What would be the worst case scenario be for bubble sort below?
Space: O(1)
Time: O(N^2)

1 + 2 + 3 + 4 + 5 + ... + N =
N*(N+1)/2 = 0.5* N^2 + 0.5*N = O(N^2)

N = 10, 10*11/2 = 55 swaps possible for an array of 10 elements
N = 100, 100*101/2 = 5050 swaps
*/

function bubbleSort(arr) {
    // Loop for number of times we need to move items to the end
    for (var i = 0; i < arr.length - 1; i++) {
        // console.log(`Moving ${i+1}st/nd/rd/th biggest value`);
        // Loop that does the actual sorting - note the minus i to save a little time (why?)
        for (var j = 0; j < arr.length - 1 - i; j++) {
            // console.log(`Examining indices ${j} and ${j+1}`);
            if (arr[j] > arr[j+1]) {
                // console.log(`Swapping indices ${j} and ${j+1}`);
                // Swap values
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            // console.log("Array now =",arr);
        }
    }
}

// Big O time complexity for methods like .unshift(), .pop(), push(), .split() for strings
var x = [1, 3, 4];
x.push(10); // [1, 3, 4, 10] - this is an O(1) time and space operation
x.pop(); // O(1) operation
x.unshift(20); // Puts value at beginning of array - O(N) operation
"Hello world".split(" "); // Also O(N)
/*
Question about adding numbers and strings:
1 + 2 + "3" + "3" + 4 + 5
3 + "3" + "3" + 4 + 5
"33" + "3" + 4 + 5
"333" + 4 + 5
"3334" + 5
"33345"
*/

// O() complexity in singly-linked lists
// Adding to the front is an O(1) operation - doesn't depend on the size of the list
// Adding to the end using the SLL we've defined is an O(n) operation in terms of time.
// [If we defined the SLL to have a tail that points to the last node, then adding
// to the end would become an O(1) operation in terms of time.]
// In all cases the extra space would be O(1) since we're creating only one new node.