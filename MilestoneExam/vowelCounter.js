// count the vowel in  person name 
let prompt=require("prompt-sync")();

// first take input from user 
let name=prompt("Enter Your Name  ");

// make the vowel array 
const vowel_array=['a','e','i','o','u'];

// make a counter variable that counts the vowel present in name 
let count=0;

// first iterate in name string 
for(i of name.toLowerCase()){

    // then iterate in vowel_array 
    for(j of vowel_array){
        if(i==j)
           count++;
    }
}

console.log(count);