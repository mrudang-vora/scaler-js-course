var a = 21;
console.log("Declaration of a: " + a);
//Problem 1) Re declaring the variable and assigning it to the new value
//This should not be allowed as we should not have same variable name with different value
var a = 22;
console.log("Re-Declaration of a: " + a);


//Problem 2) Scoping issue of the "var"
var a = 23;
console.log("Re-declaration of a: " + a);
if(a == 23){
    var b = 40;
    console.log("Using b in the if block: " + b);
}
//If we are declaring the variable b in the if block, it should not be allowed to access it outside the if block which is its local scope
console.log("Using b out of the if block: " + b);

//Variable declared are not block-scoped rather they are functional-scoped
//It means you would be able to access the variable in entire function

function test(){
    var c = 10;
    console.log("Using c in function: " + c);
}
test();
console.log("Using c in function would raise an error:");
//This would raise an error
console.log(c);
