# Big O Notation

- Used to measure space and time complexity - in other words, how much extra space you'll use to solve a challenge and how much time it takes to run, respectively
- Show graphs of y = n, y = n^2, y = log(n), y = n*log(n); [link used to illustrate the graphs](https://www.desmos.com/calculator)
- Examples of each

Handy way to check how much time it takes for your code to run:
```js
var t1 = Date.now();
console.log("Welcome!"); // Execute your code here
var t2 = Date.now();
console.log("Time elapsed = ",t2-t1,"milliseconds");
```