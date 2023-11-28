var array = [12, 14, 56, 57];
console.log("Original array: " + array);

//POP
var poppedElement = array.pop();
console.log("Popped Element:" + poppedElement);
console.log("Array after pop: " + array);

//PUSH
array.push(58);
console.log("Array after push: " + array);

//SHIFT
var shiftedElement = array.shift();
console.log("Shifted Element:" + shiftedElement);
console.log("Array after shift: " + array);

//UNSHIFT
array.unshift(10);
console.log("Array after unshift: " + array);