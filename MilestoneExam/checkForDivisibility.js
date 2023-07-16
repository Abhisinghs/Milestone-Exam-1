// first set the prompt
let prompt=require("prompt-sync")();

// first take input from user an array form 
// length of an array 
let len=Number(prompt("enter the lenght of array you want to create "));
// create a array 
let num_array=[];

console.log("enter the ",len,"value");
for(let i=0;i<len;i++){
    num_array[i]=Number(prompt());
}

// now print all number that divisible by 3 ,but not 2

console.log("all the number that are divisible by 3,but not 2");
for(num of num_array){
    if((num%3==0) && (num%2!=0)){
        console.log(num);
        continue
    }
}