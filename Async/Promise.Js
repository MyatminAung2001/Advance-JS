let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('got the user');
        // resolve({ user: "rand" });
        reject(new Error('Something went wrong'));
    },2000);
});


promise
    .then(user => {
    console.log(user);})
    .catch(err => console.log(err.message));