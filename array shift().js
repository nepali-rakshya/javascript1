//* shift() array function removes the first set of array 

ourArray = [1, 2, 3];
removedArray = ourArray.pop();
removed = ourArray.shift();

console.log(removedArray);
console.log(removed);
console.log(ourArray);

addArray = ourArray.push(5);
console.log(ourArray);


//* example of shift()

var typeArr = [
    [1, 2],
    ["Rakshya", "Nepali"],
    ["is"],
    ["here"]
];

var removeFirstArr = typeArr.shift();
console.log(typeArr);


var addLastArr = typeArr.pop();
console.log(typeArr);


var addFirstArr = typeArr.push(["a Queen"]);
console.log(typeArr);