const prompt=require("prompt-sync")();
let color1 = prompt("enter a first color   ");
let color2=  prompt("Enter a second color  ");

let result;

switch(true){
    case (color1=="red" && color2=="blue"):
        result="purple";
        console.log("Color combination makes "+result);
        break;

    case (color1=="red" && color2=="yellow"):
        result="orange";
        console.log("Color combination makes "+result);
        break;

    case (color1=="blue" && color2=="yellow"):
        result="green";
        console.log("Color combination makes "+result);
        break;

    default:
        console.log("Invalid color combination");
}