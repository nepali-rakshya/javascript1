// Declare your variable here
var myGlobal = 10;
/* this is a global variable because it has been declared outside of the function*/


function fun1(params) {
    // Assign 5 to oopsGlobal here
    /* this is a local variable because it has been declared inside of the function*/

    oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();