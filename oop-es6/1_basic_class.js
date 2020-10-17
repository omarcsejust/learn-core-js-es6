/*
Hoisting:
---------
An important difference between function declarations and class declarations is that
function declarations are hoisted and class declarations are not. You first need to 
declare your class and then access it, otherwise code like the following will throw a ReferenceError:
*/
const p = new Rectangle(); // ReferenceError

class Rectangle {}

/*
Basic Class:
-----------
Classes are in fact "special functions", and just as you can define function expressions 
and function declarations, the class syntax has two components: 
1. class declarations and
2. class expressions
*/

// 1. Class declarations
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}

// 2. Class expressions
// unnamed
let Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);
  // output: "Rectangle"
  
  // named
  let Rectangle = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);
  // output: "Rectangle2"


  //  Classes can only have Methods, not Properties.
  //------------------------------------------------

  class TestProperty{
      // To declare property in class, you must install Bable
      static staticProperty = 'This is static property';  // not supported, [https://stackoverflow.com/questions/34821270/syntaxerror-unexpected-token-static]

      // declare method: **No need to usded function before methos name**
      classMethod(){
          console.log('I am method from TestProperty class');
      }
  }
