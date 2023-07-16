const prompt=require("prompt-sync")();
let num1 = Number(prompt("enter a number  "));
let num2=Number(prompt("Enter a second number  "));
const operator=prompt("Enter operator you want to perform +, -, *, /    ");
// make the variable that store the result 
let result;

switch(operator){
    case "+":
        result=num1+num2;
        console.log(result);
        break;
    case "-":
        result=num1-num2;
        console.log(result);
        break;
    case "*":
        result=num1*num2;
        console.log(result);
        break;
    case "/":
        result=num1/num2;
        console.log(result);
        break;
    default:
        console.log("You Entered the invalid operator");
}