// let s1 = 'Hello';
// console.log(typeof s1);

// let s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);
// alert('Hello')

// console.log(navigator.appVersion);

// Object Literals
let book1 = {
    title: 'Book One',
    author: 'Rand',
    year: '2010',
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

let book2 = {
    title: 'Book Two',
    author: 'Christopher',
    year: '2000',
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

// console.log(book2.getSummary());
// console.log(Object.values(book1));
// console.log(Object.keys(book1));