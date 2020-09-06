// Now all previous stuff we can do easily using ES6 class

// Book class
class Book{
	constructor(title, author, year){
		this.title = title;
		this.author = author;
		this.year = year;
	}

	getSummary(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}

	getAge(){
		const year = new Date().getFullYear() - this.year;
		return `${this.title} is ${year} years old.`;
	}
}


// Class Inheritence
class Magazine extends Book{
	constructor(title, author, year, month){
		super(title, author, year); // call parent(Book) constructor
		this.month = month;
	}
}

// Instantiate Book class object
book1 = new Book("Book One", "Jane Doe", "2018");
console.log(book1);
console.log(book1.getSummary())

// Instantiate Magazine class object
const mag1 = new Magazine("Mag One", "Ashley", "2016", "Jan");
console.log(mag1);
console.log(mag1.getSummary());