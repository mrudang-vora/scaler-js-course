//what is the expression?
// It is set of statements which are evaluated to get specific output
var a = 2+3;
console.log(a);


//Assign the function to the variable (Such functions are called anonymous functions)
let add = function(a, b){
    return a+b;
}
let result = add(3,4);
console.log(result);

//Assigning the function to another variable
var sum = add;
result = sum(5,4);
console.log(result);

