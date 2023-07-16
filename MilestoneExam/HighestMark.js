// prompt define 
const prompt=require("prompt-sync")();

// we finds the highest marks of five students

// first we take input five marks of student 
let marks=[5];
for(let i=0;i<5;i++){
    marks[i]=Number(prompt("Enter the "+(i+1)+" Number  "));
}
// the input arrays is 
console.log("input array is " ,marks);

let highest_mark=0;
// iterate the array 
// find the highest_mark
for(let i=0;i<6;i++){

    // we use the ternary operator 
    (marks[i]>highest_mark)?(highest_mark=marks[i]):i;
}

console.log("highest marks in exisisting array ",highest_mark)