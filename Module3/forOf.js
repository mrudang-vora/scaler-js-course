/*
for of statement creates a loop iterating over iterable objects
Including: built-in String, Array, Array-like objects like NodeList and also map and set
*/

var scores = [10, 20, 30, 40, 50, 60];

for(let score of scores){
    console.log(score);
}

//How to access the indices of the scores
//Use the method - entries()

for(let [index, score] of scores.entries()) {
    console.log(index + "-> " + score);
}

//Extract the characters of the string
var str = "Score";
for(var char of str) {
    console.log(char);
}
