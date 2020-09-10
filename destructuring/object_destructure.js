const person = {
    name: "Omar",
    age: 27,
    location: "Rajshahi",
    dog: {
        name: "Rocky"
    }
};

// In normal way: ES5
// ------------------
const p_name = person.name;
const p_age = person.age;

console.log(p_name);
console.log(p_age);

// In Destructuring
const {name, age} = person;  // variable name (name, age) must be the key name of object(person)

console.log(name);
console.log(age);

// Default Assignment
// ------------------
/*
 If key not exist in the object the we can assign a default value for that key
*/
const {country = "Bangladesh"} = person;
console.log(country);

// Rename the vaiable name & (Rename the vaiable name and Assign default value)
// ------------------------------------------------------------------------
const {name: myName, age: myAge, country: myCounrty = "India"} = person;
console.log(myName);
console.log(myAge);
console.log(myCounrty);

// Nested Destructuring
const {
    dog: {
        name: dogName = "My Dog Name default value"
    }
} = person;

console.log(dogName);

// If nested object not present then assign a default value for that object
// -----------------------------------------------------------------------
const {
    shirt: {
        color = "Blue"
    } = {
        color: "Blue"
    }
} = person;

console.log(color);
