// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

// Instatiate an Object
let book1 = new Book('Book One', 'Rand', '2013');
let book2 = new Book('Book Two', 'Jame', '2010');

console.log(book2);