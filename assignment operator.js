var a; // declaring the variable
var b = 2; // assigning variable

console.log(a);

/* The equals to sign "=" is an assignment operator so when a value is
assignment to a variable then it is called as assigning value to a 
variable. */

a = 7;
b = a;

console.log(a);


/*===================================================================
============ Initializing var with assignment operator ===============
====================================================================*/

var c /*this is initializing a var*/ = 10;
/*this is assigning value to a var with assignment operator*/



/*===================================================================
================= Uninitialized variables ===========================
====================================================================*/

var a; // this is also called as declaring variables
var b;
var c; // it means their values are undefined

// Now, this is called as assigning variables
// This is called as initialized variables with assignment operators.

var a = 3;
var b = 6;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

console.log(a);
console.log(b);
console.log(c);