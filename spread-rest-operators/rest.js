function calculateSum(...numbers){
    console.log(typeof numbers);
    sum = 0;
    for(n of numbers){
        sum += n;
    }
    console.log("Sum is: ", sum);
}

calculateSum(1,2,3,45,6,7,8,9);


// rest parameter with other parametets
/*
In this case rest param must be at the last
*/
function calculateMul(a, b, ...numbers){
    mul = 1;
    for(n of numbers){
        mul *= n;
    }
    console.log("Mul is: ", mul);
}

calculateMul(10, 20, 1,2,4,5,6,7,8);  // a=10, b=20