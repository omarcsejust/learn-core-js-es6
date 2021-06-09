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

// Advanced nested destructure
const myData = {
    data: {
        item: {
            name: 'shoes',
            size: {
                US: 40,
                EU: 55
            }
        }
    },
    status: 'live'
}

const {data: {item: {name: item_name, size: {US, EU}}}} = myData;  // Re-name name key with item_name variable

console.log(item_name, US, EU);  // Here, data, item, size are not variable now, because using those we destructure nested values
//console.log(data);  // Error: data is not defined


// Nested destructure both Array & Object
const product = {
    data: {
        items: [
            {name: 'Shoes', price: 250},
            {name: 'Shirt', price: 140}
        ]
    },
    status: 'live'
}

const {data: {items: [item1, item2]}} = product;
console.log(item1, item2);


// Super nested multi level destructure
//--------------------------------------
const dataObj = {
    name: "Omar",
    age: 27,
    pets: {
        dogs: [
            {
                name: "Rocky",
                age: 5,
                color: "Black"
            },
            {
                name: "KKR",
                age: 6,
                color: "Red"
            }
        ],
        cats: [
            {
                name: "Mew",
                age: 2,
                color: "White"
            }
        ]
    }
}

const {pets: {dogs: [{name: d1Name, age: d1Age} = dog1, dog2]}} = dataObj
console.log(d1Name, d1Age)  // variable from Array Object
console.log(dog2) // object from Array list