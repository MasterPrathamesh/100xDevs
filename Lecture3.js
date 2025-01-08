// understanding setTimeout Asynchronous function. 
// function findSum(n) {
//     let ans = 0;
//     for (let i = 0; i <= n; i++) {
//         ans += i;
//     }
//     return ans;
// }

// function findSumTill100() {
//     console.log(findSum(100));
// }

// setTimeout(findSumTill100, 1000);

// console.log("Hello JavaScript");


// Below are some commmon async functions. 
// understanding fs.readFile - to read a file from your filesystem . 
// understanding Fetch - to fetch some data from an API endpoint. 

// accessing a textfile  through fs. 
// const fs = require("fs");
//file system module.

// fs.readFile("lecture3.txt","utf-8", function(err,data){
//     console.log(data);
// })

//for ex : now let's print some message in console.log() and see which will run first.
// console.log("Hey JS ! How are you ?");
//now let's run the file and see which will run first.
// And console.log runs first because readFile is an async function , that means it will take time to read a text file from your filesystem , so it will run after console.log() .
// till that time console.log() will run. 


// Now let's understand Promises.
// Promises are used to handle asynchronous operations in JavaScript.
// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation, and its resulting value.
// Promises are used to make code more readable and easier to maintain.// Promises are also used to avoid callback hell.// Promises are used to make code more readable and easier to maintain.

//until now, we've only used other people's asynchronous functions , how can we create an asynchronous function of owr own ?
// their's an ugly way for doing this.
// const fs = require("fs");

// my own asynchronous function. It is just a wrapper on top of another async function, which is fine. 
// usually, all async functions you will write will be on top of JS provided async functions like setTimeout, fs.readFile etc.
// function PrathamsReadFile(cb){
//     fs.readFile("lecture3.txt","utf-8",function(err,data){
//         cb(data);
//     });
// }

//callback function to call. 
// function onDone(data){
//     console.log(data)
// }

// PrathamsReadFile(onDone);

// ===============================================================
//  Now we'll see the Cleaner way of doing this.
//  using Promises.
// const fs = require("fs");

// my own asynchronous function.
// function PrathamsReadFile(){
//     return new Promise(function(resolve){
//         fs.readFile("lecture3.txt","utf-8",function(err,data){
//             resolve(data);
//     });
// })
// }

// callback function to call 
// function onDone(data){
//     console.log(data);
// }

// PrathamsReadFile().then(onDone);


// =================================================================================
// Now let's see how to use async await.
function PrathamsReadFile() {
    let p = new Promise(function (resolve) {
        //do some async logic here .
        setTimeout(function () {
            resolve("Hi Pratham")
        }, 3000)
    });
}

async function main() {
    let value = await PrathamsReadFile();
    console.log("Hi Pratham How are you ?");
}

main();
console.log("After main function");
