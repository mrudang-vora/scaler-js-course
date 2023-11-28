//Loops are the statements that we use to control the flow of the program to do something repeatedly

var a = "Hello, world!";
for(var i=0; i<10; i++){
    console.log(a);
}

//Square each number in an array
var num = [1,2,3,4,5,6,7,8];
var squaredArray = [];
for(var i=0; i<num.length; i++){
    //squaredArray[i] = num[i]*num[i];
    squaredArray.push(num[i]*num[i]);
}

console.log(squaredArray);