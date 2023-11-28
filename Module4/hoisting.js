/*
This would print :
undefined
"Hello from MV"
*/
console.log(a);
greet();

var a = "hi";
function greet() { 
    console.log("Hello from MV");
}
/*
This would print :
"Hi"
"Hello from MV"

console.log(a);
greet();
*/

/*
    Why difference in both the outputs?
    It is because of the execution context. 
    There are 2 sequential phases:
    - Memory Execution
    - Code Execution

    So, whenever we declare a variable, in memory execution phase, it stores it as key value pair
    a = undefined

    But when we declare a function, in memory execution phase, it stores complete function definition

    In code execution phase which starts from line 1 doesn't have value in variable but it has complete function definition and is able to execute the function


    This is hoisting where you can call the function even before declaration.
*/

//What happens if we declare a function as an expression
//This would give error if we try to call the function before declaration
add(2,3);
var add = function(a,b){
    return a+b;
}
//Hence, we use function as expression rather than basic function.



