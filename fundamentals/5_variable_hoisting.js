/*
 JavaScript takes all the var variable to the above of the program. That means
 JS declare all the variable with var keyword to the top of the program. For below code JS works like

 var name, age;
 name = "Omar Hasan";
 console.log(name);

 age = 27;
*/

name = "Omar Hasan";  // Assign value to variable before declaretion
var name;  // Declare variable
console.log(name);

var age = 27;

/*
 Hoisting does not work for let variable
*/
// title = "Software Engineer";
// let title;
// console.log(title);


/*
 Hoisting insidethe function scope
*/
var hoistingTest = "I am from outside of function";
function testVariableHoisting(){
    var hoistingTest = "I am from inside of function";
    console.log(hoistingTest);
}
testVariableHoisting();


// Notice carefully: see the explanation below
var hoistingTest2 = "I am from outside of function";
function testVariableHoisting2(){
    console.log(hoistingTest2);   // Here we get undefined, in spite of having testVariableHoisting2 variable outside of function
    var hoistingTest2 = "I am from inside of function";
}
testVariableHoisting2();
/*
JS works like below:

var hoistingTest2 = "I am from outside of function";
function testVariableHoisting2(){
    var hoistingTest2;
    console.log(hoistingTest2);  // i.e: hoistingTest2 is undefined
    hoistingTest2 = "I am from inside of function";
}
testVariableHoisting2();
*/


// One more example for variable hoisting based on above example
var value = true;
function myfunc(){
    if(!value){
        var value = 200;
    }
    console.log("Changed value is", value);
}
myfunc();

/*
We set value  = true, and in function if(!value) should not be satisfied and value should remain true
But what exactly happen is:
--------------------------
var value = true;
function myfunc(){
    var value;
    if(!value){  // value is undefined so condition is true
        value = 200;
    }
    console.log(value);
}
myfunc();
*/
