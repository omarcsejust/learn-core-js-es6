/*
1. For...of = for Array element (for...of gives the elemernt of an array)
2. For...in = for Object (Because for...in gives the key(index) of an object or array)
*/

// For...of loop
let names = ['Jamal', 'Kamal', 'Joshim'];
for(let name of names){
    console.log("Array in For...of Loop: ",name);
}

// We can also use array in for...in loop, as for...in loop gives index, we can use index to get Array value
for(let index in names){
    console.log("Array in For...in Loop: ", names[index]);
}

// Array in forEach loop
names.forEach(element => {
    console.log("Array in forEach Loop: ", element);
});



// For...in loop
const student = {
    name: 'Andrew Carnel',
    age: 21,
    class: 5,
    subjects: ['English', 'Chemistry', 'Physics', 'Math']
}

for(let key in student){
    console.log(student[key]);
}


// forEach loop
const students = [
    {
        name: 'Jamal',
        class: 6,
        age: 12,
        subjects: ['English', 'Bangla', 'Socila Science'],
    },
    {
        name: 'Kamal',
        class: 7,
        age: 14,
        subjects: ['English', 'General Knowledge', 'Math'],
    },
    {
        name: 'Tamal',
        class: 9,
        age: 16,
        subjects: ['English', 'Chemistry', 'Physics', 'Math'],
    }
];

students.forEach(student => {
    console.log(student);
});


