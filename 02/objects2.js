const tinderUser = new Object()
tinderUser.id = "124334fd"
tinderUser.email = "fcdmdmi@gmail.com"


console.log(tinderUser);

const reqularUser = {
    email: "vikas@gamil.com",
    fullname: {
        username: {
            name: "vikas",
            lastname: "yadav",
        },
        tel: 700777707
    }
}
console.log(reqularUser);
console.log(reqularUser.fullname.username.lastname)

// combine of obj1 and obj2
 const obj1 = { 1:"a",2:"b",3:"c",4:"d"}
 const obj2 = {5:"f",6:"t"};

 const obj3 = Object.assign({},obj1, obj2)
 console.log(obj3);
 
 const course =  {
    coursename: "jai sree ram",
    price: "999",
    courseInstructor: "hitesh"
 }

 const {courseInstructor: instructer} = course

 console.log(instructer);

 