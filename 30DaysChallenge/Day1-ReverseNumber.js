/*
Write a JavaScript function that reverses a number.
Sample Data and output:
Example: 
x = 32243;
Expected Output: 34223
*/

(
    function main() {
        var num = -32243;
        let revNum = ReverseNumber(num);
        console.log("Input: " + num);
        console.log("Output:" + revNum);
    }()
);

function ReverseNumber(num){
    var revNum = "";
    
    //Handle negative numbers
    if(num<0){
        revNum="-";
    }
    
    //Split numbers into string digits
    let arrNum = num.toString().split('');

    //Loop through each digit in reverse and check whether it is the number and add to output string
    for(let i=arrNum.length-1; i>=0;i--){
        if(!isNaN(parseInt(arrNum[i]))){
            revNum = revNum + arrNum[i];
        }
    }
    return revNum;
}