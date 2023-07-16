const prompt=require("prompt-sync")();
let user_enter_passward = prompt("Enter Your Passward  ");
let user_confirmed_passward="abhisheksingh35716@gamil.com";

//checks the enter passward is correct or not

if(user_enter_passward==user_confirmed_passward){
    console.log("Passward Matched");
    console.log("Password validation Successfull")
}
else{
    console.log("Passward did not Match");
    console.log("Password validation Unsuccessfull")
}