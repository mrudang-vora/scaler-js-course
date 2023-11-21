/*
Challenge 3:
Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). 
Return true if either of them falls within the range.
*/

(function main() {
    var minRange = 50;
    var maxRange = 99;
    var inputNum = [12, 92];
    console.log("Input: "+ inputNum);
    for(let i=0; i<inputNum.length;i++){
        console.log("Output: " + CheckIfNumInRange(inputNum[i], minRange, maxRange));
    }
}());

function CheckIfNumInRange(inputNum, minRange, maxRange){
    if(inputNum >= minRange && inputNum <= maxRange){
        return true;
    }
    return false;
}