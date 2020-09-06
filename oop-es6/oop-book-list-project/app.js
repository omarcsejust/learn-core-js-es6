// Book Class: POJO calss
class Book{
	constructor(title, author, isbn){
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

// BookU Class: manage all book related UI task in this class
class BookUI{
	static displayBooks(){
		const storedBooks = [
			{
				title: "Book 1",
				author: "John Doe",
				isbn: "3456"
			},
			{
				title: "Book 2",
				author: "Jane Doe",
				isbn: "6534"
			}
		];

		// add books to the list
		const books = storedBooks;
		books.forEach((book) => BookUI.addBookToList(book));
	}

	static addBookToList(book){
		const list = document.querySelector('#book-list');

		// create a DOM element tr
		const row = document.createElement('tr');

		// now add html to the newly created DOM element tr
		row.innerHTML = `
		    <td>${book.title}</td>
		    <td>${book.author}</td>
		    <td>${book.isbn}</td>
		    <td><a href="#" class="btn btn-sm btn-danger delete">x</a></td>
		`;

		// now add the row element to the parent element book-list as chile element
		list.appendChild(row);
	}

	static deleteElementFromBookList(el){
		if (el.classList.contains('delete')) {
			el.parentElement.parentElement.remove();

			// show alert
			BookUI.showAlert("Book removed successfully.", "success");
		}
	}

	static showAlert(msg, className){
		// using querySelector we can get DOM reference both for id & class
		const container = document.querySelector('.validation-alert');
		const form = document.querySelector('#book-form');

		// create new DOM element div for showing alert
		const divEl = document.createElement('div');

		// The classList property is not supported in Internet Explorer 9
		//divEl.classList.add(`alert alert-${className}`);
		divEl.className = `alert alert-${className}`;

		// adding text message to the divEl
		const text = document.createTextNode(msg);
		divEl.appendChild(text);

		// now add the alert divEl to the container before book-form div
		container.insertBefore(divEl, form);

		// remove the alert after some time
		setTimeout(() => document.querySelector('.alert').remove(), 2000);
	}

	static clearInputFields(){
		document.querySelector('#title').value = '';
		document.querySelector('#author').value = '';
		document.querySelector('#isbn').value = '';
	}
}

// Event: Display Books
// The event we want to listen for DOMContentLoaded, 
// As soon as the DOM load we invoke BookUI.displayBooks() method
// --------------------------------------------------------------
document.addEventListener('DOMContentLoaded', BookUI.displayBooks());

// Event: Add Book
// ----------------
document.querySelector('#add-book').addEventListener('click', (e) => {
	e.preventDefault();

	// get input values from input foelds
	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const isbn = document.querySelector('#isbn').value;

	// validation
	if (title === '' || author === '' || isbn === ''){
		BookUI.showAlert("Please input all values!", "danger");
		return;
	}
	
	// add book to the list
	const book = new Book(title, author, isbn);
	BookUI.addBookToList(book);

	// show success alert
	BookUI.showAlert("Book added successfully.", "success");

	// clear input fields
	BookUI.clearInputFields();
});

// Event: Remove/Delete Book from List
// -----------------------------------
document.querySelector('#book-list').addEventListener('click', (e) => {
	e.preventDefault();
	BookUI.deleteElementFromBookList(e.target)
});