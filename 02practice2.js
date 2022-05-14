/* 

Practice items::
1. variable initialization/ declaration
2. decimal increment/ decrement
3. simple arithmetic
4. length of string
5. arrays
6. array functions
7. concatenation
8. function (passing argument in parameters)
9. global and local variables 

*/

var rakValue = 20;

function rakArray(a, b, c, d) {
    var arr = 0;
    arr = [
        [a],
        [b, c],
        [d]
    ];

    console.log(a + " " + b + " " + c + " " + d);
    arr.pop();
    console.log(arr);
    arr.push(["Queen"]);
    console.log(arr);
    arr.shift();
    console.log(arr);
    arr.unshift(["Rakku"]);
    console.log(arr);
    console.log(rakValue + " " + arr.shift());
    console.log(arr.length);
}

rakValue++;
rakArray("Rakshya", "is", 20, 2);
console.log(rakValue); //global variable
console.log(arr); //local variable