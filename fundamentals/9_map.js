/*
1. Map is a new feature in ES6
2. Map is a collection of Data
3. Map store data in a key-value pair
*/

let student = new Map();

// add data into map as key-value pair: Syntax --> map.set('key-name', value)
student.set('name', 'Karim');
student.set('roll', '120119');
student.set('subject', 'English');
student.set('mark', 80.5);

//get data from map: Syntax --> map.get('key-name')
let std_name = student.get('name');
let std_roll = student.get('roll');
console.log(std_roll);

// get all keys from a map
let std_map_keys = student.keys();
console.log(std_map_keys);

// get all values from a map
let std_map_values = student.values();
console.log(std_map_values);

// delete specific value from map using key: Syntax --> map.delete('key-name') : boolean
let is_deleted = student.delete('mark')
console.log('Is deleted Mark from Map: ', is_deleted);
console.log('Map after deleting mark key-value', student);

// check key exist in a map or not: Syntax --> map.has('key-name') : boolean
let has_std_name = student.has('name')
let has_std_mark = student.has('mark')
console.log("Has student Name: ", has_std_name);
console.log("Has student Mark: ", has_std_mark);

// clear data from map
student.clear();
console.log('student Map afer clear data: ', student);


