/*
1. Set is a new feature in ES6
2. Set is a collection of Data
3. Set does not contain duplicate data
*/

let country = new Set();

// add value into set
country.add('Bangladesh');
country.add('India');
country.add('United State of America');

console.log('Added values: ', country);

// delete specific value from a set: Syntax --> set.delete('exact value from set')
let is_deleted = country.delete('India');
console.log("Value Deleted: ", is_deleted);

// get the size of a set. N.B: size is not a function, it's a attribute a Set calss
let size = country.size;
console.log("Size of Country Set is: ", size);

// get all values 
let all_values = country.values();
console.log("All values: ", all_values);


// loop in set
for(let i of all_values){
    console.log(i);
}

for(let i of country){
    console.log(i);
}

// check value exist or not
let has_value = country.has('India') // we already deleted India from Set
console.log("Has India exist: ", has_value)

