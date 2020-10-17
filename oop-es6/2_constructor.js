class Rectangle{
    static v = 'hello';
    constructor(width, height){
        this.width = width;  // acts as public property for this class
        this.height = height;  // acts as public property for this class
    }

    getArea(){
        return 0.5 * this.width * this.height;
    }
}

const rect = new Rectangle(20, 40);
console.log(rect.width);  // accessing public property of Rectangle class
console.log(rect.getArea());