// Sync code example

function otherFunct() {
    console.log('we are in another funct');
    console.log('do some stuff');
}

// console.log('start');

// otherFunct();

// console.log('end');

// Async code example

// console.log('start');

// setTimeout(() => {
//     console.log('we are in timeout');
// },2000);

// console.log('end');

// CallBack
// console.log('start');

// function loginUser(email, password, callback) {
//     setTimeout(() => {
//         console.log("Now we have the data")
//         callback ({ userEmail: email});
//     },3000);
// };

// function getUserVideos(email, callback) {
//     setTimeout(() => {
//         callback (['V1','V2','V3'])
//     }, 2000);
// };

// function videoDetails(video, callback) {
//     setTimeout(() => {
//         callback ('Title of the video')
//     },2000);
// };

// let user = loginUser("mmaung@gmail.com", 123456, (user) => {
//     console.log(user);
//     getUserVideos(user.userEmail, (videos) => {
//         console.log(videos);
//         videoDetails(video[0], (Title) => {
//             console.log(Title);
//         });
//     });
// });
// console.log(user);

// console.log('finish');

// Promise
// console.log('start');

function loginUser(email, password) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Now we have the data")
            resolve ({ userEmail: email});
        },3000);
    });
};

function getUserVideos(email) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve (['V1','V2','V3'])
        }, 2000);
    });
};

function videoDetails(video) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve ('Title of the video')
        },2000);
    });
};

// loginUser('rand','iridiamthegreat')
//     .then(user => getUserVideos(user.email))
//     .then(videos => videoDetails(videos))
//     .then(detail => console.log(detail));   

// console.log('finish');

// Async Await
// loginUser('rand','iridiamthegreat')
//     .then(user => getUserVideos(user.email))
//     .then(videos => videoDetails(videos))
//     .then(detail => console.log(detail)); 

async function displayUser() {
    try {
        let userID = await loginUser('rand', 123345);
        let videos = await getUserVideos(userID.userEmail);
        let detail = await videoDetails(videos);
        console.log(detail);
    } catch (error) {
        console.log('Something went wrong')
    }
}    
displayUser();

// Promise All
// let yt = new Promise(resolve => {
//     setTimeout(() => {
//         console.log("getting some stuff from youtube")
//         resolve({ videos: [1,2,3,4,5] })
//     },2000);
// });

// let fb = new Promise(resolve => {
//     setTimeout(() => {
//         console.log("getting some stuff from facebook")
//         resolve({ users: "Name" })
//     },2000);
// });

// Promise.all([yt,fb])
//     .then(result => console.log(result));