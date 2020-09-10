
// Array Destructuring - Approach: 01
const numbers = [12, 20, 30, 40, 50];
const [num_index_0, num_index_1, , num_index_3] = numbers;

console.log(num_index_0);
console.log(num_index_1);
console.log(num_index_3);

// Array Destructuring - Approach: 02
// Get value using index number
const {
    0: index_0_num,
    2: index_2_num,
    4: index_4_num
} = numbers;

console.log(index_0_num);
console.log(index_2_num);
console.log(index_4_num);