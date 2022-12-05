class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge () {
        let years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise (newYear) {
        this.year = newYear;
        this.revise = true;
    }

    static topBookStore () {
        return 'Rand & Noble'
    }
}

// Instantiate Object
let book1 = new Book('Book One', 'Rand', '2012');

// console.log(book1);
// book1.revise('2018');
// console.log(book1);

console.log(Book.topBookStore());


  