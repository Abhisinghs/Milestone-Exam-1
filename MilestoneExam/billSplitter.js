// set the prompt 
let prompt=require("prompt-sync")();
let cost_of_each_dish=[100,70,50,200];
let people_share=Number(prompt("enter the number for sharing people :"));
let sum=0;

let hi=cost_of_each_dish.forEach((el)=> sum+=el);
console.log( "total bill is ",hi);

let total_bill=(sum/people_share);
console.log("Charge per people is ",total_bill);