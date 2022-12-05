// Object Of Protos
let bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function () {
        let years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// Create Object
// let book1 =  Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'Rand';
// book1.year = '2021';

let book1 =  Object.create(bookProtos, {
    title: { value: 'Book One' },
    author: { value: 'Rand' },
    year: { value: '2021' }
});

console.log(book1);