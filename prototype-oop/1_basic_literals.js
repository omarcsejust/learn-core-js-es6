const s1 = "Hello";
console.log(typeof s1); //type is string, not real object, its a prototype object
console.log(s1.toUpperCase());


const s2 = new String("World");
console.log(typeof s2);  // type is object

// Object Literal
// --------------
const book1 = {
	title: "Book One",
	author: "John Doe",
	year: 2016,
	getSummary: function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
}

// if we need aother book the we need to duplicate the above object
const book2 = {
	title: "Book Two",
	author: "Jane Doe",
	year: 2018,
	getSummary: function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
}

//console.log(book2.getSummary())

// Get the keys from the book object
// ---------------------------------
const obj_keys = Object.keys(book1);  // it will return a array of book1 object keys
console.log(obj_keys);


// Get the values from the book object
// ---------------------------------
const obj_values = Object.values(book1);  // it will return a array of book object values
console.log(obj_values);


/*
If we keep creating book like this book3, book4, ..., its a pain. We need to duplicate same code
and also duplicate getSummary() method.

We can remove this pain using constructor.

See the next topic on constructor
*/