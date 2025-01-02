// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async task is completed')
//     }, (1000));
// });


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve({username: "chia", email: "example@email.com"})
//     console.log("promise executed")
//     }, 1000);
// })


async function  getAllUsers(params) {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log("EL", error)
    }
}
getAllUsers()
 