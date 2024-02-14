const user = {
    username: "vikas",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }
}
user.welcomeMessage()
function chai(){
    console.log(this);
}
chai();