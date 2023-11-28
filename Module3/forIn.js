/*
for in allows you to loop through properties of object.
The statements of code found within the loop body will be executed once for each property of object
*/

var colors ={
    primary: 'Blue',
    secondary: 'Green',
    tertiary: 'Yellow'
}

for (var key in colors) {
    console.log(key + "->" + colors[key]);
}

var colorsArray = ['red', 'green', 'blue', 'yellow'];
for(var key in colorsArray) {
    console.log(key + "->" + colorsArray[key]);
}