// Book Constructor
function Book(title, author, year){
	this.title = title;
	this.author = author;
	this.year = year;
}

// set getSummary prototype to Book object's __proto__ section
// prototypes will not be shown in the main object, they will 
// be appear in the __proto__ section of an object
Book.prototype.getSummary = function(){
	return `${this.title} was written by ${this.author} in ${this.year}`;
}

// Magazine Constructor : Inherite the properties(e.g: title, author, year) of Book constructor 
//(But in this way can't inherite the prototypes of Book Constructor)
function Magazine(title, author, year, month){
	Book.call(this, title, author, year); // here "this" is the instance of Magazine Constructor
	this.month = month;
}


// Now Inherite the prototypes(e.g: getSummary) of Book
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine
const mag1 = new Magazine("Magazine 1", "John Doe", 2020, "Jan");
console.log(mag1.getSummary())