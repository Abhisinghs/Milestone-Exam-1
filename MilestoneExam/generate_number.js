// we create a random number genretor 
// we make a self invoking function with arrow function use
// random number between 1 to 100 

// it generate random number it self but at once 
(()=>console.log("number is ",Math.floor(Math.random()*100)))();

// it generate random number  repeatedly between 1 to 100 with 3 sec time delay 
setInterval(()=>{
    console.log("number is ",Math.floor(Math.random()*100));
},3000);
