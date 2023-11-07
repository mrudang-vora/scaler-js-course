//https://leetcode.com/playground/JdzgNM9o
/*
Challenge 2:
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

Example string: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox '
*/

(function main() {
    let strInput = 'the quick brown fox';
    let strOutput = FirstLetterToUpper(strInput);
    console.log("Input: " + strInput);
    console.log("Output: " + strOutput);
}());

function FirstLetterToUpper(strInput){
    let strOutput = "";
    let arrInput = strInput.split(' ');
    for(let i=0;i<arrInput.length;i++){
        let word = arrInput[i];
        strOutput = strOutput + " " + (word[0].toUpperCase() + word.substring(1));
    }
    return strOutput.trim();
}