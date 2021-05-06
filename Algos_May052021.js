// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushToFront(arr, val) {
    // console.log("Array at beginning =",arr);
    // Move each value to the right one:
    // Loop to move values to the right
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i+1] = arr[i];
        // console.log("Array now =",arr);
    }
    arr[0] = val; // Put in value at beginning of the array
}

var testArr = [8, 4, 5, 2];

console.log("Original array =",testArr);
pushToFront(testArr, 10);
console.log("New array =",testArr);
// Result: [10, 8, 4, 5, 2]

// // This almost works, but doesn't quite work - why?
// var temp = [10];
// temp.push(testArr);
// console.log(temp);

// Handy trick: you can change an array's length by saying array.length = your_new_length
// testArr = [8, 4, 5, 2];
// testArr.length = 2; // Decrease its length
// console.log(testArr); // should be [8, 4]; the 5 and 2 are now gone
// testArr.length = 4;
// console.log(testArr); // should be [8, 4, undefined, undefined]