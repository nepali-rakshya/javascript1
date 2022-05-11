/*unshift() adds array in front of the array while push() adds to the 
end of the sentences.*/


var typeArr = [
    ["to", "the"],
    ["Queen"]
];
typeArr.unshift(["Bow"]);
console.log(typeArr);

/*shift() removes array from the front of the array while pop() removes
array from the end of the sentences.*/

var singleArr = [
    [1, "Aadi"],
    ["somebody", "is"],
    ["dying"]
];

console.log(singleArr.pop());
console.log(singleArr);

singleArr.push(["gone mad"]);
singleArr.shift();

console.log(singleArr);