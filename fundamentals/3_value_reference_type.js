/*
   Value Type                             Reference Type
   ----------                             --------------
   Number                                    Object             
   String                                    Function           
   Boolean                                   Array            
   undefined                                             
   null                                                  
   Symbol

   1. Primitive/value Types are coiped by their value
   2. Object/Reference Types are copied by their reference/address
*/

// Primitive types: here x & y are independent variable
// -----------------------------------------------------
let x = 10;
let y = x;  // The value of x copied into y
console.log("value of x copied into y = ", y);

// Now if we change y value, x value won't be changed
y = 20;
console.log("y = ", y);
console.log("x = ", x);


// Object Types
// ------------
const person = {name: "Omar", age: 27};  // actually object ({name: 'Tiger', age: 27}) memory address stored in person variable
const animal = person;  // animal copy the address of person object
animal.name = "Tiger";

// i.e: person & animal variable pointing the same memory location

console.log("Person: ", person);  // { name: 'Tiger', age: 27 }
console.log("animal: ", animal);  // { name: 'Tiger', age: 27 }


// ----------------------
let my_num = 30;
function increaseNum(){
    my_num++;  // changing the original value
}

increaseNum();
console.log(my_num);

// Passing value
// --------------------------
let my_num2 = 40;
function increaseNum2(my_num2){
    my_num2++;  // changing the local value my_num2, just limited in this function scope
}

increaseNum2(my_num2);  // passing value
console.log(my_num2);  // 40

// Passing reference
// ---------------------------
let my_obj = {value: 3};
function increaseNum3(obj){
    obj.value++;
}

increaseNum3(my_obj)  // passing reference
console.log(my_obj);



