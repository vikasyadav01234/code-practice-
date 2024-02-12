//single ton
// object.create
 
//object lterals
const mySym = symbol("key1");
const jsUser = {
    name: "Vikas Yadav",
    lacation: "Jaipur,Rajasthan",
    [mySym]: "mykey1",
    age: 20,
    email: "yadav2911vikas@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser.mySym);