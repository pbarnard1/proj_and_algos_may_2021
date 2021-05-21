# Recursion

**Recursion** is considered one of the most difficult topics to master in programming in general.  The basic idea of recursion is that a function calls itself.  Why would one want to do that?

When you solve a challenge like finding the max value, determining the longest palindrome, etc. you can write a loop that will work in most, if not all, cases.  However, some challenges can't be solve so easily by writing a for loop - or even a fixed number of loops.  For example, try finding a target sum using 3 integers - or 4 integers - or 5.  Or even a variable number of integers.


## Illustration of recursion
Here's an analogy - imagine you're in a mine digging for gold.  You're at a junction with a bunch of paths you can take.  You send a group along each path.  But a couple of paths branch even further. So you break those groups up and send a person their way.  Everybody finds gold nuggets, and they come back to the junction.  Here is the breakdown:

- Left path: 45 -> branches to path A and path B, where path A you get 20 and path B you get 25
- Central path: 30 -> branches to paths C, D and E, where you get 5, 15 and 10, respectively
- Right path: 15

```js
/*   
                       Entrance
                          *
     --------------------------------------------
     *                    *                     * 
     *                    *                     *   
Left *            Central *               Right *
     *                    *                     * 
     *                    *                     *
  *******         *****************           [ 15]
  *     *         *       *       *
A *     * B     C *     D *     E *
  *     *         *       *       *
[ 20] [ 25]     [ 5 ]   [ 15]   [ 10]
*/
```

So you break the prolem into smaller ones (left, central and right paths), and break each of those up as needed (left into A and B, central into C, D and E).  Therein lies the power of recursion - breaking a problem up into a smaller series of problems that are more manageable, and breaking those up as needed.

Using the illustration, let's say we have a function called findGold().  The initial call would then call findGold(left), then findGold(central) and findGold(right).  findGold(left) would be broken up into findGold(A) and findGold(B), while findGold(central) would break up into findGold(C), findGold(D) and findGold(E).

```js
/*   
                                        findGold()
                                            *
           ----------------------------------------------------------------
           *                                *                             * 
           *                                *                             *   
     findGold(left)                 findGold(central)              findGold(right)
           *                                *                             *
     **************            ***************************              [ 15]
     *            *            *            *            *
findGold(A)  findGold(B)  findGold(C)  findGold(D)  findGold(E)
     *            *            *            *            *
   [ 20]        [ 25]        [ 5 ]        [ 15]        [ 10]
*/
```

findGold(A) through findGold(E) would return values.  So findGold(left) would return the sum of findGold(A) and findGold(B), or 45.  findGold(central) would return 30 from doing findGold(C) + findGold(D) + findGold(E).  findGold(right) would return 15 immediately without further recursion.  Finally, findGold() would return 90 = 45 + 30 + 15 = findGold(left) + findGold(central) + findGold(right).

When you solve problems recursively, you want to have a couple of things in mind:
1. Base case - this is when the recursion will end.
2. Making forward progress - each time you call the function again, the problem narrows in scope.

In other words, you're breaking up the bigger problem into a smaller problem, like guessing a number or finding the range of indices where a value might be found.

## Examples of recursion with code

Countdown to 0:
```js
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
```

Finding max value of an array:
```js
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
    // Base case: reached the final value, so just return that value only for comparison
    if (ind == arr.length - 1) {
        return arr[ind];
    }
    // Forward progress - move forward in the array by incrementing the index
    return Math.max(arr[ind],rFindMax(arr, ind+1));
}

console.log(rFindMax([8, 4, 15, 5, 7, 12, 6])); // Max value for entire array - using default index of 0 since none was specified
console.log(rFindMax([8, 4, 15, 5, 7, 12, 6],4)); // Max value starting with index 4
```

## Stack overflow

When you use recursion, each time you call the function you are placing it into a stack, known as a **call stack.**  In the illustration above, you would have a stack like the following for grabbing the value in path A:
```js
/*
------------------
* findGold(A)    *
------------------
* findGold(left) *
------------------
* findGold()     *
------------------
*/
```
The original call, findGold(), is at the bottom, and each successive call goes on top in this stack.  When a value is returned, the most recent call is popped off the stack.  So when the value from path A is returned, we remove findGold(A) from the stack.

With a handful of recursive calls, the call stack is manageable.  However, if you call the function too many times, you get what's called **stack overflow.**  Basically there is not enough room in memory to handle all these recursive calls, and hence the stack will blow up and overflow. 

Some data structures use recursion extensively to solve a problem efficiently.  One type of data structure that utilizes this is called a binary search tree (BST), which we will go over in the next lecture.