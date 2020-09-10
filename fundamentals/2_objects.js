/*
1. JavaScript is all about Object, everything is object in JavaScript.
2. Object in JavaScript is collection of key-value pair
3. Every object in JavaScript has an constructor property that references function, and this function
is used to create that object [see example in the below]
 */

// Define Object Using Object Literal: {} is called object literal
// ---------------------------------------------------------------
const circle = {
    radious: 10,
    location: {
        x: 1,
        y: 3
    },
    draw: function(){
        console.log("Object created by Object Literal.");
    }
};

/*
This object has 3 property, in word of OOP this object has 2 property & 1 methoD.
We can access object property using dot notation
 */

circle.draw();

// Define Object using Factory Function: If we return an Object from a function, the functions is referred as factory function
// -----------------------------------------------------------------------------------------------------------
function createCircle(radious){
    return {
        //radious: 10,
        radious,  // In ES6, if key & value are the same then we can define key-value in this way
        draw: function(){
            console.log("object created by Factory Function.");
        }
    }
}

const circle2 = createCircle(5);
circle2.draw();

// Define Object using Constructor Function
// ----------------------------------------
function Circle(radious){
    console.log("this = ", this); // "this" point "Circle" object if we use new keyword 
    //during initializing constructor function, else it point global window object
    this.radious = radious;
    this.draw = function(){
        console.log("Object created by Constructor Function.");
    }
}

/*
Here "new" kewword created a empty object like {}, then it will set "this" to point the "Circle" Object,
because "this" keyword by default points to the global object that is Window Object.
*/
const circle3 = new Circle(10);
// Or
//const circle3 = Circle.call(this, 10);  // {} refers "this" for Circle Object
// Or
//const circle3 = Circle.apply({}, [1])  // it takes second arg as Array

circle3.draw();


/*
Every object in JavaScript has a constructor property that references function, and this function
is used to create that object.
--------------------------------------------------------------------------------------------------
*/
const Circle2 = new Function('radious', `
    this.radious = radious;
    this.draw = function(){
        console.log("Object created by Constructor Function.");
    }
`);

const circle4 = new Circle2(7);
console.log("Object created by Function", circle4);


// Add or Remove property from an Object: Objects are dynamic, we can add or remove property from it
// -------------------------------------------------------------------------------------------------
const circle_obj = new Circle(25);
circle_obj.location = {x:1, y:3};
circle_obj['new_property'] = "I am added dynamically";
console.log(circle_obj);  // New property "location" & "new_property" added to the circle_obj

delete circle_obj.location;  // Remove l"location" property from circle_obj
console.log(circle_obj);

// Loop/Enumeriting over object
// ----------------------------
for(let key in circle_obj){
    if(typeof circle_obj[key] !== 'function'){
        console.log(key, "=>", circle_obj[key]);
    }
}

// Get all the keys of an Object: Object.keys() return an Array of keys
// --------------------------------------------------------------------
const circle_obj_keys = Object.keys(circle_obj);
console.log("Keys: ", circle_obj_keys);

// Get all values of an Object
// ---------------------------



// Check property/key exist in the Object or not
// ---------------------------------------------
if('radious' in circle_obj){
    console.log("radious key found in circle_obj");
}


// Getter/Setter of an Object
// --------------------------
