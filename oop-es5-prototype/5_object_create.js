// We can do the previous stuff in the same way like below

// Object of protos
const bookProtos = {
	getSummary: function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	},
	getAge: function(){
		const year = new Date().getFullYear() - this.year;
		return `${this.title} is ${year} years old.`;
	}
}


// Create Object: Approach-01
const book1 = Object.create(bookProtos);
book1.title = "Book One";
book1.author = "Jane Doe";
book1.year = "2018";

console.log(book1);
console.log(book1.getSummary());

// Create Object: Approach-02
const book2 = Object.create(bookProtos, {
	title: {value: "Bool Two"},
	author: {value: "Omar Hasan"},
	year: {value: "2020"}
});

console.log(book2);

