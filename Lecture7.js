// understanding map , filter and arrow function . 
// previously we were using the basic functions , like : 
// function square(num){
//     return num * 2 ; 
// }

// let ans = square(34);
// console.log(ans);

// The above is the basic function. 
// Now we will use arrow function to do the same thing.

// const square = (num1,num2) => {
//     return num1 * num2; 
// }

// let sum = square(23,45);
// console.log(sum);

// This wall all about arrow function.
// Now we'll understand the map function.
// now for ex: we have an array [1,2,3,4,5]
// we want to square each element of the array.
// so we will use map function.

// const arr = [1,2,3,4,5];
// function square(i){
//     return i * i ; 
// }

// const ans = arr.map(square);
// console.log(ans);

// the above was one way to use the map function . 
// in the parameter of a map function we can directly define a function. Here's how we can do it. 

// const arr = [1,3,4,5,6];
// const ans = arr.map(function square(i){
//     return i * i ; 
// });

// console.log(ans);

// This was all about map function.

// Now we'll understand the filter function.
// let's suppose you've an array of numbers.
// you want to filter out the even numbers from the array.
// so we will use the filter function.

// const arr = [1,2,3,4,5,6,7,8,9,10];

// function filteringArray(arr){
//     if(arr % 2 == 0){
//         return true ; 
//     }else{
//         return false; 
//     }
// }

// const ans = arr.filter(filteringArray);
// console.log(ans); 

// Here's an another way of doing the same thing 
// Just pass the function as a parameter to the filter function.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const ans = arr.filter(function filteringArray(arr) {
    if (arr % 2 == 0) {
        return true;
    } else {
        return false;
    }
});

console.log(ans);






















