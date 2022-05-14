// Example

var sum = 0;

function addThree() {

    sum = sum + 3;
    return sum;
}

function addFive() {
    sum += 5;
    // since you haven't cleared what you want to return or print hence it shows undefined
}
console.log(addThree());
console.log(addFive());