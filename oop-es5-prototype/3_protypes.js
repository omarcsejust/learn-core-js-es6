// Book Constructor
function Book(title, author, year){
	this.title = title;
	this.author = author;
	this.year = year;
}

// set getSummary prototype to Book object __proto__ section
// prototypes will not be shown in the main object, they will 
// be appear in the __proto__ section of an object
Book.prototype.getSummary = function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}

// getAge
Book.prototype.getAge = function(){
	const year = new Date().getFullYear() - this.year;
	return `${this.title} is ${year} years old.`;
}

// Revise/Change Year : Parameterize prototype
Book.prototype.revise = function(newYear){
	this.year = newYear; // update the year value
	this.revised = true; // add new key-value into the book object (if invoked revise prototype)
}

// Instantiate an Object
const book1 = new Book("Book 1", "John Doe", "2016");
const book2 = new Book("Book 2", "Jane Doe", "2018");
// like this we can create many books using Book Constructor
console.log(book1.title);
console.log(book2.getSummary()); // will work same as prevoius
console.log(book1.getAge());
book2.revise(2019);
console.log(book2);
