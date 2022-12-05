// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
};

// getAge
Book.prototype.getAge = function () {
    let years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

// getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

// revise / change the year
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revise = true;
}

// Instantiate an Object
let book1 = new Book('Book One', 'Rand', '2013');
let book2 = new Book('Book Two', 'Jame', '2010');

console.log(book1);
book2.revise('2021');
console.log(book2)