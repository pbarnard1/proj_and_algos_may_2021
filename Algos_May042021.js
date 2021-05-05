// Goal: Swap the 1st and 2nd elements, 3rd and 4th elements, 5th and 6th elements, etc.
// Do it in place - i.e., without making a second array
var arr1 = [3, 2, 7, 5, 4];
var arr2 = [1, 5, 4, 8];

var expected1 = [2, 3, 5, 7, 4];
var expected2 = [5, 1, 8, 4];

function swapArrValues(arr) {
    // Swap items at indices 0 and 1, then 2 and 3, 4 and 5, etc.
    // Note the middle condition and what we're incrementing by!
    for (var i = 0; i < arr.length - 1; i += 2) {
        // console.log(`Swapping values at indices ${i} and ${i+1}:`);
        // Swap values at current index and following index
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        // console.log("Array now =",arr);
    }
}

var arr3 = ['Hello', 5];
console.log("Array before swapping =",arr3);
swapArrValues(arr3);
console.log("Array after swapping =",arr3); // Notice the array is still changed, even though we didn't return anything from the function!