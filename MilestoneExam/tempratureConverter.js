let prompt=require("prompt-sync")();

// take temprature in celsius as a input from the user 
const celsius_temp=Number(prompt("Enter temprature in celsius unit "));

// now we convert the temprature in fahrenhiet
// far = 9/5 *celsius +32  
let far_temp=((9/5)*celsius_temp)+32;

// now print the temprature 
console.log("Temprature in Fahrenhiet is ", far_temp);