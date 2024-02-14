function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("K");
    console.log("A");
    console.log("S");
}
sayMyName()

function addnumber(n1 ,n2){
    console.log(n1+n2);
}
addnumber(5,0)
function shop(...num1){
    return num1
}

console.log(shop(32,423,32,54,654,65,43,1,124,423,55,234))

const user = {
    username: "vikas yadav",
    age: 20
}

function logd(anyobject){
    console.log(`logginde user ${anyobject.username} and age of user is ${anyobject.age}`);

}

logd(user);