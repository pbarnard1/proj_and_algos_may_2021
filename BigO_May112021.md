# Big O Notation

- Used to measure space and time complexity - in other words, how much extra space you'll use to solve a challenge and how much time it takes to run, respectively
- Show graphs of y = n, y = n^2, y = log(n), y = n*log(n); [link used to illustrate the graphs](https://www.desmos.com/calculator)
- Examples of each:
- Searching for biggest value in array: O(n) time, O(1) space for a variable
- Using bubble sort, selection sort: O(n^2) time
- Using a binary search: O(log n) time, O(1) space for value/index you want to return
- Merge sort: O(n log n) time

Whenever you want to make a new array or use a hash table/object, you likely are using O(n) space.

If you have a variable that holds something like a number, boolean, that's O(1) space.

Handy way to check how much time it takes for your code to run:
```js
var t1 = Date.now();
console.log("Welcome!"); // Execute your code here
var t2 = Date.now();
console.log("Time elapsed = ",t2-t1,"milliseconds");
```