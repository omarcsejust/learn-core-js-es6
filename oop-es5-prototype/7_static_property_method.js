function Animal(name, speed){

    // Public property: Accessible by Animal Object
    this.name = name;
    this.speed = speed;

    // Public method: Accessible by Animal Object
    this.run = function(){
        return `${this.name} run in ${this.speed} speed`;
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

// total_hands can be accessed by Animal object: total_hands available in __proto__ section of Animal object
Animal.prototype.total_hands = 4;

// Static Members: No need Animal object to access them, they only exist in Animal not object of Animal
Animal.total_eyes = 30;
Animal.details = function(){
    return 'Hello I am Static member of Animal Constructor Function';
}

const animal = new Animal('Tiger', 300);
console.log(animal.total_hands);
console.log(Animal.details());