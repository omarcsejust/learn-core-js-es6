// var's variable scope is inside the function
function testVar(){
    for(var i = 0; i<5; i++){
        console.log("Var Inside of Block", i);
    }
    console.log("var Outside of Block", i);  // will also get access if of i out of for block
}

// let's variable scope is inside the block
function testLet(){
    for(let i=0; i<5; i++){
        console.log("Let inside of Block", i);
    }
    console.log("Let outside of Block", i)  // won't work, Error: i is not defined
}

//testVar();
testLet();
