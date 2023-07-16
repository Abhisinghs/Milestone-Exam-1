const prompt=require("prompt-sync")();
//first take input name as a string 
let name=prompt("Enter your name ");
let valid_name;

// we use ternary operator as program require 
(name[0]>="a" || name[0]<="z")? console.log("valid name is ",change_first_letter()):console.log("first letter captial already",name);

function change_first_letter(){
    valid_name=name[0].toUpperCase()+name.slice(1).toLowerCase();
    return valid_name;
}
