// Export a single value at a time

let user_name = 'Omar Hasan';

function sayHelloFronDefaultExport(){
    console.log('I am from default export.');
}

class Car{
    constructor(name, model){
        this.name = name;
        this.model = model;
    }

    printCarNameAndModel(){
        console.log(`Name: ${this.name} and Model: ${this.model}`);
    }
}

export default Car;  // wrong: export default {Car};