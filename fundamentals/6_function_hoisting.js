/*
JS takes all the function body to the top of the program. 
e.g: For below program
----------------------
function functionHoisting(){
    function definationBelowReturn(){
        console.log("My function body defined below return statement!");
    }
    definationBelowReturn();
    return;
}
*/

function functionHoisting(){
    definationBelowReturn();  // In concept of Synchronous program definationBelowReturn() should not be executed
    return;
    function definationBelowReturn(){
        console.log("My function body defined below return statement!");
    }
}

functionHoisting();


// Calling function before declaration and it wroks, actually JS takes the function to the top of the program
sayHello();

function sayHello(){
    console.log("Hello good people!");
}


// Another type function
/*
In this case JS will give an Error, that is sayAge is not a function.

In the below code what happen is:
---------------------------------
var sayAge;
sayAge();  // Look sayAge is not a function, JS is Right :)

sayAge = function(){
    console.log("I am 25 Years old.");
}
*/
sayAge();

var sayAge = function(){
    console.log("I am 25 Years old.");
}