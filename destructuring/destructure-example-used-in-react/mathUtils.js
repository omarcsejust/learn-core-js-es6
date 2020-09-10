function add(a, b){
    return a+b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

// In CommonJS
module.exports = {
    add,
    multiply,
    divide
}

// In ES6
// export default {
//     add,
//     multiply,
//     divide
// }