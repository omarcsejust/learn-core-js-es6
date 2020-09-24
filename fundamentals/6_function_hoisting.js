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