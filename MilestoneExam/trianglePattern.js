// we use two loop to make a triangle pattern 

let prompt=require("prompt-sync")();
let len = Number(prompt("enter a row number to make pattern  "));
// it define row   
for(let i=0;i<len;i++){
    astric="";

    // it define column
    for(j=len;j>i;j--){
        astric+="* ";
    }
    console.log(astric);
}
