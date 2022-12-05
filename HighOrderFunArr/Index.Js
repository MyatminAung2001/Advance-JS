let companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

let ages = [33, 12, 20, 16, 5 ,54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for //
// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// forEach //
// companies.forEach(function(company) {
//     console.log(company.name)
// });

// filter //
//Get 21 And Older
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

let canDrink = ages.filter(age => age >= 21);

//Filter Retail Company
// let retailCompanies = companies.filter(function (company) {
//     if (company.category === 'Retail') {
//         return true;
//     }
// });

let retailCompanies = companies.filter(company => company.category === 'Retail');

//Get 80s Companies
let eightiesCompanies = companies.filter(company => (company.start >= 
1980 && company.start < 1990));

//Get Companies That Lasted 10 Years Or More
let lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

// map // 
//Create Array Of Companies Name
let companyNames = companies.map(function (company) {
    return company.name;
});

// let testMap = companies.map(function (company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

let testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

let agesSquare = ages.map(age => Math.sqrt(age));
let agesMultiply = ages.map(age => age * 2);

let ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);

// console.log(ageMap);

// sort //
//Sort Companies by start year
// let sortedCompanies = companies.sort(function (c1,c2) {
//     if (c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

let sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));

//Sort ages
let sortAges = ages.sort((a,b) => a - b);
// ascending = a - b
// descending = b - a

// reduce //
// let agesSum = 0;
// for (let i = 0; i < ages.length; i++) {
//     agesSum += ages[i];
// };

// let agesSum = ages.reduce(function (total, age) {
//     return total + age;
// }, 0 );

let agesSum = ages.reduce((total,age) => total + age, 0);


//Get Total Year For All Companies
// let totalYears = companies.reduce(function (total,company) {
//     return total + (company.end - company.start);
// }, 0);

let totalYears = companies.reduce((total,company) => total + (company.end - company.start), 0);

//Combine Methods

let combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a,b) => a- b)
    .reduce((a,b) => (a + b), 0);

console.log(combined);
