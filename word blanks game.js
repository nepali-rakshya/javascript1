/* ===============================================
================== WORD BLANK GAME================
================================================*/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("rakshya", "beautiful", "looks", "lively"));
console.log(wordBlanks("aadarsha", "dumb", "goes", "continuously"));