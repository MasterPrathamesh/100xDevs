let a = 1;
const b = 2; // const is a constant variable
// once the variable is constant, it cannot be changed
// b = 3; It will give TypeError because b is a constant variable.
// b = 3;
console.log(a);
console.log(b);

// Let's understand the difference between Strings,Numbers,Booleans. 
// Strings are enclosed in single quotes or double quotes.
// for ex : 
let firstName = "Prathamesh";
let age = 21;
let isMarried = false;

console.log("This persons name is " + firstName + " and his age is " + age + " and he's married status is " + isMarried);

// understanding the if-else statements. 
if (isMarried) {
    console.log("This person is Married");
} else {
    console.log("This person is not Married");
}

// understanding for loop. 
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// Understanding Arrays. 
let personArray = ["Prathamesh", "Rajesh", "Deshmukh"];
console.log(personArray[0]);
console.log(personArray[1]);
console.log(personArray[2]);
console.log(personArray);

// let's understand arrays with another example. 
const ages = [21, 22, 23, 24, 25];

for (let i = 0; i < ages.length; i++) {
    if (ages[i] % 2 == 0) {
        console.log(ages[i] + "  " + "is even ");
    } else {
        console.log(ages[i] + "  " + "is odd ");
    }
}

// understanding objects.	
let person = {
    firstName: "Prathamesh",
    lastName: "Deshmukh",
    gender: "Male"
}
console.log(person["firstName"]);


// we can also use the another approach to array of objects.
let allUsers = [{
    firstName: "Prathamesh",
    lastName: "Deshmukh",
    gender: "Male"
}, {
    firstName: "Rajesh",
    lastName: "Deshmukh",
    gender: "Male"
}, {
    firstName: "Sneha",
    lastName: "Deshmukh",
    gender: "Female"
}]

for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i]["gender"] == "male") {
        console.log(allUsers[i]["firstName"]);
    } else {
        console.log(allUsers[i]["firstName"]);
    }
}


// now let's understand the functions.
function addition(a, b) {

    const sumValue = a + b;
    return sumValue;
}

const value = addition(20, 30);
console.log("The addition is : " + value);


// now let's understand the functions with another example.
function isEven(a) {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

const isEvenValue = isEven(20);
console.log(isEvenValue);





















