// to export variable
let std_data = [
    {
        id: 1,
        name: 'Omar'
    },
    {
        id: 2,
        name: 'Kamal'
    }
];

// to export function
function sayHello(msg){
    console.log("Message from import file: ", msg);
}

// to export class
class MathHelper{

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static square(n = 1){
        return n * n;
    }

    triple(n = 1){
        return n * 3;
    }

    add(a, b){
        return a+b;
    }
}

// Can export multiple values
export {std_data, sayHello, MathHelper};