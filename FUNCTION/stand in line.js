function nextInLine(arr, item) {
    // arr[arr.length + 1] = item;
    arr.push(item);
    // return item;
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));





/*reminder :: 
pop() = removes an array from back
push() = adds an array from back 

shift() = removes an array from front
unshift() = adds an array from front*/