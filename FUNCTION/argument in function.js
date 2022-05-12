function reuseableFunction(a, b) { // parameter
    var sum = 0;
    sum = a + b;
    console.log(sum);
}

reuseableFunction(10, 5); // passing arguments


function functionWithArgs(a, b) {
    console.log(a + b);
}

functionWithArgs(100, 5);