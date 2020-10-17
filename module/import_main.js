// import for named exported module (we can't rename directly, using 'as' we can rename)
import {std_data as studentData, sayHello, MathHelper} from './named_export.js';

// import for default exported module (we can rename Car)
import MyCar from './default_export.js';  // Wrong: import {Car} from './default_export.js';

// named export values
console.log(studentData[0].name);  // variable
sayHello('Hello Named export! you are being called');  // function

const mathHelper = new MathHelper();
// execute static method
const squareVal = MathHelper.square(3);
console.log("Class static method square: ", squareVal);

console.log("Class non-static method add: ", mathHelper.add(10, 15));

// default export value
const car = new MyCar('Audi', 'AD-7645');
car.printCarNameAndModel();