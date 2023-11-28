//Objects => Key Value Pairs
var person = {
    firstName: "M"
    , lastName: "V"
    , age: 37
    , ownsCar: false
}
console.log(person);


//Dot notation
console.log(person.firstName);

//brackets notation
console.log(person['firstName']);

var cap = {
    firstName: "Steve"
    , lastName: "Rogers"
    , age: 32
    , friends: ["Bucky", "Bruce", "Tony"]
    , address: {
        state: "New York"
        , city: {
            name: "Brooklyn",
            postalCode: "123456"
        }
    }
}

//access array
console.log(cap.friends[1]);

//access properties of nested object
console.log(cap.address.city.name);

//dynamically add properties in the object
cap.isAvenger = true;
console.log(cap);

cap.movies = ["Movie1", "Movie2", "Movie3", "Movie4"];
console.log(cap);

//delete a property
delete(cap.age);
console.log(cap);