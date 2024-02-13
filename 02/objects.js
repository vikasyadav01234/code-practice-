//single ton
// object.create
 
//object lterals
const mySym = Symbol("key1");
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
console.log(typeof jsUser[mySym]);


jsUser.email = "Vikas@google.com";
//Object.freeze(jsUser)
jsUser.email="vikas@vhatgpt.com";
console.log(jsUser.email);





//functions

jsUser.greeting = function(){
    console.log("Jai Sree Ram Sabhi Ko");
}
jsUser.greetingtwo = function(){
    console.log(`Jai Sree Ram Sabhi Ko ${this.email}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());