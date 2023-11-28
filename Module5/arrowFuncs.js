//Arrow function without any params
let test1 = () => console.log(1);

//Arrow function with 1 parameter
let test2 = a => console.log(a+2);

//Arrow function with more than 1 parameter and more than 1 line of code
let test3 = (a, b) => {
    console.log(a + b);
    return a + b;
}

test1();
test2(10);
test3(10,5);