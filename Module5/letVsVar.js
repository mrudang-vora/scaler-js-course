
/*
                var         let     const
Re-declaration  YES         NO      NO
Re-assignment   YES         YES     NO
Scoping         FUNCTION    BLOCK   BLOCK
*/

var a = 20;
var a = 10;
//Re-declaration not possible using let. If we uncomment the line, we would get error
let b = 10;
//let b = 30;

console.log(a);
console.log(b);

if(true){
    var c=10;
    console.log(c);
}
console.log(c);

if(true){
    let new_c=10;
    console.log(new_c);
}
//The following line would give an error that new_c is not defined
//console.log(new_c);

//DIFF BETWEEN LET AND CONST
// let - can be declared and reassigned
// const - once declared can't be reassigned
const d = 100;
d = 10;


