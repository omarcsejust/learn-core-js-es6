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

class Calculation extends MathHelper{

    constructor(x, y, z){
        // Must call super constructor in derived class
        super(x, y);

        /* No need to initilize x,y here again, if initialize again then No Error
        this.x = x;
        this.y = y;*/

        // initialize additional properties for child class
        this.z = z;
    }

    // getDoubleSquare must be static method to call parent class static method
    static getDoubleSquare(n){
        return super.square(n) * super.square(n);
    }

    getDoubleTriple(n){
        return super.triple(n) * super.triple(n);
    }

    // override add method of parent class
    add(a, b, c){
        return a+b+c;
    }
}

const calc = new Calculation(10, 20, 30);

// static methods and inheritance
console.log("Calling Parent class static method:", Calculation.square(8));
console.log("Child class static method calling Parent class static method:", Calculation.getDoubleSquare(3));

// non-static methods and inheritance
console.log("Child class non-static method calling Parent class non-static method:", calc.getDoubleTriple(5));

// override add method (if add method exist in child class then child class method will be invoked, if not then program will search add method in parent class)
console.log("Override add method in Child class: ", calc.add(5,5,5));

// class property
console.log("Child class property x: ", calc.x);