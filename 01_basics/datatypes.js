"use strict"; //treat all JS code as newer version

let name = "vikas"
let age = 20
let isLoggedIn = false
//number => 2 to power 53
//big int
//string => ""
//boolean => true/false
// null => standalone value
// undefined =>

//symbol => unique

//object

console.log(typeof age)

//stack (premitive), heap (non-premitive)
let myYoutubename = "Vikasyadav.com";

let another = myYoutubename;
console.log(another);
another = "chai or code";
console.log(myYoutubename)
console.log(another)

let userOne = {
    email: "yadav2911@gmail.com",
    upi: "7073964925@fam"
}

let userTwo = userOne;
console.log(userOne);
console.log(userTwo);
userTwo.email = "vikas@gmail.com";
console.log(userOne);
console.log(userTwo);
