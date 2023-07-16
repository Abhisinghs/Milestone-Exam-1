// from input we require 
let prompt=require("prompt-sync")();

// now we have three category of car and the charge per day 
//we can say rental cost 
//Economy = Rs. 4000 /- per day
// Midsize = Rs. 10,000 /- per day
//Luxury = Rs. 20,000 /- per day.

// now we take two input from user first is what type of car 
// and how many days to need it 

let car_category=prompt("Which type of car you need ");
let rent_days;

let total_rental_cost=null;

switch(car_category){
    case "Economy":
        rent_days=Number(prompt("How many days to take on rent"));
        total_rental_cost= (4000*rent_days);
        break;
    case "Midsize":
        rent_days=Number(prompt("How many days to take on rent"));
        total_rental_cost= (10000*rent_days);
        break;
    case "Luxury":
        rent_days=Number(prompt("How many days to take on rent"));
        total_rental_cost= (20000*rent_days);
        break;
    default:
        console.log(" !sorry you entered the wrong car type ");
}

console.log("your total rental cost is ",total_rental_cost);
