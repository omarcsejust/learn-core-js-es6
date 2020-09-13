
function Animal(name, speed){

    // Public property: Accessible by Animal Object
    this.name = name;
    this.speed = speed;

    // Public method: Accessible by Animal Object
    this.run = function(){
        return `${this.name} run in ${this.speed} speed`;
    }

    // Public method: Accessible by Animal Object
    this.details = function(){
        return planetInfo() + ' and ' + this.run();
    }

    // Private property: Not Accessible by Animal Object
    let planet = 'Earth';  // Or: planet = 'Earth'; also work. Same as function

    // Private method: Not Accessible by Animal Object
    animal_reference = this;
    let planetInfo = function(){
        return `${animal_reference.name} is from ${planet}`;
    }

    // Private method
    /*
    N.B: If we use Arrow function then we don't need to use "animal_reference".
    Because inside Arrow function "this" point to the Animal object
    */
    // let planetInfo = () => {
    //     return `${this.name} is from ${planet}`;
    // }
}

const animal = new Animal('Tiget', 500);
console.log(animal.details());
console.log("Accessing private property: ", animal.planet);  // can't access private variable (Beacuse "new-->this" is not referencing planet)
console.log("Accessing public property: ", animal.name);  // can access public variable name (Beacuse "new-->this" is referencing name)