// Constructor is basically a function
function Book(title, author, year){
	this.title = title;
	this.author = author;
	this.year = year;

	this.getSummary = function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
}

// Instantiate an Object
const book1 = new Book("Book 1", "John Doe", "2016");
const book2 = new Book("Book 2", "Jane Doe", "2018");
// like this we can create many books using Book Constructor
console.log(book1.title);
console.log(book2.getSummary())


/*
We declared getSummary() method inside the Book constructor.
But the best way is to create a protype for Book constructor
*/