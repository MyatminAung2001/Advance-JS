// let posts = [
//     { title: 'Post One' , body: 'This is post one' },
//     { title: 'Post Two' , body: 'This is post two' },
// ];

// function getPosts() {
//     setTimeout( () => {
//         let output = '';
//         posts.forEach( (post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post) {
//     return new Promise((resolve,reject) => {
//         setTimeout( () => {
//             posts.push(post);

//             let error = false;
            
//             if (!error) {
//                 resolve()
//             } else {
//                 reject('Error: Something went wrong');
//             }
//         }, 2000);
//     })
// }

// createPost({ title: 'Post Three' , body: 'This is post three' })
// .then(getPosts)
// .catch( err => console.log(err));

// Async / Await
// async function init() {
//     await createPost({ title: 'Post Three' , body: 'This is post three' });

//     getPosts();
// }
// init();

// Async / Await / Fetch
// async function fetchusers() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');

//     let data = await response.json();

//     console.log(data);
// }
// fetchusers();

// Promise.all
let promise1 = Promise.resolve('Hello world');
let promise2 = 10;
let promise3 = new Promise((resolve,reject) => 
setTimeout(resolve,2000, 'GoodBye'));
let promsie4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());

Promise.all([promise1,promise2,promise3,promsie4]).then(
    values => console.log(values));
