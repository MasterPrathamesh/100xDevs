// understanding the .length() method. 
function findLength(str) {
    console.log("Original string  is : " + str);
    console.log(" The length of the string is : " + str.length);
}

const str = findLength("Prathamesh");
console.log(str);

// understanding indexOf() method.
// function findIndexOf(original, target) {
//     console.log("Original string is : " + str);
//     console.log("Targete string is : " + target);
//     console.log("The index of the target string is : " + original.indexOf(target));

// }

// // const word = findIndexOf("Prathamesh Deshmukh ", "Deshmukh");
// console.log(word);


// understanding lastindexOf() method. 
function findLastIndexOf(original, target) {
    console.log("Original string is : " + original);
    console.log("Targeted string is : " + target);
    console.log("The index of the target string is : " + original.lastIndexOf(target));

}

const word = findLastIndexOf("Prathamesh Deshmukh Deshmukh ", "Deshmukh");
console.log(word);

// understanding the slice() method.
function findSlice(original , start , end){
    console.log("The original string is : " + original);
    console.log("The sliced string is : " + original.slice(start,end));
}

findSlice("Prathamesh Deshmukh", 0 , 15);

// understanding the replace() method. 
let newStr = "Hello World "; 
console.log("After using the replace method :"); 
console.log(newStr.replace("World", "Javascript")); 


// understanding the split function. 
let newString = "Hello my name is Prathamesh Deshmukh"; 
console.log("The Original String is : " + newString); 
let newArr = newString.split(" ");
console.log(newArr); 

// understanding the toUpperCase() method and toLowerCase() method.
let newString1 = "hey there ! how are YOU  ?"; 
console.log("The original string is : " + newString1); 
console.log(" The uppercase string is : " + newString1.toUpperCase()); 
console.log(" The lowercase string is : " + newString1.toLowerCase()); 


// understanding parseInt() method. 
let newString2 = "32px"; 
let newString3 = "4.123"; 
let newString4 = "5830"; 

console.log(" The parsed integer value of newString2 is : " + parseInt(newString2)); 
console.log("The parsed int value of newString3 is : " + parseInt(newString3)); 
console.log("The parsed int value of newString4 is : " + parseInt(newString4));

// understanding the parseFloat() method. 
let newString5 = "32px";
let newString6 = "4.123";
let newString7 = "5830";

console.log(" The parsed float value of newString5 is : " + parseFloat(newString5));
console.log("The parsed float value of newString6 is : " + parseFloat(newString6));
console.log("The parsed float value of newString7 is : " + parseFloat(newString7));


// understanding more about Arrays. 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
arr.push(11); 
console.log(arr); 


// understanding the pop() method.
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr1.pop();
console.log(arr1); 


// understanding the concat() method. 
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr3 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let arr4 = arr2.concat(arr3); 
console.log(arr4); 

// understanding JSON.parse and JSON.stringify.
let json = '{"name":"Prathamesh", "age":20, "city":"Mumbai"}';
let obj = JSON.parse(json);
console.log(obj["city"]);

let json1 = {
    newName: "Prathamesh", 
    gender : "Male"
}

console.log(JSON.stringify(json1));












