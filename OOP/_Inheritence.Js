// Constructor 
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
};

// getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
};

// class Magazine {
//     constructor(title, author, year, month) {
//         Book.call(this.title,author,year);

//         this.month = month;
//     }
// }

// Inheritence Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instatiate Magazine Object
let mag1 = new Magazine('Mag One', 'Rand', '2021', 'March');

//Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);