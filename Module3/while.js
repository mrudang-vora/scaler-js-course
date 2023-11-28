/*
While loop evaluates the condition in the parentheses
If condition evaluates to true, the code inside the while loop will be executed
The process will continue until condition is false
When condition is false, then loop stops.
*/

//Print 1 to 10 using while loop

var i=1;
var n=10;
while (i<=n) {
    console.log(i);
    i++;
}

//Print 2 to 10 using do while loop
var i=1;
var n=10;
do{
    console.log(i);
    i++;
} while(i<=n)