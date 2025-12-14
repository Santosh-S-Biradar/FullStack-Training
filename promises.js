//  console.log("first");
//  console.log("next")
//  setTimeout(function(){
//    console.log("second");
//  },0)
//  console.log("third");

//an object in js which represent eventual completion async task
//pending , fullfilled , rejected 

//const promiseOne = new Promise(function(resolve,reject){
    //async task or cryptography
//     setTimeout(function(){
//         console.log("Promise one completed");
//         resolve();
//     },1000);
// });

// promiseOne.then(function(){
//     console.log("Promise One resolved");
// });

// new Promise(function(resolve,rejected){
//     setTimeout(function(){
//         console.log("Async task 2 complected");
//         resolve();
//     },2000)
// });
// promiseOne.then(function(){
//         console.log("Promise 2 got resolved")
// });

// const promiseThree = new Promise(function(resolve,rejected){
//     setTimeout(function(){
//         console.log("Promise three")
//         resolve({name:"John",email:"John@gmail.com"})
//     },1000)
// });
// promiseThree.then(function(user))
// {
// console.log(user.name);
// });

// const promiseFour=new Promise(functio(resolve,reject){
//     console.log()
// })

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;

//     if (!error) {
//       resolve({ name: "John", email: "john@gmail.com" });
//     } else {
//       reject("something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then(function (user) {
//     console.log(user);
//     return user.name;
//   })
//   .then(function (username) {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("Promise is either rejected or accepted"));

// async and await

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ name: "John", email: "john@gmail.com" });
//     } else {
//       reject("something went wrong");
//     }
//   }, 1000); 
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// fetch
//GET , POST , PUT ,PATCH ,DELETE

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((Response)=>Response.json())
// .then((data)=>console.log(data))
// .catch((e=> console.log(e)));

// async function fetchUsers() {

// try {
// response = await fetch ("https://jsonplaceholder.typicode.com/users/1;
// const data = await response.json();
// console.log(data); } catch (error) {
// console.log((error));
// }
// }
// fetchUsers();

fetch("https://jsonplaceholder.typicode.com/users/1",{
  method:"PUT",
  headers:{
    "Content-Type": "application/json"
  },
  body:JSON.stringify({
    id:1,
    title: "Updated user",
    userId:1,
  }),
}).then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error));