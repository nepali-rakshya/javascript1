var a; // declaring variable, uninitialized variable, undefined 

a = 1; // initializing variable, number 

a = a + 1; // assignment operator

a += 1; // compound assignment operator

a = "Rakshya"; // string datatype

var c = a[3];

var totalLength = a.length;
console.log(totalLength);

var lastIndex = a[a.length - 1];
console.log(lastIndex);

console.log(a + c, "is a good and a hard working girl!");


// *Now to print multiple string in a single console 

console.log('I am "so much" happy you are here.');

var a;
a = [1, 2, 4];
console.log(a);
arr = [
    [1, 2],
    [4, 5, 6],
    [7, 8, [9, 10], 11]
];
console.log(arr);

console.log(arr[2][2][1]);

var str = "I am gonna make it!";
var strDouble = 0; // 0
strDouble += str; // 0 = 0 + i am gonna make it! = i am gonna make it!
str += strDouble; //i am gonna make it! = i am gonna make it! + 0i am gonna make it! 
// = i am gonna make it!0i am gonna make it!
console.log(str);