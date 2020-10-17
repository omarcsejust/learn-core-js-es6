/*
1. The static keyword defines a static method or property for a class
2. Neither static methods nor static properties can be called on instances of the class
3. Instead, they're called on the class itself
4. Static properties are useful for caches, fixed-configuration, 
or any other data you don't need to be replicated across instances

Syntax:
------
static methodName() { ... }
static propertyName [= value];
*/

class Car{
    static run(){
        console.log(`${this.name} Running`);
    }
}

Car.run();


/*
Calling static members from another static method:
--------------------------------------------------
1. In order to call a static method or property within another static method of the same class, 
you can use the "this" keyword.

2. Static members are not directly accessible using the "this" keyword from non-static methods.
*/

class StaticMethodCall {
    //static staticProperty = 'static property';  // need to install Bable to use property inside class
    static staticMethod() {
      return 'Static method has been called';
    }
    static anotherStaticMethod() {
      return this.staticMethod() + ' from another static method';
    }

    nonStaticMethod(){
        return this.staticMethod();  // when nonStaticMethod will be called, Error will be generated
    }
}

// 'Static method and static property has been called'
console.log(StaticMethodCall.staticMethod()); 

// 'Static method and static property has been called from another static method'
console.log(StaticMethodCall.anotherStaticMethod());

// Calling static method inside non-static methos
//-----------------------------------------------
//const staticMethodCall = new StaticMethodCall();
//staticMethodCall.nonStaticMethod();  // Error


// Calling static members from a class constructor and other methods
// -----------------------------------------------------------------
class StaticMethodInConstructor {
    constructor() {
      console.log(StaticMethodInConstructor.staticMethod()); // 'static method has been called.' 
      console.log(this.constructor.staticMethod()); // 'static method has been called.'

      console.log(this.staticProperty); // undefined (because it will not get any non-static property with named "staticProperty")
    }
   
    static staticMethod() {
      return 'static method has been called.';
    }
}

const staticMethodInConstructor = new StaticMethodInConstructor();