/* Recursion */

// Demonstration with countdown
// Non-recursive version
function countdown(num) {
    // Loop backwards from num to 0
    for (var k = num; k >= 0; k--) {
        console.log(k);
    }
}
countdown(10);

// Recursive version
function rCountdown(num) {
    // Base case - this is the stopping point for recursion
    if (num <= 0) {
        return;
    }
    console.log(num); // Print the number
    rCountdown(num-1); // Here is the recursion - notice we're changing the value here
}

rCountdown(10);

// Demonstration with finding max value of an array - so we're returning a value
// Non-recursive version
function findMax(arr) {
    var maxVal = arr[0];
    for (var k = 1; k < arr.length; k++) {
        if (arr[k] > maxVal) {
            maxVal = arr[k];
        }
    }
    return maxVal;
}

// Recursive version
function rFindMax(arr, ind=0) { // Notice the optional parameter ind, which we'll set to a default value of 0
    // To prevent infinite recursion: what if ind < 0 OR ind > length of array?
    if (ind < 0 || ind >= ind.arr.length) {
        return false; // Arbitrary value picked here
    }
    // Base case: reached the final value, so just return that value only for comparison
    if (ind == arr.length - 1) {
        return arr[ind];
    }
    // Forward progress - move forward in the array by incrementing the index in the recursion
    return Math.max(arr[ind],rFindMax(arr, ind+1));
}

console.log(rFindMax([8, 4, 15, 5, 7, 12, 6])); // Max value for entire array - using default index of 0 since none was specified
console.log(rFindMax([8, 4, 15, 5, 7, 12, 6],4)); // Max value starting at index 4

// Analogy: sending people down a chasm through a series of ladders, then retrieve the value at the bottom
// and bring it back up - notice we're returning a value each time
