/**
 Spread operator does spread out the items of an array as individual arguments

 Basically there are three places, we can use spread
 1. In Function Call
 2. In Array Literals
 3. In Object Literals
 */

 // 1. In Function Call
 // -------------------
 const minVal = Math.min(10, 23, 16, 34, -4);
 console.log(minVal);

 const temperatures = [10, 23, 16, 34, -4];
 const minVal2 = Math.min(temperatures)  // will return NaN because min function expects individual arguments
 console.log(minVal2);

 // So we can use spread operator to make array elements spread out into individual elements
 const minVal3 = Math.min(...temperatures);
 console.log(minVal3);

 // As string is iterable so we can apply spread on String
 console.log(Math.min(..."936857"));

 // 2. In Array Literal
 // -------------------
 
 const fruits = ["Mango", "Lichi", "Tamarind", "Banana", "Apple", "Orange"];
 const animals = ["Cow", "Buffalo", "Dove", "Dear"];

 // We want to make a single array
 const fruits_cow = [fruits, animals];  // This will create a nested array
 console.log(fruits_cow);

 // So we can user spread operator to concate two into a single array
 const fruits_cow2 = [...fruits, ...animals, "Can add more elements"];
 console.log(fruits_cow2);

 // normal array concat() method, as we did above using spread operator
 fruits_cow3 = fruits.concat(animals);
 console.log(fruits_cow3);

 // We can use spread operator to make a copy of an array
 // -----------------------------------------------------
 const fruits2 = fruits;
 /*
 In this way fruits2 will copy the reference of fruits, so if we update fruits2, then original array
 will also be updated and vice versa like Python
  */

  fruits2.push("Coconut");
  console.log(fruits);  // Original Array fruit has been updated also

  fruits.push("Berry");
  console.log(fruits2);  // vice-versa

  // To solve this proble we can use spread operator
  const fruits3 = [...fruits];
  fruits3.push("New Fruit"); // now original array won't be change


  // 3. In Object Literal
  // -----------------

  // Copy an object to a new variable to avoid original array being mutated
  const user1 = { 
    name: 'Jen', 
    age: 22 
  }; 
    
  const clonedUser = { ...user1 }; 
  console.log(clonedUser); 

  // merging two objects using the spread operator

  const user1 = { 
    name: 'Jen', 
    age: 22, 
  }; 
  
  const user2 = { 
    name: "Andrew", 
    location: "Philadelphia" 
  }; 
  
  const mergedUsers = {...user1, ...user2, gender: "Male"};
  /*
   This is just like below
   const mergedUsers = {name: "Jen", age: 22, name: "Andrew", location: "Philadelphia", gender: "Male"}

   Here name key value will be overriden by last name key value
   */
  console.log(mergedUsers) 